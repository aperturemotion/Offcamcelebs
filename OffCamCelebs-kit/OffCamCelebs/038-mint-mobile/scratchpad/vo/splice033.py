# -*- coding: utf-8 -*-
# ★ 033 (the user, 2026-10-21: "ensure that the 2001 … is actually pronounced correctly, because right now the voiceover says
# 2001, which is wrong"). The take said "twenty oh one" and "twenty oh four" (the script's own spelling). Both sentences were
# re-generated in the same voice and model (Russ, eleven_v4) as "two thousand one" / "two thousand four" and are SPLICED into
# the RAW take here, each between the take's own pauses (silencedetect −33 dB, d 0.3 on the raw file):
#   A  "In two thousand one, … fight league."            replaces raw 8.166 → 13.927 s
#   B  "Reports say that by two thousand four, … turned it around."   replaces raw 55.776 → 64.953 s (★ not 63.910: that pause sits between "Fighter," and "turned it around", and the first cut kept the phrase twice)
# Each new line is trimmed to its speech (first/last 10-ms frame above −40 dBFS, with 40 ms kept), LEVEL-MATCHED to the
# speech it replaces (power mean of frames within 30 dB of the loudest: the same gate the level tools use), and joined with
# 15-ms cosine fades INSIDE the pauses, so no word is touched. Native 44.1 kHz mono throughout.
#   python scratchpad/vo/splice033.py   → assets/audio/vo_take_033b.wav (the newest take: vo_trim.py picks it)
import subprocess, sys, wave
import numpy as np
sys.stdout.reconfigure(encoding="utf-8")
FF = __import__("os").path.join(__import__("os").environ["FFMPEG_DIR"], "ffmpeg.exe")
SR = 44100
def load(p):
    raw = subprocess.run([FF, "-v", "error", "-i", p, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.float32).copy()
def frames_db(x, n=441):
    k = len(x) // n
    return 10 * np.log10((x[: k * n].reshape(k, n) ** 2).mean(axis=1) + 1e-12)
def speech_level(x):
    d = frames_db(x); s = d > d.max() - 30
    return 10 * np.log10(np.mean(10 ** (d[s] / 10)))
def trim(x, keep=0.04):
    d = frames_db(x); on = np.where(d > -40)[0]
    a = max(0, on[0] * 441 - int(keep * SR)); b = min(len(x), (on[-1] + 1) * 441 + int(keep * SR))
    return x[a:b]
take = load("assets/audio/vo_take_033.mp3")
EDITS = [(8.166, 13.927, "assets/audio/splice/line2001.mp3"), (55.776, 64.953, "assets/audio/splice/line2004.mp3")]
out, cur = [], 0
fade = int(0.015 * SR)
def faded(x):
    x = x.copy(); r = 0.5 - 0.5 * np.cos(np.linspace(0, np.pi, fade)); x[:fade] *= r; x[-fade:] *= r[::-1]; return x
for a, b, p in EDITS:
    ia, ib = int(a * SR), int(b * SR)
    old = take[ia:ib]
    new = trim(load(p))
    g = speech_level(old) - speech_level(new)
    new = new * 10 ** (g / 20)
    print(f"{p}: {len(old)/SR:.2f} s → {len(new)/SR:.2f} s · gain {g:+.2f} dB · peak {20*np.log10(np.abs(new).max()):.1f} dBFS")
    out += [take[cur:ia], faded(new)]
    cur = ib
out.append(take[cur:])
y = np.concatenate(out)
if np.abs(y).max() >= 0.999: sys.exit("REFUSING — the spliced take clips")
with wave.open("assets/audio/vo_take_033b.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((np.clip(y, -1, 1) * 32767).astype(np.int16).tobytes())
print(f"→ assets/audio/vo_take_033b.wav  {len(take)/SR:.2f} s → {len(y)/SR:.2f} s")
