# setup.ps1 — makes a fresh Windows machine ready to build OffCamCelebs films from this kit. Safe to run again.
#   powershell -NoProfile -ExecutionPolicy Bypass -File .\setup.ps1
# Writes setup-result.json beside itself: every step with ok / error, and the proofs at the end.
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$film = Join-Path $root "OffCamCelebs\034-ohtani"
$result = [ordered]@{ started = (Get-Date -Format s); steps = [ordered]@{} }
function Step($name, [scriptblock]$body) {
  Write-Host "== $name"
  try { $out = & $body; $result.steps[$name] = [ordered]@{ ok = $true; info = "$out" } ; Write-Host "   ok $out" }
  catch { $result.steps[$name] = [ordered]@{ ok = $false; error = "$($_.Exception.Message)" }; Write-Host "   FAILED: $($_.Exception.Message)" -ForegroundColor Red }
}
function RefreshPath { $env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User") }
function Have($cmd) { [bool](Get-Command $cmd -ErrorAction SilentlyContinue) }
function WingetInstall($id) {
  & winget install --id $id -e --silent --accept-package-agreements --accept-source-agreements --disable-interactivity | Out-Null
  RefreshPath
}

# ── 1. the tools ──
Step "node" {
  if (-not (Have node)) { WingetInstall "OpenJS.NodeJS.LTS" }
  if (-not (Have node)) { throw "node not found after install (open a new terminal and run setup again)" }
  (& node -v)
}
Step "python" {
  $ok = $false
  if (Have python) { $v = (& python --version 2>&1) ; if ("$v" -match "Python 3\.(1[0-4])") { $ok = $true } }
  if (-not $ok) { WingetInstall "Python.Python.3.12"; RefreshPath }
  (& python --version 2>&1)
}
Step "ffmpeg" {
  $ff = Get-Command ffmpeg -ErrorAction SilentlyContinue
  if (-not $ff) {
    WingetInstall "Gyan.FFmpeg"
    $ff = Get-Command ffmpeg -ErrorAction SilentlyContinue
    if (-not $ff) {
      $hit = Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Recurse -Filter ffmpeg.exe -ErrorAction SilentlyContinue | Select-Object -First 1
      if ($hit) { $ff = $hit }
    }
  }
  if (-not $ff) { throw "ffmpeg.exe not found" }
  $dir = Split-Path -Parent ($(if ($ff.Source) { $ff.Source } else { $ff.FullName }))
  [Environment]::SetEnvironmentVariable("FFMPEG_DIR", $dir, "User"); $env:FFMPEG_DIR = $dir
  $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
  if ($userPath -notlike "*$dir*") { [Environment]::SetEnvironmentVariable("Path", "$userPath;$dir", "User"); RefreshPath }
  $dir
}

# ── 2. the Python side: whisper (transcripts), numpy/scipy/Pillow (levels, sweeps), rembg (photo cut-outs) ──
Step "pip" {
  & python -m pip install --upgrade pip --quiet
  & python -m pip install --quiet faster-whisper numpy scipy pillow "rembg[cpu]"
  if ($LASTEXITCODE -ne 0) { throw "pip install failed ($LASTEXITCODE)" }
  "faster-whisper numpy scipy pillow rembg"
}
# ── 2b. Earshot (Timur, 2026-11-22: "set up these tools… Earshot, in order to understand sound effects better"): hears a
#        sound and says what it is (CLAP + AudioSet models, CPU), as a CLI and an MCP server; tools/sfx_catalogue.py uses it ──
Step "earshot" {
  & python -m pip install --quiet torch --index-url https://download.pytorch.org/whl/cpu
  & python -m pip install --quiet "earshot[listen,mcp,measure] @ git+https://github.com/Leonxlnx/earshot"
  if ($LASTEXITCODE -ne 0) { throw "earshot install failed ($LASTEXITCODE)" }
  & python -m earshot doctor --fetch | Out-Null
  if ($LASTEXITCODE -ne 0) { throw "earshot models failed" }
  & claude mcp add --scope user earshot -- python -m earshot mcp 2>$null | Out-Null
  "earshot + its listening models (MCP server 'earshot' registered for Claude Code)"
}
Step "whisper-model" {
  & python -c "from faster_whisper import WhisperModel; WhisperModel('small.en', device='cpu', compute_type='int8'); print('small.en ready')"
  if ($LASTEXITCODE -ne 0) { throw "whisper model download failed" }
  "small.en"
}

# ── 3. the template film and HyperFrames ──
Step "npm-install-034" {
  Push-Location $film
  try { & npm install --no-audit --no-fund; if ($LASTEXITCODE -ne 0) { throw "npm install failed" } } finally { Pop-Location }
  "034-ohtani"
}
Step "chrome" {
  Push-Location $film
  try {
    & npx --yes hyperframes@0.8.143 browser ensure | Out-Null
    $p = (& npx --yes hyperframes@0.8.143 browser path | Select-Object -Last 1).Trim()
  } finally { Pop-Location }
  if (-not (Test-Path $p)) { throw "chrome path not found: $p" }
  [Environment]::SetEnvironmentVariable("HF_CHROME", $p, "User"); $env:HF_CHROME = $p
  $p
}
Step "skills" {
  $dst = Join-Path $env:USERPROFILE ".claude\skills"
  New-Item -ItemType Directory -Force $dst | Out-Null
  $n = 0
  foreach ($d in Get-ChildItem (Join-Path $root "skills") -Directory) {
    if (-not (Test-Path (Join-Path $dst $d.Name))) { Copy-Item $d.FullName (Join-Path $dst $d.Name) -Recurse; $n++ }
  }
  "$n skill folder(s) copied (existing ones kept)"
}
Step "srvus-key" {
  $k = Join-Path $root "OffCamCelebs\_local\srvus-key"
  New-Item -ItemType Directory -Force $k | Out-Null
  if (-not (Test-Path "$k\tunnel_ed25519")) { & ssh-keygen -q -t ed25519 -N '""' -f "$k\tunnel_ed25519" | Out-Null }
  if (-not (Test-Path "$k\tunnel_ed25519")) { throw "ssh-keygen did not make the key" }
  "$k\tunnel_ed25519"
}

# ── 4. the proofs ──
Push-Location $film
try {
  Step "typecheck" { & npx tsc --noEmit -p . ; if ($LASTEXITCODE -ne 0) { throw "tsc failed" }; "clean" }
  Step "build" { (& node scripts/build.mjs | Select-Object -Last 1) }
  Step "render-guards" { $o = (& node scratchpad/render.mjs --check | Select-Object -Last 1); if ($LASTEXITCODE -ne 0) { throw "$o" }; $o }
  Step "ffmpeg-tool" { $o = (& python -c "import subprocess,os; print(subprocess.run([os.path.join(os.environ['FFMPEG_DIR'],'ffprobe.exe'),'-v','error','-show_entries','format=duration','-of','csv=p=0','assets/audio/vo_leveled.wav'],capture_output=True,text=True).stdout.strip())"); if (-not $o) { throw "ffprobe gave nothing" }; "vo_leveled.wav $o s" }
  Step "one-frame" {
    $d = Join-Path $env:TEMP "occ-setup-frame"
    & node scratchpad/sweep029.mjs frames 30 30 1 $d 0.5 | Out-Null
    if (-not (Test-Path (Join-Path $d "f0030.jpg"))) { throw "no frame captured" }
    (Join-Path $d "f0030.jpg")
  }
} finally { Pop-Location }

$result.finished = (Get-Date -Format s)
$result.allOk = -not ($result.steps.Values | Where-Object { -not $_.ok })
$result | ConvertTo-Json -Depth 5 | Out-File -Encoding utf8 (Join-Path $root "setup-result.json")
Write-Host ""
if ($result.allOk) { Write-Host "SETUP OK. Restart Claude Code so FFMPEG_DIR, HF_CHROME and the skills load." -ForegroundColor Green }
else { Write-Host "SETUP FINISHED WITH FAILURES: see setup-result.json" -ForegroundColor Yellow }
