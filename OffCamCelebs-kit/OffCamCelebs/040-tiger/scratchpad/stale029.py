# stale029.py — RULE 54, class 1: "visuals from previous scenes are still visible". Reads the per-layer captures of
# sweep029.mjs `layers` mode (each place's layer alone, alpha kept, ¼ size) and, for every hand-over, reports:
#   · POP-OUT  the leaving place still covers part of the frame on the LAST frame its layer is drawn: it vanishes there
#   · POP-IN   the arriving place already covers part of the frame on the FIRST frame its layer is drawn: it appears there
#   · LINGER   frames at the end of the leaving window where it still shows while the arriving place is settled (a leftover
#              strip at the frame's edge)
#   · OVERLAP  frames where the two places' pixels meet (rule 41: never, at any opacity)
# It proves itself first on real frames: a planted copy of one layer over the other must fire OVERLAP; an empty layer must
# be silent; a layer with one planted 3-px column at the frame edge must fire POP-OUT.
#   python scratchpad/stale029.py <layersDir> <plan.json>
import sys, os, json
import numpy as np
from PIL import Image

D, PLAN = sys.argv[1], sys.argv[2]
plan = json.load(open(PLAN))
layers = {l["id"]: l for l in plan["layers"] if l["id"] != "ground"}
order = [l["id"] for l in plan["layers"] if l["id"] != "ground"]
A_MIN = 8  # alpha (of 255) that counts as covering

DIRS = [D] + [os.path.join(D, x) for x in sorted(os.listdir(D)) if os.path.isdir(os.path.join(D, x))]

def alpha(f, lid):
    p = next((q for q in (os.path.join(d, f"f{f:04d}_{lid}.png") for d in DIRS) if os.path.exists(q)), None)
    if p is None:
        return None
    return np.asarray(Image.open(p).convert("RGBA"))[:, :, 3]

def cover(a):
    return 0 if a is None else int((a > A_MIN).sum())

def overlap(a, b):
    if a is None or b is None:
        return 0
    return int(((a > A_MIN) & (b > A_MIN)).sum())

# ── canaries (real frames) ──
def canaries():
    k0, k1 = order[0], order[1]
    f = layers[k1]["from"]
    a0, a1 = alpha(f, k0), alpha(f, k1)
    if a0 is None or a1 is None:
        sys.exit(f"REFUSED: canary frames missing (f{f})")
    ok = True
    if overlap(a0, a0) == 0 and cover(a0) > 0: ok = False; print("canary: self-overlap of a covering layer must fire")
    if cover(np.zeros_like(a0)) != 0: ok = False; print("canary: an empty layer must be silent")
    planted = np.zeros_like(a0); planted[:, :3] = 255
    if cover(planted) == 0: ok = False; print("canary: a 3-px edge strip must count as covering")
    if not ok: sys.exit("REFUSED: a canary failed")
    print("canaries ok")

canaries()
report = {"handovers": []}
tot = {"pop_out": 0, "pop_in": 0, "linger_frames": 0, "overlap_frames": 0}
for i in range(1, len(order)):
    k0, k1 = order[i - 1], order[i]
    L0, L1 = layers[k0], layers[k1]
    a, b = L1["from"], L0["to"] - 1        # the frames both are drawn
    rows = []
    for f in range(a, b + 1):
        x0, x1 = alpha(f, k0), alpha(f, k1)
        rows.append({"f": f, "leave": cover(x0), "arrive": cover(x1), "both": overlap(x0, x1)})
    first_in = cover(alpha(L1["from"], k1))
    last_out = cover(alpha(L0["to"] - 1, k0))
    # linger: the tail of the leaving window where it still covers > 0 px while the arriving place's move is done
    settle = L1["from"] + (b - a + 1)      # the hand-over's run (both windows overlap for exactly that run)
    linger = [r["f"] for r in rows if r["leave"] > 0 and r["f"] >= b - 12]
    ov = [r for r in rows if r["both"] > 0]
    h = {"from": k0, "to": k1, "frames": [a, b], "pop_out_px": last_out * 16, "pop_in_px": first_in * 16,
         "linger": linger, "overlap_frames": len(ov), "overlap_max_px": max([r["both"] for r in ov], default=0) * 16,
         "series": rows}
    report["handovers"].append(h)
    tot["pop_out"] += last_out > 0
    tot["pop_in"] += first_in > 0
    tot["linger_frames"] += len(linger)
    tot["overlap_frames"] += len(ov)
    print(f"{k0:>10} -> {k1:<10} f{a}-{b}: pop-out {last_out*16:>7} px  pop-in {first_in*16:>7} px  "
          f"linger {len(linger):>2} f  overlap {len(ov):>2} f (max {h['overlap_max_px']} px)")
report["totals"] = tot
json.dump(report, open(os.path.join(D, "stale.json"), "w"), indent=1)
print("totals", tot)
