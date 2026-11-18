// THE FLIP CALENDAR (037 v2, CLOSE 1): a big block desk calendar on an A-frame; its leaves hang from a satin rod and flip
// OVER THE TOP to the back, one after another (R7: one chunky literal object; R8: two words a leaf; R11: it acts).
// Origin: the floor centre of its base. About 900 wide, 900 tall.
import * as THREE from "three";
import { MAT, K, lit, block, rbox, wide } from "../kit";
import { text3d } from "../text3d";

export const CAL = { rod: 850, leafW: 680, leafH: 600, months: [["AUG", "2021"], ["SEP", "2021"], ["OCT", "2021"], ["NOV", "2021"], ["DEC", "2021"], ["JAN", "2022"]] } as const;
const FRONT = -0.15, BACK = -2 * Math.PI + 0.15;
/** the leaf's swing: it leaves slowly, whips over the top and drops onto the back (heavier at the end) */
const swing = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

export const makeCalendar = () => {
  const group = new THREE.Group();
  group.add(block(900, 130, 520, 30, MAT.black()));
  const riser = block(760, 60, 380, 20, MAT.graphite()); riser.position.y += 130; group.add(riser);
  for (const s of [-1, 1]) {
    const post = rbox(56, CAL.rod - 150, 70, 14, MAT.black()); post.position.set(s * 400, 190 + (CAL.rod - 150) / 2 - 20, 0); group.add(post);
    const cap = rbox(84, 84, 96, 20, MAT.black()); cap.position.set(s * 400, CAL.rod, 0); group.add(cap);
  }
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 820, 32), MAT.satin());
  rod.rotation.z = Math.PI / 2; rod.position.y = CAL.rod; rod.castShadow = true; group.add(rod);
  // the easel board between the leaves in front and the flipped ones behind
  const board = rbox(720, CAL.rod - 210, 30, 10, MAT.black()); board.position.set(0, 190 + (CAL.rod - 210) / 2, 0); group.add(board);
  const N = CAL.months.length - 1;
  const zFront = (i: number) => 30 + (N - i) * 20, zBack = (i: number) => -(48 + i * 20);
  const leaves = CAL.months.map(([m, y], i) => {
    const pivot = new THREE.Group(); pivot.position.set(0, CAL.rod, 0);
    const leaf = new THREE.Group(); pivot.add(leaf);
    const card = rbox(CAL.leafW, CAL.leafH, 18, 8, MAT.graphite());
    card.position.set(0, -CAL.leafH / 2 - 12, 0);
    leaf.add(card);
    for (const s of [-1, 1]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(26, 6, 12, 32), MAT.satin()); ring.rotation.y = Math.PI / 2; ring.position.set(s * 230, 0, 0); leaf.add(ring); }
    // big print stays under the bloom's threshold: white, not a lamp (R3: highlights are rationed)
    const face = lit(K.white, 0.86);
    const month = wide(text3d(m, { font: "800", size: 196, depth: 5, bevel: 0, face }), 1.12);
    month.position.set(0, -CAL.leafH / 2 - 12 - 20, 9.5);
    const year = wide(text3d(y, { font: "500", size: 70, depth: 4, bevel: 0, face }), 1.3);
    year.position.set(0, -CAL.leafH / 2 - 12 - 170, 9.5);
    leaf.add(month, year);
    leaf.position.z = zFront(i);
    group.add(pivot);
    return { pivot, leaf };
  });
  return {
    group,
    /** `p[i]`: leaf i's flip, 0 (hanging in front) … 1 (over the top, hanging behind). The last leaf never flips. */
    update: (p: number[]) => {
      leaves.forEach((l, i) => {
        const q = swing(p[i] ?? 0);
        l.pivot.rotation.x = FRONT + (BACK - FRONT) * q;
        // over the top it crosses from the front of the board to the back
        const k = Math.max(0, Math.min(1, (q - 0.38) / 0.24));
        l.leaf.position.z = zFront(i) + (zBack(i) - zFront(i)) * k * k * (3 - 2 * k);
      });
    },
  };
};
