// ═════════════════════════════════════════════════════════════════════════════════════════════
// A PLACE IN THE WORLD (THE PAYOUTS; engine v2, 2026-11-18, after the reference study:
// OffCamCelebs/styles/payouts-moneydecoded-study/README.md, rules R1–R32).
// The film is ONE scene and ONE camera. Places are joined by HARD CUTS (R23): only the place on screen is in the scene, and
// every place stands at the world's origin on the same studio floor, in front of the same backdrop. A place is written in
// its OWN coordinates: x right, y UP, z toward its usual camera, the FLOOR at y = 0. Units are px-like (a hero object is
// 600–1,400 across).
//   enter    the frame its first camera key starts: ALWAYS a hard cut (cut(...) or whipIn(...)); use timeline.ts `enterOf`
//   stage    "dark" (the lit dark-grey studio: R1–R4), "light" (a pale grey seamless table seen from above: R5) or "card"
//            (a turn card: black, no floor, no backdrop: R27)
//   shots    its camera keys, in its own coordinates and ABSOLUTE frames; the first key starts on `enter`; `to` is the next
//            place's `enter`: no key may run past it. Camera travel happens only INSIDE the place's own set
//   lights   the rig at frame f: a KEY spot (the only shadow caster), a RIM spot from behind (black bodies read by their
//            edges), an AUX spot, a BACK spot on the backdrop (the soft sweep behind the subject: R2), a coloured ACCENT
//            point light, and the hemisphere fill. Intensities animate (light acts); the light COUNT never changes
//   build    its group and its acting: `update(f)` sets every moving thing from the frame (pure; fractional f allowed:
//            the motion blur samples sub-frames)
//   blur     (optional) true on frames where the ACTING is fast (a drop, a whip of an object): those frames are rendered
//            with motion blur even when the camera is slow
//   cues     (optional) the place's sound cues (score.ts): one per acted beat
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import type { SceneId } from "../audit/data";
import type { SfxName } from "../r45/SfxLayer";
import type { CamKey3, Vec } from "./cam";

export type Spot = { pos: Vec; at: Vec; i: number; color?: string; angle?: number; soft?: number };
export type Lights = {
  /** the hemisphere fill (dark stage ≈ 0.55): how far a black body is from nothing */
  amb?: number;
  key: Spot; rim?: Spot; aux?: Spot;
  /** the light on the backdrop behind the subject (the sweep) */
  back?: Spot;
  accent?: { pos: Vec; color: string; i: number };
  /** the floor's blurred reflection: where it is strongest (x, z), how far it reaches, its strength (≈ 0.08: R4) */
  focus?: [number, number]; reach?: number; reflect?: number;
  /** the environment's strength on satin and metal (default 1) */
  env?: number;
};
export type Built = { group: THREE.Group; update: (f: number) => void };
export type Stage = "dark" | "light" | "card";
/** a sound cue: `hit` starts on `at` (a landing, a click); `move` PEAKS on `at` (a whoosh on a move's fastest frame) and is
 *  cut by `end` */
export type PlaceCue = { kind: "hit" | "move"; s: SfxName; at: number; end?: number; vol: number; why: string };
export type Place3 = {
  id: SceneId; label: string; enter: number; stage?: Stage;
  /** (optional) the stage at frame f, for a place that hard-cuts between a dark and a light set (overrides `stage`) */
  stageAt?: (f: number) => Stage;
  shots: (w: { from: number; to: number }) => CamKey3[];
  lights: (f: number) => Lights;
  build: () => Built;
  blur?: (f: number) => boolean;
  cues?: (w: { from: number; to: number }) => PlaceCue[];
};

/** how much brighter than white self-lit print is (it blooms: the bloom's threshold is LOOK.bloomAt) */
export const GLOW = 1.18;

/** ready a group for the world: every standard material remembers its own environment strength (the world sets it per
 *  frame); self-lit print never casts a shadow */
export const prep = (g: THREE.Object3D) => {
  g.traverse((n) => {
    const mesh = n as THREE.Mesh;
    if (!mesh.isMesh) return;
    for (const m of (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.Material[]) {
      if ((m as THREE.MeshBasicMaterial).isMeshBasicMaterial) { mesh.castShadow = false; continue; }
      const s = m as THREE.MeshStandardMaterial;
      if (s.isMeshStandardMaterial && s.userData.envBase === undefined) s.userData.envBase = s.envMapIntensity;
    }
  });
  return g;
};

/** THE STANDARD RIG for a dark-stage place, tuned to the study's measured targets (README R1–R3): a large soft warm-white
 *  key from above-front-left, a neutral rim from behind-right, a low fill from the left, and the backdrop's sweep behind the
 *  subject. `c` is what it lights (place coordinates); `s` scales the distances for a bigger subject. */
export const stdLights = (c: Vec, o: { s?: number; key?: number; rim?: number; amb?: number; back?: number; color?: string; reach?: number } = {}): Lights => {
  const s = o.s ?? 1;
  return {
    amb: o.amb ?? 0.2,
    key: { pos: [c[0] - 900 * s, c[1] + 2300 * s, c[2] + 1500 * s], at: [c[0], c[1] * 0.5, c[2]], i: o.key ?? 3.6, color: o.color ?? "#FBF7F6", angle: 0.42, soft: 1 },
    rim: { pos: [c[0] + 1300 * s, c[1] + 1100 * s, c[2] - 1500 * s], at: c, i: o.rim ?? 3, color: "#F4F1F2", angle: 0.8, soft: 0.8 },
    aux: { pos: [c[0] - 1700 * s, c[1] + 500 * s, c[2] - 700 * s], at: c, i: (o.rim ?? 3) * 0.5, color: "#EEEAEA", angle: 0.8, soft: 0.8 },
    back: { pos: [c[0], c[1] + 900 * s, c[2] + 600], at: [c[0], c[1] + 500 * s, BACKDROP_Z], i: o.back ?? 3.2, color: "#F2EEEE", angle: 0.5, soft: 1 },
    focus: [c[0], c[2]], reach: o.reach ?? 2600 * s, reflect: 0.06,
  };
};
/** where the backdrop stands behind every place (place z) */
export const BACKDROP_Z = -2600;
/** the rig for a LIGHT scene (R5): a pale seamless table seen from above; a broad soft key, no rim */
export const lightStageLights = (c: Vec, o: { key?: number; amb?: number } = {}): Lights => ({
  amb: o.amb ?? 0.95,
  key: { pos: [c[0] - 700, c[1] + 2600, c[2] + 900], at: c, i: o.key ?? 1.1, color: "#FFFFFF", angle: 0.8, soft: 1 },
  aux: { pos: [c[0] + 1500, c[1] + 1500, c[2] + 900], at: c, i: 0.35, color: "#FFFFFF", angle: 0.9, soft: 1 },
  back: { pos: [c[0], c[1] + 1200, c[2] + 600], at: [c[0], c[1] + 600, BACKDROP_Z], i: 0.4, color: "#FFFFFF", angle: 0.9, soft: 1 },
  focus: [c[0], c[2]], reach: 2600, reflect: 0,
});
