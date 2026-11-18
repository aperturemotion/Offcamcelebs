import React from "react";
import { ramp, SETTLE, clamp01 } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { hookModel, HOOK_GEO as G, type HookP } from "../../three/props/hook";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (the brief's beats 1–2). FIRST FRAME: the hanging price tag, already lit, reading $29,000,000,000.
//  0 "Afterpay sold for $29 billion."            close on the tag (mint: the headline number as reported), hanging from its
//                                                rail under amber light; it sways and the camera pushes in.
//  1 "That's the number in the headlines."       the camera drops to the desk under it: three folded newspapers DROP in,
//                                                one after another, "$29B" ringed in red marker on each.
//  2 "The buyer's own filing says 13.8."         it pulls back: the tag over the buyer's desk; the light comes up on the
//                                                framed print and the thick filing on "filing"; on "13.8" the tag FLIPS to
//                                                $13,800,000,000 (khaki: the documented figure).
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
const HEAD = cue(S, 1), FILING = cue(S, 2), FILE_W = word(S, 2, /^filing/), FLIP = word(S, 2, /^13/);
// the newspapers land on "number", "in the", "headlines"
const LANDS = [word(S, 1, /^number/) - 4, word(S, 1, /^in/) - 2, word(S, 1, /^headlines/) - 2];
const FALL = 12, H0 = 620;
export const HK = { flipA: FLIP - 2, flipB: FLIP + 22, lands: LANDS } as const;

const TAG_CY = G.tag.y + G.tag.cord + G.tag.h / 2;
// ★ the tag's rail stays IN FRAME, under the caption line, in every framing (a hanging thing that leaves by the top must
//   cross the caption to come back): the wide framings put the rail at y ≈ 300 on screen
const WIDE_Z = 0.9, camY = (z: number, ry: number) => G.tag.y - 16 + (960 - ry) / z;
const STORY: CamKey[] = [
  { at: -9999, x: G.tag.x, y: TAG_CY - 40, z: 1.14, dur: 1 },                               // close on the tag
  { at: 4, x: G.tag.x + 6, y: TAG_CY - 36, z: 1.2, dur: 64, drift: true },             //   a slow push
  { at: HEAD - 6, x: 520, y: camY(WIDE_Z, 330), z: WIDE_Z, dur: 44 },                             // back and down: the tag over the desk,
                                                                                       //   the newspapers dropping in
  { at: FILING - 4, x: 700, y: camY(WIDE_Z + 0.04, 330), z: WIDE_Z + 0.04, dur: 46 },               // across to the buyer's side
];
export const HK_DONE = Math.max(cueEnd(S, 2) + 4, HK.flipB + 8);
export const HK_CAM: CamKey[] = alive("hook", STORY, HK_DONE + 30, { amp: 0.4 });
// ★ the rail holds under the caption line at every frame of the place
for (let f = 0; f <= HK_DONE + 30; f++) {
  const v = camView(HK_CAM, f), y = 960 + (G.tag.y - 16 - v.y) * v.z;
  if (y < 280) throw new Error(`hook: the tag's rail reaches y ${Math.round(y)} on screen at f${f} (the caption line)`);
}

const MODEL = hookModel;
// the eye rises as the camera pulls back, to look DOWN on the desk's newspapers
const eyeAt = (f: number) => { const v = camView(HK_CAM, f), up = ramp(f, HEAD - 6, HEAD + 38, SETTLE); return { x: v.x + 240, y: v.y - 380 - 420 * up, D: 2100 }; };
const dropAt = (f: number, land: number): [number, number] => {
  const t = clamp01((land - f) / FALL);                       // 1 = at the top of its fall … 0 = landed
  if (f < land - FALL) return [9999, 0];
  return [H0 * t * t, 0.5 * t];                                // gravity: the height is quadratic in the time left
};
export const paramsAt = (f: number): HookP => {
  const k = f - HK.flipA;
  return {
    flip: ramp(f, HK.flipA, HK.flipB, SETTLE),
    // the tag sways from frame 0 and settles; the flip sets it swaying again
    swing: 2.4 * Math.sin(f / 19) * Math.exp(-f / 240) + 0.45 * Math.sin(f / 37) + (k > 0 ? 1.6 * Math.sin(k / 9) * Math.exp(-k / 34) : 0),
    lit: 1,
    drop: LANDS.map((l) => dropAt(f, l)),
    desk: ramp(f, FILE_W - 8, FILE_W + 10, SETTLE),
  };
};

export const Hook: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={HK_CAM} f={f} ground="dark" pools={[[G.desk.x, G.desk.y + 40, 900, 320]]} />
    <World keys={HK_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="hook" rect={{ x: -560, y: -120, w: 2500, h: 2200 }} eye={eyeAt(f)} make={MODEL} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const HookSet = { id: S, ground: "dark" as const, Comp: Hook, align: () => "centre" as const, focus: [540, 900] as [number, number] };
