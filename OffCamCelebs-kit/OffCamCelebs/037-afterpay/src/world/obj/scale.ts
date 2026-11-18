// THE BALANCE SCALE (037 v2, FAIR): a chunky black scale: a turned base, a column, a beam on a pivot, two dished pans on
// three wires each. The pans stay level while the beam tilts; `left` and `right` are the seats loads are added to
// (origin: the middle of each dish's top). Origin: the floor centre of its base. About 1,500 wide, 1,150 tall.
import * as THREE from "three";
import { MAT, cyl, rbox } from "../kit";

export const SCALE = { pivot: 1040, arm: 440, hang: 470, dish: 205 } as const;
export const makeScale = () => {
  const group = new THREE.Group();
  group.add(cyl(330, 56, MAT.black(), 96));
  const b2 = cyl(230, 50, MAT.black(), 96); b2.position.y += 56; group.add(b2);
  const col = cyl(48, SCALE.pivot - 90, MAT.black(), 48); col.position.y += 100; group.add(col);
  const knuckle = new THREE.Mesh(new THREE.SphereGeometry(78, 48, 32), MAT.satin()); knuckle.position.y = SCALE.pivot; knuckle.castShadow = true; group.add(knuckle);
  const beam = new THREE.Group(); beam.position.y = SCALE.pivot; group.add(beam);
  beam.add(rbox(SCALE.arm * 2 + 90, 62, 70, 24, MAT.black()));
  const needle = rbox(14, 190, 14, 5, MAT.satin()); needle.position.y = -110; beam.add(needle);
  const pans = [-1, 1].map((s) => {
    const pan = new THREE.Group(); group.add(pan);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(24, 24, 16), MAT.satin()); pan.add(eye);
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2 + Math.PI / 6, rx = Math.cos(a) * (SCALE.dish - 14), rz = Math.sin(a) * (SCALE.dish - 14);
      const len = Math.hypot(rx, SCALE.hang, rz);
      const w = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, len, 10), MAT.graphite());
      w.position.set(rx / 2, -SCALE.hang / 2, rz / 2);
      w.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(rx, -SCALE.hang, rz).normalize());
      pan.add(w);
    }
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(SCALE.dish, SCALE.dish - 50, 44, 96), MAT.black());
    dish.position.y = -SCALE.hang - 22; dish.castShadow = true; dish.receiveShadow = true; pan.add(dish);
    const lip = new THREE.Mesh(new THREE.TorusGeometry(SCALE.dish, 9, 12, 96), MAT.graphite()); lip.rotation.x = Math.PI / 2; lip.position.y = -SCALE.hang; pan.add(lip);
    const seat = new THREE.Group(); seat.position.y = -SCALE.hang; pan.add(seat);
    return { pan, seat, s };
  });
  return {
    group, left: pans[0].seat, right: pans[1].seat,
    /** `tilt` radians: positive = the LEFT pan down */
    update: (p: { tilt: number }) => {
      beam.rotation.z = p.tilt;
      for (const { pan, s } of pans) pan.position.set(s * SCALE.arm * Math.cos(p.tilt), SCALE.pivot + s * SCALE.arm * Math.sin(p.tilt), 0);
    },
  };
};
