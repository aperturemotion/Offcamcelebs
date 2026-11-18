// PLACE 7 · TO BE FAIR — a balance scale: "$29B | 1 AUG 2021" on one pan against the shares on the other; it rocks and
// comes LEVEL (on announcement day the two were the same thing). Then the desk: the certificates are handed across it to
// AFTERPAY SHAREHOLDERS, under the label FIXED: 0.375 SHARES.
import { THREE, mesh, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, plaque, halo } from "../studio";
import { makeCerts } from "../obj/certs";
import { makeNameplate } from "../obj/nameplate";
import { makeDesk } from "../obj/desk";
import { makeScale } from "../obj/c_scale";
import { NAMES } from "../../audit/record";

export const FAIR_GEO = { floor: 1420, scale: { x: 430, beam: 696 }, desk: { x: 1700, y: 1180, w: 1560, d: 680 }, from: -330, to: 220, plate: 230 } as const;
/** tilt: degrees of the beam (0 = level); hand: 0…1 the certificates crossing the desk; label: 0…1 the FIXED plaque lit */
export type FairP = { tilt: number; hand: number; label: number };

export const fairModel = (): Model<FairP> => {
  const G = FAIR_GEO, Y = -G.floor;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: 1000, rx: 1700 }));
  const pool = (x: number, w: number, d: number, op = 0.1) => { const h = halo(w, d, "#B9C4D6", op, true); h.position.set(x, Y + 1.2, 60); root.add(h); };
  // ── the scale ──
  const scale = makeScale({ span: 640, height: 640, pan: 138, drop: 300 });
  scale.group.userData.obj = "scale";
  scale.group.position.set(G.scale.x, Y, 0);
  scale.group.rotation.y = -0.1;
  pool(G.scale.x, 1300, 800, 0.12);
  // the announced figure, standing on the left pan (mint: the headline number), on two small feet
  const fig = plaque("fair:29", 236, 118, [{ t: "$29B", size: 72, weight: 800, color: C.mint, glow: 18 }, { t: "1 AUG 2021", size: 23, weight: 600, color: C.white, track: 0.12, gap: 8 }], { pad: 10 });
  fig.position.set(0, 14 + 68, 13);
  for (const s of [-1, 1]) { const ft = rbox(26, 14, 60, 3, SM.edge()); ft.position.set(s * 84, 7, 30); scale.seats[0].add(ft); }
  scale.seats[0].add(fig);
  // the shares it was paid in, on the right pan
  const panCerts = makeCerts({ key: "fair:pan", n: 16, w: 210, d: 150, labels: ["SHARES"] });
  panCerts.group.position.set(0, 0, 0);
  scale.seats[1].add(panCerts.group);
  // ── the desk: the certificates cross it to the shareholders' nameplate; the FIXED label stands behind on two posts ──
  const desk = makeDesk({ w: G.desk.w, d: G.desk.d, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, -G.desk.y, -G.desk.d / 2 + 20);
  desk.group.userData.obj = "desk";
  const sheen = halo(G.desk.w * 1.05, G.desk.d * 1.25, "#AEB9CC", 0.13, true);
  sheen.position.set(G.desk.x, -G.desk.y + 0.8, 20);
  const certs = makeCerts({ key: "fair", n: 18, labels: ["BLOCK SHARES"], sub: "0.375 PER AFTERPAY SHARE" });
  certs.group.userData.obj = "certs";
  const plate = makeNameplate({ key: "fair", w: 600, h: 92, texts: [NAMES.holders] });
  plate.group.position.set(G.desk.x + G.plate, -G.desk.y, 190);
  plate.group.userData.obj = "nameplate";
  const fixed = plaque("fair:fixed", 640, 132, [{ t: "FIXED: 0.375 SHARES", size: 64, weight: 800, color: C.khaki, glow: 14 }], { pad: 14 });
  const POST = 150;
  fixed.position.set(G.desk.x - 150, -G.desk.y + POST + 66, -250);
  fixed.userData.obj = "fixed";
  for (const s of [-1, 1]) {
    const post = mesh(new THREE.CylinderGeometry(5, 5, POST, 16), SM.edge());
    post.position.set(G.desk.x - 150 + s * 200, -G.desk.y + POST / 2, -262);
    const foot = rbox(70, 8, 90, 3, SM.graphite());
    foot.position.set(G.desk.x - 150 + s * 200, -G.desk.y + 4, -217);
    root.add(post, foot);
  }
  const air = halo(900, 420, C.khaki, 0, false);
  air.position.set(G.desk.x - 150, -G.desk.y + POST + 66, -300);
  root.add(scale.group, desk.group, sheen, certs.group, plate.group, fixed, air);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      scale.update({ tilt: p.tilt });
      // the hand-over: the stack is lifted a little, carried across and set down in front of the nameplate
      certs.group.position.set(G.desk.x + G.from + (G.to - G.from) * p.hand, -G.desk.y + 46 * Math.sin(Math.PI * p.hand), -40 - 90 * p.hand);
      certs.group.rotation.y = 0.05 * Math.sin(Math.PI * p.hand);
      ((fixed.userData.face as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 0.1 + 0.9 * p.label;
      (air.material as THREE.MeshBasicMaterial).opacity = 0.16 * p.label;
    },
  };
};
