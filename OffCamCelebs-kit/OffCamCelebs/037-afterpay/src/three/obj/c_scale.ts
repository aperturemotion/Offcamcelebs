// THE BALANCE SCALE — a turned black base, a tapered column with satin collars, a knife-edge fulcrum with a pointer, a satin
// beam, and two dished pans hung on three wires each. The beam tilts; the pans hang plumb. Each pan's `seat` is a group at
// the centre of its dish, y up, for whatever is weighed. Origin: the middle of the base, on the floor (y = 0).
import { THREE, mesh, lathe } from "../stage";
import { rbox } from "../kit029";
import { SM, type Obj3 } from "../studio";

export type ScaleOpts = { span?: number; height?: number; pan?: number; drop?: number };
/** tilt: the beam's angle in degrees (0 = level; + lowers the LEFT pan) */
export type ScaleP = { tilt: number };

export const makeScale = (o: ScaleOpts = {}): Obj3<ScaleP> & { seats: [THREE.Group, THREE.Group]; beamY: number } => {
  const SPAN = o.span ?? 760, HT = o.height ?? 640, R = o.pan ?? 150, DROP = o.drop ?? 300;
  const group = new THREE.Group();
  const black = SM.black(), graphite = SM.graphite(), edge = SM.edge();
  // the base: a stepped, turned foot
  const foot = mesh(lathe([[0.01, 0], [176, 0], [180, 6], [180, 20], [168, 28], [120, 34], [112, 44], [60, 50], [40, 62], [0.01, 62]], 72), black);
  const footRing = mesh(new THREE.TorusGeometry(174, 3.2, 10, 72), edge);
  footRing.rotation.x = Math.PI / 2;
  footRing.position.y = 24;
  // the column: tapered, two collars
  const col = mesh(lathe([[26, 0], [20, 30], [15, 120], [13, HT - 120], [17, HT - 70], [24, HT - 62], [24, HT - 50], [14, HT - 44], [12, HT - 14], [0.01, HT - 10]], 40), graphite);
  col.position.y = 56;
  for (const y of [86, 56 + HT - 56]) { const c = mesh(new THREE.TorusGeometry(y < 200 ? 22 : 25, 3, 10, 40), edge); c.rotation.x = Math.PI / 2; c.position.y = y; group.add(c); }
  group.add(foot, footRing, col);
  // the fulcrum: a yoke at the column's head
  const beamY = 56 + HT;
  const yoke = rbox(44, 46, 30, 6, black);
  yoke.position.set(0, beamY - 6, 15);
  group.add(yoke);
  // the beam: a tapered satin bar, a centre boss, a pointer hanging from it, end hooks
  const beam = new THREE.Group();
  beam.position.y = beamY;
  const bar = rbox(SPAN + 40, 13, 13, 4, edge);
  bar.position.z = 6.5;
  const boss = mesh(new THREE.CylinderGeometry(20, 20, 26, 32), edge);
  boss.rotation.x = Math.PI / 2;
  const pointer = mesh(new THREE.ConeGeometry(5, 96, 12), edge);
  pointer.rotation.x = Math.PI;
  pointer.position.set(0, -60, 18);
  beam.add(bar, boss, pointer);
  group.add(beam);
  // the index plate the pointer reads against (fixed to the column)
  const plate = rbox(70, 34, 6, 3, black);
  plate.position.set(0, beamY - 104, 20);
  const tick = rbox(2.5, 20, 2, 0.8, edge, 1);
  tick.position.set(0, beamY - 104, 22.5);
  group.add(plate, tick);
  const seats: THREE.Group[] = [];
  const hangs = [-1, 1].map((s) => {
    const h = new THREE.Group();
    h.position.set(s * SPAN / 2, 0, 0);
    const eye = mesh(new THREE.TorusGeometry(9, 2.4, 8, 24), edge);
    eye.position.y = -12;
    h.add(eye);
    // three wires from the hook to the dish's rim
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2 + Math.PI / 2;
      const top = new THREE.Vector3(0, -20, 0), bot = new THREE.Vector3(Math.cos(a) * (R - 8), -DROP + 16, Math.sin(a) * (R - 8) * 0.999);
      const len = top.distanceTo(bot);
      const wire = mesh(new THREE.CylinderGeometry(1.5, 1.5, len, 8), edge);
      wire.position.copy(top.clone().add(bot).multiplyScalar(0.5));
      wire.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), bot.clone().sub(top).normalize());
      h.add(wire);
    }
    // the dish: a shallow bowl with a satin lip
    const dish = mesh(lathe([[0.01, 0], [R * 0.55, 0], [R * 0.9, 9], [R, 22], [R + 3, 26], [R, 26], [R * 0.9, 15], [R * 0.55, 7], [0.01, 7]], 72), graphite);
    dish.position.y = -DROP - 10;
    const lip = mesh(new THREE.TorusGeometry(R + 1, 2.8, 10, 72), edge);
    lip.rotation.x = Math.PI / 2;
    lip.position.y = -DROP + 15;
    const seat = new THREE.Group();
    seat.position.y = -DROP - 3;
    h.add(dish, lip, seat);
    seats.push(seat);
    beam.add(h);
    return h;
  });
  const update = (p: ScaleP) => {
    const a = (p.tilt * Math.PI) / 180;
    beam.rotation.z = a;
    hangs.forEach((h) => { h.rotation.z = -a; });
  };
  update({ tilt: 0 });
  return { group, update, seats: seats as [THREE.Group, THREE.Group], beamY };
};
