@echo off
title DCAS CPG 2025 Server
cd /d "%~dp0"

echo ========================================
echo   DCAS CPG 2025 - Local Dev Server
echo ========================================
echo.

:: Kill anything on port 8899
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8899.*LISTENING"') do (
    echo Killing process on port 8899 (PID: %%a)...
    taskkill /PID %%a /F >nul 2>&1
)

:: Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH.
    pause
    exit /b 1
)

:: Create venv if missing
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

call venv\Scripts\activate.bat

echo Installing dependencies...
pip install -q -r requirements.txt 2>nul

echo.
echo Starting server on http://127.0.0.1:8899
echo.
echo Press Ctrl+C to stop the server.
echo.

:: Start server in background
start "DCAS Server" /min python server.py

:: Wait for server to start
timeout /t 2 /nobreak >nul

:: Open browser in NEW Chrome window
start chrome --new-window http://127.0.0.1:8899/ 2>nul || start "" http://127.0.0.1:8899/

echo Server running. Close this window when done.
pause >nul
