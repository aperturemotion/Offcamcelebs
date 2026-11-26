import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import { HO } from "../handover";
import {
  catchModel, CT, BIG_H, SMALL_H, TENT, smallPose, smallLands, cardPose, cardFoot, smallFoot, bigFoot, bigPts, smallPts, cardPts,
  bandPrint, cardPrint, type CatchT, type Pose,
} from "../../three/props/catch";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · THE CATCH (dark) — the buyout's cash, split three ways.
//  0 "The catch: two partners shared in the deal." The crane brings the place in CLOSE on ONE pile of cash: a bank brick of
//    sixteen $100 bundles with two small stacks of two lying crosswise on its top. On "partners" the two small stacks are shoved
//    off, slide across the brick turning a quarter turn, tip off its edge, land on the table and slide on, front left and right,
//    as the camera eases back over all three; on "shared in the deal" a folded name card PARTNER slides in from the left in
//    front of the left stack, then another from the right in front of the right one (never a real name).
//  1 "Foreman's own cut of the buyout was $110 million." On "Foreman's" a third card, FOREMAN, slides in from the right
//    along the big stack's front; on "$110" the camera pushes in on the brick's kraft band, printed
//    $110,000,000. The split is the 8-K's: 16 : 2 : 2 bundles, $110M : $13.75M : $13.75M.
// ═══════════════════════════════════════════════════════════════════════════
const S = "catch" as const;
const DBG = (globalThis as unknown as { process?: { env: Record<string, string> } }).process?.env.CATCH_DEBUG;
const PARTNERS = word(S, 0, /^partners/), SHARED = word(S, 0, /^shared/), DEAL = word(S, 0, /^deal/);
const FOREMANS = word(S, 1, /^Foreman/), D110 = word(S, 1, /^\$110/);

export const T: CatchT = {
  split: [[PARTNERS - 2, PARTNERS + 16], [PARTNERS + 2, PARTNERS + 20]],
  cardL: [SHARED - 4, SHARED + 14],
  cardR: [SHARED + 5, DEAL + 6],
  cardF: [FOREMANS - 14, FOREMANS + 4],
};
const DONE = Math.max(cueEnd(S, 1) + 4, T.cardF[1] + 4);
/** the place has landed: the crane's arrival is over (it is centred on the place's switch, cue + 4) */
const LAND = cue(S, 0) + 4 + Math.ceil(HO.crane / 2);

// ── the camera: the eye rides with the view, up and a little right, looking down onto the table ──
const EX = 90, EL = 1150, ED = 2000;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + EX, y: v.y - EL, D: ED });
type P3 = [number, number, number];
const scrOf = (p: P3, v: { x: number; y: number; z: number }) => {
  const q = project(eyeOf(v), p[0], p[1], p[2]);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** the view that puts `pts` between screen rows top and bot, centred on screen x cx */
const fit = (pts: P3[], top: number, bot: number, cx = 540) => {
  let v = { x: 540, y: 1100, z: 1 };
  for (let i = 0; i < 80; i++) {
    const e = eyeOf(v), q = pts.map(([x, y, z]) => project(e, x, y, z));
    const y0 = Math.min(...q.map((p) => p.y)), y1 = Math.max(...q.map((p) => p.y));
    const x0 = Math.min(...q.map((p) => p.x)), x1 = Math.max(...q.map((p) => p.x));
    const z = (bot - top) / (y1 - y0);
    v = { x: (x0 + x1) / 2 - (cx - 540) / z, y: y0 - (top - 960) / z, z };
  }
  return v;
};
/** the view that puts `pts`' box at width w, centred at screen (cx, cy) */
const fitW = (pts: P3[], w: number, cx: number, cy: number) => {
  let v = { x: 540, y: 1100, z: 1 };
  for (let i = 0; i < 80; i++) {
    const e = eyeOf(v), q = pts.map(([x, y, z]) => project(e, x, y, z));
    const x0 = Math.min(...q.map((p) => p.x)), x1 = Math.max(...q.map((p) => p.x));
    const y0 = Math.min(...q.map((p) => p.y)), y1 = Math.max(...q.map((p) => p.y));
    const z = w / (x1 - x0);
    v = { x: (x0 + x1) / 2 - (cx - 540) / z, y: (y0 + y1) / 2 - (cy - 960) / z, z };
  }
  return v;
};
/** the view that fits `pts` inside the screen box [x0, x1] × [y0, y1] (the tighter of its width and its height), centred in it */
const fitBox = (pts: P3[], x0: number, x1: number, y0: number, y1: number) => {
  let v = { x: 540, y: 1100, z: 1 };
  for (let i = 0; i < 80; i++) {
    const e = eyeOf(v), q = pts.map(([x, y, z]) => project(e, x, y, z));
    const a0 = Math.min(...q.map((p) => p.x)), a1 = Math.max(...q.map((p) => p.x)), b0 = Math.min(...q.map((p) => p.y)), b1 = Math.max(...q.map((p) => p.y));
    const z = Math.min((x1 - x0) / (a1 - a0), (y1 - y0) / (b1 - b0));
    v = { x: (a0 + a1) / 2 - ((x0 + x1) / 2 - 540) / z, y: (b0 + b1) / 2 - ((y0 + y1) / 2 - 960) / z, z };
  }
  return v;
};
const REST = 99999;
const ONPILE = [0, 1].map((j) => smallPose(T, j, T.split[j][0]));
const PILE_PTS = [...bigPts(), ...ONPILE.flatMap(smallPts)];
const ALL_REST = [...bigPts(), ...[0, 1].flatMap((j) => smallPts(smallPose(T, j, REST))), ...(["F", "L", "R"] as const).flatMap((k) => cardPts(cardPose(T, k, REST)))];
const PILE_V = fitW(PILE_PTS, 660, 536, 1130);
const WIDE_V = fitBox(ALL_REST, 70, 905, 720, 1450);
const BAND_V = fitW(bandPrint(), 670, 500, 955);
const STORY: CamKey[] = [
  { at: -9999, ...PILE_V, dur: 1 },          // close on the one pile as the place arrives
  { at: PARTNERS - 6, ...WIDE_V, dur: 40 },  // "partners": back over the table as the small stacks slide off and apart
  { at: D110 - 16, ...BAND_V, dur: 34 },     // "$110": in on the big stack's band
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.26 });
const scr = (f: number, p: P3) => scrOf(p, camView(CAM, f));

// ★ the screen's rules, every frame from the landing on: no object's top in the caption band (y < 662); print that can be
//   read (the band once both small stacks are off it, each card's name once it has stopped) left of x 930 where it lies in
//   y 1000–1700, above y 1490 and off the left edge; and the subjects big
{
  const BAD: string[] = [];
  const clear = Math.max(...[0, 1].map((j) => smallLands(T, j)));
  for (let f = LAND; f <= DONE + 44; f++) {
    const tops: [string, P3[]][] = [["the big stack", bigPts()]];
    [0, 1].forEach((j) => tops.push([`small stack ${j}`, smallPts(smallPose(T, j, f))]));
    (["F", "L", "R"] as const).forEach((k) => { const c = cardPose(T, k, f); if (c.visible) tops.push([`card ${k}`, cardPts(c)]); });
    for (const [what, pts] of tops) for (const p of pts) {
      const s = scr(f, p);
      if (s.x > -40 && s.x < 1120 && s.y < 662) { BAD.push(`${what}: a top reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`); break; }
    }
    const ink: [string, P3[]][] = [];
    if (f >= clear) ink.push(["the band's $110,000,000", bandPrint()]);
    // (the PARTNER cards leave the frame at its sides as the camera pushes in on the band: off screen once it has)
    const pushing = f >= STORY[2].at && f < STORY[2].at + STORY[2].dur;
    (["F", "L", "R"] as const).forEach((k) => { const [, b] = k === "F" ? T.cardF : k === "L" ? T.cardL : T.cardR; if (f >= b && (k === "F" || !pushing)) ink.push([`card ${k}'s name`, cardPrint(cardPose(T, k, f))]); });
    for (const [what, pts] of ink) {
      const q = pts.map((p) => scr(f, p));
      if (Math.max(...q.map((s) => s.x)) < 0 || Math.min(...q.map((s) => s.x)) > 1080 || Math.min(...q.map((s) => s.y)) > 1920) continue;   // off screen
      for (const s of q) {
        if (s.y > 1490) BAD.push(`${what}: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
        if (s.y > 1000 && s.x > 930) BAD.push(`${what}: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
        if (s.x < 40) BAD.push(`${what}: print cut at the left (x ${Math.round(s.x)}) at f${f}`);
        if (s.y < 662) BAD.push(`${what}: print in the caption band (y ${Math.round(s.y)}) at f${f}`);
      }
    }
  }
  if (DBG) {
    const bb = (f: number, pts: P3[]) => { const q = pts.map((p) => scr(f, p)); return [Math.min(...q.map((a) => a.x)), Math.min(...q.map((a) => a.y)), Math.max(...q.map((a) => a.x)), Math.max(...q.map((a) => a.y))].map(Math.round); };
    for (const f of [cue(S, 0) + 4, FOREMANS + 10, D110 + 20, DONE]) console.log("f", f, JSON.stringify({ big: bb(f, bigPts()), band: bb(f, bandPrint()), s0: bb(f, smallPts(smallPose(T, 0, f))), s1: bb(f, smallPts(smallPose(T, 1, f))),
      F: bb(f, cardPrint(cardPose(T, "F", f))), L: bb(f, cardPrint(cardPose(T, "L", f))), R: bb(f, cardPrint(cardPose(T, "R", f))) }));
  }
  if (DBG) console.log("catch views", JSON.stringify({ PILE_V, WIDE_V, BAND_V, LAND, DONE, T, lands: [smallLands(T, 0), smallLands(T, 1)] }));
  if (BAD.length) throw new Error(`catch: ${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "").replace(/-?\d+/g, "#")))].slice(0, 8).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
  // the subjects big: the pile > 600 px wide as the place opens; the three stacks over 700 px wide once split; the band's
  // figure over 600 px wide from "$110" to the hand-over; each card's name over 150 px wide once it has stopped
  const span = (f: number, pts: P3[]) => { const q = pts.map((p) => scr(f, p).x); return Math.max(...q) - Math.min(...q); };
  const wPile = span(cue(S, 0) + 4, PILE_PTS);
  const wAll = span(FOREMANS + 8, ALL_REST);
  const wBand = Math.min(...[D110 + 18, D110 + 30, DONE].map((f) => span(f, bandPrint())));
  const wCard = Math.min(...(["F", "L", "R"] as const).map((k) => span(FOREMANS + 10, cardPrint(cardPose(T, k, REST)))));
  if (DBG) console.log("catch sizes", JSON.stringify({ wPile, wAll, wBand, wCard }));
  if (wPile < 600 || wAll < 700 || wBand < 600 || wCard < 150)
    throw new Error(`catch: too small on screen (the pile ${Math.round(wPile)}, the three stacks ${Math.round(wAll)}, the band's figure ${Math.round(wBand)}, a card's name ${Math.round(wCard)} px)`);
}
// ★ nothing passes through anything: every pair of objects, every frame — footprints apart, or one wholly above the other
{
  type Thing = { name: string; foot: [number, number][]; h0: number; h1: number };
  const overlap = (A: [number, number][], B: [number, number][]) => {
    for (const P of [A, B]) for (let i = 0; i < 4; i++) {
      const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % 4], nx = -(z1 - z0), nz = x1 - x0;
      const pa = A.map(([x, z]) => x * nx + z * nz), pb = B.map(([x, z]) => x * nx + z * nz);
      if (Math.max(...pa) < Math.min(...pb) || Math.max(...pb) < Math.min(...pa)) return false;
    }
    return true;
  };
  for (let f = cue(S, 0) - 40; f <= DONE + 44; f++) {
    const th: Thing[] = [{ name: "big", foot: bigFoot(), h0: 0, h1: BIG_H }];
    [0, 1].forEach((j) => { const p: Pose = smallPose(T, j, f); th.push({ name: `small${j}`, foot: smallFoot(p), h0: p.h, h1: p.h + SMALL_H }); });
    (["F", "L", "R"] as const).forEach((k) => { const c = cardPose(T, k, f); if (c.visible) th.push({ name: `card${k}`, foot: cardFoot(c), h0: 0, h1: TENT.h }); });
    for (let a = 0; a < th.length; a++) for (let b = a + 1; b < th.length; b++) {
      const A = th[a], B = th[b];
      if (A.h1 <= B.h0 + 0.05 || B.h1 <= A.h0 + 0.05) continue;
      if (overlap(A.foot, B.foot)) throw new Error(`catch: ${A.name} and ${B.name} pass through each other at f${f}`);
    }
  }
}

const M3D = catchModel(T);
/** the view's canvas: the camera's viewport with a margin, and the whole table group and its shadows */
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 200 / v.z;
  const x0 = Math.min(-200, v.x - 540 / v.z - m), x1 = Math.max(1300, v.x + 540 / v.z + m);
  const y0 = Math.min(760, v.y - 960 / v.z - m), y1 = Math.max(1700, Math.min(v.y + 960 / v.z + m, 2100));
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
// the light pools, fixed in the world: over the big stack, and under the front of the table
const LP = (p: P3) => { const q = project(eyeOf(WIDE_V), p[0], p[1], p[2]); return [q.x, q.y] as const; };
const [bx, by] = LP([CT.big.x, CT.floor - BIG_H, CT.big.z]);
const [fx, fy] = LP([CT.card.F.x, CT.floor, CT.card.F.z + 80]);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[bx, by, 720, 360], [fx, fy, 820, 360]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="table">
        <View3D name="catch" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: T.split[0][0] + 3, end: smallLands(T, 0), vol: 0.3, why: "catch: the first small stack is shoved off the pile and slides", mode: "peak" },
  { s: "glide2", at: T.split[1][0] + 3, end: smallLands(T, 1), vol: 0.26, why: "catch: the second small stack slides off the other way", mode: "peak" },
  { s: "stack", at: smallLands(T, 0), vol: 0.36, why: "catch: the small stacks drop off the brick onto the table", mode: "peak" },
  { s: "paper", at: T.cardL[1] - 3, vol: 0.22, why: "catch: the PARTNER name cards slide in and stop", mode: "peak" },
  { s: "paper", at: T.cardF[1] - 3, vol: 0.25, why: "catch: the FOREMAN name card slides in and stops", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [bx, by] },
  done: DONE, cam: CAM, sfx: SFX,
};
