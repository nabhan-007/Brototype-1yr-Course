# ============================================================
#  cleanup.ps1 — Delete C/C++ compilation artifacts
#  Extensions removed: .exe  .ilk  .obj  .pdb
# ============================================================

$rootPath   = $PSScriptRoot          # runs relative to the script's location
$extensions = @("*.exe", "*.ilk", "*.obj", "*.pdb")
$totalSize  = 0
$count      = 0

Write-Host "`n🧹 Scanning for compilation artifacts in:" -ForegroundColor Cyan
Write-Host "   $rootPath`n" -ForegroundColor Gray

foreach ($ext in $extensions) {
    $files = Get-ChildItem -Path $rootPath -Filter $ext -Recurse -File -ErrorAction SilentlyContinue

    foreach ($file in $files) {
        $totalSize += $file.Length
        $count++
        Write-Host "  [-] $($file.FullName)" -ForegroundColor Yellow
        Remove-Item -Path $file.FullName -Force
    }
}

# ── Summary ─────────────────────────────────────────────────
$sizeMB = [math]::Round($totalSize / 1MB, 2)

Write-Host ""
if ($count -eq 0) {
    Write-Host "✅ No compilation artifacts found. Already clean!" -ForegroundColor Green
} else {
    Write-Host "✅ Done! Removed $count file(s) ($sizeMB MB freed)." -ForegroundColor Green
}
Write-Host ""
