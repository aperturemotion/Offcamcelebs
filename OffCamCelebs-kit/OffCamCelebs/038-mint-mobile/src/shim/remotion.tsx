// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE REMOTION SURFACE THE FILM USES, re-implemented for HyperFrames (no Remotion code is bundled).
// The film's components are pure functions of the frame. HyperFrames owns time: src/hf/driver.tsx sets the frame from
// each `hf-seek` (root time × 30) and re-renders every mounted layer. Only seven Remotion names were ever used:
//   useCurrentFrame · interpolate · Easing.bezier · AbsoluteFill · Sequence · Audio · staticFile
// Audio is NOT drawn here: the voice, the bed and every SFX cue are HyperFrames <audio> clips (index.html).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { h, type ComponentChildren } from "preact";
import type { CSSProperties } from "preact/compat";

let FRAME = 0;
let UID = 0;
/** set by the driver before each render (it also restarts the frame's id counter) */
export const setFrame = (f: number) => { FRAME = f; UID = 0; };
/** ★ a document-unique id for this frame's SVG defs (a gradient, a clip). Preact's useId repeats across the separately
 *  rendered layers, so two layers' gradients took one id and an object painted with another's colours (029 HF's first
 *  snapshots: a cream card in green, steel chain links in blue and red). The driver re-renders every layer each frame, in
 *  order, so a counter reset per frame gives every def its own id. */
export const frameUid = () => `fu${(UID++).toString(36)}`;
export const useCurrentFrame = () => FRAME;
export const useVideoConfig = () => ({ fps: 30, width: 1080, height: 1920, durationInFrames: 1908 });

// ── easing: the cubic-bezier solver Remotion (and CSS) use — Newton-Raphson with a bisection fallback ──
const NEWTON_ITERATIONS = 4, NEWTON_MIN_SLOPE = 0.001, SUBDIVISION_PRECISION = 1e-7, SUBDIVISION_MAX_ITERATIONS = 10;
const kSplineTableSize = 11, kSampleStepSize = 1 / (kSplineTableSize - 1);
const A = (a1: number, a2: number) => 1 - 3 * a2 + 3 * a1;
const B = (a1: number, a2: number) => 3 * a2 - 6 * a1;
const C = (a1: number) => 3 * a1;
const calcBezier = (t: number, a1: number, a2: number) => ((A(a1, a2) * t + B(a1, a2)) * t + C(a1)) * t;
const getSlope = (t: number, a1: number, a2: number) => 3 * A(a1, a2) * t * t + 2 * B(a1, a2) * t + C(a1);
const bezier = (x1: number, y1: number, x2: number, y2: number) => {
  if (x1 === y1 && x2 === y2) return (x: number) => x;
  const sample = new Float32Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) sample[i] = calcBezier(i * kSampleStepSize, x1, x2);
  const tForX = (x: number) => {
    let start = 0, cur = 1;
    const last = kSplineTableSize - 1;
    for (; cur !== last && sample[cur] <= x; ++cur) start += kSampleStepSize;
    --cur;
    const dist = (x - sample[cur]) / (sample[cur + 1] - sample[cur]);
    const guess = start + dist * kSampleStepSize;
    const slope = getSlope(guess, x1, x2);
    if (slope >= NEWTON_MIN_SLOPE) {
      let t = guess;
      for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
        const s = getSlope(t, x1, x2);
        if (s === 0) return t;
        t -= (calcBezier(t, x1, x2) - x) / s;
      }
      return t;
    }
    if (slope === 0) return guess;
    let a = start, b = start + kSampleStepSize, t = 0, xx = 0, i = 0;
    do { t = a + (b - a) / 2; xx = calcBezier(t, x1, x2) - x; if (xx > 0) b = t; else a = t; }
    while (Math.abs(xx) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return t;
  };
  return (x: number) => (x === 0 || x === 1 ? x : calcBezier(tForX(x), y1, y2));
};
/** Remotion's Easing, as the 029 kit uses it: bezier, in / out / inOut wrappers, poly(n), cubic, sin */
export const Easing = {
  bezier,
  linear: (t: number) => t,
  in: (e: (t: number) => number) => e,
  out: (e: (t: number) => number) => (t: number) => 1 - e(1 - t),
  inOut: (e: (t: number) => number) => (t: number) => (t < 0.5 ? e(t * 2) / 2 : 1 - e((1 - t) * 2) / 2),
  poly: (n: number) => (t: number) => Math.pow(t, n),
  cubic: (t: number) => t * t * t,
  sin: (t: number) => 1 - Math.cos((t * Math.PI) / 2),
};

type Extrap = "clamp" | "extend" | "identity";
export const interpolate = (
  input: number, inputRange: readonly number[], outputRange: readonly number[],
  opts: { easing?: (t: number) => number; extrapolateLeft?: Extrap; extrapolateRight?: Extrap } = {},
): number => {
  const { easing = (t: number) => t, extrapolateLeft = "extend", extrapolateRight = "extend" } = opts;
  let i = 1;
  for (; i < inputRange.length - 1; i++) if (inputRange[i] >= input) break;
  const i0 = i - 1, i1 = i;
  const a = inputRange[i0], b = inputRange[i1], oa = outputRange[i0], ob = outputRange[i1];
  let x = input;
  if (x < a) { if (extrapolateLeft === "clamp") x = a; else if (extrapolateLeft === "identity") return x; }
  if (x > b) { if (extrapolateRight === "clamp") x = b; else if (extrapolateRight === "identity") return x; }
  if (a === b) return oa;
  let t = (x - a) / (b - a);
  t = easing(t);
  return oa + (ob - oa) * t;
};

export const AbsoluteFill = ({ style, children, ...rest }: { style?: CSSProperties; children?: ComponentChildren; [k: string]: unknown }) =>
  h("div", { ...rest, style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", ...(style as object) } }, children);

/** visual Sequences are not used by the film; audio Sequences are replaced by HyperFrames clips */
export const Sequence = ({ children }: { children?: ComponentChildren; from?: number; durationInFrames?: number }) => h("div", { style: { display: "contents" } }, children);
export const Audio = (_: { src: string; volume?: number | ((f: number) => number); startFrom?: number }) => null;
export const staticFile = (p: string) => `assets/${p}`;
export const Img = (p: { src: string; style?: CSSProperties }) => h("img", p as never);
export const delayRender = () => 0;
export const continueRender = (_: number) => undefined;
