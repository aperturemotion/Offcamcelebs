// THE SIGN OF LETTER TILES (037 v2, CLOSE 2): six chunky tiles hang under a beam on two posts and read SQUARE. The last
// tile drops off and falls to the floor; the other five flip over, one after another, to read BLOCK, and slide to the
// sign's middle (R7, R11: the object acts the sentence "Square had renamed itself Block").
// Origin: the floor centre between its posts. About 1,800 wide, 1,200 tall.
import * as THREE from "three";
import { MAT, K, lit, setLit, block, rbox, wide } from "../kit";
import { text3d } from "../text3d";

export const TILES = { top: 980, cy: 740, pitch: 268, w: 244, h: 300, d: 60, from: "SQUARE", to: "BLOCK" } as const;
const CAP = 0.69;
export type TilesP = { flip: number[]; on: number[]; dropY: number; dropTip: number; dropX: number; shift: number };

export const makeTiles = () => {
  const group = new THREE.Group();
  for (const s of [-1, 1]) { const post = block(80, TILES.top + 40, 80, 18, MAT.black()); post.position.x = s * 880; group.add(post); const foot = block(260, 46, 260, 14, MAT.black()); foot.position.x = s * 880; group.add(foot); }
  const beam = rbox(1900, 70, 96, 20, MAT.black()); beam.position.y = TILES.top; group.add(beam);
  const row = new THREE.Group(); group.add(row);
  const size = 215;
  const tiles = Array.from(TILES.from, (ch, i) => {
    const hold = new THREE.Group();
    hold.position.set((i - 2.5) * TILES.pitch, TILES.cy, 0);
    const t = new THREE.Group(); hold.add(t);
    t.add(rbox(TILES.w, TILES.h, TILES.d, 16, MAT.graphite()));
    const inset = rbox(TILES.w - 34, TILES.h - 34, 8, 6, MAT.graphite()); inset.position.z = TILES.d / 2 - 2; t.add(inset);
    const fa = lit(K.white, 0.88);
    const a = wide(text3d(ch, { font: "800", size, depth: 5, bevel: 0, face: fa }), 1.1);
    a.position.set(0, -(size * CAP) / 2, TILES.d / 2 + 2.5); t.add(a);
    const to = TILES.to[i];
    if (to) {
      const inset2 = rbox(TILES.w - 34, TILES.h - 34, 8, 6, MAT.graphite()); inset2.position.z = -TILES.d / 2 + 2; t.add(inset2);
      const b = wide(text3d(to, { font: "800", size, depth: 5, bevel: 0, face: lit(K.white, 0.88) }), 1.1);
      b.rotation.x = Math.PI; b.position.set(0, (size * CAP) / 2, -TILES.d / 2 - 2.5); t.add(b);
    }
    // its two hangers
    const hang = new THREE.Group();
    for (const s of [-1, 1]) { const h = rbox(12, TILES.top - 35 - (TILES.cy + TILES.h / 2) + 14, 12, 4, MAT.satin()); h.position.set(s * 70, TILES.h / 2 + (TILES.top - 35 - (TILES.cy + TILES.h / 2)) / 2, 0); hang.add(h); }
    hold.add(hang);
    (i < 5 ? row : group).add(hold);
    return { hold, t, hang, fa };
  });
  return {
    group,
    update: (p: TilesP) => {
      tiles.forEach(({ t, fa }, i) => { if (i < 5) t.rotation.x = -Math.PI * (p.flip[i] ?? 0); setLit(fa, p.on[i] ?? 1); });
      row.position.x = p.shift * TILES.pitch * 0.5;
      const e = tiles[5];
      e.hang.visible = p.dropY > -1;                    // it has left its hangers
      e.hold.position.set(2.5 * TILES.pitch + p.dropX, TILES.cy + p.dropY, p.dropX * 0.6);
      e.t.rotation.x = p.dropTip * (-Math.PI / 2);
      e.t.rotation.z = -p.dropTip * 0.5 - (p.dropY < -1 ? Math.min(0.5, -p.dropY / 1400) : 0);
    },
  };
};
