# -*- coding: utf-8 -*-
# viol032.py — THE SCREEN'S RULES, judged on the film as drawn (the user, 2026-10-14: "full intersection and violation
# sweep"). The 3-D audit (g3audit PEN / EDGES / FLOAT) sees objects against objects; this sees what it cannot: the frame's
# captions against its objects, and the frame's zones. It reads sweep029.mjs `viol` captures:
#   <dir>/f<NNNN>.png   the frame's OBJECTS alone (captions and ground hidden, page transparent), at `scale`
#   <dir>/caps.jsonl    every visible caption word's screen box per frame
# and judges, in screen px:
#   CROSS     a caption word's box over object ink (alpha > SOLID): a crossing
#   NEAR      object ink within CLEAR px of a caption word (the clearance rule: ≥ 12 px)
#   BAND      object ink above y BAND_Y (the caption band holds: everything printed or solid stays below ~660) — hand-overs
#             excepted (a crane carries a whole place, its captions with it)
#   CAPZONE   a caption word outside x 90–950 or y 300–680 (the caption block lives in y 330–640, x 90–950) — hand-overs
#             excepted
#   REEL-R    object ink under the Reel's buttons (x > 940, y 1000–1700), settled frames: LISTED, then looked at (text there
#             is a violation; a solid's edge is not)
#   REEL-B    object ink in the Reel's caption area (y > 1500), settled frames: LISTED likewise
# It proves itself first on the two real-page canaries the capture drew on its first frame (a solid block in the band
# must give BAND and CROSS against a caption box laid on it; the same block low in the frame must give neither).
#   python scratchpad/viol032.py <dir> scratchpad/plan.json [scale=0.5]
import sys, json, os
import numpy as np
from PIL import Image
sys.stdout.reconfigure(encoding="utf-8")

D, PLAN = sys.argv[1], sys.argv[2]
SC = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5
SOLID, CLEAR, BAND_Y = 150, 12, 660
plan = json.load(open(PLAN))
lay = [l for l in plan["layers"] if l["id"] != "ground"]
# hand-over windows: where two consecutive places are both drawn
HAND = [(lay[i + 1]["from"], lay[i]["to"]) for i in range(len(lay) - 1)]
def place(f):
    for l in reversed(lay):
        if l["from"] <= f < l["to"]: return l["id"]
    return "?"
def hand(f): return any(a <= f < b for a, b in HAND)

def ink(p):
    a = np.asarray(Image.open(p).convert("RGBA"))[:, :, 3]
    return a > SOLID
def box_px(c, pad=0):
    # ★ clamped on EVERY side: a caption riding a hand-over out of the frame has a box at negative y, and an unclamped
    #   m[0:y1] with y1 < 0 slices from 0 to H + y1 (numpy wraps), counting ink that is nowhere near it (two false CROSSes)
    W_, H_ = int(1080 * SC), int(1920 * SC)
    cl = lambda v, hi: max(0, min(hi, v))
    x0 = cl(int(np.floor((c["x0"] - pad) * SC)), W_); y0 = cl(int(np.floor((c["y0"] - pad) * SC)), H_)
    x1 = cl(int(np.ceil((c["x1"] + pad) * SC)), W_); y1 = cl(int(np.ceil((c["y1"] + pad) * SC)), H_)
    return x0, y0, x1, y1
def judge(m, caps):
    H, W = m.shape
    out = []
    for c in caps:
        x0, y0, x1, y1 = box_px(c)
        n = int(m[y0:y1, x0:x1].sum())
        if n >= 2: out.append(("CROSS", c["t"], n * 4, c["op"]))
        else:
            X0, Y0, X1, Y1 = box_px(c, CLEAR)
            n2 = int(m[Y0:Y1, X0:X1].sum())
            if n2 >= 2: out.append(("NEAR", c["t"], n2 * 4, c["op"]))
    by = int(BAND_Y * SC)
    nb = int(m[:by].sum())
    if nb >= 2:
        ys = np.nonzero(m[:by].any(axis=1))[0]
        out.append(("BAND", f"top y {int(ys.min() / SC)}", nb * 4, 1))
    for c in caps:
        if c["x0"] < 90 or c["x1"] > 950 or c["y0"] < 300 or c["y1"] > 680:
            out.append(("CAPZONE", f'{c["t"]} [{int(c["x0"])},{int(c["y0"])}–{int(c["x1"])},{int(c["y1"])}]', 0, c["op"]))
    r = m[int(1000 * SC):int(1700 * SC), int(940 * SC):]
    if r.sum() >= 2: out.append(("REEL-R", "", int(r.sum()) * 4, 1))
    bt = m[int(1500 * SC):]
    if bt.sum() >= 2: out.append(("REEL-B", "", int(bt.sum()) * 4, 1))
    return out

caps = {}
for l in open(os.path.join(D, "caps.jsonl"), encoding="utf8"):
    o = json.loads(l); caps[o["f"]] = o["caps"]
frames = sorted(caps)
if not frames: sys.exit("REFUSING — no frames captured")

# ── the canaries: a real block (320 × 80 at x 380, y 470 / y 1160) drawn into the first frame's place layer ──
f0 = frames[0]
blockCap = {"t": "CANARY", "x0": 380, "y0": 470, "x1": 700, "y1": 550, "op": 1}
hit = judge(ink(os.path.join(D, f"f{f0:04d}_canaryHit.png")), [blockCap])
miss = judge(ink(os.path.join(D, f"f{f0:04d}_canaryMiss.png")), [blockCap])
base = judge(ink(os.path.join(D, f"f{f0:04d}.png")), [blockCap])
kinds = lambda r: {k for k, *_ in r}
# ★ and a caption box wholly OFF the frame (a hand-over carrying it out) judges nothing, on a frame full of ink
offCap = {"t": "OFF", "x0": 380, "y0": -300, "x1": 700, "y1": -220, "op": 1}
off = [r for r in judge(ink(os.path.join(D, f"f{f0:04d}_canaryHit.png")), [offCap]) if r[0] in ("CROSS", "NEAR")]
ok = ("CROSS" in kinds(hit) and "BAND" in kinds(hit)) and not ({"CROSS", "BAND"} & (kinds(miss) - kinds(base))) and not off
if not ok: sys.exit(f"REFUSING — a canary failed: hit {hit} · miss {miss} · base {base}")
print(f"canaries ok (the band block fires CROSS + BAND; the low block adds neither) · ink > {SOLID}/255 · {len(frames)} frames")

# ── the film ──
rows = []
for f in frames:
    for k, d, n, op in judge(ink(os.path.join(D, f"f{f:04d}.png")), caps[f]):
        if k in ("BAND", "CAPZONE") and hand(f): continue
        if k.startswith("REEL") and hand(f): continue
        rows.append((k, place(f), d if k in ("CROSS", "NEAR", "CAPZONE") else "", f, n, op))
# spans: consecutive captured frames with the same rule, place and detail
step = frames[1] - frames[0] if len(frames) > 1 else 1
spans = {}
for k, p, d, f, n, op in rows:
    key = (k, p, d)
    s = spans.setdefault(key, [])
    if s and f - s[-1]["b"] <= step: s[-1]["b"] = f; s[-1]["n"] = max(s[-1]["n"], n); s[-1]["op"] = max(s[-1]["op"], op)
    else: s.append({"a": f, "b": f, "n": n, "op": op})
order = ["CROSS", "NEAR", "BAND", "CAPZONE", "REEL-R", "REEL-B"]
tot = {k: 0 for k in order}
for k in order:
    for (kk, p, d), ss in sorted(spans.items(), key=lambda x: (x[0][1], x[1][0]["a"])):
        if kk != k: continue
        for s in ss:
            tot[k] += 1
            print(f"{k:8s} {p:8s} f{s['a']:>4}–{s['b']:<4} {d[:46]:46s} px {s['n']:>6} op {s['op']:.2f}")
print("TOTALS", tot)
json.dump({"totals": tot, "spans": [{"rule": k, "place": p, "detail": d, **s} for (k, p, d), ss in spans.items() for s in ss]},
          open(os.path.join(D, "viol.json"), "w"), indent=1)
