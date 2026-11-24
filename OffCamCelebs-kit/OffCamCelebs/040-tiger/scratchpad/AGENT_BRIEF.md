# AGENT BRIEF — 040 "Neighborhood" (Tiger Woods / the LIV Golf offer): build ONE place

You build one place (scene) of an OffCamCelebs film: a vertical 1080×1920 @30 fps HyperFrames film made of Preact layers and
real Three.js objects, in the channel's locked 034/035 look. The film root is
`/home/user/offcamcelebs/OffCamCelebs-kit/OffCamCelebs/040-tiger` (call it FILM). Work only there.

## Read first (fast, in this order)
1. `OffCamCelebs-kit/OffCamCelebs/styles/offcamcelebs-preferences.md`: "THE LOCKED LOOK" at the very top, then the changelog's
   newest 2026-11 entries (especially "MORE REALISTIC 3-D" and "THE SHAPE COMES FIRST"). Key rules: one real-looking object
   per line; objects slide in and out; visuals follow the words (whatever the voice names is on screen as it is said); big
   numbers land on objects; brand names in plain type on objects (no real logos); nothing looks AI-made; no "·" on screen.
2. FILM/BRIEF.txt and FILM/VO_SCRIPT.txt (the story, facts and GUARDRAILS) and FILM/src/audit/record.ts (figures, quotes).
3. The contract: FILM/src/r45/place.ts (PlaceDef: set, done, cam, sfx). The worked examples are 039 Canelo's places, the
   newest film on this engine with the realism rules: `OffCamCelebs-kit/OffCamCelebs/039-canelo/src/r45/sets/*.tsx` and
   `…/src/three/props/*.ts` (read 2 closely: e.g. pay.tsx + props/pay.ts for paper, verdict.tsx + props/verdict.ts; hook.tsx
   + props/hook.ts for physics-driven motion). Copy their structure: a props/<id>.ts builds the THREE model and its params;
   sets/<id>.tsx times everything on the voice with `cue(S, i)`, `cueEnd(S, i)`, `word(S, i, /^regex/)` (src/r45/time.ts),
   the camera with `alive(...)` keys, `<Light>`, `<World>`, `<View3D>`, `<Obj s g>` tags, and module-load checks that THROW
   when a rule is broken. `FILM/src/three/props/cash.ts` is the real-cash module (makeBundle, makeBand, NOTE): use it for any
   money; `assets/note100.jpg` (the $100 face) and `assets/tiger_face.png` (740×740 face crop, public domain) are preloaded.

## Your files (edit ONLY these)
- `FILM/src/r45/sets/<id>.tsx` (new) exporting `export const PLACE: PlaceDef = { set: { id, ground, Comp, align, focus }, done, cam, sfx }`
- `FILM/src/three/props/<id>.ts` (new): the model
- To see your place in the film, change ONLY your own line in `FILM/src/r45/places.ts` from `makeStub(...)` to
  `export { PLACE as <ID> } from "./sets/<id>";` with the Edit tool (other agents edit their own lines at the same time:
  never rewrite the file, never touch another line). Keep the ground (dark/cream) your stub line has.
- Do NOT edit Film.tsx, score.ts, data.ts, SfxLayer.tsx, cash.ts, captions, or other places. Do not commit or push. Do not
  render MP4s.

## The screen's rules (checked later on every frame; build them in)
- Captions live in the band y 330–640 (x 90–950). Your objects' ink stays BELOW y 660 once your place has landed (the
  hand-overs may carry things through). Nothing readable at x > 940 for y 1000–1700, and nothing readable below y 1500
  (Instagram's buttons and caption). Main objects big: the subject of each line fills a good part of the frame (an object
  drawn too small is a beat that did not happen), roughly y 700–1450.
- Every object comes on screen by moving in (slide, drop, swing, roll), lands with weight, and leaves or is carried off by
  the hand-over. No pop-ins. Nothing floats; nothing intersects another object (3-D pen checks run on every frame).
- Text printed on objects: real typography (the kit's fonts via the texture painters in the examples), crisp, big enough to
  read on a phone. Quotes are printed AS QUOTES with their attribution in type (record.ts has the exact words).

## Realism (Timur, 2026-11-23; standing): THE SHAPE COMES FIRST
Get the object's real silhouette and proportions right before any material: look at how the real thing is built (a golf ball
is 42.7 mm with ~330 shallow round dimples; a cup is 108 mm across, a white plastic liner set ~25 mm below the grass, with a
flagstick ferrule; a presentation cheque is ~760 × 380 mm foam board with a printed border). Then thickness and rounded or
bevelled edges on every object; real material response (paper grain and sheen, brushed/polished metal with proper metalness,
lacquer with clearcoat, turf with fine blade texture, wood grain); small imperfections (a curl in paper, a slight tilt, wear
on corners); print that sits IN the surface (texture), not floating labels; soft contact shadows (objects cast and receive);
nothing perfectly flat, square or uniform. The preview keeps shadows: judge stills with PREVIEW=1, then one full-quality
contact sheet (no PREVIEW) of 6 frames at scale 0.4.

## Sound
Give each real action ONE subtle sound in your `sfx` list (PlaceSfx, see place.ts), timed by the action's own frame
(`mode: "peak"` puts the sound's peak on that frame). Use ONLY these names (the files exist; volumes 0.25–0.6):
`putt` (a putter strikes a ball, hook only), `lipout` (a ball rattles round the cup's rim, hook only), `glide` (an object
slides or rolls in, soft), `glide2` (a second take), `whip` (a fast move), `wcam1`/`wcam2` (a soft camera whoosh; sustained),
`thump` (a landing with weight), `paper` (paper/card slides or lands), `flip` (a page or card flips), `click` (a small latch,
switch or press), `cash` (banknotes riffle; sustained), `stack` (bundles stack), `tear` (paper tears), `lowhit` (a low soft
weight, verdict only), `clap` (a short polite golf-gallery applause; sustained, tiger place only, quiet). Never a ping or a
bell. No sound on a caption word by itself.

## Verify before you stop
1. `cd FILM && npx tsc --noEmit -p . && node scripts/build.mjs` (fix every error and every module-load check).
2. Stills of YOUR window (from `scratchpad/plan.json`, regenerated by `node scratchpad/planjson.mjs` after a build), the cheap
   way first: `export HF_CHROME=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome; node scripts/build.mjs --preview-only;
   PREVIEW=1 node scratchpad/sweep029.mjs frames <from> <to> 6 /tmp/<id>_sheet 0.4`, then tile them (Python PIL, run with
   /usr/local/bin/python3) and LOOK at the sheet with the Read tool. Fix what reads badly (too small, off-band, clipped,
   floating, intersecting, unreadable, not real-looking). The machine has 4 cores shared by 7 agents: keep captures small
   (step ≥ 6, scale 0.4, preview build) and never run two captures at once yourself.
3. Once it looks right: the 3-D audit on your window: `node scripts/build.mjs --audit-only; AUDIT=1 node
   scratchpad/sweep029.mjs audit <from> <to> 3 /tmp/<id>_audit 99999` → no `audit.jsonl` (or only a "shade" line) means
   no intersections/edge cuts. Fix any PEN (objects through each other) or EDGES (a canvas border cutting an object).
4. Report back in under 200 words: what the place shows line by line, its sfx list, the audit result, anything unsure.

## Timing (seconds; frames = s × 30). The whole film runs 53.9 s (1618 frames).
Cues (sentences) per place, from src/audit/cues.ts (index i for cue(S, i)):
- hook (dark): c0 0.00–4.08 "Tiger Woods turned down $800 million to join LIV Golf." c1 4.38–5.58 "Every headline said so."
  c2 5.80–6.92 "We went looking for the offer."
- tiger (cream): c0 7.15–10.70 "Tiger is golf's biggest name, with 15 major championships." c1 11.06–16.92 "In 2022, LIV, a
  new Saudi-backed tour, went after golf's stars with huge contracts."
- june (dark): c0 17.23–19.28 "The number came from LIV's boss, Greg Norman." c1 19.59–24.02 "In June, he told The
  Washington Post the offer was mind-blowingly enormous." c2 24.50–25.42 "High nine digits."
- august (cream): c0 25.82–29.14 "In August, on Fox News, the host listed $700 million." c1 29.42–30.48 "Then, $800 million."
  c2 30.48–32.32 "Norman answered: somewhere in that neighborhood." c3 32.55–35.10 "He said the offer was made before he was
  even in charge."
- denial (dark): c0 35.48–39.22 "Then the head of Saudi golf told The New Yorker: I never offered him that money." c1
  39.44–40.10 "Not even close."
- none (cream): c0 40.50–40.80 "And Tiger?" c1 41.14–42.86 "He has never confirmed any number." c2 43.12–43.72 "No
  contract." c3 44.16–44.68 "No document."
- verdict (dark): c0 44.98–47.02 "To be fair, Tiger never joined LIV." c1 47.29–48.56 "He stayed with the PGA Tour." c2
  48.83–50.02 "So, $800 million?" c3 50.78–52.02 "Our rating: unsupported." c4 52.32–53.42 "Send us who to audit next."
Words (whisper spellings, for `word()` regexes): "Liv" / "Liv," / "Liv's" / "Liv." = LIV, "$800", "$700", "2022,", "15",
"Norman", "neighborhood.", "Unsupported.", "rating?". Place windows on screen (plan.json, frames): hook 0–276, tiger
212–580, june 512–831, august 767–1125, denial 1057–1271, none 1207–1412, verdict 1344–1618 (they move a little as places
set `done`).

## The places (what each shows; build exactly this, well)
- **hook** (dark): a REAL golf ball in motion from frame 1 (dimpled, slightly off-white, a faint printed line), rolling
  across a close-mown putting green (real turf texture, a gentle break) toward the cup; the flagstick out of shot or its
  ferrule only. Camera low, near ground level, following the ball. The ball reaches the cup (~1.0–1.4 s, "turned down"),
  circles the rim's lip in a real lip-out (it drops a hair, rides round 180–270°, and spins away out the other side) and
  rolls to a stop. NO number on screen before ~2.0 s (the caption spells "eight hundred"). Then, on "million" (~2.0 s), a
  giant presentation cheque (foam board, thickness visible, printed border, bank-cheque layout) drops and lands flat-ish on
  the green behind the cup with weight: "PAY TO THE ORDER OF ____" (BLANK payee line), amount "$800,000,000" large, the
  words "EIGHT HUNDRED MILLION DOLLARS", memo "LIV GOLF" in plain type, signature line EMPTY. On "Every headline said so"
  the camera settles on the figure. sfx: putt at frame ~2 (the stroke, ball already rolling), lipout on the rim, thump as
  the cheque lands, glide for the roll.
- **tiger** (cream): his face (`assets/tiger_face.png`) printed on a framed photo or a tour-event pin flag standing on a
  wood display shelf; in front of it, on "15 major championships", fifteen small major trophies/medals or a row of 15
  engraved flags/plaques (one per major, years printed: 1997 2001 2002 2005 2019 MASTERS, 1999 2000 2006 2007 PGA, 2000
  2002 2008 US OPEN, 2000 2005 2006 THE OPEN) that slide/drop in quickly in a row and a big "15" lands. Then "In 2022, LIV,
  a new Saudi-backed tour": a tour credential / tournament flag in black and gold printed "LIV GOLF 2022" (plain type,
  no logo) and a small subtitle "SAUDI-BACKED"; "huge contracts": a stack of contracts with banded cash (cash.ts) slides in.
  sfx: glide, thump, clap (quiet, under "biggest name"), paper, stack.
- **june** (dark): "The number came from LIV's boss, Greg Norman": a desk name plate "GREG NORMAN, CEO, LIV GOLF" (brushed
  brass plate on walnut) slides onto a desk. "In June, he told The Washington Post": a folded broadsheet newspaper with the
  masthead in plain type "THE WASHINGTON POST" and "JUNE 2022" lands; the quote printed large on it as a pull-quote:
  "Mind-blowingly enormous." then "High nine digits." with the attribution "GREG NORMAN, LIV GOLF CEO". On "High nine
  digits" nine blank digit tiles / a 9-slot number board "$ _ _ _ , _ _ _ , _ _ _" lands (nine empty slots: the number was
  never given). sfx: glide, paper, flip, click per slot run (quiet, once).
- **august** (cream): a vintage TV / studio monitor on a stand showing a lower-third "FOX NEWS, AUG 1 2022" (plain type);
  "the host listed $700 million": a host's cue card "$700 MILLION?" slides in; "Then, $800 million": a second card
  "$800 MILLION?" slides over it; "Norman answered: somewhere in that neighborhood": a speech card / quote plaque
  "“Somewhere in that neighborhood.” GREG NORMAN, LIV GOLF CEO" lands, and the two figure cards blur behind (a range,
  not a number); "before he was even in charge": a small dated card "BEFORE HE WAS CEO" or the name plate flipping to
  "NOT YET CEO". sfx: click (TV on), paper ×2, glide, flip.
- **denial** (dark): "the head of Saudi golf told The New Yorker": a magazine (plain type "THE NEW YORKER", 2022, glossy
  stock with a slight curl) lands open; the quote printed big on its page: "“I never offered him that money. Not even
  close.”" with "MAJED AL SOROUR, GOLF SAUDI CEO". "Not even close": the hook's cheque ($800,000,000) slides in beside it
  and is pushed away / slides back out of reach. NEVER say or show "lied". sfx: thump, flip, glide.
- **none** (cream): "And Tiger?": his framed photo (tiger_face.png) slides back in. "He has never confirmed any number": an
  empty quote card / microphone stand with no statement. "No contract.": an empty manila folder labelled "CONTRACT" opens
  EMPTY. "No document.": an empty clear document sleeve / file tray "DOCUMENTS" shows nothing. Fast, one object per line.
  sfx: glide, paper, flip.
- **verdict** (dark): "To be fair, Tiger never joined LIV": a golf bag or tour locker name plate "TIGER WOODS, PGA TOUR"
  (plain type, no logos) rolls in; "He stayed with the PGA Tour" holds on it. "So, $800 million?": the hook's cheque
  returns, front and centre, payee blank, signature empty. On "Our rating: unsupported." a red (#B23A33) rubber stamp
  presses "UNSUPPORTED" across the cheque (stamp ink with real texture, slightly uneven, the word LARGE: at least 60% of the
  frame width). "Send us who to audit next" holds. The verdict rates the FIGURE, never Woods. sfx: glide, lowhit on the
  stamp, thump.
