# the reader of sfxlevels028.py (its functions and canary only), shared by sfxlevels033.py
import json, os, subprocess, sys
import numpy as np
sys.stdout.reconfigure(encoding="utf-8")
FF = __import__("os").path.join(__import__("os").environ["FFMPEG_DIR"], "ffmpeg.exe")
SR, FPS = 48000, 30
HOP = SR // FPS
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))   # scratchpad/vo/ → the project root

def pcm(p):
    raw = subprocess.run([FF, "-hide_banner", "-loglevel", "error", "-i", p, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.float32)
def frame_peaks(x):
    n = len(x) // HOP
    return 20 * np.log10(np.abs(x[: n * HOP]).reshape(n, HOP).max(axis=1) + 1e-9)
def voice_level(x):
    F = int(SR * 0.05); n = len(x) // F
    p = (x[: n * F].reshape(n, F) ** 2).mean(axis=1)
    db = 10 * np.log10(p + 1e-12)
    s = db > db.max() - 30
    return 10 * np.log10(np.mean(10 ** (db[s] / 10)))

t = np.zeros(SR * 2, np.float32); s0 = 30 * HOP
t[s0 : s0 + SR // 5] = 10 ** (-18 / 20) * np.sin(2 * np.pi * 440 * np.arange(SR // 5) / SR)
if abs(frame_peaks(t)[29:36].max() + 18) > 0.5: sys.exit("✗ REFUSED — the level reader failed its canary")

def per_cue(sfx, vo, cues):
    db = frame_peaks(pcm(sfx)); v = voice_level(pcm(vo))
    onsets = sorted(c["peak"] for c in cues)
    fam, masked = {}, 0
    for c in cues:
        p = c["peak"]
        if any(o != p and abs(o - p) <= 6 for o in onsets): masked += 1; continue
        w = db[max(0, p - 1) : p + 6]
        if len(w): fam.setdefault(c["s"], []).append(float(w.max()) - v)
    return fam, masked, v, float(np.percentile(db[db > -60], 90)) - v if (db > -60).any() else None

