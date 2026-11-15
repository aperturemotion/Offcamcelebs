import React from "react";
import { cueEnd } from "../time";
import { World, Light, alive, type CamKey } from "../camera";

// PLACE · HOOK (dark) — PLACEHOLDER: the 3-D build replaces this file.
const S = "hook" as const;
export const HK = {} as const;
export const HK_DONE = cueEnd(S, 1) + 4;
export const HK_CAM: CamKey[] = alive(S, [{ at: -9999, x: 540, y: 1100, z: 1, dur: 1 }], HK_DONE + 44);
export const Hook: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={HK_CAM} f={f} ground="dark" pools={[[540, 1100, 900, 700]]} />
    <World keys={HK_CAM} f={f}><></></World>
  </>
);
export const HookSet = { id: S, ground: "dark" as const, Comp: Hook, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
