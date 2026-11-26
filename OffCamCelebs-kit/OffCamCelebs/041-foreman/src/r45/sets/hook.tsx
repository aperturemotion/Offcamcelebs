import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { THREE } from "../../three/stage";
import {
  hookModel, viewMatrix, toLayer, HOOK_EYE, BASE, BACK_TOP, DRW, BAND, BAND_TOP, BRICK_TOP, EXTRA, PIVOT, UP_TIP, STEAK, STEAK_OUT,
  POOL, plateW, lidAngle, squash, liftAt, tipAt, pullAt, pullPeak, extraPose, wispAt, type HookT, type HookP,
} from "../../three/props/hook";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (dark) — the grill that pays. ★ THE BRIEF: a real object in motion from frame 1, no number on screen
// before 2.0 s, the figure landing on an object as it is said.
//  0 "George Foreman said his grill made him more than $200 million." Frame 1: a countertop contact grill on a dark stone
//    counter, a thick raw ribeye on its ribbed lower plate, its lid already falling about its hinge pin (released from 70°,
//    under gravity). The camera rides down with it; the lid's plate meets the back of the steak, its floating hinge rides
//    up its slots and the lid lands level on the steak on "grill" (the steak gives under it). Steam starts to rise from the
//    seam. On "$200" (2.41 s) the drip drawer under the front of the base slides out toward the camera as the camera cranes
//    up over it: it is full of banded $100 bundles, a kraft band across them printed $200,000,000.
//  1 "Much more, he said." Two more bundles are tossed onto the pile, from the left on "Much", from the right on "more".
//  2 "We checked the filings." The camera holds, breathing, for the hand-over.
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
const fail = (msg: string) => { if ((globalThis as { __hookNoThrow?: boolean }).__hookNoThrow) console.log("CHECK:", msg); else throw new Error(msg); };
const GRILL = word(S, 0, /^grill/), D200 = word(S, 0, /^\$200/);
const MUCH = word(S, 1, /^Much/), MORE = word(S, 1, /^more/);
const DONE = cueEnd(S, 2) + 4;
const LAST = DONE + 64;

// ── the actions' frames ──
export const T: HookT = {
  close: GRILL + 1,
  pull: [Math.max(61, D200 - 11), D200 + 9],
  extra: [[MUCH + 2, MUCH + 8], [MORE + 3, MORE + 9]],
};

// ══ THE REAL CAMERA: keyed in spherical terms round a target (azimuth from +z toward +x, elevation, distance) ══
type Key = { f: number; az: number; el: number; R: number; t: [number, number, number]; hold?: boolean };
const KEYS: Key[] = [
  { f: -30, az: 26, el: 25, R: 1720, t: [0, 205, -30] },
  { f: T.close, az: 18, el: 27, R: 1420, t: [0, 150, 30] },
  { f: T.pull[0] - 4, az: 15, el: 29, R: 1360, t: [0, 140, 60] },
  { f: T.pull[1] + 14, az: 7, el: 44, R: 1180, t: [0, 100, 250], hold: true },
  { f: MUCH - 14, az: 6, el: 44, R: 1170, t: [0, 100, 252], hold: true },
  { f: MORE + 22, az: 3, el: 42, R: 1240, t: [0, 108, 246], hold: true },
  { f: LAST + 10, az: -3, el: 40, R: 1215, t: [0, 108, 242] },
];
const PARAMS = (k: Key) => [k.az, k.el, k.R, ...k.t];
const herm = (f: number) => {
  let i = 0;
  while (i < KEYS.length - 2 && f > KEYS[i + 1].f) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  const t = Math.max(0, Math.min(1, (f - a.f) / (b.f - a.f))), dt = b.f - a.f;
  const tan = (j: number) => {
    const k = KEYS[j];
    if (k.hold || j === 0 || j === KEYS.length - 1) return PARAMS(k).map(() => 0);
    const p = PARAMS(KEYS[j - 1]), n = PARAMS(KEYS[j + 1]), d = KEYS[j + 1].f - KEYS[j - 1].f;
    return p.map((v, q) => (n[q] - v) / d);
  };
  const A = PARAMS(a), B = PARAMS(b), ta = tan(i), tb = tan(i + 1);
  const h00 = 2 * t ** 3 - 3 * t ** 2 + 1, h10 = t ** 3 - 2 * t ** 2 + t, h01 = -2 * t ** 3 + 3 * t ** 2, h11 = t ** 3 - t ** 2;
  return A.map((v, q) => h00 * v + h10 * dt * ta[q] + h01 * B[q] + h11 * dt * tb[q]);
};
const D2R = Math.PI / 180;
export const camAt = (f: number) => {
  const [az, el, R, tx, ty, tz] = herm(f);
  const c = [tx + R * Math.sin(az * D2R) * Math.cos(el * D2R), ty + R * Math.sin(el * D2R), tz + R * Math.cos(az * D2R) * Math.cos(el * D2R)];
  return { c, t: [tx, ty, tz] };
};

// ══ THE FRAME ══
const STORY: CamKey[] = [{ at: -9999, x: 540, y: 960, z: 1, dur: 1 }];
const CAM: CamKey[] = alive(S, STORY, LAST, { amp: 0.16 });
const Vm = new THREE.Matrix4();
const scr = (f: number, p: readonly number[]) => {
  const v = camView(CAM, f), c = camAt(f);
  viewMatrix(c.c, c.t, Vm);
  const l = toLayer(Vm, p);
  return { x: 540 + (l.x - v.x) * v.z, y: 960 + (l.y - v.y) * v.z, s: l.s };
};
const paramsAt = (f: number): HookP => ({
  f, cam: camAt(f), th: lidAngle(T, f), lift: liftAt(T, f), sq: squash(T, f), pull: pullAt(T, f),
  ex: [extraPose(T, 0, f), extraPose(T, 1, f)],
});

// ══ GEOMETRY THE CHECKS PROJECT ══
type P3 = [number, number, number];
/** a point of the lid (its shut pose's plate-frame coordinates) at frame f */
const lidPt = (f: number, x: number, yl: number, zl: number): P3 => {
  const th = lidAngle(T, f), lift = liftAt(T, f);
  const dy = yl - PIVOT.yl, dz = zl - PIVOT.zl;
  return plateW(x, PIVOT.yl + lift + dy * Math.cos(th) + dz * Math.sin(th), PIVOT.zl - dy * Math.sin(th) + dz * Math.cos(th));
};
const box8 = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number): P3[] =>
  [x0, x1].flatMap((x) => [y0, y1].flatMap((y) => [z0, z1].map((z) => [x, y, z] as P3)));
const lidPts = (f: number) => [-246, 246].flatMap((x) => [30.2, 93.2].flatMap((y) => [-206, 186, 226].map((z) => lidPt(f, x, y, z))));
const basePts = () => box8(-BASE.X, BASE.X, 0, BACK_TOP, BASE.Z0, BASE.Z1);
const drawerPts = (f: number) => { const p = pullAt(T, f); return box8(-DRW.X - 1, DRW.X + 1, DRW.BOT, DRW.TOP, DRW.Z0 + p, DRW.Z1 + 8 + p); };
const extraPts = (f: number, k: 0 | 1): P3[] => {
  const e = extraPose(T, k, f), p = pullAt(T, f);
  if (!e.vis) return [];
  const a = (e.yaw * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  return [-124, 124].flatMap((x) => [-56, 56].flatMap((z) => [0, 30].map((y) => [e.x + x * c + z * s, e.y + y - 6, e.z + p - x * s + z * c] as P3)));
};
const bandPts = (f: number) => { const p = pullAt(T, f); return box8(-BAND.zIn - 1, BAND.zIn + 1, BAND_TOP, BAND_TOP, BAND.zc - BAND.w / 2 + p, BAND.zc + BAND.w / 2 + p); };
const steamPts = (f: number): P3[] => {
  const out: P3[] = [];
  for (let k = 0; k < 7; k++) {
    const w = wispAt(T, k, f, liftAt(T, f));
    if (w.op < 0.03) continue;
    // the strands' top quarter has faded out (the texture's own gradient): the visible top is 0.8 of the plane's height up
    out.push([w.x, w.y + 0.3 * 230 * w.sc, w.z]);
  }
  return out;
};

// ══ ★ THE CHECKS, at module load ════════════════════════════════════════════════════════════════════
// (1) NO NUMBER BEFORE 2 s: the drawer (and the band in it) stays shut under the deck until f60.
if (T.pull[0] < 60 || pullAt(T, 59) > 0) fail(`hook: the drawer starts out at f${T.pull[0]}, before 2.0 s`);
// (2) THE LID NEVER ENTERS THE STEAK: the upper plate's rib tips over every point of the steak's outline, every frame; the
//     lid lands level (its angle 0) on "grill"; the pin stays inside its slot
for (let f = -20; f <= LAST; f += 0.25) {
  const th = lidAngle(T, f), lift = liftAt(T, f), top = STEAK.y + STEAK.t * squash(T, f);
  for (const [, y] of STEAK_OUT) { const zl = STEAK.zl - y; if (tipAt(th, zl) + lift < top + 0.3) fail(`hook: the lid's ribs enter the steak at f${f}`); }
  if (PIVOT.yl + lift > 92 - 6) fail(`hook: the hinge pin rides out of its slot at f${f} (lift ${lift.toFixed(1)})`);
}
if (lidAngle(T, T.close) !== 0 || lidAngle(T, T.close - 1) <= 0) fail("hook: the lid does not land on its frame");
void UP_TIP;
// (3) THE CAPTION BAND: nothing of the place above y 662 on screen, every frame (the open lid, the steam, the tossed bundles)
for (let f = 0; f <= LAST; f++) {
  const pts: [string, P3[]][] = [["lid", lidPts(f)], ["base", basePts()], ["drawer", drawerPts(f)], ["steam", steamPts(f)], ["bundle", [...extraPts(f, 0), ...extraPts(f, 1)]]];
  for (const [k, ps] of pts) for (const p of ps) {
    const s = scr(f, p);
    if (s.x > -40 && s.x < 1120 && s.y < 662) fail(`hook: the ${k} reaches y ${Math.round(s.y)} (x ${Math.round(s.x)}) at f${f}`);
  }
}
// (4) THE BAND'S PRINT: once it is out, left of x 930 below y 1000, above y 1490, off the left edge, below the caption band
const BAND_OUT = Math.ceil(T.pull[0] + 0.4 * (T.pull[1] - T.pull[0]));
for (let f = BAND_OUT; f <= LAST; f++) for (const p of bandPts(f)) {
  const s = scr(f, p);
  if ((s.x > 930 && s.y > 1000) || s.y > 1490 || s.x < 40 || s.y < 662) fail(`hook: the band reaches (${Math.round(s.x)}, ${Math.round(s.y)}) at f${f}`);
}
// (5) BIG: the grill's front ≥ 640 px wide from the close on; the band ≥ 560 px wide once the drawer is out
{
  const wide = (f: number, a: P3, b: P3) => scr(f, b).x - scr(f, a).x;
  for (let f = T.close; f <= LAST; f += 4) {
    const w = wide(f, [-BASE.X, BASE.FRONT_TOP, BASE.Z1], [BASE.X, BASE.FRONT_TOP, BASE.Z1]);
    if (w < 640) fail(`hook: the grill is only ${Math.round(w)} px wide at f${f}`);
  }
  for (let f = T.pull[1]; f <= LAST; f += 4) {
    const p = pullAt(T, f), w = wide(f, [-BAND.zIn, BAND_TOP, BAND.zc + p], [BAND.zIn, BAND_TOP, BAND.zc + p]);
    if (w < 560) fail(`hook: the band is only ${Math.round(w)} px wide at f${f}`);
  }
}
// (6) THE TOSSED BUNDLES: each comes in from off the frame; in the air it never meets the lid's handle (its world box) and
//     it lands clear of the band; the second lands on the first only once the first has stopped
{
  const handle = (f: number) => [-130, 130].flatMap((x) => [46, 68].flatMap((y) => [180, 226].map((z) => lidPt(f, x, y, z))));
  for (const k of [0, 1] as const) {
    const t0 = T.extra[k][0] - 6;
    const first = extraPts(t0, k).map((p) => scr(t0, p).x);
    if (!(Math.max(...first) < 0 || Math.min(...first) > 1080)) fail(`hook: tossed bundle ${k} pops in on screen (x ${Math.round(Math.min(...first))}…${Math.round(Math.max(...first))})`);
    for (let f = t0; f <= T.extra[k][1] + 2; f += 0.25) {
      const e = extraPts(f, k), h = handle(f);
      const ex0 = Math.min(...e.map((p) => p[0])), ex1 = Math.max(...e.map((p) => p[0])), ez0 = Math.min(...e.map((p) => p[2]));
      const ey1 = Math.max(...e.map((p) => p[1]));
      const hx0 = Math.min(...h.map((p) => p[0])), hx1 = Math.max(...h.map((p) => p[0])), hz1 = Math.max(...h.map((p) => p[2])), hy0 = Math.min(...h.map((p) => p[1]));
      if (ex1 > hx0 && ex0 < hx1 && ez0 < hz1 && ey1 > hy0 - 3) fail(`hook: tossed bundle ${k} meets the lid's handle at f${f}`);
      const ep = extraPose(T, k, f), a = (ep.yaw * Math.PI) / 180;
      const front = ep.z + 52.94 + 120.9 * Math.abs(Math.sin(a));
      if (front > BAND.zc - BAND.w / 2 - 1) fail(`hook: tossed bundle ${k} lands on the band at f${f}`);
    }
  }
  if (T.extra[1][0] - 6 < T.extra[0][1]) fail("hook: the second bundle is tossed before the first has stopped");
  if (EXTRA.y[0] < BRICK_TOP) fail("hook: the tossed bundles rest inside the brick");
}

// ══ THE PLACE ══
const M3D = hookModel(T);
const RECT = { x: -160, y: -120, w: 1400, h: 2160 };
const poolsAt = (f: number): [number, number, number, number][] => {
  const c = camAt(f);
  viewMatrix(c.c, c.t, Vm);
  const a = toLayer(Vm, [POOL.c[0], 0, POOL.c[1]]);
  return [[a.x, a.y - 60 * a.s, 720 * a.s, 420 * a.s]];
};
const Hook: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={poolsAt(f)} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="grill">
        <View3D name="hook" rect={RECT} eye={HOOK_EYE} make={M3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

// ══ THE SOUNDS, each on its own event's frame ══
const SFX: PlaceSfx[] = [
  { s: "lid", at: T.close, vol: 0.42, why: "the grill's lid lands on the steak", mode: "peak" },
  { s: "sizzle", at: T.close + 1, end: T.close + 62, vol: 0.24, why: "the steak hisses under the shut lid (quiet, about 2 s)", mode: "within" },
  { s: "glide", at: Math.round(pullPeak(T)), vol: 0.32, why: "the drip drawer slides out on its runners", mode: "peak" },
  { s: "stack", at: T.extra[0][0], vol: 0.36, why: "a tossed bundle lands on the pile of cash", mode: "peak" },
  { s: "stack", at: T.extra[1][0], vol: 0.3, why: "a second bundle lands on top of it", mode: "peak" },
];

export const HOOK_DEBUG = { T, DONE, LAST, camAt, paramsAt, scr, lidPts, drawerPts, bandPts, extraPts, steamPts };

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp: Hook, align: () => "centre", focus: [540, 1150] },
  done: DONE,
  cam: CAM,
  sfx: SFX,
};
