import { CUES } from "../audit/cues";
import type { SceneId } from "../audit/data";

// ★ Every 027 timing is read off the wired take: a sentence's start, or the frame a word is spoken (its transcript token —
//   CLAUDE.md, "anchor on words"). Nothing here is hand-typed in frames.
export const FPS = 30;
export const F = (sec: number) => Math.round(sec * FPS);

const ofScene = (id: SceneId) => CUES.filter((c) => c.scene === id);
/** the frame sentence i of a set starts */
export const cue = (id: SceneId, i: number) => F(ofScene(id)[i].a);
/** the frame sentence i of a set ends (its last word's end) */
export const cueEnd = (id: SceneId, i: number) => F(ofScene(id)[i].b);
/** the frame a word is spoken: the first transcript token of sentence i that matches `re` (refuses if none does) */
export const word = (id: SceneId, i: number, re: RegExp) => {
  const c = ofScene(id)[i];
  const w = c?.w?.find(([t]) => re.test(t));
  if (!w) throw new Error(`r45 time: no token matching ${re} in ${id}[${i}] "${c?.text}"`);
  return F(w[1]);
};
/** the frame a word ENDS: the next token's start (or the cue's end for the last word) */
export const wordEnd = (id: SceneId, i: number, re: RegExp) => {
  const c = ofScene(id)[i];
  const k = c.w?.findIndex(([t]) => re.test(t)) ?? -1;
  if (k < 0 || !c.w) throw new Error(`r45 time: no token matching ${re} in ${id}[${i}]`);
  return k + 1 < c.w.length ? F(c.w[k + 1][1]) : F(c.b);
};
