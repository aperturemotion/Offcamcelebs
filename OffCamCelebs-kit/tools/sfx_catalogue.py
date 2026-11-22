# -*- coding: utf-8 -*-
"""sfx_catalogue.py: hear every sound in a pack with Earshot and write <pack>/index.json (Timur, 2026-11-22: "set up …
Earshot, in order to understand sound effects better").

For each file: what Earshot hears (its top calibrated tags with z, the AudioSet labels) and the numbers a cue needs
(length, peak dBFS, LUFS, attack). Run with Earshot's own Python (the venv that has earshot[listen]):

  <earshot-venv>/bin/python tools/sfx_catalogue.py OffCamCelebs/_sfx/earnedits
  <earshot-venv>/bin/python tools/sfx_catalogue.py /home/user/occ-work/ov_cand --out cand.json

One process loads the listening models once (a `earshot describe` call per file reloads them, ~20 s each).
"""
import json
import os
import sys

from earshot.describe import describe

root = sys.argv[1]
out = sys.argv[sys.argv.index("--out") + 1] if "--out" in sys.argv else os.path.join(root, "index.json")
EXT = (".mp3", ".wav", ".flac", ".ogg", ".aif", ".aiff", ".m4a")
files = sorted(os.path.join(d, f) for d, _, fs in os.walk(root) for f in fs if f.lower().endswith(EXT) and not f.startswith("."))
rows = []
for i, p in enumerate(files):
    try:
        r = describe(p, top=5)
    except Exception as e:  # one unreadable file never stops the catalogue
        rows.append({"file": os.path.relpath(p, root), "error": str(e)})
        print(f"[{i + 1}/{len(files)}] {p}: ERROR {e}", flush=True)
        continue
    m = r.get("measurements", {})
    tags = [{"tag": t["term"], "z": round(t.get("z", 0), 1)} for t in (r.get("top_tags") or [])[:5]]
    row = {
        "file": os.path.relpath(p, root),
        "sounds_like": tags,
        "audioset": r.get("audioset"),
        "shape": r.get("shape"), "summary": r.get("summary"),
        "duration": m.get("duration"), "peak_dbfs": m.get("peak_dbfs"), "lufs": m.get("lufs"), "attack_ms": m.get("attack_ms"),
    }
    rows.append(row)
    print(f"[{i + 1}/{len(files)}] {row['file']}: {', '.join(f'{t['tag']} {t['z']:+}' for t in tags[:3])}", flush=True)
json.dump(rows, open(out, "w"), indent=1, ensure_ascii=False)
print(f"{len(rows)} sounds → {out}")
