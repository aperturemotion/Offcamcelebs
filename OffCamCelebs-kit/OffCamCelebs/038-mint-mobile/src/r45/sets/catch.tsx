import React from "react";
import { ramp, SETTLE, GLIDE, EXIT, SMOOTH, clamp01 } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { catchModel, frames, at, CUTS, KN, SV, SV_END, FLAG, PICK_TOP, PIE, type CatchP, type CatchGeo } from "../../three/props/catch";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · THE CATCH (cream) — a cherry pie on a round acacia board.
//  0 "The catch?" The truck brings the place in CLOSE on the whole pie, turning a few degrees into view as it lands; a party
//    pick already stands in its front quarter (its flag edge-on: nothing to read).
//  1 "Reynolds wasn't the only owner." A long slicing knife glides in along its own blade and presses straight down through
//    the pie, three times (three diameters, the blade turning between presses round the side quarters, never over the
//    pick): the pie is in six pieces, his quarter at the front and five others. No names, no faces.
//  2 "Reports put his stake at about a quarter, roughly $300 million." A pie server glides in from the right, lands flat on
//    the board and slides under the front quarter (the quarter rides up onto the blade on its inner point); on "quarter" it
//    lifts the quarter out toward the camera and the flag turns to it: "~25%" over "(REPORTED)"; on "$300" the flag turns
//    on its stick to its other side: "~$300M" over "(REPORTED)". One figure and one label at a time; never $1.35B.
// ═══════════════════════════════════════════════════════════════════════════
const S = "catch" as const;
const REY = word(S, 1, /^Reynolds/), REPORTS = cue(S, 2), QUARTER = word(S, 2, /^quarter/), W300 = word(S, 2, /^\$300/);
const FLOOR = 1500, CX = 540, CZ = 0;
const GEO: CatchGeo = { floor: FLOOR, cx: CX, z: CZ };

// ── THE KNIFE: in along its blade, three presses (down 5 f, held 2, up 5), turning between them ──
const KIN = [REY - 16, REY - 2] as const;
const PRESS = [REY - 1, REY + 20, REY + 43] as const;           // each press's first frame down
const ROT = [[REY + 11, REY + 19], [REY + 32, REY + 42]] as const;
const KOUT = [REY + 55, REY + 70] as const;
const KUP = PIE.top + 14;                                         // its edge's height when raised, over the board
export const CU = { cuts: PRESS.map((a) => a + 5), kin: KIN, kout: KOUT } as const;
const knifeAt = (f: number): CatchP["knife"] => {
  const on = f >= KIN[0] - 1 && f <= KOUT[1] + 1;
  let dir: number = CUTS[0];
  if (f >= ROT[0][0]) dir = CUTS[0] + (CUTS[1] - CUTS[0]) * ramp(f, ROT[0][0], ROT[0][1], SMOOTH);
  if (f >= ROT[1][0]) dir = CUTS[1] + (CUTS[2] - CUTS[1]) * ramp(f, ROT[1][0], ROT[1][1], SMOOTH);
  let y = KUP;
  for (const a of PRESS) if (f >= a && f <= a + 12) y = f <= a + 5 ? KUP * (1 - ramp(f, a, a + 5, SETTLE)) : f <= a + 7 ? 0 : KUP * ramp(f, a + 7, a + 12, SETTLE);
  const s = f < KIN[1] ? 1400 * (1 - ramp(f, KIN[0], KIN[1], GLIDE)) : f > KOUT[0] ? 1500 * ramp(f, KOUT[0], KOUT[1], EXIT) : 0;
  return { on, dir, y, s };
};
const stageAt = (f: number) => (f < CU.cuts[0] ? 0 : f < CU.cuts[1] ? 1 : f < CU.cuts[2] ? 2 : 3);

// ── THE SERVER: in from the right at a hover, down onto the board, along its own axis under the quarter, then the lift ──
const YAW_S = 15;
const AX: [number, number] = [-Math.sin((YAW_S * Math.PI) / 180), -Math.cos((YAW_S * Math.PI) / 180)];   // the tip's way in
const KERF = 1.2 / Math.sin(Math.PI / 4);
const E: [number, number] = [-6, 44];                             // the tip's end: under his quarter, near its point
const SLIDE = 262;
const S0: [number, number] = [E[0] - AX[0] * SLIDE, E[1] - AX[1] * SLIDE];   // where the tip lands, outside the rim
const SIN = [REPORTS + 6, REPORTS + 21] as const, SDOWN = [SIN[1], SIN[1] + 6] as const, SSL = [SIN[1] + 7, QUARTER - 3] as const;
const LIFT = [QUARTER, QUARTER + 26] as const;
const HOVER = 26;
const srvAt = (f: number): CatchP["srv"] => {
  const on = f >= SIN[0] - 1;
  const gx = 1100 * (1 - ramp(f, SIN[0], SIN[1], GLIDE));
  const y = HOVER * (1 - ramp(f, SDOWN[0], SDOWN[1], SETTLE));
  const u = ramp(f, SSL[0], SSL[1], SMOOTH);
  return { on, x: S0[0] + AX[0] * SLIDE * u + gx, z: S0[1] + AX[1] * SLIDE * u, y, yaw: YAW_S };
};
/** ★ his quarter rides onto the blade: for the tip's reach along his bisector, the lift a and tilt b (on his inner point)
 *  that keep his underside 0.3 px over the blade's top (2.4 + 0.3) wherever the blade is under him — and his sloped side
 *  wall, where the tip is still outside his foot */
const tiltAt = (f: number) => {
  const tip = srvAt(f), r = tip.z - KERF;                         // the tip's reach along his bisector (+z)
  const need = Math.max(0, SV.t + 0.3 + 0.25 - 2 * Math.max(0, r - PIE.rb));
  if (need <= 0) return { a: 0, b: 0 };
  const rc = Math.max(0, Math.min(r, PIE.rb) - 42) * (PIE.rb / (PIE.rb - 42));
  const H = PIE.rb / 2;
  if (rc >= H) return { a: 0, b: need / rc };
  const b = (need / H) * (rc / H);
  return { a: need - b * rc, b };
};
const PIVOT: [number, number, number] = [E[0] - AX[0] * 300, 0, E[1] - AX[1] * 300];   // the lift turns about the neck
const liftAt = (f: number): CatchP["lift"] => {
  // ★ up first, clear of the pieces beside it (their crust stands 73 px), then out to the right and toward the camera, so the
  //   gap it leaves in the pie stays in view
  const up = ramp(f, LIFT[0], LIFT[0] + 16, SETTLE), out = ramp(f, LIFT[0] + 8, LIFT[1], SETTLE);
  return { p: PIVOT, t: [150 * out, 105 * up + 45 * out, 30 * up + 50 * out], r: 12 * up };
};
// ── THE FLAG: furled on its stick; it unrolls on "quarter" (side A, turned a little to the key), and on "$300" turns on its
//    stick to side B ──
const FA = [QUARTER - 2, QUARTER + 12] as const, FB = [W300 - 2, W300 + 13] as const;
const flagAt = (f: number) => -10 - 180 * ramp(f, FB[0], FB[1], SETTLE);   // through −100: its free end swings toward the camera (never up into the band)
const unfurlAt = (f: number) => ramp(f, FA[0], FA[1], SETTLE);

const DONE = Math.max(FB[1], LIFT[1], cueEnd(S, 2)) + 4;   // the flag held to the end of "million"
const paramsAt = (f: number): CatchP => ({
  stage: stageAt(f), knife: knifeAt(f), srv: srvAt(f), tilt: tiltAt(f), lift: liftAt(f), flag: flagAt(f), unfurl: unfurlAt(f),
  yaw: 9 * (1 - ramp(f, 1118, 1170, SETTLE)) - 2 * ramp(f, REPORTS, DONE, SMOOTH),
});
export const CT = { ...CU, sin: SIN, slide: SSL, lift: LIFT, fa: FA, fb: FB, done: DONE } as const;

// ── THE CAMERA: close on the whole pie as it lands; on "Reports" in on the front quarter; on "quarter" up with the lift ──
/** the camera key that puts world point w (y up) at screen (sx, sy) at zoom z, through this place's own eye */
const aim = (w: [number, number, number], z: number, sx: number, sy: number) => {
  const D = 1900 / z ** 0.6, s = D / (D - w[2]);
  return { x: w[0] - ((sx - 540) / z - 0.22 * D * (1 - s)) / s, y: -w[1] - ((sy - 960) / z + 0.5 * D * (1 - s)) / s, z };
};
const FLAG_UP = at(frames(GEO, paramsAt(LIFT[1] + 2)).flag, 0, 0, 0);
const STORY: CamKey[] = [
  { at: -9999, x: CX + 10, y: FLOOR - 190, z: 1.3, dur: 1 },
  { at: REPORTS + 2, x: CX + 30, y: FLOOR - 150, z: 1.5, dur: 34 },
  { at: QUARTER + 1, ...aim(FLAG_UP, 1.62, 545, 870), dur: 40 },
];
const CAM: CamKey[] = alive(S, STORY, DONE + 80, { amp: 0.35 });
const eyeAt = (f: number) => { const v = camView(CAM, f); const D = 1900 / v.z ** 0.6; return { x: v.x + 0.22 * D, y: v.y - 0.5 * D, D }; };
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, FLOOR - 900), y1 = Math.min(v.y + 960 / v.z + m, FLOOR + 700);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
/** a world point (y up) on screen at f */
const screen = (f: number, [x, y, z]: [number, number, number]) => {
  const v = camView(CAM, f), e = eyeAt(f), q = project(e, x, -y, z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
// ★ the caption band, checked over every frame: the flag, the pick, the knife's spine and the server's handle stay below
//   y 662 on screen; and nothing readable (the flag) under the Reel's buttons (x > 940, y 1000–1700)
for (let f = 1140; f <= DONE + 80; f++) {
  const p = paramsAt(f), F = frames(GEO, p);
  const pts: [string, [number, number, number]][] = [
    ["flag", at(F.flag, 3.4, FLAG.h / 2, 0)], ["flag end", at(F.flag, 3.4 + FLAG.w, FLAG.h / 2, 0)], ["pick", at(F.pick, 0, PICK_TOP, 0)],
    ["pie rim", at(F.his, 0, PIE.top, PIE.rim)], ["pie back", at(F.sc, 0, PIE.top + 30, -PIE.rim)],
  ];
  if (p.knife.on) for (const x of [0, 300, 600, KN.len, -277]) pts.push([`knife ${x}`, at(F.knife, x, KN.spine, 0)]);
  if (p.srv.on) pts.push(["server", at(F.server, ...SV_END)]);
  for (const [nm, w] of pts) {
    const s = screen(f, w);
    if (s.x > -40 && s.x < 1120 && s.y < 662) throw new Error(`catch: the ${nm} reaches y ${Math.round(s.y)} on screen at f${f}`);
  }
  if (p.flag > -40) for (const [x, y] of [[3.4, -FLAG.h / 2], [3.4 + FLAG.w, -FLAG.h / 2], [3.4 + FLAG.w, FLAG.h / 2]]) {
    const s = screen(f, at(F.flag, x, y, 0));
    if (s.x > 940 && s.y > 1000 && s.y < 1700) throw new Error(`catch: the flag reaches the Reel's buttons (${Math.round(s.x)}, ${Math.round(s.y)}) at f${f}`);
  }
}

const M3D = catchModel(GEO);
const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[CX, FLOOR - 120, 700, 520]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="pie">
        <View3D name="catch" rect={rectAt(f)} eye={eyeAt(f)} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

// ★ 2026-11-22 re-score from the EarnEdits pack: the crust gives under the knife, wood under the server, paper for the flag
const sfx: PlaceSfx[] = [
  { s: "wsoft", at: KIN[0] + 6, end: KIN[1], vol: 0.28, why: "the knife glides in along its blade", mode: "peak" },
  ...CU.cuts.map((c, i): PlaceSfx => ({ s: "pcrunch", at: c - 2, vol: 0.45 - 0.05 * i, why: `the knife cuts through the crust (cut ${i + 1})`, mode: "peak" })),
  { s: "wsoft", at: KOUT[0] + 10, end: KOUT[1], vol: 0.18, why: "the knife is drawn away", mode: "peak" },
  { s: "wsmall3", at: SIN[0] + 5, end: SIN[1], vol: 0.25, why: "the server glides in", mode: "peak" },
  { s: "cwood", at: SDOWN[1], vol: 0.4, why: "the server's blade lands on the board", mode: "peak" },
  { s: "wsoft", at: LIFT[0] + 9, end: LIFT[1], vol: 0.32, why: "the quarter is lifted out", mode: "peak" },
  { s: "pflipb", at: FB[0] + 5, vol: 0.3, why: "the paper flag turns to its other side", mode: "peak" },
];
export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [CX, FLOOR - 150] },
  done: DONE, cam: CAM, sfx,
};
void clamp01; void cueEnd;
