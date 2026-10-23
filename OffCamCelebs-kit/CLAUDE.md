# CLAUDE.md — the OffCamCelebs kit

OffCamCelebs is a short-form channel: vertical ~60-s "audits" of a celebrity's money claim (TikTok / Reels / Shorts). Each
film is a **HyperFrames** project with **real Three.js 3-D objects**, built in one locked look. The user (Timur) sends a
content-only brief and I build everything else: script check, voiceover, places, sound, checks, handback.

## ★ FIRST OPEN ON A NEW MACHINE: run the setup, unprompted

If `setup-result.json` does not exist beside this file, run this before anything else and report what it says:

```
powershell -NoProfile -ExecutionPolicy Bypass -File .\setup.ps1
```

It installs Node LTS, Python 3.12 and FFmpeg (winget) if they are missing, and records `FFMPEG_DIR` and `HF_CHROME` as user
environment variables. It pip-installs the Python tools, fetches the whisper model, runs `npm install` in the template film,
installs the HyperFrames skills, and makes a throwaway srv.us key. Then it proves the kit: typecheck, build, the render guards
and one captured frame. Restart Claude Code after it finishes, so the new environment variables and skills load.

## Read, in this order, before any work

1. **`OffCamCelebs/styles/offcamcelebs-preferences.md`**, the authority on LOOK: "THE LOCKED LOOK — 029 HF" (L0–L9) at the
   top, and the changelog (every film and every note Timur gave).
2. **`RULES-from-original-CLAUDE.md`**, the authority on PROCESS: the channel's standing decisions, the HyperFrames traps, the
   standing process rules (verification, VO pipeline, mixing by measured dB, facts and claims, guards) and the Windows notes.
   Paths in it name the original machine; read them as history.
3. **`OffCamCelebs/034-ohtani/NEW_VIDEO.md`**: how to build, check and render a film.
4. **`OffCamCelebs/HANDOFF.md`**: the state of every film.
5. **`memory/`**: my notes from the original machine, one per film plus the voice settings. Copy them into this machine's
   Claude memory folder on first open.

## The standing rules, in one place

- **Clone the NEWEST film for a new one.** That is `OffCamCelebs/034-ohtani/` (cloned from 033, from 032 …). Copy it in Node,
  leaving out `node_modules`, `renders`, `.build`, `out`; then follow NEW_VIDEO.md (rename, replace the places, keep the
  style). 029–033 are reference films: their look, tools and lessons are already in 034.
- **Never render an MP4 unless Timur asks for a render in that message.** Stills and frame sweeps for verification are fine.
- **Record every preference Timur gives, in the same turn**, in the preferences file's changelog (look) or in
  `RULES-from-original-CLAUDE.md` (process).
- **The script comes first:** fact-check every line in parallel, write the corrected `VO_SCRIPT.txt`, send it at once (the
  file plus a paste-ready block), and arm `src/audit/script_fixes.json` before the take exists.
- **The voiceover:** I generate it through the ElevenLabs connector from the final script: voice "Russ – Deep, Smooth and
  Articulate", voice_id `HKFOb9iktHA85uKXydRT`, model eleven_v4. The connector has no speed setting, so `vo_trim.py` runs
  TEMPO 1.04. Years 2000–2009 are written "two thousand one", never "twenty oh one".
- **The bed:** the previous film's song unless Timur names another. Since 033 it is 50 Cent, "Big Rich Town (Instrumental)"
  (`034-ohtani/assets/audio/music_bigrichtown.mp3`, cut by `scratchpad/vo/mkbed_bigrich.mjs`).
- **Never download a real person's photo.** Timur supplies it; it is cut out with rembg (examine the mask) and graded.
- **Studio ports 3100–3199.** Each film has its own (034: 3176).
- **Handback:** the real HyperFrames Studio, never a custom player in its place (Timur, 2026-10-23) (`npx --yes hyperframes@0.8.143 preview --background --no-open --port <p>`), plus a
  srv.us link: `OffCamCelebs\_tunnels\tunnel.ps1 -Port <p> -Fwd <n>`, launched detached, in a reconnect loop. The hostname
  comes from the key and the forward number, so it stays the same across reconnects. Cloudflare quick tunnels kept failing on
  the original machine; srv.us is the default.
- **Long jobs** (renders, every-frame sweeps) are launched so they survive a session restart (WMI `Win32_Process.Create`, see
  the rules file), and a render sets `HYPERFRAMES_RENDER_DETACHED=1`.

## Environment on this machine

- `FFMPEG_DIR`: the folder holding ffmpeg.exe and ffprobe.exe. Every tool reads it.
- `HF_CHROME`: HyperFrames' headless Chrome (`npx --yes hyperframes@0.8.143 browser path`). The frame sweeps read it.
- Use `python`, not `python3`. Keep project paths short (Windows' 260-character limit).
- Each film needs `npm install` once before it builds (the setup does it for 034 only).
