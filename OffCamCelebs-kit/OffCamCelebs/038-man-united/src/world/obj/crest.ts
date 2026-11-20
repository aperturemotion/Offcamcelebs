// THE MANCHESTER UNITED CREST as a solid badge (P16: the real artwork, assets/brand/crest.png): the crest's own outer
// silhouette (crest_outline.json, traced from the PNG's alpha) extruded into a thick body with a bevelled GOLD rim, the
// real artwork printed on BOTH faces (alpha-cut to the artwork's own edge, the gold body showing round it).
// makeCrest(key, size = 600) → { group, size, depth }   Origin: the badge's centre. `size` is its width; height ≈ 1.01 × size,
// depth 0.09 × size. It faces +z (the back face reads the right way round from behind).
import * as THREE from "three";
import OUTLINE from "./crest_outline.json";
import { printMat } from "./brand";

const gold = () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#b08a3c"), roughness: 0.28, metalness: 1, envMapIntensity: 1.3, clearcoat: 0.3 });

export const makeCrest = (key: string, size = 600) => {
  void key;
  const group = new THREE.Group();
  const depth = size * 0.09, bevel = size * 0.018;
  const pts = (OUTLINE as unknown as { pts: [number, number][] }).pts;
  const shape = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x * size, y * size)));
  const g = new THREE.ExtrudeGeometry(shape, { depth: depth - 2 * bevel, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.9, bevelSegments: 4, curveSegments: 6 });
  g.translate(0, 0, -(depth - 2 * bevel) / 2);
  const body = new THREE.Mesh(g, gold());
  body.castShadow = true; body.receiveShadow = true;
  group.add(body);
  // the artwork: a quad of the image's own proportions, alpha-cut, just proud of each face
  const aspect = (OUTLINE as { aspect: number }).aspect;
  const art = (front: boolean) => {
    const m = printMat("crest", { alphaTest: 0.5, emissive: 0, rough: 0.55 });
    m.side = THREE.FrontSide;
    // the printed yellow sits near the bloom threshold under the key: a hair darker, so the badge reads as print, not a lamp
    m.color.setScalar(0.82);
    const q = new THREE.Mesh(new THREE.PlaneGeometry(size, size * aspect), m);
    q.position.z = (front ? 1 : -1) * (depth / 2 + 0.6);
    if (!front) q.rotation.y = Math.PI;
    q.receiveShadow = true;
    q.userData.print = "the Manchester United crest (assets/brand/crest.png), printed on the badge's face";
    return q;
  };
  group.add(art(true), art(false));
  return { group, size, depth };
};
