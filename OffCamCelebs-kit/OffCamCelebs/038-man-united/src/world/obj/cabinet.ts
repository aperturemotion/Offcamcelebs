// THE TROPHY CABINET (038 set F, "To be fair"): a tall display cabinet, a black frame with satin corner posts, glass sides
// and top, two glass shelves edged with GREEN LED strips (green is the fairness colour), a dark back panel with a green
// wash, and an open front (the cups read clearly). The place puts the cups on its shelves.
// makeCabinet(key) → { group, shelf: [y0, y1, y2], w, d, setGlow(v) }   shelf[i]: the top of deck i (0 = floor deck)
// Origin: the floor centre; it faces +z. About 1,800 wide, 2,100 tall, 600 deep.
import * as THREE from "three";
import { MAT, lit, setLit, rbox, block } from "../kit";

export const CAB = { w: 1800, h: 2100, d: 600 } as const;
export const GREEN = "#55d98a";

export const makeCabinet = (key: string) => {
  void key;
  const group = new THREE.Group();
  const { w, h, d } = CAB;
  const base = block(w + 60, 150, d + 40, 16, MAT.black()); group.add(base);
  const top = rbox(w + 60, 70, d + 40, 14, MAT.black()); top.position.y = h - 35; group.add(top);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const post = rbox(46, h - 220, 46, 10, MAT.satin()); post.position.set(sx * (w / 2 + 4), 150 + (h - 220) / 2, sz * (d / 2 - 2)); group.add(post);
  }
  const back = rbox(w, h - 220, 30, 8, new THREE.MeshStandardMaterial({ color: new THREE.Color("#0c120e"), roughness: 0.7 }));
  back.position.set(0, 150 + (h - 220) / 2, -d / 2 + 15); group.add(back);
  // glass sides and top-light panel
  const glass = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#cfe9dc"), roughness: 0.05, metalness: 0, transparent: true, opacity: 0.1, depthWrite: false });
  // ★ P17: the panes run from the base to the top (they hung 5 clear of both)
  for (const sx of [-1, 1]) { const g = new THREE.Mesh(new THREE.BoxGeometry(10, h - 220, d - 60), glass); g.position.set(sx * (w / 2 + 4), 150 + (h - 220) / 2, 0); g.userData.noClip = true; group.add(g); }
  // shelves: glass slabs with a green LED strip along each front edge
  const ledFace = lit(GREEN, 1.1);
  const shelfY = [150, 920, 1460];
  for (const y of shelfY.slice(1)) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(w - 10, 18, d - 40), new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#a7c9b6"), roughness: 0.08, transparent: true, opacity: 0.32, depthWrite: false }));
    s.position.set(0, y - 9, -10); s.castShadow = false; s.receiveShadow = true; group.add(s);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(w - 30, 8, 8), ledFace); strip.position.set(0, y - 22, d / 2 - 34); group.add(strip);
  }
  const topStrip = new THREE.Mesh(new THREE.BoxGeometry(w - 30, 8, 8), ledFace); topStrip.position.set(0, h - 70 - 4 + 0.3, d / 2 - 34);   // under the top (6 below it before) group.add(topStrip);
  return {
    group, shelf: shelfY, w, d,
    /** the LED strips' light 0…1 */
    setGlow: (v: number) => setLit(ledFace, v, 0.12),
  };
};
