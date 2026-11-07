@echo off
rem Double-click launcher for start-olx.ps1 (bypasses execution policy)
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-olx.ps1" %*
pause
