import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  paperModel, DESK, PAD, TAPE, LINES, CARD, CARD_AT, CARD_INK, SLOT, ROLL, S_FLAT, MACH,
  tapeLen, feedDone, tapePt, poseCard, cardPt, type PaperTiming,
} from "../../three/props/paper";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · PAPER (cream) — the sum, on an adding machine's tape.
//  0 "That's $192 million on paper," The place arrives close on the printer of a putty desktop adding machine (its roll of
//    paper sunk in a well in the deck, the slot under the chrome tear bar, the charcoal chute). From "$192" it prints: each
//    entry is struck inside and the tape feeds out of the slot and down the chute, line by line: 38,096,000 + /
//    16,644,000 + / 137,500,000 +. On "million" it strikes the total and feeds the whole printout down the chute and across
//    the green leather pad (the roll turns as it unrolls); the camera follows it up the pad and the double-height total
//    192,240,000 T lies big under the entries on "on paper".
//  1 "and it leaves out the grill's early years." The camera cranes up and back as four year cards glide in on their own
//    air from either side and touch down face up beside the tape, one by one (1995 and 1996 to its left, 1997 and 1998 to
//    its right, on "early years"): each with a blank amount line "$ ________". The hand-over carries the desk away.
// ═══════════════════════════════════════════════════════════════════════════
const S = "paper" as const;
const D192 = word(S, 0, /^\$192/), MILLION = word(S, 0, /^million/), PAPERW = word(S, 0, /^paper/);
const LEAVES = word(S, 1, /^leaves/), EARLY = word(S, 1, /^early/), YEARS_W = word(S, 1, /^years/);

// ── the actions' frames: each struck line is out of the slot as the voice runs the sum; the total lands on "on paper";
//    the cards touch down across "leaves out the grill's early years" ──
const land = [LEAVES + 15, LEAVES + 22, EARLY + 1, YEARS_W + 3];
export const T: PaperTiming = {
  prints: [D192 + 1, D192 + 8, D192 + 15, MILLION + 3],
  cards: land.map((b) => [b - 22, b] as const),
};
if (feedDone(T) > PAPERW + 2) throw new Error(`paper: the total's feed ends at f${feedDone(T)}, after "paper" (f${PAPERW})`);
const DONE = Math.max(cueEnd(S, 1) + 4, T.cards[3][1] + 6);

// ── the camera: the eye rides with the view (above and a little right, looking down the pad) ──
//    ★ the eye climbs as the view pulls back (a crane up with the pull-out): close, it looks along the pad; wide, more down
//    onto it, so the cards and the tape keep their height on screen
const ED = 1500;
const elOf = (z: number) => 1200 + 900 * Math.max(0, Math.min(1, (1.3 - z) / 0.55));
const eyeOf = (v: { x: number; y: number; z: number }): Eye => ({ x: v.x + 160, y: v.y - elOf(v.z), D: ED });
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: DESK.floor - h, z: zoom };
  for (let i = 0; i < 16; i++) {
    const q = project(eyeOf(v), x, DESK.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom, z: zoom };
  }
  return { ...v, z: zoom };
};
const L_FIN = tapeLen(T, 99999);
const tp = (L: number, k: number, u = 0.5) => tapePt(L, LINES[k].t, u);
const CHUTE_MID = tapePt(70, 0, 0.5);                // the chute, halfway down, as the place opens
const PRINT_MID = tapePt(L_FIN, (LINES[1].t + LINES[3].t) / 2, 0.55);
const C1 = CARD_AT[0], C4 = CARD_AT[3];
const WIDE = { x: TAPE.x, h: PAD.t, z: (C1.z + C4.z) / 2 };
const STORY: CamKey[] = [
  { at: -9999, ...aim(CHUTE_MID.x + 40, CHUTE_MID.h, CHUTE_MID.z, 1.42, 540, 1300), dur: 1 },   // close on the printer
  { at: MILLION + 6, ...aim(PRINT_MID.x, PRINT_MID.h, PRINT_MID.z, 1.6, 540, 1080), dur: 34 },    // "million": up the pad with the printout
  { at: MILLION + 41, ...aim(WIDE.x, WIDE.h, WIDE.z, 0.76, 504, 1120), dur: 40 },       // "and it leaves out": up and back, the cards either side
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

// ★ the screen's rules, every frame the place can show: no object's top reaches the caption band (y < 662); once it is out
//   of the slot and on view, print stays left of x 930 where it lies in y 1000–1700, above the Reel's caption strip (y 1490)
//   and off the left edge
type P3 = { x: number; h: number; z: number };
const scr = (f: number, p: P3) => {
  const v = camView(CAM, f), q = project(eyeOf(v), p.x, DESK.floor - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const BAD: string[] = [];
const bad = (m: string) => { BAD.push(m); };
const padFar: P3[] = Array.from({ length: 31 }, (_, i) => ({ x: PAD.x0 + ((PAD.x1 - PAD.x0) * i) / 30, h: PAD.t, z: PAD.z0 }));
const box = (b: readonly [number, number, number, number]) => [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]] as const;
const S_TOTAL = L_FIN - LINES[3].t;
for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
  const L = tapeLen(T, f);
  const tops: P3[] = [...padFar, tapePt(L, 0, 0), tapePt(L, 0, 1), { x: TAPE.x, h: ROLL.h + ROLL.r, z: ROLL.z }];
  for (let k = 0; k < 4; k++) {
    const c = poseCard(T, k, f);
    if (c.visible) tops.push(...[[0, 0], [CARD.w, 0], [CARD.w, CARD.d], [0, CARD.d]].map(([u, v]) => cardPt(c, u, v, CARD.t + 4)));
  }
  for (const t of tops) {
    const s = scr(f, t);
    if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`paper: a top reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
  const ink: P3[] = [];
  // a printed line is read once it is out on the pad (from the total's feed on); on the chute it passes the bottom of frame
  LINES.forEach((ln, k) => {
    const s = L - ln.t;
    if (s > S_FLAT && f >= feedDone(T)) for (const u of [0.18, 0.95]) for (const dt of [-ln.h / 2, ln.h / 2]) ink.push(tapePt(L, ln.t + dt, u));
    void k;
  });
  for (let k = 0; k < 4; k++) if (f >= T.cards[k][1]) {
    const c = poseCard(T, k, f);
    for (const b of [CARD_INK.year, CARD_INK.amount]) ink.push(...box(b).map(([u, v]) => cardPt(c, u, v)));
  }
  for (const p of ink) {
    const s = scr(f, p);
    if (s.y > 1490) bad(`paper: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    if (s.y > 1000 && s.x > 930) bad(`paper: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
    if (s.x < 40) bad(`paper: print is cut at the left edge (x ${Math.round(s.x)}) at f${f}`);
    if (s.y < 662) bad(`paper: print in the caption band (y ${Math.round(s.y)}) at f${f}`);
  }
}
if (BAD.length) throw new Error(`${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "").replace(/\d+/g, "#")))].slice(0, 6).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
// ★ the subjects are big: the tape > 46% of the width as the total lands, its total's digits > 52 px tall on "paper"; the
//   four cards' block > 56% of the width once the last has landed, each year > 30 px tall
{
  const fT = PAPERW + 6;
  const wTape = scr(fT, tp(L_FIN, 3, 1)).x - scr(fT, tp(L_FIN, 3, 0)).x;
  const hTot = scr(fT, tapePt(L_FIN, LINES[3].t + LINES[3].h / 2, 0.5)).y - scr(fT, tapePt(L_FIN, LINES[3].t - LINES[3].h / 2, 0.5)).y;
  const fC = DONE;
  const c1 = poseCard(T, 0, fC), c4 = poseCard(T, 3, fC);
  const wCards = scr(fC, cardPt(c4, CARD.w, CARD.d / 2)).x - scr(fC, cardPt(c1, 0, CARD.d / 2)).x;   // the whole row, tape and cards
  const hYear = scr(fC, cardPt(c1, 60, CARD_INK.year[3])).y - scr(fC, cardPt(c1, 60, CARD_INK.year[1] + 14)).y;
  if (wTape < 500 || hTot < 52 || wCards < 760 || hYear < 30)
    throw new Error(`paper: too small on screen (tape ${Math.round(wTape)}, total ${Math.round(hTot)}, cards ${Math.round(wCards)}, year ${Math.round(hYear)} px)`);
}
// ★ everything lies apart on the pad: a pair of cards either side of the tape, clear of it and of each other, all inside the
//   pad and clear of the machine; the tape's lead end inside the pad; the total out on the flat pad, past the machine's chute
{
  const corners = (p: { x: number; z: number; yaw: number; h: number }) => [[0, 0], [CARD.w, 0], [CARD.w, CARD.d], [0, CARD.d]].map(([u, v]) => cardPt(p, u, v));
  const rest = CARD_AT.map((_, k) => corners(poseCard(T, k, 99999)));
  const xs = (pts: P3[]) => [Math.min(...pts.map((p) => p.x)), Math.max(...pts.map((p) => p.x))];
  const zs = (pts: P3[]) => [Math.min(...pts.map((p) => p.z)), Math.max(...pts.map((p) => p.z))];
  const tl = TAPE.x - TAPE.w / 2 - 14, tr = TAPE.x + TAPE.w / 2 + 14;
  const [L0x, R0x] = xs([...rest[0], ...rest[1]]), [L1x, R1x] = xs([...rest[2], ...rest[3]]);
  const gaps = [zs(rest[1])[0] - zs(rest[0])[1], zs(rest[3])[0] - zs(rest[2])[1]];
  const [zFar] = zs([...rest[0], ...rest[2]]), [, zNear] = zs([...rest[1], ...rest[3]]);
  const lead = tapePt(L_FIN, 0, 0.5);
  if (R0x > tl - 16 || L1x < tr + 16 || L0x < PAD.x0 + 50 || R1x > PAD.x1 - 50 || Math.min(...gaps) < 14 || zFar < PAD.z0 + 36
    || zNear > MACH.rear - 60 || lead.z < PAD.z0 + 40 || S_TOTAL - LINES[3].h / 2 < S_FLAT + 20)
    throw new Error(`paper: the objects crowd each other or the pad (cards x ${[L0x, R0x, L1x, R1x].map(Math.round)}, row gaps ${gaps.map(Math.round)}, far ${Math.round(zFar)}, near ${Math.round(zNear)}, lead ${Math.round(lead.z)}, total s ${Math.round(S_TOTAL)})`);
}

const M3D = paperModel(T);
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = v.y - 960 / v.z - m, y1 = v.y + 960 / v.z + m;
  // ★ the pad's far corners and its whole width always inside the canvas (a canvas border never cuts the far side of it);
  //   its near side runs on under the machine, off the bottom of the frame
  const e = eyeOf(v);
  let px0 = 1e9, px1 = -1e9, py0 = 1e9;
  for (const x of [PAD.x0, PAD.x1]) for (const z of [PAD.z0, 0]) {
    const q = project(e, x, DESK.floor - PAD.t, z); px0 = Math.min(px0, q.x); px1 = Math.max(px1, q.x); py0 = Math.min(py0, q.y);
  }
  const PM = 80;
  const X0 = Math.min(x0, px0 - PM), X1 = Math.max(x1, px1 + PM), Y0 = Math.min(y0, py0 - 200);
  return { x: Math.floor(X0), y: Math.floor(Y0), w: Math.ceil(X1 - X0), h: Math.ceil(y1 - Y0) };
};
const LP = (p: P3, k: CamKey) => { const q = project(eyeOf(k), p.x, DESK.floor - p.h, p.z); return [q.x, q.y] as const; };
const [tx, ty] = LP(PRINT_MID, STORY[1]), [cx, cy] = LP({ x: TAPE.x, h: PAD.t, z: (C1.z + C4.z) / 2 }, STORY[2]);
const [mx, my] = LP({ x: TAPE.x, h: SLOT.h, z: SLOT.z + 120 }, STORY[0]);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[mx, my, 620, 420], [tx, ty, 640, 520], [cx, cy, 760, 480]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="paper" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "click", at: T.prints[3] + 1, vol: 0.32, why: "paper: the adding machine strikes the total (its print hammers, once)", mode: "peak" },
  { s: "paper", at: Math.round(T.cards[0][0] + 0.8 * (T.cards[0][1] - T.cards[0][0])), vol: 0.36, why: "paper: the first year card touches down on the pad", mode: "peak" },
  { s: "paper", at: Math.round(T.cards[2][0] + 0.8 * (T.cards[2][1] - T.cards[2][0])), vol: 0.3, why: "paper: the second pair of year cards touches down", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [tx, ty] },
  done: DONE, cam: CAM, sfx: SFX,
};
