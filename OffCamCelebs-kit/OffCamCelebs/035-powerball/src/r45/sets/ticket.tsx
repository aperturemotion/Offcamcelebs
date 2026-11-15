import React from "react";
import { clamp01, INOUT } from "../tokens";
import { word, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { ticketModel, LID_TOP, TK_L, PRINT, CUT_SINK, type TicketP } from "../../three/props/ticket";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 2 · THE TICKET (cream) — a retail LOTTERY TERMINAL printing the POWERBALL ticket (the film's first document visual).
//  0 "It was sold at a Wegmans in Montvale, New Jersey, for the November 4th drawing." The place enters CLOSE on the
//    terminal's exit slot. On "sold" the printer feeds the ticket up out of the slot in bursts, as a terminal does while it
//    talks to the central system: first the header and the retailer line (the camera follows it up and pushes onto WEGMANS
//    MONTVALE NJ as the voice says it), then the draw date (the camera moves onto NOV 4 2026 on "November 4th"), then the
//    plays, barcode and serial in one fast run as the camera pulls back to the whole terminal. The cutter snips it: the free
//    ticket sinks onto the presenter's nip and rocks back to rest. The display's bar fills and the busy LED blinks as it
//    prints. No other labels or signs.
// ═══════════════════════════════════════════════════════════════════════════
const S = "ticket" as const;
const SOLD = word(S, 0, /^sold/), WEG = word(S, 0, /^Wegmans/), NEW = word(S, 0, /^New/), FOURTH = word(S, 0, /^4th/);

// ── THE FEED: three bursts (header + retailer, the date, the rest), each accelerating from rest and stopping at rest ──
const BURSTS: [number, number, number, number][] = [
  [SOLD + 6, SOLD + 24, 0, 128],
  [NEW + 2, NEW + 14, 128, 202],
  [FOURTH + 4, FOURTH + 17, 202, TK_L],
];
const feedAt = (f: number) => {
  let v = 0;
  for (const [a, b, l0, l1] of BURSTS) { if (f <= a) break; v = l0 + (l1 - l0) * INOUT(clamp01((f - a) / (b - a))); }
  return v;
};
const CUT = BURSTS[2][1] + 1;
// the cut ticket sinks under gravity (paper is light: a third of g) onto the nip, and rocks back to its lean
const sinkAt = (f: number) => { const t = f - CUT; return t <= 0 ? 0 : Math.min(CUT_SINK, 0.5 * 4.2 * t * t); };
const TIP = 0.032;
const tipAt = (f: number) => { const t = f - CUT; return t <= 0 ? 0 : TIP * (1 - Math.exp(-t / 2.4) * Math.cos((2 * Math.PI * t) / 7.5)); };
const SETTLED = CUT + 9;
const printing = (f: number) => f > BURSTS[0][0] - 3 && f < CUT;

export const TK = {
  feeds: BURSTS.map(([a, b]) => [a, b] as [number, number]),   // each burst of the printer's feed
  cut: CUT,                                                        // the cutter snips
  settled: SETTLED,                                                // the ticket at rest in the presenter
} as const;

// ── THE PLACE ──
const FLOOR = 1500;
const SLOT_Y = FLOOR - LID_TOP;                      // the slot on the layer
/** the layer y of a point `u` px down the ticket from its top edge, when `out` px are out of the slot */
const yOn = (out: number, u: number) => SLOT_Y - (out - u);

// ── THE CAMERA: close on the slot; it follows the paper up and pushes onto the retailer line, moves onto the date, then
//    pulls back to the whole terminal as the ticket finishes. Between these it breathes ──
const STORY: CamKey[] = [
  { at: -9999, x: 540, y: SLOT_Y - 36, z: 1.55, dur: 1 },                                        // close on the slot
  { at: WEG - 4, x: 540, y: yOn(128, 92) - 10, z: 1.9, dur: 34 },                                // WEGMANS MONTVALE NJ
  { at: NEW + 2, x: 540, y: yOn(202, (PRINT.date[0] + PRINT.date[1]) / 2) - 14, z: 1.8, dur: 30 }, // NOV 4 2026
  { at: FOURTH, x: 540, y: 896, z: 0.84, dur: 44 },                                          // back: the whole terminal
];
export const TK_DONE = Math.max(cueEnd(S, 0) + 4, SETTLED);
export const TK_CAM: CamKey[] = alive("ticket", STORY, TK_DONE + 44, { amp: 0.45 });
// ★ the caption band holds: the ticket's top (print) stays below 660 on screen at every frame it is out
for (let f = BURSTS[0][0]; f <= TK_DONE + 44; f++) {
  const v = camView(TK_CAM, f), out = feedAt(f);
  const y = 960 + (yOn(out, 0) - 4 - v.y) * v.z;
  if (y < 662) throw new Error(`ticket: the ticket's top reaches y ${Math.round(y)} on screen at f${f}`);
}

const TICKET3D = ticketModel({ floor: FLOOR, cx: 540, z: -30 });
const eyeAt = (f: number) => { const v = camView(TK_CAM, f); return { x: v.x + 420, y: v.y - 610, D: 1900 }; };
const paramsAt = (f: number): TicketP => ({
  feed: feedAt(f), cut: f >= CUT ? 1 : 0, drop: sinkAt(f), tip: tipAt(f),
  prog: feedAt(f) / TK_L, busy: printing(f) ? (Math.floor(f / 3) % 2 ? 1 : 0.2) : 0,
  yaw: 3 - 5 * INOUT(clamp01((f - 230) / 160)),
});

export const Ticket: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={TK_CAM} f={f} ground="cream" pools={[[540, 1250, 780, 560]]} />
    <World keys={TK_CAM} f={f}>
      <Obj s={S} g="terminal">
        <View3D name="ticket" rect={{ x: -260, y: 300, w: 1600, h: 1720 }} eye={eyeAt(f)} make={TICKET3D} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const TicketSet = { id: S, ground: "cream" as const, Comp: Ticket, align: () => "centre" as const, focus: [540, 1100] as [number, number] };
