import React from "react";
import { clamp01, SETTLE, SOFT, GLIDE, EXIT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { mathModel, BRICK, BRICKS, brickBase, brickH, brickTall, sashPanel, TOWER_H, GHOST_H, COL, TALLY, HEAD, HEAD_TOP, HEAD_FOOT,
  type MathGeo, type MathP, type BrickP } from "../../three/props/math";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · THE MATH (dark) — three sentences on one tower of cash.
//  0 "By the lawsuit's own numbers, his three fights came to about $85 million, not $365 million." The place lands CLOSE on
//    one brick of strapped $100 bundles on the floor, its paper sash printed $15M (the first fight). On "three" the camera
//    eases out as a second brick, $35M, is tossed in from beyond the right edge and lands on it (weight, a short slide); on
//    "fights" a third, $35M, from the left. On "about $85" a white tally card in a beech holder slides in before the tower:
//    ABOUT $85M. The camera pulls far back and, on "not", a tall clear ACRYLIC COLUMN on a black base slides in beside the
//    tower: the tower's own footprint, 365/85 of its height, etched at each tower's height, "$365M" etched near its top. It
//    dwarfs the tower. As "$365 million" ends it is drawn away to the right.
//  1 "To be fair, the big number was the deal's headline, not his claim." The camera comes back in on the tower; on "big
//    number" a small kraft tent card slides in where the column stood: HEADLINE over $365M.
//  2 "And $85 million for three fights is still a fortune." The tent card is drawn away to the right and the camera pushes
//    in on the tower: a big, real pile of cash, ABOUT $85M before it.
// ★ The $85M is always "about", "by the lawsuit's own numbers" (15 + 35 + 35): the card says ABOUT $85M, never a payout.
// ═══════════════════════════════════════════════════════════════════════════
const S = "math" as const;
const C0 = cue(S, 0), THREE_ = word(S, 0, /^three/), FIGHTS_ = word(S, 0, /^fights/), ABOUT = word(S, 0, /^about/);
const NOT = word(S, 0, /^not/), D365 = word(S, 0, /^\$365/), E0 = cueEnd(S, 0);
const BIG = word(S, 1, /^big/), HEADW = word(S, 1, /^headline/);
const C2 = cue(S, 2), E2 = cueEnd(S, 2);

const FLOOR = 1450;
const TX = 540, TZ = 0;
const GEO: MathGeo = {
  floor: FLOOR,
  tower: { x: TX, z: TZ },
  ghost: { x: TX + 2 * BRICK.hw + 70, z: TZ },
  tally: { x: TX + 136, z: TZ + BRICK.hd + 14 + TALLY.hold.d / 2 },
  head: { x: TX + BRICK.hw + 44 + HEAD.w / 2, z: TZ + 10 },
};

// ── THE BRICKS: the first on the floor from the start; the second tossed in from the right on "three", the third from the
//    left on "fights". A toss: in from beyond the edge on a falling arc (gravity: it accelerates down), its tilt shrinking
//    with its height (a corner can never reach the brick below), then a short slide and a squash on landing ──
const TOSS = 16, SLIDE = 12, SL = 22, H0 = 100, FAR = 1150;
const LAND = [0, THREE_ + 2, FIGHTS_ + 10];
const SIDE = [0, 1, -1];
const brickAt = (k: number, f: number): BrickP => {
  const base = brickBase(k);
  if (k === 0) return { dx: 0, h: 0, tilt: 0, sq: 0, on: true };
  const L = LAND[k], s = SIDE[k], a = L - TOSS;
  if (f < a) return { dx: s * FAR, h: base + H0, tilt: 0, sq: 0, on: false };
  if (f < L) {
    const t = (f - a) / TOSS, up = H0 * (1 - t * t);
    return { dx: s * SL + (s * FAR - s * SL) * (1 - t), h: base + up, tilt: s * Math.min(0.16, (0.5 * up) / BRICK.hw), sq: 0, on: true };
  }
  const u = f - L;
  return { dx: s * SL * (1 - SETTLE(clamp01(u / SLIDE))), h: base, tilt: 0, sq: 1 - SOFT(clamp01(u / 8)), on: true };
};
for (const k of [1]) if (LAND[k] + SLIDE > LAND[k + 1]) throw new Error(`math: brick ${k} is still settling when the next one lands`);

// ── THE TALLY, THE COLUMN, THE HEADLINE ──
const TALLY_IN = [ABOUT - 16, ABOUT + 2] as const;              // slides in from the left, stops on "$85"
const COL_IN = [NOT - 12, NOT + 6] as const;                     // the column slides in from the right, stops on "not"
const COL_OUT = [D365 + 12, D365 + 30] as const;                 // "…$365 million": it is drawn away to the right
const HEAD_IN = [HEADW - 26, HEADW - 4] as const;                // from "number": the tent card slides in, stops before "headline"
const HEAD_OUT = [C2 - 4, C2 + 12] as const;                     // drawn away as "And $85 million" begins
if (HEAD_IN[0] < BIG) throw new Error("math: the headline card would come before \"the big number\"");
if (COL_IN[1] + 8 >= COL_OUT[0]) throw new Error("math: the column leaves before it has settled");
const tallyDxAt = (f: number) => -FAR * (1 - GLIDE(clamp01((f - TALLY_IN[0]) / (TALLY_IN[1] - TALLY_IN[0]))));
const headDxAt = (f: number) => (f < HEAD_OUT[0]
  ? FAR * (1 - GLIDE(clamp01((f - HEAD_IN[0]) / (HEAD_IN[1] - HEAD_IN[0]))))
  : 1300 * EXIT(clamp01((f - HEAD_OUT[0]) / (HEAD_OUT[1] - HEAD_OUT[0]))));
const colDxAt = (f: number) => (f < COL_OUT[0]
  ? FAR * (1 - GLIDE(clamp01((f - COL_IN[0]) / (COL_IN[1] - COL_IN[0]))))
  : 1500 * EXIT(clamp01((f - COL_OUT[0]) / (COL_OUT[1] - COL_OUT[0]))));
const paramsAt = (f: number): MathP => ({
  bricks: BRICKS.map((_, k) => brickAt(k, f)),
  tallyDx: tallyDxAt(f), tallyOn: f >= TALLY_IN[0] - 1,
  headDx: headDxAt(f), headOn: f >= HEAD_IN[0] - 1 && f <= HEAD_OUT[1] + 1,
  colDx: colDxAt(f), colOn: f >= COL_IN[0] - 1 && f <= COL_OUT[1] + 1,
});
const DONE = Math.max(E2 + 4, HEAD_OUT[1] + 2);

// ── THE CAMERA: the eye rides with the view, up and to the right, ~20° down ──
type V = { x: number; y: number; z: number };
const eyeOf = (v: V) => { const D = 1900 / v.z ** 0.6; return { x: v.x + 0.22 * D, y: v.y - 0.36 * D, D }; };
/** a world point [x, height over the floor, z] on screen through view v */
const scr = (v: V, [x, h, z]: [number, number, number]) => {
  const q = project(eyeOf(v), x, FLOOR - h, z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** the view at zoom z that puts world point w at screen (sx, sy) */
const aim = (w: [number, number, number], z: number, sx: number, sy: number): V => {
  let v: V = { x: w[0], y: FLOOR - w[1], z };
  for (let i = 0; i < 30; i++) {
    const s = scr(v, w);
    v = { x: v.x + (s.x - sx) / z, y: v.y + (s.y - sy) / z, z };
  }
  return v;
};
const FRONT = TZ + BRICK.hd;
const box = (x0: number, x1: number, h0: number, h1: number, z0: number, z1: number): [number, number, number][] =>
  [x0, x1].flatMap((x) => [h0, h1].flatMap((h) => [z0, z1].map((z) => [x, h, z] as [number, number, number])));
const extent = (v: V, pts: [number, number, number][]) => {
  const s = pts.map((p) => scr(v, p));
  return { x0: Math.min(...s.map((p) => p.x)), x1: Math.max(...s.map((p) => p.x)), y0: Math.min(...s.map((p) => p.y)), y1: Math.max(...s.map((p) => p.y)) };
};
const TOWER = box(TX - BRICK.hw, TX + BRICK.hw, 0, TOWER_H, TZ - BRICK.hd, FRONT);
const CW = BRICK.hw + COL.lip, CD = BRICK.hd + COL.lip;
const GHOST = box(GEO.ghost.x - CW, GEO.ghost.x + CW, 0, GHOST_H, TZ - CD, TZ + CD);
const TALLYB = box(GEO.tally.x - TALLY.w / 2, GEO.tally.x + TALLY.w / 2, 0, TALLY.foot + TALLY.h, GEO.tally.z - TALLY.hold.d / 2, GEO.tally.z + TALLY.hold.d / 2);
const HEADB = box(GEO.head.x - HEAD.w / 2, GEO.head.x + HEAD.w / 2, 0, HEAD_TOP, GEO.head.z - HEAD_FOOT, GEO.head.z + HEAD_FOOT);
const frame = (name: string, anchor: [number, number, number], sy: number, z1: number, pts: [number, number, number][], lim: { top: number; left: number; right: number; bottom: number }) => {
  for (let z = z1; z > 0.3; z -= 0.005) {
    let v = aim(anchor, z, 540, sy), e = extent(v, pts);
    // centred between the side limits (the eye sits to the right, so a framing drifts left of its anchor)
    for (let i = 0; i < 4; i++) { v = { ...v, x: v.x + ((e.x0 + e.x1) / 2 - (lim.left + lim.right) / 2) / z }; e = extent(v, pts); }
    if (e.y0 >= lim.top && e.x0 >= lim.left && e.x1 <= lim.right && e.y1 <= lim.bottom) return v;
  }
  throw new Error(`math: no framing for ${name}`);
};
// key 0: close on the first brick alone, its sash large
const K0 = aim([TX - 30, 30, FRONT], 1.9, 540, 1120);
// "three": out to the whole tower as the bricks land (room above for the tosses)
const K1 = frame("the tower", [TX, 0, FRONT], 1370, 1.6, [...TOWER, ...TALLYB, ...box(TX - BRICK.hw, TX + BRICK.hw, 0, TOWER_H + H0 * 0.7, TZ - BRICK.hd, FRONT)], { top: 700, left: 120, right: 960, bottom: 1470 });
// "about $85 million, not…": far back, the column's whole height beside the tower
const K2 = frame("the column", [(TX + GEO.ghost.x) / 2, 0, FRONT], 1430, 1.0, [...TOWER, ...GHOST, ...TALLYB], { top: 690, left: 60, right: 1020, bottom: 1460 });
// "to be fair": back in on the tower and the headline card beside it
const K3 = frame("tower and headline", [(TX - BRICK.hw + GEO.head.x + HEAD.w / 2) / 2, 0, FRONT], 1395, 1.4, [...TOWER, ...HEADB, ...TALLYB], { top: 700, left: 70, right: 900, bottom: 1450 });
// "still a fortune": in on the pile
const K4 = frame("the pile", [TX + 20, 0, FRONT], 1375, 2.0, [...TOWER, ...TALLYB], { top: 712, left: 90, right: 950, bottom: 1440 });
const STORY: CamKey[] = [
  { at: -9999, ...K0, dur: 1 },
  { at: THREE_ - 18, ...K1, dur: 42 },
  { at: ABOUT - 10, ...K2, dur: 44 },
  { at: E0 - 6, ...K3, dur: 44 },
  { at: C2, ...K4, dur: 54 },
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });
const viewAt = (f: number): V => camView(CAM, f);

// ★ the screen's rules, on every frame the place is up: every top on screen stays below the caption band (y 662); a held
//   print stays left of the Reel's buttons (x 940 for y 1000–1700) and above its caption strip (y 1500)
{
  const brickPts = (k: number, p: BrickP): [number, number, number][] => {
    const c = Math.cos(p.tilt), s = Math.sin(p.tilt), top = brickTall(k) * (1 - 0.022 * p.sq);
    const out: [number, number, number][] = [];
    for (const lx of [-BRICK.hw, BRICK.hw]) for (const ly of [0, top]) for (const z of [TZ - BRICK.hd, FRONT])
      out.push([TX + p.dx + lx * c - ly * s, p.h + lx * s + ly * c, z]);
    return out;
  };
  const prints = (f: number) => {
    const p = paramsAt(f), q = paramsAt(f + 1), out: { name: string; pts: [number, number, number][]; held: boolean }[] = [];
    BRICKS.forEach((_, k) => {
      const b = p.bricks[k];
      if (!b.on) return;
      const sp = sashPanel(k);
      out.push({ name: `sash ${k}`, held: b.dx === q.bricks[k].dx && b.h === q.bricks[k].h, pts: box(TX + b.dx + sp.x0, TX + b.dx + sp.x1, b.h + sp.y0, b.h + sp.y1, sp.z, sp.z) });
    });
    if (p.tallyOn) out.push({ name: "tally", held: p.tallyDx === q.tallyDx, pts: box(GEO.tally.x + p.tallyDx - TALLY.w / 2, GEO.tally.x + p.tallyDx + TALLY.w / 2, TALLY.foot, TALLY.foot + TALLY.h, GEO.tally.z, GEO.tally.z) });
    if (p.headOn) out.push({ name: "headline", held: p.headDx === q.headDx, pts: box(GEO.head.x + p.headDx - HEAD.w / 2, GEO.head.x + p.headDx + HEAD.w / 2, 0, HEAD_TOP, GEO.head.z + HEAD_FOOT, GEO.head.z) });
    if (p.colOn) out.push({ name: "column's $365M", held: p.colDx === q.colDx, pts: box(GEO.ghost.x + p.colDx - 220, GEO.ghost.x + p.colDx + 220, GHOST_H - 179, GHOST_H - 29, FRONT, FRONT) });
    return out;
  };
  for (let f = C0; f <= DONE + 44; f++) {
    const v = viewAt(f), p = paramsAt(f);
    const tops: [number, number, number][] = [];
    BRICKS.forEach((_, k) => { if (p.bricks[k].on) tops.push(...brickPts(k, p.bricks[k])); });
    if (p.tallyOn) tops.push(...box(GEO.tally.x + p.tallyDx - TALLY.w / 2, GEO.tally.x + p.tallyDx + TALLY.w / 2, TALLY.foot + TALLY.h, TALLY.foot + TALLY.h, GEO.tally.z - 20, GEO.tally.z + 20));
    if (p.headOn) tops.push(...box(GEO.head.x + p.headDx - HEAD.w / 2, GEO.head.x + p.headDx + HEAD.w / 2, HEAD_TOP, HEAD_TOP, GEO.head.z, GEO.head.z));
    if (p.colOn) tops.push(...box(GEO.ghost.x + p.colDx - CW, GEO.ghost.x + p.colDx + CW, GHOST_H, GHOST_H, TZ - CD, TZ + CD));
    for (const t of tops) {
      const s = scr(v, t);
      if (s.x > -40 && s.x < 1120 && s.y < 662) throw new Error(`math: a top (${t.map(Math.round).join(",")}) reaches y ${Math.round(s.y)} on screen at f${f}`);
    }
    for (const pr of prints(f)) {
      if (!pr.held) continue;
      const e = extent(v, pr.pts);
      if (e.x1 < 0 || e.x0 > 1080) continue;
      if (e.x1 > 940 && e.y1 > 1000 && e.y0 < 1700) throw new Error(`math: the ${pr.name} print reaches x ${Math.round(e.x1)} under the Reel's buttons at f${f}`);
      if (e.y1 > 1500) throw new Error(`math: the ${pr.name} print reaches y ${Math.round(e.y1)} (the Reel's caption strip) at f${f}`);
    }
  }
}

const rectAt = (f: number) => {
  const v = viewAt(f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, FLOOR - GHOST_H - 300), y1 = v.y + 960 / v.z + m;
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const M3D = mathModel(GEO);
const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[TX, FLOOR - 170, 600, 440], [GEO.ghost.x, FLOOR - 640, 520, 880]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="tower">
        <View3D name="math" rect={rectAt(f)} eye={eyeOf(viewAt(f))} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

export const MT = { land: LAND, tallyIn: TALLY_IN, colIn: COL_IN, colOut: COL_OUT, headIn: HEAD_IN, headOut: HEAD_OUT, done: DONE } as const;
const sfx: PlaceSfx[] = [
  { s: "stack", at: LAND[1], end: LAND[1] + 14, vol: 0.45, why: "the second brick ($35M) lands on the first", mode: "peak" },
  { s: "cash", at: LAND[2], end: LAND[2] + 16, vol: 0.35, why: "the third brick ($35M) lands on the stack, its notes riffling", mode: "peak" },
  { s: "paper", at: TALLY_IN[1] - 2, vol: 0.35, why: "the ABOUT $85M card slides in and stops before the tower", mode: "peak" },
  { s: "glide", at: HEAD_IN[1] - 4, vol: 0.3, why: "the HEADLINE tent card slides in where the column stood", mode: "peak" },
  { s: "glide2", at: COL_IN[1] - 3, vol: 0.32, why: "the acrylic $365M column slides in beside the tower and stops", mode: "peak" },
  { s: "whip", at: COL_OUT[0] + 12, vol: 0.22, why: "the column is drawn away to the right", mode: "peak" },
  { s: "whip", at: HEAD_OUT[0] + 10, vol: 0.25, why: "the HEADLINE card is drawn away to the right", mode: "peak" },
];
export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [TX, FLOOR - 200] },
  done: DONE, cam: CAM, sfx,
};
void brickH;
