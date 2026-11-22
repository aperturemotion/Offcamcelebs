import React from "react";
import { ramp, clamp01, INOUT, SETTLE } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { TOTAL_FRAMES } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import { verdictModel, hullPoints, anchors, poseAt, centreline, FEED_MAX, PRINT, RL, LID, NS, type VerdictP } from "../../three/props/verdict";
import type { PlaceDef } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 8 · THE VERDICT (cream; the film's last place, to its end) — a compact white POS receipt printer on the counter, its
// receipt, and a rubber stamp.
//  0 "So, $1.35 billion?" The place lands CLOSE on the printer's exit slot. The paper-feed LED blinks and the receipt feeds up
//    in bursts: T-MOBILE / MINT MOBILE ACQUISITION, then, on "$1.35", the total $1,350,000,000 (the camera follows it up).
//  1 "Every dollar got paid." On "dollar" PAID IN FULL prints and the rest of the receipt runs out (the camera rises with it);
//    after "paid" the auto-cutter behind the tear bar cuts it off.
//  2 "Our rating: legit." The free receipt tips back over the slot's lip and lands face up on the printer's flat cover as the
//    camera cranes up to look down on it; the stamp glides in from beyond the left edge, squares over the receipt, presses
//    LEGIT in deep green below PAID IN FULL on "legit" (the caption leaves the word to the stamp: objWords), lifts and leaves.
//  3 "Send us who to audit next." The camera eases back a little (the receipt still about half the frame's width, the
//    printer's top under it) and holds to the end.
// ★ The verdict rates the $1.35B figure (the receipt's total), not him. No photo here (none is natural on a receipt).
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const SO = cue(S, 0), FIG = word(S, 0, /^\$1/), DOLLAR = word(S, 1, /^dollar/), PAID = word(S, 1, /^paid/);
const RATING = cue(S, 2), LEGIT = word(S, 2, /^Legit/i), SEND = cue(S, 3);
/** the frame the place's last action is settled (the film runs this place to its end) */
export const VD_DONE = cueEnd(S, 3) + 4;

// ── THE FEED: three bursts (the header, the total, the rest), each accelerating from rest and stopping at rest ──
const BURSTS: [number, number, number, number][] = [
  [SO + 3, SO + 13, 0, 116],
  [FIG + 4, FIG + 18, 116, 186],
  [DOLLAR + 2, DOLLAR + 16, 186, FEED_MAX],
];
const feedAt = (f: number) => {
  let v = 0;
  for (const [a, b, l0, l1] of BURSTS) { if (f <= a) break; v = l0 + (l1 - l0) * INOUT(clamp01((f - a) / (b - a))); }
  return v;
};
const CUT = PAID + 2;
/** the fall: it tips back onto the cover over 14 f (accelerating, as a tipping sheet does), then slides and settles over 7 */
const FALL_A = CUT + 1, FALL_B = FALL_A + 14, FALL_C = FALL_B + 7;
const fallAt = (f: number) => (f <= FALL_A ? 0 : f < FALL_B ? (f - FALL_A) / (FALL_B - FALL_A) : 1 + clamp01((f - FALL_B) / (FALL_C - FALL_B)));
const printing = (f: number) => BURSTS.some(([a, b]) => f > a - 3 && f < b + 1);

// ── THE STAMP: in from beyond the left edge, squared over the receipt, pressed so its ink lands ON "legit" (52.59 s), lifted
//    and drawn away ──
export const VD = {
  inA: RATING - 3, overA: LEGIT - 9, press: LEGIT, holdTo: LEGIT + 4, liftTo: LEGIT + 10, goneAt: LEGIT + 22,
} as const;
const stampT = (f: number) => {
  if (f <= VD.inA) return 0;
  if (f < VD.overA) return ramp(f, VD.inA, VD.overA, (t) => t);
  if (f < VD.press) return 1 + ramp(f, VD.overA, VD.press, (t) => t);
  if (f < VD.holdTo) return 2;
  if (f < VD.liftTo) return 2 + ramp(f, VD.holdTo, VD.liftTo, (t) => t);
  if (f < VD.goneAt) return 3 + ramp(f, VD.liftTo, VD.goneAt, (t) => t);
  return 4;
};

// ── THE PLACE ──
const FLOOR = 1450, CX = 540, CZ = -40;
const YAW = (f: number) => -3 + 5 * INOUT(clamp01((f - SO) / (TOTAL_FRAMES - SO)));
/** a printer-local point (y up) to the layer (x, layer y, z), the printer turned by yaw (deg) */
const toLayer = (x: number, y: number, z: number, yaw: number) => {
  const a = (yaw * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  return { x: CX + x * c + z * s, y: FLOOR - y, z: CZ - x * s + z * c };
};
/** ★ the eye rides with the camera (up and to the right of the frame's centre); on the cut it cranes up to look down on the
 *  cover the receipt lands on, and eases a little lower for the cover frame */
const EL0 = 640, EL3 = 1420, EL4 = 1220;
const eyeOf = (v: { x: number; y: number }, el: number): Eye => ({ x: v.x + 380, y: v.y - el, D: 2000 });
/** where a layer point lands on SCREEN for a view and an eye elevation */
const screenOf = (p: { x: number; y: number; z: number }, v: { x: number; y: number; z: number }, el: number) => {
  const q = project(eyeOf(v, el), p.x, p.y, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** a key that puts printer-local point `a` at screen (sx, sy) at zoom z, with the eye at elevation el (solved: the eye moves
 *  with the view) */
const keyOn = (a: { x: number; y: number; z: number }, sx: number, sy: number, z: number, el: number, yaw: number) => {
  const p = toLayer(a.x, a.y, a.z, yaw);
  const v = { x: p.x, y: p.y, z };
  for (let i = 0; i < 30; i++) { const s = screenOf(p, v, el); v.x += (s.x - sx) / z; v.y += (s.y - sy) / z; }
  return { x: v.x, y: v.y, z };
};
/** the point `u` px down the receipt from its top edge, standing with `out` px out (printer local) */
const onReceipt = (out: number, u: number) => {
  const pose = poseAt(out, 0), cl = centreline(pose);
  const j = Math.max(0, Math.min(NS, Math.round(((pose.len - u) / pose.len) * NS)));
  return { x: 0, y: cl[j].y, z: cl[j].z };
};
const A = anchors();
const mid = (r: readonly [number, number]) => (r[0] + r[1]) / 2;
const K0 = keyOn({ ...A.slot, y: LID + 60 }, 540, 1080, 1.8, EL0, YAW(SO));
const K1 = keyOn(onReceipt(186, mid(PRINT.figure)), 520, 1000, 1.95, EL0, YAW(FIG + 4));
const K2 = keyOn(onReceipt(FEED_MAX, (mid(PRINT.figure) + mid(PRINT.paid)) / 2), 520, 1040, 1.62, EL0, YAW(DOLLAR));
const K3 = keyOn(A.impression, 520, 1270, 2.4, EL3, YAW(LEGIT));
const K4 = keyOn(A.impression, 525, 1200, 1.85, EL4, YAW(SEND + 30));
const STORY: CamKey[] = [
  { at: -9999, ...K0, dur: 1 },                 // the place lands close on the slot
  { at: FIG + 4, ...K1, dur: 32 },              // "$1.35": follow the total up as it prints
  { at: cue(S, 1), ...K2, dur: 30 },            // "Every dollar": rise with PAID IN FULL
  { at: FALL_A + 8, ...K3, dur: 30 },           // the receipt tipping back: crane up and in onto it, for the stamp
  { at: VD.goneAt, ...K4, dur: 40 },            // "Send us who to audit next": ease back to the whole printer
];
export const VD_CAM: CamKey[] = alive("verdict", STORY, TOTAL_FRAMES, { amp: 0.35 });
const KEYS = STORY.slice(1);
/** the eye's elevation at f: it follows key 3's and key 4's own progress */
const elAt = (f: number) => {
  const k3 = KEYS[2], k4 = KEYS[3];
  // ★ the crane lags the move by 8 f, so the eye is still low while the receipt's far end swings back high over the cover
  return EL0 + (EL3 - EL0) * SETTLE(clamp01((f - k3.at - 8) / (k3.dur - 8))) + (EL4 - EL3) * SETTLE(clamp01((f - k4.at) / k4.dur));
};
const eyeAt = (f: number) => eyeOf(camView(VD_CAM, f), elAt(f));

const paramsAt = (f: number): VerdictP => ({
  feed: feedAt(f), fall: fallAt(f), stamp: stampT(f), ink: f >= VD.press ? 1 : 0,
  busy: printing(f) ? (Math.floor(f / 3) % 2 ? 1 : 0.15) : 0, yaw: YAW(f),
});

// ★ the caption band holds and the Reel's right-hand buttons stay clear: every hull point below y 660 on screen at every frame
//   from the place's landing, and the receipt's print left of x 940
export const VD_TOP: number[] = [];
for (let f = SO; f <= TOTAL_FRAMES; f++) {
  const v = camView(VD_CAM, f), el = elAt(f), p = paramsAt(f);
  let top = 1e9;
  for (const [x, y, z] of hullPoints(p)) top = Math.min(top, screenOf(toLayer(x, y, z, p.yaw), v, el).y);
  VD_TOP.push(Math.round(top));
}
{
  const bad = VD_TOP.map((y, i) => [SO + i, y]).filter(([, y]) => y < 662);
  if (bad.length && !(globalThis as { __vdNoThrow?: boolean }).__vdNoThrow) throw new Error(`verdict: the objects' top reaches above y 662 on screen at ${bad.map(([f, y]) => `f${f}:${y}`).join(" ")}`);
}
if (RL - FEED_MAX < 0) throw new Error("verdict: the receipt is shorter than its feed");

const VD3D = verdictModel({ floor: FLOOR, cx: CX, z: CZ });

const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={VD_CAM} f={f} ground="cream" pools={[[CX, FLOOR - 360, 820, 600]]} />
    <World keys={VD_CAM} f={f}>
      <Obj s={S} g="printer">
        <View3D name="verdict" rect={{ x: -460, y: 200, w: 2000, h: 1800 }} eye={eyeAt(f)} make={VD3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp: Verdict, align: () => "centre" as const, focus: [CX, FLOOR - 420] as [number, number] },
  done: VD_DONE,
  cam: VD_CAM,
  // ★ 2026-11-22 re-score: a real receipt printer (Openverse CC0), the pack's paper tear, a soft thump and low weight on LEGIT
  sfx: [
    ...BURSTS.map(([a, b], i) => ({ s: "printer" as const, at: a, end: b + 2, vol: 0.38, why: `the printer feeds the receipt (burst ${i + 1})`, mode: "within" as const })),
    { s: "ptear", at: CUT, vol: 0.35, why: "the auto-cutter cuts the receipt at the tear bar", mode: "within" },
    { s: "wlow", at: VD.inA + 7, end: VD.overA, vol: 0.32, why: "the stamp glides in over the receipt", mode: "peak" },
    { s: "thump", at: VD.press, vol: 0.65, why: "the stamp presses LEGIT", mode: "within" },
    { s: "lowhit", at: VD.press, vol: 0.35, why: "LEGIT", mode: "within" },
    { s: "cmouse", at: VD.holdTo + 1, vol: 0.22, why: "the stamp lifts off the receipt", mode: "within" },
  ],
};
