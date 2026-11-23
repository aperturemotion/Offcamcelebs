import React from "react";
import { ramp, clamp01, GLIDE, SETTLE, EXIT, INOUT, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { dealModel, DG, PG, Y_COVER, NS, TPRINT, RPRINT, onPage, sigAt, coverProfile, PEN_DIR, PEN_L, type DealP } from "../../three/props/deal";
import type { PlaceDef, PlaceSfx } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 3 · THE DEAL (dark) — one sentence, one contract on a desk.
//  "The deal, with the streaming service DAZN and his promoter Golden Boy, 11 fights over five years, worth at least
//   $365 million."
//  The crane brings the place in as a thick, spine-bound contract on its legal-blue backing card slides onto the desk from
//  the right and lands (paper) by "DAZN": its title page reads DAZN and GOLDEN BOY in plain type over PROMOTIONAL &
//  BROADCAST AGREEMENT. After "Golden Boy" the title page turns (flip): it peels from its free edge, sweeps over the spine
//  and lies down to the left, uncovering the key-terms page. The camera follows the voice down it: 11 FIGHTS on "11 fights",
//  5 YEARS on "five years", AT LEAST $365,000,000 on "worth at least $365". On "worth" a black lacquer fountain pen glides
//  in (glide), signs the line under the figure (pen), lifts and is drawn away. The hand-over carries the contract off.
// ═══════════════════════════════════════════════════════════════════════════
const S = "deal" as const;
const DAZN = word(S, 0, /^Dazon/), GB = word(S, 0, /^Goldenboy/), ELEVEN = word(S, 0, /^11/), FIVE = word(S, 0, /^five/);
const WORTH = word(S, 0, /^worth/), FIG = word(S, 0, /^\$365/), END = cueEnd(S, 0);

// ── the actions' frames ──
const SLIDE = [DAZN - 30, DAZN - 3] as const;          // the contract slides onto the desk and lands by "DAZN"
const FLIP = [GB + 3, GB + 25] as const;               // the title page turns after "Golden Boy"
const PEN_IN = [WORTH - 2, WORTH + 12] as const;       // the pen glides in over the signature line
const PEN_DOWN = [PEN_IN[1], PEN_IN[1] + 4] as const;  // its nib comes down
const SIGN = [PEN_DOWN[1], PEN_DOWN[1] + 28] as const; // it signs
const PEN_UP = [SIGN[1], SIGN[1] + 4] as const;        // it lifts
const PEN_OUT = [PEN_UP[1], PEN_UP[1] + 15] as const;  // and is drawn away
if (FLIP[1] > ELEVEN + 8) throw new Error("deal: the title page is still turning when 11 FIGHTS should read");
if (PEN_OUT[1] > END + 4) throw new Error("deal: the pen is still out when the place is done");

const SIG0 = sigAt(0), SIG1 = sigAt(1);
const nibOn = (t: number) => { const q = sigAt(t); const p = onPage(q.x, q.y); return { ...p, y: p.y + 0.9 }; };
const HOVER = 24;
const penAt = (f: number): [number, number, number] | null => {
  if (f < PEN_IN[0] || f >= PEN_OUT[1]) return null;
  const a = nibOn(0), b = nibOn(1);
  if (f < PEN_IN[1]) {
    const t = GLIDE(clamp01((f - PEN_IN[0]) / (PEN_IN[1] - PEN_IN[0])));
    return [a.x + 680 * (1 - t), a.y + HOVER + 90 * (1 - t), a.z + 120 * (1 - t)];
  }
  if (f < PEN_DOWN[1]) { const t = SETTLE(clamp01((f - PEN_DOWN[0]) / (PEN_DOWN[1] - PEN_DOWN[0]))); return [a.x, a.y + HOVER * (1 - t), a.z]; }
  if (f < SIGN[1]) { const n = nibOn(INOUT(clamp01((f - SIGN[0]) / (SIGN[1] - SIGN[0])))); return [n.x, n.y, n.z]; }
  if (f < PEN_UP[1]) { const t = SETTLE(clamp01((f - PEN_UP[0]) / (PEN_UP[1] - PEN_UP[0]))); return [b.x, b.y + HOVER * t, b.z]; }
  const t = EXIT(clamp01((f - PEN_OUT[0]) / (PEN_OUT[1] - PEN_OUT[0])));
  return [b.x + 780 * t, b.y + HOVER + 110 * t, b.z + 150 * t];
};
void SIG0; void SIG1;
const sigAtF = (f: number) => (f < SIGN[0] ? 0 : INOUT(clamp01((f - SIGN[0]) / (SIGN[1] - SIGN[0]))));
const docDxAt = (f: number) => 1150 * (1 - GLIDE(clamp01((f - SLIDE[0]) / (SLIDE[1] - SLIDE[0]))));
const docYawAt = (f: number) => -7 * (1 - GLIDE(clamp01((f - SLIDE[0]) / (SLIDE[1] - SLIDE[0]))));
const turnAt = (f: number) => INOUT(clamp01((f - FLIP[0]) / (FLIP[1] - FLIP[0])));
const yawAt = (f: number) => 1.6 - 3.2 * ramp(f, cue(S, 0), END + 40, TRAVEL);
const paramsAt = (f: number): DealP => ({ docDx: docDxAt(f), docYaw: docYawAt(f), turn: turnAt(f), sig: sigAtF(f), pen: penAt(f), yaw: yawAt(f) });

// ── the scene's own transforms, for the checks: the contract's slide and turn, then the scene's yaw about its pivot ──
const toScene = (x: number, h: number, z: number, f: number) => {
  const yw = (yawAt(f) * Math.PI) / 180, dx = x - DG.pivot.x, dz = z - DG.pivot.z;
  return { x: DG.pivot.x + dx * Math.cos(yw) + dz * Math.sin(yw), y: DG.floor - h, z: DG.pivot.z - dx * Math.sin(yw) + dz * Math.cos(yw) };
};
const docPt = (lx: number, h: number, lz: number, f: number) => {
  const a = (docYawAt(f) * Math.PI) / 180;
  return toScene(DG.doc.x + docDxAt(f) + lx * Math.cos(a) + lz * Math.sin(a), h, DG.doc.z - lx * Math.sin(a) + lz * Math.cos(a), f);
};

// ── the camera: the eye rides with the view (up and to the right, looking down onto the desk) ──
const eyeOf = (v: { x: number; y: number }) => ({ x: v.x + 150, y: v.y - 1450, D: 1800 });   // a little right: the print stays upright
const aim = (x: number, h: number, z: number, zoom: number, sx = 540, sy = 960) => {
  let v = { x, y: DG.floor - h };
  for (let i = 0; i < 12; i++) {
    const q = project(eyeOf(v), x, DG.floor - h, z);
    v = { x: q.x - (sx - 540) / zoom, y: q.y - (sy - 960) / zoom };
  }
  return { ...v, z: zoom };
};
/** a framing at `zoom` whose FAR edge (the backing card's head) lands at screen y `top`: the contract runs down from just
 *  under the caption band, and the camera's push and pull walk the reading down the page */
const FAR = onPage(PG.W / 2, -PG.BTOP);
const aimTop = (zoom: number, top: number, py: number, dx = 0) => {
  const P = onPage(PG.W / 2 + dx, py);
  let sy = 960, v = aim(P.x, P.y, P.z, zoom, 540, sy);
  for (let i = 0; i < 20; i++) {
    const e = eyeOf(v), q = project(e, FAR.x, DG.floor - PG.BACK - PG.T, FAR.z);
    sy += top - (960 + (q.y - v.y) * zoom);
    v = aim(P.x, P.y, P.z, zoom, 540, sy);
  }
  return v;
};
const STORY: CamKey[] = [
  { at: -9999, ...aimTop(1.5, 752, TPRINT.marks[1]), dur: 1 },          // the title page: the parties, the title (low enough for the turn)
  { at: GB + 12, ...aimTop(1.75, 702, RPRINT.row1), dur: 30 },       // "11 fights": in on the first row
  { at: FIVE - 3, ...aimTop(1.62, 702, RPRINT.row2), dur: 30 },     // "five years"
  { at: WORTH + 4, ...aimTop(1.45, 702, RPRINT.row3[1]), dur: 30 },        // "worth at least $365": the figure and the signature under it
];
const DONE = Math.max(END + 4, PEN_OUT[1] + 2);
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.3 });

const screenOf = (f: number, p: { x: number; y: number; z: number }) => {
  const v = camView(CAM, f), e = eyeOf(v), q = project(e, p.x, p.y, p.z);
  return { x: 540 + (q.x - v.x) * v.z, y: 960 + (q.y - v.y) * v.z };
};
// ★ the caption band holds: every object's top stays below 662 on screen at every frame the place is up (the contract's far
//   corners, the turning title page's whole far edge, the pen's cap)
{
  for (let f = cue(S, 0) - 6; f <= DONE + 44; f++) {
    const pts: { x: number; y: number; z: number }[] = [];
    for (const sx of [-1, 1]) pts.push(docPt(sx * (PG.W / 2 + PG.BX), PG.BACK + PG.T, -PG.D / 2 - PG.BTOP, f));
    const { X, Y } = coverProfile(turnAt(f));
    for (let i = 0; i <= NS; i += 4) pts.push(docPt(-PG.W / 2 + X[i], Y_COVER + Y[i] + 0.3, -PG.D / 2, f));
    const pen = penAt(f);
    if (pen) pts.push(toScene(pen[0] + PEN_DIR.x * PEN_L, pen[1] + PEN_DIR.y * PEN_L, pen[2] + PEN_DIR.z * PEN_L, f));
    for (const p of pts) {
      const s = screenOf(f, p);
      if (s.x < -40 || s.x > 1120) continue;
      if (s.y < 662) throw new Error(`deal: a top reaches y ${Math.round(s.y)} on screen at f${f} (x ${Math.round(s.x)})`);
    }
  }
}
// ★ the print reads: every key line stays inside x 60 … 940 and above y 1480 while the voice says it
{
  const lines: [number, number, number, number][] = [
    [DAZN, GB + 3, TPRINT.marks[0], TPRINT.marks[1]], [GB, FLIP[0], TPRINT.title[0], TPRINT.title[1]],
    [ELEVEN, FIVE - 3, RPRINT.row1, RPRINT.row1], [FIVE, WORTH + 4, RPRINT.row2, RPRINT.row2], [FIG, END, RPRINT.row3[0], RPRINT.row3[1]],
  ];
  for (const [a, b, py0, py1] of lines) for (let f = a; f <= b; f++) for (const py of [py0, py1]) for (const px of [44, PG.W - 44]) {
    const p = onPage(px, py), s = screenOf(f, toScene(p.x, p.y, p.z, f));
    if (s.x < 60 || s.x > 940 || s.y > 1480 || s.y < 662) throw new Error(`deal: the print at page (${px},${py}) is at screen (${Math.round(s.x)},${Math.round(s.y)}) at f${f}`);
  }
}

const DEAL3D = dealModel();
const rectAt = (f: number) => {
  const v = camView(CAM, f), m = 240 / v.z;
  const x0 = v.x - 540 / v.z - m, x1 = v.x + 540 / v.z + m;
  const y0 = Math.max(v.y - 960 / v.z - m, DG.floor - 700), y1 = Math.min(v.y + 960 / v.z + m, DG.floor + 620);
  return { x: Math.floor(x0), y: Math.floor(y0), w: Math.ceil(x1 - x0), h: Math.ceil(y1 - y0) };
};

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="dark" pools={[[DG.doc.x, DG.floor + 40, 760, 520], [DG.doc.x - 420, DG.floor + 80, 420, 300]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="deal" rect={rectAt(f)} eye={eyeOf(camView(CAM, f))} make={DEAL3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);

export const DL = { slide: SLIDE, flip: FLIP, penIn: PEN_IN, sign: SIGN, penOut: PEN_OUT, done: DONE } as const;
const SFX: PlaceSfx[] = [
  { s: "paper", at: SLIDE[1] - 2, vol: 0.45, why: "the contract slides onto the desk and lands", mode: "peak" },
  { s: "flip", at: Math.round((FLIP[0] + FLIP[1]) / 2), vol: 0.45, why: "the title page turns over the spine", mode: "peak" },
  { s: "glide", at: PEN_IN[0] + 5, vol: 0.25, why: "the pen glides in over the signature line", mode: "peak" },
  { s: "pen", at: SIGN[0], end: SIGN[1], vol: 0.45, why: "the nib's scratch as the pen signs", mode: "within" },
];

export const PLACE: PlaceDef = {
  set: { id: S, ground: "dark", Comp, align: () => "centre", focus: [DG.doc.x, DG.floor] },
  done: DONE, cam: CAM, sfx: SFX,
};
