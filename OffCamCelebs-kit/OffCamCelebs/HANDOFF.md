# HANDOFF: OffCamCelebs (account move, 18 Oct 2026)

This file is the OffCamCelebs chat's handoff. The root `HANDOFF.md` covers the other projects.

Read these first, in order:
1. root `CLAUDE.md` → "OffCamCelebs" (the process rules and the channel's standing decisions);
2. `OffCamCelebs/styles/offcamcelebs-preferences.md` (the authority on the look: "THE LOCKED LOOK — 029 HF", L0–L9);
3. the newest film's `NEW_VIDEO.md` (`032-mcgregor/NEW_VIDEO.md`), which is how to build, check and render a film.

This file says what state everything is in and where the loose ends are.

## 1. State of the channel

| Film | Folder | State |
|---|---|---|
| 029 "Money, On Paper" (Mayweather) | `029-mayweather HF/` (HyperFrames; the Remotion `029-mayweather/` is history) | Rendered. **The source of the locked look.** Its render lacks 4 window ticks (a build bug, fixed in 030). |
| 030 "Stop Asking Me" (Jake Paul) | `030-jakepaul/` | Rendered 2026-10-12 → `renders/stop_asking_me_030_hf.mp4`. Done. |
| 031 "Funding Secured" (Elon Musk) | `031-musk/` | Re-rendered 2026-10-13 after Timur's 8 review notes (`REVIEW_NOTES_2026-10-12.txt`) → `renders/funding_secured_031_hf.mp4`; v1 kept. Done. 031's burgundy ground and grid were 031-only notes. |
| **032 "Up To" (Conor McGregor)** | `032-mcgregor/` | **Rendered 2026-10-15** → `renders/up_to_032_hf.mp4` (59.6 s, 61.7 MB). Verified (§3). Done. **The newest clone source.** |

| **033 "Two Million In" (Dana White & the UFC)** | `033-danawhite/` (in the session worktree `.claude/worktrees/offcamcelebs-handoff-45c6bc/`) | **RENDERED 2026-10-22** → `renders/two_million_in_033_hf.mp4` (63.3 s, 63.5 MB; verified: picture CLEAN vs fresh stills, sound = offline mix +0.01 dB / lag 0, 6 one-frame flags all designed motion). MP4 host 4172 on srv.us forward 37; Studio 3175 on forward 36. VO generated in-session (ElevenLabs Russ, TEMPO 1.04). His photo is in the hook; the bed is 50 Cent "Big Rich Town (Instrumental)". Checks clean: PEN/EDGES on every frame, FLOAT, hand-overs, screen sweep, guards. The preferences changelog has the full entry. |

| **034 "Two Million a Year" (Shohei Ohtani)** | `034-ohtani/` (worktree, cloned from 033) | **Built 2026-10-23, not rendered.** Studio 3176 on srv.us forward 38 (`_tunnels/tunnel034.ps1`); MP4 host 4173 when rendered. Script: 3 lines corrected and sent. VO generated in-session (Russ, TEMPO 1.04, 55.4 s). Bed: Big Rich Town, its drop on "$2". **His photo (`public/ohtani_face.jpg`, named in the brief) was not on disk: asked for in chat**; `HAS_PHOTO` is off until it lands (slot left of the register in `src/r45/sets/hook.tsx`). |

| **035 "The Real Jackpot" ($847M Powerball)** | `035-powerball/` (cloned from 034; the first HEADLINE audit, no person) | **Built and RENDERED 2026-11-15: `renders/the_real_jackpot_035_hf.mp4` (74 MB, 51.07 s, 1532 f; verifymp4 picture in 034's range, sound corr 0.997 lag 0; popmp4's 6 one-frame hits are designed beats).** Timur's first review: the stamp's top no longer carries INFLATED; hand-overs switched to his pick D "expo" (64/68 f, `src/r45/handover.ts`), now the standing shape; hand-overs and the screen sweep re-run clean. Script: 1 line corrected ("never take home that number") and sent. VO generated in-session (Russ, eleven_v4, take B, TEMPO 1.04: 50.9 s; the film runs 51.1 s). Bed: Big Rich Town, its drop on the first "$847". Seven places in the 2026-10-23 rules: LED jackpot sign drops in and lights $847,000,000 by 0.9 s; a lottery terminal prints the ticket (WEGMANS MONTVALE NJ, NOV 4 2026); 30 growing gold-coin stacks → the $363.1M cash pile; a hand-lever cutter slices 24% then 8% off a slab of notes; an adding machine prints 363.1, 37.00 %, 10.75 %, 189.7; coins into a Mason jar and a sandglass; a newspaper, a deposit bag and the INFLATED stamp. Checks clean: PEN/EDGES/FLOAT (step 1–4 under load), hand-overs, screen sweep (CROSS/NEAR/BAND/CAPZONE 0 bar the sign's arrival from above). Studio 3177; **Studio artifact https://claude.ai/artifact/4eSMeE6ZD87EHPRfCaJM6n** (republish after every change: `scratchpad/studio_artifact.mjs <outDir> --port 3177`). 034's Studio artifact: https://claude.ai/artifact/6RtKcFwrU9RhNWkbU6jZvW; 034 was rendered 2026-10-24 (`renders/two_million_a_year_034_hf.mp4`). |

| **037 "Afterpay: $29B or $13.8B?" (Afterpay / Block; The Payouts, first film in the @moneydecoded.au look)** | `037-afterpay/` (cloned from 035) | **First 3-D cut 2026-11-18, NOT rendered, NO VOICEOVER (ElevenLabs was rejecting every call: flow "Payouts 037 Afterpay VO" NXRQ1BtJvPbcvJNCB7FT may or may not hold a take; check before generating again), PROVISIONAL timing (68 s), NO PHOTO (`assets/afterpay_face.jpg` not supplied; the frame shows a dark matte; add it to the driver preload when it lands).** Script: 3 lines corrected and sent (VO_SCRIPT.txt). Built on the NEW world engine (`src/world/*`: one full-frame Three.js scene, one keyframed 3-D camera, motion blur, bloom, extruded Archivo text; rules P1–P12 in the preferences): places hook, explain card, deal, price, catch card, close, fair, verdict in `src/world/places/`. Checks run: build, tsc, script guards. NOT run: pass-through/float/screen sweeps and stale029 (those tools read the old per-view canvases and need adapting). Known weak spots: a few near-black frames inside travels, floor hotspots under the calendar/stack/scale, the nameplate cropped mid-orbit, the standing $29B numerals in Instagram's bottom zone. Studio 3178; **Studio artifact https://claude.ai/artifact/Qpr2ZgH5iZyyJ12NxnjED5** (`scratchpad/studio_artifact.mjs <outDir> --port 3178`). |

033 is rendered and handed back. 034 is built and waiting for his photo and Timur's review.

Each film's brief is its `BRIEF.txt`, copied from chat at the move. Its corrected script is its `VO_SCRIPT.txt`. Its facts,
guardrails and tier tags are in `src/audit/data.ts`, and its armed script fixes and guardrails are in
`src/audit/script_fixes.json`.

## 2. 032 "Up To": what was built, and what is open

- **Composition:** `InfluencerAudit032`.
- **Ports:** Studio 3174 (3171 was taken by a local proxy), MP4 host 4171.
- **Places:** six, rebuilt after "too many document visuals… keep 2-3 max", which is now L1:
  1. hook: three front pages carrying Timur's three photos (`public/whiskey 1.jpg`, `whiskey 2.jpg`, `whiskey 3.webp`,
     cropped to `assets/hook_photo_0..2.jpg`), with his photo centred, 1000 px wide, its foot off-frame;
  2. deal (v3, a bar): bottle, PROXIMO cask, neon "$600,000,000 / up to". The old v2 is in
     `scratchpad/backup/deal_v2_backup.ts`;
  3. shrink: cash pallets and a counter rolling to $130M;
  4. court: scales of justice, the 5% weight, a McGREGOR deed box;
  5. fair: a podium, coin stacks and the $180M plate;
  6. verdict: $600M foil balloons, INFLATED rising.
- **Take:** Timur's ElevenLabs "Russ" read, `public/ElevenLabs_2026-10-14…mp3`. It was copied to
  `assets/audio/vo_take_032.mp3` and run through the VO pipeline (NEW_VIDEO.md §4) → `vo_leveled.wav`, 18 cues, 156 words.
- **Photo:** `public/MCGREGOR_CONORnobelt.webp` → `scratchpad/vo/mcgsharp.py` → `assets/mcgregor_sharp.png`.
- **Bed:** Timur's own Nicholas Britell "Strings & 808 Beat". It was attached in chat and is now
  `assets/audio/music_strings808.mp3`. `scratchpad/vo/mkbed_strings.mjs` cuts `music_strings808_bed.wav`:
  - 0.2 s late, so the 808's first sub swell lands on "McGregor";
  - extended past the track's own fade (~49 s) by one 6-bar loop: 48.0 s → 27.43 s, r 0.84, found by
    `scratchpad/vo/loopfind.py` and `loopbars.py`;
  - −19.1 dB baked in.
  It sits 5.3–5.8 dB under the voice in every window. Good Man's cut (`music_goodman_bed.wav`) is kept, unused.
- **SFX:** 59 cues (`src/r45/score.ts`).
- **Open, for Timur to decide (not a defect):**
  - After he asked for his photo larger, lower and centred, his face sits partly in the Reel caption strip (y > 1500).
    He was told and has not asked for a change.
  - The screen sweep flags three one-frame "flashes" (popmp4) that are all designed motion: at 14 s and 16 s the neon
    tubes flicker on, and at 29 s three bricks cross at once. Expect them on any re-render.

## 3. Build, check, render, serve (run from the film's folder)

The tools are Node 24, `python` (not `python3`), and ffmpeg at the winget path in root `CLAUDE.md` → Environment notes.

```
npm install                                     # node_modules is not in git
node scripts/build.mjs                          # writes index.html + assets/film.js from src/ (never edit index.html)
npx tsc --noEmit -p .
npx hyperframes@0.8.143 preview --background --no-open --port 3174    # the Studio
node scratchpad/render.mjs --check              # every guard (script fixes + the brief's guardrails), no render
```

**Render ONLY when Timur asks in his own words.**
- **The guard:** `scratchpad/render.mjs` writes `renders/up_to_032_hf.mp4`. It takes only `--check` and
  `--allow-vo-conflicts`, and refuses anything else.
- **Launch it through WMI,** so it survives the session, with `HYPERFRAMES_RENDER_DETACHED=1`, or the CLI cancels itself
  when its parent exits. It takes ~22 min:
  ```
  $dir = "<repo>\OffCamCelebs\032-mcgregor"; $node = (Get-Command node).Source
  $cmd = "cmd.exe /c `"set HYPERFRAMES_RENDER_DETACHED=1&& `"$node`" scratchpad\render.mjs > `"$dir\renders\render.log`" 2> `"$dir\renders\render.err`"`""
  $si = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ ShowWindow = [uint16]0 }
  Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = $cmd; CurrentDirectory = $dir; ProcessStartupInformation = $si }
  ```
- **Verify the MP4 before handing it back** (NEW_VIDEO.md §6):
  ```
  node scratchpad/vo/mixprobe.mjs out
  node scratchpad/sweep029.mjs frames 15 1788 60 <stillsDir>
  python scratchpad/verifymp4.py renders/up_to_032_hf.mp4 <stillsDir> out/mix.wav   # PICTURE: CLEAN, sound diff ≈ 0, lag 0
  python scratchpad/popmp4.py renders/up_to_032_hf.mp4
  ```
  ⚠ The first 032 master FAILED this check: the hook's main page drew a grey box instead of its photo. That was a
  render-only bug ("ready" over an empty set), now fixed in `src/three/stage.ts` and recorded in root CLAUDE.md. The bad
  file is kept as `renders/up_to_032_hf_v1_greypage.mp4`.
- **Serve:** run `node scratchpad/serve.mjs 4171`, which serves a player page plus `/video/<file>` with range
  requests. Then open a tunnel to `http://127.0.0.1:4171`.

## 4. Links and tunnels

- **The old links:**
  - 032 Studio: `https://6rfokjjs4byg334pqo2bsjadwa.srv.us/#project/032-mcgregor` (srv.us forward 34);
  - 032 MP4: `https://2ia2k4kjnadfi4qtm4hjuk6wcq.srv.us/` (forward 35);
  - 031: forwards 32 and 33; 030: forwards 30 and 31.
- **They stay the same only with the same key.** srv.us derives the hostname from the key and the forward number. The
  key was copied to `OffCamCelebs/_local/srvus-key/tunnel_ed25519` (+ `.pub`, `known_hosts_srvus`). That folder is
  **git-ignored and exists only on this machine.** On a new machine, make a new throwaway key; the links will change.
- **The reconnect-loop scripts** are in `OffCamCelebs/_tunnels/` (`tunnel032.ps1` = Studio, `tunnel032v.ps1` = MP4,
  plus 030 and 031). Their `$s` path points at the OLD session's temp scratchpad: change it to `OffCamCelebs\_local\srvus-key`
  and choose a log path, then launch detached through WMI.
- **Cloudflare quick tunnels** failed repeatedly from this machine (530/1033); srv.us was used instead. Root CLAUDE.md →
  Handback has the whole fallback ladder.
- Processes started by the old session (the Studio on 3174, the MP4 host on 4171, the srv.us loops) may still be
  running. They are harmless. Stop only processes you can identify as these ports or scripts.

## 5. Copied in from outside the folder at the move

| What | Was at | Now at |
|---|---|---|
| The 029–032 briefs and 031's review notes (pasted in chat) | the session transcript | `029-mayweather/BRIEF.txt`, `030-jakepaul/BRIEF.txt`, `031-musk/BRIEF.txt`, `031-musk/REVIEW_NOTES_2026-10-12.txt`, `032-mcgregor/BRIEF.txt` |
| The Britell song (attached in chat) | `~/.claude/uploads/…/6a2f7736-Strings__808__Beat.mp3` | `032-mcgregor/assets/audio/music_strings808.mp3` (copied when it was wired) |
| The deal place's v2 (backup) | session scratchpad | `032-mcgregor/scratchpad/backup/deal_v2_backup.ts` |
| The bed's loop finders | session scratchpad | `032-mcgregor/scratchpad/vo/loopfind.py`, `loopbars.py` |
| srv.us loop scripts | session scratchpad | `OffCamCelebs/_tunnels/` |
| srv.us key | session scratchpad | `OffCamCelebs/_local/srvus-key/` (git-ignored) |
| Claude's memory notes (one per film, plus the index) | `~/.claude/projects/…/memory/` | `_handoff/claude-memory/` (the `offcamcelebs-*.md` files are this channel's) |

**Not copied, and not needed:**
- the old session's scratch frames, logs and research pages (sources behind the facts are cited in each film's `data.ts`);
- the HyperFrames agent skills, installed user-wide under `~/.claude/skills/` (`hyperframes*`, `general-video`,
  `media-use`). On a new account or machine, reinstall them with `npx hyperframes skills update`.
