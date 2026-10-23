# The process rules, copied from the original machine's root CLAUDE.md (2026-10-23)

Only the sections an OffCamCelebs film uses: the channel itself, HyperFrames, the standing process rules and the Windows notes.
Paths in here name the ORIGINAL machine (C:\Users\Timur\…, its worktree, other projects' folders). Read them as history: on this
machine the films live in `OffCamCelebs/` beside this file, FFmpeg is `%FFMPEG_DIR%`, Chrome is `%HF_CHROME%`.

## OffCamCelebs — the second channel (this chat's channel)

**OffCamCelebs is the user's second content channel, run from its own Claude Code chat** the same
way the 100BasisPoints chat runs the finance channel above. Same craft, same process rules,
separate identity.

- **★★★★★★ SINCE 2026-10-10 THE LOOK IS LOCKED: "029 HF", REAL 3-D IN HYPERFRAMES** (user, on `OffCamCelebs/029-mayweather HF/`:
  "This looks amazing, I want you to fully save this style. Ensure that you save all the rules that this video implements,
  and ensure that the style will stay the same if I send you another video prompt later on.").
  - **Every new OffCamCelebs video is a HyperFrames project, cloned from the NEWEST film in this look**, following
    `NEW_VIDEO.md`. Since 2026-10-15 that is **`OffCamCelebs/032-mcgregor/`** (030 → 031 → 032). It has the same kit with
    its look untouched, and carries:
    - 030's guarded render (`scratchpad/render.mjs`), guardtest's on-disk stash, and a build that never drops a cue;
    - 031's 3-D people and parallax background layers;
    - 032's two additions:
      - the SCREEN sweep (`sweep029.mjs viol` + `scratchpad/viol032.py`, NEW_VIDEO.md step 3b);
      - the image-texture registry in `src/three/stage.ts`, with readiness re-checked after the draw.
  - **★★ AT MOST 2–3 DOCUMENT VISUALS PER FILM** (user, 2026-10-14, 032: "too many document visuals, try to be more
    creative… keep 2-3 document visuals maximum"). Documents are front pages, letters, filings and certificates. Every
    other place gets an OBJECT from the scene's own context (032: a bar, cash pallets, scales of justice, a podium, foil
    balloons). The rule is L1 in the prefs file.
  - **The brief arrives as a CONTENT-ONLY PROMPT** headed `NEW VIDEO — "<title>" (<subject>, audit #NNN)` with
    `FOLDER: NNN-slug | COMPOSITION: InfluencerAuditNNN`.
    - Save it verbatim as `BRIEF.txt` in the film's folder. 029–032 have theirs.
    - Its "everything visual is your call" never overrides the locked look.
    - Its guardrails go into `script_fixes.json` → `guardrails`, so `render.mjs` refuses a caption that crosses one.
  - **Music:** the bed is the previous film's song unless Timur names another (the standing rule below). Since 2026-10-21
    (033) that is 50 Cent, "Big Rich Town (Instrumental)" (`033-danawhite/assets/audio/music_bigrichtown.mp3`, cut by
    `scratchpad/vo/mkbed_bigrich.mjs`: its drumless intro, then the drop on a chosen word). Before it, from 2026-10-15, the
    user's own Nicholas Britell "Strings & 808 Beat":
    - the source is `032-mcgregor/assets/audio/music_strings808.mp3`;
    - the cut is made by `scratchpad/vo/mkbed_strings.mjs`, loop-extended past the track's own fade at ~49 s;
    - the bed before it was "A Good Man with a Broken Heart" (002's `music_goodman.mp3`).
    ⚠ **A file attached in chat can arrive as a 9-byte "Not Found" stub.** Check its bytes (ffprobe) before saying
    whether it is readable, then copy it into the film's `assets/`. The upload folder is outside this project.
  - **★ The voiceover: I generate it myself through the ElevenLabs connector when a film needs one** (Timur, 2026-10-18:
    "you have access to elevenlabs now, if I need a voiceover you can generate and implement it yourself").
    - Read it from the FINAL corrected `VO_SCRIPT.txt`, once the script has been sent and has settled.
    - The voice is "Russ – Deep, Smooth and Articulate", voice_id `HKFOb9iktHA85uKXydRT`. The library holds other
      "Russ" voices, so use the id. The settings of the 030–032 takes, from their file names (`…_sp105_s100_sb100_v4`):
      speed 1.05, stability 1.00, similarity 1.00, model v4.
    - Then run the take pipeline unprompted (NEW_VIDEO.md §4, step 0 first). A take Timur puts in `public/` still wins.
  - **A master render** follows `OffCamCelebs/HANDOFF.md` → "Render":
    1. `render.mjs --check`;
    2. the render, launched through WMI with `HYPERFRAMES_RENDER_DETACHED=1`;
    3. the checks: fresh stills + `verifymp4.py`, then `popmp4.py`.
    A master that fails its checks is renamed `…_v1_<fault>.mp4`, never deleted, and re-rendered after the fix.
  - **Ports and links:** Studio ports are allocated per film (030: 3169, 031: 3170, 032: 3174; MP4 hosts 4169–4171).
    - The srv.us forwards are numbered per film (30–35 used; next free: 36).
    - Every forward uses one throwaway key, kept local in `OffCamCelebs/_local/srvus-key/` (git-ignored), so each link
      stays the same across reconnects.
    - The loop scripts are in `OffCamCelebs/_tunnels/`. Their paths still point at the old session's temp folder, so
      edit them first.
  - **The look is the first section of `OffCamCelebs/styles/offcamcelebs-preferences.md`**, "THE LOCKED LOOK — 029 HF"
    (L0–L9): real Three.js objects on plain lit cream/espresso grounds, a measured light rig with a dark side on every solid,
    word-by-word Archivo captions, camera moves through one world with frame masks, and the family-per-job SFX score.
  - **A brief never overrides it;** the brief is the authority on content only.
  - **Before handback:** the rule-54 sweeps over every frame (pen, edges, stale, shade).
  - The Remotion kits (027, 028, 029) are history; never clone them for a new film.
- *(Before 2026-10-10:)* videos lived in **`OffCamCelebs/<NNN-slug>/`** (e.g. `001-grant-cardone`), each a standalone
  Remotion project (same shape as a Style 3 video: `package.json`, `src/`, `public/`, `out/`,
  `scratchpad/`). Tooling patterns (render/still/serve scripts, VO pipeline) carry over from the
  Style 3 projects; the look does not.
- **★ THE AUTHORITY ON LOOK IS `OffCamCelebs/styles/offcamcelebs-preferences.md`** — read it
  before building or revising any OffCamCelebs video. A note the user gives about an OffCamCelebs
  video is recorded THERE, never here and never in the Style 3 file. The reverse also holds.
- **Content rules, legal framing, facts and guardrails arrive IN EACH VIDEO'S PROMPT** and are
  recorded in that video's `data.ts` with their tier tags and ★ flags. There is no standing
  content doc — the prompt is the authority on content, every time.
- All **Standing rules — process** below apply unchanged (never render unless asked, the VO
  pipeline, dB-measured mixing, verification, handback via Studio + tunnel).
- **Studio ports: 3100–3199** (100BasisPoints: 3011+; Vision Media: 3000–3009).
- *(Superseded for objects, engine and light by the 029 HF lock above; kept for its history:)* **★★★★★ SINCE 2026-10-07 (027) THE LOOK IS RULE 45, "FLAT EDITORIAL"** (user: "NEW HOUSE STYLE — this REPLACES the
  Bartlett 3D materials spec from now on"). Flat 2-D cel-shaded SVG on cream #F7F4EC / dark #24083D grounds with static
  grain, one accent, Archivo word-by-word captions (blur-in, two weights), a 1.00→1.04 push-in per set. ★★ RULE 48 (same
  day: "the animations and transitions still don't smooth in and out enough, enforce that further"): EVERY move, fade,
  count and camera key starts and ends at rest, with no overshoot (this supersedes the brief's back-out entrances); only an
  exit that leaves the frame may accelerate out; hand-overs are long in-out trucks and cranes, no dives. It is measured by
  `027-kylie/scratchpad/curves027.mjs` and the tightened fluid scan.
  ★★ RULE 49 (2026-10-08, 028: "They are far more realistic than these are"): objects are built to the references' REALISM,
  with grain inside each object, soft form shading, every real part, translucent glass and contact shadows. It supersedes
  45.1's "one shade".
  ★★ RULE 50 (2026-10-08, 028: "there is something wrong with the video that makes it seem like AI made it… identify this
  and solve this issue"; "visuals need to be even more realistic, this applies to all visuals"). Find the AI tells by
  measuring the human-made references against the film in motion; each tell found becomes a rule.
  ★ The TRANSITIONS are 100bps' (user, same day, after first asking for 026's back and then seeing them: "remove those weird
  zoom out or sliding animations where you can see the edge of the scenes, use 100bps transitions instead"): every
  hand-over is a camera move through one world (Style 3 E7, V34 `shot.tsx`): a truck, a crane or a dive, with yaw/pitch,
  a depth arc and parallax; the ground is continuous (cream ↔ dark dissolves), so no edge of a scene is ever seen. ★ NO DOTS BETWEEN WORDS on screen, ever (user: "do not include any AI text with
  the dots in between the words at all"): no "·" separators in sub-labels or on objects; commas, colons or a second line,
  and abbreviations without dots ("SEC"). ★★ RULE 46 (same day): THE VIEWPOINT TRAVELS — "it's supposed to feel like the
  place that they're watching the visuals from is changing, not just the visuals themselves". Each set is a place larger
  than the frame; the camera travels to each sentence's object (100bps' Cam keys: 30–50 f, in-out, where the voice points,
  never overlapping), drifts between keys, and world-fixed surroundings plus a parallax backdrop show it moving. Objects
  that are simply there are revealed by the camera, not slid in. The spec is the first section of
  `OffCamCelebs/styles/offcamcelebs-preferences.md`; it supersedes rule 40's 3-D materials and RULE 44's "025's 3-D shiny
  look". Clone the newest kit, `OffCamCelebs/027-kylie/`. Rule 40's text below is kept for its still-standing parts.
- **★★★★ SINCE 2026-10-05 THE LOOK IS RULE 40, "EDITORIAL PURPLE"** (user: "change the style of these videos
  completely… copy the style of the videos that I put in the temp folder"). It is measured from the four references in
  `OffCamCelebs/temp/` and SUPERSEDES everything in this paragraph below (TERMINAL, NOIR, the Bankers journey). The
  spec is the first section of `OffCamCelebs/styles/offcamcelebs-preferences.md`. Clone the NEWEST kit,
  `OffCamCelebs/026-garyvee/src/r40/`. Since 2026-10-06 it carries:
  - captions owned by their scene;
  - varied transitions (pushes from four sides, dollies, zooms);
  - no damped bounces;
  - the camera zoom painted, not stretched.
  Its transitions are the user's amendment of the same day: smooth, with a share DIRECTIONAL in the 100bps manner (an
  accelerating exit, then an arrival from the other side), never hard cuts.
  ★ The opening of 025 is the reference: one large, literal, solid object per scene, acting on its words. Never document
  crops or the previous style's devices. ★★★ RULE 41: no two scenes' visuals ever intersect, not even while fading.
  The probe judges cross-scene pairs at any opacity, blurred or not.
  ★★★ RULE 43 (2026-10-05): **OffCamCelebs now carries SFX**, many of them, in the 100bps / Bankers manner (user: "there
  should be more sfx, but sfx like the ones used for 100bps or bankers"). This ends the channel's no-SFX policy, so the
  "score the SFX unprompted" rule now applies here too. The studio's pack is copied into the video's `public/sfx/`;
  it is scored family per job in `src/r40/score.ts`, every cue timed by its animation's own window, and levelled from
  the rendered stem against the Bankers band. Check it with `scratchpad/sfxsheet025.mjs`, `whooshsync025.py` and
  `sfxlevels025.py`. ★★ The same day the user asked for more FLUID animation ("some of the animations … aren't really
  fluid or smooth enough"). `scratchpad/fluid025.py` judges every in-scene action's speed curve: no start at full
  speed, no dead stop, no break. `fillmatch.mjs` checks that a zoom-through's fill is the RENDERED colour it dives into.
- *(Superseded, kept for history:)* **THE LOOK IS DEFINED AND LOCKED: "TERMINAL"** (user, 2026-09-02 — "fully save and remember
  this style for now"). Dark instrument panel — `#0B0E14` ground with two drifting lights over a
  static grid, Space Grotesk + Inter + IBM Plex Mono, rounded geometry, full-colour photo plates,
  and a PUSH transition between beats rather than a dissolve. The complete spec is the first
  section of `OffCamCelebs/styles/offcamcelebs-preferences.md` and is self-contained.
  **Clone the NEWEST `OffCamCelebs/<NNN-slug>/` — it carries every fix.**
  ⚠ The NEWSPRINT look of 003/004's first cut is SUPERSEDED and must not be resurrected.
  ⚠ Style 3's LOOK is never inherited. ★ Since 2026-09-26 (rule 36, the user: "more modern and
  smooth, like 100bps, but different in its own way") its MOTION is: a breathing camera,
  constructions that arrive on OUT and leave on IN, a Turn and a key cone. This supersedes the
  old single exception (the push, rule 15). The objects, rooms, type and colour stay OffCamCelebs'
  (rule 35, 012 + 017). Clone the motion from `OffCamCelebs/021-martell/src/audit/motion.tsx`.
  ★ **Colour is the NOIR palette (rule 37, 2026-09-27: "choose the right color palette and stick
  to it. Dark themed similar to 100bps").** One near-black room, a neutral platinum key, graphite
  / steel / cool paper, and ONE accent: violet, for the claim only. Facts are white light. Clone
  `N` from `OffCamCelebs/021-martell/src/audit/theme.ts`. Style 3's platinum-and-RED is still
  never used.
  ★★ **The LOOK is Bankers', in NOIR colours (rule 38, 2026-09-28: "a visual style and look more
  like the bankers style, but with the current normal smooth colors").** It is one continuous camera
  journey through places: a MID of extruded solids on a Turn, and a real FG object cropped by the
  frame edge. Things leave by moving. Clone `OffCamCelebs/022-cramer/src/audit/` (world.tsx,
  solid.tsx, places.tsx). Only the grammar and the engine cross from `Bankers/`: never its logo,
  watermark, colours or end card.

---

## HyperFrames — HTML-to-video projects (set up 2026-10-08)

- **HyperFrames projects live in `HyperFrames/<NN-slug>/`**, each scaffolded with
  `npx hyperframes@<ver> init <dir> --example=blank --resolution=portrait --non-interactive`. The CLI is pinned per
  project in its `package.json` scripts (the first was 0.8.140). The HyperFrames agent skills were installed
  user-wide (`~/.claude/skills/hyperframes*`, `general-video`, `media-use`); they lead with `/hyperframes`.
- **First film: `HyperFrames/01-style3-demo/`.** It is a 30-s demo of the `Style 3 references/` look, measured afresh
  from the ten reels into its `DESIGN.md`. It uses a Three.js world (vendored in `assets/vendor/three/`, driven by
  `hf-seek`) plus HTML sub-compositions for the type, card, transitions, end card and captions. Clone it for
  the next HyperFrames film.
- **★ A 100bps BRIEF BUILT IN THE REFERENCE LOOK: `HyperFrames/02-oil-world-price/`** (user, 2026-10-09, with the oil
  brief: "Use that style, try to create this video … Keep all the files in the hyperframes folder"). "That style" is the
  `Style 3 references/` look the demo measured (`01-style3-demo/DESIGN.md`). The user's own words override the brief's
  "10-year yield video" style precedent. ★ Then, after the first build: "Don't stick to the prompt I sent you … make the
  video look a lot like the reference videos by replacing things like scenes with text with 3d visual scenes … transitions
  should be seamless." So the brief's VISUAL rules (statistical first, 3-D as accent) are superseded for this film: it is
  object-led like the references, one lit 3-D hero per beat. The facts, the one-dataset rule and the honesty rules stand.
  The look notes live in that film's `DESIGN.md` → "User notes". The engine is
  V34 HF's: Preact layers drawn at HyperFrames time, the build script that writes `index.html` from the plan, and
  `three/stage.ts` for the 3-D accents. Every file of the film lives in that folder. Studio port 3063.
- ★★ **ONE 3-D WORLD, MEASURED IN MOTION (2026-10-09, the oil film's v2 sweep).** Four rules came out of the full-frame
  captures, each found by a tool before any eye did:
  - **Places must share the frame mid-travel.** Places 9–14 units apart, under a 3–5-unit frame, gave ~0.5 s of empty
    floor in every travel. Put each next object 4–6.5 units on, so the outgoing one is leaving as the next arrives.
  - **A travel moves ≤ ~1.6 frame-widths** (frame width ≈ 0.344 × distance at fov 34°, 9:16). Faster, and fine detail
    strobes: striped stacks, a jagged price line, glossy highlights. `camera.ts` backs a long travel off along its view
    at mid-move (`pull`, auto). Never ride sideways along a long chart; pull back, then push in.
  - **Never travel through a place.** A place behind the camera made the camera back through a printer, and a black slab
    swept up the frame.
  - **Nothing pops at a place's window edge**, and no label swaps its words or colour in one frame: cross-fade them.
    Light in the air (trails, glass, charts) goes on layer 1, so the Reflector floor doesn't mirror it.
  The tools are in `02-oil-world-price/scratchpad/`:
  - `moves.mjs` + `strips.py`: frame strips across every travel and cover;
  - `popcheck.mjs`: every overlay judged frame to frame from the film's own code, with canaries;
  - `popscan.py`: one-frame jumps in the captured frames, with real-frame canaries;
  - `mixprobe.mjs`: the mix rebuilt offline from `index.html`. The PNG capture's own `audio.m4a` matched it within 0.02 dB.
- **Studio port: 3061** (`npx hyperframes preview --background --no-open --port 3061`). ⚠ HyperFrames' default port
  3002 sits inside Vision Media's 3000–3009 range: always pass `--port`.
- FFmpeg is not on PATH; prepend its winget bin dir (Environment notes) before `render`/`doctor`.
- All process rules here apply: **never render unless asked**; hand back in the Studio, opened in the user's browser.
- ⚠ **A STUDIO STUCK ON AN OLD BUILD IS THE BROWSER'S CACHE, NOT THE PROJECT** (2026-10-08). The live player loads
  `/api/projects/<id>/preview` with no cache-buster, gets a 304 and reuses the cached old document. Every hot
  reload (with `_t=`) then loads the new build in a hidden "shadow" iframe that is never promoted, and the Studio
  says "The preview did not reload (it took too long to load)". Fix: `fetch(url, {cache: "reload"})` both preview
  URLs, or hard-reload the Studio. Don't run `animation-map.mjs` while the Studio is open either: its writes and
  its headless Chrome keep the Studio reloading.
- Three.js in HyperFrames: guard every `normalize`/`pow` in a custom shader. One NaN pixel is spread over the
  whole frame by the bloom pass, and the frame renders black. Give each 3-D place a visibility window, or a far
  place shows through a near one.
- ⚠ **Layered floors z-fight** (2026-10-08, "glitching in the background at around 10 seconds"). A mirror and a sheet
  2 mm apart flipped winner frame to frame on a high camera's far floor: stripes, and one-frame flashes of the raw
  mirror. Floor layers must not write depth; draw them first, in a fixed `renderOrder`.
- ⚠⚠ **HYPERFRAMES MIXES DIFFERENTLY FROM REMOTION, IN TWO WAYS** (2026-10-08, V34 HF's first render).
  Both were silent in the Studio and showed only when the render was fitted against the Remotion master.
  - **A `volume` automation lane IS the clip's level (0..1). It does not multiply `data-volume`.** The port wrote its
    fades as bare 0→1 ramps, so all 25 faded SFX played at unity: up to +26 dB over their level. Write the lane as
    gain × ramp.
  - **A MONO source goes to both channels at full level.** Remotion applies a −3 dB pan law. The voice and every SFX
    file are mono and the bed is stereo, so the voice sat 3 dB further above the bed than the measured master. Give
    mono sources ×√½ to match a Remotion mix.
  - HyperFrames' own mux leaves no AAC delay, so a port keeps `AUDIO_LEAD` 0 and every cue lands on its frame.
  - **How it was measured:** fit the render as a·voice + b·bed + c·(the cue list rebuilt from `index.html`), per
    10-s window, then per cue (lag and level). Prove the fit first on the Remotion master with its own stems.
    The tools are `Video 34 HF/scratchpad/sfxfit.py` and `stemfit.py`.
- ⚠⚠ **THREE.JS'S `Reflector` IS WRONG UNDER AN OFF-AXIS CAMERA** (2026-10-08, V34 HF: one frame at 40.000 s where the
  buyers' floor jumped).
  - **Why:** it builds its mirror camera by rolling the real camera 180°, which flips x as well as y. A registered
    (off-axis) camera's sideways shift then points the wrong way, so the reflection is right only where the two frusta
    overlap. The result is hard-edged patches that move with the eye: 6.7k → 88k → 4.4k px over five frames. In stills it
    looked like a faint reflection, or none at all.
  - **Fix:** reflect the SCENE, not the camera. Mirror it about the floor plane (lights included) and draw it through the
    same camera into a frame-sized target, clipped at the floor. The floor then samples that target at `gl_FragCoord`.
    See `Video 34 HF/src/three/stage.ts` `drawMirror`.
  - **How it was found:** `vidscan.py`'s reversal scan against the Remotion master, then switching the floor's parts off
    one at a time in a headless harness (`scratchpad/viewdbg.mjs`, `window.__v34flags`). Only the mirror was involved.
- ⚠⚠ **A 3-D CANVAS SIZED FROM ITS ON-SCREEN SCALE RE-RASTERISES WHENEVER THE CAMERA DRIFTS** (2026-10-08, V34 HF: f1386).
  - **What happened:** `pw = round(rect.w × scale)` changes by a pixel whenever a slow drift carries the scale across a
    rounding boundary, and each change re-grids the whole view. The board was 1177 px wide for ONE frame between two
    1176s. Over the film the old rule did this 374 times with the view at rest.
  - **Fix:** each view keeps its own resting scale (the median of its on-screen scale, measured by a layout-only sweep of
    every frame) while it is shown within [−0.3, +0.1] of it. Only fast moves step it, on a 0.25 grid. The tools are
    `Video 34 HF/scratchpad/scalesweep.mjs` (`--write` emits `src/three/viewscale.gen.ts`) and `stage.ts`.
  - **Proof:** 0 changes at rest and 0 flip-flops. The canary is the old rule, which must show the f1386 flip.
  - Keep the rule a pure function of the frame: render workers draw frames out of order, so hysteresis is not allowed.
- ⚠⚠ **A CLIP BOUNDARY IS A FLOAT; GATE EVERY LAYER BY ITS OWN FRAMES** (2026-10-08, V34 HF: f3410).
  - **What happened:** the "So be honest." hero clip ended at 113.666666 s, written to six decimals, while frame 3410 is
    113.6666667 s. The RENDERER still drew the hero at f3410, one frame past its window: a dark card edge at the frame's
    left edge, in every render. A snapshot at the same instant was clean, and so was a headless harness without the
    HyperFrames runtime.
  - **Fix:** the driver renders each layer only for f in [from, to), which is Remotion's `<Sequence>` semantics, and leaves
    the host empty otherwise. The clips are written a hair wide (start floored, end ceiled) so HyperFrames never hides
    a frame a layer owns.
  - **Proof:** the A/B between renders — f3410's left-edge luma went from 114 to 230.
  - **A render-only defect needs the real renderer to prove its fix.** Neither the stills nor the harness could see this.
- ⚠⚠ **PREACT'S `useId` REPEATS ACROSS SEPARATELY RENDERED LAYERS** (2026-10-09, OffCamCelebs 029 HF). The V34 HF driver
  `render()`s each layer host as its own Preact root, and each root numbers its ids from the same start. SVG gradient ids
  therefore collided between layers, and `url(#id)` resolved to the first layer's gradient: a cream card came out green and
  steel chain links blue and red. Use a per-frame counter reset by the driver (`frameUid`, `029-mayweather HF/src/shim/
  remotion.tsx`), never `useId`, for any SVG def in a ported kit.
- ⚠⚠ **TWO PROCESS HOLES IN THE HF KIT, FOUND ON OffCamCelebs 030 (2026-10-11).**
  - **The build dropped every TICK without a word.** `build.mjs` measured each SFX file in WHOLE frames, floored, and skipped
    any cue left with no duration. `tick.wav` is 14 ms (0.42 f), so every tick went: 030's five bundle landings, and 029 HF's
    four window ticks, which its delivered render lacks. Measure files in exact frames, and make an unplaceable cue a build
    ERROR that names it. Found only because the SFX level sheet (`scratchpad/vo/sfxsheet.mjs`, read from `index.html`)
    listed no tick family. **Read the built `index.html`'s cue list against the score, not the score alone.**
  - **029 HF had NO guard in front of its render.** The Remotion `render.mjs` carried the script-fix tripwire; the HF port
    rendered with a bare `npx hyperframes render`, so a take read from the brief would have gone to the master unchecked, and
    guardtest called a script that did not exist. `030-jakepaul/scratchpad/render.mjs` is the guarded HF render (`--check` runs
    only the guards). guardtest now stashes the real files ON DISK first, and the render refuses while that stash exists. The
    refusal was proven both ways with the render call intercepted, so nothing rendered.
- ⚠⚠ **A PART FLOATING FREE OF ITS OWN OBJECT IS INVISIBLE TO A COLLISION CHECK (2026-10-12, OffCamCelebs 030: "the camera
  visual has a floating piece").** PEN only compares DIFFERENT objects, so a camera's flip screen 15 px off its body, a key's
  bow off its shank and a tag 6 px in front of its arm all passed. `030-jakepaul/src/audit/g3audit.ts` FLOAT joins each
  object's parts that touch (three-mesh-bvh closest points, 1.5 px) and requires every piece to rest on the floor, a backdrop
  or another object. It runs via `sweep029.mjs float`, with canaries, on a settled frame of every place. Its first run found
  22 more across all seven places.
  - ⚠ `closestPointToGeometry` is not symmetric, and with a small `maxThreshold` it missed parts that touch. The check
    searches unbounded after a box prefilter and takes the smaller of both directions.
  - ⚠ A gap that comes from geometry you did not model shows only when measured: Joshua's card hung from a rope that SLOPES
    7 px along its length.
  - A render the user asked for was STOPPED (about 10%) when the class turned out bigger than the one note; the fixed film
    was rendered afresh.
- ⚠⚠ **A HYPERFRAMES RENDER CANCELS ITSELF WHEN THE PROCESS THAT STARTED IT EXITS (2026-10-13, OffCamCelebs 031).** The CLI
  snapshots its ancestor processes and aborts with `render_cancelled_parent_exited` as soon as any of them is gone.
  - Run as a session background task, the render died at frame 17 when the session ended.
  - Launched with `Start-Process … -WindowStyle Hidden`, it died 20 s later, when the PowerShell that started it exited.
  - **For a long render, set `HYPERFRAMES_RENDER_DETACHED=1` in the launcher's environment** (PowerShell: `$env:…` before
    `Start-Process`). The CLI then skips the ancestor check. `render.mjs` passes its environment through to `npx`.
  - Delete the dead attempt's `renders/.<name>.hf-transaction-*` folder before relaunching.
- ⚠⚠ **TWO KIT TRAPS FROM OffCamCelebs 031 (2026-10-12).**
  - **`rbox`/`box` put the FRONT face at `position.z`.** A body `rbox(w, h, D)` placed at `z = D/2` spans −D/2…D/2. Parts
    written at `z = D` (an LED, a button, feet, a display panel) floated 48–120 px in front of their bodies. FLOAT found some;
    the stills found the rest.
  - **A lathe profile closed at r = 0 makes three-mesh-bvh's PEN report crossings that are not there.** The cap is a ring of
    degenerate triangles. A gavel's block "crossed" its head with 1.4 px of air between them. Cap anything another object
    rests on with a `CircleGeometry` disc. Before chasing a PEN hit, measure the two parts' real separation: a precise
    `Box3.setFromObject(o, true)` logged from `update()`.
  - **★ (2026-10-13, the 3-D people and background layers.)** Four more:
    - **A negative seed through `%` gives a negative index, and `new THREE.Color(undefined)` is WHITE, silently.** Every street
      tree's crown came out white. Index with `((i % n) + n) % n`.
    - **`x ** 0.35` with x a hair under 0 is NaN.** A leaf's tip vertex went NaN, `computeBoundingBox` logged errors and the
      leaf vanished. Clamp before a fractional power: `Math.max(0, 1 - t) ** 0.35`.
    - **A shell lying ON a surface (hair on a scalp) z-fights where they meet**: torn dark patches at the hairline. Give the
      shell `polygonOffset` (factor −2, units −6) and keep it ~1% off the surface.
    - **A background behind 3-D objects needs its own eye and an ALPHA fog.** With the objects' eye (high), the far ground's
      horizon sits in the caption band; an eye level with the objects' middle puts it behind them. And a colour fog cannot
      match a radial ground, so `stage.ts` replaces three's `fog_fragment` to fade a fogged view's alpha (premultiplied: an
      opaque material is written without blending). Blur is drawn into the view's own canvas (`ctx.filter`), never a CSS
      filter. Tag every compound background thing (a tree, a car, the pavements) as ONE object, or PEN reports its own
      overlapping parts.
    - Debug: `CAM='{"x":…,"y":…,"z":4}' node scratchpad/sweep029.mjs frames …` holds every place's camera there (a close look
      at one part at full detail).
    - **★ A `View3D` name must be unique across the whole layer, not just its place.** The stage caches each view's model
      by its id (`<layer>--<name>`), and every place's BACK pass draws in the one "ground" layer. Two places that both named
      a view "skyline" shared ONE model: whichever the page built first. A page playing from frame 0 (the Studio, the stills)
      showed the first place's skyline in the second, while the render's workers, each starting in its own range, built the
      right one, so the MP4 disagreed with the stills (verifymp4's tile check caught it). Name views per place
      (`skyline-tweet`), and grep the sets for duplicate names after adding one.
- ⚠⚠ **A "READY" CHECK OVER AN EMPTY SET IS TRUE (2026-10-15, OffCamCelebs 032's master).** `paintTex` caches a texture as
  final once `fontsReady() && imagesReady()`. `imagesReady()` is `every()` over the photos REGISTERED so far, and a photo
  registers inside the draw (`imageOf`). The hook's first front page was the first texture the render painted, before any
  photo was registered. Its grey placeholder was cached as final, and the MP4's whole hook (the cover frame too) lacked its
  photo. The fresh stills were right because they painted before the faces loaded, so they repainted.
  - **Fix:** re-check readiness AFTER the draw (`032-mcgregor/src/three/stage.ts`).
  - **How it was found:** only `verifymp4.py`'s tile comparison of the MP4 against fresh stills caught it, which is why that
    step runs on every master.
- ⚠⚠ **THREE TRAPS FOUND BY OffCamCelebs 029 HF's FULL SWEEP (2026-10-09/10, RULE 54).**
  - **`scene.environment` IGNORES each material's `envMapIntensity`.** Three uses `scene.environmentIntensity` (1) for every
    standard material whose own `envMap` is null. So 029's "paper takes 0.35 of the room" did nothing, every object took the
    whole RoomEnvironment from every side, and nothing had a dark side. The shade audit measured that the darkest 5% of each
    object's pixels still got at least its albedo. Give each material the env as its OWN `envMap` (`stage.ts`, scene setup).
  - **VSM shadows throw false dark WEDGES across thin stacked sheets** (letters, pages): its blurred moments. PCF soft shadows
    are correct. Found with the lab's part-hiding switch (`__g3hide`) and `noShadow`, not by eye.
  - **A place drawn in a layer window shows whatever it has past its frame's edge** on the window's first or last frame: the
    next scene's corner snapped on, the last one's shadow lingered and vanished. Bound each place with a soft FRAME MASK that
    rides its hand-over (`029-mayweather HF/src/r45/Film.tsx` `frameOf`). A truck's gap must be ≥ 2 feathers, and a crane must
    travel ≥ the frame height (1600 px left 320 px of the old frame on screen).
  - The tools are in `OffCamCelebs/029-mayweather HF/scratchpad/`, each with canaries:
    - `sweep029.mjs`: frames, per-layer alpha, an `audit` mode (the in-page `src/audit/g3audit.ts` built with
      `build.mjs --audit`), and a lighting `lab`;
    - `stale029.py`: pop-in, pop-out, linger and overlap at every hand-over;
    - the audit's PEN check (three-mesh-bvh, triangle against triangle, per tagged object, `userData.pierces` for designed
      joins), its EDGES check (a canvas border cutting visible content) and its SHADE check (lit ÷ albedo per object).
- **The sweeps that carry over with every clone** (`HyperFrames/01-style3-demo/scratchpad/`):
  - **Glitches:** capture every frame with `render --format png-sequence` into the session scratchpad. That is
    verification, not an MP4. Then run `flicker.py <seq> <out>`; its reversal share flags pixels that jump and come
    straight back.
  - **Intersections:** in the composition page, `(await import("./scratchpad/intersect-probe.js")).sweep()`.
    It checks text×text and text×object (via a flat ID render of the 3-D solids) by ink boxes, plus tile
    interpenetration. It proves itself with canaries first; for text×text, plant an overlapping word and watch it fire.
- The user's look notes for a HyperFrames film go in that film's `DESIGN.md` → "User notes" (they outrank its
  measurements).

## Standing rules — process, not look

These survive independent of style. (Look rules live in the style's own preference file.)

- **★ RECORD EVERY PREFERENCE THE MOMENT IT IS GIVEN (user, 2026-08-30).** Whenever the user
  states a change, correction or taste note — mid-build, mid-turn, anywhere — write it into the
  owning preference file IN THE SAME TURN, unprompted: Style 3 notes into
  `test/resources3/style3-preferences.md`, process notes here. Do not batch them for handback,
  and do not wait to be asked; the user expects this to happen automatically every time.

- **★★★ NEVER SHIP A PLACEHOLDER SHAPE FOR A REAL THING (user, 2026-08-30).** A square that is
  "supposed to represent" a country, a safe, a building or anything else is not a design — it is
  a note to myself that I never finished. **Read the actual wording of the line, work out what the
  words literally mean, and BUILD THAT.** If the script says *safe*, draw a safe: body, door,
  wheel, hub, handle, bolts, rivets, feet. If it says *country*, draw the country's flag. If it
  says *vault floor*, draw stone with joints and bedding planes. The user has had to ask for this
  conversion repeatedly across a single video — squares → real safes, boxes → real flags — so
  treat an abstract rectangle standing in for a concrete noun as a **defect to fix before
  handback**, never as a finished visual. This is the same instinct as the Style 3 rule "every
  scene enacts its sentence", applied to the OBJECTS rather than the motion.

- **★★ EVERY OBJECT ON SCREEN NEEDS A REASON THE VIEWER GETS INSTANTLY (user, 2026-09-26, Bankers
  Video 1: "Save this as a preference from now on, the reason these objects are on the screen should
  really make sense").** The companion to the rule above: that one asks whether an object is REAL; this
  one asks whether its PRESENCE makes sense. The test is whether a viewer could say in three words WHY it
  is there, from what the voice says at that moment. Otherwise it goes.
  - A pun on a word in the brief is not a reason: an "index-fund basket" drawn as a shopping basket.
  - An object about the TOPIC but not the SENTENCE is not a reason: a wafer under a share-price chart.
  - A correct but unrecognisable object fails too: a "Micron chip" that reads as a black card.
  - Prefer the thing the sentence names, and a recognisable real object with its maker's label.
  - The worked example is `Bankers/CLAUDE.md` §2.5.1a.
- **★★ NEVER REPEAT A VISUAL WITHIN A VIDEO (user, 2026-09-03, Video 14 — "I'm telling you never
  ever repeat the same visuals in different scenes within the same video").** Every scene gets its
  own object, built from what its sentence literally says. A component reused across scenes (the
  same ticket, the same grid of cells, the same cross) is a DEFECT to fix before handback, with
  exactly one exception: a reprise the brief itself sanctions (e.g. the hook's object returning in
  the takeaway). Video 14 shipped the trade ticket ×5, the multiplication cross ×2 and the cell
  grid ×3 before this was ruled on — audit for it on every build: list each scene's hero object
  and check the list for duplicates.

- **★ WHITE-STAGE CADENCE (user, 2026-09-03, Video 14).** One in every 3–4 scenes is WHITE-themed
  — the stage floods light and the scene's ink swaps dark (`mixHex` on a `stage` prop, never a
  second component). ★★ **RE-STATED FOR STYLE 3, 2026-09-25 (Video 27): "make sure that in general
  there are more white themed scenes consistently scattered throughout the videos with this
  style."** This supersedes the 2026-09-23 "2–3 designed white story beats" (from V12). A Style 3 film
  again runs about ONE WHITE CONSTRUCTION IN EVERY 3, spread evenly, with no dark stretch longer than
  ~30 s. `audit.mjs` checks both. The smooth-dissolve half of this rule is unchanged. And the transition dark↔white is always SMOOTH in both directions: a
  dissolved window (`inF`/`outF` ~20–26 frames), never a hard swap of the stage. (Caption ink may
  still swap in one frame at the window's 50% point — it must never half-blend.) Scene components
  take `stage?: number` and derive every ink from it, so one scene can sit on either stage.

- **★ SCORE THE SFX UNPROMPTED (user, 2026-09-06: "Always remember to add my prefered SFX
  without me telling you").** Once a video's REAL take lands and the mix is set, the standing
  SFX pack is scored in the same pass — never wait to be asked. The score follows the standing
  SFX law in the Style 3 preference file: since 2026-09-23 that is **V9's family-per-job doctrine**
  (spec §9). Each family keeps one job all film: swoosh for entrances, whooshlong for big turns,
  whooshsoft for hand-overs, airwoosh for camera travels, lowwoosh for breaks and verdicts,
  chain for mechanisms, data for computing, sub under big arrivals. Spans go through `within()`.
  Pings are rationed and quiet, coins and clicks solo, riser and glide never. It is verified the
  measured way: full-length mix probe plus the SFX bed rendered alone.
  **★★ RE-STATED 2026-09-25 (Video 27): "add the right sfx … and make sure to do that without me
  telling you from now on."** A VO file landing in a video's `public/` IS the whole instruction.
  In that same pass, unprompted:
  - run the VO pipeline;
  - wire the take;
  - put the bed under it: **the same song as the previous video** unless the user names another.
    V26 used V9's `music_user2.mp3` (the Yeat track), V27 ended on `WW3 MUSIC.MP3`, and V28 went
    back to the Yeat track ("the song from 2 videos ago"). Name the bed in `bedsrc.mjs`, and copy
    the file in from the video that owns it.
  - mix it by measured dB;
  - score the SFX.

  Never hand back a take-wired film with `HAS_SFX` off or an empty `CUES` list.

### Handback
- **★★ THE HANDBACK IS THE REAL HYPERFRAMES STUDIO, NEVER A STAND-IN (user, 2026-10-23, on 034: "you're supposed to
  launch the hyperframes studio, remember that").** Launch `npx --yes hyperframes@0.8.143 preview --background --no-open
  --port <p>` for the film and hand back a link to THAT Studio. Do not build a custom player or viewer page in its place,
  even when the request says "as an artifact". The Studio needs its own server, so a static page cannot be it. Where no
  tunnel can reach the Studio, say so plainly and ask; never substitute.
- **★★ FINALIZE THE VO SCRIPT FIRST AND SEND IT THE MOMENT IT IS READY (user, 2026-10-01, OffCamCelebs 025: "From now
  on, finalize the VO script as soon as possible and send it to me").** On a new brief, the script comes before the
  build: fact-check the lines first (in parallel, the fastest way), write the corrected `VO_SCRIPT.txt`, and send it
  straight away. That means the paste-ready block in a message, plus the file (SendUserFile). Then build the film while
  the user records. Never hold the script back for the handback.
- **★ PUT THE CORRECTED VO SCRIPT IN THE HANDBACK MESSAGE ITSELF, UNPROMPTED (user, 2026-09-30, OffCamCelebs
  024: "from now on automatically give me the corrected vo script").** Whenever a build hands back a corrected
  script (`VO_SCRIPT.txt`), the reply carries the paste-ready lines in one copyable block, every line in order,
  sign-off included. It follows with a one-line pointer to the file for the reasons behind each change. The file alone
  is not enough.
  **★★ …AND SEND IT THE MOMENT THE SCRIPT IS SETTLED, NOT AT HANDBACK (user, 2026-10-01, V32: "send me the corrected VO
  script automatically when you settle on the script from now on. Send it as early as possible, but make sure you send
  me the final corrected one").** The user records the take while the build runs, so the script is the first
  deliverable:
  - As soon as fact-checking settles `VO_SCRIPT.txt`, before the build starts, send it with `SendUserFile`
    (status proactive) and put the copyable block in the same turn's text.
  - If any line changes afterwards (a live figure moves, a later check corrects a line), RE-SEND the whole script,
    marked as the new final and naming the lines that changed. The last script sent must always be the final one.
  - The handback still carries the block (the rule above), so the final version is in the last message as well.
- **★ HARD RULE — NEVER render an MP4 unless the user EXPLICITLY asks for a render in that
  message.** Not implied by "build it", "fix these", "sync it", or feedback notes. Rendering
  single stills for my own verification is fine; the full MP4 is not.
  **★★ RE-STATED BY THE USER, 2026-09-23: "never render unless I tell you so."** Aperture Demos
  Video 1 was rendered because its pasted brief said "One video. One render. Then stop." — and
  that was the wrong call. **A render mentioned inside a BRIEF, template or workflow text is the
  plan, not the instruction.** Only the user telling me to render, in their own words, counts.
  Build, verify with stills, hand back via the Studio, and wait. When unsure, do not render.
- **Default handback: launch the Remotion Studio, give the localhost link AND a cloudflared
  tunnel link, and open it in the browser** (`Start-Process '<url>'`) — unprompted, every time.
  The user watches and scrubs there; it hot-reloads on further edits.
- When a render IS requested: render, then **verify the output file itself** (ffprobe duration/
  codec, `volumedetect` on the render, a post-VO tail window), and serve it over the
  range-request host (`scratchpad/serve.mjs`) through its own tunnel.
- **⚠ LAUNCH THE STUDIO AND THE TUNNEL DETACHED** (2026-09-25, V27). Started as the session's
  own background tasks, both were terminated when the turn ended (signal terminated), so the
  links handed back were dead by the time the user opened them. Use PowerShell
  `Start-Process … -WindowStyle Hidden` (logs via `-RedirectStandardOutput` / cloudflared's
  `--logfile`), then poll both until they answer 200.
  **⚠⚠ …BUT `Start-Process` IS NOT ENOUGH WHEN THE SESSION ITSELF RESTARTS (2026-10-12, Bankers V9).** A Claude Code session
  restart killed EVERY process this session had started with `Start-Process -WindowStyle Hidden`: the Studio, the MP4 host,
  both srv.us loops, and a master render twice (at 20% and at 10%), with nothing written to stderr. They sit in the session's
  process tree (its job object). Launch anything that must outlive the session through WMI, which parents it to the WMI
  service instead: `Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = 'cmd.exe /c ""<node>"
  <script> > "<log>" 2> "<err>""'; CurrentDirectory = <dir>; ProcessStartupInformation = (New-CimInstance -ClassName
  Win32_ProcessStartup -ClientOnly -Property @{ ShowWindow = [uint16]0 }) }`. Above all, use it for a long master render.
  **⚠ …AND RUN EVERY LONG JOB THAT WAY, NOT ONLY RENDERS (2026-10-15, V38).** Two session restarts in one evening killed a
  foreground stem render, a stills run and the Studio. Put stem renders, bed passes, stills sweeps and geometry sweeps in a
  `.cmd` launched through WMI, with each step logging to a file and ending with an `echo DONE` marker. Then wait on that
  marker with a background `until grep` loop. Even a WMI-launched Studio died once: re-check that it answers 200 before
  every handback.
- ⚠ cloudflared's QUIC edge is often unstable; `--protocol http2` plus polling until it answers
  200 is the reliable fallback. A fresh tunnel gets a new random hostname every time.
- **⚠⚠ POINT THE TUNNEL AT `http://127.0.0.1:<port>`, NEVER `http://localhost:<port>`**
  (2026-09-12, V21). Remotion's Studio binds **IPv4 only** (`0.0.0.0:<port>` in netstat), while
  cloudflared resolves `localhost` to `::1` first — so the tunnel registers fine and then serves
  **530 forever**, which looks exactly like a stale edge. Three restarts on three different edges
  were burned chasing the edge before the origin turned out to be the problem. **A 530 that
  survives an edge change is USUALLY an origin failure: check what the tunnel's `--url` actually
  resolves to before restarting again.**
  **⚠ BUT READ THE ERROR CODE IN THE 530's BODY FIRST** (2026-09-13, V21): `curl -s <url> | grep
  -o 1033`. **Error 1033 = the tunnel itself is not connected to Cloudflare** — the log shows
  `failed to dial to edge` / `connection with edge closed` — which is local network trouble on
  the path to the edge, NOT the origin (the Studio answered 200 on 127.0.0.1 throughout). Plain
  http2 and default QUIC both kept dropping; **`--protocol http2 --edge-ip-version 4` is what
  recovered it** — try that combination next. If it also fails, don't burn the session on it:
  hand back the localhost link and say the tunnel is down.
  **★ WHEN CLOUDFLARE ITSELF CAN'T HOLD A CONNECTION, USE localhost.run OVER SSH (2026-09-26,
  V28).** Every quick-tunnel variant stayed at 530/1033 for over an hour: http2 + IPv4, QUIC ("failed to
  dial to edge… no recent network activity"), and `--ha-connections 4`. Another session's
  Bankers tunnel on the same machine was dead too, and plain HTTPS took ~8 s. So it was the
  network's path to Cloudflare's edge, not the Studio. Windows' built-in OpenSSH worked first
  time, 15/15, with the 10.7 MB bundle loading, and needed no install:
  `ssh -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=<temp>\known_hosts -o ServerAliveInterval=20 -R 80:127.0.0.1:<port> nokey@localhost.run`
  Launch it detached (`Start-Process … -RedirectStandardOutput`), then grep the log for
  `https://*.lhr.life`. Keep the host key in a temp file so the user's own `~/.ssh` is never
  touched. Its URLs also change on every connect.
  ⚠ **BUT THE USER COULD NOT OPEN IT ON THEIR MAC** ("doesn't work, do it the way you used to"),
  although it answered 200 from here. The user wants the Cloudflare link: treat localhost.run as a
  last resort only, and say so up front. When Cloudflare is down, report that plainly instead.
  ⚠ **DON'T CYCLE QUICK TUNNELS** (same day, later): after ~20 quick tunnels from this machine
  in a few hours, every new one registered and was dropped within seconds. Then
  `Requesting new quick Tunnel on trycloudflare.com...` hung for minutes with no URL, while the
  network itself was fast (0.6 s to cloudflare.com). It looks like per-address throttling. Start
  ONE tunnel, poll it, and if it fails twice, stop and tell the user rather than spawning more.
  **★ FALLBACK WHEN THE CLOUDFLARE EDGE IS UNREACHABLE: PINGGY (2026-09-26, Aperture V2, opened
  on the user's Mac).**
  - ⚠ **NOT localhost.run.** Its free tier ROTATES the hostname every few minutes: three URLs in
    one short session, each old one dead ("no tunnel here"). The user's link died before they
    opened it.
  - **Pinggy keeps one URL for 60 minutes.** It refuses an empty login without a TTY, so make a
    throwaway key in the session scratchpad (`ssh-keygen -t ed25519 -N "" -f <scratch>\tunnel_ed25519`,
    never in `~/.ssh`). Then run `ssh -p 443 -T -i <key> -o IdentitiesOnly=yes -o BatchMode=yes -o
    StrictHostKeyChecking=accept-new -o ServerAliveInterval=30 -R0:127.0.0.1:<port>
    -L4332:localhost:4300 free.pinggy.io` via `Start-Process -WindowStyle Hidden`.
  - **Read the URL** from `http://127.0.0.1:4332/urls` or from stdout.
  - ⚠ **Browsers first see a pinggy "Caution" page.** Tell the user to click **Enter site**; it
    was verified to load the Studio behind it.
  - ⚠ **The hostname embeds the machine's public IP.** Say so in the handback.
  - **Re-issue when it expires**, after 60 minutes.
  - **2026-09-27, V29:** a quick tunnel "Registered tunnel connection" seven times, but its hostname
    stayed **NXDOMAIN on Cloudflare's own DNS** (`1.1.1.1/dns-query?name=<host>` → Status 3) for
    8+ minutes. A registered connection does not prove a live URL: check that the name RESOLVES.
    Pinggy answered 5/5 with the 10.7 MB bundle.
  - **★ srv.us: NO warning page and NO account (2026-09-28, V30).** The user said a Pinggy link "doesn't
    work"; its "Caution… Enter site" page is the likely reason. Cloudflare was still dropping (1/15, error
    1033/530) and serveo now needs registration. srv.us takes the same throwaway key as its identity:
    `ssh -T -i <scratch key> -o IdentitiesOnly=yes -o BatchMode=yes -o StrictHostKeyChecking=accept-new -o
    UserKnownHostsFile=<scratch>\known_hosts_srvus -o ServerAliveInterval=30 -R 1:127.0.0.1:<port> srv.us`,
    launched detached. It prints `1: https://<hash>.srv.us/` on stdout. It served the Studio 8/10 with the
    5.5 MB bundle, and its hostname is derived from the key, so it is stable across reconnects. Offer it
    FIRST when Cloudflare is down, with Pinggy as the backup.
    ⚠ **A srv.us session can print its URL and then EXIT** (2026-09-30, Bankers V2): the link answered 503.
    Launch with `-PassThru`, check the process is still alive ~10 s later, and retry once
    (`-o ExitOnForwardFailure=yes`); the retry held 8/8. Another session's srv.us ssh may be running on the
    same machine: it is not yours, so never stop it.
  - **⚠ STOP ONLY YOUR OWN TUNNEL: match on YOUR session's scratchpad PATH, never on a file name these rules
    make every session share (2026-09-29, OffCamCelebs 022).** A stop filter on `known_hosts_srvus` also
    killed another session's srv.us tunnel (Bankers, port 3402), started two minutes earlier from the same
    recipe. It was restored with that session's own key, forward and log, which gives the same URL because srv.us
    derives it from the key, and it answered again. Filter on the session id (e.g. `99a2d752`) or on your own
    log file's name, and list the matches before stopping anything.
  - **★ srv.us RESETS SESSIONS EVERY SO OFTEN, SO RUN IT IN A RECONNECT LOOP (2026-09-30, Bankers V3: "fix the shared
    link").** Twice in one evening the ssh session died ("Connection to srv.us closed by remote host", then "client_loop:
    send disconnect: Connection reset"), and the link served 503 until restarted. Because the hostname is derived from the
    key and the forward number, a reconnect brings back the SAME URL. So launch a detached PowerShell script that loops
    `ssh … -o ServerAliveInterval=15 -o ServerAliveCountMax=3 -R N:127.0.0.1:<port> srv.us`, then logs and sleeps 3 s
    before reconnecting (Bankers V3: session scratchpad `tunnel3403.ps1`). Its log showed the next drop healed on its own.
    Cloudflare was tried again the same night: DNS resolved, but the edge connection kept being "aborted by the software
    in your host machine" (530), so it was stopped after one try.
  - **A single srv.us session can carry several forwards** (`-R 1:127.0.0.1:<video> -R 2:127.0.0.1:<studio>`),
    each with its own stable hostname, so one process serves both the Studio and the rendered MP4.
  - ⚠ **PowerShell 5.1's `Start-Process -ArgumentList @(...)` does NOT quote array elements.** A
    `--logfile` under "Video editing project" was split at the first space, and cloudflared wrote its
    log to `Documents\Video`. Pass ONE string with the path in escaped quotes (`` `"$path`" ``).

### Guards and tripwires
- **★★ A CHECK WHOSE FAILURE MODE IS "PASS" MUST BE TESTED BY MAKING IT FIRE (2026-09-16, 012).**
  A render tripwire was added to block an MP4 while a known conflict stood. Its regex looked for
  `at: "…"` — but those entries were SINGLE-quoted, because their text contained escaped double
  quotes. It matched nothing, reported nothing, and **the render ran to completion**; an MP4
  nobody had asked for had to be deleted afterwards.
  ⚠ Running the guarded script and seeing it proceed proves NOTHING — that is exactly what a
  broken guard looks like. Verify by watching the guard REFUSE, then clear the condition.
  ⚠⚠ And make the guard assert its own competence: if the file declares a blocking condition and
  the parser finds none, that mismatch is itself a refusal. A guard that cannot find what it was
  built to find must fail CLOSED.

- **★ WHEN THE TAKE AND THE VERIFIED RECORD DISAGREE, THE SCREEN FOLLOWS THE VOICE — AND THE
  RENDER BLOCKS (2026-09-16, 012).** A recorded VO is expensive to change and is the spine of the
  film. A viewer hearing "68" while reading "69" is worse than either number alone: it breaks the
  film mid-sentence and looks like a production error rather than a sourcing one. So draw what
  the voice says, keep the VERIFIED figure in the data file beside it (012 added a `spoken` field
  next to `pct`), record the divergence with a severity, and let the tripwire refuse the MP4
  until it is re-recorded or explicitly accepted. **The error must live somewhere that stops the
  deliverable, precisely because it is invisible on screen.**

- **★★ LET THE NUMBER-CARRYING OBJECTS READ THE CAPTIONS (2026-09-19, OffCamCelebs 014).**
  Twice running (013, 014) the take was recorded from the brief, not the corrected script. When
  a corrected line differs from the brief's in a NUMBER that an object draws, derive that
  object from the captions — a `said(/…/)` test per line in data.ts — so the screen follows
  whichever take is wired, and a re-recorded line flips its object back to the verified
  version without touching code. Any geometry mirror must run the same test on the same
  captions. ⚠ Following the voice never means printing a false SOURCE or a known-wrong
  figure the voice merely mentions: draw the voice's number, label it truthfully, and leave
  an unverifiable spoken detail undrawn — the guard still blocks the master.
- **★ IF THE TAKE DROPS THE LINE THAT CARRIED A GUARDRAIL, THE PICTURE HAS TO CARRY IT
  (2026-09-16, 012).** The script had a sentence saying whose statistics were being shown; the
  recorded read — taken from an earlier draft — did not. Nothing warned about this: the film
  simply lost its disclaimer. **After wiring any take, re-read the guardrail list against the
  TRANSCRIPT and check each one is still said or still drawn.** 012's now rests entirely on a
  persistent sub-label and on the subject's avatar being absent from every frame of that scene.

- **★★★ A GUARD PATTERN MUST MATCH THE TAKE'S SPELLING, NOT THE BRIEF'S — AND THE SELF-PROOF
  CANNOT TELL YOU IT DOESN'T (2026-09-20, OffCamCelebs 015).** 013's rule says every pattern
  must match its own known-bad example or the guard fails closed. That is necessary and it is
  not sufficient: **the example is the BRIEF line, which is the one string guaranteed not to
  be what the recorded take says.** Three of 015's patterns were written the way the brief
  spells it ("co-founded at twenty-two", "sixty-five-year-old"); the take speaks DIGITS ("at
  22", "a 65-year-old"). Every one matched its own example, the self-proof passed, and the
  film's actual captions sailed through. **Write both spellings into every numeric pattern**
  — the VO pipeline's own note already warns that "the take speaks DIGITS where the script
  spelled numbers", and this is the same trap one level down, in the thing built to catch it.
  ⚠ And test the guard in BOTH directions: a synthetic take of the bad lines that must be
  REFUSED, and a synthetic take of the corrected lines that must PASS. The second half is what
  proves the patterns are not simply matching everything.
  ⚠⚠ `\b` INSIDE A JSON STRING IS A BACKSPACE, NOT A WORD BOUNDARY. Widening those patterns
  in the .json produced regexes ending in U+0008 that matched nothing — including their own
  examples, so the guard refused ITSELF as broken. That is the fail-closed design earning its
  keep; patterns in JSON need `\\b`, and they go in through Write/Edit, never a shell string.

- **★★★ THE GUARD'S KNOWN-BAD EXAMPLE MUST BE THE *SPOKEN* FORM, AND THE FILE MUST CARRY IT
  (2026-09-21, OffCamCelebs 016).** 013 says every pattern must match its own known-bad example;
  015 says write both spellings because the take speaks digits. Both were followed on 016 and
  one pattern was still dead on arrival: the brief line read *"His legal obligation to keep
  paying... expired."* and the pattern required a literal `\.\.\.`. **Nobody says "dot dot
  dot."** It matched its own example perfectly and could never have fired on any recording —
  the 015 failure in its purest form, produced while consciously applying the 015 rule.
  The fix is structural, not vigilance: **every fix in `script_fixes.json` now carries a
  `briefSpoken` field** — the brief's line as a microphone would render it, digits for numbers,
  no ellipses, whisper's dropped apostrophes — and the render guard refuses outright if a
  pattern matches `brief` but not `briefSpoken`, if `briefSpoken` is missing at all, or if a
  pattern also matches its own CORRECTED line. `guardtest.mjs` runs four directions: the brief
  lines must be REFUSED, the spoken lines must be REFUSED, the corrected lines must PASS with
  zero hits, and — the meta-check — **a deliberately sabotaged pattern must make the guard
  refuse ITSELF**. Only the fourth proves the first three are load-bearing.

- **★★ REMOTION RESOLVES inputProps AT `selectComposition`, NOT AT THE RENDER CALL (2026-09-26, Aperture
  V4).** A probe still rendered from a composition selected WITHOUT the probe props came back as a normal
  frame. The chart audit found no bars and refused, which is the only reason it wasn't a silent pass.
  **Select the composition with the same inputProps you render with** (mixprobe.mjs always did). Any
  audit that measures a special render mode must fail when it finds nothing.

- **★★ A 3D CUTAWAY IS ONLY AS GOOD AS ITS SOLIDS, AND A LOOP IS ONLY SEAMLESS IN PIXELS (2026-09-27,
  Aperture V5).** Four lessons from the first real-3D section view (`Aperture Demos/Video 5/src/pump/`):
  - **Stencil section caps are correct only for CLOSED, OUTWARD-facing meshes.** A lathe's seam, a sweep's
    winding and an extrusion's caps all need welding and orienting (`mesh.ts`), and `meshcheck.mjs` proves
    every piece before a frame renders. ⚠ Its first canary was itself wrong (it swapped vertices between
    two triangles instead of flipping one), so the canary failed and the check refused.
  - **Compare the loop's first and last frames pixel by pixel.** Eyeballing found nothing; `loopcheck.mjs`
    found 2 pixels. A clip plane that cuts nothing still leaves stray stencil pixels on silhouettes, and
    two "withdrawn" planes at different angles leave DIFFERENT pixels. Once the cut has withdrawn, restore
    frame 0's exact state. Snap whole turns to exactly 0: 24π leaves a 1e-15 residue.
  - **GLTFLoader SANITISES node names** ("casing.volute" arrives as "casingvolute"). Look nodes up under
    `PropertyBinding.sanitizeNodeName` as well. The swap test found this on its first run, by refusing.
  - **Remotion composition ids cannot contain "_"** (MFG_Demo_16x9 fails at selectComposition). Name the
    composition with hyphens and give the FILE the brief's name.
  - **★ A 3D film can be correct in every still and wrong in the render.** r3f's `onUpdate` fires only when
    it judges a prop changed. The section caps were oriented with `onUpdate={o => o.lookAt(…)}`; while the
    plane turned about the origin, their position prop never changed, so a render tab that had drawn earlier
    frames kept a stale orientation and the caps vanished. Fresh stills were always right, so the loop and
    determinism checks passed, and only the pop scan of a continuous render saw it. **Set per-frame
    transforms as explicit matrices, and compare a renderFrames sequence against fresh stills of the same
    frames** (Aperture V5 loopcheck.mjs; it fails on the old code).

- **★★ NEVER CREATE A delayRender IN A useState INITIALISER (2026-10-05, Align).** `useState(() => delayRender())`
  runs during RENDER, and React may discard a render without committing it: no effect runs, no cleanup runs, and
  nothing can ever release that hold. It showed as an INTERMITTENT timeout ("Align fonts", 1 still in 6), never in a
  single test. Take the hold in a `useLayoutEffect` (committed renders only), release it in that effect's cleanup as
  well as when ready, and release it from an effect, never a `requestAnimationFrame` (a render tab that takes no
  screenshots may never run one). Prove it by rendering one still 10+ times (`Align/scratchpad/fontloop.mjs`).
  ⚠ Older projects use the useState pattern; if one ever times out on a font or data hold, this is the first suspect.
- **★★ A RESTORE IN `finally` DOES NOT SURVIVE A KILL (2026-09-26, Aperture V4).** The template swap
  test copied a dummy case over `src/data.ts` and restored the real one in a `finally`. The user stopped
  the run mid-test, and a killed process runs no `finally`. The dummy stayed live, with its synthetic
  captions written over the wired take, and the next chart audit "passed" on the dummy's numbers. The
  real file came back only by replaying the session transcript. **Any tool that swaps a real file for a
  test one must stash the original ON DISK first, and restore from that stash on its next start.** The
  render must refuse while a stash exists, or while the live file equals a test fixture. Aperture V4's
  `templatetest.mjs` and `render.mjs` do both.
  ⚠ **…and never run such a test alongside anything that reads the swapped file** (2026-10-07, OffCamCelebs 027): a
  `guardtest.mjs` run in parallel with a background tsc + probe made tsc read the synthetic `cues.ts` ("hook" is not a
  SceneId). A probe that bundles during the swap would measure a synthetic film and could report CLEAN. Run guard tests
  alone, then re-run whatever overlapped them.

- **★★ TRACKING SOFT LIGHT: PHASE CORRELATION IS BLIND TO IT, AND A DISSOLVE PASSES FOR MOTION (2026-10-07, V34
  `scratchpad/worldcheck.py`, the check for Style 3's E7 "the viewpoint travels").** Measuring whether the BACKGROUND moves
  in a hand-over took three versions, and each failure was caught by a canary, not by a result:
  - **A synthetic canary passed a tracker that could not see real light.** Phase correlation whitens the image, and a soft
    light IS its smooth shape, so a real light band shifted 8 px a frame read 0.06 px. Only a second canary, a REAL band
    shifted a known path, exposed it. Track soft light by normalized cross-correlation of its brightness profiles.
  - **A cross-fade between two lights in different places glides the light's mass**, which reads as steady travel (191 px
    on a pan where nothing moved). Count only coherent runs (≥ 5 frames one way), and only ALONG THE MOVE'S OWN DIRECTION.
  - **Read the background where nothing built can be** (above the caption slot). Below it, a dive swelled the content into
    the band and read as the background swelling.
  Give every measuring tool a canary built from REAL frames, as well as a synthetic one.
- **★★ A SABOTAGE THAT LEAVES THE PATTERN WORKING PROVES NOTHING (2026-09-26, Aperture V3).** The
  sabotage direction appended "zzz" to a pattern — and the pattern was an alternation (`a|b|c`), so
  only branch c broke, the other branches still matched, and the guard did NOT refuse itself. The
  meta-check failed honestly on its first run, which is the only reason it was caught. **Break the
  WHOLE pattern: `(?:${pattern})zzz`.**

- **★★ A CANARY MUST GO SILENT FOR THE REASON IT WAS WRITTEN FOR (2026-10-05, Align sweep).** The canary "a crossing
  under a wipe is silent" passed on its first run, but its text sat wholly INSIDE the box it was meant to cross. The
  judge read that as "printed on" and never reached the wipe logic. Only its twin exposed this: the same layout with the
  wipe BELOW was supposed to fire, and didn't. **Give every silent canary a twin that differs in exactly the one
  property under test, and must fire.** Also from that sweep: canvas `measureText` bounds, taken at the text's own size,
  round out to whole pixels. That produced a 2-px ink error and a false safe-zone breach. Measure at 1000 px and scale
  down, and calibrate the ink boxes against PAINTED PIXELS before trusting any clearance number
  (`Align/scratchpad/sweep.mjs`).
  **★ AN EXIT THAT OUTLIVES ITS SCENE'S MOUNT IS A POP, and no intersection check can see it (same sweep).** Align's
  shift beat unmounted at the split (f280) while its items' exit ran on to f288, so five tags and a headline vanished
  at 60–90% opacity. The sweep had passed it, because a vanished element has nothing to intersect. Only the full-size
  motion scan caught it. **Judge PRESENCE frame to frame:** opacity × own clip × size against its largest. Flag a
  one-frame change of ≥ 0.6 while the element is on screen and not under a wipe. Allow only listed handovers whose
  twin is verified in place.
  **★ …AND A STAMP MUST DESCRIBE THE SOURCE THAT WAS JUDGED (2026-10-07, Align V02).** The sweep hashed `src/` when it
  FINISHED and wrote that hash into the render stamp, so an edit made while it ran would have been stamped as swept. Hash
  before bundling, and refuse to stamp if the source changed during the run (`Align/videos/02-…/scratchpad/sweep.mjs`).
  **★ …AND "NOT AT ANY OPACITY" NEEDS ITS OWN CHECK (2026-10-07, Align V02: "no separate visuals should intersect, even
  if one is fading out and the other is fading in").** Every older check skipped anything under 10% opacity, judged a
  field of figures as one pattern and a disc by its square box, so crossfades over shared ground passed. APART judges
  every pair of different visuals at any opacity above 1/510: each figure on its own box, discs as circles, lines as
  strokes.
  **★ …AND A FADE KEYED TO A NARROW SLICE OF AN EASED PROGRESS IS A POP (2026-10-06, Align V01's fluid pass).** A bead's
  opacity ran over p 0.12–0.3 of a 16-frame in-out, and the in-out's early peak crossed that slice in one frame: 0 → 0.68.
  An exit faded over `1 − ramp(io, 0.6, 1)` of an IN curve did the same at its end. Key a fade to FRAMES, or check that
  its slice spans ≥ 3 frames of the curve it rides.

- **★★★ WHISPER WRITES "3 BILLION DOLLARS", NEVER "$3 BILLION" — AND A TAKE DROPS WORDS
  (2026-09-23, OffCamCelebs 018).** Both of 016's rules were followed and two patterns were
  still dead against the real take. `briefSpoken` said "about $3 billion of shareholder value";
  whisper wrote "About 3 billion dollars of shareholder value" and a `\$3` pattern missed it —
  the `$` is the WRITTEN form in disguise. And the take said "The 15 million. Received. And
  gone." without the brief's "real", so `real,? received` could never fire. Worse, data.ts
  kept its OWN copy of the $3B regex to decide what the screen draws: the strip would have
  printed ≈$2.1B under a voice saying 3. Now: `scratchpad/spoken.mjs` rewrites every "$N unit"
  as "N unit dollars" and the render guard refuses any pattern that misses that form too
  (guardtest's fifth direction feeds a whole whisper-form take); every screen switch that
  mirrors a blocked line reads the guard's own pattern out of script_fixes.json — ONE copy.
  ⚠ **After wiring any take, run each pattern against the TRANSCRIPT's actual caption for
  that line, not just its examples** — that is how both were found.

- **★★ …AND WHISPER SPLITS COMPOUNDS (2026-09-25, Video 27).** The pattern "every war in the
  dataset" matched its own spoken example and missed the recording, which whisper wrote as "data
  set". It was the only one of 16 armed lines that stayed silent on arrival. Only the post-wiring
  run against the real transcript found it. Patterns now allow the split (`data ?set`), and
  guardtest's whisper form applies known compound splits (dataset, database) alongside
  "$N → N dollars".
  **★ …AND "JPMORGAN" ARRIVES AS THREE TOKENS: "J | .P. | Morgan" (2026-09-26, Bankers Video 1).**
  The high-severity pattern `j\.? ?p\.? ?morgan` could not match "j .p. morgan" (a space BEFORE the
  dot). The captions generator's merge happened to rescue it, so the guard never depended on the pattern
  alone. The ".P." also ends a sentence, splitting every JPMorgan line in two. Patterns now use
  `j[ .]*p[ .]*morgan`, and guardtest's whisper form writes JPMorgan as "J .P. Morgan". The take also
  spelled money in words ("three hundred and twenty billion dollars"), so every cue that looked for a
  digit had to accept the merged phrase.

- **★★★ A MIRROR MUST RE-READ ITS COPIES ON EVERY RUN — CHECKING THEM ONCE IS HOW 010 HAPPENED
  (2026-09-21, OffCamCelebs 016).** The 010 rule says "after cloning, diff every constant the
  audit mirrors against its source before trusting a single run." That is necessary and it is a
  one-time act, so it decays the moment the build continues. On 016 the mirror was diffed
  correctly at clone time and went stale **within the same session**: the avatar moved from
  H 1.30 to 1.95, the crowd 0.46 → 0.62 and the steps 0.54 → 0.66 in the object file, and the
  audit kept modelling the old numbers — reporting CLEAN, which is this class's whole danger.
  So the diff is now CODE, not a habit: `geom_scenes.mjs` re-reads every mirrored proportion
  out of the object file and every layout block out of the scene file on each run, and refuses
  if any differs, if a constant it models no longer exists, or if it matches an export but finds
  none of that export's keys (a parser that finds nothing would otherwise report a perfect
  match). Keys the mirror derives from inline arithmetic are LISTED as unchecked rather than
  silently assumed. ⚠ Verified the only way that counts: a constant was changed, the audit was
  watched REFUSING, and the change was reverted.
  ⚠⚠ **AND KNOW WHAT THE AUTOMATIC CHECK DOES NOT COVER (2026-09-22, 016).** It compares
  EXPORTED constants. A ratio written inline inside a component — `const h = w * 0.62` for the
  plane's box, `width: w * 1.06` for the hourglass's caps — is invisible to it, and two of
  those moved during an object redraw while the check reported a perfect match. **When you
  redraw an object, grep the mirror for every number that object contributes, not just the
  ones the parser reads.** The honest framing: the check makes the exported half impossible
  to get wrong and leaves the inline half exactly as manual as it was.

- **★★ A MIRROR THAT SHARES THE RENDER'S CODE SHARES ITS BUGS (2026-09-22, OffCamCelebs 017).**
  A text-wrapping helper was inserted into BOTH scenes.tsx and the geometry mirror through one
  shell heredoc, which ate a backslash (`/\s+/` → `/s+/`). The quote split on the letter "s",
  printed as one line wrapped over its source strip — and the mirror, modelling the same wrong
  strings, reported CLEAN. Only the stills sweep caught it. A mirror is independent only where
  its code is independent: when a helper is copied into the audit, the audit must also assert
  the helper against a known input AND check the render's copy verbatim (017's now refuses if
  either is wrong — verified by breaking it). And the heredoc rule above applies to helper code
  pasted into edit scripts too.

- **★★★ ARM THE GUARD BEFORE THE TAKE (2026-09-23, Video 26).** Four takes running (013, 014,
  V25, V26) were recorded from the BRIEF, not the corrected VO_SCRIPT.txt. So when a brief's lines
  are corrected at build time, write every corrected line into `divergences.json` THEN. Give each
  its spoken form (digits), its whisper form ("240 dollars") and its corrected line. Point the
  number-carrying objects' screen switches at those same patterns.
  - On V26 the take landed read from the brief, and the guard caught all nine lines on arrival;
    the objects hid every figure the voice contradicted without a line of new code.
  - A corrected take activates nothing, so arming early costs nothing.
  - `guardtest.mjs` proves it before any take exists: the synthetic corrected captions pass, the
    brief's lines are refused, and the whisper forms are refused.

- **★★★ A RENDER SCRIPT'S ARGUMENTS FAIL CLOSED — NEVER ASSUME A FLAG EXISTS (2026-10-13, Bankers Video 10).** `render.mjs --check`
  was run to test the guards; this account's script HAD no `--check` (OffCamCelebs' do). It read "--check" as the concurrency (NaN),
  passed the guard on a clear take, and STARTED a master render nobody asked for. It died at 0% only because NaN broke the render pool.
  Every render script now refuses an unknown flag and a concurrency that is not a whole number 1–8, and `--check` exits before
  bundling (proven with the bundler and renderer stubbed out, so nothing could render). **Before running any render script with a
  flag, read the script — and run a new refusal against stubs, never against the real renderer.**
- **★★ A GUARD PROVES ITSELF ON EVERY RUN (2026-09-18, OffCamCelebs 013).** Testing a
  tripwire once, by hand, proves it worked THAT day. A pattern-based guard must also carry the
  known-bad example each pattern exists to catch, and refuse to run if any pattern fails to
  match its own example — a pattern that cannot fire on the line it was written for is a
  broken guard, and that is a refusal, not a pass. 013's render guard does this for every
  script fix, reads its list with JSON.parse (never a regex over source code), and has a
  `--check` flag that runs every guard and exits before bundling, so it can be made to fire
  without producing an MP4.

- **★ A CORRECTED VO_SCRIPT CARRIES THE WHOLE READ, SIGN-OFF INCLUDED (2026-09-29, V30).** V30's corrected
  script ended at "Let me know below.": it had dropped the channel's "Follow for more market breakdowns.", which
  the brief carried and the brand close is built around. The user recorded exactly what was handed back. The
  line was spliced from the previous take (same ElevenLabs voice and settings, level-matched on a shared
  phrase: +0.2 dB). The splice is recorded in `vo_hold.json`. Before handing back a script, diff its lines
  against the brief's: every line the brief has must be there, corrected, or listed as cut with a reason.
- **★ VERIFY THE SCRIPT BEFORE THE TAKE IS RECORDED, AND HAND BACK THE CORRECTED SCRIPT
  (2026-09-18, OffCamCelebs 013).** A line that fails verification costs one edit before the
  voice is recorded and a re-record after. When a brief arrives without its VO, check every
  line against primary source at build time and return a paste-ready `VO_SCRIPT.txt` with
  the corrections applied and each change explained underneath.

- **★ DEAD STRETCHES CAN BE MEASURED TOO (2026-09-20, Video 29).**
  `Style 1 videos/Video 29/scratchpad/gaps.mjs` parses every animation window out of `scenes.tsx`, resolves it
  against the captions and reports the worst hole per scene against a 3.5s limit. Two things make
  it honest, and both were learned by getting them wrong first:
  · **Measure from a reveal's END, not from its cue.** A reveal that lands ON its word is still
    moving for ~30 frames afterwards; cue-to-cue overstated every gap and sent me fixing scenes
    that were fine.
  · **A regex cannot split the arguments** — every anchor is itself a call (`fade(f, cue("x") - 4,
    …)`), and a comma-splitting pattern truncates them, drops the window and reports a scene as
    quieter than it is. Use a balanced-paren scanner, and **refuse the run if any animation call
    fails to parse**: an uncounted window either invents a hole or hides one.
  It proves itself with two canaries (a sparse block must be flagged, a dense one must not) and
  refuses if a scene yields no windows at all.

- **★★ A GUARD ONLY COVERS THE SHAPE OF THE DEFECT YOU HAD IN MIND (2026-09-21, Video 30).**
  `popcheck.mjs` exists to enforce "nothing appears or disappears without a transition". It was
  running, and clean, while sixteen values in the same kit **switched in one frame** — because it
  looked for `{x > 0.01 && <el>}` mounts and the defect was wearing a different shape:
  `x > 0.5 ? A : B`, a ternary on a ramp. One of them was the hook's headline figure swapping
  strings mid-shot, which is what the user actually noticed.
  **When a rule is broken while its own checker reports clean, extend the checker in the same
  pass** — and give the new pattern a must-flag and a must-not-flag fixture, or it is just a claim.
  (Here: `dk > 0.4 ? red : blue` must fire; `mixHex(blue, red, dk)` must not. A threshold on a
  FRAME is not flagged — that is a mount, and what it mounts carries its own ramp.)
  ⚠⚠ **AND IT HAPPENED A THIRD TIME, SO THE ANSWER IS TO STOP PATTERN-MATCHING (2026-09-22, V30).**
  The same checker, extended twice, passed `{sk > 0.26 && wd < 0.5 && <text>}` — the film's headline
  figure arriving at full strength and being cut at full strength — because `sk` *was* mentioned in
  the body (in a `y=`) and `<` comparisons were a shape nobody had thought of yet. Each version
  chased the LAST defect's silhouette. **A check that models the property directly outlives the
  shapes:** v3 evaluates the block's opacity expression with the gate variable pinned at its own
  threshold and refuses anything still visible there — so a `<` gate, a `>` gate, a gate on a
  variable the author invented this morning and a shape nobody has written yet are all the same
  question. ⚠ Where the numeric model cannot reach, it LISTS the gate as unchecked rather than
  counting it as a pass, and an unparsable gate is a refusal — the coverage is stated, not implied.
  ⚠⚠ Strip comments before scanning source. v2 flagged the prose quoting the defect it was written
  to catch; the same blindness lets a commented-out block quieten a checker for good.

- **★★ BEFORE DECIDING HOW SOMETHING LEAVES, CHECK WHETHER IT NEEDS TO LEAVE (2026-09-22, V30).**
  A hard cut was replaced with a careful 15-frame dissolve, and it was still wrong: the element
  exits four frames before its scene does, so it was being removed from a shot that was about to
  end anyway — a vanish however well eased. It now stays, dimmed, and the scene's own transition
  carries it away with everything else. **An exit inside a closing shot is almost always a defect
  pretending to be a decision; the scene boundary is the honest place for it.**

- **★ A COLOUR RULE MUST PASS ITS OWN EXAMPLES (2026-09-20, Video 29).** The caption lexicon
  matched prefixes, so the sign-off's "breakdowns." was painted red off `break` — the channel's
  word for explainers, coloured as a failure, in the last frame of the film. Whole words only, and
  **both generators now carry a table of words with the colour each must get, checked on every
  run** — including the one that was wrong. A lexicon that cannot classify its own known cases
  refuses to write the file.

- **★ THE INTERSECTION SWEEP CAN BE MEASURED, NOT EYEBALLED (2026-09-19, Video 28).**
  `Style 1 videos/Video 28/scratchpad/geom_sweep.mjs` renders the film with `inputProps {probe: true}`. A
  `Probe` component measures every visible text run and shape outline after all transforms, and
  reports text×text, outline×text, caption crossings, clipping and edge-crowding as frame spans.
  It proves itself on every run: calibration against the browser's own boxes, plus two canaries
  (a line through a text must fire; the same line behind an opaque disc must not). A failure
  refuses the run. Three traps it hit, which any DOM probe will hit:
  · **Chrome's Range rects for SVG TEXT go stale after a render tab's first frame** (55px off,
    deterministic at concurrency 1; the screenshot and `el.getBoundingClientRect()` agreed).
    Measure SVG text by its element box, and keep Range rects for HTML text only.
  · Measure after `delayRender` + two animation frames, never synchronously.
  · Occlusion follows painter's order and the disc's opacity RELATIVE to the shared ancestor: a
    fading scene fades its whole group, so the disc still hides what is under it.
  It does not see shape-on-shape overlaps (a tag inside a lid's corner). The per-beat stills
  pass still has to cover those.
  **★ PORTED TO STYLE 3 (2026-09-25, `Style 3 videos/Video 27/src/war/Probe.tsx`)** — clone it
  from there, not from `Style 1 videos/Video 28/`. Three more traps, each caught by the self-checks, not by luck:
  · **`getScreenCTM` is 2-D.** Under a CSS 3-D transform (Style 3's `Turn`: rotateY + perspective)
    SVG outline points drifted up to 10 px, and the calibration refused the run. Outline points are
    now tiny MARKER elements in the shape's own coordinate space. The browser projects them and
    their boxes are read, then they are removed before the frame is released. The same goes for
    divs: four corner markers give the true quad, because a tilted 3 px rule's axis-aligned box is
    22 px tall and faked a collision. Offset the markers by the border widths: an absolute child
    sits on the PADDING edge (3.5 px off, caught by the second self-check).
  · **Ink boxes come from the font's own metrics** (canvas `measureText`, actual vs font bounding
    box, per string), not a per-font trim — V28's trim was Poppins-only.
  · **Style 3 paints solids with gradients**, which a background-COLOR test cannot see. Linear
    gradients count as shapes; radial-only divs are glows; clip-path divs are skipped (box ≠ shape).
  The user still found "minor intersections" in V27's first scene with the sweep at 0. They were
  shape-on-shape seams in a crossfade, which this tool does not measure: the stills and the pop
  scan remain part of the sweep, not optional extras.

- **★★ THE SWEEP REPORTS VIOLATIONS, NOT ONLY INTERSECTIONS (2026-09-28, V30: "the SEPT 2026 text is
  too close to the line on the left side of the screen. Do an intersection sweep and violations not only
  intersections").** A row label began at the exact x of a zero-edge rule. It touched the line and never
  crossed it, so the crossing test called the frame clean. The Style 3 probe (`Video 30/src/gap/Probe.tsx`,
  checks 4–5) now also measures CLEARANCE:
  - text to any shape it is not printed on: ≥ 14 px, measured to the exact outline (segment-to-box);
  - two texts that are not one designed block (nearest positioned ancestor): ≥ 10 px;
  - anything near the caption band: ≥ 12 px.
  Near-misses fold into spans by their SMALLEST gap. Two new canaries prove it (C, 7 px from a rule, must
  fire; D, 34 px away, must not).
  ⚠ **A touch is gap 0 with no point inside the ink.** The first version reported `g > 0 && g < lim`
  and required points strictly inside for a crossing, so a touch fell through BOTH checks: exactly the
  defect it was written for. It was caught only because the reported case was run first. **Run a new
  check on the case that prompted it before trusting its clean result.**
  ★ **…AND THE INNER MARGIN (same day, "the end of the NEAR A HIGH line on the phone almost reaches its
  edge").** Every check above exempts a text's OWN container (the surface it is printed on), so a line
  running to within 4.5 px of its phone screen's edge was invisible. Check 6 (`text-crowds-surface`)
  measures a text's ink to the edges of every painted ancestor it sits in (≥ 14 px). Canaries E (3 px
  from its plate's edge, must fire) and F (centred, must not) are HTML, since only HTML containers hold
  text. On its first full run it also found the gas sign's REGULAR strip at 10–13 px.
  ★ **…AND AN OCCLUDER IS THE SHAPE IT REALLY IS, AND WHAT IT HIDES IS A BREAK (2026-09-30, V31).** The probe modelled every
  occluder as a disc, so a wide opaque price tag in front of a 6,000 px stack hid only a circle in its middle. It also
  JOINED the points left on either side of a hidden run, so the stack's edge was bridged straight through the tag's
  figure. Both made a correct frame look like a collision.
  - `data-probe-occluder-rect` declares a rectangular occluder (inset 6 px).
  - Hidden runs are breaks in the outline (`brk`), never bridged.
  - Div edges are sampled every ≤ 8 px (not 16 steps: that was a point every 375 px on the stack).
  - Canary R (a line longer than its plate, through a word) must stay silent, and must be PRESENT.
  - Proven both ways: without the rect declaration it refuses, and without the breaks it refuses.
  - ⚠ Judge a canary against its OWN shapes only: the hook's stack runs up through the canary's spot, and on the
    first run that real crossing made the canary "leak" on 74 frames.
- **★★ AN ALLOWED-OVERLAP PAIR EXCUSES EVERY FRAME, NOT JUST THE ONE YOU MEANT (2026-09-25,
  OffCamCelebs 020).** The geometry mirror listed ["case file", "shelf"] as a soft pair because
  the file RESTS on the board at the end. The file's entrance rose from below, in front of the
  shelf, and cut through the board and its COURT OF APPEALS plate for ~1 s. The audit said CLEAN,
  because the pair excused that too. Only a frame pulled from the rendered MP4 showed it.
  **A contact is not an overlap:** 020's audit now has a `touch` relation, excused only while the
  overlap is ≤ 1.5 px deep. The camera's tilt makes a flat contact project as a sub-pixel box
  overlap, while a crossing is tens of pixels deep. Prove it by putting the old motion back and
  watching the audit fire. When writing any soft pair, ask what ELSE it excuses in transit.

- **★★★ A FILM THE CHECKS PASSED, THE USER CALLED "BUGGY… GLITCH AROUND A LOT… SLOPPY" (2026-10-05, Style 3 V33).**
  Clean geometry sweep, clean pop scan at quarter size, clean contact sheets — and still sloppy, because every check
  looked at frames, not at MOTION. What the full-size sweep found, by class:
  - **Damped vibrations used as "settles"** (`sin(t/1.1…2.4)` bounces on ingots, a gate, a pin, a lid, a rig, a balance,
    a stamp) read as shaking at 30 fps. The house rule is ease-out to rest, NO overshoot. Grep `Math.sin((f -` before handback.
  - **A CSS filter (drop-shadow / glow / brightness) on anything that moves** — ~30 of them. Paint shadows (box-shadow)
    and glows (a larger, faint copy of the shape); flat type has no glow at all.
  - **Every cut had a 6–10 frame black hiccup**: the outgoing whip exit, then an incoming S-curve fade that starts at
    nothing. The house entrance is ease-OUT from the first frame (opaque by ~10 f).
  - **In-scene hand-overs as whips/pushes** (banned) and dissolve dips; the fix is the house exit-then-rise.
  - **Things that vanish or dim in place, loops that wrap (`% 1`) and pop back at full alpha, numbers that swap in one
    frame, a traveller that U-turns, camera keys under 30 f or over 50 f, slow moves made with top/left inside a Turn
    (whole-pixel steps: use a genuinely 3-D transform, V33 `s3d()`), and boxes resized every frame (a reflow).**
  - **How it was found:** render EVERY frame at FULL size single-tab (`frames.mjs … 1 out/full`, CONC=1), then
    `jitter33.py` (tile phase-correlation vs a smooth path, canaries A–D) and `strip.py` / `bstrips.py` (every-frame and
    every-other-frame strips of each boundary). Brief a subagent to audit the source against the style spec in parallel —
    it found classes no tool measures. Do all of this BEFORE the user sees the film, every time.
  - ⚠ **READ THE SWEEP'S OWN TOTAL, NEVER A FILTERED GREP OF ITS LINES (2026-10-06).** The report pads frame numbers
    (`" 234-294"`), so a `grep "^[0-9]+-"` dropped every span below frame 1000. The hook and the flip-board, 900+ spans,
    went unseen for a whole round, including a real defect: a sign drawn BEHIND the gate it hangs on. Check the
    `N span(s)` header first, and count by scene with `^ *[0-9]+-`.
  - **Don't rely on depth-sorting for what hangs ON another surface.** V33's CLOSED sign hung on a shut gate inside a
    preserve-3d `Turn`. Fresh stills drew it in front of the pickets. The SEQUENTIAL render (`renderFrames`, one tab)
    drew the pickets across its top half from the frame the leaves came to rest. Pushing the sign 24 px forward did not
    fix it, and neither did splitting the scene into two Turns. Only a `flat` Turn fixed it: its children paint in DOM
    order, and a child that needs its own 3-D (a swinging leaf) carries `perspective()` in its transform.
    - **Compare the sequential render with fresh stills of the same frames:** `Video 33/scratchpad/seqcheck33.mjs` +
      `seqcmp33.py` (48-px tiles, canaries). No still, probe or still-strip can see this class.
    - **★ The same class showed up in EVERY frame on the new paper map (2026-10-06).** Its labels and push pin sat in the
      Turn's 3-D context beside the tilted sheet. Each one's 0.15° anti-snap tilt cut it through the sheet's plane, so
      COWLEY PARK lost its lower half and the pin lost its head, in stills as well.
    - **V33's `Turn` is now FLAT BY DEFAULT.** It still yaws in perspective, but its children paint in DOM order.
      Anything that needs real 3-D carries its own `perspective()` (`s3d`, `tiltCss`, the gate leaves, the study
      cover), so nothing was lost. Port this to any clone of the kit, and look at every overlay drawn over a tilted
      plane 1:1.
  - ★★ **The same check found a KIT bug that every Style 3 film carries: the hero accent word as a SOLID BOX.**
    - `text.tsx` put the arrival's blur `filter` and `background-clip: text` on ONE span.
    - In the sequential render at FULL size, Chrome dropped the clip for the whole 13-frame arrival, so "electric." came
      out as a solid platinum rectangle. Fresh stills drew it right. The pre-fix full3 render had it too, so it was not a
      side effect of this pass.
    - Fix: the gradient goes on an INNER span (V33 `text.tsx`).
    - ⚠ The kit carries the old pattern, so the accent-tone heroes of earlier Style 3 MP4s may show the same box.
  - ⚠ **`renderFrames` pads file names to the RANGE's width.** A range under frame 1000 writes `element-228.jpeg`, while a
    full-film run writes `element-0228.jpeg`. Copying a re-rendered range into the full sequence therefore replaced
    NOTHING, and every check kept reading the pre-fix frames. Copy through `putframes.py`, which normalises the names.
  - **The V33 probe models five things the earlier probes reported falsely**, each proven by a canary twin that must fire.
    Clone `Video 33/src/cu/Probe.tsx` + `scratchpad/geom_sweep.mjs`:
    - **overflow clips:** an `overflow:hidden` window bounds what of a text or a shape is visible, as in the browser
      (canaries K/L);
    - **text behind a declared plate:** a text painted before a plate loses what the plate covers, and the edge it slides
      behind is a cut, not a near-miss (canaries M/N);
    - **`data-probe-turning`:** pairs printed on one surface while it turns in 3-D;
    - **`data-probe-object`:** pairs inside one object built to overlap, such as a split-flap cell or an odometer;
    - **`data-probe-leaving`:** a shot sliding off inside its beat (edge hits only).
    The last three are declared and LISTED in the report, never silent.
    - ⚠ **The probe models `overflow: hidden`, NOT `clip-path`** (2026-10-06). A book sinking into a box behind a clip-path
      inset was reported crossing a tag 300 px below the box, which the screen never shows. Cut a thing off with an overflow
      window when the probe has to see the cut.
- **★★★ SVG TEXT FILLED WITH A GRADIENT OR PATTERN GOES STALE IN THE RENDER; COMPARE THE MP4 WITH FRESH STILLS BEFORE
  HANDBACK (2026-10-08, OffCamCelebs 028: "the text in the first two scenes is messed up in the render").**
  - **What happened:** the hook's gold figures (`<text fill="url(#mGold)">`, an extruded face over solid depth copies) kept
    frame 0's camera transform for the whole shot. They were drawn ~25 px off and larger than their own depth layers, as a
    doubled ghost.
  - **Why nothing caught it:** the probe was CLEAN, the per-beat stills, the close-ups and the stills sweep were right, and
    so was every fresh still. Only a render tab that had drawn earlier frames was wrong.
  - **The fix:** never fill text with `url(…)`. Make the words a `clipPath` and paint a rect through it
    (`028-kim/src/r45/mat.tsx` `Extruded`).
  - **The check:** `028-kim/scratchpad/freshstills.mjs` + `seqcmp028.py` set fresh stills against the same frames of the
    MP4 (or a single-tab `renderFrames` run) in 48-px tiles. It has canaries, and an A/B with the old fill fires on 8 of 8
    frames.
  - **Run it on every rendered MP4 before handing it back.**
  - ⚠ **Grab the MP4's frame by NUMBER (`-vf select=eq(n\,F)`), never by `-ss` time (2026-10-15, V38).** A time seek landed
    one frame off, so 12 of 20 moving frames "differed" from their fresh stills. Grabbed by number, all 20 matched.
    `Style 3 videos/Video 38/scratchpad/session-carry/mp4cmp.py` does it right.
- **★★★ A PLACE'S CAMERA MUST HOLD ITS OPENING FRAMING BEFORE THE HAND-OVER SHOWS IT (2026-10-08, Aperture motion Video 1:
  "there are some very weird visual glitches").**
  - **The bug:** the Style 3 kit writes a construction's first Cam key as `{ at: at - 3, …, dur: 1 }`, but an E7 hand-over
    shows the place 16–20 frames before `at`. `camAt` returns an UN-framed camera before its first key, so the arriving
    place travels in at the wrong framing and then SNAPS to its opening framing in one frame. Emma's counter jumped
    ~120 px at f170.
  - **Fix:** open with `{ at: -9999, …, dur: 1 }`, so the opening framing holds from the very first frame the place is drawn.
  - V35's components carry the same `at - 3` pattern. Check any clone.
  - **How it was found, late:** the full-size jitter scan flagged a POP cluster at the hand-over in BOTH cuts, and I
    dismissed it the first time as "a fast truck". **A pop cluster inside a hand-over is never waved through as speed:
    crop the frames either side of it and look.**
- **★★ TWO KIT TRAPS FROM A CAMERA THAT HOLDS ONE THING STILL (2026-10-09, Aperture motion Video 1).**
  - **A `Turn` yaws about the FRAME's centre.** Jake's counter sat ~1,150 px from it, so the house's slow yaw swung the
    counter about ±50 px while the camera was meant to hold it centred. The fix is to pivot the Turn on the held object:
    `kit.tsx` `ox`. Measure the held object's screen x on full-size frames.
  - **A place that grows out of a point is drawn tiny for a few frames, and every inner margin fails in screen px.** That
    is a scale, not a layout fault. The Shot declares `data-probe-handscale` while a move shrinks it. The probe judges inner
    margins at gap ÷ scale. Canaries V (crowded, must fire) and W (roomy at full size, must not) prove it on every frame,
    and a sabotaged run (no division) refused.
- **★★ A CLEAN PROBE AND CLEAN PER-BEAT STILLS CAN BOTH MISS WHAT THE USER SEES (2026-09-28, OffCamCelebs 022).**
  The user found "a weird block at 4 seconds" and "an animation at 20 seconds that doesn't make sense" in a film the
  geometry probe called CLEAN on every frame and the 24-beat stills sweep had passed. Both were MOTION defects living
  BETWEEN the 60%-of-beat stills: an incoming place loitering behind a smaller outgoing one mid-transition, and a zoom
  into unlabelled solids after its beat's still. A continuous sweep (every 3–4 frames, the whole film, in contact
  sheets) then found eight more of the same class: a white flash, a double-exposed tear, a one-frame string swap,
  actions landing inside the next transition's blur, blank arrivals.
  - **Sweep in MOTION as a standing step:** frame strips across every transition, not only stills at rest.
    Style 3's tool is `Video 30/scratchpad/transitions.py`. It tiles b−18…b+18 every 3 frames for every boundary,
    derived from `beats.json`, the heroes and the breaks: 31 on V30. It found V30's double flash into both breaks,
    which the probe and the per-beat stills had passed.
  - ⚠ **A sweep render at scale 0.2 draws gradient-clipped text (`background-clip: text`, the heroes' platinum accent
    word) as a SOLID BOX** (Chrome). It was fine at 0.3, 0.5 and 1.0, in stills and in renderFrames alike.
    Re-render at ≥ 0.3 before calling it a defect.
  - ⚠ **…and a small render can also PASS what the MP4 gets wrong (2026-10-05, Align).**
    - At 0.25×, Chrome drew a hugely zoomed SVG text mask (a fly-through numeral) differently from full size. The last
      sliver of field came out 4× wider, so the motion scan passed a jump that the MP4 has.
    - **Scan motion on full-size renders, shrunk afterwards** (`Align/scratchpad/motion.py`), and run the same scan on
      the rendered MP4's decoded frames before handing it back.
    - Somewhere between ×22 and ×27 on a 594-px numeral (about 13,000–16,000 px of glyph), Chrome stops drawing an SVG text mask
      at all, and the frame comes out as solid field. A zoom-through must clear the frame well before that: choose its
      pivot so every side clears at the same scale, and cap the scale.
  - **Rule-level checks belong in the probe, with canaries.** 022's probe now also measures, per text: screen font
    px, face and loaded weight, alignment, offset from its own card, spill, and same-object text×text on INK
    (`022-cramer/src/audit/Probe.tsx` `textInfo` + `scratchpad/probe022.mjs` `r39`). Its first run found a tag
    on a font-less container and six under-floor labels that the eye had passed.
  - **Clone the probe from 022.**
- **★★★ NO CHECK SEES A SHAPE GLITCH — LOOK AT EVERY OBJECT AT FULL RESOLUTION (user, 2026-10-05, OffCamCelebs 025: "Never
  let these small mistakes go past any sweeps or checks without being detected and fixed").** The thermometer had a
  visible bug where its tube met its bulb, while the probe, the caption check, the jitter scan and the low-resolution
  sweeps all passed. They measure boxes, motion and bands, never whether parts join correctly. Before every handback, render
  each object at rest at full size, crop it 1:1, and inspect the joins, overlaps, filter edges and highlights one by one
  (025 `scratchpad/closeups.mjs`). Fix every glitch, then search every other object for the same class.
  ⚠ **…and some glitches live only in MOTION (2026-10-06, OffCamCelebs 026).** A flap's reverse, drawn as its group under
  a negative x-scale with SVG filters on it, rendered SOLID BLACK for the ten frames it was folded. The at-rest close-ups
  and the probe both passed it. Draw a mirrored face at its projected width with positive geometry, and scan every frame
  of the fluid render for near-black regions on grounds that have none.
- **★★ THREE WAYS A DOM PROBE MISMEASURES, AND ONE PAIR IT NEVER COMPARED (2026-10-05, OffCamCelebs 025).**
  - **A rotated SVG element's `getBoundingClientRect` is its rotated SQUARE**, not its outline: a turning gear measured
    1.37× its size and "left the band". Bake a turn into the points (or measure markers), never `rotate()` a tagged shape.
  - **`perspective() rotateX(0.15deg)` (the anti-snap tilt) pivots on the element's transform-origin.** On a camera layer
    with origin 0 0 it magnified the right of the frame 0.2%, so a line at x 950 read 952. Pivot the tilt on the frame
    centre: `translate(540px,960px) perspective(1200px) rotateX(0.15deg) translate(-540px,-960px)` before the camera.
  - **A jitter judge calibrated on ones reads animation ON TWOS as a zig-zag.** Judge a stepped path as drawn: no
    movement inside each held pair (tab jitter lives there), and the once-per-pair path on a smooth fit (025
    `jitter025.py`, canaries C and E).
  - **Captions were excluded from every overlap test**, so a caption that left its band (a centred card) sat under a
    landing object, and drops fell through the words, all with the probe CLEAN. Only the cut sweep saw it. Compare
    caption lines against every object, moving or not (025 `CAP×OBJ`).
- **★★ WHEN THE MIRROR WOULD BE BIG, MEASURE THE RENDER INSTEAD (2026-09-26, OffCamCelebs 021).**
  010, 016, 017 and 020 each shipped a geometry mirror that drifted from the render, or shared
  its bug, and reported CLEAN. 021's continuous camera, morphs and two sets would have needed
  the biggest mirror yet. So `021-martell/src/audit/Probe.tsx` reads each tagged element's REAL
  screen box and effective opacity every frame, and `scratchpad/probe021.mjs` judges them:
  safe zone, caption band, overlaps, cross-scene, short-lived, empty runs, density. There is no
  copy to go stale.
  - It proves itself on every run: a calibration box, an overlapping canary pair that must fire,
    a touching pair that must not, and a refusal on any visible text without a tag.
  - Its one escape hatch (`offok`: a facade the camera pushes through) never covers text, and
    every use is listed with its frames.
  - It runs through `renderFrames` at 0.1 scale: ~5 min for every 2nd frame at concurrency 4.
  Clone it from 021 for any film with a moving camera.

### The VO pipeline (run in this order, every take)
0. **Confirm the take is THIS video's script before anything else** (2026-09-28, V30): transcribe the
   raw file and read its opening lines against the video's VO_SCRIPT.txt. V30's "vo in public" was a
   fresh ElevenLabs read of the PREVIOUS video's script (Meta), new date and new length, so neither the
   file name nor the timestamp gave it away. Wire nothing until the words match; tell the user.
1. `vo_trim.py` — strip long silences at the take's **NATIVE 44.1 kHz** (never resample).
2. `fw.py` — faster-whisper word-level transcript.
3. Rewrite `captions_vo.js`'s **PLAN** for that video's scenes, then regenerate. **Captions are
   generated FROM the transcript, never from the written script** — the take always rephrases.
4. **The silence snap**: a word whose claimed span OVERLAPS a real pause moves to the pause's
   END. Test span overlap, not "does the word start inside the gap" — whisper places the word
   just before the breath and the obvious test misses it.
5. Re-audit every cue, then re-verify each scene in stills at the REAL VO frames.
   ⚠ **The waveform anchoring must never pull a beat onto the PREVIOUS word's onset** (2026-09-22,
   V31). A chunk split mid-sentence has no pause before it, so the "nearest onset" is the start of
   the word before — on V31 it did this four times, and one of them left "So why?" on screen for
   0.2s. `captions_vo.js` now refuses any onset at or before the previous word's own start and logs
   each refusal.

6. **★ WHISPER LOCATES A LINE; THE AUDIO TIMES IT (2026-09-27, Aperture V5).** Whisper squeezed "Request"
   into 20 ms at 48.14 s while the speech began at 47.90 s, so the end card's caption went up 6 frames late,
   and a hold cut placed "in the pause" by those timestamps sliced the word's first syllable. Words after a
   silence also come back early (−9 to −17 frames on every sentence after a hold). Use whisper's words only
   to FIND each line (multi-word anchors: a bare "the" matched the wrong sentence). Then measure from the
   take's per-frame RMS: cut a hold at the QUIETEST frame of the pause, and start the line on the first frame
   after it that rises above the speech level (−30 dBFS on that take). Verify on the rendered voice stem the
   same way (Aperture V5 `take.mjs`, `syncheck.mjs`: 0 frames off on all 18 lines).
   ★ **…AND WHISPER ALSO STARTS WORDS LATE, OR DROPS THEM (2026-10-01, Bankers Video 4).**
   - **Late:** after a pause, "Sales" came back zero-length at 60.40 s; the word began at 60.13 s. Eleven words were
     0.05–0.27 s late. Walk back from each word after punctuation to the end of its pause, never onto the previous word
     and never more than 0.3 s (Bankers V4 `captions_vo.mjs`, "late-start fix").
   - **★ Measure it, don't cap it (2026-10-02, OffCamCelebs 025 `scratchpad/onsets.py`):** for every word after a
     pause, the first 10-ms frame above −30 dBFS after the pause's end is its start (a canary proves the finder first).
     Fifteen words moved, two of them by 0.41–0.44 s ("Stanford", "Prosecutors"), past the 0.3-s cap above. The audio
     is the authority, with a 0.5-s ceiling. Write each cue's transcript words into cues.ts (`w`), so `wordAt()` times an
     action to the real word, not its proportional place in the sentence.
   - **Dropped:** the one-word answer "Price." was missing from the transcript, although the clip transcribed ALONE
     reads "price.". Before deciding the voice skipped a short line, transcribe that gap on its own. Then insert the word
     where the audio has it, and refuse if the gap holds no speech.
   - **★ …and never move a line's start onto or past its OWN next word (2026-10-08, Style 3 V35).** A soft first word
     ("The" before "price", which whisper gave zero length) can sit under the −30 dBFS speech level. The first block above
     it is then the second word's, and the "onset" landed after it, which broke word order. `captions_vo.js` now refuses
     that move, logs it, and keeps whisper's time.
   - **Anchor scenes on WORDS, never on "the sentence that starts with…".** The same take ran three of the script's
     sentences on after a comma. One sentence lookup found nothing (a crash). Another returned the previous clause's start,
     which would have moved a scene 1.5 s early.

7. **★ THE TAKE'S REAL TIMING CAN BREAK BEATS THE PROVISIONAL TIMING HELD (2026-09-28, OffCamCelebs 022).** Every
   transition leads its sentence by a fixed amount (16 f), so a short line spoken right before a move gets its
   action swallowed by that move. On 022 that was "It shut down." (0.6 s): the lamp died as the slide began. After
   wiring, sweep the film continuously (every 3–4 f), and let a transition WAIT for the last action of the place it
   leaves (`Math.max(lead(...), actionFrame + n)`).
   ⚠ And check the clone's VO tools before trusting them. 022's caption generator still held 021's whole PLAN and
   had no silence snap, and its bed controller measured plain means instead of speech-gated ones.
   ★★ **Compute the whole timeline IN ORDER, in one module (2026-09-30, OffCamCelebs 024 `src/audit/timeline.ts`).**
   Per-place waits broke in a CHAIN on a fast take. A place that waited for its predecessor arrived late, and its
   word-timed action then fell inside its own arrival; patching one link moved the break to the next. Compute each start
   as max(its lead, the predecessor's DONE) and each action as max(its word, its own arrival + a beat). Print the result
   against the lines (`timeline_print.mjs`, which bundles the real module) before sweeping.

8. **★ WHEN THE SCRIPT'S LINES ARE DATA, ALIGN THE TRANSCRIPT TO THEM (2026-10-06, Style 3 V33).** V33's episode config
   carries every line with its scene and hero flag, and the composition reads sentences by index per scene. Whisper had
   run four of those lines together ("…that price, and for more than 40 years…"; "Your phone, your car, every AI data
   center."). So `Video 33/scratchpad/captions_vo.js` walks the take's words onto the script's lines, word by word, and
   THROWS on any word the take changed.
   - **Display words:** the script's token wherever the take says the same word. That covers its spelling (centre,
     metres, tonnes) and the digit-or-word form: whisper wrote "four", then "4", for the same word on two passes.
   - **Times:** the take's.
   - ⚠ **A line the read RAN ON gets no waveform onset fix.** The walk-back finds no pause there and would pull the line
     onto the previous word. The fixer now skips any line with no silence before it.
   - **A score written before a visual revision is out of date:** V33's still cued a bar that "climbs and splits into
     nine" two revisions after the bar was gone. Re-score every cue to the CURRENT animation's own window when the take
     lands.
   - **★ THE SFX TIMING SWEEP, MEASURED (user, 2026-10-06: "do a SFX timing sweep").** `Video 33/scratchpad/cuedump.mjs`
     dumps the LIVE cue list from the page's console (inputProps `dumpCues`). `sfxsweep33.py` then finds, on the
     full-size rendered frames, where each cue's motion starts, or for a sub where it lands, and flags any offset over
     3 frames. It proves itself on two canaries first.
     - Its first run found a whole class. Entrance cues built with `within(P.x)` were clipped to the beat's first frame,
       and a swoosh's AUDIBLE onset sits 10 frames into its file. So every entrance swoosh was heard 10 frames after its
       rise began.
     - A cue whose visual starts at or before its beat's first frame needs a window that lets the silent lead-in sit
       earlier (V33 `span()`). That applies to every hand-over cue that straddles two beats as well.
   - **★ …AND THE SFX END SWEEP (user, 2026-10-07, V34: "the sound effect stops at the wrong time. Make it keep playing").**
     The timing sweep judges where a cue STARTS; nothing judged where it STOPS. A 3-s `chain` under a 4.6-s printing ran
     out with two names still to print, and every check passed. `Video 34/scratchpad/sfxends.mjs` (after `cuedump.mjs`)
     renders each cue's envelope from the WAVs and flags a process sound that goes quiet > 6 f before its visual ends, and a
     cut under a fade of < 5 f. Its canaries are built by the page with the real builders. The fix for a window longer than
     its file is `hold()` (V34 `SfxLayer.tsx`): crossfaded copies, never a sound left to run out. ⚠ A SLOWER TAKE stretches
     process windows past their files without touching a line of the score: run the end sweep on every take.
   - **★ …AND THE SFX COVERAGE SWEEP (user, 2026-10-09, V35: "there are lots of scenes that lack the smooth sfx, ensure that
     they are added to the right places").** The start and end sweeps judge the cues that EXIST; nothing judged motion with no
     cue at all. `Video 35/scratchpad/sfxgaps.py` reads the full-size motion score (`motion.py`'s `out/motion.csv`) against
     the live cue list (`cuedump.mjs`) and lists every run of on-screen motion that no cue's AUDIBLE span covers (canaries
     first). Its first run found silent camera pushes INTO section flashes (the flash's own low woosh sounds only from its
     peak), silent in-scene camera moves, a light sweep, a lamp and the answer slabs. ⚠ `motion.py` writes
     `out/motion.csv` next to the sequence it read, so a partial re-scan overwrites the full film's: back it up and splice.
     ★ **"The bicycle chain" is the pack's `chain`** (`bike-chain-sfx_A#_minor.wav`, 20 ticks/s). The user wants it under
     bars and columns climbing. `data` is the 10-Hz computing tick.
     ★★ **Level: match the user's reference film, not a band** (same day, after a +2 dB raise: "The audio levels need to be
     right, sfx can't be too loud"). "Lacking SFX" meant MISSING cues, never quiet ones. `Video 35/scratchpad/sfxlevels.py`
     measures the SFX stem's frame peaks against each film's speech-gated voice (median, p90, loudest clear cue per
     family) and compares Video 29, the user's own pick for its SFX. V35 had sat +8.3 dB hotter at the 10–15-dB-band trim.
     It now matches V29 within 0.1 dB at `PRESENCE` 1.0, and its loudest single cue sits 15 dB under the voice. The trim the user
     set by ear (Aug, "sfx are too loud") was 1.26. The 10–15 dB peak band that V33/V34 raised it to is superseded.
   - **★★ THE SFX SYNC MODEL (same day: "sfx need to be perfectly synced").** Every motion is code, so each cue is placed ON
     its motion's own easing curve (`Video 35/src/pp/Composition.tsx` `startOf` / `whooshOn` / `landOf`):
     - a WHOOSH's loudest frame lands on its move's fastest frame (in-out 39% of the way, rise 29%, ease-out at once, an
       accelerating dive at its end; each file's peak measured: airwoosh 21 f, whooshsoft 8, whooshlong 12, swoosh 12,
       lowwoosh 13);
     - a MECHANISM (chain, data) sounds from its first visible frame (10% of peak speed: in-out 3%, rise 4%) to its stop;
     - a LANDING (sub, ping) hits when the arrival is 90% complete (in-out 69%, ease-out 40%).
     A cue on a move's mathematical start sounded before anything moved, and whooshes peaked ~9 f before the camera was
     fastest. ⚠ The rendered-frame sweeps (`sfxsweep33.py`, and `sfxsync.py`'s local-tile version) read camera moves 4–10 f
     late on dark frames and judge a whoosh by its onset, not its peak. Use them for coverage and gross errors; the model
     sets the time.
     ⚠ `hold()`'s copies after the first are EQUAL in length. Filling each to the file's end left a 5–9-f stub that stopped
     loud. Prefer one copy of a longer file in the same family (`datamid` over a four-seam `datashort`).


9. **★ A FAST TAKE STARVES ONE-SHOT-PER-SENTENCE FILMS: RESTORE ITS OWN SENTENCE PAUSES FIRST (2026-10-06, OffCamCelebs
   026).** `vo_trim.py` keeps 0.16 s of every pause, so 026's take came to 53 s against a 60-s brief. With 1-s
   transitions, four shots had under a second at rest, and one had none. `026-garyvee/scratchpad/vo_retrim.py` re-trims
   the same raw take, keeping ~0.5 s at each cue boundary (more where a shot is short, never more than the take
   recorded). It SHIFTS the transcript rather than re-running it, so the plan's word indices hold; `retrim_check.py`
   proves the shift against a fresh pass. Then table every shot's settled window against its actions
   (`actions026.mjs`) before sweeping frames.

10. **★ ADDING A VO HOLD AFTER THE TAKE IS WIRED (2026-10-15, V38).** Add the pause's RAW gap start (silencedetect on the
   raw take at −33 dB, d = 0.45) to `vo_hold.json` `rawGapStarts`, then re-run `vo_trim.py` → `fw.py` → `captions_vo.js`.
   Then re-cut the bed: every later word moves, so a drop aligned to a word needs `BED_OFFSET` moved by the same amount.
   Finally, reset `bedenv.json` flat and run the controller passes again.
   ⚠ **`vo_trim.py` reads `vo_hold.json` as cp1252.** One curly quote in its note crashed it while `fw.py` ran on, so the
   run silently re-transcribed the OLD trim. Keep that file ASCII, and check the trimmed duration changed.

**Transcript artifacts ship as on-screen errors if unfixed** — always read the transcript before
wiring. Known classes: a proper noun misheard (Cede→"Seed"); a token whose trailing period
splits a sentence ("U.S.", "J.P."); the punctuation-merge rule eating a standalone `&`.
**Re-point every cue whose word the VO changed — the take speaks DIGITS where the script spelled
numbers, and merges sentences aggressively.**
**★ …AND WHISPER SPLITS A FIGURE INTO TWO TOKENS (2026-10-08, OffCamCelebs 028):** "$1" | ".6", "20" | "%". Join them
before anything indexes the words (`028-kim/scratchpad/mergetok.mjs`). Then test every action's word anchor against the
take's tokens before a bundle (`028-kim/scratchpad/wordcheck.mjs`, which refuses unless it parsed every anchor). On 028 three
anchors written for the provisional tokens missed: "Coty" (whisper: "Kody"), "3.2" and "4" (the take said "$3.2", "$4").

### Audio mixing
- **★ ALWAYS mix by measured dB, VO-anchored — never ear-guess a multiplier, and never carry one
  across takes or tracks.** Every asset has a different source level, and a new read is routinely
  0.5–1 dB hotter than the last.
- Measure with `ffmpeg volumedetect`: the VO is the anchor; set the bed's multiplier from the
  measured gap. **Style 3's band is 3–8 dB under the voice** (Styles 1/2 used 8–12 — do not
  import that).
- **Measure the bed's LEVEL ACROSS THE COMPOSITION'S LENGTH, not just its duration** — a track
  long enough can still carry a baked-in fade that silences the close.
- Verify the finished mix with a full-length mp3 probe (`renderMedia({codec:"mp3",
  outputLocation})` — the param is `outputLocation`, NOT `output`): no clipping, VO dominant in
  every speech window, and the post-VO tail = bed + fade only.
- **★★ THE RENDER SITS ~3 dB BELOW THE SOURCE FILE — MEASURE THE ONE YOU SHIP** (2026-09-11,
  OffCamCelebs 010). The VO is mono, the deliverable is stereo, and the mono→stereo conversion
  applies a centre pan law. Measured three renders deep on one video: source `-26.6` mean /
  `-4.7` peak → rendered with no gain at all `-28.4` / `-7.3`. So a target written against the
  WAV is not the level the video plays at, and two videos can look inconsistent on paper while
  being identical in the render (009's data.ts says `≈-23.6`; the file it shipped measures
  `-26.1`; both are right, about different things). **State the shipped level from the render.**
- **★★ THE PAN LAW HITS ONLY THE MONO STEMS — SET THE BED FROM RENDERED STEMS (2026-09-19,
  Video 28).** The line above used to say "anchor on SOURCE levels — the pan law hits voice and bed
  alike". That holds only when BOTH are mono. The VO is mono; the music beds are STEREO and pass
  through untouched. Measured with solo renders: VO `-19.8` source → `-22.8` rendered, bed `-29.8`
  → `-29.8` — so "10.0 dB under" on source levels was **7.0 dB** in the render. **Check channel
  counts (`ffprobe … stream=channels`); when they differ, render each stem alone
  (`mixprobe.mjs vo|music|sfx`) and set the separation from THOSE numbers.** SFX files are mono
  like the VO, so their relation survives. ⚠ Video 24 shipped with a stereo bed over a mono VO:
  its "6.3 dB under" is ~3.3 dB in the render.
- **★ HOLD THE SEPARATION PER WINDOW, NOT ON AVERAGE (2026-09-19, OffCamCelebs 014 — which also
  confirmed the stem rule above independently: VO −24.4 → −27.5 rendered, stereo bed −32.9 →
  −32.7).** A take's delivery and a track's arrangement both drift across a film: on 014 the
  voice softened ~3 dB after 50 s while the bed built ~2 dB, and a flat gain set for a 5.5 dB
  average left the bed within **1.6 dB** of the voice in one window. Measure voice-alone and
  bed-alone RENDERS in 10 s windows and let a slow gain envelope hold the target in every
  window (`bedenv.mjs` writes it; linear between window centres, so it never pumps). ⚠ It is a
  controller: re-render the solo bed and run it again — the residuals must come back near zero
  (014: 3.9 dB worst → 0.3 dB) before the envelope is trusted.
  ★ **MEASURE THE VOICE SPEECH-GATED** (2026-09-23, Video 25): a 10 s window with more pauses
  has a lower plain mean without the voice being any quieter, and an envelope driven by it ducks
  the bed for the gaps. Strip the silences first (`silenceremove` before `volumedetect`), and
  measure the bed plain. V25: 2.1–4.9 dB → 3.0–3.9 dB.
- **★ CONTROL THE TAIL, NOT ONLY THE WINDOWS (2026-09-30, OffCamCelebs 023).** The bed controller rightly HOLDS a last
  window that is mostly outro (017). That left the film's last 3.5 s of voice, the verdict and the call to action,
  unmeasured, and there the bed had swelled to 3.7 dB under the voice. `gatedsep.py` now measures that tail on its own
  (speech-gated), and `bedenv.mjs` controls it as one extra envelope point, which the outro then holds.
  ⚠ Control it whenever it DRIFTS, not only when the last window is held (024: the last window was 80% speech, so the
  tail went uncontrolled and sat at 4.8 dB).
  ⚠ **…but asymmetrically, when the voice ends early in its last window (2026-10-02, OffCamCelebs 025).** The tail and
  that window then share one envelope point and pull against each other: correcting the tail from 6.1 to 5.5 put the
  window back at 4.9. Control any drift TOWARD the bed (< −0.3 dB), and a drift away only past +1.0 dB. A verdict a
  little clearer than the target is the safe side.
- **★ THE BED CONTROLLER ADDS TO THE ENVELOPE IT READS BACK, SO IT ONLY WORKS ON A PROBE RENDERED WITH THAT ENVELOPE
  (2026-10-02, 025).** Run twice without re-rendering `solo_bed`, it applied a 1.9-dB correction twice (3.8). `bedenv.mjs`
  now refuses when `bedenv.ts` is newer than `out/solo_bed.mp3`. Each pass: soloprobe bed → gatedsep → bedenv.
- **★ A TAKE LONGER THAN THE BED'S MUSIC: EXTEND THE TRACK BY ITS OWN LOOP (2026-10-07, V34).** The second read ran 122 s,
  and LIKE ME's own fade-out began 109 s into the film. Beat-made tracks repeat exactly: a waveform correlation of a 4-s
  window against the same window N s earlier finds the loop (V34: 24.000 s, r 0.990, best lag 0 samples). Jump back by
  that lag under a 30-ms crossfade, write it lossless, and cut the bed from that (`Video 34/scratchpad/bedext.mjs`). Check
  the splice's largest sample step against the track's own. Measure the track's level to its end first: a fade-out inside
  the film's length is invisible in its duration.
- **★ ON A RE-TAKE, A STALE STEM MEASURES SILENTLY (2026-09-30, OffCamCelebs 024).** The voice stem's render failed once,
  which left the previous take's `solo_vo.mp3` in `out/`. The separation tool measured it and printed plausible numbers for
  a take that no longer existed. The tool must REFUSE a stem older than the levelled voice, or two stems of different
  lengths (024 `gatedsep.py`). And reset the bed envelope FLAT for a new take: the old envelope describes the old read.
- **★ A TAKE OVER THE HARD CAP IS FITTED BEFORE ANY WORD IS CUT (2026-09-30, 023):** pad silences ≥ 0.3 s (not only
  ≥ 0.45 s), time-stretch up to ~4% (atempo keeps the pitch), and shorten the end hold. 023 went from 66.3 s to a
  64.1-s film with every word kept. Say so in the handback.
- **★ AN AUDIO-ONLY FIX TO A RENDERED MASTER CAN BE REMUXED, BUT MATCH REMOTION'S AAC DELAY (2026-10-05, OffCamCelebs
  025).** When only the score changed after a long single-tab master render, re-render the audio alone and mux it onto the
  copied video stream (`025-dokwon/scratchpad/remux_audio.mjs`: it runs `render.mjs --check` first, and the video MD5
  stays identical). ⚠ Remotion's own mux leaves the AAC encoder's 2048-sample delay IN the stream (42.67 ms at 48 kHz);
  a plain ffmpeg mux compensates for it, so the same mix came out 42.67 ms EARLY, measured by cross-correlation to the
  sample. Every audio timing here (SfxLayer's one-frame AUDIO_LEAD, the caption sync) was calibrated on Remotion's output,
  so pad the remux by 2048 samples (`adelay=2048S`). Verify offset 0 against the original master, and that the audio
  differs only where the fix is.
- **★★ REMOTION ROUNDS EVERY `<Audio>` VOLUME TO STEPS OF 1/97 (2026-10-08, OffCamCelebs 028).** The renderer does this
  in `round-volume-to-avoid-stack-overflow.js` (an FFmpeg expression-depth limit). At a gain of 0.08 a step is ~1.1 dB:
  the bed controller's 0.3–0.6-dB corrections vanished or doubled, and it oscillated. **Keep any level-controlled stem's
  gain near 0.3–1.0 by baking the attenuation into the FILE** (an ffmpeg cut with `volume=-16dB`, lossless). 028 then
  converged in three passes.
  ⚠ The SFX pack's smallest gains (tick ≈ 0.014) land on the first step or two. Their rendered levels are what
  `sfxlevels` measures, so the family judgement holds, but fades on such quiet cues are stepped.
- **★ A BEAT DROP ON A WORD (2026-10-08, OffCamCelebs 028: "make the beat drop when the VO says much NOW"):** find the
  drop from the audio (`028-kim/scratchpad/dropfind.py`: the largest sustained low-band jump, with a canary). Find the
  word's onset from the take's 10-ms energy: whisper's time can be the previous word's consonant. Then cut the bed so they
  meet, verify the drop's time in the RENDERED bed stem, and start the bed controller's windows at the drop.
- **⚠ WHEN A MIX LOOKS WRONG, RENDER THE NULL CASE FIRST.** On the same video I inferred from
  two probes that Remotion CLAMPS `<Audio volume>` to 1, and baked +3 dB into a second WAV to
  work around a bug that does not exist. The probes could not tell the two apart: `×1.41` is
  +3.0 dB and the pan law is −3.0 dB, so they cancelled exactly, and the peak sat at the source
  value either way. **Two renders that differ only in WHERE the same gain is applied prove
  nothing.** One render with the gain removed entirely settles it in forty seconds.

### Facts and claims
- **★★ "NEVER" AND "RECORD" ARE CLAIMS ABOUT THE WHOLE HISTORY — CHECK IT BACK TO THE START
  (2026-09-26, Video 28).** The brief's whole premise was "the S&P 500 has never been this
  concentrated in two stocks", from a named firm, in that week's coverage. Nothing looked wrong
  with the 2000 comparison it rested on. But in 1965 AT&T was 9.1% of the index and GM 7.1%, so
  that pair held 16.2%, above today's 15.6%. The claim only held for data since ~1980. The brief
  also called 2000 "the old record" when Apple + Microsoft had set one at ~14% in 2024.
  - **Before a record or "never" line goes in the film's own voice, find the series back to the
    index's start** (S&P 500: 1957), and name the period the claim's source actually covers.
  - **Rebase to what survives every reading.** V28 now says "in sixty years", which is true
    however the 1960s are counted.
  - **A brief's "the claim holds as long as X" note is a claim too.** Check it against the real
    previous high, not the brief's comparison point.
  - **Watch for a ratio that divides two dates.** The brief's "800×" put today's ~8% over a March
    snapshot's rounded 0.01%. From one file on one date it is ~1,180×.
  - **SPY's daily holdings file** (ssga.com, `holdings-daily-us-en-spy.xlsx`) is a primary,
    dated weight vector for every S&P 500 member. V28's `scratchpad/weights.mjs` shows how to
    use it: merge dual share classes, drop placeholder lines, refuse unless exactly 500 remain.
- **★★ A DOWNLOADED SERIES IS A CLAIM TOO — AND ITS AGGREGATION IS THE PART THAT LIES
  (2026-09-20, OffCamCelebs 015).** A chart drawn from a random walk is an obvious defect
  (Style rule 31.1). The subtler one is a chart drawn from REAL data that the provider has
  bucketed wrongly: the 1-month bars for the symbol 015 plots are shifted by about half a
  month, so the November-2021 peak is filed under October. Nothing about the resulting chart
  looks wrong — the shape is right, the numbers are real, and the peak is in the wrong place.
  **Pull the DAILY series and aggregate it yourself**, and keep the script that does it beside
  the data.
  ⚠ **The cross-check comes from the prose, not from the data.** The error surfaced because a
  figure verified in words — the company's own announcement of a €54.00 open on 12 November
  2021 — contradicted the monthly bar's claim that November's high was €41.68. When a verified
  sentence and a freshly downloaded series disagree, **the series is the suspect**; the daily
  data then confirmed the sentence and convicted the bars.

- **★★ VERIFY THE BRIEF'S OWN FIGURES AT PRIMARY SOURCE — ESPECIALLY WHEN THE FIGURES ARE THE
  FINDING (2026-09-16, OffCamCelebs 012).** A brief arrives with numbers in it. Those numbers
  usually come from a third-party aggregate, and an aggregate is a SNAPSHOT with a date on it.
  012's brief supplied fourteen brokers' FCA loss rates; the table turned out to be one site's
  27-April scrape, and by build day it was wrong in six places — and it listed a company whose
  brand had been retired four days earlier. **Read the figure off the source the claim names**,
  not off anyone's summary of it.
  ⚠ The stakes scale with what the film ARGUES. 012's whole thesis was "these numbers are
  forced into public, and they are checkable" — so a viewer who opens the broker's homepage and
  sees a different number has disproved the video using the exact method the video sells. When
  the figures ARE the argument, a stale figure is not a blemish, it is a self-inflicted refutation.

- **★★ THE FIGURE CAN BE RIGHT AND THE SENTENCE AROUND IT WRONG — READ THE SOURCE'S GLOSSARY
  (2026-09-23, Video 25).** DALBAR's 9.65% vs 6.81% checked out to the decimal, and the brief built
  its whole script on it as "a fund's return vs the people inside it… same fund… nobody lost it to
  fees or a bad fund". DALBAR's own glossary says the "Average Equity Fund Investor" spans EVERY
  stock mutual fund (sector, international, emerging markets), and its return "captures… fees,
  expenses and any other costs". So the population, the comparison and the insight beat were all
  false while every number was true. **Before scripting a line around a statistic, find WHO it
  measures and WHAT it includes, in the source's own definitions section**, not in the summaries
  that quote it. Correct the sentences, keep the number, and hand back the corrected VO_SCRIPT.

- **★★ ONE DATASET PER VIDEO MEANS ONE *REGULATOR* PER DATASET TOO (2026-09-16, 012).** The same
  brand publishes DIFFERENT official numbers under different licences at the same moment:
  Plus500CY Ltd (CySEC) said 80% while Plus500UK Ltd (FCA 509909) said 76%. A film whose premise
  is "every broker **in the UK** must publish this" cannot prove it with a Cyprus disclosure —
  and the mistake is invisible, because both numbers are real, official and current. **Record the
  legal entity and its registration number beside every regulated figure**, and check that every
  row in a set comes from the same regime before averaging anything.

- **★ A SOURCE WHOSE OWN PAGES DISAGREE GETS DROPPED, NOT AVERAGED (2026-09-16, 012).**
  ActivTrades published 69%, 82% and 84% across its own properties simultaneously; eToro's single
  risk-disclosure document carried 50% in the body and 51% in the footer. There is no honest way
  to pick one, and splitting the difference invents a figure nobody published. Both were cut,
  including one that was the brief's headline "best" and one its headline "worst".
  ⚠ Note which way the exclusions bias the remainder and say so in `data.ts` — 012's dropped
  brokers were all high, so the surviving mean UNDERSTATES, which is the safe direction. A later
  pass must not "restore" them to fatten the sample.

- **★★★ A MISQUOTED QUOTATION IS THE WORST CLASS OF BRIEF ERROR (2026-09-20, OffCamCelebs
  015).** 015's brief was built on a sentence he said on television, and got it wrong: it
  said *"I built a £300 million business at twenty-eight"*; the transcribed line is *"I HAD
  a £300 million business BY THE AGE OF 28."* Every other claim in that film is attributed
  out loud — the quotation and two prices are the only things asserted in our own voice — so
  the one sentence carrying no attribution was the one that was wrong, and the brief's own
  mechanism ("a real number attached to the wrong VERB") turned on the verb he did not use.
  **Trace a quotation to a transcription OF THE BROADCAST, not to a summary of it**, record
  the sourcing limit beside it, and ask the user to confirm it before the take is recorded.

- **★★★ WHEN THE SOURCE RETREATS FROM A CLAIM, THE FILM DROPS IT — ATTRIBUTION DOES NOT
  RESCUE IT (2026-09-20, 015).** The brief had us report, attributed, that the subject
  "wasn't named in the prospectus". He rebutted that publicly, the trade coverage records
  the rebuttal as apparently successful, and the paper amended the article around his
  account. "The Times reported…" is not a shield for a claim the paper itself walked back
  from — it is a way of repeating it with a footnote. **Read what happened AFTER
  publication**: corrections, amendments, appended statements, a complaint notice added and
  later removed. Same pass, same beat, the brief's "mostly after his exit" was cut because
  the paper's own amendment AND the company's then co-CEO both contradict it — a line
  disputed by both sides of a dispute has no side left to attribute it to.
  ⚠⚠ **AND DO NOT BUILD THE OBJECT THAT WOULD DRAW IT.** 015's kit contains no prospectus,
  on purpose. If a re-read take says the withdrawn line anyway, nothing on screen repeats it
  and the render guard refuses the master — the withdrawal is enforced by the absence of a
  component, not by remembering.

- **★★ A JOINT OBLIGATION IS NEVER ONE PERSON'S (2026-09-18, OffCamCelebs 013).** When a
  case names several defendants, read who the ORDER binds for each thing before a line says
  "he". 013's brief said "he turned over two point six million" and "he could pay two point
  six"; the stipulated order makes "Defendants" — six companies and two men — pay it, jointly
  and severally. Attributing a joint payment, judgment or allegation to one of them is a
  factual error about a real person, whichever direction it flatters. Also read WHAT the
  money is: a judgment "as monetary relief" is consumer redress, not a fine.

- **★★ "IN THEIR OWN WORDS" MEANS THEIR WORDS — TRACE EVERY FIGURE TO A SPEAKER AND A MEASURE
  (2026-09-19, OffCamCelebs 014).** 014's brief built a timeline of "her numbers, in her own
  tellings": an 8-figure portfolio, $50M, $100M+. Not one was her word for a portfolio VALUE —
  a magazine HEADLINE she reshared, a podcast's EPISODE TITLE over an answer that was about
  REVENUE, and a writer's own sentence with a count from four years earlier attached. Figures
  travel: a founder's revenue number becomes a host's "portfolio" in a title, then a writer's
  "portfolio of more than $100M". **For each figure, find the primary utterance (the caption
  track, the post, the page), and record WHO said it and WHAT it measures.** A reshare is not
  a statement; a title is the show's; "value" and "revenue" are different claims.
- **★★ A LINE THAT DESCRIBES A SEARCH IS A CLAIM ABOUT THE SEARCH — RUN IT (2026-09-19, 014).**
  "We searched the SEC's database for her name. One thing came back." The fund's filings never
  name her, and her name returns six OTHER filings. Narration about what a search found is a
  factual claim like any number: perform the exact search the line describes and report
  exactly what it returns — then make the line say that.
- **★ "NOTHING ON RECORD" IS ITSELF A CLAIM (2026-09-19, 014).** The brief said no lawsuit; a
  federal case had been filed three months earlier. Check the dockets (CourtListener) even when
  the film will never mention them, and tell the user — a premise can be wrong in a way that
  no line on screen repeats, and still matter in the comments.
- **ONE DATASET PER VIDEO.** Never mix windows or editions of a statistic — one checkable
  inconsistency kills the video. Record the chosen edition in `data.ts` and note the rejected
  ones so a future pass cannot "helpfully" swap them.
- **★-flag every live figure** in `data.ts` and re-verify the morning of posting.
- **The screen may be MORE precise than the VO, never DIFFERENT from it.** If the take rounds,
  the screen may show the exact figure; it may never show a number the VO contradicts.
  **★★ BUT A ROUND NUMBER IS NOT ALWAYS LESS PRECISE — SOMETIMES IT IS JUST ANOTHER NUMBER
  (2026-09-21, OffCamCelebs 016).** The verified total was ≈$13.75m and the take said "around
  13.5 million". 13.75 is not a sharper version of 13.5; it rounds the other way, and a viewer
  hearing one while reading the other sees a production error, not a precision. The test is
  arithmetic, not intent: **if the screen figure would not round to the spoken one, it is a
  DIFFERENT figure and the screen must follow the voice** — draw the voice's number, and put the
  verified one on the strip beside it where it reads as the source rather than as a correction.
  ⚠ And thread the take-derived value to EVERY object that draws it. On 016 the ledger's page was
  switched and the expiry BAR was missed, so one beat printed $13,750,000 under a caption saying
  13.5 — tsc was clean, the geometry audit was clean, and only the stills sweep saw it. A figure
  that switches on what the take says needs one exported constant and no second copy.
- If a brief's claim fails verification, **rebase the claim and flag it** — do not put it on
  screen and hope.
- Disclosure lines (total return / hypothetical / gross of fees) go in the POST CAPTION, never
  as a screen label.

### Assets
- **Never auto-download or scrape images of real people.** The user supplies the photo; I cut it
  out (`shared/tools/cutout.py`, rembg) and grade it to the video.
  **⚠ LOOK AT A SUPPLIED PHOTO FOR OTHER PEOPLE BEFORE CUTTING IT OUT** (2026-09-23, OffCamCelebs
  019): the Epstein photo had a young woman in the background, which is exactly what that brief
  forbade. Crop her out of the SOURCE before rembg, so she is in no pixel the film loads, and
  check the MASK rather than the composite. A cut-out can keep a neighbour's hair or shoulder
  without it being obvious on a dark plate.
  **⚠ AND A DARK SUIT ON A DARK BACKDROP DEFEATS THE DEFAULT MODEL** (2026-09-25, OffCamCelebs
  020, the official presidential portrait): isnet-general-use with alpha matting dropped the
  whole body and kept a floating head. `--model u2net_human_seg` (the person model) kept the
  shoulders, suit and tie. Try it first on any studio portrait with a dark background.
- **★★ A PHOTO IS DRAWN WITH REMOTION'S `<Img>`, NEVER A PLAIN `<img>` (2026-09-26, OffCamCelebs
  021).** A single `renderStill` waits long enough for a plain tag to load, so every still of the
  face beat looked right. The multi-frame scan (`renderFrames`, several tabs) caught frames before
  the file had loaded, and the plate came out EMPTY. An MP4 would have shipped the "his face"
  beat without the face. `<Img>` holds each frame until the image has loaded. **Verify anything
  that loads (photos, video, fonts) in a multi-frame render** (021's `scratchpad/framesrange.mjs`),
  never by a single still. ⚠ 009–020's object kits still use the plain tag.
- Logos: **simple-icons** (vector). ⚠ Some slugs are dropped (Microsoft) — inline the mark by
  hand and verify it in a still; a missing slug renders nothing, silently.
- **★ DRAW LOGOS AS INLINE SVG PATHS, NEVER AS A CSS MASK OR AN `<img>` (2026-09-26, Bankers Video 1:
  "the jpmorgan text is jittering a little bit").** Both are rasterised as bitmaps. In the render they
  shimmered: the CSS-mask JPMorganChase wordmark flipped ±0.45 px on EVERY frame of the MP4. It was not
  the encoder: the same frames rendered as lossless PNGs and encoded plainly came out smooth. Neither
  was it the layout, which moved a steady 0.2–0.3 px/frame. The cause was bitmap rasterising that differed
  between the two render tabs, which take alternate frames, on thin serifs under a sub-pixel camera drift.
  The fix is to generate the files' own paths into a module (Bankers `scratchpad/mkbrand.mjs` →
  `brandsvg.ts`) and draw them in an `<svg>`, with a knockout colour as a scoped fill override.
  Measure motion smoothness with the frame-centroid tools (`jitter.py` on an MP4, `framesprobe.mjs` +
  `jitterpng.py` on lossless frames rendered the real way, never an MP4 nobody asked for).
- **★★ SUB-PIXEL MOTION: WHAT MAKES A REMOTION FILM JITTER, MEASURED (2026-09-30, OffCamCelebs 023: "ensure that there
  aren't any jittery or sudden transitions").** Three causes. None shows in a still.
  - **Chrome puts text, SVG roots and boxes on WHOLE pixels unless they are in a genuinely 3-D layer.** Held labels ticked
    1 px every few frames under a drifting camera, and eased movers stepped. `translateZ(0)`, a bare `perspective()` and a
    0.01° 2-D rotation were each tested pixel-for-pixel and are all flattened. **A real rotation under a perspective is
    not flattened:** 023's `smooth3d()` (`perspective(1200px) translate(x, y) rotateX(0.15deg)`) and the same tilt on each
    place's design layer. Text inside a `Turn` was always smooth, which is how the cause was found.
  - **A CSS `filter` (drop-shadow) is pixel-aligned: on a MOVING element it zig-zags every frame.** Paint the shadow
    (`box-shadow`) instead.
  - **Render tabs can hold different raster state:** 4 tabs drew one 3-D subtree 1.1 px lower on some frames, while the
    same frames single-tab were steady. **Render a master single-tab** unless a multi-tab run has been measured clean.
  - **★ A `Turn` (rotateY) FLATTENS its subtree into one texture (2026-09-30, OffCamCelebs 024):** an element sliding
    INSIDE it stepped ±0.5 px as it landed, even with `smooth3d()`. Held still, the same slide followed its ease. Move
    things inside a Turn only when fast, or take the Turn off for the slow part. ⚠ `preserve-3d` is not the fix: the
    0.15° anti-snap tilt then cuts the element through the coplanar surface behind it.
  - **The ENCODER adds its own sub-pixel wobble to small, low-contrast labels (2026-10-01, OffCamCelebs 024).** A grey
    20-px axis label on a turning chart measured 0.026 px in lossless frames and 0.13 px (peak 0.48) in Remotion's
    CRF-18 MP4. Plain libx264 on the same frames gave 0.090 at CRF 18, 0.076 at CRF 14 and 0.046 at CRF 10. When the
    MP4 flags a label the lossless frames pass, encode those frames at a few CRFs before blaming the motion.
  - **★ A ZOOM INSIDE A PERSPECTIVE TRANSFORM STRETCHES A 1× RASTER (2026-10-06, OffCamCelebs 026: "the quality of the
    pictures isn't good").** Chrome rasterizes a layer whose transform has perspective at 1× and only composites it, so
    a camera `scale(s)` inside the same 3-D transform (`perspective() rotateX() … scale(s)`) enlarges a 1× bitmap. At ×2.3,
    a 3×-resolution screenshot and the URL text came out soft. Keep the 3-D part on the outer layer and put the zoom on an
    INNER element as a plain 2-D `scale()`: it is painted into that layer at its zoomed size. The matrix is the same, so
    every position is unchanged (026 `src/r40/cam.tsx`, A/B'd smooth). Check any 3-D camera kit that zooms.
  - **Never DROP `smooth3d()` at rest** (a `x > ε ? transform : undefined`): the element re-rasterises flat and jumps
    ~0.8 px on its last frame. Keep the 3-D transform on for as long as the element is drawn.
  - **★ …and a `Turn` whose yaw CROSSES 0° does the same for one frame (2026-10-05, Style 3 V33).** Its `rotateY` is
    written `toFixed(2)`. On the frame it rounds to 0.00° (with pitch 0) the transform is purely 2-D, so Chrome snapped
    the whole subtree 1 px for one frame and back on the next: a certificate twitched at f2706. A fresh still reproduced
    it, so it was not tab state. Every Turn that runs from −6° to +4° crosses zero once. V33's `kit.tsx` Turn now keeps
    |yaw| ≥ 0.06°. Port that line to any clone of the kit.
  - **★ Box3's `shadow` was a CSS drop-shadow FILTER, and a filter is pixel-aligned** (the rule above, found on the
    house solid). V33's `common.tsx` Box3 now paints it as a box-shadow on the face. Clone that version.
  - **★ SVG elements do NOT take CSS 3-D transforms.** A `<g style={{ transform: "perspective() rotateX()" }}>` flap
    rendered as a flat skew and then vanished (a pop). A 3-D hinge belongs on an HTML element. Inside an SVG, reveal by
    clip (V33's Cub East face now PEELS down behind a moving clip).
  - **A mover check has to be judged against the move's IDEAL path.** 023's judge (speed against its 5-frame median,
    limit 0.2 px) is calibrated on a gentle ease; a hard in-out deceleration scores 0.48 on its own ideal. Compare
    measured and ideal speeds frame by frame before calling it stepping (024 `scratchpad/movertight.py`).
  - Measure it the way 023's tools do: lossless full-size frames via `renderFrames`, phase correlation (a thresholded
    centroid false-flagged 17 of 18 targets), a canary that must fire and one that must not, and **an A/B with the fix
    reverted** before believing a residual.
- Icons: **Lucide**. ⚠ Verify names against the installed package — a renamed alias
  (`alert-triangle` → `triangle-alert`) renders an EMPTY box with no error.
- Photos: Wikimedia Commons first, check the licence, record the credit in `data.ts` **and** flag
  it to the user if the licence is not clearly free.
- Per-video assets live in that video's `public/`. `shared/` and `shared-assets/` hold the
  cross-video toolkit.

---

## Environment notes (Windows)

- **`ffmpeg` / `ffprobe` / `yt-dlp`** installed via winget but **not on PATH**:
  - ffmpeg/ffprobe: `C:\Users\Timur\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.2-full_build\bin`
  - yt-dlp: `C:\Users\Timur\AppData\Local\Microsoft\WinGet\Packages\yt-dlp.yt-dlp_Microsoft.Winget.Source_8wekyb3d8bbwe`
  - cloudflared: `C:\Users\Timur\AppData\Local\Microsoft\WinGet\Packages\Cloudflare.cloudflared_Microsoft.Winget.Source_8wekyb3d8bbwe\cloudflared.exe`
- Use `python`, not `python3` (the `python3` alias is the MS Store stub).
- **⚠ Keep a Remotion project on a path short enough for Windows' 260-character limit** (2026-10-06, packing the 100bps
  kit). Remotion's headless Chrome sits deep in `node_modules/.remotion/…`. A copy in a long temp folder failed to launch
  it with `spawn … ENOENT`, which looks like a missing browser and is not one.
- **The portable 100bps kit** (2026-10-06): `100bps-style3-kit.zip` in this folder carries this project's process rules
  (trimmed to 100bps), the Style 3 look authority, the reference reels and Video 33 as the template, for use on another
  device. Rebuild it after big rule changes; its assembly scripts named the original machine's paths only to strip them.
  ★ **The user's target is WINDOWS, and setup must be automatic** (user, same day: "not mac, I just want a zip that I can
  give to claude code on a windows device and it'll set everything up automatically"). The kit carries `setup.ps1`, which:
  - winget-installs Node LTS, FFmpeg and Python 3.12 if missing, and records them on PATH / FFMPEG / FFPROBE;
  - pip-installs the Python packages and fetches the whisper model;
  - runs npm install in the template;
  - proves typecheck, style check, audit, guard and one rendered frame;
  - writes `setup-result.json`.
  The root `CLAUDE.md` tells Claude Code to run it unprompted on first open. Keep that contract when rebuilding the kit.
  ★ **`100bps-style3-kit-v32.zip` (2026-10-08, user: "include some of the project files in there as references, but
  from videos before the sponsorship about copper").** The same kit, but its template is **Video 32** (NikeStock), with
  **Videos 30–31 as references** and the 2026-10-08 style file. V33, the sponsored copper film, is excluded. A kit's
  reference films come from before any sponsored video unless the user says otherwise.
- **Node 24 / npm 11**; Remotion works. ⚠ Node 24 refuses to spawn `.cmd` shims — invoke
  Remotion's CLI JS with `process.execPath` rather than going through `npx` in scripts.
  ⚠ The CLI's executable entry is `node_modules/@remotion/cli/remotion-cli.js` — NOT
  `dist/index.js`, which is the library and, when run, does nothing and exits 0 silently
  (V17, 2026-09-07: a "started" studio that never bound its port).
- **⚠ "Target closed" mid-render is usually MEMORY** (2026-09-25, OffCamCelebs 020): other
  sessions' Studios share this 16 GB machine, and Remotion's default of half the logical cores
  (10 tabs) died at 70% with 2.2 GB free. Pass `concurrency: 4` to `renderMedia`; 020's
  `render.mjs` takes `--concurrency=N`. The node process HANGS after the error, so stop it,
  and delete the truncated MP4 it leaves behind.
- **⚠ NEVER use PowerShell 5.1 for bulk source rewrites** — `Get-Content -Raw` reads UTF-8 as
  ANSI and `Set-Content -Encoding utf8` writes a BOM; a bulk rename once corrupted every em-dash
  and ★ across nine files. **Use Node, or the Write/Edit tools.**
- **⚠ Anything containing regex or template-literal escapes goes through Write/Edit, never a
  bash heredoc or an inline shell string** — this trap has been hit six-plus times; the shell
  layer eats the backslashes and silently mangles the file.
  ⚠ **A Node edit script is a second layer of the same trap (2026-10-02, OffCamCelebs 025).** A replacement written as a
  template literal turned `/dollar|\$1\b/` into `/dollar|$1` + U+0008 `/`: `\b` in a JS string is a BACKSPACE, as in
  JSON, and `\$` loses its backslash. tsc stayed clean, and the regex never matched. Put the regex itself in through Edit,
  then scan the source for control characters (`grep -P '[\x00-\x08\x0B\x0C\x0E-\x1F]'`).
- **⚠ `String.replace(a, b)` IN AN EDIT SCRIPT INTERPRETS `$` IN `b`** (2026-09-23, OffCamCelebs
  019): `$$` becomes one `$`, `$&` becomes the match. A Node one-shot that rewrote five counter
  formats turned every `` `$${v}M` `` into `` `${v}M` `` — the dollar sign vanished from every
  figure, tsc stayed clean (it is still a valid template), and only a read of the edited lines
  caught it. **In edit scripts use `s.split(a).join(b)` or a function replacement
  (`s.replace(a, () => b)`)** — and grep the edited lines afterwards.

---
