/* CFA Level I Economics study hub: routing, progress tracking, dashboard and assessment renderers.
   Each module file pushes a definition onto window.MODULES:
   { id, lm, lmTitle, title, subtitle,
     learn: [{ id, label, html, init?(panel) }],
     mcq: [{ q, o: [..4], a, e }], match: { pairs: [[term, description]] },
     tf: [{ s, a: 'True'|'False', e }], classify: { choices: [..], items: [{ s, a, e }] },
     caseStudy: { html } }   // case html uses .reveal buttons followed by a hidden .model block */
(() => {
  const MODULES = window.MODULES;
  const ASSESS = [
    { id: 'mcq', label: 'MCQ Quiz' },
    { id: 'match', label: 'Match the Following' },
    { id: 'tf', label: 'True / False' },
    { id: 'classify', label: 'Classify It' },
    { id: 'case', label: 'Case Study' }
  ];
  const TYPE_LABELS = { mcq: 'MCQ', match: 'Match the Following', tf: 'True / False', classify: 'Classify It', video: 'Video checkpoints' };
  const LETTERS = 'ABCDEFGHIJKL';
  // The static package (no Node server, no AI tutor) sets window.HUB_EDITION = 'static' in its index.html
  const STATIC = window.HUB_EDITION === 'static';
  const PAIR_COLORS = ['#2f6fdf', '#d9480f', '#2b8a3e', '#ae3ec9', '#c2255c', '#0c8599', '#b35c00', '#5f3dc4', '#5c7cfa', '#868e96'];

  const $main = document.getElementById('main');
  const $side = document.getElementById('sidebar');

  /* ---------- Progress store ---------- */
  const KEY = 'cfaEcon.v1';
  let store = load();
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.v === 1) return s;
    } catch (e) { /* storage unavailable */ }
    return { v: 1, visited: {}, ans: {}, last: null };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ } }
  function modAns(id) {
    const a = store.ans[id] || (store.ans[id] = {});
    a.mcq ||= {}; a.tf ||= {}; a.classify ||= {}; a.case ||= { seen: {}, drafts: {} };
    return a;
  }

  /* ---------- Stats ---------- */
  function countChoice(items, rec, ok) {
    let answered = 0, correct = 0;
    for (const [i, v] of Object.entries(rec || {})) {
      const q = items[i];
      if (!q) continue;
      answered++;
      if (ok(q, v)) correct++;
    }
    return { answered, correct };
  }
  function modStats(m) {
    const a = store.ans[m.id] || {};
    const visitedTabs = store.visited[m.id] || {};
    const visited = m.learn.filter(l => visitedTabs[l.id]).length;
    const ms = a.match && a.match.score;
    const types = {
      mcq: { total: m.mcq.length, ...countChoice(m.mcq, a.mcq, (q, v) => +v === q.a) },
      match: { total: m.match.pairs.length, answered: ms ? ms.length : 0, correct: ms ? ms.filter(Boolean).length : 0 },
      tf: { total: m.tf.length, ...countChoice(m.tf, a.tf, (q, v) => v === q.a) },
      classify: { total: m.classify.items.length, ...countChoice(m.classify.items, a.classify, (q, v) => v === q.a) },
      video: { total: 0, answered: 0, correct: 0 }
    };
    for (const l of m.learn) for (const vid of l.videos || []) {
      const cps = vid.checkpoints || [], rec = (a.video || {})[vid.id] || {};
      types.video.total += cps.length;
      const c = countChoice(cps, rec, cpCorrect);
      types.video.answered += c.answered; types.video.correct += c.correct;
    }
    const sum = k => Object.values(types).reduce((s, t) => s + t[k], 0);
    const caseQs = (m.caseStudy.html.match(/class="btn reveal"/g) || []).length;
    const caseSeen = a.case ? Object.keys(a.case.seen || {}).length : 0;
    return {
      visited, learnTotal: m.learn.length, types,
      total: sum('total'), answered: sum('answered'), correct: sum('correct'),
      caseSeen, caseQs
    };
  }
  function overall() {
    const per = MODULES.map(m => ({ m, s: modStats(m) }));
    const add = k => per.reduce((t, p) => t + p.s[k], 0);
    const types = {};
    for (const k of Object.keys(TYPE_LABELS)) {
      types[k] = { total: 0, answered: 0, correct: 0 };
      per.forEach(p => { for (const f of ['total', 'answered', 'correct']) types[k][f] += p.s.types[k][f]; });
    }
    return {
      per, types,
      visited: add('visited'), learnTotal: add('learnTotal'),
      total: add('total'), answered: add('answered'), correct: add('correct'),
      caseSeen: add('caseSeen'), caseQs: add('caseQs')
    };
  }
  const pct = (n, d) => d ? Math.round(n / d * 100) : 0;

  /* ---------- Routing ---------- */
  function allTabs(m) {
    return [...m.learn.map(l => ({ id: l.id, label: l.label, kind: 'learn' })),
            ...ASSESS.map(a => ({ ...a, kind: 'assess' }))];
  }
  function parse() {
    const [mid, tab] = location.hash.replace(/^#\/?/, '').split('/');
    return { mid, tab };
  }
  function route() {
    const { mid, tab } = parse();
    const m = MODULES.find(x => x.id === mid);
    if (!m) {
      renderHome();
    } else {
      const tabs = allTabs(m);
      const t = tabs.find(x => x.id === tab) ? tab : tabs[0].id;
      renderModule(m, t);
      store.last = `#/${m.id}/${t}`;
      save();
    }
    renderSidebar();
    document.body.classList.remove('nav-open');
    document.getElementById('menuBtn').setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0 });
  }
  window.addEventListener('hashchange', route);

  /* ---------- Sidebar ---------- */
  function renderSidebar() {
    const { mid } = parse();
    const onHome = !MODULES.some(m => m.id === mid);
    let html = `<div class="brand"><div class="over">CFA Level I</div><div class="name">Economics Study Hub</div></div>
      <a class="nav-link nav-home" href="#/home" ${onHome ? 'aria-current="page"' : ''}>🏠 Home &amp; progress</a>
      <div class="nav-label">Learning modules</div>`;
    for (const m of MODULES) {
      const s = modStats(m);
      const cp = pct(s.visited, s.learnTotal);
      const acc = s.answered ? `${pct(s.correct, s.answered)}% correct` : 'no quiz yet';
      html += `<a class="nav-link" href="#/${m.id}/${m.learn[0].id}" ${m.id === mid ? 'aria-current="page"' : ''}>
        <div class="row1"><span class="lm">LM${m.lm}</span><span>${m.title}</span></div>
        <div class="meta"><span class="mini-bar" title="Content covered: ${cp}%"><span style="width:${cp}%"></span></span><span>${cp}% · ${acc}</span></div>
      </a>`;
    }
    $side.innerHTML = html;
  }
  document.getElementById('menuBtn').addEventListener('click', e => {
    const open = document.body.classList.toggle('nav-open');
    e.currentTarget.setAttribute('aria-expanded', open);
  });
  document.getElementById('scrim').addEventListener('click', () => document.body.classList.remove('nav-open'));

  /* ---------- Home dashboard ---------- */
  function stackBar(correct, incorrect, none, thin) {
    const tot = correct + incorrect + none || 1;
    const seg = (n, cls, label) => n ? `<span class="${cls}" style="width:${n / tot * 100}%" data-tip="${label}: ${n} (${pct(n, tot)}%)"></span>` : '';
    return `<div class="stack${thin ? ' thin' : ''}" role="img" aria-label="${correct} correct, ${incorrect} incorrect, ${none} not attempted">
      ${seg(correct, 's-good', 'Correct')}${seg(incorrect, 's-bad', 'Incorrect')}${seg(none, 's-none', 'Not attempted')}</div>`;
  }
  const legend = `<div class="legend"><span><i class="s-good"></i>Correct</span><span><i class="s-bad"></i>Incorrect</span><span><i class="s-none"></i>Not attempted</span></div>`;

  function renderHome() {
    document.title = 'CFA Level I Economics — Study Hub';
    const o = overall();
    const contentPct = pct(o.visited, o.learnTotal);
    const quizPct = pct(o.answered, o.total);
    const accPct = pct(o.correct, o.answered);
    const wrong = o.answered - o.correct;

    // Suggestions: unfinished content first, then weakest accuracy
    const suggestions = [];
    const unfinished = o.per.find(p => p.s.visited < p.s.learnTotal);
    if (unfinished) {
      const tab = unfinished.m.learn.find(l => !(store.visited[unfinished.m.id] || {})[l.id]);
      suggestions.push({ href: `#/${unfinished.m.id}/${tab.id}`, title: `Continue reading: LM${unfinished.m.lm} ${unfinished.m.title}`, sub: `Next section: ${tab.label}` });
    }
    const untested = o.per.find(p => p.s.visited === p.s.learnTotal && p.s.answered < p.s.total);
    if (untested) suggestions.push({ href: `#/${untested.m.id}/mcq`, title: `Test yourself: LM${untested.m.lm} ${untested.m.title}`, sub: `${untested.s.total - untested.s.answered} questions not attempted yet` });
    const weakest = o.per.filter(p => p.s.answered >= 5).sort((a, b) => a.s.correct / a.s.answered - b.s.correct / b.s.answered)[0];
    if (weakest && weakest.s.correct / weakest.s.answered < 0.75) suggestions.push({ href: `#/${weakest.m.id}/${weakest.m.learn[0].id}`, title: `Revise: LM${weakest.m.lm} ${weakest.m.title}`, sub: `Lowest accuracy so far: ${pct(weakest.s.correct, weakest.s.answered)}% correct` });

    const rows = o.per.map(({ m, s }) => {
      const cp = pct(s.visited, s.learnTotal);
      return `<tr>
        <td class="name"><a href="#/${m.id}/${m.learn[0].id}">LM${m.lm} · ${m.title}</a><small>${m.lmTitle}</small></td>
        <td><div class="prog"><span class="mini-bar"><span style="width:${cp}%"></span></span><small>${cp}%</small></div></td>
        <td>${s.answered} / ${s.total}</td>
        <td>${s.answered ? pct(s.correct, s.answered) + '%' : '—'}</td>
        <td style="min-width:140px">${stackBar(s.correct, s.answered - s.correct, s.total - s.answered, true)}</td>
        <td>${s.caseSeen} / ${s.caseQs}</td>
      </tr>`;
    }).join('');

    const typeRows = Object.entries(o.types).map(([k, t]) => `
      <div class="type-row"><span>${TYPE_LABELS[k]}</span>${stackBar(t.correct, t.answered - t.correct, t.total - t.answered, true)}
      <span class="val">${t.answered ? pct(t.correct, t.answered) + '% correct' : 'not started'}</span></div>`).join('');

    $main.innerHTML = `
      <div class="home-head">
        <h1>Your Economics progress</h1>
        <p>CFA Level I · Economics carries roughly 6–9% of the exam. ${MODULES.length} sub-modules cover the 8 learning modules.</p>
      </div>

      <div class="kpis">
        <div class="kpi"><div class="label">Subject coverage</div><div class="value">${contentPct}%</div>
          <div class="sub">${o.visited} of ${o.learnTotal} learning sections read</div><div class="bar"><span style="width:${contentPct}%"></span></div></div>
        <div class="kpi"><div class="label">Quiz coverage</div><div class="value">${quizPct}%</div>
          <div class="sub">${o.answered} of ${o.total} questions attempted</div><div class="bar"><span style="width:${quizPct}%"></span></div></div>
        <div class="kpi"><div class="label">Accuracy</div><div class="value">${o.answered ? accPct + '%' : '—'}</div>
          <div class="sub">${o.correct} correct · ${wrong} incorrect</div></div>
        <div class="kpi"><div class="label">Case studies</div><div class="value">${o.caseSeen}<span class="sub" style="font-size:1rem"> / ${o.caseQs}</span></div>
          <div class="sub">model answers reviewed</div></div>
      </div>

      <div class="card">
        <h3 style="margin-top:0">All questions: correct vs incorrect</h3>
        ${stackBar(o.correct, wrong, o.total - o.answered)}
        ${legend}
      </div>

      <div class="two-col">
        <div class="card">
          <h3 style="margin-top:0">Accuracy by assessment type</h3>
          <div class="type-bars">${typeRows}</div>
        </div>
        <div class="card next-up">
          <h3 style="margin-top:0">What to do next</h3>
          ${store.last ? `<a href="${store.last}"><strong>↩ Resume where you left off</strong><small>${describeRoute(store.last)}</small></a>` : ''}
          ${suggestions.map(s => `<a href="${s.href}"><strong>${s.title}</strong><small>${s.sub}</small></a>`).join('') || '<p class="muted">You have read everything and attempted every question. Use Reset on any quiz to retry it.</p>'}
        </div>
      </div>

      <h3>Module breakdown</h3>
      <div class="card table-wrap" style="padding:8px 12px">
        <table class="mod-table">
          <thead><tr><th>Module</th><th>Content read</th><th>Questions attempted</th><th>Accuracy</th><th>Correct / incorrect</th><th>Case study</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      ${legend}

      <div class="card" style="margin-top:28px">
        <h4>Reset progress</h4>
        <p class="muted" style="margin-top:0">Progress is saved in this browser only. Resetting clears all reading progress, quiz answers and case-study notes.</p>
        <div class="btn-row"><button class="btn danger" id="resetAll">Reset all progress</button><span id="resetConfirm" hidden>Are you sure? <button class="btn danger" id="resetYes">Yes, reset everything</button> <button class="btn" id="resetNo">Cancel</button></span></div>
      </div>`;

    const rc = document.getElementById('resetConfirm');
    document.getElementById('resetAll').onclick = () => { rc.hidden = false; };
    document.getElementById('resetNo').onclick = () => { rc.hidden = true; };
    document.getElementById('resetYes').onclick = () => {
      store = { v: 1, visited: {}, ans: {}, last: null };
      save(); route();
    };
  }
  function describeRoute(h) {
    const [mid, tab] = h.replace(/^#\/?/, '').split('/');
    const m = MODULES.find(x => x.id === mid);
    if (!m) return '';
    const t = allTabs(m).find(x => x.id === tab);
    return `LM${m.lm} ${m.title} → ${t ? t.label : ''}`;
  }

  /* ---------- Module page ---------- */
  function renderModule(m, tabId) {
    document.title = `${m.title} — CFA L1 Economics`;
    const tabs = allTabs(m);
    const visited = store.visited[m.id] || {};
    const tabLinks = tabs.map((t, i) => {
      const sep = (t.kind === 'assess' && tabs[i - 1].kind === 'learn') ? '<span class="group-sep" aria-hidden="true"></span>' : '';
      const num = t.kind === 'learn' ? `${i + 1} · ` : '';
      const tick = t.kind === 'learn' && visited[t.id] ? '<span class="tick" aria-label="read">✓</span>' : '';
      return `${sep}<a href="#/${m.id}/${t.id}" ${t.id === tabId ? 'aria-current="page"' : ''}>${num}${t.label}${tick}</a>`;
    }).join('');

    $main.innerHTML = `
      <div class="mod-head">
        <div class="over">Learning Module ${m.lm} · ${m.lmTitle}</div>
        <h1>${m.title}</h1>
        <p>${m.subtitle}</p>
      </div>
      <nav class="tabs" aria-label="${m.title} sections"><div class="tablist">${tabLinks}</div></nav>
      <section class="panel" id="panel"></section>`;
    $main.querySelector('[aria-current="page"]')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });

    const panel = document.getElementById('panel');
    const learn = m.learn.find(l => l.id === tabId);
    if (learn) {
      if (learn.videos) renderVideos(m, learn, panel);
      else {
        panel.innerHTML = learn.html;
        learn.init && learn.init(panel);
      }
      (store.visited[m.id] ||= {})[tabId] = 1;
      save();
    } else {
      ({ mcq: renderMCQ, match: renderMatch, tf: renderTF, classify: renderClassify, case: renderCase })[tabId](m, panel);
    }

    // pager
    const i = tabs.findIndex(t => t.id === tabId);
    const mi = MODULES.indexOf(m);
    const prev = i > 0 ? { href: `#/${m.id}/${tabs[i - 1].id}`, label: `← ${tabs[i - 1].label}` }
      : mi > 0 ? { href: `#/${MODULES[mi - 1].id}/case`, label: `← LM${MODULES[mi - 1].lm} ${MODULES[mi - 1].title}` }
      : { href: '#/home', label: '← Home' };
    const next = i < tabs.length - 1 ? { href: `#/${m.id}/${tabs[i + 1].id}`, label: `Next: ${tabs[i + 1].label} →` }
      : mi < MODULES.length - 1 ? { href: `#/${MODULES[mi + 1].id}/${MODULES[mi + 1].learn[0].id}`, label: `Next module: ${MODULES[mi + 1].title} →` }
      : { href: '#/home', label: 'Back to dashboard →' };
    const pager = document.createElement('div');
    pager.className = 'pager';
    pager.innerHTML = `<a class="btn" href="${prev.href}">${prev.label}</a><a class="btn primary" href="${next.href}">${next.label}</a>`;
    panel.appendChild(pager);
  }

  /* ---------- Videos (learn tab with `videos: [{ id, title, channel, seconds, topic, sections, checkpoints }]`)
     A checkpoint is { t: seconds, type: 'mcq' | 'tf' | 'num', q, o?: [...], a, e, tol?, unit?, review?: seconds }.
     With the server running, the YouTube IFrame API pauses the video at each unanswered checkpoint and shows the
     question over the player; answering lets the learner continue. Opened from disk, the same questions are listed
     under the video instead. ---------- */
  const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  function cpCorrect(cp, v) {
    if (cp.type === 'num') return Math.abs(+v - cp.a) <= (cp.tol ?? Math.abs(cp.a) * 0.005 + 1e-9);
    if (cp.type === 'mcq') return +v === cp.a;
    return v === cp.a;
  }
  function cpAnswerText(cp) {
    if (cp.type === 'mcq') return cp.o[cp.a];
    if (cp.type === 'num') return `${cp.a}${cp.unit ? ' ' + cp.unit : ''}`;
    return cp.a;
  }

  // Load the YouTube IFrame API once
  let ytReady;
  function loadYT() {
    if (window.YT && window.YT.Player) return Promise.resolve();
    if (!ytReady) ytReady = new Promise((resolve, reject) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev && prev(); resolve(); };
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.onerror = () => { ytReady = null; reject(new Error('YouTube API failed to load')); };
      document.head.appendChild(s);
    });
    return ytReady;
  }
  const players = new Set();   // live players, so starting one video pauses the others

  // Renders one checkpoint question into `box`; calls onAnswer(value) once answered
  function renderCheckpoint(box, cp, saved, onAnswer) {
    const opts = cp.type === 'mcq' ? cp.o.map((o, j) => [j, `<strong>${'ABCD'[j]}.</strong> ${o}`])
      : cp.type === 'tf' ? [['True', 'True'], ['False', 'False']] : null;
    box.innerHTML = `<div class="cp-q">${cp.q}</div>` + (opts
      ? `<div class="options">${opts.map(([v, label]) => `<button data-v="${v}">${label}</button>`).join('')}</div>`
      : `<div class="cp-num"><input type="number" step="any" inputmode="decimal" aria-label="Your answer">${cp.unit ? `<span>${cp.unit}</span>` : ''}<button class="btn primary">Check</button></div>`) +
      `<div class="cp-fb"></div>`;
    const show = v => {
      const ok = cpCorrect(cp, v);
      if (opts) {
        box.querySelectorAll('[data-v]').forEach(b => {
          b.disabled = true;
          if (String(b.dataset.v) === String(cp.a)) b.classList.add('correct');
          else if (String(b.dataset.v) === String(v)) b.classList.add('wrong');
        });
      } else {
        const inp = box.querySelector('input');
        inp.value = v; inp.disabled = true; box.querySelector('.cp-num button').disabled = true;
      }
      box.querySelector('.cp-fb').innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? '✓ Correct.' : `✗ Answer: ${cpAnswerText(cp)}.`}</b>${cp.e}</div>`;
      return ok;
    };
    if (saved !== undefined) { show(saved); return; }
    if (opts) box.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => {
      const v = cp.type === 'mcq' ? +b.dataset.v : b.dataset.v;
      onAnswer(v, show(v));
    }));
    else {
      const inp = box.querySelector('input'), go = () => { if (inp.value.trim() === '') return inp.focus(); onAnswer(+inp.value, show(+inp.value)); };
      box.querySelector('.cp-num button').addEventListener('click', go);
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    }
  }

  function renderVideos(m, tab, el) {
    const watched = (store.watched ||= {})[m.id] ||= {};
    const ansAll = modAns(m.id).video ||= {};
    const total = tab.videos.reduce((s, v) => s + v.seconds, 0);
    const cpTotal = tab.videos.reduce((s, v) => s + (v.checkpoints || []).length, 0);
    // YouTube's player refuses to load inside pages opened straight from disk (no referrer)
    const local = location.protocol === 'file:';
    el.innerHTML = `
      <h2>${tab.heading || 'Videos'}</h2>
      ${tab.intro ? `<p class="muted">${tab.intro}</p>` : ''}
      <div class="video-summary"><span>${tab.videos.length} videos</span><span>${Math.round(total / 60)} min total</span><span>${cpTotal} checkpoint questions</span><span class="w-count"></span></div>
      ${local ? `<div class="callout file-note">${STATIC
        ? '<strong>Interactive checkpoints need the files to be hosted on a web address.</strong> Opened from a file, videos open in a new YouTube tab and the checkpoint questions are listed under each video instead. Upload this folder to any static host (GitHub Pages, Netlify, a school web server) to get videos that pause for questions.'
        : '<strong>Interactive checkpoints need the Study Hub server.</strong> Opened from a file, videos open in a new YouTube tab and the checkpoint questions are listed under each video instead. To get videos that pause for questions, start the server: double-click <code>Start Study Hub.command</code> (Mac) or run <code>npm start</code> in the <code>cfa-economics</code> folder. Opening <code>index.html</code> then switches to it automatically.'}</div>` : ''}
      <nav class="video-jump" aria-label="Jump to video">${tab.videos.map((v, i) => `<a href="#" data-jump="${v.id}">${i + 1}. ${v.topic}</a>`).join('')}</nav>
      ${tab.videos.map((v, i) => `
        <article class="card video-card" id="vid-${v.id}">
          <div class="video-head">
            <span class="tag">${i + 1} · ${v.topic}</span>
            <h3>${v.title}</h3>
            <div class="meta">${v.channel} · ${mmss(v.seconds)}${(v.checkpoints || []).length ? ` · ${v.checkpoints.length} checkpoint questions` : ''}</div>
          </div>
          <div class="video-frame">
            <button class="video-thumb" data-vid="${v.id}" aria-label="Play video: ${v.title.replace(/"/g, '&quot;')}">
              <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy">
              <span class="play" aria-hidden="true">▶</span><span class="dur">${mmss(v.seconds)}</span>
            </button>
          </div>
          ${(v.checkpoints || []).length ? `<div class="cp-track-wrap">
            <div class="cp-track-label"><span>Checkpoints</span><span class="cp-score"></span></div>
            <div class="cp-track">${v.checkpoints.map((cp, k) => `<button class="cp-dot" data-k="${k}" style="left:${cp.t / v.seconds * 100}%"></button>`).join('')}</div>
          </div>` : ''}
          <div class="video-links">
            <span class="btn-row" style="gap:14px">
              <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Open on YouTube ↗</a>
              ${local ? '' : '<a href="#" class="fs-btn">⛶ Full screen</a>'}
              ${(v.checkpoints || []).length ? '<a href="#" class="cp-reset">↺ Reset checkpoints</a>' : ''}
            </span>
            <label><input type="checkbox" data-watch="${v.id}" ${watched[v.id] ? 'checked' : ''}> Mark as watched</label>
          </div>
          ${local && (v.checkpoints || []).length ? `<details class="explain" open><summary>Checkpoint questions (${v.checkpoints.length})</summary><div class="explain-body cp-static"></div></details>` : ''}
          ${v.sections.map(s => `<details class="explain"><summary>${s.title}</summary><div class="explain-body">${s.html}</div></details>`).join('')}
        </article>`).join('')}
      ${STATIC ? '' : tab.footer || ''}`;

    const count = () => {
      const n = tab.videos.filter(v => watched[v.id]).length;
      el.querySelector('.w-count').textContent = `${n} of ${tab.videos.length} watched`;
    };
    count();
    el.querySelectorAll('[data-watch]').forEach(cb => cb.addEventListener('change', () => {
      if (cb.checked) watched[cb.dataset.watch] = 1; else delete watched[cb.dataset.watch];
      save(); count();
    }));
    el.querySelectorAll('[data-jump]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('vid-' + a.dataset.jump).scrollIntoView({ behavior: 'smooth' });
    }));

    tab.videos.forEach(v => {
      const card = el.querySelector(`#vid-${CSS.escape(v.id)}`);
      const cps = v.checkpoints || [];
      const ans = () => ansAll[v.id] ||= {};
      let player = null, timer = null, asking = false;

      const paintTrack = () => {
        if (!cps.length) return;
        const a = ansAll[v.id] || {};
        let done = 0, right = 0;
        card.querySelectorAll('.cp-dot').forEach(d => {
          const k = +d.dataset.k, cp = cps[k], has = a[k] !== undefined, ok = has && cpCorrect(cp, a[k]);
          d.className = 'cp-dot' + (has ? (ok ? ' correct' : ' wrong') : '');
          d.dataset.tip = `Checkpoint ${k + 1} at ${mmss(cp.t)}: ${has ? (ok ? 'correct' : 'incorrect') : 'not answered yet'}`;
          d.setAttribute('aria-label', d.dataset.tip);
          if (has) { done++; if (ok) right++; }
        });
        card.querySelector('.cp-score').textContent = `${done} of ${cps.length} answered · ${right} correct`;
      };
      paintTrack();

      // Static list of checkpoint questions (file:// fallback)
      const stat = card.querySelector('.cp-static');
      const drawStatic = () => {
        if (!stat) return;
        stat.innerHTML = '';
        cps.forEach((cp, k) => {
          const q = document.createElement('div');
          q.className = 'q';
          q.innerHTML = `<div class="q-num">Checkpoint ${k + 1} · around ${mmss(cp.t)}</div><div class="cp-body"></div>`;
          renderCheckpoint(q.querySelector('.cp-body'), cp, ans()[k], (val) => { ans()[k] = val; save(); paintTrack(); renderSidebar(); });
          stat.appendChild(q);
        });
      };
      drawStatic();

      card.querySelector('.cp-reset')?.addEventListener('click', e => {
        e.preventDefault();
        delete ansAll[v.id]; save(); paintTrack(); drawStatic(); renderSidebar();
      });

      const frame = card.querySelector('.video-frame');
      card.querySelector('.fs-btn')?.addEventListener('click', e => {
        e.preventDefault();
        if (document.fullscreenElement) document.exitFullscreen();
        else frame.requestFullscreen?.();
      });

      function ask(k, skipped) {
        asking = true;
        player.pauseVideo();
        const cp = cps[k];
        const ov = document.createElement('div');
        ov.className = 'cp-overlay';
        ov.innerHTML = `<div class="cp-card" role="dialog" aria-label="Checkpoint question">
          <div class="cp-label">Checkpoint ${k + 1} of ${cps.length} · ${mmss(cp.t)}</div>
          ${skipped ? '<div class="cp-skip-note">You skipped past this point, so answer it before moving on.</div>' : ''}
          <div class="cp-body"></div><div class="cp-actions" hidden></div></div>`;
        frame.appendChild(ov);
        const actions = ov.querySelector('.cp-actions');
        const resume = seekTo => {
          ov.remove(); asking = false;
          if (seekTo !== undefined) player.seekTo(seekTo, true);
          player.playVideo();
        };
        renderCheckpoint(ov.querySelector('.cp-body'), cp, undefined, (val, ok) => {
          ans()[k] = val; save(); paintTrack(); renderSidebar();
          actions.hidden = false;
          const back = cp.review ?? Math.max(0, (k ? cps[k - 1].t : 0));
          actions.innerHTML = `<button class="btn primary cp-go">Continue video ▶</button>` +
            (ok ? '' : `<button class="btn cp-back">↺ Rewatch from ${mmss(back)}</button>`);
          actions.querySelector('.cp-go').addEventListener('click', () => resume());
          actions.querySelector('.cp-back')?.addEventListener('click', () => resume(back));
          actions.querySelector('.cp-go').focus();
        });
        ov.querySelector('button, input')?.focus();
      }

      function poll() {
        if (!document.body.contains(frame)) { clearInterval(timer); players.delete(player); try { player.destroy(); } catch (e) { /* gone */ } return; }
        if (asking || !player.getCurrentTime) return;
        const t = player.getCurrentTime(), a = ansAll[v.id] || {};
        const k = cps.findIndex((cp, i) => a[i] === undefined && t >= cp.t);
        if (k >= 0) ask(k, t > cps[k].t + 3);
      }

      card.querySelector('.video-thumb').addEventListener('click', async e => {
        const btn = e.currentTarget;
        if (local) { window.open(`https://www.youtube.com/watch?v=${v.id}`, '_blank', 'noopener'); return; }
        const holder = document.createElement('div');
        holder.id = `ytp-${m.id}-${v.id}`;
        btn.replaceWith(holder);
        try { await loadYT(); } catch (err) {
          holder.outerHTML = `<div class="cp-overlay"><div class="cp-card">The YouTube player could not load. Check your internet connection, or <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">open the video on YouTube</a>.</div></div>`;
          return;
        }
        player = new YT.Player(holder.id, {
          videoId: v.id,
          host: 'https://www.youtube-nocookie.com',
          // fs: 0 hides YouTube's own full-screen button (its full screen would hide our questions); use ⛶ instead
          playerVars: { autoplay: 1, rel: 0, fs: 0, playsinline: 1, modestbranding: 1, origin: location.origin },
          events: {
            onReady: () => { players.add(player); player.playVideo(); },
            onStateChange: ev => {
              if (ev.data === YT.PlayerState.PLAYING) {
                players.forEach(p => { if (p !== player) try { p.pauseVideo(); } catch (e) { /* not ready */ } });
                clearInterval(timer); timer = setInterval(poll, 250);
              } else if (ev.data === YT.PlayerState.ENDED) {
                clearInterval(timer);
                watched[v.id] = 1; save(); count();
                card.querySelector(`[data-watch]`).checked = true;
              } else clearInterval(timer);
            }
          }
        });
      });

      card.querySelectorAll('.cp-dot').forEach(d => d.addEventListener('click', () => {
        const k = +d.dataset.k;
        if (player && player.seekTo) {
          // jump to just before the checkpoint; unanswered ones will pause for the question
          player.seekTo(Math.max(0, cps[k].t - 15), true); player.playVideo();
        } else card.querySelector('.video-thumb')?.click();
      }));
    });
  }

  /* ---------- MCQ ---------- */
  function renderMCQ(m, el) {
    const rec = modAns(m.id).mcq;
    el.innerHTML = `<h2>MCQ quiz</h2><p class="muted">Choose one answer per question. Your answers are saved and count toward your dashboard.</p>
      <div class="score-bar"><span>Score: <strong class="sc"></strong></span><button class="btn rs">Reset quiz</button></div><div class="list"></div>`;
    const sc = el.querySelector('.sc');
    const update = () => {
      const s = countChoice(m.mcq, rec, (q, v) => +v === q.a);
      sc.textContent = `${s.correct} / ${s.answered}` + (s.answered === m.mcq.length ? ` (${pct(s.correct, s.answered)}%)` : '');
    };
    m.mcq.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'q';
      div.innerHTML = `<div class="q-num">Question ${i + 1} of ${m.mcq.length}</div><div class="q-text">${item.q}</div><div class="options"></div>`;
      const opts = div.querySelector('.options');
      const show = j => {
        [...opts.children].forEach(c => c.disabled = true);
        const ok = j === item.a;
        opts.children[j].classList.add(ok ? 'correct' : 'wrong');
        opts.children[item.a].classList.add('correct');
        const fb = document.createElement('div');
        fb.className = 'feedback ' + (ok ? 'good' : 'bad');
        fb.innerHTML = `<b>${ok ? '✓ Correct.' : '✗ Not quite.'}</b>${item.e}`;
        div.appendChild(fb);
      };
      item.o.forEach((text, j) => {
        const b = document.createElement('button');
        b.innerHTML = `<strong>${'ABCD'[j]}.</strong> ${text}`;
        b.addEventListener('click', () => { rec[i] = j; save(); show(j); update(); renderSidebar(); });
        opts.appendChild(b);
      });
      if (rec[i] !== undefined) show(+rec[i]);
      el.querySelector('.list').appendChild(div);
    });
    el.querySelector('.rs').addEventListener('click', () => {
      for (const k of Object.keys(rec)) delete rec[k];
      save(); renderSidebar(); renderModule(m, 'mcq');
    });
    update();
  }

  /* ---------- Choice quizzes (True/False, Classify) ---------- */
  function choiceQuiz(m, el, { key, title, intro, items, choices }) {
    const rec = modAns(m.id)[key];
    el.innerHTML = `<h2>${title}</h2><p class="muted">${intro}</p>
      <div class="score-bar"><span>Score: <strong class="sc"></strong></span><button class="btn rs">Reset</button></div><div class="list"></div>`;
    const sc = el.querySelector('.sc');
    const update = () => {
      const s = countChoice(items, rec, (q, v) => v === q.a);
      sc.textContent = `${s.correct} / ${s.answered}`;
    };
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'q';
      div.innerHTML = `<div class="q-num">${i + 1} of ${items.length}</div><div class="q-text">${item.s}</div><div class="choice-row"></div>`;
      const row = div.querySelector('.choice-row');
      const show = c => {
        [...row.children].forEach(x => x.disabled = true);
        const ok = c === item.a;
        [...row.children].find(x => x.textContent === c).classList.add(ok ? 'correct' : 'wrong');
        [...row.children].find(x => x.textContent === item.a).classList.add('correct');
        const fb = document.createElement('div');
        fb.className = 'feedback ' + (ok ? 'good' : 'bad');
        fb.innerHTML = `<b>${ok ? '✓ Correct.' : '✗ Answer: ' + item.a + '.'}</b>${item.e}`;
        div.appendChild(fb);
      };
      choices.forEach(c => {
        const b = document.createElement('button');
        b.textContent = c;
        b.addEventListener('click', () => { rec[i] = c; save(); show(c); update(); renderSidebar(); });
        row.appendChild(b);
      });
      if (rec[i] !== undefined) show(rec[i]);
      el.querySelector('.list').appendChild(div);
    });
    el.querySelector('.rs').addEventListener('click', () => {
      for (const k of Object.keys(rec)) delete rec[k];
      save(); renderSidebar(); renderModule(m, key);
    });
    update();
  }
  function renderTF(m, el) {
    choiceQuiz(m, el, { key: 'tf', title: 'True or false?', intro: 'Decide whether each statement is true or false.', items: m.tf, choices: ['True', 'False'] });
  }
  function renderClassify(m, el) {
    choiceQuiz(m, el, { key: 'classify', title: 'Classify it', intro: m.classify.intro || 'Read each scenario and choose the best category.', items: m.classify.items, choices: m.classify.choices });
  }

  /* ---------- Match the following (click-to-pair + drag and drop) ---------- */
  function seededOrder(n, seed) {
    // deterministic shuffle so column B is stable across visits but never in answer order
    let h = 0;
    for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const rnd = () => (h = (h * 1103515245 + 12345) >>> 0) / 4294967296;
    let order;
    do {
      order = [...Array(n).keys()];
      for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
    } while (order.some((p, k) => p === k) && n > 1 && rnd() > 0.02);
    return order;
  }

  function renderMatch(m, el) {
    const PAIRS = m.match.pairs;
    const ORDER = m.match.order || seededOrder(PAIRS.length, m.id);
    const correctDef = i => ORDER.indexOf(i);
    const a = modAns(m.id);
    const saved = a.match || {};
    const st = {
      pairs: new Map(Object.entries(saved.pairs || {}).map(([t, k]) => [+t, k])),
      selected: null, checked: !!saved.checked, revealed: !!saved.revealed
    };
    let dragSrc = null;

    el.innerHTML = `<h2>Match the following</h2>
      <p class="muted">Match each term in Column A with the correct description in Column B.</p>
      <p class="m-hint"><strong>Click</strong> a term, then <strong>click</strong> its description (either order works). You can also <strong>drag</strong> one onto the other. Click a matched item to unmatch it.</p>
      <div class="score-bar">
        <span><span class="lbl">Matched:</span> <strong class="sc"></strong></span>
        <div class="btn-row"><button class="btn primary ck">Check answers</button><button class="btn sh">Show answers</button><button class="btn rs">Reset</button></div>
      </div>
      <div class="match">
        <div><h3 style="margin-top:0">Column A: Term</h3><div class="terms"></div></div>
        <div><h3 style="margin-top:0">Column B: Description</h3><div class="defs"></div></div>
      </div>`;

    const persist = () => {
      a.match = { ...(a.match || {}), pairs: Object.fromEntries(st.pairs), checked: st.checked, revealed: st.revealed };
      save();
    };
    const termOf = k => { for (const [t, d] of st.pairs) if (d === k) return t; return null; };
    const pairUp = (t, k) => { const prev = termOf(k); if (prev !== null) st.pairs.delete(prev); st.pairs.set(t, k); };
    const unpair = (side, idx) => {
      if (side === 't') st.pairs.delete(idx);
      else { const t = termOf(idx); if (t !== null) st.pairs.delete(t); }
    };
    const touched = () => { st.checked = false; st.revealed = false; };

    function handle(side, idx) {
      touched();
      const sel = st.selected;
      if (sel && sel.side !== side) {
        side === 't' ? pairUp(idx, sel.idx) : pairUp(sel.idx, idx);
        st.selected = null;
      } else if (sel && sel.idx === idx) {
        st.selected = null;
      } else {
        unpair(side, idx);
        st.selected = { side, idx };
      }
      persist(); draw(side + idx);
    }

    function item(side, idx, key, text) {
      const it = document.createElement('div');
      it.className = 'm-item';
      it.tabIndex = 0;
      it.draggable = true;
      it.setAttribute('role', 'button');
      it.dataset.key = side + idx;
      const t = side === 't' ? idx : termOf(idx);
      const partner = side === 't' ? st.pairs.get(idx) : t;
      const paired = partner !== undefined && partner !== null;
      const badge = !paired ? '' : side === 't' ? LETTERS[partner] : String(partner + 1);
      if (paired) {
        it.classList.add('paired');
        it.style.setProperty('--pair', PAIR_COLORS[t % PAIR_COLORS.length]);
        if (st.checked) it.classList.add(st.pairs.get(t) === correctDef(t) ? 'correct' : 'wrong');
      } else if (st.checked && side === 't') {
        it.classList.add('wrong');
      }
      if (st.selected && st.selected.side === side && st.selected.idx === idx) it.classList.add('selected');
      it.innerHTML = `<span class="m-key">${key}</span><span class="m-text">${text}</span><span class="m-badge">${badge}</span>`;
      it.setAttribute('aria-label', `${key}. ${text}${paired ? ', matched with ' + badge : ''}`);

      it.addEventListener('click', () => handle(side, idx));
      it.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handle(side, idx); } });
      it.addEventListener('dragstart', e => {
        dragSrc = { side, idx };
        e.dataTransfer.effectAllowed = 'link';
        e.dataTransfer.setData('text/plain', side + idx);
        it.classList.add('dragging');
      });
      it.addEventListener('dragend', () => { dragSrc = null; it.classList.remove('dragging'); });
      it.addEventListener('dragover', e => { if (dragSrc && dragSrc.side !== side) { e.preventDefault(); it.classList.add('drop-over'); } });
      it.addEventListener('dragleave', () => it.classList.remove('drop-over'));
      it.addEventListener('drop', e => {
        e.preventDefault();
        if (!dragSrc || dragSrc.side === side) return;
        touched(); st.selected = null;
        side === 't' ? pairUp(idx, dragSrc.idx) : pairUp(dragSrc.idx, idx);
        dragSrc = null;
        persist(); draw(side + idx);
      });
      return it;
    }

    function draw(focusKey) {
      const terms = el.querySelector('.terms'), defs = el.querySelector('.defs');
      terms.innerHTML = ''; defs.innerHTML = '';
      PAIRS.forEach(([term], i) => terms.appendChild(item('t', i, i + 1, term)));
      ORDER.forEach((p, k) => defs.appendChild(item('d', k, LETTERS[k], PAIRS[p][1])));
      const lbl = el.querySelector('.lbl'), sc = el.querySelector('.sc');
      if (st.revealed) { lbl.textContent = 'Answers shown:'; sc.textContent = `${PAIRS.length} / ${PAIRS.length}`; }
      else if (st.checked) {
        const right = PAIRS.filter((_, i) => st.pairs.get(i) === correctDef(i)).length;
        lbl.textContent = 'Score:'; sc.textContent = `${right} / ${PAIRS.length}`;
      } else { lbl.textContent = 'Matched:'; sc.textContent = `${st.pairs.size} / ${PAIRS.length}`; }
      if (focusKey) el.querySelector(`.m-item[data-key="${focusKey}"]`)?.focus({ preventScroll: true });
    }

    el.querySelector('.ck').addEventListener('click', () => {
      st.selected = null; st.checked = true; st.revealed = false;
      persist();
      // the latest checked attempt is what the dashboard counts; unmatched terms are not attempts
      a.match.score = PAIRS.map((_, i) => st.pairs.has(i) ? st.pairs.get(i) === correctDef(i) : null).filter(v => v !== null);
      save(); renderSidebar(); draw();
    });
    el.querySelector('.sh').addEventListener('click', () => {
      st.selected = null;
      PAIRS.forEach((_, i) => st.pairs.set(i, correctDef(i)));
      st.checked = true; st.revealed = true;
      persist(); draw();
    });
    el.querySelector('.rs').addEventListener('click', () => {
      st.pairs.clear(); st.selected = null; touched();
      a.match = null; save(); renderSidebar(); draw();
    });
    draw();
  }

  /* ---------- Case study ---------- */
  function renderCase(m, el) {
    const c = modAns(m.id).case;
    el.innerHTML = m.caseStudy.html;
    el.querySelectorAll('textarea').forEach((ta, i) => {
      ta.value = c.drafts[i] || '';
      ta.addEventListener('input', () => { c.drafts[i] = ta.value; save(); });
    });
    el.querySelectorAll('.reveal').forEach((b, i) => {
      const model = b.nextElementSibling;
      const set = open => { model.hidden = !open; b.textContent = open ? 'Hide model answer' : 'Show model answer'; };
      set(!!c.seen[i]);
      b.addEventListener('click', () => {
        const open = model.hidden;
        set(open);
        if (open && !c.seen[i]) { c.seen[i] = 1; save(); }
      });
    });
  }

  /* ---------- Tooltip ---------- */
  const tip = document.getElementById('tip');
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('[data-tip]');
    if (!t) { tip.hidden = true; return; }
    tip.textContent = t.dataset.tip;
    tip.hidden = false;
  });
  document.addEventListener('mousemove', e => {
    if (tip.hidden) return;
    tip.style.left = Math.min(e.clientX + 12, innerWidth - tip.offsetWidth - 8) + 'px';
    tip.style.top = (e.clientY + 14) + 'px';
  });

  /* ---------- Shared helpers for module labs ---------- */
  window.Econ = {
    niceStep(range, ticks) {
      const raw = range / ticks, mag = Math.pow(10, Math.floor(Math.log10(raw)));
      const n = raw / mag;
      return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * mag;
    },
    fmt(n, d = 2) { return n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  };

  route();
})();
