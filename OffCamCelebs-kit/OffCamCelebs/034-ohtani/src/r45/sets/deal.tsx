import React from "react";
import { ramp, SOFT, SETTLE } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, type CamKey } from "../camera";
import { DEAL } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { dealModel } from "../../three/props/deal";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 2 · THE DEAL (cream) — a tent desk calendar, a ball cap on a turned walnut stand, a laptop (034's realism pass).
//  3 "December 2023." The place ENTERS CLOSE on the desk calendar alone (L1): DECEMBER 2023, the month grid. The camera
//    breathes on it.
//  4 "10 years with the Los Angeles Dodgers." FOLLOW-THROUGH (L7): on "10 years" the camera pulls out and travels right
//    (a wide moment: the calendar and the cap), then pushes in on the cap; on "Los Angeles" the stand's head turns and
//    brings the cap's raised LA round to face us.
//  5 "Baseball's own website called it the biggest deal in sports history." On "website" the camera pulls out and travels
//    on to the laptop as its lid swings open; the screen wakes on the league site's article of 12 Dec 2023 (its headline
//    word for word: the place's one document), and the camera pushes in on the headline, then drifts in closer as it is read.
// ★ No plate or label (labels are ≤ 2–3 a film). Every object top and all print stay below y 700 on screen at every key
//   (`guard`, below), clear of the caption band (330–640).
// ═══════════════════════════════════════════════════════════════════════════
const S = "deal" as const;
const TEN = cue(S, 1), LOS = word(S, 1, /^Los/), SITE = word(S, 2, /^website/);
export const DL = {
  wideA: TEN + 6, wideN: 32,                  // pull out and travel right: the calendar and the cap (after the truck in has
                                              //   settled, f213: the calendar holds the frame through its own line)
  capA: TEN + 40, capN: 36,                   // push in on the cap
  turnA: LOS - 7, turnN: 40,                  // the stand's head turns the cap to face us
  lapA: SITE - 12, lapN: 42,                  // pull out and travel on to the laptop
  lidA: SITE - 4, lidN: 36,                   // the lid swings open (SOFT: a big surface, ≥ 30 f)
  litA: SITE + 22, litN: 16,                  // the screen wakes
  readA: SITE + 32, readN: 38,                // push in on the headline
} as const;
const FLOOR = 1480;
// ★ spaced so each close framing holds ONE object: the calendar at z 2.2 sees ±245 world px, the cap at z 1.8 ±300
const CAL = { x: 120, z: 0, yaw: 12 }, CAP = { x: 770, z: 0 }, LAP = { x: 1480, z: -30, yaw: -14 };
const DL_EYE = { x: 780, y: 380, D: 2000 };

// ★ L4/L7: no object top or print above y 700 on screen, at any key: each object's highest projected point (layer px)
//   and its x span; a key that sees it keeps it low enough (breaths included)
const TOPS: { x0: number; x1: number; top: number }[] = [
  { x0: -90, x1: 310, top: 1262 },     // the calendar's binding
  { x0: 620, x1: 920, top: 978 },      // the cap's button (on its 22-cm stand)
  { x0: 1190, x1: 1780, top: 1050 },   // the laptop's lid, open
];
const guard = (keys: CamKey[]) => keys.map((k) => {
  const half = 540 / k.z;
  let y = k.y;
  for (const o of TOPS) if (o.x1 > k.x - half && o.x0 < k.x + half) y = Math.min(y, o.top + 260 / k.z);
  return { ...k, y };
});

const STORY: CamKey[] = [
  { at: -9999, x: 116, y: 1373, z: 2.2, dur: 1 },                                   // CLOSE on the calendar alone
  { at: DL.wideA, x: 440, y: 1290, z: 1.0, dur: DL.wideN },                          // pull out, travel right: calendar + cap
  { at: DL.capA, x: 770, y: 1196, z: 1.8, dur: DL.capN },                            // push in on the cap
  { at: DL.lapA, x: 1442, y: 1236, z: 1.32, dur: DL.lapN },                          // pull out, travel on to the laptop
  { at: DL.readA, x: 1464, y: 1186, z: 1.85, dur: DL.readN },                         // push in on the headline
  { at: DL.readA + DL.readN + 2, x: 1461, y: 1183, z: 1.95, dur: Math.max(30, cueEnd(S, 2) + 8 - DL.readA - DL.readN - 2), drift: true },
];
export const DL_CAM: CamKey[] = guard(alive("deal", STORY, cueEnd(S, 2) + 40, { amp: 0.45 }));

const DL3D = dealModel({ floor: FLOOR, cal: CAL, cap: CAP, lap: LAP, month: DEAL.month, year: DEAL.year,
  site: DEAL.site, head: DEAL.head, date: DEAL.date, capText: DEAL.capText });

export const Deal: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={DL_CAM} f={f} ground="cream" pools={[[120, 1330, 700, 520], [770, 1260, 640, 600], [1460, 1300, 760, 560]]} />
    <World keys={DL_CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="deal" rect={{ x: -330, y: 830, w: 2300, h: 800 }} eye={DL_EYE} make={DL3D}
          params={{
            turn: -80 + 66 * ramp(f, DL.turnA, DL.turnA + DL.turnN, SOFT),
            lid: ramp(f, DL.lidA, DL.lidA + DL.lidN, SOFT),
            lit: ramp(f, DL.litA, DL.litA + DL.litN, SETTLE),
            sway: ramp(f, cue(S, 0) - 20, cueEnd(S, 2) + 30, SOFT),
          }} />
      </Obj>
    </World>
  </>
);
export const DL_DONE = DL.readA + DL.readN + 2;
export const DealSet = { id: S, ground: "cream" as const, Comp: Deal, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
