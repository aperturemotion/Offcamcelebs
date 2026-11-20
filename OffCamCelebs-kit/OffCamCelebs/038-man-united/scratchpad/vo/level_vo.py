# ★ ONE VOICE LEVEL, FIRST WORD TO LAST (user, 2026-09-23: "the vo volume
# should not change during the video"). The take itself drifts, so a constant
# VO_GAIN cannot fix it. This measures every CUE's speech-gated loudness (50 ms
# frames within 30 dB of the take's loudest), gains each cue to the median, and
# moves between cue gains with short ramps placed in the PAUSE between cues
# (never across a word). Native 44.1 kHz in and out.
#   python scratchpad/level_vo.py          → assets/audio/vo_leveled.wav + a report
#   python scratchpad/level_vo.py --check  → report the spread of a file only
import re, sys, subprocess, numpy as np, wave

FF = __import__("os").path.join(__import__("os").environ["FFMPEG_DIR"], "ffmpeg.exe")
SR = 44100
MAX_STEP_DB = 9.0          # refuse rather than slam a whisper up to full level

def load(path, sr=SR):
    raw = subprocess.run([FF, "-v", "error", "-i", path, "-ac", "1", "-ar", str(sr), "-f", "f32le", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).copy()

src = open("src/audit/cues.ts", encoding="utf8").read()
# ⚠ 020: cues.ts also carries caption PAGES ({ a, b, lines }); only the
#   sentence cues ({ scene, a, b, text }) are measured
cues = [(float(a), float(b)) for a, b in re.findall(r"\{ scene: \"\w+\", a: ([\d.]+), b: ([\d.]+)", src)]
declared = int(re.search(r"^//\s*(\d+)\s+cues", src, re.M).group(1))
if len(cues) != declared:
    sys.exit(f"REFUSING: parsed {len(cues)} cues, cues.ts declares {declared}")

def gated_levels(x, sr=SR):
    F = int(sr * 0.05)
    fr = np.array([10 * np.log10(np.mean(x[i*F:(i+1)*F] ** 2) + 1e-12) for i in range(len(x) // F)])
    gate = fr.max() - 30
    out = []
    for a, b in cues:
        seg = fr[int(a / 0.05):int(b / 0.05) + 1]
        seg = seg[seg > gate]
        if len(seg) < 4:
            sys.exit(f"REFUSING: cue at {a:.2f}s has under 0.2 s of speech above the gate")
        out.append(10 * np.log10(np.mean(10 ** (seg / 10))))
    return np.array(out)

def report(lv, label):
    med = np.median(lv)
    print(f"{label}: per-cue speech level  median {med:.1f} dB · spread {lv.min():.1f} … {lv.max():.1f} "
          f"({lv.max() - lv.min():.1f} dB) · worst |dev| {np.abs(lv - med).max():.1f} dB")

if "--check" in sys.argv:
    path = sys.argv[sys.argv.index("--check") + 1]
    sr = 22050
    report(gated_levels(load(path, sr), sr), path)
    sys.exit(0)

x = load("assets/audio/vo_trimmed.wav")
lv = gated_levels(x)
report(lv, "before")
target = np.median(lv)
g_db = target - lv
if np.abs(g_db).max() > MAX_STEP_DB:
    sys.exit(f"REFUSING: a cue needs {np.abs(g_db).max():.1f} dB — check the take, not the leveller")

# gain curve: constant across each cue, ramped in the gap between cues
t = np.arange(len(x)) / SR
gain = np.empty(len(x)); gain.fill(g_db[0])
for i, (a, b) in enumerate(cues):
    gain[(t >= a) & (t <= b)] = g_db[i]
    if i + 1 < len(cues):
        na = cues[i + 1][0]
        m = (t > b) & (t < na)
        if na > b:
            gain[m] = g_db[i] + (g_db[i + 1] - g_db[i]) * (t[m] - b) / (na - b)
        # a cue abutting the next (no gap): 40 ms ramp across the join
        else:
            r = (t > b - 0.02) & (t < b + 0.02)
            gain[r] = g_db[i] + (g_db[i + 1] - g_db[i]) * (t[r] - (b - 0.02)) / 0.04
gain[t > cues[-1][1]] = g_db[-1]
y = x * 10 ** (gain / 20)
peak = 20 * np.log10(np.abs(y).max())
print(f"per-cue gains {g_db.min():+.1f} … {g_db.max():+.1f} dB · leveled peak {peak:.1f} dBFS")
# ★ 022: the median target is only a RELATIVE level (the mix sets the absolute one, measured in the render), so a
#   peak near full scale is fixed by shifting the WHOLE curve down to 1 dB of headroom — every cue's level relative
#   to every other is unchanged. It used to refuse here ("lower the target") with no way to do so.
if peak > -1.0:
    shift = peak + 1.0
    y *= 10 ** (-shift / 20)
    print(f"headroom: the whole curve lowered {shift:.1f} dB (relative leveling unchanged) -> peak {peak - shift:.1f} dBFS")
    peak -= shift
if peak > -0.5:
    sys.exit("REFUSING: the leveled take would clip — lower the target")
pcm = np.clip(y * 32767, -32768, 32767).astype(np.int16)
with wave.open("assets/audio/vo_leveled.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
report(gated_levels(load("assets/audio/vo_leveled.wav")), "after ")
