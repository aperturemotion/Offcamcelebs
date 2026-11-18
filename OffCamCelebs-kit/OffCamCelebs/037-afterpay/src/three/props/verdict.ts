// PLACE 8 · THE VERDICT — a receipt prints: ANNOUNCED $29,000,000,000 / PAID AT CLOSING $13,800,000,000 / GAP ≈
// $15,000,000,000; the rating lands on it; the framed print stands beside it; the price tag hangs above (the opening shot,
// for the loop). STUB BUILD: the printer and the receipt are placeholders for the place-worker to model.
import { THREE, paintTex, type Model } from "../stage";
import { rbox, font, track } from "../kit029";
import { SM, C, STUDIO_RIG, studioFloor, textTex, litFace } from "../studio";
import { makeDesk } from "../obj/desk";
import { makeFrame } from "../obj/frame";
import { makeTag } from "../obj/tag";
import { HAS_PHOTO, PHOTO_FILE } from "../../audit/data";

export const VERDICT_GEO = { floor: 1420, desk: { x: 620, y: 1220 }, printer: { x: 430, h: 120 }, receipt: { w: 470, h: 560 }, frame: { x: 960 }, tag: { x: 560, y: -600, w: 720, h: 300, cord: 150 } } as const;
/** the receipt's lines, top to bottom, as fractions of its height (where each line's foot is): the feed that shows them */
export const RECEIPT_LINES = { head: 0.2, announced: 0.42, paid: 0.64, gap: 0.86, all: 1 } as const;
/** feed: 0…1 of the receipt out of the slot; rating: 0…1 the verdict printed on it; tag: the tag's lamp */
export type VerdictP = { feed: number; rating: number; tag: number; swing: number };

export const verdictModel = (): Model<VerdictP> => {
  const G = VERDICT_GEO, DY = -G.desk.y, RW = G.receipt.w, RH = G.receipt.h;
  const root = new THREE.Group();
  root.add(studioFloor({ y: G.floor, cx: 620, rx: 1100 }));
  const desk = makeDesk({ w: 1500, d: 620, drop: G.floor - G.desk.y - 44 });
  desk.group.position.set(G.desk.x, DY, -310);
  desk.group.userData.obj = "desk";
  // the printer (placeholder): a black box, a slot along its top
  const printer = new THREE.Group();
  printer.userData.obj = "printer";
  const pb = rbox(RW + 110, G.printer.h, 260, 14, SM.black());
  pb.position.set(0, G.printer.h / 2, 130);
  const slot = rbox(RW + 30, 6, 16, 2, SM.edge(), 1);
  slot.position.set(0, G.printer.h + 2, 8);
  printer.add(pb, slot);
  printer.position.set(G.printer.x, DY, -60);
  // the receipt: it rises out of the slot, its top line first (clipped below the slot)
  const slotY = DY + G.printer.h + 4;
  const clip = new THREE.Plane(new THREE.Vector3(0, 1, 0), -slotY);
  const row = (g: CanvasRenderingContext2D, y: number, a: string, b: string, band?: string) => {
    if (band) { g.fillStyle = band; g.fillRect(RW - 30 - 250, y - 30, 256, 40); }
    g.fillStyle = "#1E1A10"; g.textAlign = "left"; font(g, 700, 20); track(g, 1.6); g.fillText(a, 30, y);
    g.textAlign = "right"; font(g, 800, 30); track(g, 0); g.fillText(b, RW - 30, y);
  };
  const tex = paintTex("verdict:receipt", RW, RH, (g) => {
    g.fillStyle = "#EFE8D8"; g.fillRect(0, 0, RW, RH);
    g.fillStyle = "#5B5443"; g.textAlign = "center"; font(g, 700, 22); track(g, 3); g.fillText("THE PAYOUTS | AUDIT 037", RW / 2, RH * 0.1);
    g.fillRect(30, RH * 0.15, RW - 60, 2);
    row(g, RH * RECEIPT_LINES.announced - 30, "ANNOUNCED", "$29,000,000,000", C.mint);
    row(g, RH * RECEIPT_LINES.paid - 30, "PAID AT CLOSING", "$13,800,000,000", C.khaki);
    g.fillStyle = "#5B5443"; g.fillRect(30, RH * 0.7, RW - 60, 2);
    row(g, RH * RECEIPT_LINES.gap - 30, "GAP", "≈ $15,000,000,000");
    track(g, 0);
  }, 3);
  const receipt = new THREE.Group();
  receipt.userData.obj = "receipt";
  const pm = SM.print(tex);
  pm.clippingPlanes = [clip]; pm.side = THREE.DoubleSide;
  const paper = new THREE.Mesh(new THREE.PlaneGeometry(RW, RH), pm);
  paper.castShadow = true;
  const rate = litFace(RW - 80, 74, textTex("verdict:rating", RW - 80, 74, [{ t: "OUR RATING: INFLATED", size: 36, weight: 800, color: C.red, track: 0.06 }], { border: C.red, r: 6, pad: 12 }));
  (rate.material as THREE.MeshBasicMaterial).clippingPlanes = [clip];
  rate.position.set(0, RH * (0.5 - 0.93) + 10, 1);
  rate.rotation.z = -0.04;
  receipt.add(paper, rate);
  receipt.rotation.x = -0.1;
  const frame = makeFrame({ key: "verdict", photo: HAS_PHOTO ? PHOTO_FILE : null });
  frame.group.position.set(G.frame.x, DY, -30);
  frame.group.userData.obj = "frame";
  const tag = makeTag({ key: "verdict", w: G.tag.w, h: G.tag.h, cord: G.tag.cord, faces: [
    { kicker: "AFTERPAY | SOLD FOR", figure: "$29,000,000,000", color: C.mint },
    { kicker: "THE FILING SAYS", figure: "$13,800,000,000", color: C.khaki }] });
  tag.group.position.set(G.tag.x, -G.tag.y, -120);
  tag.group.userData.obj = "tag";
  root.add(desk.group, printer, receipt, frame.group, tag.group);
  return {
    root, rig: STUDIO_RIG,
    update: (p) => {
      // the sheet's top edge is `feed × RH` above the slot
      receipt.position.set(G.printer.x, slotY + RH * (p.feed - 0.5), -50);
      (rate.material as THREE.MeshBasicMaterial).opacity = p.rating;
      rate.visible = p.rating > 0.004;
      tag.update({ flip: 0, swing: p.swing, lit: p.tag });
    },
  };
};
