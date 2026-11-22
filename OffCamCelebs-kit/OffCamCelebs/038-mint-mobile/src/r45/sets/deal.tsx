import React from "react";
import { ramp, clamp01, GLIDE, SETTLE, SOFT, EXIT, INOUT, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { dealModel, DG, BK, CS, CT, LID_OPEN, LPRINT, onRight, onLeft, sigAt, PEN_DIR, PEN_L, type DealP } from "../../three/props/deal";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · THE DEAL (dark) — three sentences, three beats on one desk.
//  0 "In 2023, T-Mobile agreed to buy it." The crane brings the place in on the bound MERGER AGREEMENT, lying open at its
//    signature page: T-Mobile's wordmark as letterhead, MERGER AGREEMENT and MAR 9 2023 read as it lands. On "agreed" a black lacquer
//    fountain pen glides in, its nib comes down on the signature line and signs (the ink drawn on as it moves), lifts and is
//    drawn away.
//  1 "Up to $1.35 billion." The camera crosses the gutter to the facing page and pushes onto the price clause: "UP TO",
//    heavy and underlined, over "$1,350,000,000" (the twist of the film hangs on those two words).
//  2 "On closing day, $420 million in cash plus $536 million in shares." The agreement slides away off the desk; an aluminium
//    cash case slides in, its two latch levers flip down (click, click) and its lid swings open on its hinges: twelve
//    strapped bundles in black velvet, and in the lid's lining a bank card, $420,000,000 CASH. On "plus" the camera follows
//    through to the right as a stack of T-Mobile share certificates (its wordmark, the T in the vignette) slides in beside the case: SHARES, $536,000,000.
//  The two closing figures are never shown together, and never summed: each framing holds one label and one figure.
// ═══════════════════════════════════════════════════════════════════════════
const S = "deal" as const;
const AGREED = word(S, 0, /^agreed/), UP = cue(S, 1), B1END = cueEnd(S, 1), PLUS = word(S, 2, /^plus/);

// ── the actions' frames ──
const PEN_IN = [AGREED - 9, AGREED + 6] as const;      // the pen glides in to hover over the line
const PEN_DOWN = [PEN_IN[1], PEN_IN[1] + 4] as const;  // its nib comes down
const SIGN = [PEN_DOWN[1], PEN_DOWN[1] + 21] as const; // it signs
const PEN_UP = [SIGN[1], SIGN[1] + 4] as const;        // it lifts
const PEN_OUT = [PEN_UP[1], PEN_UP[1] + 14] as const;  // and is drawn away
const BOOK_OUT = [B1END - 4, B1END + 11] as const;     // closing day: the agreement slides off the desk (as "billion" ends)
const CASE_IN = [B1END + 8, B1END + 25] as const;      // the case slides in
const LATCH: [number, number][] = [[CASE_IN[1] + 1, CASE_IN[1] + 6], [CASE_IN[1] + 3, CASE_IN[1] + 8]];
const LID = [CASE_IN[1] + 6, CASE_IN[1] + 37] as const; // the lid swings open (SOFT, >= 30 f); its card reads from about "$420"
const CERT_IN = [PLUS + 1, PLUS + 25] as const;        // the share certificates slide in beside the case
if (PEN_OUT[1] > BOOK_OUT[0]) throw new Error("deal: the pen is still out when the agreement leaves");

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const SIG0 = sigAt(0), SIG1 = sigAt(1);
const nibOn = (t: number) => { const q = sigAt(t); return onRight(q.x, q.y); };
const HOVER = 24;
const penAt = (f: number): [number, number, number] | null => {
  if (f < PEN_IN[0] || f >= PEN_OUT[1]) return null;
  const a = onRight(SIG0.x, SIG0.y), b = onRight(SIG1.x, SIG1.y);
  if (f < PEN_IN[1]) {
    const t = GLIDE(clamp01((f - PEN_IN[0]) / (PEN_IN[1] - PEN_IN[0])));
    return [a.x + 640 * (1 - t), a.y + HOVER + 90 * (1 - t), a.z + 120 * (1 - t)];
  }
  if (f < PEN_DOWN[1]) { const t = SETTLE(clamp01((f - PEN_DOWN[0]) / (PEN_DOWN[1] - PEN_DOWN[0]))); return [a.x, a.y + HOVER * (1 - t), a.z]; }
  if (f < SIGN[1]) { const n = nibOn(INOUT(clamp01((f - SIGN[0]) / (SIGN[1] - SIGN[0])))); return [n.x, n.y, n.z]; }
  if (f < PEN_UP[1]) { const t = SETTLE(clamp01((f - PEN_UP[0]) / (PEN_UP[1] - PEN_UP[0]))); return [b.x, b.y + HOVER * t, b.z]; }
  const t = EXIT(clamp01((f - PEN_OUT[0]) / (PEN_OUT[1] - PEN_OUT[0])));
  return [b.x + 760 * t, b.y + HOVER + 110 * t, b.z + 150 * t];
};
const sigAtF = (f: number) => INOUT(clamp01((f - SIGN[0]) / (SIGN[1] - SIGN[0])));
const bookDxAt = (f: number) => -1500 * EXIT(clamp01((f - BOOK_OUT[0]) / (BOOK_OUT[1] - BOOK_OUT[0])));
const caseDxAt = (f: number) => 1300 * (1 - GLIDE(clamp01((f - CASE_IN[0]) / (CASE_IN[1] - CASE_IN[0]))));
const certDxAt = (f: number) => 1150 * (1 - GLIDE(clamp01((f - CERT_IN[0]) / (CERT_IN[1] - CERT_IN[0]))));
// ★ the agreement leaves before the case can reach it (they share the desk)
for (let f = BOOK_OUT[0]; f <= CASE_IN[1]; f++) {
  const bookR = DG.book.x + BK.W + 8 + bookDxAt(f), caseL = DG.case.x - CS.W / 2 - 4 + caseDxAt(f);
  if (f >= CASE_IN[0] && bookR > caseL - 20) throw new Error(`deal: the case would hit the agreement at f${f}`);
}
const paramsAt = (f: number): DealP => ({
  bookDx: bookDxAt(f), sig: f < SIGN[0] ? 0 : sigAtF(f), pen: penAt(f),
  caseDx: caseDxAt(f), latch: [SETTLE(clamp01((f - LATCH[0][0]) / 5)), SETTLE(clamp01((f - LATCH[1][0]) / 5))],
  lid: SOFT(clamp01((f - LID[0]) / (LID[1] - LID[0]))), certDx: certDxAt(f),
  showBook: f <= BOOK_OUT[1] + 1, showCase: f >= CASE_IN[0] - 1, showCerts: f >= CERT_IN[0] - 1,
  yaw: 1.2 - 2.4 * ramp(f, cue(S, 0), cueEnd(S, 2) + 40, TRAVEL),
});

// ── the camera: the eye rides with the view (up and to the right, ~36° down onto the desk) ──
const eyeOf = (v: { x: number; y: number }) => ({ x: v.x + 380, y: v.y - 1250, D: 1800 });
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: DG.floor - h };
  for (let i = 0; i < 12; i++) {
    const q = project(eyeOf(v), x, DG.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
const RP = onRight(BK.W / 2, BK.D / 2 - 20);
const [cx0, cy0, cx1, cy1] = LPRINT.clause;
const LP = onLeft((cx0 + cx1) / 2, (cy0 + cy1) / 2);
/** the open case, centred and filling ~63% of the width: the highest framing whose open lid stays under the band (with a
 *  margin for the camera's breathing) and whose front stays above the Reel's caption strip */
const caseExtent = (v: { x: number; y: number; z: number }) => {
  const e = eyeOf(v), th = (LID_OPEN * Math.PI) / 180, hy = CS.FEET + CS.BH, hz = DG.case.z - CS.D / 2;
  const scr = (x: number, h: number, z: number) => { const q = project(e, x, DG.floor - h, z); return 960 + (q.y - v.y) * v.z; };
  let top = 1e9, bot = -1e9;
  for (const sx of [-1, 1]) {
    for (const [ly, lz] of [[CS.LH, 0], [CS.LH, CS.D], [0, CS.D]]) top = Math.min(top, scr(DG.case.x + (sx * CS.W) / 2, hy + ly * Math.cos(th) + lz * Math.sin(th), hz - ly * Math.sin(th) + lz * Math.cos(th)));
    bot = Math.max(bot, scr(DG.case.x + (sx * CS.W) / 2, 0, DG.case.z + CS.D / 2 + 12));
  }
  return { top, bot };
};
const CASE_Z = 1.26;
const CASE_V = (() => {
  for (let sy = 900; sy < 1400; sy += 2) {
    const v = aim(DG.case.x, CS.BH, DG.case.z, CASE_Z, 540, sy), ex = caseExtent(v);
    if (ex.top >= 712) { if (ex.bot > 1490) throw new Error(`deal: the open case does not fit between the band and the Reel strip (${Math.round(ex.top)}-${Math.round(ex.bot)})`); return v; }
  }
  throw new Error("deal: no framing for the case");
})();
/** the certificates centred, the top one ~60% of the width; the pan keeps the case's zoom and height (its lid never rises
 *  into the band while it is in view), then a push in lands the final framing */
const CERT_Z = 1.4;
const CERT_F = aim(DG.certs.x, 6, DG.certs.z, CERT_Z, 540, 1050);
const CERT_P = { x: aim(DG.certs.x, 6, DG.certs.z, CASE_Z, 540, 1050).x, y: CASE_V.y, z: CASE_Z };
const STORY: CamKey[] = [
  { at: -9999, ...aim(RP.x + 22, RP.y, RP.z, 1.27, 540, 1040), dur: 1 },                 // the signature page, whole
  { at: UP - 1, ...aim(LP.x + 10, LP.y, LP.z, 1.95, 540, 1010), dur: 40 },                // "Up to": the price clause
  { at: B1END + 3, ...CASE_V, dur: 44 },                                                  // closing day: the case
  { at: PLUS - 2, ...CERT_P, dur: 40 },                                                   // "plus": across to the certificates
  { at: PLUS + 38, ...CERT_F, dur: 34 },                                                  // and in on them
];
const DONE = Math.max(cueEnd(S, 2) + 4, CERT_IN[1] + 2, LID[1] + 1);
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.35 });

// ★ the caption band holds: every object's top stays below 662 on screen at every frame the place is up
{
  const pts = (f: number): [number, number, number][] => {
    const p = paramsAt(f), out: [number, number, number][] = [];
    if (p.showBook) for (const sx of [-1, 1]) out.push([DG.book.x + p.bookDx + sx * BK.W, 14, DG.book.z - BK.D / 2 - 7]);
    if (p.pen) out.push([p.pen[0] + PEN_DIR.x * PEN_L, p.pen[1] + PEN_DIR.y * PEN_L, p.pen[2] + PEN_DIR.z * PEN_L]);
    if (p.showCase) {
      const th = (LID_OPEN * p.lid * Math.PI) / 180, hy = CS.FEET + CS.BH, hz = DG.case.z - CS.D / 2;
      for (const [ly, lz] of [[CS.LH, 0], [CS.LH, CS.D], [0, CS.D]]) for (const sx of [-1, 1])
        out.push([DG.case.x + p.caseDx + (sx * CS.W) / 2, hy + ly * Math.cos(th) + lz * Math.sin(th), hz - ly * Math.sin(th) + lz * Math.cos(th)]);
    }
    if (p.showCerts) for (const sx of [-1, 1]) out.push([DG.certs.x + p.certDx + (sx * CT.W) / 2, 14, DG.certs.z - CT.D / 2 - 30]);
    return out;
  };
  for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
    const v = camView(CAM, f), e = eyeOf(v);
    for (const [x, h, z] of pts(f)) {
      const q = project(e, x, DG.floor - h, z);
      const sx = 540 + (q.x - v.x) * v.z, sy = 960 + (q.y - v.y) * v.z;
      if (sx < -40 || sx > 1120) continue;
      if (sy < 662) throw new Error(`deal: a top (${x.toFixed(0)},${h.toFixed(0)},${z.toFixed(0)}) reaches y ${Math.round(sy)} on screen at f${f}`);
    }
  }
}

const DEAL3D = dealModel();
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, DG.floor - 700), y1 = Math.min(v.y + 960 / v.z + m, DG.floor + 560);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[DG.book.x, DG.floor + 60, 720, 420], [DG.case.x, DG.floor - 60, 560, 420], [DG.certs.x, DG.floor + 20, 460, 320]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="deal" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={DEAL3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

export const DL = { penIn: PEN_IN, sign: SIGN, penOut: PEN_OUT, bookOut: BOOK_OUT, caseIn: CASE_IN, latch: LATCH, lid: LID, certIn: CERT_IN, done: DONE } as const;
// ★ 2026-11-22 re-score from the EarnEdits pack: the pen's own stroke, paper, the latches, the banknotes in the case
const SFX: PlaceSfx[] = [
  { s: "wsoft", at: PEN_IN[0] + 3, end: PEN_IN[1], vol: 0.28, why: "the pen glides in over the signature line", mode: "peak" },
  { s: "pensign", at: SIGN[0], end: SIGN[1], vol: 0.45, why: "the nib's scratch as the pen signs", mode: "within" },
  { s: "pslide", at: BOOK_OUT[1] - 3, end: BOOK_OUT[1], vol: 0.4, why: "the agreement slides off the desk", mode: "peak" },
  { s: "thump", at: CASE_IN[1] - 2, vol: 0.5, why: "the cash case slides in and settles on the desk", mode: "peak" },
  { s: "ckey", at: LATCH[0][1] - 1, vol: 0.55, why: "the case's left latch flips open", mode: "peak" },
  { s: "ckey", at: LATCH[1][1] - 1, vol: 0.5, why: "the case's right latch flips open", mode: "peak" },
  { s: "notes", at: LID[0] + 2, end: CERT_IN[0], vol: 0.35, why: "the lid lifts on the banknotes", mode: "within" },
  { s: "pland", at: CERT_IN[1] - 6, vol: 0.5, why: "the share certificates slide in and land beside the case", mode: "peak" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [RP.x, DG.floor] },
  done: DONE, cam: CAM, sfx: SFX,
};
void lerp;
