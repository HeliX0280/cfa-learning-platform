#!/usr/bin/env node
/* Builds the static package: front-end source only, with no Node server and no AI tutor.
   Output: dist/cfa-study-hub-static/ and dist/cfa-study-hub-static.zip
   Run with `npm run build:static`. Uses Node built-ins only (plus the system `zip` command for the archive). */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const NAME = 'cfa-study-hub-static';
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(DIST, NAME);
const version = require(path.join(ROOT, 'package.json')).version;

// Each edit must match exactly once, so the build fails loudly if index.html changes shape
function edit(html, label, pattern, replacement) {
  const matches = html.match(new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g'));
  if (!matches || matches.length !== 1) throw new Error(`build-static: expected exactly one match for "${label}", found ${matches ? matches.length : 0}`);
  return html.replace(pattern, replacement);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.rmSync(path.join(DIST, `${NAME}.zip`), { force: true });
fs.mkdirSync(path.join(OUT, 'modules'), { recursive: true });

let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
html = edit(html, 'local-server probe', /\n<script>\n  \/\/ Opened straight from disk\?[\s\S]*?<\/script>/, '');
html = edit(html, 'AI tutor styles', /\n\n  \/\* ---------- AI tutor \(right pane\) ---------- \*\/[\s\S]*?(?=\n<\/style>)/, '');
html = edit(html, 'AI tutor markup', /\n  <button class="chat-toggle"[\s\S]*?<\/aside>\n/, '\n');
html = edit(html, 'AI tutor script', /\n  <script src="chat\.js"><\/script>/, '');
html = edit(html, 'edition flag', /<script>window\.MODULES = \[\];<\/script>/, `<script>window.HUB_EDITION = 'static'; window.MODULES = [];</script>`);
fs.writeFileSync(path.join(OUT, 'index.html'), html);

fs.copyFileSync(path.join(ROOT, 'app.js'), path.join(OUT, 'app.js'));
const modules = fs.readdirSync(path.join(ROOT, 'modules')).filter(f => f.endsWith('.js'));
for (const f of modules) fs.copyFileSync(path.join(ROOT, 'modules', f), path.join(OUT, 'modules', f));

fs.writeFileSync(path.join(OUT, 'README.md'), `# CFA Level I Economics: Study Hub (static edition) v${version}

Front-end only: open \`index.html\` in a browser, or upload this folder to any static web host.
There is no server, no build step and nothing to install.

## What's included
- 9 sub-modules covering the 8 CFA Level I Economics learning modules: lessons, diagrams, interactive labs, real-world examples
- Assessments: MCQ, match the following, true/false, classify, case studies
- Home dashboard with subject coverage, quiz coverage and accuracy (saved in your browser)
- Video lessons for Market Structures with in-video checkpoint questions

## Videos
- **Hosted on a web address** (GitHub Pages, Netlify, a school web server, \`python3 -m http.server\`): videos play inside the page and pause for checkpoint questions.
- **Opened directly from disk:** YouTube blocks its player in local files, so videos open in a YouTube tab and the checkpoint questions are listed under each video instead.

## Not included
The local Node server and the AI tutor pane. Those live in the full repository, because the AI tutor needs a server to keep the API key private.

## Files
- \`index.html\`: page shell and styles
- \`app.js\`: navigation, dashboard, quizzes, video player
- \`modules/*.js\`: one file per sub-module (content, labs, questions, videos)
`);

const zip = path.join(DIST, `${NAME}.zip`);
execFileSync('zip', ['-rq', '-X', zip, NAME], { cwd: DIST });

const files = ['index.html', 'app.js', 'README.md', ...modules.map(f => `modules/${f}`)];
console.log(`Built ${path.relative(ROOT, OUT)}/ (${files.length} files) and ${path.relative(ROOT, zip)} (${(fs.statSync(zip).size / 1024).toFixed(0)} KB)`);
