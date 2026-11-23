# -*- coding: utf-8 -*-
# sil.txt for captions_vo.mjs and onsets.py: silencedetect on assets/audio/vo_trimmed.wav (-35 dB, 80 ms), one "start end" per line.
#   python scratchpad/vo/silmap.py
import subprocess, re, sys
sys.stdout.reconfigure(encoding="utf-8")
FF = __import__("os").environ["FFMPEG_DIR"]
out = subprocess.run([FF + r"\ffmpeg.exe", "-i", "assets/audio/vo_trimmed.wav", "-af", "silencedetect=noise=-35dB:d=0.08", "-f", "null", "-"],
                     capture_output=True, text=True).stderr
s = [float(m) for m in re.findall(r"silence_start: ([\d.]+)", out)]
e = [float(m) for m in re.findall(r"silence_end: ([\d.]+)", out)]
pairs = list(zip(s, e))
if not pairs: sys.exit("REFUSING — no silences found in assets/audio/vo_trimmed.wav")
open("scratchpad/sil.txt", "w").write("\n".join(f"{a:.3f} {b:.3f}" for a, b in pairs) + "\n")
print(f"{len(pairs)} silences → scratchpad/sil.txt")
