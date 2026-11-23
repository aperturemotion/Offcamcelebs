import React from "react";
import { clamp01, GLIDE, EXIT, type Ground } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, camMoving, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { lawsuitModel, LG, CP, CT, EN, CPRINT, KPRINT, STACK_H, PIVOT, onComplaint, type LawP } from "../../three/props/lawsuit";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · THE LAWSUIT (cream) — three sentences, three beats on one table.
//  0 "That September, he sued DAZN, Golden Boy and Oscar De La Hoya for at least $280 million." The hand-over brings the
//    table in as a thick bundle of court papers falls from above the frame and lands on "sued" (gravity, its near edge first,
//    a slap flat and a short slide): the complaint's first page, the caption SAÚL ÁLVAREZ v. DAZN, GOLDEN BOY PROMOTIONS and
//    OSCAR DE LA HOYA (read as the voice names them) and COMPLAINT. On "$280" the camera pushes in on the claim: DAMAGES OF AT
//    LEAST / $280,000,000. What HE filed: no court's mark, nothing that says who was right.
//  1 "By November, they had agreed to part ways." The camera travels right to the PROMOTIONAL & BROADCAST AGREEMENT lying on
//    the table (DAZN and GOLDEN BOY on the left, ÁLVAREZ on the right). On "agreed" it tears between the parties: the halves
//    turn apart from the far edge as the tear runs down the sheet, and on "part ways" slide apart.
//  2 "The terms were never made public." A plain sealed kraft envelope slides in from the right over the torn halves' TERMS
//    and settles on them (the parties' names stay readable above it).
// ═══════════════════════════════════════════════════════════════════════════
const S = "lawsuit" as const;
const GROUND: Ground = "cream";
const SUED = word(S, 0, /^sued/), FIG = word(S, 0, /^\$280/);
const NOV = cue(S, 1), AGREED = word(S, 1, /^agreed/), PART = word(S, 1, /^part/);
const TERMS = word(S, 2, /^terms/), NEVER = word(S, 2, /^never/);

// ── the actions' frames ──
const FALL = [SUED - 12, SUED + 2] as const;           // the bundle falls from above the frame (gravity) …
const SLAP = [FALL[1], FALL[1] + 3] as const;           // … its near edge touches, it slaps down flat …
const SLIDE = [SLAP[1], SLAP[1] + 8] as const;          // … and slides to rest
const TEAR = [AGREED + 2, PART + 3] as const;           // the tear runs down the contract: the halves turn apart
const SPLIT = [TEAR[1] - 1, TEAR[1] + 12] as const;     // "part ways": they slide apart
const ENV_IN = [TERMS - 4, NEVER + 2] as const;         // the envelope slides in over the terms
const DONE = cueEnd(S, 2) + 4;
if (SPLIT[1] >= ENV_IN[0]) throw new Error("lawsuit: the halves are still parting when the envelope comes");
if (ENV_IN[1] + 2 > DONE) throw new Error("lawsuit: the envelope is still moving at the place's end");

const H0 = 980, TILT0 = (7 * Math.PI) / 180, PHI = (2.6 * Math.PI) / 180, SEP = 84, ENV0 = 1300;
const stackAt = (f: number): LawP["stack"] => {
  if (f < FALL[0]) return null;
  if (f < FALL[1]) {
    const u = (f - FALL[0]) / (FALL[1] - FALL[0]);
    return { dx: 80 - 56 * u, h: H0 * (1 - u * u), dz: -60 + 44 * u, tilt: TILT0 };   // free fall: the height drops as u²
  }
  if (f < SLAP[1]) { const u = (f - SLAP[0]) / (SLAP[1] - SLAP[0]); return { dx: 24 - 8 * u, h: 0, dz: -16 + 5 * u, tilt: TILT0 * (1 - u * u) }; }
  const u = GLIDE(clamp01((f - SLIDE[0]) / (SLIDE[1] - SLIDE[0])));
  return { dx: 16 * (1 - u), h: 0, dz: -11 * (1 - u), tilt: 0 };
};
const phiAt = (f: number) => PHI * EXIT(clamp01((f - TEAR[0]) / (TEAR[1] - TEAR[0])));
/** one sheet until the tear starts (the halves abut exactly), then a hair apart as it runs, then the slide */
const sepAt = (f: number) => (f < TEAR[0] ? 0 : 0.6 + SEP * GLIDE(clamp01((f - SPLIT[0]) / (SPLIT[1] - SPLIT[0]))));
const envAt = (f: number) => (f < ENV_IN[0] ? null : ENV0 * (1 - GLIDE(clamp01((f - ENV_IN[0]) / (ENV_IN[1] - ENV_IN[0])))));
const paramsAt = (f: number): LawP => ({ stack: stackAt(f), phi: phiAt(f), sep: sepAt(f), env: envAt(f) });

// ── the camera: the eye rides with the view, up and a little to the right, looking ~40° down onto the table (steeper than
//    038's desk: this place is read off its pages) ──
const EYE = { dx: 200, up: 1500, D: 2000 } as const;
const eyeOf = (v: { x: number; y: number }) => ({ x: v.x + EYE.dx, y: v.y - EYE.up, D: EYE.D });
const scr = (v: { x: number; y: number; z: number }, x: number, h: number, z: number) => {
  const q = project(eyeOf(v), x, LG.floor - h, z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: LG.floor - h, z: zoom };
  for (let i = 0; i < 16; i++) { const s = scr(v, x, h, z); v = { x: v.x + (s.x - sx) / zoom, y: v.y + (s.y - sy) / zoom, z: zoom }; }
  return v;
};
const mid = (r: readonly [number, number, number, number]) => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2] as const;
const PAGE = onComplaint(CP.W / 2, CP.D / 2 - 30);
const [fx, fy] = mid(CPRINT.figure);
const FIGP = onComplaint(fx, fy);
const KC = { x: LG.contract.x + 10, z: LG.contract.z + 40 };   // the torn contract and its envelope, a little toward the terms
const rot = (x: number, z: number, a: number) => ({ x: x * Math.cos(a) + z * Math.sin(a), z: -x * Math.sin(a) + z * Math.cos(a) });
/** a contract page point (page px) → table-local, for the half it lies on, at f */
const onContract = (px: number, py: number, f: number, side?: -1 | 1) => {
  const s = side ?? (px < CT.W / 2 ? -1 : 1), a = -s * phiAt(f);
  const r = rot(px - CT.W / 2 - PIVOT.x, py - CT.D / 2 - PIVOT.z, a);
  return { x: LG.contract.x + PIVOT.x + s * sepAt(f) + r.x, h: CT.T + 1, z: LG.contract.z + PIVOT.z + r.z };
};
const onEnvelope = (ex: number, ez: number, f: number) => {
  const r = rot(ex - EN.W / 2, ez - EN.D / 2, (EN.yaw * Math.PI) / 180);
  return { x: LG.contract.x + EN.x + (envAt(f) ?? 0) + r.x, h: CT.T + 0.3 + EN.T, z: LG.contract.z + EN.z + r.z };
};
const KT_TOPS = [onContract(0, 0, DONE, -1), onContract(CT.W, 0, DONE, 1), onContract(CT.W / 2 - 30, 0, DONE, -1), onContract(CT.W / 2 + 30, 0, DONE, 1)];
/** ★ the highest framing at `zoom` that puts `p` on the frame's centre line and keeps every point of `tops` at or below y
 *  `minTop` on screen (the caption band, with a margin for the camera's breathing) */
const highest = (p: { x: number; y: number; z: number }, zoom: number, tops: { x: number; h: number; z: number }[], minTop: number, sx = 540) => {
  for (let sy = 860; sy < 1400; sy += 2) {
    const v = aim(p.x, p.y, p.z, zoom, sx, sy);
    if (Math.min(...tops.map((t) => scr(v, t.x, t.h, t.z).y)) >= minTop) return v;
  }
  throw new Error(`lawsuit: no framing at zoom ${zoom} keeps the objects under the caption band`);
};
const Z = { page: 1.15, fig: 1.45, torn: 1.28, env: 1.34 } as const;
const KCP = { x: KC.x, y: CT.T, z: KC.z };
const CP_TOPS = [onComplaint(0, -6), onComplaint(CP.W, -6)].map((q) => ({ x: q.x, h: STACK_H + 5, z: q.z }));
const STORY: CamKey[] = [
  { at: -9999, ...highest(PAGE, Z.page, CP_TOPS, 690), dur: 1 },                 // the complaint's whole first page
  { at: FIG - 8, ...highest(FIGP, Z.fig, CP_TOPS, 690, 520), dur: 32 },           // "$280": in on the claim
  { at: NOV - 6, ...highest(KCP, Z.torn, KT_TOPS, 690, 565), dur: 44 },                 // "By November": across to the contract
  { at: ENV_IN[0] + 8, ...highest(KCP, Z.env, KT_TOPS, 690, 565), dur: 32 },            // the envelope settles: a little closer
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.35 });

// ── ★ module-load checks: the caption band, the Reel's buttons and caption strip ──
const LANDED = SLIDE[1];
{
  const tops = (f: number) => {
    const cps = [onComplaint(0, 0), onComplaint(CP.W, 0)].map((p) => ({ x: p.x, h: STACK_H + 5, z: p.z }));
    const ks = [onContract(0, 0, f, -1), onContract(CT.W, 0, f, 1), onContract(CT.W / 2 - 40, 0, f, -1), onContract(CT.W / 2 + 40, 0, f, 1)];
    const es = envAt(f) === null ? [] : [onEnvelope(0, 0, f), onEnvelope(EN.W, 0, f)];
    return [...cps, ...ks, ...es];
  };
  // readable print: [x0, y0, x1, y1] page rects on the complaint and on the contract's halves
  const reads = (f: number) => {
    const rs: { x: number; h: number; z: number }[][] = [];
    for (const r of [CPRINT.court, CPRINT.caption, CPRINT.claim]) rs.push([[r[0], r[1]], [r[2], r[1]], [r[0], r[3]], [r[2], r[3]]].map(([a, b]) => ({ ...onComplaint(a, b), h: STACK_H + 1 })));
    rs.push([[KPRINT.left[0], KPRINT.left[1]], [KPRINT.left[2], KPRINT.left[1]], [KPRINT.left[0], KPRINT.left[3]], [KPRINT.left[2], KPRINT.left[3]]].map(([a, b]) => onContract(a, b, f, -1)));
    rs.push([[KPRINT.right[0], KPRINT.right[1]], [KPRINT.right[2], KPRINT.right[1]], [KPRINT.right[0], KPRINT.right[3]], [KPRINT.right[2], KPRINT.right[3]]].map(([a, b]) => onContract(a, b, f, 1)));
    return rs;
  };
  const bad: string[] = [];
  const fail = (m: string) => { bad.push(m); };
  for (let f = LANDED; f <= DONE + 44; f++) {
    const v = camView(CAM, f);
    for (const p of tops(f)) {
      const s = scr(v, p.x, p.h, p.z);
      if (s.x < -40 || s.x > 1120) continue;
      if (s.y < 662) fail(`top (${p.x.toFixed(0)},${p.z.toFixed(0)}) y ${Math.round(s.y)} f${f}`);
    }
    if (camMoving(CAM, f) && CAM.some((k, i) => i > 0 && !k.drift && f > k.at && f < k.at + k.dur)) continue;   // a travel passes
    for (const r of reads(f)) {
      const q = r.map((p) => scr(v, p.x, p.h, p.z));
      if (q.every((s) => s.x < 0) || q.every((s) => s.x > 1080)) continue;
      for (const s of q) {
        if (s.y > 1500) fail(`print y ${Math.round(s.y)} (the Reel's caption strip) f${f}`);
        if (s.y > 1000 && s.y < 1700 && s.x > 940) fail(`print x ${Math.round(s.x)} y ${Math.round(s.y)} (the Reel's buttons) f${f}`);
        if (s.x < 20 || s.x > 1060) fail(`print cut by the frame's edge x ${Math.round(s.x)} f${f}`);
      }
    }
  }
  if (bad.length) throw new Error(`lawsuit: ${bad.length} screen-rule breaks, e.g. ${[...new Set(bad)].filter((_, i, a) => i % Math.ceil(a.length / 14) === 0).join("; ")}`);
}

const LAW3D = lawsuitModel();
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, LG.floor - 1500), y1 = Math.min(v.y + 960 / v.z + m, LG.floor + 600);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground={GROUND} pools={[[LG.stack.x, LG.floor - 60, 760, 520], [LG.contract.x, LG.floor - 60, 760, 520]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="table">
        <View3D name="lawsuit" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={LAW3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

export const LW = { fall: FALL, slap: SLAP, slide: SLIDE, tear: TEAR, split: SPLIT, envIn: ENV_IN, done: DONE } as const;
const SFX: PlaceSfx[] = [
  { s: "thump", at: SLAP[1], vol: 0.5, why: "the bundle of court papers slaps down flat on the table", mode: "peak" },
  { s: "tear", at: TEAR[0], end: SPLIT[0] + 4, vol: 0.45, why: "the contract tears in two between the parties", mode: "within" },
  { s: "paper", at: ENV_IN[1] - 4, vol: 0.4, why: "the envelope slides over the torn halves and settles", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: GROUND, Comp, align: () => "centre", focus: [LG.stack.x, LG.floor] },
  done: DONE, cam: CAM, sfx: SFX,
};
