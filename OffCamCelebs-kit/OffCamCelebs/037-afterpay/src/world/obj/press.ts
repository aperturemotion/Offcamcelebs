// THE MINT: a chunky press that stamps share tokens. Origin: its footprint's centre; the die at (0, PRESS.die, 60).
import * as THREE from "three";
import { K, MAT, block, rbox, cyl, litPlate, joined } from "../kit";

/** `top`: the die pad's surface (a token lies ON it) */
export const PRESS = { die: 150, up: 330, dieZ: 70, top: 162.5 } as const;
export const makePress = () => {
  const group = new THREE.Group();
  group.add(block(640, 150, 560, 30, MAT.black()));
  const pad = cyl(112, 8, MAT.satin());
  pad.position.set(0, 154, PRESS.dieZ);
  group.add(pad);
  for (const sx of [-1, 1]) {
    const post = cyl(34, 560, MAT.satin(), 40);
    post.position.set(sx * 240, 150 + 280, -150);
    group.add(post);
  }
  const beam = rbox(660, 150, 300, 30, MAT.black());
  beam.position.set(0, 150 + 560 + 60, -110);
  group.add(beam);
  const arm = rbox(260, 110, 330, 24, MAT.graphite());
  arm.position.set(0, 150 + 560 + 40, 20);
  group.add(arm);
  const plate = litPlate(["SHARES"], { size: 54, color: K.white, depth: 20 });
  plate.group.position.set(0, 150 + 560 + 62, 40 + 10);
  plate.group.rotation.x = -0.5;                  // tipped up toward the high camera
  plate.group.position.set(0, 150 + 560 + 150, -60);
  group.add(plate.group);
  // the ram: a piston and its die head
  const ram = new THREE.Group();
  const rod = cyl(46, 360, MAT.satin(), 40);
  rod.position.y = 60 + 180;
  const head = cyl(104, 60, MAT.graphite(), 56);
  ram.add(rod, head);
  ram.position.set(0, PRESS.up, PRESS.dieZ);
  ram.name = "ram";
  group.add(ram);
  joined(ram, beam, "the piston runs through the press's head");
  joined(ram, arm, "the piston runs through the press's arm");
  return {
    group, plate,
    /** `ram` 0 (up) … 1 (down on the die) */
    update: (p: { ram: number }) => { ram.position.y = PRESS.up - p.ram * (PRESS.up - (PRESS.top + 34 + 1.5)); },
  };
};
