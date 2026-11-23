# -*- coding: utf-8 -*-
"""sfx_table_apply.py: write sfx_prep.py's measured table (assets/audio/sfx/sfx_table.json) into src/r45/SfxLayer.tsx:
each name's EVEN, LEN, ONSET and PEAK (replaced when the name is there, added when it is not), its SfxName type entry and
its SUSTAINED membership. Run from the film's root:  python tools/../sfx_table_apply.py   (path to this file)
"""
import json
import re

T = json.load(open("assets/audio/sfx/sfx_table.json"))
p = "src/r45/SfxLayer.tsx"
s = open(p).read()


def put(label, key):
    global s
    i = s.index(label)
    j = s.index("};", i)
    body = s[i:j]
    for n, v in T.items():
        val = v[key]
        m = re.search(r"\b" + n + r": [0-9.]+", body)
        if m:
            body = body[:m.start()] + f"{n}: {val}" + body[m.end():]
        else:
            body = body.rstrip() + ("" if body.rstrip().endswith(",") else ",") + f"\n  {n}: {val},"
    s = s[:i] + body + "\n" + s[j:]


put("const EVEN: Record<SfxName, number> = {", "even")
put("export const LEN: Record<SfxName, number> = {", "len")
put("export const ONSET: Record<SfxName, number> = {", "onset")
put("export const PEAK: Record<SfxName, number> = {", "peak")
# the type
m = re.search(r"export type SfxName =([\s\S]*?);\n", s)
names = set(re.findall(r'"([a-z0-9]+)"', m.group(1)))
new = [n for n in T if n not in names]
if new:
    s = s[:m.end() - 2] + "\n  | " + " | ".join(f'"{n}"' for n in new) + s[m.end() - 2:]
# sustained
m = re.search(r"const SUSTAINED = new Set<SfxName>\(\[([\s\S]*?)\]\);", s)
have = set(re.findall(r'"([a-z0-9]+)"', m.group(1)))
add = [n for n, v in T.items() if v["sustained"] and n not in have]
if add:
    s = s[:m.end() - 3] + ", " + ", ".join(f'"{n}"' for n in add) + s[m.end() - 3:]
open(p, "w").write(s)
print(f"{len(T)} effects written to {p}" + (f" (new: {', '.join(new)})" if new else ""))
