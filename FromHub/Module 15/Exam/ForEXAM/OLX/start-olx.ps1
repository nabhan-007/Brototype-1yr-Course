# start-olx.ps1 — one command for the whole OLX stack (Mongo -> backend -> frontend).
#   .\start-olx.ps1          start whatever is down (skips what's already running)
#   .\start-olx.ps1 -Seed    same, plus reset demo data (node seed.js) — exam-day move
param([switch]$Seed)

$root     = Split-Path -Parent $MyInvocation.MyCommand.Path   # the OLX folder this script lives in
$backend  = Join-Path $root 'olx-backend'
$frontend = Join-Path $root 'olx-frontend'
$logs     = Join-Path $root 'logs'
$dbpath   = Join-Path $env:USERPROFILE 'data\db'              # per-user data folder — no hardcoded paths

function Test-Port([int]$Port) {
  [bool](Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue)
}

# 1. MongoDB -----------------------------------------------------------------
if (Test-Port 27017) {
  'MongoDB      : already running (port 27017)'
} else {
  $mongod = Get-ChildItem 'C:\Program Files\MongoDB\Server\*\bin\mongod.exe' -ErrorAction SilentlyContinue |
            Sort-Object FullName -Descending | Select-Object -First 1 -ExpandProperty FullName
  if (-not $mongod) { $mongod = (Get-Command mongod -ErrorAction SilentlyContinue).Source }
  if (-not $mongod) { throw 'mongod.exe not found — install MongoDB Community (local) first, then re-run.' }
  New-Item -ItemType Directory -Force $dbpath | Out-Null
  Start-Process -FilePath $mongod -ArgumentList "--dbpath `"$dbpath`" --port 27017 --logpath `"$dbpath\mongod.log`"" -WindowStyle Hidden
  'MongoDB      : starting...'
}

# 1b. First-run convenience: backend/.env from the example, if missing --------
$envFile = Join-Path $backend '.env'
$envExample = Join-Path $backend '.env.example'
if (-not (Test-Path $envFile) -and (Test-Path $envExample)) {
  Copy-Item $envExample $envFile
  'Backend .env : created from .env.example'
}

# 2. Backend -----------------------------------------------------------------
if (Test-Port 5000) {
  'Backend      : already running (port 5000)'
} else {
  New-Item -ItemType Directory -Force $logs | Out-Null
  Start-Process -FilePath 'cmd.exe' -ArgumentList '/c npm start' -WorkingDirectory $backend -WindowStyle Hidden `
    -RedirectStandardOutput (Join-Path $logs 'backend.out.log') -RedirectStandardError (Join-Path $logs 'backend.err.log')
  'Backend      : starting...'
}

# 3. Frontend ----------------------------------------------------------------
if (Test-Port 5173) {
  'Frontend     : already running (port 5173)'
} else {
  New-Item -ItemType Directory -Force $logs | Out-Null
  Start-Process -FilePath 'cmd.exe' -ArgumentList '/c npm run dev' -WorkingDirectory $frontend -WindowStyle Hidden `
    -RedirectStandardOutput (Join-Path $logs 'frontend.out.log') -RedirectStandardError (Join-Path $logs 'frontend.err.log')
  'Frontend     : starting...'
}

# 4. Wait + verify -------------------------------------------------------------
$deadline = (Get-Date).AddSeconds(40)
while ((Get-Date) -lt $deadline) {
  if ((Test-Port 27017) -and (Test-Port 5000) -and (Test-Port 5173)) { break }
  Start-Sleep -Seconds 2
}

if ($Seed) {
  Push-Location $backend
  node seed.js
  Pop-Location
}

try   { $count = (Invoke-RestMethod 'http://localhost:5000/api/products' -TimeoutSec 5).data.Count; $api = "API OK - $count live listings" }
catch { $api = 'API NOT RESPONDING - check logs\backend.err.log' }

'---'
if ((Test-Port 27017) -and (Test-Port 5000) -and (Test-Port 5173) -and ($api -like 'API OK*')) {
  "ALL UP - open http://localhost:5173  ($api)"
} else {
  "NOT fully up: mongo=$(Test-Port 27017) backend=$(Test-Port 5000) frontend=$(Test-Port 5173) | $api"
}
