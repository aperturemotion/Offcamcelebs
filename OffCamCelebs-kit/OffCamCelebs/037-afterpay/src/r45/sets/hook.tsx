import React from "react";
import { ramp, SETTLE } from "../tokens";
import { word, cue, cueEnd } from "../time";
import { Obj } from "../../audit/Probe";
import { World, Light, alive, camView, type CamKey } from "../camera";
import { View3D } from "../../three/View3D";
import { hookModel, HOOK_GEO as G, type HookP } from "../../three/props/hook";

// ═══════════════════════════════════════════════════════════════════════════
// PLACE 1 · THE HOOK (the brief's beats 1–2). FIRST FRAME: the hanging price tag, already lit, reading $29,000,000,000.
//  0 "Afterpay sold for $29 billion."            close on the tag (mint: the headline number as reported); it sways.
//  1 "That's the number in the headlines."       the camera drops to the folded newspapers under it, "$29B" ringed on each.
//  2 "The buyer's own filing says 13.8."         it pulls back: the buyer's desk, the framed print and the thick filing; on
//                                                "13.8" the tag FLIPS to $13,800,000,000 (khaki: the documented figure).
// STUB (foundation): arrangement, anchors and parameters are set; the place-worker polishes the objects and the acting.
// ═══════════════════════════════════════════════════════════════════════════
const S = "hook" as const;
const HEAD = cue(S, 1), FILING = cue(S, 2), FLIP = word(S, 2, /^13/);
export const HK = { flipA: FLIP - 2, flipB: FLIP + 20 } as const;

const TAG_CY = G.tag.y + G.tag.cord + G.tag.h / 2;
const STORY: CamKey[] = [
  { at: -9999, x: G.tag.x, y: TAG_CY + 10, z: 1.22, dur: 1 },                       // close on the tag
  { at: HEAD - 4, x: G.papers.x, y: 1100, z: 0.8, dur: 40 },                           // back and down: the tag over the newspapers
                                                                                     //   (the cord stays under the caption line)
  { at: FILING - 6, x: 900, y: 960, z: 0.66, dur: 46 },                               // back: the tag and the buyer's desk
];
export const HK_DONE = Math.max(cueEnd(S, 2) + 4, HK.flipB + 8);
export const HK_CAM: CamKey[] = alive("hook", STORY, HK_DONE + 30, { amp: 0.5 });

const MODEL = hookModel;
const eyeAt = (f: number) => { const v = camView(HK_CAM, f); return { x: v.x + 240, y: v.y - 380, D: 2100 }; };
const paramsAt = (f: number): HookP => ({
  flip: ramp(f, HK.flipA, HK.flipB, SETTLE),
  swing: 2.2 * Math.sin(f / 21) * Math.exp(-f / 260) + 0.5 * Math.sin(f / 37),
  lit: 1,
});

export const Hook: React.FC<{ f: number }> = ({ f }) => (
  <>
    <Light keys={HK_CAM} f={f} ground="dark" pools={[[G.tag.x, G.floor - 60, 760, 300], [G.desk.x, G.desk.y + 60, 620, 300]]} />
    <World keys={HK_CAM} f={f}>
      <Obj s={S} g="place">
        <View3D name="hook" rect={{ x: -500, y: -100, w: 2700, h: 2100 }} eye={eyeAt(f)} make={MODEL} params={paramsAt(f)} />
      </Obj>
    </World>
  </>
);
export const HookSet = { id: S, ground: "dark" as const, Comp: Hook, align: () => "centre" as const, focus: [540, 900] as [number, number] };
