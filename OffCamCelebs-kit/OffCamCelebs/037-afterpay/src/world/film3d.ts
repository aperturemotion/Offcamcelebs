// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE FILM AS ONE WORLD (037; rule P12). The places in order, each on its own patch of the one floor; the camera's ONE path,
// stitched from every place's shots; the windows the tools read (plan.json, the score); the bed's level.
// Node-safe: nothing here touches the DOM (scripts/build.mjs imports it through src/hf/plan.ts).
// ═════════════════════════════════════════════════════════════════════════════════════════════
import { MUSIC_GAIN, TOTAL_FRAMES, type SceneId } from "../audit/data";
import { BED_ENV } from "../audit/bedenv";
import { clamp01 } from "../r45/tokens";
import { buildScore, type CamMove } from "../r45/score";
import { add, checkPath, type CamKey3, type Vec } from "./cam";
import type { Place3 } from "./place";
import { HookPlace } from "./places/hook";
import { ExplainPlace, CatchPlace } from "./places/cards";
import { DealPlace, PricePlace, ClosePlace, FairPlace, VerdictPlace } from "./places/legacy";

/** the film's places, in order */
export const PLACES: Place3[] = [HookPlace, ExplainPlace, DealPlace, PricePlace, CatchPlace, ClosePlace, FairPlace, VerdictPlace];
/** how far apart the places stand (the haze ends at ~9,500: no place ever sees another) */
export const SPACING = 14000;
export const ORIGINS: Vec[] = PLACES.map((_, i) => [i * SPACING, 0, 0]);

/** each place's span: from its first camera key to the next place's */
export const WINDOWS = PLACES.map((p, i) => ({ id: p.id, from: i === 0 ? 0 : p.enter, to: i + 1 < PLACES.length ? PLACES[i + 1].enter : TOTAL_FRAMES }));
for (let i = 1; i < WINDOWS.length; i++) if (WINDOWS[i].from <= WINDOWS[i - 1].from) throw new Error(`037 world: ${WINDOWS[i].id} enters at f${WINDOWS[i].from}, not after ${WINDOWS[i - 1].id}`);

/** the ONE camera path, in world coordinates */
const SHOTS = PLACES.map((p, i) => {
  const w = WINDOWS[i], keys = p.shots({ from: w.from, to: w.to });
  if (!keys.length || Math.round(keys[0].at) !== w.from && i > 0) throw new Error(`037 world: ${p.id}'s first camera key must start on its enter frame f${w.from} (it starts at f${keys[0]?.at})`);
  const last = keys[keys.length - 1];
  if (last.at + last.dur > w.to + 1e-6 && i + 1 < PLACES.length) throw new Error(`037 world: ${p.id}'s last camera key ends at f${last.at + last.dur}, after ${PLACES[i + 1].id} enters (f${w.to})`);
  return keys.map((k): CamKey3 => ({ ...k, pos: add(k.pos, ORIGINS[i]), look: add(k.look, ORIGINS[i]), orbit: k.orbit && { ...k.orbit, c: add(k.orbit.c, ORIGINS[i]) } }));
});
export const CAM: CamKey3[] = checkPath("037", SHOTS.flat());

/** whose light the rig carries at f: a place takes the rig when its first key is half done (the middle of a travel in; a
 *  cut's own frame) */
const LIT_FROM = PLACES.map((_, i) => (i === 0 ? 0 : SHOTS[i][0].at + SHOTS[i][0].dur / 2));
export const litPlaceAt = (f: number) => { let k = 0; for (let i = 0; i < LIT_FROM.length; i++) if (f >= LIT_FROM[i]) k = i; return k; };
export const placeAt = (f: number) => { let k = 0; for (let i = 0; i < WINDOWS.length; i++) if (f >= WINDOWS[i].from) k = i; return k; };

// ── the score: every acted beat (score.ts) and the camera's travels ──
const MOVES: CamMove[] = SHOTS.flatMap((keys, i) => keys.filter((k) => k.whoosh && !k.cut).map((k) => ({ id: PLACES[i].id as SceneId, mid: k.at + k.dur / 2, end: k.at + k.dur, vol: k.whoosh!, why: k.why ?? "move" })));
export const SCORE_CUES = buildScore(WINDOWS.map((w) => ({ id: w.id, from: w.from, to: w.to })), MOVES).cues;

// ── the bed's level: the wired take's measured envelope (bedenv.mjs) × the film's fades ──
const envDb = (t: number) => {
  const E = BED_ENV;
  if (!E.length) return 0;
  if (t <= E[0][0]) return E[0][1];
  for (let k = 1; k < E.length; k++) if (t <= E[k][0]) return E[k - 1][1] + ((E[k][1] - E[k - 1][1]) * (t - E[k - 1][0])) / (E[k][0] - E[k - 1][0]);
  return E[E.length - 1][1];
};
export const bedVolume = (fr: number) => MUSIC_GAIN * 10 ** (envDb(fr / 30) / 20) * clamp01(fr / 12) * clamp01((TOTAL_FRAMES - fr) / 36);
