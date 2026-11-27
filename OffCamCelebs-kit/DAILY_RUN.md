# DAILY_RUN.md — the 6 a.m. The Payouts run (OffCamCelebs)

Scheduled task "OffCamCelebs daily Payouts run" (trig_01S1V4pKB7F2FRDQq2KmAiPK): 05:58 Moscow every day, delivered into
the "the payouts" cloud session (it holds the Aperture Motion Worker and ElevenLabs connectors; this org cannot store
connectors on a scheduled task, so a fresh session per run would have neither).

Timur, 2026-11-22: "every day in the morning at 6 a.m. … check whether there is a The Payouts video due. If there is … check if
there's a script. If there isn't a script, then … come up with a script. You'll look at the 5 competitors, do exactly what I
told you to do before to come up with the script. And you're going to start working on the video and hand the studio itself
back to me once you're done. You'll do this without needing me for anything, for any approvals or anything like that. You'll
go straight to making the video. Now, if there is a script, you just do the same thing, but you follow the script."

**No approvals.** Nothing in this run waits for Timur: the script, the topic, the photo, the look and the sound are my calls.
Where a rule says "send it and wait", send it (in the final report) and keep going. The only stops are the hard ones below.

## 0. Set up (a fresh container has only git)

```
bash OffCamCelebs-kit/tools/bootstrap_cloud.sh && source /home/user/occ-work/env.sh
```

Then read, in order: `OffCamCelebs-kit/CLAUDE.md`, `OffCamCelebs/styles/offcamcelebs-preferences.md` (the 2026-11 changelog
entries first), `RULES-from-original-CLAUDE.md`, `OffCamCelebs/035-powerball/NEW_VIDEO.md`, `OffCamCelebs/HANDOFF.md`.
Read `OffCamCelebs/038-mint-mobile/` as the newest worked example (its BRIEF.txt, VO_SCRIPT.txt, CAPTION.txt,
PINNED_COMMENT.txt, `src/r45/sets/*`, `assets/audio/sfx_src/sfx_spec.json`).

## 1. Is a The Payouts video due?

`my_work` (client "The Payouts"). Times are Moscow. The piece to make is the open one (status `due`, not handed in) due
**today or tomorrow**, the earliest first; posting is 11:00 Moscow on its due day. Pieces already past due by more than a day
are old slots: list them in the report, do not build them. A piece with status `changes`: do its changes first (get_changes,
tick each one), and report. **Nothing due today or tomorrow: stop**, and report "nothing due" with the next due date.

Read `get_brief` (The Payouts / OffCamCelebs) and `get_changes` for the piece.

**Already built?** If the due piece already has a built film waiting for Timur's review (its HANDOFF.md row says BUILT,
not handed in) and no changes were asked, do not rebuild it and do not start a later piece early: report it again (Studio
link, preview), say how long is left before its 11:00 Moscow posting (the master render takes about 45 min, so "render"
is needed by about 10:00 Moscow), name the next due piece and its date, and stop. (2026-11-27: Video 7 of 9 was built the day
before as 041; Video 8 was due 11-29.)

## 2. The script

- **The piece has a script** (`script` or `piece_brief` in my_work / get_changes): follow it. Still fact-check every line at
  source (the standing rule) and correct what is wrong, recording each change and its source in `VO_SCRIPT.txt`; never invent
  around it.
- **No script:** write one.
  1. **The topic, from the 5 competitors** (Timur's method, "do exactly what I told you to do before"). The five accounts and
     the method are in `OffCamCelebs/COMPETITORS.md`. **If that file says the accounts are not named yet**, use the
     brief's own topic rules instead and say so in the report: a well-known person with a big, checkable headline money
     number, from the brief's pillars (fight, gambling and sports money; celebrity "billion" stories; famous deals whose
     headline number shrinks; well-known online money figures, sparingly); never a person already audited (HANDOFF.md and
     the brief list them); verdicts must genuinely vary (LEGIT, INFLATED, UNSUPPORTED).
  2. Research at source (the brief's data rules: SEC EDGAR, court records, regulators, Companies House, the buyer's own
     filings, Wayback; reputable outlets after; never net-worth aggregators). Check anything that can change.
  3. Write it in the brief's structure (hook with the big number, who they are, claim vs record, "To be fair: …",
     "Our rating: legit/inflated/unsupported.", "Send us who to audit next."), 150–170 words, about 60 s, VO-ready
     (numbers and years spelled out, years 2000–2009 as "two thousand one").
  4. Write the content-only build brief (`BRIEF.txt`, the brief's "Build brief" format, with the guardrails), `VO_SCRIPT.txt`
     and arm `src/audit/script_fixes.json` (guardrails proven on their examples) before the take exists.

## 3. Build (no approvals)

Number: the next audit after the highest folder in `OffCamCelebs/` (038 is used twice; the next is 039). Folder
`0NN-slug`, composition `InfluencerAudit0NN`, Studio port the next free in 3100–3199 (HANDOFF.md).

Follow `035-powerball/NEW_VIDEO.md` and the standing rules exactly, cloning from `035-powerball` (the 038 Mint changes —
the place modules `src/r45/place.ts` / `places.ts`, the preview switch, the SFX table — are in `038-mint-mobile`; carry them
over). In short: clone → the voiceover (ElevenLabs connector, Russ `HKFOb9iktHA85uKXydRT`, eleven_v4, two takes, the better
one; `vo_trim.py` TEMPO 1.04; fw.py → mergetok → silmap → onsets → captions_vo.mjs → level_vo) → the bed (the previous film's
song, `bedenv` to 5.5 dB under) → the subject's face from Wikimedia Commons and logos (credited in `assets/brand/SOURCES.txt`)
→ the places (parallel agents allowed; the 034/035 look; the hook is an enticing real object in motion from frame 1, no
figure before ~2 s; visuals follow the words; one object per line) → the sound (the EarnEdits pack, Earshot-checked cuts,
Openverse for gaps; no ping; the chain only on bars, rarely; 7–14 dB under the voice).

**If the EarnEdits pack is missing** (the bootstrap says "0 EarnEdits sounds": its audio lives only in the LFS zip
`OffCamCelebs/_sfx/EarnEdits-SFX-Pack.zip`, committed once Timur re-attaches it): take every effect from Openverse
(`tools/openverse_audio.py`, CC0 first) and check each cut with `earshot describe`, same levels and rules; say so in the report.
The pack's `index.json` still says what each EarnEdits sound is, so the choices can be swapped back later.

**Lessons from the first run (039 Canelo, 2026-11-23):**
- Clone from the newest film in this style (038-mint-mobile: place modules, preview switch, SFX tools), leaving out
  `node_modules`, `renders`, `.build`, `out`, then `npm install`. Its assets that git does not track are gone in a fresh
  container: copy `assets/fonts`, `assets/vendor`, `assets/grain.png`, `assets/tex_worn.png` from `034-ohtani` (restored by
  the bootstrap from the kit zip), and the bed from `031-musk/assets/audio/music_goodman_bed.wav` (039 shifted it so its drop,
  at 5.45 s in the file, lands on the hook's big figure).
- Plan places so every place has at least ~3.5 s of speech: a hand-over takes ~2 s, and a short place makes the next one
  arrive after its first caption beat (the build refuses). 039 put the fairness beat inside the math place.
- Run the VO pipeline with `/usr/local/bin/python3` (faster-whisper lives there); fw.py decodes through ffmpeg itself.
- Give the place agents a fixed SFX palette (names + placeholder files made first with sfx_prep, then the real cuts), so they
  build and score in parallel: see `039-canelo/scratchpad/AGENT_BRIEF.md` for the brief that worked (8 agents, ~30–45 min).
- Look at a PREVIEW contact sheet of the whole film (every 45 frames) before the long checks: 039's verdict word landed too
  small and was sent back.

**Lessons from the second run (040 Tiger, 2026-11-24):**
- `onsets.py` can misplace an onset by 0.3–0.4 s (040: "In August" landed inside "digits", "Our" and "Send" inside the
  word before; captions_vo refused). Check each measured onset against the waveform's 50 ms energy (speech resumes where it
  climbs above about -35 dB after a gap) and correct `scratchpad/onsets.json` by hand; note each fix in the report.
- Read the take for dropped words before choosing (040's take B dropped "then eight hundred").
- Openverse: anonymous searches must keep page_size ≤ 20 (above it the API answers 401); `tools/openverse_audio.py` does so.
  Downloads: `get <id> <outdir> --name <name>`.
- Earshot `make` has no golf-ball roll (it returns a club swing); a putt's roll is near-silent, so a soft glide covers it.
- Plan the hook's figure to read at ≥ 2.0 s even when the voice says it earlier: spell it in the caption (MIS_AT) and land
  the object on the word after the number.

## 4. Check (RULE 54 and the rest, all with canaries)

tsc; build; `render.mjs --check`; the audit sweep (PEN/EDGES) on every frame; the viol sweep (CROSS/NEAR/BAND/CAPZONE, Reel
zones looked at); the hand-over layers (`stale029.py`: 0 pop-in/out/linger/overlap); `hyperframes check`; wordcheck;
mixprobe → sfxsheet → sfxlevels033. Fix what they find; designed exceptions are named in the report.

## 5. Hand back (the Studio, never the master)

- **The Studio:** `npx --yes hyperframes@0.8.143 preview --background --no-open --port <p>`, then
  `node scratchpad/studio_artifact.mjs <outDir> --port <p>` and publish it with the Artifact tool (one artifact per film).
- **A preview MP4** (Timur 2026-11-22, standing): `node scripts/build.mjs --preview-only`, the draft render from a copy
  (rules file, "REVIEW BY PREVIEW RENDER"), plus a 540×960 copy.
- **Never render the master and never hand in through the app** in this run: Timur reviews first, then says "render".
- Write `CAPTION.txt` and `PINNED_COMMENT.txt` (the brief's caption rules) so the later hand-in is ready.
- HANDOFF.md row; commit and push on `claude/studio-handback-rule` (never main; no PR).

## 6. The report (the run's last message; Timur reads it on his phone)

Short and plain: which piece (label, due date), the subject and verdict, the Studio link, the preview MP4, the script
(paste-ready) and every correction with its source, what the checks found and fixed, and anything left for Timur.

## Hard stops (report and end; never guess past these)

- The Aperture Motion connector is off or signed out.
- The ElevenLabs connector is off (no voice: build the places on a provisional timing, report it).
- The subject cannot be verified at source well enough to rate (pick another subject instead, when there was no script).
