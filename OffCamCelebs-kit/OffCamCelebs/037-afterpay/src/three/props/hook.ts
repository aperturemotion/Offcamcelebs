// PLACE 1 · THE HOOK — the hanging price tag (the hero), folded newspapers under it, and the buyer's desk to its right with
// the framed print and the thick filing. STUB BUILD (the foundation): the arrangement and the parameters are final, the
// newspapers are placeholders for the place-worker to model.
import { THREE, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, textTex, halo } from "../studio";
import { makeTag } from "../obj/tag";
import { makeDesk } from "../obj/desk";
import { makeFrame } from "../obj/frame";
import { makeFiling } from "../obj/filing";
import { HAS_PHOTO, PHOTO_FILE } from "../../audit/data";

export const HOOK_GEO = { floor: 1420, tag: { x: 430, y: 420, w: 760, h: 320, cord: 200 }, papers: { x: 430, y: 1420 }, desk: { x: 1330, y: 1180 } } as const;
/** flip: the tag, 0 = $29,000,000,000 (mint) … 1 = $13,800,000,000 (khaki); swing: degrees; lit: the lamp */
export type HookP = { flip: number; swing: number; lit: number };

export const hookModel = (): Model<HookP> => {
  const G = HOOK_GEO;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: 800, rx: 1300 }));
  const tag = makeTag({ key: "hook", w: G.tag.w, h: G.tag.h, cord: G.tag.cord, faces: [
    { kicker: "AFTERPAY | SOLD FOR", figure: "$29,000,000,000", color: C.mint },
    { kicker: "THE FILING SAYS", figure: "$13,800,000,000", color: C.khaki }] });
  tag.group.position.set(G.tag.x, -G.tag.y, 0);
  tag.group.userData.obj = "tag";
  root.add(tag.group);
  // the folded newspapers, each with "$29B" ringed (placeholders)
  const papers = new THREE.Group();
  papers.userData.obj = "papers";
  [[-150, 150, -0.12], [120, 90, 0.1], [-10, 250, 0.03]].forEach(([dx, z, ry], i) => {
    const p = new THREE.Group();
    const slab = rbox(330, 20, 230, 3, SM.paper(i % 2 ? "#DDD6C6" : "#E8E1D1"), 1);
    slab.position.set(0, 10, 115);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(310, 210), SM.print(textTex(`hook:paper${i}`, 310, 210, [
      { t: ["THE MORNING LEDGER", "MARKET DAILY", "THE BUSINESS POST"][i], size: 26, weight: 800, color: "#2A261C", track: 0.06 },
      { t: "AFTERPAY SOLD FOR", size: 20, weight: 600, color: "#4A4435", gap: 20, track: 0.1 },
      { t: "$29B", size: 76, weight: 800, color: "#1E1A10", gap: 6 },
    ], { bg: i % 2 ? "#DDD6C6" : "#E8E1D1", pad: 18 })));
    face.rotation.x = -Math.PI / 2; face.position.y = 20.5; face.receiveShadow = true;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(78, 3.2, 8, 48), SM.glow(C.red));
    ring.rotation.x = -Math.PI / 2; ring.scale.set(1, 0.52, 1); ring.position.set(0, 21.5, 42);
    p.add(slab, face, ring);
    p.position.set(G.papers.x + dx, -G.papers.y, z);
    p.rotation.y = ry;
    papers.add(p);
  });
  root.add(papers);
  // the buyer's desk: the framed print and the thick filing
  const desk = makeDesk({ w: 780, d: 520, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, -G.desk.y, -260);
  desk.group.userData.obj = "desk";
  const frame = makeFrame({ key: "hook", photo: HAS_PHOTO ? PHOTO_FILE : null });
  frame.group.position.set(G.desk.x - 190, -G.desk.y, -120);
  frame.group.userData.obj = "frame";
  const filing = makeFiling({ key: "hook", w: 330, d: 420, t: 70, cover: ["FORM 10-Q", "BLOCK, INC. | Q1 2022"], line: "" });
  filing.group.position.set(G.desk.x + 170, -G.desk.y, -40);
  filing.group.userData.obj = "filing";
  const lamp = halo(900, 500, C.white, 0.1, true);
  lamp.position.set(G.desk.x, -G.desk.y + 1, 0);
  root.add(desk.group, frame.group, filing.group, lamp);
  return { root, rig: STUDIO_RIG, update: (p) => tag.update({ flip: p.flip, swing: p.swing, lit: p.lit }) };
};
