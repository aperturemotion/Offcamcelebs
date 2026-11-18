// THE FILING DRAWER (037 v2; worker A): a heavy steel filing cabinet whose top drawer rolls open toward +z; a tilted lit
// plate inside shows `value` (its first token big, the rest small under it: "$13.8" / "BILLION"). Origin: the floor centre
// of its FRONT (the body runs back to z = −600). About 520 w × 620 h × 600 d.
//   update({ open 0…1, value, lit 0…1 })
import * as THREE from "three";
import { MAT, K, rbox, lit, setLit, counter, wide, textOn } from "../kit";
import { text3d } from "../text3d";

export const DRAWER = { w: 520, h: 620, d: 600, travel: 430 } as const;
/** how far open (0…1) the drawer is before the plate starts to rise, and when it is fully up */
export const PLATE_CLEAR = 0.82, PLATE_UP = 1.0;
export const makeDrawer = (key: string) => {
  const group = new THREE.Group();
  group.name = `drawer-${key}`;
  const steel = MAT.graphite(), satin = MAT.satin();
  // the cabinet is a real SHELL round the top drawer's cavity (it was one solid block with a dark panel for the slot: then
  //   everything in the drawer sat "inside" the cabinet and no check could tell a clip from the design). The cavity runs
  //   y 422…598, 476 wide; the tray (464 wide, y 426…576) runs in it with clearance.
  const body = new THREE.Group();
  body.name = "cabinet";
  const piece = (w: number, h: number, d: number, x: number, y: number, z: number, r = 6) => { const m = rbox(w, h, d, r, steel); m.position.set(x, y, z); body.add(m); return m; };
  piece(DRAWER.w, 422, DRAWER.d, 0, 211, -DRAWER.d / 2, 22);          // the block under the cavity
  piece(DRAWER.w, 22, DRAWER.d, 0, 609, -DRAWER.d / 2, 8);            // the top
  piece(22, 180, DRAWER.d, -249, 510, -DRAWER.d / 2); piece(22, 180, DRAWER.d, 249, 510, -DRAWER.d / 2);   // the sides
  piece(476, 180, 22, 0, 510, -DRAWER.d + 11);                        // the back
  group.add(body);
  const frontOf = (y: number) => {
    const g = new THREE.Group();
    const p = rbox(476, 176, 26, 9, MAT.black());
    p.position.z = 14.5;   // it stands just proud of the cabinet's front (z = 0), never in it
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
  // the top drawer: its front, its tray, the plate inside
  const drawer = frontOf(510);
  drawer.name = "top-drawer";
  const tray = new THREE.Group();
  tray.name = "tray";
  const floorT = rbox(452, 12, 500, 4, steel); floorT.position.set(0, -78, -250);
  const sideL = rbox(12, 150, 500, 4, steel); sideL.position.set(-226, -9, -250);
  const sideR = rbox(12, 150, 500, 4, steel); sideR.position.set(226, -9, -250);
  const backT = rbox(452, 150, 12, 4, steel); backT.position.set(0, -9, -494);
  tray.add(floorT, sideL, sideR, backT);
  // ★ P14 (Timur, 2026-11-19: "the flat object within the drawer literally clips through the top of the cabinet"): the plate
  //   used to stand tilted inside the CLOSED drawer, its top above the cabinet's top, so it cut through the cabinet as the
  //   drawer rolled. It now LIES FLAT on the tray's floor while the drawer is in, and is raised to its tilt only once its
  //   back edge has cleared the cabinet's front (`open` ≥ PLATE_CLEAR). The pass-through check (scratchpad/worldcheck.mjs)
  //   tests the plate against the cabinet on every sampled frame.
  const plate = new THREE.Group();
  plate.name = "plate";
  const plateBody = rbox(424, 236, 20, 8, MAT.black());
  plate.add(plateBody);
  const big = counter({ size: 84, color: K.money, depth: 10 });
  big.group.position.set(0, 12, 10);
  const small = counter({ size: 34, color: K.money, depth: 6 });
  small.group.position.set(0, -58, 10);
  textOn(big.group, plateBody, { inset: 8 }); textOn(small.group, plateBody, { inset: 8 });
  plate.add(big.group, small.group);
  const FLAT = { y: -60, rx: -Math.PI / 2 }, UP = { y: 62, rx: -1.05 };
  plate.position.set(0, FLAT.y, -214);
  plate.rotation.x = FLAT.rx;
  drawer.add(tray, plate);
  const label = lit(K.white);
  const word = wide(text3d("FILING", { font: "800", size: 24, depth: 3, bevel: 0, face: label }));
  word.position.set(0, 27, 28.5);
  textOn(word, drawer.children[2] as THREE.Mesh, { inset: 3 });   // the label holder
  drawer.add(word);
  group.add(drawer);
  let shown = "";
  return {
    group, size: { w: DRAWER.w, h: DRAWER.h, d: DRAWER.d },
    update: (p: { open: number; value: string; lit: number }) => {
      drawer.position.z = Math.max(0, p.open) * DRAWER.travel;
      // the plate rises to its tilt only once its back edge is past the cabinet's front
      const u = Math.max(0, Math.min(1, (p.open - PLATE_CLEAR) / (PLATE_UP - PLATE_CLEAR))), e = u * u * (3 - 2 * u);
      plate.position.y = FLAT.y + (UP.y - FLAT.y) * e;
      plate.rotation.x = FLAT.rx + (UP.rx - FLAT.rx) * e;
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
