import React from "react";
import { clamp01, ramp, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, IO, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { champModel, CG, framePts, frameFace, beltPts, beltStart, beltFastest, plateNums, champWord, type BeltT, type ChampP } from "../../three/props/champ";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 2 · THE CHAMPION (cream) — one sentence, two things on a ring-side table.
//  0 "Canelo is boxing's biggest star, a four-division world champion." The place arrives close on his FRAMED PHOTO (a black
//    lacquer frame on its easel strut, his face in a cream mat), the only thing in shot, as his name and "boxing's biggest
//    star" are spoken. On "star," a gold CHAMPIONSHIP BELT slides in from beyond the right edge, low over the table, and
//    lands in front of the frame with weight (thump) as the camera pulls back and cranes up to look down onto it. On
//    "four-division" its four side plates (154, 160, 168, 175 LB: the four weight limits) light up one by one, left to right,
//    a quiet click each. "World champion" rests on the big centre plate (WORLD / CHAMPION engraved).
// ═══════════════════════════════════════════════════════════════════════════
const S = "champ" as const;
const STAR = word(S, 0, /^star/), FOUR = word(S, 0, /^four/), END = cueEnd(S, 0);

const T: BeltT = { land: STAR + 15 };
const LIT = [0, 1, 2, 3].map((k) => FOUR + 1 + 5 * k);
const LIT_DUR = 5, FLARE = 16;
const DONE = Math.max(END + 4, LIT[3] + LIT_DUR + 2);

// ── the camera: the eye rides with the view, a little right; on the pull-back it cranes up to look down onto the belt ──
const K1_AT = STAR - 6, K1_DUR = 42;
const tiltAt = (f: number) => IO(clamp01((f - K1_AT) / K1_DUR));
const eyeOf = (v: { x: number; y: number }, tilt: number) => ({ x: v.x + 150, y: v.y - (780 + 560 * tilt), D: 1900 });
/** the view that puts `pts` (layer coords) between screen rows top and bot, centred on screen x cx */
const fit = (pts: [number, number, number][], tilt: number, top: number, bot: number, cx = 540) => {
  let v = { x: 540, y: 1100, z: 1 };
  for (let i = 0; i < 60; i++) {
    const e = eyeOf(v, tilt), q = pts.map(([x, y, z]) => project(e, x, y, z));
    const y0 = Math.min(...q.map((p) => p.y)), y1 = Math.max(...q.map((p) => p.y));
    const x0 = Math.min(...q.map((p) => p.x)), x1 = Math.max(...q.map((p) => p.x));
    const z = (bot - top) / (y1 - y0);
    v = { x: (x0 + x1) / 2 - (cx - 540) / z, y: y0 - (top - 960) / z, z };
  }
  return v;
};
const FRAME_V = fit(framePts(), 0, 706, 1384, 548);
const REST = beltPts(T, 99999);
const BOTH_V = fit([...framePts(), ...REST], 1, 694, 1452, 540);
const STORY: CamKey[] = [
  { at: -9999, ...FRAME_V, dur: 1 },                 // close on the framed photo as the place arrives
  { at: K1_AT, ...BOTH_V, dur: K1_DUR },             // "star,": back and up, the belt sliding in below it
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });
const eyeAt = (f: number) => eyeOf(camView(CAM, f), tiltAt(f));

// ★ the screen's rules, checked on every frame the place can show: every top below the caption band (662); the belt off
//   screen until it slides in; once it has landed, the plates' numbers left of x 930 and every engraving above y 1490
{
  const scr = (f: number, p: [number, number, number]) => {
    const v = camView(CAM, f), q = project(eyeAt(f), p[0], p[1], p[2]);
    return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
  };
  const t0 = beltStart(T);
  for (let f = cue(S, 0) - 8; f <= DONE + 44; f++) {
    const pts = [...framePts(), ...(f > t0 ? beltPts(T, f) : [])];
    for (const p of pts) {
      const s = scr(f, p);
      if (s.x > -40 && s.x < 1120 && s.y < 662) throw new Error(`champ: a top reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
    }
    if (f === t0 + 1) for (const p of beltPts(T, f)) { const s = scr(f, p); if (s.x < 1090) throw new Error(`champ: the belt shows at x ${Math.round(s.x)} as it starts to slide in (f${f})`); }
    if (f >= T.land + 4) {
      for (const p of plateNums(T, f)) { const s = scr(f, p); if (s.x > 930 || s.x < 60 || s.y > 1490) throw new Error(`champ: a plate's number sits at ${Math.round(s.x)},${Math.round(s.y)} at f${f}`); }
      for (const p of champWord(T, f)) { const s = scr(f, p); if (s.y > 1490) throw new Error(`champ: CHAMPION sits at y ${Math.round(s.y)} at f${f}`); }
    }
  }
  // the subject is big: the frame ~680 px tall when the place opens, the belt ≥ 760 px wide once it is in
  const fr = framePts().map((p) => scr(cue(S, 0), p)), fh = Math.max(...fr.map((s) => s.y)) - Math.min(...fr.map((s) => s.y));
  if (fh < 600) throw new Error(`champ: the frame is only ${Math.round(fh)} px tall as the place opens`);
  const bl = REST.map((p) => scr(LIT[0], p)), bw = Math.max(...bl.map((s) => s.x)) - Math.min(...bl.map((s) => s.x));
  if (bw < 760) throw new Error(`champ: the belt is only ${Math.round(bw)} px wide`);
}

const M3D = champModel(T);
const paramsAt = (f: number): ChampP => ({
  f,
  lit: LIT.map((a) => clamp01((f - a) / LIT_DUR)),
  flare: LIT.map((a) => (f < a ? 0 : Math.max(0, Math.sin(Math.min(1, (f - a) / 4) * Math.PI / 2)) * Math.exp(-Math.max(0, f - a - 4) / (FLARE / 3)))),
  yaw: 0.8 - 1.6 * ramp(f, cue(S, 0), DONE + 40, TRAVEL),
});
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 260 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, CG.floor - 820), y1 = v.y + 960 / v.z + m;
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const FF = frameFace();
const FACE = project(eyeOf(FRAME_V, 0), FF.x, FF.y, FF.z);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[FACE.x, FACE.y - 40, 520, 520], [CG.belt.x, CG.floor + 120, 760, 340]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="table">
        <View3D name="champ" rect={rectAt(f)} eye={eyeAt(f)} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: beltFastest(T) + 3, vol: 0.35, why: "champ: the belt slides in low over the table", mode: "peak" },
  { s: "thump", at: T.land, vol: 0.5, why: "champ: the belt lands on the table with weight", mode: "peak" },
  ...LIT.map((a, k) => ({ s: "click" as const, at: a + 2, vol: 0.25 + 0.02 * k, why: `champ: division plate ${k + 1} lights`, mode: "peak" as const })),
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [FACE.x, FACE.y] },
  done: DONE, cam: CAM, sfx: SFX,
};
