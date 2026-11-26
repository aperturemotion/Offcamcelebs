import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  grillModel, SH, BX, BOXES, TRAY, TRAY_IN, PRINT, BOX_TOP_H,
  poseBox, poseNote, notePts, inBox, facePt, landOf, noteRestH, type GrillTiming,
} from "../../three/props/grill";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · GRILL (dark) — the grill's retail boxes on a store shelf; a $100 royalty for every sale.
//  0 "In the 90s, a company called Salton sold a grill with his name on it," The camera opens CLOSE on an empty steel store
//    shelf with an oak tray at its front; a retail box of the grill (printed corrugated card: SALTON small, THE GEORGE
//    FOREMAN GRILL big, a line drawing of the grill, his face photo small in the corner) slides in from the right, tips on
//    its leading edge as friction stops it and drops back flat on "Salton". On "grill" the camera pushes in on its title
//    and his photo ("with his name on it").
//  1 "and paid royalties on every sale." The camera pulls out over the shelf as three more boxes slide in behind the first
//    (one from the left, two from the right), each with a $100 note lying on its top; as each lands, the jolt lifts its
//    note off and it sails over the first box and flutters down into the tray: one note per sale. The hand-over carries
//    the shelf away.
// ═══════════════════════════════════════════════════════════════════════════
const S = "grill" as const;
const SALTON = word(S, 0, /^Salton/), GRILLW = word(S, 0, /^grill/), C1 = cue(S, 1);

// ── the actions' frames: the first box lands on "Salton"; the three land through "and paid royalties on every sale" ──
export const T: GrillTiming = {
  slides: [[SALTON - 30, SALTON - 4], [C1 - 16, C1 + 4], [C1 - 4, C1 + 16], [C1 + 8, C1 + 28]],
  fly: 20,
};
const NOTE_LAND = [0, 1, 2].map((k) => landOf(T, k + 1) + T.fly);
const DONE = Math.max(cueEnd(S, 1) + 4, NOTE_LAND[2] + 3);

// ── the camera: the eye rides with the view, up and a little right, looking down onto the shelf ──
const EL = 700;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + 140, y: v.y - EL, D: 2100 });
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: SH.floor - h };
  for (let i = 0; i < 16; i++) {
    const q = project(eyeOf(v), x, SH.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const H0 = BOXES[0];
const STORY: CamKey[] = [
  { at: -9999, ...aim(H0.x, 200, 0, 1.3, 540, 1075), dur: 1 },                 // close on the shelf where the box lands
  { at: GRILLW - 14, ...aim(H0.x, 255, 0, 1.48, 540, 1050), dur: 30 },         // "grill with his name": in on the title and photo
  { at: C1 - 22, ...aim(H0.x + 5, 190, -260, 1.04, 540, 1040), dur: 42 },          // "and paid royalties": out over the shelf
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

// ★ the screen's rules, every frame the place can show
type P3 = [number, number, number];   // x, h, z
const scr = (f: number, [x, h, z]: P3) => {
  const v = camView(CAM, f), q = project(eyeOf(v), x, SH.floor - h, z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const BAD: string[] = [];
const bad = (m: string) => { BAD.push(m); };
const boxPts = (k: number, f: number, hTop: number): P3[] => {
  const p = poseBox(T, k, f), c = Math.cos((p.yaw * Math.PI) / 180), s = Math.sin((p.yaw * Math.PI) / 180);
  const out: P3[] = [];
  for (const i of [-1, 1]) for (const j of [-1, 1]) for (const h of [0, hTop]) {
    const lx = (i * BX.w) / 2, lz = (j * BX.d) / 2;
    out.push([p.x + lx * c + lz * s, h, p.z - lx * s + lz * c]);
  }
  return out;
};
/** the convex outline of points on screen, and a point-in-it test (for what a box in front hides) */
const hull = (ps: { x: number; y: number }[]) => {
  const a = [...ps].sort((p, q) => p.x - q.x || p.y - q.y);
  const cr = (o: { x: number; y: number }, p: { x: number; y: number }, q: { x: number; y: number }) => (p.x - o.x) * (q.y - o.y) - (p.y - o.y) * (q.x - o.x);
  const lo: typeof a = [], up: typeof a = [];
  for (const p of a) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (const p of [...a].reverse()) { while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  const h = [...lo.slice(0, -1), ...up.slice(0, -1)];
  return (q: { x: number; y: number }) => h.every((p, i) => cr(p, h[(i + 1) % h.length], q) >= -1e-6);
};
const FROM = cue(S, 0) - 6, TO = DONE + 44;
for (let f = FROM; f <= TO; f++) {
  const vis = BOXES.map((_, k) => poseBox(T, k, f).visible);
  // the tops: no box or note reaches the caption band
  for (let k = 0; k < BOXES.length; k++) if (vis[k]) for (const p of boxPts(k, f, BOX_TOP_H + 14)) {
    const s = scr(f, p);
    if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`grill: box ${k}'s top reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
  }
  for (let k = 0; k < 3; k++) {
    const q = poseNote(T, k, f);
    if (!q.visible) continue;
    for (const p of notePts(q)) {
      const s = scr(f, p);
      if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`grill: note ${k} reaches y ${Math.round(s.y)} at f${f}`);
      // the readable note at rest in the tray
      if (!q.flying && !q.attached) {
        if (s.y > 1490) bad(`grill: note ${k} in the tray reaches y ${Math.round(s.y)} at f${f}`);
        if (s.y > 1000 && s.x > 930) bad(`grill: note ${k} in the tray reaches x ${Math.round(s.x)} at f${f}`);
      }
    }
  }
  // the print on each landed box's face (where no box in front of it hides it)
  for (let k = 0; k < BOXES.length; k++) {
    if (f < landOf(T, k)) continue;
    const p = poseBox(T, k, f);
    const hides = [0, 1, 2].filter((j) => j < k && (k === 3 || j === 0) && f >= T.slides[j][0])
      .map((j) => hull(boxPts(j, f, BOX_TOP_H).map((q) => scr(f, q))));
    for (const b of Object.values(PRINT)) for (let i = 0; i <= 6; i++) for (let j = 0; j <= 4; j++) {
      const s = scr(f, facePt(k, p, b[0] + ((b[2] - b[0]) * i) / 6, b[1] + ((b[3] - b[1]) * j) / 4));
      if (hides.some((h) => h(s))) continue;
      if (s.y > 1490) bad(`grill: box ${k}'s print reaches y ${Math.round(s.y)} at f${f}`);
      if (s.y > 1000 && s.x > 930) bad(`grill: box ${k}'s print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
      if (s.x < 40 && s.x > -400) bad(`grill: box ${k}'s print is cut at the left edge (x ${Math.round(s.x)}) at f${f}`);
      if (s.y < 662) bad(`grill: box ${k}'s print in the caption band (y ${Math.round(s.y)}) at f${f}`);
    }
  }
}
if (BAD.length) throw new Error(`${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "").replace(/\d+/g, "#")))].slice(0, 6).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);

// ★ nothing passes through anything: the notes' flights clear every box (where it is that frame), the tray's walls and the
//   notes already in it; each comes to rest inside the tray; the boxes' paths never cross
{
  const PEN: string[] = [];
  for (let k = 0; k < 3; k++) {
    for (let f = landOf(T, k + 1); f <= NOTE_LAND[k] + 1; f++) {
      const q = poseNote(T, k, f);
      for (const [x, h, z] of notePts(q)) {
        for (let j = 0; j < BOXES.length; j++) {
          if (j === k + 1 && f === landOf(T, k + 1)) continue;
          const bp = poseBox(T, j, f);
          if (!bp.visible) continue;
          if (inBox(j, x - (bp.x - BOXES[j].x), z, 1) && h < BOX_TOP_H + 1) PEN.push(`note ${k} into box ${j} (h ${h.toFixed(1)}) at f${f}`);
        }
        const tx = Math.abs(x - TRAY.x), tz = Math.abs(z - TRAY.z);
        if (tx <= TRAY.w / 2 + 1 && tz <= TRAY.d / 2 + 1) {
          const inside = tx <= TRAY_IN.w / 2 - 0.5 && tz <= TRAY_IN.d / 2 - 0.5;
          if (!inside && h < TRAY.h + 1.2) PEN.push(`note ${k} into the tray's wall (h ${h.toFixed(1)}) at f${f}`);
          if (inside && h < noteRestH(k) - 0.05) PEN.push(`note ${k} below its rest in the tray (h ${h.toFixed(2)}) at f${f}`);
        }
        if (h < 0.5) PEN.push(`note ${k} into the shelf at f${f}`);
      }
    }
    // at rest: square in the tray, clear of its walls
    const r = poseNote(T, k, 99999);
    for (const [x, , z] of notePts(r)) if (Math.abs(x - TRAY.x) > TRAY_IN.w / 2 - 2 || Math.abs(z - TRAY.z) > TRAY_IN.d / 2 - 2) PEN.push(`note ${k} at rest touches the tray's wall`);
  }
  // the boxes: footprints apart on every frame (their paths included), and the tray clear of the first
  for (let f = FROM; f <= TO; f++) for (let a = 0; a < BOXES.length; a++) for (let b = a + 1; b < BOXES.length; b++) {
    const A = poseBox(T, a, f), B = poseBox(T, b, f);
    if (!A.visible || !B.visible) continue;
    const ext = (p: typeof A) => {
      const c = Math.abs(Math.cos((p.yaw * Math.PI) / 180)), s = Math.abs(Math.sin((p.yaw * Math.PI) / 180));
      return { x0: p.x - (BX.w / 2) * c - (BX.d / 2) * s - 2, x1: p.x + (BX.w / 2) * c + (BX.d / 2) * s + 2, z0: p.z - (BX.d / 2) * c - (BX.w / 2) * s - 2, z1: p.z + (BX.d / 2) * c + (BX.w / 2) * s + 2 };
    };
    const ea = ext(A), eb = ext(B);
    if (ea.x0 < eb.x1 && eb.x0 < ea.x1 && ea.z0 < eb.z1 && eb.z0 < ea.z1) PEN.push(`boxes ${a} and ${b} overlap at f${f}`);
  }
  {
    const z1 = BOXES[0].z + BX.d / 2 + (BX.w / 2) * Math.sin((Math.abs(BOXES[0].yaw) * Math.PI) / 180) + BX.bulge;
    if (z1 > TRAY.z - TRAY.d / 2 - 3) PEN.push(`the tray touches the first box (${z1.toFixed(1)} vs ${TRAY.z - TRAY.d / 2})`);
  }
  if (PEN.length) throw new Error(`grill: ${PEN.length} passes-through:\n${[...new Set(PEN.map((p) => p.replace(/ at f\d+$/, "")))].slice(0, 6).join("\n")}\nfirst: ${PEN[0]}`);
}
// ★ the subjects are big: the first box > 60% of the width as it lands, > 66% on "his name"; the shelf's four with the tray
//   fill the frame once all have landed
{
  const wide = (f: number, k: number) => { const p = poseBox(T, k, f); return scr(f, facePt(k, p, BX.w, BX.h / 2)).x - scr(f, facePt(k, p, 0, BX.h / 2)).x; };
  const w0 = wide(SALTON + 2, 0), w1 = wide(GRILLW + 14, 0), w2 = wide(DONE, 0);
  const all = (f: number) => {
    const xs = [0, 1, 2, 3].flatMap((k) => boxPts(k, f, BOX_TOP_H).map((p) => scr(f, p).x));
    return Math.max(...xs) - Math.min(...xs);
  };
  const w3 = all(DONE);
  if (w0 < 650 || w1 < 710 || w2 < 500 || w3 < 900) throw new Error(`grill: too small on screen (box ${Math.round(w0)} as it lands, ${Math.round(w1)} on "name", ${Math.round(w2)} wide; the four ${Math.round(w3)} px)`);
}

const M3D = grillModel(T);
// ★ the whole shelf (and what stands on it) always inside the canvas: a canvas border never cuts it
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  let y0 = v.y - 960 / v.z - m, y1 = v.y + 960 / v.z + m;
  const e = eyeOf(v);
  let px0 = 1e9, px1 = -1e9, py0 = 1e9, py1 = -1e9;
  for (const x of [SH.x0, SH.x1]) for (const z of [SH.z0, SH.z1 + 6]) for (const h of [-SH.lip - 2, SH.up]) {
    const q = project(e, x, SH.floor - h, z); px0 = Math.min(px0, q.x); px1 = Math.max(px1, q.x); py0 = Math.min(py0, q.y); py1 = Math.max(py1, q.y);
  }
  // the boxes' tops and the notes' flights stand above the deck's far edge
  for (const z of [SH.z0, 0]) for (const x of [SH.x0, SH.x1]) {
    const q = project(e, x, SH.floor - BOX_TOP_H - 200, z); py0 = Math.min(py0, q.y);
  }
  const PM = 80;
  const X0 = Math.min(x0, px0 - PM), X1 = Math.max(x1, px1 + PM);
  y0 = Math.min(Math.max(y0, py0 - 260), py0 - PM); y1 = Math.max(Math.min(y1, py1 + 500), py1 + PM);
  return { x: Math.floor(X0), y: Math.floor(y0), w: Math.ceil(X1 - X0), h: Math.ceil(y1 - y0) };
};
const LP = (x: number, h: number, z: number) => { const q = project(eyeOf(STORY[2]), x, SH.floor - h, z); return [q.x, q.y] as const; };
const [hx, hy] = LP(H0.x, 200, H0.z), [bx, by] = LP(H0.x, 200, -520), [tx, ty] = LP(TRAY.x, 0, TRAY.z);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[hx, hy, 700, 420], [bx, by - 60, 820, 360], [tx, ty, 520, 220]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="shelf">
        <View3D name="grill" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: T.slides[0][0] + 5, vol: 0.32, why: "grill: the first grill box slides in along the steel shelf", mode: "peak" },
  { s: "thump", at: landOf(T, 0), vol: 0.3, why: "grill: the box drops back flat off its tip on \"Salton\"", mode: "peak" },
  { s: "glide2", at: T.slides[1][0] + 5, vol: 0.24, why: "grill: three more boxes slide in behind it (one soft take under the three)", mode: "peak" },
  ...[0, 1, 2].map((k): PlaceSfx => ({ s: "paper", at: NOTE_LAND[k], vol: 0.22, why: `grill: $100 note ${k + 1} lands in the oak tray (quiet)`, mode: "peak" })),
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [tx, ty - 200] },
  done: DONE, cam: CAM, sfx: SFX,
};
