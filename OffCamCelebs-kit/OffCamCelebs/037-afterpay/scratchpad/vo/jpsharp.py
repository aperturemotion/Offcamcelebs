# -*- coding: utf-8 -*-
# HIS PHOTO (030), after the cut-out — 029's maysharp.py, re-measured for this photo:
#   0. the user's public/face.avif (640 × 637) was converted to PNG and CROPPED to x 0–611 BEFORE the cut-out: a sliver of
#      another person's white sleeve stood at x ≈ 615–640 in the lower third (root CLAUDE.md, assets: nobody else in any
#      pixel the film loads). Cut out with u2net_human_seg + alpha matting (isnet left a see-through patch on his left
#      sleeve): assets/photo/cut_human.png.
#   1. ×2 LANCZOS (612 → 1224 px): the hook draws him at D 760, up to ~912 px at the opening's zoom 1.2, so the browser
#      always draws the image DOWN, never up. Nothing is invented: Lanczos only.
#   2. a light UNSHARP MASK on the colour (radius 1.4 px at the new size, 60%, threshold 2), as 029.
#   3. his WAIST FALLS INTO SHADOW below his fists and watches (source rows FADE_A → FADE_B, the photo's straight foot),
#      and the two SIDE cuts (his left sleeve at the source's left edge, his right forearm at the crop) fade out over
#      their last columns, so no straight edge of the photo is ever drawn.
#   python scratchpad/vo/jpsharp.py   → assets/jakepaul_sharp.png
import sys
import numpy as np
from PIL import Image, ImageFilter
sys.stdout.reconfigure(encoding="utf-8")

SRC, OUT = "assets/photo/cut_human.png", "assets/jakepaul_sharp.png"
W0, H0 = 612, 637
FADE_A, FADE_B = 560, H0            # source rows: the waist, below the fists (≤ 555) and the watches
SIDE_L, SIDE_R = 16, 40             # source columns faded at the left and right edges
im = Image.open(SRC).convert("RGBA")
if im.size != (W0, H0):
    sys.exit(f"REFUSING — {SRC} is {im.size}; this was written for {(W0, H0)}")
S = 2
big = im.resize((W0 * S, H0 * S), Image.LANCZOS)
rgb = big.convert("RGB").filter(ImageFilter.UnsharpMask(radius=1.4, percent=60, threshold=2))
a = np.asarray(big.getchannel("A")).astype(np.float32)
sm = lambda t: t * t * (3 - 2 * t)  # smoothstep: no visible band where a fade starts
ys = (np.arange(H0 * S, dtype=np.float32) + 0.5) / S
xs = (np.arange(W0 * S, dtype=np.float32) + 0.5) / S
fy = 1 - sm(np.clip((ys - FADE_A) / (FADE_B - FADE_A), 0, 1))
fx = sm(np.clip(xs / SIDE_L, 0, 1)) * sm(np.clip((W0 - xs) / SIDE_R, 0, 1))
a = a * fy[:, None] * fx[None, :]
out = np.dstack([np.asarray(rgb), a.clip(0, 255).astype(np.uint8)])
Image.fromarray(out, "RGBA").save(OUT, optimize=True)
# proof: the foot row and both edge columns are fully transparent, the fade's start row untouched in the middle
A = out[..., 3]
mid = slice(W0 * S // 4, 3 * W0 * S // 4)
print(f"wrote {OUT} {W0 * S}x{H0 * S}; alpha max at row {FADE_A * S - 1} (middle half): {A[FADE_A * S - 1, mid].max()}, "
      f"at the foot: {A[-1].max()}, left col: {A[:, 0].max()}, right col: {A[:, -1].max()}")
if A[-1].max() > 0 or A[:, 0].max() > 0 or A[:, -1].max() > 0 or A[FADE_A * S - 1, mid].max() < 250:
    sys.exit("REFUSING — the fades did not land where they were written to")
