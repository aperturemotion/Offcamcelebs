// PLACE 7 · TO BE FAIR — a balance scale, "$29B | 1 AUG 2021" on one pan against the shares on the other, level; then the
// certificates are handed across the desk to AFTERPAY SHAREHOLDERS, under the label FIXED: 0.375 SHARES.
// STUB BUILD: the scale is a placeholder for the place-worker to model.
import { THREE, mesh, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, plaque } from "../studio";
import { makeCerts } from "../obj/certs";
import { makeNameplate } from "../obj/nameplate";
import { makeDesk } from "../obj/desk";
import { NAMES } from "../../audit/record";

export const FAIR_GEO = { floor: 1420, scale: { x: 430 }, desk: { x: 1650, y: 1180 } } as const;
/** tilt: degrees of the beam (0 = level); hand: 0…1 the certificates crossing the desk; label: 0…1 the FIXED plaque lit */
export type FairP = { tilt: number; hand: number; label: number };

export const fairModel = (): Model<FairP> => {
  const G = FAIR_GEO, Y = -G.floor;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: 1000, rx: 1600 }));
  const scale = new THREE.Group();
  scale.userData.obj = "scale";
  const base = mesh(new THREE.CylinderGeometry(130, 150, 30, 48), SM.black());
  base.position.y = 15;
  const post = mesh(new THREE.CylinderGeometry(9, 9, 560, 20), SM.edge());
  post.position.y = 310;
  const beam = new THREE.Group();
  beam.position.y = 590;
  const bar = rbox(700, 14, 14, 5, SM.edge());
  bar.position.z = 7;
  beam.add(bar);
  const pans = [-1, 1].map((s) => {
    const g = new THREE.Group();
    g.position.x = s * 330;
    for (const k of [-1, 1]) { const w = mesh(new THREE.CylinderGeometry(1.4, 1.4, 250, 6), SM.edge()); w.position.set(k * 90, -125, 0); w.rotation.z = -k * 0.34; g.add(w); }
    const pan = mesh(new THREE.CylinderGeometry(150, 130, 14, 48), SM.graphite());
    pan.position.y = -250;
    g.add(pan);
    beam.add(g);
    return g;
  });
  const fig = plaque("fair:29", 250, 120, [{ t: "$29B", size: 70, weight: 800, color: C.mint, glow: 18 }, { t: "1 AUG 2021", size: 24, weight: 600, color: C.white, track: 0.12, gap: 8 }], { pad: 10 });
  fig.position.set(0, -180, 0);
  pans[0].add(fig);
  const panCerts = makeCerts({ key: "fair:pan", n: 14, w: 220, d: 160, labels: ["SHARES"] });
  panCerts.group.position.set(0, -243, 0);
  pans[1].add(panCerts.group);
  scale.add(base, post, beam);
  scale.position.set(G.scale.x, Y, 0);
  // the desk: the certificates cross it to the shareholders' nameplate; the FIXED label stands behind
  const desk = makeDesk({ w: 1500, d: 640, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, -G.desk.y, -320);
  desk.group.userData.obj = "desk";
  const certs = makeCerts({ key: "fair", n: 18, labels: ["BLOCK SHARES"], sub: "0.375 PER AFTERPAY SHARE" });
  certs.group.userData.obj = "certs";
  const plate = makeNameplate({ key: "fair", w: 640, h: 92, texts: [NAMES.holders] });
  plate.group.position.set(G.desk.x + 330, -G.desk.y, 150);
  plate.group.userData.obj = "nameplate";
  const fixed = plaque("fair:fixed", 520, 110, [{ t: "FIXED: 0.375 SHARES", size: 54, weight: 800, color: C.khaki, glow: 14 }], { pad: 14 });
  fixed.position.set(G.desk.x, -G.desk.y + 75, -240);
  fixed.userData.obj = "fixed";
  root.add(scale, desk.group, certs.group, plate.group, fixed);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      beam.rotation.z = (p.tilt * Math.PI) / 180;
      pans.forEach((g) => { g.rotation.z = -beam.rotation.z; });
      certs.group.position.set(G.desk.x - 480 + 800 * p.hand, -G.desk.y, -60);
      ((fixed.userData.face as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 0.12 + 0.88 * p.label;
    },
  };
};
