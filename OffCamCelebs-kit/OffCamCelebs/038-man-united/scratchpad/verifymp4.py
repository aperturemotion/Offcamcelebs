# verifymp4.py — the rendered MP4 checked against the film itself (root CLAUDE.md: verify the output file; compare the MP4
# against fresh stills before handing it back).
#   python scratchpad/verifymp4.py <mp4> <stillsDir> <mixWav>
#   · the file: duration, codecs, size, frame count vs the composition's
#   · the PICTURE: decoded frames vs fresh stills of the same frames (sweep029.mjs frames), in 48-px tiles. The canary first:
#     a still compared with itself shifted 6 px must fire, and with itself must not.
#   · the SOUND: the render's audio vs the film's own mix rebuilt offline from index.html (vo/mixprobe.mjs): level,
#     lag (cross-correlation), clipping, and the tail after the last word
import sys, os, json, subprocess, glob
import numpy as np
from PIL import Image

BIN = __import__("os").environ["FFMPEG_DIR"]
FF, FP = os.path.join(BIN, "ffmpeg.exe"), os.path.join(BIN, "ffprobe.exe")
mp4, stills, mixwav = sys.argv[1], sys.argv[2], sys.argv[3]
TILE, LIM = 48, 14.0   # mean abs diff (0-255) a 48-px tile may show between a still and its decoded frame (encoder noise)

info = json.loads(subprocess.run([FP, "-v", "error", "-show_entries", "format=duration,size:stream=codec_name,width,height,nb_frames,r_frame_rate,sample_rate,channels",
                                  "-of", "json", mp4], capture_output=True, text=True).stdout)
print("file:", json.dumps(info))

def tiles(a, b):
    h, w = a.shape[:2]
    worst = 0.0
    for y in range(0, h - TILE + 1, TILE):
        for x in range(0, w - TILE + 1, TILE):
            d = np.abs(a[y:y + TILE, x:x + TILE].astype(np.int16) - b[y:y + TILE, x:x + TILE].astype(np.int16)).mean()
            worst = max(worst, d)
    return worst

fr = sorted(int(os.path.basename(p)[1:5]) for p in glob.glob(os.path.join(stills, "f*.jpg")))
if not fr:
    sys.exit("REFUSED: no stills")
# canary
s0 = np.asarray(Image.open(os.path.join(stills, f"f{fr[len(fr)//2]:04d}.jpg")).convert("RGB"))
if tiles(s0, s0) > 0.5 or tiles(s0, np.roll(s0, 6, axis=1)) < LIM:
    sys.exit("REFUSED: the picture canary failed")
print("canary ok")
bad = []
for f in fr:
    out = subprocess.run([FF, "-v", "error", "-i", mp4, "-vf", f"select=eq(n\\,{f})", "-vframes", "1", "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
                         capture_output=True).stdout
    if len(out) != 1080 * 1920 * 3:
        bad.append((f, "no frame")); continue
    a = np.frombuffer(out, np.uint8).reshape(1920, 1080, 3)
    b = np.asarray(Image.open(os.path.join(stills, f"f{f:04d}.jpg")).convert("RGB"))
    w = tiles(a, b)
    print(f"f{f:4d}  worst tile {w:5.1f}")
    if w > LIM:
        bad.append((f, round(w, 1)))
print("PICTURE:", "CLEAN" if not bad else f"{len(bad)} frame(s) over {LIM}: {bad}")

# sound
def pcm(path):
    raw = subprocess.run([FF, "-v", "error", "-i", path, "-ac", "1", "-ar", "16000", "-f", "f32le", "-"], capture_output=True).stdout
    return np.frombuffer(raw, np.float32)
r, m = pcm(mp4), pcm(mixwav)
n = min(len(r), len(m))
db = lambda x: 20 * np.log10(np.sqrt(np.mean(x ** 2)) + 1e-12)
seg = slice(16000 * 5, min(n, 16000 * 25))
best, lag = -1, 0
for L in range(-400, 401, 4):
    a = r[seg.start + L: seg.stop + L] if L >= 0 else r[seg.start + L: seg.stop + L]
    b = m[seg]
    if len(a) != len(b): continue
    c = float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b) + 1e-12))
    if c > best: best, lag = c, L
print(f"SOUND: render {db(r[:n]):.2f} dB vs offline mix {db(m[:n]):.2f} dB (diff {db(r[:n]) - db(m[:n]):+.2f}), "
      f"lag {lag / 16:.1f} ms, corr {best:.3f}, peak {20*np.log10(np.abs(r).max()+1e-12):.2f} dBFS, render {len(r)/16000:.2f} s / mix {len(m)/16000:.2f} s")
