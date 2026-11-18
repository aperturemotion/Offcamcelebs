// PLACE 3 · THE DEAL — the buyer's desk: his nameplate; the contract slides in; a cooler box of cash slides out; a glowing
// stack of share certificates slides in; one Afterpay share turns into 0.375 of a Square share. STUB BUILD: the contract,
// the cooler and the conversion card are placeholders for the place-worker to model.
import { THREE, type Model } from "../stage";
import { rbox } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, textTex, litFace, halo } from "../studio";
import { makeDesk } from "../obj/desk";
import { makeNameplate } from "../obj/nameplate";
import { makeCerts } from "../obj/certs";
import { NAMES, DATES } from "../../audit/record";

export const DEAL_GEO = { floor: 1414, desk: { x: 540, y: 1150, w: 1800, d: 640 }, plate: { x: 540, z: -200 }, contract: { x: 170, z: 20 }, swapX: 900, card: { x: 540, z: 170 } } as const;
/** contract: 0 off the desk's left … 1 in place; cooler: 0 in place … 1 gone off the right; certs: 0 off right … 1 in place;
 *  card: 0 below the desk's front edge … 1 standing; flip: 0 "1 AFTERPAY SHARE" … 1 "0.375 SQUARE SHARES" */
export type DealP = { contract: number; cooler: number; certs: number; card: number; flip: number };

export const dealModel = (): Model<DealP> => {
  const G = DEAL_GEO, Y = -G.desk.y;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: G.desk.x, rx: 1200 }));
  const desk = makeDesk({ w: G.desk.w, d: G.desk.d, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, Y, -G.desk.d / 2);
  desk.group.userData.obj = "desk";
  const plate = makeNameplate({ key: "deal", w: 700, texts: [NAMES.buyer] });
  plate.group.position.set(G.plate.x, Y, G.plate.z);
  plate.group.userData.obj = "nameplate";
  // the contract (placeholder): a sheet, its date in khaki
  const contract = new THREE.Group();
  contract.userData.obj = "contract";
  const sheet = rbox(300, 5, 400, 1.5, SM.paper(), 1);
  sheet.position.set(0, 2.5, 200);
  const cface = new THREE.Mesh(new THREE.PlaneGeometry(280, 380), SM.print(textTex("deal:contract", 280, 380, [
    { t: "AGREEMENT", size: 34, weight: 800, color: "#1E1A10", track: 0.12 },
    { t: "SQUARE | AFTERPAY", size: 20, weight: 600, color: "#5B5443", gap: 14, track: 0.1 },
    { t: "— — — — — — — —", size: 18, weight: 500, color: "#B9B09A", gap: 34 },
    { t: "— — — — — — —", size: 18, weight: 500, color: "#B9B09A", gap: 16 },
    { t: DATES.contract, size: 40, weight: 800, color: "#7A5A12", gap: 40 },
  ], { bg: "#EFE8D8", pad: 22 })));
  cface.rotation.x = -Math.PI / 2; cface.position.set(0, 5.6, 0); cface.receiveShadow = true;
  contract.add(sheet, cface);
  // the cooler box of cash (placeholder): a black box, its open top full of gold-lit notes
  const cooler = new THREE.Group();
  cooler.userData.obj = "cooler";
  const boxB = rbox(320, 200, 230, 14, SM.black());
  boxB.position.set(0, 100, 115);
  const lip = rbox(330, 14, 240, 6, SM.edge());
  lip.position.set(0, 197, 120);
  const cash = rbox(280, 14, 190, 3, SM.gold());
  cash.position.set(0, 207, 95);
  const cl = litFace(220, 60, textTex("deal:cash", 220, 60, [{ t: "CASH", size: 44, weight: 800, color: C.white, track: 0.2 }]));
  cl.position.set(0, 100, 116);
  const cair = halo(520, 380, C.gold, 0.28, true);
  cair.position.y = 215;
  cooler.add(boxB, lip, cash, cl, cair);
  // the stack of share certificates
  const certs = makeCerts({ key: "deal", labels: ["SQUARE SHARES"], sub: "CLASS A COMMON STOCK" });
  certs.group.userData.obj = "certs";
  // the conversion card (placeholder): one certificate standing, a face each side
  const card = new THREE.Group();
  card.userData.obj = "card";
  const turn = new THREE.Group();
  const cb = rbox(460, 250, 10, 4, SM.paper(), 1);
  cb.position.set(0, 0, 5);
  turn.add(cb);
  [["1 AFTERPAY SHARE", "#1E1A10", "BECOMES"], ["0.375", "#7A5A12", "SQUARE SHARES"]].forEach(([big, col, small], i) => {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(440, 230), SM.print(textTex(`deal:card${i}`, 440, 230, [
      { t: big, size: i ? 120 : 50, weight: 800, color: col, track: 0.02 },
      { t: small, size: 24, weight: 700, color: "#5B5443", gap: 14, track: 0.16 },
    ], { bg: "#EFE8D8", border: "#8E7C45", pad: 26 })));
    f.position.z = (i ? -1 : 1) * 5.7;
    if (i) f.rotation.y = Math.PI;
    turn.add(f);
  });
  turn.position.y = 125 + 6;
  turn.rotation.x = -0.12;
  card.add(turn);
  root.add(desk.group, plate.group, contract, cooler, certs.group, card);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      contract.position.set(G.contract.x - 1100 * (1 - p.contract), Y, G.contract.z);
      cooler.position.set(G.swapX + 1500 * p.cooler, Y, -60);
      certs.group.position.set(G.swapX + 1500 * (1 - p.certs), Y, 40);
      certs.update({ height: 1, glow: p.certs });
      card.position.set(G.card.x, Y - 320 * (1 - p.card), G.card.z);
      card.visible = p.card > 0.01;
      turn.rotation.y = Math.PI * p.flip;
    },
  };
};
