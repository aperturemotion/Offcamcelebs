#!/bin/bash
# framemux.sh — encode renders/frames/f%04d.png with the film's own mix into the master MP4 (see framerender.mjs)
set -e
cd "$(dirname "$0")/.."
N=$(ls renders/frames/f????.png | wc -l)
[ "$N" -ge 1765 ] || { echo "only $N of 1765 frames"; exit 1; }
FFMPEG_DIR=/home/user/occ-work/ff node scratchpad/vo/mixprobe.mjs out | tail -1
# master to the references' loudness (−14 LUFS, measured on all five; TP −1), two-pass loudnorm
J=$(ffmpeg -hide_banner -i out/mix.wav -af loudnorm=I=-14:TP=-1.0:LRA=7:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
M=$(echo "$J" | python3 -c "import json,sys;d=json.load(sys.stdin);print(f\"measured_I={d['input_i']}:measured_TP={d['input_tp']}:measured_LRA={d['input_lra']}:measured_thresh={d['input_thresh']}:offset={d['target_offset']}\")")
ffmpeg -y -v error -i out/mix.wav -af "loudnorm=I=-14:TP=-1.0:LRA=7:$M:linear=true" -ar 48000 out/mix_master.wav
ffmpeg -y -v error -framerate 30 -i renders/frames/f%04d.png -i out/mix_master.wav -map 0:v -map 1:a -c:v libx264 -preset slow -crf 16 -pix_fmt yuv420p -c:a aac -b:a 256k -shortest -movflags +faststart renders/bought_for_790m_038_hf.mp4
ls -la renders/bought_for_790m_038_hf.mp4
