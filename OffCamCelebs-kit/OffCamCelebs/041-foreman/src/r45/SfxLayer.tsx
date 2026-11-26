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
  | "sub" | "thud" | "ping" | "pingshort" | "tick" | "click" | "flick" | "coin" | "ding" | "bloom"
  // ★ 2026-11-22 (Timur: the EarnEdits pack, no ping, the chain only on bars): cut by tools/sfx_prep.py from
  //   assets/audio/sfx_src/sfx_spec.json (the pack in OffCamCelebs/_sfx/earnedits; Openverse CC0 for the buzz, gavel,
  //   printer and thump, credited in assets/brand/SOURCES.txt), each levelled to −35 dBFS at its loudest 50 ms
  | "buzz" | "buzzshort" | "wcam1" | "wcam2" | "wsmall1" | "wsmall2" | "wsmall3" | "wsoft" | "wlow" | "whum" | "ckey" | "cmouse" | "cpop" | "cwood" | "pflipa" | "pflipb" | "pslide" | "pland" | "ptear" | "pcrunch" | "pensign" | "penwrite" | "erase" | "notes" | "thump" | "lowhit" | "gavel" | "printer"
  | "glide" | "glide2" | "whip" | "paper" | "flip" | "pen" | "punch" | "cash" | "tear" | "crowd" | "stack"
  | "putt" | "lipout" | "clap"
  | "sizzle" | "lid";

const EVEN: Record<SfxName, number> = {
  coin: 0.100, ding: 0.699, flick: 0.090, thud: 0.060, tick: 0.030,
  sub: 0.043, bloom: 0.107,
  // ★ 029's take: airwoosh 0.101 → 0.072 (−3 dB): its 11 camera-move cues peaked +2.3 dB over the voice against the band's
  //   −0.7…−3.0 (sfxlevels028); every other family was in the band
  // ★ 028's take: click 0.327 → 0.232 (−3 dB). Its peaks sat +2.7 dB over the voice against Bankers V4's −0.9 (sfxlevels028)
  ping: 0.743, whooshlong: 0.202, whooshsoft: 0.202, click: 0.106, data: 0.286, airwoosh: 0.072, chain: 0.947,
  lowwoosh: 0.283, swoosh: 0.065, pingshort: 0.850, chainshort: 0.700, datashort: 0.340, datamid: 0.310,
  buzz: 0.181, buzzshort: 0.751, wcam1: 0.096, wcam2: 0.093, wsmall1: 0.084, wsmall2: 0.072, wsmall3: 0.041, wsoft: 1.043, wlow: 0.097, whum: 0.085, ckey: 0.061, cmouse: 0.064, cpop: 0.062, cwood: 0.067, pflipa: 0.151, pflipb: 0.199, pslide: 1.246, pland: 0.285, ptear: 0.131, pcrunch: 0.109, pensign: 0.229, penwrite: 0.13, erase: 0.166, notes: 0.114, thump: 0.055, lowhit: 0.059, gavel: 0.305, printer: 0.248,
  // ★ 2026-11-22, measured (sfxlevels033 on mixprobe stems): ckey ×0.4, cmouse/cpop/cwood/pcrunch/notes/wsmall3 ×0.6, pland ×0.55
  //   (their transients peaked −5…+1 dB against the voice); printer ×4 and pensign ×2.2 (heard −26 and −18: lost under the voice),
  glide: 0.067,
  glide2: 0.104,
  whip: 0.069,
  paper: 0.08,
  flip: 0.088,
  pen: 0.501,
  punch: 0.066,
  cash: 0.672,
  tear: 0.131,
  crowd: 0.095,
  stack: 0.06,
  // ★ 039, measured (sfxlevels033): cash ×0.5 (its hook burst peaked −2.4 dB against the voice),
  putt: 0.159,
  lipout: 0.203,
  clap: 0.555,
  sizzle: 0.169,
  lid: 0.059,
};
/** ★ THE one knob for the score's overall level — measured per film from its rendered stems (026: 0.94) */
export const PRESENCE = 0.94;
export const GAIN = Object.fromEntries(Object.entries(EVEN).map(([k, v]) => [k, v * PRESENCE])) as Record<SfxName, number>;

/** a Sequence starting on frame N is first heard on N+1 (encoder priming): cue one early */
const AUDIO_LEAD = 1;
export const LEN: Record<SfxName, number> = {
  coin: 24, ding: 40, flick: 16, thud: 30, tick: 8, sub: 30, bloom: 60,
  ping: 108, whooshlong: 32, whooshsoft: 27, click: 3, data: 68, airwoosh: 53, chain: 90, lowwoosh: 75, swoosh: 40,
  pingshort: 39, chainshort: 32, datashort: 29, datamid: 48,
  buzz: 18, buzzshort: 14, wcam1: 48, wcam2: 72, wsmall1: 25, wsmall2: 24, wsmall3: 26, wsoft: 22, wlow: 28, whum: 40, ckey: 3, cmouse: 6, cpop: 9, cwood: 5, pflipa: 15, pflipb: 15, pslide: 21, pland: 15, ptear: 14, pcrunch: 11, pensign: 95, penwrite: 15, erase: 48, notes: 42, thump: 17, lowhit: 9, gavel: 18, printer: 85,
  glide: 11,
  glide2: 32,
  whip: 10,
  paper: 11,
  flip: 15,
  pen: 60,
  punch: 27,
  cash: 37,
  tear: 11,
  crowd: 75,
  stack: 5,
  putt: 11,
  lipout: 33,
  clap: 72,
  sizzle: 75,
  lid: 11,
};
/** where each file's AUDIBLE part begins, in frames from the file's start */
export const ONSET: Record<SfxName, number> = {
  coin: 0, ding: 0, flick: 0, thud: 0, tick: 0, sub: 0, bloom: 0,
  ping: 0, whooshlong: 8, whooshsoft: 6, click: 0, data: 0,
  airwoosh: 19, chain: 0, lowwoosh: 10, swoosh: 10,
  pingshort: 0, chainshort: 4, datashort: 0, datamid: 0,
  buzz: 0, buzzshort: 0, wcam1: 0, wcam2: 0, wsmall1: 0, wsmall2: 0, wsmall3: 0, wsoft: 0, wlow: 0, whum: 0, ckey: 0, cmouse: 0, cpop: 0, cwood: 0, pflipa: 0, pflipb: 0, pslide: 0, pland: 0, ptear: 0, pcrunch: 0, pensign: 0, penwrite: 0, erase: 0, notes: 0, thump: 0, lowhit: 0, gavel: 0, printer: 0,
  glide: 0,
  glide2: 0,
  whip: 0,
  paper: 0,
  flip: 0,
  pen: 0,
  punch: 0,
  cash: 0,
  tear: 0,
  crowd: 0,
  stack: 0,
  putt: 0,
  lipout: 0,
  clap: 0,
  sizzle: 0,
  lid: 0,
};
/** frames from the file's start to its PEAK — a sound is heard where its peak is */
export const PEAK: Record<SfxName, number> = {
  airwoosh: 21, bloom: 3, chain: 0, chainshort: 4, click: 1, coin: 0, data: 2, datamid: 2, datashort: 2, ding: 0, flick: 0,
  lowwoosh: 13, ping: 0, pingshort: 0, sub: 1, swoosh: 12, thud: 0, tick: 0, whooshlong: 13, whooshsoft: 8,
  buzz: 6, buzzshort: 10, wcam1: 12, wcam2: 48, wsmall1: 9, wsmall2: 8, wsmall3: 8, wsoft: 3, wlow: 8, whum: 7, ckey: 1, cmouse: 1, cpop: 1, cwood: 1, pflipa: 4, pflipb: 6, pslide: 2, pland: 12, ptear: 10, pcrunch: 3, pensign: 72, penwrite: 4, erase: 40, notes: 29, thump: 1, lowhit: 4, gavel: 1, printer: 54,
  glide: 6,
  glide2: 23,
  whip: 1,
  paper: 4,
  flip: 6,
  pen: 48,
  punch: 3,
  cash: 1,
  tear: 8,
  crowd: 22,
  stack: 1,
  putt: 1,
  lipout: 1,
  clap: 14,
  sizzle: 25,
  lid: 3,
};
const SUSTAINED = new Set<SfxName>(["data", "datamid", "datashort", "chain", "chainshort", "lowwoosh", "airwoosh", "swoosh", "whooshlong", "whooshsoft",
  "buzz", "wcam1", "wcam2", "wsmall1", "wsmall2", "wsmall3", "wsoft", "wlow", "whum", "pensign", "erase", "notes", "printer", "glide", "glide2", "pen", "cash", "crowd", "stack", "clap", "sizzle"]);

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
