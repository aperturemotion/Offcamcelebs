# -*- coding: utf-8 -*-
# ★ WHISPER LOCATES A WORD; THE AUDIO TIMES IT (CLAUDE.md, VO pipeline step 6 — Aperture V5, Bankers V4).
# After a pause, whisper often starts the next word LATE: on 025's take "Stanford" came back at 8.90 s while the voice
# rises at 8.46 s, and "Prosecutors" 0.41 s late. For every word that follows a real pause (sil.txt: silencedetect on
# assets/audio/vo_trimmed.wav), this finds the first 10-ms frame after the pause's END whose RMS rises above SPEECH_DB, and
# writes scratchpad/onsets.json: { word index: onset seconds }. captions_vo.mjs reads it (and refuses a stale one).
#   · never earlier than the pause's end, never later than whisper's own start (the snap handles that direction);
#   · never more than MAX_SHIFT before whisper's start — a larger gap is reported, not applied;
#   · it proves itself: a synthetic tone after silence must be found within one frame.
#   python scratchpad/onsets.py
import wave, json, sys
import numpy as np

SPEECH_DB, HOP, MAX_SHIFT = -30.0, 0.01, 0.5

def rms_db(x, sr):
    h = int(sr * HOP)
    n = (len(x) - h) // h
    fr = x[: n * h].reshape(n, h)
    return 20 * np.log10(np.sqrt((fr ** 2).mean(axis=1)) + 1e-12)

def onset(db, after, limit):
    k0, k1 = int(round(after / HOP)), int(round(limit / HOP))
    for k in range(k0, min(k1 + 1, len(db))):
        if db[k] > SPEECH_DB:
            return k * HOP
    return None

# ── the self-proof: 0.5 s of silence, then a tone at speech level ───────────
sr0 = 44100
t = np.arange(int(sr0 * 1.0)) / sr0
syn = np.where(t >= 0.5, 0.05 * np.sin(2 * np.pi * 220 * t), 0.0).astype(np.float32)
got = onset(rms_db(syn, sr0), 0.2, 0.9)
if got is None or abs(got - 0.5) > HOP + 1e-9:
    sys.exit(f"REFUSING — the onset finder missed its own canary (found {got}, expected 0.50)")

w = wave.open("assets/audio/vo_trimmed.wav")
sr = w.getframerate()
x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768
db = rms_db(x, sr)
W = json.load(open("scratchpad/fw_words.json", encoding="utf8"))["words"]
SIL = [tuple(map(float, l.split())) for l in open("scratchpad/sil.txt").read().strip().split("\n")]

out, report = {}, []
for i in range(1, len(W)):
    p, wd = W[i - 1], W[i]
    ends = [s1 for s0, s1 in SIL if s1 > p["b"] - 0.05 and s1 < wd["a"] - 0.02]
    # ★ 028: whisper can stretch a clause-ending word over the pause after it ("Then," 33.88–34.40 over the pause
    #   34.10–34.19), so the next word ("SKKN") starts where the stretch ends, 0.2 s late. A pause that lies in the
    #   TAIL of a punctuated previous word (past its first 0.15 s) is the pause before this word.
    if not ends and p["t"][-1:] in ",.?!;:":
        ends = [s1 for s0, s1 in SIL if s0 > p["a"] + 0.15 and s1 <= p["b"] + 0.02 and s1 < wd["a"] - 0.02]
    if not ends:
        continue
    e = max(ends)
    on = onset(db, e, wd["a"])
    if on is None or on >= wd["a"] - 0.02:
        continue
    if wd["a"] - on > MAX_SHIFT:
        report.append(f'  ⚠ {i} "{wd["t"]}": onset {on:.2f} is {wd["a"] - on:.2f} s before whisper — NOT applied')
        continue
    out[str(i)] = round(on, 3)
    report.append(f'  {i:3} "{wd["t"]}" {wd["a"]:.2f} → {on:.2f}  (−{wd["a"] - on:.2f} s)')

json.dump(out, open("scratchpad/onsets.json", "w", encoding="utf8"), indent=1)
print(f"canary ok · {len(out)} late starts moved to the audio's onset (≥ {SPEECH_DB} dBFS after the pause)")
print("\n".join(report))
