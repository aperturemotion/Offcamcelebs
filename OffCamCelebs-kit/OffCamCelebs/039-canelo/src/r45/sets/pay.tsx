import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import { payModel, PAY_FLOOR, CP, C1, C2, PRINT, poseC1, poseC2, sheetPt, corners, padFar, type PayTiming } from "../../three/props/pay";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · THE PAY (cream) — one sentence, three sheets on one table.
//  0 "His own lawsuit spells out the pay: at least $35 million a fight, $15 million for the first."
//    The truck brings the place in CLOSE on the complaint's cover page (legal-blue back, pleading paper): UNITED STATES
//    DISTRICT COURT, ÁLVAREZ v. GOLDEN BOY PROMOTIONS, DAZN, COMPLAINT, read on "His own lawsuit". On "$35" a big pale-green
//    cheque slides in from beyond the right edge, glides on its air, touches down and brakes across the complaint's lower
//    half as the camera pulls back onto it: AT LEAST $35,000,000, memo PER FIGHT (read through "a fight"). On "$15" a
//    smaller pale-blue cheque slides in from the left and lands in front of it as the camera eases back over both:
//    $15,000,000, memo FIRST FIGHT. The figures are never summed; the next hand-over carries the table away.
// ═══════════════════════════════════════════════════════════════════════════
const S = "pay" as const;
const D35 = word(S, 0, /^\$35/), D15 = word(S, 0, /^\$15/);

// ── the actions' frames: each cheque is readable as its figure is said ──
export const T: PayTiming = { c1: [D35 - 14, D35 + 4], c2: [D15 - 14, D15 + 4] };
const DONE = Math.max(cueEnd(S, 0) + 4, T.c2[1] + 2);

// ── the camera: the eye rides with the view (up and a little right, looking down onto the table) ──
const EL = 1300;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + 240, y: v.y - EL, D: 1800 });
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: PAY_FLOOR - h };
  for (let i = 0; i < 14; i++) {
    const q = project(eyeOf(v), x, PAY_FLOOR - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const REST = { x: CP.x, z: CP.z, yaw: CP.yaw, h: CP.h };
const TITLE = sheetPt(CP, REST, (PRINT.title[0] + PRINT.title[2]) / 2, (PRINT.title[1] + PRINT.title[3]) / 2);
const C1MID = sheetPt(C1, { ...C1 }, C1.w / 2, C1.d / 2 - 30);
const BOTH = sheetPt(C2, { ...C2 }, C2.w / 2, 10);
const STORY: CamKey[] = [
  { at: -9999, ...aim(TITLE.x - 10, TITLE.h, TITLE.z, 1.62, 540, 1020), dur: 1 },   // close on the complaint's caption
  { at: D35 - 16, ...aim(C1MID.x - 14, C1MID.h, C1MID.z, 1.2, 540, 1030), dur: 36 },  // "$35": back onto the big cheque
  { at: D15 - 14, ...aim(BOTH.x + 64, BOTH.h, BOTH.z, 1.16, 540, 1226), dur: 36 },     // "$15": back over both cheques
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

// ★ the screen's rules, every frame the place can show: no sheet reaches the caption band (y < 662); once a cheque has landed,
//   its print stays left of x 930 where it lies in y 1000–1700, and above the Reel's caption strip (y 1490)
const scr = (f: number, p: { x: number; h: number; z: number }) => {
  const v = camView(CAM, f), q = project(eyeOf(v), p.x, PAY_FLOOR - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const box = (s: { w: number; d: number }, b: readonly [number, number, number, number]) => [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]] as const;
const BAD: string[] = [];
const PADFAR = padFar();
const bad = (m: string) => { BAD.push(m); };
for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
  const tops = [...corners({ w: CP.w + 16, d: CP.d + 28 }, { ...REST, z: CP.z - 11 }), ...PADFAR];
  const p1 = poseC1(T, f), p2 = poseC2(T, f);
  if (p1.visible) tops.push(...corners(C1, p1));
  if (p2.visible) tops.push(...corners(C2, p2));
  for (const t of tops) {
    const s = scr(f, t);
    if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`pay: a sheet's far edge reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
  const ink: { x: number; h: number; z: number }[] = [];
  if (f >= T.c1[1]) ink.push(...box(C1, PRINT.c1).map(([u, v]) => sheetPt(C1, p1, u, v)));
  if (f >= T.c2[1]) ink.push(...box(C2, PRINT.c2).map(([u, v]) => sheetPt(C2, p2, u, v)));
  for (const p of ink) {
    const s = scr(f, p);
    if (s.y > 1490) bad(`pay: a cheque's print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    if (s.y > 1000 && s.x > 930) bad(`pay: a cheque's print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
    if (s.x < 40) bad(`pay: a cheque's print is cut at the left edge (x ${Math.round(s.x)}) at f${f}`);
  }
}
if (BAD.length) throw new Error(`${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "")))].slice(0, 6).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
// ★ the subjects are big: the caption block fills most of the width as it is read, the big cheque > 70% of the width on "$35",
//   the small one > 50% once both are in
{
  const wide = (f: number, s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }, v: number) =>
    scr(f, sheetPt(s, p, s.w, v)).x - scr(f, sheetPt(s, p, 0, v)).x;
  const w0 = wide(cue(S, 0) + 10, CP, REST, 200), w1 = wide(D35 + 20, C1, C1, C1.d / 2), w2 = wide(DONE, C2, C2, C2.d / 2);
  if (w0 < 640 || w1 < 740 || w2 < 520) throw new Error(`pay: too small on screen (complaint ${Math.round(w0)}, big cheque ${Math.round(w1)}, small cheque ${Math.round(w2)} px)`);
}

const M3D = payModel(T);
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, PAY_FLOOR - 700), y1 = Math.min(v.y + 960 / v.z + m, PAY_FLOOR + 700);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const LP = (p: { x: number; h: number; z: number }) => { const q = project(eyeOf(STORY[2]), p.x, PAY_FLOOR - p.h, p.z); return [q.x, q.y] as const; };
const [tx, ty] = LP(TITLE), [c1x, c1y] = LP(C1MID), [c2x, c2y] = LP(BOTH);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[tx, ty, 620, 420], [c1x, c1y, 700, 380], [c2x, c2y + 60, 620, 340]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="table">
        <View3D name="pay" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: T.c1[0] + 4, vol: 0.3, why: "pay: the big cheque slides in from the right", mode: "peak" },
  { s: "paper", at: Math.round(T.c1[0] + 0.8 * (T.c1[1] - T.c1[0])), vol: 0.45, why: "pay: the big cheque touches down on the complaint", mode: "peak" },
  { s: "paper", at: Math.round(T.c2[0] + 0.8 * (T.c2[1] - T.c2[0])), vol: 0.4, why: "pay: the small cheque slides in and lands on the table", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [c1x, c1y] },
  done: DONE, cam: CAM, sfx: SFX,
};
