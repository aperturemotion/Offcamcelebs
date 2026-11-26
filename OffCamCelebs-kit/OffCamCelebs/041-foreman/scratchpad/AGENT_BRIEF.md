# AGENT BRIEF — 041 "On Paper" (George Foreman / the grill money): build ONE place

You build one place (scene) of an OffCamCelebs film: a vertical 1080×1920 @30 fps HyperFrames film made of Preact layers and
real Three.js objects, in the channel's locked 034/035 look. The film root is
`/home/user/offcamcelebs/OffCamCelebs-kit/OffCamCelebs/041-foreman` (call it FILM). Work only there.

## Read first (fast, in this order)
1. `OffCamCelebs-kit/OffCamCelebs/styles/offcamcelebs-preferences.md`: "THE LOCKED LOOK" at the very top, then the changelog's
   newest 2026-11 entries (especially "MORE REALISTIC 3-D" and "THE SHAPE COMES FIRST"). Key rules: one real-looking object
   per line; objects slide in and out; visuals follow the words (whatever the voice names is on screen as it is said); big
   numbers land on objects; brand names in plain type on objects (no real logos); nothing looks AI-made; no "·" on screen.
2. FILM/BRIEF.txt and FILM/VO_SCRIPT.txt (the story, facts and GUARDRAILS) and FILM/src/audit/record.ts (figures, quotes).
3. The contract: FILM/src/r45/place.ts (PlaceDef: set, done, cam, sfx). The worked examples are 040 Tiger's places, the
   newest film on this engine with the realism rules: `OffCamCelebs-kit/OffCamCelebs/040-tiger/src/r45/sets/*.tsx` and
   `…/src/three/props/*.ts` (read 2 closely: e.g. june.tsx + props/june.ts for paper, verdict.tsx + props/verdict.ts; hook.tsx
   + props/hook.ts for physics-driven motion). Copy their structure: a props/<id>.ts builds the THREE model and its params;
   sets/<id>.tsx times everything on the voice with `cue(S, i)`, `cueEnd(S, i)`, `word(S, i, /^regex/)` (src/r45/time.ts),
   the camera with `alive(...)` keys, `<Light>`, `<World>`, `<View3D>`, `<Obj s g>` tags, and module-load checks that THROW
   when a rule is broken. `FILM/src/three/props/cash.ts` is the real-cash module (makeBundle, makeBand, NOTE): use it for any
   money; `assets/note100.jpg` (the $100 face) and `assets/foreman_face.png` (740×740 face crop, CC BY-SA) are preloaded.

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
Get the object's real silhouette and proportions right before any material: look at how the real thing is built (the grill
is a real countertop contact grill: a hinged clamshell ~330 × 250 mm, its lower plate tilted ~8° toward the front, ribbed
non-stick plates with deep parallel ribs, a plastic body with a chrome/brushed-metal lid skin, a handle on the lid's front
edge, a removable drip tray under the front lip; a retail box is printed corrugated cardboard with flaps; an SEC filing is a
letter-size white page of dense typewriter-era type). Then thickness and rounded or
bevelled edges on every object; real material response (paper grain and sheen, brushed/polished metal with proper metalness,
lacquer with clearcoat, turf with fine blade texture, wood grain); small imperfections (a curl in paper, a slight tilt, wear
on corners); print that sits IN the surface (texture), not floating labels; soft contact shadows (objects cast and receive);
nothing perfectly flat, square or uniform. The preview keeps shadows: judge stills with PREVIEW=1, then one full-quality
contact sheet (no PREVIEW) of 6 frames at scale 0.4.

## Sound
Give each real action ONE subtle sound in your `sfx` list (PlaceSfx, see place.ts), timed by the action's own frame
(`mode: "peak"` puts the sound's peak on that frame). Use ONLY these names (the files exist; volumes 0.2–0.5):
`sizzle` (meat on the grill hisses; sustained, give `end`; hook and verdict only), `lid` (a hinged lid closes, soft), `glide`
(an object slides in, soft), `glide2` (a second take), `whip` (a fast move), `wcam1`/`wcam2` (a soft camera whoosh;
sustained), `thump` (a landing with weight), `paper` (paper/card slides or lands), `flip` (a page or card flips), `click` (a
small latch, switch or press), `cash` (banknotes riffle; sustained), `stack` (bundles stack), `tear` (paper tears), `lowhit`
(a low soft weight, verdict only). Never a ping or a bell. No sound on a caption word by itself.

## Verify before you stop
1. `cd FILM && npx tsc --noEmit -p . && node scripts/build.mjs` (fix every error and every module-load check). If ANOTHER
   place breaks the shared build, test in a private copy of FILM in /tmp with the other places as stubs (as the 040 agents
   did), and say so.
2. Stills of YOUR window (from `scratchpad/plan.json`, regenerated by `node scratchpad/planjson.mjs` after a build), the cheap
   way first: `export HF_CHROME=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome; node scripts/build.mjs --preview-only;
   PREVIEW=1 node scratchpad/sweep029.mjs frames <from> <to> 6 /tmp/<id>_sheet 0.4`, then tile them (Python PIL, run with
   /usr/local/bin/python3) and LOOK at the sheet with the Read tool. Fix what reads badly (too small, off-band, clipped,
   floating, intersecting, unreadable, not real-looking, a caption line under an object). The machine has 4 cores shared by
   8 agents: keep captures small (step ≥ 6, scale 0.4, preview build) and never run two captures at once yourself.
3. Once it looks right: the 3-D audit on your window: `node scripts/build.mjs --audit-only; AUDIT=1 node
   scratchpad/sweep029.mjs audit <from> <to> 3 /tmp/<id>_audit 99999` → no `audit.jsonl` (or only a "shade" line) means
   no intersections/edge cuts. Fix any PEN (objects through each other) or EDGES (a canvas border cutting an object).
   Keep the scene light enough to draw (040's hook had 200k grass blades and made every check slow): prefer textures and
   normal maps to huge instance counts.
4. Report back in under 200 words: what the place shows line by line, its sfx list, the audit result, anything unsure.

## Timing (seconds; frames = s × 30). The whole film runs 55.7 s (1670 frames).
Cues (sentences) per place, from src/audit/cues.ts (index i for cue(S, i)):
- hook (dark): c0 0.00–3.72 "George Foreman said his grill made him more than $200 million." c1 4.44–5.56 "Much more, he
  said." c2 5.76–6.52 "We checked the filings."
- champ (cream): c0 6.90–9.58 "Foreman was a two-time heavyweight champion of the world." c1 9.80–11.62 "He won the title
  back at 45."
- grill (dark): c0 11.84–15.56 "In the 90s, a company called Salton sold a grill with his name on it," c1 15.72–17.50 "and
  paid royalties on every sale."
- royalties (cream): c0 17.75–20.58 "Salton's own SEC filings show those royalties." c1 21.00–23.46 "$38 million in one
  year," c2 23.63–26.50 "then $16.6 million in just three months." ★ The next sentence starts at once (26.50): this place's
  `done` must be ≤ cueEnd("royalties", 2) (frame 795), no pad: its last action lands on "three months".
- buyout (dark): c0 26.50–30.82 "In December 1999, Salton bought his name outright, forever," c1 31.08–35.50 "$137.5 million
  in cash and stock."
- paper (cream): c0 35.71–37.92 "That's $192 million on paper," c1 38.22–39.88 "and it leaves out the grill's early years."
- catch (dark): c0 40.11–42.14 "The catch: two partners shared in the deal." c1 42.34–45.14 "Foreman's own cut of the
  buyout was $110 million."
- verdict (cream): c0 45.46–49.88 "To be fair, those early royalties were never broken out, and sales were already
  booming." c1 50.16–52.54 "So, $200 million from a grill?" c2 52.80–53.76 "Our rating: legit." c3 53.98–55.16 "Send us
  who to audit next."
Words (whisper spellings, for `word()` regexes): "$200", "million.", "Much", "two-time", "$45" + "million." (whisper's
mishearing of the spoken "forty-five" at 10.8–11.6 s: anchor on /^\$45/), "90s,", "Salton", "royalties", "SEC", "$38",
"$16.6", "1999,", "outright,", "forever,", "$137.5", "$192", "paper,", "early", "catch?", "partners", "$110", "booming.",
"So", "Legit!". Place windows on screen (plan.json, frames): hook 0–264, champ 200–421, grill 353–593, royalties 529–863,
buyout 795–1133, paper 1069–1268, catch 1200–1422, verdict 1358–1670 (they move a little as places set `done`).

## The places (what each shows; build exactly this, well)
- **hook** (dark): from frame 1, a real countertop contact grill (see the shape notes) on a dark kitchen counter, a thick
  raw-red steak on its ribbed lower plate; the lid swings down (a real hinge arc, not a slide) and closes on the steak on
  "grill" (~1.2 s) with a lid sound; thin translucent steam wisps rise from the seam; on "$200 million" (2.41 s) the drip
  tray under the front lip slides out toward camera and it is full of real banded cash (cash.ts), the hero band printed
  "$200,000,000". NO figure on screen before 2.0 s. On "Much more, he said" two more bundles slide in on top (more than
  that). Plain type "GEORGE FOREMAN" small on the lid handle is fine; no logo. sfx: lid, sizzle (from the close, quiet,
  ~2 s), glide (tray), stack.
- **champ** (cream): his framed photo (`assets/foreman_face.png`) on a wood shelf; on "two-time heavyweight champion" two
  real championship belts (thick leather straps, a big gold centre plate, side plates, studs) slide in and lie in front of
  it, their plates engraved "1973" and "1994"; on "won the title back at 45" a small brass plaque "AGE 45" drops onto the
  1994 belt. sfx: glide, thump ×2, click.
- **grill** (dark): "a company called Salton sold a grill with his name on it": a retail grill box (printed corrugated
  cardboard, flaps, plain type "SALTON" small and "THE GEORGE FOREMAN GRILL" big, a line drawing of the grill, his face
  photo small in a corner) slides onto a store shelf, then three more boxes slide in behind it (sales); "and paid
  royalties on every sale": each box, as it lands, drops one real $100 note (cash.ts note art) into a wooden tray in front.
  sfx: glide, paper per note (quiet), thump.
- **royalties** (cream): "Salton's own SEC filings": a real filing page lands (letter-size, plain type "SECURITIES AND
  EXCHANGE COMMISSION", "FORM 8-K", "SALTON, INC.", dense small type lines); "$38 million in one year": a stack of banded
  cash slides in beside it with a paper tag "$38,096,000 / FISCAL 1999"; "then $16.6 million in just three months": a
  second, smaller stack with a tag "$16,644,000 / 13 WEEKS" lands on "three months". done ≤ frame 795 (see above). sfx:
  paper, stack, stack.
- **buyout** (dark): "In December 1999": a desk calendar's page "DECEMBER 1999" with the 9th circled; "Salton bought his
  name outright, forever": a brass name plate "GEORGE FOREMAN" slides onto a contract titled "ASSIGNMENT OF NAME AND
  LIKENESS" with the line "IN PERPETUITY AND WORLDWIDE"; "$137.5 million in cash and stock": banded cash bundles with a tag
  "$113,750,000 CASH" and an engraved stock certificate "SALTON, INC. COMMON STOCK $23,750,000" slide in, then a total
  "$137,500,000" lands (a brass plate or tag, large). sfx: flip, glide, stack, paper, thump.
- **paper** (cream): "That's $192 million on paper": an adding machine's paper tape unrolls across the desk, printing
  "38,096,000 / 16,644,000 / 137,500,000 / 192,240,000 T" (the total big at the end, real receipt-paper look); "and it
  leaves out the grill's early years": four year cards "1995", "1996", "1997", "1998" land face up beside it, each with a
  blank amount line. sfx: click (the printer), paper ×2.
- **catch** (dark): "two partners shared in the deal": the buyout cash pile splits into three stacks sliding apart, one
  big and two small, with folded paper name cards "FOREMAN" (big stack), "PARTNER", "PARTNER" (never real names);
  "Foreman's own cut of the buyout was $110 million": the big stack's band reads "$110,000,000" and the camera pushes in on
  it. sfx: glide ×2, stack.
- **verdict** (cream): "To be fair, those early royalties were never broken out": the four year cards from before stand in a
  row, blank; "and sales were already booming": grill boxes stack up behind them fast, a tall pile; "So, $200 million from a
  grill?": the grill from the hook slides in front, lid closed, steam, its drip tray of cash out; "Our rating: legit.": a
  green (#3f8f5c) enamel/brass plaque or rosette tag reading LEGIT swings onto the grill handle (the word LARGE, at least
  60% of the frame width). Not a stamp. "Send us who to audit next" holds. The verdict rates the FIGURE, never Foreman.
  sfx: glide, stack, sizzle (quiet), lowhit on LEGIT.
