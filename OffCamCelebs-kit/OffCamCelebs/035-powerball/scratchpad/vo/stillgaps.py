# -*- coding: utf-8 -*-
# ★ RULE 50 companion to motionstats.py: WHERE the dead-still stretches are. Lists every run of frames in which nothing in
# the object band changes, longest first, with its frame span and seconds, so a long freeze can be traced to its scene.
# The references' longest freezes measured 1.0–1.6 s (30–48 f); anything longer is listed as LONG.
#   python scratchpad/stillgaps.py <frames_dir> [min_frames=30] [y0_frac=0.34] [y1_frac=0.80]
import sys, glob
import numpy as np
from PIL import Image

d = sys.argv[1]
mn = int(sys.argv[2]) if len(sys.argv) > 2 else 30
y0f = float(sys.argv[3]) if len(sys.argv) > 3 else 0.34
y1f = float(sys.argv[4]) if len(sys.argv) > 4 else 0.80
fs = sorted(glob.glob(d + "/*.png"))
if len(fs) < 10:
    sys.exit("REFUSING: fewer than 10 frames in " + d)
W = 360
prev, diffs = None, []
for f in fs:
    im = Image.open(f).convert("L")
    w, h = im.size
    im = im.resize((W, int(h * W / w)), Image.BILINEAR)
    a = np.asarray(im, np.float32)
    H = a.shape[0]
    a = a[int(H * y0f):int(H * y1f)]
    if prev is not None:
        diffs.append(np.abs(a - prev).mean())
    prev = a
diffs = np.array(diffs)
floor = max(0.15, np.percentile(diffs, 20) * 1.5)
moving = diffs > floor
gaps, i = [], 0
while i < len(moving):
    j = i
    while j < len(moving) and moving[j] == moving[i]:
        j += 1
    if not moving[i] and j - i >= mn:
        gaps.append((j - i, i + 1, j))   # diff i compares frame i and i+1, so the still frames are i+1..j
    i = j
gaps.sort(reverse=True)
print(f"{len(gaps)} still stretch(es) >= {mn} f (noise floor {floor:.2f})")
for n, a, b in gaps:
    print(f"  {a:5d}-{b:5d}  {n:3d} f  {n / 30:.2f} s" + ("  LONG" if n > 48 else ""))
