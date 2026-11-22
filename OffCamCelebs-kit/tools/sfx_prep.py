# -*- coding: utf-8 -*-
"""sfx_prep.py: cut a film's sound effects from their sources (the EarnEdits pack, Openverse downloads) into the film's
assets/audio/sfx/<name>.wav, and measure what SfxLayer.tsx needs for each: LEN, ONSET, PEAK (frames at 30 fps) and the
EVEN gain that puts every file at the same level (its loudest 50 ms at EFF dBFS when the cue's vol is 1).

  python tools/sfx_prep.py <spec.json> <film>/assets/audio/sfx [--eff -35]

spec.json: {"name": {"src": "<file>", "start": "auto" | seconds, "len": seconds, "fade": ms, "sustained": bool}, ...}
  "auto" starts 5 ms before the first sound (the first 10 ms window within 24 dB of the file's loudest).
Prints the measured table as JSON (and writes it to <outdir>/sfx_table.json).
"""
import json
import os
import subprocess
import sys

import numpy as np

SR, FPS = 48000, 30
spec_path, outdir = sys.argv[1], sys.argv[2]
EFF = float(sys.argv[sys.argv.index("--eff") + 1]) if "--eff" in sys.argv else -35.0
spec = json.load(open(spec_path))
base = os.path.dirname(os.path.abspath(spec_path))


def decode(p):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", p, "-ac", "2", "-ar", str(SR), "-f", "f32le", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).copy()


def rms(x, w):
    m = x.mean(axis=1)
    return np.sqrt(np.convolve(m * m, np.ones(w) / w, "same") + 1e-12)


table = {}
for name, s in spec.items():
    src = s["src"] if os.path.isabs(s["src"]) else os.path.join(base, s["src"])
    a = decode(src)
    e10 = 20 * np.log10(rms(a, SR // 100))
    if s.get("start", "auto") == "auto":
        i0 = int(np.argmax(e10 > e10.max() - 24))
        i0 = max(0, i0 - SR // 200)
    else:
        i0 = int(float(s["start"]) * SR)
    n = int(float(s.get("len", (len(a) - i0) / SR)) * SR)
    seg = a[i0:i0 + n].copy()
    fade = int(s.get("fade", 30) * SR / 1000)
    if fade and len(seg) > fade:
        seg[-fade:] *= np.linspace(1, 0, fade)[:, None] ** 2
    seg[: SR // 1000] *= np.linspace(0, 1, SR // 1000)[:, None]  # a 1 ms fade-in: no click
    out = os.path.join(outdir, f"{name}.wav")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "f32le", "-ar", str(SR), "-ac", "2", "-i", "-", "-c:a", "pcm_s16le", out],
                   input=seg.astype(np.float32).tobytes(), check=True)
    r50 = rms(seg, SR // 20)
    pk50 = 20 * np.log10(r50.max())
    e = 20 * np.log10(rms(seg, SR // 100))
    onset = int(np.argmax(e > e.max() - 30))
    table[name] = {
        "len": int(np.ceil(len(seg) / SR * FPS)),
        "onset": int(onset / SR * FPS),
        "peak": int(round(int(np.argmax(r50)) / SR * FPS)),
        "even": round(float(10 ** ((EFF - pk50) / 20)), 3),
        "sustained": bool(s.get("sustained", False)),
        "src": os.path.basename(src),
    }
    print(f"{name:10s} len {table[name]['len']:3d} f  onset {table[name]['onset']:2d}  peak {table[name]['peak']:2d}  pk50 {pk50:6.1f} dB  EVEN {table[name]['even']:.3f}  ← {os.path.basename(src)}")
json.dump(table, open(os.path.join(outdir, "sfx_table.json"), "w"), indent=1)
