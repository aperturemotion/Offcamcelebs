# lookmeasure.py — the film's stills measured against the references' RENDER TARGETS (styles/payouts-moneydecoded-study/
# rules_look_and_5.md §I). sRGB luma 0–1 on each still; dark-stage stills only (pass the frames to skip: cards, light scenes).
#   python3 scratchpad/lookmeasure.py <stillsDir> [skipFrom-skipTo ...]
import sys, glob, os, re
import numpy as np
from PIL import Image
d = sys.argv[1]
skips = [tuple(map(int, a.split("-"))) for a in sys.argv[2:]]
rows = []
for p in sorted(glob.glob(os.path.join(d, "f*.jpg")) + glob.glob(os.path.join(d, "f*.png"))):
    f = int(re.findall(r"f(\d+)", os.path.basename(p))[0])
    if any(a <= f <= b for a, b in skips): continue
    im = np.asarray(Image.open(p).convert("RGB")).astype(np.float32) / 255
    # the caption band is DOM text over the picture: leave it out
    H, W = im.shape[:2]
    y = 0.2126 * im[..., 0] + 0.7152 * im[..., 1] + 0.0722 * im[..., 2]
    prof = y.mean(axis=1)
    k = max(1, H // 40); sm = np.convolve(prof, np.ones(k) / k, mode="same")
    c = y[int(H * .4):int(H * .6), int(W * .35):int(W * .65)].mean()
    cs = H // 8; cw = W // 6
    cor = np.mean([y[:cs, :cw].mean(), y[:cs, -cw:].mean(), y[-cs:, :cw].mean(), y[-cs:, -cw:].mean()])
    dark = im[(y > 0.05) & (y < 0.25)]
    rows.append(dict(f=f, lt2=(y < 0.02).mean(), grey=((y >= 0.05) & (y < 0.25)).mean(), top=y[:H // 3].mean(), peak=sm.max(), peakAt=sm.argmax() / H,
                     bottom=y[-H // 20:].mean(), gt80=(y > 0.8).mean(), p95=np.percentile(y, 95), med=np.median(y), cc=c / max(cor, 1e-4), corners=cor,
                     rgb=dark.mean(axis=0) * 255 if len(dark) else np.zeros(3)))
if not rows: sys.exit("no stills")
m = lambda k: float(np.median([r[k] for r in rows]))
T = [("under 2% luma", "lt2", "0.18–0.40 (≤0.35)", 100, "%"), ("dark grey 5–25%", "grey", "0.34–0.50", 100, "%"), ("top third mean", "top", "0.10–0.17", 1, ""),
     ("peak row mean", "peak", "0.20–0.30", 1, ""), ("peak row at (down)", "peakAt", "0.44–0.56", 100, "%"), ("bottom edge", "bottom", "0.13–0.20", 1, ""),
     ("over 80% luma", "gt80", "2.5–4.5%", 100, "%"), ("95th percentile", "p95", "0.40–0.48", 1, ""), ("median pixel", "med", "0.05–0.10", 1, ""),
     ("centre ÷ corners", "cc", "1.7–3.3", 1, ""), ("corners", "corners", "≥ 0.04", 1, "")]
print(f"{len(rows)} dark-stage stills from {d}")
for name, k, tgt, mul, u in T:
    vals = [r[k] for r in rows]
    print(f"  {name:22s} median {m(k) * mul:6.2f}{u}  (min {min(vals) * mul:.2f}, max {max(vals) * mul:.2f})   target {tgt}")
rgb = np.median([r["rgb"] for r in rows], axis=0)
print(f"  darks' mean RGB        ({rgb[0]:.1f}, {rgb[1]:.1f}, {rgb[2]:.1f})   target ≈ (32, 30.6, 31.5), neutral")
