import React, { useContext } from "react";
import { clamp01 } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, SetWindow, type CamKey } from "../camera";
import { HO } from "../handover";
import { TOTAL_FRAMES } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import { verdictModel, balloonHull, printEnds, plateCorners, balloonAt, BL, PRINT, TIE, type VerdictP } from "../../three/props/verdict";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 8 · THE VERDICT (cream; the film's last place, to its end) — a big green latex balloon printed "$365M", taut on its
// string over a walnut plinth; a flip plate stands on the plinth's top front edge, its plain walnut back to the camera.
//  0 "So, $365 million?" The place trucks in CLOSE on the balloon's print, $365M; the balloon trails on its string as the
//    place travels, swings back past upright as it stops, and settles to a slow sway in the air.
//  1 "Our rating: inflated." The camera eases back to the whole object as the plate tips forward on its hinge, swings down
//    under gravity and lands against the plinth's front ON "inflated" (the caption leaves the word to it: objWords): INFLATED,
//    large, amber #c98a2b. The knock jolts the balloon a little on its string.
//  2 "Send us who to audit next." It holds (the camera breathes, the balloon sways) to the film's end.
// ★ The verdict rates the $365M figure as his pay, never him.
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const C0 = cue(S, 0), C1 = cue(S, 1), INF = word(S, 1, /^Inflated/i);
const FLOOR = 1478, CX = 540, CZ = -110;
const rad = (d: number) => (d * Math.PI) / 180;

// ── THE FLIP PLATE: from upright it tips forward and falls under gravity (ψ'' = −k sin ψ, k solved so it lands ON
//    "inflated"), knocks against the plinth's front, bounces a little and lies still ──
const FALL_N = 15;
const simFlap = (k: number, n = 80) => {
  let psi = Math.PI - 0.05, w = -0.004, hitAt = -1;
  const out = [psi];
  for (let f = 1; f <= n; f++) {
    for (let s = 0; s < 8; s++) {
      const dt = 1 / 8;
      w += -k * Math.sin(psi) * dt;
      if (hitAt >= 0) w *= 1 - 0.08 * dt;
      psi += w * dt;
      if (psi <= 0) {
        psi = 0;
        if (hitAt < 0) hitAt = f - 1 + (s + 1) / 8;
        w = Math.abs(w) < 0.01 ? 0 : -w * 0.2;
      }
    }
    out.push(psi);
  }
  return { out, hitAt };
};
const FLAP = (() => {
  let lo = 0.002, hi = 0.5;
  for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; if (simFlap(m).hitAt > FALL_N) lo = m; else hi = m; }
  return simFlap((lo + hi) / 2).out;
})();
const FLAP_A = INF - FALL_N;
const flapAt = (f: number) => (f <= FLAP_A ? Math.PI : FLAP[Math.min(FLAP.length - 1, f - FLAP_A)]);
/** the frame the plate lies still */
const FLAP_STILL = FLAP_A + FLAP.findIndex((p, i) => i > FALL_N && FLAP.slice(i).every((q) => q === 0));
if (FLAP_STILL < INF) throw new Error("verdict: the plate never comes to rest");

// ── THE BALLOON ON ITS STRING: a damped spring about its tie, driven by the place's own arrival (it trails the travel and
//    swings back past upright as the place stops), a knock as the plate lands; over it a slow breeze; and a slow turn on its
//    own axis ──
const SPAN = 1080 + 300;   // the truck's span (Film.tsx: 1080 + its gap)
const FROM_EST = cueEnd("math", 2) + 4;   // where the arrival begins if the math place ends on its last word (checks only)
const LEAN = rad(13), OM = (2 * Math.PI) / 46, ZETA = 0.2;
const swayCache = new Map<number, Float64Array>();
const swaySim = (from: number) => {
  const hit = swayCache.get(from);
  if (hit) return hit;
  const x = (f: number) => SPAN * (1 - HO.curve(clamp01((f - from) / HO.truck)));
  let peak = 1e-6;
  for (let f = from; f <= from + HO.truck; f++) peak = Math.max(peak, Math.abs(x(f + 0.5) - x(f - 0.5)));
  const arr = new Float64Array(TOTAL_FRAMES + 2);
  let th = 0, w = 0;
  for (let f = 0; f < arr.length; f++) {
    arr[f] = th;
    if (f === INF) w += 0.0035;
    for (let s = 0; s < 4; s++) {
      const dt = 0.25, ff = f + s * dt;
      const target = (LEAN * (x(ff + 0.5) - x(ff - 0.5))) / peak;   // moving left (negative): the crown trails right (negative lean)
      w += (-OM * OM * (th - target) - 2 * ZETA * OM * w) * dt;
      th += w * dt;
    }
  }
  swayCache.set(from, arr);
  return arr;
};
const breeze = (f: number) => rad(1.4) * Math.sin((2 * Math.PI * f) / 92 + 0.7) + rad(0.6) * Math.sin((2 * Math.PI * f) / 43 + 2.1);
const spinAt = (f: number) => rad(5) * Math.sin((2 * Math.PI * f) / 150 + 0.4);
const paramsAt = (f: number, from: number): VerdictP => {
  const a = swaySim(from);
  return { sway: a[Math.max(0, Math.min(a.length - 1, Math.round(f)))] + breeze(f), spin: spinAt(f), flap: flapAt(f) };
};

// ── THE CAMERA: the eye rides with the view, a little up and to the right ──
const EX = 240, EL = 430, ED = 2300;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + EX, y: v.y - EL, D: ED });
/** a plinth-frame point (y up) to the layer (x, layer y, z) */
const toLayer = ([x, y, z]: [number, number, number]) => ({ x: CX + x, y: FLOOR - y, z: CZ + z });
const screenOf = (p: { x: number; y: number; z: number }, v: { x: number; y: number; z: number }) => {
  const q = project(eyeOf(v), p.x, p.y, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
/** a key that puts plinth-frame point `a` at screen (sx, sy) at zoom z (solved: the eye moves with the view) */
const keyOn = (a: [number, number, number], sx: number, sy: number, z: number) => {
  const p = toLayer(a);
  const v = { x: p.x, y: p.y, z };
  for (let i = 0; i < 40; i++) { const s = screenOf(p, v); v.x += (s.x - sx) / z; v.y += (s.y - sy) / z; }
  return { x: v.x, y: v.y, z };
};
const BASE = TIE + BL.LS + BL.KN;
const T_PRINT = Math.acos(1 - (2 * PRINT.y) / BL.HB);
const K0 = keyOn([0, BASE + PRINT.y, balloonAt(T_PRINT)[0]], 540, 1050, 1.45);   // close on the print: $365M
const K1 = keyOn([0, BASE + BL.HB, 0], 540, 704, 1.0);                           // the whole object: balloon, plinth, plate
const STORY: CamKey[] = [
  { at: -9999, ...K0, dur: 1 },
  { at: C1 - 6, ...K1, dur: 40 },   // "Our rating": ease back to the whole object as the plate tips
];
const CAM: CamKey[] = alive(S, STORY, TOTAL_FRAMES, { amp: 0.3 });

// ★ the screen's rules, from the place's first word to the film's end: every hull point (the balloon's crown and upper body,
//   the standing plate's top) below y 662; the plate's face and the balloon's print left of the Reel's buttons (x 940) and
//   above y 1500 wherever they can be read
{
  const bad: string[] = [];
  for (let f = C0; f <= TOTAL_FRAMES; f++) {
    const v = camView(CAM, f), p = paramsAt(f, FROM_EST);
    let top = 1e9;
    for (const q of [...balloonHull(p.sway), ...plateCorners(p.flap)]) top = Math.min(top, screenOf(toLayer(q), v).y);
    if (top < 662) bad.push(`f${f}: top ${Math.round(top)}`);
    for (const q of printEnds(p.sway, p.spin)) {
      const s = screenOf(toLayer(q), v);
      if (s.x > 930 || s.x < 30) bad.push(`f${f}: the print's end at x ${Math.round(s.x)}`);
    }
    if (p.flap < Math.PI / 2) for (const q of plateCorners(p.flap)) {
      const s = screenOf(toLayer(q), v);
      if (s.y > 1495 || (s.x > 935 && s.y > 1000)) bad.push(`f${f}: the plate's corner at ${Math.round(s.x)}, ${Math.round(s.y)}`);
    }
  }
  if (bad.length) throw new Error(`verdict: ${bad.length} frame(s) break the screen's rules: ${bad.slice(0, 8).join("; ")}`);
}

const VD3D = verdictModel({ floor: FLOOR, cx: CX, z: CZ });
const RECT = { x: -380, y: 360, w: 1840, h: 1440 };

const Verdict: React.FC<{ f: number }> = ({ f }) => {
  const win = useContext(SetWindow);
  return (
    <>
      <Light keys={CAM} f={f} ground="cream" pools={[[CX, FLOOR - 420, 780, 640]]} />
      <World keys={CAM} f={f}>
        <Obj s={S} g="balloon">
          <View3D name="verdict" rect={RECT} eye={eyeOf(camView(CAM, f))} make={VD3D} params={paramsAt(f, win.from)} />
        </Obj>
      </World>
    </>
  );
};

const sfx: PlaceSfx[] = [
  { s: "glide", at: INF - 2, end: INF, vol: 0.28, why: "the flip plate swings down on its hinge", mode: "peak" },
  { s: "lowhit", at: INF, vol: 0.45, why: "the plate lands against the plinth: INFLATED", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp: Verdict, align: () => "centre" as const, focus: [CX, FLOOR - 420] as [number, number] },
  done: Math.max(FLAP_STILL, cueEnd(S, 2) + 4),
  cam: CAM,
  sfx,
};
