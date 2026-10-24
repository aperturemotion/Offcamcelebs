import React from "react";
import { ramp, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { SOTO } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { sotoModel, PL, PH, FELT_Y, FELT_X0, FINIAL_TOP, GLASS_TOP, GC, PLAQUE_Y } from "../../three/props/soto";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 5 · THE COMPARISON (dark) — a felt METS pennant on its stand, and a baseball in a glass case on a pedestal (rebuilt
// 2026-10-23: the user, "the flag just stands still. You can make it wave… when entering scenes… don't show both visuals at
// once, ever… one of the visuals… in focus. And then in some part of the scene, the camera can zoom out to show both… The ball
// can be made more realistic… the glass, the label, it can all be made better").
//  0 "A year later, Juan Soto signed with the Mets for 765 million dollars." CLOSE on the pennant alone, its felt waving; on
//    "for 765 million" the camera follows through to the case: the ball, and the case's one engraved plaque, $765,000,000.
//  1 "Nothing deferred." The case's light flickers on under the ball (no plate says it), and the camera pulls out to show both.
// ★ The film never ranks the two totals (15 years against 10): the case shows Soto's figure, no more.
// ═══════════════════════════════════════════════════════════════════════════
const S = "soto" as const;
const FOR = word(S, 0, /^for/), NOTH = cue(S, 1);
export const ST = { lampA: NOTH, lampN: 9 } as const;
const FLOOR = 1500;
// ★ the case on the LEFT, the pennant on the right: the camera travels left from the pennant to the case, so the plaque
//   enters from the frame's left edge, never under the Reel's buttons
const FLAG = { x: 740, z: -60 }, BALL = { x: 120, z: -40 };
const EYE = { x: 960, y: 400, D: 2000 };
const pr = (x: number, y: number, z: number) => { const s = EYE.D / (EYE.D - z); return { x: EYE.x + (x - EYE.x) * s, y: EYE.y + (y - EYE.y) * s }; };
const FELT = pr(FLAG.x + FELT_X0 + PL * 0.46, FLOOR - FELT_Y, FLAG.z);
const FIN = pr(FLAG.x, FLOOR - FINIAL_TOP - 2, FLAG.z).y;
const GTOP = pr(BALL.x, FLOOR - GLASS_TOP, BALL.z - GC / 2).y;            // the glass's back top edge
const FINX = pr(FLAG.x, FLOOR - FINIAL_TOP, FLAG.z).x, GX = pr(BALL.x, FLOOR - GLASS_TOP, BALL.z).x;
const PLQ = pr(BALL.x, FLOOR - PLAQUE_Y, BALL.z + 126.6);
export const ST_DONE = 1124;   // the pull-out has settled (the hand-over to the fair place waits for it, as before)

// ── the camera: CLOSE on the pennant → follow through to the case → out to both ──
const zIn = 1.55, zCase = 1.7, zBoth = 0.7;
const story: CamKey[] = [
  { at: -9999, x: FELT.x, y: FIN + (960 - 690) / zIn, z: zIn, dur: 1 },
  { at: FOR - 4, x: PLQ.x, y: GTOP + (960 - 704) / zCase, z: zCase, dur: 44 },
  { at: ST_DONE - 40, x: (pr(BALL.x - 150, 0, BALL.z + 150).x + pr(FLAG.x + FELT_X0 + PL, 0, FLAG.z).x) / 2, y: 1060, z: zBoth, dur: 40 },
];
export const ST_CAM: CamKey[] = alive("soto", story, ST_DONE + 44, { amp: 0.4, seed: 5.7 });

// ★ THE GUARDS: the place's tops stay below the caption band; the plaque and the pennant's letters are never under the Reel's
//   buttons (x > 940, y 1000–1700) nor below y 1500; the case never shows while the camera is on the pennant alone (entry)
{
  const box = (x0: number, x1: number, y0: number, y1: number, what: string, f: number, v: { x: number; y: number; z: number }) => {
    const sx = (x: number) => 540 + (x - v.x) * v.z, sy = (y: number) => 960 + (y - v.y) * v.z;
    const a = sx(x0), b = Math.min(1080, sx(x1)), c = sy(y0), d = sy(y1);
    if (a > 1080 || b < 0 || c > 1920 || d < 0) return;
    if (d > 1500) throw new Error(`soto: f${f} ${what} below y 1500`);
    if (b - Math.max(a, 940) > 12 && d > 1000 && c < 1700) throw new Error(`soto: f${f} ${what} under the Reel's buttons (${a.toFixed(0)}–${b.toFixed(0)}, ${c.toFixed(0)}–${d.toFixed(0)}; cam ${v.x.toFixed(0)} ${v.y.toFixed(0)} ${v.z.toFixed(2)})`);
  };
  const lt = pr(FLAG.x + FELT_X0 + PL * 0.12, FLOOR - FELT_Y - 46, FLAG.z), rb = pr(FLAG.x + FELT_X0 + PL * 0.8, FLOOR - FELT_Y + 46, FLAG.z + 30);
  const caseR = pr(BALL.x + 150, FLOOR, BALL.z + 150).x;
  for (let f = cue(S, 0) - 24; f <= ST_DONE + 44; f++) {
    const v = camView(ST_CAM, f), sy = (y: number) => 960 + (y - v.y) * v.z;
    // (each top counts while it is in the frame: x is its span on screen)
    for (const [y, x0, x1, what] of [[FIN, FINX - 16, FINX + 16, "the finial"], [GTOP, GX - GC / 2, GX + GC / 2, "the case's top"]] as const) {
      const a = 540 + (x0 - v.x) * v.z, b = 540 + (x1 - v.x) * v.z;
      if (b > 0 && a < 1080 && sy(y) < 660) throw new Error(`soto: f${f} ${what} at y ${sy(y).toFixed(0)} enters the caption band`);
    }
    box(PLQ.x - 80, PLQ.x + 80, PLQ.y - 15, PLQ.y + 15, "the plaque", f, v);
    box(lt.x, rb.x, lt.y, rb.y, "the pennant's letters", f, v);
    if (f < FOR - 4 && 540 + (caseR - v.x) * v.z > -20) throw new Error(`soto: f${f} the case shows while the camera is on the pennant`);
  }
}

/** the case's light coming on as a lamp does: a flicker, then on */
const FLICK = [0.55, 0.1, 0.8, 0.35, 0.95, 0.7, 1, 0.9, 1];
const lampAt = (f: number) => (f < ST.lampA ? 0 : f - ST.lampA >= FLICK.length ? 1 : FLICK[f - ST.lampA]);

const ST3D = sotoModel({ floor: FLOOR, flag: FLAG, ball: BALL, team: SOTO.team, sum: SOTO.sum });

export const Soto: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={ST_CAM} f={f} ground="dark" pools={[[FELT.x, FELT.y + 80, 600, 520], [PLQ.x, 1080, 520, 560]]} />
    <World keys={ST_CAM} f={f}>
      <Obj s={S} g="pair">
        <View3D name="soto" rect={{ x: -330, y: 690, w: 1660, h: 1240 }} eye={EYE} make={ST3D}
          params={{ t: f, lamp: lampAt(f), yaw: -1.5 + 3 * ramp(f, cue(S, 0), cueEnd(S, 1), TRAVEL) }} />
      </Obj>
    </World>
  </>
);
void PH;
export const SotoSet = { id: S, ground: "dark" as const, Comp: Soto, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
