import React from "react";
import { ramp, lerp, SETTLE, COUNT, TRAVEL } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { closeModel, CLOSE_GEO as G, type CloseP } from "../../three/props/close";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · THE CLOSE (beats 10–12).
//  0 "The deal took six months to close."   close on the FLIP CALENDAR: its leaves flip AUG 2021 → JAN 2022 across the
//       sentence, one over the next.
//  1 "By then, Square had renamed itself Block, and its share price had roughly halved."   the camera travels to the stack
//       and the board: on "Block" the nameplate rolls SQUARE → BLOCK; on "share price" the camera pushes onto the board as
//       it falls $247.26 → $122.29 (red, 31 JAN 2022) and the stack shrinks to half its height with it.
//  2 "So when Block booked the deal with the SEC, the shares it handed over were worth 13.8 billion."   on to the desk,
//       seen from above: on "booked" the filing's cover swings open; on "shares" the camera pushes onto its one line,
//       AGGREGATE FAIR VALUE OF THE SHARES ISSUED: $13.8 BILLION; on "13.8" the highlighter crosses it (khaki); then the
//       stamp FORM 10-Q | Q1 2022 lands under it and lifts away.
// ═══════════════════════════════════════════════════════════════════════════
const S = "close" as const;
const BLOCK = word(S, 1, /^Block/), PRICE_W = word(S, 1, /^share/), BOOKED = word(S, 2, /^booked/), SHARES = word(S, 2, /^shares/), N138 = word(S, 2, /^13/);
const C0 = cue(S, 0), E0 = cueEnd(S, 0);
// the stamp falls as the figure is said and lands just after it; it is still lifting away as the place hands over
const STAMP = N138 + 8, LAND = STAMP + 13;
export const CL = {
  cal: [C0 + 6, Math.max(E0 + 2, C0 + 52)], swap: [BLOCK - 2, BLOCK + 18], fall: [PRICE_W, PRICE_W + 44],
  open: [BOOKED - 6, BOOKED + 26], hl: [N138 - 6, N138 + 10], stamp: [STAMP, STAMP + 26],
} as const;

// ── THE CAMERA. The desk is seen from ABOVE (the eye rises as the camera arrives), so the page lies open to the viewer ──
const DESK_AT = cue(S, 2) - 8;
const high = (f: number) => ramp(f, DESK_AT, DESK_AT + 48, TRAVEL);
const EYE_LOW = { dx: 240, dy: -480 }, EYE_HIGH = { dx: 60, dy: -1750 }, D = 2100;
/** where a point on the desk (layer x, depth z, height h above the desk top) lands on the layer under the HIGH eye aimed
 *  at (ax, ay): the camera's keys are written by solving this for the point they frame */
const onDesk = (ax: number, ay: number, x: number, z: number, h = 0) => {
  const ex = ax + EYE_HIGH.dx, ey = ay + EYE_HIGH.dy, s = D / (D - z);
  return { x: ex + (x - ex) * s, y: ey + (G.desk.y - h - ey) * s };
};
/** aim so that desk point (x, z, h) sits at the frame centre: a fixed point of onDesk, found by iteration */
const aimAt = (x: number, z: number, h = 0) => { let a: { x: number; y: number } = { x, y: G.desk.y }; for (let i = 0; i < 30; i++) a = onDesk(a.x, a.y, x, z, h); return a; };
const FX = G.desk.x + G.filing.dx, FTOP = G.filing.t + 8;
const WHOLE = aimAt(FX - 150, G.filing.z, FTOP);                 // the open filing and its cover laid to the left
const LINE = aimAt(FX + 10, G.filing.z - 40, FTOP);              // its line, and the stamp's place under it
const MID_Y = G.floor - 330;
const STORY: CamKey[] = [
  { at: -9999, x: G.cal.x, y: G.floor - 372, z: 1.2, dur: 1 },                                // close on the calendar
  { at: cue(S, 1) - 6, x: (G.stack.x + G.led.x) / 2 - 70, y: MID_Y, z: 0.74, dur: 46 },        // the stack and the board
  { at: PRICE_W - 8, x: (G.stack.x + G.led.x) / 2 - 40, y: MID_Y - 10, z: 0.8, dur: 40 },                     // onto the falling board
  { at: DESK_AT, x: WHOLE.x, y: WHOLE.y, z: 0.86, dur: 48 },                                  // the desk: the filing
  { at: SHARES - 8, x: LINE.x, y: LINE.y, z: 1.42, dur: 44 },                                 // onto its line
];
// done once the stamp has landed (never later than the next place's first word: its caption must not start before it arrives)
export const CL_DONE = Math.min(Math.max(cueEnd(S, 2) + 4, LAND + 6), cue("fair", 0) - 1);
export const CL_CAM: CamKey[] = alive("close", STORY, CL_DONE + 40, { amp: 0.45 });

const eyeAt = (f: number) => {
  const v = camView(CL_CAM, f), h = high(f);
  return { x: v.x + lerp(EYE_LOW.dx, EYE_HIGH.dx, h), y: v.y + lerp(EYE_LOW.dy, EYE_HIGH.dy, h), D };
};
export const paramsAt = (f: number): CloseP => ({
  cal: ramp(f, CL.cal[0], CL.cal[1], (t) => t), swap: ramp(f, CL.swap[0], CL.swap[1], SETTLE), fall: ramp(f, CL.fall[0], CL.fall[1], COUNT),
  open: ramp(f, CL.open[0], CL.open[1], SETTLE), hl: ramp(f, CL.hl[0], CL.hl[1], SETTLE), stamp: ramp(f, CL.stamp[0], CL.stamp[1], (t) => t),
});

export const Close: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CL_CAM} f={f} ground="dark" pools={[[G.cal.x, G.floor - 40, 620, 260], [(G.stack.x + G.led.x) / 2, G.floor - 40, 900, 300], [WHOLE.x, WHOLE.y + 100, 760, 520]]} />
    <World keys={CL_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="close" rect={{ x: -500, y: -200, w: 4400, h: 2400 }} eye={eyeAt(f)} make={closeModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const CloseSet = { id: S, ground: "dark" as const, Comp: Close, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
