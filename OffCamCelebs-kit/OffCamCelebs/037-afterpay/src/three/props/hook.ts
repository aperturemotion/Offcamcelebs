// PLACE 1 · THE HOOK — the hanging price tag (the hero) on its rail under amber light; on the buyer's desk below it, three
// folded newspapers with "$29B" ringed (they drop in), the framed print and the thick filing.
import { THREE, type Model } from "../stage";
import { SM, C, STUDIO_RIG, studioFloor, halo } from "../studio";
import { makeTag } from "../obj/tag";
import { makeDesk } from "../obj/desk";
import { makeFrame } from "../obj/frame";
import { makeFiling } from "../obj/filing";
import { makePaper } from "../obj/a_paper";
import { HAS_PHOTO, PHOTO_FILE } from "../../audit/data";
void SM;

export const HOOK_GEO = {
  floor: 1844, desk: { x: 600, y: 1560, w: 1500, d: 800 },
  tag: { x: 540, y: -80, w: 760, h: 320, cord: 200 },
  papers: { x: 330, y: 1560 }, frame: { x: 1205 }, filing: { x: 880 },
} as const;
const PAPERS = [
  { x: 170, z: -285, ry: -0.11, masthead: "THE MORNING LEDGER", tone: "#E6DFCF" },
  { x: 480, z: -235, ry: 0.13, masthead: "MARKET DAILY", tone: "#DCD5C4" },
  { x: 320, z: 5, ry: 0.035, masthead: "THE BUSINESS POST", tone: "#E9E2D3" },
] as const;
/** flip: the tag, 0 = $29,000,000,000 (mint) … 1 = $13,800,000,000 (khaki); swing: degrees; lit: the tag's lamp;
 *  drop: each newspaper's height above the desk (px) and its spin (rad) as it falls; desk: 0…1 the light on the desk's
 *  framed print and filing */
export type HookP = { flip: number; swing: number; lit: number; drop: [number, number][]; desk: number };

export const hookModel = (): Model<HookP> => {
  const G = HOOK_GEO, DY = -G.desk.y;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: G.desk.x, rx: 1300 }));
  const tag = makeTag({ key: "hook", w: G.tag.w, h: G.tag.h, cord: G.tag.cord, rail: 2600, faces: [
    { kicker: "AFTERPAY | SOLD FOR", figure: "$29,000,000,000", color: C.mint },
    { kicker: "THE FILING SAYS", figure: "$13,800,000,000", color: C.khaki }] });
  tag.group.position.set(G.tag.x, -G.tag.y, -40);
  tag.group.userData.obj = "tag";
  root.add(tag.group);
  const desk = makeDesk({ w: G.desk.w, d: G.desk.d, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, DY, 0);
  desk.group.userData.obj = "desk";
  root.add(desk.group);
  // the folded newspapers: they drop onto the desk, one after another
  const papers = PAPERS.map((q, i) => {
    const p = makePaper({ key: `hook${i}`, masthead: q.masthead, tone: q.tone, w: 300, d: 215, t: 18 });
    p.group.userData.obj = `paper${i}`;
    root.add(p.group);
    return p.group;
  });
  // the amber lamp's pool on the desk, under the tag
  const pool = halo(900, 620, C.amber, 0.16, true);
  pool.position.set(G.tag.x - 140, DY + 0.6, -120);
  root.add(pool);
  // the buyer's side of the desk: the framed print and the thick filing, under their own cool light
  const frame = makeFrame({ key: "hook", photo: HAS_PHOTO ? PHOTO_FILE : null });
  frame.group.position.set(G.frame.x, DY, -230);
  frame.group.rotation.y = -0.26;
  frame.group.userData.obj = "frame";
  const filing = makeFiling({ key: "hook", w: 300, d: 400, t: 74, cover: ["FORM 10-Q", "BLOCK, INC. | Q1 2022"], line: "" });
  filing.group.position.set(G.filing.x, DY, -90);
  filing.group.rotation.y = 0.08;
  filing.group.userData.obj = "filing";
  const lamp = halo(820, 640, C.white, 0.0, true);
  lamp.position.set((G.frame.x + G.filing.x) / 2 + 20, DY + 0.7, -150);
  root.add(frame.group, filing.group, lamp);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      tag.update({ flip: p.flip, swing: p.swing, lit: p.lit });
      papers.forEach((g, i) => {
        const q = PAPERS[i], [h, spin] = p.drop[i] ?? [0, 0];
        g.position.set(q.x, DY + h, q.z);
        g.rotation.set(0, q.ry + spin, 0);
        g.visible = h < 1400;
      });
      (lamp.material as THREE.MeshBasicMaterial).opacity = 0.05 + 0.13 * p.desk;
    },
  };
};
