# -*- coding: utf-8 -*-
# ★ 026: SENTENCE PAUSES, RESTORED (the take is FAST: 53.0 s trimmed against the brief's 60-s target, and with one set per
# sentence and 30-frame pushes, four shots had under a second at rest; the interview chairs had NONE). vo_trim.py keeps
# 0.16 s of every pause ≥ 0.3 s. This re-trims the SAME raw take keeping PAD_END of every pause that falls on a CUE
# boundary (one cue = one shot, captions_vo.mjs's PLAN), and 0.16 s everywhere else (clause pauses stay tight).
#   · It never resamples (44.1 kHz mono PCM, as vo_trim.py) and never cuts a word: only silence that the take itself
#     recorded is kept, so a pause shorter than PAD_END keeps all it had.
#   · The transcript is NOT re-run: every word's time is shifted by exactly the silence added before it, so the PLAN's
#     word indices stay valid. fw_words.json is backed up once as fw_words_tight.json and always rebuilt FROM it.
#   python scratchpad/vo_retrim.py      → assets/audio/vo_trimmed.wav + scratchpad/fw_words.json (shifted)
import subprocess, re, sys, os, glob, json
sys.stdout.reconfigure(encoding="utf-8")
FF = __import__("os").environ["FFMPEG_DIR"]
PAD, PAD_END = 0.16, 0.16
# ★ 027: the trimmed take is 60.9 s against a 60-s target and a 65-s HARD cap, so only where it is needed: inside a set the
#   shots hand over by ACTION (no transition), so a sentence boundary keeps vo_trim's 0.16 s; the six SET boundaries (a 12-f push
#   or a cut) keep 0.42 s and "Kylie Jenner." (a whole shot in 0.8 s) 0.45 s. (A first pass at 0.28 / 0.55 ran 64.7 s,
#   at the cap.) Keyed by the word index the next cue starts at; never
#   more than the take's own pause.
# ★ 028 (take of 2026-10-08, 63.0 s tight against the provisional 70 s): the five PLACE boundaries, where a 44–48-f truck or
#   crane hands over, keep 0.45 s: deal 21 "In 2020", fade 59 "Then KKW", skims 88 "So where's", fair 121 "To be fair",
#   verdict 139 "But this". Inside a place, sentences keep vo_trim's 0.16 s. (027's keys, which this file carried, are gone.)
# ★ 029 (take of 2026-10-09, 61.7 s tight): the six PLACE boundaries keep 0.45 s (or all the take recorded): pay 29 "The
#   pay", irs 44 "but in 2017", manhattan 65 "In 2025", showtime 98 "In 2026", fair 133 "To be fair", verdict 154 "But a".
# ★ 030 (take of 2026-10-11, 60.8 s tight): the six PLACE boundaries keep 0.45 s: rise 28 "Jake Paul went", official 56
#   "When a state", why 80 "That's because", joshua 105 "For the Joshua", fair 131 "To be fair", verdict 144 "But $267".
# ★ 031 (take of 2026-10-12, 58.6 s tight): the six PLACE boundaries keep 0.45 s: tweet 9 "August", price 27 "So how",
#   funding 58 "And the", court 96 "Shareholders", fair 114 "To be fair", verdict 135 "But". Three tight spots inside a place
#   keep 0.35 s: 77 "Two days later" (after "It sued.", the case file's arrival), 94 "No admission." (the CHAIRMAN plate
#   leaving), 143 "Our rating" (the box's lid, then the stamp).
EXTRA = {9: 0.45, 27: 0.45, 58: 0.45, 96: 0.45, 114: 0.45, 135: 0.45, 77: 0.35, 94: 0.35, 143: 0.35}
SKIP = ("vo_trimmed", "vo_leveled", "music", "click", "sfx", "trump", "potus", "hook")
cands = [q for q in glob.glob("assets/audio/*.wav") + glob.glob("assets/audio/*.mp3") + glob.glob("assets/audio/*.m4a") + glob.glob("assets/audio/*.mpeg")
         if not any(k in os.path.basename(q).lower() for k in SKIP)]
src = sorted(cands, key=os.path.getmtime)[-1]
print("source:", src)
out = subprocess.run([FF + r"\ffmpeg.exe", "-i", src, "-af", "silencedetect=noise=-33dB:d=0.3", "-f", "null", "-"], capture_output=True, text=True).stderr
starts = [float(m) for m in re.findall(r"silence_start: ([\d.]+)", out)]
ends = [float(m) for m in re.findall(r"silence_end: ([\d.]+)", out)]
dur = float(subprocess.run([FF + r"\ffprobe.exe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", src], capture_output=True, text=True).stdout.strip())
gaps = list(zip(starts, ends))

def segments(pads):
    segs, cur = [], 0.0
    for (s, e), p in zip(gaps, pads):
        segs.append((cur, s + p / 2)); cur = e - p / 2
    segs.append((cur, dur))
    return [(max(0, a), min(dur, b)) for a, b in segs]

# 1. where each raw pause sits in the TIGHT trim (vo_trim.py's PAD everywhere): the boundary between its two segments
tight = segments([PAD] * len(gaps))
if any(b - a <= 0.02 for a, b in tight): sys.exit("REFUSING — a degenerate segment (vo_trim.py's filter would differ)")
cum, pos = 0.0, []
for a, b in tight[:-1]:
    cum += b - a; pos.append(cum)
if not os.path.exists("scratchpad/fw_words_tight.json"):
    if not os.path.exists("scratchpad/fw_words.json"): sys.exit("REFUSING — no transcript (run fw.py on the tight trim first)")
    os.replace("scratchpad/fw_words.json", "scratchpad/fw_words_tight.json")
W = json.load(open("scratchpad/fw_words_tight.json", encoding="utf8"))["words"]
# the trim the transcript was made from must be the tight one: its length is the tight trim's length
if abs(W[-1]["b"] - sum(b - a for a, b in tight)) > 0.6: sys.exit("REFUSING — fw_words_tight.json does not belong to this take's tight trim")
# 2. the cue boundaries (word index where a new cue starts), from captions_vo.mjs's PLAN
plan = open("scratchpad/vo/captions_vo.mjs", encoding="utf8").read()
starts_i = [int(m) for m in re.findall(r'^\s*\["[a-z]+", (\d+), \d+,', plan, re.M)]   # ★ 029: any place name (a list of one film's names went stale on the next)
if len(starts_i) < 10: sys.exit(f"REFUSING — found {len(starts_i)} cues in the PLAN")
bound_t = [((W[i - 1]["b"] + W[i]["a"]) / 2, i) for i in starts_i if i > 0]
pads, hits, extra_hit = [], 0, set()
for k, p in enumerate(pos):
    near = [i for t, i in bound_t if abs(p - t) < 0.2]
    raw = gaps[k][1] - gaps[k][0]
    want = max(EXTRA.get(near[0], PAD_END), PAD_END) if near else PAD
    if near and near[0] in EXTRA: extra_hit.add(near[0])
    pads.append(min(raw, want) if near else PAD)
    hits += bool(near)
missing = set(EXTRA) - extra_hit
if missing: sys.exit(f"REFUSING — EXTRA names cue start(s) {sorted(missing)} with no pause of the take under them")
print(f"{len(gaps)} pauses · {hits} on the {len(bound_t)} cue boundaries · kept {PAD_END:.2f} s there (or all the take had)")
# 3. re-trim, and shift every word by the silence added before it
segs = segments(pads)
parts = "".join(f"[0:a]atrim={a:.3f}:{b:.3f},asetpts=N/SR/TB[a{i}];" for i, (a, b) in enumerate(segs))
conc = "".join(f"[a{i}]" for i in range(len(segs))) + f"concat=n={len(segs)}:v=0:a=1[out]"
subprocess.run([FF + r"\ffmpeg.exe", "-y", "-i", src, "-filter_complex", parts + conc, "-map", "[out]",
                "-ar", "44100", "-ac", "1", "-c:a", "pcm_s16le", "assets/audio/vo_trimmed.wav"], check=True, capture_output=True)
add = [pd - PAD for pd in pads]
def shift(t):
    return t + sum(x for p, x in zip(pos, add) if p < t)
W2 = [{"t": w["t"], "a": round(shift(w["a"]), 3), "b": round(shift(w["b"]), 3)} for w in W]
json.dump({"words": W2}, open("scratchpad/fw_words.json", "w", encoding="utf8"))
newdur = float(subprocess.run([FF + r"\ffprobe.exe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", "assets/audio/vo_trimmed.wav"], capture_output=True, text=True).stdout.strip())
print(f"tight {sum(b - a for a, b in tight):.2f} s → {newdur:.2f} s (+{sum(add):.2f} s) · last word ends {W2[-1]['b']:.2f} s")
