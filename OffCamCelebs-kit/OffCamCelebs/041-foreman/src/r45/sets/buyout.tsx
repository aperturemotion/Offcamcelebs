import React from "react";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project, type Eye } from "../../three/stage";
import {
  buyoutModel, DESK, CAL, CT, NPL, PQ, BRICK, BRICK_EXT, TAG, CERT, MX, CAL_INK, CT_INK, CERT_INK, PQ_INK, CAL_WIRE_TOP,
  CAL_ZBACK, calPt, flatPt, slopePt, plaqueTop, brickTop, tagPose, posePlate, posePlaque, poseCash, poseCert, type BuyoutTiming,
} from "../../three/props/buyout";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 5 · BUYOUT (dark) — the day Salton bought the name, and what it paid.
//  0 "In December 1999, Salton bought his name outright, forever," The crane brings the place down CLOSE on a tent desk
//    calendar standing on the ground: DECEMBER 1999, the 9th circled by hand in blue ballpoint (it is wholly in frame and
//    readable as "nineteen ninety-nine" is spoken). On "Salton" the camera travels right to a contract lying on the ground,
//    ASSIGNMENT OF NAME AND LIKENESS; on "his name" a brushed brass plate engraved GEORGE FOREMAN glides in from the right
//    over the page and touches down on it on "outright", above the bold line IN PERPETUITY AND WORLDWIDE ("forever").
//  1 "$137.5 million in cash and stock." On "$137.5" the camera travels on right as a walnut desk plaque, brass faced,
//    PURCHASE PRICE / $137,500,000, slides in from the near side and drops onto the ground; on "cash" a brick of sixteen real
//    $100 bundles slides in from the left behind it and stops, its manila tag $113,750,000 / CASH on top; on "stock" an
//    engraved stock certificate, SALTON, INC. / COMMON STOCK / $23,750,000, glides in from the right and touches down. The
//    figures land as they are named (the total first, as the voice says it, then its two parts). The hand-over carries it off.
// ═══════════════════════════════════════════════════════════════════════════
const S = "buyout" as const;
const Y99 = word(S, 0, /^1999/), SALTON = word(S, 0, /^Salton/), NAME = word(S, 0, /^name/), OUTRIGHT = word(S, 0, /^outright/);
const FOREVER = word(S, 0, /^forever/);
const TOTAL = word(S, 1, /^\$137/), CASH = word(S, 1, /^cash/), STOCK = word(S, 1, /^stock/);

// ── the actions' frames: each object is readable as the voice names it ──
export const T: BuyoutTiming = {
  plate: [NAME - 16, OUTRIGHT + 1],
  plaque: [TOTAL - 4, TOTAL + 26],
  cash: [CASH - 24, CASH + 1],
  cert: [STOCK - 22, STOCK + 1],
};
const DONE = Math.max(cueEnd(S, 1) + 4, T.cert[1] + 2);

// ── the camera: the eye rides with the view (up and a little right, looking down onto the ground) ──
const EL = 1250;
const eyeOf = (v: { x: number; y: number }): Eye => ({ x: v.x + 200, y: v.y - EL, D: 1800 });
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: DESK.floor - h };
  for (let i = 0; i < 16; i++) {
    const q = project(eyeOf(v), x, DESK.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const CAL_MID = calPt(CAL.PW / 2, CAL.PH / 2);
const CT_REST = { x: CT.x, z: CT.z, yaw: CT.yaw, h: 0.6 };
const CT_MID = flatPt({ w: CT.w, d: CT.d }, CT_REST, CT.w / 2, 360);
const PQ_MID = slopePt(posePlaque(T, 99999), PQ.L / 2, 0.5);
const MONEY = { x: MX + 30, h: 30, z: -420 };
const STORY: CamKey[] = [
  { at: -9999, ...aim(CAL_MID.x, CAL_MID.h, CAL_MID.z, 1.3, 520, 1080), dur: 1 },          // close on the calendar
  { at: SALTON + 1, ...aim(CT_MID.x, CT_MID.h, CT_MID.z, 1.5, 515, 1080), dur: 40 },          // "Salton": across to the contract
  { at: FOREVER + 9, ...aim(PQ_MID.x, PQ_MID.h, PQ_MID.z, 1.5, 520, 1060), dur: 42 },        // "$137.5": on to the plaque
  { at: CASH - 36, ...aim(MONEY.x, MONEY.h, MONEY.z, 0.96, 495, 1060), dur: 40 },           // "in cash and stock": out to all three
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

// ★ the screen's rules, every frame the place can show once it has landed: no object's top reaches the caption band
//   (y < 662); each object's print, while it is the subject, stays left of x 930 where it lies in y 1000–1700, above the
//   Reel's caption strip (y 1490), below the caption band and off the left edge
type P3 = { x: number; h: number; z: number };
const scr = (f: number, p: P3) => {
  const v = camView(CAM, f), q = project(eyeOf(v), p.x, DESK.floor - p.h, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const BAD: string[] = [];
const bad = (m: string) => { BAD.push(m); };
const box = (b: readonly [number, number, number, number]) => [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]] as const;
const CTS = { w: CT.w, d: CT.d }, NPS = { w: NPL.w, d: NPL.d }, TGS = { w: TAG.w, d: TAG.d }, CES = { w: CERT.w, d: CERT.d };
const LANDED = cue(S, 0) + 34;   // the crane's landing (Film.tsx: the hand-over runs 68 f from the first word)
for (let f = LANDED; f <= DONE + 44; f++) {
  const pp = posePlate(T, f), qp = posePlaque(T, f), cp = poseCash(T, f), ep = poseCert(T, f);
  const tops: P3[] = [];
  for (let i = 0; i <= 8; i++) tops.push({ x: CAL.x - CAL.W / 2 + (CAL.W * i) / 8, h: CAL_WIRE_TOP, z: calPt(0, 0).z });
  if (qp.visible) tops.push(...plaqueTop(qp));
  if (cp.visible) tops.push(...brickTop(cp));
  if (ep.visible) tops.push(...[[0, 0], [CERT.w, 0]].map(([u, v]) => flatPt(CES, ep, u, v, 3)));
  tops.push(...[[0, 0], [CT.w, 0]].map(([u, v]) => flatPt(CTS, CT_REST, u, v, 5)));
  for (const t of tops) {
    const s = scr(f, t);
    if (s.x > -40 && s.x < 1120 && s.y < 662) bad(`buyout: a top reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
  }
  const ink: P3[] = [];
  if (f < STORY[1].at) ink.push(...box(CAL_INK).map(([u, v]) => calPt(u, v)));
  if (f >= STORY[1].at + STORY[1].dur && f < STORY[2].at) {
    for (const b of [CT_INK.title, CT_INK.perp]) ink.push(...box(b).map(([u, v]) => flatPt(CTS, CT_REST, u, v, 0.6)));
    if (f >= T.plate[1]) ink.push(...box([30, 22, NPL.w - 30, NPL.d - 22]).map(([u, v]) => flatPt(NPS, pp, u, v, NPL.t)));
  }
  if (f >= STORY[2].at + STORY[2].dur) {
    if (f >= T.plaque[1] && (f < STORY[3].at || f >= STORY[3].at + STORY[3].dur)) for (const u of [PQ_INK.u0, PQ_INK.u1]) for (const t of [PQ_INK.t0, PQ_INK.t1]) ink.push(slopePt(qp, u, t));
    if (f >= T.cash[1] && f >= STORY[3].at + STORY[3].dur) { const tp = tagPose(cp); ink.push(...box([60, 14, TAG.w - 14, TAG.d - 12]).map(([u, v]) => flatPt(TGS, tp, u, v, TAG.t))); }
    if (f >= T.cert[1] && f >= STORY[3].at + STORY[3].dur) ink.push(...box(CERT_INK).map(([u, v]) => flatPt(CES, ep, u, v, 0.8)));
  }
  for (const p of ink) {
    const s = scr(f, p);
    if (s.y > 1490) bad(`buyout: print reaches y ${Math.round(s.y)} at f${f} (x ${Math.round(s.x)})`);
    if (s.y > 1000 && s.x > 930) bad(`buyout: print reaches x ${Math.round(s.x)} at y ${Math.round(s.y)}, f${f}`);
    if (s.x < 40) bad(`buyout: print is cut at the left edge (x ${Math.round(s.x)}) at f${f}`);
    if (s.y < 662) bad(`buyout: print in the caption band (y ${Math.round(s.y)}) at f${f}`);
  }
}
if (BAD.length) throw new Error(`${BAD.length} screen-rule breaks:\n` + [...new Set(BAD.map((b) => b.replace(/ at f\d+.*$/, "").replace(/\d+/g, "#")))].slice(0, 6).join("\n") + `\nsome: ${BAD.filter((_, i) => i % Math.ceil(BAD.length / 12) === 0).join("\n")}`);
// ★ the subjects are big: the calendar page > 66% of the width as the year is spoken, the contract > 60% and the name plate
//   > 50% once it has landed, the plaque > 60% on "$137.5", the whole money group > 75% once it has landed
const W_ = (f: number, a: P3, b: P3) => scr(f, b).x - scr(f, a).x;
{
  const w0 = W_(Y99, calPt(0, CAL.PH / 2), calPt(CAL.PW, CAL.PH / 2));
  const w1 = W_(T.plate[1] + 4, flatPt(CTS, CT_REST, 0, 360), flatPt(CTS, CT_REST, CT.w, 360));
  const pr = posePlate(T, 99999), w2 = W_(T.plate[1] + 4, flatPt(NPS, pr, 0, NPL.d / 2), flatPt(NPS, pr, NPL.w, NPL.d / 2));
  const qr = posePlaque(T, 99999), w3 = W_(STORY[3].at, slopePt(qr, 0, 0.5), slopePt(qr, PQ.L, 0.5));
  const cr = poseCash(T, 99999), er = poseCert(T, 99999);
  const w4 = W_(DONE, { x: cr.x - BRICK_EXT.x, h: 0, z: cr.z - BRICK_EXT.z }, flatPt(CES, er, CERT.w, 0));
  if (w0 < 710 || w1 < 640 || w2 < 520 || w3 < 640 || w4 < 760)
    throw new Error(`buyout: too small on screen (calendar ${Math.round(w0)}, contract ${Math.round(w1)}, plate ${Math.round(w2)}, plaque ${Math.round(w3)}, money ${Math.round(w4)} px)`);
}
// ★ nothing passes through anything: the plate's slide stays clear of the calendar (it passes in front of its foot), the
//   cash brick's slide stays right of the contract, the three money objects never overlap at rest, and nothing at the
//   money is visible before it moves in (each starts outside the frame)
{
  const ctRight = CT.x + (CT.w / 2) * Math.cos((CT.yaw * Math.PI) / 180) + (CT.d / 2) * Math.abs(Math.sin((CT.yaw * Math.PI) / 180));
  const cash0 = poseCash(T, T.cash[0]);
  if (cash0.x - BRICK_EXT.x - 30 < ctRight) throw new Error(`buyout: the cash brick starts over the contract (${Math.round(cash0.x - BRICK_EXT.x)} < ${Math.round(ctRight)})`);
  for (let f = T.plate[0]; f <= T.plate[1]; f++) {
    const p = posePlate(T, f);
    if (p.x - NPL.w / 2 - 20 < CAL.x + CAL.W / 2 && p.z - NPL.d / 2 - 20 < CAL.z) throw new Error(`buyout: the name plate's slide meets the calendar at f${f}`);
  }
  const cr = poseCash(T, 99999), er = poseCert(T, 99999), qr = posePlaque(T, 99999);
  if (cr.x + BRICK_EXT.x + 20 > er.x - CERT.w / 2) throw new Error("buyout: the cash brick and the certificate overlap");
  if (cr.z - BRICK_EXT.z - 60 < qr.z + 65 || er.z - CERT.d / 2 - 60 < qr.z + 65) throw new Error("buyout: the front row crowds the plaque");
  // each money object outside the frame on its first frame
  const outside = (f: number, pts: P3[]) => pts.every((p) => { const s = scr(f, p); return s.x < -10 || s.x > 1090 || s.y > 1930; }) ||
    // or wholly to one side
    pts.every((p) => scr(f, p).x < -10) || pts.every((p) => scr(f, p).x > 1090) || pts.every((p) => scr(f, p).y > 1930);
  const c0 = poseCash(T, T.cash[0]), e0 = poseCert(T, T.cert[0]), q0 = posePlaque(T, T.plaque[0]), p0 = posePlate(T, T.plate[0]);
  const cashPts = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => ({ x: c0.x + a * BRICK_EXT.x, h: 80, z: c0.z + b * BRICK_EXT.z }));
  const certPts = [[0, 0], [CERT.w, 0], [CERT.w, CERT.d], [0, CERT.d]].map(([u, v]) => flatPt(CES, e0, u, v));
  const pqPts = [0, PQ.L].flatMap((u) => [slopePt(q0, u, 1), slopePt(q0, u, 0)]);
  const npPts = [[0, 0], [NPL.w, 0], [NPL.w, NPL.d], [0, NPL.d]].map(([u, v]) => flatPt(NPS, p0, u, v));
  if (!outside(T.cash[0], cashPts)) throw new Error("buyout: the cash brick is already on screen when it starts to move");
  if (!outside(T.cert[0], certPts)) throw new Error("buyout: the certificate is already on screen when it starts to move");
  if (!outside(T.plaque[0], pqPts)) throw new Error("buyout: the plaque is already on screen when it starts to move");
  if (!outside(T.plate[0], npPts)) throw new Error("buyout: the name plate is already on screen when it starts to move");
  void BRICK; void CAL_ZBACK;
}

const M3D = buyoutModel(T);
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = v.y - 960 / v.z - m, y1 = v.y + 960 / v.z + m;
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};
const LP = (k: number, p: P3) => { const q = project(eyeOf(STORY[k]), p.x, DESK.floor - p.h, p.z); return [q.x, q.y] as const; };
const [clx, cly] = LP(0, CAL_MID), [ctx, cty] = LP(1, CT_MID), [mx, my] = LP(2, MONEY);

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[clx, cly + 40, 640, 460], [ctx, cty + 30, 680, 460], [mx, my + 20, 820, 480]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="buyout" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={M3D} params={{ f }} />
      </Obj>
    </World>
  </>
);

const SFX: PlaceSfx[] = [
  { s: "glide", at: T.plate[0] + 7, vol: 0.3, why: "buyout: the brass name plate glides in over the contract", mode: "peak" },
  { s: "thump", at: T.plaque[1], vol: 0.32, why: "buyout: the walnut plaque drops onto the ground", mode: "peak" },
  { s: "stack", at: T.cash[1], vol: 0.36, why: "buyout: the brick of bundles slides in and stops", mode: "peak" },
  { s: "paper", at: Math.round(T.cert[0] + 0.8 * (T.cert[1] - T.cert[0])), vol: 0.4, why: "buyout: the stock certificate touches down", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [clx, cly] },
  done: DONE, cam: CAM, sfx: SFX,
};
