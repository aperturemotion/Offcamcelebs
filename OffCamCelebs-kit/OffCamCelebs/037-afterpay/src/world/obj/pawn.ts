// A PERSON, the references' way (R9): a glossy black two-sphere pawn. Never a human, never a photograph.
import * as THREE from "three";
import { MAT } from "../kit";

const gloss = () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#0b0b0c"), roughness: 0.2, metalness: 0.1, envMapIntensity: 0.55, clearcoat: 1, clearcoatRoughness: 0.16 });
/** a glossy black two-sphere figure, about 300 tall at scale 1; origin at its floor centre */
export const makePawn = (scale = 1): THREE.Group => {
  const g = new THREE.Group();
  const m = gloss();
  const body = new THREE.Mesh(new THREE.SphereGeometry(105, 48, 32), m);
  body.position.y = 105;
  body.scale.set(1, 1.02, 1);
  const head = new THREE.Mesh(new THREE.SphereGeometry(58, 40, 28), m);
  head.position.y = 246;
  const collar = new THREE.Mesh(new THREE.TorusGeometry(46, 7, 12, 48), MAT.satin());
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 198;
  for (const o of [body, head, collar]) { o.castShadow = true; o.receiveShadow = true; g.add(o); }
  g.scale.setScalar(scale);
  return g;
};
