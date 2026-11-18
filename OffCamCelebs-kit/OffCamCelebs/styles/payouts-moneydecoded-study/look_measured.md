# The render look of @moneydecoded.au, measured over five films

Films: v1 inland rail (76.1 s), v2 Afterpay (84.7 s), v3 passport (67.0 s), v4 Norway's gas (61.5 s), v5 RBA gold (84.2 s).
All 720×1280, 30 fps. Scripts and raw numbers are beside this file: `measure.py` → `look.json` (56 frames per film, spread
evenly, turn cards excluded), `measure2.py` → `look2.json` (text, captions, depth of field, floor profiles), `measure3.py`
→ `look3.json` (caption cadence and camera motion over every frame), `cards.py` + `cards_meas.json` (every turn card),
`ours.json` (the current 037 cut, 97 stills from `scratchpad/m3d/`, cards excluded).

Luminance is Rec.709 luma of the sRGB pixel values, 0–1 (so 0.12 means pixel value ≈ 31). Pixel sizes are at 720×1280;
multiply by 1.5 for 1080×1920. "037" is our current cut.

## 1. Luminance: it is a DARK-GREY film, not a black one

| | v1 | v2 | v3 | v4 | v5 | 037 now |
|---|---|---|---|---|---|---|
| mean of frame | 0.187 | 0.175 | 0.137 | 0.116 | 0.174 | 0.194 |
| median pixel | 0.105 | 0.099 | 0.028 | 0.048 | 0.092 | **0.026** |
| 5th percentile | 0.042 | 0.036 | 0.026 | 0.009 | 0.026 | ~0 |
| 95th percentile | 0.483 | 0.446 | 0.405 | 0.467 | 0.460 | **0.699** |
| share of frame under 2% | 18% | 25% | 40% | 31% | 21% | **48%** |
| share under 5% | 25% | 38% | 50% | 49% | 30% | **54%** |
| share 5–25% (the dark greys) | 49% | 42% | 34% | 39% | 50% | **19%** |
| share 25–80% (mid-tones) | 24% | 15% | 11% | 9% | 18% | 18% |
| share over 80% | 2.5% | 4.4% | 4.1% | 2.6% | 2.5% | **8.7%** |
| frame mean, 25th–75th pct | 0.11–0.27 | 0.09–0.23 | 0.07–0.11 | 0.08–0.15 | 0.11–0.21 | 0.13–0.23 |

Reading: in the references a third to a half of every frame is dark GREY (5–25%), under a fifth to two fifths is true
black, and only 2.5–4.4% is bright. Our cut has the same average but gets it from the opposite distribution: half the frame
is dead black and almost 9% is blown bright, with little grey between.

### Where the light sits (mean luminance of 16 horizontal bands, top → bottom)

| band | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| v1 | .07 | .10 | .12 | .12 | .15 | .20 | .24 | .30 | .27 | .24 | .22 | .23 | .22 | .19 | .18 | .17 |
| v2 | .09 | .11 | .14 | .13 | .15 | .17 | .18 | .20 | .22 | .21 | .22 | .21 | .19 | .19 | .19 | .19 |
| v3 | .07 | .07 | .09 | .09 | .13 | .14 | .15 | .15 | .20 | .20 | .20 | .16 | .14 | .13 | .13 | .14 |
| v4 | .04 | .05 | .11 | .11 | .14 | .16 | .18 | .17 | .12 | .11 | .15 | .16 | .11 | .10 | .08 | .05 |
| v5 | .07 | .10 | .12 | .13 | .17 | .17 | .20 | .22 | .22 | .20 | .19 | .20 | .19 | .20 | .20 | .20 |
| 037 | **.01** | **.03** | **.03** | **.05** | .07 | .14 | .30 | .34 | **.38** | .35 | .32 | .27 | .25 | .23 | .19 | .14 |

Reading: the references are lit top to bottom. The top eighth is 0.04–0.09, the top third already 0.10–0.17 (a lit
backdrop), the peak is only 0.20–0.30 in bands 7–9 (44–56% down), and the floor stays at 0.13–0.20 right to the bottom
edge (v4 alone falls to 0.05). Peak ÷ top-third ≈ 2; peak ÷ bottom ≈ 1.1–1.7. Our cut: the top quarter is black (0.01–0.05),
the peak is 0.38: peak ÷ top-third ≈ 10.

### Vignette (centre 200×200 px against the four 120 px corners)

| | v1 | v2 | v3 | v4 | v5 | 037 now |
|---|---|---|---|---|---|---|
| centre | 0.352 | 0.234 | 0.183 | 0.184 | 0.234 | 0.429 |
| corners | 0.106 | 0.139 | 0.106 | 0.044 | 0.130 | 0.054 |
| ratio | 3.3 | 1.7 | 1.7 | 4.2 | 1.8 | **8.0** |

Corners in the references are dark grey (pixel value 27–35), not black.

## 2. Colour

- **The "black" is a neutral dark grey with a trace of magenta-cool.** Mean RGB of the dark, unsaturated pixels (3–20%
  luminance): v1 (28.7, 27.6, 29.6), v2 (33.5, 32.0, 33.7), v3 (31.8, 30.6, 32.9), v5 (32.1, 30.6, 31.5); v4 is darker and
  faintly warm (21.9, 20.6, 20.8). So the base tone is ≈ #201f21: R ≈ B, G about 1.5 lower. Our cut's darks are blue:
  (30.8, 31.1, 34.1).
- **Saturation is very low.** Mean saturation of visible pixels 0.11–0.13 in four films (v4, the gas film, is the
  exception at 0.52: it is flooded with gold light). Share of the frame that is a real accent colour (S > 0.35, V > 0.3):
  v1 8.8% (the blue blueprint scene), v2 2.6%, v3 1.6%, v5 2.2%, v4 9.4%.
- **Accent hues, median hex where they occur (frames out of 56, mean share of frame):**

| hue | v1 | v2 | v3 | v4 | v5 | what it is |
|---|---|---|---|---|---|---|
| gold body | #f4e88b (13, 0.1%) | #90754a (22, 0.9%) | #82704b (7) | #866338 (43, 5.1%) | #886d46 (48, 1.7%) | gold bars, coins, discs: a mid-tone khaki-gold |
| pale gold / cream light | #eee7ac (17, 1.2%) | #f7ecb3 (23) | #f0e4c7 (12) | #f6e2be (40) | #f8e9c0 (45) | highlights on gold, self-lit money figures, paper |
| red | #f26256 (2) | #b93d44 (15, 0.3%) | #c14747 (27, 0.2%) | #df2b46 (36, 0.9%) | #ab3f42 (12, 0.1%) | the bad figure, a strike, flags |
| green | #508563 (13, 0.2%) | – | #73d2ab (4) | #246644 (13) | – | road signs, a brand lozenge |
| blue | #344367 (9, 8.4%) | #282a5c (8) | #3b4163 (11) | #3f3876 (20) | – | flags, the blueprint, a chart ring |

  Gold objects are NOT yellow: their body is a dull khaki-gold (#886d46–#90754a) and only their highlights and anything
  self-lit go to pale cream-gold (#f6e2be–#f8e9c0). Money FIGURES that glow are pale yellow (#f6f2bd, #f9f5dd).
- **White text** is slightly warm-pink, never pure white: #f8f2f2, #f9f3f5, #f1edf1; captions #e9e2e1.

## 3. The floor and the backdrop

- **There is a floor in every dark shot and it is lit.** Its luminance just below the horizon is 0.21–0.27 (v3 0.14) and
  0.12–0.18 at the bottom of the frame (v4 0.05). It is a matte-to-satin dark-grey surface under a broad soft spot.
- **The horizon** (where floor meets backdrop) sits at a median of 46–65% down the frame (v5 0.46, v2 0.50, v4 0.51,
  v1 0.58, v3 0.65; interquartile range about ±0.12). It is a soft tonal step of 0.04–0.13, never a drawn line: the backdrop
  is a seamless sweep that is itself lit to 0.10–0.17 above the horizon.
- **Reflections are weak and blurred.** Vertical profile through the glowing column in v5 (14.6 s): column 0.95; floor
  immediately in front of it 0.28–0.31; floor base 0.21–0.26. The floor carries a soft pool of the column's light, about
  8–10% of the source above its base, with no readable mirror image. v5 at 45.2 s: the sign (0.35) and bars (0.23) leave
  no image below them at all; the floor there is a round spot pool (0.21) that falls to black toward the frame's bottom.
  In the 6 fps strips a faint, soft reflection shows only under self-lit things (the flag crate, the tag in v1).
- **Light pools are visible objects:** a round or oval pool under each subject, 50–90% of frame width, its edge soft over
  150–250 px; a ring of light spreads on the floor when something lands (v5 39.7 s, 75.4 s).

## 4. Edge light on black bodies

Thin bright runs on dark (a run brighter than 0.55 with under 0.22 six pixels either side), counted along every sixth row:

| | v1 | v2 | v3 | v4 | v5 |
|---|---|---|---|---|---|
| median width (px) | 4 | 4 | 4 | 7 | 4 |
| interquartile range | 2–7 | 3–7 | 2–6 | 3–9 | 3–7 |
| peak luminance | 0.92 | 0.92 | 0.94 | 0.84 | 0.95 |
| such runs per frame | 28 | 42 | 41 | 124 | 37 |

So a black body's edge highlight is 2–7 px wide (3–10 px at 1080) and nearly white (0.92–0.95): a sharp specular line on
a bevel, with the face next to it at 0.05–0.20. Faces are never flat black: they carry soft gradients (0.05 → 0.25).

## 5. Text that lives in the scene

| text | cap height | width | stroke ÷ height | peak lum | colour | halo |
|---|---|---|---|---|---|---|
| v5 "80 TONNES" (sign) | 9.8% of frame height | 65% of frame | (plate text, heavy) | 0.985 | #f8f2f2 | +0.28 at 1 px, half by 5 px |
| v5 "3.75%" (sign) | 6.3% | 44% | 0.25 | 0.984 | #f9f3f5 | half by 2 px, 10% at 31 px |
| v5 "$2.50" (solid, on the floor) | 5.5% | 30% | 0.23 | 0.953 | #f1edf1 | +0.24 at 1 px, half by 4 px |
| v5 "2.5%" (solid, on the floor) | 5.0% | 28% | 0.22 | 0.950 | #f0ecef | half by 6 px |
| v5 "$32B" (solid, on the column) | 8.3% | 22% | (extruded, depth ≈ 35% of height) | 0.978 | #f9f5dd | half by 5 px, 10% at 43 px |
| v1 "$4.7 BILLION" (on the wagon) | 13.8% (plate height) | 94% | – | 0.972 | #f6f2bd | half by 2 px, 10% at 9 px |

- Heavy, WIDE grotesque capitals and figures; stroke about 22–25% of the cap height (Archivo Black / Archivo ExtraBold
  Expanded is the right weight).
- Text is self-lit to 0.95–0.98 and carries a halo: about +0.16 to +0.29 luminance at the glyph's edge, half of that
  2–6 px out, the last 10% 30–45 px out (45–65 px at 1080). A tight bright core plus a wide faint veil.
- Secondary lines ("A YEAR", "OWN JUST") are about 55–60% of the main line's height and grey or white.
- Solid numerals have a visible side: depth ≈ 30–40% of their height, lit from above.
- Plates are black with a 2–3 px light border; signs stand on two thin legs with lit edges.

## 6. Sharpness: depth of field, motion blur, grain

- **Depth of field is strong and used in every close shot.** Laplacian variance, in focus against out of focus: cheque text
  564 against foreground bars 16 (35×); bars in the vault 512 against the door edge near the lens 23 (22×); the truck 196
  against the near bucket 37 (5×). Across all sampled frames the middle third is 2–6× sharper than the bottom third
  (v1 392 / 64, v2 174 / 24, v3 232 / 37, v5 167 / 17): the foreground floor and near objects are soft.
- **Motion blur is real and long.** At 60 px/frame (v5, 7.2 s) streaks are 25–35 px: a shutter of about 0.4–0.5 of the
  frame interval. Captions never blur.
- **Grain: none.** Luminance std in the flattest dark 24 px blocks: 0.0 (v1, v2), 0.22 (v3), 0.29 (v5), 0.54 (v4) on the
  8-bit scale. The image is clean; what little there is is compression.

## 7. Composition

Bounding box of everything clearly above the frame's base tone (the lit picture: subject plus its pool), 56 frames each:

| | v1 | v2 | v3 | v4 | v5 | 037 now |
|---|---|---|---|---|---|---|
| width, % of frame (median) | 94 | 85 | 87 | 79 | 91 | 88 |
| height, % of frame (median) | 59 | 58 | 63 | 63 | 59 | 59 |
| vertical centre (median) | 0.50 | 0.45 | 0.51 | 0.46 | 0.44 | **0.61** |
| vertical centre, IQR | 0.46–0.61 | 0.38–0.55 | 0.46–0.57 | 0.40–0.53 | 0.41–0.57 | – |
| touches a frame edge | 63% | 33% | 60% | 32% | 59% | 48% |
| share of frame that is lit | 17% | 9% | 11% | 12% | 12% | 24% |

- The picture is centred at 44–51% down the frame, with the subject's body typically in y 25–70%. Ours sits at 61%: too
  low, with a black top.
- The subject or its set touches the frame's edge in a third to two thirds of frames: cropping is normal.
- From the v5 shot log: the named object itself is 40–85% of the frame's width in close shots and 20–35% in the
  occasional wide; a hero figure's plate can be 94% of the width.

## 8. Captions

| | value |
|---|---|
| glyph box (ascender to baseline) | y 177 → 189 px of 1280: 12–13 px tall |
| vertical position | top of text 13.8% down, baseline 14.8% down (1080×1920: y ≈ 266–284) |
| size | ≈ 18–19 px font at 720 wide (≈ 27–28 px at 1080 wide): 1.0% of frame height |
| width | median 28–29% of frame width; widest 65–83% |
| colour, opacity | #e9e2e1 (v1 #e8e2e1), peak luminance 1.0: fully opaque warm white, no box, no shadow |
| weight, case | regular to medium grotesque, sentence case, with the sentence's own punctuation |
| words per caption | v5: 209 words in 86 captions = 2.4; v1: 197 in 80 = 2.5; range 1–4 |
| hold | median 0.77 s (IQR 0.3–0.5 to 1.1–1.4 s) |
| change | the old phrase dims for 1–2 frames and the new one is there: partial-brightness runs have a median length of 1 frame |
| empty | the band is empty 7–9% of the time (cards and the gap frames) |
| motion | none: it never moves, scales or highlights; scene objects pass behind it freely |

Our cut: 40 px at 1080 wide (1.45× theirs), y 235 (12.2% down, a little higher than theirs).

## 9. Turn cards: all twelve

| film | time (s) | dur | words (small lead-in / KEY WORD) | key colour | lead-in height | key height | key width | glow colour | glow half / 10% radius |
|---|---|---|---|---|---|---|---|---|---|
| v1 | 15.9–17.2 | 1.3 | Let us / **explain.** | amber #f6b050 | 41 px | 121 px | 403 px (56%) | #743815 | – |
| v1 | 33.6–35.6 | 2.0 | But there / was one / **problem.** | amber #f6a94b | 43, 32 | 124 | 452 (63%) | #773916 | – |
| v1 | 57.2–58.9 | 1.7 | And here's / the **worst** part. | red #f55c4c | 42 | 100 | 534 (74%, the whole line) | #721912 | 240 / 420 px |
| v2 | 12.3–15.2 | 2.9 | So how does / it make any / **money?** | pale gold #bcb67b* | ~45 | 118 | 408 (57%) | #312415* | 240 / 260* |
| v2 | 63.6–65.3 | 1.7 | But here's the / **twist.** | pale gold #f8f3ad | 42 | 98 | 277 (38%) | #745a34 | – |
| v3 | 10.5–12.5 | 2.0 | And it's not even / **close.** | amber #f6b150 | 42 | 99 | 300 (42%) | #713614 | 260 / 440 |
| v3 | 26.0–28.6 | 2.6 | So why is ours so / **expensive?** | amber #f6b051 | 51 | 118 | 580 (81%) | #763915 | 260 / 440 |
| v3 | 45.1–46.7 | 1.6 | And here's the **worst** / part. | red #f5504a | 40 | 75 (the line) | 576 (80%) | #53110d | 260 / 520 |
| v4 | 10.2–11.7 | 1.5 | Let us / **explain.** (serif italic in this film) | khaki gold #ba9050 | 53 | 168 | 454 (63%) | #553c17 | 200 / 320 |
| v4 | 46.2–48.0 | 1.8 | And here's the / **worst** part. | red #ef4247 | 41 | 78 | 422 (59%) | #6d1715 | 280 / 480 |
| v5 | 15.8–18.4 | 2.6 | So why did the / Reserve Bank / **sell** it? | pale gold #f8f2a7 | 52, 43 | 99 | 276 (38%) | #785e36 | – |
| v5 | 45.9–47.6 | 1.7 | And here's the / worst **part.** | red #f64b43 | 43 | 119 | 406 (56%) | #6c1310 | 240 / 420 |

(* v2's first card was sampled before its glow had fully risen. "–": the radial fit failed; the strips show the same glow.)

What every card does:
- **It is FLAT type on black with a soft radial glow. It is not a 3-D object:** no extrusion, no floor, no reflection, no
  camera move. (Our cut made the cards extruded letters standing on a mirror floor: wrong.)
- **Sizes:** lead-in glyph box 40–53 px (3.1–4.1% of frame height), white #faf0ee, regular weight, wide letter- and
  word-spacing; key word 98–124 px tall (7.7–9.7%), bold ITALIC, 38–81% of the frame's width (56% median); lines 100–150 px
  apart; the block is centred at 51–54% of the height and horizontally.
- **Glow:** a radial bloom centred on the key word, peak luminance 0.14–0.33, half-strength at 240–260 px from the word and
  gone by 420–520 px (so it reaches the frame's side edges but not its top and bottom); colour is the key word's hue at
  about a third of its value (amber #743815, red #6c1310, pale gold #785e36). The key word's own letters also bloom.
- **Animation:** hard cut to black (1–2 black frames); words arrive one at a time on their spoken onsets, about every
  0.15–0.35 s; each word is announced for 1–2 frames by a small blurred block at its place and then resolves (a
  typed/decoded entrance); the key word comes last or second to last with the glow rising over ~6 frames; any trailing
  small word follows; hold 0.5–0.8 s; hard cut out to a moving shot.
- **Duration:** 1.3–2.9 s (median 1.7 s). Count: 2–3 per film (v1 3, v2 2, v3 3, v4 2, v5 2), at about 13–20%, 40–55% and
  65–77% of the running time.
- **Colour by meaning:** amber for "explain / problem / close / expensive", pale gold for a question or a twist, red for
  "worst part" (every film that has a "worst part" card uses red).

## 10. Camera statistics (every third frame, features tracked with optical flow, cards excluded)

| share of time | v1 | v2 | v3 | v4 | v5 |
|---|---|---|---|---|---|
| static | 0.7% | 3.1% | 5.3% | 18.3% | 1.1% |
| push-in | 38.9% | 32.1% | 40.4% | 18.5% | 12.9% |
| pull-out | 11.8% | 7.9% | 12.0% | 16.4% | 18.0% |
| lateral (track or orbit) | 25.8% | 23.3% | 17.1% | 16.1% | 26.0% |
| vertical (crane or tilt) | 13.3% | 24.3% | 15.8% | 23.7% | 31.5% |
| fast travel (> 14 px/frame) | 9.2% | 8.9% | 7.7% | 5.4% | 10.0% |
| longest still stretch | 0.2 s | 1.0 s | 2.4 s | 1.2 s | 0.2 s |
| image speed, median (px/frame) | 2.1 | 1.7 | 0.6 | 0.4 | 1.7 |
| image speed, 25th / 75th / 95th pct | 0.8 / 5.6 / 20.6 | 0.6 / 5.0 / 20.8 | 0.3 / 3.2 / 24.9 | 0.2 / 1.7 / 14.7 | 0.5 / 5.3 / 20.8 |
| peak | 140 | 79 | 121 | 120 | 116 |

Caveats: the classes come from a 2-D similarity fit to tracked points, so an orbit and a lateral track both read as
"lateral", and an object that moves while the camera holds reads as camera motion. From the hand log of v5: of its 15
picture shots, 5 contain an orbit or a swing round the subject, 9 a push-in or pull-out, 4 a crane, 5 a whip travel, and
none is locked off.

- The camera is still for 1–5% of the time in four films (18% in v4). It is essentially ALWAYS moving.
- A typical hold moves the picture 0.5–2 px a frame (0.07–0.3% of the frame width per frame, 2–8% per second).
- Fast travel is 5–10% of the running time: bursts of 6–15 frames at 15–60 px/frame, peaking at 80–140.
- Hard cuts (ffmpeg scene score > 0.3): v1 10, v2 5, v3 3, v4 2, v5 8, plus two cuts per card: a film has only 9–16 cuts
  in 60–85 s; everything else is the camera flying.
- Caption cadence is the same in every film: 67–88 captions, median hold 0.70–0.82 s.

## 11. What could not be measured

- **Field of view** cannot be recovered from the frames. From perspective (converging rails and drawer sides, how fast near
  parts grow) the close shots look like a moderate wide lens, roughly 35–50° vertical, and the widest (the quarry's opening,
  the vault door swinging past) nearer 55–65°. These are estimates.
- **Sound** is in the preferences already (−14.1 LUFS, range ~2 LU, bed ~5 dB under the voice).
- The three films I did not log shot by shot (v2, v3, v4) are covered here only by the measurements and the 2 s sheets.
