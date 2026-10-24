import React from "react";
import { ramp, SOFT, SETTLE, TRAVEL } from "../tokens";
import { word, cue } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { DEFER } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { deferModel, doorX, DF_N, DOOR_Y, PLATE_Y, TOP, CORN_Z } from "../../three/props/defer";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · THE DEFERRAL (dark) — a bank's safe-deposit section: ten boxes in a row, 2034 … 2043 (rebuilt 2026-10-23: the
// user, "Stop using labels so often… some of the lock boxes can actually close when the scene appears… this sort of stopwatch
// sticking out of the right side of the lock box… looks like a bug. Fix that"). No sign, no printed sums, no dial: the boxes'
// own number plates are the only print, and the ACTIONS carry the lines.
//  0 "But 680 million dollars of it is deferred." CLOSE on one box, 2034: its door swings shut on its hinge and, on
//    "deferred", its key turns a quarter and it locks.
//  1 "It arrives in 10 payments of 68 million dollars, from 2034 to 2043," The camera pulls out to the whole row as three more
//    doors swing shut and lock (ten boxes, nine locked, one still open); on "from 2034" it closes in on 2034 and TRACKS along
//    the row in year order to 2043.
//  2 "with no interest." 2043 swings shut, pushed in on; on "interest" its key turns, and the place's lights go out.
// ★ The money is real and will be paid (the brief): every box is there and dated; nothing is emptied.
// ═══════════════════════════════════════════════════════════════════════════
const S = "defer" as const;
const DEF = word(S, 0, /^deferred/), C1 = cue(S, 1), Y0 = word(S, 1, /^2034/), INT = word(S, 2, /^interest/);
const WAVE = [3, 5, 7];                          // the doors that swing shut as the camera pulls out
export const DF = {
  heroA: DEF - 40, heroN: 38,                    // 2034 swings shut (SOFT: a big surface, ≥ 30 f)
  heroLockA: DEF + 1, lockN: 13,                 // its key turns on "deferred"
  waveA: C1 + 1, waveStep: 10, waveN: 34,        // 2037, 2039, 2041 swing shut and lock as the row is revealed
  lastA: Y0 + 43, lastN: 34,                     // 2043 swings shut as the track arrives on it (f604)
  lastLockA: INT - 1,                            // its key turns on "interest"
  dimA: 652, dimN: 10,                           // and the lights go out
} as const;
const FLOOR = 1300, CX = 540, ZC = -40;
const EYE = { x: 960, y: 400, D: 2000 };
const pr = (x: number, y: number, z: number) => { const s = EYE.D / (EYE.D - z); return { x: EYE.x + (x - EYE.x) * s, y: EYE.y + (y - EYE.y) * s }; };
const door = (i: number) => pr(CX + doorX(i), FLOOR - DOOR_Y, ZC - 2);
const TOPY = pr(CX, FLOOR - TOP, ZC + CORN_Z[1]).y;   // the cornice's back edge: the highest thing on screen

// ── the camera: CLOSE on 2034 → out to the row → in to 2034 → the track to 2043 → in on 2043 ──
// ★ the row shot frames the doors that swing shut during it (2037–2041) at 1.0: at 0.68 all ten fitted, but as a thin dark strip
const zIn = 2.3, zRow = 1.0, zTrack = 1.5, zEnd = 2.0;
const story: CamKey[] = [
  { at: -9999, x: door(0).x + 132 / zIn, y: TOPY + (960 - 700) / zIn, z: zIn, dur: 1 },
  { at: DF.heroLockA + 15, x: (door(3).x + door(7).x) / 2, y: TOPY + (960 - 735) / zRow, z: zRow, dur: 40 },  // the row
  { at: DF.heroLockA + 59, x: door(0).x + 80 / zTrack, y: TOPY + (960 - 735) / zTrack, z: zTrack, dur: 40 }, // in to 2034
  { at: Y0 + 2, x: door(9).x - 80 / zTrack, y: TOPY + (960 - 735) / zTrack, z: zTrack, dur: 46, drift: true }, // the track
  { at: DF.lastA + 8, x: door(9).x, y: TOPY + (960 - 716) / zEnd, z: zEnd, dur: 36 },                      // in on 2043
];
/** the track along the row (a drift key: score.ts gives it its own whoosh) */
export const DF_TRACK = { at: story[3].at, dur: story[3].dur };
export const DF_DONE = DF.dimA + DF.dimN;   // 662: the lights are out (the hand-over to the value place waits for it)
export const DF_CAM: CamKey[] = alive("defer", story, DF_DONE + 44, { amp: 0.3, seed: 3.1 });
/** the track's ticks: the frame each year's box crosses the frame's centre line (2034 is under the camera as it is named) */
export const DF_TICKS: number[] = (() => {
  const out = [Y0];
  const k = story[3];
  for (let i = 1; i < DF_N; i++) {
    const x = door(i).x;
    for (let f = k.at; f <= k.at + k.dur; f++) {
      const v = camView(DF_CAM, f);
      if (540 + (x - v.x) * v.z <= 560) { out.push(f); break; }
    }
  }
  return out;
})();

// ★ THE GUARDS (the brief): at every frame of the place, its top stays below the caption band (≥ 660 on screen), and no
//   number plate is readable under the Reel's buttons (x > 940, y 1000–1700) or below y 1500 (a sliver of ≤ 12 px at the
//   frame's edge is not readable)
{
  for (let f = cue(S, 0) - 20; f <= DF_DONE + 44; f++) {
    const v = camView(DF_CAM, f), sy = (y: number) => 960 + (y - v.y) * v.z, sx = (x: number) => 540 + (x - v.x) * v.z;
    if (sy(TOPY) < 660) throw new Error(`defer: f${f} the cabinet's top at y ${sy(TOPY).toFixed(0)} enters the caption band`);
    for (let i = 0; i < DF_N; i++) {
      const p = pr(CX + doorX(i), FLOOR - PLATE_Y, ZC + 1.8);
      const x0 = sx(p.x - 30), x1 = Math.min(1080, sx(p.x + 30)), y0 = sy(p.y - 10.5), y1 = sy(p.y + 10.5);
      if (x0 > 1080 || x1 < 0 || y0 > 1920 || y1 < 0) continue;
      if (y1 > 1500) throw new Error(`defer: f${f} plate ${DEFER.years[i]} below y 1500`);
      if (x1 - Math.max(x0, 940) > 12 && y1 > 1000 && y0 < 1700) throw new Error(`defer: f${f} plate ${DEFER.years[i]} under the Reel's buttons (${x0.toFixed(0)}–${x1.toFixed(0)}, ${y0.toFixed(0)}–${y1.toFixed(0)})`);
    }
  }
}

const OPEN0 = [0, 3, 5, 7, 9];
const openAt = (f: number, i: number) => {
  if (!OPEN0.includes(i)) return 0;
  if (i === 0) return 1 - ramp(f, DF.heroA, DF.heroA + DF.heroN, SOFT);
  if (i === 9) return 1 - ramp(f, DF.lastA, DF.lastA + DF.lastN, SOFT);
  const a = DF.waveA + WAVE.indexOf(i) * DF.waveStep;
  return 1 - ramp(f, a, a + DF.waveN, SOFT);
};
const lockAt = (f: number, i: number) => {
  if (!OPEN0.includes(i)) return 1;
  if (i === 0) return ramp(f, DF.heroLockA, DF.heroLockA + DF.lockN, SETTLE);
  if (i === 9) return ramp(f, DF.lastLockA, DF.lastLockA + DF.lockN, SETTLE);
  const a = DF.waveA + WAVE.indexOf(i) * DF.waveStep + DF.waveN + 1;
  return ramp(f, a, a + 9, SETTLE);
};
/** the lights going out: a quick fall, as a bank of lamps switched off does */
const dimAt = (f: number) => ramp(f, DF.dimA, DF.dimA + DF.dimN, (t) => 1 - (1 - t) * (1 - t));

const DF3D = deferModel({ floor: FLOOR, cx: CX, z: ZC, years: [...DEFER.years], keyed: [0, 9] });

export const Defer: React.FC<{ f: number }> = ({ f }) => {
  const dim = dimAt(f);
  return (
    <>
      <Light keys={DF_CAM} f={f} ground="dark" pools={[[CX, 1110, 1150, 560], [door(0).x, 1060, 520, 380]]} o={1 - 0.85 * dim} />
      <World keys={DF_CAM} f={f}>
        <Obj s={S} g="vault">
          <View3D name="defer" rect={{ x: -420, y: 830, w: 1920, h: 880 }} eye={EYE} make={DF3D} light={1 - 0.82 * dim}
            params={{ open: Array.from({ length: DF_N }, (_, i) => openAt(f, i)), lock: Array.from({ length: DF_N }, (_, i) => lockAt(f, i)),
              yaw: -1.2 + 2.4 * ramp(f, cue(S, 0), DF_DONE, TRAVEL) }} />
        </Obj>
      </World>
    </>
  );
};
export const DeferSet = { id: S, ground: "dark" as const, Comp: Defer, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
