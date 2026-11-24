# -*- coding: utf-8 -*-
# 033: the score's level measured the sfxlevels028 way (each cue's peak relative to its OWN film's speech-gated voice), but
# against OffCamCelebs' own last accepted film, 032 "Up To" (its stems and cue sheet in the main checkout's out/), since
# this session works inside OffCamCelebs only (2026-10-18). Same reader, same canary, same masking rule.
import json, os, sys, runpy
import numpy as np
sys.stdout.reconfigure(encoding="utf-8")
L = runpy.run_path(os.path.join(os.path.dirname(__file__), "sfxlevels_lib.py"))
me = L["per_cue"]("out/solo_sfx.wav", "out/solo_vo.wav", json.load(open("out/sfx_cues.json", encoding="utf8")))
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "_ref", "sfxlevels-032")   # (kit) 032's stems, shipped in OffCamCelebs/_ref
ref = L["per_cue"](os.path.join(R, "solo_sfx.wav"), os.path.join(R, "solo_vo.wav"), json.load(open(os.path.join(R, "sfx_cues.json"), encoding="utf8")))
print(f"voice (speech-gated): 033 {me[2]:.1f} dBFS · 032 {ref[2]:.1f}")
print(f"SFX loud frames (90th pct) relative to the voice: 033 {me[3]:+.1f} dB · 032 {ref[3]:+.1f}")
print(f" {'family':11s}{'033':>22s}{'032':>22s}")
for f in sorted(set(me[0]) | set(ref[0])):
    cell = lambda r: (f"{np.median(r[0][f]):+6.1f} ({min(r[0][f]):+.1f}…{max(r[0][f]):+.1f}) {len(r[0][f])}" if f in r[0] else "—")
    print(f" {f:11s}{cell(me):>22s}{cell(ref):>22s}")
