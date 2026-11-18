# popmp4.py — one-frame flashes in the RENDERED MP4 (root CLAUDE.md: scan the MP4's decoded frames before handback).
# Decodes every frame at 270×480 and flags a frame that jumps away from BOTH neighbours while they agree with each other
# (a reversal: something there for one frame only). Canary first: a planted one-frame block must fire.
import sys, subprocess, numpy as np
BIN = __import__("os").path.join(__import__("os").environ["FFMPEG_DIR"], "ffmpeg.exe")
W, H = 270, 480
raw = subprocess.run([BIN, "-v", "error", "-i", sys.argv[1], "-vf", f"scale={W}:{H}", "-f", "rawvideo", "-pix_fmt", "gray", "-"], capture_output=True).stdout
fr = np.frombuffer(raw, np.uint8).reshape(-1, H, W).astype(np.int16)
def scan(fr):
    hits = []
    for i in range(1, len(fr) - 1):
        a, b, c = fr[i - 1], fr[i], fr[i + 1]
        ab, bc, ac = np.abs(b - a), np.abs(c - b), np.abs(c - a)
        # pixels that left both neighbours (> 40 levels) while the neighbours agree (< 12)
        m = (ab > 40) & (bc > 40) & (ac < 12)
        n = int(m.sum())
        if n > 60: hits.append((i, n))
    return hits
can = fr[100:103].copy(); can[1, 200:240, 100:150] = 255 - can[1, 200:240, 100:150]
if not scan(can) or scan(fr[100:103]):
    sys.exit("REFUSED: the canary failed")
h = scan(fr)
# a FLASH is isolated: a run of flagged frames is motion over a repeating pattern (a brick wall trucking), not a flash
hs = {i for i, _ in h}
iso = [(i, n) for i, n in h if (i - 1) not in hs and (i + 1) not in hs]
print(f"{len(fr)} frames decoded; reversal frames {len(h)} (in motion runs), ISOLATED one-frame flashes: {len(iso)}", iso[:30])
