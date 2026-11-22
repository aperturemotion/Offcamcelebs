# -*- coding: utf-8 -*-
"""openverse_audio.py: find and fetch Creative Commons sound effects from Openverse (api.openverse.org), the library that
indexes Freesound, Wikimedia Commons and Jamendo. No key needed (anonymous: ~20 requests a minute); set OPENVERSE_TOKEN to
send a registered token.

Timur, 2026-11-22: "set up OpenVerse" — for what the EarnEdits pack (OffCamCelebs/_sfx/earnedits) does not have. Only
licences a film may use commercially are searched (CC0, PDM, CC BY; never NC or ND; BY-SA only with --sa).

  python tools/openverse_audio.py search "phone vibration" [--n 12] [--max 4] [--min 0.2] [--sa]
      one line per hit: id, seconds, licence, source, creator, title
  python tools/openverse_audio.py get <id> <outdir> [--name vibrate]
      downloads the file to <outdir>/<name>.<ext>, writes <name>.credit.json beside it and appends the credit line to
      <outdir>/OPENVERSE_CREDITS.txt (copy that line into the film's assets/brand/SOURCES.txt when the sound is used)
"""
import argparse
import json
import os
import subprocess
import sys
import urllib.parse
import urllib.request

API = "https://api.openverse.org/v1/audio/"
SAFE = {"cc0", "pdm", "by"}  # commercial use, derivatives allowed


def _get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "openverse-audio-cli/1.0"})
    tok = os.environ.get("OPENVERSE_TOKEN")
    if tok:
        req.add_header("Authorization", f"Bearer {tok}")
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def search(q, n, dmax, dmin, sa):
    lic = sorted(SAFE | ({"by-sa"} if sa else set()))
    url = API + "?" + urllib.parse.urlencode({"q": q, "license": ",".join(lic), "page_size": min(50, max(n * 3, 20)), "mature": "false"})
    res = json.loads(_get(url))
    out = []
    for r in res.get("results", []):
        d = (r.get("duration") or 0) / 1000
        if r.get("license") not in lic or (dmax and d > dmax) or (dmin and d and d < dmin):
            continue
        out.append(r)
        if len(out) >= n:
            break
    for r in out:
        d = (r.get("duration") or 0) / 1000
        print(f"{r['id']}  {d:5.2f}s  {r['license']:<6} {r.get('source', ''):<10} {str(r.get('creator', ''))[:18]:<18}  {r.get('title', '')[:60]}")
    print(f"({len(out)} shown of {res.get('result_count')} for {q!r}; licences {','.join(lic)})", file=sys.stderr)


def get(id_, outdir, name):
    r = json.loads(_get(API + id_ + "/"))
    if r.get("license") not in SAFE | {"by-sa"}:
        sys.exit(f"refused: licence {r.get('license')} is not usable in a film")
    os.makedirs(outdir, exist_ok=True)
    ext = (r.get("filetype") or os.path.splitext(urllib.parse.urlparse(r["url"]).path)[1].lstrip(".") or "mp3").lower()
    name = name or id_
    path = os.path.join(outdir, f"{name}.{ext}")
    # the file itself through curl: the Freesound CDN refuses Python's own HTTP client (403) but serves curl
    subprocess.run(["curl", "-sfL", "--retry", "3", "-o", path, r["url"]], check=True)
    credit = {k: r.get(k) for k in ("id", "title", "creator", "creator_url", "license", "license_version", "license_url",
                                    "foreign_landing_url", "source", "duration", "attribution")}
    with open(os.path.join(outdir, f"{name}.credit.json"), "w") as f:
        json.dump(credit, f, indent=1)
    lic = r["license"].upper() + (" " + r["license_version"] if r.get("license_version") else "")
    line = f"{name}.{ext}: \"{r.get('title')}\" by {r.get('creator')} ({r.get('foreign_landing_url')}), {lic}"
    with open(os.path.join(outdir, "OPENVERSE_CREDITS.txt"), "a") as f:
        f.write(line + "\n")
    print(path)
    print(line)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    sp = ap.add_subparsers(dest="cmd", required=True)
    s = sp.add_parser("search"); s.add_argument("q"); s.add_argument("--n", type=int, default=12)
    s.add_argument("--max", type=float, default=0); s.add_argument("--min", type=float, default=0); s.add_argument("--sa", action="store_true")
    g = sp.add_parser("get"); g.add_argument("id"); g.add_argument("outdir"); g.add_argument("--name")
    a = ap.parse_args()
    if a.cmd == "search":
        search(a.q, a.n, a.max, a.min, a.sa)
    else:
        get(a.id, a.outdir, a.name)
