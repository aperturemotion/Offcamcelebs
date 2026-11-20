# cardpause.py (037): the references HOLD a turn card 0.5–0.8 s after its last word (cards run 1.3–2.9 s: study, look_measured
# §9). vo_trim.py cuts every pause to 0.16 s, which left "Let us explain." 0.87 s of screen time. This inserts HOLD seconds
# of silence into assets/audio/vo_trimmed.wav in the middle of the pause after each card's last word (found by token text in
# scratchpad/fw_words.json), then the pipeline is re-run from fw.py. Run ONCE, straight after vo_trim.py + fw.py + mergetok.
import json, wave, sys
import numpy as np
HOLD = 0.55
CARD_LAST = ["explain.", "part."]   # 038: "Let me explain." and "And here's the worst part."
W = json.load(open("scratchpad/fw_words.json", encoding="utf8"))["words"]
w = wave.open("assets/audio/vo_trimmed.wav"); sr = w.getframerate(); x = np.frombuffer(w.readframes(w.getnframes()), np.int16).copy(); w.close()
cuts = []
for last in CARD_LAST:
    i = next(k for k, t in enumerate(W) if t["t"].lower() == last)
    cuts.append((W[i]["b"] + W[i + 1]["a"]) / 2)
out, prev = [], 0
for t in sorted(cuts):
    n = int(t * sr); out += [x[prev:n], np.zeros(int(HOLD * sr), np.int16)]; prev = n
out.append(x[prev:])
y = np.concatenate(out)
o = wave.open("assets/audio/vo_trimmed.wav", "wb"); o.setnchannels(1); o.setsampwidth(2); o.setframerate(sr); o.writeframes(y.tobytes()); o.close()
print(f"inserted {HOLD}s after {CARD_LAST} at {[round(c,2) for c in sorted(cuts)]}: {len(x)/sr:.2f}s -> {len(y)/sr:.2f}s")
