import React from "react";
import { cueEnd } from "../time";
import { World, Light, alive, type CamKey } from "../camera";

// PLACE · VERDICT (dark) — PLACEHOLDER: the 3-D build replaces this file.
const S = "verdict" as const;
export const VD = {} as const;
export const VD_DONE = cueEnd(S, 4) + 4;
export const VD_CAM: CamKey[] = alive(S, [{ at: -9999, x: 540, y: 1100, z: 1, dur: 1 }], VD_DONE + 44);
export const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={VD_CAM} f={f} ground="dark" pools={[[540, 1100, 900, 700]]} />
    <World keys={VD_CAM} f={f}><></></World>
  </>
);
export const VerdictSet = { id: S, ground: "dark" as const, Comp: Verdict, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
