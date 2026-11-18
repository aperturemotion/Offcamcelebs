// ═════════════════════════════════════════════════════════════════════════════════════════════
// SOLID 3-D LETTERS (rules P4, P11, P12): figures and words are THINGS in the world, extruded Archivo with a bevel, an
// emissive face and darker sides, standing on the floor or mounted on an object. Never CSS text.
//   text3d(str, opts)   one mesh; origin: the baseline, centred in x (or left), the BACK of the letters at z = 0 and their
//                       face at z = depth (so a word stands in front of what it is mounted on)
//   numeral3d(opts)     a counting figure: one cached mesh per character, laid out per frame by `set(str)`; digits take a
//                       fixed advance so a count does not jitter
// The outlines are Archivo's own (scratchpad/mkfont3d.mjs → src/three/fonts/*.json: 500, 800, 800 italic).
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font, type FontData } from "three/examples/jsm/loaders/FontLoader.js";
import f500 from "../three/fonts/archivo500.json";
import f800 from "../three/fonts/archivo800.json";
import f800i from "../three/fonts/archivo800i.json";

export type Face3 = "500" | "800" | "800i";
const DATA: Record<Face3, unknown> = { "500": f500, "800": f800, "800i": f800i };
const fonts = new Map<Face3, Font>();
const fontOf = (k: Face3) => { let f = fonts.get(k); if (!f) { f = new Font(DATA[k] as FontData); fonts.set(k, f); } return f; };

export type Text3Opts = {
  font?: Face3; size: number; depth?: number; bevel?: number;
  /** the letters' face (front and back caps) and their sides (default: the face) */
  face: THREE.Material; side?: THREE.Material; align?: "centre" | "left";
};
const geos = new Map<string, { g: THREE.BufferGeometry; w: number }>();
const geoOf = (str: string, font: Face3, size: number, depth: number, bevel: number) => {
  const key = `${font}|${size}|${depth}|${bevel}|${str}`;
  let e = geos.get(key);
  if (!e) {
    const g = new TextGeometry(str, {
      font: fontOf(font), size, depth: Math.max(0.1, depth - 2 * bevel), curveSegments: 6,
      bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelOffset: -bevel * 0.8, bevelSegments: 2,
    });
    g.translate(0, 0, bevel);
    g.computeBoundingBox();
    const b = g.boundingBox!;
    e = { g, w: Number.isFinite(b.max.x) ? b.max.x - Math.min(0, b.min.x) : 0 };
    geos.set(key, e);
  }
  return e;
};
/** the advance width of a string at `size` (font units → world units) */
export const textWidth = (str: string, font: Face3, size: number) => {
  const d = DATA[font] as { glyphs: Record<string, { ha: number }>; resolution: number };
  let w = 0;
  for (const ch of str) w += ((d.glyphs[ch] ?? d.glyphs["?"]).ha * size) / d.resolution;
  return w;
};

/** a solid extruded word */
export const text3d = (str: string, o: Text3Opts) => {
  const depth = o.depth ?? o.size * 0.25, bevel = o.bevel ?? Math.min(depth * 0.2, o.size * 0.03);
  const e = geoOf(str, o.font ?? "800", o.size, depth, bevel);
  const m = new THREE.Mesh(e.g, [o.face, o.side ?? o.face]);
  m.castShadow = true; m.receiveShadow = true;
  const g = new THREE.Group();
  m.position.x = o.align === "left" ? 0 : -textWidth(str, o.font ?? "800", o.size) / 2;
  g.add(m);
  g.userData.width = textWidth(str, o.font ?? "800", o.size);
  return g;
};

/** a counting figure: `set("$29,000,000,000")` lays the characters out; origin: baseline, centred in x */
export const numeral3d = (o: Text3Opts & { max?: number }) => {
  const font = o.font ?? "800", depth = o.depth ?? o.size * 0.25, bevel = o.bevel ?? Math.min(depth * 0.2, o.size * 0.03);
  const group = new THREE.Group();
  const pool: THREE.Mesh[] = [];
  const mats = [o.face, o.side ?? o.face];
  const digitW = Math.max(...Array.from("0123456789", (c) => textWidth(c, font, o.size)));
  const adv = (ch: string) => (/\d/.test(ch) ? digitW : textWidth(ch, font, o.size));
  let shown = "";
  const set = (str: string) => {
    if (str === shown) return;
    shown = str;
    const total = Array.from(str).reduce((s, c) => s + adv(c), 0);
    let x = -total / 2, i = 0;
    for (const ch of str) {
      const a = adv(ch);
      if (ch !== " ") {
        let m = pool[i];
        if (!m) { m = new THREE.Mesh(undefined, mats); m.castShadow = true; m.receiveShadow = true; pool.push(m); group.add(m); }
        m.geometry = geoOf(ch, font, o.size, depth, bevel).g;
        // a digit sits centred in its fixed cell
        m.position.x = x + (/\d/.test(ch) ? (digitW - textWidth(ch, font, o.size)) / 2 : 0);
        m.visible = true;
        i++;
      }
      x += a;
    }
    for (; i < pool.length; i++) pool[i].visible = false;
    group.userData.width = total;
  };
  return { group, set };
};
