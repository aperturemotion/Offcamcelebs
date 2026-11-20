// THE MONEY PIPE (038, set D: "ticket, shirt and TV money went on paying for the takeover"). A clear glass tube with satin
// collars and floor brackets, laid along a smooth path (a CatmullRom curve through `pts`), that the gold coins visibly roll
// along inside. Coins are placed with `at(u)`: the point and the direction of the tube a fraction `u` along it.
// makePipe(key, pts, r = 86) → { group, curve, at(u), length, glass }   Origin: the place's own space (pts are absolute).
import * as THREE from "three";
import { MAT } from "../kit";

/** `avoid`: points (a funnel's throat) a collar must keep 170 clear of (★ P17: a coin dropping in crossed one) */
export const makePipe = (key: string, pts: THREE.Vector3[], r = 86, o: { avoid?: THREE.Vector3[]; fromWall?: boolean } = {}) => {
  void key;
  const group = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.2);
  const glassMat = new THREE.MeshPhysicalMaterial({ color: "#d9e6ee", roughness: 0.06, metalness: 0, transparent: true, opacity: 0.2, depthWrite: false, envMapIntensity: 1.4, clearcoat: 1, side: THREE.DoubleSide });
  const segs = Math.max(64, Math.round(curve.getLength() / 20));
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, segs, r, 40, false), glassMat);
  tube.name = "glass pipe";
  tube.userData.glass = true;   // a hollow tube: the coins roll INSIDE it
  tube.renderOrder = 5;
  group.add(tube);
  // satin collars every ~420 units, and a bracket from each collar to the floor where the tube runs low
  const L = curve.getLength(), n = Math.max(2, Math.round(L / 420));
  const satin = MAT.satin();
  for (let i = 0; i <= n; i++) {
    const u = i / n, p = curve.getPointAt(u), t = curve.getTangentAt(u);
    if ((o.avoid ?? []).some((a) => Math.hypot(a.x - p.x, a.z - p.z) < 170)) continue;
    if (i === 0 && o.fromWall) continue;   // the pipe comes out of a wall: no collar inside the wall
    // ★ P17: the collar clamps the glass from OUTSIDE (it stood 3 into the tube, across the coins' way)
    const collar = new THREE.Mesh(new THREE.TorusGeometry(r + 9 + 0.3, 9, 10, 40), satin);
    collar.position.copy(p); collar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), t);
    group.add(collar);
    // the floor post runs up into the collar's tube (13 under the glass: it stood up into the tube, across the coins' way)
    if (p.y < 400 && p.y - r - 13 > 4) {
      const h = p.y - r - 13;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(10, 14, h, 12), MAT.black());
      post.position.set(p.x, h / 2, p.z); post.castShadow = true; group.add(post);
    }
  }
  return {
    group, curve, length: L, glass: tube,
    at: (u: number) => ({ p: curve.getPointAt(Math.max(0, Math.min(1, u))), t: curve.getTangentAt(Math.max(0, Math.min(1, u))) }),
  };
};
