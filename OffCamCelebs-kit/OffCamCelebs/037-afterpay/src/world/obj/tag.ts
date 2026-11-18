// THE PRICE TAG ON ITS CRANE (037 v2; worker A): a thick slab price tag with clipped shoulders and a grommet, hanging from a
// crane hook on a chain. Origin: the PIVOT the chain swings from; the chain runs on up out of sight above it.
//   update({ swing (radians), lit 0…1 })    TAG.centre: the tag's centre below the pivot
import * as THREE from "three";
import { MAT, K, lit, setLit, wide, textOn, joined } from "../kit";
import { text3d } from "../text3d";

const L = 1500;
export const TAG = { w: 810, h: 470, d: 66, centre: L + 150 + 235, chain: L } as const;
export const makeTag = (key: string, words = "SOLD FOR") => {
  const group = new THREE.Group();
  group.name = `tag-${key}`;
  const satin = MAT.satin();
  const link = new THREE.TorusGeometry(24, 7, 10, 24);
  const chain = (g: THREE.Group, y0: number, y1: number) => {
    const n = Math.round(Math.abs(y1 - y0) / 58);
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(link, satin);
      m.scale.y = 1.55;
      m.position.y = y0 + ((y1 - y0) * (i + 0.5)) / n;
      m.rotation.y = i % 2 ? Math.PI / 2 : 0;
      m.castShadow = true;
      g.add(m);
    }
  };
  const up = new THREE.Group();
  chain(up, 0, 2600);
  const swing = new THREE.Group();
  chain(swing, -L, 0);
  // the hook: a block, then a J of round bar
  const blockM = new THREE.Mesh(new THREE.CylinderGeometry(34, 40, 70, 24), MAT.black());
  blockM.position.y = -L - 30;
  blockM.castShadow = true;
  const hook = new THREE.Mesh(new THREE.TorusGeometry(46, 13, 14, 40, Math.PI * 1.45), satin);
  hook.position.y = -L - 106;
  hook.rotation.z = Math.PI * 0.82;
  hook.castShadow = true;
  // the tag: an extruded slab with clipped shoulders and a hole for the grommet
  const w = TAG.w, h = TAG.h, c = 120;
  const s = new THREE.Shape();
  s.moveTo(-w / 2, -h / 2); s.lineTo(w / 2, -h / 2); s.lineTo(w / 2, h / 2 - c); s.lineTo(w / 2 - c, h / 2);
  s.lineTo(-w / 2 + c, h / 2); s.lineTo(-w / 2, h / 2 - c); s.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, h / 2 - 62, 26, 0, Math.PI * 2, true);
  s.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(s, { depth: TAG.d - 20, bevelEnabled: true, bevelThickness: 10, bevelSize: 10, bevelSegments: 4, curveSegments: 24 });
  geo.translate(0, 0, -(TAG.d - 20) / 2);
  const slab = new THREE.Mesh(geo, MAT.black());
  slab.castShadow = true; slab.receiveShadow = true;
  const grommet = new THREE.Mesh(new THREE.TorusGeometry(31, 8, 12, 32), satin);
  grommet.position.set(0, h / 2 - 62, TAG.d / 2 - 4);
  const grommetB = grommet.clone(); grommetB.position.z = -TAG.d / 2 + 4;
  // the ring that hangs it on the hook
  const ringM = new THREE.Mesh(new THREE.TorusGeometry(40, 7, 10, 32), satin);
  ringM.position.set(0, h / 2 - 22, 0);
  ringM.rotation.y = Math.PI / 2;
  ringM.castShadow = true;
  const face = lit(K.white, 1.0);
  const word = wide(text3d(words, { font: "800", size: 92, depth: 6, bevel: 0, face }));
  word.position.set(0, -95, TAG.d / 2 + 0.5);
  textOn(word, slab, { inset: 10 });
  // a recessed rule above the words, as a price tag has
  const rule = new THREE.Mesh(new THREE.BoxGeometry(w - 220, 6, 3), satin);
  rule.position.set(0, 60, TAG.d / 2 + 1);
  const tag = new THREE.Group();
  tag.add(slab, grommet, grommetB, ringM, word, rule);
  tag.position.y = -TAG.centre;
  swing.add(blockM, hook, tag);
  group.add(up, swing);
  joined(up, swing, "the chain's links are linked at the pivot");
  return {
    group, face,
    update: (p: { swing: number; lit: number }) => { swing.rotation.z = p.swing; setLit(face, p.lit, 0.16); },
  };
};
