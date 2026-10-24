import { Easing, interpolate } from "remotion";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★★★ RULE 45 — "FLAT EDITORIAL" (user, 2026-10-07, the 027 brief: "NEW HOUSE STYLE — this REPLACES the Bartlett 3D
// materials spec from now on"). Flat 2-D cel-shaded SVG: a base colour, ONE shade and one thin highlight stripe on glossy
// or glass objects. NO strokes on any object (one treatment for the whole film). The spec is the first section of
// OffCamCelebs/styles/offcamcelebs-preferences.md. Numbers here are at 1080×1920.
// ═══════════════════════════════════════════════════════════════════════════

/** ★ 028 "SKIMS NEUTRALS" (the brief is content-only: the look is mine). Warm neutrals from espresso to sand, monochrome
 *  plus ONE accent per job. Grounds keep their kit names ("cream" = sand, "dark" = espresso) */
export const P = {
  ink: "#2A1B15", inkHi: "#3D2A21",
  // the object tones, dark → light, each with ONE shade and a highlight stripe (cel shading)
  cocoa: "#5C3B2E", cocoaSh: "#45291F", cocoaHi: "#7C5444",
  clay: "#B5836A", claySh: "#976853", clayHi: "#CFA287",
  nude: "#E0BFA8", nudeSh: "#C8A28A", nudeHi: "#F0D8C7",
  blush: "#F2E4D8", blushSh: "#E0CCBC",
  sand: "#F7F1E9", sandSh: "#E8DED2", white: "#FFFFFF",
  // ★ GOLD ONLY ON MONEY (bars, coins, price tags)
  gold: "#F2C230", goldSh: "#C9971A", goldHi: "#FBE38A",
  // ★ DUSTY ROSE ONLY ON KKW BEAUTY / SKKN (the beauty brand)
  rose: "#C9707C", roseSh: "#A9555F", roseHi: "#E39AA3",
  // ★ GREEN ONLY ON THE VERDICT WORD (LEGIT)
  green: "#3E8B5C", greenSh: "#2F6E48",
  // hands
  skin: "#D9A27E", skinSh: "#BC8461", nail: "#F2D5C2",
  // grounds
  // ★ 032: the LOCKED look's espresso again (L2). 031's burgundy and grid were the user's notes on 031 alone (its "Use this
  //   for all videos" went with the camera note only), so they stay in 031: #3A0A16 / #651B2B there.
  sandEdge: "#E6DACC", espresso: "#231710", espressoCentre: "#3B2A20",
  // ★ 029: the money is US CURRENCY (its grey-green paper and the bank's mustard strap); RED is the court's and the verdict's
  //   ink (an ALLEGED tab, a lien tag, UNSUPPORTED); LEGAL BLUE is a complaint's backing sheet; STEEL is a chain and a lock
  // ★ rule 51: the paper brighter and cleaner (it read as grey-green mud); two printings so bricks differ; the blue ribbon
  bill: "#C8D0B5", billAlt: "#C2CBB2", billSh: "#99A487", billHi: "#E5EAD8", billInk: "#4D5E45", ribbon: "#3E6FB0",
  strap: "#D9B44A", strapSh: "#B08E2E", strapHi: "#E8C766", strapInk: "#5A4310",
  red: "#B23A33", redSh: "#8C2A25",
  legal: "#3E5F8E", legalSh: "#2E4870",
  steel: "#8E949A", steelSh: "#5F656B", steelHi: "#D3D8DC",
  lamp: "#FFE7B0",
} as const;

export type Ground = "cream" | "dark";
export const inkOn = (g: Ground) => (g === "cream" ? P.ink : P.sand);

// ═══════════════════════════════════════════════════════════════════════════
// ★★★★ RULE 48 — EVERYTHING EASES IN AND OUT (user, 2026-10-07: "the animations and transitions still don't smooth in and
// out enough, enforce that further"). EVERY curve the film uses lives HERE, and each one starts AND ends at rest (its
// first- and last-frame speed ≤ 15% of its peak; under half its peak for ≥ 15% of its run at each end) and never
// overshoots. scratchpad/curves028.mjs proves every one on every run, and refuses a curve made anywhere else.
// The one exception is EXIT, for a thing that LEAVES THE FRAME; curves028 holds the declared list of its uses.
// What this replaced: the brief's back-out entrances (BACK / BACK_SOFT, overshoot 1.2: full speed on frame 1, or an
// overshoot), the old SOFT (0.22, 0.68, …: full speed on frame 1, and it was the DEFAULT of every ramp), ease-out counters,
// a quad-out caption word-in, falls that landed at speed, and the dive (into its switch at full speed, out at full speed).
// ═══════════════════════════════════════════════════════════════════════════
/** in-scene actions, moves and fades — the default of every ramp: a soft start and a long settle */
export const SOFT = Easing.bezier(0.5, 0, 0.25, 1);
/** entrances (from off the frame, or appearing in place): the same family, a touch quicker off the mark, NO overshoot */
export const ARRIVE = Easing.bezier(0.45, 0, 0.25, 1);
/** 100bps' in-out, for small in-scene moves */
export const SMOOTH = Easing.bezier(0.45, 0.05, 0.35, 1);
/** the camera's travels and the hand-overs: symmetric, the widest shoulders */
export const TRAVEL = Easing.bezier(0.6, 0, 0.4, 1);
/** ★★ RULE 50 (2026-10-08, the references measured): things SNAP, then settle — half the travel early, a long settle.
 *  The most front-loaded curve that still passes rule 48 (searched, scratchpad/curvetry.mjs): t50 0.26 (SOFT 0.41,
 *  TRAVEL 0.50; the references' mechanical moves 0.18–0.25), start 7% of peak, soft start 16%, soft end 68%. For every
 *  in-view action and every in-place camera move. */
export const SETTLE = Easing.bezier(0.4, 0.12, 0, 1);
/** ⚠ DECLARED ENTRANCES ONLY: a thing that arrives from BEYOND THE FRAME EDGE glides in on a quart-out, as the references'
 *  slide-ins do (they start at full speed; half the travel by t 0.16). Its fast frames are spent OFF-SCREEN, so on screen
 *  it only glides and settles (rule 48 holds where it can be seen). Every use is declared in scratchpad/curves028.mjs */
export const GLIDE = Easing.out(Easing.poly(4));
/** cross-dissolves (the ground between sets) */
export const INOUT = Easing.inOut(Easing.sin);
/** counters: start from rest and land softly on their word */
export const COUNT = Easing.bezier(0.45, 0, 0.25, 1);
/** a TYPED COUNT: characters arrive at an even cadence, as on a keyboard. Not a motion, so not a curve: curves028.mjs
 *  lists it apart and allows it only where text is typed */
export const TYPE = (t: number) => t;
/** ⚠ EXITS ONLY: a thing that LEAVES THE FRAME (or falls out of sight) may accelerate out, its fast frames unseen.
 *  Every use is declared in scratchpad/curves028.mjs with its reason; anything that stops in view eases out instead */
export const EXIT = Easing.in(Easing.cubic);

export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
export const ramp = (f: number, a: number, b: number, ease: (t: number) => number = SOFT) =>
  interpolate(f, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const mix = (a: string, b: string, t: number) => {
  const p = (h: string, i: number) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
  return `rgb(${[0, 1, 2].map((i) => Math.round(p(a, i) + (p(b, i) - p(a, i)) * clamp01(t))).join(",")})`;
};
/** an ENTRANCE: 0 → 1 from rest to rest over n frames from a (rule 48: no overshoot) */
export const enter = (f: number, a: number, n = 16) => ramp(f, a, a + n, ARRIVE);
/** an appearing element's opacity on its own soft curve (never its motion's ramp ×3) */
export const fadeIn = (f: number, a: number, n = 10) => ramp(f, a, a + n, SMOOTH);
/** a settle with no oscillation: amplitude a at u=0, eased to 0 over n frames */
export const settle = (u: number, a: number, n: number) => a * (1 - SOFT(clamp01(u / n)));
/** money: "$1,234" */
export const money = (v: number) => "$" + Math.round(v).toLocaleString("en-US");
