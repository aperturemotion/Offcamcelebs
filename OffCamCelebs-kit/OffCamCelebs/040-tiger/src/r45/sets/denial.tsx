import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import { denialModel, DEN_FLOOR, MAG, MAG_REST, CHQ, PRINT, PUSH_DIST, poseMag, poseChq, magPt, magCorners, chqPt, chqCorners, touchAt,
  LEAF_DOWN, LEAF_STILL, type DenialTiming } from "../../three/props/denial";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 5 · THE DENIAL (dark) — the Saudi side's answer, on the record.
//  0 "Then the head of Saudi golf told The New Yorker: I never offered him that money."
//    A glossy weekly is tossed onto the table from the left, half open; it touches down, slides and brakes, and its raised
//    half falls flat on its hinge: it lies OPEN on "The New Yorker", the left page's head THE NEW YORKER, 2022 in plain
//    type. On "I never" the camera pushes in on the right page: the pull-quote, big, "I never offered him that money, not
//    even close." MAJED AL SOROUR, GOLF SAUDI CEO. On "that money" the camera eases back as the hook's presentation cheque
//    ($800,000,000, payee blank, signature empty, memo LIV GOLF) slides in from the right and lands beside the magazine.
//  1 "Not even close." The cheque is pushed: it slides back out of reach, off the right edge, as the camera returns to the
//    open magazine. Nobody is called a liar: the page carries his words, and the money leaves.
// ═══════════════════════════════════════════════════════════════════════════
const S = "denial" as const;
const NEWY = word(S, 0, /^New/), I = word(S, 0, /^I$/), THAT = word(S, 0, /^that/), NOT = cue(S, 1), END1 = cueEnd(S, 1);

// ── the actions' frames ──
export const T: DenialTiming = {
  mag: [NEWY - 30, NEWY - 6],          // tossed in; touchdown at 60% of the run; open and still before "New Yorker"
  chq: [THAT - 8, THAT + 10],          // "that money": the cheque slides in beside the magazine
  push: [NOT, END1 + 3],               // "Not even close": it slides back out of reach
};
const TD = touchAt(T);
if (TD + LEAF_STILL > NEWY + 2) throw new Error(`denial: the magazine is still settling at "New Yorker" (still f${TD + LEAF_STILL}, word f${NEWY})`);
const DONE = Math.max(END1 + 4, T.push[1] + 1);

// ── the camera: the eye rides with the view (up and a little right, looking down onto the table) ──
const EL = 1300;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + 240, y: v.y - EL, D: 1800 });
const aim = (p: { x: number; h: number; z: number }, zoom: number, sx = 540, sy = 960) => {
  let v = { x: p.x, y: DEN_FLOOR - p.h };
  for (let i = 0; i < 14; i++) {
    const q = project(eyeOf(v), p.x, DEN_FLOOR - p.h, p.z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const REST = { ...MAG_REST, h: 0, alpha: 0, visible: true };
const SPREAD = magPt(REST, 1, 0, MAG.D / 2);                                                       // the spine's middle
const QUOTE = magPt(REST, 1, (PRINT.quote[0] + PRINT.quote[2]) / 2, (PRINT.quote[1] + PRINT.quote[3]) / 2);
const CREST = { x: CHQ.x, z: CHQ.z, yaw: CHQ.yaw, h: 0 };
const BOTH = { x: (SPREAD.x + CHQ.x) / 2 + 10, h: 0, z: (SPREAD.z + CHQ.z) / 2 + 20 };
const K_SPREAD = aim(SPREAD, 1.14, 506, 1056);
const STORY: CamKey[] = [
  { at: -9999, ...K_SPREAD, dur: 1 },                                  // the open spread, its head read on "New Yorker"
  { at: I - 14, ...aim(QUOTE, 1.84, 520, 1010), dur: 30 },             // "I never": in on the quote
  { at: THAT - 10, ...aim(BOTH, 0.86, 504, 1010), dur: 30 },            // "that money": back over the magazine and the cheque
  { at: THAT + 25, ...aim(SPREAD, 1.15, 508, 1050), dur: 32 },         // "Not even close": the money gone, the page stays
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

// ★ the screen's rules, every frame the place can show
const scr = (f: number, p: { x: number; h: number; z: number }) => {
  const v = camView(CAM, f), q = project(eyeOf(v), p.x, DEN_FLOOR - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const box = (b: readonly [number, number, number, number]) => [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]], [(b[0] + b[2]) / 2, b[3]]] as const;
const BAD: string[] = [];
const bad = (m: string) => { BAD.push(m); };
const settled = T.mag[1];
for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
  const m = poseMag(T, f), c = poseChq(T, f);
  const tops = m.visible ? magCorners(m) : [];
  if (c.visible) tops.push(...chqCorners(c));
  for (const t of tops) {
    const s = scr(f, t);
    if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`denial: an object's far edge reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
  const ink: { x: number; h: number; z: number }[] = [];
  if (f >= settled) {
    ink.push(...box(PRINT.head).map(([u, v]) => magPt(m, -1, MAG.W - u, v)));
    ink.push(...box(PRINT.quote).map(([u, v]) => magPt(m, 1, u, v)));
  }
  if (f >= T.chq[1] && f <= T.push[0]) ink.push(...box(PRINT.chq).map(([u, v]) => chqPt(c, u, v)));
  for (const p of ink) {
    const s = scr(f, p);
    if (s.x < -10 || s.x > 1090) continue;   // a page beyond the frame's edge in a close-up is not on screen
    if (s.y > 1490) bad(`denial: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    if (s.y > 1000 && s.x > 930) bad(`denial: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
    if (s.y < 662) bad(`denial: print reaches the caption band (y ${Math.round(s.y)}) at f${f}`);
  }
}
if (BAD.length) throw new Error(`${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "")))].slice(0, 6).join("\n") + `\nfirst: ${BAD[0]}\nlast: ${BAD[BAD.length - 1]}`);
// ★ every print box wholly on screen when it is the subject: the head on "New Yorker", the quote on "I never" (+20), the
//   cheque once landed
{
  const inFrame = (f: number, pts: { x: number; h: number; z: number }[], what: string) => {
    for (const p of pts) { const s = scr(f, p); if (s.x < 30 || s.x > 1050) throw new Error(`denial: ${what} is cut by the frame at f${f} (x ${Math.round(s.x)})`); }
  };
  inFrame(NEWY + 4, box(PRINT.head).map(([u, v]) => magPt(REST, -1, MAG.W - u, v)), "the left page's head");
  inFrame(I + 20, box(PRINT.quote).map(([u, v]) => magPt(REST, 1, u, v)), "the quote");
  inFrame(T.chq[1] + 4, box(PRINT.chq).map(([u, v]) => chqPt(CREST, u, v)), "the cheque's print");
  // the cheque has left the frame entirely when it is hidden
  const out = poseChq(T, T.push[1] - 1);
  for (const p of chqCorners(out)) { const s = scr(T.push[1] - 1, p); if (s.x < 1110) throw new Error(`denial: the pushed cheque is still on screen (x ${Math.round(s.x)}) when it is hidden; PUSH_DIST ${PUSH_DIST}`); }
}
// ★ the subjects are big: the spread > 760 px across on "New Yorker", the quote page > 600 px on "I never", the cheque
//   > 700 px once it has landed
{
  const wd = (f: number, a: { x: number; h: number; z: number }, b: { x: number; h: number; z: number }) => scr(f, b).x - scr(f, a).x;
  const w0 = wd(NEWY + 4, magPt(REST, -1, MAG.W, MAG.D / 2), magPt(REST, 1, MAG.W, MAG.D / 2));
  const w1 = wd(I + 20, magPt(REST, 1, 0, MAG.D / 2), magPt(REST, 1, MAG.W, MAG.D / 2));
  const w2 = wd(T.chq[1] + 6, chqPt(CREST, 0, CHQ.d / 2), chqPt(CREST, CHQ.w, CHQ.d / 2));
  if (w0 < 760 || w1 < 600 || w2 < 700) throw new Error(`denial: too small on screen (spread ${Math.round(w0)}, quote page ${Math.round(w1)}, cheque ${Math.round(w2)} px)`);
}

const M3D = denialModel(T);
// the canvas: the camera's view and a margin, and always the magazine's and the resting cheque's whole extent (a hand-over
// moves the place across the frame: a canvas border must never cut them on screen)
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  let x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  let y0 = Math.max(v.y - 960 / v.z - m, DEN_FLOOR - 700), y1 = Math.min(v.y + 960 / v.z + m, DEN_FLOOR + 700);
  const e = eyeOf(v);
  const pts = [...magCorners(REST), ...chqCorners({ ...CREST, visible: true })];
  for (const p of pts) for (const h of [0, p.h]) {
    const q = project(e, p.x, DEN_FLOOR - h, p.z);
    x0 = Math.min(x0, q.x - 80); x1 = Math.max(x1, q.x + 80); y0 = Math.min(y0, q.y - 80); y1 = Math.max(y1, q.y + 80);
  }
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const LP = (p: { x: number; h: number; z: number }) => { const q = project(eyeOf(STORY[2]), p.x, DEN_FLOOR - p.h, p.z); return [q.x, q.y] as const; };
const [mx, my] = LP(SPREAD), [cx, cy] = LP(CREST);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[mx, my, 640, 420], [cx, cy + 40, 660, 340]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="table">
        <View3D name="denial" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "thump", at: TD, vol: 0.4, why: "denial: the magazine touches down on the table and slides", mode: "peak" },
  { s: "flip", at: TD + LEAF_DOWN, vol: 0.35, why: "denial: the magazine's raised half falls flat, open", mode: "peak" },
  { s: "glide", at: T.chq[0] + 4, vol: 0.3, why: "denial: the cheque slides in beside the magazine", mode: "peak" },
  { s: "glide2", at: T.push[0] + 2, vol: 0.28, why: "denial: the cheque slides back out of reach", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [mx, my] },
  done: DONE, cam: CAM, sfx: SFX,
};
