# Reference study: v1 "Inland Rail" (@moneydecoded.au), 76.25 s, 720×1280, 30 fps

Sources: every frame at 4 fps (sheets `s1_00…07.jpg`, timestamps printed), 21 full-resolution frames (`full/v1_*.png`,
collages `big1_*.jpg`), a faster-whisper word-level transcript (`words1.json`), ffmpeg scene detection at 0.12, and pixel
measurements (PIL). Times are seconds from the start. Sizes are in px at 720×1280 unless given as % of the frame.

## Whole-film numbers (measured)
- 197 words in 75.2 s of speech = 157 words a minute. Voice starts on frame 0. The film ends 0.9 s after the last word.
- Mean luminance of all frames 46/255 (median frame 41); the brightest 2 s (the pale map, 18–22 s) average 77–80. Only 33% of
  pixels are darker than 16/255: the frame is dark GREY, not black. The ground reads #1D1D1D–#1F1F1F, the far backdrop
  #050407 with a soft lit patch behind the subject.
- The picture is still (frame difference < 0.15/255 outside the caption band) in only 3.6% of frames; the longest still run
  is 12 frames (0.4 s, at 9.0 s). Something is moving in 96% of the film.
- 19 shots: 16 picture shots and 3 turn cards. Picture-shot lengths: 4.05, 4.4, 2.4, 4.6, 5.3, 3.7, 4.7, 2.6, 6.3, 9.9, 2.6,
  2.7, 4.7, 3.1, 2.6, 6.9 s (median 4.2, min 2.4, max 9.9). Cards: 1.27, 2.0, 1.67 s.
- 15 hard cuts (6 of them into or out of a card), 1 soft cut through a 4-frame dark dip (8.6 s), 2 whip pans with streak
  blur inside a shot (4.0–4.2 s, 23.75–24.3 s). No dissolve, no wipe, no travel through empty darkness.
- First figure on screen: "$4.7 BILLION" is visible dim at 4.25 s and fully lit at 5.0 s; the voice says "$4" at 4.82 s.
- Figures and how long each is readable: $4.7 BILLION 1.4 s (then it counts); $45 BILLION (red) 0.85 s; TAXPAYERS 2.1 s; the
  tag's $4.7 2.6 s; 2018 2.5 s; $45 BILLION (second time) 1.1 s; $14.5 BILLION 1.6 s; $500 2.2 s; TOLL $14.5 BILLION 4.3 s.
- Captions: one phrase of 1–4 words; white, regular weight, a neutral grotesque; text box y 178–199 (21 px tall with
  descenders, so a font size of about 22–23 px = 1.75% of the frame height); centred on x 360; vertical centre y 188 = 14.7%
  down the frame; phrase width 80–340 px (11–47% of the frame width). A phrase fades in over ~3 frames (seen half-bright at
  swaps), stays until the next, never moves. A faint dark halo sits behind it. No caption on turn cards.
- Accent colours sampled: lit figure yellow #F6E996 (dim state #A39962); bad-figure red #F4665B; road-sign green #3C6B4E
  (lit face #73A488) with white type; toll plate blue #6673BC with a yellow border; turn-card orange #F6B04F on a glow
  whose centre is #8C4318; card red word ≈ #E04A3C on a glow centre #65130E; tag cream #E1D8CD with ink #2A2626; map slab
  #93949D; blueprint #41486C with near-white lines; cash-brick green #98BD8F. Everything else is neutral grey to black.

## Shot by shot

### 1 | 0.00–4.05 (4.05 s) | "Australia started building a railway from Melbourne to Brisbane."
- Subject: a rail track running away to the right; two hanging station signs on posts; a diesel locomotive. It sets the
  whole story as a place: a line between two named ends.
- Frame 0: no title. The track's near rail crosses the lower-left (y 190–230 of 427 in the strip), two unlit sign frames
  stand upper-middle. Lit area only 16% of the frame; the rest is dark grey floor and black.
- Camera: at rail height (lower than the locomotive's deck), wide lens (strong convergence of the rails), three-quarter
  along the track. It moves from the first frame: a forward dolly along the track that also rises toward the signs.
- Action: the locomotive enters from the left foreground at 0.75 s, huge and cropped (it fills the left 40% of the frame's
  height), rolling right; "MELBOURNE" lights white on the near sign as the word is spoken (2.2 s), then the camera passes
  it and "BRISBANE" lights on the far sign (3.0 s).
- Light: one soft key from upper right; the locomotive is matte black read only by pale rim highlights on its edges and
  window; signs are emissive white panels with a faint glow; no coloured light.
- Text: the two sign words, heavy wide capitals, white on dark plates in thin light frames.
- Exit: a whip pan to the right at 4.0–4.2 s (6–8 frames of horizontal streak blur) that lands on shot 2: one continuous
  camera, no cut.

### 2 | 4.2–8.6 (4.4 s) | "The price went from $4.7 billion to $45 billion,"
- Subject: a flat wagon on the track carrying a plaque as long as the wagon. The wagon IS the price.
- Size: the plaque spans the full frame width at first (text 478 px wide = 66% of the frame, 64 px tall = 5% of the height),
  centred at y 645 (50%). Above it a grey lit haze on the back wall, below it the dark floor: three horizontal bands.
- Camera: square-on to the wagon's side, eye level with the plaque; almost static 5.0–6.3 s (tiny drift), then it pulls
  back and trucks left as the wagon rolls right (6.5–8.5 s), ending three-quarter with a second wagon coupled behind.
- Action: the figure is dim brown at 4.25 s and LIGHTS to yellow by 5.0 s on "$4.7"; from 6.3 s it counts up in place
  ($9.2, $18.1, $27.1, $36.0, $40.5) and lands on "$45 BILLION", turning RED at 7.75 s on "45".
- Text: "$4.7 BILLION" in heavy wide capitals, emissive, flat on the plaque (not extruded), with a soft bloom.
- Exit: a 4-frame dip to near-black (8.6–8.75 s) into shot 3.

### 3 | 8.75–11.1 (2.4 s) | "but it never made it to Brisbane."
- Subject: the END of the track: a buffer stop with a small red lamp, a few low-poly rocks, a green road sign
  "BRISBANE →" on two posts pointing off-screen. The idea "it stops short" as one image.
- Size: SMALL and wide: the sign is 60 px wide (8% of the frame) at x 650–712, y 540–625; the buffer 40 px. Lit area 5.5%.
  This is the film's emptiest frame, used for "nowhere".
- Camera: far, slightly above, slow drift left. Holds nearly still for 12 frames (the longest still of the film).
- Colour: the only green so far (the road sign), and the red lamp dot.

### 4 | 11.1–15.7 (4.6 s) | "Now it stops in the middle of nowhere, and your taxes are paying for it."
- Same place, same shot, no cut: the locomotive rolls in from the left (11.1 s), stops at the buffer; the camera trucks left
  along it and pushes in on its side until a framed plaque fills the middle (366 px text = 51% of the width).
- Action: the plaque is dark, then "PAID FOR BY" (small spaced capitals) and "TAXPAYERS" (heavy, yellow) light at 13.6 s on
  "your taxes". Slow push continues to the cut.
- Light: rim highlights along the loco's handrails and bogies; grey haze behind.

### 5 | CARD 15.87–17.13 (1.27 s) | "Let us explain."
- Black frame. "Let" appears at 16.0, "us" at 16.2 (white, regular, ~46 px tall line), then "explain." arrives at 16.3–16.4:
  it is first seen squashed and blurred (it flips up into place), bold ITALIC sans, orange #F6B04F, 400 px wide (56% of the
  frame), with a little depth and a soft drop shadow. An orange radial glow blooms behind it from 16.4 to 16.9 s (it ends
  about 700 px wide and 740 px tall, centred at y ≈ 770 = 60%).
- The words sit at y 500–756 (39–59% down). No floor, no reflection, no object, no caption.
- Hard cut in and out.

### 6 | 17.13–22.47 (5.3 s) | "It's called Inland Rail. The idea was one freight line through the middle of the country,"
- Subject: a pale grey extruded slab map of Australia (state borders as thin white lines, Tasmania separate) lying on the
  dark ground: the bright scene after the black card.
- Camera: starts wide and oblique (the whole continent, 85% of the width), then pushes in and tilts toward the south-east
  for the whole shot, ending on the east coast filling the frame.
- Action: a green "MELBOURNE" sign on a pin DROPS in from above with motion blur (19.75–20.0 s); a thick white line draws
  north from it (20.25–21.5 s) as "one freight line through the middle" is said; a green "BRISBANE" sign drops at 21.25 s.
- Light: the slab is evenly lit (#93949D), its edge thickness catching shade; soft shadow under the signs.

### 7 | 22.5–26.2 (3.7 s) | "so trains can carry what trucks haul up the highway today."
- Hard cut to a LOW front three-quarter of the locomotive on its track, headlights lit (three white rectangles), body
  cropped by the left edge, about 60% of the frame width. Camera dollies sideways. (22.5–23.7 s, "so trains can carry")
- Whip pan right with streak blur (23.75–24.3 s) to a road train on a highway beside the rail: front three-quarter, chrome
  bull bar and exhaust stacks as the only bright edges, white lane markings on a grey road, trailers receding. The truck
  fills ~70% of the width, centred at y 800–1250 (lower half). Slow push to the cut.

### 8 | 26.2–30.9 (4.7 s) | "In 2010, the government priced it at $4.7 billion."
- Subject: a cream PRICE TAG hanging from the rail (the rail is seen close as a beam across the top). The price as a thing.
- Action: on "In 2010" the camera is tight under the rail; the tag swings in from behind and is seen from its blank BACK,
  out of focus and motion-blurred (26.2–27.75 s); it turns edge-on (28.0 s) and faces the camera at 28.25 s on "priced".
- Size: the tag is 290 px wide (40%) and 480 px tall (37%) when it turns, and the camera pushes until it is 50% × 45%,
  centred at x 360, y 600. Its print: "2010 PRICE", a rule, "$4.7" (cap height 95 px = 7.4% of the frame), "BILLION", in
  dark EXTRUDED letters standing off the cream card with their own shadows.
- Environment: a dark grey back wall close behind (the tag's shadow falls on it), a glossy floor with a blurred reflection
  of the tag.
- Light: frontal soft key; the eyelet is a dark metal ring; no glow at all (the tag is paper, not a lamp).

### 9 | 30.93–33.5 (2.6 s) | "In 2018, the building started."
- Hard cut: a bulldozer, front-left three-quarter, "2018" in white extruded numerals on its blade; pale low-poly rocks in
  front. It drives toward the camera pushing the rocks while the camera pushes in.
- Size: 45% of the width, in the upper middle (y 185–880); black above and below. Lit area 7%.

### 10 | CARD 33.53–35.57 (2.0 s) | "But there was one problem."
- Words one at a time, each on its own centred line: "But there" (33.75–34.0), "was one" (34.25–34.5), then "problem." in
  bold italic orange with the glow blooming at 34.75 s. Lines at y 400–854 (31–67%), the big word 450 px wide (63%).

### 11 | 35.57–41.87 (6.3 s) | "They still hadn't worked out where the line would actually end. The route through Queensland wasn't even locked in."
- Subject: a BLUEPRINT: a blue sheet (#41486C) with a lighter grid, seen from above at a slant, filling 100% of the frame
  (88% lit, the brightest and most coloured scene). "QUEENSLAND" in spaced white extruded capitals lies on it; a steel
  ruler at the bottom edge.
- Action: a pen draws a thick white line up the sheet and the camera FOLLOWS the pen tip, travelling up the map
  (35.6–39.0 s); the pen hesitates at a border; dashed alternative routes appear looping toward "BRISBANE" (39.25–40.5 s);
  an eraser slides in and rubs them out (40.75–41.5 s, motion blur).
- The idea "they kept redrawing it" is acted by drawing tools, not told with a label.

### 12 | 41.87–51.8 (9.9 s, the longest) | "So every time they redrew the plans, the price climbed. This year, a new review said finishing the line would cost at least $45 billion."
- Subject: a physical CHART built of track: a timeline on the floor (white glowing extruded year numerals 2010, 2015, 2020,
  2026 standing on a thin line) and a ramp of track segments on stilts rising above it.
- Action: the first plaque "$4.7 BILLION" stands at 2010; track segments DROP from above one by one with motion blur
  (42.5, 43.0, 43.5, 44.5, 49.3, 49.7 s) and lock into a rising ramp; on "at least $45" the last, steep segment falls and
  the camera cranes up the ramp to a plaque at its top that counts $38.2 → $43.2 → $44.8 and lands "$45 BILLION" in red
  at 50.75 s.
- Camera: a truck right along the timeline (41.9–44.5 s), a slow drift (45–49 s), then the crane up and push (49.3–51 s).
  One unbroken move.
- Environment: dark floor, a back wall with a soft grey spot behind the ramp; the year numerals bloom white.

### 13 | 51.83–54.43 (2.6 s) | "So the government stopped it at Parkes,"
- Hard cut back to the map, close on the south-east, the line from MELBOURNE to BRISBANE in place. At 53.5 s a green
  "PARKES" sign drops in (blur) halfway and the line shortens back to it. Slow drift.

### 14 | 54.43–57.17 (2.7 s) | "a country town in the middle of New South Wales."
- Hard cut: a black grain silo lettered "PARKES" and a white radio-telescope dish on a lattice base, standing by a strip of
  track on a brightly lit floor (pool #727174), a dark wall behind. The town as two landmark objects.
- Size: both together span 95% of the width, y 400–1050. Camera trucks right slowly. The dish's rim is the brightest thing.

### 15 | CARD 57.17–58.83 (1.67 s) | "And here's the worst part."
- "And here's" (57.25–57.5), then "the worst part." with "worst" in bold italic RED, 290 px wide, the red glow blooming at
  58.0 s. "the" and "part." are small white words on the same line as the red word.

### 16 | 58.83–63.5 (4.7 s) | "$14.5 billion of your taxes has been set aside for it."
- Opens tight and square on a plaque on the side of a shipping container: "$14.5 BILLION" lights yellow at 59.0 s on the
  figure. The camera then ORBITS right round the container's corner (60.25–61.5 s) to its open doors: inside, a wall of
  pale green cash bricks glowing. On "set aside" the doors swing shut (62.5–63.0 s) while the camera pulls back and up.
- One object, three views in one move: the figure, what it is (cash), what happened to it (locked away).

### 17 | 63.53–66.6 (3.1 s) | "That's about $500 from every Australian."
- Hard cut: a ticket machine ("TICKETS" on its head, a grey screen, a keypad), front three-quarter. The camera pushes in fast
  to the dispensing slot (63.5–64.25 s); a ticket prints out: "$500 / PER AUSTRALIAN" (64.25 s), then on "every Australian" a
  strip of three tickets runs out (65.75 s). The per-person figure is a printed ticket, not a caption.

### 18 | 66.6–69.17 (2.6 s) | "And the trucks are still on the highway,"
- Hard cut: the road train again, side three-quarter, on the highway beside the EMPTY track. Slow dolly. A callback to shot 7.

### 19 | 69.17–76.1 (6.9 s) | "a railway from Melbourne to Brisbane. $14.5 billion later, it goes to Parkes."
- Hard cut: a symmetric one-point view straight down the track to a gantry sign "↑ BRISBANE" in the distance (the sign is
  12% of the frame width). The camera dollies forward the whole shot (the sign grows to 85%).
- Action: at 71.6 s a blue toll plate with a yellow border, "TOLL | $14.5 BILLION", flips down under the sign on the figure;
  at 74.75 s, on "Parkes", the word on the green sign flips from BRISBANE to PARKES. The track ends just beyond at a buffer
  stop with a red lamp.
- The ending is the OPENING's image (track, a named sign) with the punchline as the sign's changed word. No verdict, no
  call to action, no logo. The film stops 0.9 s after "Parkes".

## Script craft (v1)
- Hook = three sentences, 40 words, 15.2 s: (1) the plain setup with two names, 9 words; (2) the number contrast with a "but",
  16 words; (3) where it is now and that YOU are paying, 15 words. Then "Let us explain."
- Body in time order with spoken dates ("In 2010", "In 2018", "This year"), each sentence one fact, 4–18 words (mean ≈ 11).
- Three cards at 21%, 45% and 76% of the runtime: "Let us explain." / "But there was one problem." / "And here's the worst part."
- Numbers are rounded and few: $4.7 billion, $45 billion, $14.5 billion, $500. Hedges are short ("about", "at least").
- The stakes are brought to one person ("That's about $500 from every Australian"), then an irony line, then the ending
  restates the opening sentence as a fragment and lands on a place name: "A railway from Melbourne to Brisbane. $14.5
  billion later, it goes to Parkes."
- Second person throughout ("your taxes"). No sources, no rating, no sign-off spoken.
- About 12 words per picture shot, but a new visual event (an object entering, a light, a count, a drop) every 1–2 s.
