import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  champModel, SHELF, FR, PHOTO, FRAME_TOP, BELTS, PL, PLQ, YEAR_BOX, PLQ_INK, PLATE_TOP,
  poseBelt, posePlaque, beltPt, plaqueDone, type ChampTiming,
} from "../../three/props/champ";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 2 · CHAMP (cream) — who he was, on his shelf.
//  0 "Foreman was a two-time heavyweight champion of the world." The place arrives CLOSE on his framed photo standing on a
//    honey-oak shelf. On "two-time" the camera pulls back as the 1973 belt slides in along the shelf from the left and drops
//    in front of the photo ("heavyweight"); the 1994 belt slides in from the right and drops in front of it ("champion").
//  1 "He won the title back at 45." On "won" the camera eases in on the 1994 belt; on "45" a small brass plaque swings in
//    from the near side and drops onto its centre plate, below the year: AGE 45. The hand-over carries the shelf away.
// ═══════════════════════════════════════════════════════════════════════════
const S = "champ" as const;
const TWO = word(S, 0, /^two-time/), HEAVY = word(S, 0, /^heavyweight/), CHAMPION = word(S, 0, /^champion/);
const WON = word(S, 1, /^won/), AGE = word(S, 1, /^\$45/);   // whisper's "$45" is the spoken "forty-five"

// ── the actions' frames: each object lands as the voice names it ──
export const T: ChampTiming = { belts: [[TWO + 6, HEAVY + 10], [HEAVY + 6, CHAMPION + 14]], plq: [AGE - 13, AGE + 1] };
const DONE = Math.max(cueEnd(S, 1) + 4, plaqueDone(T) + 6);

// ── the camera: the eye rides with the view (up and a little right, looking down onto the shelf) ──
const EL = 1000;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + 140, y: v.y - EL, D: 1800 });
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: SHELF.floor - h };
  for (let i = 0; i < 16; i++) {
    const q = project(eyeOf(v), x, SHELF.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const B2 = poseBelt(T, 1, 99999), B1 = poseBelt(T, 0, 99999);
const P2 = beltPt(B2, 0, 0, PLATE_TOP);
const STORY: CamKey[] = [
  { at: -9999, ...aim(PHOTO.c.x, PHOTO.c.h, PHOTO.c.z, 1.62, 540, 1060), dur: 1 },   // close on his photo
  { at: TWO, ...aim(570, 150, 40, 1.0, 540, 1100), dur: 38 },                    // "two-time": back to show the belts land
  { at: WON - 8, ...aim(P2.x - 30, P2.h, P2.z, 1.04, 540, 1345), dur: 34 },          // "won the title": in on the 1994 belt
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.22 });

// ★ the screen's rules, every frame the place can show: no object's top reaches the caption band (y < 662); once each object
//   has landed its print stays left of x 930 where it lies in y 1000–1700, above the Reel's caption strip (y 1490) and off
//   the left edge
type P3 = { x: number; h: number; z: number };
const scr = (f: number, p: P3) => {
  const v = camView(CAM, f), q = project(eyeOf(v), p.x, SHELF.floor - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const BAD: string[] = [];
const bad = (m: string) => { BAD.push(m); };
const plateRim = (p: ReturnType<typeof poseBelt>) => [-1, -0.5, 0, 0.5, 1].map((s) => beltPt(p, s * PL.a * 0.8, -PL.b, PLATE_TOP));
const box = (b: readonly [number, number, number, number]) => [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]] as const;
for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
  const tops: P3[] = [...FRAME_TOP];
  BELTS.forEach((_, k) => { const p = poseBelt(T, k, f); if (p.visible) tops.push(...plateRim(p)); });
  const q = posePlaque(T, f);
  if (q.visible) tops.push(...box([-PLQ.w / 2, -PLQ.d / 2, PLQ.w / 2, PLQ.d / 2]).map(([x, z]) => beltPt(q, x, z, PLQ.t + 12)));
  for (const t of tops) {
    const s = scr(f, t);
    if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`champ: a top reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
  const ink: P3[] = [...PHOTO.corners];
  BELTS.forEach((_, k) => { if (f >= T.belts[k][1]) ink.push(...box(YEAR_BOX).map(([x, z]) => beltPt(poseBelt(T, k, f), x, z, PLATE_TOP))); });
  if (f >= T.plq[1]) ink.push(...box(PLQ_INK).map(([x, z]) => beltPt(B2, x, z, PLATE_TOP + PLQ.t)));
  for (const p of ink) {
    const s = scr(f, p);
    if (s.y > 1490) bad(`champ: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    if (s.y > 1000 && s.x > 930) bad(`champ: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
    if (s.x < 40) bad(`champ: print is cut at the left edge (x ${Math.round(s.x)}) at f${f}`);
    if (s.y < 662) bad(`champ: print in the caption band (y ${Math.round(s.y)}) at f${f}`);
  }
}
if (BAD.length) throw new Error(`${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "").replace(/\d+/g, "#")))].slice(0, 6).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
// ★ the subjects are big: the frame > 460 px wide as "Foreman" is said, each plate > 300 px once both have landed, the 1994
//   plate > 360 px as the plaque lands
{
  const wide = (f: number, a: P3, b: P3) => scr(f, b).x - scr(f, a).x;
  const w0 = wide(cue(S, 0) + 4, { ...PHOTO.c, x: FR.x - FR.W / 2 }, { ...PHOTO.c, x: FR.x + FR.W / 2 });
  const w1 = wide(T.belts[1][1] + 4, beltPt(B1, -PL.a, 0, PLATE_TOP), beltPt(B1, PL.a, 0, PLATE_TOP));
  const w2 = wide(T.plq[1], beltPt(B2, -PL.a, 0, PLATE_TOP), beltPt(B2, PL.a, 0, PLATE_TOP));
  if (w0 < 460 || w1 < 300 || w2 < 320) throw new Error(`champ: too small on screen (frame ${Math.round(w0)}, 1973 plate ${Math.round(w1)}, 1994 plate ${Math.round(w2)} px)`);
}
// ★ the pieces lie apart: the 1973 plate clear of the frame's foot, the 1994 belt's strap clear of the 1973 plate, the 1994
//   plate clear of the 1973 strap, the plaque inside the 1994 plate's flat top
{
  const plate1Far = B1.z - PL.b, frameFoot = FR.z + FR.T + FR.back;
  if (plate1Far < frameFoot + 20) throw new Error(`champ: the 1973 plate (z ${plate1Far}) crowds the frame's foot (z ${frameFoot})`);
  const strap2Far = B2.z - 26 * ((B1.x + PL.a - B2.x) / 560) ** 2 - 70;
  if (strap2Far < B1.z + PL.b + 12) throw new Error(`champ: the 1994 strap (z ${Math.round(strap2Far)}) crowds the 1973 plate (z ${B1.z + PL.b})`);
  if (B1.x + PL.a > B2.x - PL.a + 260 && B2.z - PL.b < B1.z + 76) throw new Error("champ: the 1994 plate crowds the 1973 strap");
  if (PLQ.v + PLQ.d / 2 > PL.b - 12 || PLQ.w / 2 > PL.a * 0.75) throw new Error("champ: the plaque overhangs the plate's flat top");
}

const M3D = champModel(T);
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  let y0 = v.y - 960 / v.z - m, y1 = v.y + 960 / v.z + m;
  // ★ the frame and the belts' landing ground always inside the canvas: a canvas border never cuts them
  const e = eyeOf(v);
  let px0 = 1e9, px1 = -1e9, py0 = 1e9, py1 = -1e9;
  for (const x of [SHELF.x0 + 200, SHELF.x1 - 200]) for (const z of [SHELF.z0, SHELF.z1]) for (const h of [0, SHELF.t + FR.H]) {
    const q = project(e, x, SHELF.floor - h, z); px0 = Math.min(px0, q.x); px1 = Math.max(px1, q.x); py0 = Math.min(py0, q.y); py1 = Math.max(py1, q.y);
  }
  const PM = 60;
  const X0 = Math.min(x0, px0 - PM), X1 = Math.max(x1, px1 + PM);
  y0 = Math.min(Math.max(y0, py0 - 260), py0 - PM); y1 = Math.max(Math.min(y1, py1 + 400), py1 + PM);
  return { x: Math.floor(X0), y: Math.floor(y0), w: Math.ceil(X1 - X0), h: Math.ceil(y1 - y0) };
};
const LP = (p: P3) => { const q = project(eyeOf(STORY[1]), p.x, SHELF.floor - p.h, p.z); return [q.x, q.y] as const; };
const [fx, fy] = LP(PHOTO.c), [b1x, b1y] = LP(beltPt(B1, 0, 0, PLATE_TOP)), [b2x, b2y] = LP(P2);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[fx, fy, 520, 420], [b1x, b1y + 30, 640, 300], [b2x, b2y + 30, 640, 320]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="shelf">
        <View3D name="champ" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: T.belts[0][0] + 5, vol: 0.28, why: "champ: the 1973 belt slides in along the shelf", mode: "peak" },
  { s: "thump", at: T.belts[0][1], vol: 0.32, why: "champ: the 1973 belt drops onto the shelf", mode: "peak" },
  { s: "thump", at: T.belts[1][1], vol: 0.3, why: "champ: the 1994 belt drops onto the shelf", mode: "peak" },
  { s: "click", at: T.plq[1], vol: 0.3, why: "champ: the brass AGE 45 plaque lands on the 1994 plate", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [b2x, b2y] },
  done: DONE, cam: CAM, sfx: SFX,
};
