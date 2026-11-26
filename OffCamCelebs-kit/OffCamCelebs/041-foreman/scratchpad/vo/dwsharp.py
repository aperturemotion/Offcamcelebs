# -*- coding: utf-8 -*-
# HIS PHOTO (033), v2 (the user, 2026-10-21: "fix the guy's cutout, it seems low quality"). v1 used rembg's ALPHA MATTING,
# which feathered the outline into a soft haze round his scalp and ear (seen at full size on the hook). v2:
#   0. public/danawhite_face.jpg (900 × 900, him alone on a near-black studio backdrop) → assets/photo/dw_src.png;
#      isnet-general-use's RAW mask (no matting) → assets/photo/mask_isnet_raw.png.
#   1. ×2 LANCZOS of the photo, and the mask ×2 (bicubic), so the edge is refined at the size it is drawn near.
#   2. A CRISP EDGE: the mask's soft ramp is tightened (a contrast about 0.5 over a 0.30 band), eroded 1 px (at ×2) so no
#      backdrop pixel survives, then feathered by a 0.8-px gaussian: a clean one-pixel anti-aliased outline, no halo.
#   3. DEFRINGE: every pixel under alpha 250 takes the colour of the nearest solid one, so the outline is his own skin or
#      shirt, never the backdrop's black.
#   4. DETAIL: an unsharp mask (radius 1.6 px at ×2, 85%, threshold 2) for the JPEG's softness, colour as recorded.
#   5. The crossed forearms' foot (source rows 820 → 900) and both elbows (24 / 40 source columns) fade out, as v1.
#   python scratchpad/vo/dwsharp.py   → assets/danawhite_sharp.png
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
sys.stdout.reconfigure(encoding="utf-8")

SRC, MASK, OUT = "assets/photo/dw_src.png", "assets/photo/mask_isnet_raw.png", "assets/danawhite_sharp.png"
W0, H0, S = 900, 900, 2
FADE_A, FADE_B = 820, H0
SIDE_L, SIDE_R = 24, 40
rgb = Image.open(SRC).convert("RGB")
m = Image.open(MASK).convert("L")
if rgb.size != (W0, H0) or m.size != (W0, H0):
    sys.exit(f"REFUSING — {SRC} / {MASK} are {rgb.size} / {m.size}; this was written for {(W0, H0)}")
big = rgb.resize((W0 * S, H0 * S), Image.LANCZOS)
a = np.asarray(m.resize((W0 * S, H0 * S), Image.BICUBIC)).astype(np.float32) / 255
# 2. a crisp edge
a = np.clip((a - 0.5) / 0.30 + 0.5, 0, 1)
a = ndimage.grey_erosion(a, size=(3, 3))
a = ndimage.gaussian_filter(a, 0.8)
# 3. defringe
px = np.asarray(big).astype(np.float32)
solid = a >= 0.98
_, (iy, ix) = ndimage.distance_transform_edt(~solid, return_indices=True)
edge = (a > 0) & ~solid
px[edge] = px[iy[edge], ix[edge]]
# 4. detail
sharp = Image.fromarray(px.clip(0, 255).astype(np.uint8), "RGB").filter(ImageFilter.UnsharpMask(radius=1.6, percent=85, threshold=2))
# 5. the foot and the elbows fade
sm = lambda t: t * t * (3 - 2 * t)
ys = (np.arange(H0 * S, dtype=np.float32) + 0.5) / S
xs = (np.arange(W0 * S, dtype=np.float32) + 0.5) / S
fy = 1 - sm(np.clip((ys - FADE_A) / (FADE_B - FADE_A), 0, 1))
fx = sm(np.clip(xs / SIDE_L, 0, 1)) * sm(np.clip((W0 - xs) / SIDE_R, 0, 1))
A = (a * fy[:, None] * fx[None, :] * 255).clip(0, 255).astype(np.uint8)
out = np.dstack([np.asarray(sharp), A])
Image.fromarray(out, "RGBA").save(OUT, optimize=True)
# proof: the straight edges are transparent, and the outline's soft band is thin (v1's matting left a wide one)
assert A[-1].max() == 0 and A[:, -1].max() == 0, "the photo's straight edges still show"
soft = ((A > 10) & (A < 245)).sum(); solid_n = (A >= 245).sum()
print(f"→ {OUT} {out.shape[1]}×{out.shape[0]} · soft edge px {soft} ({soft / max(1, solid_n) * 100:.2f}% of the solid area)")
