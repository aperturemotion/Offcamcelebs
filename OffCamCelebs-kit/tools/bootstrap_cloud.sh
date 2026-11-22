#!/usr/bin/env bash
# bootstrap_cloud.sh: rebuild the OffCamCelebs working setup in a FRESH cloud container (Claude Code on the web), where
# only git survives: the repo's main branch clone, nothing else. Run from the repo root:
#
#   bash OffCamCelebs-kit/tools/bootstrap_cloud.sh            # everything (Earshot's models: ~1.5 GB, ~5 min)
#   SKIP_EARSHOT=1 bash OffCamCelebs-kit/tools/bootstrap_cloud.sh
#
# Then:  source /home/user/occ-work/env.sh
#
# What it does (idempotent; safe to re-run):
#   1. the work branch (claude/studio-handback-rule) checked out, and the LFS files (the kit zip, the EarnEdits pack zip)
#   2. the kit zip's files that git does not track (audio, beds, the reference films' assets) filled in beside the tracked
#      ones, never over them (git's copy is newer)
#   3. the EarnEdits SFX pack unzipped into OffCamCelebs/_sfx/earnedits (from the LFS zip beside it, when present)
#   4. ffmpeg as FFMPEG_DIR/ffmpeg.exe (the tools were written on Windows), HF_CHROME, the Python tools
#   5. Earshot (CPU torch, earshot[listen,mcp,measure], its two listening models) in /home/user/occ-work/earshot-venv
set -euo pipefail
REPO="$(git rev-parse --show-toplevel)"
cd "$REPO"
W=/home/user/occ-work
mkdir -p "$W"
BR=claude/studio-handback-rule

echo "── 1. branch and LFS"
git fetch -q origin "$BR" || true
if [ "$(git rev-parse --abbrev-ref HEAD)" != "$BR" ]; then
  git checkout -q "$BR" 2>/dev/null || git checkout -q -b "$BR" "origin/$BR"
fi
git pull -q --ff-only origin "$BR" || true
git lfs pull || echo "(git lfs pull failed: LFS files stay as pointers)"

echo "── 2. the kit zip's untracked files"
if [ -f offcamcelebs-kit.zip ] && [ "$(stat -c %s offcamcelebs-kit.zip)" -gt 1000000 ]; then
  T="$W/kitzip"; rm -rf "$T"; mkdir -p "$T"
  unzip -q -o offcamcelebs-kit.zip -d "$T" -x "*/node_modules/*" "__MACOSX/*"
  # copy only what is not already there (tracked files from git win)
  (cd "$T" && find . -type f -print0) | while IFS= read -r -d '' f; do
    [ -e "$REPO/$f" ] || { mkdir -p "$(dirname "$REPO/$f")"; cp "$T/$f" "$REPO/$f"; }
  done
  rm -rf "$T"
else
  echo "(kit zip missing or still an LFS pointer)"
fi

echo "── 3. the EarnEdits pack"
EE="$REPO/OffCamCelebs-kit/OffCamCelebs/_sfx/earnedits"
PZ="$REPO/OffCamCelebs-kit/OffCamCelebs/_sfx/EarnEdits-SFX-Pack.zip"
if ! ls "$EE"/10\ Whooshes/*.mp3 >/dev/null 2>&1; then
  if [ -f "$PZ" ] && [ "$(stat -c %s "$PZ")" -gt 1000000 ]; then
    T="$W/eezip"; rm -rf "$T"; mkdir -p "$T"; unzip -q -o "$PZ" -d "$T" -x "__MACOSX/*"
    cp -r "$T"/EarnEdits-SFX\ Pack/0* "$T"/EarnEdits-SFX\ Pack/10* "$EE"/ && rm -rf "$T"
    find "$EE" -name ".trashed*" -delete
  else
    echo "!! the EarnEdits pack is NOT available (no $PZ): ask Timur to attach EarnEdits-SFX-Pack.zip"
  fi
fi
echo "   $(find "$EE" -name '*.mp3' | wc -l) EarnEdits sounds"

echo "── 4. ffmpeg, Chrome, Python tools"
mkdir -p "$W/ff"
ln -sf "$(command -v ffmpeg)" "$W/ff/ffmpeg.exe"; ln -sf "$(command -v ffprobe)" "$W/ff/ffprobe.exe"
CH=$(ls -d /opt/pw-browsers/chromium-*/chrome-linux64/chrome 2>/dev/null | sort | tail -1)
cat > "$W/env.sh" <<EOF
export FFMPEG_DIR=$W/ff
export HF_CHROME=$CH
export HYPERFRAMES_RENDER_DETACHED=1
export PATH=$W/earshot-venv/bin:\$PATH
EOF
python3 -m pip install -q --break-system-packages numpy scipy pillow soundfile faster-whisper 2>/dev/null \
  || python3 -m pip install -q numpy scipy pillow soundfile faster-whisper

echo "── 5. Earshot"
if [ "${SKIP_EARSHOT:-0}" != "1" ] && [ ! -x "$W/earshot-venv/bin/earshot" ]; then
  python3 -m venv "$W/earshot-venv"
  "$W/earshot-venv/bin/pip" install -q --upgrade pip
  "$W/earshot-venv/bin/pip" install -q torch --index-url https://download.pytorch.org/whl/cpu
  "$W/earshot-venv/bin/pip" install -q "earshot[listen,mcp,measure] @ git+https://github.com/Leonxlnx/earshot"
  "$W/earshot-venv/bin/earshot" doctor --fetch >/dev/null
  ln -sf "$W/earshot-venv/bin/earshot" /usr/local/bin/earshot
fi
command -v earshot >/dev/null && echo "   earshot ready" || echo "   earshot skipped"
echo "── done. source $W/env.sh"
