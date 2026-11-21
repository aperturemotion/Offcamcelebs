# -*- coding: utf-8 -*-
# ★★★ RULE 43 — THE SCORE'S LEVEL AGAINST THE 100bps / BANKERS BAND, MEASURED (root CLAUDE.md: mix by measured dB,
# VO-anchored). Every film's voice sits at its own level, so each SFX cue is measured RELATIVE TO ITS OWN FILM'S VOICE:
#   voice  = the voice stem's speech-gated level (50 ms frames within 30 dB of its loudest, power mean)
#   a cue  = the SFX stem's peak in its onset window [peak − 1, peak + 5] (frames at 30 fps), clear of neighbours
#            (a cue with another onset within 6 f is MASKED and skipped)
# Per family: the median of (cue peak − voice) for 025 and for Bankers Videos 4 and 5 (their stems and cue sheets are on
# disk; nothing is rendered or written there). 100bps' Video 32 has no cue sheet, so the whole stems are compared: the
# SFX stem's loud frames (its 90th-percentile frame peak) against the voice.
# Proves its reader first: a synthetic burst at −18 dBFS must read back within 0.5 dB.
#   node scratchpad/soloprobe.mjs sfx && node scratchpad/soloprobe.mjs vo && node scratchpad/sfxsheet026.mjs
#   python scratchpad/sfxlevels026.py
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

# ★ a stale stem measures silently (CLAUDE.md, 024): the SFX stem must be newer than the score and its gains, the voice
#   stem newer than the levelled take — refused, not warned
for p, deps in (("out/solo_sfx.wav", ("src/r45/score.ts", "src/r45/SfxLayer.tsx", "src/r45/Film.tsx")), ("out/solo_vo.wav", ("assets/audio/vo_leveled.wav", "src/audit/data.ts"))):
    for d in deps:
        if os.path.getmtime(p) < os.path.getmtime(d): sys.exit(f"✗ REFUSED — {p} is older than {d}: re-render it (soloprobe.mjs)")
me = per_cue("out/solo_sfx.wav", "out/solo_vo.wav", json.load(open("out/sfx_cues.json", encoding="utf8")))
refs = {}
for name, d in (("Bankers V5", "Bankers/Videos/Video 5 — Nvidia Buyback"), ("Bankers V4", "Bankers/Videos/Video 4 — Micron vs Apple")):
    b = os.path.join(ROOT, d)
    refs[name] = per_cue(os.path.join(b, "out/probe/v2_sfx.mp3"), os.path.join(b, "out/probe/v2_vo.mp3"), json.load(open(os.path.join(b, "out/sfx_cues.json"), encoding="utf8")))
s3 = os.path.join(ROOT, "Style 3 videos/Video 32/out")
db32 = frame_peaks(pcm(os.path.join(s3, "mix_sfx.mp3"))); v32 = voice_level(pcm(os.path.join(s3, "mix_vo.mp3")))
p90_32 = float(np.percentile(db32[db32 > -60], 90)) - v32

print(f"voice (speech-gated): 026 {me[2]:.1f} dBFS · " + " · ".join(f"{k} {r[2]:.1f}" for k, r in refs.items()) + f" · 100bps V32 {v32:.1f}")
print(f"SFX loud frames (90th pct) relative to the voice: 026 {me[3]:+.1f} dB · " + " · ".join(f"{k} {r[3]:+.1f}" for k, r in refs.items()) + f" · 100bps V32 {p90_32:+.1f}")
print(f"\n cue peak − voice, median (range) n, per family    ({me[1]} of 026 cues masked by a neighbour)")
names = ["026"] + list(refs)
allf = sorted(set(me[0]) | set().union(*[r[0].keys() for r in refs.values()]))
print(f" {'family':11s}" + "".join(f"{n:>24s}" for n in names))
rows = []
for f in allf:
    cells = []
    for fam in [me[0]] + [r[0] for r in refs.values()]:
        v = fam.get(f)
        cells.append(f"{np.median(v):+5.1f} ({min(v):+.0f}…{max(v):+.0f}) n{len(v)}" if v else "—")
    print(f" {f:11s}" + "".join(f"{c:>24s}" for c in cells))
    a = me[0].get(f); bs = [r[0].get(f) for r in refs.values() if r[0].get(f)]
    if a and bs: rows.append(np.median(a) - np.median([np.median(b) for b in bs]))
if rows: print(f"\n026 against the Bankers band, families in common: median {np.median(rows):+.1f} dB (range {min(rows):+.1f}…{max(rows):+.1f})")
