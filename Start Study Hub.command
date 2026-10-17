#!/bin/bash
# macOS launcher: double-click to start the Study Hub server and open it in your browser.
# Close this Terminal window (or press Ctrl+C) to stop the server.
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js was not found. Install it from https://nodejs.org (LTS), then double-click this file again."
  read -n 1 -s -r -p "Press any key to close."
  exit 1
fi
# First run on a new computer: install the AI tutor's SDK
if [ ! -d node_modules/@anthropic-ai/sdk ]; then
  echo "Installing the AI tutor package (first run only)..."
  npm install --no-fund --no-audit || echo "Install failed: the hub will still run, but the AI tutor won't."
fi
exec node server.js
