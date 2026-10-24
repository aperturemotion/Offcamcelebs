import React from "react";
import { ramp } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, type CamKey } from "../camera";
import { VERDICT } from "../../audit/data";
import { View3D } from "../../three/View3D";
import { verdictModel } from "../../three/props/verdict";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 7 · THE VERDICT (dark) — the contract on its clipboard and reading stand, a smaller pile of cash, a rubber stamp on
// its ink pad.
//  0 "So, here's the audit." The place opens CLOSE on the contract (one object, framed large): its clauses, the ruled
//    compensation box with the typed $700,000,000, the signatures.
//  1 "700 million dollars on paper." Held on the page, breathing.
//  2 "About 460 in today's money." Follow-through right to the cash on the floor: two piles and a loose bundle, far fewer
//    notes than the paper's figure would need (no plate: the pile and the caption carry 460).
//  3 "Our rating: inflated." Back left to the stamp on its pad and the page: the stamp lifts off the pad, travels over,
//    turns square to the page, presses on "inflated" (INFLATED in red ink, one of the film's labels: the caption leaves the
//    word to the stamp, objWords), lifts away and is set back on its pad.
//  4 "Send us who to audit next." A slow pull back on the stamped page; the film ends 0.5 s after the last word.
// ★ The verdict rates the "$700 million" headline (the brief): the contract names no party; the stamp lands on its figure.
// ═══════════════════════════════════════════════════════════════════════════
const S = "verdict" as const;
const ABOUT = cue(S, 2), RATING = cue(S, 3), INFL = word(S, 3, /^inflated/i), SEND = cue(S, 4);
/** the stamp's journey (frames): off the pad, over, down onto the page on "inflated", held, back up, home, set down */
export const VD = {
  liftA: INFL - 30, overA: INFL - 20, pressA: INFL - 6, inkA: INFL, inkN: 2,
  holdTo: INFL + 8, backA: INFL + 14, homeA: INFL + 30, downTo: INFL + 40,
  stampA: INFL - 30,
} as const;
const stampT = (f: number) => {
  if (f < VD.liftA) return 0;
  if (f < VD.overA) return ramp(f, VD.liftA, VD.overA, (t) => t);
  if (f < VD.pressA) return 1 + ramp(f, VD.overA, VD.pressA, (t) => t);
  if (f <= VD.inkA) return 2 + ramp(f, VD.pressA, VD.inkA, (t) => t);
  if (f < VD.holdTo) return 3;
  if (f < VD.backA) return 3 - ramp(f, VD.holdTo, VD.backA, (t) => t);
  if (f < VD.homeA) return 2 - ramp(f, VD.backA, VD.homeA, (t) => t);
  return 1 - ramp(f, VD.homeA, VD.downTo, (t) => t);
};
const FLOOR = 1480;
const BOARD = { x: 470, z: 200 }, PAD = { x: 60, z: 330 }, CASH = { x: 1190, z: 40 };
// ★ framings, measured on the stills: the clip's lever stays ≥ ~710 on screen (a breath at amp 0.5 never lifts it into the
//   caption band); each close look keeps the other objects wholly off the frame
const DOC = { x: 450, y: 1180, z: 1.42 }, MONEY = { x: 1272, y: 1320, z: 1.6 }, PRESS = { x: 272, y: 1262, z: 0.92 }, OUT = { x: 292, y: 1268, z: 0.88 };
const STORY: CamKey[] = [
  { at: 1396, ...DOC, dur: 1 },                      // frame 1 of the place: close on the contract
  { at: ABOUT - 10, ...MONEY, dur: 40 },             // "About 460": across to the cash
  { at: RATING - 21, ...PRESS, dur: 46 },            // "Our rating": back to the stamp and the page
  { at: SEND, ...OUT, dur: 40 },                     // "Send us who to audit next": a slow pull back
];
export const VD_CAM: CamKey[] = alive("verdict", STORY, 1668, { amp: 0.4 });

const VD_EYE = { x: 900, y: 380, D: 2000 };
const VD3D = verdictModel({ floor: FLOOR, board: BOARD, pad: PAD, cash: CASH, word: VERDICT.word, figure: VERDICT.paper[0] });

export const Verdict: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={VD_CAM} f={f} ground="dark" pools={[[420, 1180, 1000, 760], [1190, 1300, 520, 380]]} />
    <World keys={VD_CAM} f={f}>
      <Obj s={S} g="desk">
        <View3D name="verdict" rect={{ x: -520, y: 560, w: 2180, h: 1430 }} eye={VD_EYE} make={VD3D}
          params={{ stamp: stampT(f), ink: ramp(f, VD.inkA, VD.inkA + VD.inkN, (t) => t),
            yaw: -2 + 3 * ramp(f, cue(S, 0), cueEnd(S, 4), (t) => t * t * (3 - 2 * t)) }} />
      </Obj>
    </World>
  </>
);
export const VerdictSet = { id: S, ground: "dark" as const, Comp: Verdict, align: () => "centre" as const, focus: [420, 1180] as [number, number] };
