#!/usr/bin/env node
/* CFA Economics Study Hub: local server.
   YouTube's embedded player refuses to run in pages opened from file://, so the hub is served
   over http://127.0.0.1 instead. Static files use only Node built-ins; the AI tutor (chat-api.js)
   uses the Anthropic SDK from `npm install`. Copy the folder anywhere with Node 18+ and run `npm start`.
   The AI tutor reads ANTHROPIC_API_KEY from a .env file in this folder (see .env.example).

   Options:  --port <n>   (default 8765, or the PORT env var)
             --no-open    don't open a browser tab
   Hosted (Railway, Render, etc.): when the platform sets PORT, the server listens on all interfaces
   (0.0.0.0) and doesn't try to open a browser. Override the bind address with HOST if needed. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Load KEY=VALUE pairs from .env (without overriding real environment variables)
try {
  for (const line of fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
  }
} catch { /* no .env file: the AI tutor shows setup steps */ }
const chat = require('./chat-api');

const ROOT = __dirname;
// Hosting platforms set PORT and route outside traffic to the container, so listen on all interfaces there;
// locally, stay on loopback so the hub (and its AI tutor) isn't reachable from the network.
const HOSTED = !!(process.env.PORT || process.env.RAILWAY_ENVIRONMENT);
const HOST = process.env.HOST || (HOSTED ? '0.0.0.0' : '127.0.0.1');
const args = process.argv.slice(2);
const portArg = args.indexOf('--port');
const PORT = Number(portArg >= 0 ? args[portArg + 1] : process.env.PORT) || 8765;
const OPEN = !HOSTED && !args.includes('--no-open');
const HUB_URL = `http://${HOSTED ? 'localhost' : HOST}:${PORT}/index.html#/home`;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8'
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  res.end(body);
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, `http://${HOST}`).pathname);
  } catch {
    return send(res, 400, 'Bad request');
  }

  // AI tutor API. Only same-origin page requests (the hub itself) may call it.
  if (pathname.startsWith('/api/')) {
    // Same-origin check: the page's Origin must match the host it was served from (works behind HTTPS proxies too)
    const origin = req.headers.origin;
    let sameOrigin = !origin;
    try { sameOrigin = sameOrigin || new URL(origin).host === req.headers.host; } catch { sameOrigin = false; }
    if (!sameOrigin) return send(res, 403, 'Forbidden');
    if (pathname === '/api/chat/status' && req.method === 'GET') return send(res, 200, JSON.stringify(chat.status()), TYPES['.json']);
    if (pathname === '/api/chat' && req.method === 'POST') return chat.handleChat(req, res);
    return send(res, 404, 'Not found');
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'Method not allowed');

  // index.html (opened from file://) loads this script to detect a running server and switch to it
  if (pathname === '/__hub-ping.js') {
    return send(res, 200, `window.__HUB_SERVER = ${JSON.stringify(`http://${HOST}:${PORT}`)};`, TYPES['.js']);
  }

  if (pathname === '/') pathname = '/index.html';
  const file = path.normalize(path.join(ROOT, pathname));
  // never serve anything outside the hub folder, the server itself, or dotfiles
  if (!file.startsWith(ROOT + path.sep) || /[\\/]\./.test(pathname) || /^\/node_modules\//.test(pathname)) return send(res, 403, 'Forbidden');

  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, 'Not found');
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': st.size,
      // always revalidate, so edits to module files show up on a normal reload
      'Cache-Control': 'no-cache'
    });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  });
});

function openBrowser(url) {
  if (!OPEN) return;
  const cmd = process.platform === 'darwin' ? `open "${url}"`
    : process.platform === 'win32' ? `start "" "${url}"`
    : `xdg-open "${url}"`;
  exec(cmd, () => { /* if no browser can be opened, the URL is printed below */ });
}

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    // most likely the hub is already running in another window: just open it
    if (HOSTED) { console.error(`Port ${PORT} is already in use.`); process.exit(1); }
    console.log(`Port ${PORT} is already in use. The Study Hub is probably already running.`);
    console.log(`Opening ${HUB_URL}`);
    openBrowser(HUB_URL);
    setTimeout(() => process.exit(0), 300);
  } else {
    console.error(err.message);
    process.exit(1);
  }
});

server.listen(PORT, HOST, () => {
  console.log('CFA Economics Study Hub is running.');
  console.log(`  ${HUB_URL}`);
  const st = chat.status();
  console.log(st.configured ? `AI tutor: ready (${st.model}).` : `AI tutor: not set up yet. ${HOSTED ? 'Set the ANTHROPIC_API_KEY variable in your hosting dashboard and redeploy.' : 'Add ANTHROPIC_API_KEY to the .env file and restart (see README).'}`);
  console.log('Videos will play inside the page. Press Ctrl+C (or close this window) to stop.');
  openBrowser(HUB_URL);
});

process.on('SIGINT', () => { console.log('\nStudy Hub stopped.'); process.exit(0); });
