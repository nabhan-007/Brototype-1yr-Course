# nightly-push.ps1 — the nightly ritual, one command before leaving the hub:
#   powershell -ExecutionPolicy Bypass -File .\nightly-push.ps1
# add all → commit with date + your one-liner → push. Skips cleanly on rest days.
Set-Location $PSScriptRoot
gh auth switch --user nabhan-007 2>$null   # push fails with 403 if the active gh account isn't the repo owner
git add -A
if (git diff --cached --quiet) {
    Write-Host "Nothing changed today. Rest days are allowed - graph break it is."
    exit 0
}
$d = Get-Date -Format "dd/MM"
$m = Read-Host "What did you do today? [$d]"
if (-not $m) { $m = $d }
git commit -m "$d - $m"
git push
