import React from "react";
import { cueEnd } from "../time";
import { World, Light, alive, type CamKey } from "../camera";

// PLACE · ANNUITY (dark) — PLACEHOLDER: the 3-D build replaces this file.
const S = "annuity" as const;
export const AN = {} as const;
export const AN_DONE = cueEnd(S, 1) + 4;
export const AN_CAM: CamKey[] = alive(S, [{ at: -9999, x: 540, y: 1100, z: 1, dur: 1 }], AN_DONE + 44);
export const Annuity: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={AN_CAM} f={f} ground="dark" pools={[[540, 1100, 900, 700]]} />
    <World keys={AN_CAM} f={f}><></></World>
  </>
);
export const AnnuitySet = { id: S, ground: "dark" as const, Comp: Annuity, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
