import React from "react";
import { cueEnd } from "../time";
import { World, Light, alive, type CamKey } from "../camera";

// PLACE · WITHHOLD (cream) — PLACEHOLDER: the 3-D build replaces this file.
const S = "withhold" as const;
export const WH = {} as const;
export const WH_DONE = cueEnd(S, 3) + 4;
export const WH_CAM: CamKey[] = alive(S, [{ at: -9999, x: 540, y: 1100, z: 1, dur: 1 }], WH_DONE + 44);
export const Withhold: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={WH_CAM} f={f} ground="cream" pools={[[540, 1100, 900, 700]]} />
    <World keys={WH_CAM} f={f}><></></World>
  </>
);
export const WithholdSet = { id: S, ground: "cream" as const, Comp: Withhold, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
