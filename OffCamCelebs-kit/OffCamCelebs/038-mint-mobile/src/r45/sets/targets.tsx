import React from "react";
import { word, cue } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { project } from "../../three/stage";
import { targetsModel, anchors, hullTop, TG_EYE, TG, type Timing } from "../../three/props/targets";
import type { PlaceDef } from "../place";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 4 · THE TARGETS (cream) — the film's turn: ONE earnout schedule on a clipboard, and the two things that act on it.
//  0 "The rest depended on Mint hitting targets." The place lands CLOSE on the page's TARGETS heading and its three
//    performance bars; on "hitting targets" the bars fill toward their dashed target marks, one after another.
//  1 "That's where numbers usually shrink." A slow pull back takes in the gold payout bar ("up to": no figure); on "shrink"
//    the bars falter back from their marks and the payout bar shrinks and greys.
//  2 "Not this time." Everything stops dead on "Not": the shrinking freezes mid-way, the camera holds still, no sound.
//  3 "In 2025, the targets were dropped." A yellow sticky note glides in and lands on the margin, JUN 30 2025 (on "2025");
//    the big pink eraser glides in from beyond the right edge and rubs the bars and then the TARGETS heading out (the print
//    fades where its face passes, crumbs are pushed off the ends of its strokes) through "dropped", lifts and leaves.
//  4 "The rest became the maximum, minus what was already paid." The camera pushes in; the amendment's formula prints into
//    the rubbed-out area word by word: THE REST = (on "rest"), MAXIMUM $1,350,000,000 (on "maximum": the payout bar runs back
//    to full, gold), − ALREADY PAID (on "minus … already paid"). No computed figure for the rest, no sum, ever.
// ═══════════════════════════════════════════════════════════════════════════
const S = "targets" as const;
const HIT = word(S, 0, /^hitting/), TGT = word(S, 0, /^targets/);
const SHRINK = word(S, 1, /^shrink/);
const NOT = word(S, 2, /^Not/);
const IN = cue(S, 3), Y2025 = word(S, 3, /^2025/), DROP = word(S, 3, /^dropped/);
const REST = word(S, 4, /^rest/), MAXW = word(S, 4, /^maximum/), MINUS = word(S, 4, /^minus/), ALREADY = word(S, 4, /^already/), PAID = word(S, 4, /^paid/);

export const T: Timing = {
  fillA: HIT - 8, fillB: TGT + 30, fall: SHRINK - 2, fallEnd: SHRINK + 34, freeze: NOT,
  stA: Y2025 - 14, stB: Y2025 + 4,
  in0: Y2025 + 6, in1: Y2025 + 22, aEnd: Y2025 + 46, bA: Y2025 + 51, bEnd: DROP + 8, lift: DROP + 13, gone: DROP + 30,
  l1: REST - 2, l2a: MAXW - 2, l2b: MAXW + 2, l3a: MINUS, l3b: ALREADY - 2, pay: MAXW + 4,
};
if (T.bEnd - T.bA < 9) throw new Error(`targets: the heading's rub is too short (${T.bEnd - T.bA} f)`);
/** the last action settled: the formula's last line printed (the hand-over waits for it and for "paid") */
const DONE = Math.max(T.l3b + 10, PAID + 2);

// ── the camera: framings from the model's anchors, projected through the place's eye. ★ The caption band holds at every
//    frame: the board's far edge and the clip are the place's highest points, so every key is anchored on them (kept at
//    ≥ ~680 on screen): a pull back or a push in, never a lift of the page into the band ──
const A = anchors();
const P = (a: { x: number; y: number; z: number }) => project(TG_EYE, a.x, a.y, a.z);
const HEADP = P(A.head), BARSP = P(A.bars), PAYP = P(A.pay), STKP = P(A.sticky), NEDGE = P(A.noteEdge);
const TOPY = Math.min(...hullTop().map(([x, y, z]) => project(TG_EYE, x, -y, z).y));
/** a key that puts layer x `cx` at screen x `sx` and the board's top edge at screen y `top`, at zoom z */
const key = (cx: number, sx: number, top: number, z: number) => ({ x: cx - (sx - 540) / z, y: TOPY - (top - 960) / z, z });
const ENTER = key((HEADP.x + BARSP.x) / 2, 540, 690, 2.05);
const WIDE = key((BARSP.x + PAYP.x) / 2, 540, 700, 1.62);
const NOTE = key((HEADP.x + STKP.x) / 2 + 10, 540, 688, 1.92);
// ★ the formula's frame keeps the note's 2025 beyond the right edge (one figure at a time) and the formula clear of the Reel's
//   buttons (x < 940)
const FORM = key(NEDGE.x, 1090, 704, 2.5);
const STORY: CamKey[] = [
  { at: -9999, ...ENTER, dur: 1 },                 // close on the heading and the bars
  { at: SHRINK - 20, ...WIDE, dur: 30 },          // "shrink": a pull back to take in the payout bar
  { at: SHRINK + 11, ...WIDE, dur: IN - SHRINK - 11 },         // "Not this time.": the camera holds DEAD still (a key that goes nowhere)
  { at: IN, ...NOTE, dur: 34 },                    // "In 2025": onto the note's landing and the heading
  { at: T.lift - 1, ...FORM, dur: 36 },            // "The rest became…": in on the rubbed-out area, for the formula
];
const CAM: CamKey[] = alive(S, STORY, DONE + 44, { amp: 0.35 });

// ★ the caption band holds: the board's top edge stays below 660 on screen once the place has landed
for (let f = cue(S, 0) + 36; f <= DONE + 44; f++) {
  const v = camView(CAM, f);
  const y = 960 + (TOPY - v.y) * v.z;
  if (y < 662) throw new Error(`targets: the clipboard's top reaches y ${Math.round(y)} on screen at f${f}`);
}

const M3D = targetsModel(T);
const smooth = (t: number) => t * t * (3 - 2 * t);
const yawAt = (f: number) => -1.6 + 3 * smooth(Math.max(0, Math.min(1, (f - cue(S, 0)) / (DONE - cue(S, 0)))));

const Comp: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={CAM} f={f} ground="cream" pools={[[BARSP.x, BARSP.y, 760, 560], [PAYP.x + 120, PAYP.y + 140, 620, 420]]} />
    <World keys={CAM} f={f}>
      <Obj s={S} g="clipboard">
        <View3D name="targets" rect={{ x: -420, y: 520, w: 1960, h: 1580 }} eye={TG_EYE} make={M3D} params={{ f, yaw: yawAt(f) }} />
      </Obj>
    </World>
  </>
);

export const PLACE: PlaceDef = {
  set: { id: S, ground: "cream", Comp, align: () => "centre", focus: [BARSP.x, BARSP.y] },
  done: DONE,
  cam: CAM,
  // ★ 2026-11-22 re-score (Timur: "keep that bicycle chain sound effect for the bars… but don't use it that often"): the
  //   chain only under the bars (they fill; the payout bar runs back to full), the EarnEdits pack for the rest
  sfx: [
    { s: "chain", at: T.fillA + 2, end: T.fillB, vol: 0.3, why: "targets: the three bars fill toward their marks" },
    { s: "wlow", at: T.fall, end: NOT, vol: 0.28, why: "targets: the bars falter and the payout bar shrinks (cut dead on Not)" },
    { s: "wsmall3", at: T.stA + 4, vol: 0.25, why: "targets: the sticky note glides in", mode: "peak" },
    { s: "pland", at: T.stB - 2, vol: 0.45, why: "targets: the sticky note lands on the page", mode: "peak" },
    { s: "wsoft", at: T.in0 + 4, vol: 0.35, why: "targets: the eraser glides in", mode: "peak" },
    { s: "erase", at: T.in1, end: T.aEnd + 2, vol: 0.45, why: "targets: the eraser rubs the bars out" },
    { s: "erase", at: T.bA - 2, end: T.bEnd, vol: 0.35, why: "targets: the eraser rubs the heading out" },
    { s: "wsoft", at: T.lift + 8, vol: 0.28, why: "targets: the eraser leaves", mode: "peak" },
    { s: "penwrite", at: T.l1, vol: 0.38, why: "targets: THE REST = is written", mode: "peak" },
    { s: "penwrite", at: T.l2b, vol: 0.4, why: "targets: MAXIMUM $1,350,000,000 is written", mode: "peak" },
    { s: "chainshort", at: T.pay, end: T.pay + 22, vol: 0.22, why: "targets: the payout bar runs back to full" },
    { s: "penwrite", at: T.l3b, vol: 0.38, why: "targets: ALREADY PAID is written", mode: "peak" },
  ].map((c) => ({ mode: "within" as const, ...c })) as PlaceDef["sfx"],
};
