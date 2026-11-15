import React from "react";
import { cueEnd } from "../time";
import { World, Light, alive, type CamKey } from "../camera";

// PLACE · FAIR (cream) — PLACEHOLDER: the 3-D build replaces this file.
const S = "fair" as const;
export const FA = {} as const;
export const FA_DONE = cueEnd(S, 1) + 4;
export const FA_CAM: CamKey[] = alive(S, [{ at: -9999, x: 540, y: 1100, z: 1, dur: 1 }], FA_DONE + 44);
export const Fair: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={FA_CAM} f={f} ground="cream" pools={[[540, 1100, 900, 700]]} />
    <World keys={FA_CAM} f={f}><></></World>
  </>
);
export const FairSet = { id: S, ground: "cream" as const, Comp: Fair, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
