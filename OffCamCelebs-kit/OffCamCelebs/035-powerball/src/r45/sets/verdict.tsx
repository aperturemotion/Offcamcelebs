import React from "react";
import { ramp, clamp01 } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, type CamKey } from "../camera";
import { TOTAL_FRAMES } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { verdictModel, anchors, hullPoints, VD_EYE } from "../../three/props/verdict";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · THE VERDICT (dark; the film's last place, to its end) — a folded newspaper front page on the desk, a bank deposit
// bag with a little cash, and the real rubber stamp.
//  0 "So, here's the audit." The place opens CLOSE on the paper's giant $847,000,000 (one object, framed large).
//  1 "847 million on the headline." Held on the front page; on "headline" a slow pull back shows its masthead over the figure.
//  2 "About 190 in the bank." Follow-through right and down to the deposit bag: a bundle half out of its mouth and two more
//    beside it, visibly little money (no plate: the caption carries 190); the slider runs further open (the zip).
//  3 "Our rating: inflated." Back up to the headline: the stamp glides in from beyond the left edge, squares over the page,
//    presses INFLATED in red under the figure on "inflated" (the caption leaves the word to the stamp, objWords), lifts and
//    is drawn away left. Its index label stays a blank ruled frame until the press.
//  4 "Send us who to audit next." A slow pull back to the cover frame: the paper's $847,000,000 above, the bag and its cash
//    below, settled to the film's last frame.
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const ABOUT = cue(S, 2), BANK = word(S, 2, /^bank/i), RATING = cue(S, 3), INFL = word(S, 3, /^inflated/i);
const HEADLINE = word(S, 1, /^headline/i);
/** the stamp's journey (frames) and the zip's run */
export const VD = {
  inA: RATING - 4, overA: INFL - 10, pressA: INFL, inkA: INFL, inkN: 2,
  holdTo: INFL + 7, liftTo: INFL + 13, goneAt: INFL + 27,
  zipA: ABOUT + 22, zipB: ABOUT + 50,
} as const;
export const stampT = (f: number) => {
  if (f <= VD.inA) return 0;
  if (f < VD.overA) return ramp(f, VD.inA, VD.overA, (t) => t);
  if (f < VD.pressA) return 1 + ramp(f, VD.overA, VD.pressA, (t) => t);
  if (f < VD.holdTo) return 2;
  if (f < VD.liftTo) return 2 + ramp(f, VD.holdTo, VD.liftTo, (t) => t);
  if (f < VD.goneAt) return 3 + ramp(f, VD.liftTo, VD.goneAt, (t) => t);
  return 4;
};

// ── the camera: framings from the model's own anchors (layer px, projected through the place's eye). ★ The caption band
//    holds at every frame: the paper lies ABOVE the bag on screen, so every move here is a pull back or a push in anchored
//    on the paper's top edge (kept ≥ ~690 on screen): nothing ever rises through the band, the bag comes up from below. ──
const A = anchors();
const P = (a: { x: number; y: number; z: number }) => project(VD_EYE, a.x, a.y, a.z);
const FIG = P(A.figure), IMP = P(A.impression), BAG = P(A.bag);
/** the paper's top edge (layer y) */
const PTOP = Math.min(...hullPoints().paper.map(([x, y, z]) => project(VD_EYE, x, -y, z).y));
/** a key that puts layer x `cx` at screen x `sx` and the paper's top edge at screen y `top`, at zoom z */
const key = (cx: number, sx: number, top: number, z: number) => ({ x: cx - (sx - 540) / z, y: PTOP - (top - 960) / z, z });
/** the layer x-range of the objects named (their hulls projected) */
const span = (...ks: ("paper" | "bag" | "pile")[]) => {
  const H = hullPoints(); const ps = ks.flatMap((k) => H[k].map(([x, y, z]) => project(VD_EYE, x, -y, z)));
  return { x0: Math.min(...ps.map((p) => p.x)), x1: Math.max(...ps.map((p) => p.x)), y1: Math.max(...ps.map((p) => p.y)) };
};
/** the zoom that fits a span across the frame and keeps its foot above y 1470 (the Reel's caption area), the paper's top at `top` */
const fit = (sp: { x0: number; x1: number; y1: number }, w: number, top: number, zmax: number) => Math.min(zmax, w / (sp.x1 - sp.x0), (1470 - top) / (sp.y1 - PTOP));
const ALL = span("paper", "bag", "pile"), MON = span("bag", "pile");
const ENTER = key(FIG.x, 540, 700, 2.4);
const HEAD = key(FIG.x, 545, 712, 1.8);
const MONEY = key((MON.x0 + MON.x1) / 2, 540, 702, fit(MON, 900, 702, 1.5));
const PRESS = key(IMP.x, 650, 704, 2.05);   // ★ at 592 a sliver of the bag stood alone at the right edge during the push
const COVER = key((ALL.x0 + ALL.x1) / 2, 530, 714, fit(ALL, 960, 714, 1.1));
const STORY: CamKey[] = [
  { at: -9999, ...ENTER, dur: 1 },                      // frame 1 of the place: close on the figure
  { at: HEADLINE - 26, ...HEAD, dur: 40, drift: true }, // "on the headline": a slow pull back to show the masthead
  { at: ABOUT - 4, ...MONEY, dur: 44 },                 // "About 190": pull back and down: the bag comes up from below
  { at: BANK + 8, ...PRESS, dur: 42 },                  // "Our rating": in on the headline for the stamp
  { at: VD.goneAt - 1, ...COVER, dur: 44 },             // "Send us who to audit next": the cover frame, settled to the end
];
export const VD_CAM: CamKey[] = alive("verdict", STORY, TOTAL_FRAMES, { amp: 0.4 });

const VD3D = verdictModel({ word: "INFLATED" });
const smooth = (t: number) => t * t * (3 - 2 * t);

export const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={VD_CAM} f={f} ground="dark" pools={[[FIG.x, FIG.y + 40, 900, 620], [BAG.x, BAG.y, 620, 420]]} />
    <World keys={VD_CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="verdict" rect={{ x: -560, y: 760, w: 2200, h: 1400 }} eye={VD_EYE} make={VD3D}
          params={{ stamp: stampT(f), ink: ramp(f, VD.inkA, VD.inkA + VD.inkN, (t) => t), word: f >= VD.pressA ? 1 : 0,
            zip: smooth(clamp01((f - VD.zipA) / (VD.zipB - VD.zipA))),
            yaw: -1.4 + 2.6 * ramp(f, cue(S, 0), cueEnd(S, 4), smooth) }} />
      </Obj>
    </World>
  </>
);
export const VerdictSet = { id: S, ground: "dark" as const, Comp: Verdict, align: () => "centre" as const, focus: [FIG.x, FIG.y] as [number, number] };
