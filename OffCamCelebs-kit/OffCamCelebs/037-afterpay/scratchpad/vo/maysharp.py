# -*- coding: utf-8 -*-
# ★★★★★ RULE 51 (user, 2026-10-09: "sharpen up the visuals … stop adding so many AI generated vector art backgrounds").
# His photo, after mayfinish.py, for a hook with NO table in front of him:
#   1. ×2 LANCZOS. The user's photo is 800 px and the hook shows it up to 1066 px wide (D 820 at the opening's zoom 1.3),
#      so the browser was stretching it. At 1600 px it is always drawn DOWN, never up. Nothing is invented: Lanczos only.
#   2. a light UNSHARP MASK on the colour (radius 1.4 px at the new size, 60%, threshold 2): the crispness the upscale
#      costs, without halos (checked at 1:1 on the head's edge and the watch).
#   3. his WAIST FALLS INTO SHADOW. The photo's foot is a straight cut through his jacket (row 800); the table that hid it
#      is gone (rule 51), so the alpha fades to nothing over source rows FADE_A → FADE_B, as a figure lit from above falls
#      into the dark ground. With the hook's HIM {top 700, D 820} that is world y ≈ 1180 → 1355: it starts below his fists
#      and he is gone by the stack's foot (TOP 1340). (Ending at 1505, his jacket showed BELOW the cash's foot, so the
#      stack seemed to float in front of him.)
#   python scratchpad/maysharp.py   → assets/mayweather_sharp.png
import sys
import numpy as np
from PIL import Image, ImageFilter
sys.stdout.reconfigure(encoding="utf-8")

SRC, OUT = "assets/mayweather_final.png", "assets/mayweather_sharp.png"
FADE_A, FADE_B = 468, 640          # source rows (800-px image)
im = Image.open(SRC).convert("RGBA")
if im.size != (800, 800):
    sys.exit(f"REFUSING — {SRC} is {im.size}; this was written for (800, 800)")
S = 2
big = im.resize((800 * S, 800 * S), Image.LANCZOS)
rgb = big.convert("RGB").filter(ImageFilter.UnsharpMask(radius=1.4, percent=60, threshold=2))
a = np.asarray(big.getchannel("A")).astype(np.float32)
ys = (np.arange(800 * S, dtype=np.float32) + 0.5) / S
t = np.clip((ys - FADE_A) / (FADE_B - FADE_A), 0, 1)
fade = 1 - t * t * (3 - 2 * t)      # smoothstep: no visible band where it starts
a = a * fade[:, None]
out = np.dstack([np.asarray(rgb), a.clip(0, 255).astype(np.uint8)])
Image.fromarray(out, "RGBA").save(OUT, optimize=True)
# proof: the foot row is fully transparent, the fade's start row untouched, the head unchanged in extent
A = out[..., 3]
print(f"wrote {OUT} {800 * S}x{800 * S}; alpha max at row {FADE_A * S - 1}: {A[FADE_A * S - 1].max()}, at the foot: {A[-1].max()}")
if A[-1].max() > 0 or A[FADE_A * S - 1].max() < 250:
    sys.exit("REFUSING — the fade did not land where it was written to")
