import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  juneModel, DESK, PAD, NP, NEWS, BD, NPRINT, PLATE_INK, GILT, BOARD_H, NEWS_SHEET_H,
  posePlate, poseNews, poseBoard, lidsDone, flatPt, slopePt, plateTop, type JuneTiming,
} from "../../three/props/june";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · JUNE (dark) — Greg Norman's own words, on his desk.
//  0 "The number came from LIV's boss, Greg Norman." The crane brings the desk in CLOSE on its empty left end; a walnut desk
//    name plate slides in on its baize from the left and stops (friction) on "Greg Norman": the brushed brass plate reads
//    GREG NORMAN, CEO, LIV GOLF.
//  1 "In June, he told The Washington Post the offer was mind-blowingly enormous." On "In June" the camera travels right as a
//    folded broadsheet glides in from the right and touches down on "The Washington Post": THE WASHINGTON POST (plain type),
//    JUNE 2022. On "mind-blowingly" the camera pushes in on its pull-quote: "Mind-blowingly enormous." "High nine digits."
//    GREG NORMAN, LIV GOLF CEO.
//  2 "High nine digits." The camera travels on right as a black number board slides in from the near side and drops onto
//    the pad beside the paper on "nine": $ _ _ _ , _ _ _ , _ _ _. On "digits" its nine brass lids spring open in a run: every well
//    is empty (the number was never given). The hand-over carries the desk away.
// ═══════════════════════════════════════════════════════════════════════════
const S = "june" as const;
const GREG = word(S, 0, /^Greg/), JUNE = word(S, 1, /^June/), POST = word(S, 1, /^Post/), MIND = word(S, 1, /^mind/i);
const HIGH = word(S, 2, /^High/), NINE = word(S, 2, /^nine/), DIGITS = word(S, 2, /^digits/);

// ── the actions' frames: each object is readable as the voice names it ──
export const T: JuneTiming = { plate: [GREG - 24, GREG + 1], news: [POST - 26, POST - 2], board: [HIGH - 14, NINE - 1], lids: DIGITS - 8 };
const DONE = Math.max(cueEnd(S, 2) + 4, lidsDone(T));

// ── the camera: the eye rides with the view (up and a little right, looking down onto the desk) ──
const EL = 1250;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + 200, y: v.y - EL, D: 1800 });
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: DESK.floor - h };
  for (let i = 0; i < 16; i++) {
    const q = project(eyeOf(v), x, DESK.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const PREST = posePlate(T, 99999), NREST = poseNews(T, 99999), BREST = poseBoard(T, 99999);
const PLATE_MID = slopePt(PREST, NP.L / 2, 0.5);
const NS = { w: NEWS.w, d: NEWS.d };
const MAST = flatPt(NS, NREST, NEWS.w / 2, 200, 3.8);
const QUOTE = flatPt(NS, NREST, NEWS.w / 2, 262, 3.8);
const BMID = flatPt({ w: BD.w, d: BD.d }, BREST, BD.w / 2, BD.d / 2, BOARD_H);
const STORY: CamKey[] = [
  { at: -9999, ...aim(PLATE_MID.x, PLATE_MID.h, PLATE_MID.z, 1.5, 520, 1060), dur: 1 },   // close on the name plate
  { at: JUNE + 6, ...aim(MAST.x, MAST.h, MAST.z, 1.3, 520, 1010), dur: 42 },              // "In June": across to the paper
  { at: MIND - 16, ...aim(QUOTE.x, QUOTE.h, QUOTE.z, 1.36, 540, 1010), dur: 34 },          // "mind-blowingly": in on the quote
  { at: HIGH - 24, ...aim(BMID.x, BMID.h, BMID.z, 1.2, 505, 1070), dur: 40 },              // "High nine digits": across to the board
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

// ★ the screen's rules, every frame the place can show: no object's top reaches the caption band (y < 662); once each object
//   has landed its print stays left of x 930 where it lies in y 1000–1700, above the Reel's caption strip (y 1490) and off
//   the left edge
type P3 = { x: number; h: number; z: number };
const scr = (f: number, p: P3) => {
  const v = camView(CAM, f), q = project(eyeOf(v), p.x, DESK.floor - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const BAD: string[] = [];
const bad = (m: string) => { BAD.push(m); };
const padFar: P3[] = Array.from({ length: 31 }, (_, i) => ({ x: PAD.x0 + ((PAD.x1 - PAD.x0) * i) / 30, h: PAD.t, z: PAD.z0 }));
const box = (b: readonly [number, number, number, number]) => [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]] as const;
const BOARD_S = { w: BD.w, d: BD.d };
for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
  const pp = posePlate(T, f), np = poseNews(T, f), bp = poseBoard(T, f);
  const tops: P3[] = [...padFar];
  if (pp.visible) tops.push(...plateTop(pp));
  if (np.visible) tops.push(...[[0, 0], [NEWS.w, 0], [NEWS.w, NEWS.d], [0, NEWS.d]].map(([u, v]) => flatPt(NS, np, u, v, NEWS.block + 6)));
  if (bp.visible) tops.push(...[[0, 0], [BD.w, 0]].map(([u, v]) => flatPt(BOARD_S, bp, u, v, BOARD_H + 84)));
  for (const t of tops) {
    const s = scr(f, t);
    if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`june: a top reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
  const ink: P3[] = [];
  if (f >= T.plate[1] && f < STORY[1].at) for (const u of [PLATE_INK.u0, PLATE_INK.u1]) for (const t of [PLATE_INK.t0, PLATE_INK.t1]) ink.push(slopePt(pp, u, t));
  if (f >= T.news[1] && f < STORY[3].at) for (const b of [NPRINT.mast, NPRINT.date, NPRINT.quote, NPRINT.who]) ink.push(...box(b).map(([u, v]) => flatPt(NS, np, u, v, 3.8)));
  if (f >= T.board[1]) {
    for (const u of [GILT.dollar - 26, BD.w - 22]) for (const v of [16, BD.d - 16]) ink.push(flatPt(BOARD_S, bp, u, v, BOARD_H));
  }
  for (const p of ink) {
    const s = scr(f, p);
    if (s.y > 1490) bad(`june: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    if (s.y > 1000 && s.x > 930) bad(`june: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
    if (s.x < 40) bad(`june: print is cut at the left edge (x ${Math.round(s.x)}) at f${f}`);
    if (s.y < 662) bad(`june: print in the caption band (y ${Math.round(s.y)}) at f${f}`);
  }
}
if (BAD.length) throw new Error(`${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "").replace(/\d+/g, "#")))].slice(0, 6).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
// ★ the subjects are big: the plate > 62% of the width as it is named, the paper > 66% on "The Washington Post", the board
//   > 70% once it has landed
{
  const wide = (f: number, a: P3, b: P3) => scr(f, b).x - scr(f, a).x;
  const w0 = wide(GREG + 4, slopePt(PREST, 0, 0.5), slopePt(PREST, NP.L, 0.5));
  const w1 = wide(POST + 8, flatPt(NS, NREST, 0, 200, 3.8), flatPt(NS, NREST, NEWS.w, 200, 3.8));
  const w2 = wide(DONE, flatPt(BOARD_S, BREST, 0, BD.d / 2, BOARD_H), flatPt(BOARD_S, BREST, BD.w, BD.d / 2, BOARD_H));
  if (w0 < 670 || w1 < 710 || w2 < 750) throw new Error(`june: too small on screen (plate ${Math.round(w0)}, paper ${Math.round(w1)}, board ${Math.round(w2)} px)`);
}
// ★ the three lie apart on the pad: the plate left of the paper, the board right of it (with room), all inside the pad
{
  const xs = (pts: P3[]) => [Math.min(...pts.map((p) => p.x)), Math.max(...pts.map((p) => p.x))];
  const corners = (s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }) => [[0, 0], [s.w, 0], [s.w, s.d], [0, s.d]].map(([u, v]) => flatPt(s, p, u, v));
  const [, pr] = xs([0, NP.L].flatMap((u) => [slopePt(PREST, u, 0), slopePt(PREST, u, 1)]));
  const [nl, nr] = xs(corners(NS, NREST)), [bl, br] = xs(corners(BOARD_S, BREST));
  if (pr > nl - 40 || nr > bl - 30 || br > PAD.x1 - 40) throw new Error(`june: the objects crowd each other or the pad (plate ${Math.round(pr)}, paper ${Math.round(nl)}…${Math.round(nr)}, board ${Math.round(bl)}…${Math.round(br)})`);
}
void NEWS_SHEET_H;

const M3D = juneModel(T);
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  let y0 = v.y - 960 / v.z - m, y1 = v.y + 960 / v.z + m;
  // ★ the whole desk pad (and its contact shadow) always inside the canvas: a canvas border never cuts it
  const e = eyeOf(v);
  let px0 = 1e9, px1 = -1e9, py0 = 1e9, py1 = -1e9;
  for (const x of [PAD.x0, PAD.x1]) for (const z of [PAD.z0, PAD.z1]) for (const h of [0, PAD.t]) {
    const q = project(e, x, DESK.floor - h, z); px0 = Math.min(px0, q.x); px1 = Math.max(px1, q.x); py0 = Math.min(py0, q.y); py1 = Math.max(py1, q.y);
  }
  const PM = 80;
  const X0 = Math.min(x0, px0 - PM), X1 = Math.max(x1, px1 + PM);
  y0 = Math.min(Math.max(y0, py0 - 260), py0 - PM); y1 = Math.max(Math.min(y1, py1 + 500), py1 + PM);
  return { x: Math.floor(X0), y: Math.floor(y0), w: Math.ceil(X1 - X0), h: Math.ceil(y1 - y0) };
};
const LP = (p: P3) => { const q = project(eyeOf(STORY[3]), p.x, DESK.floor - p.h, p.z); return [q.x, q.y] as const; };
const [plx, ply] = LP(PLATE_MID), [qx, qy] = LP(QUOTE), [bx, by] = LP(flatPt(BOARD_S, BREST, BD.w / 2, BD.d / 2, BOARD_H));

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[plx, ply + 40, 640, 380], [qx, qy, 720, 460], [bx, by + 40, 640, 320]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="june" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: T.plate[0] + 6, vol: 0.3, why: "june: the name plate slides in on its baize", mode: "peak" },
  { s: "paper", at: Math.round(T.news[0] + 0.8 * (T.news[1] - T.news[0])), vol: 0.42, why: "june: the folded newspaper touches down on the pad", mode: "peak" },
  { s: "thump", at: T.board[1], vol: 0.3, why: "june: the number board drops onto the newspaper", mode: "peak" },
  { s: "click", at: T.lids + 3, vol: 0.3, why: "june: the nine brass lids spring open in a run (once, quiet)", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [qx, qy] },
  done: DONE, cam: CAM, sfx: SFX,
};
