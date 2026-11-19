#!/bin/bash
# framerun.sh — launch (or re-launch after a restart) the resumable render: 4 workers, detached
cd "$(dirname "$0")/.."
mkdir -p renders/frames; rm -f renders/frames/*.part.png
export HF_CHROME=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome
for w in 0 1 2 3; do setsid nohup node scratchpad/framerender.mjs $w 4 > renders/frames_w$w.log 2>&1 < /dev/null & done
