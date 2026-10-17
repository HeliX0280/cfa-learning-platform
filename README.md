# CFA Level I Economics: Study Hub

An offline study hub for the 9 sub-modules of CFA Level I Economics. It includes lessons, diagrams, interactive labs, quizzes, a progress dashboard, and video lessons.

## Start it (so videos play inside the page)

YouTube's embedded player only works when the page is served from a web address, not opened as a file. The hub includes a small local server (`server.js`), which also powers the AI tutor. The launchers install the one package it needs (the Anthropic SDK) automatically on first run.

| How | Steps |
|---|---|
| **Mac** | Double-click `Start Study Hub.command` |
| **Windows** | Double-click `Start Study Hub.bat` |
| **Any OS** | In this folder run `npm start` (or `node server.js`) |

The hub opens at **http://127.0.0.1:8765**. Keep the server window open while you study. Close it (or press Ctrl+C) to stop.

Once the server is running, double-clicking `index.html` switches to the server version automatically.

**Requirements:** Node.js 18 or newer ([nodejs.org](https://nodejs.org)). To move the hub to another computer, copy this whole folder; nothing else is needed.

Options: `node server.js --port 9000` (different port) and `node server.js --no-open` (don't open a browser). `npm run serve` is the same as `--no-open`.

## AI tutor (right-hand pane)

Select any text in a lesson and click **✨ Ask AI**, or open the pane with the **✨ AI Tutor** button. The tutor is Claude (Anthropic), called by the local server. It knows which module and tab you're reading, and the one-click prompts help you start: "Explain simply", "Give an example", "Quiz me", "CFA exam angle".

**One-time setup**

1. In this folder, copy `.env.example` to a new file named `.env`.
2. Open `.env` and paste your Anthropic API key after `ANTHROPIC_API_KEY=`.
3. Restart the server. The server window should say `AI tutor: ready`.

The launchers run `npm install` automatically the first time, which installs the Anthropic SDK. If you start the server another way, run `npm install` once first.

**Privacy and cost:** the key stays on this computer. Only `server.js` reads it; it is never sent to the web page, and the server refuses to serve `.env`. Your questions and the text you select are sent to Anthropic to generate answers. Each answer uses API credits on your Anthropic account. The model is Claude Opus 5.5 (set in `chat-api.js`).

The conversation is kept until you close the browser tab. Click **↺ New** to clear it.

## Deploying (Railway or similar)

The same server runs on hosting platforms. When the platform sets `PORT`, the server listens on all interfaces and skips opening a browser.

1. Create a Railway project from this GitHub repo. Railway detects Node, runs `npm ci` and starts it with `npm start`. No build command is needed.
2. Under **Variables**, add `ANTHROPIC_API_KEY` to enable the AI tutor. Never commit the key to the repo.
3. Under **Settings → Networking**, generate a public domain.

**Cost control:** a public URL means anyone who finds it can use the AI tutor on your key. Each visitor is limited to 20 questions per 10 minutes. You can change this with the `CHAT_RATE_LIMIT` and `CHAT_RATE_WINDOW_MIN` variables. Set a monthly spend limit in the Anthropic Console as well.

## Without the server

Opening `index.html` directly still works for everything except inline video and the AI tutor. Videos then open in a new YouTube tab.

## Static package (no server)

A front-end-only edition (no Node server, no AI tutor) is published as a zip on the repository's **Releases** page. Open its `index.html` directly, or upload the folder to any static host (GitHub Pages, Netlify); hosted, the videos play inline with checkpoint questions. To rebuild it: `npm run build:static`, which writes `dist/cfa-study-hub-static.zip`.

## Progress

Progress (sections read, quiz answers, notes, videos watched) is saved in your browser. Browsers keep it separately for each address, so progress made at `http://127.0.0.1:8765` and progress made from the opened file are tracked separately. Using the server every time keeps it in one place.

## Structure

- `index.html`: page shell and styles
- `app.js`: navigation, dashboard, quizzes, video player
- `modules/*.js`: one file per sub-module (content, labs, questions, videos)
- `chat.js`: the AI tutor pane (selection → Ask AI, chat, streaming display)
- `server.js`, `package.json`: the local server
- `chat-api.js`: the server side of the AI tutor (calls Claude using the key from `.env`)
- `.env.example`: template for your API key (`.env` itself is private and git-ignored)
- `scripts/build-static.js`: builds the static package into `dist/`
