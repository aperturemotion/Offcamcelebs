#!/bin/bash
# draftrun.sh <quality> [res=0.5] — a DRAFT render of the whole film in a preview quality (world.ts: fast / flat / clay),
#   4 workers into renders/draft_<quality>/, then encoded with the film's mastered mix to renders/draft_<quality>.mp4
#   (crf 23, fast preset: a review copy). Prints the wall time.
set -e
cd "$(dirname "$0")/.."
Q=${1:?quality}; RES=${2:-0.5}; D=renders/draft_$Q
mkdir -p $D; rm -f $D/*.part.png
export HF_CHROME=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome QUALITY=$Q RES=$RES
t0=$(date +%s)
for w in 0 1 2 3; do node scratchpad/framerender.mjs $w 4 1764 $D > $D/w$w.log 2>&1 & done
wait
t1=$(date +%s)
[ -f out/mix_master.wav ] || bash -c 'echo "no out/mix_master.wav: run framemux.sh once"; exit 1'
ffmpeg -y -v error -framerate 30 -i $D/f%04d.png -i out/mix_master.wav -map 0:v -map 1:a -c:v libx264 -preset veryfast -crf 23 -pix_fmt yuv420p -c:a aac -b:a 160k -shortest -movflags +faststart renders/draft_$Q.mp4
t2=$(date +%s)
echo "draft $Q res $RES: frames $((t1-t0)) s, encode $((t2-t1)) s, total $((t2-t0)) s"; cat $D/w?.log | grep worker
