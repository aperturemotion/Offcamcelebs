// THE CHUTE (037 v2, FAIR): a hopper on legs feeding an inclined trough that ends on the floor; tokens roll down it on
// edge. Static: the place rolls the tokens along `RAMP`. Origin: the floor under the trough's foot. The trough runs from
// (x0, y0) down to (x1, y1) in its own x/y; tokens roll at z = 0.
import * as THREE from "three";
import { MAT, block, rbox, litPlate, K } from "../kit";

export const RAMP = { x0: -1250, y0: 640, x1: -250, y1: 13 } as const;
export const makeChute = () => {
  const group = new THREE.Group();
  const dx = RAMP.x1 - RAMP.x0, dy = RAMP.y1 - RAMP.y0, len = Math.hypot(dx, dy), ang = Math.atan2(dy, dx);
  const tr = new THREE.Group(); tr.position.set((RAMP.x0 + RAMP.x1) / 2, (RAMP.y0 + RAMP.y1) / 2, 0); tr.rotation.z = ang; group.add(tr);
  const bed = rbox(len + 60, 26, 150, 10, MAT.black()); bed.position.y = -13; tr.add(bed);
  for (const s of [-1, 1]) { const rail = rbox(len + 60, 70, 20, 8, MAT.black()); rail.position.set(0, 22, s * 76); tr.add(rail); }
  // the hopper and its legs
  const hop = rbox(520, 420, 420, 34, MAT.black()); hop.position.set(RAMP.x0 - 230, RAMP.y0 + 200, 0); group.add(hop);
  const mouth = rbox(90, 240, 190, 14, MAT.graphite()); mouth.position.set(RAMP.x0 + 20, RAMP.y0 + 110, 0); group.add(mouth);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const leg = block(46, RAMP.y0 + 10, 46, 10, MAT.black()); leg.position.x = RAMP.x0 - 230 + sx * 200; leg.position.z = sz * 150; group.add(leg); }
  const plate = litPlate(["SHARES"], { size: 78, color: K.white, depth: 30 });
  plate.group.position.set(RAMP.x0 - 230, RAMP.y0 + 210, 210 + plate.d / 2);
  group.add(plate.group);
  // two struts under the trough
  for (const u of [0.35, 0.7]) { const x = RAMP.x0 + dx * u, y = RAMP.y0 + dy * u; const st = block(34, y - 20, 120, 8, MAT.black()); st.position.x = x; group.add(st); }
  return { group, plate };
};
