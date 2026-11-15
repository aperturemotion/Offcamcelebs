# strip029.py — contact strips of a captured frame sequence (sweep029.mjs frames): frames a..b every `step`, tiled with their
# frame numbers, for looking at a stretch of the film in motion (RULE 54).
#   python scratchpad/strip029.py <seqDir> <a> <b> <step> <out.jpg> [cols=8] [width=270]
import sys, os
from PIL import Image, ImageDraw, ImageFont

seq, a, b, step, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), sys.argv[5]
cols = int(sys.argv[6]) if len(sys.argv) > 6 else 8
W = int(sys.argv[7]) if len(sys.argv) > 7 else 270
H = W * 1920 // 1080
fr = [f for f in range(a, b + 1, step) if os.path.exists(os.path.join(seq, f"f{f:04d}.jpg"))]
rows = (len(fr) + cols - 1) // cols
sheet = Image.new("RGB", (cols * W, rows * (H + 22)), (20, 20, 20))
d = ImageDraw.Draw(sheet)
try:
    fnt = ImageFont.truetype("arial.ttf", 16)
except OSError:
    fnt = ImageFont.load_default()
for i, f in enumerate(fr):
    im = Image.open(os.path.join(seq, f"f{f:04d}.jpg")).convert("RGB").resize((W, H), Image.LANCZOS)
    x, y = (i % cols) * W, (i // cols) * (H + 22)
    sheet.paste(im, (x, y + 22))
    d.text((x + 6, y + 2), f"f{f}", fill=(255, 220, 120), font=fnt)
sheet.save(out, quality=90)
print(out, len(fr), "frames")
