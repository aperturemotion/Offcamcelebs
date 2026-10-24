// THE PLAN, for the HTML generator (scripts/build.mjs runs this in Node): every layer's frames, every SFX cue and the bed's
// level curve, read off the SAME modules the browser bundle draws with — so index.html can never disagree with the film.
import { layerSpecs } from "./film";
import { SCORE_CUES, bedVolume } from "../r45/Film";
import { GAIN, LEN } from "../r45/SfxLayer";
import { TOTAL_FRAMES, FPS, VO_GAIN, VO_SKIP_FRAMES, VO_END, MUSIC_FILE, HAS_VO, HAS_MUSIC, HAS_SFX, COMPOSITION_ID } from "../audit/data";

export const plan = () => ({
  total: TOTAL_FRAMES, fps: FPS,
  // ★ (030, the template) each track only once it exists: before the take lands the film is picture only (data.ts flags)
  has: { vo: HAS_VO, music: HAS_MUSIC, sfx: HAS_SFX },
  comp: COMPOSITION_ID,   // the brief's composition name (data.ts)
  vo: { gain: VO_GAIN, skip: VO_SKIP_FRAMES, end: VO_END },
  music: MUSIC_FILE,   // the bed's file in assets/audio/ (data.ts names it: a clone never edits build.mjs for it)
  layers: layerSpecs(),
  // ★ AUDIO LEAD 0: Remotion cued every SFX one frame early for its encoder's priming; HyperFrames' mux has none, so each cue
  //   sits on its own frame (CLAUDE.md, V34 HF)
  cues: (HAS_SFX ? SCORE_CUES : []).map((c) => ({ ...c, lead: 0, gain: GAIN[c.s], len: LEN[c.s] })),
  // the bed's level: MUSIC_GAIN × the measured envelope × its fades, sampled every 3 frames (an automation lane IS the level)
  bed: Array.from({ length: Math.floor(TOTAL_FRAMES / 3) + 1 }, (_, i) => {
    const f = Math.min(TOTAL_FRAMES, i * 3);
    return { t: +(f / FPS).toFixed(4), v: +bedVolume(f).toFixed(5) };
  }),
});
