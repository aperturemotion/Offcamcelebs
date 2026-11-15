import React from "react";
import { cueEnd } from "../time";
import { World, Light, alive, type CamKey } from "../camera";

// PLACE · BILL (dark) — PLACEHOLDER: the 3-D build replaces this file.
const S = "bill" as const;
export const BL = {} as const;
export const BL_DONE = cueEnd(S, 1) + 4;
export const BL_CAM: CamKey[] = alive(S, [{ at: -9999, x: 540, y: 1100, z: 1, dur: 1 }], BL_DONE + 44);
export const Bill: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={BL_CAM} f={f} ground="dark" pools={[[540, 1100, 900, 700]]} />
    <World keys={BL_CAM} f={f}><></></World>
  </>
);
export const BillSet = { id: S, ground: "dark" as const, Comp: Bill, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
