@echo off
setlocal enabledelayedexpansion

REM Backend start script (Windows cmd/PowerShell).
REM Usage: from repository root run: cd backend && start_backend.bat

cd /d "%~dp0"

REM Prefer project venv if present
if exist .venv\Scripts\activate.bat (
  call .venv\Scripts\activate.bat
) else (
  echo [WARN] .venv\Scripts\activate.bat not found. Using system Python.
)

REM Run FastAPI
python -m uvicorn app:app --reload --port 8000

