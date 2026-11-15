import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ★★★ RULE 43 — SFX, MANY, IN THE 100bps / BANKERS MANNER (carried from 025/026 unchanged; rule 45 does not touch it):
//   · the studio's pack (public/sfx), each file trimmed to one hit; riser and glide never;
//   · EVEN[] normalises every file to a −39 dB mean, sustained ones ~3 dB under; PRESENCE is the ONE knob for the score's
//     overall level, set from the rendered SFX stem against the 100bps / Bankers band (scratchpad/sfxlevels026.py);
//   · within() is the only way a cue is written: the file's AUDIBLE ONSET lands on the frame its visual starts, it never
//     begins before its own set, and a sustained sound is cut (with a real fade) when its visual stops.
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════
export type SfxName =
  | "swoosh" | "whooshlong" | "whooshsoft" | "airwoosh" | "lowwoosh"
  | "data" | "datamid" | "datashort" | "chain" | "chainshort"
  | "sub" | "thud" | "ping" | "pingshort" | "tick" | "click" | "flick" | "coin" | "ding" | "bloom";

const EVEN: Record<SfxName, number> = {
  coin: 0.100, ding: 0.699, flick: 0.090, thud: 0.060, tick: 0.030,
  sub: 0.043, bloom: 0.107,
  // ★ 029's take: airwoosh 0.101 → 0.072 (−3 dB): its 11 camera-move cues peaked +2.3 dB over the voice against the band's
  //   −0.7…−3.0 (sfxlevels028); every other family was in the band
  // ★ 028's take: click 0.327 → 0.232 (−3 dB). Its peaks sat +2.7 dB over the voice against Bankers V4's −0.9 (sfxlevels028)
  ping: 0.743, whooshlong: 0.202, whooshsoft: 0.202, click: 0.232, data: 0.286, airwoosh: 0.072, chain: 0.947,
  lowwoosh: 0.283, swoosh: 0.065, pingshort: 0.850, chainshort: 0.700, datashort: 0.340, datamid: 0.310,
};
/** ★ THE one knob for the score's overall level — measured per film from its rendered stems (026: 0.94) */
export const PRESENCE = 0.94;
export const GAIN = Object.fromEntries(Object.entries(EVEN).map(([k, v]) => [k, v * PRESENCE])) as Record<SfxName, number>;

/** a Sequence starting on frame N is first heard on N+1 (encoder priming): cue one early */
const AUDIO_LEAD = 1;
export const LEN: Record<SfxName, number> = {
  coin: 24, ding: 40, flick: 16, thud: 30, tick: 8, sub: 30, bloom: 60,
  ping: 108, whooshlong: 32, whooshsoft: 27, click: 7, data: 68, airwoosh: 53, chain: 90, lowwoosh: 75, swoosh: 40,
  pingshort: 39, chainshort: 32, datashort: 29, datamid: 48,
};
/** where each file's AUDIBLE part begins, in frames from the file's start */
export const ONSET: Record<SfxName, number> = {
  coin: 0, ding: 0, flick: 0, thud: 0, tick: 0, sub: 0, bloom: 0,
  ping: 0, whooshlong: 8, whooshsoft: 6, click: 0, data: 0,
  airwoosh: 19, chain: 0, lowwoosh: 10, swoosh: 10,
  pingshort: 0, chainshort: 4, datashort: 0, datamid: 0,
};
/** frames from the file's start to its PEAK — a sound is heard where its peak is */
export const PEAK: Record<SfxName, number> = {
  airwoosh: 21, bloom: 3, chain: 0, chainshort: 4, click: 0, coin: 0, data: 2, datamid: 2, datashort: 2, ding: 0, flick: 0,
  lowwoosh: 13, ping: 0, pingshort: 0, sub: 1, swoosh: 12, thud: 0, tick: 0, whooshlong: 13, whooshsoft: 8,
};
const SUSTAINED = new Set<SfxName>(["data", "datamid", "datashort", "chain", "chainshort", "lowwoosh", "airwoosh", "swoosh", "whooshlong", "whooshsoft"]);

export type Cue = { s: SfxName; at: number; dur: number; fade: number; vol: number; why: string };

/** ★ THE ONLY WAY A CUE IS WRITTEN. `beat` is the set's own span; `visFrom` the frame the visual starts; `visTo` where a
 *  sustained sound must have stopped. */
export const within = (beat: { at: number; end: number }) =>
  (s: SfxName, visFrom: number, visTo: number | undefined, vol: number, why: string): Cue => {
    const from = Math.max(Math.round(beat.at), Math.round(visFrom - ONSET[s]));
    const stopBy = SUSTAINED.has(s) && visTo !== undefined ? Math.min(Math.round(visTo), Math.round(beat.end)) : Math.round(beat.end);
    const dur = Math.max(3, Math.min(LEN[s], stopBy - from));
    return { s, at: from, dur, fade: dur < LEN[s] ? Math.min(10, Math.max(3, Math.round(dur / 3))) : 0, vol, why };
  };
/** a cue placed so its PEAK lands on frame `peakAt` (a whoosh on its move's fastest frame, a hit on its landing) */
export const peakOn = (beat: { at: number; end: number }) =>
  (s: SfxName, peakAt: number, visTo: number | undefined, vol: number, why: string): Cue =>
    within(beat)(s, peakAt - (PEAK[s] - ONSET[s]), visTo, vol, why);

export const SfxLayer: React.FC<{ cues: Cue[]; total: number }> = ({ cues, total }) => (
  <>
    {cues.map((c, i) => {
      const from = Math.max(0, Math.round(c.at) - AUDIO_LEAD);
      if (from >= total) return null;
      const dur = Math.min(c.dur, total - from);
      if (dur <= 0) return null;
      const base = GAIN[c.s] * c.vol;
      const fade = c.fade;
      return (
        <Sequence key={i} from={from} durationInFrames={dur}>
          <Audio src={staticFile(`sfx/${c.s}.wav`)} volume={fade > 0 ? (fr) => base * Math.max(0, Math.min(1, (dur - fr) / fade)) : base} />
        </Sequence>
      );
    })}
  </>
);
