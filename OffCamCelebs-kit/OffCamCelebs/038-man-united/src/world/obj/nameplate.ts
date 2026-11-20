// A NAMEPLATE (the brief: "no faces: people appear as nameplates"): a heavy bevelled desk plate on a satin stand, its
// lines engraved-and-lit in heavy wide capitals, first line large, second smaller. It is sized FROM its text (P14: the text
// fits the surface it is on, with margin), and `setText` re-lays it (the plate grows if the new text needs it).
// makeNameplate(key, lines: string[], o?) → { group, setText(lines), size: { w, h, d } }
//   o.size first line's cap size (default 64) · o.color text colour (default warm white) · o.minW the plate's least width
//   Origin: the floor centre of its stand; the plate's face looks +z, tilted back 12°.
import * as THREE from "three";
import { MAT, K, lit, rbox, wide, textOn } from "../kit";
import { text3d, textWidth } from "../text3d";

export const makeNameplate = (key: string, lines: string[], o: { size?: number; color?: string; minW?: number } = {}) => {
  void key;
  const group = new THREE.Group();
  const s1 = o.size ?? 64, s2 = s1 * 0.62, k = 1.12;
  const face = lit(o.color ?? K.white, 0.95);
  const D = 46, TILT = -0.21;
  const stand = new THREE.Group();
  group.add(stand);
  const plateG = new THREE.Group();
  group.add(plateG);
  let size = { w: 0, h: 0, d: D };
  const lay = (ls: string[]) => {
    plateG.clear(); stand.clear();
    const widths = ls.map((l, i) => textWidth(l, "800", i === 0 ? s1 : s2) * k);
    const w = Math.max(o.minW ?? 0, Math.max(...widths) + s1 * 1.5);
    const h = s1 * 1.55 + (ls.length > 1 ? s2 * 1.45 : 0);
    // the stand: a satin foot and two posts, the plate leaning back on them
    const base = rbox(w + 40, 22, 160, 8, MAT.satin()); base.position.y = 11; stand.add(base);
    const plate = rbox(w, h, D, 10, MAT.black());
    plateG.position.set(0, 22 + h / 2 * Math.cos(TILT) + 10, 0);
    plateG.rotation.x = TILT;
    plateG.add(plate);
    ls.forEach((l, i) => {
      const sz = i === 0 ? s1 : s2;
      const y = ls.length === 1 ? -sz * 0.345 : i === 0 ? h / 2 - s1 * 0.5 - s1 * 0.69 : -h / 2 + s2 * 0.7;
      const t = wide(text3d(l, { font: "800", size: sz, depth: 3, bevel: 0, face }), k);
      t.position.set(0, y, D / 2 + 0.5);
      t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
      textOn(t, plate, { inset: 5 });
      plateG.add(t);
    });
    size = { w: w + 40, h: 22 + h + 10, d: 160 };
  };
  lay(lines);
  return { group, setText: lay, get size() { return size; } };
};
