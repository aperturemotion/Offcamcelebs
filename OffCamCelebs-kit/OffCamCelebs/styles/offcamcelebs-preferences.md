# OffCamCelebs — STANDING PREFERENCES

**This file is the preference store for OffCamCelebs, and ONLY OffCamCelebs.**

OffCamCelebs is the user's second channel, run from its own Claude Code chat, exactly the way
the 100BasisPoints chat runs the finance channel. It is the counterpart of
`test/resources3/style3-preferences.md` — same role, different channel.

### Rules of engagement

1. **A note the user gives about an OffCamCelebs video is recorded HERE**, never in the root
   `CLAUDE.md`, never in `test/resources3/style3-preferences.md`. The reverse also holds — a
   100BasisPoints / Style 3 note never lands in this file.
2. **Divergence between the channels is expected and allowed.** Do not port a look rule across
   from Style 3 because it seems like an improvement, and do not "unify" the two files. If a
   lesson genuinely applies to both channels, it is written into each file separately, in each
   channel's own terms.
3. **The root `CLAUDE.md` stays the authority on PROCESS** (never render unless asked, the VO
   pipeline, dB-measured mixing, verification before handback, the environment notes). This file
   is the authority on LOOK, MOTION and FORMAT for OffCamCelebs. When this file contradicts
   anything else about how an OffCamCelebs video should look, **this file wins**.
4. **Every user note becomes a numbered rule here, with the date and the video it came from**,
   and every build change is logged in the changelog below. This file is read in full before
   building or revising any OffCamCelebs video.

---

## ★★★★★★ THE LOCKED LOOK — "029 HF": REAL 3-D OBJECTS ON PLAIN LIT GROUNDS, BUILT IN HYPERFRAMES (2026-10-10, 029 onward)

**The user (2026-10-10, on `OffCamCelebs/029-mayweather HF/` after the rule-54 pass): "This looks amazing, I want you to
fully save this style. Ensure that you save all the rules that this video implements, and ensure that the style will stay
the same if I send you another video prompt later on."**

**THIS SECTION IS THE OffCamCelebs LOOK.** It is self-contained. Every new OffCamCelebs prompt is built to it, unchanged,
unless the user changes it in their own words. A brief's own style or transition block never overrides it: the brief is the
authority on CONTENT only. Rules 45–54 below are the history and reasoning behind it. Where any of them differs from this
section (rule 45's flat SVG objects, cel shading, 1600-px cranes, sub-labels, the Remotion kit), **this section wins**.

### L0. How a new film is made
- **In HyperFrames, by cloning `OffCamCelebs/029-mayweather HF/`** into `OffCamCelebs/<NNN-slug>/`. Follow its
  `NEW_VIDEO.md` (what to replace, what never to touch, the take pipeline in `scratchpad/vo/`, the checks, the render).
- Never clone a Remotion kit (027, 028 or 029) for a new film.
- Studio ports 3100–3199, the next free one. All process rules of the root `CLAUDE.md` apply: script first, never render
  unless asked, handback via the Studio plus a Cloudflare tunnel, and the VO script block.

### L1. Format and structure
- 1080 × 1920, 30 fps, about 60–65 s.
- **The film is a run of PLACES**, one per set of the brief (6–8). Each place is larger than the frame.
- **Grounds alternate:** cream, then dark, then cream…
- **One literal 3-D hero object** acts out each sentence (the thing the sentence names: rule 2 of the root process). It
  stays through its place and does a NEW action on each line.
- **One thing to read at a time** (rule 47): the caption plus ≤ 3 readable items.
- **Never repeat a visual** within a film.
- **★★ AT MOST 2–3 DOCUMENT VISUALS PER FILM (the user, 2026-10-14, on 032's first build: "too many document visuals, try
  to be more creative with the visuals. Use objects that are relevant to the scene's context, keep 2-3 document visuals
  maximum").**
  - A document visual is paper carrying text: a page, front page, card, sheet, file, envelope, magazine, form or certificate.
  - Every other place is built from OBJECTS that belong to the sentence's world, chosen with imagination: a cask, a neon
    sign, scales, a deed box, a podium, coins, balloons.
  - Small paper on an object (a tag, a band round cash) is not a document visual, but keep it small.
  - Count the film's document visuals while planning the places, before building.
- **The hook:** frame 1 is already mid-action. No title card, no logo, no end card. The film ends 0.5 s after the last word.
- **★★★ THE HOOK MOVES FROM ITS FIRST FRAME, AND ITS HERO DOES ITS OWN JOB TO SHOW THE NUMBERS (the user, 2026-10-23, 034:
  "in the hook scene, there should always be some sort of movement… What do typewriters do? Their buttons go up and down…
  make something be typed in. And as it's being typed in, the numbers appear… Instead of the 700 million just appearing
  there at the start… especially some camera movement at the start… make the typewriter drop, but take into account gravity
  very well").** For every film:
  - the hook's hero ARRIVES with real physics: it drops (or is set down, slid in…) under true gravity, accelerating as it
    falls, lands with weight (a short impact compression and a settle; a small physical bounce is allowed here, it is not an
    "overshoot"), and its contact shadow grows and sharpens as it nears the floor;
  - the camera MOVES through the hook (follows the drop, then pushes in on the working part);
  - the hook's numbers are PRODUCED by the object working as the real thing works (keys press down and spring back and the
    figure pops up in the register's window, a printer prints, a counter rolls), timed to the words. A figure never just sits
    there at frame 1.
- **★★★ LABELS: AT MOST 2–3 PER FILM (the user, 2026-10-23, 034: "Stop using labels so often throughout the videos. Make
  that a rule. Don't use them more than 2 to 3 times throughout the video. Just try to visualize what the video is about…
  through the visuals themselves, and animate them if needed").** A label is any sign, tag, plate, billboard, banner, sticker,
  ribbon or printed card whose job is to SAY what the scene means ($125M billboard, LUXURY TAX tag, INFLATED notes, a NO
  INTEREST plate). The visual and its ACTION carry the meaning instead (boxes lock shut, a stack shrinks, a flag waves). Count
  labels while planning the places, with the document count (≤ 2–3 documents and ≤ 2–3 labels, separately). Figures that are
  the object's own working display (a register's window, a scale's dial) are not labels.
- **★★★ ENTER EVERY PLACE ON ONE OBJECT (the user, 2026-10-23, 034: "when entering scenes… don't show both visuals at once,
  ever… one of the visuals that are on the scene to be in focus. And then in some part of the scene, the camera can zoom out
  to show both").** A place opens close on its FIRST object only (the one the line names first), framed large; the second
  object is off-frame or out of shot. The camera reveals the next object later, on its line (see L7's living camera).

### L2. Grounds and light (no rooms, no textures: rule 51)
- **Cream:** `#F7F1E9`, a radial falloff to `#E6DACC` at the edges (ellipse 80% × 66%).
- **Dark:** espresso `#231710`, a radial centre `#3B2A20` (ellipse 78% × 62%).
- **Grain:** static paper grain over both at 3.5%. Nothing else is drawn behind the objects: no wall, desk, street or
  texture tile.
- **Light pools:** each place has soft pools fixed in its world, behind its objects. On cream they are white at 0.62 → 0;
  on dark, warm white at 0.15 → 0. They travel with the camera (so a move reads as the viewpoint moving) and fade across
  hand-overs.
- **Grounds between places:** a hand-over between cream and dark DISSOLVES the ground over 26 f.

### L3. Colour
- **Type ink:** `#2A1B15` on cream, sand `#F7F1E9` on dark.
- **Objects are their real materials' colours**, not a theme palette:
  - US currency grey-green `#C8D0B5` with the bank's mustard strap `#D9B44A`;
  - manila `#E2C98F`, legal blue `#3E5F8E`, walnut `#5A3A28`, brick `#9B5A45`;
  - brushed steel, chrome, brass `#C99A3E`, white enamel `#ECE9E2`, rubber.
- **Story accents, only where a story element needs one:**
  - gold only on money;
  - red `#B23A33` only for the court's or the verdict's ink (an ALLEGED tab, a lien tag, the UNSUPPORTED stamp);
  - an LED's red, a lamp's warm light.
  A new story's accent comes from its brief, one per job.
- **★ EVERY VISUAL PROPERLY COLOURED** (user, 2026-10-12, 031: "ensure that all visuals are properly colored"):
  - every object shows its real material's colour as RENDERED, judged on the frames, not on the hex in the code;
  - no object takes its ground's hue: walnut on espresso and white on cream each need a part that separates them;
  - neighbouring objects in one place are not all one material's colour (a court of brown wood on a brown ground);
  - the subject's photo is in its own full colour, matched to the place's light.

### L4. Captions (`Caption.tsx`, unchanged)
- **Archivo**, in two weights:
  - connective words in Light Italic 300 at 62 px;
  - key words and numbers in ExtraBold 800 at 110 px (fitted down to ≥ 100), on their own line.
- ≤ 2 lines a beat. The band is y 330–640, x 90–950, aligned left, centre or right to balance the object.
- **Words appear one at a time** on their spoken onset: a blur 8 px → 0 and a fade over 10 f on SETTLE. A word **never
  moves**. A beat clears on an eased 6-f fade.
- **Captions belong to their place:** they ride its hand-over, and its last beat leaves with it.
- No boxes, bars or outlines.
- **No dots between words, ever:** no "·" separator, and abbreviations without dots ("IRS", "SEC").

### L5. The objects: real 3-D (rules 52 and 53)
- **Every object is a Three.js model** at the detail of 100bps' "The Price of Money" (Style 3 Video 26):
  - every real part, at real proportions;
  - real openings cut through solids (windows, a stacker pocket);
  - rounded edges (`rbox`) that catch the light;
  - turned parts as lathes;
  - chains as interlocking links, clips and staples as bent wire.
- **One `View3D` per place** holds the place's whole model, so its objects share one light and one shadow. It sits under a
  registered off-axis camera: a front face at z 0 lands on its layer px, and the eye is up and to the right (x 900–1100,
  y 300–420, D 1700–2200).
- **Models turn a few degrees across their place** (rest to rest), so their depth reads.
- **Paper is paper** (`kit029.ts` `paper()`):
  - a displaced sheet with a bow, a lifted corner, a letter's Z of creases, a back face and a lit edge band;
  - print painted in Archivo into its texture, so the print follows the bend;
  - stacks with each sheet's edge showing (two stapled pages, three pages on stiff card).
- **★ PRINT FITS ITS BOX (the user, 2026-10-21, 033: "The $2 million text on the casino table should actually fit the box it's
  in. … $12.1 billion should also fit the box that it's in").** Every figure or word printed on an object sits wholly inside
  the frame, rule, plate or card edge drawn round it, with a clear margin. A long figure ($12,100,000,000) is fitted to the
  box by MEASURING it (`fitFont` in `kit029.ts`), never by guessing a font size. A class: check every printed object.
- **★★★★ EVERY VISUAL IS POLISHED, DETAILED, REALISTIC 3-D: THE FIRST PRIORITY OF EVERY BUILD (the user, 2026-10-23, 034:
  "from now on, you will focus a lot more on the 3D visuals. Every single visual will be completely polished, detailed, and
  3D… This applies to all the videos… really, really focus on the details and make these look as realistic as possible. And
  not make such simple, messed up visuals again").** The bar is the 034 cash register; nothing in a film may sit below it.
  - **Model from reference.** Look up real photographs of the object (web search / browser) before modelling, and build its
    real parts, proportions, materials and wear. A simplified stand-in, a block with a picture painted on it, or a "low-poly"
    read is a defect.
  - **Real material detail:** fabric shows its weave and panel seams (a cap: six crown panels, top button, curved brim with
    stitching rows, sweatband, eyelets); wood its grain; metal its brushing and bevels; glass is a real transmissive, refracting,
    reflecting glass with bevelled edges and a seated base; leather its grain and stitching.
  - **Cash is real banknotes:** a stack is many individual bills (visible sheet edges, slight misalignment, a real bank band),
    the top bill carries a banknote texture (portrait oval, borders, serials, seal), never a block with a drawing on it.
  - **Keys, buttons and controls carry their legends** (letters on a laptop's keys, numbers on a register's keys).
  - **A baseball** has its two figure-8 leather panels and raised red double stitching; a flag is cloth that WAVES (a cloth
    surface animated with travelling waves), never a stiff sheet.
  - **Documents look like real documents:** a real layout (letterhead, typeset paragraphs at true point sizes, ruled tables,
    signature, fold lines, paper fibre and slight tooth), not greeked bars and not a "designed" AI look. This supersedes "print
    and markings are greeked bars" below for documents.
  - **A stamp is a real stamp:** turned wooden or plastic knob, a neck, a mount block with the die's index on top, a rubber
    die with its relief letters; it is held and pressed by its knob.
  - **Shadows are right:** every part casts and receives (a cap's brim shadow on its crown, the cap's shadow on its stand),
    with contact darkening where things touch.
  - **Nothing reads as a bug:** no part pokes out of another or half-shows at an edge (034: a dial sticking out of a box
    side). If a part is not meant to be seen, it is not there; if it is, it is shown whole and on purpose.
- **★★ OBJECTS ACT WHAT THE LINE MEANS (2026-10-23, 034: "some of the lock boxes can actually close when the scene appears…
  Some movement should occur… the flag just stands still. You can make it wave").** Every place has a physical action that
  shows its point (boxes swing shut and lock, a stack thins, a flag waves, a lid closes), so it needs no label.
- **Quotes printed on objects** (a card, a letter, a statement): Archivo Light Italic 300 with Chrome's synthetic bold, drawn
  explicitly by `fillBoldItalic` (never "italic 800": no such face ships, and the browser's substitute varied between runs).
- **Materials** (`kit029.ts` `M`): matte paper and print, satin, gloss lacquer, brushed steel, chrome, gold and brass,
  rubber, glass, an emissive glow (a lit LED or a lamp's strip). Print and markings are greeked bars, never real copy. No
  texture tiles.
- **Ground contact:**
  - things that STAND sit on a floor (`makeFloor`): its shadow catcher, contact pools, and a faint mirror (0.14) on dark
    grounds;
  - things that HANG or lean sit 26–30 px in front of an invisible backdrop (`makeBackdrop`) that takes their shadows;
  - every floor and backdrop shadow fades out over an ellipse (never a hard edge).
- **No two solids ever intersect, at rest or in motion** (rule 54b):
  - sheets stack with real clearance;
  - things that rest on paper are seated on its highest point (`paperTop`);
  - a sheet changes shape when it must (`reshape`: a corner curls only once it is free);
  - a stamp presses flat in its page's own frame;
  - a hinged sign swings about a round rod;
  - designed joins (staples, a strap, a key in its face) are declared.
- **People are photos**, only the one the user supplies:
  - cut out (rembg), ×2 Lanczos plus a light unsharp mask;
  - its foot faded into the dark (`maysharp.py`, `photobox.py`);
  - placed only where the brief puts the person (029: the hook, beside the object);
  - never downloaded, and never anyone else in it.
- **Brands:** names in plain type on objects. Never a real logo or masthead.

### L6. Light (`stage.ts` `LIGHT`: the measured rig that gives every object a dark side)
- **Key 3.8**, from the upper left and a little in front (−0.5, 0.75, 0.43). Tops bright, fronts mid, right-hand sides
  dark: three tones on every solid.
- **Rim 0.7**, cool, from behind on the right. **Hemisphere fill 0.3.**
- **The studio environment is each material's OWN map:** a non-metal takes 0.35 of its material's intensity, a metal all
  of it.
- **Neutral tone mapping**, exposure 1.
- **PCF soft shadows**, 2048 map (never VSM: it threw false wedges across stacked sheets).
- **The shade audit holds it:** turned-away faces at about 0.2–0.4 of the lit ones.

### L7. Camera and motion
- **Inside a place the CAMERA travels to each sentence's object** (rule 46): `World` keys of 30–50 f (≥ 40 f for ≥ 400 px),
  on SETTLE, never overlapping, on the words the voice points at. ~~Between keys the camera is DEAD STILL~~ (superseded
  2026-10-23 by the LIVING, FOLLOW-THROUGH CAMERA below: between keys the camera breathes).
- **Hand-overs are camera moves through one world** (100bps E7):
  - trucks: 44 f on TRAVEL, a frame-width plus a gap of ≥ 140 px, yaw ±7°, an 8% depth arc;
  - cranes: 48 f, 2000 px, pitch ±5°;
  - trucks and cranes alternate, with no two consecutive moves alike;
  - each place shows only through its own move: a soft FRAME MASK rides the hand-over (feather 70 px on a truck, 40 on a
    crane), so nothing of the next place snaps on early and nothing of the last lingers;
  - a hand-over waits for its place's last action and its last spoken beat.
- **Everything starts and ends at rest; nothing overshoots** (rule 48). The curves are `tokens.ts`'s:
  - SETTLE (0.40, 0.12, 0, 1) for in-view actions and in-place camera moves;
  - GLIDE (quart-out) for things arriving from beyond the frame edge;
  - EXIT (cubic-in) only for things leaving the frame;
  - COUNT for counters, landing on their word;
  - TRAVEL (0.6, 0, 0.4, 1) for long moves.
- **Things ARRIVE physically, never fade into being** (rule 50.1):
  - a card or sheet glides in from beyond an edge;
  - a letter rises out of its envelope;
  - a sign swings down on its arm;
  - a cover swings open on its hinge;
  - a stamp comes in, presses and is drawn away;
  - a lamp or a window FLICKERS on, as a bulb does.
- **No dead-still stretch over 1.6 s** in the object band: a camera key or an action the line motivates breaks a long hold.
- **★★ A LONG LOOK AT ONE OBJECT MOVES (the user, 2026-10-13, 031: "Add more camera movement when focusing on a single asset
  for a long time for example at 11 seconds when talking about how Musk tweeted … zoom in out or closer to the phone or zoom
  in and track the text. Use this for all videos").** This is STANDING for every film, and it supersedes "between keys the
  camera is dead still" wherever the camera rests on one object for more than ~2 s:
  - push in closer as the line goes on, or pull out to reveal, or zoom in and TRACK the text the voice is reading (down a
    tweet's lines, across a quote);
  - a long, slow move is a DRIFT key: one in-out from rest to rest over its whole hold (no snap, no whoosh), never a loop or
    a wobble;
  - the caption band still holds: whatever is printed stays below ~660 on screen at every key.
- **★★★★ THE LIVING, FOLLOW-THROUGH CAMERA (the user, 2026-10-23, 034: "make it more of sort of a follow-through camera
  movement… the scene should enter with the calendar more in focus. The camera should be more zoomed into that. And then the
  camera should zoom out… and move to the right to show the hat stand, and maybe zoom in on that as well… The camera should
  sort of feel alive without trying too hard. Sort of like a breathing motion, like zoom in, zoom out here, zoom in there…
  in different directions").** This SUPERSEDES "between keys the camera is dead still" (rule 50) for every film:
  - **Enter close** on the place's first object (L1), framed large.
  - **Follow through:** on the line that names the next object, pull out and travel to it, then push in on it. The camera
    leads the eye to whatever the voice is talking about; a wide shot of the whole place is a moment, not the resting state.
  - **Always breathing:** between story moves the camera is never frozen. It makes slow in/out and sideways drifts, each a
    different direction and size (about 3–8% zoom, 20–60 px of travel, 1.5–3 s each, eased rest-to-rest and chained so the
    motion never stops), so the film feels alive "without trying too hard": never a loop, a wobble, a shake or a whoosh.
  - Captions still sit in their band; the breathing never pushes printed matter above ~660 on screen.
- **A big surface that swings between the key and what is under it** (a cover, a flap, a lid) moves on SOFT over ≥ 30 f, not
  SETTLE. Its real cast shadow then PASSES across what it covers. On 029 a 22-f SETTLE swing swept the folder page dark in ~4
  frames, and the render's flash scan caught it as a flash.

### L8. Sound
- **The voice:** the user's take, through the VO pipeline (`scratchpad/vo/`).
- **★ YEARS 2000–2009 ARE SAID "TWO THOUSAND ONE", NEVER "TWENTY OH ONE" (the user, 2026-10-21, 033: "ensure that the 2001 …
  is actually pronounced correctly, because right now the voiceover says 2001, which is wrong").** Write them that way in
  `VO_SCRIPT.txt` and in every generated take ("two thousand one", "two thousand four"); 2010 onward stays "twenty sixteen".
- **The bed:** the previous film's song unless the user names another (029: the Runaway cut, its drop on "Now"). Mixed by
  measured dB, 5.5 dB under the speech-gated voice in every 10-s window and in the tail.
- **The SFX score is family per job, scored unprompted** (`score.ts`):
  - airwoosh for every camera move and hand-over, peaking on its fastest frame;
  - swoosh / whooshsoft for things that arrive or are carried;
  - chain for a mechanism;
  - a click where a part seats or a light switches;
  - flicks for paper dealt;
  - ticks for counted items;
  - data while a value computes, then one quiet ping;
  - lowwoosh for a break or a verdict, with a thud and a sub under a stamp.
  Nothing on the caption words. Levels come from `SfxLayer`'s `EVEN` table × `PRESENCE`, checked against the voice.
- **HyperFrames mix parity:** mono sources ×√½, the automation lane IS the level, every cue on its own frame (no lead),
  each clip clamped to its file's length.

### L9. The checks before every handback (rule 54: measured, every frame, canaries first)
1. **0 crossings** beyond the declared joins: the PEN audit, on every frame.
2. **0 view-edge cuts:** the EDGES audit.
3. **0 pop-ins, pop-outs and overlaps** at every hand-over: `stale029.py`.
4. **The shade audit:** every solid has its dark side.
4b. **★ 0 floating pieces** (the user, 2026-10-12, 030: "the camera visual has a floating piece"). Every part of an object
   touches the rest of it, and every piece rests on the floor, a backdrop or another object (within 1.5 px), on a settled
   frame of every place. The tool is `sweep029.mjs float` (`g3audit.ts` FLOAT, with canaries). A screen hinges on its body,
   a tag sits on its arm, a key's bow joins its shank, and a hanger rides ON its rope. Nothing waits in mid-air with no hand
   holding it: a tool that has done its job leaves.
4c. **★★★ THE GLITCH SWEEPS RUN AUTOMATICALLY, AFTER EVERY CHANGE, UNASKED (the user, 2026-10-23, 034: "The stand for the
   meter glitches through the actual frame for the meter. And I want you to always prevent weird glitches like this in the
   videos automatically. Do sweeps automatically").** PEN (crossings, including between the parts of ONE object: a stand
   through its own frame), EDGES, FLOAT and the hand-over sweep are run on every place after every build change, and every
   hit is fixed before the Studio is republished. Nothing goes back to the user with a known crossing.
5. **HyperFrames `check` passes.**
6. **Stills of every beat**, hand-over strips, and every object inspected at full size.
7. **When a render is asked for, the MP4 itself:**
   - `scratchpad/verifymp4.py`: the file, decoded frames against fresh stills, and the sound against the offline mix of
     `scratchpad/vo/mixprobe.mjs`;
   - `scratchpad/popmp4.py`: isolated one-frame flashes in every decoded frame, 0 allowed. A run of flagged frames is motion,
     and is looked at, not counted.

The counts of each class go in the handback.

---

## ★★★★★ 2026-10-09 — RULE 54, A FULL GLITCH SWEEP BEFORE HANDBACK, AND FORM SHADING THAT READS AS 3-D (029 HyperFrames onward)

**The user (2026-10-09, on the 029 HyperFrames remake): "You need to do a full sweep of the video to understand how many
glitches there are in it. Sometimes visuals from previous scenes are still visible, sometimes 3d objects glitch through
eachother, and overall, the 3d objects don't have enough shadows/highlights (basically the dark parts on them) to look 3d
enough".**
- **Every frame is swept, and the glitches are COUNTED, before a handback.** Snapshots and contact sheets are not a sweep.
  The film is captured frame by frame and measured for three classes, each with its own tool and canaries:
  1. **A previous place still visible:** nothing of an earlier place may remain on screen once the next place has
     arrived, in any layer (a canvas left drawn, a host not cleared, an object outliving its window).
  2. **Objects passing through each other:** no two solids may interpenetrate at any frame, including in transit (a sheet
     sliding through a board, a brick through a strap, a letter through its envelope).
  3. **Form shading:** every 3-D object shows a real dark side and a real lit side. A solid whose faces all read within a
     narrow band of each other looks flat, however correct its geometry. Each object has a measured light-to-shade range
     on its own pixels, with core shadows on the turned-away faces, darkened crevices and contact lines (ambient occlusion),
     and highlights on the edges facing the key.
- **The count goes in the handback**: how many of each class were found, and that each was fixed.
- **★ 2026-10-10, the user again, sharper: "ensure that none of the visuals just appear on screen before they have to, like
  when one scene is about to transition into the next, the corner of the visual for the next scene snaps on screen on the
  right. Same thing in out transitions as well, the corner of a visual is still visible and just vanishes after a couple of
  seconds… also ensure that none of the 3d objects intersect eachother, like in the scene at 1 minute."**
  - **A place is seen ONLY through its own move.** Nothing of the next place may show before the hand-over's travel brings
    it in, and nothing of the leaving place may remain once the travel is done: no corner at the frame edge that snaps on at
    a window's first frame or vanishes at its last. Each place is bounded by its own frame (a soft-edged frame mask that rides
    with the hand-over), and its content is built so that what reaches past the frame ends naturally (an anchored chain end,
    a floor shadow that fades out) rather than being cut.
  - **No two solids ever intersect, at rest or in motion**: sheets stacked with real clearance, a stamp that presses onto
    the page and not into it, a cover that swings clear of what it covers. The pen audit must come back with zero crossings
    beyond the designed ones (a staple's legs, a key set into a face), and those are listed by name.

---

## ★★★★★ 2026-10-09 — RULE 53, REAL MATERIAL, NOT A PICTURE ON A SOLID (029 HyperFrames onward)

**The user (2026-10-09, on the 029 HyperFrames remake): "I need all the visuals to look more realistic, meaning small shadows
or outlines and whatever it takes should be implemented to make them look more 3d, because right now for example all the
paper visuals look like a flat 3d object with a 2d picture on them rather than an actual 3d paper."**
- **An object is its material behaving as it really does, not a box carrying a printed picture.** Paper bows and curls,
  takes folds and creases, lifts at a corner, has a thin lit edge and a soft shadow under it, and stacks with each sheet's
  edge showing. Card is stiffer. A bundle of bills bulges where its strap squeezes it.
- **Edges catch the light:** no razor-sharp box corners. Everything solid gets a real bevel or radius, so its edges
  highlight and its form reads.
- **Shadows everywhere they belong:** soft contact shadows under and behind every object, between stacked sheets, under
  a staple or a clip. Where an object meets another, the meeting point darkens. These are the "small shadows and
  outlines" that separate a thing from what is behind it.
- **Light models the form:** a curved surface shades across its curve, and print follows that curve and that light,
  because it is on the surface.
- **"Whatever it takes" is the standard:** geometry, lighting and shadows are all in scope. Rule 51 still bans fake
  texture TILES; real geometry is the answer.

---

## ★★★★★ 2026-10-09 — RULE 52, EVERY OBJECT IS 3-D, AT THE DETAIL OF 100bps' "THE PRICE OF MONEY" (029 onward; SUPERSEDES RULE 45.1's FLAT 2-D LOOK FOR OBJECTS)

**The user (2026-10-09, on 029, mid-way through the rule-51 pass): "Alright, I want you to redesign the style of the visuals
overall. Any objects should be 3d, with the amount of detail that the objects in the price of money video for 100bps".**
- **The reference is `Style 3 videos/Video 26/`** ("The Price of Money Just Hit a 19-Year High"), the same film the Align
  client liked for its fluidity. Its objects set the bar for 3-D construction and detail: real depth faces, lit and shaded
  sides, every real part, read in motion.
- **Every object is 3-D**: a solid with its depth, its lit top or side and its shaded side, turned to the camera so the
  depth reads, never a flat front face with a drop shadow.
- **What crosses from 100bps is the OBJECT CRAFT only** (construction, depth, detail, light). The channel keeps its own
  identity: its palette, its captions, its photo rules, its camera hand-overs and every content and process rule. No
  100bps branding, wordmark, platinum-and-red palette or sign-off.
- **Rule 51 stands with it:** no texture tiles, no drawn rooms; plain lit grounds; sharp.

---

## ★★★★★ 2026-10-09 — RULE 51, NO FAKE TEXTURES, NO DRAWN ROOMS: SHARP, REAL OBJECTS ON A PLAIN GROUND (029 onward)

**The user (2026-10-09, on 029 with the take wired): "What is that wood texture? That doesn't make the video look more
realistic. I need you to sharpen up the visuals, make them more realistic, and stop adding so many AI generated vector art
backgrounds."**
- **No fake material textures.** The streaky `fibre` / `tex_wood` "wood", the plaster, cork and worn tiles, and the
  speckle grain painted inside objects are WITHDRAWN. They read as noise, not as material. Realism comes from an object's
  construction, its form shading and its light, never from a texture tile laid over a flat shape.
- **No drawn rooms behind the objects.** Rule 50's "Rooms" item (walls, wainscoting, cabinets, counters, a street of
  buildings drawn as a back pass) is WITHDRAWN, and so is rule 46's "world-fixed surroundings plus a parallax backdrop".
  A place is the references' PLAIN GROUND: cream with a soft vignette, or dark with a lighter centre, plus the static
  frame grain. Objects stand on that ground on a soft contact shadow, as the pitcher and the coin do in style-a.
- **The camera still travels (rule 46's movement stands).** Its travel reads through the objects passing and through the
  ground's own light, which is fixed in the world, never through drawn architecture.
- **Sharp:** crisp edges, clean fills, legible detail and real contrast between an object's parts. Nothing muddy, nothing
  speckled, nothing low-contrast grey-on-grey.
- **More realistic:** every hero object carries the details the real thing has (rule 49's shapes and parts stand), drawn
  clean.
- **What this supersedes:** rule 49's "grain INSIDE every object" and rule 50's room backdrops. The references' own
  plain grounds (rule 45.2) are the authority on what sits behind an object.

---

## ★★★★★ 2026-10-08 — RULE 50, NOTHING MAY READ AS AI-MADE (028 onward)

**The user (2026-10-08, after seeing the rule-49 rebuild of 028): "visuals need to be even more realistic, this applies to
all visuals. Also, I don't know exactly what it is, but there is something wrong with the video that makes it seem like AI
made it. It might have something to do with the animations, but I want you to try to identify this and solve this issue."**
- **"Even more realistic" applies to ALL visuals**, not only the hero objects. That covers the backdrop architecture, the
  floors, the signs, the hands, the paper, the light, and the placeholder for a person.
- **The AI feel is a defect to find, not a taste to argue with.** It is identified by MEASURING the human-made references
  (`Temp/`) against the film in motion: timing, easing, simultaneity, secondary motion, blur, idle life, rhythm, composition.
  Each tell found becomes a numbered item below, with its measurement and its fix.
- **The measurement** (2026-10-08): all four `Temp/` references decoded frame by frame and tracked at full resolution.
  The report and 13 evidence strips are in the 028 session scratchpad (`refs/REF_MOTION_REPORT.md`). Our side was measured
  from the code and the every-frame render.
- **The tells found, each with its fix:**
  1. **Things fade into being.** In the references, opacity fades are 8% of object entrances (style-a) and 0% (style-b).
     The "fade + rise" template appears 0 times in all four films. 028 had it on nearly every tag, document, card, stamp,
     label and source line.
     - **Fix:** every object ARRIVES PHYSICALLY. It slides in from beyond a frame edge, is lowered or dropped onto
       something, grows from its base, emerges from behind another object, is carried by its mechanism (a sign on a
       shutter), or is uncovered (a tag unrolling over its printed figure, a highlighter over a line).
     - A light FLICKERS on or off, as a bulb does; it never fades. Printed text arrives with its object.
  2. **Every move had the same symmetric slow-in, slow-out.** The references SNAP, then settle: 8 of 9 entrances start
     at 76–100% of their top speed, and half the travel is done by t ≈ 0.18. Exits accelerate out. Only long camera
     trucks are symmetric.
     - **Fix, within rule 48 (the user's own "smooth in and out" note, kept):**
       - in-view actions and in-place camera moves use SETTLE, bezier(0.40, 0.12, 0, 1). It is the most front-loaded
         curve that still passes rule 48's test: t50 0.26 (was 0.39–0.50), start 7%, soft start 16%, soft end 68%.
       - entrances from BEYOND the frame edge use GLIDE (quart-out). Their fast frames are off-screen, so on screen the
         object only glides in and settles. Every use is declared in `curves028.mjs`, like EXIT.
       - long hand-over trucks stay symmetric (TRAVEL), as the references' long truck is.
  3. **The camera floated for ever.** The references' camera is locked off between moves: scale 1.0000 and 0 px shift
     in 6 of 9 held windows, with no constant push.
     - **Fix:** the 100bps sine drift is gone, and for 028 (its brief frees the style) so is the 1.00→1.025 creep.
       Camera moves are deliberate and land dead still.
  4. **Small objects centred on a backdrop.** In the references an object bleeds off a frame edge in 74–86% of settled
     beats, and heroes span 55–100% of the frame width. 028 had a median object extent of 20% of the frame and 21%
     edge-cropped.
     - **Fix:** heroes are BIG and break the frame (the bottom included: only TEXT keeps the safe zone), and each place
       is a real surface that runs off the frame.
  5. **Monospaced source lines under the objects.** The references have NONE (no footnote, source line or mono text in
     any of the four).
     - **Fix:** 028 drops the sub-labels. Every guardrail attribution is in the voice ("Forbes says…", "Forbes puts her
       at…", "Its filings…"). The one figure the voice does not attribute (the hook's $1.9B) carries Forbes on a real
       object in the world.
  6. **Frozen holds.** With the drift gone, a still frame is truly still. The references keep life INSIDE the scene
     (gears turning, counters ticking, a cursor blinking): only 3.7% of style-a is dead still, and its longest still
     stretch is 1.0 s.
     - **Fix:** diegetic idle life (bulbs chasing, a glint crossing metal, tags turning on their cords), measured for
       dead-still stretches.
     - **The standard: no dead-still stretch over 1.6 s anywhere in the object band, the film's LAST line included**
       (the references' longest is 1.0 s in style-a and 1.63 s in style-b, and style-a's counter ticks to its final
       frame). Measure it with `028-kim/scratchpad/stillgaps.py` on every-frame renders.
       - ⚠ **An idle sway of a degree or two does not count.** It is real but sub-pixel, so a held tag still measures
         dead. Break a long hold with an ACTION the line motivates: a camera key on the word the voice points at, a tool
         that waits in its hand and leaves on a word.
       - ⚠ **Measure a hold on a single-tab or clean render.** One multi-tab render showed a periodic 0.23 tab-raster
         flicker that made the film's final 1.9-s freeze look alive. The next render had no flicker, and the freeze showed.
  7. **Caption words rose as they arrived.** The references' words never move: style-a fades a word over 8 f, style-b
     blurs and fades it over ~15 f.
     - **Fix:** blur and fade over 10 f, with no rise.
  8. **Animated on ones; the references step on TWOS** (40–47% of in-motion frames are holds, each layer at ~15 fps).
     This one conflicts with the user's 025 note ("more seamless, fluid, and smooth"), which removed twos.
     - **Fix:** it is NOT imposed. The film ships on ones, and a second composition (`InfluencerAudit028-Twos`) shows the
       same film on twos in the Studio for the user to choose.
  9. Already matching, kept: no motion blur (none in any reference), static grain, no overshoot by default (style-b has
     none at all).

---

## ★★★★★ 2026-10-08 — RULE 49, OBJECTS AS REAL AS THE REFERENCES (028 onward; SUPERSEDES RULE 45.1's "cel shading only, ONE shade")

**The user (2026-10-08, on 028's first cut): "lets change the design of all vector art. Look at the style references that I
gave you for this style earlier, and focus on the objects themselves. They are far more realistic than these are. Try your
best to make the objects in this video look as much as possible like them (I mean the details or realism), and also try
finding a realistic asset pack that would suit this account's style. Simply give me screenshots of some objects from
different asset packs."**

**What the references' objects really are** (measured 2026-10-08 on 1-fps frames of `Temp/` style-a and style-b at full
size; 027's "cel shading, one shade" note understated them):
- **Grain INSIDE every object**, a printed-paper / risograph noise in the fill itself (the coin stack, the money bag, the
  piggy bank, the hand), not only the ground's grain.
- **Soft form shading**: multi-stop gradients that turn the form (a coin's face and rim, a pitcher's belly, a bust's
  cheeks), a soft core shadow and a lit edge, never a single hard shade stripe.
- **Real construction**: every part the real thing has, at real proportions. The coin has a milled rim and an embossed $;
  the pitcher has its lip thickness, spout and a handle that joins the body; the money bag has its tie and folds; the
  tongs have their hinge, grips and teeth.
- **Materials read**: glass is translucent (the ground shows through, with streak highlights); gold and metal carry soft
  specular; felt and paper keep their texture.
- **Soft contact shadows** ground each object; nothing floats on a hard-edged shadow.
- **Style-b is flat but DETAILED**: corrugated container ribs, door bars and lock rods, a truck cab with its mirror and
  wheel hubs. Flat never means simplified.
- People are photos (rule 45.6 stands).

**★ …AND THE SHAPES TOO (user, same day, mid-rebuild: "even the shapes of the visuals should be altered to make them more
realistic, especially the hand").** Shading and grain on a simplified silhouette are not enough. Every outline follows the
real object's anatomy and proportions:
- a hand has fingers of different widths and lengths, two visible bends per curled finger, knuckles, a tapering wrist,
  and a two-jointed thumb (never four identical capsules);
- a cuff wraps the wrist in a curve, and a sleeve opens in a curve;
- no object is left as a rectangle, circle or capsule where the real thing has a contour.

**How to apply:** every object is built to this level before a handback, or drawn from a licensed asset pack the user has
chosen (the pack question is open: screenshots from candidate packs went to the user on 2026-10-08). The palette, captions,
motion and every other rule-45–48 item stand. Rule 42's close-up sweep now also asks: "would this object sit beside the
references' pitcher and coin without looking cruder?"

---

## ★★★★★ 2026-10-07 — RULE 45, "FLAT EDITORIAL": THE NEW HOUSE STYLE (027 "Half the Size" onward; SUPERSEDES RULE 40's MATERIALS, TYPE, CAPTIONS AND MOTION)

**The user (2026-10-07, the 027 brief): "★★★ NEW HOUSE STYLE — this REPLACES the Bartlett 3D materials spec from now
on. References: refs/style-a.mp4 (founder / pitcher video) and refs/style-b.mp4 (shipping-container video). Extract frames
from both and match them."** The two references are in `OffCamCelebs/Temp/`: style-a is the Mira Murati video ("…raised
$2B at a $12B valuation…": a hand squeezes a coin into a pitcher), and style-b is the Zurich shipping-container video
("…just raised $270M": a crane lifts a container while a number counts). The measured notes are in the 027 changelog entry.

**What it supersedes:** rule 40's 3-D/shiny amendment (100bps material, glossy floors, reflections, specular), RULE 44's
"materials are 025's 3-D shiny look" item, rule 40.1's grounds, 40.2's palette, 40.3's Inter, 40.4's caption timing, 40.5's
dead-still camera, 40.7's no-overshoot entrances, and 026's transition set (dollies, zoom-throughs, 30–40-f pushes).
**What still stands:** rule 41 (no two scenes intersect), rule 42 (every object correct up close), rule 43 (SFX, family
per job), the fluidity scan (every in-scene action eases from rest and settles; the only overshoot is the entrance's
specified back-out), one literal object acting on its sentence, captions owned by their scene, never repeat a visual,
the photo rules, and every process and accuracy rule.

1. **Look: flat 2-D editorial illustration, every asset drawn as SVG in code.**
   - Cel shading only: a base colour, ONE shade, and one thin highlight stripe on glossy or glass objects.
   - No 3-D renders, no photoreal textures, no bloom, flares or particles. Gradients only as a soft 2-stop on large fills.
   - One stroke treatment across the whole film: either no strokes, or 3 px ink on every object.
   - No generated images anywhere.
2. **Grounds.**
   - CREAM scenes: #F7F4EC, a soft radial vignette (edges ~8% darker), and fine paper grain over the frame at 3–4%
     opacity, STATIC (not boiling).
   - DARK scenes: #24083D, a lighter radial centre #3A1660, the same grain.
   - Cream and dark alternate per METAPHOR SET, not per shot.
3. **Palette: monochrome plus one accent.**
   - ink #24083D · plum #4B1F73 · violet #8A67B8 · lavender #C6B0E3 · lilac #EDE5F7 · cream #F7F4EC.
   - GOLD #F2C230 (shade #C9971A) ONLY on money (a crown, coins, price tags).
   - A story-specific accent is allowed only where the brief names it (027: lip pink #D9467A on the lip kits only; amber
     #C98A2B on the verdict word only).
4. **Captions, the signature of the references.**
   - Words appear ONE AT A TIME, synced to the voice (force-aligned). Each word goes opacity 0→1, blur 8 px→0 and
     y +10 px→0 over 5 frames. Shown words stay until the caption beat ends; the beat clears in 4 frames.
   - Two weights of **Archivo**: connective words in Light Italic 300 at ≥ 58 px, ≤ 26 characters a line; key words and
     numbers in ExtraBold 800 at 100–120 px, on their own line under the italic line, ≤ 14 characters.
   - Long sentences break into consecutive beats, at most 2 lines each.
   - Ink on cream, cream on dark. No boxes, outlines or subtitle bar.
   - The caption block lives in y 330–640, left, centre or right to balance the object, always within x 90–950.
   - Where an object counts a number up, the caption's number appears when the counter lands.
5. **Motion.**
   - Each sentence is one object doing one physical action that acts out its words.
   - Objects in one set stay on screen across its lines and do a NEW action on each line.
   - Between sets: a PUSH (the next object slides in from a frame edge and shoves the old one out, 10–12 frames,
     ease-in-out) or a HARD CUT on a beat change.
   - A slow push-in on every shot: scale 1.00→1.04 across the shot.
   - Object entrances use back-out easing (overshoot 1.2). The camera stays gentle.
   - Counters ease out and land exactly on their VO word.
   - Typed text carries a blinking block cursor ▌.
   - Objects may bleed off the frame edges for scale; anything READABLE stays inside the safe zone.
6. **Photo.** One supplied cut-out, used three ways only: a head-and-shoulders cut-out in the hook, a larger cut-out at
   the name reveal, and a small circular avatar token with an ink ring. Nowhere else.
7. **Sub-labels:** IBM Plex Mono 30 px at 60% opacity, directly under the object they qualify. They carry the sourcing.
8. **Reels safe zone:** nothing readable in the top 270 px, the bottom 440 px or the right 130 px. Primary objects inside
   x 90–950, y 660–1440. The preview build carries a safe-zone overlay (`InfluencerAudit0NN-Safe`), checked on every shot.
9. **No repeats:** no object, animation or layout used twice, except a callback the brief sanctions.
10. **Brands:** company names are set in plain Archivo on objects. Never a real logo, a masthead or a brand's mark.
11. **The hook:** frame 1 is already mid-motion (the object acting, the caption already building). No title card, no logo.

★★★ **AMENDED BY THE USER, 2026-10-07 (027, after the first build): "the transitions shouldn't have been altered from the
way they were last video, bring them back."** Item 5's "10–12-frame push or hard cut between sets" is WITHDRAWN. The
hand-overs between sets are 026's, unchanged:
- pushes from all four sides (30 f, the PUSHC curve);
- dollies (40 f, both scenes as rounded cards on the deep ground);
- zoom-throughs (34 f, the fill matched to the colour dived into);
- the collapse (14 f) and the rise (48 f);
- no two neighbours alike, and captions owned by their scene (they leave with it).
A brief's transition block does not override this; the rest of rule 45 (the flat look, the captions, the push-in) stands.

★★★★ **AMENDED AGAIN THE SAME DAY (027, after seeing 026's set back): "remove those weird zoom out or sliding animations
where you can see the edge of the scenes, use 100bps transitions instead".** The 026 PUSH (two panels sliding with a seam
between their grounds) and DOLLY (scenes shrunk to cards on a deep surround) and the COLLAPSE are WITHDRAWN. The hand-overs
between sets are 100bps' (Style 3 E7, V34 `shot.tsx`): every hand-over is a CAMERA MOVE through one world —
- a TRUCK (left/right: both places ride one in-out curve, a frame-width apart; the camera yaws ±7° and backs off ~8% at
  mid-move), a CRANE (up/down: 1600 px, pitching ±5°, the same depth arc), or a DIVE into a detail of the old place followed
  by the new place opening CLOSE on a detail and backing off to its framing;
- NO EDGE OF A SCENE IS EVER SEEN: the ground is one continuous surface (a cream ↔ dark change dissolves across the move,
  22–26 f), no panel seam, no card, no surround;
- the background travels with the camera at parallax (a place's far wall rides at 0.4 of the move, and two places' walls
  never show at once);
- no two consecutive hand-overs share type and direction; each is scored as a camera move (truck/crane airwoosh, dive
  whooshlong).

★★★★ **RULE 46 — THE VIEWPOINT TRAVELS (user, 2026-10-07, 027: "right now it feels like the viewer just stays on the same
scene but the visuals simply change. It's supposed to feel like the place that they're watching the visuals from is
changing, not just the visuals themselves. I need you to clearly specify that in the style rules … Look at past 100bps
videos as examples of this fluid camera motion.").** Inside a set, the CAMERA moves to each new thing; things do not swap
in and out of a fixed frame.
- **Each set is a PLACE, larger than the frame.** Every sentence's object has its own spot in that place: beside, below or
  above the last one. Objects stay where they are; the camera TRAVELS to them (a pan, a tilt or crane, a pull-back, a
  push-in), so what the viewer sees passing by is the place itself. A thing that physically moves (a bottle carried to the
  beaker, a crown lowered) still moves, and the camera follows it there.
- **The camera goes where the voice points** (100bps' `Cam` keys, V12/V33): one key per sentence at most, placed on the
  sentence's own words; moves of 30–50 f on the in-out curve (0.45, 0.05, 0.35, 1); keys never overlap; lateral travel is
  preferred (it reads as moving through a place and it keeps the readable lines inside the safe zone).
- **The picture never parks:** between keys the camera keeps a slow creep (the push-in) and drifts on unrelated sines
  (±6 px x, ±4 px y, as 100bps' `Plx`).
- **The place shows that it is a place:** each set has world-fixed surroundings (a floor or ground line, a wall with
  panels or tiles, a desk, a backsplash) and a far backdrop layer drawn at PARALLAX depth (~0.6), so a camera move reads as
  the viewpoint moving through space, never as the picture sliding.
- An entrance from off-frame is reserved for things that really ARRIVE (a hand reaching in, a tube dropped onto a shelf);
  an object that is simply THERE is revealed by the camera, not slid in.
- The captions stay screen-fixed in their set's panel (outside the camera), as do the sets' hand-overs (026's).
- The camera's own travels are scored with `airwoosh` (100bps' family for camera moves), cut when the move stops.

★★★ **AND (same message): "do not include any AI text with the dots in between the words at all."** No on-screen text
ever uses a middle dot "·" (or any dot or bullet) as a separator between words or phrases: not in sub-labels, not on
objects, not in captions. Split with a comma, a second line or a colon instead ("Forbes, 5 Mar 2019"; "Kylie Lip Kit" /
"launched 30 Nov 2015"). Abbreviations are set without dots on screen too ("SEC", not "S.E.C."). This applies to every
OffCamCelebs video from now on.

★★★★ **RULE 47 — ONE THING TO READ AT A TIME (user, 2026-10-07, 027: "some scenes still simply have too much information
on them. Fix that").** Rules 2 and 18 (low density; items replace, they do not accumulate) were being met by GROUP count
while the frames still asked for too much reading: a dial with five numbers, a beaker with four graduations plus a year
plate, two-line source labels, two speech bubbles plus a lamp. From now on the budget is counted in THINGS TO READ:
- **At rest, the frame is the caption plus ONE hero object** (and at most one object it acts on or with). Everything else
  the place holds is out of frame, because the camera has moved on from it (rule 46), or it has left.
- **At most THREE readable items besides the caption**, each tick number, plate, price tag, sub-label LINE and bubble
  LINE counting as one. The usual three: the figure on the object, one short label, one source line.
- **A source line is ONE short line** (publisher, date): "Coty investor deck, Nov 2019", never a second line of
  qualifiers. The qualifiers belong in the post caption (the disclosure rule).
- **A scale or a dial carries only the marks its sentence needs**: its ends and the one value being read, not a number
  on every graduation.
- **Nothing on screen repeats the caption while the caption is up**, unless the object IS that figure (a price tag).
- **A maker's name printed ON its product is the object, not a thing to read** (KYLIE SKIN on the pump bottle, COTY on the
  buyer's cuff: the process rule wants a recognisable real object with its maker's label). Each is DECLARED in the probe's
  BRAND list with its reason and reported with its frames, never silently skipped. A magnifier's copy of a print is the
  same thing to read, counted once.
- **Measured, not eyeballed:** `probe027.mjs` INFO counts the readable text items on every settled frame (canaries: G with
  four labels must be flagged, its twin H with three must count exactly 3) and fails the run over budget; DENSITY still
  counts object groups (≤ 3). 027's first count: compact 4, skincare 11, envelope 5, fair 9, verdict 7 → all ≤ 3.

★★★★ **RULE 48 — EVERYTHING EASES IN AND OUT (user, 2026-10-07, 027: "the animations and transitions still don't smooth in
and out enough, enforce that further").** Every movement, fade, count and camera move STARTS FROM REST and SETTLES TO REST.
No curve may start or end at speed, and none may overshoot. This supersedes rule 45.5's back-out entrances (overshoot 1.2),
045's ease-out counters, the quad-out caption word-in, and the dive hand-over, which accelerates into its switch and opens
at full speed.
- **The curve test, on every easing the kit uses:** its speed on the first and the last frame is ≤ 15% of its peak, and it
  stays under half its peak for ≥ 15% of its run at each end (a soft shoulder, not just a zero slope). No overshoot.
- **The only exception is an EXIT that leaves the frame**: it may accelerate out (ease-in), because its fast frames are out
  of view. Each one is declared in the audit with its reason. A fade to nothing in place is not an exit; it eases in-out.
- **Durations:** a move or an entrance takes ≥ 12 f, and a fade ≥ 10 f, so the shoulders have room.
- **Hand-overs are trucks and cranes on a long in-out**, a frame-width plus gap (≥ 44 f) or 1600 px (≥ 48 f). No dives.
- **Measured:** `curves027.mjs` audits every easing and every `ramp(…)` in the kit (canaries: a back-out and an ease-out
  must fail, an in-out must pass). `fluid026.py` runs at tightened limits (JOLT/STOP ≥ 30% of peak) over every action,
  and over every hand-over as well.

## ★★★★ 2026-10-05 — A NEW HOUSE STYLE, COPIED FROM THE REFERENCES IN `OffCamCelebs/temp/` (rule 40, SUPERSEDES THE LOOK BELOW)
_(Its MATERIALS, type, captions and motion are superseded by RULE 45 above, 2026-10-07; its content rules still stand.)_

**The user (2026-10-05, Video 025): "I want you to change the style of these videos completely. Completely analyze and
try to copy the style of the videos that I put in the temp folder [OffCamCelebs/temp]. Look through a high number of
frames for each video since I need you to understand the animations as well. Then once you have the style, change this
video's style to it, and replace any visuals so that they fit the style as well."**
- The four reference videos in `OffCamCelebs/temp/` are now the authority on LOOK and MOTION for OffCamCelebs. The
  measured spec is written in the section below this one as soon as the analysis is done (frames at a high rate, every
  video, animations included).
- "TERMINAL" / NOIR / the Bankers journey (rules 35–38) are SUPERSEDED as the look. The PROCESS rules (the VO pipeline,
  the mix, the guards, the probe, never render unless asked) and every content/accuracy rule still stand.
- Visuals are REPLACED to fit the new style, not reskinned: if an object does not belong in the reference style, it
  goes.
- 025 is the first film rebuilt in it.

★★ **AMENDED BY THE USER, 2026-10-05 (025): "make the style more modern, the visuals should look a little more 3d like
100bps, and shiny."** The flat-vector objects of item 7 gain 100bps' MATERIAL: a solid's depth faces at one fixed
offset, gradient-lit faces, rim and specular highlights, and glossy floors with reflections. A gentle Turn gives the
scene real 3-D. It stays "a little": the palette, type, grounds and grammar of rule 40 are unchanged. The numbers are in
the changelog entry of the same date.

★★ **AND (same day): "the visuals that arrive on scene, with their animations, should smooth into place more. Right
now they simply abruptly stop when they get to the target position."** Every arrival settles on a long geometric
tail, as 100bps measured its own: per-frame travel decays by a constant factor, so a move is still visibly easing
in a second later and never brakes in its last frames. No arrival may be shorter than ~30 f.

★★ **AND (same day): "more visuals, meaning that some scenes need to have visuals like the coin, but something larger
that is also relevant and that looks good. I don't mean like charts."** A scene carried by text or a small document
(the hook's counter, the three Wikipedia cards) gets a LARGE hero object, as big and solid as the $1 coin. It must be
the literal thing its sentence is about (rule: a reason a viewer gets in three words), never a chart, and never a repeat.
The document stays as the source, smaller, beneath it.

★★ **AND (same day): "in general, most elements like even the text in the hook should have an entrance
animation."** Nothing simply exists when its scene arrives. Text (the hook's quote, its attribution, every sub-label,
reading and date), documents (the Wikipedia cards) and secondary parts enter on their own: a settle-in rise with a
fade, staggered after the scene's own arrival or keyed to their word. Only an object riding its scene's hand-over
may arrive with it.

★★★★ **WHAT THIS STYLE IS — THE OPENING OF 025 IS THE REFERENCE (user, 2026-10-05: "I don't like the visuals around
the 29 second point because it reminds me too much of the previous style we had, which I didn't like. However, I do
like the style and visuals closer to the beginning of the video. Focus this style's rules more on those types of
visuals/animations.").** The 29-s scenes were the Wikipedia article crops: screenshots of text with brackets,
selections and lit phrases. The opening the user likes is the hook's quote and cash cube, the name on its plinth, the
$1 coin, the vault, the gears and the gauge. So:
- **Every scene is ONE LARGE, LITERAL, SOLID OBJECT** (the solid material: depth, light, shine), as big as the $1 coin
  or the safe, centred in the object band. It stands on a glossy floor with its reflection, or hangs or floats in the
  open ground.
- **The object ACTS on the sentence's words.** The coin rolls in and stands on its edge; the safe's door swings open on
  empty shelves; the gauge's needle dips; the cash drops away; the cap drops onto the plinth. It does not merely sit
  while text changes around it.
- **Words on screen are part of the object:** a plate, a tag, a face, a counter, the narration as caption. A short
  sub-label (a date) may sit beneath it.
- **NOT this style:** screenshots or crops of documents, articles or web pages; brackets, highlights or selections on
  text; small evidence cards; anything whose subject is a page of text. Those were the previous style.
- The rest of rule 40 (grounds, palette, type, the caption, the hand-overs, entrances, settling) serves this.
- ★ **The verdict is an OBJECT too** (same day: "replace that Inflated sign towards the end of the video, come up with a
  style for it that better matches my preferences and the rest of the video. Again, forget about the previous style we
  used to have for videos completely. This new style should look different."). It is not a flat rubber-stamp mark. The
  rating arrives as a large solid object of its own, acting on "Our rating: inflated".
- ⚠ **FORGET THE PREVIOUS STYLE COMPLETELY.** Its devices (flat stamp marks, document crops, evidence cards, tier
  pills, mono strips) are not reached for, even where a brief asks for one. Find the object instead.

★★★ **RULE 42 — EVERY VISUAL IS CORRECT UP CLOSE (user, 2026-10-05: "You always need to ensure that every single
visual in this style actually makes sense and is visually correct. For example, in the thermometer scene, the visual
doesn't look perfected as theres sort of a visual bug at the bottom. Never let these small mistakes go past any sweeps
or checks without being detected and fixed.").**
- Every object is inspected at FULL resolution, part by part, before a handback: where parts meet (a tube into its
  bulb, a handle into its head, a door into its frame), where a filter's depth falls, and where a highlight or fill
  overlaps an edge.
- The checks (probe, captions, jitter, sweeps) are not the inspection. A shape glitch is invisible to all of them. The
  standing tool is the close-up sweep (`closeups.mjs`): every hero at rest, cropped 1:1, looked at one by one.
- Any glitch found is a defect, fixed before handback, and its CLASS is searched for in every other object.

★★★ **RULE 44 — WHEN A BRIEF'S TEMPLATE CONTRADICTS THE HOUSE STYLE, THE HOUSE STYLE WINS (user, 2026-10-06, 026,
answering three questions about the "Click the Footnote" brief).** The briefs still carry the old template's blocks; for
each, the user chose the house style:
- **A WIKIPEDIA (or any web page) MOMENT IS SHOWN ON A SOLID OBJECT** ("Page on a solid object"): the live page appears on
  a real 3-D object in the house material (a laptop on the set, a monitor, a printed sheet on a desk), with its text
  VERBATIM from the live page. A cursor clicks and the page scrolls ON THAT SCREEN. Never flat crop cards, brackets, or
  page-as-the-whole-frame composites. Even when the brief says "this video IS the format", the page lives inside an object.
- **MATERIALS ARE 025'S 3-D, SHINY LOOK** ("025's 3-D, shiny look"), even when a brief carries a matte / flat / "Bartlett
  build" block that bans gloss and reflections.
- **CAPTIONS USE THE HOUSE INK** ("House style ink"): dark ink on cream scenes, white on dark. A brief's "solid white" is
  not followed. This closes the question open since 025.
- (Already standing, re-applied:) a real photo is LARGE and in FULL COLOUR, whatever "small, desaturated" a brief says.

★★★ **RULE 43 — SFX, MANY, IN THE 100bps / BANKERS MANNER (user, 2026-10-05, 025: "overall, there should be more sfx,
but sfx like the ones used for 100bps or bankers").** This ENDS the channel's no-SFX policy (rule 40.12's "not yet
adopted", and the 2026-09 notes that OffCamCelebs has no SFX).
- **The palette is the studio's existing pack only:** the swoosh family (swoosh, whooshlong, whooshsoft, airwoosh,
  lowwoosh), data / datamid / datashort, chain / chainshort, sub, ping / pingshort, tick, click, flick, coin, ding,
  bloom. Never riser or glide, never a new file. The files are copied into each video's `public/sfx/` (they are the
  studio's own pack, not a channel's branding).
- **Family per job, as in 100bps (V9) and Bankers (STYLE §11):** a whoosh on every hand-over, rotating families and
  sized to the move (a push takes swoosh or whooshlong, a collapse whooshsoft, a zoom-through airwoosh, the verdict
  lowwoosh). Context sounds only for actions visible on screen: a sub under a big solid landing, a click where a part
  seats, a chain rattle under a mechanism, flicks for labels and readings dealt in, ticks for counted items, coins
  when money moves, one quiet ping per marked moment at most, the data texture rationed to a value being COMPUTED.
- **Every sound is timed by its animation's own window:** a move's whoosh peaks on its FASTEST frame, a hit at the
  moment the eye sees the landing, a process sound runs exactly as long as the motion it describes. Nothing on the
  narration caption (rule 40.12: the references never score the words); type that appears ON an object (a plate typing,
  a card's count) is the object acting and may tick.
- **Levels are measured, never guessed:** the SFX stem is rendered alone, its heard peaks set against the 100bps /
  Bankers band, and the voice stays dominant in every window.

★★ **AND (same day): "some of the animations that the visuals have aren't really fluid or smooth enough. Fix that."**
Every in-scene ACTION (a needle dipping, a door swinging or sliding, a tag falling, a gavel lifting, a liquid draining,
a badge turning) starts from rest SOFTLY and settles on a long tail: it never starts at full speed (SETTLE's and a
linear ramp's first frame are their fastest, a jolt when the thing was standing still), never stops dead, and has
no velocity break where one phase hands over to the next. A fall accelerates and lands; it is never a constant-speed
slide. Measured, not eyeballed: the fluidity scan judges every action's speed curve frame by frame.

★★★ **RULE 41 — NO TWO SCENES EVER INTERSECT (user, 2026-10-05: "Add a rule: None of the visuals from different scenes
should intersect, not even when one is fading out and the other fading in.").** In no frame may any visual of one scene
share ground with any visual of another: not while either is fading, dimmed or defocused, and not for a single frame.
- A hand-over keeps the two scenes apart IN SPACE (a push: two panels side by side, each clipped to its own frame) or
  IN TIME (one is fully gone before the other's first pixel).
- Blur, low opacity and "it's only a transition" are never excuses.
- The probe enforces it on every frame: cross-scene pairs are judged at any visible opacity, sharp or blurred, on boxes
  clipped to their own panel.

★★ **AND (same day): "overall, the visuals are quite good right now, but more effort should be put into some of them
(the more complex ones), as they need to be detailed and look good."** A complex object is built with the parts the
real thing has. The safe's hinges, bolts, dial and handle; the gauge's bezel, glass, numerals and screws; the board's
frame and mounting; the lamp's shade, bulb and cord. Its silhouette alone is not enough. The test is a close look at a
still: every part a viewer would expect is there and finished.

### Rule 40 — THE MEASURED SPEC ("EDITORIAL PURPLE")
Measured 2026-10-05 from all four references (full reports and 100 keyframes: `OffCamCelebs/styles/ref40/v1–v4_report.md`
and `v1–v4_keyframes/`). Numbers are at 1080×1920 (the references are 720×1280; ×1.5). Where the four disagree, the choice
is stated.
1. **Two grounds, flipped at most hard cuts** (about 60% cream, 40% dark).
   - Cream paper **#F9F7EF**, with a soft radial vignette to about #DCDAD2 in the corners. The heavy vignette of refs 2 and 4
     is halved, because refs 1 and 3 have none.
   - Deep aubergine **#2A0B46**, centre to #200736 at the edges.
   - No background grain or pattern. Grain is static, inside object fills only.
2. **One palette.**
   - Aubergine #260C42 for shapes, silhouettes, dark UI and callout circles.
   - Text ink #1C0830 on cream; #FFF1FF on dark.
   - Lilac #A880C0 (primary), lavender #C3A6D1 and #D4A0F3, pale #EADDF2, violet #752E9F and #9B66BC, muted violet-grey
     #77698A.
   - Neutral greys for metal (#818181 safe, #646464 body, chrome #DDDBD6), with two diagonal white gloss bands on metal
     and glass.
   - At most ONE extra accent per shot (magenta #CA3AF1). Real-world colours only on the object that needs them (money
     green #75B468, gold #E6AC15).
3. **Type: Inter only, in two tiers.**
   - A small *Italic 400* lead-in (≈66 px measured; **68 px in our films**, the brief's caption floor) over a large
     **ExtraBold 800** payload (≈96 px; fitted down to ≥72 px for long payloads). Tracking −1.5%, leading ≈1.0.
   - The lines are STAGGERED: line 2 is offset 0–160 px right of line 1, or the block zig-zags.
   - Mixed lines are allowed ("*That name isn't* **random**").
   - No box, stroke, shadow or colour highlight: emphasis is weight and size only.
4. **The narration IS the caption** (there is no subtitle track).
   - Blocks of 1–7 words, at most 2 lines.
   - Each word fades in 0→1 over **8 frames, linear**, at its spoken onset. It is invisible before.
   - The whole block is replaced in **1 frame** when the next block starts.
   - Placement: a top band (y 340–600) over illustrations; centred (y≈45%) on text-only cards; some blocks ride IN the
     world (on an object's screen or face) and move with the camera.
5. **The camera is dead still between moves. There is NO drift, breathing, shake or Ken Burns.** This SUPERSEDES rule
   36's breathing camera. Moves are short and decisive, with a 2–5 f wind-up and a long settle, and never overshoot:
   - house curve `Easing.bezier(0.33, 0, 0.05, 0.9)`; zooms interpolated in log scale;
   - push-ins ×1.5–1.7 over 21–37 f;
   - pull-back reveals ×0.4–0.75 over 31–66 f;
   - pans and tilts of about one screen over 23–44 f;
   - **cut-to-macro**: open a shot at 2–3× and settle to 1× with expo-out over 12–20 f;
   - re-frames on one illustration: jump about 35%, then settle over 20–30 f;
   - occasionally, a move accelerates INTO the hard cut.
6. **Transitions** — ★★ AMENDED BY THE USER, 2026-10-05 (025, after the first rule-40 cut): **"smoother and better
   transitions"**, then **"some of them should be directional, like in 100bps"**. The references' hard cuts are no
   longer the grammar between shots. Transitions are SMOOTH MOTION, and a share of them are DIRECTIONAL handovers in the
   100bps manner: the outgoing set accelerates away in one direction and the incoming set arrives from the other side
   and settles. The rest are other smooth, motivated moves. Never dissolves or flashes. The measured numbers are logged
   in the changelog entry of the same date.
   (Originally measured: hard cuts only, 0–8 f before the sentence's first word, usually flipping the ground. One set may
   carry 2–4 sentences through camera moves.)
   ★★ **AND, THE SAME DAY: "Overall, make the animations more seamless, fluid, and smooth."** This applies to every
   movement, not just the transitions: arrivals, exits, camera, caption hand-offs, in-object actions. No velocity breaks
   (a move must not stop dead, or start at full speed, where it hands over to the next), longer and softer eases, and no
   snap-on states. The numbers are in the changelog entry of the same date.
   - **Text-only "breather" cards** (0.6–2.6 s) mark the chapter turns, 3–5 per film.
   - ★ (025) The breather's line lives ONLY in its own shot: it goes with the cut out of it, and nothing else is set on
     the card. Left up for the 6 f before the next sentence, it sat under the verdict's landing coin.
   - ★ (025) Nothing crosses the caption band, not even in motion. A drop starts just above its landing point with a
     fade (a long fall goes through the words). A cut-to-macro's START view keeps the object's top below y 570.
7. **Objects: one LITERAL object per clause, entering on the noun that names it.**
   - Flat vector illustration, side-on or slightly in perspective, with 2–3 tone shading and rounded corners. Built in
     real detail (rivets, hinges, keypads), never a placeholder.
   - Big (50–100% of the width), often cropped by the frame edge, standing on a floor or horizon line, with soft contact
     shadows or reflections.
   - Entrances, all with no overshoot or bounce:
     - slide in from off-screen with expo-out, 8–30 f;
     - drop and lock;
     - grow up from the floor;
     - pop (scale 0→1 in 5 f).
   - Staggers of 2–28 f.
   - Objects mostly stay until the cut.
   - Secondary loops keep holds alive only where the object itself is alive: fans, cursors, tickers.
8. **Cadence: secondary animation steps on twos** (15 fps: object moves, word fades, counters). Camera moves run on
   ones. This follows ref 2; refs 1 and 4 step everything.
9. **Devices.**
   - Counters ease out (16–42 f) and land hard.
   - Slot-reel digits; typewriter text inside objects (1.5–2 f per character, block cursor).
   - Draw-on lines (10–30 f); dashed leader lines.
   - A callout magnifier circle with a translucent lavender cone to a dot.
   - Spotlights and lamp beams; a magnifier "x-ray"; a viewfinder reticle; dark UI pills and cards (radius 12–24 px) with
     thin connectors.
10. **People.** A real cut-out photo (colour) for the introduction. After that, a B/W circular avatar with an aubergine
    ring is used as a token. No photo is ever drawn as a "face goes here" box.
11. **Ending.** The thesis object holds, and the film ends 0.3–0.6 s after the last word. NO CTA graphic, logo,
    watermark or handle on any frame.
12. **Sound in the references** (★ SFX ADOPTED 2026-10-05 in the 100bps / Bankers manner, RULE 43 above; the bed level is
    still an open question):
    - a beatless bed 10–16 dB under the voice (ours sits 5.5 dB under);
    - short literal SFX on object actions (ticks, clicks, thuds, whooshes on camera moves), never on the text.

## ★★★ THE HOUSE STYLE — "TERMINAL" (SUPERSEDED 2026-10-05 by rule 40 above — kept for history)

**Locked 2026-09-02 at the user's instruction: "fully save and remember this style for now."**
This section is deliberately self-contained: a fresh session should be able to rebuild the look
from here without reading the changelog. The numbered standing rules below add the reasoning and
the history; where they disagree with this section, this section is current.

> **★★★ READ RULE 20 FIRST (2026-09-03, Video 006).** Terminal's *geometry* has since moved to a
> **3D treatment** — extruded slabs under one warm key, a camera that never stops, and a beat
> transition that travels in Z. Everything in this section still holds EXCEPT §1's two cool
> lights, §4's flat panels, and §5's 2D push, all of which rule 20 replaces. **006 is the newest
> reference implementation — clone it.** 005 remains the reference for the flat cut.

> **★★★ AND RULE 37 FOR COLOUR (2026-09-27, Video 021): the NOIR palette.** One near-black room,
> one neutral platinum key, graphite / platinum / cool paper, and ONE accent (violet, the claim
> only). It overrides every colour value in §1 and §2 below. §2's tier SYSTEM stands; its hues do
> not. Clone the palette from `021-martell/src/audit/theme.ts` (`N`).

⚠ **SUPERSEDED:** the NEWSPRINT look (warm paper, Playfair Display, square corners, hairline
rules, desaturated photos) and the DARK INVESTIGATIVE pilot. Both are kept below as history.
Do not resurrect either. Rules 1 and 8's desaturation clause are dead; 1b and 8f replace them.

### 1. The ground

| token | value | use |
|---|---|---|
| `paper` | `#0B0E14` | the ground |
| `paperDeep` | `#070A0F` | insets, photo wells |
| `card` | `#141922` | a panel |
| `cardHi` | `#1B2130` | a panel above a panel |
| `ink` | `#E8EDF7` | reading colour |
| `inkSoft` | `#9AA6BC` | secondary |
| `inkFaint` | `#5F6B80` | labels, credits |
| `rule` / `ruleSoft` | `#232B3A` / `#1A2130` | 1px borders, dividers |

Behind everything: **two slow radial lights** drifting on mismatched periods (250 / 305 / 190
frames, deliberately not harmonic so they never visibly sync) over a **static 60px grid** at 28%
under a radial mask. The per-scene camera push drives the LIGHTS. ⚠ Never the grid, never the
content — see rule 13c.

### 2. Tiers — the brand, unchanged since 001

`CLAIMED` violet `#A78BFA` · `VERIFIED` blue `#5EA9FF` · `ESTIMATE` slate `#8A94A6`, **dashed
edge** · `ALLEGED` `#FF7A6B`. Tags are pills with a live dot. **No yellow anywhere.** A tag says
the tier and nothing else — no dash-qualifiers (rule 2c). Verdict stamp `#C98A2B`.

**Each video gets ONE recurring motif in its own ink, chosen from what the finding turns on:**
004's was the YEAR (teal) because the gap was with the calendar; 005's is THE CENTS (teal)
because what settles it is the court record. The motif is never a tier colour.

### 3. Type

- **DISPLAY — Space Grotesk 500/700.** Headlines, figures, hero numbers. ⚠ No serif, ever: a
  Didone is the loudest possible "newspaper" signal.
- **BODY — Inter 400/500/600/700.** ⚠ Load only the weights used; a stray `fontWeight: 800`
  silently synthesises.
- **MONO — IBM Plex Mono 400/500/600.** Every label, tag, credit, docket line and caption strip.
  Mono IS the techy register and carries more here than in a normal design.

Scale ladder, after the 2026-09-02 pass (rule 16) — this is a phone at arm's length:
micro labels **26–29** · body **38–42** · sub-heads **46–52** · headlines **58–75** ·
hero figures **84–96** · **caption 54**.

### 4. Geometry

Radius: panels **14**, plates **12**, tags **pill**, bars **4**.
Content column **984** (1080 less a 48px margin). Content band **y 230–1450**, optical centre
**y 840** — every beat centres there. Caption slot `bottom: 200`, max-width 980, centred.
Photo plates **620–740 wide** (a plate is the most entertaining thing on screen), sized so the
**window follows the SOURCE's aspect** (rule 8g), on `card` with a 10px surround, a 1px border
and a mono SOURCE strip beneath.

### 5. The motion system — the part that is hardest to rebuild

**Two easings, and using the wrong one is what makes motion look buggy (rule 13a):**
- `EASE` = bezier(.16, 1, .3, 1) — a long-tail settle. For a POSITION something travels from.
- `GROW` = bezier(.4, 0, .2, 1) — **zero slope at the start**. For **opacity, width, height,
  scaleX, crossfades** — anything whose visible value starts at zero. On EASE those are 13%
  through after ONE frame at dur 26, and 55% at dur 7: they pop, then creep.

**`Move`** travels on EASE and fades on GROW, entering and exiting.
**`Reveal`** animates HEIGHT via a one-row grid `0fr → 1fr`, so a stack can grow without any
height being known. ⚠ Its leading gap lives INSIDE the collapsed area — a parent `gap` is still
there at zero height and puts the layout jump straight back (rule 13b).
**A FIXED SET never animates its layout** — render every item from frame one and animate only
opacity and offset (rule 13d). `Reveal` is for stacks whose size you don't know.
**Nothing `return null`s before its cue if it is a flow child** — it renders at opacity 0.
**An entrance offset must be smaller than the gap it travels through** (rule 13e).

**THE BEAT TRANSITION is a PUSH, never a dissolve** (rule 15, adopted from 100BasisPoints):
entrance slides from the right + zooms **0.88 → 1 over 48 frames** on a long-tail ease-out; exit
travels **further and faster** over 22 frames while dimming on its own linear ramp **and
defocusing to 9px blur**. Everything leaves LEFT, everything arrives from the RIGHT — one camera
panning a strip. ⚠ 48 frames is not negotiable; a 20-frame version reads as a slide-on.
⚠ Entrance scale 0.88, not Style 3's 0.74 — 0.74 re-rasterises glyphs for 48 frames.
**THE CAPTION NEVER MOVES WITH IT** — it is a sibling of the scene tree, sharp and 100% opaque.

**Handovers in a FIXED SLOT are sequential, not dissolved** (rule 19): two bottom-anchored lines
cross-fading are stacked on each other by construction. Caption: outgoing gone by frame 5,
incoming starts at frame 4. One-slot carousels: ~8-frame low-opacity handover — no legible
double, no hole.

**The final scene runs to `TOTAL_FRAMES` and plays no exit** (rule 14), or the sign-off unmounts
when the voice stops and the outro is blank.

### 6. Density — the budget

Blocks on screen (`density.py` counts them): **≤3 comfortable · 4 busy, only with a hero · ≥5
overload.** Within a beat, **independent items REPLACE — they do not accumulate** (rule 18).
Only items that must be COMPARED stay together. A block that repeats the caption is deleted, not
shrunk. A number that LABELS a picture goes on the picture's strip. A document that establishes a
beat LEAVES before the figures it contains arrive. **Measure the END of a beat, not its middle.**

### 7. Verification — run all four before handback

| script | proves |
|---|---|
| `extents.py` | every beat centres on y 840 (±65). ⚠ v3 uses each ROW'S OWN CONTRAST RANGE — a corner "paper" reference silently false-passes on this dark ground (rule 17) |
| `overflow.py` | nothing inside the 34px side margins |
| `density.py` | blocks per frame, against the budget above |
| `snapscan.mjs` + `snapfind.py` | renders every frame at 0.18 and flags any frame carrying >50% of a 12-frame change at >6× local median — the difference between a snap and a fast move |
| `collide.py` | blocks that TOUCH, and caption-band intrusion. ⚠ It cannot decide general overlap: at any resolution "two elements touching" and "two lines of one paragraph" are the same picture |

Targets met by 005: 0 collisions, 0 overload frames, 9–12 borderline steps, peak frame-to-frame
diff ≈7, text regions stable at 65–68 dB between consecutive frames.

---

## Standing rules

39. **(2026-09-28, Video 022 — USER: "make sure all the fonts are satisfying, that all the texts are
   centered, and that all the visuals are just polished") ★★ A POLISH PASS IS PART OF EVERY BUILD.**
   - **Fonts: one system, three faces, each with ONE job.**
     · Space Grotesk 700 for figures and object titles;
     · IBM Plex Mono 500/600 for labels and sub-labels;
     · Inter 600 for captions.
     No other face appears (captured pages excepted). **Two registers:** object LABELS in caps,
     SOURCE and sub-labels in sentence case. A floor for phone legibility: no label under ~22 screen
     px.
   - **Text is CENTRED:** in its card, on its object, and every sub-label on its object's axis. A
     left-aligned line inside a centred object is a defect. **The exceptions are content with its
     own layout:** a captured web page, and a data label pinned to the end of a chart line.
   - **Polished means checked up close:** a stills sweep at full size, looking for tiny text, crowded
     edges, uneven sizes and anything that reads as unfinished. Not only "nothing overlaps".

38. **(2026-09-28, Video 022 — USER: "Alright so the overall motion of the video looks better and
   smoother now, but the style is still wrong. I want a visual style and look more like the bankers
   style, but with the current normal smooth colors. Try changing it") ★★★ THE LOOK IS BANKERS'; THE
   COLOURS STAY NOIR.**
   - **Approved:** the smoothness of rule 36's motion. Keep its curves, and never go back to fades
     or pops.
   - **The look to take from Bankers** (`Bankers/CLAUDE.md` §2 and §2.5; `Bankers/Videos/Video 1 —
     Micron vs JPMorgan/`, the reference render):
     · **Solid 3D objects:** chunky extruded solids with lit tops and side faces, bars, plinths,
       platforms tilted in perspective and tiled floors, all in ONE material family. Not the flat
       illustrated cards of 012/017.
     · **Depth layers:** each place has a MID construction and a large FG piece, a real object named
       by the line, CROPPED by the frame edge.
     · **One continuous journey:** a camera travels place to place (push, slide), the layers
       parallax, the outgoing place racks out of focus, and things leave by MOVING, never by fading.
     · **Less on screen:** big numbers with ONE short label each, and no dotted fine print (that
       goes in the post caption).
   - **Keep:**
     · the NOIR palette (rule 37: near-black, graphite / platinum, violet only for the claim;
       NOT Bankers' navy and logo blue);
     · rule 32's Reels caption sizing;
     · OffCamCelebs' type;
     · the tier pills;
     · the Wikipedia cards.
   - **⛔ No Bankers BRANDING, ever** (root CLAUDE.md): no logo, watermark, end card or colours. Only
     the visual grammar and the camera engine cross over.
   - **HOW IT IS BUILT (022, the first film in it). Clone `022-cramer/src/audit/`:**
     · **`world.tsx`:** Bankers' pinhole camera, ported with the engine only. Every layer carries
       `data-blur` and `data-moving` for the probe.
     · **`solid.tsx`:** `Solid` (an extruded block), `Extrude` (gives any existing card a raked side
       and lit cap without redrawing it), `Turn`, `FloorPool`, and NOIR finishes (graphite,
       platinum, violet, paper, steel).
     · **`places.tsx`:** one MID and an optional FG per place. The MID is drawn in design units
       through `<Design>`, so rule 32's band mapping is unchanged. The FG is a full-frame SVG in
       screen px.
     · **The place table is in `Composition.tsx`:** the kinds are push, slideR and slideL, each timed
       16 frames before its sentence. Moves are 38 f (push) and 34 f (slide), shorter than Bankers'
       44/40 because a 60-s film changes place every ~3.5 s.
   - **⚠ LESSONS FROM 022'S PROBE (each found by the probe, not the eye):**
     · **A FG piece's TEXT must sit inside the band.** Its shape may be cropped by the frame edge
       (offok); its lettering may not sit under the Reels UI. Tag SVG text with `FgText`.
     · **Tag a FG's drawn `<g>`, never its `<svg>`**: a full-frame svg's box is the whole frame, so
       it "overlapped" everything.
     · ~~A pushed-in FG converges on its MID while far: show it only from `far [1.1, 1.35]`.~~ **SUPERSEDED
       2026-09-28 (the user: the fade "makes it seem like it just popped into the screen"):** a pushed-in FG now
       ENTERS by sliding from its own frame edge in rest geometry (`LayerSpec.enter`, `PARTS[id].side`), so it
       never converges on the MID and never fades.
     · **A place pushed in (W2 at 1.8×) cannot then SLIDE away**: it is wider than a slide's gap.
       Leave it by a push, so it racks out of focus.
     · **A focus-pull wrapper must FILL the frame** (`inset: 0`). A 0×0 box put the `<At>`
       children at 0,0.
     · **The probe judges SHARP pairs only** (defocus ≥ 4 px is exempt, Bankers' own rule) and
       skips anything wholly off-screen. A place mounts 10 f before its move and waits off-frame.
     · **Two labels inside ONE object are not compared by the probe** ("HIS PICKS" ran into "S&P 500
       + DIVIDENDS"). Only the stills sweep caught it.
   - **★★ LESSONS FROM THE USER'S OWN VIEWING (2026-09-28: "theres some wierd block that appears in
     the background at 4 seconds, the animation at 20 seconds doesn't make sense, identify other
     issues like this and fix them"). The probe was CLEAN through both:**
     · **A pushed-in MID arrives from `far [1.25, 1.7]`, NOT Bankers' [1.8, 2.8].** Before the push
       it waits at distance 2.25, where [1.8, 2.8] shows it at ~60%: small, unblurred, and peeking out
       behind the outgoing object as a grey slab with a lit cap. Bankers could afford that because its
       ~880-px MIDs hide what is behind them. Ours often go small → big: a 330-px card in front of a
       680-px browser. The incoming place must MATERIALISE as the outgoing one rushes past the lens,
       never loiter behind it.
     · **Never zoom a chart into its own unlabelled solids.** "Crushing — by less than one point"
       went 3.3× into the bar tops after fading every label. It filled the frame with two
       anonymous purple and white slabs and a 10-px "0.7 PT". **A small difference is shown AT CHART
       SCALE:** the labels stay, a dashed level runs across the two tops, and ONE callout sits on a
       leader. That the columns nearly meet IS the point.
     · **★ A FG OBJECT ENTERS BY SLIDING IN FROM ITS OWN FRAME EDGE, FULLY OPAQUE, NEVER BY A FADE (user,
       2026-09-28: "the visuals that appear on screen in the bottom right or left when there is a zoom in
       transition don't appear smoothly enough. The fade in makes it seem like it just popped into the screen.
       Use another transition that is more seemless").** A pushed-in FG used `far [1.1, 1.35]`, a distance fade
       that fell in the push's last 4–5 frames, so it popped. Now a bottom-right object slides in from the right
       and a bottom-left one from the left, in rest geometry (it never converges on the MID). It rides the second
       half of the push and settles as the camera does. This supersedes the far-fade line below. The same rule
       as leaving: things ARRIVE by moving too.
     · **Watch the film in MOTION, not only per-beat stills.** Both defects lived BETWEEN the 60%
       stills (the block for ~12 frames around a push; the zoom after its beat's still). Sweep with
       continuous frame strips (every 3–6 f) across every transition.

37. **(2026-09-27, Video 021 — USER: "The colours are still all over the place for this style, I
   need them to be more consistent. Choose the right color palette and stick to it. Dark themed
   similar to 100bps") ★★★ THE NOIR PALETTE — ONE PALETTE, EVERY FILM.**
   - **The palette is the `N` export in `021-martell/src/audit/theme.ts`.** Clone it. A film may
     use nothing outside it.
     · **Ground:** ONE near-black room for the whole film (`#0B0C0E` → `#08090B` → `#040405`),
       the same in every scene. Its life is a faint drifting platinum pool and the key cone;
       it never changes hue.
     · **Light:** ONE neutral platinum key (`#E8ECF2`), in the cone and in every material
       highlight. Not warm, not cool.
     · **Solids:** a graphite ramp (`g950 #0B0C0E` … `g300 #959BA3`).
     · **Metal:** brushed platinum STEEL. No brass.
     · **Paper:** cool white (`#EEEFF1` → `#C6C9CE`). No cream.
     · **Type:** `#F3F4F6` on dark, `#15171A` on paper. Captions stay solid white (rule 32).
     · **ONE ACCENT — violet `#A78BFA`, and only for THE CLAIM:** the claim on screen (021: the
       rooftop sign, the $100M+ chip, the bio highlight), the CLAIMED pill, and the verdict that
       judges it (INFLATED). It is the channel's own CLAIMED colour. That makes the film "similar
       to 100bps" in discipline (100bps' one colour is red) while staying its own.
     · **Facts are LIGHT, not a hue.** VERIFIED pills, ticks, SOLD bands, directory heads the voice
       points at, and a film's motif (021: the budget line, the one lit white line in a dark
       tank) are white/platinum. They are told apart by brightness and glow.
     · **ESTIMATE** is graphite with a dashed edge.
   - **⚠ Photographs are the one exception:** evidence is shown as recorded (021: his avatar's
     blue backdrop, the headshot).
   - **The test for any new colour:** can a viewer say in three words why it is coloured? The
     only accepted answer is "that's the claim". Anything else is a neutral.
   - **What this SUPERSEDES:**
     · rule 35's per-scene graded rooms (teal / grey / cold / warmest), its warm key, and its brass;
     · rule 36's line "colour, NOT Style 3's platinum-and-red monochrome";
     · §2's tier hues: VERIFIED is platinum now, not blue; verdicts take the accent, not
       red/amber;
     · per-film motif inks (teal): a motif is now LIGHT.
     The objects, their detail, the tier pills as a SYSTEM, the type, rule 32's sizing and rule
     36's motion all stay.
   - **A figure is platinum** (021's coach: platinum-grey skin, graphite clothes), as 100bps'
     figures are. It is never a painted skin tone next to neutral props.

36. **(2026-09-26, Video 021 — USER: "I want the style to be more modern and smooth, like 100bps,
   but different in its own way. I want you to try using part of the 100bps style, meaning the
   smooth visuals and transitions, but also keep some of the detail and different types of
   visuals this style requires. Think of the best way to do this and do it.") ★★★ THE HYBRID:
   100bps MOTION, OffCamCelebs OBJECTS.**
   - **Take from 100BasisPoints (Style 3) its SMOOTHNESS, not its look:** the camera behaviour,
     the entrance and transition vocabulary, and the easing and timing that make it feel fluid.
     This is a deliberate, user-sanctioned import, beyond rule 15's single one (the push). The
     root CLAUDE.md line "nothing visual is inherited from Style 3 except the beat transition"
     is widened by this rule for OffCamCelebs.
   - **Keep OffCamCelebs' identity:**
     · the DETAILED, varied illustrated objects of 012/017 (brass, paper, glass, chips, figures);
     · the tier pills and the mono source strips;
     · the graded rooms;
     · the TERMINAL type (Space Grotesk / Inter / Plex Mono), NOT Style 3's Anton / Figtree /
       serif italic;
     · colour, NOT Style 3's platinum-and-red monochrome.
   - **Rule 32 (the Reels sizing) still holds in full.** Rule 35's look stays the base; this
     rule changes how it MOVES.
   - "Different in its own way": the result must not read as a 100bps film with other props. The
     objects, rooms and type say OffCamCelebs; only the motion is borrowed.
   - **HOW IT IS BUILT (021, the first film in it). Clone `021-martell/src/audit/motion.tsx`** and
     follow `021-martell/src/audit/scenes.tsx`'s grammar:
     · **Three curves, never unified:** OUT `bezier(0.17, 0.84, 0.28, 1)` for entrances, INOUT
       `(0.45, 0.05, 0.35, 1)` for travel between rests, IN `(0.55, 0, 0.9, 0.45)` for exits.
       GROW stays for alphas and sizes that start at zero.
     · **One camera over the whole film (`Stage` + `camOf`) that never stops.** Per scene it
       breathes 1 → 1.03 or 1.03 → 1, alternating, so it is continuous at every boundary. On top:
       a 1% creep over the film and a two-sine drift (±8 px x, ±5 px y). The zoom is centred on
       the Reels object band (520, 1020), so it grows toward the band's middle.
       ⚠ 3%, not Style 3's 3.5%. Rule 32's band is the frame here: at rest keep objects inside
       design |x| ≤ 336, y ∈ [−214, 439].
     · **No strip push and no fade handovers. Every object is a CONSTRUCTION** (100bps' Beat).
       It slides in from a side while zooming up from 0.86, settles on OUT over ~40 frames, and
       in the ~18 frames before the next cue accelerates away on IN, growing 10% and fading
       fast. The next object arrives ON the cue, so two things never share ground (rule 28).
       Directions vary within a scene; the last objects of every scene leave LEFT, so a scene
       change still reads as one camera travelling on.
     · **Illustrated solids TURN** (a slow Y-arc, −6° → +4° with a 1° sine, perspective 1800).
       It is gentler than Style 3's −8° → +5°, because these are painted plates, not extrusions.
       **Labels, pills and source strips never turn.** They travel inside the construction's
       `labels` slot, so they move with the object and stay flat and sharp.
     · **A FOCUS PULL instead of a vanish** when something is held in front of a layer that stays
       in the room: the layer dims to 0.1 and blurs 5 px, then comes back (021's plaque in front of
       the lobby). 0.1 is under the probe's visibility floor on purpose.
     · **A warm KEY CONE**, 100bps' volumetric key, alternating sides per scene and blending over
       24 frames with the room crossfade. It cools in a cold room. Strength 0.28, never a hard
       beam.
   - **⚠ THREE THINGS THE PROBE CAUGHT ON THE FIRST RUN (021):**
     · **Two objects that leave at the same time must leave the SAME WAY.** A book exiting
       right crossed a counter exiting left.
     · **The exit GROWS each object about its own anchor, which closes tight gaps** (2 px, a trio
       7 units apart). So in a row that leaves together, the leftmost leaves fastest and the
       rightmost slowest, and every gap widens on the way out.
     · **A vertical exit travels less** (60 design units, not 150), so nothing drifts through the
       caption band on its way out. A label sitting under a row exits in place.

35. **(2026-09-26, Video 021 — USER: "you've altered the style way too much. Look at the style we
   were using in the dan bilzerian video and the raja banks video, and revert back to that style.
   Save my preferences" · "but keep the sizing for the instagram reels viewers to be able to see
   everything properly") ★★★ THE LOOK IS 012 + 017 — THE REELS SIZING STAYS.**
   - **The reference look is `012-rajabanks/` and `017-bilzerian/` (their renders:
     `012-rajabanks/out/rajabanks_audit_REVIEW.mp4`, `017-bilzerian/out/bilzerian_audit.mp4`).**
     · COLOUR-GRADED ROOMS per scene: cool teal-green, warm amber, neutral grey. Not flat ink.
     · RICH, LIT OBJECTS with real material: brass with a metal gradient, paper with a wax seal,
       chip stacks, documents, phones with their screens. The rule-20 3D treatment under a warm
       key, with soft glow accents.
     · Tier pills (CLAIMED / VERIFIED / ALLEGED) and mono source strips.
     · Figures are the rule-of-017 SVG skeleton.
     · Beats change on the rule-15/28 48-frame rigid-strip PUSH.
   - **What this REVERSES:**
     · rule 33 (the 020 brief's "matte, flat, one key, no glow/gloss/metal/gradient") as a look
       rule;
     · rule 34 (the 021 brief's one-easing / 12–18-frame / match-cut / continuous-camera
       motion spec).
     Both changed the channel's look further than the user wants. Briefs that restate them are
     template text, like the overlay line was.
   - **What this KEEPS — rule 32, the Reels safe zone, in full:**
     · captions in y 340–560, ≤ 2 lines × ≤ 26 characters, ≥ 68 px, solid white;
     · every object and sub-label inside x 90–950, y 600–1440;
     · nothing readable under the app's top 270 / bottom 440 / right 130 px;
     · no overlay drawn in the Studio.
     The 012/017 caption slot (small, top-of-frame, full sentences) is NOT restored: "keep the
     sizing for the instagram reels viewers to be able to see everything properly".
   - **The process tooling is not the look and stays:** the measured probe audit, the guard,
     the fact-check and the VO pipeline.
   - **Clone the look's KIT from `017-bilzerian/`** (the newer of the two, with the skeleton
     figures). Take the rule-32 caption pages, the SAFE band and STAGE_X from `020-trump/`.
     Never clone 020's or 021's first-cut objects.

34. **⚠ SUPERSEDED BY RULE 35 (the user, same day: "you've altered the style way too much").**
   Kept as history only. **(2026-09-26, Video 021 brief — "SMOOTH, MODERN — MOTION SPEC FOR
   THIS VIDEO") ONE EASING, SHORT TRANSITIONS, MATCH-CUTS.** Scoped by the brief to 021; ask before carrying it
   to 022. Where it disagrees with §5, rule 15 (the 48-frame push) or rule 28's rigid strip, it
   wins for 021:
   - **One easing family throughout: ease-in-out cubic.** It replaces EASE / GROW / EIN, so no
     long-tail settles and no separate fade curve. Its zero slope at both ends does the job GROW
     did for opacity (rule 13a).
   - **Transitions run 12–18 frames. No hard pops, except the verdict**, which is the one hard
     cut in the video.
   - **Match-cuts between beats:** the last object's shape BECOMES the next object (e.g. a
     tank's outline morphs into a building's window grid). The beat boundary is a morph, not a
     push. Rule 28 still holds: two different scenes' visuals never share ground. A morph is ONE
     object changing, not two overlapping.
   - **Objects enter by sliding or scaling from WITHIN the safe zone**, never from the off-frame
     edges where the Reels UI sits.
   - **Numbers count smoothly, in tabular figures, with no digit jitter.**
   - **Palette:** ink base, bone and ONE accent per scene. The accent alternates between soft
     teal and warm sand across the video.
   - The brief also restates rules 32 and 33 (safe zone, Bartlett materials) as standing. Its
     "preview build carries a safe-zone overlay" is template text: the user's 020 amendment
     stands, so there is no overlay in the Studio, and the check lives in the audit and in my
     `--safe` stills.

32. **(2026-09-24, Video 020 brief — "PRODUCTION FIXES — STANDING FROM THIS VIDEO ON") ★★★ THE
   REELS SAFE ZONE.** The fix for captions and objects cut off in the app. Instagram overlays the
   top **~270 px**, the bottom **~440 px** and the right **~130 px** (the action rail) of a
   1080×1920 Reel. Nothing that must be read may sit there. **This supersedes §4's caption slot
   (`bottom: 200`, 54 px) and rule 30's design band wherever they disagree.**
   - **Captions:** the block sits in **y 340–560**, **at most 2 lines**, **at most 26
     characters per line**. A longer VO sentence is broken across two or more captions, timed
     to their own words. Font **≥ 68 px**, **solid white**, no glow, and no outline heavier
     than 2 px.
   - **Primary objects stay inside x 90–950, y 600–1440** (screen px, after every transform,
     camera drift included). Sub-labels sit **directly under their object**, never below
     y 1440. No full-width strip at the bottom of the frame.
   - **★ NO OVERLAY IN THE STUDIO — AMENDED BY THE USER (2026-09-25, on 020): "what is that red
     stuff around the video? remove that its supposed to be a normal video but things should
     just fit on the screen on insta reels".** The brief's "render a safe-zone overlay in the
     preview build" produced red hatching in the Studio, and the user does not want it. The
     Studio and every render play the NORMAL video. The safe zone is enforced where the viewer
     never sees it: the geometry audit checks every frame, and `still.mjs --safe` draws the
     overlay on my own verification stills only. ⚠ "Before final render" never means
     rendering unasked: the root CLAUDE.md hard rule still holds, and a render still needs
     the user's own instruction.

33. **⚠ SUPERSEDED AS A LOOK RULE BY RULE 35 (2026-09-26): the look is 012 + 017 again —
   graded rooms, lit and glossy materials, glow accents.** Kept as history. **(2026-09-24,
   Video 020 brief — standing) MATERIALS: MATCH THE BARTLETT BUILD (015) EXACTLY.** Matte surfaces, flat colour, **one soft key light**, soft contact shadows.
   Simple geometric objects with clean edges. The palette is ink base, bone and **ONE accent per
   scene**, with consistent object scale across scenes. Motion follows motion-graphics logic:
   eased moves, holds and cuts, not "render" logic.
   - **BANNED:** bloom, lens flares, particles, dust motes, volumetric fog, god rays, chromatic
     aberration, reflections, glossy or metallic materials, photoreal textures,
     gradient-on-everything, and camera shake. That also rules out text glows and glinting
     glass.
   - **If a frame looks like a stock 3D render, simplify it.**

28. **(2026-09-10, Video 009) ★★★ NO TWO SCENES' VISUALS MAY EVER SHARE GROUND — INCLUDING
   MID-TRANSITION.** The user: *"I don't even want visuals from different scenes intersecting
   while one is fading in and the other fading out."* This is absolute, and it **supersedes the
   long-standing convention that transition frames are exempt** (the note in rule 19, and
   `collide.py`'s `TRANS` skip). "They legitimately share the frame during the push" is no longer
   an acceptable answer.

   - **★★ THE TRANSITION MUST BE A RIGID STRIP, and the arithmetic is the whole rule.** A push
     built as "outgoing travels X on curve A over N frames, incoming travels Y on curve B over M
     frames" **cannot** satisfy this, because the separation between the two shots CHANGES across
     the handover and somewhere in the middle they occupy the same ground. 009 shipped exactly
     that mistake first: incoming 430px on OUT_LONG over 48f against outgoing 620px on IN_ACC
     over 22f. Two shots laid on a strip **one frame width apart** and panned past each other are
     ADJACENT, never stacked:

         outgoing tx = −STRIP · p     incoming tx = +STRIP · (1 − p)     separation ≡ STRIP

     so **both ends share ONE window and ONE curve**. `STRIP` = 1080. The scale-down at each end
     contracts each shot toward its OWN centre, which only widens the gap, so it cannot
     reintroduce a crossing. This is also closer to what the Style 3 corpus describes than the
     overlapping version was — *"the outgoing content keeps travelling along the same axis in the
     same direction while the incoming arrives from the opposite edge. One camera move, two
     shots."*
   - **★★ THE SWEEP MUST BE FRAME-FIRST, NOT SCENE-FIRST.** A loop shaped
     `for each scene → for its frames → test its own elements` **cannot see this defect at all** —
     the two scenes are never in the same iteration. It is a blind spot by construction, not by
     threshold, and no amount of tuning finds it. `geom_audit.mjs` now walks FRAMES, gathers the
     elements of every MOUNTED scene, projects each through its own camera **and its own swoop
     offset** into screen space, and tests every pair in the frame.
   - **★ `soft` PAIRS ARE A WITHIN-SCENE CONCESSION ONLY.** A medallion resting on a book, a
     figure standing on a ground line — those are one composition. **No cross-scene pair is ever
     exempt.**

29. **(2026-09-10, Video 009) ★★ NOTHING MAY FLASH PAST — MEASURE LEGIBLE TIME, AND MEASURE IT AT
   FULL STRENGTH.** The user: *"ensure that none of the scenes leave the screen too quickly to be
   processed."* An object the viewer cannot process is a beat that did not happen — the same
   failure as rule 26's invisible prop, arrived at through TIME instead of contrast.

   - **The floor is 24 frames (0.8s) per element**, and `geom_audit.mjs` reports every element
     under it.
   - **⚠ COUNT AT op > 0.55, NOT AT THE VISIBILITY FLOOR.** Counting from 0.12 includes the fade
     tails, so an element that is only briefly at full strength still passes. 009's subscriber
     counter measured 24f that way while being properly readable for barely 12 — it was on screen
     for a third of a second.
   - **★ WHEN THE BRIEF'S TIMING WILL NOT FIT THE TAKE, RE-ALLOCATE AND SAY SO.** 009's brief
     asked for a 2s photo *and* a rolling counter inside one line; the take says that line in
     2.7s, so 2s of photo left ~0.2s for everything after it. The honest split is ~1s photo /
     ~1.2s payoff — not the brief's number quietly starving the rest of the beat.

26. **(2026-09-06, Video 007 v2) ★★★ THE ILLUSTRATED-OBJECT MODE — A STORY TOLD WITH DRAWN
   THINGS.** The rework brief, binding: *"This is a STORY told with 3D illustrated objects, not
   an audit rendered on screen… ONE object per scene, centred, extruded 3D with soft depth and
   glow accents. The object IS the idea. No document cards, no stamps, no case-file framing
   anywhere."* Kit: `007-gadzhi/src/audit/objects.tsx` (signs, billboards, switch, tower, cube,
   crowd-field, skyline, school — and the CHARACTER).

   - **The object carries the argument.** A claim is a neon sign; a correction is the man
     pulling the switch on his own sign; a dissolved company is a tower going dark floor by
     floor (⚠ with dignity — no red); an undisclosed stake is a thin dashed sliver on a huge
     cube marked "?"; a verdict is the same signs floating with NOTHING holding them up. If a
     fact needs a screenshot to land, it belongs to the other modes.
   - **The caption lives in the UPPER THIRD** (clean white sans) and the factual qualifiers ride
     as SUB-LABELS — quiet mono whispers under the object ("all three: his own statements",
     "his own correction"). Tags survive as whispers, not aesthetics. ⚠ collide.py's caption
     check must be FLIPPED in this mode: the intrusion is content crossing UP into the top band.
   - **The palette BREATHES per scene**: ink + green-glow rooms (the glow is `theme.legit`
     #3FD68C used as LIGHT, never as a tier) alternating with lighter warm-grey rooms; the flip
     is the warmest room in the video. Ground modes in the Composition, not per-element colours.
   - **A recurring CHARACTER, not a likeness**: a generic stylised entrepreneur (sharp jacket,
     white tee, glowing green watch) who appears across scenes. The real photo appears ONCE, in
     the hook, and flips into the avatar that carries him from then on.
   - **⚠ Objects must survive their own ground.** The switch drawn in panel-greys VANISHED on
     the admission's grey room — an invisible prop is a beat that does not happen. Draw props in
     brushed-metal lights and check them against the room they stand in.
   - **⚠ The neon dies with the power, in the component** — a `power` prop on the sign, not an
     overlay hack: border, glow, text and date strip all dim together, and the "modest" end
     state is readable without a trace of neon.
   - Hard cuts on the beat grid (rule 25's mechanics) still govern scene changes; word-level
     landings and every measurement habit carry over unchanged.

25. **(2026-09-05, Video 007) ★★★ THE DISCRETE-SCENE MODE — HARD CUTS ON THE BEAT GRID.**
   The 007 brief, verbatim: *"Keep the 100bps-quality rendering — 3D depth, extruded figures,
   warm key light on ink, smooth motion — but build DISCRETE SCENES, not a continuous
   environment. Each beat is its own contained setup with a clean, hard scene change between
   beats. Motion lives INSIDE each scene… Scene changes on the beat grid = the retention
   mechanic."* This is the channel's THIRD mode; kit in `007-gadzhi/src/audit/scene3d.tsx`.

   - **THE CUT IS THE TRANSITION.** No push, no swing, no defocus, no entrance envelope: a beat
     ends on its last full frame and the next begins on the very next frame. The snap scan will
     flag every scene boundary — those spikes ARE the mechanic, not defects. Everything else in
     the frame still never snaps (rule 6 holds inside scenes).
   - **⚠ THE CUT MUST LAND ON A BUILT FRAME.** A hard cut into a scene whose first elements then
     take 30 frames to assemble reads as a broken fade. First elements arrive in ≤12–16 frames;
     slow assembly is reserved for elements keyed to later cues inside the beat.
   - **Each scene owns a fresh perspective container and a scene-local camera** — dolly ends at
     z=0 (rule 22 applies fully in this mode: card layouts, safe box, edge scan), gentle swing,
     per-scene seed and dolly sign so consecutive scenes never share a camera feel.
   - **What carries over regardless of mode:** the Panel material under a fixed warm key, the
     Riser entrance vocabulary (rule 21 axes), rule-23 exits (slide off whole, or 10-frame
     fade), ExtrudedType with the fade-on-the-layers rule, the caption slot, and every
     measurement habit. `ExtrudedType` is inline-block and LEFT-anchored — inside a zero-width
     holder it must sit in a centred fixed-width row or the figure hangs off to the right.
   - **★ Mode choice is per-video and comes from the brief** — 005 flat cards · 006 v2 one
     continuous world · 007 discrete 3D scenes. Nothing about the newest mode supersedes the
     others; the brief names the mode, the kit files carry it.

24. **(2026-09-03, Video 006 v2) ★★★ THE CONTINUOUS SET PIECE — ONE WORLD, ONE CAMERA.**
   The v2 brief: *"The whole video is a single 3D machine… NO discrete card-to-card cuts anywhere
   — the camera travels through one environment start to finish."* This is an ARCHITECTURAL mode,
   not a restyle, and it is the strongest thing this channel has built. The kit is
   `006-brez/src/audit/machine.tsx` (World · Part · Panel) and `parts.tsx`.

   - **ONE `perspective` container for the whole video.** v1 mounted ten `<Stage>` beats and cut
     between them; v2 has a single world and an orbit camera. Every part exists in world space
     for the whole runtime, **assembles when the voiceover reaches it, and then STAYS**. Nothing
     unmounts. What used to be a transition is just the camera continuing to move.
   - **The camera is `{target, yaw, pitch, dist}` and the transform order is fixed:**
     `translateZ(-dist) rotateX(-pitch) rotateY(-yaw) translate3d(-target)`. Written any other
     way the camera orbits the world origin instead of the thing it is looking at, and every
     move slews sideways.
   - **★★ ARRIVE, HOLD, THEN TRAVEL.** One keyframe per cue is the trap: the camera reaches a
     position exactly as the line starts and IMMEDIATELY leaves for the next, so it is never
     parked on the thing it is showing. Emit every key TWICE — arrival, then again partway
     through the beat. A still of the "company accounts" line caught the camera already at the
     storefront before this was fixed.
   - **⚠ LEAD MUST BE SMALL (≈8 frames).** It buys an early arrival at the cost of an early
     departure. At 20 it was more than half a 1.2s search cue. Where one big move follows a short
     cue, let the camera arrive *into* the next line instead (`at: cue + 18`) rather than
     dragging it off the previous subject.
   - **⚠⚠ THE CAMERA CAN ONLY LOOK AT WHAT HAS BEEN BUILT.** In an assembling machine, pointing
     it at a part whose cue has not arrived yet gives seconds of bare structure. The hook's third
     line names the followers and the claim; aiming there produced an empty shot, because in this
     concept the hook IS the intake.
   - **★ THE KEY LIGHT IS FIXED IN WORLD SPACE.** A panel's grade is a constant, not a function
     of the camera — the lamp does not follow you around the room. A moving camera over fixed
     shading is what sells these as objects rather than cards.
   - **★ A SCRIM, NOT A LAYOUT BOX.** A free 3D camera cannot respect the caption's band the way
     a positioned slab could, and a full pull-back legitimately puts the machine behind the type.
     Lift the whole projection (world centred at 42%, not 50%) and lay a soft gradient scrim over
     the bottom. It must be a ramp, never a bar — a hard-edged panel across a 3D shot reads as UI
     pasted over a render.
   - **⚠ RULE 22 IS AMENDED HERE, NOT REPEALED.** In a continuous set the camera is INSIDE the
     machine, so content reaching the frame edge is correct and constant (~55% of frames), not a
     defect. Rule 22's safe box governs CARD layouts. What still applies in this mode: the dolly
     must not magnify past the design framing, and `edgescan.py` is still how you check.

23. **(2026-09-03, Video 006) ★★★ CARDS LEAVE THE SCREEN. THEY DO NOT FOLD AWAY.**
   The user: *"instead of that sort of folding outwards and fading out animation on the screen
   cards I need them to simply and smoothly leave the screen sometimes, and when they don't, I
   need the fadeout to happen so quickly (but smoothly) that it doesn't overlap with the next on
   screen visual."*

   **There are exactly two exits, and the rotate-out is not one of them.** It was removed from
   the kit's API rather than merely stopped being used, because it had crept onto nearly every
   card in the video:
   - **`slide`** — the card TRAVELS OFF FRAME and is gone. **Full opacity the whole way**, on an
     ease-IN so it accelerates away like a real object leaving. Default travel clears a 900px
     slab (±1250 px). Vary the direction — left, right, up — it is free variation (rule 21).
   - **`fade`** — for a card that CANNOT leave because the next thing lands in its slot. **10
     frames**, on GROW. A third of a second is short enough that it cannot still be legible when
     the replacement is readable, and the eased curve keeps it from reading as a cut.

   **★ THE TEST IS OVERLAP, NOT DURATION.** Whatever the exit, the outgoing card must be
   invisible before the incoming one is legible. A 20-frame fade in a shared slot fails this and
   shows up in the snap scan as ghosting — the claim beat's portrait/profile handover measured
   **34.9× the local background**, the largest spike ever recorded on this channel, purely
   because the two overlapped by 26 frames in the same slot.

22. **(2026-09-03, Video 006) ★★★ THE PICTURE MUST NEVER OUTGROW THE SCREEN.**
   The user, on the 3D cut: *"ensure that the visuals don't become larger than the screen itself
   so often."* Measured before the fix: **349 of 2,727 frames — 12.8% — had content touching the
   frame edge.** Three causes, all of them arithmetic, none of them visible in a still of a
   normal frame:

   - **★★ THE DOLLY MUST END AT z=0, NEVER PAST IT.** A camera dolly written as
     `-dolly/2 + p*dolly` is CENTRED on the design position, so it finishes every beat 110–150px
     nearer than the layout was drawn — a 1.11× magnification on everything, permanently. Write
     it as `min(0, -dolly) + p*dolly`: the beat travels *towards* its design framing and stops
     there. A negative dolly (pull-back) then correctly starts at 1.0 and recedes.
   - **★★ THE EXIT PUSH IS THE BIG ONE.** Pushing the outgoing beat +620px through a
     `perspective: 1500` camera is a **1.70× blow-up**, and it ran on every push transition in
     the video. The outgoing beat is already fading and defocusing — it does not need to fill the
     screen to read as leaving. Cap it around **280px (1.23× at full travel, under 1.1× while it
     is still legible)**, and let one of the moves RECEDE on the way out instead.
   - **★★ THE SAFE BOX: NOTHING WIDER THAN 900 IN A 1080 FRAME.** The 90px each side is not
     decoration, it is what absorbs the camera: a slab is rotated a few degrees by the swing and
     projected through perspective, so its DRAWN width always exceeds its CSS width. 960 leaves
     60px and overflows the moment anything turns.

   **⚠ MEASURE IT WITH `scratchpad/edgescan.py`, NOT BY EYE.** It finds content by HORIZONTAL
   GRADIENT — the background varies slowly across x, a slab edge or a glyph does not. Do NOT
   revive the "differs from the pixel at 8,8" test: this ground is a gradient with two drifting
   lights on it, so that comparison is true across most of the frame and false-passes (rule 17).
   **An object deliberately EXITING through the edge is not a defect** — the residue after the
   fix was 2.5%, nearly all of it slabs rotating out on purpose, and that is the floor to expect.

21. **(2026-09-03, Video 006) ★★★ VARY THE DIRECTION AND THE DEVICE — BUT NEVER THE TIMING.**
   The user, on the first 3D cut: *"the new style is absolutely amazing, except for the fact that
   its a little repetitive. I need you to add some variation to the direction of the animations,
   for example, or the type of visual used. The swiftness and fluidity of the video is amazing
   though, keep that."*

   **★ THE THING TO PROTECT IS THE TIMING, NOT THE MOVE.** The fluidity comes from the two
   easings, the 48-frame entrance, the defocused exit and the sequential handovers — those are
   FIXED and identical everywhere. Variation goes on the AXIS and on the DEVICE, never on the
   durations or the curves. Change what moves and which way; never change how fast.

   - **Entrances have a vocabulary, not a default.** A slab may swing in on Y from either side,
     tilt up on X off the floor or down from above, **hinge from an edge** like a door or a lid
     (`transformOrigin`, the most physical of them), rise on Y, or arrive straight out of depth.
     ⚠ The old kit hard-derived the slide from `sign(fromRy)`, so EVERY slab in the video entered
     from the same side. If a beat has two or three siblings, give them different axes.
   - **Beat transitions rotate through a set** — `push` (camera through Z), `swing` (the world
     yaws past), `lift` (the camera cranes and pitches). Same 48/24 frames, same easings, same
     blur ramp; only the axis differs. Consecutive beats must never use the same one.
   - **The camera itself varies per beat:** swing amplitude, bob, and **the sign of the dolly**.
     A beat that PULLS BACK while it assembles is a genuine change of feel and costs nothing.
   - **★★ THE REAL REPETITION IS THE DEVICE, NOT THE MOTION.** Eight beats of
     slab-with-text-on-it will read as repetitive however varied the entrances are. Every beat
     owes the video a different KIND of object: extruded type standing on its own with no slab
     under it, a measured chart, a flat document, a pipeline with connectors, a single register
     with wells cut into it, a split slab, a stack of turning cards. Count the devices before
     handback — if two adjacent beats are both "a rounded box with a sentence in it", one of
     them is unfinished.

20. **(2026-09-03, Video 006) ★★★ THE 3D TREATMENT — TERMINAL'S GEOMETRY IS NOW EXTRUDED AND THE
   CAMERA NEVER STOPS.** The user's direction for 006 was a *"NEW VISUAL STANDARD: the 100bps 3D
   treatment"* — extruded slabs, a continuous camera, a warm key light, physical transitions.
   **This MODIFIES Terminal, it does not replace it.** What survives untouched: the tier system
   and its colours, the type ladder (Space Grotesk / Inter / IBM Plex Mono), the caption slot and
   its sequential handover, the density budget, and every verification rule. What changes:

   - **★ THE SLAB REPLACES THE PANEL.** A block is a real extrusion — a front face plus a rotated
     right edge and bottom edge — not a rectangle with a drop shadow. `src/audit/stage3d.tsx`
     (`Stage` · `Slab` · `DocSlab`) is the kit; clone it. `facing = cos(rotateY)` drives the
     grade, so a slab that turns actually changes value. **That is the whole point** — a shadowed
     rectangle cannot do it.
   - **★ ONE WARM KEY, UP AND LEFT** (`#FFD6A0`), and the ground must agree with it. Terminal's
     two cool lights (blue + teal) under a warm key read as two unrelated pictures glued
     together. Type is **bone `#EFE7D9`**, not the cool near-white, for the same reason.
     ⚠ This is the ONE place rule 4's "no yellow" bends: the key is a LIGHT, never a tier
     colour, never a fill, never applied to type that carries a rating.
   - **★ THE BEAT TRANSITION IS A CAMERA MOVE IN Z, not the 2D push of rule 15.** The outgoing
     world recedes and blurs, the incoming arrives from beyond. The 48-frame entrance and the
     defocused exit are kept exactly; only the axis changed.
   - **⚠⚠ CSS 3D, NOT THREE.JS,** and the reason is written into the kit's header. `@remotion/
     three` needs webpack-override pinning in Studio *and* in every programmatic `bundle()`;
     `perspective` + `preserve-3d` gives a real projective camera, real parallax and real
     extrusion, renders deterministically headless, and costs nothing. Move to Three only when a
     video needs actual geometry — meshes, reflections, cast shadows.
   - **⚠ THE TRADE-OFF IS ACCEPTED DELIBERATELY.** A camera that never stops means glyphs
     re-rasterise every frame — the exact effect diagnosed as "jittery" in 004 (rule 13c). It is
     worth it here, but only with the three mitigations: every moving layer promoted
     (`willChange` + `backfaceVisibility`), the camera **linear** (an eased camera reads as the
     world lurching), and **per-element scale banned on top of camera motion** — one source of
     resampling at a time.
   - **⚠⚠⚠ THE DOLLY IS SCENE-LOCAL AND NORMALISED TO THE BEAT.** Running it off the global
     frame is the trap: the camera never stops travelling forward, and by the last beat
     everything renders ~1.5× oversized and overflows the frame. **Every still of an early beat
     looks perfectly correct**, which is why it survives a stills sweep. `Stage` takes
     `f - scene.start` and `dur`, and a 5-second beat gets the same 220px move as a 17-second one.
   - **⚠ A `translateZ` OUTSIDE A `perspective` ANCESTOR IS INERT AND SILENT.** The first cut of
     the beat transition put the push on a wrapper above `Stage`; it rendered as a bare
     cross-fade and nothing errored. The push is handed to the camera as `pushZ`, in the same
     projection as the slabs.
   - **⚠ NEVER TINT A SLAB `paperDeep`.** A `#070A0F` face on a `#0C0D10` ground is a hole, not a
     slab. An EMPTY slot reads as empty because of the dashed well *inside* it, never because the
     slab itself is unlit. First cut of 006's absence beat was very nearly invisible.
   - **★ THE FLAT DOCUMENT IS THE ONE DELIBERATE EXCEPTION.** Screenshots stay flat, clean and
     ungraded, mounted on a lit slab (`DocSlab`). The flatness is what reads as authenticity
     against the depth — and it keeps the mono SOURCE strip, which is never invented.

1b. **(2026-09-01, Video 004) ★ THE LOOK IS NOW "TERMINAL" — DARK AND TECHY. SUPERSEDES RULE 1.**
   The user: *"change the video style up a bit. Make it look more modern and techy rather than
   old and with a newspaper vibe."* The page is no longer a sheet of paper, it is a dark
   instrument panel:
   - **Ground** `#0B0E14`, panels `#141922` on a 1px `#232B3A` border with an inner top
     highlight — the thing that makes a dark panel read as a surface and not a hole. Two slow
     radial lights drift over a **static** fine grid.
   - **ROUNDED, not square.** Panels 14, plates 12, tags fully pilled. Square corners were the
     newsprint signature.
   - **★ NO SERIF, ANYWHERE.** Playfair Display is the single loudest "newspaper" signal;
     display type is now **Space Grotesk**, body **Inter**, and **IBM Plex Mono carries every
     label, tag and figure caption** — mono is the techy register and does more work here.
     ⚠ Load only the weights you use: Inter is loaded 400-700, so a leftover `fontWeight: 800`
     silently synthesises.
   - Tier colours re-weighted for LIGHT ON DARK; the tier system itself is unchanged, and there
     is still no yellow. The year motif is **teal `#5EEAD4`** with a soft glow — clear of every
     tier and of the gold verdict stamp.
   - **⚠ Every colour comes from the palette.** An inverted white block, a hard-coded
     `#4a6fae`, a `rgba(239,236,227,…)` left over from newsprint — all of them punch a hole in
     a dark page, and one of them put near-white text on a near-white ground.

1. **(2026-08-31, Video 003 — SUPERSEDES the dark rule) NEWSPRINT: A WHITE, NEWSPAPER LOOK.**
   User: "change up the style a little bit — I want it to look more like a newspaper, so white
   themed." The channel field is now warm newsprint `#efece3` (never clinical white), press
   black ink `#14130f`, clippings `#fbfaf6` with **hairline rules and SQUARE corners** (radius
   2, not soft dark-UI radii), and section heads that run a rule off to the right the way a
   paper heads a column. Tier colours are re-weighted for INK ON WHITE — the dark-mode values
   were far too light to read (see the palette below). Red is the spot colour, as in print.
   ~~Superseded: the dark investigative field (`#0d0f13`, evidence-room vignette) used on
   001 and 002.~~ **001 and 002 are already rendered dark and are NOT retro-converted** — ask
   before converting them; the change applies from 003 onward.

8g. **(2026-09-02, Video 005) ★ A PLATE'S WINDOW FOLLOWS ITS SOURCE'S SHAPE — and a cut slot
   means the beat gets REBUILT, not just emptied.** Two things from wiring 005's supplied set:
   - **Check the source's aspect before choosing the window.** The hook portrait arrived 739×415
     LANDSCAPE against a 620×730 portrait window — a cover crop would have shown the middle 47%
     of it. The window follows the file (880×494 landscape; the book's 666×1000 got 520×780
     portrait), and the beat re-centres afterwards.
   - **★★ REMOVING A SLOT IS A REBUILD.** The user cut the two court-document screenshots. Pulling
     the petition out of the ledger left its card as a HEADER OVER AN EMPTY BOX for the whole
     first cue — the beat had been organised around the picture. Rebuilt so the card IS the
     document: both line items ruled in from the start with their figures filling in as the voice
     reads them, which is the evidence feel the screenshot was there to provide. **When a slot
     goes, ask what the beat was using it FOR and build that — do not just delete and re-centre.**
   - And the corollary on credits: the brief specified a CC BY-SA portrait whose licence required
     attribution. The user supplied their own file instead, so the strip reads
     "SOURCE + LICENCE TO CONFIRM" — **never carry over a credit that belonged to a different
     file** (rule 8's never-invent applies to inherited credits too).

8f. **(2026-09-01, Video 004) ★ PHOTOS RUN IN FULL COLOUR. REVERSES RULE 8's DESATURATION.**
   The user: *"there is no color in the images. Fix that."* The ink/bone grade was a NEWSPRINT
   device — it made sense while the page was paper and makes none on a dark panel, where it
   just looks washed. Photos now carry a light `contrast(1.06) saturate(1.08)` and nothing else.
   Everything else about the plate stands: the frame, the mono SOURCE + DATE strip, the year on
   the strip, one photo at a time, slow push only, and a caption strip that is never invented.

8. **(2026-08-31, Video 003) THE PHOTO PLATE — every photo, no exceptions.** Desaturated to the
   ink/bone palette (`grayscale(1) sepia(0.12) contrast(1.16)`) — **no full-colour photos**, they
   break the case-file look and make the video read as a reaction channel. Every photo sits in a
   bone hairline frame with a **mono SOURCE + DATE strip underneath**. The strip is the evidence
   aesthetic, not decoration; it is what separates this from a gossip edit. Held 1.5–2.5s, slow
   push or drift only — **never a cut montage, never two photos on screen at once** (in a
   panning timeline, draw the photo ONLY for the node the camera is on). **No photos in a pure
   data beat** — 003's scale beat stays undecorated so the 380,000-year line lands clean.
   Asset reuse stays banned (rule 1) except the hook portrait, which may return once in the
   verdict. **★ A CAPTION STRIP IS NEVER INVENTED**: where provenance is unknown it says
   "SOURCE TO CONFIRM" and is flagged at review — a fabricated credit would defeat the whole
   point of the strip. Missing assets render a visible dashed PHOTO PENDING block naming the
   file and its job WHILE THE VIDEO IS IN PROGRESS, so nothing ships silently absent.

8b. **(2026-08-31, Video 003) FRAME THE PLATE IN SOURCE PIXELS, NOT WITH `objectFit`.**
   `objectFit` + `objectPosition` + a `transform: scale()` is a two-stage crop and you cannot
   aim it — the first attempt at the stream clip put half a headboard in the plate. Every plate
   now takes `nat: [w, h]` (the asset's natural size) and `crop: {x, y, w, h}` (a rectangle in
   those pixels); the push scales the WINDOW, so the crop stays aimed while it moves.
   **A borrowed frame is cropped down to the subject's own tile** — a two-up livestream's chat
   column, co-host and channel branding all sit outside the plate, so it reads as evidence and
   not as a stream rip. Leave ≥20 source px of margin: a chat overlay bleeds lower than it looks.
   **★ A CLIP'S IN-POINT COMES FROM TRANSCRIBING THE CLIP ITSELF** (`faster-whisper` on its own
   audio), never from guessing at the middle. 003's 31s clip says the line at 19.44s; the plate
   opens at 19.3s. Clips are always `muted` — their audio would fight the voiceover.

8e. **(2026-09-01, Video 004) ★ A PHOTO MUST DEPICT ITS OWN CAPTION — and a LOGO is not a photo.**
   Two things learned wiring supplied assets:
   - **Check what is actually IN the frame before choosing its beat.** 004's slot-2 image was
     wired to "British supermarkets put security tags on individual bottles" and showed neither
     security tags nor Prime — it is an emptied shelf with Gatorade still on it. A picture that
     quietly contradicts its own caption is worse than no picture. Moved to "Aldi sold out in
     half an hour", which is exactly what it depicts. **Where an asset's beat is chosen for you
     by a brief, the brief loses to what the image actually shows.**
   - **A LOGO IS NOT A PHOTO.** Running a corporate mark through the ink/bone wire-photo grade
     and a cover crop makes it look like a badly scanned picture. Marks get their own path:
     contained, on a white ground, grayscale only, and a plate sized to the SOURCE (004's Congo
     mark is 200px, so it gets a 300px plate) rather than to the page.
   - And the corollary for dated assets: **the year strip follows the FILE, not the brief.**
     004's slot 3 arrived named "now 2026" where the brief had assumed 2025.

8c. **(2026-08-31, Video 003) ★ A SCREENSHOT CARRYING A NUMBER IS A NUMBER ON SCREEN.** The
   Real World's pricing page sells at $99/month today; the take on that beat says "$50 a month".
   The screen may be MORE precise than the voiceover, never DIFFERENT from it — so the page
   moved off THE PITCH and onto PEAK, the one beat where the only figure spoken is the
   subscriber count and the page's own "155,000+ members" line supports it. **Read every figure
   inside a supplied screenshot and check it against the cue it will sit under, before wiring
   it.** A screenshot is not decoration; it is a source, and it is quoted the moment it is shown.

8d. **(2026-08-31, Video 003) ★ A PLACEHOLDER NEVER SHIPS — IT IS A NOTE, NOT A VISUAL.** Two
   photo slots (the courts) were never sourced, and the beat had been re-staged around them:
   its own card was pushed to the last second of the scene so a dashed PHOTO PENDING block
   could hold ten seconds of screen alone. When an asset does not arrive, **take the slot back
   out and give the beat its own real visual again** — do not leave the video organised around
   a hole. This is the sibling of the root rule "never ship a placeholder shape for a real thing".

9. **(2026-08-31, Video 003) A TRAVELLING TIMELINE DOLLIES IN BOTH AXES.** A spine at a fixed
   height has to be solved for the TALLEST card in the scene, which leaves every short text node
   with ~600px of blank paper on the other side of the rule — dead space that rule 7 forbids.
   The camera now moves **vertically as well as horizontally**: each card's height is computed
   from its own content and the track is translated so whichever node is live lands on the same
   optical centre, rule and all. One eased diagonal move per beat, on the same 36 frames as the
   pan. Cards also **fade out once the camera has left them** — otherwise the outgoing card parks
   a sliver against the band's edge for the whole of the next beat and reads as a rendering glitch.

   **★ NOTHING LEAVES BEFORE IT IS OFF CAMERA.** The user: *"make sure the picture in the
   [kickboxing] scene doesn't disappear until it is off camera."* Two rules follow:
   - **The step must exceed the card's width, not merely clear the gap.** A 640 step against a
     540 card left the outgoing card 40px inside the frame after its pan had finished, so the
     fade had to do the last of the work. **STEP = card width + ~160** (700 here) carries it
     fully past the edge under its own pan; the fade (next anchor +30, over 16f) then runs on
     something already gone, which is what a fade should be.
   - **★ "THE ACTIVE NODE" IS NOT "THE NODE ON SCREEN" — gate on geometry, never on the index.**
     Drawing the photo only for the active node made it blink out the moment the camera began to
     leave, and it was worse than one frame late: THE EXIT is a 16-frame beat, so `active` had
     already raced on to the node AFTER next while the kickboxing card was ten frames into its
     pan. The test is `nodeX(idx) + cardW > 0 && nodeX(idx) < 1080` — draw it while any part of
     the card is in frame. Rule 8's one-photo-at-a-time then holds **by geometry**: with a step
     wider than the card, the outgoing card is off before the node after next mounts, so two
     photos cannot overlap even if the nodes are re-ordered later.

10. **(2026-08-31, Video 003) THE CLIP HOLD — when a clip must be HEARD, stop the take, don't
   duck it.** The user: *"I want the andrew tate video to play in within this video... and just
   temporarily stop the VO while its playing (with audio)."* Built as a real **time insert**, not
   a duck: the voiceover is cut at a breath, the page freezes exactly as it is, the clip plays
   with its own sound, then the take resumes from the same sample and every frame after is pushed
   back by the hold's length. **Nothing of the take is lost and nothing downstream desyncs.**
   How it is wired:
   - The whole scene graph runs on **VO time** (`vf`), which stands still across the hold. Only
     the page light and the clip itself keep real time, so no frame is ever fully frozen (rule 7).
   - The cut point sits **in a breath between two cues**, and **one frame before the plate begins
     its exit**, so the plate is held mid-hold at its full pose rather than mid-animation.
   - **⚠ Remotion does NOT carry an `OffthreadVideo`'s audio into the mix** (verified: the hold
     probed at -74.7 dB with the video unmuted). A clip that must be heard gets its segment
     **extracted to a wav** and played as its own `<Audio>` in a `<Sequence>` cut to the hold.
     The picture and the wav share one in-point, so they stay in sync. 5-frame ramps at both
     edges — a hard cut into a voice is a click.
   - **★★ CUT A BORROWED CLIP DOWN TO THE SPAN YOU USE, BEFORE WIRING IT.** A raw stream rip is
     variable-rate and Remotion's compositor cannot seek it: the render dies with *"No frame
     found at position"* partway through the plate. A whole-file CFR re-encode only moved the
     failure later (19.6s → 22.5s). What works is a short file that **begins at the in-point** —
     `ffmpeg -ss <in> -t <len> -i src -an -vf "fps=30,format=yuv420p" -c:v libx264 -crf 16 -g 5
     -keyint_min 5 -sc_threshold 0 -movflags +faststart`. 003's is 7.0s / 210 frames. It also
     deletes the `startFrom` entirely, and gets the spaces and apostrophes out of the filename.
   - **★★ `startFrom` IS AN OFFSET ADDED TO THE CURRENT FRAME, NOT AN ABSOLUTE SEEK — wrap the
     clip in its own `<Sequence from={plateStart} layout="none">`.** Bare, at composition frame
     693 with `startFrom={498}` Remotion asked a 31.08s file for source frame 1191 (39.7s) and
     held the last frame: the "video" was a still for its whole run. The Sequence restarts the
     clip's own clock when the plate opens, which is what makes `startFrom` mean what it reads
     like. ⚠ The scene tree runs on VO time and a Sequence runs on real time — they agree only
     while the plate opens BEFORE the hold; re-check if it ever moves after one.
   - **★ NEVER EYEBALL WHETHER FOOTAGE IS MOVING — measure it.** I stacked five plate crops from
     across the hold, read head and mouth differences into them that were not there, and told the
     user it was playing. It was frozen. `ffmpeg -i a.png -i b.png -lavfi psnr -f null -` returns
     **`average:inf` for pixel-identical frames**; anything finite (10-30 dB here) is real motion.
     Crop to the plate first — a full frame's drifting page light hides a frozen video.
   - **Give the clip room to breathe.** The user, after the first pass: *"leave a little more
     space before and after he says it."* A hold cut tight to the sentence reads as a jump-cut
     into a soundbite. 003's runs **0.54s before the first word and 1.30s after the last** —
     he is seen settling into the line and sitting with it. Budget ~2s of pad on a ~2s sentence.
   - **The picture keeps real time across the hold — verify it, don't assume it.** The scene
     graph is frozen, so a still at one frame proves nothing; render four or five across the
     hold, crop the plate and hstack them into one strip. His head and mouth must move.
   - **The clip is mixed by measured dB like everything else — over the SPEECH, not the whole
     segment.** The pads either side drag a whole-file mean ~2 dB low and would set the gain too
     hot. 003's speech is -19.0 dB against the take's -27.2 — 8.2 dB hotter — so it takes 0.41
     gain and lands at -29.7 dB, between the VO line before it (-27.7) and the one after
     (-30.3). Never leave a clip at 1.0.
   - The caption slot carries **his** sentence across the hold, same position and same type,
     transcribed verbatim off the clip's own audio. Most of this audience watches muted.

14. **(2026-09-01, Video 004) ★ A SCENE'S RANGE ENDS AT ITS LAST CUE — SO THE LAST SCENE ENDS
   BEFORE THE VIDEO DOES.** `sceneRange` runs to the final cue's hold, which is where the
   voiceover stops, so the sign-off was unmounting and leaving the outro on a BLANK SCREEN for
   its whole length. The final scene must run to `TOTAL_FRAMES` and must not play its exit.
   `OUTRO_HOLD` is the length of the sign-off on screen, not padding — 004's is 3.6s.

19. **(2026-09-02) ★★ TWO ELEMENTS MUST NEVER SHARE A SLOT — and pixel-scanning cannot tell you
   whether they do.** Asked to guarantee no overlapping elements, the honest finding is that a
   pixel sweep CANNOT decide it: at any scan resolution "two elements touching" and "two lines of
   one paragraph" are the same picture. A 0.18-scale pass reported 119 collisions, every one at
   the measurement floor; re-checked at full resolution they were 1-3px gaps between 14px runs,
   i.e. lines inside a paragraph. **What the sweep CAN decide is whether blocks TOUCH (zero clear
   rows) and whether anything reaches the caption's band** — those two tests are sound, and both
   came back clean. Everything else is a code-level question, and the answer there is a rule:
   - **A cross-dissolve between two BOTTOM-ANCHORED lines in one slot is an overlap by
     construction.** The caption did exactly this: outgoing and incoming both anchored to
     `bottom: 0`, so at 54px with 1-, 2- and 3-line captions they were legibly stacked on each
     other. Handovers in a FIXED SLOT are **sequential, not dissolved** — outgoing gone by frame
     5, incoming starting at frame 4. Still ramped on both sides, so it is not the hard cut that
     rule 13 removed, but the two are never readable at once.
   - **The same applies to any one-slot carousel.** The flip's cards had the mirror-image bug
     after the first fix — a 2-frame window where NEITHER was visible. Aim for an 8-frame
     handover where the outgoing is under ~30% as the incoming rises: no legible double, no hole.
   - ⚠⚠ **SUPERSEDED BY RULE 28 (2026-09-10).** This bullet used to say transitions were excluded
     from the sweep on purpose, because "during the push the outgoing beat is blurred, dimmed and
     travelling out while the incoming arrives — they legitimately share the frame". The user has
     ruled that they may NOT: no two scenes' visuals may share ground on any frame, transition
     included. The transition is now a rigid strip so the question does not arise, and the sweep
     tests cross-scene pairs rather than skipping them.

18. **(2026-09-02) ★★★ WITHIN A BEAT, INDEPENDENT ITEMS REPLACE — THEY DO NOT ACCUMULATE.**
   The user: *"make the video easier to watch and comprehend. Right now its got lots of scenes
   with information overload."* Overload is **countable**, and it has one cause: a beat opens
   with one idea and keeps ADDING, so by its last second the viewer is holding four or five.
   `scratchpad/density.py` counts the SEPARATE BLOCKS on screen — row-runs divided by clear
   background, i.e. how many things you are being asked to read at once. For this channel
   (vertical, watched once, on a phone):
   **≤ 3 comfortable · 4 busy, and only if one of them is the hero · ≥ 5 overload.**
   005 measured **six frames at 5–6**. The rule that fixed them:
   - **Items that must be COMPARED stay together** (the three verdict findings; a liability
     against an asset). **Everything else hands over IN THE SAME SLOT** — fades up, holds its
     line, and is gone before the next arrives. 005's four fairness concessions were a wall of
     four cards; they are now one card at a time in one position.
   - **A supporting block that repeats the caption is deleted, not shrunk.** "Rich Dad Poor Dad,
     1997.", "Real-estate investments held with partners." — the voice already said both.
   - **A number that LABELS a picture belongs on the picture's caption strip**, not in a block of
     its own. "≈1,500 units" moved onto the plate and the beat dropped from 5 blocks to 4.
   - **A document that establishes a beat LEAVES before the figures it contains arrive.**
   ⚠ This is the rule rule 2 ("low density") was always reaching for, but 2 is about how much
   is on screen at a peak and this is about what a beat ACCUMULATES over its length. Measure the
   END of a beat, not its middle — that is where the overload lives.

16. **(2026-09-02) ★★ BIGGER, AND FEWER THINGS PER FRAME.** The user: *"I need everything to be
   larger on the viewers screen. Right now the scenes are too detailed and small. I need larger
   visuals that are more entertaining rather informative."* This is a vertical video watched on a
   phone at arm's length — sizes that read fine on a 27" monitor are genuinely small in the hand.
   The whole channel steps up (`scale_up.py` in `OffCamCelebs/` does the pass):
   - **PIECEWISE, never a flat multiplier.** Micro labels get the BIGGEST factor (×1.42) — a 15px
     mono credit strip is what actually disappears on a phone, and it is where this channel's
     credibility lives. Heroes get the SMALLEST (×1.10), because a long numeric like
     "$1,200,000,000" is already near the frame width and scaling it runs it off both edges.
   - **Content column 984px** (1080 less a 48px margin each side); **photo plates 620–740 wide**,
     up from 400–520. A plate is the most entertaining thing on screen and was running at half
     the frame width. **Captions 44 → 54px.**
   - **★ "LARGER" ALSO MEANS "FEWER".** Scaling a dense beat just makes a dense beat that
     overflows. 005's five fairness cards became four (one restated the card above it), and any
     beat that would not fit at the new size loses a line rather than shrinking back.
   - **⚠ WHAT MAY NEVER BE SHRUNK TO MAKE ROOM:** the Australian-subsidiary scope banner (004),
     the "his company / not him" distinction (005), the caveats in full, and any licence
     attribution. Those are accuracy requirements, not decoration — cut something else.
   - **After any scale pass, check BOTH overflows** (`scratchpad/overflow.py`): off the side
     edges, and down into the caption. Neither shows up in a centre-of-mass check. 005's judgment
     docket ran off both edges at the new mono size and had to lose the judge's name.

17. **(2026-09-02) ★ A MEASUREMENT TOOL PORTED ACROSS A RESTYLE MUST BE RE-CHECKED AGAINST AN
   ANSWER YOU ALREADY KNOW.** `extents.py` compared every pixel to a corner "paper" sample. That
   is fine on flat newsprint and WRONG on the dark theme, whose ground is a vertical gradient with
   a grid over it: the reference tone is stale by the far end of the band, and whole frames came
   back reporting the full scan region — a **silent false pass** that made an entire verification
   run worthless, twice, before it was caught. It now uses each ROW'S OWN CONTRAST RANGE, which
   needs no reference at all: background rows span under 30 levels, a row with type spans 200+.
   **Prefer a measure with nothing to calibrate over one with a reference that can drift.**

15. **(2026-09-02, Video 005) ★★ BEATS PUSH, THEY DO NOT DISSOLVE — the 100BasisPoints
   transition, adopted for this channel.** The user: *"I want more 100BPS style transitions in
   these videos."* What OffCamCelebs was doing — outgoing beat fades and lifts, incoming beat
   fades in — is the exact thing that corpus forbids: *"Make sure there is a normal smoothly
   animated transition between them, and NOT a simple opacity transition."* Two objects must
   never cross-fade in the same slot; **one pushes out as the other pushes in. One camera move,
   two shots.** The measured values (taken from `test/resources3/style3-preferences.md` and
   `Style 3 videos/Video 14/src/cap/swoop.tsx`, not invented):
   - **Entrance: slide from an edge + zoom up, over 48 FRAMES on a long-tail ease-out.** ⚠ Do
     not shorten it — their note is explicit that "the long tail IS the fluidity; a 20-frame
     version reads as a slide-on."
   - **Exit: ~22 frames, travelling FURTHER and faster than it entered, doing three things at
     once** — travel, dim on its own linear ramp, and **DEFOCUS**. "Depth of field is what tells
     the eye which layer is the subject." A beat that only fades is a dissolve wearing a costume.
   - **One consistent direction**: everything leaves LEFT, everything arrives from the RIGHT, so
     the film reads as one camera panning along a strip.
   - **★ THE CAPTION NEVER MOVES.** It sits above every transition, sharp and 100% opaque. Ours
     already is a sibling of the scene tree, so this holds for free — keep it that way.
   **⚠ TWO ADAPTATIONS, because this is not Style 3 and the rest of that style is NOT imported:**
   1. Style 3's caption is at the TOP, hence their rule "anything leaving on the vertical axis
      leaves DOWNWARD". Ours is at the BOTTOM. Sidestepped by making every beat transition
      HORIZONTAL — which is also what their corpus does most often (9 of 17 cuts slide, 7 of
      them rightward).
   2. **The entrance scale is 0.88, not their 0.74.** A 0.74 zoom on live type re-rasterises every
      glyph for 48 frames, and this channel has already been burned by scaling text (rule 13c).
      0.88 reads as a camera push and keeps the glyphs stable.
   ⚠ Nothing else crosses over. Style 3's look, palette, 3D kit and SFX stay where they are;
   this is one motion behaviour, adopted deliberately.

13. **(2026-09-01, Video 004) ★★★ THE THREE THINGS THAT MAKE MOTION LOOK BUGGY — and how to
   find them without watching.** The user: *"there are a ton of scenes with animations that are
   buggy/that snap into place"* and, later, *"the visuals in the hook scene and the logan paul
   text scene right after are jittery."* Neither is visible in stills. All three causes were
   found by MEASURING, and all three are systemic rather than per-scene:

   **(a) ★★ USING THE SETTLE CURVE FOR A SIZE OR AN ALPHA.** `EASE` (bezier .16,1,.3,1) is a
   long-tail settle: correct for something ARRIVING FROM AN OFFSET, because the steep start
   reads as momentum. But it is **13% through after ONE frame at dur=26, and 55% at dur=7** — so
   an opacity fade, a bar growing from zero, a rule drawing out or a caption crossfade on EASE
   does not ease at all, it POPS and then creeps. There are now **two easings**, and picking
   wrong is the single biggest source of "it snaps":
   - **EASE** — for a POSITION the element travels from.
   - **GROW** (bezier .4,0,.2,1, zero slope at the start) — for **opacity, width, height,
     scaleX, crossfades**: anything whose visible value starts at zero.
   `Move` now runs its travel on EASE and its fade on GROW, entering AND exiting.

   **(b) ★★ MOUNTING A `Move` INTO FLOW LAYOUT.** `Move` returns null until its cue. Absolutely
   positioned that is harmless. As a child of a flex column it takes its **full height the
   instant it mounts**, so the column re-lays out and every sibling jumps ~100px in one frame
   while the new item is still invisible. This was happening in **seventeen stacks**. Fixed with
   a `Reveal` wrapper that animates height instead of mounting — a one-row grid going
   `0fr → 1fr`, which the browser resolves against the content so **no height has to be known**.
   It never unmounts, so layout is continuous. ⚠ The stack's `gap` must move ONTO the Reveal
   (as its leading padding, inside the collapsed area) — a parent gap is still there at zero
   height and puts the step straight back. Bonus: this also fixes the growing-block centring
   problem of rule 12 properly, without fixed-height containers.

   **(c) ★★ SCALING LIVE TYPE.** The per-scene `Drift` scaled the whole scene tree by ~0.04px
   per frame. Every glyph therefore re-rasterises every frame, and large type shimmers — which
   is why the two beats with the biggest type were the ones reported. **A slow push NEVER goes
   on the content.** It drives the GROUND instead. Two corollaries: don't put an entrance
   `scale` on a text block either (travel it, don't scale it), and **never animate a 1px grid** —
   moving the push onto the grid just relocated the jitter.

   **(d) ANYTHING THAT `return null`s BEFORE ITS CUE IS THE SAME BUG.** Not just `Move` — the
   YearStamp and the verdict Stamp both did it, and a horizontal flex ROW has the problem too
   (a chip mounting takes its full WIDTH and shunts a centred row sideways — that was the
   "BOXER / WWE CHAMPION boxes"). Two rules follow: **a component used as a flow child must
   render from frame one at opacity 0**, and **a FIXED SET of items should never animate its
   layout at all** — render all of them, animate only opacity and offset. The Reveal wrapper is
   for stacks that genuinely grow; a known set of three chips is not one.

   **(e) AN ENTRANCE MUST STAY INSIDE ITS OWN SLOT.** The year stamp fell 110px, which is more
   than the gap above it, so it began its drop ON TOP of the line above and fell THROUGH it —
   read by the user as the figure "glitching downward" even though nothing below it moved.
   24px plus the squash still lands with weight. **Check an entrance offset against the gap it
   has to travel through, not just against how it looks at rest.**

   **HOW TO FIND THEM:** `scratchpad/snapscan.mjs` renders every frame at 0.18 scale (a frame
   SEQUENCE, not a video) and `snapfind.py` reports each frame whose difference from its
   neighbour is >6x the local median AND carries >50% of a 12-frame change — that ratio is what
   separates a snap from a fast move. 004 went **58 → 35 → 21 → 14 → 10 → 8** steps, peak
   frame-to-frame difference 5.66, and the eight survivors are all fast-but-continuous (verified
   frame by frame). For jitter, crop to a text region and psnr consecutive frames: 65-68 dB is
   stable, anything lower is shimmering.

11. **(2026-09-01, Video 004) WHEN THE FINDING IS ABOUT TIME, THE YEAR IS THE ARGUMENT — put it
   on screen, large, on every dated figure.** 004's gap is not between a claim and the evidence
   but between a claim and the CALENDAR: both the billion and the 20% are real, and the finding
   is that a 2023 snapshot is still spoken in the present tense in 2026. An audit like that
   collapses the moment a number appears without its year. So: a **YEAR STAMP** component that
   drops, squashes once on landing and rules itself off; a `DatedFigure` that cannot be built
   without a year; a year on every photo plate's caption strip; and years as the dominant label
   on a chart axis, larger than the values. **Rule 1 (never repeat an animation) is suspended
   for the year stamp and nothing else** — a motif that arrived differently each time would not
   be a motif.
   Two corollaries this video established:
   - **DIFFERENT DATASETS ARE DIFFERENT OBJECTS, not different colours.** The UK Companies House
     filings sit in a SOLID frame with a VERIFIED tag; the Circana retail estimate sits in a
     DASHED frame with an ESTIMATE tag and its source named on screen. They never share an axis
     or a frame. One merged curve would be the single checkable inconsistency that kills a video.
   - **A LEGAL SCOPE LIMIT IS A PINNED BANNER, not a caption.** Where getting the scope wrong
     would be defamatory — 004's administration is the AUSTRALIAN SUBSIDIARY, not the parent —
     the limit is stated in a banner that is on screen for the WHOLE beat, with the figures
     inside the scoped frame, and the wording is repeated in the voiceover every time.

12. **(2026-09-01, Video 004) ★ MEASURE THE LAYOUT, DO NOT EYEBALL IT.** Every one of 004's
   sixteen beats was authored top-heavy — measured offsets of −121 to −366px against the centre
   of the content band, i.e. the lower third of the page empty for most of the video — and none
   of it was obvious in a thumbnail sweep. `scratchpad/extents.py` scans a still between the
   section tab and the caption slot and reports the ink's bounding box and its offset from
   centre, which turns "does this look right" into arithmetic. Run it over the sweep before
   handback, every video. Two things it taught:
   - **A BLOCK THAT GROWS CANNOT HAVE A FIXED TOP.** Solve the top for the full block and the
     beat starts high; solve it for the first row and it ends low. Put growing stacks in a
     fixed-height container that centres its children — centred at one row, still centred at four.
   - **A NEAR-EMPTY FRAME IS A MEASURABLE DEFECT.** A measured content height of ~14px found a
     five-second stretch of 004's verdict where only a section header was on screen, because a
     block exited one cue too early. h < ~60px on a beat that is not deliberately a single line
     is a bug.

2c. **(2026-08-31, Video 003) A TIER TAG SAYS THE TIER AND NOTHING ELSE.** No dash-qualifiers —
   no "CLAIMED — his words", no "VERIFIED — civil ruling, Dec 2024", no "OUR MATH — £21M ÷ 8
   yrs, held flat". The user's words: *"remove all the ai bullshit like the 'his words' with the
   dash."* Those explainers read as machine-written hedging. Tags are **CLAIMED / VERIFIED /
   ESTIMATE / OUR MATH**, full stop. Where the qualifier carries real information — and on 003
   the "civil ruling" one is legally required — it moves to the **source-credit line beneath**,
   set as a newspaper credits a source ("civil ruling · 18 Dec 2024"), never stapled to the tag.

2b. **(2026-08-31, Video 003) ONE IDEA PER FRAME — SPLIT THE BEAT, DON'T STACK IT.** "Some of
   the scenes are too crammed… ensure there isn't too much on the screen at the same time at
   any point." When a beat carries several facts, make it several SCENES with one simple visual
   each — never one scene with four objects stacked. A list inside a single card counts as one
   object; a figure + a chip row + a second card does not. **Prefer more, simpler scenes to
   fewer, denser ones**: 003 went from 11 scenes to 16 for exactly this reason, and every added
   beat is a single big figure, a single pull-quote or a single card. Where two groups must
   share a scene, the first EXITS before the second arrives.

2. **(2026-08-29, Video 001) LOW ON-SCREEN DENSITY.** Never much information on screen at
   once, and nothing that isn't relevant to the line being spoken. In practice: source stamps
   carry ONE fact ("YouTube, April 2019" — not the court reference too); labels don't repeat
   what the caption says; an element whose beat has passed EXITS before the next one enters
   (Forbes card hands over to the gap label; the poll leaves before "who's next" arrives).

3. **(2026-08-29, Video 001) NO OVERLAPPING CONTENT, EVER — and every movement smooth.**
   No element may cross or cover another, including during entrances and exits: handovers are
   sequential (outgoing fully gone before the incoming reaches its lane), exits never travel
   through the caption slot, and nothing pops — everything enters and exits on an eased move.
   Scene exits run ≥20f. The per-scene drift is continuous across scene boundaries (alternating
   push/pull meets at the cut; the last scene keeps drifting through the outro, no snap).

4. **(2026-08-29, Video 001) NO YELLOW.** No yellow, amber or gold anywhere in the palette.
   CLAIMED tier is VIOLET `#a78bfa`.

5. **(2026-08-29, Video 001) VISUALS ARE 3D, NOT FLAT BOXES.** Data graphics are extruded
   isometric solids in the bar-chart's language: skewed top face lit from upper-left, darker
   side face at right, gradient front, soft elliptical ground shadow. Never a field of flat
   rectangles ("never use boxes like that"). Cards/papers carry subtle perspective tilt
   (3–6°), an inset top highlight and deep shadows; timeline dots are shaded spheres. The
   shared `Block` construction in Video 001's `scenes.tsx` is the reference implementation.
   **⚠ CLEARANCE IS MEASURED AGAINST THE EXTRUDED SILHOUETTE, NOT THE FLAT RECT.** An iso block's
   top face sits `d` px ABOVE its front face and its side face `d` px to the right, so a label
   spaced off the front face still collides with the solid. Budget the depth as part of the box.

6. **(2026-08-30, Video 001) NOTHING SNAPS — CONTAINERS ANIMATE TOO, AND A BOX ENTERS AS A BOX.**
   "I always want smoothness." A container that gains content must EASE its own height open
   (`RowSlot` in Video 001: `height: ROW_H * prog(...)`, `overflow: hidden`) — a card whose
   height steps as a child mounts is a snap, even when the child itself animates. And an item
   entering a container carries **its own background, border and shadow** so it reads as a box
   sliding into the bigger box, never as floating text on the parent's fill. Where the parent
   already clips the child, the child slides at **full opacity** (`Move fade={false}`) — the
   clipping edge does the reveal; a fade there reads as ghosting, not as a solid object.
   **⚠ PITFALL — staggered siblings in a centred/auto layout must ALWAYS be rendered.** `Move`
   returns `null` before its start frame, so a late sibling is absent from the flex row and the
   early one is laid out centred, then JUMPS sideways the frame the sibling mounts. Reserve the
   layout (render every sibling from the start) and animate transform/opacity only. This is what
   made the YES/NO buttons look "weird"; the same trap applies to any auto-centred group.

7. **(2026-08-30, Video 001) NO EMPTY OR STATIC STRETCHES.** A beat that holds with nothing
   entering, leaving or moving is dead air — "either add a new visual that fits it or some
   animated movement." Two tools, in order of preference: (a) give the beat its own **content**
   visual when the VO is carrying real information the screen isn't showing; (b) where the
   composition is correct and simply holding, give the existing objects **purposeful continuous
   motion** that means something (a range's hatching drifting, a pool still dispersing, a feed
   creeping, a rule drawing out, the camera still travelling) — never idle bob or wobble on
   everything. **The key light drifts continuously for the whole film** (`bgField()` in
   `Composition.tsx`, two slow mismatched sine periods), so no frame is ever fully frozen even
   inside a legitimate hold. Audit every beat against its REAL VO frames — provisional pacing
   hides these gaps.


### RULE 30 — ★★ AN OBJECT DRAWN TOO SMALL IS A BEAT THAT DID NOT HAPPEN
**(2026-09-11, Video 010.)** The first full stills pass on 010 had every beat sitting in the
bottom sixth of the frame under ~600px of empty ground, with the caption alone in the upper
third. Nothing was WRONG by any existing rule — no overlap, nothing off-frame, nothing
short-lived — and it still looked like a placeholder. Four causes, all now rules:

1. **THE STAGE HAS A BAND, AND IT IS NOT "hang everything off GROUND".** Screen y ≈
   `883 + design.y × (camera k) × STAGE`, and the caption's ink ends at ~371, so the stage should
   run roughly **design y ∈ [−250, +450] → screen [610, 1380]**. A single object standing on the
   ground is fine at GROUND; a MULTI-ELEMENT GROUP (a grid, two rows, a crowd) must be centred
   near **design y ≈ 0**, using negative y, not stacked on the floor. There is also a hard
   horizontal limit — **|x| + halfWidth ≤ 436** — past which the object leaves frame once the
   camera reaches k = 1. ⚠ Do not eyeball either; geom_audit's OFFSCREEN check is the authority.

2. **ONE NUMBER REFRAMES THE WHOLE VIDEO: `STAGE` in scene3d.tsx.** It multiplies the swoop
   wrapper's scale (`translateX(tx) scale(sw * STAGE)`), which lives OUTSIDE the perspective
   container — so it creates no new containing block, touches no 3D math, and because the
   translate is applied AFTER the scale the rule-28 strip separation stays exactly 1080 screen
   px. 010 ships at **1.22**. ⚠ Mirror it in geom_audit.mjs's `applySwoop` or every check lies.

3. **EVERY DIMENSION SCALES WITH THE SIZE PROP, OR THE PROP IS A LIE.** Seven objects in 010's
   kit took a `w` prop and then drew hard-coded internal heights. Asking for a bigger Gavel
   produced a 300px-wide PENCIL with 44px of ink; a wider BookStack got no taller; a 320px
   CoinWheel still dropped 44px coins. The fix is always the same line — `const k = w / <the
   width it was designed at>` — and then every constant is `× k`. **Audit for this the moment a
   size prop is passed anything other than its default.**

4. **DARK INK ON A DARK STAGE IS NOT A DRAWING.** The garage interior was `#0A0D12` on a
   `#0E1116` ground: it read as a hole, and the car inside it was invisible — the same class as
   009's calendar. And an object with an EMPTY label must still draw something: the hook's row of
   eight dead brands rendered as eight empty rectangles until a blanked name plate was added.

**Two smaller rules earned in the same pass:**
- **★ A PRESENTATION TURN NEVER PASSES ±90°.** `rotateY(spin × 360)` with spin 0.58 showed the
  contract slab's BACK for most of the hook — "25%" and "GUARANTEED" both mirror-reversed — and
  no still of the SETTLED frame would have caught it, because the settled frame was fine. A turn
  that presents a face swings THROUGH face-on (010: −38° → +27°); only a real revolution needs a
  back face, and then it needs one drawn.
- **★ A NAMED GROUP IS ONE BLOCK FOR RULE 18.** A 55-figure crowd in five receding rows is a
  FIELD, not five things to read, and the density checker counted its rows and cried OVERLOAD.
  geom_scenes elements now carry an optional `grp` and geom_audit collapses a group to one span
  before banding. ⚠ This is a fix to the CHECK, not a licence — the group must genuinely read as
  a single image.


### RULE 31 — ★★ A CHART MUST LOOK LIKE A CHART; A WALL MUST NOT BE WALLPAPER; A CARD HAS TWO FACES
**(user, 2026-09-13, Video 011: "Make the charts a lot more realistic, add some variety to the
hook visual, and actually add some visuals to the back of those cards that flip in the first
scene.")**

1. **REAL CHARTS, EVERY TIME.** A staircase of identical green bars is a pictogram of a chart,
   and anyone who trades reads it as fake. A chart in this channel is drawn as real OHLC data:
   candle BODIES AND WICKS, mixed up and down bars on a net trend (a "win" chart still has red
   candles in it), a gridded plot, a right-hand price axis with prices plausible for the named
   instrument, a dashed last-price line with its tag, volume bars, and a moving average. Header
   strips carry an instrument and timeframe and a percent change computed from the same series.
   Numbers on a card must agree with each other (011's ticket: 2 NQ contracts × 46.25 points ×
   $20 = $1,850.00).
   ⚠ The series comes from a SEEDED PRNG, never Math.random — Remotion renders frames out of
   order across workers and a chart that re-rolls per frame shimmers.
   ⚠ This applies to EVERY chart in a video, not only the hero one: 011's six monitor screens
   and its rejected "not a chart" card were upgraded in the same pass.

2. **VARIETY IN A WALL.** A hook built from nine copies of one tile is wallpaper. Mix the KINDS
   of object (011: candle charts on three instruments and timeframes, a live-area chart, two
   P&L readouts, a closed-trade ticket), mix their sizes, and tilt them slightly off-square. The
   geometry audit models each card's ROTATED box (plus a few percent for any flip's perspective
   bulge), so varied layouts stay provably clear.

3. **A CARD THAT FLIPS HAS SOMETHING ON ITS BACK.** Blank paper on the reverse reads as
   unfinished. When the MEANING of the back is "nothing here", draw the EMPTY VERSION OF A REAL
   THING rather than nothing: 011's backs are properly drawn statement forms — title, ruled
   fields, a trade table, a balance line, the axes of a chart with no data — with every value
   left as a dash. That keeps the finding (no statement) and still gives the eye a document.
   ⚠ Keep an empty version NEUTRAL: no "FAKE", no crosses, no red, no negative numbers.

## ⚠ HISTORY — superseded identities. Kept so nobody re-derives them by accident.

### ⚠ SUPERSEDED — "the look is not yet defined" (written 2026-08-29, false since 001)

**The look is not yet defined.** No reference corpus has been supplied and no video has been
built. Nothing is inherited from Style 3's look — the dark/3D identity, its palette, its caption
system and its type system belong to the other channel and start at zero here.

What IS carried over is craft discipline, at the level of principle (these are process-grade
truths about short-form retention, not Style 3 styling):

- Every beat needs a distinct visual; repetition is a retention killer.
- One subject per beat, ~3–6s of screen time each — turnover, not density.
- Nothing appears or vanishes — everything enters and exits on movement.
- No two elements ever intersect; a replacement hands over, never cross-fades in place.
- No orphan micro-labels; if a label isn't essential it does not exist.
- Timing is anchored to the VO transcript, never to a scene index or the written script.
- On-screen width is solved against the worst-case camera pose, not the resting frame.

The first user brief / reference material defines the identity. When it arrives, the measured
findings and the first standing rules replace this section.

---

### ⚠ SUPERSEDED — "DARK INVESTIGATIVE / AUDIT LEDGER" (pilot, 2026-08-29)

Defined on Video 001 for the influencer-audit format. The dark field is a standing rule (No. 1);
the rest is provisional until the user reacts — confirmed items then become numbered rules:

- **Field:** dark investigative — see standing rule 1. Cards are dark panels, not paper sheets.
- **Type, three roles:** Playfair Display (900) for display/verdict lines and quoted claims
  (italic for the quotes); Inter (600/800) for captions and labels; IBM Plex Mono for every
  figure, tag, source stamp and section tab.
- **★ THE TIER SYSTEM IS THE BRAND:** CLAIMED = amber `#d9a72e` · VERIFIED = blue `#6b9ce8` ·
  ESTIMATE = gray `#9aa1ad` DASHED chip · ALLEGED = crimson `#e0604f` hollow chip — each chip on
  a translucent tint of its own color. Mono, uppercase, everywhere a figure appears. Never
  conflated, never recolored.
- **Verdict device:** red rubber stamp `#e33d2e` (rotated −7°, slams in at 2.1×→1 over 9f).
- **Captions:** one full sentence per screen, hard swap, fixed slot at y≈1560, Inter 600 44px.
- **Motion:** slide-in + settle on a long-tail bezier (0.16,1,0.3,1), ~26f enters, exits always
  on movement; ±2.5% per-scene zoom drift, alternating direction. No bounce, no wobble.
- **Format furniture:** mono section tab top-left per chapter ("AUDIT — 1 OF 3"); source-and-date
  stamp line under every quote; checklist card that assembles in THE CLAIM and resolves in the
  VERDICT (empty boxes → checks/strike).
- **Real-person images:** designed "LICENSED PHOTO PENDING" placeholder card until the user's
  licensed image lands; the photo appears in the hook and returns exactly once, in the verdict.

---

## OffCamCelebs changelog

_Log every OffCamCelebs preference change and every video build here with a date. Nothing about
100BasisPoints / Style 3 goes in this file._

- **2026-10-23 (Video 034, Timur's first review): SEVEN STANDING RULES FOR EVERY FILM, written into the locked look.**
  Timur: "the changes that I tell you to make for this video right now, I want you to save them all as style preferences.
  Make up the rules based on what I say now… and don't make me ask you again in future videos."
  - L5: **every visual polished, detailed, realistic 3-D**, modelled from reference (the cap, its shadow, the stand, the
    calendar, the laptop, the cash stacks, the ball and its case, the lamp, the mic, the document and the stamp were all too
    simple). Cash is real bills with a note texture; keys carry legends; documents look real; stamps are real stamps.
  - L5: **nothing reads as a bug** (a dial poking out of a box's side).
  - L5: **objects act what the line means** (boxes close, a flag waves).
  - L1: **the hook moves from frame 1**: the hero drops under real gravity and lands, the camera moves, and the hero PRODUCES
    the hook's figures by working (keys press, numbers pop up), instead of the figure sitting there.
  - L1: **≤ 2–3 labels per film** (signs, tags, billboards, plates that say the meaning).
  - L1: **enter every place on ONE object**, never two at once.
  - L7: **the living, follow-through camera**: enter close, pull out and travel to the next object on its line, push in;
    always breathing in varied directions without trying too hard (supersedes rule 50's dead-still holds).
  - L9: **glitch sweeps run automatically after every change** (034: the scale's stand crossed its own dial frame).
  034 is rebuilt to these rules.

- **2026-10-23 (Video 034 "Two Million a Year", Shohei Ohtani): THE FIFTH FILM IN THE LOCKED LOOK**, cloned from 033. A
  content-only brief, saved as `034-ohtani/BRIEF.txt`.
  - **Script:** checked in two parallel passes; three lines corrected and sent before the build (`VO_SCRIPT.txt` has the
    trail):
    - "his salary is two million" → "he's paid two million": the salary is $70M, $68M of it deferred;
    - "Call it 460" → "That's about 460": the figure stays tied to the luxury tax, since the players' union calculated $438M;
    - the Sportico $125M → "he'll make … off the field this year": it is a 2026 projection.
  - **Take:** generated in-session (Russ, eleven_v4, TEMPO 1.04): 65.4 s raw, 55.4 s trimmed. Whisper writes "Otani", so the
    caption generator maps it.
  - **Seven places, one object each:**
    - a brass cash register whose enamel tabs turn over from $700,000,000 to $2,000,000 (the brief: the figure in the first
      second);
    - a desk calendar, the team's cap on a stand (10 YEARS) and a laptop with the MLB.com headline (the first of two
      documents);
    - a wall of safe-deposit boxes 2034–2043, their plates lighting in order, and a rate dial turning to 0%;
    - a platform scale, its needle settling on 460, with a LUXURY TAX VALUE tag;
    - a felt METS pennant and Soto's ball on a pedestal (NOTHING DEFERRED);
    - a lamp whose bulb lights on "own idea", a microphone, and a $125M billboard marked SPORTICO ESTIMATE;
    - a clipboard ($700,000,000 ON PAPER, the second document), a stack of notes (ABOUT $460,000,000 TODAY'S MONEY) and a
      rubber stamp that presses INFLATED.
  - **Bed:** Big Rich Town (the previous film's song), cut so its first 808 lands on "$2". It sits 5.3–5.7 dB under the
    voice.
  - **His photo:** `public/ohtani_face.jpg`, named in the brief, was not on disk, and Timur was asked for it. Its slot is
    left of the register.
  - **Two framing lessons from the screen sweep** (both apply to any place):
    - An object's far edge rides HIGHER on screen in perspective, so the verdict's clipboard top crossed the caption band
      although its front edge didn't. Judge the band on the rendered frames, not on layer y.
    - A tag that turns to face us must stay framed with its object, left of the Reel's buttons, for as long as it faces us.
      An extruded card prints its texture on BOTH caps, so give the back a plain face and put the print on a decal.

- **2026-10-20/21 (Video 033 "Two Million In", Dana White & the UFC): THE FOURTH FILM IN THE LOCKED LOOK, and the first
  built by the new session after the account move.** A content-only brief, saved as `033-danawhite/BRIEF.txt`; cloned from
  032 (Studio 3175, srv.us forward 36, serve 4172).
  - **The script first:** two parallel checks at source. Two lines corrected and armed in `script_fixes.json`:
    - "seven years of fights" → "seven years of U.S. TV rights" (TKO 8-K: a US media-rights deal);
    - "with no finding either way" → "before trial, with no verdict" (the 2023 class-certification order is a finding at
      that stage, so "no finding" could be quoted back).
    The brief's guardrails are a render guard as well (7 patterns: officially, White paying, sale prices, proven
    wrongdoing, fraud/scam, politics, payouts).
  - **★ The voice was GENERATED in-session for the first time** (the user, 2026-10-18: "if I need a voiceover you can
    generate and implement it yourself"): ElevenLabs "Russ – Deep, Smooth and Articulate" (`HKFOb9iktHA85uKXydRT`),
    eleven_v4, from the corrected script. The connector sets no speed, so `vo_trim.py` brings it to the channel's
    speed-1.05 pace with TEMPO 1.04: 74.1 s raw → 61.8 s, word for word.
  - **Seven places, one hero each, grounds dark/cream alternating, one document-like object at most** (L1):
    1. hook (dark): an arena SCOREBOARD on truss legs, amber LED dot matrix: $2,000,000 under 2001 from frame 1, the top
       row cross-fading to 2016 REPORTED, the figure counting magnitude by magnitude to $4,000,000,000 on "4 billion";
    2. buy (cream): a half-moon CASINO TABLE: $2,000,000, THE UFC, 2001 printed in its betting box; two chip stacks slide
       in on "bought"; a brass nameplate DANA WHITE, PRESIDENT, revealed by the camera (no chip is ever his);
    3. sale (dark): a CHAMPIONSHIP BELT on the wall: ABOUT $4,000,000,000, SOLD 2016; side plates F FERTITTA 40.5%,
       L FERTITTA 40.5%, D WHITE 9%; a brass tag turns on "WME": WME-IMG;
    4. climb (cream): a WRESTLING RING corner (apron WWE) with a manila tag sliding along the rope: ENTERPRISE VALUE
       $12,100,000,000; a BROADCAST CAMERA on its pedestal (tally lamp flickers on) and a CLAPPERBOARD: PARAMOUNT,
       $7,700,000,000, 7 YEARS, US TV (it claps on "agreed");
    5. catch (dark): a court ARCHIVE BOX, LE v ZUFFA, ALLEGED, with a pair of MMA GLOVES on its lid; red evidence tape
       unrolls: SETTLED $375,000,000, NO VERDICT;
    6. fair (cream): two DICE tumble in on "gamble"; an A-frame CHALKBOARD: 2004, MORE THAN $30,000,000 IN THE HOLE; a
       2005 CRT TV warms up: THE ULTIMATE FIGHTER (the caption leaves the title to the screen: objWords);
    7. verdict (dark): a ROUND-CARD STAND (IN $2,000,000 → OUT $4,000,000,000 → LEGIT, each card lifted out and slid off)
       and a brass RING BELL struck on "legit".
  - **His photo has not landed** (`public/danawhite_face.jpg`): the hook's slot under the scoreboard is empty (HAS_PHOTO
    off) until it does.
  - **Bed:** the Britell "Strings & 808 Beat" cut (the previous film's song), 5.3–5.7 dB under the voice in every window,
    tail 5.6. **SFX:** 44 cues, family per job; levels measured against 032 (OffCamCelebs' own last film), not other
    accounts (`scratchpad/vo/sfxlevels033.py`).
  - **Traps:**
    - onsets.py pulled two sentence starts ("In 2001", "a group") onto the previous word's tail (its pause end was the
      wrong pause); both dropped by hand after checking the silence map.
    - mergetok needs two passes for "40" | ".5" | "%" (fixed: a percent may follow a decimal).
    - A table top seen from the house eye (y ~400) foreshortens its print to nothing: the casino table's eye is high (y 60).
    - A hung tag that TURNS sweeps ±half its width in depth: over a strap it cuts through it. Hang it below.
    - A clapperboard leaning on a pedestal column passed through the steering ring: it now leans 6° on the base's rim.
  - **2026-10-21, the user's first notes on 033** (with his photo attached):
    - "ensure that the 2001 … is actually pronounced correctly": the take said "twenty oh one" (as the script was written).
      Both years of that form (2001, 2004) were re-generated as "two thousand one / four" in the same voice and spliced in
      at the take's own pauses; now a standing L8 rule.
    - "The $2 million text on the casino table should actually fit the box it's in … $12.1 billion should also fit": now
      the standing L5 rule PRINT FITS ITS BOX, applied to every printed figure in the film (`fitFont`).
    - "Fix up the gloves and make sure they … look a lot better and correct": the MMA gloves rebuilt as real open-finger
      gloves (a shaped knuckle pad, four finger loops under it, a padded thumb, a long wrist wrap with its velcro strap).
    - His photo (`public/danawhite_face.jpg`, him alone, arms crossed on a dark backdrop) is in the hook, centred under the
      scoreboard: the cover frame is his face and the figure.
  - **2026-10-21, the user's second notes on 033:**
    - "center the 2 million number in the hook scene": the scoreboard's figure row is centred (it grows both ways as it
      counts), no longer right-aligned.
    - "fix the guy's cutout, it seems low quality": rembg's ALPHA MATTING had feathered his outline into a soft haze round
      the scalp and ear. v2 (`scratchpad/vo/dwsharp.py`) takes isnet's RAW mask, tightens and erodes it 1 px at ×2, then
      feathers 0.8 px (a crisp one-pixel anti-aliased edge, no halo), defringes, and sharpens a little more. ★ Standing
      lesson for every cut-out: never ship rembg's alpha matting unexamined; look at the edge at full size on the ground.
    - "Use this song" (50 Cent, "Big Rich Town (Instrumental)", the user's file): the bed now. Its drumless 21-s intro plays
      under the hook and the beat's first 808 kick lands on "$4" (film 5.26 s), as the scoreboard lands on $4,000,000,000
      (`mkbed_bigrich.mjs`); 5.3–5.7 dB under the voice in every window from the drop, tail 6.1. ★ By the standing rule it
      is the default bed for the next film unless the user names another.
  - **2026-10-22, RENDERED on request** ("render") → `033-danawhite/renders/two_million_in_033_hf.mp4` (63.3 s, 63.5 MB, 16 min,
    4 workers, launched through WMI with HYPERFRAMES_RENDER_DETACHED=1). Verified on the file: picture CLEAN against fresh
    stills every 60 frames; sound = the offline mix (+0.01 dB, lag 0, corr 0.999, peak −1.64 dBFS); popmp4's 6 one-frame
    flags all designed (the counting digits, the clapstick and tally, the tape's first sliver, a caption's arrival and the
    bell). Served on 4172 via srv.us forward 37.

- **2026-10-14 (Video 032 "Up To", Conor McGregor): THE THIRD FILM IN THE LOCKED LOOK.** A content-only brief, built in
  `OffCamCelebs/032-mcgregor/`. It was cloned from 031, which carries 030's guarded render and the 031 kit additions (people,
  street, the Back/Grid layers, fog and blur). Studio 3171, serve 4171.
  - **The script came first.** Every line was checked at primary source in three parallel passes, and `VO_SCRIPT.txt` was
    sent before the build. Two corrections are armed in `script_fixes.json`:
    - "Every headline" became "Headline after headline": the first report and CBS said "up to".
    - The deal is "reported to be worth": its terms were confidential.
  - **The brief's guardrails are now a render guard.** `script_fixes.json` → `guardrails`: never "he said", never "owed",
    nothing on his other cases, conduct or politics. Each guardrail proves itself on its own example, and `render.mjs`
    refuses any caption that crosses one. `render.mjs` also refuses an unknown flag (the root rule from Bankers V10).
  - **Look decision: the LOCKED espresso ground, not 031's burgundy.** 031's burgundy and grid were the user's notes on 031
    alone; its "Use this for all videos" went with the camera note only. The camera note (a long look moves) is applied here.
    No background street or trees either (L2: plain grounds); those were 031's general note.
  - **Six places, one hero object each, grounds alternating dark/cream:**
    1. **Hook (dark):** a wall of pinned front pages, $600,000,000 at frame 1. Two more pages land over the main one's lower
       half as "headline after headline" is said. His photo slot is at the left (it is the cover frame).
    2. **Deal (cream):** the bottle (plain type, no logo) and a shop's price card, "up to" in small print over
       $600,000,000. A brass magnifier makes "up to" big.
    3. **Shrink (dark):** three pallets of $100-bill bricks (60 × $10M) and a mechanical counter, McGREGOR $600,000,000.
       - The $250M pallet leaves wrapped ALREADY EARNED; then 49% PROXIMO leaves.
       - Bricks go top-first to the MANAGER and PARTNER heaps. These carry names only, never a sum.
       - The shutters slide apart on REPORTED, and the drums roll to $130,000,000. The ends are to scale: 13 bricks.
    4. **Court (cream):** the brief on a reading stand, tied in pink tape (THE HIGH COURT, LOBOV v McGREGOR).
       - A CLAIM 5% tab slides out of it.
       - An expanding file glides in: DOCUMENTS, COURT ORDERED, JAN 2024.
       - A signed SETTLEMENT, APRIL 2026 sheet glides in, then a CONFIDENTIAL envelope over its terms.
       - No stamp: 031's verdict was a stamp.
    5. **Fair (dark):** a magazine on a brass wire easel. Its cover swings open to THE WORLD'S HIGHEST-PAID ATHLETES 2021, and
       the camera tracks to row 1: CONOR McGREGOR $180M. The other rows are greeked.
    6. **Verdict (cream):** $600M in gold foil letter balloons over a weight.
       - A HEADLINE tag turns to face the camera on "never his number".
       - On "inflated", red foil letters lying crumpled on the floor fill and rise into INFLATED (objWords).
  - **Traps found by the first stills sweep:**
    - A magnifier's lens must not turn: its view turns with it. Only the handle is angled.
    - An opening cover sweeps through anything in front of the page, so the magazine's easel has no front lip.
    - A brick carried off a stack must LIFT, CARRY, SET DOWN: a diagonal path cut the brick under it.
    - The counter's housing is a SLAB WITH TUNNELS (window, slot). A solid box would bury the drums.
    - A tunnel cut within ~5 px of a bevelled slab's edge crosses the bevel's inset outline. The triangulation fails and
      the hole comes out SOLID (the REPORTED slot). Keep ≥ 2 px of material past the bevel.
    - Brick targets were offset twice (a pallet-relative offset, minus the pallet's x again). The manager's bricks flew
      off the frame and the partner's crossed his heap. PEN caught it on 3 frames.
    - A foil letter's tail is tied at the middle of its nearest FOOT: N, F and A have no foil at their bottom centre.
      FLOAT caught the tails hanging in the air.
    - A prop that glides in beside a turned card must travel in the card's own plane (the magnifier cut the 8° card).
  - **Checks passed (provisional timing):**
    - tsc;
    - PEN and EDGES on every 6th frame: 0 findings;
    - FLOAT on a settled frame of every place: 0;
    - stale029 hand-overs: 0 pop-in, 0 pop-out, 0 overlap. Its two 3-frame "lingers" are the leaving place still sliding
      out mid-move;
    - the full-size close-ups;
    - `render.mjs --check`: 2 fixes and 3 guardrails, each proven on its own example.
  - **Studio 3174, not 3171.** 3171 was held as another app's outgoing source port (a local proxy), so `preview` refused it.
  - **2026-10-14, the user on the first build: "too many document visuals, try to be more creative with the visuals. Use
    objects that are relevant to the scene's context, keep 2-3 document visuals maximum."** Recorded as a standing L1
    rule. The film had six document visuals: front pages, a price card, a brief, a file, a settlement, an envelope and a
    magazine. It now has ONE, the hook's front pages.
    - **Deal:** the bottle, an oak cask stencilled PROXIMO SPIRITS that rolls in, and a NEON sign behind them.
      - $600,000,000 flickers on in amber tubes as "worth up to $600 million" is said; the small "up to" lights on "Up to.".
      - The tubes are traced from the glyph outlines. Unlit, they are dark glass: pale unlit tubes read as white letters.
    - **Court:** brass scales of justice.
      - A 5% weight drops onto one pan and the beam tips; it is weighed, never owed.
      - A black deed box, McGREGOR in gold, glides in shut onto the other pan, and its lid opens on its papers on "documents".
      - The beam comes level on "settled"; on "disclosed" the lid shuts and the key turns.
    - **Fair:** a winners' podium. Gold coins drop and stack, 36/26/24 (Forbes 2021's $180M/$130M/$120M to scale, no other
      name). A brass plate, $180M FORBES 2021, swings over the first step's edge on "$180 million".
  - **2026-10-14, the take and his photo landed** (the user: "vo and face in public, use the same song for now").
    - **The take:** an ElevenLabs read ("Russ"), word for word the corrected script, 59.4 s trimmed. It says "Proper
      number 12".
    - **His photo:** MCGREGOR_CONORnobelt.webp, 520 × 325, already cut out, him alone. mcgsharp.py: defringe, ×3, the chest's
      foot faded. He stands at the lower left of the wall of front pages: the cover frame, his face beside $600,000,000.
    - **The bed:** Good Man, re-cut so its drop lands on "Proper" (7.89 s, measured). It sits 5.3–5.9 dB under the
      speech-gated voice in every window, tail 5.6.
    - **The SFX:** loud frames 8.2 dB under the voice (Bankers 7.5/5.8, 100bps 8.6). The guard passes the real take with 0 hits.
  - **Traps (the second pass):**
    - **The silence snap moved "$180" 0.7 s late.** A 90-ms stop INSIDE "one hundred · eighty" was taken for the breath
      before the word. It now snaps only on a pause that opens in the word's first 40%.
    - **Chains run to one point cross anything taller than the dish.** The pans now hang from a spreader ring by straight
      rods, with the hanger's open side facing the box's way in.
    - **A flat box on a dish rests on its slope.** Seated on the dish's floor, it cut 3–4 px into the slope.
    - **Raising a pivot without its column** left the beam floating 50 px above it (FLOAT).
    - **A cask head smaller than its staves' chime** hung loose (FLOAT).
    - **A lid opened past 100°** brushed the rear rod (PEN).
    - **A regex edited through `node -e` lost its backslash** (`/^\$?250/` → `/^$?250/`, which is invalid). Fixed with Edit,
      as the root rule says.
  - **2026-10-15, the user: "I put three new images in public, use them instead of the newspaper photo placeholders in the hook
    scene".** whiskey 1–3 (him with Proper No. Twelve; him alone) are cropped by shape to each page's photo block
    (assets/hook_photo_0–2.jpg). The first's watermark is cropped off; the third's wall of framed portraits is blurred and
    darkened round him so no other face reads. They print INTO the page textures. The stage now has an image registry
    (imageOf / loadImages / imagesReady): the driver holds the first frame until they decode, and a texture painted before
    them is repainted once they have.
  - **2026-10-15, the user: "fix up the visuals in the second scene, they look terrible".** The v2 deal read as an orange
    vase, a black screen on stilts with grey outlined type before it lit, and a flat disc of a cask, all small on an empty
    floor with a mirrored "$600,000" under them. v3 is a BAR:
    - a walnut counter (a grained, clearcoated top, raised front panels, a brass foot rail on brackets);
    - the bottle in DARK GREEN glass, as the real one is in the user's photos;
    - a small PROXIMO SPIRITS cask on two oak chocks that slides in along the bar;
    - a boxed neon sign (black steel, a gunmetal rim, four screws) on tall feet at the back of the bar, its tubes matte black
      until they light. The cask stands under the sign, below the figure, so the close-up holds every object whole;
    - no floor mirror.
    - Checks: 0 PEN / EDGES / FLOAT; screen sweep 0 CROSS / NEAR / BAND; the hand-overs clean.
    - ⚠ A foot offset by −0.4 px on top of its parent's +0.4 sat FLUSH on the bar: PEN found it.
  - **2026-10-15, the user attached a song: "if it worked, use it".** The bed is now Nicholas Britell's "Strings & 808 Beat",
    the user's own file. The first upload arrived as a 9-byte "Not Found" stub, so check a supplied file's bytes before
    calling it unreadable or readable. The cut is made by `scratchpad/vo/mkbed_strings.mjs`:
    - **No single drop.** Band envelopes show the 808 playing from the first bar. The cut is 0.2 s late, so the first sub swell
      lands on "McGregor".
    - **Extended past its own fade.** The fade starts at ~49 s of a 71.5-s track. An FFT lag search found a 6-bar loop
      (48.0 s → 27.43 s, r 0.84), spliced under a 30-ms crossfade. The splice's largest sample step is within the track's own.
    - **Mixed by measurement.** −19.1 dB is baked in, the windows start at 0 and the envelope was reset flat. After one
      controller pass, every window sits at 5.3–5.8 dB under the voice, the tail at 5.6, and the mix peaks at −6.0 dBFS.
  - **2026-10-15, the user: "move the connor picture to be centered and so that the bottom of the picture isn't visible,
    meaning move it to the right and down and make it larger".** His photo is now centred (cx 540), 1000 px wide, its top at
    y 1320. Its foot (y 1945) is below the frame's foot at every hook key, so the photo's cut chest is never seen.
  - **2026-10-14, the user: "full intersection and violation sweep".**
    - **3-D audit on EVERY frame** (four interleaved workers over all 1,788 frames): 0 PEN, 0 EDGES, all canaries proven.
    - **A new SCREEN sweep:** `sweep029.mjs viol` + `scratchpad/viol032.py`, now step 3b of NEW_VIDEO.md. It covers what the
      3-D audit cannot see: captions against object ink, the caption band, the caption zone and the Reel's zones.
    - **Its first run (894 frames):**
      - CROSS 6. All six were FALSE, from the judge's own bug: a caption carried out of the frame by a crane has a box at
        negative y, and numpy's `m[0:y1]` with y1 < 0 wraps to the whole image. Boxes are now clamped on every side, and
        a canary proves an off-frame box judges nothing.
      - BAND 3: real, 2–20 px past y 660 (the hook's pins, the neon sign's top, the "$" balloon).
      - REEL 13, all looked at. Real text in the zones: the deal's "up to" close-up cut "$600,000,0" and the cask's stencil
        at the frame's right edge under the Reel's buttons, and INFLATED's D reached x 950. The rest were solids' edges,
        shadows and things moving through.
    - **Fixed:**
      - the hook's pages 12 px lower;
      - the sign 24 px lower;
      - the verdict's push camY 1084. My first "fix" moved it the wrong way: a LARGER camY sets things HIGHER on screen.
      - the "up to" close-up re-framed so the whole sign fits (z 1.38–1.41, centred x 620);
      - the cask at x 780;
      - the bottle at x 170;
      - INFLATED at size 96.
    - **Re-judged:** 0 CROSS, 0 NEAR, 0 BAND, 0 CAPZONE, and 0 text under the Reel's zones. The changed places were
      re-audited at 0 PEN, 0 EDGES and 0 FLOAT.

- **2026-10-12 (Video 031 "Funding Secured", Elon Musk): THE SECOND FILM IN THE LOCKED LOOK.** It is a content-only brief,
  built in `OffCamCelebs/031-musk/` (cloned from 030 per NEW_VIDEO.md; Studio 3170, serve 4170).
  - **The script came first:** six lines were corrected at primary source and sent before the build. Each correction is armed
    in `script_fixes.json`, with guardrails for guilty/convicted, fraud/scam and lied.
    - "By his own account, in the SEC's complaint" (¶24 reports Musk's account, not a finding);
    - "he and Tesla settled: twenty million each" (two separate cases);
    - "Shareholders sued too" (they sued before the SEC did);
    - "in about two hours";
    - "then backpedalled";
    - "No deal terms were ever agreed".
  - **Seven places, one object per sentence, none repeated:**
    - hook: a receipt printer printing "FUNDING SECURED." and TOTAL $20,000,000;
    - tweet: a page-a-day calendar (7 August 2018), the tweet on a phone in an acrylic holder, and an LED ticker (TSLA
      341.99 → 379.57, ▲ 10.98%: the complaint's own figure, not the quotient's 10.99);
    - price: a desk calculator, 349.54 × 1.2 = 419.45 → 419. → 420., and the complaint's ¶24 "would find it funny"
      highlighted;
    - funding: a term sheet pinned to the wall with its PRICE PER SHARE and FINANCING PARTNER lines blank, the SEC's case
      file sliding in, his and Tesla's $20,000,000 cheques, and a CHAIRMAN nameplate whose brass plate slides out of its
      channel;
    - court: the tweet as a PLAINTIFFS' EXHIBIT on an easel, the gavel coming down on "ruled", a red FALSE tab, and a lectern
      with "technically inaccurate" written out on a legal pad;
    - fair: the VERDICT FORM with NOT LIABLE crossed, a desk clock sweeping two hours, and a meeting table (ELON MUSK, PUBLIC
      INVESTMENT FUND) whose fund chair rolls up and then backpedals out;
    - verdict: a FUNDING SECURED archive box whose lid swings open to show it empty, then UNSUPPORTED stamped on it.
  - **What the stills and checks taught on this build** (all fixed before handback):
    - **A sheet leaning on the wall reads as a tent card.** Its wedge of shadow on the wall looks like a second panel. The
      term sheet is now pinned FLAT to the wall with two brass pushpins.
    - **One framing, one object.** A neighbour's print at a frame's edge counts toward the readable items. The tweet place's
      objects are spaced so each framing holds one, and the price page moved out of the LCD close-up.
    - **Nothing printed may sit in the caption band:** each camera key keeps the object's top at ≥ 660 on screen. The easel
      was lowered and the box's depth cut for this.
    - **Parts placed at `P.d` instead of `P.d / 2` floated in front of their body.** `rbox` puts its FRONT at the
      position, so a part meant for the front face goes at the body's centre z plus half its depth. FLOAT found the
      ticker's panel and feet (48 px off) and the phone holder's lip; the stills found the printer's LED, button and feet.
    - **A display behind its own bezel is blank:** the LCD sat inside its window's box.
    - **A falling nameplate shows only its underside at rest.** "Gave up the chairman's seat" is now the plate leaving its
      holder.
    - **PEN found four sub-pixel to 40-px crossings:**
      - the tent cards' leaning feet (0.43 px into the table);
      - the gavel resting on its rings, not its barrel;
      - the microphone's base on the legal pad;
      - the FALSE tab against the easel leg that slants outward.
    - **A lathe closed at r = 0 makes PEN report crossings that are not there.** Its cap is a ring of degenerate
      triangles. The gavel's block "crossed" the head with 1.4 px of air between them (measured: head min y 34.31 against the
      block's 34.00). Disc caps (`CircleGeometry`) cleared it at the real 0.3-px rest. The gavel was proven clean through the
      whole strike.
  - **The checks at handback:**
    - PEN and EDGES over every frame: 0 and 0 after the fixes (the court and fair windows were re-run on the final build);
    - FLOAT: 0 floating pieces on 22 settled frames, plus 6 of the final court and fair;
    - the hand-overs: 0 pop-ins, 0 pop-outs, 0 overlaps (1 "linger" frame: the hook's last 16-px sliver at the left edge,
      mid-truck);
    - the HyperFrames check: 0 errors;
    - guardtest: all directions pass, and the real files are restored.
  - **Handback:** the Studio on 3170. Cloudflare connected once, then went to 1033 (its edge dropping the connection) and
    stayed there (0 of 6), so the link is srv.us in a reconnect loop, forward 32.
  - **2026-10-12, the user: "I put his face and VO in public, use the same song, and ensure that all visuals are properly
    colored."**
    - **The take** (ElevenLabs "Russ", 67.3 s) reads the corrected script word for word, and the guard finds 0 hits.
      - vo_trim left 58.6 s; vo_retrim restored 0.45 s at the six place boundaries and 0.35 s at three tight spots (after
        "It sued.", before "No admission.", before "Our rating"): 61.2 s, and the film is 61.3 s.
      - Whisper's "backpedaled" is the caption's spelling, since display words must match the take's tokens.
    - **The bed** is the same Runaway cut as 029 and 030, its drop at 5.08 s, under the truck into the tweet. The controller
      ran from a FLAT envelope (an empty `BED_ENV`; a one-point "flat" one is refused as stale) and held 5.4–5.6 dB in every
      window and the tail after three passes. The SFX sit 6.3 dB under the voice at their loud frames.
    - **His photo** (`public/face.webp`, 700 × 816, him alone):
      - cut out with isnet + alpha matting (u2net_human_seg broke his hair into grey blocks);
      - DEFRINGED: every part-transparent pixel takes the nearest solid pixel's colour, so the studio's grey no longer
        haloes his hair on the dark ground;
      - ×2 Lanczos, with the straight foot and right edge faded (`musksharp.py`);
      - he stands left of the printer, in full colour. The hook's framings keep his head whole and below the captions, and
        the receipt is now well out on frame 1.
    - **The colour pass** (new standing rule in L3, "every visual properly coloured"):
      - the court was three objects in one brown wood on a brown ground; now a maple easel, a mahogany gavel and block with
        brass bands, and a honey-oak lectern;
      - the calculator was charcoal on espresso; now a brushed-aluminium face on a graphite shell;
      - the two cheques were one washed grey-green; now his pale blue and Tesla's pale green;
      - the term sheet is bright white against the cream wall.
    - **The checks on the final build:**
      - PEN and EDGES over all 1,840 frames: 0 and 0;
      - FLOAT: 0 on 19 settled frames;
      - the hand-overs: 0 pop-ins, 0 pop-outs, 0 overlaps (2 "linger" frames: the printer's last corner sliding out of the
        left edge mid-truck);
      - the HyperFrames check: 0 errors;
      - the guard against the real transcript: 0 hits.
      The page title still named 029; it is now fixed. Not rendered.
  - **2026-10-12, the user: "at 40 seconds, the hammer should actually be facing down".** The gavel lay on its barrel
    across the block and struck with its side, like a rolling pin. A gavel strikes with the END FACE of its head, so the
    head now stands across the handle with its face down on the block. **Standing note: a tool is posed and used the way
    the real one is**: a hammer, gavel or stamp meets its target with its working face, never its side.
    - At rest the knob lies on the floor, so the head tips back 15.7°. That angle is solved from the head's profile, so the
      face's rim sits 0.3 px above the block; the faces are discs, not lathe caps. On "ruled" it lifts and comes down onto
      its face.
    - The court window was re-audited: 0 crossings and 0 edge cuts, 0 floating parts, and both of its hand-overs clean.
  - **2026-10-12, the user: "for the song use a good man with a broken heart".** The bed is now "A Good Man with a Broken
    Heart", replacing the Runaway cut, and it is the channel's "previous video's song" for the next film unless the user
    names another. It comes from the channel's own copy (002's `music_goodman.mp3`); nothing was downloaded.
    - The song's full arrangement enters 10.43 s in (dropfind.py: a 36.7-dB low-band jump). The bed is cut from 5.00 s, so
      that entry lands on "August" (5.43 s) under the truck into the tweet, with the quiet intro under the hook. −17.1 dB is
      baked into the cut (`music_goodman_bed.wav`), so `MUSIC_GAIN` stays at 0.505.
    - The controller's windows start at the drop (`bedwin.json`) and ran from a flat envelope. After three passes the bed
      sits 5.4–5.6 dB under the voice in every window, and 6.2 in the tail.
    - Verified in the rendered bed stem: the drop at 5.43 s.
  - **2026-10-12, the user: "render".** Rendered through the guarded `scratchpad/render.mjs` (the guard: 0 hits on the real
    take) → `renders/funding_secured_031_hf.mp4`.
    - **Two attempts died with `render_cancelled_parent_exited`.** The first ran as a session task and died at frame 17 when
      the session ended. The second was launched with `Start-Process` and died when the launching PowerShell exited. The
      third ran with `HYPERFRAMES_RENDER_DETACHED=1` (root CLAUDE.md, NEW_VIDEO.md §6) and finished in 26 min 52 s.
    - **The MP4:** 1,840 frames, 61.33 s, H.264 + AAC, 51.8 MB.
      - Its picture matches fresh stills on 40 frames (worst tile 7.2).
      - Its sound is within 0.07 dB of the offline mix, with 0 ms lag, correlation 0.999 and a peak of −2.84 dBFS.
    - **The flash scan listed 10 one-frame reversals.** Fresh stills of the same frames reproduce every one at the same size,
      so they come from the film's own fast motion: the cheques and case file gliding past, the ticker counting, edges moving
      under the camera. Nothing appears for one frame.
    - Served over `serve.mjs` (4170) and srv.us forward 33.
  - **2026-10-13, the user: "change the background color to burgundy red instead of brown, fix the calculator too".**
    - The DARK ground of 031 (hook, price, court, verdict) is now BURGUNDY instead of espresso; the cream ground stays. This
      was given on 031; L2 still names espresso for other films until the user says it stands.
    - The calculator was fixed. Two faults:
      - its bottom row of keys sat half off the body's foot (rows were placed from the top at a fixed pitch). The face is
        now laid out top-down: solar strip, LCD window, five rows between the window and a 24-px margin;
      - its LCD figures were round-capped strokes: thin, gappy (the 4 read as "Ч"), the decimal point lost, and "×1.2"
        printed over the first figure. Now: seven positions of pointed-hexagon segments, every unlit segment faintly there,
        square decimal points, and the annunciators in their own strip above the figures.
    - Burgundy: `#3A0A16` at the edges, `#651B2B` at the centre, matching the espresso's luminance so the sand captions and
      the lit objects read as before. The mahogany gavel and block took the red ground's hue, so they are now EBONY with
      their brass bands (L3's rule: no object in its ground's colour).
    - Checks: price window 0 crossings and 0 edge cuts; FLOAT 0 on 5 frames; the HyperFrames check 0 errors. Not rendered
      (the user: "don't render yet").
  - **2026-10-13, the user's eight review notes, in film order** (pasted as one list, with "General changes" on top):
    - **General:** "Add background assets like trees and a busy street in some scenes to give it a lively feel they have to
      slightly shake a bit to give that movement effect make sure they have a parallax effect and the layers using that
      parallax effect." This overrides L2's "nothing drawn behind the objects" for 031. Built as real 3-D (trees, a street,
      cars) on their own parallax layers behind the objects, softened with distance, the trees swaying.
    - **General, STANDING for all videos:** more camera movement on a long look at one object (now in L7).
    - 1 (0 s): the burgundy ground "with a grid outline" (a fine grid on the dark grounds, fixed in each place's world).
    - 2 (8 s): "some sort of background object like a plant or a desk" by the phone.
    - 3 (13 s, "the stock jumps"): "lines that are moving and slight screen shake or launch into orbit transition adding that
      real lively action feel". A user-sanctioned exception to rule 48's "nothing overshoots" for this one jump.
    - 4 (16 s): the calculator: every key on its body, the screen clean, no figure falling off it.
    - 5 (26 s): "more action on the screen some more visuals related to the context of that scene" (the blank deal terms).
    - 6 (39 s): behind the exhibit board, "loads of people in back as the 'shareholders' angry".
    - 7 (44 s): "use a real lawyer that stands behind the lawyer desk and writes that on the paper from the behind view".
    - 8 (50 s): "get elon musk on the left and some blank character to sit and discuss this. Use a 3d model or some sort of
      model of musk sitting on a chair". With 6 and 7, this overrides L5's "people are photos" for 031: people are 3-D
      figures here. Musk is a stylised figure identified by his name card (no likeness is sculpted or downloaded); the other
      chair holds a blank mannequin for the fund.
    - **What was built** (not rendered: "don't render yet" stands):
      - **People** (`src/three/people.ts`): figures at real proportions with a turned suit jacket whose V, shirt, tie, lapels,
        buttons and back seam are painted into its own texture, hands with a curling finger block and a thumb, and a head with
        ears, nose and brow but no eyes or mouth (a figure, never a likeness). Hair is a shell that meets the scalp at its
        hairline. FK poses and two-bone IK put a wrist or an ankle exactly on a target.
      - **The lawyer** stands at the lectern with his back to the camera, leaning in, and writes the two words on the pad as
        they are said; the pen's tip rides the ink's leading edge and lifts between the lines. He writes LEFT-handed: the camera
        looks past his left shoulder, and a right hand would put his body between us and the page.
      - **The shareholders:** about 20 men and women in suits and shirt sleeves in three rows behind the easel, on a parallax
        layer, hazed and a little soft. Fists pump, two TSLA placards are held at chest height at the crowd's sides, and the
        arms come down when the gavel strikes. Nothing they carry makes a claim.
      - **The table:** Musk (dark suit, white shirt) on the left and a blank mannequin for the fund on the right, both chairs
        turned ~30° toward the camera with their heads turned to each other. His near hand rises palm-up on "Musk said"; the
        fund's figure nods on "agreed informally", then puts its palms up as its chair rolls back on "backpedaled". The chairs'
        seats were lowered (top 170) so a 700-px figure sits with its soles on the floor and its knees under the table.
      - **Background layers** (`camera.tsx` `Back`, `props/street.ts`): a busy street (traffic both ways, people on the far
        pavement, swaying street trees, lamp posts, shopfronts) behind the tweet place and a park (path, benches, lamps, trees,
        people strolling) behind the fair place, each at parallax 0.6 with a far skyline at 0.3. They have their own eye
        (y 900, so the horizon sits behind the objects and the roofs stay below the captions), fog that fades them INTO the
        ground (alpha, not a colour), and a blur drawn into their canvas (never a CSS filter).
      - **The grid:** fine rose lines on a 96-px pitch on each burgundy place, fixed in its world at parallax 0.86 and fading
        out round an ellipse.
      - **The tweet:** a snake plant behind the row; drift keys push slowly in on the tweet's words; on "jumps" the place jolts
        (a decaying two-sine shake over 24 f) and speed lines stream up past the ticker into the crane down, like a launch.
      - **The funding:** a red felt-tip marker comes in and rings PRICE PER SHARE and FINANCING PARTNER as "specific deal
        terms" is said, then leaves; on "any potential financing partner" a rotary card file flips through its cards (fast,
        then slowing) and stops on a blank card. The row was spaced for it (case file at 900, cheques at 1480).
      - **Drift keys** on every long hold: the price overview, the calculator, the funding sheet and cheques, the fair's form
        and table, and the verdict box (in as the stamp comes, out for the sign-off).
      - **Sound:** a sub under the jump's jolt, a long whoosh under the speed lines, a soft whoosh for the marker, a tick for
        each card that turns. Drifts take no whoosh. The SFX sit 6.2 dB under the voice at their loud frames (was 6.3).
    - **What the audits taught, fixed before the render** (six passes; every class traced to its cause):
      - neighbouring shareholders brushed shoulders and raised fists reached the row in front: rows 280 px apart, fists raised
        closer to the body, resting arms tucked in;
      - a seated figure's pelvis and jacket hem sank 15 px into the seat (its hip was set from the thigh's radius alone), and
        forearms resting on the table cut through its rim: the hips now clear the seat, and the hands rest in the LAP;
      - the lawyer's resting right forearm crossed the desk's lip: it now hangs at his side;
      - the street's walkers walked through each other (both directions in one lane): one lane per direction, one speed per
        lane, heads clear under the swaying crowns; lamps off the kerb; the park benches given back posts (a slat floated);
      - background views needed a floor MARKER for FLOAT, and their compound rows (a terrace, an avenue) one object each;
      - in the lectern shot the crowd behind the lawyer competed with his page: a FOCUS PULL (the crowd's blur rises and it
        dims a little as the camera travels on), and the card file's shot moved so the term sheet's title left the caption band.
    - **Checks before the render:** PEN and EDGES 0 and 0 over every second frame of every changed range (one zero-length
      contact: the writing hand meeting the desk for a frame); FLOAT 0 on 10 settled frames; hand-overs 0 pop-in, 0 pop-out,
      0 overlap (9 linger frames: the printer's corner and the speed lines' faint tails leaving the frame's edge); the
      HyperFrames check passed; the script-fix guard 0 hits.
    - **The user: "render"** (2026-10-13). The previous master was kept as `renders/funding_secured_031_hf_v1.mp4`; the new one
      renders to the master name, launched through WMI with HYPERFRAMES_RENDER_DETACHED=1.
      - **The MP4:** 1,840 frames, 61.33 s, 77.4 MB, rendered in 46 min 24 s (capture 45 min: the crowd and background layers
        cost ~70% more than v1).
      - Its sound is within 0.07 dB of the offline mix, 0 ms lag, correlation 0.999, peak −2.83 dBFS.
      - Its picture matches fresh stills on 40 frames (worst tile 16.6 at f912: the card file flipping mid camera move, the
        same picture by eye).
      - The flash scan lists 5 isolated one-frame reversals (f931 a card flipping, f1025/1027 the Tesla cheque gliding in,
        f1229 the gavel lifting, f1360 the lawyer's pen); fresh stills reproduce each at the same spot and size: motion.
      - **A bug the verification caught:** the tweet and fair places both named their skyline view "skyline". The stage
        caches a view's model by its id, so whichever skyline a page built first served both places. The stills (drawn from
        frame 0) showed the tweet's skyline in the fair place; the render's workers, each starting in its own range, drew each
        place's own (its sky band has no jump outside the ground dissolves). Renamed `skyline-tweet` / `skyline-fair`; fresh
        stills of the fair place now match the render.
      - Served over `serve.mjs` (4170) and srv.us forward 33.
  - **Timing is provisional** until the take lands (`provisional.mjs`). `cues.ts` and `blocks.ts` now say PROVISIONAL at the
    top, and render.mjs reads that. The photo `public/musk_face.jpg` had not arrived; the hook keeps a slot for it.
- **2026-10-11 (Video 030 "Stop Asking Me", Jake Paul): THE FIRST FILM IN THE LOCKED "029 HF" LOOK.** The brief is
  content-only, and the user said "use hyperframes". It is built in `OffCamCelebs/030-jakepaul/`, cloned from 029 HF per
  NEW_VIDEO.md, with the look untouched. Studio 3169.
  - **The script first:** three lines corrected at primary source and sent before the build ("never OFFICIALLY disclosed";
    "co-FOUNDED the company that PROMOTED his fights"; "Every independent estimate OF HIS PAY falls far short"). The guard is
    armed with all three, and the take (ElevenLabs, 62.2 s) hits none of them.
  - **Seven places, seven objects, none repeated:**
    - hook: his post on a phone in a desk stand, with Forbes' ~$60M card in an acrylic holder;
    - rise: a vlog camera on its tripod, boxing gloves, and a TV (PAUL vs TYSON, his "$40 million" quote), plus a sealed PURSE
      envelope stamped NOT DISCLOSED;
    - official: the CSAC purse sheet on a clipboard, its $300,000 GUARANTEED line marked, and a brass balance, 2 bundles
      against 5;
    - why: MVP's framed certificate of formation, and an EVENT PROFITS cash box whose lid shuts and is locked;
    - joshua: a ring corner, with $40M and $92M EACH tags on the top rope, his "Unfortunately, it's not." card, and the bell
      struck twice;
    - fair: Forbes' list as a magazine on a wire stand, No. 23 ringed in red pen;
    - verdict: a surveyor's rod to scale (2.9 px a $M), the estimates' clamps far below $267M, and INFLATED stamped on his
      figure's tag.
  - **RULE 54 / 54b, measured before handback.** The full audit (every frame, canaries first) first found 7 pass-throughs
    and 2 view-edge cuts. The second run found 0 and 0, and the hand-overs show 0 pop-ins, 0 pop-outs and 0 overlaps.
    - The envelope ran through a glove's cuff: moved right of the TV's foot.
    - The bundles were lowered through the view's top edge: they now slide in from beyond the right edge onto a pan with a
      flat floor.
    - The phone's foot sat 0.3 px into its stand.
    - The magazine pages ran through the stand's lip: the ledge is deeper.
    - The ring's side ropes ended in mid-air: they now run to a far corner post.
    - The price tags fell through the caption band: they now hang on the rope from the start and swing forward on their
      words.
    - The verdict's clamps popped in at the foot, and the $300K tag sat off the right edge: all three are parked on the rod
      from the start, and two slide up.
  - **His post is quoted exactly in the caption too:** "$267 Million." with its capital M, not whisper's "million".
  - **The bed** is 029's Runaway cut, held 5.3–5.8 dB under the voice by the controller (residual ≤ 0.3 dB). The SFX sit
    7.7 dB under the voice at their loud frames (Bankers 5.8–7.5, 100bps 8.6).
  - **His photo, 2026-10-12** (the user: "his face pic is in public", `public/face.avif`, 640 × 637).
    - A sliver of another person's white sleeve at its right edge was CROPPED out of the source before the cut-out.
    - `u2net_human_seg` gave a solid mask; isnet left his left sleeve see-through.
    - `jpsharp.py` then applies ×2 Lanczos and a light unsharp mask, and fades his waist (below the fists and watches) and
      both side cuts, so no straight edge of the photo is drawn.
    - He stands at the left behind his phone. The opening framing moved 90 px left: at x 560 it cut his face in half at the
      frame's edge.
    - The hook re-audit is clean (0 pass-throughs, 0 edge cuts, 0 pops at the hand-over), and the HyperFrames check passes.
  - **2026-10-12, the user: "the camera visual has a floating piece, fix that and then render".**
    - The vlog camera's flip screen hung 15 px off the body's side, joined to nothing. It is now hinged on a pin at the body's
      rear-left edge. Its red record light, also floating 42 px in front of the body, is now set into the body's face.
    - **Treated as a CLASS.** No check could see it: PEN only compares different objects. So `g3audit.ts` got FLOAT (rule
      L9.4b; canaries: a part 10 px off its object must fire, the touching twin must not). The film was rendered from the
      camera fix alone first; when FLOAT found more, that render was stopped at about 10% and nothing was kept.
    - FLOAT found 22 more on the settled frames, all fixed:
      - the Forbes card (19 px over the floor) and its acrylic panel (in front of its foot);
      - the TV, whose neck stopped 6 px above its foot;
      - the boxing gloves' cuff linings;
      - the cash box key's bow, 7 px off its shank;
      - Joshua's card: its clip did not grip it, and its handles arced 15 px over a rope that slopes 7 px;
      - the price tags' strings, 6–14 px over the rope;
      - the bell's hammer, whose pivot hung 62 px past its block (the block now runs under it, with a mount);
      - the magazine (2.5 px over its ledge) and its pages (off the cover);
      - all four verdict tags, 6 px in front of their clamp arms;
      - the stamp, which waited in mid-air with no hand: it now leaves as it lifts.
    - After the fixes: 0 floating pieces on 11 settled frames.
    - **The rendered MP4's flash scan then found one more (f515):** on the TV, "PAUL vs TYSON" rose through his "$40 million"
      quote while the quote faded in, so text crossed text for ~6 frames. No check of the stills had landed on it. The lower
      third is now staged: the bar grows and the title clears, THEN the quote fades in (linear driver, each half eased on its
      own, 20 f). That MP4 is kept as `renders/_superseded_tv_text_cross.mp4`, and the film was rendered again.
    - **The final MP4 is `renders/stop_asking_me_030_hf.mp4`** (48.4 MB, 23 min to render).
      - The file: 1,880 frames, 62.67 s, H.264 + AAC.
      - Its picture matches fresh stills on 45 frames (worst tile 6.4).
      - Its sound is within 0.06 dB of the offline mix, 0 ms lag, peak −1.15 dBFS.
      - 0 isolated flashes. The full audit before it found 0 crossings and 0 edge cuts, and the hand-overs 0 pops.
  - No MP4 was rendered before this request.

- **2026-10-09 (Video 029 "Money, On Paper", Floyd Mayweather): CONTENT-ONLY BRIEF, built on 028's kit.** It keeps every
  standing taste note: rules 46–50, the 100bps hand-overs, no dots between words, and RULE 49's materials. Seven places
  carry seven objects that never repeat:
  - **hook:** a stack of strapped $100 bricks; a third of it leaves on "never reached him";
  - **pay:** a currency counter counting to $1,000,000,000 with a PRE-TAX lamp;
  - **2017:** the IRS notice rising from its envelope, and the petition on pleading paper, "primarily illiquid"
    highlighted;
  - **2025:** a Manhattan street whose windows light, then go dark but one; his claim and the counterclaim both leave
    the frame;
  - **2026:** the blue-backed complaint with a red ALLEGED flag, the "baseless" statement, and the lien chained across
    the table;
  - **fairness:** an honours board (Forbes' No. 1 in 2012, 2014, 2015 and 2018) and the lawyer's letter;
  - **verdict:** a $1B CLAIM folder that opens empty and is stamped UNSUPPORTED.
  - **What the checks taught on this build, by class:**
    - **Seen in the stills and close-ups:**
      - a document's heading wider than its paper;
      - text drawn behind a page that the probe reads as text on text, so the ALLEGED tab became a flag that glides
        on and sticks;
      - a faint offset "glow" copy of LED digits that read as a ghost $1 at 1:1, now removed.
    - **Found by the probe:**
      - objects in the caption band at a camera key, because a push-in lifts the top of the frame;
      - more than three things to read when the camera crane-down kept the papers in view, so the camera trucks to the
        lien instead;
      - text half-cut at a frame edge after a camera travel;
      - an empty place for 11 f in a truck.
    - **Found by the timing table:**
      - actions starting inside a place's arrival;
      - a place opening on an empty table, so the complaint is now there and the camera reveals it (rule 46).
  - **2026-10-09, THE TAKE AND HIS PHOTO WIRED.**
    - **The take:** 70.9 s raw → 63.4 s (0.45 s kept at the six place boundaries); voice +2 dB, because the read is 2 dB
      softer than 028's. The bed is Runaway, its drop on "Now" in "Now, in a lawsuit", 5.4–5.6 dB under the voice after
      three controller passes. The SFX are on the Bankers band (airwoosh −3 dB). The mix peaks at −5 dB; the guard finds 0
      hits.
    - **His photo:** he stands in the hook behind the table, fists up. The table's front is drawn again in front of him,
      so the photo's straight foot is hidden by the table. His head grazed the photo's top edge, so it was rounded to a
      circle fitted to its own outline (`mayfinish.py`).
    - **Holds over 1.6 s, on the real timing, broken by actions the lines motivate:**
      - the hook opens close on his face and pulls back on "once said";
      - a push and a second highlighter stroke on "substantial";
      - the camera eases back over the whole street on "Business Insider reported";
      - the counterclaim arrives on "both sides";
      - a push on "went missing" and an ease back on "helped";
      - the padlock arrived open and snaps shut on "lien".
    - **Clone carryovers caught by refusals:**
      - `vo_retrim.py`'s list of 028's place names, now any name;
      - `guardtest.mjs`'s sabotage keyed to 028's fix;
      - the shot-table and whoosh tools' set counts;
      - `bedenv.ts` holding 028's envelope.
  - **A fact that holds only on a date is drawn as one that stays true.** "The three athletes past $1B" (Forbes, 2018) is no
    longer the whole list, so the board shows the four years he topped Forbes' list, verified year by year.
  - **2026-10-10, THE STYLE IS LOCKED ("This looks amazing, I want you to fully save this style… ensure that the style will
    stay the same if I send you another video prompt later on. Render too").**
    - **The record:**
      - "THE LOCKED LOOK — 029 HF" (L0–L9) is now the first section of this file;
      - `029-mayweather HF/NEW_VIDEO.md` is the clone guide;
      - the root CLAUDE.md's OffCamCelebs section points every new film at both;
      - the memory index is updated.
    - **The template made safe to clone:**
      - the bed and the photo are named in `data.ts` (`MUSIC_FILE`, `PHOTO_FILE`), and build.mjs and the driver read them;
      - the Remotion 029 VO / caption / level tools are copied into `scratchpad/vo/` with the HF paths (`assets/audio/`, the
        offline `mixprobe.mjs` stems in place of Remotion's solo renders).
    - **The render the user asked for:** `renders/money_on_paper_029_hf.mp4`, delivery quality, on the checks' software
      renderer (30 min).
      - **The first render's flash scan caught one flash:** the folder cover swept its shadow across the page in ~4 frames.
        The cover now swings on SOFT over 34 f, and the film was rendered again.
      - **Checks on the final MP4:**
        - 1,908 frames, 63.6 s, H.264 + AAC 48 kHz, 45.8 MB;
        - the sound matches the offline mix within 0.02 dB, lag 0, correlation 0.998, peak −2.9 dBFS;
        - the bed sits 5.2–5.8 dB under the voice;
        - 45 frames match fresh stills at encoder noise (≤ 6.7);
        - 0 isolated flashes, except the sign's swing and the counterclaim's glide, looked at and confirmed as motion.
      - **The stills check also exposed "italic 800"** (no such face) varying between runs. The quotes are now drawn by
        `fillBoldItalic` exactly as the render drew them, and fresh stills match the MP4 on every quote frame.
  - **2026-10-10, RULE 54 / 54b ON 029 HF: THE FULL SWEEP, AND THE FIXES.**
    - **Measured first.** All 1,908 frames were captured headless (no MP4). The in-page audit (`src/audit/g3audit.ts`,
      canaries first) found:
      - 69 pairs of objects passing through each other, on 1,406 frames, among them:
        - the stamp sinking ~80 px into the folder at one minute;
        - the letter's folds through its envelope;
        - the petition gliding through the envelope;
        - the statement through the complaint's pages;
        - the flag inside a page;
        - the shackle through a chain link's steel;
        - the sign's chain through its arm;
        - bricks into bricks, cornices into cornices.
      - 651 frames where a 3-D view's edge cut a shadow or a part.
      - Four hand-overs where a piece of a scene showed early or lingered and vanished: the hook's floor slab beside the
        counter, the buildings' corner beside the IRS papers, the lien chain beside the board, and the board's edge in the
        crane.
      - A shade audit (lit ÷ albedo per object): even the darkest 5% of each object got ≥ its albedo. No dark sides.
    - **Fixed.**
      - Frame masks ride every hand-over (`Film.tsx` `frameOf`), with truck gaps ≥ 140 px and cranes 2000 px.
      - Stacks are built with real clearance, and things are seated with `paperTop`.
      - The letter's curl lifts only once it is out of its envelope (paper can reshape now).
      - The stamp works in the folder's frame, and the sign swings about a round arm.
      - Views reach past the frame's foot, and floor and backdrop shadows fade out over an ellipse.
      - Materials take the environment as their own map. The new rig is key 3.8, fill 0.3, env ×0.35 for non-metals, a
        higher key.
      - PCF shadows replace VSM, which threw false dark wedges across the letter and the complaint.
    - **After.**
      - The audit over every frame finds 0 crossings beyond the named, designed joins: staples, the shackle's legs in the
        lock, the strap round its bundle, the hopper set into the counter.
      - 0 visible view-edge cuts.
      - `stale029.py` finds 0 pop-ins, 0 pop-outs and 0 overlaps at all six hand-overs. The leaving place is gone ≥ 9 frames
        before its window ends.
  - **2026-10-09, A HYPERFRAMES RECREATION, MORE 3-D (user: "I want you to recreate this video using hyperframes, but make
    all the visuals more 3d").** It is built as a SIBLING project, `OffCamCelebs/029-mayweather HF/`, and never edits the
    Remotion project. It reuses the take, the bed, the SFX, the captions and the cue list as data (the root CLAUDE.md's
    HyperFrames-recreation rules: V34 HF). "More 3-D" means real Three.js models, lit, on a floor with real shadows, in
    place of the SVG-projected solids. Type, captions and his photo stay 2-D. Rules 45–52 and every content guardrail carry
    over unchanged.
    - **Built the same day.** Every object is a Three.js model (`src/three/props/*.ts`) drawn by V34 HF's stage into a
      `View3D` that rides the ported camera. Standing objects sit on a floor with real shadows; flat ones hang in front of a
      shadow-catching backdrop. Facades have real window openings, the folder a real hinge, the board a real spot light.
      HyperFrames `check` passes with 0 errors. Studio port 3168. No MP4 rendered. Notes: `TRANSLATION_NOTES.md` there.
    - **The rule-53 pass (paper as paper), same day.**
      - **Paper:** `paper()` (kit029.ts) is a displaced surface with bow, Z-fold creases and lifted corners, a back face
        and a thickness band. Print and ink follow it: the stamp's impression takes the page's own bow (as a flat plane it
        was swallowed by the bowed page).
      - **Stacks:** two stapled pages for the petition and the claims, three pages on stiff blue card for the complaint.
        Staples are seated on the curved sheet.
      - **Solids:** bricks, straps, lips and fasteners have rounded edges.
      - **Shadows:** VSM shadows (radius 12) give a real penumbra. Backdrops sit 26–30 px behind their sheets.
      - **Light:** paper takes little of the studio environment, so the key models it.
      - ⚠ **Every backdrop shadow had been invisible.** The plane was built with a negative height, so it faced away and was
        culled. Proved by setting its shadow to 0.95 and seeing none. Check a new shadow catcher the same way, at full
        strength, before trusting it.
  - **2026-10-09, RULES 51 AND 52: NO TEXTURES, NO ROOMS, EVERY OBJECT 3-D.**
    - **Rule 51 (the wood note):**
      - `Mat` lost its grain and fibre, and the wood, plaster, cork and fibre tiles are gone from the kit (`strip51.mjs`
        removed 129 texture props).
      - All seven drawn rooms are gone (`Room` and `Floor` deleted). Each place is its plain ground plus `Light`: soft pools
        fixed in the world behind its objects, which show the camera's travel.
      - His photo is ×2 Lanczos + a light unsharp mask, and his waist fades into the dark by the cash's foot
        (`maysharp.py`): with the table gone, the photo's straight foot would show.
      - The bricks became irregular, each a few px off, its strap off-centre, two paper printings. A perfect grid of identical
        copies reads as computed.
    - **Rule 52 (the 3-D note), the kit: `src/r45/solid.tsx`.**
      - **Projection:** objects are defined in 3-D and projected with real perspective in SVG, so edges and print stay
        vectors at any zoom. A CSS 3-D layer would be rasterised at 1× and stretched by the camera's push.
      - **Light:** one key, upper left, shades every face. A face turned like a front face shows its base colour; tops
        lighten, the far sides darken. Lit hairlines run along the edges that meet a lit face.
      - **Parts and shadows:** prisms, rounded profiles, boxes, cylinders and frusta. `Part` turns or hinges a piece in 3-D
        (the folder's cover now swings on a real hinge, the sign on its chains). `Cast` and `Contact` give the shadows.
      - **Print:** decals map print onto faces through three projected corners. `Sheet` (docs.tsx) is 3-D paper whose print is
        drawn in world coordinates, as the flat print was.
      - ⚠ **Parts of one object are painted in the order written, so write them back to front.** The counter's skirt, drawn
        after its body, painted its own top face over the body's lower front.
    - **What became 3-D:**
      - the wall of cash, with a yaw arc across the hook;
      - the quote card;
      - the currency counter (hopper, keys standing off the face, the stacker's lip);
      - the envelope, notice and petition;
      - eleven walk-ups (roofs, side walls where heights differ, cornices standing out, fire escapes off the wall, stone
        stoops);
      - the sign and its post;
      - the claims, the complaint and its flag, and the statement;
      - the lien's chain, padlock and tag;
      - the honours board (raised moulding, brass plates, a tube picture light);
      - the letter, the folder and the stamp.
    - **Found on the way:**
      - **On a plain ground, an empty run IS a blank frame.** Fairness had an 8-f gap between the camera reaching the
        letter and the letter arriving. That passed the probe's 10-f limit, and the wall used to fill it. The letter now
        glides in during the travel (a declared TRAVEL warning, like the chain).
      - **A cast shadow needs a penumbra.** Three offset copies left a hard grey band that read as a border on cream. `Cast`
        now steps eight fainter copies outward.
      - The laid paper's chain lines read as stripes (rule 51), so they are gone.
    - **Checks after the rebuild:**
      - probe CLEAN on 954 of 954 probed frames (every second frame), and on every frame of fairness after its fix;
      - rule 48 clean;
      - actions: 0 refusals (two deliberate TRAVEL warnings: the chain and the letter);
      - holds ≤ 1.60 s;
      - fluid flags of the same classes as before (lamp flickers, the windows, staggered exits; the cover's real hinge
        swings toward the camera, looked at frame by frame);
      - all 6 hand-over whooshes within ±3 f;
      - black scan: only the counter's display and skirt;
      - SFX sheet and render guard clean.

- **2026-10-07 (Video 028 "The Billion That Moved", Kim Kardashian): THE BRIEF IS CONTENT-ONLY.** The user: "THIS IS A
  CONTENT-ONLY PROMPT … Everything visual is your call: look, colours, type, captions, transitions, pacing, number of
  scenes. No style rules from earlier videos carry over unless you want them. If you want a starting point, the two
  reference Reels in refs/ show the kind of thing Timur likes."
  - **What it means for the build:** the story, script and facts are fixed and come from the prompt; the look is mine.
    The prompt's must-haves are the hook first, visuals following the words, big numbers that land, and text clear of
    the Reel's buttons and caption area.
  - **What I chose to keep, because each one is the user's own taste note and not a 027 accident:**
    - rule 46 (the viewpoint travels);
    - the 100bps camera-move hand-overs, with no edge of a scene ever seen;
    - rule 47 (one thing to read at a time);
    - rule 48 (everything eases in and out);
    - no dots between words;
    - the flat editorial drawing and the word-by-word captions the two refs show.
  - **What is new for 028:** its palette, its objects and its scene count.
  - The "refs/" folder named in the prompt was not on disk. The two Reels are the 027 pair in `OffCamCelebs/Temp/` (the
    pitcher and the container).
  - **First sweep, before handback (my own checks; no user note yet). Lessons that carry to any clone:**
    - **An object that carries a NAME must show it in frame.** Coty's cuff sat past the right edge while its hand held
      the fifth pan, so the hand was anonymous. The probe's BRAND list caught it as "never matched". A declared brand that
      never matches is a defect, not a stale entry.
    - **A hand that holds something in the middle of a place must LEAVE before the camera travels on.** The deal's arm
      hung into the gold-bars shot. It now carries its fifth away (a declared EXIT), and in the fade it brings the 20%
      back: bought, then sold.
    - **A short sentence cannot hold a camera travel.** "SKIMS." is under a second, so the camera left the lit sign
      ~0.4 s after it lit. The name and the rail now share one view. `scratchpad/actions028.mjs` tables every action
      against its place's travels, its arrival and its hand-over.
    - **A path with fixed corner radii turns inside out while it grows** (the unrolling tags drew a "bone" for 4 frames).
      Clamp the radii to half the animated size. **Slats that sit still while a shutter grows read as a wipe**: they
      ride with the bottom bar.
    - **"Half" has to divide evenly.** A rose band across a 2 × 5 grid of bars read as a stick lying on them. Two
      stacks of five, with one turning rose, reads as half.
    - **A plain disc on a stick with a bar across it reads as a no-entry sign.** Auction paddles need their bidder
      numbers.
  - **2026-10-08, RULE 49 rebuild (every object, after the user's two notes).**
    - **The kit:** `src/r45/mat.tsx`, built from tiles made by `scratchpad/textures.py`.
      - Its gradients are white/black overlays, so one gradient turns any base colour; gold, rose gold, chrome and brass
        are full materials.
      - A grain tile sits inside each object, plus fibre and a worn-ink mask.
      - Parts: contact and wall shadows, screws, eyelets, cords, chains, push-pins, guilloche borders, engraved and
        raised lettering.
      - No filters: they jitter on moving things.
    - ⚠ **Grain strength:** the first pass laid the grain at 0.5 and the sleeve read as sandpaper. It now runs at 0.15–0.25.
      Judge it 1:1, never in a contact sheet.
    - **The hand, after the shape note:**
      - Each finger is generated from a jointed centreline (`limb()` in art.tsx), so the fingers differ in width and
        reach.
      - The back of the hand is drawn OVER the fingers' roots with a knuckled leading edge, so no finger ends in a cut
        line.
      - The thumb has two joints; the cuff wraps the wrist in a curve; the sleeve opens in a curve.
    - **Never repeat a visual held:** the fair caveat's $5B became a term sheet on a clipboard, because a second share
      certificate (the fade has one) would have repeated it.
    - **Bid paddles** have the handle fixed BEHIND an oval face. A flared neck read as a spoon.
    - **Found on the way:** the palette's counter printed "$1000M" for two frames before "$1B". It rounded to tens
      without carrying into billions.
  - **2026-10-08, RULE 50 pass (the "made by AI" note). What changed, measured before and after:**
    - **Easing:** motion runs went from symmetric to front-loaded. Of runs of 6 f or more, the median share of motion is
      40% in the first third and 12% in the last (`motionstats.py`).
    - **No fades into being, anywhere:**
      - the KKW plate is lowered on its chains;
      - the bulbs flicker;
      - the price label and the hand glide in from beyond the edge;
      - the CLOSED card rides the shutter down;
      - the 10-Q filing slides in and its $74M is highlighted;
      - the tags unroll over their printed figures and twist to their blank backs;
      - the PRIVATE ROUND slip slides in, clipped to the certificate;
      - the nameplate slides into the plaque behind its lip;
      - the stamp is a real tool, seen from behind.
    - **Rooms:** every place stands in a real room that runs off the frame, drawn in a back pass (`Room`): the plaster wall,
      the walnut counter and cabinet, the street with an office window and pavement, the showroom, the cork board and the
      mahogany panelling.
    - **The camera:** it is locked off between keys. Captions no longer rise. There are no sub-labels.
    - **Holds:** the four over 1.6 s were broken by actions the voice motivates.
      - The first frames froze until the camera moved: its key now starts at frame 0.
      - The deal's pan to the gold is keyed on "Forbes", not "Months later" (a 2.6-s hold went to 1.5 s).
      - SKIMS: the camera goes in on the first tag, then eases back on "in 2021" (a 2.7-s hold went to under 1 s).
      - The verdict: the stamp is drawn DOWN off the card. Lifted in place, it covered LEGIT until 0.8 s after the word.
        It now waits in its hand under the card and leaves on "next", so the last line is no longer a 1.9-s freeze.
    - **On twos:** offered, not imposed, as `InfluencerAudit028-Twos`, because the user's 025 note removed it.
    - **Checks:** probe CLEAN on 2107/2107 frames, rule 48 clean, black scan 0, 66 SFX cues clean, and all five hand-over
      whooshes within ±3 f. The longest hold is 1.60 s.
  - **2026-10-08, THE FIRST MASTER, AND WHAT IT GOT WRONG.** The user: "the text in the first two scenes is messed up in
    the render, ensure that everything is fine and render properly".
    - **What was wrong:** the hook's gold sign figures ($1B, the $1.0B → $1.9B count) showed a doubled ghost through the
      hook and the truck into the deal. The gradient-filled text kept frame 0's camera transform in the sequential render.
    - **Where it showed:** `seqcmp028.py` against fresh stills every 10 frames found 23 differing frames, all hook text,
      and nothing else in the film.
    - **The fix:** `Extruded` paints its gradient and grain through a clip of the words, never as the text's own fill.
      An A/B with the old fill fired on 8 of 8 frames; the fix fired on 0 of 27.
    - **The rule (OffCamCelebs, every master from now on):** no `<text>` filled with `url(…)`, and every rendered MP4 is
      compared with fresh stills (`freshstills.mjs` + `seqcmp028.py`) before it is handed back.
  - **2026-10-08, HER PHOTO AND THE NEW BED, WIRED.**
    - **The photo** (user: "face pic in public"): `public/face.webp`, 456 × 672, with only her in it. Cut out with
      isnet-general-use and alpha matting, then finished by `scratchpad/kimfinish.py` → `kim_final.png`:
      - every part-transparent pixel takes its colour from the nearest solid one (the backdrop's light showed as a halo);
      - the alpha is choked by 1 px;
      - the sides cut by the photo's frame fade over 40 px;
      - it is upscaled 2× with Lanczos.
      ⚠ A rounded inset was tried first for those sides: it read as an oval vignette with a notch.
      `photobox.py` measures the face circle from her skin and her chin; 027's share-of-image formula assumed a square
      bust. The hook's `HER` went from 820 px at y 1300 to 640 px at y 1230: at the old size the frame's foot cut her at
      the eyes.
    - **The bed:** Runaway's drop (21.68 s in the track, `dropfind.py`, with canary) lands on the measured onset of "now"
      (7.38 s). The film plays a CUT of the track (`music_runaway_bed.wav`, from 14.30 s, −16 dB). The bed controller's
      windows start at the drop, so the piano intro keeps its quiet build (about 16 dB under the drop). The hook's
      $1.9B count lands on the drop.
      - ⚠ **Remotion rounds `<Audio>` volume to steps of 1/97.** At this bed's 0.08 gain that is ~1.1-dB steps, and the
        controller oscillated. With the −16 dB baked into the file, the gain is ~0.5 and three passes converged to 5.5 dB
        in every window (residual 0.0).
      - ⚠ **The track sings explicit lines under the voice from 30 s** ("toast for the douchebags… assholes…
        scumbags"; "scumbags" lands on "Forbes puts her at 1.9 billion"). This was flagged to the user, with a lyric-free
        loop of the pre-vocal instrumental offered.
  - **2026-10-08, THE BED, SUPERSEDED THE SAME DAY.** The user: "song in public as well, make the beat drop when the VO
    says much NOW at the start". 028's bed is now the track they supplied, Kanye West's "Runaway". Its BEAT DROP is placed
    on "now" in the hook line "twice as much now".
    - **★ A standing preference:** when the user names a moment for the drop, the bed is cut so the track's measured drop
      lands on that word's measured onset. The bed starts mid-track (MUSIC_SKIP_FRAMES), fades in under the voice, and is
      levelled by the same rendered-stem controller.
  - **2026-10-08, THE TAKE WIRED.** The user: "use the same song for now". The bed stays 027's Radiohead track until they
    name another.
    - **The take:** ElevenLabs Russ, 71.8 s raw → 64.5 s (`vo_retrim.py`, 0.45 s kept at the five place boundaries) → a
      64.6-s film. It reads the corrected script, so the guard finds 0 hits; the one rephrase is "Then $3.2 billion. Then
      $4 billion." The voice is levelled per cue (spread 6.7 → 0.6 dB). The bed is 5.0–5.5 dB under the voice in every
      window and in the tail, after two controller passes. The SFX family median is on the Bankers band. The mix peaks at
      −4.0 dB.
    - **Clone carryovers that would have broken the take, each caught by a refusal:**
      - `vo_retrim.py` matched 027's scene names and pause keys;
      - `bedenv.ts` held 027's envelope (reset flat; the film now accepts an empty envelope);
      - `shots.json` still described the provisional 2,107-frame film.
    - **Whisper on this take:**
      - It writes Coty as "Kody". Both the caption table and the deal's word anchor accept it.
      - It splits a figure into two tokens ("$1" | ".6", "20" | "%"). `scratchpad/mergetok.mjs` joins them before anything
        indexes the words.
      - It stretched "Then," over the pause before "SKKN", so that word started 0.18 s late. `onsets.py` now also uses a
        pause in a punctuated word's tail.
    - **`scratchpad/wordcheck.mjs`** tests every `word(S, i, /re/)` anchor against the take's tokens before a bundle. It
      found three anchors written for the provisional tokens ("Coty", "3.2", "4"). It refuses unless it parsed every call.
      Its first version was written through a shell heredoc that ate its backslashes, and it passed one of those three.
    - **Retimed for the take:**
      - SKIMS' stake fill starts on "about" (keyed to "third", the set held past "To be fair");
      - Coty's hand and the PRIVATE ROUND slip start 4 f later (they began inside their place's arrival);
      - the gold pans light 4 f apart (the last tick fell on the $1B ping);
      - clicks are 3 dB down (+2.7 dB over the voice, against Bankers' −0.9).
    - **Checks:** probe CLEAN on 1939/1939 frames, rule 48 clean, the guard and guardtest clean, the SFX sheet clean, all
      five hand-over whooshes within ±3 f, black scan 0. The longest hold is 1.40 s.

- **2026-10-07 (Video 027 — REVISION 3: RULE 48, "the animations and transitions still don't smooth in and out enough,
  enforce that further").**
  - **What was measured first** (every curve's speed at its first and last frame): the default curve of every `ramp`
    (the old SOFT), the back-out entrances, the counters, the caption word-in and the dive's opening all started at FULL
    speed, and BACK_SOFT and BACK overshot. Every curve now lives in `tokens.ts` (SOFT, ARRIVE, SMOOTH, TRAVEL, INOUT, COUNT;
    EXIT for declared exits; TYPE for typed counts) and passes the rule-48 test.
  - **Hand-overs:** the dives are gone. All six are TRAVEL trucks (44 f) and cranes (48 f), alternating: truck R, crane
    down, truck R, crane up, truck R, crane down (one world, places running right). The far wall and floor fade on an
    eased curve, not a linear one.
  - **The name beat** ("Kylie Jenner.") is now the crown place's own eased push-in on her face (×1.6). A truck between
    two places that both held her photo would have shown her twice.
  - **Things that stopped at speed now settle:** the tube set down, the coins, the crown onto the roof (no falls), the
    kits' shrink-away. The coin toss rides one eased progress. Captions: 7-f word-in from rest, eased 6-f beat clear.
  - **Durations:** camera keys ≥ 30 f (≥ 40 f for 400 px+), enforced by `checkKeys`. Every timing field ≥ 10 f, and every
    fade-in ≥ 10 f.
  - **Found on the way:**
    - The compact's counter label appeared in one frame when its value passed 0.5 (now a frame-keyed fade, and TEXTPOP
      in the audit catches the class).
    - The verdict's floor was a 1120-px rect inside the stage, whose ends and bottom edge a crane's depth arc would
      show. It is now architecture.
    - The calendar's label was left as a 10-px sliver by the push-in; it now fades as the push starts.
  - **Tools:** `curves027.mjs` (curves, ramps, declared exits, TEXTPOP, durations, hand-overs; canaries both ways), and
    `fluid026.py` at 0.30 / 0.30 / 0.40 with the hand-overs judged as actions.

- **2026-10-07 (Video 027 — REVISION 2: RULE 46 cameras, 100bps hand-overs, RULE 47 density).** Three user notes in one
  pass: the viewpoint must travel ("it's supposed to feel like the place that they're watching the visuals from is
  changing"), the hand-overs must be 100bps' ("remove those weird zoom out or sliding animations where you can see the edge
  of the scenes"), and "some scenes still simply have too much information on them".
  - **The kit:** `src/r45/camera.tsx` (Cam keys, drift, creep, a parallax far wall, floors), and Film.tsx's truck / crane
    / dive with yaw, pitch and the depth arc on one continuous ground.
  - **Order of moves:** dive (crown→lipstick), truck R, crane up, dive, truck R (+120 px), dive.
  - ★ **What the first contact sheet of the new hand-overs showed, and the fixes (keep these):**
    - A crane between two sets that both hold HER PHOTO showed her twice. It became a dive into her face, and the name
      beat opens close on her face.
    - **A floor drawn as an opaque world rectangle shows its edge in a crane or a truck** (a cream slab came down over the
      compact). Floors and walls are now ARCHITECTURE:
      - drawn in a BACK pass for both places before either place's objects (`Pass` context);
      - in a truck or crane, gone before the switch and back after it;
      - the envelope's desk slab became one.
    - **A place larger than its frame reaches into its neighbour in a truck.** The fair's bag and dial landed on the
      envelope's lamp and replies. The fix is ONE-WORLD geometry: truck toward the side the new place does NOT extend to
      (R here), plus a `gap` where a place's edge object sits at its frame edge.
    - A tilt UP to an object above brings it down through the caption band. The fair's dial moved to the wall on the
      RIGHT (a lateral pan), and the envelope's replies went further ALONG the desk.
    - The tipped bottle lay across the week tiles: the tiles now sit on the bottle's far side from the beaker.
  - **RULE 47 (the user's density note), measured by the new INFO count. Things to read went from 4/11/5/9/7 to ≤ 3 in
    every scene:**
    - every source line is one line;
    - the beaker shows only $25M (no 0–100, no $M, no 2019 sticker) and the tiles have no WEEK labels;
    - the gauge shows only $670M and the $1B lamp;
    - the replies are one line each, as two objects (token + bubble), with the lamp out of frame;
    - the verdict's shadow label leaves as the crown drops, and its "Coty, 2019" line is gone (sourced at the mirror);
    - the envelope and the lens stay put (the camera leaves them).
  - The score drops a camera-travel whoosh that peaks with an action's own whoosh (one whoosh at a time).
  - ★ **A dive's picture is not always fastest at its switch.** Opening on a new face or a new ground, it is (lipstick −2,
    envelope −1). Opening cream on cream onto a small pale shop, the verdict's picture peaked while the gauge swept out:
    11 f early at zoom 5, and 9 f at 3.2, whatever the fade. Dives now take a MEASURED `peak` offset (whooshsync027 on
    the every-frame render), so all six whooshes are within ±3 f.
  - The $1B lamp's flicker was a sine, which starts at full speed (a fluid026 JOLT); it is now a sin² pulse.
  - The near-black scan (`blackscan027.py`) flags only the photo frames (her black hair and dress): expected.

- **2026-10-07 (Video 027 — REVISION; user: "Her photo is in public, the transitions shouldn't have been altered from the way
  they were last video, bring them back. Also, do not include any AI text with the dots in between the words at all")**
  - **The transitions are 026's again** (rule 45 amended above): 026's engine ported whole into `027-kylie/src/r45/Film.tsx`:
    push R into the lipstick, dolly L into the compact, push B into the skincare, dolly R into the envelope, push T into the
    fair part (the coins come down), collapse + rise into the verdict. Switches 195 · 453 · 738 · 993 · 1365 · 1665; each
    set waits for its last spoken word before it leaves; the sets' own entrances were moved to land after their hand-over
    (no compact or boutique pop: the dolly and the rise carry them in). The score's hand-over sounds are 026's families
    (swoosh / whooshsoft alternating on pushes, whooshlong on dollies, lowwoosh on the rise): all 6 within ±1 f of the
    picture's fastest frame, the dollies inside their motion plateaus.
  - **No dots between words** (rule 45 amended above): every sub-label and in-object label rewritten with commas, colons
    or a second line ("2016: $307M", "Forbes 2017 estimate: $330M", "Forbes" / "5 Mar 2019"…), and the caption's "S.E.C."
    set as "SEC". ★ The probe now reports any rendered text with a middle dot, a bullet or a dotted abbreviation, and
    refuses unless its canary ("A · B") is caught on every frame: 944/944 caught, 0 others.
  - **Her photo** ("kylie jenner face.webp", 554 px, her alone, WITH its backdrop): upscaled ×2, cut out with
    isnet-general-use (the human-seg model left a blue halo in the hair), its straight source-edge shoulders rounded inward,
    measured by `photobox.py` → `photo.ts` (head centre, crown seat, face circle, and the silhouette as 14 bands the probe
    measures instead of the square image). The crown is fitted to her measured head; the $1B tag hangs from the crown's
    left peak, clear of her hair. ⚠ At the name reveal it is shown 2.3× its source size and reads slightly soft.
  - ⚠ A Python edit script turned a regex `\b` into a literal BACKSPACE again (CLAUDE.md's trap); caught by reading the
    line with `cat -A`, repaired through a written file with String.raw, and every edited file scanned for control
    characters.
  - Probe CLEAN on every 2nd frame (exit 0); motion scan: only by-design flags; no black frames.

- **2026-10-07 (Video 027 "Half the Size", Kylie Jenner — FIRST BUILD in RULE 45 "FLAT EDITORIAL")**
  - **The script came first** (fact-checked in parallel, sent before the build): one blocking fix (her lawyer's
    "unequivocally false" covered only the forgery accusation, not "the claims"), three precision fixes ("Fifteen months";
    "sold", not "made"; "Coty's forecast … for all of 2019"). The take was read from the corrected script; the guard has 1
    pattern and 0 hits.
  - **The take:** trimmed to 60.9 s, then only the six SET boundaries and "Kylie Jenner." given back some of their own
    pause (0.42–0.45 s; a first pass at 0.28/0.55 ran 64.7 s, at the cap) → 62.8 s, speech ends 62.4 s, film 62.9 s.
    Voice levelled cue by cue (6.5 dB spread → 0.3). VO_GAIN 1.668 → 0.906 (the take rendered −19.0 dB speech-gated, a
    −0.3 dB peak); the bed (the Radiohead track) held at 5.5 dB under in every window (residuals ≤ 0.4 dB after one pass).
  - **The kit is new: `027-kylie/src/r45/`** (Film, Caption, art, sets/crown…verdict, score). Seven metaphor sets with
    the brief's alternation (push R · cut · push B · cut · push L · cut, 12 f); the 1.00→1.04 push-in runs across each set,
    its origin chosen per set so the top and bottom readable lines both stay in the safe zone under the ×1.04.
  - **Captions:** 35 beats generated from the transcript by word index (captions_vo.mjs now writes BEATS: ≤ 26-char italic
    lines, ≤ 14-char bold runs, refused otherwise); each word blurs in over 5 f on its onset; the hook's first word is
    already building on frame 0.
  - ★ **Findings worth keeping (027):**
    - The compact's OPEN view is a flat projection: a disc of radius r seen from elevation α is r × r·sin α, and a lid
      hinged at the back edge opened by φ sits at hinge − r·sin(φ − α) with height r·|sin(φ − α)| (outer face while φ < α,
      the mirror after). It reads as a real compact on a table, much bigger than two stacked circles.
    - A dangling tag on an object that TIPS swings across the object's own label: make it a sticker that turns with it.
    - BACK (out-back) starts at full speed; for actions that begin ON screen use BACK_SOFT (bezier 0.42, 0, 0.18, 1.18).
    - Sub-labels settle DOWN into place (an entrance from below dips into the unsafe bottom band while still visible).
    - The probe now measures the brief's zones: readable text kept out of the top 270, bottom 440, right 130 px;
      objects may bleed off the frame for scale but stay out of the caption band at rest; designed contacts (the crown
      worn, the hand holding it, the tube on the shelf, coins into the bag…) are named SOFT pairs with reasons; the brief's
      crown exit "straight up out of frame" is LISTED (6 f behind the caption, moving), never excused for anything settled.
  - ⚠ **Her photo (`public/kylie_face.png`) has not been supplied.** Its three uses draw a flat faceless bust in the
    reference manner until it lands (HAS_PHOTO false); the crown's seat on her head is measured from the bust.

- **2026-10-06 (Video 026 — MASTER RENDERED; user: "render")**
  - `out/garyvee_audit.mp4`, rendered single-tab after the script guard passed (0 hits): 1080×1920, 30 fps, 1,805
    frames, 60.2 s, stereo AAC. Mean −25.9 dB, peak −4.6 dB. The last 0.7 s is the bed fading after the final word.
  - Its decoded frames showed no one-frame pops and no black panels, and his photo is present on every badge frame.
    The motion scan flags only the known classes (the scroll's text aliasing, the calendar riffle, the word reveals).
  - ★ **A whoosh on a motion PLATEAU is judged by the plateau, not by the argmax.** The collapse into the breather moves at
    one speed for 13 frames, and its 3-frame argmax read 1524 on the lossless frames and 1532 on the MP4, on encoder noise.
    `whooshsync026.py` now requires a whoosh to sit inside a plateau (≥ 85% of the peak for ≥ 8 f, ±2 f) where there is
    one, and otherwise within 3 f of the argmax, with canaries for both. All 17 pass on both frame sets.

- **2026-10-06 (Video 026 — ★★ STANDING, THREE NOTES; user: "transitions are too repetitive, some of the visual animations
  are not smooth enough, and the text that appears on a scene should be attached to that scene, it should not move
  together with the camera to the next scene")**
  - **★ CAPTIONS BELONG TO THEIR SCENE.** The narration block used to be one layer above every scene, so it held still while
    the scenes changed under it. Now:
    - each block is OWNED by the scene on screen, or already arriving, when its first word is spoken (`Film.tsx
      BLOCK_OWNER`);
    - it is drawn in that scene's panel, so it pushes, dollies, collapses or rises with it, and on a zoom-through it dives
      with the camera and fades;
    - a scene's last block does not fade where the next scene's first begins; it leaves with its scene.
    Two rules keep it honest:
    - **a block never straddles a scene change.** The plan splits it where the scene changes ("And the origin story" |
      "a whole guru industry");
    - **a scene may not start to leave while a block it carries is still being spoken.** `SHOTS` waits for the last word.
    `scratchpad/capowner026.mjs` proves it on every run, with a canary.
  - **★ TRANSITIONS VARY.** 13 of the 17 were the same 30-f sideways push. Now 17 hand-overs:
    - 4 sideways pushes;
    - 5 vertical pushes, from the top for things that come down (the badge, the wall calendar, the key), from below
      otherwise;
    - 4 DOLLIES: the camera pulls back until both scenes are rounded cards side by side on a deep ground (×0.8 at the
      middle, on a cosine), travels across, and pushes in. They go only to scenes whose first action comes after the
      dolly lands;
    - 2 zoom-throughs, a collapse and a rise.
    No two neighbours share a kind and a direction. Pushes take swoosh/whooshsoft, and the dollies take whooshlong.
  - **★ SMOOTHER ANIMATION.**
    - No damped oscillations as settles: the price tags' swing and the badge's pendulum now settle ONCE, eased, with no
      overshoot (CLAUDE.md, V33).
    - The bottle tag's gravity drop, which stopped dead, now drops and locks on ARRIVE.
    - The shop lights warm up on one curve; the on/off flicker had jumped in single frames.
    - The calendar's pages turn over 14 f each, at least 4 f apart, from "$3 million" to "by 2003". The old 9-f flips
      every 3 f read as a stutter. The $45M note lands on "2003".
    - The verdict tags turn more slowly (±40°).
    - Five label entrances moved from SETTLE (full speed on frame 1) to ARRIVE. `scratchpad/ramps026.mjs` lists any
      `ramp()` left on the default.

- **2026-10-06 (Video 026 — ★ STANDING: PICTURES MUST BE SHARP AND LEGIBLE; user: "the quality of the pictures isn't good,
  get better quality images (other than the face image)")** The pictures were the live Wikipedia captures (on the laptop,
  in the scroll and on the printout). The capture itself was 3× resolution. Two things made them look poor:
  - **The camera stretched a 1× raster.** Chrome rasterizes a layer whose transform has perspective at 1×, and the camera's
    zoom sat in that same 3-D transform. So at the opening's ×2.3 the page and its URL were visibly soft. ★ `Cam`
    (`src/r40/cam.tsx`) now keeps perspective, tilt, yaw and pan on the outer layer, and paints the zoom as a 2-D scale
    on an inner wrapper. The geometry is identical and the zoom is sharp. An A/B of the 62-frame pull-back measured the
    same smoothness (worst wiggle 0.056 vs 0.057 of the peak). **Every clone from 026 on carries this.**
  - **Desktop-width text was too small to read.** An 870-px article column on a 620-px display put the body text at
    ~10 px, and the printout's at ~9. ★ The page is now captured as a zoomed-in browser: a 688-px CSS window, where
    Vector 2022 sets 16-px text and the $60M sentence with its [23] still sits on one line (`scratchpad/wiki_zoom.mjs`
    finds the width). That gives ~15.5 px on the laptop and ~14 px on the printout. It is the same revision and the same
    words, and every photo on the page is still hidden. The opening close-up went from ×2.3 to ×2.0 to fit the wider
    sentence.
  - **How to apply:** a screenshot shown in the film is judged at 1:1 in the frame it appears in, zoomed shots included,
    and its text must read at ≥ 14 px on screen at rest.

- **2026-10-06 (Video 026 — THE TAKE AND HIS PHOTO; user: "I put the vo and his photo in public, use the same song")**
  - **The take** (ElevenLabs "Russ") was read from the corrected script: step 0 matched every corrected line, and the
    guard shows 0 hits. Two words differ from the script, and two whisper models agree on both: "So we **click** the
    footnote" and "**He said** he left it". The captions follow the voice. Whisper heard "Resy" as "Receive", which is
    fixed in the caption text, and the anchor accepts either token.
  - **★ A FAST TAKE STARVES ONE-SHOT-PER-SENTENCE SETS. Restore the take's own sentence pauses before cutting shots.**
    - The plain trim kept 0.16 s of every pause: 53.0 s against a 60-s brief. With 30-f pushes, four shots had under a
      second at rest, and the interview chairs had NONE.
    - `scratchpad/vo_retrim.py` re-trims the same raw take. It keeps 0.48 s at each cue boundary, and up to 0.9 s at
      five named ones, never more than the take recorded. Clause pauses stay tight. 59.8 s.
    - The transcript is SHIFTED, not re-run, so the plan's word indices hold. `retrim_check.py` proves the shift:
      125 of 127 in-phrase words match a fresh transcript within 0.06 s.
    - `scratchpad/actions026.mjs` tables each shot's SETTLED window against its actions' windows. Use it on every take.
  - **His photo** (`public/face.jpg`, 194 × 259, him alone) is the speaker badge's ID photo: 400 × 440, full colour. The
    brief's "small, tucked beside the card" in the hook had no room beside the laptop, and the name beat is where a face
    belongs. The badge holds through "And the origin story" (~2.5 s), and the store arrives on "a whole guru industry".
    - The cut-out: ×3 Lanczos, isnet for the head plus u2net_human_seg for the shirt. Its faint 10–20% backdrop
      remnants beside the jaw showed as a ghost on the lilac, so the alpha was remapped (smoothstep 0.22–0.80).
    - ⚠ The source is small, so the photo prints soft. A larger original would be sharper.
  - **★ A MIRRORED FACE UNDER SVG FILTERS CAN RENDER SOLID BLACK, AND ONLY MOTION SHOWS IT.** The book jacket's flap drew
    its reverse by giving the flap's group a NEGATIVE x-scale. Under its `r40solidSm` and `r40grain` filters, Chrome
    painted it solid black over the cover for its first ten frames, at full size too. The at-rest close-ups and the probe
    passed it, and the fluidity strip showed it. The reverse is now drawn at its projected width with positive geometry.
    A scan of every rendered frame for near-black regions (> 800 px at 0.3 scale) found that run and nothing else, and
    finds nothing after the fix. Run it with the fluid frames on every film.
  - **The bed** is 025's Radiohead track (the user: "use the same song"), set from rendered stems at 5.2–5.6 dB under the
    voice in every window. The voice is 1.668× (−24.3 dB speech-gated, 025's level). The till's dings were 14.5 dB under
    the voice (masked), so they were raised to 1.0. The break's lowwoosh came within 7.6 dB of "Constellation Brands", so
    it went to 0.75.

- **2026-10-06 (Video 026 — "Click the Footnote", Gary Vaynerchuk; first build, provisional timing, no take yet)**
  - Built in rule 40 with rule 44's three rulings (the live Wikipedia page on a laptop, 025's shiny solids, house caption
    ink). The page is the live article, captured by `scratchpad/capture_wiki.mjs` with every image hidden (no photo of a
    real person in any pixel), at a 1366-px window so the $60M sentence and its [23] sit on one line.
  - **Three defect classes the close-up pass (rule 42) found that every check had passed:**
    - **Overlapping windows drawn as one.** The calendar's five page-flips overlap (one every 3 f, each 9 f long), but the
      set drew only the FIRST turning page it found: when it landed, the next page was already two-thirds over, and two
      pages swapped in one frame, five times. Every page in the air is now drawn in its own state. ★ Whenever an action
      repeats on a step shorter than its own length, draw every live instance, and check it frame by frame
      (`framesrange.mjs`), never in stills.
    - **A join hidden behind its own object.** The price tags' strings ended at the tag's top edge, drawn behind it, so
      each vanished under the tag ~45 px from the eyelet: a string tied to nothing. They now end in the eyelet, in front.
    - **A ring that fits the word's box, not just its middle.** An ellipse wide enough to clear "$60 million"'s corners
      ran over the words either side. It is now a superellipse at the box's width + 1.5 px.
  - **The probe caught the rest:** the laptop and three sets past the band under the Turn; a camera push that came to rest
    at ×1.6 for 10 frames with the page past the band (it now runs into the hand-over); a lanyard translated with its
    badge, whose masked top end was still measured in the caption band (now drawn in frame space from a fixed point); a
    calendar page's back swinging 510 px up through the caption band (now foreshortened ×0.25 as it goes behind).
  - **The fluidity scan, A/B'd single-tab:** the hook's and the scroll's flags were render-tab noise (smooth when rendered
    in one tab), but the entering `Label`s really stepped 1 px every other frame (a 2-D translateY snaps text to whole
    pixels). `Label` now rises in a 3-D layer, kept on at rest, like the captions' words. The verdict's rise whoosh was
    5 f late against the picture (`RISE_SEEN.verdict = −5`); all 17 hand-overs are now within ±2 f.

- **2026-10-05 (Video 025 — HIS PHOTO IN THE HOOK, AND RE-RENDERED; user: "I put the guy's face photo in public, rerender
  after implementing")**
  - **The cut-out.** `public/Do_Kwon.png` (735×905) was checked first: him alone, no one else in frame.
    - Cut with rembg isnet-general-use + alpha matting; u2net_human_seg was equally clean but softer at the hair.
    - The ceiling lamp's highlight on his crown is painted to the hair's tone.
    - Cropped at the shirt (770 px), with its bottom 180 px and outer 110 px each side faded into the alpha. The frame
      had cut his shoulders into hard vertical edges, which a 1:1 close-up showed. → `public/kwon_cutout.png`, full colour.
  - **In the r40 hook (the brief: "Real photo (2s) fades in … beneath it").**
    - The quote sets at 72 px (rule 40.3's floor) so the photo can be large: 441×462, centred, its base 8 px inside the
      band (the Turn's perspective put it 1.5 px past).
    - A soft lilac backlight separates his dark hair from the aubergine.
    - It rises in on ARRIVE as the opening camera settles (in by 2 s) and sinks away on IN just as the letters begin to
      drain. The cash cube now rises only after it has gone (CUBE_IN, drain + 6), so the two never share the frame.
    - Score: a flick as it settles in; the cube's sub follows the new timing.
  - **Checks.** The probe is CLEAN over the hook in a multi-tab render (Remotion `<Img>`, which proves the photo loads).
    No pops. sfxsheet clean; mixcheck: voice 5.3–5.5 dB clear, SFX ≥ 10.4 dB under it; levels at the Bankers median.
  - The photo's source and licence were not given (`PHOTO_CREDIT`); flagged to the user.

- **2026-10-05 (Video 025 — MASTER RENDERED; user: "render")** `out/dokwon_audit.mp4`.
  - The render: single-tab (the jitter rule), after `render.mjs --check` (1 pattern proven live, 19 captions, 0 hits).
    h264 1080×1920 @ 30, 1717 frames (= composed), AAC stereo 48 kHz.
  - The mix: mean −25.6 dB, peak −4.2 dB; the tail fades from −33 to −47 dB over the last 0.4 s.
  - The decoded MP4 frames: no one-frame pops, and the fluidity scan's only flags are the designed impacts, text fades and
    encoder noise (strips looked at).
  - One whoosh moved: the scan of the MP4's own frames read the hook → name hand-over as a PLATEAU (229–238, within 3%;
    argmax 231 on the MP4, 236 on the Studio PNGs), with the whoosh at its end (238). It is centred now (RISE_SEEN −4 →
    234); all 15 whooshes are within ±3 f on both frame sets.
  - The audio alone was re-rendered and remuxed onto the copied video stream (identical MD5), with Remotion's 2048-sample
    AAC delay reproduced (offset 0 against the first master, to the sample). It differs from the first master only in
    frames 227–246.

- **2026-10-05 (Video 025 — RULE 43, SFX; AND FLUID ACTIONS; user: "overall, there should be more sfx, but sfx like the
  ones used for 100bps or bankers. Also, some of the animations that the visuals have aren't really fluid or smooth
  enough. Fix that.")**
  - **The score.** 76 cues over 57 s (1.33 a second; Bankers V5 had 65 over 72 s, V4 117 over 78 s).
    - The pack: the studio's 20 files, copied into `public/sfx/`. riser and glide are not copied.
    - The machinery: `src/r40/SfxLayer.tsx`, with EVEN[], PRESENCE, ONSET, PEAK and `within()`.
    - The cue sheet: `src/r40/score.ts`, family per job. A whoosh peaks on every hand-over's fastest frame: the
      pushes rotate swoosh → whooshsoft → whooshlong, the dives are airwoosh, the break is lowwoosh, and the rises
      from below are whooshlong and whooshsoft.
    - Context: sub under the cash cube; coins as its stacks fall; data textures only under the three values computed
      on screen (the $45B counter, the draining column, LUNA's price); clicks for the cap, the bolts, LUNA meshing,
      the string, the bracket and the lamp switch; thuds for the bags, the tag, the gavel and the door; chain under
      the gears; chainshort for the safe's wheel, the platform and the flap clatter; flicks for the magazine, the
      status tile, the passport and the cards; ticks as the counts type on; three quiet pings ($1.00, 10¢, $0); and
      the badge's lowwoosh, sub and the film's one bloom. Nothing is on the narration caption.
  - **Timed by measurement.**
    - `sfxsheet025.mjs` (PILE, OFFSTAGE, SILENT, KIND, SYNC; PILE proved on canaries) caught the flap ticks piling
      1–2 f apart (now one chainshort clatter) and the cards' typing ticks under their flicks.
    - `whooshsync025.py` checks every hand-over whoosh against the rendered picture's fastest frame: all 15 are within
      ±2 f. The collapses' peaks are weighted by their visibility; the vault dive is −5 f, because its bright steel
      edges fly out before the log-zoom peaks.
  - **Levelled by measurement.** `sfxlevels025.py` sets each cue's heard peak against its own film's speech-gated voice.
    At Bankers' PRESENCE 1.59 the shared families sat +4.6 dB hot, so PRESENCE is now 0.94, with sub, whooshsoft
    and airwoosh trimmed; the median against Bankers V4–V5 is now 0.0 dB. `mixcheck025.py`:
    - the voice is 5.3–5.5 dB clear of bed + SFX in every 10-s window;
    - the SFX alone are ≥ 10.4 dB under the voice in every second of speech;
    - the mix peaks at −1.3 dBFS.
  - **Fluid actions.**
    - **The scan.** `fluid025.py` judges every in-scene action's per-frame speed: JOLT (starts at full speed from
      rest), STOP (dies at full speed), BREAK (a speed jump mid-action). Canaries: smooth must pass, linear must
      JOLT+STOP, two-phase must BREAK.
    - **Found and fixed:**
      - **The rating badge** flickered through 1½ turns at 70°/frame. It now makes half a turn on SOFT.
      - **The cell door** faded in over the cell at full speed. It now waits off-frame, slams from rest and rebounds
        9 px.
      - **The platform** levelled before the bracket reached it. The bracket now rises to contact, then pushes it level.
      - **LUNA's tag** fell 9 f, stopped dead and the push left in the same frame. It now falls under gravity, lands on
        its corner, rocks flat on ARRIVE, and is settled before the hand-over.
      - **The gavel** hovered and twitched 4°. It now rests on its block, winds up 20°, strikes and rebounds 2.6°.
      - **LUNA's gear** was still growing as the push took it. It now arrives on "second coin".
      - **The needle** was cut off by the dive. It now dips on "slipped".
    - **ARRIVE.** Everything that appears ON screen arrives on it, with its own fade: SETTLE with a soft onset, its
      peak at f4 instead of f1, and the same long tail. That covers the cards, bags, cap, cash cube, LUNA, the
      bracket and both counters. A ×3 fade on SETTLE had made each one opaque in two frames.
    - **Impacts** (the gavel, the door, the tag) end in a rebound or a rock-down, never a dead stop.
  - **A hidden pop, found by the same frames.** At each zoom-through's switch the flat fill was the region's SOURCE
    colour, but the set renders it LIT. The frame jumped 22.9 and 22.3 levels for one frame at the vault and the
    glass. The fills are now the measured rendered colours, and `fillmatch.mjs` refuses past 2 levels: now 0.0, 0.0
    and 0.5.
  - The VO script is unchanged; no MP4 was rendered.

- **2026-10-05 (Video 025 — RULE 42, THE CLOSE-UP SWEEP; user: "in the thermometer scene … sort of a visual bug at the
  bottom. Never let these small mistakes go past any sweeps or checks")** `scratchpad/closeups.mjs` renders every scene
  at rest at full size and tiles 1:1 crops of its object band, derived from the shot table. Looked at one by one, its
  first run found nine glitches that every other check had passed. All are fixed:
  - **the thermometer:** the tube and bulb were two shapes laid over each other, and the tube's round end, its gloss and
    the bulb's rim showed through at the join. The glass is now ONE silhouette with the liquid inside, a glass wall's
    width in, and the gloss stays on the tube;
  - **the safe's door:** its perspective's vanishing point was its own hinge, so when open it collapsed into a thin line
    through the safe's top and bottom. It is now seen from the viewer's eye (3200 px; nearer, its edge went below the
    floor) with a proper inside face;
  - **the vault's dive** began while the door was still swinging; the door is now open by "dollars";
  - **the gauge's glint** was painted across its ticks; it now sits in the clear ring by the rim;
  - **the LUNA gear's label** ran off its hub; the hub is larger and the label fitted;
  - **the magazine's tilted corner** sank into the plinth;
  - **the coin's $1.00 level line** was half-hidden by the crown's depth, and still drawing as the scene left;
  - **"THE ALGORITHM"** butted against the lamp's rim;
  - **"15 YEARS"** ran to its plate's edges, and the cell's door was still sliding as the scene left.
  - The class rule: parts that meet are drawn as one outline or truly joined, never as overlapping shapes hoping to hide
    a seam; text is fitted to its plate; a 3-D swing's vanishing point is the viewer's, never the hinge's.

- **2026-10-05 (Video 025 — RULE 41, THE OPENING AS THE REFERENCE, A RATING BADGE, DETAIL; the user's four notes of the
  same hour: no two scenes may intersect even while fading; the 29-s visuals look like the previous style and the opening
  is what they like; replace the INFLATED sign; put more effort into the complex visuals)**
  - **Rule 41, enforced.** The probe judges cross-scene pairs at any visible opacity (0.02), sharp or blurred, on boxes
    clipped to each element's panel (`data-panel`; a caption's twin across a seam is measured once, `data-twin`). It
    fired on the Swoop hand-overs first: the fading, defocused leaving set overlapped the arriving one (the plinth × the
    coin's floor, the coin × the safe).
  - **The hand-overs, rebuilt to keep scenes apart:**
    - PUSH = two panels side by side, each clipped to its own frame and carrying its own ground. They travel 1080 px
      together on a soft-start, long-settle curve (bezier(0.5, 0, 0.18, 1), 30 f centred on the switch). The caption is
      drawn once per panel in that panel's ink, so it changes colour exactly along the moving seam.
    - COLLAPSE is complete before the switch (14 f); only then does the next scene rise in.
    - ZOOM-THROUGH was already sequential.
    - Every switch lands within 8 f of its word: hand-overs start under the last action's slow settle.
  - **The 29-s scenes, rebuilt in the opening's style**, and the Wikipedia crops removed:
    - LUNA's price tag hangs from a hook over the floor (600 × 480, eyelet, bar code). Its price runs to $0.00, the
      string lets go, and it drops to the floor, tipping.
    - The gavel stands on the floor (×1.3), with a grip ring, end cap, bands and turned faces, the block's inlay rings
      and the case caption on the floor.
    - The cell stands on the floor (620 × 630): a riveted frame, a block back wall, a barred window and a bunk. On "15"
      its 9-bar door with riveted cross bars, a lock box and a "15 YEARS" plate slides shut.
  - **The verdict:** the flat INFLATED stamp is gone. A shield-shaped RATING BADGE (520 × 600, the solid material, a
    magenta ribbon reading INFLATED, "OUR RATING", a check-mark seal) rises from the floor spinning one and a half turns
    (rotateY, SETTLE, 44 f) and lands facing front on "inflated". The two dates sit on the floor beneath.
  - **Detail on the complex objects:**
    - the safe: a maker's plate, a recessed frame, bolt keepers and shelf brackets; its door gets a combination dial, three
      locking bolts and a pull handle;
    - the gauge: a violet bezel, numerals on the major ticks, a glass glint and base screws;
    - the thermometer: a steel cap, two clips and a bulb glint;
    - the lamp: a domed shade with a rim and a bulb that glows until "not"; the platform beam has end caps and bolts,
      the fulcrum a pivot pin and a bolted plate;
    - the board: a bezel, two hangers and a plane beside DEPARTURES.

- **2026-10-05 (Video 025 — ENTRANCES EVERYWHERE; user: "in general, most elements like even the text in the hook should
  have an entrance animation")**
  - **The hook's quote enters:** each line rises 28 px into place as it fades, 3 f apart, on SETTLE. It is already
    arriving at frame 0 (the brief's "frame 1 is his quote"). The attribution follows (from f 9).
  - **Every `Label` takes `enter`:** an 18-px settle-in rise with its fade. On the gauge's $1.00 and May 2022, the
    thermometer's two readings (with their ticks), "THE ALGORITHM", the SEC's argument, March 23, 2023, guilty plea and
    the case caption, each 10–20 f after its scene arrives. The verdict's two dates settle in on "confirmed".
  - **The Wikipedia cards** rise 30 px into place under their heroes (+10 f).
  - Objects riding their scene's hand-over arrive with it; everything else arrives on its own.
  - **Probe fixes:** the cash cube's contact shadow is narrowed (it reached past the band at rest), and the gavel's
    pivot is lowered 20 px (its raised head was 10 px over the band's top).

- **2026-10-05 (Video 025 — HERO OBJECTS; user: "more visuals … like the coin, but something larger that is also
  relevant and that looks good. I don't mean like charts")** The four scenes carried by text or a small document got a
  large solid hero (`src/r40/heroes.tsx`), each the literal thing its sentence is about, none a repeat:
  - **Hook,** "$45 billion vanished in a week": a cube of banded cash stacks (4 × 4, green: the one object that needs
    real money's colour) on a pallet. It rises in on "$45 billion" and drops away stack by stack, top row first, while
    the counter drains to $0, leaving the empty pallet.
  - **W1,** "Luna went from over $100 to virtually zero": LUNA's hanging price tag, as large as the $1 coin. On
    "virtually" its price runs from $119.51 (the Wikipedia all-time high) to $0.00, turning magenta as it lands.
  - **W2,** "a jury found him liable for fraud": a gavel and sound block. It winds up and strikes ON "liable", with
    impact rings. It strikes with the handle level and the head upright; raised, the head stays inside the band.
  - **W3,** "He got 15.": a prison cell. On "15" its barred door slides shut, carrying a "15 YEARS" plate.
  - The Wikipedia cards stay as the source, beneath the heroes (y 1270–1290); the camera keeps its framing.

- **2026-10-05 (Video 025 — 3-D, SHINY, SETTLING; user: "make the style more modern, the visuals should look a little
  more 3d like 100bps, and shiny", then "the visuals that arrive on scene … should smooth into place more")**
  - **The solid** (`art.tsx`, the SVG filters `r40solid` / `r40solidSm`): one filter turns any flat object into a lit
    solid from its own pixels.
    - Depth: nine darkened copies of the silhouette stacked up-right. One fixed depth for the film (18 px; 10 on thin
      things), the back edge darkest.
    - Volume: a broad diffuse light (azimuth 235°, elevation 38°, over the alpha blurred 14 px).
    - Shine: a sharp specular rim (alpha blurred 2.4 px, exponent 22, strength 0.75).
    - It is on every object: the plinth, cap, magazine, coin, safe, gears, gauge, sandbags, wall bricks, thermometer,
      lamp and platform, bracket, board, passport, cards. Never on a contact shadow, a light cone, a label or the
      caption. The wiki card gets the same up-right thickness in box-shadows.
  - **Light:** a screen-fixed KeyLight (an upper-left soft-light radial). Floors are glossy: a lit horizon band
    fading into shade, a highlight under the edge, and the safe's reflection. The coin keeps its own.
  - **The Turn** (100bps' E2, gentler): each set yaws −3° → +2.5° over its shot under an 1800-px perspective, plus a
    0.5° breath on a 250-f period, about the optical centre (540, 1075). It keeps turning while it leaves. This
    supersedes rule 40.5's dead-still camera.
  - **Arrivals SETTLE** (`SETTLE`, now the ramp default): a geometric decay, the remaining distance shrinking by a
    constant factor each frame (0.3 % left at the end), as 100bps measured its own. Windows are about twice as long:
    the cap 44, magazine 48, coin roll 52, the peg's tag 28, Luna 36, the bags 34 each, the bracket 44, the passport
    44, the cards 36, the stamp 24, the subs 24–30, the hook's opening settle 52. The in-out moves got longer tails
    (the door 34, the dip 32, the tilt 32, the peg line 32). Each caption word's rise settles over 20 f.
  - **Measured:**
    - the magazine's last 143 px creep in smoothly inside the turning camera layer (`settletail.py`: 0.151 px rms
      against the exact path's 0.148; snapped would be 0.274; the last step is 0.16 px/f);
    - the lamp's cord now starts 10 px inside the band: the Turn's perspective lifted it 2 px past y 600.

- **2026-10-05 (Video 025 — FLUID; user: "Overall, make the animations more seamless, fluid, and smooth")** Every
  movement was reworked so that nothing stops dead, starts at full speed or snaps on.
  - **Hand-overs are one continuous move: 100bps' Swoop** (`Style 3 videos/Video 1/src/bank/swoop.tsx`, measured from its
    corpus).
    - The incoming set arrives from an edge over 48 f on the long-tailed OUT curve (430 px, growing 0.74 → 1), fading
      up over its first 8 f.
    - The outgoing set keeps travelling the same way: 700 px on IN over 20 f, from 8 f before the switch. It dims to
      zero and defocuses to 11 px (`data-blur`, so the probe treats it as background).
    - There are 10 pushes, alternating; the hook → name and the breather → verdict collapse under a rise from below.
    - The superseded version accelerated off, left a gap, then arrived: a velocity break at every switch.
  - **Zoom-throughs are ONE S-curve of log-zoom across both sets** (34 f, 100bps' in-out). The camera dives to ×13–22,
    and the incoming set carries the same zoom on from ×0.5, so the motion never stops at the switch.
  - **In-shot moves:**
    - EXPO (initial slope 6, which threw a move into its first 2–3 frames) was replaced by SOFT `(0.22,0.68,0.32,1)` for
      arrivals and SMOOTH `(0.45,0.05,0.35,1)` for travel.
    - Windows are longer: cap 22 f, magazine 26, coin roll 34, peg 24, the door 26, Luna 14, the dip 22, the bags 16
      (set down from 300 px, fading), the cards 18, the passport 26, the platform's tilt 22 and the bracket 26.
    - Fades replaced pops (Luna, the bags, the peg's tag), and the lamp's colour mixes instead of switching.
    - The hook's opening settle is 40 f.
  - **Captions:** each word eases in over 10 f, rising 7 px in a genuine 3-D layer. A finished block fades over its last
    5 f instead of being cut.
  - Switches land within 5 f of their word: a hand-over starts while an action is ~70% settled, under its slow start.
  - **Verification:**
    - probe CLEAN on all 1,717 frames (the longest empty run is 8 f); capcheck40 CLEAN; jitter 30/30;
    - the Swoop's 48-f tail tracks its ideal at full size (`arrivaltail.py`: 0.147 px rms against the ideal's 0.149;
      snapped would be 0.471);
    - the strips of all 15 hand-overs read as single moves.
  - The settings below this entry (the 12-f accelerate-off exit, the 420-px arrival) are SUPERSEDED by this one.

- **2026-10-05 (Video 025 — SMOOTH TRANSITIONS; user: "smoother and better transitions", then "some of them should be
  directional, like in 100bps")** No hard cuts are left. `src/r40/Film.tsx` holds one transition table:
  - **10 DIRECTIONAL handovers (100bps' V12 form):** the outgoing set accelerates off in its last 12 f (IN
    `(0.55,0,0.9,0.45)`, 1150 px sideways, alternating ←/→, or 1500 px DOWN once; it dims to 50%). The incoming set slides
    in 420 px from the other side on OUT `(0.17,0.84,0.28,1)`, frames +2…+24, at opacity born×2. No frame shows both sets.
  - **3 ZOOM-THROUGHS:** the camera accelerates (16 f, log zoom ×10–17) into a flat area that fills the frame: the empty
    vault, the gauge's cream face, the thermometer's empty glass (its gloss fades on the way). The next set grows in (×0.8 →
    1) over a ground dissolving from that colour in 16 f.
  - **2 COLLAPSES (100bps' takeaway exit, ×0.38 to the centre):** the $0 counter, and the article before "So here's the
    audit".
  - **Shared:** a background change dissolves over 22 f around the switch, with the caption's ink swapping at 50% in one
    frame. The caption never moves. Each switch lands on its sentence's first word (LEAD 0), or waits for the leaving set's
    last action (`done`), computed in order (`shots_print.mjs` prints the waits). The breather's line is drawn by its own
    set, so it travels with the card.
  - **Everything runs on ones** (the references' on-twos stepping read as choppy): rule 40.8 amended.
  - Every shot's camera is now its still HOME framing. The cut-to-macro openings are gone: the transitions carry the motion.
  - **Details the sweep asked for:** in a zoom-through the set's printed labels clear in its first third (the gauge's
    $1.00 and the thermometer's readings flew up through the caption). The breather has no entrance: its card is empty
    for the brief's clean frames, and a grow shrank "So" to 62 px. The "15 years" lift is 10 f, so the article can leave
    in time.
  - **The coin no longer rocks.** On ones, its ±1.4° balance rock re-rasterised inside the camera layer and stepped
    (`coinrock.py`: 0.21 px rms against 0.11 for the same rock applied exactly). It stands still once it lands.
  - **Verification:**
    - probe CLEAN on all 1,717 frames; the longest empty run is the breather's 6 clean frames;
    - the three zoom-throughs are listed as designed transits; capcheck40 CLEAN;
    - jitter 35/35 clean;
    - an arrival's ease-out tail tracks its ideal curve to the tracker's noise (`arrivaltail.py`: 0.234 against 0.233
      px; whole-pixel snapping reads 0.437);
    - the motion strips of all 15 transitions show no frame with two sets and nothing popping.

- **2026-10-05 (Video 025 — REBUILT IN RULE 40, "EDITORIAL PURPLE"; user: "change the style of these videos completely…
  replace any visuals so that they fit the style")** The take-2 voice, bed and envelope are unchanged. Everything on screen
  is new: `src/r40/` (Film, cam, Kinetic, art, wiki, shots1–3; captions from `captions_vo.mjs`'s BLOCKS → `blocks.ts`).
  `Root.tsx` now renders `Film025`; the old TERMINAL build stays in `src/audit/` for the caption sheet only.
  - **16 shots, hard cuts, ground flipping**: quote drain → $45B counter · name plinth (cap, magazine) · the $1 coin on its
    edge, pegged · the empty vault · UST/LUNA gears · the $1.00 gauge · sandbags against a cracked wall · the 10¢
    thermometer · three Wikipedia cards (brackets, selection, lit sentence) · the propped platform · the departure board
    and passport · two index cards · the breather · the coin's callback, INFLATED. The film ends 0.6 s after the last word.
  - **Probe passes for this build (all CLEAN at the end, every frame):**
    · labels tagged outside their shot's Obj read as scene "?": every HTML label is now `Label` (tags inside the Obj);
    · a ROTATED SVG element's box is its rotated SQUARE, so the turning gears measured 1.37× and "left the band": the turn is
      baked into the gear's points;
    · the camera's anti-snap tilt pivoted on the top-left corner and magnified the right edge 0.2% (a band-wide line read
      2 px past x 950): it now pivots on the frame centre (≤ 0.43 px);
    · NEW CHECK `CAP×OBJ` (caption line × any object, moving or not). The cut sweep found the breather's line under the
      verdict coin, which no check compared. It fired on that case first (f1475–1478) and found four more: the grad cap and
      an index card falling through the caption, and the gears' and board's macro starts. All fixed;
    · ground planes (`SURFACES`: the floors, the levee wall, the tabletop) may pass the object band at rest, never the
      caption band, and are listed with their frames; the breather card counts as present (`data-card`).
  - **Other fixes from the stills and the cut sweep:** the coin's reflection drew a mirrored label (the disc only now,
    drawn on the floor); the needle crossed "May 2022" (moved under the dial); the passport rested half off-frame, then
    crowded its date (smaller, on the board's corner); card 2 was still typing "wire f…" at the cut (2 characters a frame);
    the $1.00 tag and the CANCELLED tile popped (a fade; a split-flap flip).
  - **Jitter:** the judge read the coin's balance rock (animated ON TWOS, rule 40.8) as a zig-zag. Paths that step on twos are
    now judged as drawn: each held pair must not move (≤ 0.06 px; tab jitter lives there), and the stepped path must follow a
    cubic (canaries C: a sine on twos passes; E: the same, snapped to whole pixels, fails). 35/35 targets clean.
  - **Captions:** `capcheck40.mjs` (new) reads the probe's own caption boxes on every frame. It checks the band (the card
    excepted), ≥ 68 px, ≤ 2 lines and ≤ 26 characters. It fired SIZE on the 66-px italic, so the tier is now 68 px. CLEAN.
  - **Mix (audio-only probe):** −25.6 dB mean, −4.4 dB peak, tail −31.9 dB over the 0.6-s outro.
  - **Open with the user:** caption ink on cream rather than the brief's "solid white"; the references' sound (a bed
    10–16 dB under the voice, literal SFX on object actions); the brief's cut-out photo slot, still unsupplied.

- **2026-10-05 (Video 025 — SECOND TAKE WIRED; user: "vo in public")** ElevenLabs "Russ" 2026-10-05T10_52_26, the same
  corrected script (step 0: all 19 lines). Trimmed 77.1 → 57.0 s; the film runs 58.6 s. Take 1 is archived in
  `scratchpad/take1/`.
  - **New artifact:** whisper split "TerraUSD" into "Terra | USD" twice (164 words, against 162). The plan was rewritten
    by word index; 13 late starts moved to the audio's onset.
  - **The read is 1.8 dB QUIETER** than take 1 (speech −27.5 vs −25.8 dB, measured on the solo stem). VO_GAIN went
    1.2 → 1.47, so the film plays at take 1's and 024's level. Mix: −25.7 dB mean, −4.4 dB peak; every window
    −25.4 to −26.6 dB; the tail −33.7 dB. The bed was reset flat, then 3 controller passes: windows 5.2–5.7 dB, tail
    5.5 dB, worst residual 0.3 dB.
  - **Two fixes the probe found on this timing:**
    · an 18-f EMPTY frame in the verdict (the coin was gone before "Our rating"): the coin now tips on "wasn't" and
      rolls out on "stable", handing straight to INFLATED;
    · a falling letter crossing the hook's attribution: it now clears by +6 f.
  - **Verification:** probe CLEAN (880 frames); jitter CLEAN (27 targets); hand smooth, INFLATED on its own ease; pop
    scan shows only camera moves and caption changes; transition sweep and the verdict handover strip; per-line stills;
    guard 0 hits.

- **2026-10-02/05 (Video 025 — TAKE WIRED; user: "vo in public")** ElevenLabs "Russ", read from the corrected script (step 0:
  all 19 lines, in order). Trimmed 76.5 → 56.9 s, so the film runs 58.5 s with the 2-s hold. Bed: 024's Radiohead track.
  - **Transcript fixes, in the caption text only:** "Duquan" → Do Kwon, "$1 | .5" joined, and the script's colons and
    quotation marks restored.
  - **Late starts:** whisper started 15 words late after a pause. `onsets.py` (new, with a canary) moves each one to the
    audio's own onset. "Stanford" was 0.44 s late and "Prosecutors" 0.41 s, past the 0.3-s cap, so the cap is 0.5 s
    with the audio as the authority.
  - **Actions key to the spoken word:** `wordAt()` reads the transcript's own word times (cues.ts carries `w`), not a
    word's proportional place in its sentence.
  - **The take is fast** (~2 s a line), so transitions are 32/28 f, down from 38/34. On the old durations every arrival
    in the crash run landed 30–43 f after its word. Now every action is within 0–14 f of its word. The cards: card 1 on
    "guilty", card 2 on "counts", replacing an empty-table arrival.
  - **Mix:** voice levelled (per-cue spread 5.2 → 0.2 dB). The bed holds 5.4–5.6 dB under the voice in every window,
    and the verdict's tail sits at 6.1. Probe: −25.7 dB mean, −3.9 dB peak, tail −33.4 dB.
  - **Two controller fixes in `bedenv.mjs`:**
    · it refuses an envelope newer than the bed probe (run twice, it had doubled a 1.9-dB correction);
    · the tail is controlled asymmetrically: any drift toward the bed, but only a drift over 1 dB away from it. Here the
      tail and the last window shared one point and pulled against each other.
  - **Verification on the take:** probe CLEAN; jitter CLEAN (28 targets); movers smooth (INFLATED judged against its own
    ease, ±0.3 px a frame); pop scan shows only continuous camera moves; a transition sweep of all 16 station changes;
    per-line stills; guard 0 hits; guardtest passes 5/5.
  - **Handback:** Cloudflare worked again (12/12), with srv.us as backup. ⚠ Still no photo in public/.

- **2026-10-02 (Video 025 — BUILD, provisional timing, no take yet)** Cloned from 024. Nineteen shots as the brief
  lists them, in NOIR. The brief's red and blue became white light, graphite and steel, each one constant. W1 uses the
  crash paragraph; the photo slot fades in under the quote when supplied.
  - **The stills sweep found, and the build fixed:**
    · a name plate whose short name grew into its role line: the name is now capped by the plate's height;
    · a gauge needle running through its $1.00 figure: the figure now sits outside the dial;
    · W1's bracket parked inside a word: each bar now stands in a word space, from a recapture with exact word boxes;
    · W3's lifted chip drifting off its words, because each piece scaled about its own corner: one container now
      carries the scale;
    · sub-labels arriving after their action and up for under a second: they now arrive with their place;
    · sandbags that read as pills, then as sweets: flat, pressed bags, each with one tied, drooping end;
    · the hook's counter appearing under the letters and racing to $3B: it now takes the quote's place,
      $45,000,000,000 is held, then it counts.
  - **The probe found, and the build fixed:**
    · the hand waiting below the band;
    · the departure board's flap rows carrying no font of their own (Times, 19 px);
    · a 16-frame empty run where the brief asks for 6;
    · four groups on the name beat.
  - **The pop scan found** two ease-OUT entrances at about 60% opacity on their first frame (a card, the verdict plate):
    both are now ease-in-out.
  - **The mover check:** the hand's rise moved to a transform (it rose on layout `top`).
  - **Verification:** probe CLEAN on 824 frames; jitter CLEAN on 19 targets; movers CLEAN; guardtest passes all 5
    directions; capcheck and voscript_check clean.
  - **Handback:** Studio 3155 via srv.us (Cloudflare 1033 again), in a reconnect loop.

- **2026-10-01 (Video 025 — ★ STANDING: THE VO SCRIPT FIRST, SENT AS SOON AS IT IS FINAL; user: "From now on,
  finalize the VO script as soon as possible and send it to me")** On every new brief, the corrected script is the FIRST
  deliverable: fact-check, finalize `VO_SCRIPT.txt`, and send it, in a message and as the file. Then build while the user
  records. Recorded in CLAUDE.md (Handback), since it is process.

- **2026-10-01 (Video 024 — MASTER RENDER; user: "render")** `render.mjs` → `out/roaringkitty_audit.mp4`: single-tab,
  guard 0 hits, the second take wired.
  - **Verified on the file:**
    · h264 1080×1920 at 30 fps, all 1,895 frames, 63.21 s, 17.6 MB, stereo AAC at 48 kHz;
    · mean −26.0 dB, peak −5.6 dB, flat factor 0;
    · every 10-s window −25.4 to −26.3 dB, the verdict and call to action −26.5 dB, the tail bed + fade −34.1 dB;
    · 20 frames pulled from the MP4, plus a strip across the figurine's turn;
    · jitter IN the MP4 on all 23 held targets: 21 at 0.006–0.046 px. The cat's reading (1.4 px) is its one designed
      turn: the window fell inside it, and the strip shows the turn.
  - **Served** on 3154 through srv.us: range requests answer 206, and a full download is byte-exact.
  - ★ **The chart's small grey "2019" label wobbles 0.13 px rms (peak 0.48) in the MP4, and 0.026 in the lossless
    frames.** It is the ENCODER: the same lossless frames encoded with plain libx264 give 0.090 at CRF 18, 0.076 at
    CRF 14, and 0.046 at CRF 10. Remotion's own CRF-18 encode is a little worse than plain CRF 18. Offered to the user:
    a CRF-12 master (~2–3× the file size), before the platform's own re-encode.

- **2026-09-30 (Video 024 — THE SECOND TAKE; user: "use the new vo I put in public instead")** ElevenLabs "Russ" again
  (file 20_32_45), the same corrected script: step 0 passed, and all 162 words fell on the same word indices, so the
  caption PLAN carried over unchanged.
  - **Length:** 86.8 s raw → 61.5 s, a plain trim, so the **film is 63.5 s** (the target is 60, the cap 65).
  - **Voice:** levelled, spread 4.9 → 0.2 dB. The bed envelope was reset flat and re-controlled: 5.4–5.8 dB of
    separation in every speech window, the tail 5.4.
  - **Full mix:** −26.0 dB mean, peak −5.5, no clipping, and the bed + fade only after the last word.
  - **Guard:** 0 hits. The timeline (`timeline.ts`) re-timed every place to the new read with no edits.
  - ★ **A failed stem render leaves the PREVIOUS take's stem in out/.** The voice stem failed once (transiently), and
    `gatedsep.py` measured the old take's stem, printing plausible numbers. It now REFUSES a stem older than
    `vo_leveled.wav`, or two stems of different lengths (proven by making it fire).

- **2026-09-30 (Video 024 — THE TAKE WIRED + HIS PHOTO; user: "I put the vo in public")** ElevenLabs "Russ" (speed
  1.05), read from the corrected VO_SCRIPT (step 0: all 21 lines, sign-off included).
  - **Length:** 83.7 s raw → 59.0 s, a plain trim (no time-stretch), so the **film is 61 s**. Voice levelled (spread
    4.5 → 0.1 dB). The bed is 023's Radiohead track. Separation holds 5.3–5.6 dB in every window, and the voice's last
    3.5 s at 5.5. The full mix: −26.3 dB mean, peak −4.6, no clipping, the tail bed + fade only.
  - ★ `bedenv.mjs` now controls the TAIL whenever it drifts, not only when the last window is held: 024's last window
    was 80% speech, and the verdict sat at 4.8 dB, uncontrolled.
  - **His photo** (supplied, `images.webp`, a frame from his own livestream; no other person in it) is a full-colour
    PLATE, not a cut-out: his microphone crosses his shoulder, and a person mask would punch a hole there. The 1.2-s name
    line holds the photo (LARGE, ~390 px) and the figurine TOGETHER: the photo from "Keith Gill", the figurine rising
    beside it on "Roaring Kitty".
  - ★★ **THE TIMELINE IS COMPUTED IN ORDER (`src/audit/timeline.ts`).** The fast take broke the per-place anchors in a
    CHAIN: a place that waited for its predecessor arrived late, and its word-timed action then fell inside its own
    arrival (patch one link and the break moved to the next: magnifier → name → W1 → hearing). Now each place's start
    is max(its lead, the predecessor's DONE), and each action is max(its word, its own arrival + a beat).
    `scratchpad/timeline_print.mjs` prints every anchor against the line it falls in, bundling the real module, so no
    mirror is involved. **Clone it forward.**
  - **What the real timing broke, and the fixes:** the switch FG swept back across "back on X" riding the slide (once
    gone, it is not drawn); W2's source line lived 16 frames; the quote held 1.7 s into the next line; the report's
    cover opened inside its own arrival; W3's white card sliding into the blank was the brightest change in the film
    (10 → 5.6 levels a frame, with a small dim while it holds). The fanning report now marks itself MOVING, since the
    jitter scan had taken it for a held object.
  - Verified: guard 0 hits on the real captions (proven in all directions again); probe CLEAN on 911 frames; movers
    smooth (0.002–0.058 px); jitter clean on every held target. No MP4.

- **2026-09-30 (Video 024 — ★ STANDING: THE CORRECTED VO SCRIPT GOES IN THE REPLY; user: "from now on automatically
  give me the corrected vo script")** Every handback that produces a corrected script pastes its lines into the
  message, in one copyable block, unprompted. VO_SCRIPT.txt still holds the reasons. The rule is recorded in CLAUDE.md
  (Handback), since it is process.

- **2026-09-30 (Video 024 — "Screenshots Can Be Faked", Keith Gill: THE BUILD + THE POLISH PASS; user: "go through the
  rest of the video to ensure that the visuals are polished, there aren't any intersections, and that there aren't any
  violations")** Cloned from 023. 21 lines, 16 places, provisional timing ~59 s. No take yet; no MP4.
  - **Facts (primary sources: his own screenshots via Wayback, the WSJ, the MA consent order, the SEC staff report, his
    written testimony, EDGAR, daily prices):** two brief lines are FALSE and armed in the guard (the WSJ's date and
    "accounts"; the $586M is an ACCOUNT total, not a position). Six more are reworded. VO_SCRIPT.txt has the trail.
  - **★ A LABEL MUST BE TRUE ON EVERY FRAME.** The first stills showed "Paid for GME calls" over $646,954 mid-roll. The
    phone now HOLDS the paid figure, rolls with no label, and lands under ACCOUNT VALUE on the screenshot's own figure.
  - **W treatments rotate** and must differ from the last two videos. 024: W1 a PULSE on the figure then an arrow
    drawn off the card toward the next shot (the camera follows it); W2 a solid underline that thickens and drops out of
    the page into a VERIFIED bar; W3 the page tilts back and its sentences rise as a floating strip.
  - **`wikicap.mjs` now guards its crops:** it REFUSES a crop showing an AVOIDED word (his username's profanity) or
    taking in another element (a floated figure beside the paragraph), and sizes the crop to its own rows' ink.
  - **The polish pass, measured:** the probe went from 40+ findings to CLEAN (885 frames: no unsafe, caption, overlap,
    text×text or rule-39 hits; no empty runs; density ok). Fixes: the odometer's tag lacked a font (measured as Times),
    the phone's small type sat under the floor at the verdict size, the chart's line geometry reached the caption band,
    the calendar plate fell across nine other days (now slapped on in depth), the hearing room's box was 700 px tall,
    the switch FG swept across "2024" on the slide out (it now leaves by its own edge first), the falling blocks crossed
    the June 7 sub, the blank ran 12 frames, the quote's sub lived 12 frames. Two contacts are the brief's own and are
    named SOFT (the pinned fine slip; the strip rising off its page).
  - **★ EVERY place pushed past now DIMS** (not only white cards): the platinum column, the white quote type and the
    cat's plate each swelled into a bright smear that vanished in two frames (17–28 levels a frame, 10× background).
  - **★ Two sub-pixel lessons (the mover check + an A/B):**
    · an element sliding INSIDE a Turn steps ±0.5 px as it lands: the Turn flattens its subtree into one texture
      drawn on whole pixels. Held still (no Turn), the same slide follows its ease. `preserve-3d` is NOT the fix: the
      anti-snap 0.15° tilt then cuts the element through the coplanar glass behind it.
    · never DROP `smooth3d` at rest: removing it re-rasterises the element flat, a ~0.8-px jump on landing.
    · the mover judge's 0.2-px limit is calibrated on a gentle ease; a hard in-out deceleration scores worse than that
      on its own IDEAL path (0.48). Before calling a mover "stepping", judge its ideal ease on the same window.
  - Jitter scan CLEAN (24 held targets ≤ 0.06 px). Captions CLEAN (widest 831 of 860 px).

- **2026-09-30 (Video 024 — ★ STANDING: NO BLUR ON NUMBERS; user: "make sure that there is no blur on the numbers in the
  hook scene")** A figure on screen is always SHARP, even while it rolls.
  - The rolling-counter drum inherited from 023 (`CounterCoin`, and 024's `Odometer`) blurred any wheel turning faster
    than ⅓ digit a frame, as a real drum smears. That blur is gone.
  - A fast wheel now SNAPS to whole digits: a sharp digit every frame, never a half-rolled smear between two. A slow
    wheel keeps its continuous roll, and the snap ramps in with speed, so there is no switch.
  - **Every future counter is built this way.** The camera's push-past defocus still applies to a place the camera is
    flying PAST (a transition, not a number being read); it never touches a figure at rest or rolling in its own beat.

- **2026-09-30 (Video 023 — MASTER RENDER; user: "render")** `render.mjs` → `out/portnoy_audit.mp4`: single-tab (the new
  default), guard 0 hits with the declared empty list, the take wired.
  - **Verified on the file:**
    · h264 1080×1920 at 30 fps, all 1,924 frames, 64.19 s (inside the 65-s cap), 16.7 MB, stereo AAC at 48 kHz;
    · mean −26.0 dB, peak −5.4 dB, flat factor 0;
    · every 10-s window −25.7 to −26.4 dB, the verdict and call to action at −26.6 dB, the tail bed + fade (−33.5 dB);
    · 19 frames pulled from the MP4, from the colour photo to the flat coin;
    · jitter measured IN THE MP4 (`scratchpad/mp4jitter.py`, phase correlation): every held label steady to
      ≤ 0.03 px, including the scale's "$551M", which four render tabs had flickered 1.1 px.
  - **Served** over the range host on 3152 through srv.us. It answered 206 on range requests, and a full download was
    byte-exact.

- **2026-09-30 (Video 023 — THE TAKE WIRED; user: "I put the vo in public")** ElevenLabs "Russ", read from the corrected
  VO_SCRIPT (step 0: every corrected line is present, and no line from the brief's version).
  - **The length:** 92.9 s raw → 66.3 s trimmed, over the brief's 65-s HARD CAP once the end hold is added. Fitted
    without cutting a word:
    · silences ≥ 0.3 s padded to 0.16 s (not only ≥ 0.45 s), saving ~1.7 s across seven phrase pauses;
    · a 3.5% time-stretch (`vo_trim.py TEMPO`, atempo, pitch kept);
    · the end hold 3.4 → 2.0 s.
    Voice 62.4 s, **film 64.1 s**.
  - **Captions from the transcript**, with fixes in the plan only: "Transit" and "Sportsbook" lowercased, "The catch. If"
    joined, "Also, DraftKings" and "Total," tidied. Every NUMBER anchor now matches the take's digits as well
    ($1, 36%, 10 to 15, 163, 388, $2 billion, $923).
  - **The mix** (no SFX on this channel):
    · the bed is 022's song;
    · the voice is levelled (spread 5.4 → 0.2 dB), and the bed envelope was reset flat (it carried 022's curve);
    · separation holds 5.4–5.6 dB in every window, converged to 0.1 dB;
    · ★ a new TAIL point. The controller holds its last window (mostly outro), which left the verdict and the call to
      action unmeasured at 3.7 dB. `gatedsep.py` now measures the voice's final 3.5 s, and `bedenv.mjs` controls them
      as one extra point: 5.6 dB;
    · the full-mix probe: −26.0 dB mean, peak −5.3, no clipping, every 10-s window −25.7 to −26.5, the tail bed + fade.
  - **What the take's timing broke, and the fixes** (probe, then a continuous sweep):
    · the CLAIMED pill was legible for only 22 frames before the pie push. It comes in sooner, and the pie waits for
      `W1_DONE_AT`, so it holds ~1.3 s;
    · W3 reached x 952 and is now narrower;
    · FREE sat 1 px under the band and is raised;
    · the caption page "…keep it till / he dies." is now "…keep it / till he dies." (`capchunk`: "till" opens a
      phrase, and an object pronoun may end a line before one).
    Everything else lands on its word. No MP4 rendered.

- **2026-09-30 (Video 023 — ★ STANDING: PHOTOS LARGE AND IN FULL COLOUR; user: "picture should be larger and not black
  and white")** A subject's photo is shown AS RECORDED, in colour: never greyscale, never sepia. It is shown at a size
  that reads as his face at a glance, not as a thumbnail. This re-asserts rule 37's own exception ("photographs are
  shown as recorded"), which the `PhotoPlate` inherited from 022 had overridden with `grayscale(1)`. That filter is
  gone from the kit, and **every future clone starts from the colour plate.** 023: the plate grew from 210 to 336
  design px wide (~410 × 510 screen px), with a tighter head-and-shoulders crop, and the counter moved up to make room.

- **2026-09-30 (Video 023 — HIS PHOTO; user: "I also put the face pic in public")** `public/licensed-image.webp`. Its
  own metadata makes it a GETTY editorial photo (Theo Wargo, 92NY, 29 Jun 2026, © Getty Images), so the licence was
  flagged to the user and the credit is in data.ts and the post caption. No other person is in it. It was cropped to
  him, cut out with `u2net_human_seg` (022's recipe) and its mask checked at 1:1: the 92NY backdrop lettering behind
  his hair is gone. It sits small beneath the counter for ~2 s, in the same greyscale plate as 022's approved photo.
  A multi-frame render (`<Img>`) holds it on every frame, and the probe is CLEAN on the hook.

- **2026-09-30 (Video 023 — THE SMOOTHNESS PASS; user: "ensure that there aren't any jittery or sudden transitions that
  aren't smooth")** ★ STANDING RULE from now on: **no sudden and no jittery motion, measured before every handback.**
  - **Sudden (the pop scan, every frame at 0.18 scale):**
    · Exits yanked: the `IN` ease ends at 5.5× its average speed. New `EXIT` / `rExit` ends at 2× and is used for every
      leave-by-moving. Never ease an already-eased clock (the name plate ran `rIn` inside `rIn`).
    · The coin's fall was an eased clock squared; it is now gravity (linear²) plus one small landing hop.
    · The price tag and the ledger pen popped in and out in one frame; they now fade and travel.
    · The counter's ink swapped in one frame (a `? :` on a ramp); it now mixes (`mixRgb`).
    · The brief's hard cut to the stool is now a 24-frame whip-slide (`whip`). The user's words beat the brief's.
    · White places pushed past swelled into a half-frame white smear (35–60 levels of change per frame). `DropOut`
      now DIMS them over the push's first 16 frames (5–10 levels, like the dark places).
  - **Jittery (the jitter scan: lossless full-size frames, phase correlation, with canaries):**
    · ★ Chrome puts text, SVG roots and boxes on WHOLE pixels unless they sit in a genuinely 3-D layer. At rest they
      ticked 1 px every few frames against the camera's drift; moving, they stepped 2.1, 1.4, 2.0, 1.4 px where they
      should have decelerated. **Every place's `Design` and every FG layer carries a 0.15° tilt under a perspective, and
      every MOVING element takes its offset through `smooth3d()`.** `translateZ(0)`, a bare `perspective()` and a 0.01°
      rotation were each measured and each is flattened, so the snapping stays. The tilt changes nothing visible (JPEG
      stills are identical in colour and edge).
    · ★ **No CSS `filter` on anything that moves.** A `drop-shadow` filter's output is pixel-aligned and made the FG
      zig-zag every frame (18 of 21 direction flips; 1 without it). FG shadows are painted `box-shadow`s now.
    · ★ **Render single-tab** (`render.mjs` defaults to `--concurrency=1`). Four tabs drew the whole balance scale 1.1 px
      lower in some tabs, while the same frames drawn single-tab were steady to 0.007 px.
  - **Verified:**
    · the pop scan: every remaining spike is a smooth hump;
    · the jitter scan: every held label or card moves at ~0.01 px of acceleration, and the FG sits at the crop's own
      noise floor;
    · the mover check: an A/B with the fix reverted halves the irregularity;
    · the probe CLEAN on all frames; tsc clean.
    No MP4 rendered.
  - Tools (clone with the folder): `scratchpad/jitterscan.mjs` + `jitter023.py` (at rest), `moverscan.py` (in motion),
    `framespng.mjs` (lossless frames, N tabs), and the pop scan (`snapscan.mjs` / `snapfind.py` / `snapsort.py`).

- **2026-09-29 (Video 023 — "One Dollar", Dave Portnoy: BUILT from the brief; no take yet, no render)**
  - **The folder:** `023-portnoy/`, cloned from `022-cramer/`, composition `InfluencerAudit023`. Ports: Studio 3151,
    serve 3152, probe 3253.
  - **Sixteen places for twenty sentences**, in rule 38's journey:
    · the odometer → coin, then the stool;
    · the transit bench, then Wikipedia card W1 with its price tag;
    · the pie, W2, then the merging stacks;
    · the calendar and paper plane, the sportsbook doorway, then the ledger;
    · the bricked arch, the jigsaw, then W3;
    · the padlocked wooden sign, the blank beat, then the scale.
    Provisional length ~62.6 s, 200 words.
  - **Fact-check (primary source, VO_SCRIPT.txt):** no blocking line; six rewordings for precision. So
    `script_fixes.json` is an EMPTY list with a `noBlockingLines` declaration. `render.mjs` refuses an empty list
    without one, and `guardtest.mjs` proves both directions.
  - **The brief's look lines vs the house rules:**
    · rule 37 kept colour: LEGIT, W2's highlighter and the ledger ink are violet or dark, not green or red. Flagged
      to the user.
    · the brief's HARD CUT after the coin was honoured: a new `cut` kind in Composition.tsx, a one-frame sideways
      move. The camera's blur is by depth, not velocity, so it is clean.
  - **What the sweeps found, and the lessons (apply to every future OffCamCelebs film):**
    · **Actions landed inside the next transition** on five places: the pie's lift, the split-flap flip, the
      bricking, the third jigsaw piece (and its brief-mandated 1-s hold), and the coin's collapse and drop. 022's
      lesson, recurring. It is now STRUCTURAL: each such place exports its `*_DONE_AT`, and the successor's
      `t0 = max(lead(…), DONE_AT + n)`.
    · **The white flash came back** on every white place a push leaves (W1, W2, the ledger, the jigsaw, the
      calendar). Also STRUCTURAL now: `DropOut` in places.tsx, where a white place drops out through the bottom edge
      as the push begins. ★ **Rule: any light-coloured MID followed by a push leaves by DropOut.**
    · **A Wikipedia card at the standard 16 px text read at ~18 screen px.** `wikicap.mjs` now switches on the page's
      own "Text: Large" appearance setting (20 px), still the live 1280-px desktop page. It refuses if the setting
      does not take. W1 is cropped to the target's lines ± 1 line of context (`context: 1`).
    · **A connector between two highlights must route AROUND the text:** the first one struck through "till I".
    · **A spinning coin drawn with a signed scaleX mirrors its face.** Use |cos| for the width, and a plain reverse
      on the back half.
    · **An odometer needs mechanical carry and a one-digit drum window.** Each wheel positioned by its own
      continuous value, in a full-height window, read as a scramble.
    · The probe also caught: a sliding paper leaving the band, an FG box's text in the Reels UI, an FG sheet over
      the MID, cards 5 px too wide when turned, a jigsaw piece rising from below the band, LEGIT dropping through
      the caption band, three sub-floor labels, and a 12-frame blank (the brief says 6).
  - **Verified:** tsc clean; the probe CLEAN on all 976 frames (every 2nd), canaries passing; capcheck CLEAN; guardtest
    ✓; a continuous sweep of every 3rd frame over the whole film; the stills of every beat. No MP4 rendered.

- **2026-09-29 (Video 022 — MASTER RENDER; user: "render")**
  - `render.mjs --concurrency=4` → `out/cramer_audit.mp4`. The guard found 0 hits, the take is wired, and the cues
    come from the transcript, so it was not a preview and not a review cut.
  - **Verified on the file:**
    · h264 1080×1920 at 30 fps, all 1,879 frames, 62.68 s (inside the 65-s cap), 22.8 MB, stereo AAC at 48 kHz;
    · mix mean −26.2 dB, peak −2.3 dB, flat factor 0; every 10-s speech window between −25.7 and −26.3 dB;
    · after the last word, the bed holds at about −31 dB, then fades to −48.6 dB by the last frame;
    · frames pulled from the MP4: the photo, the FG glide, the buttons, the crack, the dead lamp, the stamp.
  - **Served** over the range host on 3150 through Pinggy, with a full download verified byte-exact. A fresh
    Cloudflare quick tunnel flapped (206/000/530) and was stopped, not cycled.

- **2026-09-28 (Video 022 — FG ENTRANCES; user: "the visuals that appear on screen in the bottom right or left when
  there is a zoom in transition don't appear smoothly enough. The fade in makes it seem like it just popped into the
  screen")**
  - **The cause:** the four pushed-in places' FG objects (the magnifier, Kiplinger's page, the ledger, the statement)
    arrived by a distance fade, far [1.1, 1.35]. On the io-eased push that fell in its last 4–5 frames: a pop.
  - **Now they arrive BY MOVING** (world.tsx `LayerSpec.enter`; the side lives in `PARTS[id].side`):
    · each object is drawn in its REST geometry, fully opaque, and waits 600 px off its own frame edge;
    · it glides in over the push's last 80% on an ease-out and settles 10 f after the camera;
    · right-hand objects come from the right, left-hand ones from the left.
  - **Verified:** a strip of each entry (every 2–3 frames: a sliver at the edge, a steady glide, a gentle settle, no
    fade), and the probe CLEAN on all 1,879 frames. No render.

- **2026-09-28 (Video 022 — THE TAKE WIRED; user: "I put the vo in public")**
  - **The take:** ElevenLabs "Russ", 92.1 s → 59.7 s trimmed (40 gaps). It was **READ FROM THE CORRECTED
    VO_SCRIPT.txt**, the first in ten films: "39% against fifteen and a half" (confirmed by the medium model),
    "nearly 15 years", "the stock had lost". The master is clear, and every guardrail is spoken or drawn.
  - **Clone carryovers caught on arrival:**
    · `captions_vo.mjs` still held **021's whole PLAN** (Martell's sentences, word indices and scene counts).
    · It had no silence snap. Seventeen starts sat inside real pauses, one ("Send") by a third of a second.
    · `bedenv.mjs` controlled the bed on PLAIN means, not speech-gated ones (CLAUDE.md's V25 rule). It now reads
      `gatedsep.py`'s JSON. An ffmpeg silenceremove gate was tried first; it read the voice QUIETER than its plain
      mean, which no correct gate can do, so it was dropped rather than tuned.
    · `level_vo.py` refused near full scale ("lower the target") with no way to do so. It now shifts the whole
      curve down to 1 dB of headroom, leaving the relative levels unchanged.
  - **The guard false-fired on the take's own raw transcript:** the small model wrote "fifteen and a half" as
    "15 .5". The lookahead now allows the split's space, and all 7 cases are proven.
  - **The mix, from solo renders:**
    · the voice was leveled (per-cue spread 6.7 → 0.3 dB);
    · the bed is 021's Radiohead track, as the rule says;
    · the envelope holds 5.4–5.6 dB of separation in every window, with a second render as the proof (residual
      0.1 dB);
    · the gain is ×1.2 on both, so it plays at 021's level: mean −26.2, peak −2.3 dB, no clipping; the tail is bed
      then fade.
  - **What the REAL timing broke** (found by a continuous sweep of all 1,879 frames, every 4th frame):
    · **"It shut down."** is 0.6 s in the take, and the slide to the verdict began as the lamp died. Now the chart
      leaves before the line, the lamp dies ON it, and the slide waits (`cueAt("inverse", 3) + 22`).
    · **A caption orphan**, "stock picks." alone on a page. The paginator's stub test now also counts ≤2-word last
      pages, determiners ("this") join the weak words, and a line likes to start a phrase ("…ETF / to bet
      against"). Only that page changed.
    · **The ledger's title** drifted 0.8 px past the band at the new camera phase, so it moved 12 px left.
  - **Verified:** tsc; capcheck; guardtest 6/6; render --check (the master is allowed); the probe CLEAN (the one
    full-run hit was fixed and its span re-probed); 6 snap-scan spikes, all camera-move humps; the continuous
    sweep; strips of every retimed beat. **No MP4** (not asked).

- **2026-09-28 (Video 022 — THE BUY BUTTONS; user: "fix the squares around the buy buttons")**
  - **The squares:** the plunger wall behind each dome was a rectangle with SQUARE top corners, poking out past the
    dome's curve. The dome also floated above its ring, with its centre at 0.22 of the button against the well's
    0.48, and sat over the console's top edge. The ring read as an empty black hole.
  - **Rebuilt as an assembled arcade button:** the dome's ellipse is centred over the well, and the wall runs from
    the dome's widest line down to an ELLIPTICAL base in the well, a hair narrower than the dome, so no corner can
    show. The whole button is seated on the panel. Pressed, the dome sinks into the ring.
  - **★ Draw a real object's parts in the order they are ASSEMBLED, and check the JOINS up close.** Each part was
    right on its own; the defect was where two met. A full-size crop of the object at rest finds it; a
    contact sheet does not.
  - **The third "buy" press landed inside the next push's rack**, the same class as "Not a joke". The promo push
    now waits for it (`LAST_BUY_AT + 12`).
  - **Verified:** a full-size crop, a press strip, and the probe CLEAN on all 1,954 frames. No re-render.

- **2026-09-28 (Video 022 — PREVIEW RENDER; user: "render", before any VO take existed)**
  - **A render with no take wired is a silent, script-paced PREVIEW,** and it never takes the master filename.
    `render.mjs` now writes `out/cramer_audit_PREVIEW.mp4` whenever HAS_VO is off or the cues are provisional,
    exactly as a review cut writes `_REVIEW`. `serve.mjs` serves it with a "not for posting" notice.

- **2026-09-28 (Video 022 — THE FULL SWEEP; user: "do a full sweep to make sure that there aren't any violations or
  intersections", then "theres some wierd block that appears in the background at 4 seconds, the animation at 20
  seconds doesn't make sense, identify other issues like this and fix them")**
  - **Both reported defects were real, and the probe was CLEAN through both** (they are motion, not geometry):
    · **4 s — the block:** the incoming Wikipedia window showed at ~60% behind the −15% card before the push, via
      far [1.8, 2.8]. Now far [1.25, 1.7], and the fix applies to all 8 pushes (rule 38 lesson).
    · **20 s — the bars:** a 3.3× zoom into unlabelled slabs. Now the chart stays labelled, with a dashed level
      and ONE "0.7 PT" callout on a leader (rule 38 lesson).
  - **Found by a CONTINUOUS sweep** (every 4th frame, 13 contact sheets, the whole film) and fixed:
    · **A white flash:** the camera pushed through W2's white page at 1.8×, and the frame went white for ~8 f with
      the caption lost on it. W2 now leaves by DROPPING out through the bottom edge.
    · **The calendar tear double-exposed:** the old page faded through 50% over the next, so "07" and "10"
      overlapped. The page now flips up off its binding in perspective and stays opaque until edge-on.
    · **A one-frame string swap:** the S&P label went "S&P 500" → "S&P 500 + DIVIDENDS" on a `grow > 0.5 ?`. It is
      now a sequential out-then-in.
    · **The ledge's "BSC"** floated alone over an empty slot. It now labels the line, with −52% arriving above it.
    · **The certificate cracked 1.5 s early**, during "he meant customer accounts". It now cracks on "not the
      stock", and the slide to the mirror waits for the crack to land.
    · **The divergence chart** landed as an empty plate and drew across the whole sentence. It now draws on
      landing and is done by "fifteen percent".
    · **"Not a joke."** was struck inside the next push's blur, because that push began before the word. JOKE is
      now struck ON the word, and the market push waits for it.
    · **Two blank white arrivals:** the browser window and the paper chart. The browser's page is already
      scrolling, and the chart's legend is there on arrival.
  - **★ The probe now checks rule 39 itself** (Probe.tsx `textInfo`, probe022.mjs `r39`), on every settled, sharp
    text:
    · FLOOR (screen px), FACE, UNLOADED, ALIGN, OFF-CENTRE (vs its own card) and SPILL;
    · TEXT×TEXT, the same-object label pairs the group test never compared, judged on INK;
    · three canaries prove every check on every frame.
    Its first run found:
    · the CLAIMED pill's tag on a container with no font (it measured "Times New Roman, left");
    · the browser URL left-aligned, and now centred in its field;
    · six labels under the floor (Wikipedia attribution, Kiplinger's date, the ledger title, the cert sub, the
      chart legend, the pill);
    · W2's attribution running past the band at 1.8×, so the push-in is now 1.55×.
    Three of the probe's own errors were caught the same way: borders in layout offsets, flex groups, and line
    boxes vs ink.
  - **Verified:**
    · probe CLEAN on all 1,954 frames, with all five canaries holding on every frame;
    · the snap scan found 6 spikes, all multi-frame camera-move humps and none a pop (its sorter still read the
      deleted scenes.tsx, and is fixed);
    · capcheck CLEAN; guardtest 6/6; render --check passed;
    · no MP4.

- **2026-09-28 (Video 022 — the RULE 39 POLISH PASS, and his photo; user: "and use the wikepedia photo")**
  - **The photo is the Wikipedia article's own infobox photo**, chosen by the user: Commons
    "Andrew Aziz Cramer (cropped).jpg", CC BY 2.0, Bear Bull Traders (NYSE floor, Nov 2021).
    ⚠ **The "(cropped)" file was NOT clean (rule 019):** a sliver of Andrew Aziz's pinstriped
    shoulder remained at the far left, and a dark pinstripe past the right shoulder. The source
    was cropped to him before rembg, and the MASK was checked. `u2net_human_seg` beat `isnet`,
    which left a dark rim on the bald head: **on a bald subject, compare the head's edge on the
    plate colour.** The photo's EXIF rotation was baked in, since PIL reads the raw pixels
    sideways. The credit is in the post caption, never on screen.
  - **The hook is now ONE centred axis:** the SJIM card floats above him with its arrow pointing
    straight down at the photo. He leaves DOWN through the frame edge while the card drops to the
    centre and grows.
  - **The polish** (`scratchpad/polish022.mjs`, 50+ exact-match counted replacements):
    · Every card face is centred: the ticker, the promo banner, the ledge's figure, the paper
      chart's legend (now with ink swatches), and the lettering on every FG object.
    · Every label is at or above the floor: sub-labels are 19–20 in Plex Mono 500, sentence case.
    · The ledge lost its two side labels. It now carries ONE centred −52% over its ticker.
  - **Pass 2 (`polish022b.mjs`), from the full stills sweep after pass 1:**
    · **A two-line label breaks at its middle** (`twoLines`). The ticker card and the SJIM box both
      set "INVERSE CRAMER / TRACKER ETF", where CSS had left "ETF" alone on the second line.
    · **Measure a label's floor on SCREEN, not in the object's units.** The ticker card is drawn
      at 0.9 scale, so its "17" came out about 19 px. It is now 20, about 22 px.
    · **The promo's rising-arrow mark is gone.** At any opacity it crossed "500".
    · **The mirror's reflected sign sets its word smaller.** The plate is narrower than the real
      sign, so "SELL" was clipped at the frame.
    · **The INFLATED stamp now lands across the banner's LOWER EDGE**, below the headline. It used
      to hide half of "THE S&P 500"; now the claim and the verdict both read whole.
    · **The fund shelf dims to 3% behind the chart.** At the default 15% its blurred plank read as
      a smudge under a clean plate.
  - **★ The caption paginator** (`capchunk.mjs`):
    · **A sentence never ends on a one-word line.** "…the S&P / 500." and "…charitable / trust."
      were both produced.
    · **A line never ends on half of a name** (`BIND`: S&P, No., Mr., Dr.).
    · **The self-test carries both known-bad sentences.** It was made to fire by stripping the new
      rules from a copy.
    · `capcheck.mjs` is CLEAN in the real face.
  - **Verified:**
    · tsc clean.
    · Stills of all 24 beats, plus full-size crops of the hook and the chart.
    · **Probe CLEAN on all 1,954 frames**, after two nudges. The re-centred ACCOUNT header had
      drifted 0.7 px past the safe edge on its exit, so it is now centred on the VISIBLE part of
      its frame-cropped bar. Kiplinger's page grazed the source line for 1 frame.
    · A multi-tab `renderFrames` run of the hook: the photo is present in every frame from 0.
    · guardtest 6/6.
    · No MP4.

- **2026-09-28 (Video 022 — "Inverse Inverse", Jim Cramer: BUILT, then RESTYLED to rule 38)**
  - **The brief** arrived with a "Bartlett build" materials line (matte, flat, no gloss) and a
    preview safe-zone overlay. Both are template text that rules 35 and 32 already retired; the
    look followed rules 36 and 37, then 38.
  - **New standing format from the brief: the WIKIPEDIA HIGHLIGHT CARDS.**
    · **Captured LIVE** by `scratchpad/wikicap.mjs`: a separate headless Chrome with a throwaway
      profile, 1280 px wide, light theme, images BLOCKED (the infobox holds his photo).
    · The script finds each target by a unique substring in the live text, writes
      `wiki_*.png` plus `wiki.ts` (line boxes and the revision id), and refuses if a needle is
      not found exactly once.
    · **Its first run refused:** the live page nests paragraphs in section wrappers, so
      `.mw-parser-output > p` matched nothing.
    · **The three treatments:** W1 a highlighter sweep, W2 a pen circle plus a slow push-in, W3 a
      marker underline that lifts into a card.
    · Everything outside the target sentence sits at 40%, and every card carries
      "Wikipedia · Jim Cramer · CC BY-SA 4.0" inside the card.
    · ⚠ **The ink is VIOLET, not the brief's yellow and red** (standing rule 4, no yellow, and
      rule 37, one accent), with the colour held in one constant (`WIKI_INK`) so it can be switched.
      FLAGGED TO THE USER.
  - **The fact-check** (a background agent, at primary source) confirmed most of the brief:
    · SJIM −15% is total return;
    · Kiplinger, 1 Aug 2010: "about 39%", 15.5%, 38.3%;
    · Hartley & Olson: 64.53% vs 70.04%, BOTH without dividends;
    · Bear Stearns $62.97 → $30.00 (−52.4%).
    **One line blocks:** "thirty-nine against fifteen" while the screen shows 15.5%. **Three
    softenings:** "his" for "his own", "nearly fifteen years", "the stock had lost". **The brief's
    fee label was WRONG:** "typical" 0.03%, when Vanguard's average is 0.41% (now "biggest S&P 500
    index ETFs"). All of it is in VO_SCRIPT.txt with a paste-ready post caption. The guard is
    armed before the take, and all six guardtest directions pass.
  - **Restyled to rule 38 the same day:** 16 places on one journey, extruded solids, and 6 FG
    pieces (a magnifier, a TV camera, Kiplinger's page, a dividend cheque, the trust's ledger, a
    brokerage statement). Probe CLEAN on all 1,954 frames; stills sweep of all 24 beats.
  - **⚠ Still needed from the user:** a photo of him for the hook (the Commons infobox photo is CC
    BY 2.0, "Bear Bull Traders", offered and not downloaded), and the take.

- **2026-09-27 (Video 021 — REVIEW RENDER; user: "render")**
  - The master is still blocked: the take reads the 3 brief lines that failed verification. So
    `render.mjs --allow-vo-conflicts --concurrency=4` wrote `out/martell_audit_REVIEW.mp4`, as on 020.
  - **Verified on the file:** h264 1080×1920 at 30 fps, AAC stereo 48 kHz, 100.52 s, 28.8 MB.
    Mix −25.9 / −3.9 dB, flat factor 0, post-VO tail −39.5 dB falling to −54 dB in the last 0.5 s.
  - Frames pulled from the MP4 show the avatar from frame 0 and the headshot at 13–14 s (the
    `<Img>` fix holds in a real render), in the NOIR palette throughout.
  - Served over `serve.mjs` (3148, range requests OK) through Pinggy; Cloudflare was intermittent.

- **2026-09-27 (Video 021 — RULE 37, THE NOIR PALETTE; user: "The colours are still all over the
  place… choose the right color palette and stick to it. Dark themed similar to 100bps")**
  - **Before:** ~60 hand-written colours across the kit: four room tints (teal-green ink, grey,
    cold blue, warm brown), a warm key, brass frames and plaques, cream paper, a brown clipboard
    and shelf, warm window lights, red SOLD bands, a red pin, a red book band, a teal budget line
    and marker, blue VERIFIED pills, ticks and directory heads, a navy-jeaned figure with a painted
    skin tone, and a red verdict.
  - **After:** the `N` palette in theme.ts:
    · one near-black room;
    · a neutral platinum key;
    · graphite solids, platinum steel, cool white paper;
    · violet ONLY on the claim (sign, chip, highlight, CLAIMED pill, INFLATED);
    · facts in white light.
    Applied as 92 exact replacements, each with an expected count, so a miss refused instead of
    passing. The per-scene rooms were replaced by one `Room`. After the pass, every colour in the
    kit is either a neutral or the violet family.
  - **The frost was lightened** (0.30 → 0.44) so the dark "5 BOUGHT SINCE / VALUE NOT PUBLIC" reads
    on it. The unlit budget line was dimmed so that the lit one (white, glowing) is clearly
    different.
  - Stills sweep of all 32 beats checked. Geometry is unchanged (colour only). No MP4.

- **2026-09-27 (Video 021 — USER: "add his actual youtube profile picture to the hook scene")**
  - The hook phone's profile disc now carries his real channel avatar (`public/martell_yt_avatar.jpg`).
    It was fetched from youtube.com/@danmartell at the user's instruction, which widens the brief's
    "one photo only". It is drawn as YouTube draws it: circular and ungraded. The disc is 100 px
    (was 84), so the face reads at phone size.
  - **★ Period-checked before use.** The phone shows the bio as it stood in 2024–25. Wayback
    captures show this avatar beside that bio line on 17 Feb, 29 May and 26 Jul 2025, while Sep
    and Dec 2024 carried two older ones. **Going forward: a phone or profile mock of a subject's
    account shows their REAL avatar, taken from the same period as the text it sits beside.**
  - Checked in a multi-frame render (it uses `<Img>`); the hook probe is CLEAN. ⚠ The licence is
    not clearly free (his own image); flagged to the user.

- **2026-09-26 (Video 021 — THE HYBRID, rule 36; user: "more modern and smooth, like 100bps, but
  different in its own way… keep some of the detail and different types of visuals")**
  - **Motion rebuilt, objects untouched.** `src/audit/motion.tsx` holds 100bps' vocabulary:
    · the three curves;
    · `Stage`/`camOf`, the breathing camera (3% zigzag, 1% creep, two-sine drift, zoom centred
      on the Reels band);
    · `Construction` (slide + zoom in on OUT, accelerate away on IN, with a `labels` slot that
      is never turned);
    · a gentle `Turn` and a warm `KeyCone` that alternates sides and cools in the archive room.
    `scenes.tsx` lost 017's `<Scene>` push and the `life()` fades; every object, fact, pill,
    source strip and take anchor stayed.
  - **New in-scene devices:**
    · the push THROUGH the building's doors in the bio beat (the building grows and accelerates
      away, and the lobby settles in from an over-scale);
    · a FOCUS PULL (the lobby dims and blurs while the FEB 2023 plaque is held in front of it,
      replacing a 20-frame flicker of the lobby);
    · the building's step aside in the fair beat, as INOUT travel.
  - **Probe, every frame (3,014): CLEAN.** The first pass found 9 local hits, all from the new
    motion, and all fixed:
    · labels a few px under the band, because the zoom is now IN where 017's dolly started
      small (phone up 30, the exits row up 20, the backer board up 7);
    · a book and a counter leaving TOWARD each other;
    · exit growth closing a 7-unit gap in the verdict trio;
    · the building arriving 2 frames under the flying chip;
    · a sub rising into the rows above it.
  - **Snap scan:** the sorter's scene-push allowance is now off, since there is no push. All 12
    spikes are caption page changes, and none is unexplained.
  - **★ Found by the multi-frame scan: the face plate rendered EMPTY.** The kit's plain `<img>`
    had not loaded when the frames were captured, although a single still looked fine. It is
    now Remotion's `<Img>`, verified in a 4-tab render of the beat. Logged in CLAUDE.md.
    009–020's kits carry the same tag; a follow-up task was offered.
  - **The clipboard's rows ran ~100 px past the paper** ("B2B SaaS · $1–10M rev." on one line).
    Each row is now two fitted lines, and the board is 285 wide.
  - **Master still blocked** by the guard (3 lines read from the brief). No MP4 was rendered.

- **2026-09-26 (Video 021 — TAKE AND BED WIRED; user: "vo in public, use the same song")**
  - **The take was read from the BRIEF — the ninth film running** (ElevenLabs "Russ", 138.9 →
    97.5 s trimmed, 311 words). All three blocked lines are spoken, so the master is blocked
    and a REVIEW cut is possible.
  - **★ The guard's pattern missed the take's punctuation.** It was `theirs,? not his`; the take
    says "are theirs. Not his." with a full stop. Only the post-wiring run against the REAL
    caption showed it (CLAUDE.md, 018). It is now `theirs[.,;!]?\s+not his`, and briefSpoken
    carries the full stop. guardtest passes in all five directions; the real take hits 3
    captions.
  - **The picture carries what the voice drops (CLAUDE.md, 012).** The take says only "Not the
    value of anything it owned". So:
    · the launch state ("at launch: none bought") sits on the BUDGET line with the shopping
      list;
    · the five blocks and the frost land inside the 52-frame line;
    · the frosted tank ("5 bought since · value not public") stands beside the directory for
      the whole backer beat, 6 s.
    The net-worth range stays ESTIMATE, "not in his words".
  - **Rule 29 re-allocation:** "Dan Martell, one of the best-known SaaS coaches online" runs 88
    frames, so the brief's 2 s photo becomes ~1.3 s, leaving the coach his 24 legible frames.
    The verdict's recap frame holds 10 frames into the next line.
  - **Bed: Radiohead** (020's, "the same song"). The voice was levelled per sentence (7.9 →
    0.4 dB). The envelope converged in one correction: 5.3–5.7 dB separation in all 10
    windows, worst residual 0.2 dB. The verified envelope ships. Mix −25.9 / −3.8 dB, flat
    factor 0, tail −39.1 dB, 100.5 s.
  - Probe at the real frames: CLEAN, nothing short-lived, dips ≤ 4 frames.

- **2026-09-26 (Video 021 — REBUILT IN THE 012 + 017 LOOK; user: "you've altered the style way too
  much… revert back to that style. Save my preferences" · "but keep the sizing for the instagram
  reels viewers") — recorded as rule 35.**
  - **The kit is 017's:**
    · `kit.tsx` (EASE/GROW) and `scene3d.tsx` (the 48-frame rigid-strip push, `Panel`, `Riser`),
      plus 020's STAGE_X;
    · 017's theme and tier palette;
    · 017's ROOMS: hook ink · who grey · exits ink · bio COLD (the archive) · backer grey ·
      fair WARMEST · verdict ink. They now crossfade over 24 frames under the push instead of
      swapping on one frame.
  - **The objects are redrawn in 017's materials:** warm-key gradients, deep drop shadows, metal,
    paper with a sweeping shine, glowing tier pills, and 012's brass.
    · The building's rooftop sign glows CLAIMED violet.
    · The directory is a black-felt letterboard in a brass frame. His stake is 012's smooth
      socket with a keyhole and no number.
    · The tank is a glass cylinder on steel. Its capacity line is the motif teal.
    · The coach is 017's skeleton in a black tee. The counter is 017's drum counter and it lands.
    · The certificate is 017's. The verdict is 017's inflating plate.
  - **Kept from the first cut:** the fact-checked script, the three-line guard, the verbatim bio
    phone, the tank that FROSTS after launch, and the rule-32 caption pages and band.
  - **The probe learned the push:** edge and caption checks run AT REST only (020's atRest).
    Overlaps are checked on every frame, and density counts the settled shot. Result: CLEAN, no
    short-lived element, dips ≤ 4 frames.

- **2026-09-26 (Video 021 — "A Budget Isn't a Balance", Dan Martell — BUILT, no take yet)**
  `021-martell/`, InfluencerAudit021, Studio 3147 / file host 3148 / probe 3249. Cloned from 020.
  - **The brief's motion spec is recorded as rule 34** (one easing, 12–18-frame transitions,
    match-cuts). It needed a NEW STAGE: one continuous world under one camera (`stage.tsx`),
    in two sets. The STREET holds the building, its sign and every prop beat. The LOBBY holds
    the directory board and the glass tank, big.
    · The camera PUSHES THROUGH the doors and EASES BACK out. It never pans, because a pan
      drags the next set in across the frame edge where the Reels UI sits.
    · The match-cuts: the bio's $100M+ lifts off and becomes the sign; the building's outline
      becomes the photo plate; the plate becomes the whiteboard; the laptop's screen becomes
      the middle sold building; Clarity's outline grows into the holding company.
    · The one hard cut is INFLATED.
  - **Accent per scene alternates teal and sand**, with the fair beat on sand as the brief
    directs. INFLATED is a BONE plate, so the verdict scene keeps a single accent.
  - **★★ THE TANK TELLS ONLY WHAT IS PUBLIC.** The brief's "empty tank, fill at zero" was true
    only at launch. Big Band has since bought five companies (Inphonite, Workzone, DocLib,
    ColeSoft, CNX), and no price has been disclosed. So the tank is EMPTY only under the
    label "at launch: none bought". After that, five blocks drop in and the glass FROSTS over,
    labelled "5 bought since · value not public". It never shows a level nobody published.
  - **★★ THE AUDIT MEASURES THE RENDER NOW (`src/audit/Probe.tsx` + `scratchpad/probe021.mjs`).**
    It replaces 020's geometry mirror: the camera, morphs and two sets would have made the copy
    larger than ever, and 010/016/017 each shipped a mirror that drifted or shared the render's
    bug. The film renders with `{probe:true}`, and every tagged element's real screen box and
    effective opacity is logged each frame.
    · It proves itself every run: a calibration box, an overlapping canary pair that must fire,
      a touching pair that must not, and a refusal on any visible text it cannot attribute.
    · Its `offok` escape (a facade the camera pushes through) never applies to text, and every
      use is listed under TRANSIT with its frames. All of them coincide with the four camera
      pushes and ease-backs.
    · EMPTY_MAX is 10 frames, not 020's 2. Rule 34's symmetric 12–18-frame handovers in one
      place spend ~7–9 frames under 0.3 by construction: a breath, not a dead stretch.
  - **Snap scan:** its sorter no longer excuses 50 frames after every scene start (that was
    020's push). Only caption pages and the verdict cut are excused. The 8 spikes left are
    12-frame fades of bright objects coinciding with a caption change. None is a pop.
  - **Photo** (user-supplied, 2026-09-26): an author headshot from his literary agency's site,
    lucindaliterary.com. Clean studio backdrop, no one else in it. The default cut-out model
    handled it. ⚠ The licence is not clearly free; flagged to the user.
  - **Fact-check before the take** (VO_SCRIPT.txt, sent to the user): 3 brief lines blocked
    and armed in the guard, 9 wording fixes. The guard was proven in all five directions
    before any take exists.

- **2026-09-25 (Video 020 — REVIEW RENDER; user: "render")** — `out/trump_audit_REVIEW.mp4`.
  The master stays blocked: the take reads 7 brief lines that failed verification (10 hits on
  8 captions).
  - **The Court of Appeals was re-checked first**, as the brief requires. His reply brief was filed
    there ~26 Aug 2026, with no argument date and no ruling, so the ending ("PENDING · NOT YET
    ARGUED") stands. The court's own calendar is behind a bot check, so this rests on the news
    record.
  - **The first render's own frames showed a defect the audit had passed.** On "It now sits with
    New York's highest court" the case file ROSE from below, in front of the shelf, and for ~1 s
    cut through the board and the COURT OF APPEALS plate. The mirror's soft pair
    ["case file", "shelf"] was written for the file RESTING on the board, but a soft pair excuses
    every frame, so it excused the crossing too.
    · **The motion:** the file is now SET DOWN from 70 design px above: it fades in over 12
      frames and settles over 26. The shelf's own anchor note always said "things are set down
      ON it".
    · **The audit:** it has a new `touch` relation (a contact, excused only while ≤ 1.5 px deep).
      All ten of appeal's shelf/file soft pairs are gone. Proven by putting the rising motion
      back in the mirror: the audit fired (139 px, 21 frames), then went clean again once the
      motion was restored.
  - **The first attempt died at 70%** ("Target closed"). Other sessions' Studios held the RAM
    (2.2 of 15.7 GB free). `render.mjs` now takes `--concurrency=N`, and 4 tabs rendered cleanly.

- **2026-09-25 (Video 020 — PHOTO WIRED; user: "face pic in public now")** — the official 2025
  presidential portrait (a U.S. government work, public domain), with no other people in it.
  - **The usual cut-out FAILED:** isnet with alpha matting dropped the whole navy suit against
    the dark backdrop and left a floating head. A floating head is a caricature, which is
    exactly what this brief forbids. The PERSON model (`--model u2net_human_seg`) kept the
    shoulders, suit and tie cleanly.
  - **The plate is now at the house size** (TERMINAL §4: 620–740 px on screen). It was ~510 px;
    PHOTO_W 420 → 500 design ≈ 610 px, inside the safe band.
  - **A 2 s photo in a 3.5 s line leaves ~1.2 s for what follows.** PRESIDENT, the third
    plaque, was legible for only 20 frames. The stagger is tightened and the plaques hold into
    the next line: nothing short-lived.

- **2026-09-25 (Video 020 — TAKE AND BED WIRED; user: "vo in public, use the same song")**
  - **The first file dropped in was the WRONG TAKE:** a 100BasisPoints finance voiceover about
    war and stocks, ending on that channel's sign-off. Caught on reading the transcript and
    NOT wired. **Always read the transcript before wiring anything; a take can belong to the
    other channel.**
  - **The right take was read from the BRIEF, the eighth film running** (ElevenLabs "Russ",
    187.0 → 138.2 s trimmed, 422 words). It does include the sign-off. The guard fires on
    all seven blocked lines, each on this take's own caption (8 captions). The screen
    follows the voice without printing anything false:
    · "above $7 billion, higher than ever": the tape draws the $7.3B RECORD with its own date
      (Sept 2025), and the verdict carries the same figure. It never appears under "latest".
    · The hand held out, the tax-office tape and a penalty "entirely" thrown out are not in
      the kit, so they can't be drawn.
  - **Bed:** Radiohead, "Everything In Its Right Place" (019's, "the same song"). The voice was
    levelled per cue (6.5 → 0.3 dB), and the envelope converged in one correction: 5.1–5.8 dB
    of separation in all 14 windows, worst residual 0.4 dB. Mix −26.7 / −3.6 dB, flat factor
    0, tail −40.4 dB, rendered voice spread 0.6 dB.
  - **Timing fixes found at the real frames:**
    · "Its actual size: just under 11,000" keyed the shrink to its LAST word, and the counter
      landed as the scene cut. It now runs from the line's start.
    · The Mar-a-Lago tape now rises INTO "$739" rather than after it.
    · Exits run b−7 … b+3, solved numerically: no frame where outgoing and incoming overlap,
      and at most 2 empty frames between them.

- **2026-09-25 (Video 020 "The Tape Measure" — BUILT; brief: Donald Trump, audit #020)** —
  `OffCamCelebs/020-trump/`, composition `InfluencerAudit020`, Studio 3145, file host 3146.
  Cloned from 019. Nine scenes, 36 cues, 73 caption pages. There is no photo, take or bed yet.
  - **The recurring system is ONE TOWER and ONE TAPE MEASURE.** The tower is always drawn to
    the height it was CLAIMED to be, and the part above what the independent tape reads is a
    faint hatched STRETCH. The final frame is the tower at its independent height, solid,
    with the claimed outline faint above it.
    **The PAIRING RULE is a split frame:** the finding stays on the left, the other side
    arrives on the right, at equal size.
  - **★ First build under rules 32 and 33 (this brief's standing production fixes):**
    · **Captions:** capchunk.mjs cuts every sentence into pages of ≤2 lines × ≤26
      characters with optimal line breaks (punctuation preferred, no line ending on a weak
      word, no orphan page). Each page is timed from its own first word. **capcheck.mjs
      renders every line in the real face and measures its ink:** widest 829 px against
      860 px.
    · **The stage:** STAGE_X −20 centres design 0 on the safe band (x 90–950).
    · **The geometry audit enforces the OBJECT box** (x 90–950, y 600–1440) on every frame
      instead of the frame edge. Sub-labels sit under their object, shrink to fit, and never
      cross a split frame's divider.
    · **Preview overlay:** the Studio draws the safe-zone overlay; render.mjs passes
      `{ safe: false }`.
    · **Materials:** matte two-tone SVG objects, contact shadows, one soft key, no grid. The
      glowing and extruded kit components (Panel, Fig, ExtrudedType) were removed from
      scene3d.tsx.
    · **Silhouettes are a flat mid-slate (#3C424C).** Near-black on this stage vanished
      (rule 30.4 again).
  - **★★ Seven brief lines BLOCK the master, and three of the brief's own devices were
    rebased at verification:**
    · The lenders "would do business with him again" is false. The kit has NO "offer" pose,
      so the hand the brief asked for cannot be drawn.
    · "The numbers changed depending on who was reading" misstates the AG's case. No
      tax-office tape is drawn.
    · The balancing line "wealthier than at any point on record" is false on build day
      ($7.0B vs the $7.3B record). Its companion "enormously wealthy" broke the brief's own
      no-adjectives rule.
    · Also: "entire penalty" → "entire MONEY penalty" (the bans and the monitor were
      upheld); "higher than ever" is false; "two courts' reading" overstates a 2–2–1 panel.
    · The sub-label dates were wrong: July 2015, not June; Sept 2023, not Feb 2024.
    · **The case is NOT argued and has no ruling as of 24 Sep 2026; re-verify before any
      render.**
  - **The sign-off is spelled out in VO_SCRIPT.txt** (019's lesson). The verdict draws it
    only if a take omits it.
  - **★ A DURATION PAIRING IS CHECKED, NOT ESTIMATED.** The brief says his Mar-a-Lago position
    is "held on screen as long as the previous shot". I estimated it held (4.2 s vs 3.5 s);
    geom_audit's new PAIRING line measured 117 frames against 130. His tape now rises on his
    line's first words (129 vs 118), and the check re-runs against every take.
  - **Clone carryovers caught:** 019's verified bed envelope in bedenv.ts (reset flat — it
    would have seeded 020's controller), render.mjs's header describing 019's fourteen lines,
    blocks.mjs listing 019's layout blocks, captions_vo.mjs holding 019's plan, and
    level_vo.py's cue parse (it would also have read the new caption rows as cues).
  - **Length:** ≈155 s corrected, against 100–110 s. Cuts are listed; the choice is the
    user's.

- **2026-09-23 (Video 019 — TAKE, PHOTO AND BED WIRED; user: "vo and face pic in public, pick a
  song")**
  - **The take was read from the BRIEF, the seventh film running** (ElevenLabs "Russ",
    213.8 s → 163.2 s trimmed, 465 words). All fourteen blocking lines are spoken, and the guard
    refuses the master on each one's own caption. The screen follows the voice without printing
    anything false:
    · "a hedge fund … genius returns": the strip names the firm (J. EPSTEIN & CO., A PRIVATE
      MONEY-MANAGEMENT FIRM) instead of crediting NY Mag with words it never printed;
    · "just one name that kept coming up": ONE tag slides onto the ledger, not two;
    · "about $400 million flagged": the earlier review's figure, with its own source;
    · "women investigators identified as victims": the strip carries the report's own words,
      women who "may have been" victims;
    · "by last year, around $200 million": the tank drains with NO readout, and the strip no
      longer prints ≈$108M under a voice saying 200 (that reads as a production error). It
      names who paid the $121M instead: the estate.
    The ringing bells (late, not never), NO ADMISSION scoped to the settlements, and the estate's
    payout drop under "not from him" were already the true versions beside the voice.
  - **★ THE TAKE HAS NO SIGN-OFF.** The brief's "[CTA] Fixed close" was a stage direction, and a
    take read from the brief never spoke it. The verdict runs six cues, and "Send us who to
    audit next." is DRAWN in display type during the outro hold, above the series stamp.
    **When a brief writes a placeholder instead of a line, VO_SCRIPT.txt must spell the line
    out, and the user should read from VO_SCRIPT.txt.**
  - **★★ THE SUPPLIED PHOTO HAD A SECOND PERSON IN IT:** a young woman in the background,
    bottom-left. On this subject, under a brief that forbids anything evoking victims, she
    cannot appear in any frame. The source was CROPPED before the cut-out (x 150–570) and the
    MASK was checked, not just the composite. **Look at every supplied photo for other people
    before cutting it out.** Graded cold to the room (saturation 0.5 and a cold soft-light wash).
  - **Bed (the pick delegated):** Radiohead, "Everything In Its Right Place". It is the coldest of
    the channel's beds, for a film the brief keeps cold throughout, and was not used on 018. It
    runs flat, −15.1 to −18.5 dB, in every window of the film. The voice was levelled per cue
    first (7.9 → 0.3 dB spread; the 018 rule). The envelope controller converged in one
    correction: 5.3–6.0 dB of separation in every 10 s window, worst residual 0.5 dB. The
    verified curve ships.
  - **Timing lesson:** when the take moves a figure to the LAST word before a scene cut, a count
    that starts on the word lands ~9 frames before the push. Such a count runs INTO the word
    and lands on it (Wexner's $200M).

- **2026-09-23 (Video 019 "The Pipe" — BUILT; brief: Jeffrey Epstein, audit #019)** —
  `OffCamCelebs/019-epstein/`, composition `InfluencerAudit019`, Studio 3143. Cloned from 018.
  Nine scenes, 43 cues. The recurring system is THE PLUMBING: glass pipes with cold liquid,
  two inlet valves, bank-facade junctions and an ESTATE tank. A network schematic of the
  whole system returns in hook · who · fair · verdict. No photo, take or bed yet.
  - **The brief's STYLE deltas, kept:**
    · NO AVATAR: the only person-shape is a featureless dark silhouette.
    · COLD THROUGHOUT: a cold key, cool-white type, two rooms only (cold and cold grey), and
      the fairness beat grey, not warm. Gold appears only where the brief names it (the piles).
    · Nothing evokes victims: the fourth outlet is an unlabelled pipe draining into darkness.
  - **★★ Fourteen brief lines BLOCK the master, and two of the brief's own RULES were rebased:**
    · Its mandated "women investigators identified as victims" overstates the source, which
      says "may have been" victims.
    · Its "Senate Finance Committee investigation" is a minority STAFF report that the banks
      dispute.
    · Its fairness line "every dollar came through the courts, not from him" is false: his
      estate paid, outside court.
    The fixes: Wexner didn't found Victoria's Secret; "single account" should be one report;
    Deutsche's $400M is an older edition of the dataset (the report says $250M); "or not at
    all" is false, since the banks did file; "~$200M last year" has no source (≈$108M now);
    and the absolutes ("never", "no evidence one existed", "nobody ever saw", "didn't ask")
    go. **Same lesson as 018, one level up: a brief's framing rules are claims, and get
    checked like its figures.**
  - **Length:** ≈186 s corrected, against 100–110 s. Cuts are listed in VO_SCRIPT.txt; the
    choice is the user's.
  - **Kit lessons:**
    · A valve whose handwheel sits over its key slot swallows the key visually: offset the
      stem.
    · A meter shown before its number is spoken reads "$0M": it appears as it counts, and
      counts in its landing format.
    · A readout swapped at a threshold is V30's defect: it counts down with the level.
    · A bell tied for good says "never"; the record says "late", so the bell rings late.
    · A six-line caption runs into the scene: split the sentence and give each half a visual.
  - **Tool lessons (logged in CLAUDE.md):** `String.replace(a, b)` ate the `$` in five
    counters; use split/join. The audit now sizes the caption band from each cue's real
    line count, and treats pipes as connectors that collide only with text. All four checks
    were proven by sabotage.

- **2026-09-23 (Video 018 — USER: "the vo volume should not change during the video")** —
  ★ STANDING RULE: **the voice plays at ONE loudness from first word to last.** A constant
  `VO_GAIN` is not enough — the ElevenLabs take itself drifts (018: the opening ~2 dB soft,
  110–130 s ~5 dB soft). Level the TAKE per sentence (speech-gated, measured per cue) to one
  target before mixing — `scratchpad/level_vo.py` → `public/vo_leveled.wav` — and verify the
  per-cue spread on the RENDER. The bed envelope is then set against the leveled voice.

- **2026-09-23 (Video 018 — TAKE, PHOTO AND BED WIRED; user: "vo in public, pick a song" · "face
  pic also in public now")**
  - **The take was read from the BRIEF — the sixth film running** (416 words, 132.1 s after the
    trim). Eight blocking lines are spoken, so the guard refuses the master until they are
    re-read from VO_SCRIPT.txt. The screen follows the voice without printing anything false:
    · the receipt prints the voice's ≈$3.6B, labelled REPORTED;
    · the one-day strip drops the ≈$2.1B under "3 billion";
    · "groupthink" is credited on the strip to the co-anchor;
    · "skipped his own" sits over his real "the answer's no";
    · "a 35 million dollar exit" gets $35M as the hero, labelled ON PAPER, with the $11.2M in
      hand on the strip;
    · "fired" is attributed to the Globe and Mail, beside Mattel's "have left".
    The age ("at 35") stays undrawn.
  - **Bed (the user's pick delegated):** "A Good Man with a Broken Heart", the least recently
    used (last on 006). ⚠ 003's `loop3` crossfades back into the song's quiet 10 s INTRO, which
    landed mid-film at 100–108 s. The envelope controller tried to lift it 8 dB and began to
    pump (+8 → −7 dB in 10 s). **Fix the bed, not the envelope:** a new loop from the original
    skips the intro both times (`music_goodman_018.mp3`, [10–103 s] ×2 crossfaded, flat
    −8.9 to −9.9 dB). The controller then converged in two passes (5.0–5.8 dB of separation in
    every window) and the verified curve ships. Mix −26.0 / −3.4 dB; voice −27.1 dB rendered;
    tail −38.7 dB.
  - **Photo:** rembg ate his right shoulder (dark suit on a dark backdrop, cut in a straight
    vertical line). The jacket was restored below the shoulder line, traced by hand from the
    original. **A lopsided silhouette is a defect; check the MASK, not just the composite.**
  - **The brief's "photo 2 s → avatar" needs a ~3.2 s cue; this take says "Kevin O'Leary.
    Mr. Wonderful." in 1.4 s.** When the cue is short, the photo holds the whole line and the
    gold WONDERFUL plaque rides on the portrait's frame. Otherwise the brief's sequence plays.
  - **"Repeated for 25 years" is undocumented,** so the year counter (1999 → 2026, which DREW a
    span) became four copies of the same speech bubble. That shows repetition with no dates.
  - **A tag lands with the thing it labels:** the CLAIMED tag sat over a dark billboard until
    the figure lit, so it now arrives with the figure. **A first cue under the 24-frame floor
    borrows only the frames it lacks from the next cue** ("Here's the receipt." 0.6 s, "So
    here's the audit." 0.8 s).

- **2026-09-23 (Video 018 "Read the Receipt" — BUILT; brief: Kevin O'Leary, audit #018)** —
  `OffCamCelebs/018-oleary/`, composition `InfluencerAudit018`, Studio 3141. Cloned from 017.
  Six scenes, 40 cues; one recurring system as the brief asked: BILLBOARD (what he says) vs
  RECEIPT (what the record says), with a thermal printer at each billboard's base. Receipt No. 1
  hangs left through Mattel, No. 2 right through FTX, and each prints a line as the voice names
  it. Avatar: a generic bald "TV investor" on the one-skeleton figure (017's rule), with a plain
  fin on his desk and no show branding. No photo, take or bed yet.
  - **Nine brief lines BLOCK the master** (script_fixes.json, guard proven all four ways). The
    worst is a double count: "$35M in shares, plus options", where the $35.4M already includes the
    options. The others: $3B in a day was ≈$2.1B; he was 44, not 35; "groupthink" was the
    co-anchor's word; "skipped his own" overstates "the answer's no"; "nothing contradicts it" is
    too absolute; "the same month" should be the month after; "real, received… and gone" should
    be most of it.
  - **★★ THE BRIEF'S OWN GUARDRAIL WAS FALSE AS WORDED.** "No wrongdoing is alleged against him
    anywhere" cannot stand beside the brief's own line naming him in a pending class action,
    because a civil complaint IS an allegation. The flip now says, in voice and on the strip,
    exactly what was searched: "we found no criminal or regulatory action against him over FTX".
    The guard refuses a take saying "no wrongdoing". **A guardrail in a brief is a claim like any
    other: verify it before building the film around it.**
  - **Length:** the corrected script runs ≈168 s against the brief's 95–105 s; cuts are listed in
    VO_SCRIPT.txt. The choice is the user's.
  - **Kit lessons:** a fraction of a coin is a WEDGE inside the dashed outline of the whole coin
    (a coin clipped to 20% of its width reads as cropped by the frame). A mono label's fit must
    count its tracking, or it overruns its slab. An arrowhead fades in with its shaft; a
    threshold switch pops. A quote card arrives WITH its words: an empty dark card held for
    ~2 s is a placeholder box. The emptied exchange plinth held on screen *is* "his crypto:
    zero".
  - **Mirror lessons:** the audit's first run modelled shards, notes and the pie as loose boxes
    and reported defects that did not exist. Model the object's own math (hash-seeded shard
    paths, each note's lift) before trusting a finding. Separately, scenes.tsx placed desk props
    at an inline `w * 0.3` rather than the desk's exported `deskTop()`, so a redrawn desk would
    have left its props floating. Props now read the object's own helper.

- **2026-09-22 (Video 017 — RE-RECORDED TAKE WIRED, "new vo in public, rewire it")** — read from
  VO_SCRIPT.txt: 405 words, 136.9 s trimmed; the guard finds 0 of the eight blocking lines, so
  the MASTER is clear for the first time since 012. Radiohead envelope re-converged against this
  voice (≤0.2 dB); mix −26.2 / −3.4 dB; geometry clean; stills swept at the new frames.

- **2026-09-22 (Video 017 — USER NOTES: "a different song, and fix the humans, they look
  misaligned and ai generated. In the 30 million plus followers scene the number never actually
  stops, fix that")**
  - **Song:** Aphex Twin → Radiohead, "Everything In Its Right Place" (instrumental, 001/004),
    measured flat across the film; envelope re-converged to ≤0.2 dB of the 5.5 dB target.
    ⚠ "Succession" (the user's exclusion) is the 100BasisPoints house-style bed (Style 1, Videos
    25–29; see `Resources/CLAUDE-archive-styles1-2-2026-08-28.md`) — no OffCamCelebs film has used
    it. This channel's past beds: Radiohead · "A Good Man with a Broken Heart" · Daphni "Poly" ·
    Yeat · Aphex Twin "Alberto Balsalm". The music rotates; don't default to the last one.
  - **★★★ HUMANS ARE ONE SKELETON, NEVER A STACK OF BOXES.** The CSS-box figures read as
    "misaligned and AI generated": an arm leaving the torso mid-chest, a hand of two blobs, a boxy
    head, legs as two posts. Standing rule for every figure on this channel from now: ONE SVG
    body; joints at anatomical positions; every limb a round-capped stroke from the shoulder
    joint through the elbow to the wrist (it cannot detach); the hand on the end of the forearm,
    turned along it, with a thumb; trousers one garment with an inseam; a head with a jaw, ears
    and a quiet face. All figures in a film share the skeleton.
  - **★ A COUNTER ALWAYS LANDS.** Never leave a number spinning as a way of not committing. When
    the take says a figure that is only true in the past ("30 plus million" was his peak), land
    on the voice's figure LABELLED with its time ("30M+ AT HIS PEAK · 29.0M TODAY") — and the
    guard still blocks the master until the line is re-read.

- **2026-09-22 (Video 017 "Three Fifties" — BUILT; brief: Dan Bilzerian, audit #017)**
  - **Bed (user: "use a song other than succession that was used in the past"):** Aphex Twin
    "Alberto Balsalm" (005/015/016). No project note or file tag names any past bed "Succession",
    so this pick is the one certainly not it; swap on request (Radiohead, "A Good Man with a
    Broken Heart", Daphni "Poly", Yeat are the other past beds). Mixed 5.5 dB under the voice
    per 10 s window from solo RENDERS; controller converged to ≤0.4 dB; the VERIFIED envelope
    ships, not the controller's untested next step.
  - **The take was read from the BRIEF — the fifth film running.** All eight blocking lines are
    spoken, including the brief's false fairness line ("has never been charged with anything" —
    2014 felony explosives charges, dismissed, no-contest misdemeanour). Captions follow the voice;
    the picture carries the true version (plate: NOT CHARGED IN THE IGNITE CASE); the guard
    refuses the master. `VO_SCRIPT.txt` marks exactly the eight lines to re-read.
  - **Kit lessons:** a chip's edge is 0.085 of its diameter (0.034 drew coins); a dark recess on
    a dark room is invisible — draw the MOUNT (bezel) that holds the empty socket; an envelope's
    printed window must sit below its flap's V; a status line set beside a big ticker collides
    with it; a "mansion" needs two storeys, wings and a portico or it reads as a barn; an in-tray
    reads from its front LIP drawn over the documents; a seated figure and its throne are sized
    from ONE number (the seat height).
  - **Layout lesson (again, 010's):** the first sweep had every hero in the lower half of the band;
    all seven layout blocks were re-sized so heroes span most of design [−300, +470].
  - **Timing lesson:** when a sentence's nouns come last ("…a mansion, a yacht and models'
    travel"), key the objects to the verb clause before them, or the tray stands empty for 70% of
    the beat. Clause anchors now SEARCH the cue text (`wordAt`), so they move with the take.
  - **No account numbers on screen:** the disclosure form's rows skip bank/credit-union lines
    (public on his filing, useless to the film); they stay in the sum.

- **2026-09-22 (Video 016 — FOUR OBJECT DEFECTS, ALL CALLED OUT BY THE USER; "the hourglass is
  messed up and the plane looks ai generated. Fix them both" · "make the man look normal in the
  And selling redemption isn't a crime. It's a market. scene" · "in the hook scene, the shining
  animation is only supposed to occur on the book, not next to it anywhere")**
  - **★★★ A CSS POLYGON CANNOT CURVE, AND SOME OBJECTS ARE THEIR CURVES.** The hourglass — the
    film's motif, on screen three times — was a clip-path BOWTIE: two straight-sided triangles
    meeting at a point, inside a rectangle of two flat caps and two straight posts. No bulbs, no
    neck, no rim, and a "pile" that was a triangle filling the whole lower half. Every further
    fix in CSS would only have added more straight edges. **When the silhouette IS the object —
    an hourglass, a bottle, a bell, a teardrop — it goes in an SVG path from the start.** Now:
    two bulbs that bulge at the shoulders and draw in to a narrow waist, a brass collar at the
    neck, a rim, and sand that behaves — a concave funnel dimple at the top surface that deepens
    as it drains, a thread with grains in it, and a WIDE heap on the floor at its angle of repose.
    ⚠ Two traps inside the fix, both caught only by re-rendering: a "rear post for depth" drawn
    behind SEMI-TRANSPARENT glass read as a brass rod skewering both bulbs; and the heap's first
    control points pulled both sides in to x≈45, drawing a pointed almond hanging in mid-air
    instead of a pile sitting on the floor.
  - **★★★ WHAT READS AS "AI GENERATED" IS SHAPES THAT PASS THROUGH EACH OTHER.** The plane was a
    `borderRadius: 999` pill with two TRANSLUCENT arrowheads laid over it for the wing and tail
    (the tail pointing the wrong way). Semi-opaque triangles crossing an opaque body is exactly
    the smeared, ghosted look of a generated image — parts that overlap instead of JOINING, and
    no hard silhouette anywhere. **Opaque parts that meet at real edges are what make a drawing
    look drawn.** It is a plan-view airliner now: a tapered spindle with a nose and a tail cone,
    two swept wings with engine nacelles, two tailplanes, a fin edge-on. Nothing transparent.
  - **★★ A DASHARRAY CANNOT DO TWO JOBS.** The plane's trail carried a `strokeDasharray`
    ATTRIBUTE for the dots and a `strokeDasharray` STYLE for the draw-on. The style wins, so the
    dots were lost and what rendered was a broken fragment of a line — debris beside the plane.
    It is discrete dots positioned along a bezier now, revealed in order and thinning toward the
    tail. Dots cannot fight each other.
  - **★★ A HUMAN FIGURE TOOK THREE PASSES AND THE LESSON IS ABOUT THE LIGHT SHAPE.** The avatar
    went: scalloped hem + black spiky lapels + hands as balls floating off the sleeves → straight
    hem, hands inside the sleeve wrapper, but no neck and shoulders 2.3 heads wide (a fridge in a
    suit) → white collar TABS that read as horns and lit lapel hairlines that crossed the tie in
    an X → finally **one light shape and one dark one**: a wedge of shirt inside the jacket's own
    outline, a tie down the middle, and nothing else. Also: shoulders to 2.1 head-widths, a
    visible but SHORT neck (a hint, not a column), a waist taper, trousers that narrow to the
    ankle rather than flare, and the inter-leg shadow stopped short of the trouser hems — it was
    running past them and reading as a seam down the figure.
    ⚠ Across all three passes NOTHING was visible to tsc or the geometry sweep. Both were clean
    at every step. **Only a render of the actual object shows an object that is wrong.**
  - **★ AN ANIMATED HIGHLIGHT NEEDS A CONTAINER TO BE ON.** The ledger's page-turn glint travels
    from −30% to +230% of the block's width and its parent had no overflow of its own, so the
    sheen swept across the bare frame either side of the book — a moving light with nothing
    under it. Wrapped in an `overflow: hidden` clip matching the pages. ⚠ Check every sweeping
    highlight for this: the PleaDoc and ShareCert already clipped theirs, which is exactly why
    the ledger's was easy to miss.
  - ⚠ Two mirrored constants moved with the redraws and the mirror was updated in the same pass:
    the hourglass caps (w×1.06 → w×1.10) and the plane's box (w×0.62 → w×0.83, bank −16° → −18°).
    **Neither is an exported constant, so verifyProportions() could not have caught them** — the
    automatic check covers exported proportions only, and inline ratios still have to be carried
    across by hand.

- **2026-09-21 (Video 016 — THE TAKE, THE PHOTO AND THE BED; user: "I just put his face pic
  in public along with the vo. Use the same song")** Wired, mixed, verified. Master still blocked.
  - **⚠⚠⚠ FOURTH TAKE RUNNING READ FROM THE BRIEF (013, 014, 015, 016).** All six corrected
    lines came back verbatim, including the film's spine ("Half of everything he earned until it
    was paid"). The render guard refuses the master on **7 caption hits**; the Studio is fine.
    ★ AND THE ELLIPSIS PATTERN IS WHAT VINDICATED THE 016 GUARD WORK: the take says "His legal
    obligation to keep paying expired" — no "dot dot dot", exactly the `briefSpoken` case. The
    old pattern required a literal `\.\.\.` and would have let that one through silently,
    one draft after the rule was written.
  - **★★ THE TAKE RESTRUCTURED THE FILM, AND THE VISUALS FOLLOWED IT — NOT THE SCRIPT.** Three
    changes, none of them predictable from the written page: the **50% rule moved up** out of the
    court-records beat to sit straight after the order (so the coin now lives in WHO, which went
    from 5 cues to 6); the **Delos seizure comes BEFORE the missed hearing**, the brief's order
    rather than the chronological one (it says "that same year", true either way, so the objects
    reordered); and the **channel sign-off is spoken**, so VERDICT went to 7 cues and plays it
    over the final frame. data.ts's SCENE_CUES threw until both counts were corrected — which is
    exactly what it was added for, one build earlier.
  - **★★★ "MORE PRECISE THAN THE VO, NEVER DIFFERENT" CUTS BOTH WAYS — AND ROUNDING IS
    DIFFERENT.** The verified best-available total is ≈$13.75m; the take says "around 13.5
    million" and, in the hook, "about 13 million". **$13.75m is not more precise than 13.5, it is
    another number**, and a viewer hearing one while reading the other sees a production error.
    The drawn figure now follows the voice (≈$13,500,000) and the precise one is stated beside it
    on every strip that carries it. ⚠ The ledger's page was switched first and the EXPIRY BAR WAS
    MISSED — it still printed $13,750,000 under a caption saying 13.5, and only the stills sweep
    caught it. A take-derived value has to be threaded to EVERY place that draws it.
  - **★ THE TAKE DROPPED A GUARDRAIL LINE AND THE PICTURE PICKED IT UP.** "He cooperated, and the
    judge said it mattered" is not in the read, so the courthouse beat's strip now says it
    (COOP_SUB). All three of the brief's own mandatory flip items ARE spoken.
  - **★ ONE NEW IMPRECISION, RECORDED NOT BLOCKED**: "Two decades of court supervision over."
    Supervised release was THREE years; what ran twenty was the judgment's enforceability under
    § 3613(b). Loose rather than false, so it does not block the master — and the screen does not
    repeat it: the hourglass's strip states the statute and the liability period instead.
  - **THE PHOTO.** Supplied by the user, cut out with rembg (isnet-general-use + alpha matting),
    Lanczos ×3 + unsharp. ⚠ rembg **kept a patch of background** — a lamp and a dark smear on the
    left — which was erased in the alpha as well as excluded by the crop, so neither mechanism is
    load-bearing alone. It replaces the generic avatar in WHO (a real portrait and a generic one
    in the same beat say the same thing twice); the avatar keeps FAIR, where it stands for the
    role rather than the man.
  - **THE MIX, MEASURED.** VO mono −27.1/−1.6 source → **−28.7 rendered** (pan law −3.1, the
    mono-stem rule confirmed again); stereo bed −17.4 → −34.2, untouched. ⚠ VO_GAIN is **1.19**,
    not 015's 1.413: this take's crest factor is 25.5 dB and +3.0 would clip it, so the film
    ships ~2.6 dB quieter and that is the right trade. Per-window envelope converged **5.3 dB
    worst residual → 0.7** over three passes, every window inside 0.2 dB of the 5.5 dB target
    except the bed's own fade-in. Full mix **−27.6 mean / −3.0 peak**, post-VO tail −41.1 (bed +
    fade only), 129.73 s / 3892 frames.
  - ⚠ `bedenv.mjs` carried a **hard-coded window list** from 015 ("the VO ends at 120.94 s").
    This take runs to 126.3, so the last six seconds would have gone uncontrolled while the tool
    reported a clean convergence for everything it did measure. The list is derived from the cues
    now.

- **2026-09-21 (Video 016 "Expired Isn't Paid" — BUILT; brief: Jordan Belfort, audit #016)**
  Gate cleared, kit built, geometry and guards measured. No take recorded yet.
  - **★★★ THE BRIEF SET A GO/NO-GO GATE AND IT CLEARED THREE WAYS.** "If it can't be verified at
    all, this video does not run." TMZ (13 Jul 2026) carries the date and his statement verbatim;
    Men's Journal corroborates; and — the one that settles it — **the date falls out of a
    statute**. 18 U.S.C. § 3613(b) ends restitution liability 20 years after release from prison;
    he was released from Taft on 28 April 2006; 28 April 2026 is arithmetic, not an outlet's
    claim. A date that can be *derived* is not a date one publication invented.
  - **★★★ THE BRIEF'S CENTRAL LINE WAS BACKWARDS, AND CORRECTING IT MADE THE TITLE EXACT.**
    The brief: "The rule: half of everything he earned, **until it was paid**." The sentencing
    judge's own order (Gleeson, E.D.N.Y. 98-CR-0859, ECF 185, 11 Jun 2014) says the 50% condition
    ran only "DURING HIS TERM OF SUPERVISED RELEASE" and had "expired years ago". So there are
    **two expirations twelve years apart** — the condition (~2009) and the judgment's own
    enforceability (28 Apr 2026). The brief merged them, which made "Expired Isn't Paid" an
    accident; separated, it is the thesis. Six lines failed verification in all; VO_SCRIPT.txt.
  - **★★ A TIER COLOUR IS NEVER DECORATION.** The speaking-fees meter shipped its first still
    filled with `theme.legit` — the channel's own **LEGIT rating green** — on a bar showing what
    he earned from speaking *instead of paying the victims*. Both true statements, one colour,
    opposite meanings. The palette's own note already says "one colour per tier, never
    conflated"; that has to bind ornament as well as labels. It is the warm key now.
  - **★★ THE STILLS SWEEP IS THE ONLY THING THAT SEES A PLACEHOLDER.** The stage-speaker avatar
    passed tsc, passed the geometry audit, and rendered as **a snowman in a spotlight**: head at
    a quarter of the figure's height, a rounded-rect torso, two black bars for legs, the headset
    a 3px dot. Nothing measurable was wrong with it. Redrawn from human proportions (7.4 heads,
    H = 1.95·w), with shoulders, lapels, hands, shoes and a headset that has a band, an earpiece,
    a boom and a capsule. ⚠ And the FIRST fix was not enough: narrowing the arm's angle still
    read as a wave, because an arm pinned at SHOULDER height greets whatever you do to the angle.
    It hangs from mid-torso now. Tone is a geometry problem.
  - **★★ AN OBJECT CAN HIDE ITS OWN LABEL, AND THE RESULT IS A DIFFERENT NUMBER.** The cover
    test's "≈$100,000,000 STILL OWED" sat inside the plate; the sheet slid across it and the
    still read **"0,000,000 STILL OWED"**. Not a smaller number — a different one. Any label a
    moving hero can cross goes OUTSIDE the object.
  - **★ THREE MORE THE SWEEP CAUGHT, ALL INVISIBLE TO EVERY OTHER CHECK**: the flight of steps
    never appeared (dark risers on a dark ground, and the stagger put them at 55% of their own
    sentence — they have lit nosings now, and the stagger is /5); the crowd of 1,513 compressed
    into what read as a single row (0.46 → 0.62 of its width, 11 rows); the promised "stream"
    rendered as a **dirty grey plank** standing in for a flow with neither end drawn, and was cut
    — the sentence is "he SAID he'd turn over…", so the visual is what he said.
  - **★★ THE HANDOVER FADE IS MEASURABLE, AND IT ONLY FAILS IN TWO DIRECTIONS.** Swept per frame:
    in-at-cue/out-at-cue (14/10) left 6–8 frames per handover below 30% opacity — rule 7's dead
    stretch; starting 10 frames early closed the dip but put two objects through the same ground
    in seven handovers, four of them text crossing a shape. **6 frames in from cue−2, 6 out
    ending cue−1** gives a 3-frame dip and zero overlap. ⚠ And per-call-site `inD` overrides
    written by eye (14/16/18) silently re-opened the dip — one 18-frame entrance put nine frames
    of the film below the floor. The default is measured; overriding it is not.
  - Rooms: ink · grey · ink · **cold** · grey · **warmest** · ink. Records is the cold room (nine
    cues, the archive); fair is the warmest (rule 26), and carries four flip items including the
    sentencing judge's own words on his cooperation — which the brief did not have.
  - Sanctioned reprises, and only these: the **ledger** (hook/verdict, the brief's bookend), the
    **hourglass** (expiry/fair/verdict — only where the film is talking about TIME, never money),
    the **stamp** (hook/expiry/verdict — it hovers twice and lands once, and what it lands on is
    the hourglass, not the ledger), plus the recurring character. Everything else appears once.

- **2026-09-20 (Video 015 — THE CHART BUG, THE BAR LABEL AND A NEW BED; user: "the social chain
  ag visual is messed up, nothing is visible on the chart" · "the 7.7 million pounds intersects
  with the bar" · "use another song too")**
  - **★★★ AN `<svg>` IS A REPLACED ELEMENT: `inset: 0` DOES NOT STRETCH IT.** The ticker's plot
    box was correct, its gridlines were correct — and the trace was drawn into a **300 × 150**
    box, SVG's intrinsic default, anchored at the plot's top-left. Wider than the panel (so the
    right of the line was clipped away by the panel's `overflow: hidden`) and taller than the
    plot (so it ran out of the bottom). What was left on screen was a fragment of a line going
    nowhere, which is why it read as "nothing is visible on the chart" rather than as a
    misplaced one. **Give an `<svg>` explicit `width: "100%"; height: "100%"`** — `position:
    absolute` + `inset: 0` sizes a normal box, never a replaced one.
    ⚠ **THE DIAGNOSTIC IS THE GIVEAWAY, AND IT GENERALISES:** the gridlines are plain `<div>`s
    and they landed exactly where the maths said; only the SVG did not. **When two siblings
    computed from the same numbers disagree about where they are, the odd one out is not a
    maths bug — it is a BOX bug.** Measuring the rendered pixels (green-channel mask → bounding
    box) against the computed design rect is what turned "it looks broken" into a located
    defect in one pass.
  - **★★ A BAR'S LABEL GOES ON ITS OWN ROW WHEN THE OTHER BAR IS FULL WIDTH.** The multiple's
    small bar is 2.6% of the width, so its label — placed ABOVE the bar like the big one's —
    landed on top of the £300m bar. Its own row is empty for 97% of the width, which is exactly
    where the number belongs. ⚠ Labels above bars is the right default; it stops being right
    the moment one bar spans the frame.
  - **★★ A BED MUST OUTLAST THE FILM, AND THAT IS A MEASUREMENT, NOT A GLANCE.** Goodman was the
    obvious "another song" — and it is **118 s against this film's 124.4 s**, so its last six
    seconds measure **−44.4 dB**: the bed simply stops under the sign-off. CLAUDE.md's rule
    ("measure the bed's level across the COMPOSITION'S length, not its duration") caught it
    before it was wired. **The bed is now Aphex Twin — "Alberto Balsalm"** (used once, on 005;
    310 s long; body −16.9 dB, close −17.3, intro −20.1). Yeat is the alternative but has
    carried six videos (008–013).
    ★ Its intro sits 3.2 dB under its body, which used to be a reason to reject a track — the
    per-window envelope now lifts it, so **"the intro is quiet" stopped being a disqualifier**
    the day the envelope landed. Re-converged from neutral in four passes (worst residual
    5.5 → 1.3 → 0.6 → **0.3 dB**), holding 5.3–5.8 dB in all twelve windows.
    ⚠ The envelope is specific to the TRACK as well as the take: swapping beds means resetting
    `bedenv.ts` to neutral and re-running the controller, never reusing the old curve.
  - **Mix, re-measured on the new bed:** full **−25.5 mean / −3.4 peak, flat factor 0, peak
    count 2**; speech windows −25.2 / −26.5; post-VO tail −40.5 (bed + fade only, no dropout).
  - Verified: tsc clean · geom_audit CLEAN across all 3,730 frames · stills of the three ticker
    beats and the multiple re-rendered and read at 1:1 · `out/` holds probes only.

- **2026-09-20 (Video 015 — THE PHOTO AND THE REAL CHART; user: "I put his photo in public, for
  the rest I want you to either replace the placeholders with visuals or find them yourself if
  they are important to have in the video")**
  - **★★★ A DRAWN CHART IS A PLACEHOLDER. GO AND GET THE DATA.** The ticker board's trace was a
    SEEDED RANDOM WALK — a pictogram of a share price standing in for one, on screen three
    times, under the film's second-biggest number. Rule 31.1 already said it ("anyone who
    trades reads it as fake"); what this pass adds is that the fix is not a better squiggle,
    it is **the actual series**. `TickerBoard` now takes a required `series` and cannot invent
    a point; `record.ts SHARE` carries The Social Chain AG's real monthly closes (Frankfurt,
    PU11) from its first trade on 2 Oct 2019 to the Prime Standard week, and the board prints
    the WINDOW the data covers so it is never a floating shape.
  - **★★ NEVER DRAW FROM A PROVIDER'S MONTHLY BARS — AGGREGATE THE DAILY SERIES YOURSELF.** The
    1-month aggregation for this symbol is mis-bucketed by about half a month: its bar for
    2021-11 reports a high of 41.68 while the DAILY data peaks at 58.77 on 15 Nov, which it
    files under 2021-10. A chart drawn from those bars would have put the peak in the wrong
    month — **invisible in a still, and wrong**. `scratchpad/buildseries.mjs` aggregates the
    daily closes and prints the check.
  - **★★ THE CROSS-CHECK IS WHAT CAUGHT IT, AND IT CAME FROM THE PROSE.** The company's own
    announcement puts the up-listing open at €54.00 on 12 Nov 2021; the monthly bar said
    November's HIGH was 41.68. Two sources that cannot both be right is the signal — the daily
    series then showed 12 Nov opening 55.58 and closing 56.38, which corroborates the
    announcement and convicts the monthly bars. **When a figure you verified in words
    contradicts a series you just downloaded, the series is the suspect.**
  - **★ A BOARD'S TYPE SIZES ITSELF TO ITS COLUMN, LIKE EVERYTHING ELSE HERE.** "THE SOCIAL
    CHAIN AG" is 606 px in a 577 px row, so the ticker rendered **"THE SOCIAL CHAIN A"** — a
    clipped company name that no still of a shorter name would ever have revealed. Third time
    this exact class has bitten (014's counter, 015's marquee, now the board): **any string
    that comes from data gets a fit() on the way in.** Same pass: the price tag that tracks the
    line's last point flips BELOW the point when the series ends high, or the panel's overflow
    eats it — which is precisely where this series ends.
  - **★ THE PANEL GOT TALLER (0.30 → 0.38 of its width).** A real trace in the right 40% of a
    short board is a squiggle; the plot needs the height to read as a chart.
  - **THE PHOTO — supplied by the user, never scraped.** `face.webp`, 416 × 416 on near-white
    → Lanczos ×3, a mild unsharp, cut out with rembg (alpha matting). The 4:5 window keeps both
    shoulders and gives headroom (negative `y0`), and it plays 54 frames (1.8 s — the brief's
    "2s") before handing to the drawn host on the same spot, sequentially. Shown at 480 design
    px, about as large as ~340 true source px can honestly go.
    ⚠ Its plate had to move from y 60 to y 120: the 4:5 window is 600 design px tall and its
    top reached the beat's own strip (geometry audit, 43 frames).
  - **What was deliberately NOT replaced:** the newspaper's ruled greeking and the letter's,
    which are the "empty version of a real thing" rule 31.3 asks for — the alternative is
    reproducing a paywalled article's text and a masthead's typography, which this film's legal
    framing forbids outright. The tycoon's empty silhouette stays empty: it IS the finding.
  - Verified: tsc clean · geom_audit CLEAN across all 3,730 frames · stills of every cue re-run
    at the new sizes · `out/` still holds probes only.

- **2026-09-20 (Video 015 — VO WIRED; user: "vo in public, use the same song")** — 159.4 s raw
  → 121.4 s trimmed at native 44.1 kHz (62 silences cut), 360 words, 34 cues, 124.4 s with the
  outro. Daphni "Poly" again, from the top.
  - **⚠⚠⚠ THE TAKE WAS READ FROM THE BRIEF — A THIRD VIDEO RUNNING** (013, 014, now 015). All
    THIRTEEN failed lines are in it, including the misquoted quotation and BOTH withdrawn
    claims. The captions follow the voice; the guard refuses the master (14 caption hits) with
    the corrected wording listed; `VO_SCRIPT.txt` stands.
  - **★★★ A GUARD PATTERN MUST MATCH THE TAKE'S SPELLING, NOT THE BRIEF'S — AND ITS SELF-PROOF
    CANNOT TELL YOU OTHERWISE.** Three patterns were written as the brief spells it
    ("co-founded at twenty-two", "sixty-five-year-old"); the take says DIGITS ("at 22", "a
    65-year-old"). Each one matched its own brief line perfectly — the 013 self-proof passed —
    and then caught nothing in the actual film. **The self-proof tests the pattern against the
    BRIEF, which is the one string guaranteed not to be what the take says.** Every numeric
    pattern now carries both spellings, and `guardtest.mjs` asserts BOTH directions: it
    refuses a synthetic take of the brief's lines (13 of 13) *and* passes a synthetic take of
    the corrected ones (0 hits) — the second half is what proves the patterns are not simply
    matching everything.
  - **★★ `\b` IN A JSON STRING IS A BACKSPACE, NOT A WORD BOUNDARY.** Widening those patterns
    with `"…(twenty-two|22)\b"` compiled to a regex ending in U+0008, which matched nothing —
    including its own brief line, so **the guard refused itself as broken**. That is the
    fail-closed design working, and it is the only reason a dead pattern did not ship a second
    time. Patterns in JSON need `\\b`, and they go in through Write/Edit, never a shell string.
  - **★★ WHEN THE TAKE MISQUOTES HIM, THE STRIP DROPS THE VERBATIM LEAD-IN.** The marquee draws
    the voice's words (012's rule). But its strip had been citing the quotation's real lead-in
    — "What do I know about business?" — beside them, which presents a misquote AS a transcript
    with a source under it. That is precisely the false SOURCE that following the voice never
    licenses (014). The strip now says only where and when he made the claim, which is true
    either way, and the verbatim lead-in returns when the line does.
  - **★ A BRIEF GUARDRAIL IS KEYED TO THE CUE THE TAKE SAYS IT ON, NOT THE ONE THE CORRECTED
    SCRIPT PUT IT ON.** "Nine-figure valuation is The Times' phrase — keep it theirs" was
    attached to the cue *after* the one that speaks it, because the corrected script split the
    line differently. Re-read every guardrail against the TRANSCRIPT after wiring, not against
    the script (012's rule, extended from "is it still said" to "is it still said HERE").
  - **The take also ADDED the channel sign-off** — "Send us who to audit next." It plays as
    verdict c5 OVER the brief's final frame (013's pattern) and the series mark lands with it.
    `captions_vo.mjs` asserts the per-scene cue COUNTS against what scenes.tsx indexes, so an
    added or dropped sentence cannot silently misalign every visual after it.
  - **⚠ IT RUNS LONG: 120.9 s of speech, 124.4 s in all, against the brief's ~90–100 s** — the
    brief's lines are wordier than the corrected ones and the sign-off is new. A re-record from
    VO_SCRIPT.txt lands at ~103 s. Reported, not fixed: length follows the voice.
  - **Mix, measured:** source −26.5 mean / −3.1 peak. ×1.413 puts the effective peak at
    −0.1 dBFS before the pan law. Solo renders confirm the stem rule a third time — VO −26.5 →
    **−26.6** rendered, stereo bed −11.3 → **−32.0** (pan law on the mono voice only). Bed
    ×0.0902 from the 8.5 dB SOURCE separation ⇒ 5.4 dB in the render. The envelope converged
    over three passes (worst residual 2.1 → 0.7 → **0.3 dB**), holding **5.3–5.8 dB in all
    twelve windows**. Full mix **−25.6 mean / −2.8 peak, flat factor 0, peak count 2**; speech
    windows −25.1 / −26.3; post-VO tail −38.9 (bed + fade only).
  - Verified: tsc clean incl. --noUnusedLocals · geom_audit CLEAN across all 3,730 frames at
    the REAL cue timing · no SHORT-LIVED element · every beat opens built · no DEAD stretch ·
    a still of every one of the 34 cues at its real VO frame · the guard proven in both
    directions · `out/` holds probes only, no MP4 (none was asked for).

- **2026-09-20 (Video 015 — "The £300 Million Sentence", Steven Bartlett; built from the
  brief, no VO yet)** — 33 beats, 103.4 s provisional. Object mode, one visual per sentence,
  7 scenes (hook · who · merge · exit · gap · fair · verdict), the sign-off over the verdict's
  final frame (013/014's pattern, LAST_SCENE = "verdict"). Rooms: ink · grey · COLD (the German
  machine) · ink · grey · WARMEST (the fairness beat) · ink.
  - **★★★ THE BRIEF MISQUOTED THE QUOTATION.** Its hook was *"I built a £300 million business
    at twenty-eight"*; the transcribed line is **"I HAD a £300 million business BY THE AGE OF
    28"**, and the brief's own mechanism was "a real number attached to the wrong VERB". This
    is the one sentence the film asserts in its own voice, so it is drawn exactly as
    transcribed and the sourcing limit is written into record.ts. **Thirteen** of the brief's
    lines are corrected in `script_fixes.json` and handed back in `VO_SCRIPT.txt`.
  - **★★ THE MARQUEE IS THE MOTIF, AND A QUOTATION IS AN OBJECT WITH A TYPE HIERARCHY.** The
    sentence is also in the caption, so a sign that merely restates it is the block rule 18
    deletes. It RANKS it instead — a mono lead, the figure as the hero, a mono tail — and the
    same marquee returns lit over the warehouse, floating free in the gap, and DARK above the
    machine in the final frame. Nothing else in the film is a marquee.
    ★ Its type SIZES ITSELF TO ITS BOX (014's counter lesson), so a re-recorded wording can
    never overflow the sign — and the geometry mirror therefore has to READ the wording out of
    data.ts rather than assume it.
  - **★★ A "CAMERA PUSH INTO THE EMPTY SPACE" CANNOT BE A MAGNIFICATION.** The brief asked the
    camera to dive into the gap between the two signs. At the scale that makes the gap fill a
    1080-wide frame, both signs are past the edge (rule 22) and the shot is an empty rectangle
    for most of the beat (rule 7) — two rules broken by one gesture. The gap is **measured**
    instead: the signs part to the edges and a pair of callipers draws across the nothing
    between them, which is the sentence.
  - **★ A PAIR AT THE WIDTH LIMIT CANNOT CARRY A "BIGGER" BEAT AS SCALE.** Office + dock +
    warehouse span 1044 of 1080 screen px; "Same name. Much bigger machine." originally scaled
    the group 1.1× and pushed the warehouse 104 px off frame. It is done with **light** now —
    the little office's windows go out while the machine's come up — which is the sentence
    anyway and costs no geometry.
  - **★ THE FIGURE IS THE BEAT: TUNE THE TRAVEL, NOT JUST THE FADE.** "Bartlett stepped away in
    twenty twenty" had him off the frame edge a third of the way through his own line, so the
    one thing the sentence shows was not on screen. He now stands in the near foreground with
    the machine behind and smaller, and leaves in the last third at a travel that keeps him
    legible until he goes.
  - **Rule 30 failed on the first stills sweep again** — every hero a size too small, with the
    stage in the upper half and ~600 px of dead frame beneath it. Grounds moved down and every
    object grown (TV 420→560, host 520→620, counter 380→430, chair 240→310, office 420→470,
    warehouse 500→570, ticker 620→640, newspaper 520→580, letter 280→320, mic 180→240, plate
    560→640). ⚠ And a television that is ON is a LIGHT: the screen's glow went 0.20 → 0.30 or
    the set read as a dead monitor on a dark ground (rule 30.4).
  - **★ THE GEOMETRY MIRROR'S OWN STRING READER MUST BE SCOPED.** An unscoped `source: "…"`
    match returned SALE's 38-character label where AGENCY's 26-character one is drawn, wrapping
    a sub-label to two lines **in the model and nowhere else** — a phantom 2 px overlap that
    cost a fix before the parse was read. The mirror now reads the block, then the key.
  - **Generic, not a likeness, everywhere it could drift:** a faceless host in a dark crew neck
    with headphones and a mic; the tycoon an EMPTY SILHOUETTE in a frame, unnamed and un-aged;
    the newspaper our own drawing (the paper's NAME in our display face, ruled greeking for
    body, the real headline because that is a fact about the article) — never a reproduction of
    a masthead or a page. Red appears ONCE: the rating.
  - **⚠ NO PROSPECTUS OBJECT EXISTS IN THE KIT**, deliberately — see the CLAUDE.md entry. A
    claim the film has withdrawn must have nothing to draw it with.
  - Verified: tsc clean incl. --noUnusedLocals · geom_audit CLEAN across all 3,101 frames with
    cross-scene pairs · no SHORT-LIVED element · every beat opens built · no DEAD stretch (four
    "thin" handovers of 6–8 frames) · ≤4 blocks, each with a hero · a still of every one of the
    33 cues · the render guard PROVEN to refuse a simulated brief-read take (13 of 13) and to
    pass on the corrected cues · `out/` empty.
  - ⚠ Still missing: VO, music bed, a photo (HAS_VO / HAS_MUSIC / HAS_PHOTO all false).
    Ports: 015 owns **3135** (Studio) / **3136** (file host).

- **2026-09-19 (Video 014 — THE BED: Daphni "Poly", LOUDER; user: "make the song a little louder,
  and choose another one out of the ones that I've used before")**
  - **★★ THE CHANNEL'S BED LEVEL IS NOW 5.5 dB UNDER THE VOICE — MEASURED IN THE RENDER** (user's
    "a little louder", standing from here on). ⚠⚠ And the old number was never what it said:
    the voice is MONO and loses 3.1 dB to the pan law, the beds are STEREO and do not, so
    010–013's documented "10.6 dB under" (set on source levels) played at **~7.5 dB**. 5.5 in
    the render is ~2 dB louder than what the user was hearing — the "little" they asked for.
    Set from solo renders of each stem (`soloprobe.mjs vo|bed`), never from source levels.
  - **★ HELD IN EVERY WINDOW, NOT ON AVERAGE.** A flat gain left the bed 1.6 dB under the voice
    at 70–80 s (Poly builds ~2 dB while this take softens ~3 dB after 50 s). A slow envelope
    generated from the solo stems (`bedenv.mjs` → `bedenv.ts`) holds 5.4–5.8 dB in all nine
    windows, proven by a second pass (worst residual 3.9 → 0.3 dB). Full mix −26.5 / −2.3,
    flat factor 0.
  - **The song: Daphni — "Poly"**, chosen from the channel's own beds because it is the
    EVENEST across this film's 92 s (Aphex Twin opens at −22.8 dB, Goodman at −20.2 — either
    would leave the hook bare) and the user has picked it twice before (007; 100bps V15).
    Radiohead ruled out: its note says the track needs clearing. For 014, "the same song"
    now means Poly.

- **2026-09-19 (Video 014 — THE PHOTO; user: "I put the person's face pic in public, replace all
  the other photos I was supposed to find with some visuals")**
  - **★ WHEN ONLY THE PORTRAIT IS SUPPLIED, EVERY OTHER BEAT STAYS A DRAWN OBJECT — nothing waits on a
    capture, and none is faked.** 013 had document captures to crop; 014 has one face. The
    bank tower, the book, the Form D (drawn from the filing's real fields, with the marker on
    them), the town, the timeline's sources (on each card's strip) were already objects, and
    stay objects. ⚠ A "visual" standing in for a missing screenshot is never a mock-up of
    that screenshot — a drawn copy of her post or of a magazine page would present a
    fabrication as a record.
  - **The portrait is TINY — 230 × 219, 6.5 KB, a half-length on white.** Working copy
    `codie_sanchez.png`: a whisper of blur against the JPEG blocks, Lanczos ×3, a mild
    unsharp, cut out with rembg (alpha matting — the standing process), and the matte pulled
    in ~2 px because the old white background glowed round the hair on a dark plate. The
    original stays untouched beside it. `CropPhoto` gained a STUDIO BACKDROP (warm dark
    gradient, soft key behind the head) since a cut-out has none, and a negative `crop.y0`
    gives it headroom. Shown at 360 design px — as large as ~190 source px can honestly go.
  - **Timing re-allocated and said (rule 29):** the take says her name in 0.44 s, inside the
    push-in, so the photo runs ~20 frames into "7 million followers" (~1.8 s in all — the
    brief's 2 s) while the counter arrives opposite, then hands to the drawn investor on the
    same spot, sequentially (under 0.12 before the investor starts).
  - Verified: tsc clean · geom_audit CLEAN across all 2,764 frames (the mirror now READS
    HAS_PHOTO and FACE_CROP from data.ts rather than asserting "no photo") · stills of the
    handover at five frames.

- **2026-09-19 (Video 014 — the VERIFIED pill; user: "in the 25000 scene the verified text
  intersects other visuals")** — the tier pill over the entry gate hung 16k down into the
  plate's top edge, over "MINIMUM". Moved WHOLLY ABOVE the plate (16k clear, right-aligned to
  it) and it now settles DOWN into place; the CLAIMED pill on the $100M sign settles down too.
  - **★★ A TAG IS ITS OWN ELEMENT IN THE GEOMETRY MIRROR — NEVER PART OF ITS OBJECT'S BOX.**
    geom_audit had modelled gate + pill as ONE rectangle, so the pill touching the gate was
    invisible to it by construction — the same blind spot as rule 28's scene-first loop, one
    level down. Both tier pills are now separate elements, sized from their text
    (`pillW`), and the check was PROVEN by restoring the old position in a patched copy:
    it fired (gate × gate tag, 122 frames, 9 px) before the fix was trusted. They share a
    `grp` with their object, so rule 18 still counts sign + pill as one block — ⚠ `grp`
    never exempts a pair from the overlap test; only `soft` does, and a pill is never soft.
  - Verified: geom_audit CLEAN across all 2,764 frames · ≤3 blocks in every scene · stills of
    the gate mid-entry and at rest.

- **2026-09-19 (Video 014 — VO WIRED; user: "vo in public, use the same song")** — 128.0 s raw →
  89.2 s trimmed, 271 words, 37 cues, 92.1 s with the outro. The Yeat bed again, from the top.
  - **⚠⚠⚠ THE TAKE WAS READ FROM THE BRIEF AGAIN — ALL NINE FAILED LINES ARE IN IT** (013's pattern,
    a second video running). Captions follow the voice; the guard refuses the master (9 hits,
    exit 1) with the corrected wording listed; `VO_SCRIPT.txt` stands.
  - **★★ THE NUMBER-CARRYING OBJECTS NOW READ THE CAPTIONS.** 012's rule says the screen draws
    what the voice says; here the voice's numbers differed from the built film in four objects
    (the follower counter, the timeline's markers, both signs' "a year · in revenue" line). Each
    now switches on a `said()` test of the captions in data.ts (`TAKE`): the counter shows
    7,000,000 and drops "across 6 platforms"; the timeline runs the brief's three markers; the
    signs lose the revenue line under a voice that says "portfolio". **A re-recorded line flips
    its object back to the verified version with no code change, one line at a time** — and
    the geometry mirror runs the same test on the same captions, so it audits the timeline the
    render actually draws.
  - **★ FOLLOWING THE VOICE NEVER MEANS PRINTING A FALSE SOURCE.** The brief-take cards carry
    the voice's figures and each one's TRUE source on its strip — HEADLINE · 2022 / PODCAST ·
    2022 (with "a year in revenue", more precise than the voice) / SUCCESS · 2026. "26
    businesses" is not drawn: a 2022 count the voice attaches to 2026 would be a wrong number
    on screen, and leaving a spoken detail undrawn is not a contradiction.
  - **Timing for a fast take** ("Codie Sanchez. 7 million followers. Ex-Goldman. A bestselling
    book." in 4.2 s — ~30 frames a beat): the right half is staggered in DEPTH — the counter
    rides high and the tower rises under it while the counter leaves — so every object clears
    rule 29. "So here's the audit." (0.6 s, inside its own push-in) keeps its rule until c1 + 8;
    "Our rating: unsupported." (1.0 s) keeps the plate, the pillar, the sign and the pinned
    sub-label until c4 + 12, and the final clipboard waits for them.
  - **Mix, measured:** source −27.4 / −2.5 — quieter than 013's take in the mean but HOTTER at
    the peak, so the peak governs. ×1.413 puts the effective peak at +0.5 dBFS before the pan
    law, so it was PROVEN on the probe, not assumed: **−27.0 mean / −2.3 peak, flat factor 0,
    peak count 2** — the peak landed exactly where the pan law predicts, so nothing clipped
    mid-pipeline. Bed ×0.0447 from the 10.6 dB separation (body −8.0, close −8.0 — no fade
    inside our length, intro −12.0). Speech windows −26.3 / −28.8; post-VO tail −41.3.
  - Verified: tsc clean incl. --noUnusedLocals · geom_audit CLEAN across all 2,764 frames · ≤3
    blocks in every scene · no SHORT-LIVED element · no DEAD stretch · a still of every cue at
    its real VO frame · the probe · the guard refuses the master.

- **2026-09-19 (Video 014 — "The Boring Number", Codie Sanchez; built from the brief, no VO
  yet)** — 36 beats, 93.0 s provisional. Object mode, one visual per sentence, 7 scenes (hook ·
  who · timeline · private · sec · fair · verdict), the sign-off over the verdict's final frame
  (013's pattern, LAST_SCENE = "verdict"). Rooms: ink · grey · ink · grey (the warm-keyed town) ·
  COLD (the SEC archive) · WARMEST (the fairness beat) · ink.
  - **★★★ THE BRIEF'S NUMBERS WERE NOT HER NUMBERS.** None of its three "portfolio" figures was
    her word for a portfolio VALUE: "8-figure" was a headline she reshared, "$50M" was her
    REVENUE figure under the show's "portfolio" title, "$100M+ across 26" was a magazine
    writer's phrase with a 2022 count bolted on. Her own tellings are revenue (~$50M a year
    from 24 businesses, 2022 → "9-figures in annual revenue", 2026), so the timeline runs the
    brief's two-marker fallback on HER words, and "that's not a contradiction" is still true.
    Nine lines are fixed in `script_fixes.json` and handed back in `VO_SCRIPT.txt`; the
    guard was made to fire on a simulated brief-read take (9 of 9 refused).
  - **★ THE SIGNATURE IS THE MOTIF, AND THE PILLAR IS THE SAME SIGNATURE.** The same made-up
    flourish sits on the back of every timeline marker (rule 31.3's back face, doing the
    argument's work) and, stood on end, is the thin pillar the figure rests on in the verdict.
    ⚠ Two purpose-drawn pillars failed in stills first: a zigzag read as a LIGHTNING BOLT, a
    chain of loops as a COIL SPRING. **When an object stands for a mark the film has already
    shown, reuse that exact mark** — recognition is the point, and a new drawing has to be
    learned from scratch in a second.
  - **★ ONE VISUAL PER SENTENCE MEANS PER SENTENCE, EVEN INSIDE ONE BRIEF LINE.** "Codie
    Sanchez. Seven million followers. Ex-Goldman. A bestselling book." is four sentences with
    four visuals; as one cue the tower and the book shared ~1.5 s and the tower was a speck
    by the time it could be read. Four cues now: the investor stays, the right half REPLACES.
  - **Rule 30 failed on the first stills again** — every hero a size too small; scaled per
    object (laundromat 520→600, door 380→440, book 260→300, receipt clipboard 340→400…).
  - **Layout lessons the geometry audit forced:** timeline cards hung above their own dots
    collided (two tellings months apart sit ~70 px apart on a four-year rail) — they ride in
    ONE ROW with leaders now, which also lines the flipped signatures up side by side; a year
    label centred on the rail's end ran to the frame edge (2022 now sits 40 in); the outer
    card grazed the edge on the camera's swing at ±300 × 270.
  - **★ A VALUE THAT CHANGES AT VERIFICATION MUST NOT BE ABLE TO BREAK ITS CONTAINER.** The
    follower count went 7,000,000 → 10,000,000+ at verification and ran off its panel; the
    counter now sizes its digits to the panel. Typed titles fade letter by letter — a typed
    reveal that pops whole glyphs is a snap (rule 6).
  - **Generic, not a likeness, everywhere it could drift:** a faceless investor in a blazer
    with a clipboard; a nameless bank tower; our own book cover (title in plain type); a
    made-up signature; the Form D drawn from the filing's real fields, with the green marker
    (rule 4, 013's device) on "VENTURE CAPITAL FUND" and "$25,000" as the voice reaches them.
    Red appears ONCE — the rating — because there is no wrongdoing to signal.
  - Verified: tsc clean incl. --noUnusedLocals · geom_audit CLEAN across all 2,891 frames with
    cross-scene pairs · ≤3 blocks in every scene · no SHORT-LIVED element · no DEAD stretch
    (four "thin" handovers of 8–10 frames) · stills of every beat · the render guard fires on
    the brief's lines · `out/` empty.
  - ⚠ Still missing: VO, music bed, a photo (HAS_VO / HAS_MUSIC / HAS_PHOTO all false).

- **2026-09-18 (Video 013 — VO + THE SUPPLIED IMAGES WIRED; user: "vo in public, use the same
  song" · "I also put all the images I could find into the public folder. Implement them" ·
  "after you're done, render")** — 128.9 s raw → 95.9 s trimmed, 301 words, 34 cues, 98.8 s with
  the outro. The Yeat bed again, from the top.
  - **⚠⚠⚠ THE TAKE WAS READ FROM THE BRIEF, NOT FROM VO_SCRIPT.txt — ALL FIVE FAILED LINES ARE IN
    IT** ("his own fine" · "He turned over" · "mailed" · "becoming a millionaire for $100,000" ·
    "He could pay 2.6"). The captions follow the voice (the screen may never differ from it), so
    the guard does what it was built for: `render.mjs` refuses the master, listing all five with
    the corrected wording. The user's render request produced the REVIEW copy through
    `--allow-vo-conflicts` — `out/kevindavid_audit_REVIEW.mp4`, never the master filename (012's
    rule, exercised for real the second time). The master is one ElevenLabs regeneration away.
  - **THE TAKE ADDED A LINE**: the channel's sign-off, "Send us who to audit next." It plays as
    verdict c6 OVER the final row rather than as a CTA scene — a light runs along the four SEALED
    boxes in turn (they are the next ones) and "INFLUENCER AUDIT — No. 013" settles beneath. The
    brief's final frame survives intact; LAST_SCENE stays "verdict".
  - **Five merged pairs split semantically** (no pause under them): "stores | price",
    "unsubstantiated… | …and said", "threatened… | …and that", "an order, | the judgment",
    "the case, | and Amazon". Whisper's "his company sold" → "His companies sold", decided on
    DURATIONS: "company" 0.28 s + "sold" 0.40 s is the /z/ of "companies" merged into the /s/ of
    "sold" (the same voice's "companies took" = 0.34 + 0.26). A new check asserts every
    transcribed word sits in exactly one caption.
  - **Mix, measured:** source −26.6 / −3.9 (the same level as 010's take) → ×1.413 (+3.0 dB);
    bed ×0.049 from the 10.6 dB separation (body −8.0, close −7.8 — no fade inside our length,
    intro −12.0). **Probe: −26.0 mean / −3.4 peak, flat factor 0** — level with 010/011, 1.3 dB
    hotter than the peak-limited 012. Speech windows −25.9 / −27.4; post-VO tail −39.3 (bed +
    fade only).
  - **★★ THE SUPPLIED IMAGES: ONE PORTRAIT, FIVE DOCUMENT CAPTURES → SEVEN EVIDENCE CROPS.** The FTC
    press-release headline, its first paragraphs, the refund notice, the complaint's page 1 and a
    capture of complaint ¶¶1–7 (which yielded three separate crops). Each crop is cut to THE
    SENTENCE its line rests on and each one REPLACED a sub-label rather than joining it: ¶2 under
    the neon (the old "quoted" pin), ¶3's price sentence under the tag (PRICE_SUB), page 1's
    court + case number + docket date under the sealed box (CASE_SUB), the refund notice above
    the crowd (REFUND_SUB). Plus the headline under the hook's row ("The US government checked"),
    the FTC's "…could 'generate passive income on autopilot'…" under the propeller, and ¶7 ("false
    or unsubstantiated… many, if not most, lose money") taking the popped bubbles' ground.
    · New `EvidenceCrop`: 012's browser chrome for ftc.gov pages, a filing's header strip for the
      complaint. Two disclosed overlays, never a retouch: **the NOTCH** — a page-coloured block
      hiding the previous sentence's tail when the quoted one starts mid-line (a crop that is not a
      rectangle; no shown word is altered) — and **the HIGHLIGHT**, green not yellow (rule 4),
      multiply so every glyph stays black, drawn on the phrase AT THE FRAME THE VOICE SAYS IT
      (word timings from the transcript).
    · ★ **The highlight is what makes paragraph crops work on a phone.** A 677 px court filing
      scaled to the frame's width sets its text at ~21 px on screen — present, not comfortable. The
      marker gives the eye the one phrase that matters and leaves the rest as context.
    · ⚠ **EDITORIAL CROPS, recorded in data.ts:** the Bureau director's quote ("ripped off…
      bogus… paying the price") is cut — a person's invective, not the agency's finding, adding
      nothing the line needs. The headline is shown WHOLE, "Phony" included: cut after the name it
      would misquote the agency, and the ftc.gov chrome attributes the word. Every figure in a crop
      was checked against its line (rule 8c).
    · The portrait plays 54 frames (1.8 s) then hands to the drawn man — the take says the line in
      3.7 s, so the brief's "2s" was split evenly rather than starving the avatar (rule 29).
  - **★ A SHORT FIRST LINE LIVES INSIDE ITS OWN SCENE'S PUSH-IN.** "He settled. The court entered
    an order." runs 1.8 s and opens its scene, so 48 of its 54 frames are the push arriving —
    the paper was settled and readable for ~22 frames before `outBy` took it. **When a scene's
    first cue is under ~2.5 s, its object must outlast the next cue's start** (here c1 + 8, with
    the next object waiting until the ground is clear). The same arithmetic retimed the verdict's
    hairline (15 f → 28), the VERIFIED tag (18 f → 30) and INFLATED, which now leaves LATE
    (c5 − 4 → c5 + 6) and is gone before the final row is visible.
  - Verified: tsc clean incl. --noUnusedLocals · geom_audit CLEAN across all 2,963 frames · ≤3
    blocks in every scene · no SHORT-LIVED element · no DEAD stretch · stills of every beat at real
    VO frames plus full-resolution checks of every crop · the mix probe · the guard refuses the
    master (5 hits, exit 1).

- **2026-09-18 (Video 013 — "The Only One That Ended", Kevin David; built from the brief, no VO
  yet)** — 33 beats, 103.1 s provisional (012's take ran ~10% faster than its script timing,
  so expect ~93 s). Object mode, one visual per sentence, 8 scenes, NO CTA — the brief ends on
  its box row, so `LAST_SCENE = "verdict"` in data.ts and scene3d/geom_audit read it instead
  of assuming "cta".
  - **★★★ THE FIRST AUDIT WITH AN ENDING, AND ITS NUMBERS ARE A COURT'S.** FTC v. DK Automation
    LLC et al., S.D. Fla. 1:22-cv-23760: complaint filed 16 Nov 2022, stipulated order signed by
    Senior Judge Paul C. Huck 17 Nov 2022 — the case closed in one day because both were filed
    together. Judgment **$52,929,621.74** [O §V.A], **$2,600,000** paid [O §V.B], the rest
    suspended on sworn financial statements; **$2.8M refunded by PayPal to 890 consumers**
    (FTC, March 2024). Every figure and quotation is in `record.ts` with its paragraph.
  - **⚠⚠⚠ FIVE OF THE BRIEF'S LINES FAILED VERIFICATION — AND THIS TIME BEFORE THE TAKE.** 012's
    corrections arrived after the voice was recorded and became blocking conflicts. 013's were
    caught at build time, so the fix is cheap: the corrected script is handed back as
    `VO_SCRIPT.txt`, ready to paste, with each change explained underneath.
    · "couldn't pay his own FINE" — it was monetary relief (consumer redress), not a fine;
    · "HE turned over two point six million" — the order makes "Defendants" pay it: six
      companies and two men;
    · "The FTC MAILED…" — the FTC's notice says PayPal;
    · "He sold becoming a MILLIONAIRE — for a HUNDRED THOUSAND dollars" — the millionaire pitch
      was for his $1,997 courses, the $100,000 was the top store package: one product's promise
      welded to another's price;
    · "He COULD PAY two point six" — a claim about his finances, which the brief forbids.
  - **★★ THE GUARD PROVES ITSELF ON EVERY RUN.** The five fixes live in `script_fixes.json` (read
    with JSON.parse — never a regex over a .ts file, 012's failure). `render.mjs` refuses the
    master while any caption matches a bad pattern, AND refuses if any pattern fails to match
    its OWN brief line: a pattern that cannot fire on the line it exists to catch is a broken
    guard. New `--check` flag runs every guard and exits before bundling, so the guard can be
    made to fire without rendering. Tested five ways: bad take refused · override → REVIEW ·
    dead pattern refused · corrupt list refused · clean project passes.
  - **⚠⚠ THE CO-DEFENDANT GUARDRAIL (not in the brief, now binding).** He is one of eight
    defendants and the judgment is joint and several. Nothing may give him, alone, a payment
    the order assigns to "Defendants".
  - **Visual decisions that are editorial, not layout:**
    · The brief's ENVELOPES became money coming back UP through the floor to some of the crowd —
      the refunds went by PayPal, and the reverse of the earlier drain says "some of it came
      back" better than post would.
    · The neon quotes his words VERBATIM ("EIGHT-FIGURE / ONLINE BUSINESS EXPERT"), not the
      brief's "8-FIGURE EXPERT": its sub-label calls it a quotation.
    · The slab carries the judgment TO THE CENT, cents in 005's teal. The piece left after the
      crumble is drawn at its TRUE share of the slab — the paid 4.9% — by scaling the centre
      chunk to PAID_SHARE.
    · The seal is generic (rings, ticks, thirteen stars, a plain striped shield): no agency's
      mark. The wallet is empty and unpriced. The gavel rests — a stipulated order is not a
      verdict. "NEITHER ADMITTED NOR DENIED THE ALLEGATIONS" (the order's own ¶3) sits under
      the fairness beat; "RATING: THE EARNINGS CLAIM SOLD TO BUYERS" under INFLATED, because
      the take never says what is rated.
    · Review stars are brass — a MATERIAL, as 012's plaques were; the brief asked for gold.
  - **Rule 30 failed on the first stills again, in three places**: the hook's box row was a
    180 px strip (boxes now 1.9w tall and the row stands on a floor plane); the courtroom was a
    thin band (rebuilt taller); the two shops sat low. Fixed per object, not by a global scale.
  - **★ geom_audit LEARNED THAT A CIRCLE IS NOT ITS BOX.** The seal's bounding-box corners
    "hit" the neighbouring boxes while the disc cleared them by ~15 px (chord arithmetic). An
    element flagged `disc` is now tested as the ellipse inscribed in its projected box — an
    EXACTER test, not an exemption — and the test was checked both ways (edge fires, corner
    does not) before it was trusted.
  - **Motion defects the audit caught that no still would have:**
    · a tumbling wallet swung its corners into the neighbouring boxes — its growth and spin are
      now keyed to its HEIGHT (only once it is below the row), not to time, so a faster take
      cannot start them early;
    · the courtroom's bench began its push-in while the jury box was still visible, so its
      corner went through the rail — the jury now fades out (rule 23) BEFORE the bench moves;
    · the rating arrived while the dying sign and the slab were still over 0.3 — four blocks
      for a moment — so the handover is sequenced;
    · the slab's falling chunks drift outward and touched the frame edge at 820 wide (800 now).
  - Verified: tsc clean incl. --noUnusedLocals · geom_audit CLEAN across all 3,196 frames with
    cross-scene pairs · ≤3 blocks in every scene · no SHORT-LIVED element · no DEAD stretch
    (five "thin" handovers of 6–10 frames) · stills of every beat · the render guard fires ·
    `out/` empty.
  - ⚠ Still missing: VO, music bed, a photo (HAS_VO / HAS_MUSIC / HAS_PHOTO all false; the
    "real photo → avatar" beat plays the avatar alone until one is supplied).

- **★★ 2026-09-17 — AN OVERRIDE MUST NOT WRITE THE MASTER FILENAME (Video 012, render).**
  The user asked for a render while two BLOCKING VO conflicts stood. The right answer was
  neither "refuse again" (they had been told twice and asked anyway) nor "delete the conflict
  entries to get past the guard".
  - **★ WHAT WAS BUILT INSTEAD: `render.mjs --allow-vo-conflicts`.** It renders, prints the
    conflicts as warnings — and writes to `out/<name>_REVIEW.mp4`. **The master filename stays
    reserved for a render with no blocking conflict.**
    ⚠ THE FILENAME IS THE POINT, not the warning. A warning scrolls past in a terminal; a file
    sitting at the path everyone reaches for gets posted. An override that produces an
    indistinguishable artefact has not been made safe, it has just been made quieter.
  - **⚠ AND THE CONSUMER HAD TO LEARN IT TOO.** `serve.mjs` pointed at the master, which no
    longer existed, so it would have failed outright — and had it silently fallen back, it would
    have served a review cut from the usual URL and undone the whole scheme. It now prefers the
    master, falls back to the review cut, and SAYS WHICH on startup.
    ★ When a guard introduces a second output path, every downstream tool that names the first
    one has to be taught about it in the same pass.
  - Verified on the file itself: 1080×1920 @30 h264 + AAC stereo 48 kHz, 86.31 s (2,588 frames),
    **mean −27.3 dB / peak −4.0 dB** — no clipping, and within 0.4 dB of the −27.7/−4.2 predicted
    from the source measurement plus the mono→stereo pan law, which is the pan-law rule
    confirming itself a third time. Post-VO tail −39.7 dB mean: bed and fade only.
  - ⚠ Tunnel unusable again (error 1033, cloudflared's own resolver timing out on
    region1.v2.argotunnel.com). It served one 206 and dropped back to 530. Handed the file over
    directly instead; the range host on 3130 works locally.

- **★★★ 2026-09-17 — STANDING RULE: A SUB-LABEL THAT RESTATES THE CAPTION IS NOISE
  (user, Video 012: "remove unnecessary AI text that appears on the screen sometimes to keep the
  video visually simple").** 29 of 31 on-screen sub-labels removed. **This is a standing look
  rule, not a one-off tidy — apply it to every future video at build time.**
  - **THE TEST.** A sub-label earns its place ONLY if it carries something the voice does not say
    and the object does not show. Almost none did: "PUBLIC AND SPECIFIC" under a caption reading
    "His method is public and specific"; "NOT THE SAME THING" under "Teaching a method isn't the
    same as running an account"; "HIS IS THE OPEN ONE" under a row of figures where his is
    visibly the open one; "NO RULE APPLIES" over an empty socket. Set in mono caps under every
    single beat, they read as machine narration bolted onto a finished frame — which is exactly
    what the user called them.
  - **⚠ THE PROVENANCE ONES WENT TOO, and that is the less obvious half.** Once each broker's own
    banner is on screen with its domain in the browser chrome, "IG · FCA-MANDATED DISCLOSURE ·
    2026-09-16" underneath is the THIRD copy of the same citation. The screenshot cites itself.
    Likewise the wall's "14 FCA-REGULATED BROKERS · READ 2026-09-16" — the caption already says
    fourteen, the tiles already name all fourteen, and CLAUDE.md puts disclosure and dating lines
    in the POST CAPTION rather than on screen.
  - **★ THE TWO THAT SURVIVED, and why they are different:**
    · **MARKET_SUB — "ALL RETAIL CFD ACCOUNTS — NOT HIS STUDENTS".** ⚠⚠⚠ A GUARDRAIL, and the
      recorded take contains no sentence carrying it. Deleting it would silently remove the
      film's only statement of whose numbers those are. Non-negotiable.
    · **"NO PUBLISHED EVIDENCE EITHER WAY"** under UNSUPPORTED. Qualifies the rating as an
      absence of evidence rather than a finding against the man — the distinction the whole
      video rests on, and the verdict sign alone does not make it.
    ★ **Both survivors say something NOBODY ELSE IN THE FRAME SAYS.** That is the filter.
  - **⚠ REMOVING LABELS BROKE FOUR HANDOVERS.** The subs had been quietly bridging the gap
    between one object leaving and the next arriving; with them gone, four scenes opened 11-frame
    DEAD stretches. Fixed at the cause — the incoming object's entrance ramp 16→10 frames so it
    MEETS the outgoing exit — never by putting a label back. **Check DEAD STRETCHES after any
    pass that removes elements; a label can be load-bearing for pacing without being load-bearing
    for meaning.**
  - Density fell from "busy" (4 blocks) in two scenes to **≤3 in every scene**, with four scenes
    now down to caption + one object.
  - **⚠ AND A SELF-INFLICTED ONE: DO NOT REGEX-TIDY JSX.** After the real work was done and
    verified, a cosmetic pass to strip leftover `{( … )}` husks and single-child fragments broke
    the file in eight places — the open and close tokens do not pair up line-wise. Reverted from
    a backup and re-applied the substantive edits only. ★ Cosmetic JSX cleanup is not worth ANY
    risk to a verified file; leave the husks or edit them one at a time by hand.
  - Verified: tsc clean incl. --noUnusedLocals · geom_audit CLEAN across 2,588 frames · every
    scene ≤3 blocks · no short-lived element · no DEAD stretch · both blocking conflicts fire.

- **2026-09-17 (Video 012 — placeholders and scaffolding stripped; user: "remove the
  unnecessary placeholders")** — 613 lines of dead code and 5 duplicate assets removed.
  - **★★ STRIP THE SCAFFOLDING ONCE THE REAL THING LANDS.** A build accumulates flags and
    fallbacks that exist only while an input is missing, and they stop being useful the moment it
    arrives. What went:
    · `spoken` + `shownPct()` — the whole "screen follows the voice" mechanism, obsolete the
      moment the screenshots went in. It had become a no-op indirection wrapped round `pct` at
      nine call sites, and an indirection that no longer indirects is worse than none: it implies
      a decision is being made somewhere.
    · `HAS_PHOTO` / `HAS_EVIDENCE` — always-true gates round supplied assets, including a dead
      `HAS_PHOTO ? inAt(c(1)) : c(0)` fallback for a photo that now exists.
    · `StatuteStamp` and `FigureField` — real casualties of the recut. The take has no "not his
      students" line and no "a regulator had to force them" beat, so both objects lost their
      scenes and nothing noticed.
    · 11 components in `objects.tsx` and 6 in `kit.tsx` carried from earlier videos in the
      channel and never referenced by 012 (objects.tsx 478→39 lines, kit.tsx 203→29).
    · `GROUND = 390` in the geometry mirror — superseded by per-beat grounds in the rule-30 pass.
    · 5 byte-identical duplicate images: the space-named originals ("ig bokerage.png", "plus
      500 .png", "raja banks face.png" …) against the `shot_*.png` copies the code loads. Hashed
      first — the renamed copy IS the untouched original, so nothing evidential was lost.
  - **★ THE COMPILER IS THE DEAD-CODE ORACLE, NOT A SHELL SCAN.** `tsc --noUnusedLocals` found
    the five stale imports left behind in seconds and was right every time. ⚠ Three hand-rolled
    grep heuristics in the same session were all WRONG: one counted lines instead of call sites
    and flagged 18 live helpers as dead; one subtracted a "definition hit" that could never match
    because a definition reads `const wall = (` with a space while a call reads `wall(`; one had
    its sed range blow past the import block and reported half the file as unused imports.
    **A cleanup scan that over-reports is not harmless — acting on it deletes working code.**
    Verify a dead-code claim against the compiler or an actual call-site count before cutting.
  - **⚠ WHAT WAS DELIBERATELY KEPT.** `HAS_VO`/`HAS_MUSIC` stay: CLAUDE.md's clone checklist
    turns them OFF on a new video, so they are the documented pattern rather than leftovers, and
    they now gate real audio. `STAT_LINE`'s "__%" stays — it is the FCA's own blank, corroborated
    by the template screenshot beside it. "A UK BROKER" on the first storefront stays: the line is
    "EVERY forex broker in the UK", so a deliberately generic front is the correct object, not a
    placeholder for a named one.
  - **⚠ AND ONE NON-BUG.** A still at f610 put the photo plate 145px right of centre. That is the
    rule-15 push mid-travel — setup's 48-frame swoop-in was still running 17 frames in — not a
    layout error. ★ **Sample a beat at REST (after `scene.start + SWOOP_IN`) before believing a
    centring defect**; `atRest()` in geom_audit exists for exactly this reason.
  - Verified after: tsc clean INCLUDING --noUnusedLocals · geom_audit CLEAN across 2,588 frames ·
    both blocking conflicts still fire · `out/` empty.

- **2026-09-16 (Video 012 — EVIDENCE WIRED; the screenshots overrule the take)** — the user
  supplied captures of the brokers' OWN risk banners (ig.com/uk, plus500.com/en-GB,
  activtrades.com) plus the FCA's mandated wording template.
  - **★★★ THE STRONGEST OBJECT IN THE FILM IS NOT AN OBJECT.** The brief says "the names are the
    proof". A screenshot of the firm saying it ITSELF, on its own page, with the domain in a
    browser chrome bar, is better proof than any name we could set in type. New `EvidenceShot`
    component: chrome bar + domain pill + the banner cropped to its sentence and scaled until a
    phone viewer can read it. Used in hook c1 (the FCA template), c2 (IG), c3 (Plus500),
    c4 (ActivTrades), and stacked ×3 on "the one statistic brokers are FORCED to publish".
  - **★★ THE FCA TEMPLATE IS THE PERFECT SECOND BEAT.** The capture reads "[insert percentage per
    provider]% of retail investor accounts lose money…" — the blank each firm fills in. It sits
    under our drawn plaque: the plaque is our drawing of the rule, the screenshot is the rule.
  - **⚠⚠⚠ AND IT REVERSED A RULE SET ONLY HOURS EARLIER.** The previous entry established "the
    voice is the spine, so the SCREEN FOLLOWS THE VOICE" — a `spoken` field let a drawn plaque
    read 68 so it would not argue with the audio. **The moment a photograph of the banner is in
    frame, that trick dies.** IG's banner reads 69%; ActivTrades' reads 84%; the take says 68 and
    82. You cannot edit a screenshot to agree with a voiceover, and a drawn plaque saying 68 next
    to a banner saying 69 is worse than either. ★ **THE EVIDENCE WINS AND THE NUMBERS MOVE TO
    IT.** `spoken` survives as a mechanism but is now unused and documented as such.
  - **⚠⚠ SO TWO BEATS NOW DELIBERATELY SHOW A FIGURE THE VOICE CONTRADICTS**, and both are
    BLOCKING in `VO_CONFLICTS`; `render.mjs` refuses. Fixes are one line each:
    "Here's IG's number. **Sixty-nine**." and "ActivTrades: **eighty-four**."
    ⚠ The guard's closing message had to be rewritten too — it still said "the screen matches the
    voice everywhere, so this will NOT look wrong on screen", which had become false. **A guard
    that explains itself has to be re-read whenever the thing it guards changes.**
  - **★ CITING A SOURCE THAT CONTRADICTS ITSELF.** ActivTrades publishes 69% (.co.uk), 82% (its
    FCA-regulation page) and 84% (.com) simultaneously. The honest form is: show the page the
    screenshot is OF, put the domain in the chrome bar so the viewer knows which, and record the
    other two in `also`. The domain pill is not decoration — it is the citation.
  - Dataset now: fourteen brokers, **mean 68.8%**, best eToro 51, worst ActivTrades 84.
  - **⚠ THE BASH-HEREDOC TRAP, AGAIN (seventh time).** Patching `disclosures.ts` through a python
    heredoc ate the backslashes in \\' and turned `'Here\\'s IG\\'s number'` into a broken
    single-quoted literal — tsc caught it, but only because it was TypeScript. ★ Rewrote those
    strings to double-quoted with escaped inner doubles so no apostrophe escaping exists at all,
    and did the fix with the Edit tool. **CLAUDE.md already says this; it keeps happening because
    the heredoc is convenient. It is not.**
  - **⚠ A STACK OF PLATES IS NOT AN EVEN PITCH.** The three banners have different heights
    (115.2 / 122.0 / 110.4) because each crop has its own aspect, so evenly spacing them by a
    guessed pitch overlapped two by 4px for 60 frames. Positions must come from the running sum.
  - Photo: the supplied 1190² headshot plays as a full-colour plate for setup c0 (~2.2s) then
    hands to the drawn mentor — the brief's "real photo 2s → avatar", exactly.
  - Verified: tsc clean · geom_audit CLEAN across 2,588 frames · density ≤4 · no short-lived
    element · no dead stretch · stills at real VO frames · both blocking conflicts fire ·
    `out/` empty.

- **2026-09-16 (Video 012 — VO + ASSETS WIRED; NOT RENDERABLE)** — the real take landed:
  113.5s raw → 83.47s trimmed, 259 words, 34 cues. Music bed = the same Yeat track as 010/011.
  - **⚠⚠⚠ THE TAKE WAS READ FROM THE BRIEF'S ORIGINAL SHOT LIST, NOT THE REBASED SCRIPT.** The
    build before it had moved every figure onto ten FCA entities read at primary source; the
    voice speaks the brief's instead — IG 68, ActivTrades 82, fourteen brokers, about 70%,
    best 51, worst 82, and the 2018 line. It also restored two beats the rebase had cut (the
    best/worst pair and the timeline) and DROPPED the one that said "that's every client those
    brokers have, not his students".
  - **★★ THE RULE THAT CAME OUT OF IT: THE VOICE IS THE SPINE, SO THE SCREEN FOLLOWS THE VOICE.**
    A viewer hearing "68" while reading "69" is worse than either number alone — it breaks the
    film mid-sentence. So `Disclosure` gained a `spoken` field: `pct` stays the VERIFIED figure,
    `spoken` is what the take says, and `shownPct()` draws the spoken one. The truth stays in
    the file; the screen never argues with the audio.
  - **⚠⚠ AND THE DISAGREEMENT IS ENFORCED, NOT NOTED.** `VO_CONFLICTS` carries every divergence
    with severity; `render.mjs` REFUSES while a "blocking" one stands. One is blocking: IG
    publishes **69%** on three of its own pages and the take says 68. Clearing it is a two-word
    re-record. Four are notes (mean 68.6 vs "about 70"; eToro publishing 50 AND 51; ActivTrades
    publishing 69 AND 82 AND 84; the unverified "barely moved since 2018").
  - **⚠⚠⚠ A GUARD THAT FAILS OPEN IS WORSE THAN NO GUARD.** The first version of that tripwire
    matched `at: "…"` — but those entries are SINGLE-quoted, because their text contains escaped
    double quotes. It silently matched nothing, and **the render completed**. An MP4 nobody asked
    for had to be deleted. The rewritten guard accepts either quote style AND asserts that if the
    file declares a blocking conflict it must be able to parse one — a parse failure is now
    itself a refusal. ★ Any check whose failure mode is "pass" must be tested by making it FIRE,
    never by watching it stay quiet.
  - **★ THE GUARDRAIL LOST ITS SENTENCE, SO THE PICTURE HAD TO CARRY IT.** With no VO line saying
    whose numbers these are, the market scene now rests entirely on two things: MARKET_SUB on
    every beat that shows a percentage, and **his avatar in ZERO frames of that scene**. The
    label needed a new `PinSub` (spans a range of cues) because BeatSub keys to ONE cue and the
    guardrail was blinking out between beats.
  - **★ THE HONEST TIMELINE.** The take claims the band "barely moved since 2018". The rule's
    1 Aug 2018 start is solid; the series is not, and none was obtained. `RuleTimeline` draws the
    rule beginning, TODAY's measured 51–82 band, and — explicitly, across the years between — a
    hatched region reading **NOT MEASURED**. Drawing a flat band there would have been inventing
    a dataset to illustrate a sentence.
  - **⚠ A FASTER TAKE BREAKS RULE 29 EVERYWHERE AT ONCE.** 83.5s against the script's 92.9 put
    SIX elements under the 24-frame floor. Fixes: BeatSub gained a `tail` (a 1.2s beat cannot
    afford the default 14/12 fade); search c0 lost the avatar the brief never asked for (two
    objects on a 1.1s beat left BOTH illegible); and hook c4+c5 became ONE row that dollies back
    — three buildings spreading, then a fourth fading in — which is the brief's own "camera
    pulls back" and buys the shot 59 frames instead of 17.
    ⚠⚠ First attempt lerped width and all four positions TOGETHER and the fourth building both
    overlapped its neighbour by 212px and ran 200px off-frame mid-move: **a row cannot admit a
    new member until it has finished making room.** Spread first, arrive second.
  - **Mix, measured:** source VO −27.9 mean / −4.4 peak. ⚠ PEAK-LIMITED: matching 010/011's
    loudness needed +4.8 dB, which clips at −4.4; +3.20 dB (×1.445) is the ceiling, so this film
    sits ≈1.2 dB under its siblings by necessity. Bed set from the **separation** (10.6 dB), not
    by copying 0.0519 — a hotter take's multiplier would have put the bed 1.6 dB too loud.
    Shipped mix probe: **−27.3 mean / −4.0 peak**, no clipping, post-VO tail −39.9 (bed + fade).
  - **Transcript artifacts corrected:** "Wix Don't Lie" → WicksDontLie · "Active Trades" →
    ActivTrades · **"So HE went looking" → "So WE went looking"** (reverses who is auditing) ·
    "4 -hour" → "Four-hour" · "student's" → "students'" · and whisper had merged the IG figure
    and the Plus500 figure into ONE segment across a real pause — split on word timings, because
    two different brokers must never share a caption.
  - Verified: tsc clean · geom_audit CLEAN across all 2,588 frames · density ≤4 · NO short-lived
    element · no dead stretch · stills at real VO frames · mix probed at full length · the
    render tripwire fires and `out/` is empty.
  - ⚠ Still missing: a photo (HAS_PHOTO false — the avatar reveal is the finished visual).

- **2026-09-16 (Video 012 — "The Number Nobody Makes Him Print", Raja Banks)** — 31 beats,
  92.9s provisional. ⚠ REPLACES an earlier 012 cut built around a five-year backtest of his
  method; the user revised the concept wholesale and that build is gone. Nothing below refers
  to it.
  - **★★★ THE CONCEPT: THE DISCLOSURE ASYMMETRY.** Every UK firm selling leveraged trades to
    retail clients must publish the percentage of its own customers who lose money — FCA
    Handbook COBS 22.5, rolling twelve months, kept current. The people TEACHING those trades
    are under no such obligation. So the finding is an ABSENCE (as 011's was), and what makes
    it land is that the absence sits beside a row of numbers that DO exist. The verdict is
    UNSUPPORTED and FIXED: a statement about the EVIDENCE, never about the man.
  - **★★ THE OBJECT IS A BRASS PLAQUE AND ITS EMPTY SOCKET.** The whole film is one object and
    its absence: blank → filled → named three times → a wall of ten → EMPTY on his building →
    finally holding the verdict. It is the brief-sanctioned reprise; everything else appears
    once. `PlaqueSocket` is a separate component from `BrassPlaque` precisely so the empty one
    is literally the same object minus the metal — the argument of the video expressed as a
    component boundary.
    ⚠⚠ **THE SOCKET IS SMOOTH, NEVER STRIPPED.** No torn bolts, no rip marks, no ghost of a
    removed plate. A socket that looks stripped says HE HID IT; the finding is that nobody ever
    required one of him. Drawing it wrong changes what the film accuses a real person of.
  - **⚠⚠⚠ THE BRIEF'S OWN FIGURES DID NOT SURVIVE VERIFICATION, AND THEY WERE THE FINDING.**
    The supplied table (IG 68 · Plus500 76 · ActivTrades 82 · eToro 51 best · fourteen brokers ·
    mean 69.9% · April 2026) is an aggregator's 27-April snapshot. Read from the brokers' OWN
    pages on 2026-09-16:
    · IG publishes **69**, not 68 — confirmed on two of its own pages.
    · **ActivTrades publishes 69 AND 82 AND 84 simultaneously** across its own properties. There
      is no single ActivTrades number, so it was DROPPED — it was the brief's "worst".
    · **eToro's own risk-disclosure document carries 50 in the body and 51 in the footer.**
      Dropped for the same reason — it was the brief's "best".
    · **City Index no longer exists**: StoneX retired the brand on 2026-09-12, four days before
      the build. The April table still lists it.
    · Trading 212 72 → 77, Pepperstone 75.2 → 72.9, Spreadex 65 → 61, Tickmill 71 → 69.
    ★ **THE RULE THAT FELL OUT OF IT: a broker whose own pages disagree with each other gets
    dropped, not averaged.** That is exactly the standard this channel applies to other people.
  - **⚠⚠ THE REGULATED ENTITY IS LOAD-BEARING, NOT PEDANTRY.** One group publishes different
    percentages under different licences at the same moment:
        Plus500CY Ltd (CySEC) …… 80%      Plus500UK Ltd (FCA 509909) …… 76%
    A film whose first sentence is "every broker IN THE UK is legally required" cannot prove it
    with a Cyprus disclosure. ONE DATASET PER VIDEO now means one REGULATOR per dataset too.
    Final set: ten FCA/UK entities, all read on one date, mean 67.7%, best Saxo 60, worst
    Plus500UK 76. ⚠ The dropped brokers skew HIGH (77, 79, 74, 82/84), so 67.7 UNDERSTATES the
    market — the safe direction, and the VO must never round it up to "about seventy".
  - **★ THE RENDER TRIPWIRE IS NOW A STALENESS CHECK.** These are rolling twelve-month figures
    that firms revise quarterly, so `render.mjs` refuses to produce an MP4 once
    `disclosures.ts`'s READ_DATE is more than 30 days old. The film's whole argument is "these
    numbers are public, forced and checkable" — a viewer who opens IG's homepage and sees a
    different number has disproved it using the exact method it sells.
  - **NO MONEY, ANYWHERE.** The beat that raises the subject REJECTS it: a wallet and a car
    carrying no figure of any kind slide in, are struck out, and leave. ⚠ Repeating a guess in
    order to knock it down still puts the number on screen.
  - **⚠⚠ HIS AVATAR NEVER APPEARS IN THE MARKET SCENE — not in one frame.** The loss rates
    belong to every retail client those ten firms have, and a cut placing a figure and his face
    together would make the forbidden implication no matter what the sub-label said. The market
    scene is also the COLD room, so the grade itself says "this section is not about him".
  - **⚠ RULE 30 FAILED AGAIN ON THE FIRST CUT, EXACTLY AS ON 010.** Everything was bottom-
    anchored at a single GROUND = 390 and sized for a smaller frame, so every beat sat in the
    lowest third under 400–750px of empty ground. ★ The fix is NOT a global scale: it is
    per-beat — each shot takes the largest size its WIDTH budget allows, then a ground chosen so
    the object's centre lands on the band centre (design y ≈ 75). scenes.tsx now carries the
    band arithmetic in its header, and there is no shared GROUND constant left to hide behind.
  - **Defects the stills caught that the model could not:** the UNSUPPORTED pill was WIDER than
    the socket it was supposed to settle into, so the rating straddled the recess and read as a
    label floating over a dark box — a different sentence from the one the beat makes (fixed:
    800-wide socket, 640-wide sign, nested). Also: storefront name bands at 0.042·h fell to 15px
    on screen, present in the DOM and unreadable; the wall of ten was a 220px strip at tile
    aspect 0.62; the easel legs were hairlines.
  - Verified: tsc clean · geom_audit CLEAN across all 2,882 frames with cross-scene pairs
    included · density ≤3 in every scene · no SHORT-LIVED element · no DEAD stretch · stills
    across all seven scenes.
  - ⚠ Still missing: VO, photo, music bed (HAS_VO / HAS_PHOTO / HAS_MUSIC all false).

- **2026-09-13 (Video 011 — REAL CHARTS, A VARIED HOOK WALL, STATEMENT FORMS ON THE CARD BACKS;
  ★★ rule 31 added)** — user: *"Make the charts a lot more realistic, add some variety to the hook
  visual, and actually add some visuals to the back of those cards that flip in the first
  scene."* All three are now standing rule 31. The hook wall went from a 3×3 grid of identical
  bar tiles to seven tilted cards of four kinds; every chart in the video (wall, monitors, the
  rejected card) is a seeded SVG of real candles; and each card back is a different unfilled
  statement form. ⚠ The brief called the backs "blank, empty paper" and that meaning is the hook
  — so the backs were given visuals by drawing an EMPTY real document, not by filling them.

- **2026-09-13 (Video 011 — REAL VO + THE SUPPLIED PHOTOS WIRED)** — user: *"I put all the
  photos I could in public. VO is also in public, use the same song."* The Yeat bed again, from
  the top.
  - **★★ A SUPPLIED SCREENSHOT CAN CARRY MORE THAN THE BRIEF ALLOWS — CROP TO THE ALLOWED
    FACT.** The Prop Firm Match listing shows the logo, "1of1 Funding" with an "Unlisted" badge,
    AND a "Warnings ⚠ 6" row. The brief's prop-firm point is ONLY the listing state ("do not
    characterise the company further"), and a warnings count on a vetting directory is further
    characterisation that reads as an accusation. The plate is two crop windows of the one
    image — logo, and name + badge — and the warnings row is outside both. Same editorial rule
    as 010's litigation-release headline: **the crop window is a claim, not a layout.**
  - **The screenshot also settled a wording conflict in the brief.** The shot list's sub-label
    said "unlisted", the VO says "unverified". The site's own badge reads **Unlisted**, so the
    sub-label quotes it exactly, and the VO's word is consistent with it (an unlisted firm on a
    vetting directory is by definition not verified) — the screen is the more precise of the two.
  - **Supplied photos are not always plates as delivered.** face.webp arrived as a skewed card
    on a white page with a yellow "$" bleeding in at one edge. objectFit would have shown white
    corners or kept the yellow (rule 4); an inner crop WINDOW, previewed with PIL before wiring,
    kept neither.
  - **Transcript: the take merged twelve shot boundaries into comma-runs with no pause under
    them**, so those splits are semantic, with ellipsis pairs where one spoken sentence spans two
    shots. Mishears fixed on screen: "than"→"Then", "who's"→"whose", "one of one funding"→"1of1
    Funding", split numerals, "Sao"→"São". ⚠ **The 010 lesson applied in both directions:** a
    MISSPELLED word that is present gets corrected ("than" is a spoken syllable), a word the
    voice did NOT say never goes on screen — the take reads "offering 100% payout" with no "a",
    and the caption follows it rather than the script.
  - **The caption generator's name guard is an ALLOWLIST, not a banned-word list.** "TJR only,
    never a real name" can't be enforced by listing candidate real names — that file would then
    contain the name, waiting to be pasted somewhere. Every capitalised word that isn't
    sentence-initial must be on a short allowlist, so no named person reaches the screen
    unannounced.
  - **Mix, and a hot peak that turned out fine:** the read peaked at −2.5 dB, 2.2 dB hotter than
    010's, so ×1.445 put the SOURCE-domain peak at +0.7 dBFS. Rather than guess whether
    Remotion's gain stage is float or integer, the mixprobe decided it: render −26.1 mean / −2.1
    peak, flat factor 0, peak count 2 — no clipping, and within 0.1 dB of 009 and 010. Bed ×0.0519
    against its body (−7.9), 10 dB under the voice.
  - **A brief-composition gap from the first build, caught in the stills:** the verdict's "crowd
    facing the avatar — and between them, the empty tray" had been built as crowd + tray with no
    avatar, which left the beat without its subject. Now crowd, tray, avatar, in that order.
  - Tunnel pointed at http://127.0.0.1, per the 2026-09-12 CLAUDE.md note (the Studio binds IPv4
    only and localhost resolves to ::1 first).

- **2026-09-12 (Video 011 — "Show Us the Statement", TJR; built from the brief, no VO yet)** —
  31 beats, one visual per sentence, 86.1s provisional.
  - **★★ THE FIRST AUDIT WHOSE FINDING IS AN ABSENCE, and it changed how the
    whole film is drawn.** Every previous video rated something that exists — a
    claim, a fund, a record. This one rates something that does NOT: a published
    broker statement. So the hero object is an EMPTY DOCUMENT TRAY and the film
    is built around a hole. The constraint that follows is absolute and is
    written into both the kit and the audit model: **nothing ever lands in the
    tray.** Not the rejected chart, not the verdict sign, not the sheet in the
    last shot — which falls, stops 60px short, and hangs there for the outro.
    The gap IS the finding, and an animator "finishing" that fall would delete
    the whole argument.
  - **The empty state of every object had to be as legible as its full one.**
    The hook's charts flip to blank paper backs; the prop firm's badge socket is
    a dashed recess that only ever brightens at the rim; the two doors beside it
    are shut and UNLABELLED because "never applied, or didn't pass" must not
    hint which; the courthouse is dark and closed because nothing is on record.
  - ⚠⚠ **THE FLIP'S MARK IS A QUESTION, NEVER A CROSS** — the brief said so
    explicitly and it is the difference between "unverified" and "false". A
    cross would make the accusation the video exists to refuse.
  - **Rule 29 caught an easing mistake worth naming.** The two rejected cards
    ("not a chart, not a screen recording") used a single EASE'd `t` with a
    hold expressed as a band of t — 0.42 to 0.62. EASE is violently
    front-loaded, so that band collapsed to 9 and 11 wall-clock frames against
    the 24-frame floor. **A HOLD MUST BE BUILT FROM TWO EXPLICIT RAMPS**
    (`min(prog(in), 1 - prog(out))`), never from a slice of an eased parameter.
  - **Layout defects the model caught before a single still was rendered:** the
    verdict's audience rows were 82px apart and a row is ~94px tall; the prop
    firm's "push in" translated the building DOWN so its base sat under its own
    sub-label; the falling sheet's start position put its top 4px into the
    caption band. All three were invisible in a settled still.
  - ⚠ **STILL OUTSTANDING:** no VO, no photo, no bed. Cue timings are paced from
    the written script. The setup beat plays the avatar reveal alone — there is
    no dashed "photo pending" box anywhere, per the standing rule.
  - ⚠ **THE ONE WORDING TO CHECK BEFORE POSTING:** the brief's shot list says
    the sub-label should read "propfirmmatch.com — 'unlisted'" while the VO line
    says "lists it as unverified". Those are different words. The build says
    "PROPFIRMMATCH.COM — NOT LISTED AS VERIFIED", which is true under either,
    but the sub-label should be changed to quote whatever the site actually
    says the morning of posting.

- **2026-09-11 (Video 010 — REAL VO + THE SUPPLIED PHOTOS WIRED)** — user: *"I put all the
  photos I could find into public, implement them, along with the VO in it as well and use the
  same song as last time."* The Yeat bed again, from the top, as on 008 and 009.
  - **THE SUPPLIED DOCUMENTS TURNED OUT TO BE THE STRONGEST ATTRIBUTION IN THE VIDEO.** The brief
    demands every allegation read as the SEC's claim rather than ours, and a screenshot of the
    SEC's own filing is exactly that. So the complaint's caption block now plays the hook's "the
    U.S. government says…" beat in place of a generic seal, and the SEC's litigation release
    plays "the SEC sued him" — masthead, release number, case number, court and filing date, all
    checkable on screen. **Prefer the real document to a symbol whenever the beat is about what
    a document says.**
  - ⚠⚠ **THE CROP WINDOW IS AN EDITORIAL DECISION, NOT A LAYOUT ONE.** The release's own headline
    ends "…and Operating a Ponzi Scheme". Showing it would be defensible — quoted, visibly the
    SEC's page, manifestly a charge — and it is still cropped OUT, because the brief's rule for
    this video is that risk which adds nothing gets omitted, and the headline adds nothing the
    caption does not already say while putting those words in display type on a clip that will be
    screenshotted. Recorded in data.ts REJECTED so a later pass cannot quietly restore it.
  - **The photo fixed a REPEATED VISUAL I had shipped.** The man beat was a second garage-plus-
    avatar-plus-car tableau — the hook's shot over again, which the standing rule forbids. His
    face now plays the beat where his name is spoken, and the garage belongs to the hook alone.
  - **★★ TWO ★-FLAGGED FACTS WERE WRONG AND THE PRIMARY SOURCE CAUGHT THEM.** data.ts had the
    co-defendants as "Alan Mehr and Maxwell Burkenroad"; the filing reads **ALEXANDER FARHANG
    MEHR** and **MAYA ROSE BURKENROAD**. Both are real people and both names were invented by a
    build that had never seen the document. They are now named once, on the court's own caption
    block, spelled the way the court spells them. ⚠ **A ★ flag is not a verification — read the
    source the moment it arrives.**
  - **The take dropped an attribution the script had.** Scripted: "And, it alleges, about sixteen
    million went to personal use." Recorded: "And about 16 million went to personal use." Captions
    are generated FROM the transcript, so the caption cannot invent the words back. Covered on
    screen by leading that beat's sub-label with "SEC COMPLAINT ALLEGES —", and recorded as an
    explicit, reasoned entry in captions_vo.py's ATTRIB_EXEMPT so the guard still fires for any
    NEW unattributed line. ⚠ **It is a re-record candidate, not a closed issue** — the brief says
    no exceptions in VO either, and the VO is the half still short.
  - Transcript artifacts fixed: "Radio Shack"→RadioShack, "Pier One"→Pier 1, "Dress Barn"→
    Dressbarn, "Linens and Things"→Linens 'n Things (all real companies); "U"+".S."→"U.S.";
    a swallowed "that" restored from word DURATIONS (0.62s "exactly" + 0.50s "and" is far too
    long for two short words); and the $112M/hundreds-of-investors sentence split MID-SENTENCE
    with ellipses, because the take merged two shots into one breath and the shot list stays 1:1.
  - Mix: VO ×1.41 → render −26.0 mean / −4.6 peak, within 0.1 dB of what 009 shipped; bed 10 dB
    under the voice at ×0.0519, anchored to the track's BODY (−7.9) and not its mean (−8.5).
    See CLAUDE.md for the pan-law finding this pass produced — and for the null-case rule I
    earned by getting it wrong first.

- **2026-09-11 (Video 010 — "Twenty-Five Percent, Guaranteed", Tai Lopez; ★★ rule 30 added)** —
  built from the brief's 32-beat shot list under **the strictest legal framing in the series**.
  - **The legal framing is DRAWN, not just worded.** The seal PRESSES and later LIFTS AWAY; the
    profit meters swing to ZERO rather than into the red; the coin is MOVED between two investors
    rather than taken; the gavel RESTS, unused; the settlement papers are UNSIGNED. The only
    thing that ever breaks in the video is the 25% GUARANTEED slab — which is the CLAIM, not the
    man. Every beat in the SEC section carries an ALLEGED whisper.
  - **captions_vo.py asserts the legal framing at build time**, and those assertions are the
    point of the file rather than a formality: every `sec` cue must carry an attribution verb;
    "Ponzi" may appear only inside the complaint's quoted, attributed phrase; "FBI" may not
    appear at all; the flip must state that no court has found him liable and that nothing has
    been proven; the verdict must say out loud that the fraud claims are not ours to call; and
    "fraud" itself is legal ONLY inside that disclaiming sentence. **It immediately caught a real
    defect** — the script's "And about sixteen million went to personal use." stated an
    allegation flatly, and became "And, it alleges, about sixteen million went to personal use."
  - **Rule 29 forced a timing re-allocation, exactly as the rule says it should.** "Our rating:
    inflated." measured 23 legible frames against a 1.05s floor, so the provisional pacer's
    minimum cue went to **1.5s** and its rate to 3.6 w/s (95.2s total, inside the brief's 85–95).
    "From hundreds of investors." was lengthened to "…according to the complaint" — which fixed
    the same problem AND strengthened the attribution.
  - **009's queue bug recurred, and was fixed the same way.** Three walkers travelling equal
    distance on EASE from staggered starts OVERTAKE each other, because EASE is steep at the
    head. The queue now STANDS STILL and the 25% notes move, each in its own horizontal lane.
  - **A stale mirror in the audit was caught:** geom_audit.mjs still carried `SWOOP_OUT = 22`
    while scene3d.tsx had moved to 48 — a clone carryover that would have had the rule-28 check
    modelling two shots that were not one frame-width apart. ⚠ **Add the audit's own constants
    to the clone-carryover checklist**, alongside serve.mjs's PORT.
  - Verified: tsc clean · geom_audit **CLEAN** across all 2,951 frames with cross-scene pairs
    included — no intersections, nothing off-frame, no caption intrusions, nothing under 24
    legible frames, no dead stretches · density ≤4 everywhere · stills at every beat plus
    mid-transition frames.
  - ⚠ Still OUTSTANDING on 010: no VO, no hook photo and no music bed (`HAS_VO`, `HAS_MUSIC`,
    `HAS_HOOK_PHOTO` all false; `VO_GAIN`/`MUSIC_GAIN` are placeholders), and every ★ figure in
    data.ts — case number, court, filing date, all dollar figures, the dissolution year and the
    primary clip for the "best strategies" quote — must be re-verified before posting.

- **2026-09-10 (Video 009 — CROSS-SCENE SWEEP + LEGIBLE-TIME PASS; ★★★ rules 28 and 29 added)** —
  user: *"ensure that none of the scenes leave the screen too quickly to be processed, and then do
  a full intersection sweep. Remember, I don't even want visuals from different scenes
  intersecting while one is fading in and the other fading out."* Both are now **standing rules
  28 and 29**, and rule 19's "transitions are excluded from the sweep on purpose" bullet is
  marked **superseded**.
  - **The transition was rebuilt as a rigid strip.** The push as shipped could not satisfy the
    rule: incoming 430px on OUT_LONG over 48f against outgoing 620px on IN_ACC over 22f — three
    different variables, so the separation between the two shots changed across the handover and
    in the middle they shared ground. Both ends now run **one window, one curve, one frame width
    apart**, so separation is constant and the shots are adjacent rather than stacked. It is also
    closer to the corpus's own description of a push than the overlapping version was.
  - **`geom_audit.mjs` went FRAME-FIRST.** The old loop was scene-first and therefore could not
    see a cross-scene intersection at all — the two scenes were never in the same iteration. It
    now walks frames, gathers every mounted scene's elements, applies each scene's own camera AND
    its own swoop offset, and tests every pair including cross-scene. `soft` exemptions apply
    within a scene only. **Result: CLEAN.**
  - **New SHORT-LIVED check** (rule 29) caught two real defects on its first run: the subscriber
    counter was legible for **10 frames** and the setup avatar for 15. ⚠ And the first version of
    the check counted at the 0.12 visibility floor, which let fade tails pass as legible — it now
    counts at **op > 0.55**, which is what exposed that the counter was properly readable for
    barely twelve frames. The setup beat was re-allocated: the brief asked for a 2s photo plus a
    rolling counter inside a line the take says in 2.7s, which left ~0.2s for the payoff. Now
    ~1s photo / ~1.2s avatar-and-counter, and **no element anywhere is under 24 frames at full
    strength**.
  - ⚠ **A LINE-ENDINGS TRAP, TWICE IN ONE SESSION.** `scene3d.tsx` and this preference file are
    both CRLF (cloned/edited that way), while every file written fresh is LF — so multi-line
    search strings silently never matched and a patch script reported MISS on text that was
    plainly there. **Normalise CR out before patching, and write back in the file's own
    ending.** Add this to the same mental list as the heredoc trap.
- **2026-09-10 (Video 009 — PHOTOS WIRED; ⚠ the chart is shown CROPPED, and that is a facts
  decision)** — user: *"I added all the photos I could get to public. For the rest of the
  placeholders, simply replace them with something appropriate."* Two assets landed, and 009 had
  exactly one placeholder, so both got used and nothing had to be invented.
  - **`face.webp` → the setup beat's portrait.** ⚠ Source is only **678×452**, so the plate is
    **760×620**, not the 760×920 the hook lineage had been drifting toward: that shape would
    have meant a 2× upscale of a small file plus a hard portrait crop of a landscape frame.
    760×620 is a 1.37× upscale with a gentle crop, which is as large as this source can carry.
    **★ THE RULE THAT ADDS: size the plate to the SOURCE, not to the slot.** A big soft plate is
    worse than a slightly smaller sharp one, and 008's lesson ("make the hook plate big") is
    about the SLOT being too small by default — it is not a licence to upscale a 452px file.
  - **`spy vs fund screenshot.png` → the hook's payoff.** It lands on *"So for once, we can
    actually check"*: the glass case stops showing us the MAN and shows his published price
    instead, and the magnifier sweeps across it. That is the best possible home for it — the
    entire hook is an argument that this one is checkable, and the chart is the thing being
    checked.

  **⚠⚠ THE CHART IS CROPPED TO ITS PLOT AREA, AND THE REASON IS FACTUAL, NOT AESTHETIC.** Its own
  readouts say SPY **+85.89%** against the fund's **+30.50%** — a gap of ~55 points. The video's
  claim, from Bloomberg, is that the fund trailed the S&P by about **26** points over its LIFE.
  Both can be true: the chart's right edge is TODAY, so it keeps scoring the index for the months
  after the fund was liquidated and stopped moving, while the 26-point figure is measured to the
  fund's death. But putting both on screen is **mixing two windows of one statistic**, which
  CLAUDE.md names as the single thing that kills a video. So the plate carries the **SHAPE** of
  the record — one line flat, one line climbing away — which is exactly the video's argument and
  contradicts nothing, and no figure of its own. ⚠ **If the chart's window can be established it
  can be shown in full, with a dated sub-label.** Escalated to the user.
  ⚠ The crop was tightened twice: at X0=128/Y0=8 a sliver of the O/H/L/C legend still survived in
  the corner, and **a half-legible figure is worse than no figure**.

  Two smaller things the pass produced: the case handover (man → chart) was a **crossfade** on
  first cut, putting a man and a chart at half opacity in the same box for 19 frames — the fifth
  time this build hit rule 19's dissolve defect, now sequential like the rest. And `ChartPlate`
  is a reusable cropper: give it a source and a display width and it maps a fixed plot window,
  so any future screenshot can be shown for its shape without its chrome.
  geom_audit CLEAN; tsc clean.
- **2026-09-10 (Video 009 — "THE ONLY ONE WHO LET US CHECK", Meet Kevin / Kevin Paffrath, BUILT
  with the real VO; NOT rendered)** — new video in the locked illustrated-object mode (rule 26)
  with the rule-15 push. `OffCamCelebs/009-meetkevin/`, composition `InfluencerAudit009`,
  **2314f / 77.1s @30**, ports **Studio 3123 / file host 3124**. HAS_HOOK_PHOTO still **false** —
  no photo supplied, so the setup beat draws its pending slot.

  **★★★ THE BRIEF'S NEW BINDING RULE — ONE VISUAL PER SENTENCE.** *"Every line gets its own
  object or its own clear transformation of the previous object. Nothing sits still for two
  sentences… that transformation must be visible and complete before the next line lands."*
  Implemented as machinery, not diligence:
  - `cueEnd(scene, i)` in `data.ts` returns where beat *i* loses the stage, and `tp()` in
    `scenes.tsx` schedules every transform to START a few frames after its line and FINISH
    before the next one. Thirty VO lines → thirty beats → **the cue list and the shot list are
    1:1**, asserted in `captions_vo.py`.
  - **`BeatSub`** — a whisper that belongs to ONE beat and clears before the next. ⚠ Earned
    here: `Sub` never fades out on its own, which was harmless in 008 (one whisper per scene)
    but 009 has up to five beats per scene, and the fall's "LIQUIDATED FEB 2025" printed
    straight through the next beat's "26 POINTS". **One visual per sentence means the LABELS
    hand over too.**

  **★★★ `geom_audit.mjs` REMODELLED FOR 009 — and it earned its keep immediately.** The camera/
  projection/swoop math is video-independent and stayed; the element model moved to its own
  `scratchpad/geom_scenes.mjs`. On the real VO timing it found **15 intersections the three
  pixel sweeps all passed clean**, and the fixes clustered into four durable lessons:
  1. **★★ A CROWD MUST BE SEPARATED OVER ITS WHOLE TRAVEL, NOT JUST ITS DESTINATION.** The
     investor figures derived x from index parity, so two of them ended standing in *exactly the
     same place* — a 0px-gap overlap **no still can show, because two identical figures on top
     of each other look like one figure**. Giving each its own stop was still not enough: their
     PATHS crossed. Each now walks a lane no other walker enters.
  2. **★★ A QUEUE MUST NOT CLAMP.** The fee-gate walkers used `tp()`, which fits the remaining
     beat — so each later walker got a shorter window, moved faster, and overtook the one ahead.
     Fixed rate + staggered start + they exit frame (marked as an intended exit).
  3. **★★ RULE 19 GOVERNS OBJECT GROUPS, NOT JUST CAPTION LINES.** Every residual overlap was a
     group crossfade: outgoing and incoming dissolving through each other for four to six
     frames. Rule 19 has said "handovers are SEQUENTIAL, not dissolved" since 005, but it was
     written about caption text and I had been applying it only there.
  4. **★★ …AND THE FIX HAS A NARROW WINDOW.** Pushing every exit to cue−24 removed the overlaps
     and replaced them with DEAD FRAMES — beats playing their tails on an empty stage. Rules 19
     and 7 pull opposite ways and the answer is a tight **butt joint**: exit at **cue−16 over
     12f** (invisible by ≈cue−6), entrance at **cue−6** (legible by ≈cue−3). ~3 dead frames at a
     boundary instead of ~12.

  **★★ TWO NEW CHECKS ADDED TO `geom_audit.mjs`, and both found real defects on their first run:**
  - **BEAT OPENINGS** — frames from a scene's start until anything is visible.
  - **DEAD STRETCHES** — the longest run *inside* a scene with nothing on the stage. Caught a
    **38-frame hole** in the closing beat: `sink` was running on `EASE`, which is an ease-OUT
    (bezier .16,1,.3,1) and reaches 0.8 within twelve frames, so the fade tied to it took the
    fund off screen 37 frames before the line ended. **A thing lowering away should ACCELERATE
    away — that is `EIN` — and it should still be moving when the sentence finishes.**

  **⚠⚠ THE BUG geom_audit STRUCTURALLY CANNOT CATCH — record this.** The closing beat rendered
  ~800px too high, straight through the caption, while the audit reported clean. Cause: **a
  `transform` on an element makes it the containing block for its absolutely-positioned
  descendants.** The wrapper carrying the sink translate held two `<At>` children, whose
  `left:50% / top:46%` then resolved against *that* box — which, containing only absolute
  children, is zero-high. The audit models DESIGN coordinates, and in design coordinates the
  numbers were already right. **Any wrapper that both transforms AND contains an `<At>` needs
  `position:absolute; inset:0`.** Checked every other transform wrapper in the file; the rest all
  sit inside an `<At>` and are fine.

  **⚠⚠ RULE 26's "OBJECTS MUST SURVIVE THEIR OWN GROUND" BIT AGAIN.** The calendar wall (dozens
  of funds quietly closing) was drawn in the channel's green glow — and it lives in the FLIP, the
  warmest room in the video. **Green at low alpha on a brown ground is invisible**; two renders of
  that beat came back as an empty brown frame. Redrawn in warm light (`rgba(255,240,214,…)`).
  Also capped the wink-out at ×0.72 so the wall ends with lights still on — "closures are
  ORDINARY" needs a wall that is still working, not one that goes black.

  **AUDIO — and a NEW constant, `VO_GAIN`.** Take: ElevenLabs "Russ", 105.4s → 74.4s trimmed,
  237 words, no impossible gaps. ⚠ **This read is 7.3 dB quieter than 008's Jon read** (VO mean
  −27.7 dB against −20.4), which is the clearest case yet for never carrying a gain: 008's 0.075
  would have run the bed ~7 dB HOT over the voice for the whole video.
  ★ **But a correctly BALANCED mix still came out 7 dB below 008 overall** (−30.3 mean / −7.8
  peak — that much headroom simply unused). The VO-anchored rule fixes the bed against the voice
  and says nothing about where the voice itself sits, and **a video that plays 7 dB below the one
  before it is a real inconsistency in the deliverable.** So: `VO_GAIN = 1.6` (+4.1 dB, voice
  ≈−23.6, peak ≈−1.0), and the bed **re-derived on top of it** to `0.0519`. Final: full mix
  −26.1 / peak −3.7 (no clipping), speech windows −25.6 / −27.2 / −25.5, bed alone at body −33.6
  = **exactly 10 dB under**, post-VO tail −39.4 = bed + fade only. Bed is the user's Yeat track
  again, from the top. ⚠ Re-derive BOTH numbers on any new take.

  **CAPTIONS — from the transcript, and one structural correction.** ⚠ **Whisper put a sentence
  boundary in the wrong place**: it transcribed "…the fund shut down over its whole life. It
  trailed the S&P…", which would have merged the CLOSURE beat into the LIFETIME-LAG beat and left
  one of the thirty shots without a line. Split semantically at word 120/121 instead. Artifacts
  fixed: **"Paphrath" ×2 → PAFFRATH** (a misspelled real person's name is not shippable), split
  numerals `$500 ,000` and `0 .76 %`, and the `S &P` split-ampersand class.

  **GUARDRAILS — all held, and one deliberately amended.** No wrongdoing anywhere: nothing
  cracks, breaks, flashes red or falls over; the fund's light goes out and it lowers away. The
  rise gets **four full beats** and is genuinely green (the brief: "a video that skips the rise to
  get to the fall is dishonest editing"). 26pt lag sub-labelled **Bloomberg**; the ~$1M is **his
  own estimate**; peak AUM carries **"PEAK AUM — HIS FIGURE"** and no hard number is stated as
  settled; the verdict rates **the edge, not the man**, and says so as the last words, with
  INFLATED drawn as a **balloon that over-inflates and settles slightly deflated** — not a stamp,
  because a stamp lands like an accusation. ⚠ **The word "fraud" is permitted exactly once**, in
  the brief's own negating line "Closing a fund isn't fraud" — `captions_vo.py` asserts it
  appears once and only in that construction, and every other accusatory word is banned outright.
  The point of that line is to REMOVE the implication; refusing to say it would leave it standing.

  Final state: geom_audit **CLEAN** (0 intersections, 0 off-frame at rest, 0 caption intrusions),
  collide 0, caption intrusions 0, snapfind spikes only at cue boundaries, all beat openings ≤10f,
  all dead stretches ≤10f and every one at a boundary, tsc clean. edgescan shows 3 short runs —
  the investor queue exiting frame and the CTA's rule-15 entrance, both intended (rule 22 exempts
  a deliberate exit).
- **2026-09-07 (Video 008 — RENDERED; ⚠ a clone carryover in `serve.mjs` caught first)** — the
  user asked for a render. ⚠ **`scratchpad/serve.mjs` had `PORT = 3121`, which is the port 008's
  own STUDIO is bound to** — the file host and the Studio would have fought for it. Its comment
  even warned "NOT 3116 — the Studio owns that port", i.e. the WARNING survived the clone from
  006 but the NUMBER never got updated, which is the most dangerous shape a stale comment can
  take: it looks checked. **Fixed to 3122, and the rule for this channel is now Studio 3121 /
  file host 3122.** ⚠ Add `serve.mjs`'s port to the clone-carryover checklist in the root
  CLAUDE.md alongside the composition id and output path — a port clash fails at bind time with
  a message that looks nothing like "you cloned this".
- **2026-09-07 (Video 008 — THE FLUID PASS: rule 15's push restored, and the camera un-stiffened)**
  — user: *"make the camera more fluid, with more fluid breathing animations/transitions, just
  like in 100bps."*
  **★★ FIRST, WHAT 100bps ACTUALLY DOES — because the obvious answer is wrong.** Its `Camera`
  component (drift2 wander on two axes) is **dead code over there**: `MOTION.driftX/driftY` are
  never called, killed on 2026-09-01 when the user asked *"why do the visuals in this style sort
  of weirdly move?"*. So **fluid does NOT mean more wander** — importing that drift would have
  reproduced the exact thing they had already rejected. What makes 100bps fluid is (a) curves
  that never stop and (b) the SWOOP between beats. Three defects here, all arithmetic:
  1. **★★ THE DOLLY WAS LINEAR.** `z = min(0,−dolly) + p*dolly` is constant velocity — it starts
     and stops dead at every beat edge. Now eased on **GLIDE** `bezier(0.42, 0, 0.1, 1)`, which
     spends its whole second half decelerating, so the camera is still creeping when the beat
     ends: "a camera that has real distance to cover must arrive with no perceptible stop."
  2. **★★ THE BREATHING RESTARTED AT EVERY CUT.** The swing ran on `f − r.start` with a
     per-scene `seed`, so the sine PHASE JUMPED at each boundary — precisely what rule 3 already
     forbids. It now runs on the **GLOBAL frame with no seed**, so every beat shares one camera
     and the outgoing and incoming shots breathe together through a push. **`seed` is deleted
     from `Scene` and all eight call sites**; per-beat character now lives in the dolly's sign
     and size, and in the push itself. (This knowingly relaxes rule 25's "per-scene seed so
     consecutive scenes never share a camera feel" — that existed for the hard-cut mode, and the
     push is now the differentiator.)
  3. **★★ THERE WAS NO TRANSITION.** A hard cut cannot be fluid. **Rule 15 is restored** — the
     100bps push this channel already adopted on Video 005 and then lost when 007/008 took the
     brief's hard cuts. 48 frames in from the RIGHT on a long-tail ease-out from scale 0.88
     (rule 15's adaptation 2, not Style 3's 0.74); 22 out to the LEFT travelling further and
     faster while it dims on its own linear ramp AND defocuses to 11px. The caption is a sibling
     of the scene tree, so it stays sharp and 100% opaque above every push for free.
     The **hook** is the one exception: no preceding shot to push away from, so it settles on the
     zoom alone rather than sliding in from off-frame.
  **★★★ THE PUSH EXPOSED A DEFECT THE HARD CUT HAD BEEN HIDING — and this is the durable
  lesson.** Rule 25's note "the cut must land on a BUILT FRAME" turns out to be far more
  load-bearing under a push: a cut into an empty beat reads as a beat about to start, but a push
  slides an EMPTY FRAME into view for a second and a half. Measured with a new check in
  `geom_audit.mjs` (frames from scene start until anything is visible): **claim +47f, backstory
  +32f** — both dead. Fixed by letting each beat's hero stand in the shot from frame one and
  letting THE PUSH be its entrance (one camera move, not two), while the number still lands on
  its word: the vault gained a `labelP` prop so the body arrives with the shot and "$95M" fades
  in on "ninety-five million, liquid". All eight beats now open within 13 frames.
  ⚠ **edgescan will no longer read 0%** — content deliberately crosses the frame edge on every
  entrance and exit now. Rule 22 already exempts this ("an object deliberately EXITING through
  the edge is not a defect"); the authoritative check is geom_audit, which tests off-frame only
  at REST and is clean. Overlap results are unaffected by the swoop: a uniform scale-plus-
  translate is a similarity transform, so it cannot change whether two rects intersect.
  geom_audit CLEAN; tsc clean; audio untouched.
- **2026-09-07 (Video 008 — THE HOOK PORTRAIT, twice: 320×370 → 484×550 → 820×990)** — user:
  *"the picture of the guy in the hook scene should be larger"*, then *"even larger."*
  **★★★ THE RULE THIS EARNED — CHECK WHETHER A SLOT'S NEIGHBOURS ARE EVEN ON SCREEN BEFORE
  SIZING IT.** The first pass sized the plate to fit *between the $200M sign and the sub-label*
  and lifted the sign to buy room. That whole constraint was imaginary: **the photo is gone by
  f62** (the flip crosses 50% there), **the sign does not begin to rise until f75**, and **the
  whisper lands at f225**. Nothing ever shares the frame with this plate except the caption. Once
  measured rather than assumed, the plate is bound only by the caption band above and rule 22's
  900px safe box — and it now uses both, at **820×990: 8.4× the area of the slot it started
  with**, the largest single element on this channel. Sizing an element against neighbours that
  are not simultaneously visible is the same class of error as the pixel sweep that could not see
  overlaps: a constraint believed rather than measured.
  ⚠ **008 inherited 320×370 by cloning 007, which had it too** — under half the frame width, and
  far below rule 16's own photo-plate band (620–740). **Neither video's hook is the one to clone
  from; start the next from this plate.**
  Also: the photo and the avatar now get **separate holders**. They never coexist, so nothing
  forces one size on both — the avatar stays at **1.6**, which is what reads right for the
  figure. (Matching the plate meant scale 1.98, and at that size the gym-guy's stylised
  proportions — broad tank, small head — read as blocky. The flip is a card REVEALING a figure,
  not a morph.) The sign stays at the lifted y −210 and the whisper at 520; both now have more
  air than they need, which is the correct direction. geom_audit CLEAN; tsc clean.
- **2026-09-07 (Video 008 — PHOTOS + THE YEAT BED; two supplied images REJECTED)** — user:
  *"I put the necessary pics in public, use the yeat song I used a few times in 100bps videos."*
  **Bed = the user's Yeat track**, carried from 100BasisPoints Videos 5–8 (`music_user2.mp3`
  there, `music_yeat.mp3` here; 200.1s). **★ IT PLAYS FROM THE TOP** (user, same day: *"the
  yeat song should start from the beginning"*) — an earlier cut entered at 25s to skip the
  intro and that was reverted on instruction.
  ⚠⚠ **THE TRACK IS NOT FLAT, AND THAT CHANGES WHAT YOU ANCHOR THE GAIN TO.** Its first ~15s
  run **−14.8 dB** against a body of **−7.9** (the song's own shape, not the mix), so the mean
  across the whole 75.4s window is −8.7. Anchoring to that mean would set the gain from a
  number that describes 15 seconds nobody is really hearing and push the body — 60 of the 75
  seconds — hot under the voice. **Anchor to the BODY:** VO −20.4 dB, body −7.9 → **0.075
  (−22.5 dB) = exactly 10 dB under**, the channel's standard since 001. Verified bed-alone at
  that gain: body −30.3 / −30.8 (10 dB under), intro −37.3 (~17 under), so the hook rides the
  song's quiet opening and the bed arrives properly around 0:15 — the record, played from the
  start. Full mix mean −23.0 / peak −5.5, no clipping; speech windows −22.6 / −23.2 / −22.8;
  post-VO tail −35.7 = bed + fade only.
  **★ THE GENERAL RULE THIS ADDS to the standing "measure across the composition's length":
  when a bed is not level across that window, measure its SECTIONS and anchor to the one the
  video mostly sits on — an average across a track with a quiet intro is a number that
  describes no part of the mix.**
  **Photos: four supplied, TWO used, TWO rejected — and the rejections are the finding.**
  - ✓ `Alex-Hormozi.webp` → the hook portrait, two seconds, then the flip to the avatar.
  - ✓ `Completes investment into gym picture.png` → **a real evidence plate in the anchor**,
    landing on the words "The buyer is named." BusinessWire, 11 Jan 2022: *"American Pacific
    Group Completes Investment into Gym Launch and Prestige Labs."* This is the only outside
    paper in the video, so it is SHOWN, not merely asserted (the 007 precedent — real records on
    screen — over rule 26's "a fact that needs a screenshot belongs to the other modes"). The
    stone's grade was rewritten from "REPORTED, 2021 — BUYER NAMED PUBLICLY" to **"REPORTED —
    BUYER: AMERICAN PACIFIC GROUP"**: the release is dated Jan 2022, so printing "2021" beside
    it would have put a contradiction on screen. The screen may be more precise than the VO,
    never different — dropping the year is less precise, which is allowed; printing a different
    year is not.
  - ✗ **`200 MIL net worth.png` — REJECTED, and this one needs the user's decision.** His own
    caption reads *"Which resulted in a $200,000,000+ PORTFOLIO, and a $100M NET WORTH by age
    32."* The video's entire premise is "he says he's worth $200 million." This source has him
    putting his net worth at **$100M** and the $200M against the **portfolio**. On screen it
    would show the audience, in his own words, that the audited framing is wrong — and it mixes
    two editions of one statistic, the thing CLAUDE.md says kills a video.
  - ✗ **`world record title.png` — REJECTED.** It is a fragment of a Guinness record-title page
    reading *"Age Restriction: Applications for this record title will only be accepted if the
    applicant is 16 years of age or over."* That is the generic application rule for a title. It
    does not name him and does not show he holds anything, so it cannot carry the VERIFIED
    grade — the one grade these guardrails allow anywhere in the video.
  Both rejections are recorded in `data.ts` with their reasons so a later pass cannot wire them
  in. geom_audit re-run with the plate: CLEAN; anchor density 4 (hero = the stone). tsc clean.
- **2026-09-07 (Video 008 — FULL SCRUTINY PASS: geometry, rules, density)** — user: *"ensure
  that absolutely no visuals or elements intersect each other or go off the screen unless its on
  purpose. Also ensure that the video completely follows my rules. Scrutinize the entire thing."*
  **★★★ NEW TOOL, AND IT SHOULD RUN ON EVERY VIDEO FROM NOW ON:
  `scratchpad/geom_audit.mjs`.** Rule 19 said a pixel sweep *cannot* decide whether two elements
  overlap — and that is exactly right, because two overlapping elements merge into ONE connected
  blob, so the raster pass sees a single object and passes. This one mirrors the layout instead:
  it re-implements the Scene camera (perspective 1500, origin 50%/46%, dolly/swing/bob), the `At`
  placement, the `Riser` travel curves and the cubic-bezier easings, projects every element's
  design rect through the real transform, and tests **every pair on every frame** — plus frame
  bleed, caption intrusion and rule-18 density as row bands. Elements below 12% opacity are
  exempt, so a slide-in that begins off-frame is motion, not a defect; intended contacts (the
  book's own parts, a structure standing on the ground line) are declared `soft`.
  **It found seven intersections the three pixel sweeps had all passed clean**, every one of them
  real on inspection:
  1. **anchor — the 2/3 building drawn straight over the 1/3** (46×160px, 33f). The larger half
     started at x=−90 and covered the smaller one's door and half its sign. It now starts FLUSH
     at x=−40 (shared edge exactly −200) so the two read as ONE building about to split — the
     seam is the image — and travels 240 instead of 330.
  2. **anchor — the 2/3 building clipping the buyer** (up to 17px, 243f). Travel now stops 23px
     short of him.
  3. **backstory — the sixth gym slicing through the first's GYM sign** (156×39px). It is drawn
     last, so the "far" building painted over the near one. Moved to (−40, −10), 30px of air.
  4. **backstory — the coin's two-line label overlapping the closing sub** (374×4px, 27f). Sub
     moved 500 → 540.
  5. **backstory — gyms and coin cross-dissolving through each other** at the handover frame.
     The coin now waits until the gyms have fully cleared (c2−6 → c2+2).
  6. **claim — the 240 and 150 cubes overlapping** by 13 screen px for 200 frames. Cluster
     respaced; every pair now clears by ≥20px at every camera angle.
  7. **verdict — the $200M sign floating 8px ABOVE its pillar.** The thing "standing on one
     pillar" was not touching it. Seated at y=102.
  **Rule violations found and fixed:**
  - **★★ RULE 4 (no yellow, amber or gold anywhere).** 008 had introduced two saturated gold
    objects — the $80K coin (`#E9C878`/`#B8933F`) and the Guinness medallion
    (`#F4DCA0`/`#D9B45C`/`#A8842E`) — colours the rule names explicitly, and which no earlier
    approved video on this channel contains (007's warmest tones are lit-window creams
    `#F0D9A8`/`#F5D9A4`, which are the key light, not palette). The coin is now struck in
    **nickel** (`#C7CDD9`/`#78818F`) and the medallion in **VERIFIED blue `#5EA9FF`** — which is
    also semantically exact, since the record is the one independently certified fact in the
    video and the only thing the guardrails allow a verified grade. ⚠ If the literal-object
    reading was intended (a gold coin, a gold medal), this is the one change to revert.
  - **RULE 26 ("the flip is the WARMEST room in the video").** The backstory was equally warm,
    so nothing marked the flip out. There are now FOUR ground modes: `warmest` belongs to the
    flip alone.
  - **RULE 18 (≥5 blocks = overload).** Measured for the first time on this channel via the new
    tool: claim **6**, hook **5**, float **5**. Every cause was the same — a sub-label repeating
    its own caption word for word, which rule 18 says to DELETE, not shrink. Cut: the hook's
    "NO COURSE TO SELL…", the claim's standalone EQUITY line and "EVERY NUMBER ABOVE…", the
    float's "PRIVATE COMPANIES · NO FILINGS…", the flip's "NOTHING HE'S CLAIMED…", the anchor's
    "THE ONE NUMBER WITH OUTSIDE CONFIRMATION". **The guardrails are untouched** — every
    self-reported figure still carries its grade, now ON the object (a new `subLabel` on
    `SealedCube`; a strip attached under the sign), all reading exactly "SOURCE: HIM"; the
    surviving float whisper is "NOT AN ACCUSATION — JUST WHERE CHECKING STOPS", which stays
    precisely because the take DROPPED that line, so nothing else carries the respectful-tone
    guardrail. Peak density now 4, 4, 4, 3, 3, 3, 3, 3 — no scene over the threshold.
  - **RULE 21 (entrances have a vocabulary, not a default).** Six storefronts, both anchor
    halves, GYM LAUNCH and the book all materialised on opacity alone, in place. Each now
    arrives on its own axis (rise · from the left · from the right · down from above · the buyer
    walks in from the right), with the durations and curves untouched — the timing is the thing
    that must never vary.
  **Checked and found already compliant:** rule 22 (dolly is `min(0,−dolly)+p·dolly`, ends at
  z=0; widest element is the hook's 900px sign, exactly the safe box, 90px clear each side),
  rule 3 (no overlaps, nothing enters the caption band), rule 25 (hard cuts; every snap spike
  sits on a cue boundary), rule 14 (cta runs to TOTAL_FRAMES), the ★★ no-repeated-visual process
  rule (every reprise — cubes, $250M sign, stone, $200M sign, avatar — is one the brief or the
  mode sanctions). **SFX: correctly absent.** The root CLAUDE.md's "score the SFX unprompted"
  rule is a Style 3 / 100BasisPoints rule, and this file states explicitly that "Style 3's look,
  palette, 3D kit and SFX stay where they are" — no OffCamCelebs video has ever had SFX. Giving
  this channel sound design would mean building it its OWN pack, not importing that one.
  Final state: geom_audit CLEAN · collide 0 · caption intrusions 0 · edge contact 0 · snaps only
  at cue boundaries · tsc clean. Audio untouched (2260f, bed ×0.112).
- **2026-09-06 (Video 008 — REAL VO + BED WIRED; photo still pending)** — the take landed
  (ElevenLabs "Jon — Calm Presence"; trimmed 88.0s → 72.7s at native 44.1 kHz; 225 words, no
  impossible gaps) and RESTRUCTURED the video: the hook now names him with a follower count
  ("Alex Hormozi. Seven million followers.") and pulls the playbook-away line up from the flip;
  the backstory gained dates ("A gym in 2013. Six locations in three years.") and dropped "on
  the next venture" — the coin label was corrected to "LOST ALMOST IMMEDIATELY" to match; the
  VO rounds to "$46 million" (stone stays $46.2M — more precise, never different) and says
  "the book records are certified" without naming Guinness (medallion stays — same rule); the
  verdict carries both guardrail halves verbatim ("the most believable number in the entire
  niche" / "believable isn't verified"). 32 cues regenerated from the transcript
  (captions_vo.py, silence-snapped); scene cue indices remapped (hook 4→6, claim 4→5,
  backstory 4→5; the anchor's whole sale sentence is one cue, so the split rides ~c0+38 and
  the stone lands on "valuation" ~c0+74); word-level landings for the gym multiplication
  ("six locations" ≈ c1+50) and the coin drop ("lost it" ≈ c2+88). 2260f / 75.3s. Bed:
  Daphni "Poly" (same as 007, user's direction) at ×0.112 — measured VO −20.4 dB / bed −11.4
  over the window → 10 dB under, mid-band. Mix probe: no clipping (max −5.2), VO dominant,
  tail = bed+fade only. Sweeps re-run clean (collide 0 / intrusion 0 / edge 0 / snaps only at
  cue boundaries). ⚠ HAS_HOOK_PHOTO still false — hook draws the pending slot until the photo
  lands. Banned-word + both-halves guardrails now assert at caption generation time.
- **2026-09-06 (Video 008 — "THE ONE PILLAR", Alex Hormozi, BUILT; NOT rendered)** — new video
  in the locked illustrated-object mode (rule 26), from a content-only prompt.
  `OffCamCelebs/008-hormozi/`, composition `InfluencerAudit008`, 2565f / 85.5s @30 provisional
  (paced from the script; regenerate from the transcript when the take lands). HAS_VO /
  HAS_MUSIC / HAS_HOOK_PHOTO all **off** — awaiting assets. ⚠ TONE IS A GUARDRAIL on this one:
  respectful by design, "here's exactly where checking stops," never suspicion — the epistemic
  grades are enforced in `data.ts` ($46.2M exit = REPORTED in matte stone, never "verified";
  Guinness record = the only VERIFIED green; $95M/$100M+/$250M-yr = "source: him" everywhere;
  verdict carries BOTH halves: "UNSUPPORTED — plausible is not verified"). New objects
  (`objects008.tsx`): gym-guy avatar variant (tank/cap/beard/green watch), steel vault, sealed
  windowless cubes, matte stone block, gym storefront, $80K coin drop, open book + Guinness
  medallion, and the verdict pillar labelled HIS WORD — **it stands, no wobble** (suspicion is
  not the finding). Scene flow: hook ($200M sign) → claim (grey: vault + cubes + $250M/yr, all
  source-him) → backstory (warm: gyms multiply, coin drops) → anchor (building splits 2/3,
  stone $46.2M) → float (sealed cubes, no windows) → flip (warm: book + medallion) → verdict
  (stone on ground vs $200M on one thin pillar) → cta. Fixes from the stills sweep: the book's
  first cut fanned pages SIDEWAYS from a point (read as a feather, near-black cover invisible
  on the warm stage) → rebuilt head-on as two maroon cover halves in a shallow V with pages
  fanning UP from the spine, medallion resting on the right page block; the cta showed its
  sentence TWICE (top caption + the scene's own hero card) → the top caption now yields to the
  cta scene; the claim's "EQUITY · SOURCE: HIM" label wrapped → widened. Verified measured:
  tsc clean, collide 0, caption intrusion 0, edge contact 0, snapfind spikes only at cue
  boundaries (sanctioned hard cuts + caption handovers).
- **2026-09-06 (Video 007 v2 — "PICK A NUMBER" REBUILT IN THE ILLUSTRATED-OBJECT MODE)** —
  full visual rework to the reference-matching brief; VO, cues, bed and duration untouched
  (2459f / 82.0s). Logged as **rule 26**. Every scene is now a drawn object: hook photo flips
  into the recurring avatar under three flickering neon signs (word-timed landings kept) →
  billboards in a dark field, dates lit, avatar tiny beneath → **the centrepiece: he walks to
  his own $25M sign and pulls the switch; it dims to a modest $5–15M** ("his own correction",
  grey room, played warm) → laptop/agency sign, the 5M crowd-field with a few lit green, Dubai
  rising → the IAG tower going dark floor by floor + "DISSOLVED — UK COMPANIES REGISTER" plaque,
  then the huge WHOP cube with a thin dashed "?" sliver → the warm school with figures walking
  in → **the verdict: the same three signs floating over the avatar with nothing holding them
  up — "UNSUPPORTED — one source: him"** (no stamp; the image says it) → fixed close.
  ⚠ Only the hook photo renders now; all other supplied captures moved to the evidence base for
  pinned comments. The sourcing guardrail survives as a red whisper on the claim beat until the
  quotes are primary-sourced. ⚠ `reference_100bps.mp4` named by the brief was NOT in public/ —
  built from the written spec; drop the file for a calibration pass. Verified: tsc clean · 0
  collisions · 0 caption intrusions (check flipped for the top band; one $85M edge-cross caught
  and fixed) · edge 0.1% · snaps only at the hard cuts.

- **2026-09-05 (Video 007 — REAL VO + ALL PHOTOS WIRED)** — the take restructured the video and
  the pipeline caught a new failure class doing it. 2459f / **82.0s** @30, VO live, sync verified
  sub-frame (re-transcribed mix opens on the hook at 0.00 with matching word times). **No bed was
  supplied — HAS_MUSIC stays off until one is named.**

  **⚠⚠ NEW PIPELINE RULE, now a tripwire in captions_vo.py: AN INTER-WORD GAP LONGER THAN THE
  TRIM PAD IS IMPOSSIBLE.** vo_trim leaves ≤0.2s of any silence, so a >1.3s transcript gap means
  whisper DROPPED WORDS. It ate "called a co-owner of Whop, a platform" and the remaining text read
  "HE'S valued around 1.6 billion" — false on its face (Whop is; he isn't). The 9s window
  re-transcribed in isolation recovered the words; the generator now asserts on any such gap.

  **The take's restructure:** backstory timeline GONE (bio moved AHEAD of the claims as a
  "subject" beat); he is named in the hook; claim dates became "LATER / LATELY" (labels follow
  the take — real dates return only with primary sourcing); the verdict dropped the kicker and
  the "not false" line from VO — the label stays on screen beside the stamp per the guardrail.

  **Photos:** face (hook + the one sanctioned verdict return, now labelled THE MAN HIMSELF ·
  SOURCES: EXACTLY ONE), lifestyle plate (subject), **the real Companies House record** (its own
  dates: inc. 21 Nov 2017, dissolved 14 Aug 2018 — neutral ink, no red), **Whop's own release
  quoted exactly** — "CO-OWNER AND INVESTOR", APR 2 2025 (⚠ not the brief's "strategic partner"
  paraphrase; the document wins), schools.webp in the flip. ⚠⚠ The three "net worth" captures
  are THIRD-PARTY repackaging videos — they do NOT satisfy the primary-source guardrail and the
  red strips stay. They are wired into the SUBJECT beat as what they honestly are: proof the
  number changes per interview.

  Verified: tsc clean · 0 collisions, 0 caption intrusions · edge 1.7% (margin grazes + one
  slide exit) · snap spikes only at the hard cuts (the mechanic) · mix probe 82.0s, no clipping,
  max −6.6 dB. **Not rendered; still gated on primary sourcing of all four quotes.**

  **HOOK REVISED (user, 2026-09-05): "don't make the numbers in the hook scene alternate —
  make them show up side by side as they are mentioned."** The flicker is gone; each figure now
  lands ON ITS WORD ($85M @ "85", $100M+ @ "100", the "?" @ "fraction") and holds in one centred
  row. ⚠ Those word-level frames are take-specific constants in Hook — re-derive them on any new
  take; only the cue starts regenerate automatically. Row x-positions are measured off rendered
  glyph widths so the gaps are even.

  **RENDERED ON REQUEST (2026-09-05)** → `out/gadzhi_audit.mp4`, 22.1 MiB, h264 1080×1920@30 +
  AAC, **82.03s**. Output verified in its own right: streams probed, no clipping (max −6.5 dB),
  whole-file mean −29.4 dB matching the mix probe, post-VO tail −40.2 dB = bed + fade only.
  ⚠⚠ **A REVIEW COPY, NOT A POSTABLE MASTER** — the four quote slabs carry their red
  "PRIMARY CLIP + DATE REQUIRED" strips on screen, exactly as designed: the sourcing gate is
  still open, and this render says so itself. Served over :3118 + tunnel.

  **BED ADDED (same day):** user — "use the song I used in the last 100bps video". Video 16 is
  unscored, so that is Video 15's **Daphni — "Poly"**, copied as `music_daphni_poly.mp3` (⚠ the
  Y2Mate source filename matches none of vo_trim's SKIP keys — the 005 naming trap — so renamed
  on copy). Measured fresh: VO −27.0 dB, bed −11.2 dB across THIS composition's 82.0s (file is
  138.3s) → **0.051 = 10 dB under**; Video 15's own gain never copied. Full-length probe: no
  clipping (max −6.5), speech windows −28.9 to −30.3 dB throughout, post-VO tail −40.3 dB =
  bed + fade only.

- **2026-09-05 (Video 007 — "PICK A NUMBER", Iman Gadzhi, BUILT)** — new video in the new
  **discrete-scene mode (rule 25)**: hard cuts on the beat grid, 100bps rendering inside each
  scene. `OffCamCelebs/007-gadzhi/`, composition `InfluencerAudit007`, 2530f / **84.3s** @30
  (script 81.1s + outro), cloned from 006 in Node with every carryover fixed (id, out path,
  serve → **3118**). Eight scenes, each a distinct device: photo + flickering figures freezing
  on "?" / a misaligned stack of dated quote-slabs / **the $25M slab CRACKING open** with his
  $5–15M correction rising out (the centrepiece — two half-panels carrying one split layout, so
  the seam is invisible until it opens) / a receding timeline chain / the Companies House card +
  the Whop card with an EMPTY dashed "HIS SHARE: UNKNOWN" fraction / warm fair-column / the
  #B33A2E stamp with the kicker on a clean frame / fixed close.

  ⚠⚠ **NOT RENDERABLE YET, BY DESIGN.** The three net-worth quotes and the correction trace
  through secondary write-ups; the brief requires primary clips with on-screen dates, and a
  quote that can't be primary-sourced is CUT, not softened. Until then every quote slab renders
  a red **"⚠ PRIMARY CLIP + DATE REQUIRED BEFORE RENDER"** source strip from `QUOTES` in
  `data.ts` (`sourced:false`), so an early render indicts itself instead of lying. Also pending:
  `gadzhi_hook.jpg` (the only asset allowed to repeat — once, in the verdict), the VO take,
  and the bed. Guardrails carried into `data.ts`: correction framed as honesty ("credit where
  it's due"); **dissolved ≠ failed** — neutral ink, relocation stated; **the Whop stake gets no
  size** — no pie, no bar, an empty dashed slot only; Nepal in the flip; the verdict rates THE
  CLAIM ("RATING THE CLAIM, NOT THE MAN" on screen).

  Verified: `tsc` clean · **0 collisions, 0 caption intrusions** across 2,530 frames · edge
  contact 1.3% (margin-band grazes at swing extremes + one deliberate slide exit) · snap scan
  clean once the scene-start spikes (the cuts — the mechanic) and the hook flicker (designed)
  are read as intent. Two defects the sweep caught: ExtrudedType left-anchor hang in the hook,
  and the cracked halves parking half-clipped at the frame edges (now ±290, fully in frame).

- **2026-09-03 (Video 006 — BREZ, and the 3D standard)** — built from a content-only prompt with
  a **NEW VISUAL STANDARD: the 100bps 3D treatment**. Logged as **rule 20**; Terminal keeps its
  palette, tiers, type ladder and caption slot, and swaps its geometry, lighting and transition.
  `OffCamCelebs/006-brez/`, composition `InfluencerAudit006`, 2727f / 90.9s @30, 1080×1920.
  Ten beats: hook / claim / source / prices / engine / absence / reject / flip / verdict / cta.
  Timing is **PROVISIONAL** (`scratchpad/cues_provisional.py`, 32 cues, 281 words → 87.3s against
  a 70–85s brief) — regenerate from the transcript when the take lands. **All six photo slots are
  unsupplied**; every one draws a visible SCREENSHOT PENDING block naming its job.

  ⚠ The mechanism is an **ABSENCE**, and the guardrails are unusually tight — he is 21 and clean,
  so nothing may imply wrongdoing. Recorded in `data.ts`: handle only (never his legal name);
  the HypeAuditor figure is shown ONLY to be explained and physically rejected, never as a
  debunk; the $400K figure is always credited to **Whop's own blog**, which is his storefront,
  not an independent source; "not false — unsupported" is on screen with the stamp.

  Four defects found by measurement, not by eye, all logged into rule 20: the scene-local dolly
  (everything after the halfway point rendered ~1.5× oversized — every early still looked fine);
  the inert `translateZ` outside a `perspective` ancestor (the whole transition was silently a
  cross-fade); slabs tinted `paperDeep` rendering as holes; and the hook's prior slabs keyed off
  cue times so tightly that every `exitAt` fell *before* its own `at` — three seconds of empty
  screen that a still of the next beat could not reveal. Also rebuilt to stop duplicating the
  voiceover on screen: the reject and verdict beats now draw the *reason* as a two-panel picture
  instead of setting the caption's own sentence twice.

  Verified: `tsc --noEmit` clean · full-sequence overlap sweep **0 collisions, 0 caption
  intrusions** · snap scan clean of real snaps after two fixes (the verdict stamp was landing on
  an ease-IN, so it hung oversized then jumped; the flip carousel was cross-fading two slabs in
  one slot). Handed back over Studio :3116 + tunnel. **Not rendered** — no render was asked for.

  **Two revision passes the same day.** ① *"a little repetitive… add some variation to the
  direction of the animations, or the type of visual used… the swiftness and fluidity is amazing
  though, keep that"* → **rule 21**: three transition moves on one fixed timing, an entrance
  vocabulary on `Slab` (the old kit derived every slide from `sign(fromRy)`, so the whole video
  entered from the same side), per-beat camera character including two beats that pull back, and
  five beats re-cut onto a different KIND of object — `ExtrudedType` for claim/CTA, a connected
  pipeline for engine, one register with wells for absence, a split slab for verdict.
  ⚠ Learned building `ExtrudedType`: `opacity` below 1 on ANY ancestor forces
  `transform-style: flat`, so fading extruded type from a wrapper collapses it to flat glyphs for
  the entire entrance and then pops into depth on the one frame opacity reaches 1. The fade has
  to live on the leaf layers.
  ② *"ensure that the visuals don't become larger than the screen itself so often"* → **rule 22**
  and the new `scratchpad/edgescan.py`. Measured 12.8% of frames touching the frame edge → 2.5%,
  the residue being objects deliberately exiting.
  ③ *"instead of that sort of folding outwards and fading out animation… simply and smoothly
  leave the screen"* → **rule 23**. The rotate-out was deleted from the kit's API; cards now
  either slide off frame at full opacity or fade in 10 frames.

- **2026-09-03 (Video 006 — REAL VO, BED, PHOTOS, AND THE OPENING CUT)** — the take landed and
  changed the video substantially. 2633f / **87.8s** @30.

  **⚠⚠ THE TAKE CONTRADICTED THE BUILD, AND THE SCREEN LOSES THAT ARGUMENT EVERY TIME.** The
  script had two course tiers ($47 entry, $4,800 invitation-only) and the prices beat was a
  two-column true-scale chart. The take reads a **SIX-STEP LADDER** — "$100 at the entry. Then
  $297, $400, $997, $1,500. Up to $5,400 at the top." Both old numbers are gone from the video,
  the beat was rebuilt as a ladder of widening rungs, the flip beat's closing figure became
  $5,400, and `data.ts` records the old pair under REJECTED so a later pass cannot restore them.
  The take also ADDED a figure the script never had — clippers paid **$2 per thousand views** —
  and ended the engine beat on "the audience feeds **the ladder**", which now ties the two beats
  together on screen. **★ THE LESSON: re-read the transcript for FACTS, not just for wording.**
  A take that rephrases is normal; a take that renumbers invalidates the visuals built from the
  script, and no amount of caption-fixing catches it.

  Transcript artifacts fixed: **"WAP" → "Whop"** (the single most load-bearing word in the
  video — the whole finding is that the figure was published by the platform he sells through),
  **"latter" → "ladder"**, and whisper's split numerals.

  **PHOTOS.** All four supplied are wired as primary sources: the portrait opens the video, the
  brezscales profile evidences the follower count *while the take says it*, the HypeAuditor
  capture is the estimate that gets physically thrown out, and the **[bm] agency site** lands on
  "The agency is real." The two unsupplied slots (the Whop blog post, a storefront capture) were
  **removed entirely, not left as PENDING** — and the beats were rebuilt around their absence:
  the source beat now names the publisher outright and fails an on-screen independence test, and
  the prices beat draws the ladder. ⚠ The HypeAuditor capture reads $8.5K–11.7K where the take
  says "near $10,000" — the screen is MORE precise than the voice, never different, so that is
  correct and must not be "fixed".

  **THE OPENING CUT.** User: *"cut out the entire part before the brez scales picture scene"*,
  clarified as *"the part before the literal picture of his face, not… his insta account"*. So
  the whole HOOK comes out and the video opens on the portrait. Implemented as `CUT_TO` in
  `captions_vo.py` — the full PLAN stays intact as the record of what the take says, and the cut
  is applied to it, so any of it can be restored by moving one tuple. ⚠ The VO is trimmed to
  match via `VO_START` + `<Audio startFrom>`, with a **0.10s lead-in** backed off so the trim
  cannot shave the attack off the video's first syllable. Sync verified by re-transcribing the
  finished mix and regressing ten words against the original: **median offset 8.04s vs
  VO_START 8.02s — sub-frame**.

  **MIX.** Bed is "A Good Man With A Broken Heart" (`music_goodman.mp3`, from 002/003). Measured
  VO −25.9 dB, bed −9.7 dB across this composition's length → **0.049 = 10 dB under the voice**.
  ⚠ 003 used 0.0437 for the SAME track — a different loop against a different read; the
  never-carry rule earns its keep again. Full-length probe: no clipping (max −5.7 dB), speech
  windows −27.5 to −28.4 dB throughout, post-VO tail −39.5 dB = bed + fade only.

  Verified: `tsc` clean · **0 collisions, 0 caption intrusions** across 2,633 frames · edge
  contact 1.7%, all of it cards deliberately sliding out · snap scan clean after making the
  portrait→profile→figure handover strictly sequential (it had measured **34.9× the local
  background**, the largest spike recorded on this channel).

  **RENDERED** on request → `out/brez_audit.mp4`, 18.5 MiB, h264 1080×1920@30 + AAC 48k,
  **87.83s**. Output file verified in its own right, not just by exit code: streams probed, no
  clipping (max −5.3 dB), whole-file mean −28.1 dB matching the mix probe exactly, post-VO tail
  −40.4 dB = bed + fade only. Served over `scratchpad/serve.mjs` — ⚠ its PORT was a clone
  carryover set to **3116, which is the Studio's**; moved to 3117. Range requests confirmed (206
  with a 1 KiB slice) before tunnelling.

- **2026-09-02 (Video 005 — OVERLAP SWEEP + RENDERED)** — user: *"Go over the entire thing, make
  sure that there are NO OVERLAPPING ELEMENTS AT ALL, and then render."*
  Built `scratchpad/collide.py` (whole-sequence sweep for touching blocks and caption-band
  intrusion) and `collide_full.py` (full-res re-check). **Result: 0 collisions.** The two
  reported "caption intrusions" were the caption's own 4-line block, confirmed by eye.
  Three real defects found and fixed on the way:
  **(1) the caption crossfade was an overlap by construction** — both lines bottom-anchored in
  one slot, legibly stacked at 54px; now a sequential handover (rule 19), applied to 004 as well.
  **(2) cutting the judgment screenshot had left the annex with an EMPTY STAGE** from c1 until
  c2's card opened — the same hole the ledger had, missed the first time. The case now
  establishes itself as an S.D.N.Y. docket card from the beat's first frame.
  **(3) the flip's one-at-a-time carousel had a 2-frame window with nothing visible** — retimed
  to an 8-frame low-opacity handover: no legible double, no hole.
  **RENDERED:** `out/kiyosaki_audit.mp4`, **6339f / 211.35s @30, 1080×1920, h264+aac, 50.1 MB.**
  Verified on the output file: VO windows −28.1 to −30.8 dB, post-VO tail −41.8 dB = bed + fade
  only, whole-file peak −7.0 dB, no clipping.
  ⚠ Cloudflare quick tunnels have been returning 530 at their edge all session, so the file is
  served locally only (port 3115).
  ⚠ Before posting: the portrait's source + licence; the commercial bed; 211s against the
  brief's 150–165s; and the story is live — re-verify the quote, the Vanity Fair figures and the
  sealed trustee action.

- **2026-09-02 (Video 005 — ASSETS WIRED, TWO SLOTS CUT)** — user supplied four images and cut
  slots 4 and 5 (the bankruptcy petition and the judgment screenshots). Wired: the portrait
  (hook + verdict reuse), the Rich Dad Poor Dad cover, an NDTV headline card dated 2 Sep 2026
  taken as the brief's own alternative for slot 3, and the apartment block — the last strip-
  labelled ILLUSTRATIVE · NOT HIS PROPERTY, and the portrait's strip changed to
  "SOURCE + LICENCE TO CONFIRM" because the brief's Gage Skidmore / CC BY-SA credit belonged to a
  different file (rule 8g). Plate windows re-shaped to their sources and four beats re-centred.
  **The two cut slots were a REBUILD, not a deletion:** removing the petition left the ledger a
  header over an empty box for its whole first cue, so that card is now the document itself —
  both line items ruled in from the start, figures filling in as the voice reads them, cents in
  their own ink. The judgment beat keeps its explanation card and its FiledFigure.
  ⚠ Still open: the portrait's licence; 211.3s against the brief's 150–165s; commercial bed.

- **2026-09-02 (Video 005 — DENSITY PASS + VO + MUSIC WIRED)** — user: *"make the video easier
  to watch and comprehend… information overload"*, then *"vo is also in public, use the song I
  put in public."*
  **Density:** built `density.py` (blocks-on-screen, see rule 18) and measured six beats at 5–6
  blocks. Fixed by handover rather than shrinking: the four fairness concessions now appear ONE
  AT A TIME in one slot; the verdict findings leave before the INFLATED stamp arrives; the
  Chapter 7 petition leaves before its own two figures; two caption-repeating lines deleted; and
  "≈1,500 units" moved onto the apartment plate's strip. **Zero frames now measure overload**;
  the worst is 4 blocks with a hero.
  **VO:** `vo_trim.py` (287.8s → **208.12s**, 107 gaps), `fw.py` (629 words), captions
  regenerated FROM the transcript → **60 cues**, composition **6339f / 211.3s**.
  Artifacts fixed: *"Rich Dad FOR Dad"* (idx 6) and *"every apartment READ on earth"* (idx 429 —
  it is REIT, and the fairness beat turns on it); every spaced numeral; and **eight merged
  sentences split at word level** so no scene lost a cue.
  **Music:** Aphex Twin, "Alberto Balsalm". 310.8s against a 211.3s cut, no loop. Measured across
  the composition's length: −19.5/−17.7/−15.9/−18.2/−14.9 dB, −16.8 overall — a 4.6 dB spread,
  noticeably more dynamic than the Radiohead bed. VO −27.5 dB → **gain 0.0922** for 10 dB under.
  Probe: VO windows −28.1 to −30.8 dB, post-VO tail −41.8 dB = bed + fade only, peak −7.0 dB.
  ⚠ **THE BED ARRIVED NAMED `YTDown.com_YouTube_Alberto-Balsalm_…mp3`, WHICH MATCHES NONE OF
  `vo_trim.py`'s SKIP KEYS** — it was a live candidate to be picked up and transcribed AS THE
  VOICEOVER, and only escaped because the take happened to be the newer file. Renamed to
  `music_alberto_balsalm.mp3` on the way in. **Any bed lands here named `music_*`.**
  ⚠ COMMERCIAL TRACK — clear or replace before posting. ⚠ All six photo slots still placeholders.
  ⚠ 211.3s against the brief's 150–165s.

- **2026-09-02 (Videos 004 + 005 — SCALE PASS)** — user: *"I need everything to be larger on the
  viewers screen… larger visuals that are more entertaining rather informative."* Applied to BOTH
  videos via `OffCamCelebs/scale_up.py`: piecewise type scaling (×1.42 on micro labels down to
  ×1.10 on heroes), content column to 984, plates to 620–740 wide, captions 44→54. 005 lost a
  fairness card; 004's UK card was re-spaced where TURNOVER and the first column's value ended up
  on one optical line. Recorded as rule 16.
  ⚠ **The verification tool was itself broken** — see rule 17. `extents.py` had been returning
  the full scan band for every frame on the dark theme, so the first "all clear" on 004 was
  meaningless; rebuilt on per-row contrast and both videos re-measured for real. Every beat now
  centres within ±65px except 005's fairness stack, which is a fixed-layout stack that fills
  downward and is centred only once complete — the accepted trade from rule 13d.
  tsc clean on both; no horizontal overflow; guardrail blocks intact and larger.

- **2026-09-02 (Video 005 — "The Guru Who Brags About His Debt", Robert Kiyosaki; NOT rendered)**
  — built from the user's content prompt, then given the 100BPS transition mid-build.
  `OffCamCelebs/005-kiyosaki/`, composition `InfluencerAudit005`, **6276f / 209.2s @30**,
  1080×1920, studio port 3105. Timing PROVISIONAL (3.45 w/s); `HAS_VO`/`HAS_MUSIC` off; all six
  photo slots are placeholders.
  **★ THE INVERSION:** every prior subject inflated an ASSET; this one inflates a LIABILITY,
  because in his framework debt signals sophistication. Played dry, never smug — he is 79 and
  genuinely changed how millions think about money, and the backstory beat exists to make the
  audience like him before the turn.
  **★ 005's MOTIF IS THE CENTS** (004's was the year). What settles this audit is the court
  record, so the tell that a figure came off a filing rather than out of a headline gets its own
  ink: every VERIFIED number renders its cents in teal at half size, arriving a beat late with a
  glow. A CLAIMED figure never gets cents, because it never came from a document.
  Structure: hook (the pairing, $1,200,000,000 against $1,794,405.26, side by side and
  deliberately motionless) → identity → the podcast quote + the $3M/yr chip PLANTED for later
  → the book, with 44M copies drawn as 176 filling marks → Kim Kiyosaki / Vanity Fair + 1,500
  units → the $30–60M BAND on the $1.2B axis (2.5–5% of the width — that IS the finding), with
  the $3M chip paid off as its input → the judgment → **the chapter7 beat** → the petition's
  ledger → $45M in / $1.8M left on one axis → the fairness stack → "It's the pronoun." alone on
  a clean frame → verdict + INFLATED + three caveats → poll → CTA.
  **⚠⚠⚠ THE DEFAMATION GUARDRAIL:** Kiyosaki has NEVER personally filed for bankruptcy — a
  company did. It is the most misreported fact about him. The `chapter7` beat exists for no other
  reason than to say so, and its two rows are drawn as SEPARATE objects with a rule between them
  so his name and the word bankruptcy never share a container. The sealed 2014 trustee action is
  stated as filed and never characterised; Lechter is "accused"; the word "fraud" appears nowhere.
  Fixes from the verification pass: the hook sat 180px low once the portrait left (the figures now
  ride up as it goes); a completely blank handover into the judgment (a FiledFigure whose own `at`
  was 24 frames later than its Move — they must match); and the flip's five-card stack was
  re-centring on every arrival, measured at 3x every other scene's quiet-frame movement —
  converted to a fixed-layout stack per rule 13d, which took it 1.450 → 1.016.
  ⚠ `extents.py` had to be RE-TUNED for the dark theme: at the newsprint threshold of 14 the
  background grid counted as ink and every frame reported the full scan region — the tool
  silently returned garbage. **A measurement tool ported across a restyle must be re-checked
  against a frame whose answer you already know.**
  tsc clean; 9–12 steps on the snap scan, peak frame-to-frame diff 6.95.
  ⚠ **RUNS 209.2s AGAINST THE BRIEF'S 150–165s** — flagged, cut candidates on request.
  ⚠ Story is LIVE as of 2 Sep 2026 — re-verify the quote, the Vanity Fair figures and the sealed
  action before posting.

- **2026-09-01 (Video 004 — RENDERED)** — user: *"render it."* `out/prime_audit.mp4`,
  **6569f / 219.03s @30, 1080×1920, h264+aac, 42.1 MB.** Clean first pass (003's compositor
  seek failure does not recur — 004 carries no video clip). Verified on the OUTPUT FILE:
  VO windows −30.0 to −33.0 dB, post-VO tail −44.5 dB = bed + fade only, whole-file peak
  −8.1 dB (no clipping); the role chips measured continuous inside the mp4 (psnr 29–37 dB
  across half-second steps, i.e. still fading, not popped); and the sign-off is confirmed still
  on screen at 218.5s — the blank-outro bug of rule 14 is gone from the render, not just the
  preview. Served over the range-request host on its own tunnel.
  ⚠ Unchanged before posting: the Radiohead bed is a COMMERCIAL TRACK and needs clearing or
  replacing; no court-order or Companies House image; caption strips read SOURCE TO CONFIRM;
  219s against the brief's 150–165s; and the Refresco status, the administration status and any
  2026 figures need re-verifying.

- **2026-09-01 (Video 004, note 3 — SIX FIXES FROM TWO REVIEW PASSES)** — user, in order:
  the role chips must come in smoothly; drop "AND TRUE / IN 2023" from the hook; the JAN 2022
  visuals glitch; the 2023 in the $1.2B beat makes everything below glitch downward; the Rovell
  panel has a white filter; hold the sign-off longer.
  Causes: the chips and the JAN 2022 stamp were the **same mount-into-layout bug** in places the
  first sweep missed — a horizontal flex row, and `YearStamp`/`Stamp` returning null before
  their cue (rule 13d). The $1.2B "glitch" was NOT a layout shift at all — the year fell 110px,
  further than the gap above it, so it dropped through the line above (rule 13e); measured 34 dB
  between frames in that region before, 1.85 peak after. The white filter was a leftover
  newsprint `rgba(251,250,246,0.6)` on the estimate panel. The sign-off was unmounting at
  `VO_END`, leaving the outro blank (rule 14) — the cta scene now runs to `TOTAL_FRAMES` and
  `OUTRO_HOLD` went 1.8s → **3.6s**; composition 6515f → **6569f / 218.97s**.
  The hook's "AND TRUE / IN 2023" was removed as asked — ⚠ this does not weaken rule 11, since
  the hook's claim is a phrase rather than a dated figure; every dated FIGURE still carries its
  year. Re-scanned: **9 steps**, peak frame-to-frame diff 5.60, and the reported beats measure
  max 0.43 (chips) / 1.60 (JAN 2022) / 1.85 ($1.2B) / 1.11 (CTA hold).

- **2026-09-01 (Video 004, note 2 — RESTYLED "TERMINAL", COLOUR RESTORED, MOTION DEBUGGED)** —
  three requests in one: colour in the photos, fix the snapping animations, and a modern/techy
  look instead of the newspaper. New palette, rounded geometry, Space Grotesk in place of
  Playfair, a static grid under two drifting lights, photos in full colour, and the leftover
  light-theme colours retired (one of which had put near-white text on a near-white ground once
  the sub-line moved). Motion: a second easing (**GROW**) for every size and alpha, a **Reveal**
  wrapper so a Move never mounts into flow layout again (17 stacks), the per-scene push moved
  off the type and onto the ground, and the caption's hard swap replaced by a crossfade.
  Measured with a new frame-sequence scanner: **58 → 8 steps**, peak frame-to-frame difference
  5.66, text regions stable at 65-68 dB. All recorded as rules 1b, 8f and 13. tsc clean.

- **2026-09-01 (Video 004, note 1 — VO, PHOTOS AND MUSIC WIRED; NOT rendered)** — user: *"I put
  most of the pictures into the public folder. I need you to add them to the video and also use
  radiohead as the song."* The take was in `public/` too, and the bed cannot be honestly mixed
  without it, so the full VO pipeline ran as well: `vo_trim.py` at NATIVE 44.1 kHz (286.4s →
  **215.78s**, 103 gaps), `fw.py` (672 words), captions **regenerated FROM the transcript** →
  **69 cues**. Composition now **6515f / 217.17s**.
  **Transcript artifacts fixed:** "Darren **Ravel**" → ROVELL (a misheard proper noun that is the
  on-screen byline for the one figure we do not own); every grouped or decimal numeral spaced
  ("1 .2", "4 .3", "20 %", "85 ,000"); "Prime hydration" lower-cased. **Three merges split at
  WORD level** because each would have cost a scene a cue and broken its anchors — "Now the
  harder part, the billion dollars was 2023", the globally/down-from sentence, and the
  fairness opener. **The take also ADDED a cue** — "The caveats." became its own sentence — so
  every verdict caveat row moved up one index; scenes.tsx re-pointed.
  **Photos (5 of 7 supplied):** hook portrait, the emptied-shelf 2023, the full Prime shelf
  2026, the gold bottle, and the Congo mark. All re-encoded to clean names on the way in (two
  were .avif/.webp; the originals carry spaces and apostrophes, which cost a render on 003).
  Three judgement calls, all flagged: **(a)** the slot-3 file is named "now **2026**", not the
  2025 the brief assumed — the year strip follows the FILE, since mislabelling a year in a
  video about years would be the worst available error; **(b)** the supplied slot-2 image is an
  emptied shelf with **Gatorade** still on it and no security tags, so it moved off "British
  supermarkets put security tags on individual bottles" (where the picture would have quietly
  contradicted its own caption) onto "Aldi sold out in half an hour", which is exactly what it
  shows — and the pair now reads EMPTY 2023 → FULL 2026; **(c)** the Congo asset is a 200px
  **logo**, so it is set as a MARK (contained, white ground, grayscale only, 300px plate) rather
  than run through the wire-photo grade — recorded as rule 8e.
  No court-order image was supplied, so that beat got its own visual instead of six seconds of
  a PHOTO PENDING block (rule 8d): a docket header built only from `data.ts`, with the restore
  instructions in a comment. `companies_house.png` is still unused.
  **★ MUSIC — the Radiohead bed, gain re-measured from scratch:** 267.5s against a 217.2s cut,
  so no loop; measured ACROSS THE COMPOSITION'S LENGTH at −16.4/−15.7/−17.5/−17.9/−18.4 dB,
  −17.1 overall. VO −28.6 dB → 11.5 dB hot → **0.0841** for 10 dB under the voice.
  ⚠ **001 used 0.093 for the SAME TRACK** — its take was −27.1 dB and the bed measured −16.5 dB
  over a 122s cut. Same song, different read, different length, different number: a multiplier
  never crosses takes, tracks OR cut lengths. Full-length probe: VO windows −29.9 to −33.7 dB,
  post-VO tail −44.6 dB = bed + fade only, whole-mix peak −8.0 dB, no clipping.
  ⚠ **COMMERCIAL TRACK — clear it or replace it before posting.**
  ⚠ **RUNS 217.2s AGAINST THE BRIEF'S 150–165s.** The real take confirms the estimate; cut
  candidates still stand and still need the user's call.

- **2026-09-01 (Video 004 — "The Billion-Dollar Drink That Isn't His", Logan Paul / Prime;
  NOT rendered)** — built same-day from the user's content prompt.
  `OffCamCelebs/004-logan-paul/`, composition `InfluencerAudit004`, **6438f / 214.6s @30**,
  1080×1920. Timing is PROVISIONAL (paced at 3.45 w/s in `cues_provisional.py`) — regenerate
  from the transcript when the take lands. `HAS_VO`/`HAS_MUSIC` off; all 7 photo slots are
  visible PHOTO PENDING placeholders.
  **★ THE MECHANISM IS NEW FOR THIS CHANNEL: the gap is with the CALENDAR, not the evidence.**
  Bloomberg's billion and the court's 20% are both real; the finding is that a 2023 snapshot is
  still marketed in the present tense in 2026. So **every dated figure carries its year on
  screen, large** — recorded as standing rule 11, with the YEAR STAMP as the video's motif.
  Structure: hook (claim + CLAIMED + "AND TRUE" + the 2023 stamp) → the claim (identity, his
  net-worth line, the $8–10B quote, the gold bottle) → two questions as a ledger → the rise
  (Jan 2022 dateline → the frenzy plate → three retail slips dealt in → $1.2B/2023, VERIFIED,
  Bloomberg) → owners (a dashed pie that turns and answers nothing, then two reports that
  disagree) → split (court order → a 20/20/60 stacked bar on ONE axis, Congo Brands the black
  majority) → Congo (plate + the three jobs) → HE IS / HE IS NOT columns → the turn (2023 stamp
  → the 2025 clearance plate, framed identically to the 2023 one) → UK filings (solid frame) →
  the Australian arm (black scope banner) → the global estimate (dashed frame) → flip (the
  rescale inversion, then 2023 / 2026 side by side) → verdict + INFLATED (#C98A2B) + the three
  caveats → an unresolved slider → CTA.
  **⚠⚠⚠ THE DEFAMATION GUARDRAIL:** the administration is the AUSTRALIAN SUBSIDIARY, never
  Prime globally. The `aus` scene carries a pinned black banner reading "AUSTRALIAN SUBSIDIARY
  ONLY / Not the parent company. Not Prime globally." for the whole beat, with the figures
  INSIDE the scoped frame. Recorded in `data.ts` in full.
  **UK filings and the Circana/Rovell retail estimate are drawn as visibly different objects** —
  solid frame + VERIFIED vs dashed frame + ESTIMATE + named source — and never share an axis.
  Fixes from the verification pass, all found by MEASURING (see rule 12): every beat was
  top-heavy (offsets −121 to −366) and was re-centred; growing blocks moved to centred
  containers; the flip's rescale was re-eased (EASE finished it in 15 frames and the "before"
  axis was never legible); and the verdict left the CAVEATS header alone on screen for ~5s
  because the findings exited a cue too early. tsc clean; 60+ stills verified.
  ⚠ **RUNS 214.6s AGAINST THE BRIEF'S 150–165s** — flagged with cut candidates, awaiting the
  user's call. ⚠ Re-verify before posting: the Refresco suit's status, the administration
  status, any 2026 figures, and whether the court order has been amended or sealed.

- **2026-08-31 (Video 003 — RENDERED)** — user: *"then render."* `out/tate_audit.mp4`,
  **6085f / 202.88s @30, 1080×1920, h264+aac, 28.9 MB.** Two failed attempts first: the
  compositor could not seek the supplied stream rip (*"No frame found at position"*, dead at
  f779), and a whole-file CFR re-encode only pushed the failure from 19.6s to 22.5s — fixed by
  cutting the clip to the 7.0s span the video actually uses (rule 10). Verified on the OUTPUT
  FILE, not the preview: VO windows −27.1 to −30.1 dB, his clip in the hold −29.1 dB, post-VO
  tail −38.8 dB = bed + fade only, whole-file peak −6.1 dB (no clipping); and the hold's picture
  measured moving inside the mp4 itself — psnr 26.8 / 28.9 / 27.5 dB between frames one second
  apart, never `inf`. Served over the range-request host on its own tunnel.
  ⚠ Unchanged before posting: caption strips still read SOURCE/DATE TO CONFIRM; no court photo;
  202.9s against the brief's 150–165s; UK appeal + Romanian status to re-verify.

- **2026-08-31 (Video 003, note 12 — MUSIC WIRED)** — user: *"use the same song you used in the
  last video."* That is 002's bed, **"A Good Man with a Broken Heart"** (`music_goodman.mp3`,
  originally from 100BasisPoints Video 11). **★ 002's REPAIRED LOOP WAS NOT REUSABLE** — it is
  160.0s against a 202.83s cut, so the fault the repair fixed would simply have returned. Rebuilt
  from the source: usable flat region re-confirmed as [0–103s] (−9.0 dB at 95–103s, −14.6 at
  103–111s, −24.9 at 111–119s — the baked-in fade), crossfaded 5s into itself twice and trimmed
  to **205.0s** as `music_goodman_loop3.mp3`. Verified flat across the composition: −11.0 /
  −9.1 / −10.5 / −9.3 / −9.9 dB over five windows, −9.7 dB overall, no tail fade.
  **Gain re-measured, not carried:** VO −27.2 dB, bed −9.7 dB = 17.5 dB hot at unity → **0.0422**
  for 10 dB under the voice (002's 0.0437 was for a differently-built loop). Full-length probe:
  VO windows −27.1 to −30.0 dB throughout, his clip in the hold −28.9 dB (bed sits 7.5 dB under
  him — the hold no longer reads as a dropout), post-VO tail −41.2 dB = bed + fade only (it was
  −62.4 dB with no bed, which is the proof the bed is actually playing), whole-mix peak −6.1 dB,
  no clipping.

- **2026-08-31 (Video 003, note 11 — THE CLIP WAS FROZEN)** — user: *"it seems like the video of
  tate isn't moving. Ensure that it is actually playing."* They were right and my earlier
  verification was wrong. `startFrom` adds to the current frame rather than seeking, so at frame
  693 the clip was asked for 39.7s of a 31.08s file and held its last frame. Fixed by wrapping
  the OffthreadVideo in `<Sequence from={at} layout="none">`. Consecutive plate crops now differ
  at psnr 10-30 dB where they were `inf` (pixel-identical) before. Both lessons folded into
  rule 10 — the Sequence requirement, and never eyeballing motion.

- **2026-08-31 (Video 003, note 10 — NOTHING LEAVES BEFORE IT IS OFF CAMERA)** — user: *"make
  sure the picture in the World titles — and a biggest fight cheque of ≈$100,000. scene doesn't
  disappear until it is off camera."* Two causes, both folded into rule 9: the photo was gated on
  `idx === active`, and THE EXIT's 16-frame beat made `active` race two nodes ahead while the
  kickboxing card was only ten frames into its pan — replaced with a geometric on-screen test;
  and STEP 640 against a 540 card never carried the card clear of the frame, so the fade was
  finishing the job — STEP 700, fade moved to next anchor +30 over 16f. Verified by hstacking
  frames 1762/1770/1778/1786/1794/1802: the photo is still in the card at the left edge, and
  only goes when the card itself has cleared the frame.

- **2026-08-31 (Video 003, note 9 — THE CLIP PLAYS WITH SOUND)** — user: *"I want the andrew
  tate video to play in within this video. Make it play in the format and scene in which it is
  now, and just temporarily stop the VO while its playing (with audio)."* Staging untouched;
  added an 84f (2.8s) hold at VO frame 762 (25.40s, in the breath after "...world's first
  trillionaire"). VO split into two `<Audio>` at that frame and resumed from the same sample;
  scene graph moved onto VO time so the page freezes at its full pose; clip's in-point pulled
  back to 17.00s so it reaches 19.30s exactly as the hold opens; its audio extracted to
  `public/clip_trillionaire.wav` and played as its own Sequence. Then, same session, the user:
  *"make sure that the video of him saying it actually plays as well, and also leave a little
  more space before and after he says it."* Hold widened 84f → **120f (4.0s)**, clip window
  18.90-22.90s, in-point pulled to 16.60s (frame 498) — 0.54s of pad before the sentence and
  1.30s after; gain re-measured over the SPEECH only (the pads had dragged the whole-file mean
  2 dB low) to **0.41**. Picture motion across the hold verified by hstacking plate crops from
  frames 764/790/820/850/878 — his head and mouth move. Composition 5965f/198.8s →
  **6085f/202.83s**. Recorded as standing rule 10. Full-length mp3 probe: his sentence -29.7 dB
  between VO -27.7 and -30.3, whole-mix peak -6.1 dB, post-VO tail -62.4 dB.

- **2026-08-31 (Video 003, note 8 — REAL ASSETS WIRED)** — user supplied four assets and asked
  for all of them to be used, making space if needed; then: *"for the worlds first trillionare
  video, I want you to actually play the right part and ensure that you're showing the right
  side of the screen since thats where he's sitting."* Wired: the Adin Ross clip on THE CLAIMS
  (transcribed on its own audio — he says the line at 19.44s, so the plate opens at 19.3s =
  frame 579 — and cropped to his tile, x 1018-1752 / y 296-804 of the 1920×1080 frame, which
  excludes the chat column, the co-host and the Stake/ADINROSS branding); the fight-era photo
  on KICKBOXING; the self-published jet photo on ROMANIA, echoing once at 0.8 dim on the FLIP;
  the Real World pricing page on PEAK, **moved off THE PITCH** because the page sells at $99
  where the take says $50 (rule 8c). The two court slots were never sourced, so they came out
  and the judgment beat got its own card back at the front of the scene (rule 8d). Made space
  by re-solving the backstory timeline: the band is no longer sized for a photo card on both
  sides of the spine, and the camera dollies vertically so every card lands on one optical
  centre (rule 9). New `crop`/`nat` plate path (rule 8b). tsc clean; verified in stills at
  frames 700/760/1300/1420/1500/1750/2060/2200/2400/4560.
  ⚠ STILL OPEN: no court photos; every caption strip still reads SOURCE/DATE TO CONFIRM;
  003 runs 198.8s against the brief's 150-165s; no music bed supplied.

- **2026-08-31 (Video 002 — VO, PHOTO + MUSIC WIRED; NOT rendered)** — user supplied the take
  and the portrait, and asked for the bed from "the last 100bps video". That is **Video 11**
  (newer than Video 10, which I checked first): `music_goodman.mp3`, "A Good Man with a Broken
  Heart". Full pipeline in order: `vo_trim.py` at NATIVE 44.1 kHz (224.4s → **155.5s**, 93
  gaps), `fw.py` (506 words), captions **regenerated FROM the transcript** → 63 cues.
  Composition **4708f / 156.9s** — the script that read ≈165s provisionally came in at 155s,
  inside the brief's window.
  **Transcript artifacts caught:** whisper's period after "Mr" **split "MrBeast" across a
  sentence boundary** (merged back); "2 .6 billion" written with a space in the decimal (three
  places); the take MERGED the Beast Industries + outside-CEO lines into one sentence, the
  "most-watched creator" couplet into one, and the flip's opening two lines into one, while
  SPLITTING the whole verdict block into fragments ("The paper wealth." / "Real." / "But an
  estimate." / "Not a filing."). Every affected scene was re-pointed: the timeline dropped
  **8 nodes → 7**, audit-1's kicker moved cue 8 → 7, the backstory chip cue 8 → 7, and every
  flip anchor shifted down one index.
  **★ BED REPAIRED BEFORE USE — two faults in one track:** it is **118.7s against a ~157s cut**,
  and it carries a **baked-in fade from ~104s** (last 10s measured −23.1 dB vs −10.1 overall).
  Rebuilt as `music_goodman_loop.mp3` = [0–103s] crossfaded 5s into [0–62s] = 160.0s, verified
  flat at −10.0 dB across the composition and −9.4 dB in the tail. *Checking length alone would
  have shipped 37s of silence; checking level alone would have shipped a dying close.*
  **★ GAIN RE-MEASURED, NOT CARRIED:** VO −27.2 dB, bed loop −10.0 dB = **17.2 dB hot** at unity
  (001's Radiohead was only 10.6 hot) → **0.0437** for 10 dB under the voice. 001's 0.093 would
  have left this bed just 3.4 dB under — the clearest case yet for the never-carry rule.
  Mix verified full-length: mean −29.5 / max −5.9 (no clipping), speech windows −29.0…−32.0,
  post-VO tail −40.5, and the crossfade seam at ~103s measured continuous.
  Photo: user's editorial red-carpet shot (416²) cut out with `cutout.py` and graded — matches
  the brief's licensing rule (not a thumbnail/Beast Games still). ⚠ Licence still unverified.
  ⚠ Still open: WSJ screenshot + optional Feastables shot are placeholders; live figures
  (valuation, subs, profitability) need re-verifying before posting.
- **2026-08-30 (Video 002 — "The Billionaire With Negative Money" / MrBeast; BUILT, not
  rendered)** — `OffCamCelebs/002-mrbeast/`, composition `InfluencerAudit002`, **4970f /
  165.7s PROVISIONAL** at 1080×1920@30. Studio port **3101**. Built in the account style
  (standing rules 1–7); kit, tier system, section tabs, stamp and CTA carried from 001 as
  series furniture, every data device new.
  **★ THE FORMAT INVERTS:** 001 audited a man who claims MORE than the evidence supports, 002
  a man who claims LESS. Verdict is **LEGIT** (`#3F8F5C`, added to the theme) and is NOT
  hedged. The mandatory FLIP beat is its own scene (`flip`) — illiquid ≠ poor, the stake is a
  strategy not a hardship, and the bank balance is named on screen as the one number taken on
  trust.
  **New devices (nothing reused from 001):** hook is a series callback — 001's greyed INFLATED
  stamp above this subject's opposite claim, the only time the callback appears; the thesis
  frame puts the CLAIMED WSJ quote card beside the ESTIMATE $2.6B in visibly different
  treatments; the timeline is HORIZONTAL with a right-panning camera and cards alternating
  above/below the spine (001's was a vertical traveller); the money shot is two FY2024 segments
  on ONE signed axis with the zero line drawn — Feastables +$20M above it, media −$80M below —
  so the inversion lands that the famous half is the loss-making half; the $2.6B then comes
  apart into visible arithmetic (51% × $5B =) with every operand ESTIMATE-tagged; the flip
  shows a 1% slice detaching from the stake and resolving to $52M; the poll is a spectrum,
  not 001's two buttons.
  **★ CAUGHT IN REVIEW — fabricated figures:** the first cut of the losses beat drew −$45M and
  −$38M bars for 2023/2022. Those numbers do not exist in the source material (only FY2024
  −$60M and the ≈$500M five-year cumulative are reported). Rebuilt so 2022/2023 are equal
  BINARY loss markers with an explicit "no public per-year figure" stamp. **Standing lesson:
  never let a chart's geometry assert a magnitude the sources do not give** — an invented bar
  length is an invented figure.
  Also fixed in review: a `scale()`d stamp still occupied its full un-scaled width in the hook's
  flex row (transforms do not shrink layout footprint) and wrapped the text beside it; the
  arithmetic row overflowed the right edge; the flip's $52M collided with the reinvestment
  card; the poll's spectrum line ran through its own labels.
  ⚠ Open: VO + music not yet supplied (`HAS_VO`/`HAS_MUSIC` false, `MUSIC_GAIN` is 001's value
  as a placeholder — **re-measure for this take**). Photo/WSJ/Feastables assets are
  placeholders; licensing note from the brief carried into `data.ts` (no YouTube thumbnails or
  Beast Games stills — editorial/licensed only). Timing is script-paced and MUST be regenerated
  from the transcript. **★ At natural pace the 500-word script runs ≈165s against the stated
  140–155s target** — flagged to the user; the real take settles it.
- **2026-08-30 (Video 001 — FINAL RENDER, on request)** — `out/grant_cardone_audit.mp4`,
  h264 1080×1920@30, **3667f / 122.283s**, 20.4 MB, AAC 48 kHz stereo. Verified on the OUTPUT
  FILE, not the timeline: frame count matches the composition exactly; full-render volumedetect
  mean −29.4 / max −6.2 dB (no clipping); speech windows −27.9…−30.3 across hook/backstory/
  audit2/verdict (VO dominant throughout); post-VO tail 120.5–122.2s at −40.2 dB = bed + fade
  only. Carries the real VO, the Radiohead bed at the measured 0.093 (10 dB under), the
  cut-out and graded hook photo, the rebuilt ITEMS UNDER AUDIT assembly, and the whole dead-air
  sweep. Served over `scratchpad/serve.mjs` (range requests) through its own tunnel.
  ⚠ Still open before posting: hook-photo LICENCE unverified; commercial Radiohead bed will
  likely trip Content ID; trial date carries an "as of Aug 2026" kicker worth re-checking.
- **2026-08-30 (Video 001, notes 7–9 — buttons, pre-mount, dead-air sweep)** — three notes.
  **(7) YES/NO "too quick and weird":** the real fault was a LAYOUT SHIFT, not speed — the
  buttons mounted via `Move`, which renders nothing before its start frame, so in the centred
  flex row YES sat centred and jumped sideways when NO appeared. Both are now always rendered
  (transform/opacity only), 30f each with a 12f stagger, starting after the card settles.
  Recorded as the pitfall under rule 6.
  **(8) "the little boxes appear static, then the animation starts":** `Move` pre-mounts 2
  frames early so a fading element is in the tree at opacity 0 — but with `fade={false}` that
  parked a fully-visible panel at its start pose for ~3 static frames before it moved. Pre-mount
  is now skipped for non-fading elements, and the panel lead was cut 8f → 4f; it is in motion
  from the first frame it exists.
  **(9) Dead-air sweep against the REAL VO frames** → standing rule 7. Fixed: the claims scene
  sat on an EMPTY header card for ~4s on cue 0 (now a "THE FACE OF 10X" plate with a slowly
  easing mark, handing over to the checklist — deliberately carries NO figure, since an untiered
  number would break the tier system); the quote plate moved forward to cue 3 ("And in 2019, he
  told investors this:"), killing a 3.4s hold and improving the sync; the backstory camera now
  keeps creeping after the last node instead of freezing ~4s; the estimate band's hatching
  scrolls; the $5B pool keeps dispersing slowly instead of locking; the projection line is now
  STRUCK THROUGH slowly while the SEC letter is read (narratively exact — the removal being
  marked) before it falls off the page, filling a 4.7s hold; the social post creeps like a feed
  through its 4.4s hold; the CTA's rule draws out. Plus the global key-light drift. — user: the scene must be
  smoother, the box must never snap as it extends downward, and the little boxes should slide in
  *with their background*, like a box entering the bigger box. Diagnosis: each row was a
  transparent strip with only a bottom rule, wrapped in a `Move` — so the card's height STEPPED
  the instant a row mounted, and only text appeared to travel. Rebuilt as: `ClaimRow` is now a
  real panel (own gradient ground, 1px border, 8px radius, inset top highlight + drop shadow,
  fixed 122px height); each sits in a `RowSlot` whose height eases 0→138 over 30f with
  `overflow: hidden`, so the card grows downward on the long-tail curve and the panel is CLIPPED
  by the card edge as it glides in from x:470 over 34f, 8f after its slot starts opening.
  Added a `fade` opt-out to the shared `Move` (kit.tsx) — these panels enter at full opacity
  since the clip does the reveal. Logged as standing rule 6.
- **2026-08-30 (Video 001 — HOOK PHOTO IN)** — the user dropped
  `Grant-Cardone-Cardone-University-copy.webp` (982², press portrait on a light gradient) into
  `public/`. Cut out with `shared/tools/cutout.py` (rembg `isnet-general-use` + alpha matting,
  CPU) → `public/cardone_hook.png`; edges/hair verified on a dark composite before wiring.
  **The cutout was necessary, not cosmetic** — the source's light-gray background would have
  read as a lit rectangle on the near-black field.
  **Grade (the channel's treatment for a supplied portrait):** `saturate(0.62) contrast(1.1)
  brightness(0.84) hue-rotate(-6deg)`, plus a floor vignette and a 6% cool wash inside the card,
  so the subject sits IN the panel instead of glowing on top of it. `objectFit: cover` at
  `50% 14%` keeps the face high in the frame. It appears in the hook and returns exactly once
  in the verdict — nowhere else, per the brief.
  ⚠ **LICENCE NOT VERIFIED** — user-supplied promo/press shot, flagged in `data.ts`. Confirm
  usage rights before posting; this is not a checked free licence.
- **2026-08-30 (Video 001 — VO + MUSIC WIRED; NOT re-rendered)** — the user dropped the
  ElevenLabs take ("Russ — Deep, Smooth and Articulate") into `public/` and asked for the
  Radiohead bed from the older 100BasisPoints videos. Full VO pipeline run in order:
  `vo_trim.py` at the take's NATIVE 44.1 kHz (171.9s → 120.88s, 70 gaps), `fw.py` word-level
  transcript (378 words), then **captions regenerated FROM the transcript** by the channel's own
  `scratchpad/captions_vo.py` → `src/audit/cues.ts` (50 cues, asserted non-overlapping). Every
  cue is now anchored to real word timestamps; a caption HOLDS to the next cue's start so it
  never blinks out over a breath. Composition: **3667f / 122.2s** (was 4182f of provisional
  script pacing).
  **Transcript artifacts caught and fixed** (the class CLAUDE.md warns about): whisper heard
  "our rating" as **"are rating"** — screen says "Our rating: INFLATED."; the take MERGES
  ("Grant Cardone, 15 million followers… he calls himself a billionaire") and SPLITS
  ("Claim one." / "Billionaire.") differently from the script, so cue→scene index maps were
  re-pointed (verdict trial-date 6→7, question "who's next" 1→2); the spoken "real" after
  "The businessman" falls inside a 0.74s gap whisper drops, so that cue spans the gap.
  **Retimed for the real take**, which is much faster than the provisional pacing: the hook
  title card now enters on "Most investors…" (there was no room left on "So let's audit it." —
  it would have exited before entering); the audit-1 "← the gap" label moved onto the estimate
  line; the verdict list-exit/caveat handover was re-spaced so the INFLATED stamp holds ~1.7s
  instead of flashing by.
  **★ MIX, measured (never ear-guessed):** VO mean −27.1 dB / max −3.4; bed −16.5 dB over the
  cut (10.6 dB hot at unity) → **gain 0.093 = 10 dB under the voice**. Bed tail 100–122s
  measured −17.7 dB, so no baked-in fade. Verified on a full-length mp3 probe: mix mean
  −29.4 / max −6.2 (no clipping), speech windows −29.2…−30.4 (VO dominant throughout),
  post-VO tail −40.5 falling to −55.5 at the close = bed + fade only.
  **PROPOSED CHANNEL BED BAND: 8–12 dB under the voice** (this cut sits at 10) — a talk-dense
  forensic format wants the bed further down than Style 3's 3–8. Confirm by ear before it
  becomes a standing rule.
  ⚠ `out/grant_cardone_audit.mp4` is now STALE (silent, old timing) — no re-render was
  requested. ⚠ The licensed hook photo is still a placeholder.
- **2026-08-30 (Video 001 — FIRST RENDER)** — user asked for a render, then for the add-on work
  to be undone back to "the original Style 3"; on being asked which state that meant (this video
  has never been in Style 3 — its only earlier state was the paper-white pilot), the user
  **retracted the revert**: "forget about what I said with the undoing." The current build —
  dark investigative field, violet CLAIMED, iso-extruded 3D visuals, the density and
  no-overlap passes — is therefore the accepted state of the video and of standing rules 1–5.
  Render: `out/grant_cardone_audit.mp4`, h264 1080×1920@30, 4182f / 139.456s, 20.3 MB;
  ffprobe-verified against the composition. **SILENT** — no VO or music is wired yet.
  ⚠ The licensed hook photo is STILL A PLACEHOLDER in this render (flagged per the brief).
- **2026-08-29 (Video 001, chart rebuild + spacing sweep)** — user: the bar chart "looks
  messed up"; plus a full no-intersection / breathing-room sweep. Chart: the estimate band no
  longer draws through the bar — it is two slab segments that STOP at the bar's front and side
  faces (still one shared axis); the cuboid's front gradient was brightened (the near-black
  bottom was melting into the field); a $0 floor line grounds the composition; the ground
  shadow was tightened under the true footprint; the ESTIMATE chip moved below the band; "the
  gap" label moved clear of the side face. Spacing: audit-2's violet block moved off the
  staggered rows (was touching) and its labels pulled inside the right margin; the verdict
  photo↔stamp gap widened; the falling 15% line now fades fully out (its ghost lingered near
  the appeals card). Breathing-room floor going forward: ~40px minimum between neighbors,
  clearance checked against the WORST-case pose (stagger, tilt, rotation), not the resting one.
- **2026-08-31 (Video 003, note 5 — PHOTO ADDENDUM, 7 slots)** — supersedes "no photos needed"
  in the backstory note. Built a shared `Plate` component carrying the whole treatment (standing
  rule 8) and wired all seven slots. Only slot 1 exists as an asset; **2–7 render visible dashed
  PHOTO PENDING blocks naming the file and its job**, per the brief's fallback.
  Placements: **1** hook + the single permitted reuse under the verdict stamp · **2** the claim
  in his own post, on the trillionaire line, given the upper half of the frame with the list
  pushed down so the beat never crowds · **3** the TRW signup page · **4** fight-era photo ·
  **5** the lifestyle photo, plus its permitted dimmed echo in the FLIP on "he sells courses on
  the strength of that image" · **6** Westminster exterior on the December 2024 line · **7** the
  optional Bucharest wire photo, gated to the RULING line only so it can never reach the SCOPE
  beat. **No photo touches the convert/years beats** — the 380,000-year line stays undecorated.
  **⚠ ONE DEVIATION, DELIBERATE:** slot 3 was specced for "THE CLAIM, on the subscription line",
  but in this script the $50/month line lives in the BACKSTORY. Placed where the VO actually
  says it — putting it in the claim beat would have shown the pricing page while the voice was
  talking about crypto.
  **⚠ CAPTION PROVENANCE:** slot 1's strip reads "PRESS PHOTO · SOURCE TO CONFIRM" because the
  supplied file's origin is unknown. Not invented. Needs filling before posting.
  In the timeline the photo is drawn **only for the node the camera is on**, so a pan can never
  put two photos on screen; the band was resized (900 → 1000px, spine re-centred) after the
  taller photo cards clipped against its overflow.
- **2026-08-31 (Video 003, note 4 — tag qualifiers stripped; hook enlarged and centred)** —
  user: *"remove all the ai bullshit like the 'his words' with the dash"*, and make the hook's
  visuals larger and **vertically** centred. Every dash-qualifier removed channel-wide in this
  video (recorded as standing rule 2c); the legally-required "civil ruling" note moved to a
  source-credit line under the figure, and `BigFigure` gained a `credit` prop for exactly that.
  Hook: portrait 340×420 → **440×540**, TRILLIONAIRE 90 → 98, the scale bar 48 → 70 tall, and
  every group re-centred on **y≈760 — the middle of the page ABOVE the caption slot**, not the
  middle of the raw 1920 frame (centring on 960 would have pushed everything into the captions).
  The counted mark still sits at the bar's shared origin — that is the entire point of the shot —
  but its caption is now set centred beneath it. Also nudged the "$1 TRILLION" label off the
  bar's extruded top face, which it cleared by only 4px (rule 5's depth-budget trap).
- **2026-08-31 (Video 003, note 3 — VO + PHOTO IN; photo added to the HOOK)** — user supplied
  the take and the portrait and asked for the picture in the hook. Pipeline: `vo_trim.py` at
  NATIVE 44.1 kHz (266.1s → **197.5s**, 97 gaps), `fw.py` (600 words), captions **regenerated
  FROM the transcript** → 57 cues. Composition **5965f / 198.8s**.
  **The photo is now a PRESS PICTURE in the hook**, with TRILLIONAIRE set beneath it as its
  caption — one object, which exits before the scale comparison arrives (rule 2b). Cut out with
  `cutout.py`, then run to **grayscale with lifted contrast**, the way a paper prints a wire
  picture; a full-colour sunset portrait fought the ink-on-paper page. It returns once in the
  verdict, nowhere else.
  **Transcript artifacts caught:** "Washington, D .C." — the period after "D" SPLIT the sentence
  in two (merged back); "Devin and Cornwall" mis-heard for **Devon** (corrected); whisper puts a
  space inside every grouped numeral ("$600 ,000", "37 ,000", "380 ,000", "2 .7"); and the take
  ran **"Our rating unsupported"** straight into **"the caveats"** as ONE sentence — split at
  word level so the stamp still lands on "unsupported" and the caveat card starts on "the
  caveats". The take merges hard: hook 0+1, scope 0+1, court 0+1, ownwords 0+1 and flip 0+1 each
  became one sentence, so **five scenes lost a cue and every anchor in them moved**; the
  backstory dropped 8 nodes → 7; the verdict went 12 cues → 10 and was fully remapped.
  **★ ONE FACT CHANGED ON SCREEN TO AVOID CONTRADICTING THE VO:** the rate card used to read
  "≈£2.6M a year" (the accurate £21M ÷ 8). The take says "about £2.5 million a year", so either
  figure would either contradict the voice or mis-state the arithmetic. It now shows the
  DERIVATION — **"£21M ÷ 8 years"** — which is exact and contradicts nothing.
  ⚠ **RUNS 198.8s AGAINST A 150–165s BRIEF** — the take is slower than the provisional pacing
  (3.04 w/s). Flagged with cut candidates. ⚠ **NO MUSIC SUPPLIED** — `HAS_MUSIC` left false
  rather than assuming a bed; measure against this take when one lands (VO mean −27.2 dB).
  ⚠ Photo licence unverified; court screenshot still a placeholder; the two legal facts still
  need re-verifying.
- **2026-08-31 (Video 003, note 2 — DE-CRAMMED, 11 scenes → 16)** — user: too much on screen at
  once; wants more scenes carrying simpler visuals in the newspaper register, and all of it
  smooth. The audit and scale beats were split so each carries ONE idea: `audit1` became
  **court / revenue / tax**, `audit2` became **quotes / seizure / ownwords**, and `scale` became
  **convert / years**. Recorded as standing rule 2b.
  **New newsprint furniture, deliberately simple and reusable:** `BigFigure` (a kicker, one huge
  figure, one tier tag — alone on the page: £21M, ZERO, ≈£2.7M, 37,000×, 380,000); `PullQuote`
  (oversized quote mark, serif italic, a rule that draws, attribution beneath — the judge's two
  phrases now land one at a time instead of stacked); `Rule` (a hairline that draws out);
  `Kicker`/`Headline`. The section head now runs a column rule to the right, as a paper does.
  **Smoothness:** every beat is wrapped in one shared `Scene` component with an identical eased
  exit (fade + 120px rise over 22f), so the whole film reads as a single continuous move rather
  than sixteen separate animations. Within a scene, where two groups must share it, the first
  exits before the second arrives (convert's pair → the multiple; years' rate → the total).
  The hook lost its redundant "ONE SCALE" and "the claim" labels — the bar now carries a single
  label, the sliver a single label.
- **2026-08-31 (Video 003 — "The Trillionaire a Court Counted" / Andrew Tate; BUILT, not
  rendered)** — `OffCamCelebs/003-andrew-tate/`, composition `InfluencerAudit003`, Studio port
  **3102**. **5829f / 194.3s PROVISIONAL** at 1080×1920@30.
  **★ THE STYLE CHANGED MID-BUILD** — user asked for a newspaper/white look, so the whole video
  was re-skinned to NEWSPRINT (new standing rule 1). Palette rewritten for ink on white; Cards
  became clippings with square corners and hairline rules; section heads gained a column rule;
  the extruded solids (rule 5 still holds) were re-inked as printed-diagram plates; the timeline
  dot became an ink bullet; the portrait grades to paper rather than to a dark field.
  **Format deltas the brief demanded:** NO cold-open callback and no cadence language anywhere
  (the CTA is "send us who to audit next", nothing about weekly); a `scope` beat states the
  Romanian allegations are unresolved and out of scope, once, then never returns; the verdict
  is UNSUPPORTED in `#B33A2E` and rates the CLAIM, not the man; the caveat card carries the
  civil/balance-of-probabilities point AND Tate's own response quote, both mandatory.
  **New devices:** the hook puts $1T and the counted £21M on ONE scale — the counted mark is
  ~1/37,000 of the claim, so it is drawn at the 1px floor and LABELLED as "thinner than one
  pixel at true scale" rather than fudged up to be visible; four CLAIMED figures stack then get
  struck through when nothing backs them; the court judgment is the hero object with the judge's
  phrases as pull-quotes; **the £21M revenue and the £2.7M seizure are given separate frames so
  they can never blur**; the 380,000-year line gets the frame to itself, tagged OUR MATH; the
  FLIP uses a deliberately softer register (no stamps, no hard borders) so the concession that
  "trillionaire" is probably a bit reads as sincere.
  Fixed in review: the claim strike-through ran through the CLAIMED tag — moved INSIDE the text
  column so layout bounds it (same lesson as the poll line).
  ⚠ **THE SCRIPT RUNS LONG: 609 words ≈ 190s provisional against the 150–165s brief** — flagged
  to the user. ⚠ VO/music not supplied; assets are placeholders. ⚠ **Two legal facts MUST be
  re-verified before posting: the appeal status after the Dec 2024 ruling, and the current
  status of the Romanian proceedings** (both recorded in `data.ts`).
- **2026-08-31 (Video 002 — FINAL RENDER, on request)** — `out/mrbeast_audit.mp4`, h264
  1080×1920@30, **4708f / 156.992s**, 22.1 MB, AAC 48 kHz stereo. Verified on the OUTPUT FILE:
  frame count matches the composition exactly; mean −29.5 / max −5.9 dB (no clipping); speech
  windows −29.0…−32.0 across hook/audit/flip/verdict (VO dominant); post-VO tail −40.0 dB =
  bed + fade only. Carries the real VO, the repaired Goodman loop at the measured 0.0437, the
  cut-out portrait, and all four review fixes. Served over `scratchpad/serve.mjs` (port 3112).
  ⚠ Before posting: hook-photo licence unverified; WSJ screenshot still a placeholder (the
  quote is rendered as a typeset card, correctly attributed); live figures — valuation,
  subscriber count, profitability — need re-checking.
- **2026-08-31 (Video 002, review note 4)** — the poll's green spectrum line ran THROUGH the
  "NOT BROKE" box. Cause: the line was absolutely positioned with hand-computed `left`/`right`
  offsets, which have to GUESS how wide a text box renders — and the guess was ~20px short.
  Rebuilt as a **flex item between the two poles**, so it takes exactly the gap that is left and
  cannot intersect either pole whatever the labels say. **Standing lesson: never hand-compute an
  offset around a text-sized element — let layout measure it.** (Same family as the YES/NO
  layout-shift trap in rule 6.)
- **2026-08-31 (Video 002, review notes)** — three collisions the user caught, all now fixed and
  all worth generalising. (a) **The timeline dot ran into a card**: above-spine cards were
  TOP-anchored, so the one card whose copy wrapped to three lines grew down onto the spine.
  Now bottom-anchored, which is height-independent — **anchor against the edge that must stay
  clear**, added under rule 3. (b) **"the channels everyone knows him for" intersected the loss
  bar**: it sits in the lane the bar fills, and only left 4 frames before the bar grew. Now
  fully gone 8 frames before — sequential handover, not a crossing. (c) **"The videos / ≈$250M
  revenue" sat too close to the bar**: it was spaced off the FRONT face, but the extruded top
  face rises 26px above it. Moved to a 60px clearance and the depth-budget lesson added to
  rule 5.
- **2026-08-29 (Video 001, notes 2–5)** — four user notes in one pass, recorded as standing
  rules 2–5. Density: hook stamp trimmed to "self-stated, repeatedly"; quote stamp to
  "YouTube, April 2019"; estimate-band source line dropped; "his cut" caption-duplicate lines
  dropped; poll exits before "who's next". Overlap/smoothness: title card waits for the photo
  to fully exit; quote plate exits left (was crossing the caption slot); Forbes→gap-label made
  sequential; backstory opens with its first node (dead stretch killed) and its tab removed;
  verdict tab exits before the findings card travels past it; AUM chip and investors label
  given real entrances (were popping); scene exits lengthened to 20f; drift extended through
  the outro. No yellow: CLAIMED amber → violet `#a78bfa` everywhere. 3D: bar rebuilt as a lit
  extruded cuboid with ground shadow; estimate band became a translucent slab (behind the
  bar, which is now opaque); audit-2 flat tiles rebuilt as a field of iso `Block` cuboids
  (7×7, staggered, row-depth dimming) with a violet block for "his cut" — after the user
  rejected the flat-box version; cards/papers got perspective tilt + edge lighting; timeline
  dots became spheres. Verified across two transition-frame stills sweeps.
- **2026-08-29 (Video 001, note 1)** — user: "I want a dark investigative theme." The pilot's
  paper-white "audit ledger" field was replaced with the dark evidence-room look; recorded as
  standing rule 1. Tier colors, stamp red and tints rebrightened for dark; card shadows
  deepened; the estimate band's hatching lightened; a radial vignette added behind the scenes.
  Re-verified in a full stills sweep. Structure, motion and typography unchanged.
- **2026-08-29 (Video 001 — "Grant Cardone Says He's a Billionaire. We Audited the Claim.";
  NOT rendered)** — the pilot, built same-day from the user's first content prompt.
  `OffCamCelebs/001-grant-cardone/`, composition `InfluencerAudit001`, 4182f / 139.4s @30,
  1080×1920. **Timing is PROVISIONAL** (paced from the script at ~2.6 w/s in `data.ts` CUES) —
  regenerate from the transcript when the VO take lands. Photo placeholders active
  (`HAS_HOOK_PHOTO=false`); flagged for review. Structure: hook (photo + quoted claim + SEC
  strip + title card) → three-claim checklist → generous timeline (traveling camera) →
  audit 1 (claimed $1B bar vs $400–660M estimate band, one shared axis) → audit 2 ($5B grid
  splits into investor tiles; his slice unnumbered) → audit 3 (offering doc → SEC letter →
  the 15% line drops out and reappears in a social post, ALLEGED-tagged → 9th Cir. card) →
  verdict checklist + INFLATED stamp + the mandatory caveat card verbatim → poll → CTA.
  Fixes from the first stills sweep: backstory section tab removed (collided with passed
  timeline cards); audit-2 tile drift halved + gap widened (tiles were overlapping into a
  jumble); SEC letter moved below the doc's 15% line and the falling line angled away from it.
  tsc clean; two full stills sweeps verified.

- **2026-08-29** — Channel scaffolded. `OffCamCelebs/` created at the project root; videos live
  in `OffCamCelebs/<NNN-slug>/`, each a standalone Remotion project. This file is the channel's
  authority on look. Studio ports assigned: **3100–3199** (100BasisPoints uses 3011+, Vision
  Media 3000–3009). `offcamcelebs-content.md` was created and then DELETED the same day at the
  user's direction — content rules, legal framing, facts and tier guardrails arrive in each
  video's prompt and live in that video's `data.ts`; only LOOK accumulates here.
