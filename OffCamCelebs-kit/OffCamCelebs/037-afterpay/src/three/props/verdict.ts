// PLACE 8 · THE VERDICT — the film's opening composition again (the loop): the price tag on its rail, and on the desk under
// it a receipt printer. The receipt PRINTS: ANNOUNCED $29,000,000,000 / PAID AT CLOSING $13,800,000,000 / GAP ≈
// $15,000,000,000; the one-off verdict label lands on it; the framed print stands beside it.
import { THREE, mesh, paintTex, type Model } from "../stage";
import { rbox, font, track } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, textTex, litFace, halo } from "../studio";
import { makeDesk } from "../obj/desk";
import { makeFrame } from "../obj/frame";
import { makeTag } from "../obj/tag";
import { HAS_PHOTO, PHOTO_FILE } from "../../audit/data";

export const VERDICT_GEO = {
  floor: 1764, desk: { x: 600, y: 1480, w: 1500, d: 700 },
  printer: { x: 430, w: 660, h: 120, d: 300 }, receipt: { w: 560, h: 600 }, frame: { x: 930 },
  tag: { x: 540, y: 225, w: 760, h: 320, cord: 120 },
} as const;
/** the receipt's lines, top to bottom, as fractions of its height (where each line's foot is): the feed that shows them */
export const RECEIPT_LINES = { head: 0.17, announced: 0.375, paid: 0.555, gap: 0.735, all: 1 } as const;
/** feed: 0…1 of the receipt out of the slot; rating: 0…1 the verdict label landing on it; tag: the tag's lamp; busy: the
 *  printer's light (0…1) */
export type VerdictP = { feed: number; rating: number; tag: number; swing: number; busy: number };

export const verdictModel = (): Model<VerdictP> => {
  const G = VERDICT_GEO, DY = -G.desk.y, RW = G.receipt.w, RH = G.receipt.h, PW = G.printer.w, PH = G.printer.h, PD = G.printer.d;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: G.desk.x, rx: 1300 }));
  const desk = makeDesk({ w: G.desk.w, d: G.desk.d, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, DY, 0);
  desk.group.userData.obj = "desk";
  // ── the receipt printer: a low black body, a raised paper bay at the back, a satin tear bar along the slot ──
  const printer = new THREE.Group();
  printer.userData.obj = "printer";
  const SLOT_Z = -40;                                   // the slot, behind the front deck
  const pb = rbox(PW, PH, PD, 16, SM.black());
  pb.position.set(0, PH / 2, PD / 2);
  const bay = rbox(PW - 40, 46, PD * 0.42, 14, SM.graphite());
  bay.position.set(0, PH + 18, SLOT_Z - 14);
  const bar = rbox(RW + 26, 7, 10, 2, SM.edge(), 1);
  bar.position.set(0, PH + 4, SLOT_Z + 12);
  const base = rbox(PW - 16, 5, 4, 1.5, SM.edge(), 1);
  base.position.set(0, 7, PD / 2 + 2.5);
  const led = mesh(new THREE.CylinderGeometry(6, 6, 3, 20), SM.glow(C.amber));
  led.rotation.x = Math.PI / 2;
  led.position.set(PW / 2 - 46, PH * 0.56, PD / 2 + 1.5);
  const key = rbox(54, 16, 4, 3, SM.graphite(), 1);
  key.position.set(PW / 2 - 110, PH * 0.56, PD / 2 + 3);
  const badge = litFace(190, 22, textTex("verdict:badge", 190, 22, [{ t: "THE PAYOUTS", size: 15, weight: 700, color: C.dim, track: 0.3 }], { pad: 2 }));
  badge.position.set(-PW / 2 + 130, PH * 0.56, PD / 2 + 0.8);
  printer.add(pb, bay, bar, base, led, key, badge);
  printer.position.set(G.printer.x, DY, 0);
  // ── the receipt: it rises out of the slot, its top line first (clipped below the slot) ──
  const slotY = DY + PH + 5;
  const clip = new THREE.Plane(new THREE.Vector3(0, 1, 0), -slotY);
  const INK = "#1E1A10", SOFT = "#5B5443", PAPER = "#EFE8D8";
  const row = (g: CanvasRenderingContext2D, y: number, a: string, b: string, band?: string) => {
    track(g, 0); font(g, 800, 39);
    const bw = g.measureText(b).width;
    if (band) { g.fillStyle = band; g.fillRect(RW - 34 - bw - 10, y - 38, bw + 20, 50); }
    g.fillStyle = SOFT; g.textAlign = "left"; font(g, 700, 19); track(g, 2.4); g.fillText(a, 34, y - 46);
    g.fillStyle = INK; g.textAlign = "right"; font(g, 800, 39); track(g, 0); g.fillText(b, RW - 34, y);
  };
  const dash = (g: CanvasRenderingContext2D, y: number) => { g.fillStyle = SOFT; for (let x = 34; x < RW - 34; x += 14) g.fillRect(x, y, 8, 2); };
  const tex = paintTex("verdict:receipt", RW, RH, (g) => {
    g.fillStyle = PAPER; g.fillRect(0, 0, RW, RH);
    g.fillStyle = INK; g.textAlign = "center"; font(g, 800, 27); track(g, 5); g.fillText("THE PAYOUTS", RW / 2, RH * 0.08);
    g.fillStyle = SOFT; font(g, 600, 17); track(g, 3); g.fillText("AUDIT 037 | AFTERPAY, THE SALE PRICE", RW / 2, RH * 0.128);
    dash(g, RH * 0.165);
    row(g, RH * RECEIPT_LINES.announced - 22, "ANNOUNCED | 1 AUG 2021", "$29,000,000,000", C.mint);
    row(g, RH * RECEIPT_LINES.paid - 22, "PAID AT CLOSING | 31 JAN 2022", "$13,800,000,000", C.khaki);
    dash(g, RH * RECEIPT_LINES.paid + 6);
    row(g, RH * RECEIPT_LINES.gap - 22, "GAP", "≈ $15,000,000,000");
    dash(g, RH * RECEIPT_LINES.gap + 8);
    g.fillStyle = SOFT; g.textAlign = "center"; font(g, 600, 12.5); track(g, 1.8); g.fillText("SOURCES: SQUARE RELEASE, 1 AUG 2021 | BLOCK FORM 10-Q, Q1 2022", RW / 2, RH * 0.972);
    track(g, 0);
  }, 3);
  const receipt = new THREE.Group();
  receipt.userData.obj = "receipt";
  const pm = SM.print(tex);
  pm.clippingPlanes = [clip]; pm.side = THREE.DoubleSide;
  const paper = new THREE.Mesh(new THREE.PlaneGeometry(RW, RH), pm);
  paper.castShadow = true;
  // the one-off verdict label: a red stamp across the foot of the receipt
  const SW = RW - 130, SH = 104;
  const rate = litFace(SW, SH, textTex("verdict:rating", SW, SH, [
    { t: "OUR RATING", size: 19, weight: 700, color: C.red, track: 0.34 },
    { t: "INFLATED", size: 58, weight: 800, color: C.red, track: 0.07, gap: 6 },
  ], { border: C.red, r: 8, pad: 16 }));
  (rate.material as THREE.MeshBasicMaterial).clippingPlanes = [clip];
  const RATE_Y = RH * (0.5 - 0.862);
  rate.rotation.z = -0.045;
  receipt.add(paper, rate);
  receipt.rotation.x = -0.06;
  const glow = halo(RW * 1.5, 520, C.white, 0, true);
  glow.position.set(G.printer.x, DY + 0.7, 40);
  const frame = makeFrame({ key: "verdict", photo: HAS_PHOTO ? PHOTO_FILE : null });
  frame.group.position.set(G.frame.x, DY, -90);
  frame.group.rotation.y = -0.2;
  frame.group.userData.obj = "frame";
  const tag = makeTag({ key: "verdict", w: G.tag.w, h: G.tag.h, cord: G.tag.cord, rail: 2600, faces: [
    { kicker: "AFTERPAY | SOLD FOR", figure: "$29,000,000,000", color: C.mint },
    { kicker: "THE FILING SAYS", figure: "$13,800,000,000", color: C.khaki }] });
  tag.group.position.set(G.tag.x, -G.tag.y, -40);
  tag.group.userData.obj = "tag";
  root.add(desk.group, printer, receipt, glow, frame.group, tag.group);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      // the sheet's top edge is `feed × RH` above the slot
      receipt.position.set(G.printer.x, slotY + RH * (p.feed - 0.5), SLOT_Z + 4);
      const m = rate.material as THREE.MeshBasicMaterial;
      m.opacity = Math.min(1, p.rating * 2.2);
      rate.visible = p.rating > 0.004;
      // the stamp comes down onto the paper: large and proud of it, then flat
      const s = 1 + 0.55 * (1 - p.rating);
      rate.scale.set(s, s, 1);
      rate.position.set(0, RATE_Y, 1 + 46 * (1 - p.rating));
      (led.material as THREE.MeshBasicMaterial).opacity = 0.25 + 0.75 * p.busy;
      (led.material as THREE.MeshBasicMaterial).transparent = true;
      (glow.material as THREE.MeshBasicMaterial).opacity = 0.1;
      tag.update({ flip: 0, swing: p.swing, lit: p.tag });
    },
  };
};
