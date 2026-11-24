import React from "react";
import { clamp01, GLIDE, SOFT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { TOTAL_FRAMES } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import { verdictModel, BAG, BAG_REST, CHQ, STAMP, STAMP_H, PRINT, PANEL, DIE_SEAT, chqPt, bagPt, bagHull, type Pose, type VerdictP } from "../../three/props/verdict";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · THE VERDICT (dark; the film's last place, to its end) — one floor, three real things.
//  0 "To be fair, Tiger never joined LIV." The crane brings the place in CLOSE on a white tour staff bag lying on its side,
//    rolling in from behind on its rims; it slows, rocks back a hair on the clubs' weight and lies still ON "LIV", its panel
//    up: TIGER WOODS over PGA TOUR (plain type, no logos).
//  1 "He stayed with the PGA Tour." It holds on the bag (the camera breathes).
//  2 "So, $800 million?" The camera eases back as the hook's presentation cheque slides in from the right on its own air,
//    touches down and brakes FRONT AND CENTRE before the bag ON "$800": PAY TO THE ORDER OF (blank), $800,000,000, EIGHT
//    HUNDRED MILLION DOLLARS, MEMO LIV GOLF, the signature line empty.
//  3 "Our rating: unsupported." A big rubber stamp swings in from the left, slams down across the cheque (a low hit, a small
//    jolt), holds, lifts and leaves to the right: UNSUPPORTED in red #B23A33 ink, pressed into the board, its word wider than
//    60% of the frame, read ON "unsupported" (the caption leaves the word to it: objWords).
//  4 "Send us who to audit next." It holds to the film's end.
// ★ The verdict rates the $800M FIGURE, never Woods.
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const DBG = (globalThis as unknown as { __vdDebug?: boolean }).__vdDebug;
const FLOOR = 1350;
const LIV = word(S, 0, /^Liv/i), D800 = word(S, 2, /^\$800/), UNS = word(S, 3, /^Unsupported/i);
/** the place has landed (the crane's arrival is over by the first sentence's end) */
const LAND = cueEnd(S, 0) + 1;
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ── THE BAG ROLLS IN: from 720 px behind, rolling without slipping on its rims (turn = travel ÷ the rim's radius), slowing
//    at a constant rate to a stop a hair past its rest ON "LIV", then rocking back onto it on the clubs' weight ──
const R1 = LIV, R0 = R1 - 60, ROCK = 7, ZS = BAG.Z - 720;
const bagZ = (f: number) => {
  if (f <= R0) return ZS;
  if (f <= R1) { const u = (f - R0) / (R1 - R0); return lerp(ZS, BAG.Z + ROCK, 1 - (1 - u) ** 2); }
  return BAG.Z + ROCK * (1 - SOFT(clamp01((f - R1) / 16)));
};
const BAG_STILL = R1 + 16;
const bagRoll = (f: number) => BAG_REST + (bagZ(f) - BAG.Z) / BAG.RC;

// ── THE CHEQUE: from beyond the right edge, gliding on its air a little above the floor, touching down at 80% of the run and
//    braking to rest, turning square as it goes; it is down ON "$800" ──
const T0 = D800 - 18, T1 = D800 + 4;
const TOUCH = Math.round(T0 + 0.8 * (T1 - T0));
const chqPose = (f: number): Pose => {
  const u = clamp01((f - T0) / (T1 - T0)), gl = GLIDE(u);
  return { x: CHQ.x + 1300 * (1 - gl), z: CHQ.z - 24 * (1 - gl), h: 24 * (1 - ss(0, 0.8, u)), yaw: CHQ.yaw - 12 * (1 - gl), visible: f > T0 - 1 };
};
const REST: Pose = { x: CHQ.x, z: CHQ.z, h: 0, yaw: CHQ.yaw, visible: true };

// ── THE STAMP: swings in from the left (decelerating), hangs a beat over its mark, SLAMS down (accelerating), holds on the
//    board, lifts and leaves to the right; the impression is in the paper from the frame the die touches it ──
const C = UNS - 9;   // the die meets the board
const SEAT = CHQ.t + DIE_SEAT + 0.35;
const MARK = chqPt(REST, STAMP.u, STAMP.v, 0);
const YAW = CHQ.yaw - STAMP.rot;   // the canvas turns clockwise for a positive angle: the world turns the other way
type St = VerdictP["st"];
const stAt = (f: number): St => {
  const at = { x: MARK.x, z: MARK.z, yaw: YAW, tiltX: 0, tiltZ: 0 };
  const vis = f >= C - 29;
  if (f < C - 9) {
    const u = clamp01((f - (C - 28)) / 19), e = 1 - (1 - u) ** 3;
    return { x: lerp(MARK.x - 1350, at.x, e), h: lerp(260, 190, e), z: lerp(MARK.z + 70, at.z, e), yaw: lerp(YAW + 14, YAW, e), tiltX: lerp(6, 0, e), tiltZ: lerp(-15, -2, e), visible: vis };
  }
  if (f < C) {
    const u = (f - (C - 9)) / 9, e = u * u;
    return { ...at, h: lerp(190, SEAT, e), tiltZ: lerp(-2, 0, e), visible: vis };
  }
  if (f <= C + 3) return { ...at, h: SEAT, visible: vis };
  // the lift: up and back off the word (away from the eye, so it clears the print at once), then away to the right
  if (f <= C + 8) {
    const u = (f - (C + 3)) / 5, e = 1 - (1 - u) ** 2;
    return { ...at, x: at.x + 90 * e, z: at.z - 150 * e, h: lerp(SEAT, 150, e), tiltZ: 6 * e, tiltX: -8 * e, visible: vis };
  }
  const u = clamp01((f - (C + 8)) / 16), e = u * u * (2 - u);
  return { ...at, x: at.x + 90 + 1350 * e, z: at.z - 150 - 60 * e, h: lerp(150, 200, e), tiltZ: 6 + 8 * e, tiltX: -8, yaw: YAW - 12 * e, visible: f <= C + 25 };
};
const paramsAt = (f: number): VerdictP => ({ roll: bagRoll(f), bz: bagZ(f), chq: chqPose(f), stamped: f >= C, st: stAt(f) });

// ── THE CAMERA: the eye rides with the view, up and a little right, looking down onto the floor ──
const EX = 100, EL = 1150, ED = 2000;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + EX, y: v.y - EL, D: ED });
type P3 = { x: number; h: number; z: number };
const scrOf = (p: P3, v: { x: number; y: number; z: number }) => {
  const q = project(eyeOf(v), p.x, FLOOR - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** a key that puts world point p at screen (sx, sy) at zoom z (solved: the eye moves with the view) */
const keyOn = (p: P3, sx: number, sy: number, z: number) => {
  const v = { x: p.x, y: FLOOR - p.h, z };
  for (let i = 0; i < 40; i++) { const s = scrOf(p, v); v.x += (s.x - sx) / z; v.y += (s.y - sy) / z; }
  return { x: v.x, y: v.y, z };
};
const PANEL_MID = bagPt((PANEL.x0 + PANEL.x1) / 2, Math.PI, BAG.RB, BAG_REST, BAG.Z);
const CHQ_MID = chqPt(REST, CHQ.w / 2, CHQ.d / 2);
const STORY: CamKey[] = [
  { at: -9999, ...keyOn(PANEL_MID, 532, 1080, 1.36), dur: 1 },   // close on the bag's panel: TIGER WOODS, PGA TOUR
  { at: D800 - 24, ...keyOn(CHQ_MID, 512, 1215, 0.98), dur: 36 }, // "So, $800 million?": back onto the cheque, the bag behind
  { at: C - 30, ...keyOn(MARK, 510, 1232, 1.02), dur: 34 },     // "Our rating": a little in, onto the stamp's mark
];
const CAM: CamKey[] = alive(S, STORY, TOTAL_FRAMES, { amp: 0.28 });

// ★ the screen's rules, from the landing to the film's end: nothing above y 662 (the caption band); print that can be read
//   (the bag's panel once it lies still, the cheque's print once it is down, the impression once pressed) left of x 930 where
//   it lies in y 1000–1700, above y 1495 and clear of the left edge; and the subjects big
{
  const bad: string[] = [];
  const chqBox = (p: Pose, b: readonly [number, number, number, number]) => [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]].map(([u, v]) => chqPt(p, u, v));
  const a = rad(STAMP.rot), ca = Math.cos(a), sa = Math.sin(a);
  const imp = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => {
    const dx = (i * (STAMP.w - 14)) / 2, dy = (j * (STAMP.d - 14)) / 2;
    return chqPt(REST, STAMP.u + dx * ca - dy * sa, STAMP.v + dx * sa + dy * ca);
  });
  const panel: P3[] = [];
  for (const x of [PANEL.x0 + 20, PANEL.x1 - 20]) for (const ph of [Math.PI - PANEL.half * 0.7, Math.PI + PANEL.half * 0.7]) panel.push(bagPt(x, ph, BAG.RB, BAG_REST, BAG.Z));
  const readable = (f: number, what: string, pts: P3[], v: { x: number; y: number; z: number }) => {
    for (const p of pts) {
      const s = scrOf(p, v);
      if (s.y > 1495) bad.push(`f${f}: ${what} at y ${Math.round(s.y)}`);
      else if (s.y > 1000 && s.x > 930) bad.push(`f${f}: ${what} at x ${Math.round(s.x)} (y ${Math.round(s.y)})`);
      if (s.x < 36) bad.push(`f${f}: ${what} cut at the left (x ${Math.round(s.x)})`);
    }
  };
  for (let f = LAND; f <= TOTAL_FRAMES; f++) {
    const v = camView(CAM, f), p = paramsAt(f);
    const tops: P3[] = bagHull(p.bz);
    if (p.chq.visible) tops.push(...chqBox(p.chq, [0, 0, CHQ.w, CHQ.d]));
    if (p.st.visible) for (const x of [-STAMP.w / 2 - 20, 0, STAMP.w / 2 + 20]) for (const z of [-90, 90]) tops.push({ x: p.st.x + x, h: p.st.h + STAMP_H + 26, z: p.st.z + z });
    for (const t of tops) { const s = scrOf(t, v); if (s.x > -60 && s.x < 1140 && s.y < 662) { bad.push(`f${f}: an object's top at y ${Math.round(s.y)} (x ${Math.round(s.x)})`); break; } }
    if (f >= BAG_STILL) readable(f, "the bag's panel", panel, v);
    if (f >= T1) readable(f, "the cheque's print", chqBox(REST, PRINT.cheque), v);
    if (f >= C + 6) readable(f, "the impression", imp, v);
  }
  if (DBG) console.log(bad.filter((_, i) => i % 6 === 0).join("\n"));
  if (bad.length && !DBG) throw new Error(`verdict: ${bad.length} screen-rule breaks:\n  ` + [...new Set(bad.map((b) => b.replace(/^f\d+: /, "").replace(/\d+/g, "#")))].slice(0, 6).join("\n  ") + `\n  first: ${bad[0]}\n  last: ${bad[bad.length - 1]}`);
  // the subjects big: the panel's type fills most of the width on "Tiger"; the cheque over 70% on "$800"; the stamped word
  // over 60% of the frame on "unsupported"
  const wide = (f: number, l: P3, r: P3) => { const v = camView(CAM, f); return scrOf(r, v).x - scrOf(l, v).x; };
  const wb = wide(LIV, bagPt(PANEL.x0 + 40, Math.PI, BAG.RB, BAG_REST, BAG.Z), bagPt(PANEL.x1 - 40, Math.PI, BAG.RB, BAG_REST, BAG.Z));
  const wc = wide(D800 + 8, chqPt(REST, 0, CHQ.d / 2), chqPt(REST, CHQ.w, CHQ.d / 2));
  const half = (STAMP.w - 14 - 58) / 2;
  const ww = Math.min(...[UNS, UNS + 20, TOTAL_FRAMES].map((f) => wide(f, chqPt(REST, STAMP.u - half * ca, STAMP.v - half * sa), chqPt(REST, STAMP.u + half * ca, STAMP.v + half * sa))));
  if (DBG) console.log({ wb, wc, ww });
  if (!DBG && wb < 600 || wc < 760 || ww < 0.6 * 1080 + 8) throw new Error(`verdict: too small on screen (the bag's type ${Math.round(wb)}, the cheque ${Math.round(wc)}, UNSUPPORTED ${Math.round(ww)} px)`);
}
function rad(d: number) { return (d * Math.PI) / 180; }

const M3D = verdictModel({ floor: FLOOR });
/** the view's canvas: everything the objects and their shadows can reach, and the camera's viewport with a margin */
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 160 / v.z;
  const x0 = Math.min(-420, v.x - 540 / v.z - m), x1 = Math.max(1500, v.x + 540 / v.z + m);
  const y0 = Math.min(330, v.y - 960 / v.z - m), y1 = Math.max(1730, Math.min(v.y + 960 / v.z + m, 2100));
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
// the light pools, fixed in the world behind the bag and under the cheque
const LP = (p: P3) => { const q = project(eyeOf(STORY[1]), p.x, FLOOR - p.h, p.z); return [q.x, q.y] as const; };
const [bx, by] = LP(PANEL_MID), [cx, cy] = LP(CHQ_MID);

const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[bx, by + 20, 700, 300], [cx, cy, 760, 420]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="floor">
        <View3D name="verdict" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

// the press jolts the place a little (its objects and captions): a few px, gone in a third of a second
const shake = (f: number) => {
  const t = f - C;
  if (t < 0 || t > 10) return { x: 0, y: 0 };
  return { x: 0, y: 3.2 * Math.exp(-t / 2.2) * Math.cos(t * 1.9) };
};

const SFX: PlaceSfx[] = [
  { s: "glide", at: R0 + 22, end: R1, vol: 0.3, why: "verdict: the bag rolls in on its rims", mode: "peak" },
  { s: "glide2", at: T0 + 4, end: TOUCH, vol: 0.26, why: "verdict: the cheque slides in on its air", mode: "peak" },
  { s: "thump", at: TOUCH, vol: 0.4, why: "verdict: the foam-board cheque touches down", mode: "peak" },
  { s: "lowhit", at: C, vol: 0.55, why: "verdict: the stamp presses UNSUPPORTED into the cheque", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp: Verdict, align: () => "centre" as const, focus: [cx, cy] as [number, number], shake },
  done: Math.max(C + 26, cueEnd(S, 4) + 4),
  cam: CAM,
  sfx: SFX,
};
