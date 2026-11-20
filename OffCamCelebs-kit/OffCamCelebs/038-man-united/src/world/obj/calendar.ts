// THE FLIP CALENDAR (037 v2, reused by 038 for YEARS): a big block desk calendar on an A-frame; its leaves hang from a satin
// rod and flip OVER THE TOP to the back, one after another (R7: one chunky literal object; R11: it acts).
// makeCalendar(key, years = ["2005", "2010", "2018", "2026"]) → { group, update({ year, flip }) }
//   `year`: the leaf showing (a year from the list, or its index); `flip` 0…1: that leaf's flip over the top to the NEXT one
//   (leaves before it are already over). A riffle is a run of `year` steps with `flip` going 0 → 1 on each.
// Origin: the floor centre of its base. About 1,010 wide, 900 tall. Each leaf: the year big, "MANCHESTER UNITED" small.
import * as THREE from "three";
import { MAT, K, lit, block, rbox, wide, textOn, joined, hangs } from "../kit";
import { text3d } from "../text3d";

// ★ P14: the leaves are 780 wide (they were 680 and "AUG" overhung them); the frame grew with them
export const CAL = { rod: 920, leafW: 780, leafH: 600 } as const;   // (★ P17: 70 higher: the leaves now hang below binder rings)
const FRONT = -0.15, BACK = -2 * Math.PI + 0.15;
/** the leaf's swing: it leaves slowly, whips over the top and drops onto the back (heavier at the end) */
const swing = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
// ★ P17 (2026-11-20): REAL BINDER RINGS. The leaves' rings used to sit 30–110 units in front of the rod they "hung" on.
//   Now two big satin rings hang ON the rod (their inside top resting on it), every leaf hangs on both rings through punched
//   holes, and a leaf flips ABOUT THE RINGS' centre, its holes sliding round them from the front of the stack to the back.
const RING = 75, RT = 6, LEAF_T = 8, GAP = 10;

export const makeCalendar = (key: string, years: string[] = ["2005", "2010", "2018", "2026"]) => {
  void key;
  const months = years.map((y) => [y, "MANCHESTER UNITED"] as const);
  const group = new THREE.Group();
  const base = block(1010, 130, 520, 30, MAT.black()); base.name = "calendar base"; group.add(base);
  const riser = block(870, 60, 380, 20, MAT.graphite()); riser.position.y += 130; group.add(riser);
  const caps: THREE.Mesh[] = [];
  for (const s of [-1, 1]) {
    const post = rbox(56, CAL.rod - 150, 70, 14, MAT.black()); post.position.set(s * 455, 190 + (CAL.rod - 150) / 2 - 20, 0); group.add(post);
    const cap = rbox(84, 84, 96, 20, MAT.black()); cap.position.set(s * 455, CAL.rod, 0); group.add(cap); caps.push(cap);
  }
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 930, 32), MAT.satin());
  rod.rotation.z = Math.PI / 2; rod.position.y = CAL.rod; rod.castShadow = true; rod.name = "calendar rod"; group.add(rod);
  // the two binder rings, hanging on the rod: their inside top rests on the rod's top
  const CY = CAL.rod + 15 - (RING - RT) + 0.2;
  const rings = [-1, 1].map((s) => {
    const r = new THREE.Mesh(new THREE.TorusGeometry(RING, RT, 14, 64), MAT.satin()); r.rotation.y = Math.PI / 2; r.position.set(s * 270, CY, 0);
    r.castShadow = true; r.name = "binder ring"; group.add(r);
    hangs(r, rod, "the binder ring hangs on the rod");
    return r;
  });
  const N = months.length - 1;
  // the stack's slots along the rings' lower arc: the front stack, then the back stack behind it
  const zFront = (i: number) => GAP * (N / 2 - i), zBack = (i: number) => zFront(N) - GAP * (i + 1);
  const leaves = months.map(([m, y], i) => {
    const pivot = new THREE.Group(); pivot.position.set(0, CY, 0);
    const leaf = new THREE.Group(); pivot.add(leaf);
    const card = rbox(CAL.leafW, CAL.leafH, LEAF_T, 3, MAT.graphite());
    // (its top 70 from the rings' centre: the ring's tube, 69–81, runs through it, and as it flips over the top it clears
    //   the rod the rings hang on, whose far side is 69 from that centre)
    card.position.set(0, -(RING - RT + 1) - CAL.leafH / 2, 0); card.name = "calendar leaf";
    leaf.add(card);
    const face = lit(K.white, 0.86);
    const month = wide(text3d(m, { font: "800", size: 200, depth: 5, bevel: 0, face }), 1.08);
    month.position.set(0, card.position.y - 20, LEAF_T / 2 + 0.3);
    const year = wide(text3d(y, { font: "500", size: 40, depth: 4, bevel: 0, face }), 1.1);
    year.position.set(0, card.position.y - 170, LEAF_T / 2 + 0.3);
    textOn(month, card, { inset: 3 }); textOn(year, card, { inset: 3 });
    leaf.add(month, year);
    group.add(pivot);
    for (const r of rings) joined(card, r, "the binder ring runs through the leaf's punched hole");
    hangs(card, rings[0], "the leaf hangs on the binder rings", { linked: true });
    return { pivot, leaf, card };
  });
  /** the leaf's holes at slot z on the rings' lower arc: the card rides up the ring as it moves off the bottom */
  const onRing = (z: number) => RING - Math.sqrt(Math.max(0, RING * RING - z * z));
  const setP = (p: number[]) => {
    leaves.forEach((l, i) => {
      const q = swing(p[i] ?? 0);
      l.pivot.rotation.x = FRONT + (BACK - FRONT) * q;
      // over the top it crosses from the front of the board to the back
      const k = Math.max(0, Math.min(1, (q - 0.38) / 0.24));
      const z = zFront(i) + (zBack(i) - zFront(i)) * k * k * (3 - 2 * k);
      l.leaf.position.set(0, onRing(z), z);
    });
  };
  return {
    group, years,
    /** the leaf `year` showing, flipping over to the next by `flip` (the last leaf never flips) */
    update: (o: { year: number | string; flip?: number }) => {
      const at = typeof o.year === "number" && o.year < years.length ? o.year : years.indexOf(String(o.year));
      const n = Math.max(0, at);
      setP(leaves.map((_, i) => (i < n ? 1 : i === n && n < leaves.length - 1 ? (o.flip ?? 0) : 0)));
    },
  };
};
