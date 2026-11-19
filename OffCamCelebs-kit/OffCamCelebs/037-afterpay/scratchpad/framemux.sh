#!/bin/bash
# framemux.sh — encode renders/frames/f%04d.png with the film's own mix into the master MP4 (see framerender.mjs)
set -e
cd "$(dirname "$0")/.."
N=$(ls renders/frames/f????.png | wc -l)
[ "$N" -ge 1884 ] || { echo "only $N of 1884 frames"; exit 1; }
FFMPEG_DIR=/home/user/occ-work/ff node scratchpad/vo/mixprobe.mjs out | tail -1
ffmpeg -y -v error -framerate 30 -i renders/frames/f%04d.png -i out/mix.wav -map 0:v -map 1:a -c:v libx264 -preset slow -crf 16 -pix_fmt yuv420p -c:a aac -b:a 256k -shortest -movflags +faststart renders/afterpay_29b_or_13_8b_037_hf.mp4
ls -la renders/afterpay_29b_or_13_8b_037_hf.mp4
