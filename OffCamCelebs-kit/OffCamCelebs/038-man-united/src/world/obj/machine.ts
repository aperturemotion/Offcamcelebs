// THE EXCHANGE: a chunky machine. A token goes in the top; a wedge comes out of the chute; its plate counts the ratio.
// Origin: its footprint's centre; the slot at (0, MACHINE.h, 0), the chute's mouth at (0, 90, MACHINE.d / 2).
import * as THREE from "three";
import { K, MAT, block, rbox, cyl, counter, lit, setLit, textOn } from "../kit";

// ★ P14: 780 wide (it was 660): its screen grew to carry "0.375" with margin
export const MACHINE = { w: 780, h: 760, d: 520 } as const;
export const makeMachine = () => {
  const group = new THREE.Group();
  const body = new THREE.Group();
  body.add(block(MACHINE.w, MACHINE.h, MACHINE.d, 44, MAT.black()));
  // the hopper on top: a collar round a dark slot
  const collar = cyl(150, 46, MAT.graphite(), 56);
  collar.position.set(0, MACHINE.h, 0); collar.position.y = MACHINE.h;
  body.add(collar);
  const dark = new THREE.MeshStandardMaterial({ color: new THREE.Color("#020203"), roughness: 1 });
  const hole = new THREE.Mesh(new THREE.CylinderGeometry(118, 118, 4, 48), dark);
  hole.position.set(0, MACHINE.h + 47, 0);
  body.add(hole);
  // the screen: a recessed glass with the counting figure
  const screen = rbox(640, 210, 18, 10, new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#050506"), roughness: 0.22, metalness: 0.3, clearcoat: 0.6, envMapIntensity: 0.7 }));
  screen.position.set(0, 520, MACHINE.d / 2 + 2);
  body.add(screen);
  const fig = counter({ size: 130, color: K.white, depth: 16 });
  fig.group.position.set(0, 520 - 45, MACHINE.d / 2 + 12);
  fig.group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(fig.group, screen, { inset: 10 });
  body.add(fig.group);
  // a lamp that blinks while it works
  const lampMat = lit(K.amber, 1.15);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(22, 24, 16), lampMat);
  lamp.position.set(300, 700, MACHINE.d / 2 + 6);
  body.add(lamp);
  // the chute: a dark mouth and a tray running out onto the table
  const mouth = rbox(330, 150, 20, 10, dark);
  mouth.position.set(0, 150, MACHINE.d / 2 + 1);
  body.add(mouth);
  const tray = rbox(350, 24, 330, 10, MAT.graphite());
  tray.position.set(0, 46, MACHINE.d / 2 + 130);
  tray.rotation.x = 0.2;
  body.add(tray);
  for (const sx of [-1, 1]) { const lip = rbox(22, 60, 330, 8, MAT.graphite()); lip.position.set(sx * 175, 62, MACHINE.d / 2 + 130); lip.rotation.x = 0.2; body.add(lip); }
  group.add(body);
  return {
    group, fig,
    /** `value` the figure on the screen, `on` its light, `lamp` 0…1, `shake` −1…1 (a small rock while it works) */
    update: (p: { value: string; on: number; lamp: number; shake: number }) => {
      fig.set(p.value);
      fig.group.visible = p.on > 0.02;
      setLit(fig.face, p.on, 0.05);
      setLit(lampMat, p.lamp, 0.06);
      body.rotation.z = p.shake * 0.012;
      body.position.x = p.shake * 5;
    },
  };
};
