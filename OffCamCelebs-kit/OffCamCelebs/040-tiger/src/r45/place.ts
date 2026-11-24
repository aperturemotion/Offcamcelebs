// ═══════════════════════════════════════════════════════════════════════════
// ★ 038: ONE PLACE = ONE MODULE. Each place file (sets/<id>.tsx) exports `PLACE: PlaceDef` — its set (drawn by Film.tsx),
// the frame its last action is settled (`done`), its camera keys (the score whooshes its travels) and its own sound cues
// (`sfx`, every one timed by its animation's own frames). Film.tsx and score.ts read places only through places.ts.
// ═══════════════════════════════════════════════════════════════════════════
import type React from "react";
import type { SceneId } from "../audit/data";
import type { Ground } from "./tokens";
import type { Align } from "./Caption";
import type { CamKey } from "./camera";
import type { SfxName } from "./SfxLayer";

/** a place's own sound: `peak` puts the file's peak on `at` (a hit on its landing, a whoosh on its fastest frame); `within`
 *  starts the visual's sound at `at`; `end` is where a sustained sound must have stopped */
export type PlaceSfx = { s: SfxName; at: number; end?: number; vol: number; why: string; mode: "peak" | "within" };
export type PlaceSet = { id: SceneId; ground: Ground | "warm"; Comp: React.FC<{ f: number }>; align: (i: number) => Align; focus: [number, number];
  shake?: (f: number) => { x: number; y: number } };
export type PlaceDef = { set: PlaceSet; done: number; cam: CamKey[]; sfx: PlaceSfx[] };
