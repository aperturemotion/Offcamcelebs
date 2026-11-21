import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { paymentModel, anchors, calTops, envTop, flipStarts, flipsDone, revealAt, PY_EYE, type PayTiming } from "../../three/props/payment";
import type { PlaceDef } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 5 · THE PAYMENT (dark) — one sentence, two things: a tent desk calendar and the last envelope.
//  0 "On October 9th, T-Mobile paid the final $420 million." The place arrives on the calendar while its pages are already
//    flipping over the top, fast and then slowing (a tick per page), through the months from JUL 9 2025; the last flip
//    uncovers OCT 9 2026 on "October 9th". On "T-Mobile" the camera travels right as a thick manila envelope is tossed in
//    from beyond the edge, falls and lands flat with weight (thud) beside it: T-MOBILE, the sender, in plain type. On "final
//    $420" the camera moves onto its FINAL PAYMENT box and a remittance slip slides out of its open end and bends down over
//    the flap to the desk: $420,000,000. One label and one figure at a time; no sum anywhere.
// ═══════════════════════════════════════════════════════════════════════════
const S = "payment" as const;
const NINTH = word(S, 0, /^9th/), TMO = word(S, 0, /^T-Mobile/), D420 = word(S, 0, /^\$420/);

export const T: PayTiming = { flip0: NINTH - 30, land: TMO + 6, slA: D420 - 6, slB: D420 + 14 };
const DONE = cueEnd(S, 0) + 4;

// ── the camera: framings from the model's anchors, projected through the place's eye ──
const A = anchors();
const P = (a: { x: number; y: number; z: number }) => project(PY_EYE, a.x, a.y, a.z);
const DAY = P(A.day), TMOP = P(A.tmo), ENV = P(A.envMid), FIN = P(A.final), FIG = P(A.figure);
const prj = ([x, y, z]: [number, number, number]) => project(PY_EYE, x, -y, z);
/** the highest any flying sheet reaches (layer y) */
let FLY_TOP = 1e9;
for (let f = T.flip0; f <= flipsDone(T); f++) for (const p of calTops(T, f)) FLY_TOP = Math.min(FLY_TOP, prj(p).y);
/** the calendar framed so the sheets that swing over its top stay under the caption band */
const z0 = 1.18;
const CAL: CamKey = { at: -9999, x: DAY.x + 10, y: FLY_TOP - (676 - 960) / z0, z: z0, dur: 1 };
/** the calendar's crown at rest (layer y): a key never lifts it above ~672 on screen while it can show */
const CROWN = Math.min(...calTops(T, flipsDone(T) + 1).map((p) => prj(p).y));
const capY = (y: number, z: number) => Math.min(y, CROWN - (672 - 960) / z);
const ENVK = { x: (TMOP.x + ENV.x) / 2 + 30, y: capY((TMOP.y + ENV.y) / 2 + 10, 1.7), z: 1.7 };
const PAYK = { x: Math.max((FIN.x + FIG.x) / 2 - 20, FIG.x + 100 - 360 / 1.95), y: Math.min((FIN.y + FIG.y) / 2 - 6, P(A.envFar).y - (674 - 960) / 1.95), z: 1.95 };   // the calendar is far off the left edge here
const STORY: CamKey[] = [
  CAL,                                               // on the calendar as its pages flip
  { at: TMO - 8, ...ENVK, dur: 40 },                 // "T-Mobile": over to the envelope as it lands
  { at: D420 - 6, ...PAYK, dur: 32 },                // "final $420": onto FINAL PAYMENT and the slip
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.35 });

// ★ the caption band and the Reel's buttons hold: every top that is on screen stays below 660, and the slip's figure left
//   of x 930
for (let f = cue(S, 0); f <= DONE + 44; f++) {
  const v = camView(CAM, f);
  const scr = (p: { x: number; y: number }) => ({ x: 540 + (p.x - v.x) * v.z, y: 960 + (p.y - v.y) * v.z });
  for (const p of [...calTops(T, f), ...envTop(T, f)]) {
    const s = scr(prj(p));
    if (s.x > -40 && s.x < 1120 && s.y < 662) throw new Error(`payment: a top reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
  if (f >= T.slB) { const s = scr({ x: FIG.x + 100, y: FIG.y }); if (s.x > 930) throw new Error(`payment: the slip's figure reaches x ${Math.round(s.x)} at f${f}`); }
}

const M3D = paymentModel(T);
const smooth = (t: number) => t * t * (3 - 2 * t);
const cl = (x: number) => Math.max(0, Math.min(1, x));
const SETTLE_ = (t: number) => { const x = cl(t); return 1 - Math.pow(1 - x, 3) * (1 - x * 0.6); };
const slideAt = (f: number) => smooth(cl((f - T.slA) / (T.slB - T.slA))) * 0.35 + SETTLE_((f - T.slA) / (T.slB - T.slA)) * 0.65;
const yawAt = (f: number) => 1.5 - 3 * smooth(cl((f - cue(S, 0)) / (DONE - cue(S, 0))));

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[DAY.x, DAY.y + 60, 620, 520], [ENV.x + 60, ENV.y, 720, 460]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="payment" rect={{ x: -300, y: 420, w: 2100, h: 1700 }} eye={PY_EYE} make={M3D} params={{ f, slide: slideAt(f), yaw: yawAt(f) }} />
      </Obj>
    </World>
  </>
);

const starts = flipStarts(T);
export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [DAY.x, DAY.y] },
  done: DONE,
  cam: CAM,
  sfx: [
    // a tick per page as it passes over the top (its swing's middle), the early ones quieter under the arrival
    ...starts.map((s, k) => ({ s: "tick" as const, at: s + (k < 10 ? 4 : 4 + Math.round((k - 9) / 2)), vol: 0.16 + 0.012 * k, why: `payment: calendar page ${k + 1} flips over`, mode: "peak" as const })),
    { s: "click", at: revealAt(T) + 7, vol: 0.4, why: "payment: the last page lands, OCT 9 2026 uncovered", mode: "peak" },
    { s: "swoosh", at: T.land - 6, vol: 0.32, why: "payment: the envelope is tossed in", mode: "peak" },
    { s: "thud", at: T.land, vol: 0.75, why: "payment: the envelope lands with weight", mode: "peak" },
    { s: "flick", at: T.land + 1, vol: 0.35, why: "payment: the envelope's paper slaps the desk", mode: "peak" },
    { s: "flick", at: T.slA + 8, vol: 0.4, why: "payment: the slip slides out of the envelope", mode: "peak" },
  ],
};
