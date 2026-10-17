@echo off
REM Windows launcher: double-click to start the Study Hub server and open it in your browser.
REM Close this window to stop the server.
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install it from https://nodejs.org ^(LTS^), then run this file again.
  pause
  exit /b 1
)
if not exist "node_modules\@anthropic-ai\sdk" (
  echo Installing the AI tutor package ^(first run only^)...
  call npm install --no-fund --no-audit
)
node server.js
pause
