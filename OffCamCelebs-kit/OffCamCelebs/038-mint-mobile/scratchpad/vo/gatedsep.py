# Speech-GATED voice-to-bed separation per 10 s window, from the two solo
# renders. A plain window mean counts the pauses between phrases as "quiet
# voice"; a window full of short phrases then reads several dB softer than its
# words are, and the envelope controller ducks the bed for a voice that is not
# actually quieter. This measures only the 50 ms frames where the voice speaks.
# Usage: python scratchpad/gatedsep.py
import subprocess, numpy as np
FF = __import__("os").path.join(__import__("os").environ["FFMPEG_DIR"], "ffmpeg.exe")
SR = 22050
def pcm(path):
    raw = subprocess.run([FF, "-v", "error", "-i", path, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32)
# ★ 024 (a re-take): a voice stem that failed to render left the PREVIOUS take's stem in out/, and this measured it,
#   printing plausible numbers for a take that no longer exists. It refuses a stem older than the voice it should
#   hold, and two stems of different lengths.
import os, sys, json
for p in ("out/solo_vo.wav", "out/solo_bed.wav"):
    if os.path.getmtime(p) < os.path.getmtime("assets/audio/vo_leveled.wav"):
        sys.exit(f"REFUSING — {p} is older than assets/audio/vo_leveled.wav: it was rendered for a previous take (soloprobe.mjs)")
vo, bed = pcm("out/solo_vo.wav"), pcm("out/solo_bed.wav")
if abs(len(vo) - len(bed)) > SR * 0.1:
    sys.exit(f"REFUSING — the stems differ in length ({len(vo) / SR:.2f} s vs {len(bed) / SR:.2f} s): one is stale")
n = min(len(vo), len(bed)); vo, bed = vo[:n], bed[:n]
F = int(SR * 0.05)
nf = n // F
db = lambda x: 10 * np.log10(np.mean(x ** 2) + 1e-12)
vf = np.array([db(vo[i*F:(i+1)*F]) for i in range(nf)])
bf = np.array([db(bed[i*F:(i+1)*F]) for i in range(nf)])
speech = vf > (vf.max() - 30)          # frames within 30 dB of the loudest voice frame
print("window    voice(all) voice(speech)  bed(speech)  sep(speech)  speech%")
rows = []
# ★ 028: the windows start at the bed's DROP (scratchpad/bedwin.json), never straddle it: a window holding the quiet
#   intro and the drop would read the intro as "bed too low" and the controller would blast the drop
FROM = json.load(open("scratchpad/bedwin.json", encoding="utf8"))["from"] if os.path.exists("scratchpad/bedwin.json") else 0.0
for w in [round(FROM + 10 * i, 2) for i in range(int((n / SR - FROM) // 10) + 1) if FROM + 10 * i < n / SR]:
    a, b = int(w / 0.05), int((w + 10) / 0.05)
    m = speech[a:b]
    if m.sum() < 20:
        print(f"{w:5.1f}-{w+10:5.1f}s   (under 1 s of speech)"); continue
    lin = lambda arr: 10 * np.log10(np.mean(10 ** (arr / 10)))
    va, vs, bs = lin(vf[a:b]), lin(vf[a:b][m]), lin(bf[a:b][m])
    rows.append({"w": w, "vo": round(float(vs), 2), "bed": round(float(bs), 2), "sep": round(float(vs - bs), 2), "speech": round(float(m.mean()), 3)})
    print(f"{w:5.1f}-{w+10:5.1f}s   {va:8.1f}   {vs:10.1f}   {bs:10.1f}   {vs-bs:9.1f}   {100*m.mean():5.0f}%")
# ★ 023: THE TAIL — the voice's LAST 3.5 s (the verdict and the call to action), measured on their own. The last 10-s window is usually mostly outro, so the
#   controller holds it (017's lesson) — which left 023's verdict and call to action at 3.7 dB of separation, the bed
#   swelling under "Our rating: legit." The tail is gated like every window and controlled as its own point.
import re, json
ends = [float(x) for x in re.findall(r"\{ scene: \"\w+\", a: [\d.]+, b: ([\d.]+)", open("src/audit/cues.ts", encoding="utf8").read())]
tail = None
if ends:
    te = max(ends); ta = max(0.0, te - 3.5)   # the verdict + the call to action
    a, b = int(ta / 0.05), int(te / 0.05)
    m = speech[a:b]
    if m.sum() >= 20:
        lin = lambda arr: 10 * np.log10(np.mean(10 ** (arr / 10)))
        vs, bs = lin(vf[a:b][m]), lin(bf[a:b][m])
        tail = {"a": round(ta, 2), "b": round(te, 2), "vo": round(float(vs), 2), "bed": round(float(bs), 2), "sep": round(float(vs - bs), 2), "speech": round(float(m.mean()), 3)}
        print(f"tail {ta:5.1f}-{te:5.1f}s  (the voice's last 3.5 s)   {vs:10.1f}   {bs:10.1f}   {vs-bs:9.1f}   {100*m.mean():5.0f}%")
# ★ 022: the controller (bedenv.mjs) reads THESE speech-gated numbers — the one validated gate in the project
json.dump({"windows": rows, "tail": tail}, open("scratchpad/gatedsep.json", "w"))
