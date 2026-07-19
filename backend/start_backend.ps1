# Backend start script (PowerShell)
# Usage: from repository root run: cd backend; .\start_backend.ps1

$ErrorActionPreference = 'Stop'

Set-Location $PSScriptRoot

# Prefer project venv
if (Test-Path '.venv\Scripts\Activate.ps1') {
  . .venv\Scripts\Activate.ps1
} else {
  Write-Host '[WARN] .venv\Scripts\Activate.ps1 not found. Using system Python.'
}

python -m uvicorn app:app --reload --port 8000

