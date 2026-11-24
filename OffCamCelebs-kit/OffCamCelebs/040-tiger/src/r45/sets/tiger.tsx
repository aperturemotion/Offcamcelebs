import React from "react";
import { clamp01 } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, IO, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import {
  tigerModel, TG, framePts, shelfPts, frameFace, blockPts, blockPrint, plaquePts, plaquePrint, flagPts, flagPrint, dealPts, dealPrint,
  fastest, type TigerT, type TigerP,
} from "../../three/props/tiger";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 2 · TIGER (cream) — two sentences on one long table.
//  0 "Tiger is golf's biggest name, with 15 major championships." The place arrives close on his FRAMED PHOTO standing on a
//    walnut display shelf (a short, quiet gallery applause under "biggest name"). On "with" the camera pulls back and cranes
//    up; on "15" a heavy walnut block slides in from the right and lands beside the frame: "15" cut into its brass plate,
//    MAJOR CHAMPIONSHIPS under it; then over "major championships" the fifteen majors are dealt in from the right, one after
//    another, into three columns in front of it: fifteen walnut plaques, each brass plate engraved with its year and major
//    (1997 MASTERS … 2019 MASTERS, in the order he won them).
//  1 "In 2022, LIV, a new Saudi-backed tour, went after golf's stars with huge contracts." On "2022," the camera travels right
//    along the table as a black pin flag slides in and settles: LIV GOLF / 2022 in gold; on "Saudi-backed" it pushes in on
//    the flag's SAUDI-BACKED line; on "huge contracts" it pulls back as a stack of PLAYER AGREEMENT contracts slides in in
//    front of the flag and three bundles of $100s slide in after it and are stacked on it.
// ═══════════════════════════════════════════════════════════════════════════
const S = "tiger" as const;
const BIGGEST = word(S, 0, /^biggest/), WITH = word(S, 0, /^with/), N15 = word(S, 0, /^15/);
const Y2022 = word(S, 1, /^2022/), LIV = word(S, 1, /^Liv/), HUGE = word(S, 1, /^huge/), CONTRACTS = word(S, 1, /^contracts/);

export const T: TigerT = {
  block: N15 + 3,
  plaques: Array.from({ length: 15 }, (_, k) => N15 + 9 + 2 * k),
  flag: LIV - 2,
  deal: HUGE + 6,
  cash: [CONTRACTS + 1, CONTRACTS + 6, CONTRACTS + 11],
};
const DONE = Math.max(cueEnd(S, 1) + 4, T.cash[2] + 6, T.plaques[14] + 8);

// ── the camera: the eye rides with the view, a little right; on the pull-back it cranes up to look down onto the table ──
const K1_AT = WITH - 4, K1_DUR = 40;
const tiltAt = (f: number) => IO(clamp01((f - K1_AT) / K1_DUR));
const eyeOf = (v: { x: number; y: number }, tilt: number) => ({ x: v.x + 120, y: v.y - (760 + 740 * tilt), D: 1900 });
/** the view that puts `pts` (layer coords) between screen rows top and bot, centred on screen x cx */
const fit = (pts: [number, number, number][], tilt: number, top: number, bot: number, cx = 540) => {
  let v = { x: 540, y: 1100, z: 1 };
  for (let i = 0; i < 80; i++) {
    const e = eyeOf(v, tilt), q = pts.map(([x, y, z]) => project(e, x, y, z));
    const y0 = Math.min(...q.map((p) => p.y)), y1 = Math.max(...q.map((p) => p.y));
    const x0 = Math.min(...q.map((p) => p.x)), x1 = Math.max(...q.map((p) => p.x));
    const z = (bot - top) / (y1 - y0);
    v = { x: (x0 + x1) / 2 - (cx - 540) / z, y: y0 - (top - 960) / z, z };
  }
  return v;
};
const REST = 99999;
const PLAQ_REST = Array.from({ length: 15 }, (_, k) => plaquePts(T, k, REST)).flat();
const FRAME_V = fit([...framePts(), ...shelfPts()], 0, 712, 1392, 548);
const ZONE1_V = fit([...framePts(), ...shelfPts(), ...blockPts(T, REST), ...PLAQ_REST], 1, 704, 1446, 534);
const FLAG_V = fit(flagPts(T, REST), 1, 790, 1290, 530);
/** "2022,": a level truck along the table (the zone's height and zoom kept, so nothing rises into the captions) */
const LAT_V = { x: FLAG_V.x, y: ZONE1_V.y, z: ZONE1_V.z };
/** "huge contracts": a level truck on to them (the flag's height and zoom, so it leaves sideways, never up) */
const DEAL_V = (() => { const v = fit(dealPts(T, REST), 1, 730, 1440, 520); return { x: v.x, y: FLAG_V.y, z: FLAG_V.z }; })();
const STORY: CamKey[] = [
  { at: -9999, ...FRAME_V, dur: 1 },                     // close on the framed photo as the place arrives
  { at: K1_AT, ...ZONE1_V, dur: K1_DUR },                // "with": back and up, the block and the plaques sliding in
  { at: Y2022 - 4, ...LAT_V, dur: 40 },                  // "2022,": along the table, the LIV flag sliding in
  { at: LIV - 2, ...FLAG_V, dur: 30 },                   // "LIV, a new Saudi-backed tour": in on the flag
  { at: HUGE - 14, ...DEAL_V, dur: 40 },                 // "huge contracts": on along the table to the contracts and the cash
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });
if ((globalThis as unknown as { process?: { env: Record<string, string> } }).process?.env.TIGER_DEBUG) {
  console.log("tiger views", JSON.stringify({ FRAME_V, ZONE1_V, LAT_V, FLAG_V, DEAL_V }));
  const bb = (v: { x: number; y: number; z: number }, pts: [number, number, number][]) => { const q = pts.map((p) => { const r = project(eyeOf(v, 1), ...p); return { x: 540 + (r.x - v.x) * v.z, y: 960 + (r.y - v.y) * v.z }; }); return [Math.min(...q.map((a) => a.x)), Math.min(...q.map((a) => a.y)), Math.max(...q.map((a) => a.x)), Math.max(...q.map((a) => a.y))].map(Math.round); };
  console.log("tiger bboxes", JSON.stringify({ zone1: bb(ZONE1_V, [...framePts(), ...blockPts(T, REST), ...PLAQ_REST]), flag: bb(FLAG_V, flagPts(T, REST)), deal: bb(DEAL_V, dealPts(T, REST)) }));
}
const eyeAt = (f: number) => eyeOf(camView(CAM, f), tiltAt(f));

// ★ the screen's rules, checked on every frame the place can show: every top below the caption band (662); once landed, the
//   print left of x 930 where it lies in y 1000–1700, above y 1490, never cut at the left; the subjects big
const scr = (f: number, p: [number, number, number]) => {
  const v = camView(CAM, f), q = project(eyeAt(f), p[0], p[1], p[2]);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
{
  const BAD: string[] = [];
  for (let f = cue(S, 0) - 8; f <= DONE + 44; f++) {
    const tops: [string, [number, number, number][]][] = [["the frame", [...framePts(), ...shelfPts()]]];
    if (f > T.block - 22) tops.push(["the 15 block", blockPts(T, f)]);
    T.plaques.forEach((a, k) => { if (f > a - 14) tops.push([`plaque ${k}`, plaquePts(T, k, f)]); });
    if (f > T.flag - 26) tops.push(["the flag", flagPts(T, f)]);
    if (f > T.deal - 20) tops.push(["the contracts", dealPts(T, f)]);
    for (const [what, pts] of tops) for (const p of pts) {
      const s = scr(f, p);
      if (s.x > -40 && s.x < 1120 && s.y < 662) BAD.push(`${what}: a top reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    }
    const ink: [string, [number, number, number][]][] = [];
    // zone 1's print until the camera leaves it for the flag; zone 2's from the flag's landing
    if (f >= T.block + 4 && f < STORY[2].at) ink.push(["the 15 plate", blockPrint(T, f)]);
    T.plaques.forEach((a, k) => { if (f >= a + 4 && f < STORY[2].at) ink.push([`plaque ${k}`, plaquePrint(T, k, f)]); });
    if (f >= T.flag + 6 && f < STORY[4].at) ink.push(["LIV GOLF 2022", flagPrint(T, f, "main")], ["SAUDI-BACKED", flagPrint(T, f, "sub")]);
    if (f >= T.deal + 4) ink.push(["PLAYER AGREEMENT", dealPrint(T, f)]);
    for (const [what, pts] of ink) {
      const q = pts.map((p) => scr(f, p));
      if (Math.max(...q.map((s) => s.x)) < 0 || Math.min(...q.map((s) => s.x)) > 1080) continue;   // off screen: the camera has moved on
      for (const s of q) {
        if (s.y > 1490) BAD.push(`${what}: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
        if (s.y > 1000 && s.x > 930) BAD.push(`${what}: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
        if (s.x < 40) BAD.push(`${what}: print cut at the left (x ${Math.round(s.x)}) at f${f}`);
      }
    }
  }
  if (BAD.length) throw new Error(`tiger: ${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/: (a top|print).*$/, ": $1")))].slice(0, 8).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
  // the subjects are big: the frame ~650 px tall as the place opens; the plaques' block ≥ 640 px wide; the flag ≥ 760 px wide
  const span = (pts: [number, number, number][], f: number, ax: "x" | "y") => { const q = pts.map((p) => scr(f, p)[ax]); return Math.max(...q) - Math.min(...q); };
  const fh = span(framePts(), cue(S, 0) + 6, "y"), pw = span(PLAQ_REST, T.plaques[14] + 10, "x"), gw = span(flagPts(T, REST), T.flag + 20, "x");
  const yr = span(plaquePrint(T, 0, REST), T.plaques[14] + 10, "y");
  if (fh < 600 || pw < 560 || gw < 620 || yr < 28)
    throw new Error(`tiger: too small on screen (frame ${Math.round(fh)} px tall, plaques ${Math.round(pw)} px wide, flag ${Math.round(gw)} px wide, a plaque's plate ${Math.round(yr)} px deep)`);
}

const M3D = tigerModel(T);
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 260 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, TG.floor - 820), y1 = Math.min(v.y + 960 / v.z + m, TG.floor + 900);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const FF = frameFace();
const LP = (v: { x: number; y: number }, tilt: number, x: number, y: number, z: number) => { const q = project(eyeOf(v, tilt), x, y, z); return [q.x, q.y] as const; };
const [fx, fy] = LP(FRAME_V, 0, FF.x, FF.y, FF.z);
const [px, py] = LP(ZONE1_V, 1, TG.grid.x, TG.floor, TG.grid.z0 + 2 * TG.grid.dz);
const [gx, gy] = LP(FLAG_V, 1, TG.flag.x, TG.floor, TG.flag.z);
const [dx, dy] = LP(DEAL_V, 1, TG.deal.x, TG.floor, TG.deal.z);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[fx, fy - 30, 520, 520], [px, py, 700, 400], [gx, gy, 640, 360], [dx, dy, 520, 340]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="table">
        <View3D name="tiger" rect={rectAt(f)} eye={eyeAt(f)} make={M3D} params={{ f } as TigerP} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "clap", at: BIGGEST - 4, end: WITH + 8, vol: 0.25, why: "tiger: a short polite gallery applause under \"biggest name\"", mode: "within" },
  { s: "glide", at: fastest(T.block, "block") + 3, vol: 0.32, why: "tiger: the 15 block slides in low over the table", mode: "peak" },
  { s: "thump", at: T.block, vol: 0.5, why: "tiger: the 15 block lands with weight", mode: "peak" },
  { s: "glide2", at: T.plaques[7], vol: 0.25, why: "tiger: the fifteen plaques are dealt in", mode: "peak" },
  { s: "glide", at: fastest(T.flag, "flag") + 4, vol: 0.28, why: "tiger: the LIV flag slides in along the table", mode: "peak" },
  { s: "paper", at: T.deal, vol: 0.42, why: "tiger: the contracts slide in and land", mode: "peak" },
  { s: "stack", at: T.cash[0], vol: 0.35, why: "tiger: the first bundles land on the contracts", mode: "peak" },
  { s: "stack", at: T.cash[2], vol: 0.4, why: "tiger: the top bundle is stacked on them", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [fx, fy] },
  done: DONE, cam: CAM, sfx: SFX,
};
