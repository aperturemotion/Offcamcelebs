import React from "react";
import { ramp, TRAVEL, EXIT, GLIDE, SETTLE, clamp01 } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { annuityModel, AN_PITCH, AN_R, AN_N, AN_BASE, AN_STACK_H, AN_PILE, AN_PILE_H, type AnnP } from "../../three/props/annuity";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · THE ANNUITY (dark) — 30 stacks of gold bullion coins on a walnut ledger board, one stack a payment, each 5 %
// taller than the last (Powerball's "30 increasing payments"); then the lump sum, one pile of strapped bundles.
//  0 "But 847 million is the annuity: 30 payments over 29 years." The crane brings the place in CLOSE on the first, small
//    stack alone on its board (L1: one object). On "annuity" the second payment slides in along the board from beyond the
//    frame's right edge and stops beside it (friction: constant deceleration, the stack leaning on its leading edge and
//    rocking back as it stops; a tick as it seats), then the third; on "30 payments" the camera tracks along the board and
//    the payments come faster, each seating as the camera passes, each stack taller. On "29 years" the camera pulls out to
//    the whole row: a staircase of gold rising left to right.
//  1 "Take the money now, and the lottery's own figure is 363 million." On "now" the board, with all 30 payments, is drawn
//    away out of the frame (EXIT) and one pile of strapped $100 bundles slides in from the right (GLIDE) to where the row
//    stood: far smaller than the row. The camera pushes in on it for "$363 million" (the caption carries the figure).
// ★ No label, plate or tag (Timur 2026-10-23): the year pins on the board are a timeline, no figures. No person, no hands.
// ★ The living camera (L7): story keys on the words, breaths between them (alive); every object below 660 on screen.
// ═══════════════════════════════════════════════════════════════════════════
const S = "annuity" as const;
const ANNU = word(S, 0, /^annuity/), YEARS = word(S, 0, /^years/), NOW = word(S, 1, /^now/), M363 = word(S, 1, /^\$?363/);
const FLOOR = 1500, X0 = 300, Z = 0;
const seat = (k: number) => X0 + k * AN_PITCH;
const BOARD_R = seat(29) + 220;            // the board runs on past the last payment (the room the payments slide in on)
const PILE_X = 1900;                      // where the lump sum comes to rest (the wide shot's centre)

// ── THE CAMERA: close on the first stack; a long tracking DRIFT along the board as the payments come (no whoosh: their
//    ticks carry it); the pull-out to the whole row on "29 years"; the push-in on the lump sum for "$363 million" ──
const CLOSE = { x: 318, y: 1352, z: 2.25 };
const T_TRACK = ANNU - 4, N_TRACK = 46;
const WIDE = { x: 1960, y: 1240, z: 0.52 };
const T_WIDE = T_TRACK + N_TRACK + 3;
const BOARD_A = NOW + 1, BOARD_N = 30;     // the board is drawn away
const PILE_A = BOARD_A + 19, PILE_N = 32;  // the lump sum slides in
const PUSH = { x: PILE_X - 20, y: 1392, z: 1.38 };
const STORY: CamKey[] = [
  { at: -9999, ...CLOSE, dur: 1 },
  { at: T_TRACK, x: 2700, y: 1300, z: 1.14, dur: N_TRACK, drift: true },   // along the board with the payments
  { at: T_WIDE, ...WIDE, dur: 40 },                                         // "29 years": the whole row
  { at: PILE_A + 26, ...PUSH, dur: 42 },                                    // "$363 million": in on the lump sum
];
export const AN_DONE = cueEnd(S, 1) + 4;
export const AN_CAM: CamKey[] = alive("annuity", STORY, AN_DONE + 48, { amp: 0.45 });
const hw = (f: number) => 540 / camView(AN_CAM, f).z;
const rightEdge = (f: number) => camView(AN_CAM, f).x + hw(f);
const leftEdge = (f: number) => camView(AN_CAM, f).x - hw(f);
/** ★ THE ORBIT: on "29 years" the pull-out swings round the row (the place turns −45° about the lump sum's spot) so the
 *  row runs away diagonally, its small first payments far off, the big last ones near: the whole staircase in one frame;
 *  it eases back to a three-quarter view as the camera goes in on the lump sum */
const yawAt = (f: number) => 1.2 - 2.4 * ramp(f, cue(S, 0), T_WIDE, TRAVEL) - 44.8 * ramp(f, T_WIDE, T_WIDE + 40, SETTLE) + 13 * ramp(f, PILE_A + 26, PILE_A + 68, SETTLE);
/** the eye travels with the camera, up and to the right of its view, further off as the view widens (a real pull-back) */
const eyeAt = (f: number) => { const v = camView(AN_CAM, f); const D = 1900 / v.z ** 0.6; return { x: v.x + 0.221 * D, y: v.y - 0.321 * D, D }; };
/** where a point of the place (x along the board, h above the floor, z) lands on SCREEN at f: the yaw, the eye, the camera */
const screenOf = (f: number, x: number, h: number, z: number) => {
  const th = (yawAt(f) * Math.PI) / 180, dx = x - PILE_X, dz = z - Z;
  const wx = PILE_X + dx * Math.cos(th) + dz * Math.sin(th), wz = Z - dx * Math.sin(th) + dz * Math.cos(th);
  const p = project(eyeAt(f), wx, FLOOR - h, wz), v = camView(AN_CAM, f);
  return { x: 540 + (p.x - v.x) * v.z, y: 960 + (p.y - v.y) * v.z };
};

// ── THE PAYMENTS: payment k comes to rest at REST[k], when its seat is ~70 % across the moving frame (the first two on
//    "annuity", while the camera still holds); it slides G frames from beyond the frame's right edge ──
const G = 10;
const REST: number[] = [-1e9];
const FROM: number[] = [0];                 // the glide's distance (px) for each payment
/** a payment's offset from its seat at f: constant deceleration (friction) from FROM[k] to rest */
const glideAt = (k: number, f: number) => {
  if (k === 0 || k >= REST.length) return 0;
  const t = clamp01((f - (REST[k] - G)) / G);
  return FROM[k] * (1 - t) * (1 - t);
};
const clear = (k: number) => {
  for (let f = REST[k] - G; f <= REST[k]; f += 0.25)
    if (seat(k) + glideAt(k, f) - (seat(k - 1) + glideAt(k - 1, f)) < 2 * AN_R + 8) return false;
  return true;
};
for (let k = 1; k < 30; k++) {
  let f = k === 1 ? ANNU - 2 : k === 2 ? ANNU + 6 : REST[k - 1] + 1.3;
  while (f < 1200 && (seat(k) - leftEdge(f)) / (2 * hw(f)) > 0.7) f += 0.25;
  // ★ a payment that would catch the one before it in their glides waits a little (they never touch)
  for (;;) {
    REST[k] = f; FROM[k] = Math.max(140, rightEdge(f - G) + AN_R + 46 - seat(k));
    if (clear(k) || f > 1200) break;
    f += 0.25;
  }
}
/** its lean on its leading edge: building while the base is braked, then a damped rock back as it stops (bounded below by
 *  0: it never pivots past upright onto its other edge) */
const leanAt = (k: number, f: number) => {
  if (k === 0) return 0;
  const A = 0.012 + 0.02 * (AN_N[k] / 41), t = f - (REST[k] - G);
  if (t <= 0) return 0;
  if (t < G) return A * (t / G) ** 2;
  const u = t - G;
  return A * Math.exp(-u / 2.4) * Math.abs(Math.cos((Math.PI * u) / 3.2));
};
// ★ the payments never touch one another in their glides (their axes ≥ a coin's width + 6 px apart at every frame)
for (let k = 1; k < 30; k++) for (let f = REST[k] - G; f <= REST[k]; f += 0.25) {
  const gap = seat(k) + glideAt(k, f) - (seat(k - 1) + glideAt(k - 1, f));
  if (gap < 2 * AN_R + 6) throw new Error(`annuity: payment ${k} comes within ${gap.toFixed(1)} px of payment ${k - 1} at f${f}`);
}
if (REST[29] > T_WIDE + 4) throw new Error(`annuity: the last payment rests at f${REST[29].toFixed(1)}, after the pull-out (f${T_WIDE})`);
// the board leaves past the frame's left edge; the pile comes from beyond its right
// (the board leaves along its own length, which the orbit has turned: it travels until its near end is past the frame)
let BOARD_D = 400;
while (screenOf(BOARD_A + BOARD_N, BOARD_R - BOARD_D, 0, 95).x > -60 || screenOf(BOARD_A + BOARD_N, BOARD_R - BOARD_D, 330, 0).x > -60) BOARD_D += 40;
const PILE_W = AN_PILE.dx * (AN_PILE.nx - 1) + 240;
let PILE_D = 300;
while (screenOf(PILE_A, PILE_X + PILE_D - PILE_W / 2, 0, 160).x < 1150 || screenOf(PILE_A, PILE_X + PILE_D - PILE_W / 2, 0, -100).x < 1150) PILE_D += 40;
const boardAt = (f: number) => -BOARD_D * ramp(f, BOARD_A, BOARD_A + BOARD_N, EXIT);
const pileAt = (f: number) => PILE_D * (1 - ramp(f, PILE_A, PILE_A + PILE_N, GLIDE));
{
  // the pile and the board never meet
  for (let f = PILE_A; f <= BOARD_A + BOARD_N; f += 0.5)
    if (PILE_X + pileAt(f) - PILE_W / 2 < BOARD_R + boardAt(f) + 30) throw new Error(`annuity: the pile reaches the board at f${f}`);
}

export const AN = {
  rests: REST.slice(1).map((r) => Math.round(r)),   // each payment seats (a tick)
  boardA: BOARD_A, boardN: BOARD_N,
  pileA: PILE_A, pileN: PILE_N,
  m363: M363, years: YEARS,
} as const;

// ★ the caption band: every object's top stays below 660 on screen at every frame of the place
{
  const topAt = (f: number) => {
    let best = 1e9;
    const consider = (x: number, h: number, half: number) => {
      for (const ex of [-half, 0, half]) for (const ez of [-half, half]) {
        const p = screenOf(f, x + ex, h + 4, ez);
        if (p.x > -20 && p.x < 1100) best = Math.min(best, p.y);
      }
    };
    for (let k = 0; k < 30; k++) if (f >= REST[k] - G) consider(seat(k) + glideAt(k, f) + boardAt(f), AN_BASE + AN_STACK_H[k], AN_R);
    if (f >= PILE_A) consider(PILE_X + pileAt(f), AN_PILE_H + 0.3, PILE_W / 2);
    return best;
  };
  for (let f = 341; f <= AN_DONE + 48; f++) { const y = topAt(f); if (y < 664) throw new Error(`annuity: an object's top reaches y ${Math.round(y)} on screen at f${f}`); }
}

const AN3D = annuityModel({ floor: FLOOR, x0: X0, boardR: BOARD_R, z: Z, pileX: PILE_X });
/** the view's box: the camera's view and a margin, cut to the band the place's things (and their reflections) occupy */
const rectAt = (f: number) => {
  const v = camView(AN_CAM, f), m = 220 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  // the top reaches as high as the things do as SEEN: the board drawn away into the distance rides up toward the eye's level
  let top = FLOOR - 520;
  if (f < BOARD_A + BOARD_N) for (let x = 200; x <= BOARD_R; x += 200) top = Math.min(top, v.y + (screenOf(f, x + boardAt(f), 340, -100).y - 960) / v.z - 60);
  const y0 = Math.max(v.y - 960 / v.z - m, top), y1 = Math.min(v.y + 960 / v.z + m, FLOOR + 900);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};

const paramsAt = (f: number): AnnP => ({
  dx: AN_N.map((_, k) => glideAt(k, f)),
  rock: AN_N.map((_, k) => leanAt(k, f)),
  shown: AN_N.map((_, k) => f >= REST[k] - G),
  board: boardAt(f), boardOn: f < BOARD_A + BOARD_N,
  pile: pileAt(f), pileOn: f >= PILE_A,
  yaw: yawAt(f),
});

export const Annuity: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={AN_CAM} f={f} ground="dark" pools={[[420, 1360, 620, 420], [1300, 1340, 900, 480], [2350, 1330, 900, 480]]} />
    <World keys={AN_CAM} f={f}>
      <Obj s={S} g="payments">
        <View3D name="annuity" rect={rectAt(f)} eye={eyeAt(f)} make={AN3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const AnnuitySet = { id: S, ground: "dark" as const, Comp: Annuity, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
