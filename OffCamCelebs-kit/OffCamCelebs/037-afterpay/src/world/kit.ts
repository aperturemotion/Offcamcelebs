// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE PLACE-WORKERS' KIT (THE PAYOUTS; engine v2, 2026-11-18). Everything a place needs to look and act like the
// references (OffCamCelebs/styles/payouts-moneydecoded-study/README.md). Import from here; do not re-invent.
//
//   COLOURS   K.white (#f8f2f2, the default figure), K.money (#f6f2bd, a money figure), K.red (#f55048, ONLY the bad number
//             or the bad thing), K.amber, K.gold (#8a6f47, a gold BODY), K.cream (gold's highlight). NO mint, no blue.
//   MATERIALS MAT.black() matte-black body · MAT.graphite() · MAT.satin() edge metal · MAT.gold() · MAT.paper() (LIGHT
//             scenes only) · MAT.rubber() · lit(colour, k?) a SELF-LIT face (print, letters, lamps: it blooms)
//   SOLIDS    rbox(w, h, d, r, mat)   a chunky BEVELLED box, centred (edges read by the bevel and the rim light: R10;
//                                     never add a glowing outline)   · block(w, h, d, r, mat) the same, its BASE at y = 0
//             cyl(r, h, mat, seg?)    a cylinder, its base at y = 0
//   TEXT      text3d / numeral3d (./text3d): solid extruded Archivo. `wide(g, k = 1.14)` stretches letters to the
//             references' heavy WIDE look.
//             litPlate(lines, opts)   a black bevelled plate carrying ≤ 3 WORDS (or one figure with its unit) in heavy wide
//                                     self-lit capitals (R8, R15, R17); `.setLit(0…1)` lights it on its spoken word
//             counter(opts)           a counting figure (solid numerals): `.set(str)`; with countUp() and a fmt it counts up
//                                     to its value over 0.6–1.6 s and LANDS on the spoken word (R16)
//   FIGURES   countUp(f, a, b, from, to)   the value at frame f: from → to over [a, b], fast then settling; exactly `to` at b
//             dollars(n) "$29,000,000,000" · short(n) "$29B" / "$13.8B" / "$247"
//   LIGHT     ring(opts)              a thin ring of light that spreads on the floor from a landing (R16): `.update(f, at)`
//   ACTING    dropIn(f, land, o)      a gravity drop that LANDS on frame `land`, with one bounce and a small second one:
//                                     { y, on, fast } (y above rest; `fast` marks the frames to motion-blur: return it from
//                                     the place's `blur`)
//             swingIn(f, at, o)       a pendulum that swings in from the side and settles: { a (radians), on, fast }
//             popUp(f, at, dur?)      a spring scale 0 → 1.08 → 1 (never beyond 8% over): number
//             (R11: objects ENTER BY ACTING; nothing fades or slides in politely. R12: something happens every 1–1.5 s.)
//   STAGES    place.stage = "dark" | "light" | "card"; rigs: stdLights(c, o) and lightStageLights(c, o) in ./place;
//             the backdrop and its sweep are the world's (the rig's `back` spot); `backGlow(c, colour, i)` tints it for a beat.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { clamp01 } from "../r45/tokens";
import { text3d, numeral3d, textWidth, type Face3 } from "./text3d";
import { GLOW, BACKDROP_Z, type Spot } from "./place";
import type { Vec } from "./cam";

export const K = {
  white: "#f8f2f2", money: "#f6f2bd", red: "#f55048", amber: "#f6b050", gold: "#8a6f47", cream: "#f8e9c0",
  black: "#09090a", graphite: "#19191b", satin: "#9a9a9e", paper: "#e8e5de",
} as const;
const C = (h: string) => new THREE.Color(h);

export const MAT = {
  /** the matte-black body: broad soft gradients, a thin specular line on its bevels */
  black: () => new THREE.MeshPhysicalMaterial({ color: C(K.black), roughness: 0.42, metalness: 0.15, envMapIntensity: 0.9, clearcoat: 0.25, clearcoatRoughness: 0.45 }),
  graphite: () => new THREE.MeshPhysicalMaterial({ color: C(K.graphite), roughness: 0.5, metalness: 0.3, envMapIntensity: 0.8 }),
  /** edge metal: rails, hooks, rims */
  satin: () => new THREE.MeshPhysicalMaterial({ color: C(K.satin), roughness: 0.32, metalness: 1, envMapIntensity: 0.9 }),
  /** gold as a BODY (bars, coins): khaki-gold with pale cream highlights */
  gold: () => new THREE.MeshPhysicalMaterial({ color: C(K.gold), roughness: 0.34, metalness: 1, envMapIntensity: 1.25 }),
  /** paper: LIGHT scenes only (R5, R8) */
  paper: () => new THREE.MeshStandardMaterial({ color: C(K.paper), roughness: 0.92, metalness: 0 }),
  rubber: () => new THREE.MeshStandardMaterial({ color: C("#09090a"), roughness: 0.85, metalness: 0 }),
};
/** a SELF-LIT face (print, letters, a lamp): brighter than white by `k`, so it blooms */
export const lit = (color: string, k = GLOW) => {
  const m = new THREE.MeshBasicMaterial({ color: C(color).multiplyScalar(k), toneMapped: false });
  m.userData.full = m.color.clone();
  return m;
};
/** light a self-lit material from dim (0) to full (1) */
export const setLit = (m: THREE.MeshBasicMaterial, v: number, dim = 0.07) => { m.color.copy(m.userData.full as THREE.Color).multiplyScalar(dim + (1 - dim) * clamp01(v)); };

const shadowed = <T extends THREE.Mesh>(m: T) => { m.castShadow = true; m.receiveShadow = true; return m; };
/** a chunky bevelled box, centred on its own middle */
export const rbox = (w: number, h: number, d: number, r: number, mat: THREE.Material) =>
  shadowed(new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01)), mat));
/** the same, its base on y = 0 */
export const block = (w: number, h: number, d: number, r: number, mat: THREE.Material) => { const m = rbox(w, h, d, r, mat); m.position.y = h / 2; return m; };
/** a cylinder, its base on y = 0 */
export const cyl = (r: number, h: number, mat: THREE.Material, seg = 64) => { const m = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat)); m.position.y = h / 2; return m; };
/** the references' type is heavy AND wide: stretch a text3d group in x */
export const wide = <T extends THREE.Object3D>(g: T, k = 1.14) => { g.scale.x *= k; return g; };

// ── figures ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
/** the value at f of a count from `from` to `to` over [a, b]: fast, then settling; exactly `to` from b on */
export const countUp = (f: number, a: number, b: number, from: number, to: number) => {
  if (f >= b) return to;
  if (f <= a) return from;
  const t = (f - a) / (b - a);
  return from + (to - from) * (1 - Math.pow(1 - t, 2.6));
};
export const dollars = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
/** "$29B", "$13.8B", "$247": a rounded figure with its unit */
export const short = (n: number) => {
  const a = Math.abs(n);
  if (a >= 1e9) return "$" + (a >= 1e10 ? Math.round(n / 1e9) : Math.round(n / 1e8) / 10) + "B";
  if (a >= 1e6) return "$" + (a >= 1e7 ? Math.round(n / 1e6) : Math.round(n / 1e5) / 10) + "M";
  return "$" + Math.round(n).toLocaleString("en-US");
};
/** a counting figure of solid numerals. Origin: the baseline, centred in x; its back at z = 0. `face` is its self-lit
 *  material (recolour it with `face.color` / setLit to turn a number red as it lands: R18) */
export const counter = (o: { size: number; color?: string; depth?: number; font?: Face3; wide?: number }) => {
  const face = lit(o.color ?? K.white);
  const side = new THREE.MeshStandardMaterial({ color: C(o.color ?? K.white).multiplyScalar(0.22), roughness: 0.5, metalness: 0.4 });
  const n = numeral3d({ font: o.font ?? "800", size: o.size, depth: o.depth ?? o.size * 0.34, face, side });
  n.group.scale.x = o.wide ?? 1.14;
  return { group: n.group, set: n.set, face, side };
};

/** a black bevelled plate carrying ≤ 3 words (or a figure and its unit) in heavy wide self-lit capitals. Origin: the plate's
 *  centre; the text stands 2 units proud of its front (+z) */
export const litPlate = (lines: string[], o: { size?: number; color?: string; padX?: number; padY?: number; depth?: number; w?: number; mat?: THREE.Material; font?: Face3 } = {}) => {
  const words = lines.join(" ").trim().split(/\s+/).length;
  if (words > 3 && !/^[\d$.,%×x= ]+$/.test(lines.join(""))) throw new Error(`litPlate: "${lines.join(" ")}" is ${words} words; in-scene text is at most three words or one figure with a unit (R8)`);
  const size = o.size ?? 110, font = o.font ?? "800", k = 1.14;
  const face = lit(o.color ?? K.white);
  const widths = lines.map((l) => textWidth(l, font, size) * k);
  const w = o.w ?? Math.max(...widths) + 2 * (o.padX ?? size * 0.55);
  const lineH = size * 1.12, h = lines.length * lineH + 2 * (o.padY ?? size * 0.42), d = o.depth ?? Math.max(40, size * 0.5);
  const group = new THREE.Group();
  group.add(rbox(w, h, d, Math.min(18, d * 0.3), o.mat ?? MAT.black()));
  lines.forEach((l, i) => {
    const t = wide(text3d(l, { font, size, depth: 4, bevel: 0, face }), k);
    // the cap height of Archivo is ~0.69 em: centre the line's caps in its row
    t.position.set(0, ((lines.length - 1) / 2 - i) * lineH - size * 0.345, d / 2 + 0.5);
    t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    group.add(t);
  });
  return { group, face, w, h, d, setLit: (v: number) => setLit(face, v) };
};

// ── light ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
/** a thin ring of light spreading on the floor from a landing. Add `.mesh` to the place at the landing point (y is set);
 *  call `.update(f, at)` every frame: it grows to `r` over `dur` frames from `at` and fades */
export const ring = (o: { r?: number; w?: number; color?: string; dur?: number } = {}) => {
  const R = o.r ?? 900, wdt = (o.w ?? 12) / R, dur = o.dur ?? 28;
  const mat = new THREE.MeshBasicMaterial({ color: C(o.color ?? K.white).multiplyScalar(1.4), toneMapped: false, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
  const mesh = new THREE.Mesh(new THREE.RingGeometry(1 - wdt, 1, 96), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 1.5;
  mesh.renderOrder = 3;
  mesh.userData.isFloor = true;   // never mirrored
  return {
    mesh,
    update: (f: number, at: number) => {
      const t = (f - at) / dur;
      if (t <= 0 || t >= 1) { mesh.visible = false; return; }
      mesh.visible = true;
      const p = 1 - Math.pow(1 - t, 2.2);
      mesh.scale.setScalar(Math.max(1, R * p));
      mat.opacity = Math.pow(1 - t, 1.4) * 0.9;
    },
  };
};
/** tint the backdrop's sweep for a beat (the backdrop turns gold on "rich", red rises with a bad fact): a rig `back` spot */
export const backGlow = (c: Vec, color: string, i: number): Spot => ({ pos: [c[0], c[1] + 900, c[2] + 600], at: [c[0], c[1] + 500, BACKDROP_Z], i, color, angle: 0.85, soft: 1 });

// ── acting curves (pure functions of the frame; fractional frames allowed) ──────────────────────────────────────────────
/** a gravity drop that LANDS on frame `land` from height `h` (it falls for `fall` frames), bounces once to `bounce` × h ×
 *  0.12 and once more, smaller. `y` is the height above rest; `on` false before it enters; `fast` true while it falls */
export const dropIn = (f: number, land: number, o: { h?: number; fall?: number; bounce?: number } = {}) => {
  const h = o.h ?? 1400, T = o.fall ?? 9, bh = h * (o.bounce ?? 1) * 0.045;
  const t = f - land;
  if (t < -T) return { y: h, on: false, fast: false };
  if (t < 0) { const u = (t + T) / T; return { y: h * (1 - u * u), on: true, fast: true }; }
  const B1 = 9, B2 = 6;
  if (t < B1) { const u = t / B1; return { y: bh * 4 * u * (1 - u), on: true, fast: t < 2 }; }
  if (t < B1 + B2) { const u = (t - B1) / B2; return { y: bh * 0.28 * 4 * u * (1 - u), on: true, fast: false }; }
  return { y: 0, on: true, fast: false };
};
/** a pendulum that swings in and settles: at `at` it is at `amp` radians (off to the side), then damps to 0 */
export const swingIn = (f: number, at: number, o: { amp?: number; period?: number; damp?: number } = {}) => {
  const amp = o.amp ?? 1.1, P = o.period ?? 30, k = o.damp ?? 0.075;
  const t = f - at;
  if (t < 0) return { a: amp, on: false, fast: false };
  return { a: amp * Math.exp(-k * t) * Math.cos((2 * Math.PI * t) / P), on: true, fast: t < P / 4 };
};
/** a spring scale: 0 → 1.08 → 1 over `dur` frames from `at` */
export const popUp = (f: number, at: number, dur = 11) => {
  const t = (f - at) / dur;
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  if (t < 0.62) { const u = t / 0.62; return 1.08 * (1 - Math.pow(1 - u, 3)); }
  const u = (t - 0.62) / 0.38;
  return 1.08 - 0.08 * (u * u * (3 - 2 * u));
};
