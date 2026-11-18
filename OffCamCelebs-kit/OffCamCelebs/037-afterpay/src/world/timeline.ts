// THE CUTS (engine v2; study rule R23: places are joined by HARD CUTS). A place's first frame: a few frames before its first
// spoken word, never before the place before it has finished its last word. Every place uses this for its `enter`.
import { SCENE_ORDER, SCENE_CUES, type SceneId } from "../audit/data";
import { cue, cueEnd } from "../r45/time";

/** frames a place is on screen before its first word */
export const LEAD = 5;
export const enterOf = (id: SceneId): number => {
  const i = SCENE_ORDER.indexOf(id);
  if (i <= 0) return 0;
  const prev = SCENE_ORDER[i - 1];
  return Math.max(cueEnd(prev, SCENE_CUES[prev] - 1) + 2, cue(id, 0) - LEAD);
};
