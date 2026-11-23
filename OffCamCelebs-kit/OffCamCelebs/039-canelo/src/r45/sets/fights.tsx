import React from "react";
import { clamp01, GLIDE } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { fightsModel, ropeModel, FG, TK, TK_TOP, TICKETS, TK_LIFT, CAL, CAL_TOP, CAL_PRINT, ROPE, type FightsP, type TicketPose } from "../../three/props/fights";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 5 · THE FIGHTS (dark) — two sentences on a ring's canvas.
//  0 "He fought three times under the deal." The crane brings the canvas in; one by one, three fight tickets are tossed in
//    from beyond the frame's edges, land flat and skid to rest in a column: ÁLVAREZ vs FIELDING DEC 15 2018, ÁLVAREZ vs
//    JACOBS MAY 4 2019, ÁLVAREZ vs KOVALEV NOV 2 2019 (the last lands as "deal" ends).
//  The ring's bottom rope crosses the foot of the frame close to the lens, out of focus (its own blurred view): the scale of
//  a real ring, and depth as the camera travels (it slides past faster than the canvas).
//  1 "Then, in 2020, no fights at all." On "Then" the camera travels right along the canvas, and a wall calendar's 2020 page
//    swings in from beyond the right edge and lands on "2020": twelve months, every day printed, none marked. On "no fights
//    at all" the camera pushes in on the empty months.
// ═══════════════════════════════════════════════════════════════════════════
const S = "fights" as const;
const DEAL_W = word(S, 0, /^deal/), THEN = cue(S, 1), Y2020 = word(S, 1, /^2020/), NO = word(S, 1, /^no/);

// ── the actions' frames: each ticket's toss [start, touchdown, rest], the page's swing ──
const TOSS_IN = 18, SKID = 7;
const LAND = [DEAL_W - 16, DEAL_W - 6, DEAL_W + 4];
const TOSS = LAND.map((l) => [l - TOSS_IN, l, l + SKID] as const);
const CAL_LAND = Y2020 + 7;
const CAL_T = [CAL_LAND - 20, CAL_LAND, CAL_LAND + 8] as const;
for (let i = 1; i < TOSS.length; i++) if (TOSS[i][1] - TOSS[i - 1][1] < 8) throw new Error("fights: two tickets land too close together to read one by one");

/** a toss: in from `from` (−1 left, +1 right) at height h0, falling under gravity to touch down, then a short skid to rest */
const toss = (f: number, [a, l, e]: readonly [number, number, number], from: number, dist: number, h0: number, spin: number, bank: number): TicketPose => {
  if (f < a - 1) return { dx: from * dist, h: h0, dz: 0, yaw: from * spin, bank: 0, show: false };
  const u = clamp01((f - a) / (l - a)), w = clamp01((f - a) / (e - a));
  return {
    dx: from * dist * (1 - GLIDE(w)),
    h: h0 * (1 - u * u),
    dz: 0,
    yaw: from * spin * (1 - u) ** 2,
    bank: -from * bank * (1 - u) ** 3,
    show: true,
  };
};
const paramsAt = (f: number): FightsP => ({
  t: TICKETS.map((t, i) => toss(f, TOSS[i], t.from, 1250, 150, 22, 7)),
  cal: toss(f, CAL_T, 1, 1300, 46, 34, 0),
});

// ── the camera: the eye rides with the view (up and to the right, looking down onto the canvas) ──
/** the eye's height over the view (high: the canvas is seen from well above, so the tickets read nearly face on) */
const EL = 2300;
const eyeOf = (v: { x: number; y: number }) => ({ x: v.x + 200, y: v.y - EL, D: 3200 })   // a long lens: the column of tickets keeps one size;
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: FG.floor - h };
  for (let i = 0; i < 12; i++) {
    const q = project(eyeOf(v), x, FG.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const TCX = TICKETS.reduce((s, t) => s + t.x, 0) / TICKETS.length;
const calRowZ = (py: number) => CAL.z - CAL.D / 2 + py;
const STORY: CamKey[] = [
  { at: -9999, ...aim(TCX, 0, 0, 1.22, 520, 1090), dur: 1 },                                              // the three tickets
  { at: THEN + 8, ...aim(CAL.x, 0, CAL.z, 1.12, 515, 1085), dur: 44 },                                   // "Then": along to the page
  { at: THEN + 53, ...aim(CAL.x, 0, calRowZ(CAL.D / 2 + 40), 1.26, 515, 1120), dur: 32 }, // "no fights": in on the empty months
];
const DONE = Math.max(cueEnd(S, 1) + 4, CAL_T[2] + 2, TOSS[2][2] + 2);
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });
if (STORY[2].at > NO + 20) throw new Error("fights: the push onto the empty months comes too late after \"no\"");

// ── ★ the screen's rules, checked on every frame once the place has landed ──
const LANDED = THEN + 18;
const screenOf = (f: number, x: number, h: number, z: number) => {
  const v = camView(CAM, f), q = project(eyeOf(v), x, FG.floor - h, z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const cornersOf = (cx: number, cz: number, yawDeg: number, w: number, d: number, h: number): [number, number, number][] => {
  const a = (yawDeg * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => { const lx = (i * w) / 2, lz = (j * d) / 2; return [cx + lx * c + lz * s, h, cz - lx * s + lz * c]; });
};
{
  const END = DONE + 64;
  for (let f = LANDED; f <= END; f++) {
    const p = paramsAt(f);
    const items: { name: string; pts: [number, number, number][]; rest: boolean }[] = [];
    TICKETS.forEach((t, i) => { const q = p.t[i]; if (q.show) items.push({ name: `ticket ${i + 1}`, pts: cornersOf(t.x + q.dx, t.z + q.dz, t.yaw + q.yaw, TK.W, TK.D, FG.matT + TK_LIFT + q.h + TK_TOP), rest: f >= TOSS[i][2] }); });
    if (p.cal.show) items.push({ name: "the 2020 page", pts: cornersOf(CAL.x + p.cal.dx, CAL.z, CAL.yaw + p.cal.yaw, CAL.W, CAL.D, FG.matT + p.cal.h + CAL_TOP), rest: f >= CAL_T[2] });
    const edge: [number, number, number][] = [];
    for (let x = FG.matX0; x <= FG.matX1; x += 50) edge.push([x, FG.matT + 6, FG.matZ0 - 7]);
    items.push({ name: "the canvas's far edge", pts: edge, rest: false });
    const rope: [number, number, number][] = [];
    for (let k = 0; k <= 20; k++) { const t = k / 20; rope.push([ROPE.a[0] + (ROPE.b[0] - ROPE.a[0]) * t, ROPE.a[1] + ROPE.r + (ROPE.b[1] - ROPE.a[1]) * t, ROPE.a[2] + (ROPE.b[2] - ROPE.a[2]) * t]); }
    items.push({ name: "the rope", pts: rope, rest: false });
    for (const it of items) for (const [x, h, z] of it.pts) {
      const s = screenOf(f, x, h, z);
      if (s.x < -40 || s.x > 1120) continue;
      if (s.y < 662) throw new Error(`fights: ${it.name} reaches y ${Math.round(s.y)} on screen at f${f} (the caption band)`);
      if (it.rest && s.y > 1500) throw new Error(`fights: ${it.name}'s print reaches y ${Math.round(s.y)} at f${f} (the Reel's caption strip)`);
      if (it.rest && s.y > 1000 && s.y < 1700 && s.x > 940) throw new Error(`fights: ${it.name}'s print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f} (the Reel's buttons)`);
    }
  }
}
// ★ the tickets at rest never overlap one another, and the page lands clear of them
{
  const rects = TICKETS.map((t) => cornersOf(t.x, t.z, t.yaw, TK.W + 6, TK.D + 6, 0));
  rects.push(cornersOf(CAL.x, CAL.z, CAL.yaw, CAL.W + 6, CAL.D + 6, 0));
  const sep = (A: [number, number, number][], B: [number, number, number][]) => {
    for (const P of [A, B]) for (let k = 0; k < 4; k++) {
      const [x0, , z0] = P[k], [x1, , z1] = P[(k + 1) % 4], nx = z1 - z0, nz = -(x1 - x0);
      const pa = A.map(([x, , z]) => x * nx + z * nz), pb = B.map(([x, , z]) => x * nx + z * nz);
      if (Math.max(...pa) < Math.min(...pb) || Math.max(...pb) < Math.min(...pa)) return true;
    }
    return false;
  };
  for (let i = 0; i < rects.length; i++) for (let j = i + 1; j < rects.length; j++) if (!sep(rects[i], rects[j])) throw new Error(`fights: items ${i} and ${j} overlap at rest`);
}

const FIGHTS3D = fightsModel();
const ROPE3D = ropeModel();
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, FG.floor - 900), y1 = v.y + 960 / v.z + m;
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[TCX, FG.floor - 420, 760, 360], [CAL.x, FG.floor - 420, 680, 360]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="canvas">
        <View3D name="fights" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={FIGHTS3D} params={paramsAt(f)} />
      </Obj>
      <Obj s={S} g="rope">
        <View3D name="fights-rope" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={ROPE3D} params={{}} />
      </Obj>
    </World>
  </>
);

export const FT = { toss: TOSS, cal: CAL_T, done: DONE } as const;
const SFX: PlaceSfx[] = [
  ...TOSS.map(([, l], i) => ({ s: "paper" as const, at: l, vol: 0.42, why: `fight ticket ${i + 1} lands on the canvas`, mode: "peak" as const })),
  { s: "flip", at: CAL_T[1], vol: 0.4, why: "the 2020 calendar page swings in and lands on the canvas", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [TCX, FG.floor] },
  done: DONE, cam: CAM, sfx: SFX,
};
