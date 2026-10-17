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

## Without the server

Opening `index.html` directly still works for everything except inline video and the AI tutor. Videos then open in a new YouTube tab.

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
