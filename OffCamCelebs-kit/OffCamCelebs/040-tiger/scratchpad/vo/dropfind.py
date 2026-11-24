# -*- coding: utf-8 -*-
# ★ 028 (user, 2026-10-08: "make the beat drop when the VO says much NOW at the start"): finds a track's beat DROPS
# from the audio, never by ear. It decodes the track to mono, measures the LOW band (kick and bass, < 150 Hz) and the
# full band in 50-ms frames, and lists the largest sustained jumps in low-band energy: the mean of the 2 s after a frame
# against the 2 s before it, in dB. A drop is where the low end arrives and STAYS. Each candidate's onset is then
# refined to the first 10-ms frame whose low band crosses halfway between the two levels.
# It proves itself first on a synthetic track: 6 s of a quiet tone, then a loud 60-Hz kick pattern from 6.00 s, which
# must be found within 20 ms.
#   python scratchpad/dropfind.py <track> [from_s] [to_s]
import sys, subprocess
import numpy as np
sys.stdout.reconfigure(encoding="utf-8")
FF = __import__("os").environ["FFMPEG_DIR"]
SR = 22050

def lowpass_energy(x, hop, cutoff=150.0):
    n = len(x) // hop
    fr = x[: n * hop].reshape(n, hop)
    spec = np.abs(np.fft.rfft(fr * np.hanning(hop), axis=1)) ** 2
    freqs = np.fft.rfftfreq(hop, 1 / SR)
    lo = spec[:, freqs < cutoff].sum(axis=1)
    return 10 * np.log10(lo + 1e-12), 10 * np.log10(spec.sum(axis=1) + 1e-12)

def find(x, t0=0.0, t1=None, top=6):
    hop = int(SR * 0.05)
    lo, full = lowpass_energy(x, hop)
    k = int(2.0 / 0.05)
    t1 = t1 if t1 is not None else len(lo) * 0.05
    cands = []
    for i in range(max(k, int(t0 / 0.05)), min(len(lo) - k, int(t1 / 0.05))):
        jump = lo[i:i + k].mean() - lo[i - k:i].mean()
        cands.append((jump, i))
    cands.sort(reverse=True)
    picked = []
    for jump, i in cands:
        if all(abs(i - j) > 3 * k for _, j in picked):
            picked.append((jump, i))
        if len(picked) >= top:
            break
    out = []
    hop2 = int(SR * 0.01)
    lo2, _ = lowpass_energy(x, hop2 * 4)   # 40-ms windows, 10-ms steps below
    for jump, i in picked:
        before, after = lo[i - k:i].mean(), lo[i:i + k].mean()
        half = (before + after) / 2
        # refine on 10-ms steps with 40-ms windows
        s0 = int((i - 10) * 0.05 * SR)
        best = i * 0.05
        for s in range(s0, s0 + int(1.0 * SR), hop2):
            seg = x[s:s + hop2 * 4]
            if len(seg) < hop2 * 4: break
            sp = np.abs(np.fft.rfft(seg * np.hanning(len(seg)))) ** 2
            fq = np.fft.rfftfreq(len(seg), 1 / SR)
            # scale to the 50-ms frame's energy (window length ratio)
            v = 10 * np.log10(sp[fq < 150].sum() * (hop / len(seg)) ** 2 + 1e-12)
            if v > half:
                best = s / SR + 0.02    # the 40-ms window's CENTRE: its start read 31 ms early on the canary
                break
        out.append((jump, best, before, after, full[i - k:i].mean(), full[i:i + k].mean()))
    return out

# ── self-proof ──
t = np.arange(int(SR * 12)) / SR
syn = 0.02 * np.sin(2 * np.pi * 440 * t)
beat = (t >= 6.0) * np.exp(-((t - 6.0) % 0.5) * 18) * np.sin(2 * np.pi * 60 * t) * 0.8
got = find((syn + beat).astype(np.float32), top=1)[0][1]
if abs(got - 6.0) > 0.02:
    sys.exit(f"REFUSING — the drop finder missed its own canary (found {got:.3f}, expected 6.000)")
print("canary ok (6.000 s found at %.3f s)" % got)

src = sys.argv[1]
a = float(sys.argv[2]) if len(sys.argv) > 2 else 0.0
b = float(sys.argv[3]) if len(sys.argv) > 3 else None
raw = subprocess.run([FF + r"\ffmpeg.exe", "-v", "error", "-i", src, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                     capture_output=True, check=True).stdout
x = np.frombuffer(raw, dtype=np.float32)
print(f"{src}: {len(x) / SR:.1f} s")
print(" jump   onset     low before → after     full before → after")
for jump, on, lb, la, fb, fa in find(x, a, b):
    m, s = divmod(on, 60)
    print(f"{jump:5.1f} dB  {on:7.2f} s ({int(m)}:{s:05.2f})   {lb:6.1f} → {la:6.1f}      {fb:6.1f} → {fa:6.1f}")
