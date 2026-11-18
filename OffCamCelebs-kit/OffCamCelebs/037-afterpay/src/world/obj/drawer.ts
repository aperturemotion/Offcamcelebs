// THE FILING DRAWER (037 v2; worker A): a heavy steel filing cabinet whose top drawer rolls open toward +z; a tilted lit
// plate inside shows `value` (its first token big, the rest small under it: "$13.8" / "BILLION"). Origin: the floor centre
// of its FRONT (the body runs back to z = −600). About 520 w × 620 h × 600 d.
//   update({ open 0…1, value, lit 0…1 })
import * as THREE from "three";
import { MAT, K, rbox, lit, setLit, counter, wide } from "../kit";
import { text3d } from "../text3d";

export const DRAWER = { w: 520, h: 620, d: 600, travel: 430 } as const;
export const makeDrawer = (key: string) => {
  const group = new THREE.Group();
  group.name = `drawer-${key}`;
  const steel = MAT.graphite(), satin = MAT.satin();
  const body = rbox(DRAWER.w, DRAWER.h, DRAWER.d, 22, steel);
  body.position.set(0, DRAWER.h / 2, -DRAWER.d / 2);
  group.add(body);
  const frontOf = (y: number) => {
    const g = new THREE.Group();
    const p = rbox(476, 176, 26, 9, MAT.black());
    p.position.z = 9;
    const h = rbox(190, 24, 30, 8, satin);
    h.position.set(0, -34, 34);
    // the label holder: a small satin frame
    const holder = rbox(150, 44, 8, 3, satin);
    holder.position.set(0, 36, 24);
    g.add(p, h, holder);
    g.position.y = y;
    return g;
  };
  group.add(frontOf(110), frontOf(310));
  // the slot the top drawer leaves: a dark mouth
  const mouth = rbox(470, 170, 6, 2, MAT.rubber());
  mouth.position.set(0, 510, 0.5);
  group.add(mouth);
  // the top drawer: its front, its tray, the plate inside
  const drawer = frontOf(510);
  const tray = new THREE.Group();
  const floorT = rbox(452, 12, 500, 4, steel); floorT.position.set(0, -78, -250);
  const sideL = rbox(12, 150, 500, 4, steel); sideL.position.set(-226, -9, -250);
  const sideR = rbox(12, 150, 500, 4, steel); sideR.position.set(226, -9, -250);
  const backT = rbox(452, 150, 12, 4, steel); backT.position.set(0, -9, -494);
  tray.add(floorT, sideL, sideR, backT);
  const plate = new THREE.Group();
  plate.add(rbox(424, 236, 20, 8, MAT.black()));
  const big = counter({ size: 84, color: K.money, depth: 10 });
  big.group.position.set(0, 12, 10);
  const small = counter({ size: 34, color: K.money, depth: 6 });
  small.group.position.set(0, -58, 10);
  plate.add(big.group, small.group);
  plate.position.set(0, 62, -214);
  plate.rotation.x = -1.05;
  tray.add(plate);
  drawer.add(tray);
  const label = lit(K.white);
  const word = wide(text3d("FILING", { font: "800", size: 24, depth: 3, bevel: 0, face: label }));
  word.position.set(0, 27, 28.5);
  drawer.add(word);
  group.add(drawer);
  let shown = "";
  return {
    group, size: { w: DRAWER.w, h: DRAWER.h, d: DRAWER.d },
    update: (p: { open: number; value: string; lit: number }) => {
      drawer.position.z = Math.max(0, p.open) * DRAWER.travel;
      if (p.value !== shown) {
        shown = p.value;
        const i = p.value.indexOf(" ");
        big.set(i < 0 ? p.value : p.value.slice(0, i));
        small.set(i < 0 ? "" : p.value.slice(i + 1));
      }
      big.group.visible = small.group.visible = p.lit > 0.001;
      setLit(big.face, p.lit); setLit(small.face, p.lit);
    },
  };
};
