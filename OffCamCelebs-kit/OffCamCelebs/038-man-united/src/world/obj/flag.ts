// THE US FLAG (P16: the real flag, assets/brand/usflag.png).
// makeFlagPanel(key, w, h) → { group }      a lit sign panel: a bevelled black frame, the flag printed on its face, a soft
//                                          inner glow (the references' flags are lit screens). Origin: the panel's centre,
//                                          facing +z; depth 40.
// makeFlagBall(key, r = 180) → { group }   a glossy sphere wrapped in the flag (the references' "flag ball" for a country
//                                          or an owner), stars at the upper left as seen from the front. Origin: the
//                                          sphere's centre (stand it on a plinth at y = r).
import * as THREE from "three";
import { MAT, rbox } from "../kit";
import { brandTex, printMat } from "./brand";

export const makeFlagPanel = (key: string, w: number, h: number) => {
  void key;
  const group = new THREE.Group();
  const frame = rbox(w + 44, h + 44, 40, 12, MAT.black());
  group.add(frame);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(w, h), printMat("usflag", { emissive: 0.3, rough: 0.6 }));
  face.position.z = 20.6;
  face.userData.print = "the US flag (assets/brand/usflag.png), the panel's lit face";
  group.add(face);
  return { group, w: w + 44, h: h + 44, d: 40 };
};

export const makeFlagBall = (key: string, r = 180) => {
  void key;
  const group = new THREE.Group();
  const map = brandTex("usflag").clone();
  map.needsUpdate = true;
  // wrap the flag once round the sphere; the canton (stars) lands front-left, upper half
  map.wrapS = THREE.RepeatWrapping;
  map.offset.x = 0.62;
  const m = new THREE.MeshPhysicalMaterial({ map, roughness: 0.18, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1, emissive: new THREE.Color("#ffffff"), emissiveMap: map, emissiveIntensity: 0.12 });
  const ball = new THREE.Mesh(new THREE.SphereGeometry(r, 96, 64), m);
  ball.castShadow = true; ball.receiveShadow = true;
  ball.userData.print = "the US flag (assets/brand/usflag.png), wrapped round the ball";
  group.add(ball);
  return { group, r };
};
