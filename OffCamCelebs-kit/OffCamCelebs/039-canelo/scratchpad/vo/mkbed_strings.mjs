// ★ 032's bed, v2 (the user, 2026-10-15, attaching it: "if it worked, use it"): Nicholas Britell, "Strings & 808 Beat",
//   the user's own file (assets/audio/music_strings808.mp3, 71.5 s; nothing downloaded).
//   · NO SINGLE DROP: band envelopes (sub 20–90 Hz, 0.25-s steps) show the 808 in from the first bar at a steady level; the
//     only arrival near the top is its first sub swell at 1.85 s (+3 dB). The cut is delayed 0.20 s so that swell lands on
//     "McGregor" (2.08 s). The track's one section lift (dropfind: +3.5 dB at song 46.42 s) falls at film 46.6 s.
//   · THE LENGTH: the track's own fade begins ~49 s (1-s means: 48 s −7.5 dB, 49 s −10.1, 52 s −14.5), and the film runs to
//     59.6 s (song time 59.4). So it is EXTENDED by one of its own loops: the 4 s at 48.0 s correlates with the 4 s at
//     27.4286 s at r 0.84 (an FFT search over every lag: 6 bars of 70 bpm, 20.5714 s), so at 48.0 s it jumps back 20.5714 s
//     under a 30-ms crossfade and the groove never breaks (the V34 bedext method). The fade now begins at song time ~69 s.
//   · THE LEVEL: −19.1 dB baked in, so the file sits at Good Man's bed level (−26.8 dB mean) and MUSIC_GAIN stays in
//     Remotion-safe range; the controller (gatedsep → bedenv) then sets the separation from the rendered stems.
//   node scratchpad/vo/mkbed_strings.mjs
import { execFileSync } from "child_process";

const FF = process.env.FFMPEG_DIR;
const SRC = "assets/audio/music_strings808.mp3", OUT = "assets/audio/music_strings808_bed.wav";
const A = 48.0, LAG = 20.5714, XF = 0.03, DELAY_MS = 200, LEN = 66, GAIN_DB = -19.1;
execFileSync(FF + "/ffmpeg.exe", ["-y", "-hide_banner", "-loglevel", "error", "-i", SRC, "-filter_complex",
  `[0:a]atrim=0:${(A + XF / 2).toFixed(4)},asetpts=PTS-STARTPTS[a];` +
  `[0:a]atrim=start=${(A - LAG - XF / 2).toFixed(4)},asetpts=PTS-STARTPTS[b];` +
  `[a][b]acrossfade=d=${XF}:c1=tri:c2=tri,adelay=${DELAY_MS}|${DELAY_MS},atrim=0:${LEN},volume=${GAIN_DB}dB[o]`,
  "-map", "[o]", "-ar", "44100", "-ac", "2", "-c:a", "pcm_s16le", OUT]);
const d = execFileSync(FF + "/ffprobe.exe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", OUT]).toString().trim();
console.log(`${OUT}: ${Number(d).toFixed(2)} s (first sub swell at ${(1.85 + DELAY_MS / 1000).toFixed(2)} s; spliced at song ${A} s → ${(A - LAG).toFixed(4)} s, film ${(A + DELAY_MS / 1000).toFixed(2)} s)`);
