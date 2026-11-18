import React from "react";
import { ramp, SETTLE, COUNT } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { closeModel, CLOSE_GEO as G, type CloseP } from "../../three/props/close";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · THE CLOSE (beats 10–12).
//  0 "The deal took six months to close."   close on the flip calendar: AUG 2021 flips through to JAN 2022.
//  1 "By then, Square had renamed itself Block, and its share price had roughly halved."   the camera travels to the stack
//       and the board: on "Block" the nameplate rolls SQUARE → BLOCK; on "share price" the board falls $247.26 → $122.29
//       (red) and the stack shrinks to half its height with it.
//  2 "So when Block booked the deal with the SEC, the shares it handed over were worth 13.8 billion."   on to the desk:
//       the filing opens; on "13.8" its one line is highlighted (khaki); the stamp FORM 10-Q | Q1 2022 lands.
// STUB (foundation).
// ═══════════════════════════════════════════════════════════════════════════
const S = "close" as const;
const SIX = word(S, 0, /^six/), BLOCK = word(S, 1, /^Block/), PRICE_W = word(S, 1, /^share/), BOOKED = word(S, 2, /^booked/), N138 = word(S, 2, /^13/);
const STAMP = Math.max(cueEnd(S, 2) - 6, N138 + 26);
export const CL = { cal: [SIX - 6, SIX + 40], swap: [BLOCK - 2, BLOCK + 18], fall: [PRICE_W, PRICE_W + 44], open: [BOOKED - 4, BOOKED + 24], hl: [N138 - 2, N138 + 20], stamp: [STAMP, STAMP + 12] } as const;

const MID_Y = G.floor - 330;
const STORY: CamKey[] = [
  { at: -9999, x: G.cal.x, y: G.floor - 250, z: 1.2, dur: 1 },                         // close on the calendar
  { at: cue(S, 1) - 6, x: (G.stack.x + G.led.x) / 2, y: MID_Y, z: 0.82, dur: 48 },     // the stack and the board
  { at: cue(S, 2) - 6, x: G.desk.x + 40, y: G.desk.y - 150, z: 1.0, dur: 48 },         // the desk: the filing
];
export const CL_DONE = Math.max(cueEnd(S, 2) + 4, CL.stamp[1] + 10);
export const CL_CAM: CamKey[] = alive("close", STORY, CL_DONE + 40, { amp: 0.5 });

const eyeAt = (f: number) => { const v = camView(CL_CAM, f); return { x: v.x + 240, y: v.y - 480, D: 2100 }; };
const paramsAt = (f: number): CloseP => ({
  cal: ramp(f, CL.cal[0], CL.cal[1], COUNT), swap: ramp(f, CL.swap[0], CL.swap[1], SETTLE), fall: ramp(f, CL.fall[0], CL.fall[1], COUNT),
  open: ramp(f, CL.open[0], CL.open[1], SETTLE), hl: ramp(f, CL.hl[0], CL.hl[1], SETTLE), stamp: ramp(f, CL.stamp[0], CL.stamp[1], SETTLE),
});

export const Close: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CL_CAM} f={f} ground="dark" pools={[[G.cal.x, G.floor - 40, 620, 260], [(G.stack.x + G.led.x) / 2, G.floor - 40, 900, 300], [G.desk.x, G.desk.y + 60, 700, 300]]} />
    <World keys={CL_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="close" rect={{ x: -500, y: 0, w: 4200, h: 2000 }} eye={eyeAt(f)} make={closeModel} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const CloseSet = { id: S, ground: "dark" as const, Comp: Close, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
