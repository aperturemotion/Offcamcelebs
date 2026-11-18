// ═════════════════════════════════════════════════════════════════════════════════════════════
// A PLACE IN THE WORLD (rule P12). The film is ONE scene; each place stands on its own patch of the one floor, 14,000 units
// from the next, in the dark. A place is written in its OWN coordinates: x right, y UP, z toward its usual camera,
// the FLOOR at y = 0, its middle about the origin. Units are the old layer px (a tag is ~800 wide), so every object module
// in src/three/obj/* mounts as it is.
//   enter    the frame its first camera key starts (a cut's frame, or a travel's first frame)
//   shots    its camera keys, in its own coordinates and ABSOLUTE frames; the first key starts on `enter` and is either
//            cut(...) or a travel(...) from wherever the camera was. `to` is the next place's `enter`: no key may run past it
//   lights   the world's light rig at frame f, in its own coordinates: a KEY spot (the only shadow caster), a RIM spot
//            from behind (it draws the matte-black bodies by their edges), an AUX spot, a coloured ACCENT point light,
//            and the hemisphere fill. Intensities animate (light acts: P12); the rig's light COUNT never changes
//   build    its group and its acting: `update(f)` sets every moving thing from the frame (pure; seek-safe)
// Helpers: `prep(group)` readies any three group for the world (materials' environment, HDR boost of lit print, halos);
// `mountLegacy(model, {floor, cx})` mounts a first-cut place model (layer px, y down) with its floor at y = 0;
// `shotsFromLegacy(keys, …)` turns a first-cut 2-D camera path into real 3-D keys.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import type { SceneId } from "../audit/data";
import type { Model } from "../three/stage";
import type { CamKey } from "../r45/camera";
import { DRIFT } from "../r45/camera";
import { SETTLE } from "../r45/tokens";
import { cut, travel, type CamKey3, type Vec } from "./cam";

export type Spot = { pos: Vec; at: Vec; i: number; color?: string; angle?: number; soft?: number };
export type Lights = {
  /** the hemisphere fill (0.05–0.3): how far a black body is from nothing */
  amb?: number;
  key: Spot; rim?: Spot; aux?: Spot;
  accent?: { pos: Vec; color: string; i: number };
  /** the floor's reflection: where it is strongest (x, z), how far it reaches, and its strength */
  focus?: [number, number]; reach?: number; reflect?: number;
  /** the environment's strength on satin and metal (default 1) */
  env?: number;
};
export type Built = { group: THREE.Group; update: (f: number) => void };
export type Place3 = {
  id: SceneId; label: string; enter: number;
  shots: (w: { from: number; to: number }) => CamKey3[];
  lights: (f: number) => Lights;
  build: () => Built;
};

/** how much brighter than white lit print and lamps are (they bloom) */
export const GLOW = 1.5;
/** ready a group for the world: every standard material takes the studio environment at its own strength (set by the world
 *  each frame), lit print and lamps go HDR so they bloom, and flat fake glows are dropped (the world's lights and bloom are
 *  real). Floors of the first cut (mirrors, shadow catchers, contact blobs) are hidden: the world has ONE real floor. */
export const prep = (g: THREE.Object3D, o: { keepHalos?: boolean } = {}) => {
  g.traverse((n) => {
    if (n.userData.isFloor) { n.visible = false; n.userData.dropped = true; return; }
    const mesh = n as THREE.Mesh;
    if (!mesh.isMesh) return;
    const ms = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.Material[];
    for (const m of ms) {
      if ((m as THREE.ShadowMaterial).isShadowMaterial || (m as THREE.ShaderMaterial).isShaderMaterial) { mesh.visible = false; mesh.userData.dropped = true; continue; }
      const b = m as THREE.MeshBasicMaterial;
      if (b.isMeshBasicMaterial) {
        if (b.blending === THREE.AdditiveBlending) { if (!o.keepHalos) { mesh.visible = false; mesh.userData.dropped = true; } continue; }
        if (b.toneMapped === false && !b.userData.hdr) { b.userData.hdr = true; b.color.multiplyScalar(GLOW); }
        mesh.castShadow = false;
        continue;
      }
      const s = m as THREE.MeshStandardMaterial;
      if (s.isMeshStandardMaterial && s.userData.envBase === undefined) s.userData.envBase = s.envMapIntensity;
    }
  });
  return g;
};

/** mount a first-cut place model (layer px: x right, y DOWN, its floor at layer y `floor`, its middle at layer x `cx`) in
 *  place coordinates (floor at y = 0, middle at x = 0) */
export const mountLegacy = <P,>(make: () => Model<P>, o: { floor: number; cx: number; cz?: number }) => {
  const m = make();
  const group = new THREE.Group();
  m.root.position.set(-o.cx, o.floor, -(o.cz ?? 0));
  group.add(m.root);
  prep(group);
  return { group, update: (p: P) => m.update?.(p) };
};
/** a layer point (x, y down, z) → place coordinates */
export const fromLayer = (o: { floor: number; cx: number; cz?: number }, x: number, y: number, z = 0): Vec => [x - o.cx, o.floor - y, z - (o.cz ?? 0)];

/** a first-cut 2-D camera path (centre x, y in layer px, zoom z) → 3-D keys: the camera looks at that layer point from in
 *  front, a little to the side and above (a three-quarter view), at the distance that gives the same size on screen.
 *  The path is cut to [from, to): key 0 becomes a cut (with `dip`) or, with `travelIn`, the caller replaces it. */
export const shotsFromLegacy = (keys: CamKey[], g: { floor: number; cx: number }, w: { from: number; to: number },
  o: { side?: number; lift?: number; D?: number; fov?: number; dip?: number; depth?: number; travelIn?: number } = {}): CamKey3[] => {
  const D = o.D ?? 2059, side = o.side ?? 420, lift = o.lift ?? 260, fov = o.fov ?? 50;
  const pose = (k: CamKey): { pos: Vec; look: Vec } => {
    const look: Vec = [k.x - g.cx, g.floor - k.y, o.depth ?? 0];
    return { look, pos: [look[0] + side / k.z, look[1] + lift / k.z, look[2] + D / k.z] };
  };
  // the pose the 2-D path holds on `from` (its keys before `from` are already done)
  const t0 = w.from + (o.travelIn ?? 0);
  let k0 = keys[0];
  for (const k of keys) if (k.at + k.dur <= t0) k0 = k;
  const p0 = pose(k0);
  const out: CamKey3[] = [o.travelIn
    ? travel(w.from, o.travelIn, p0.pos, p0.look, { fov, why: "travel in through the dark", vol: 0.8 })
    : cut(w.from, p0.pos, p0.look, { fov, dip: o.dip ?? 5, why: "enter" })];
  let last = t0;
  for (const k of keys) {
    if (k === keys[0] || k.at < last || k.at + k.dur > w.to - 1) continue;
    const p = pose(k);
    out.push({ at: k.at, dur: k.dur, pos: p.pos, look: p.look, fov, ease: k.drift ? DRIFT : SETTLE, why: k.drift ? "breath" : "move",
      whoosh: !k.drift && Math.hypot(p.pos[0] - out[out.length - 1].pos[0], p.pos[1] - out[out.length - 1].pos[1], p.pos[2] - out[out.length - 1].pos[2]) > 500 ? 0.5 : undefined });
    last = k.at + k.dur;
  }
  return out;
};

/** the usual rig for a place: a soft white key from above-front-left, a cool rim from behind-right, a little fill.
 *  `c` is what it lights (place coordinates); `s` scales the distances for a bigger place */
export const stdLights = (c: Vec, o: { s?: number; key?: number; rim?: number; amb?: number; color?: string; reach?: number } = {}): Lights => {
  const s = o.s ?? 1;
  return {
    amb: o.amb ?? 0.16,
    key: { pos: [c[0] - 700 * s, c[1] + 1900 * s, c[2] + 1100 * s], at: c, i: o.key ?? 1.7, color: o.color ?? "#FFF4E2", angle: 0.62, soft: 0.75 },
    rim: { pos: [c[0] + 1100 * s, c[1] + 900 * s, c[2] - 1500 * s], at: c, i: o.rim ?? 3.2, color: "#CFE0FF", angle: 0.8, soft: 0.6 },
    aux: { pos: [c[0] - 1500 * s, c[1] + 500 * s, c[2] - 900 * s], at: c, i: (o.rim ?? 3.2) * 0.45, color: "#DDE6F5", angle: 0.8, soft: 0.6 },
    focus: [c[0], c[2]], reach: o.reach ?? 2600 * s, reflect: 0.5,
  };
};
