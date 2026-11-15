// ★ 034 (2026-10-23): the same song as 033 (the standing rule: the previous film's bed), its drop on "$2".
// ★ 033's bed, v2 (the user, 2026-10-21, attaching it: "Use this song"): 50 Cent, "Big Rich Town (Instrumental)", the user's
//   own file (assets/audio/music_bigrichtown.mp3, 188.4 s, 44.1 kHz stereo; copied from the user's Downloads, nothing fetched).
//   · THE DROP: a 21-s intro without drums, then the beat's first 808 kick at song 20.94 s (the low band jumps from −30 to
//     −4.6 dB in one 50-ms step; measured on a 50-ms envelope below 150 Hz). The cut starts at song 15.68 s, so that kick
//     lands on "$4" (film 5.26 s) — the moment the scoreboard lands on $4,000,000,000. The hook plays over the intro's last
//     5 s, quiet; the beat runs full from there to past the film's end (song 81.7 s; the full beat lasts to ~175 s), so no
//     loop is needed.
//   · THE LEVEL: baked in so the beat's mean sits where the previous bed's did (MUSIC_GAIN stays in its range); the
//     controller (gatedsep → bedenv, its windows from the drop: bedwin.json) then sets the separation from the rendered stems.
//   node scratchpad/vo/mkbed_bigrich.mjs
import { execFileSync } from "child_process";
const FF = process.env.FFMPEG_DIR;
const SRC = "assets/audio/music_bigrichtown.mp3", OUT = "assets/audio/music_bigrichtown_bed.wav";
const DROP = 20.94, WORD = 2.71, LEN = 60;   // ★ 035: the drop on the first "$847" (film 2.71 s), the hook's figure
const START = DROP - WORD;
import { spawnSync } from "child_process";
const readMean = (file, ss, t) => {
  const r = spawnSync(FF + "/ffmpeg.exe", ["-hide_banner", "-nostats", "-ss", String(ss), "-t", String(t), "-i", file, "-af", "volumedetect", "-f", "null", "-"], { encoding: "utf8" }).stderr;
  const m = r.match(/mean_volume: (-?[\d.]+) dB/);
  if (!m) throw new Error(`no level for ${file}`);
  return +m[1];
};
// the target: 033's cut of the same song over its full beat (the same level, so MUSIC_GAIN stays where 033's converged)
const target = readMean("../033-danawhite/assets/audio/music_bigrichtown_bed.wav", 8, 40);
const beat = readMean(SRC, DROP + 2, 40);
const GAIN_DB = +(target - beat).toFixed(1);
execFileSync(FF + "/ffmpeg.exe", ["-y", "-hide_banner", "-loglevel", "error", "-ss", START.toFixed(3), "-t", String(LEN), "-i", SRC,
  "-af", `volume=${GAIN_DB}dB`, "-ar", "44100", "-ac", "2", "-c:a", "pcm_s16le", OUT]);
const d = execFileSync(FF + "/ffprobe.exe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", OUT]).toString().trim();
console.log(`${OUT}: ${Number(d).toFixed(2)} s from song ${START.toFixed(2)} s (the drop at film ${WORD} s) · ${GAIN_DB} dB baked (beat ${beat} → ${target} dB)`);
