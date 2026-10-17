/* AI tutor: right-hand chat pane. Select text in the lesson, click "Ask AI", and chat with Claude about it.
   Talks to the local server's /api/chat (chat-api.js), which holds the API key and streams the reply back
   as newline-delimited JSON. The conversation is kept for this browser tab (sessionStorage). */
(() => {
  const $ = id => document.getElementById(id);
  const pane = $('chatPane'), log = $('chatLog'), text = $('chatText'), form = $('chatForm');
  const sendBtn = $('chatSend'), askBtn = $('askAi'), toggle = $('chatToggle');
  const ctxBox = $('chatCtx'), ctxText = $('chatCtxText'), ctxSrc = $('chatCtxSrc'), quick = $('chatQuick');
  const MAX_SELECTION = 4000;
  const KEY = 'cfaEcon.chat.v1';
  const fromFile = location.protocol === 'file:';

  let messages = [];      // [{ role, content, selection?, source? }]
  let pending = null;     // { text, source } attached to the next question
  let controller = null;  // AbortController while a reply is streaming
  let status = null;      // { sdk, configured, model } from the server

  try { messages = JSON.parse(sessionStorage.getItem(KEY)) || []; } catch (e) { messages = []; }
  const persist = () => { try { sessionStorage.setItem(KEY, JSON.stringify(messages)); } catch (e) { /* ignore */ } };

  /* ---------- Where the learner is (sent as context) ---------- */
  function location_() {
    const h1 = document.querySelector('.mod-head h1');
    const tab = document.querySelector('.tablist a[aria-current="page"]');
    if (!h1) return { module: 'Home dashboard', section: '' };
    return { module: h1.textContent.trim(), section: tab ? tab.textContent.replace(/^\d+\s·\s/, '').replace('✓', '').trim() : '' };
  }

  /* ---------- Minimal, safe Markdown → HTML (escape first, then format) ---------- */
  const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function inline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, '$1<em>$2</em>')
      .replace(/(^|[^_\w])_([^_\n]+)_(?!\w)/g, '$1<em>$2</em>');
  }
  function markdown(src) {
    const out = [];
    let list = null, para = [];
    const flushPara = () => { if (para.length) { out.push(`<p>${para.map(inline).join('<br>')}</p>`); para = []; } };
    const flushList = () => { if (list) { out.push(`<${list.tag}>${list.items.map(i => `<li>${inline(i)}</li>`).join('')}</${list.tag}>`); list = null; } };
    for (const line of src.split('\n')) {
      let m;
      if ((m = line.match(/^\s*#{1,6}\s+(.*)/))) { flushPara(); flushList(); out.push(`<h4>${inline(m[1])}</h4>`); }
      else if ((m = line.match(/^\s*[-*•]\s+(.*)/))) { flushPara(); if (!list || list.tag !== 'ul') { flushList(); list = { tag: 'ul', items: [] }; } list.items.push(m[1]); }
      else if ((m = line.match(/^\s*\d+[.)]\s+(.*)/))) { flushPara(); if (!list || list.tag !== 'ol') { flushList(); list = { tag: 'ol', items: [] }; } list.items.push(m[1]); }
      else if (!line.trim()) { flushPara(); flushList(); }
      else { flushList(); para.push(line); }
    }
    flushPara(); flushList();
    return out.join('');
  }

  /* ---------- Rendering ---------- */
  function bubble(m) {
    const el = document.createElement('div');
    el.className = 'msg ' + m.role;
    if (m.role === 'user') {
      el.innerHTML = (m.selection ? `<span class="quote">“${esc(m.selection.slice(0, 280))}${m.selection.length > 280 ? '…' : ''}”</span>` : '') + esc(m.content);
    } else if (m.role === 'assistant') {
      el.innerHTML = markdown(m.content);
    } else {
      el.className = 'msg error';
      el.textContent = m.content;
    }
    return el;
  }

  function renderLog() {
    log.innerHTML = '';
    if (fromFile) {
      log.innerHTML = `<div class="chat-setup"><strong>The AI tutor needs the Study Hub server.</strong>
        <p>Start it by double-clicking <code>Start Study Hub.command</code> (Mac) or running <code>npm start</code> in the <code>cfa-economics</code> folder, then reopen <code>index.html</code>.</p></div>`;
      return;
    }
    if (status && (!status.sdk || !status.configured)) {
      log.innerHTML = `<div class="chat-setup"><strong>Set up the AI tutor (one time)</strong><ol>
        ${status.sdk ? '' : '<li>In Terminal, in the <code>cfa-economics</code> folder, run <code>npm install</code>.</li>'}
        <li>In the <code>cfa-economics</code> folder, copy <code>.env.example</code> to a new file named <code>.env</code>.</li>
        <li>Open <code>.env</code> and paste your Anthropic API key after <code>ANTHROPIC_API_KEY=</code>.</li>
        <li>Restart the Study Hub server (close its window and double-click <code>Start Study Hub.command</code> again).</li></ol>
        <p class="muted">The key stays on your computer: only the local server reads it, never this page.</p></div>`;
      return;
    }
    if (!messages.length) {
      log.innerHTML = `<div class="chat-empty"><p><strong>Hi! I'm your CFA Economics tutor.</strong></p>
        <p>Select any text in the lesson and click <strong>✨ Ask AI</strong>, or just type a question below.</p>
        <div class="starters">
          <button class="icon-btn" data-starter="Summarise the key points of the section I'm reading in 5 bullets.">Summarise this section</button>
          <button class="icon-btn" data-starter="Give me 3 quick CFA-style practice questions on what I'm studying, one at a time.">Practice questions</button>
          <button class="icon-btn" data-starter="What are the formulas I must memorise for this topic?">Key formulas to memorise</button>
        </div></div>`;
      return;
    }
    messages.forEach(m => log.appendChild(bubble(m)));
    log.scrollTop = log.scrollHeight;
  }

  function setBusy(busy) {
    sendBtn.textContent = busy ? 'Stop' : 'Send';
    sendBtn.classList.toggle('primary', !busy);
    text.disabled = false;
  }

  function showPending() {
    ctxBox.hidden = quick.hidden = !pending;
    if (pending) {
      ctxText.textContent = `“${pending.text.slice(0, 220)}${pending.text.length > 220 ? '…' : ''}”`;
      ctxSrc.textContent = pending.source ? `from ${pending.source}` : '';
    }
  }

  /* ---------- Open / close ---------- */
  let statusReq = null;
  function loadStatus() {
    if (fromFile || status) return Promise.resolve();
    return statusReq ||= fetch('api/chat/status', { cache: 'no-store' })
      .then(r => r.json()).catch(() => ({ sdk: false, configured: false }))
      .then(st => { status = st; if (!controller) renderLog(); });   // never redraw over a reply in progress
  }
  function open() {
    document.body.classList.add('chat-open');
    pane.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    renderLog(); loadStatus();
    setTimeout(() => text.focus(), 220);
  }
  function close() {
    document.body.classList.remove('chat-open');
    pane.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', open);
  $('chatClose').addEventListener('click', close);
  $('chatNew').addEventListener('click', () => {
    if (controller) controller.abort();
    messages = []; pending = null; persist(); showPending(); renderLog();
  });
  $('chatCtxClear').addEventListener('click', () => { pending = null; showPending(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('chat-open') && !controller) close(); });

  /* ---------- Sending + streaming ---------- */
  async function send(content) {
    content = content.trim();
    if (!content || controller || fromFile) return;
    await loadStatus();
    if (controller) return;
    if (!status.sdk || !status.configured) return renderLog();
    const where = location_();
    const msg = { role: 'user', content };
    if (pending) { msg.selection = pending.text; msg.source = pending.source; }
    messages.push(msg);
    pending = null; showPending();
    text.value = ''; autosize();
    persist(); renderLog();

    const reply = { role: 'assistant', content: '' };
    const el = document.createElement('div');
    el.className = 'msg assistant';
    el.innerHTML = '<span class="typing" aria-label="Thinking"><i></i><i></i><i></i></span>';
    log.appendChild(el); log.scrollTop = log.scrollHeight;

    controller = new AbortController();
    setBusy(true);
    let frame = 0, failed = null;
    const paint = () => {
      frame = 0;
      const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 80;
      el.innerHTML = markdown(reply.content);
      if (nearBottom) log.scrollTop = log.scrollHeight;
    };
    try {
      const res = await fetch('api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messages.filter(m => m.role !== 'error'), module: where.module, section: where.section }),
        signal: controller.signal
      });
      if (!res.ok || !res.body) throw new Error(`Server error (${res.status}).`);
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = '';
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let nl;
        while ((nl = buf.indexOf('\n')) >= 0) {
          const line = buf.slice(0, nl); buf = buf.slice(nl + 1);
          if (!line.trim()) continue;
          const ev = JSON.parse(line);
          if (ev.type === 'text') { reply.content += ev.text; if (!frame) frame = requestAnimationFrame(paint); }
          else if (ev.type === 'error') failed = ev.message;
        }
      }
    } catch (e) {
      if (e.name !== 'AbortError') failed = 'Could not reach the Study Hub server. Is it still running?';
    }
    if (frame) cancelAnimationFrame(frame);
    controller = null; setBusy(false);
    if (reply.content) { paint(); messages.push(reply); }
    else el.remove();
    if (failed) { messages.push({ role: 'error', content: failed }); log.appendChild(bubble(messages[messages.length - 1])); }
    // a stopped or failed turn leaves an unanswered question at the end; that's fine, the next send continues from it
    persist();
    log.scrollTop = log.scrollHeight;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (controller) { controller.abort(); return; }   // the button reads "Stop" while streaming
    send(text.value || (pending ? 'Explain this.' : ''));
  });
  text.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); form.requestSubmit(); }
  });
  const autosize = () => { text.style.height = 'auto'; text.style.height = Math.min(text.scrollHeight, 160) + 'px'; };
  text.addEventListener('input', autosize);
  quick.addEventListener('click', e => { const b = e.target.closest('[data-q]'); if (b) send(b.dataset.q); });
  log.addEventListener('click', e => { const b = e.target.closest('[data-starter]'); if (b) send(b.dataset.starter); });

  /* ---------- "Ask AI" button on text selection in the middle pane ---------- */
  const main = $('main');
  let selTimer = 0;
  function currentSelection() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
    const t = sel.toString().replace(/\s+/g, ' ').trim();
    if (t.length < 3) return null;
    const range = sel.getRangeAt(0);
    const node = range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    if (!main.contains(node) || node.closest('input, textarea, .cp-overlay')) return null;
    return { text: t, rect: range.getBoundingClientRect() };
  }
  function placeAsk() {
    const s = currentSelection();
    if (!s) { askBtn.hidden = true; return; }
    askBtn.hidden = false;
    const w = askBtn.offsetWidth || 90, h = askBtn.offsetHeight || 30;
    let top = s.rect.bottom + 8, left = s.rect.right - w;
    if (top + h > innerHeight - 8) top = s.rect.top - h - 8;
    left = Math.max(8, Math.min(left, innerWidth - w - 8));
    askBtn.style.top = `${Math.max(8, top)}px`;
    askBtn.style.left = `${left}px`;
  }
  document.addEventListener('selectionchange', () => { clearTimeout(selTimer); selTimer = setTimeout(placeAsk, 180); });
  window.addEventListener('scroll', () => { askBtn.hidden = true; }, { passive: true });
  askBtn.addEventListener('mousedown', e => e.preventDefault());   // keep the selection while clicking
  askBtn.addEventListener('click', () => {
    const s = currentSelection();
    if (!s) return;
    const where = location_();
    pending = {
      text: s.text.length > MAX_SELECTION ? s.text.slice(0, MAX_SELECTION) + ' […]' : s.text,
      source: [where.module, where.section].filter(Boolean).join(' → ')
    };
    askBtn.hidden = true;
    window.getSelection().removeAllRanges();
    showPending(); open();
  });

  $('chatNote').textContent = fromFile ? '' : 'Enter to send · Shift+Enter for a new line. Answers by Claude; your questions and selected text are sent to Anthropic.';
  showPending();
})();
