import React from "react";
import { cueEnd } from "../time";
import { World, Light, alive, type CamKey } from "../camera";

// PLACE · TICKET (cream) — PLACEHOLDER: the 3-D build replaces this file.
const S = "ticket" as const;
export const TK = {} as const;
export const TK_DONE = cueEnd(S, 0) + 4;
export const TK_CAM: CamKey[] = alive(S, [{ at: -9999, x: 540, y: 1100, z: 1, dur: 1 }], TK_DONE + 44);
export const Ticket: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={TK_CAM} f={f} ground="cream" pools={[[540, 1100, 900, 700]]} />
    <World keys={TK_CAM} f={f}><></></World>
  </>
);
export const TicketSet = { id: S, ground: "cream" as const, Comp: Ticket, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
