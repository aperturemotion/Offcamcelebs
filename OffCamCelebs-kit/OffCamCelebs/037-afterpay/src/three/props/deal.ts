// PLACE 3 · THE DEAL — the buyer's desk, a long black desk the camera travels along, one object per shot:
//   the nameplate; the contract (and its pen) sliding in before it; a cooler box of cash that slides away; the glowing
//   stack of share certificates that takes its place; and ONE certificate on a rail, "1 AFTERPAY SHARE", which is cut:
//   0.375 of it turns to face the camera as a fraction of a Square share, the rest slides off.
import { THREE, mesh, paintTex, type Model } from "../stage";
import { rbox, font, track } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, textTex, litFace, halo } from "../studio";
import { makeDesk } from "../obj/desk";
import { makeNameplate } from "../obj/nameplate";
import { makeCerts, certTex } from "../obj/certs";
import { NAMES, DATES, DEAL } from "../../audit/record";

export const DEAL_GEO = {
  floor: 1414, desk: { x: 1000, y: 1150, w: 3100, d: 700 },
  plate: { x: 240, z: -190, w: 720, h: 124 }, contract: { x: 250, z: 110, w: 330, d: 430 },
  swapX: 1080, cooler: { w: 430, h: 250, d: 310 }, certs: { w: 470, d: 330, n: 40, t: 6 },
  card: { x: 1920, z: 60, w: 600, h: 340 },
} as const;
/** contract: 0 off the desk's left … 1 in place; cooler: 0 in place … 1 gone off the right; certs: 0 off right … 1 in place;
 *  card: 0 off to the right … 1 on its rail; flip: 0 "1 AFTERPAY SHARE" … 1 the 0.375 piece alone, turned to "0.375" */
export type DealP = { contract: number; cooler: number; certs: number; card: number; flip: number };

const contractTex = (w: number, h: number) => paintTex("deal:contract2", w, h, (g) => {
  g.fillStyle = "#F1EBDC"; g.fillRect(0, 0, w, h);
  g.textAlign = "center"; g.textBaseline = "alphabetic"; g.fillStyle = "#1E1A10";
  font(g, 800, 30); track(g, 4); g.fillText("AGREEMENT", w / 2, 62);
  font(g, 600, 14); track(g, 2); g.fillStyle = "#5B5443"; g.fillText("SQUARE TO ACQUIRE AFTERPAY", w / 2, 88); track(g, 0);
  g.fillStyle = "#1E1A10"; g.fillRect(34, 104, w - 68, 2);
  g.fillStyle = "#B8AF99";
  for (let i = 0; i < 9; i++) { const ww = (w - 68) * (i % 4 === 3 ? 0.6 : 0.96 + 0.04 * Math.sin(i * 3.1)); g.fillRect(34, 128 + i * 17, ww, 5); }
  // the date, boxed: the one thing to read
  g.strokeStyle = "#7A5A12"; g.lineWidth = 2; g.strokeRect(44, 292, w - 88, 60);
  g.fillStyle = "#5B5443"; font(g, 600, 11); track(g, 2); g.fillText("DATED", w / 2, 309); track(g, 1);
  g.fillStyle = "#7A5A12"; font(g, 800, 32); g.fillText(DATES.contract, w / 2, 342); track(g, 0);
  // two signature lines
  g.strokeStyle = "#3B3524"; g.lineWidth = 1.5;
  for (const [x0, ph] of [[40, 0.4], [w / 2 + 14, 1.7]] as const) {
    g.beginPath();
    for (let i = 0; i <= 44; i++) { const x = x0 + 6 + i * 2.4, y = 388 - 8 * Math.sin(i * 0.7 + ph) * Math.cos(i * 0.21 + ph); if (i === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
    g.fillStyle = "#5B5443"; g.fillRect(x0, 398, w / 2 - 54, 1.2);
  }
}, 3);

export const dealModel = (): Model<DealP> => {
  const G = DEAL_GEO, Y = -G.desk.y;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: G.desk.x, rx: 1900 }));
  const desk = makeDesk({ w: G.desk.w, d: G.desk.d, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, Y, -G.desk.d / 2);
  desk.group.userData.obj = "desk";
  // the light on the desk: a soft pool under each shot's object
  for (const [x, z, w, d, o] of [[G.plate.x, -40, 1300, 760, 0.12], [G.swapX, 0, 1200, 760, 0.1], [G.card.x, 40, 1200, 760, 0.12]] as const) {
    const pool = halo(w, d, C.white, o, true);
    pool.position.set(x, Y + 3, z);
    root.add(pool);
  }
  const plate = makeNameplate({ key: "deal", w: G.plate.w, h: G.plate.h, texts: [NAMES.buyer] });
  plate.group.position.set(G.plate.x, Y, G.plate.z);
  plate.group.userData.obj = "nameplate";

  // ── the contract: three sheets, the top one printed, and a pen lying beside it ──
  const contract = new THREE.Group();
  contract.userData.obj = "contract";
  const cw = G.contract.w, cd = G.contract.d;
  for (let i = 0; i < 3; i++) {
    const s = rbox(cw, 2.2, cd, 1, SM.paper(i ? "#E4DCC9" : "#EDE6D6"), 1);
    s.position.set((2 - i) * 5, 1.1 + i * 2.2, cd / 2 + (2 - i) * 4);
    s.rotation.y = (2 - i) * 0.018;
    contract.add(s);
  }
  const cface = new THREE.Mesh(new THREE.PlaneGeometry(cw - 4, cd - 4), SM.print(contractTex(cw - 4, cd - 4)));
  cface.rotation.x = -Math.PI / 2; cface.position.set(0, 6.9, 0); cface.receiveShadow = true;
  contract.add(cface);
  const pen = new THREE.Group();
  const barrel = mesh(new THREE.CylinderGeometry(7, 7, 190, 20), SM.black());
  const cap = mesh(new THREE.CylinderGeometry(7.6, 7.6, 46, 20), SM.edge());
  cap.position.y = 72;
  const nib = mesh(new THREE.ConeGeometry(7, 26, 20), SM.edge());
  nib.position.y = -108; nib.rotation.x = Math.PI;
  const clip = rbox(3, 50, 5, 1, SM.edge(), 1);
  clip.position.set(0, 66, 10);
  pen.add(barrel, cap, nib, clip);
  pen.rotation.set(Math.PI / 2, 0, 0.5);
  pen.position.set(cw / 2 + 70, 8, 40);
  contract.add(pen);

  // ── the cooler box of cash: an open box, banded bundles of notes heaped in it, its lid thrown back ──
  const cooler = new THREE.Group();
  cooler.userData.obj = "cooler";
  const K = G.cooler;
  const body = rbox(K.w, K.h, K.d, 18, SM.black());
  body.position.set(0, K.h / 2, K.d / 2);
  const lip = rbox(K.w + 12, 16, K.d + 12, 8, SM.graphite());
  lip.position.set(0, K.h - 4, K.d / 2 + 6);
  const lipLine = rbox(K.w + 14, 3, 4, 1.2, SM.edge(), 1);
  lipLine.position.set(0, K.h - 10, K.d / 2 + 8.5);
  const lidPivot = new THREE.Group();
  lidPivot.position.set(0, K.h + 4, -K.d / 2 - 4);
  const lid = rbox(K.w + 8, 26, K.d + 8, 10, SM.black());
  lid.position.set(0, 13, 0);                       // hinged on its back edge: front face at the hinge line, depth going back
  const lidLine = rbox(K.w + 10, 3, 4, 1.2, SM.edge(), 1);
  lidLine.position.set(0, 4, -K.d - 6);
  lidPivot.add(lid, lidLine);
  lidPivot.rotation.x = -1.25;                      // thrown back
  for (const s of [-1, 1]) {
    const h = mesh(new THREE.TorusGeometry(34, 5, 10, 24, Math.PI), SM.edge());
    h.rotation.set(0, Math.PI / 2, Math.PI);
    h.position.set(s * (K.w / 2 + 5), K.h * 0.66, 0);
    cooler.add(h);
    const latch = rbox(34, 44, 8, 3, SM.edge());
    latch.position.set(s * K.w * 0.26, K.h - 30, K.d / 2 + 5);
    cooler.add(latch);
  }
  const goldM = SM.gold(), bandM = SM.paper("#EFE8D8");
  const bundles = new THREE.Group();
  const BW = 124, BH = 30, BD = 62;
  for (let layer = 0; layer < 2; layer++) for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    const i = layer * 9 + r * 3 + c;
    if (layer === 1 && (i * 7) % 5 === 0) continue;                                  // a heaped, uneven top layer
    const b = new THREE.Group();
    const note = rbox(BW, BH, BD, 3, goldM, 1);
    note.position.set(0, BH / 2, BD / 2);
    const band = rbox(26, BH + 1.2, BD + 1.2, 2, bandM, 1);
    band.position.set(0, BH / 2, BD / 2 + 0.6);
    b.add(note, band);
    b.position.set((c - 1) * (BW + 8) + (layer ? 14 : 0), K.h - 24 + layer * BH, (r - 1) * (BD + 22) + (layer ? -8 : 0));
    b.rotation.y = ((i * 37) % 11 - 5) * 0.012;
    bundles.add(b);
  }
  const cl = litFace(250, 74, textTex("deal:cash2", 250, 74, [{ t: "CASH", size: 54, weight: 800, color: C.white, track: 0.22, glow: 6 }]));
  cl.position.set(0, K.h * 0.46, K.d / 2 + 0.9);
  const cair = halo(K.w * 1.7, K.d * 1.9, C.gold, 0.34, true);
  cair.position.y = K.h + 46;
  const cup = halo(K.w * 1.5, 380, C.gold, 0.2);
  cup.position.set(0, K.h + 120, -K.d / 2 - 60);
  cooler.add(body, lip, lipLine, lidPivot, bundles, cl, cair, cup);

  // ── the stack of share certificates ──
  const certs = makeCerts({ key: "deal", w: G.certs.w, d: G.certs.d, n: G.certs.n, t: G.certs.t, labels: ["SQUARE SHARES"], sub: "CLASS A COMMON STOCK" });
  certs.group.userData.obj = "certs";

  // ── the one certificate, on a rail: cut at 0.375 of its width ──
  const card = new THREE.Group();
  card.userData.obj = "card";
  const CW = G.card.w, CH = G.card.h, A = CW * DEAL.ratio, B = CW - A, TH = 8;
  const rail = rbox(CW + 70, 12, 46, 4, SM.edge());
  rail.position.set(0, 6, 23);
  const railIn = rbox(CW + 50, 5, 20, 2, SM.black());
  railIn.position.set(0, 12, 10);
  card.add(rail, railIn);
  const lean = new THREE.Group();
  lean.position.y = 12 + CH / 2;
  lean.rotation.x = -0.1;
  card.add(lean);
  const frontTex = certTex("deal:one", CW, CH, "AFTERPAY SHARE", undefined, { big: "1" });
  const part = (w: number, u0: number, u1: number) => {
    const g = new THREE.Group();
    const back = rbox(w, CH, TH, 2.5, SM.paper(), 1);
    back.position.z = TH / 2;
    const geo = new THREE.PlaneGeometry(w - 1, CH - 1);
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setX(i, u0 + (u1 - u0) * uv.getX(i));
    const f = new THREE.Mesh(geo, SM.print(frontTex));
    f.position.z = TH / 2 + 0.7;
    g.add(back, f);
    lean.add(g);
    return g;
  };
  const pa = part(A, 0, DEAL.ratio), pb = part(B, DEAL.ratio, 1);
  const backFace = new THREE.Mesh(new THREE.PlaneGeometry(A - 1, CH - 1), SM.print(certTex("deal:frac", A, CH, "SQUARE SHARE", undefined, { big: String(DEAL.ratio), bigColor: "#8A6410" })));
  backFace.position.z = -TH / 2 - 0.7;
  backFace.rotation.y = Math.PI;
  pa.add(backFace);
  const fair = halo(A * 2.6, CH * 2, C.khaki, 0.0);
  fair.position.set(0, 12 + CH / 2, -50);
  card.add(fair);

  root.add(desk.group, plate.group, contract, cooler, certs.group, card);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      contract.position.set(G.contract.x - 1250 * (1 - p.contract), Y, G.contract.z);
      contract.rotation.y = -0.12 - 0.1 * (1 - p.contract);
      cooler.position.set(G.swapX + 1700 * p.cooler, Y, -10);
      cooler.visible = p.cooler < 0.999;
      certs.group.position.set(G.swapX + 1700 * (1 - p.certs), Y, 20);
      certs.group.visible = p.certs > 0.001;
      certs.update({ height: 1, glow: p.certs });
      card.position.set(G.card.x + 1300 * (1 - p.card), Y, G.card.z);
      card.visible = p.card > 0.001;
      const k = p.flip;
      pa.position.x = (-CW / 2 + A / 2) * (1 - k);
      pa.rotation.y = Math.PI * k;
      pb.position.x = CW / 2 - B / 2 + 1500 * k * k;
      pb.position.z = -14 * Math.min(1, k * 6);
      pb.visible = k < 0.98;
      (fair.material as THREE.MeshBasicMaterial).opacity = 0.3 * k;
    },
  };
};
