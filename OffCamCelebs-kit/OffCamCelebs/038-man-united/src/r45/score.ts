import { within, peakOn, PEAK, type Cue } from "./SfxLayer";
import type { SceneId } from "../audit/data";
import type { PlaceCue } from "../world/place";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★ THE SCORE (037, engine v2), family per job (L8), every cue timed by its animation's own frame. Nothing on the caption
// words. Each PLACE declares its own cues (Place3.cues: one per acted beat: `hit` starts on its frame, `move` peaks on it);
// the film adds the camera's whooshes (a key built by crane / travel / whipOut carries one). Hard cuts are silent, as the
// references' are (the incoming shot's first action carries the cut). The references master at −14.1 LUFS with effects and
// music about 5 dB under the voice (preferences P9, measured 2026-11-18).
// ═══════════════════════════════════════════════════════════════════════════
type SetRow = { id: SceneId; from: number; to: number };
/** a camera move that takes a whoosh: its place, its middle and end frames, its level and what it is */
export type CamMove = { id: SceneId; mid: number; end: number; vol: number; why: string };

export const buildScore = (sets: SetRow[], moves: CamMove[], placeCues: (PlaceCue & { id: SceneId })[]) => {
  const cues: Cue[] = [];
  const w = (id: SceneId) => { const x = sets.find((y) => y.id === id)!; return { at: x.from, end: x.to }; };
  for (const m of moves) cues.push(peakOn(w(m.id))("airwoosh", m.mid, m.end, m.vol, `the camera moves (${m.id}: ${m.why})`));
  for (const c of placeCues) cues.push((c.kind === "move" ? peakOn : within)(w(c.id))(c.s, c.at, c.end, c.vol, c.why));

  // ★ ONE WHOOSH AT A TIME: a camera move that peaks with an action's own whoosh is carried by the action's sound
  const MOVE = new Set(["swoosh", "whooshlong", "whooshsoft", "airwoosh", "lowwoosh"]);
  const heard = (c: Cue) => c.at + PEAK[c.s];
  const out = cues.filter((c) => !(c.why.startsWith("the camera moves") &&
    cues.some((o) => o !== c && MOVE.has(o.s) && !o.why.startsWith("the camera moves") && Math.abs(heard(o) - heard(c)) <= 6)));
  out.sort((a, b) => a.at - b.at);
  return { cues: out };
};
