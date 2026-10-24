import React from "react";
import { ramp, SOFT, SETTLE, TRAVEL, clamp01 } from "../tokens";
import { word, cue, cueEnd, F } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { fairModel } from "../../three/props/fair";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 6 · TO BE FAIR (cream) — three desk objects, each entered on its own (Timur, 2026-10-23: "don't show both visuals
// at once, ever… one of the visuals… in focus. And then in some part of the scene, the camera can zoom out to show both").
// 14 "To be fair: the deferral was Ohtani's own idea, his agent said, to help the team compete."
//    The place opens CLOSE on an Anglepoise-style desk lamp alone, the camera breathing. On "own idea" its rocker clicks
//    and the bulb flickers on (filament, glass, the shade's enamel, a pool on the floor) as the camera pushes in on it.
//    On "his agent said" the camera follows through to a broadcast microphone in its shock mount: the on-air ring lights.
// 15 "And Sportico estimates he'll make 125 million dollars off the field this year."
//    On "Sportico" the camera travels on to a closed leather watch case. On "$125 million" its clasp's button presses and
//    the lid swings open: a steel watch on its pillow, its seconds sweeping (endorsement money: no label, no figure: the
//    caption carries "$125 million"). On "off the field" the camera pulls out to show the whole desk: the lit lamp, the
//    live microphone and the open case, then the crane takes it to the verdict.
// ★ Labels: none (the old $125M billboard was a label; Timur 2026-10-23). Nothing readable anywhere: the dial has no date.
// ═══════════════════════════════════════════════════════════════════════════
const S = "fair" as const;
const IDEA = word(S, 0, /^idea/), AGENT = word(S, 0, /^agent/), SPORT = cue(S, 1);
const M125 = word(S, 1, /^\$?125/), OFF = word(S, 1, /^off/);
export const FA = {
  swA: IDEA - 6,                    // the rocker clicks
  glowA: IDEA - 4, glowN: 20,       // the bulb flickers on and warms
  ringA: AGENT + 12,                // the on-air ring lights
  btnA: M125 + 2,                   // the clasp's button presses in
  lidA: M125 + 8, lidN: 38,         // the lid swings open (SOFT: a big surface, L7)
} as const;
const FLOOR = 1480;
const LAMP = { x: 230, z: -200 }, MIC = { x: 960, z: -40 }, BOX = { x: 1500, z: -30 };

// ★★★★ THE LIVING, FOLLOW-THROUGH CAMERA: the story keys; `alive` breathes between them
const STORY: CamKey[] = [
  { at: F(37.0), x: 380, y: 1200, z: 1.6, dur: 1 },                                  // close on the lamp alone
  { at: IDEA - 12, x: 455, y: 1208, z: 1.95, dur: 32 },                             // "own idea": in on the bulb
  { at: AGENT - 4, x: 950, y: 1188, z: 1.95, dur: 42 },                              // "his agent said": out, across, in on the mic
  { at: SPORT - 4, x: 1495, y: 1262, z: 1.72, dur: 44 },                            // "Sportico": on to the watch case
  { at: FA.lidA - 2, x: 1498, y: 1266, z: 1.9, dur: 34 },                            // "$125 million": in as the lid opens
  { at: OFF - 10, x: 880, y: 1262, z: 0.62, dur: 40 },                              // "off the field": the whole desk
];
export const FA_CAM: CamKey[] = alive("fair", STORY, STORY[STORY.length - 1].at + STORY[STORY.length - 1].dur, { amp: 0.8 });

const FA_EYE = { x: 1100, y: 380, D: 2000 };
const FA3D = fairModel({ floor: FLOOR, eye: FA_EYE, lamp: LAMP, mic: MIC, box: BOX });

/** the bulb as a real bulb comes on: two stutters, then the filament warming to full */
const bulb = (f: number) => {
  const t = f - FA.glowA;
  if (t < 0) return 0;
  if (t < 2) return 0.55;
  if (t < 4) return 0.1;
  if (t < 6) return 0.8;
  if (t < 7) return 0.3;
  return 0.6 + 0.4 * SOFT(clamp01((t - 7) / (FA.glowN - 7)));
};

export const Fair: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={FA_CAM} f={f} ground="cream" pools={[[400, 1250, 520, 540], [960, 1240, 480, 520], [1500, 1270, 520, 480]]} />
    <World keys={FA_CAM} f={f}>
      <Obj s={S} g="things">
        <View3D name="fair" rect={{ x: -300, y: 880, w: 2200, h: 1080 }} eye={FA_EYE} make={FA3D}
          params={{
            glow: bulb(f), sw: ramp(f, FA.swA, FA.swA + 3, SETTLE), ring: ramp(f, FA.ringA, FA.ringA + 5, SETTLE),
            btn: ramp(f, FA.btnA, FA.btnA + 4, SETTLE) - ramp(f, FA.lidA + 10, FA.lidA + 16, SETTLE),
            lid: ramp(f, FA.lidA, FA.lidA + FA.lidN, SOFT), sec: f / 30,
            yaw: 1.2 - 2.4 * ramp(f, cue(S, 0), cueEnd(S, 1), TRAVEL),
          }} />
      </Obj>
    </World>
  </>
);
export const FA_DONE = Math.max(FA.lidA + FA.lidN, STORY[STORY.length - 1].at + STORY[STORY.length - 1].dur) + 1;
export const FairSet = { id: S, ground: "cream" as const, Comp: Fair, align: () => "centre" as const, focus: [540, 1000] as [number, number] };
