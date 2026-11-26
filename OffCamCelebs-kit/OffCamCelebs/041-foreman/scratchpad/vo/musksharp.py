# -*- coding: utf-8 -*-
# HIS PHOTO (031), after the cut-out — 030's jpsharp.py, re-measured for this photo:
#   0. the user's public/face.webp (700 × 816, a studio portrait on a plain grey backdrop, him alone: nobody else in any
#      pixel) → assets/photo/musk_src.png → cut out with isnet-general-use + alpha matting: assets/photo/cut_isnet.png
#      (u2net_human_seg broke the hair's right side into grey blocks).
#   1. DEFRINGE: the backdrop's grey sat in every part-transparent pixel of the hair and the ear, a light halo on the dark
#      ground. Each pixel under alpha 250 takes the colour of the nearest solid one (its alpha is kept), so the edge is his
#      hair's own colour, never the studio's.
#   2. ×2 LANCZOS (700 → 1400 px): the hook draws him up to ~900 px, so the browser always draws the image DOWN. Lanczos only.
#   3. a light UNSHARP MASK on the colour (radius 1.4 px at the new size, 60%, threshold 2), as 029/030.
#   4. the photo's straight FOOT (a cut across his jacket) falls away over source rows FADE_A → FADE_B, and its RIGHT edge (his
#      left sleeve runs off the frame there) fades over its last SIDE_R columns: no straight edge of the photo is ever drawn.
#   Colour: as recorded (the standing rule: a subject's photo is never greyscale or sepia).
#   python scratchpad/vo/musksharp.py   → assets/musk_sharp.png
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
sys.stdout.reconfigure(encoding="utf-8")

SRC, OUT = "assets/photo/cut_isnet.png", "assets/musk_sharp.png"
W0, H0 = 700, 816
FADE_A, FADE_B = 690, H0            # source rows: from the jacket's lower chest to the foot
SIDE_L, SIDE_R = 4, 46              # source columns faded at the left and right edges
im = Image.open(SRC).convert("RGBA")
if im.size != (W0, H0):
    sys.exit(f"REFUSING — {SRC} is {im.size}; this was written for {(W0, H0)}")
px = np.asarray(im).astype(np.float32)
solid = px[..., 3] >= 250
# the nearest solid pixel to every pixel (Euclidean), and its colour
_, (iy, ix) = ndimage.distance_transform_edt(~solid, return_indices=True)
rgb0 = px[..., :3].copy()
edge = (px[..., 3] > 0) & ~solid
rgb0[edge] = px[iy[edge], ix[edge], :3]
fixed = np.dstack([rgb0, px[..., 3]]).clip(0, 255).astype(np.uint8)
S = 2
big = Image.fromarray(fixed, "RGBA").resize((W0 * S, H0 * S), Image.LANCZOS)
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
# proof: the foot row and the right edge column are fully transparent; a halo pixel no longer carries the backdrop's grey
A = out[..., 3]
assert A[-1].max() == 0 and A[:, -1].max() == 0, "the photo's straight edges still show"
grey = np.array([205, 205, 205], np.float32)
halo = (A > 10) & (A < 200)
d = np.abs(out[..., :3].astype(np.float32)[halo] - grey).sum(axis=1)
print(f"→ {OUT} {out.shape[1]}×{out.shape[0]} · {halo.sum()} edge px, {np.mean(d < 40) * 100:.1f}% still backdrop-grey")
