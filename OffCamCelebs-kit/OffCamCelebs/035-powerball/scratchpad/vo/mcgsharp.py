# -*- coding: utf-8 -*-
# HIS PHOTO (032), 031's musksharp.py re-measured for this photo:
#   0. the user's public/MCGREGOR_CONORnobelt.webp (520 × 325): a head-and-chest portrait ALREADY CUT OUT (64% transparent,
#      the background's white gone). Him alone: nobody else in any pixel (looked at, 2026-10-14). No rembg needed.
#   1. DEFRINGE: the white he was cut from sits in the part-transparent pixels round his hair, ears and shoulders. Each pixel
#      under alpha 250 takes the colour of the nearest solid one (its alpha is kept), so the edge is his own colour.
#   2. ×3 LANCZOS (520 → 1560 px): the hook draws him ~560–700 px wide, so the browser always draws the image DOWN.
#   3. a light UNSHARP MASK on the colour (radius 1.6 px at the new size, 55%, threshold 2), as 029–031.
#   4. the photo's straight FOOT (the cut across his chest: row 324 is opaque from x 80 to 441) falls away over source rows
#      FADE_A → FADE_B: no straight edge of the photo is ever drawn. His hair's top sits 2 rows under the image's top (alpha
#      39 in row 0), so the top 3 rows fade too.
#   Colour: as recorded (the standing rule: a subject's photo is never greyscale or sepia).
#   python scratchpad/vo/mcgsharp.py   → assets/mcgregor_sharp.png
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
sys.stdout.reconfigure(encoding="utf-8")

SRC, OUT = "public/MCGREGOR_CONORnobelt.webp", "assets/mcgregor_sharp.png"
W0, H0 = 520, 325
FADE_A, FADE_B = 262, H0            # source rows: from his upper chest to the foot
TOP_FADE = 3                        # source rows faded at the top (the hair's crown is within 2 px of the edge)
im = Image.open(SRC).convert("RGBA")
if im.size != (W0, H0):
    sys.exit(f"REFUSING — {SRC} is {im.size}; this was written for {(W0, H0)}")
px = np.asarray(im).astype(np.float32)
solid = px[..., 3] >= 250
_, (iy, ix) = ndimage.distance_transform_edt(~solid, return_indices=True)
rgb0 = px[..., :3].copy()
edge = (px[..., 3] > 0) & ~solid
rgb0[edge] = px[iy[edge], ix[edge], :3]
fixed = np.dstack([rgb0, px[..., 3]]).clip(0, 255).astype(np.uint8)
S = 3
big = Image.fromarray(fixed, "RGBA").resize((W0 * S, H0 * S), Image.LANCZOS)
rgb = big.convert("RGB").filter(ImageFilter.UnsharpMask(radius=1.6, percent=55, threshold=2))
a = np.asarray(big.getchannel("A")).astype(np.float32)
sm = lambda t: t * t * (3 - 2 * t)  # smoothstep: no visible band where a fade starts
ys = (np.arange(H0 * S, dtype=np.float32) + 0.5) / S
fy = (1 - sm(np.clip((ys - FADE_A) / (FADE_B - FADE_A), 0, 1))) * sm(np.clip(ys / TOP_FADE, 0, 1))
a = a * fy[:, None]
out = np.dstack([np.asarray(rgb), a.clip(0, 255).astype(np.uint8)])
Image.fromarray(out, "RGBA").save(OUT, optimize=True)
# proof: the foot row is fully transparent; a halo pixel no longer carries the background's white
A = out[..., 3]
assert A[-1].max() == 0 and A[0].max() == 0, "the photo's straight edges still show"
halo = (A > 10) & (A < 200)
d = np.abs(out[..., :3].astype(np.float32)[halo] - 255).sum(axis=1)
print(f"→ {OUT} {out.shape[1]}×{out.shape[0]} · {halo.sum()} edge px, {np.mean(d < 40) * 100:.1f}% still background-white")
