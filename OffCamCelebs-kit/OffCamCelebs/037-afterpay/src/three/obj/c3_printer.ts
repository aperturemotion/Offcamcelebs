// THE RECEIPT PRINTER (the verdict's object). A low black desk printer with a raised paper bay and a satin tear bar; the
// receipt FEEDS up out of its slot, line by line (clipped at the slot by a world-space plane: the place's floor is y = 0 in
// the world, so the slot's height is the same in both). The one-off verdict label is SOLID: extruded red letters that come
// down onto the paper.
// Origin: the middle of the printer's footprint on the desk (y = 0 is the desk top); the paper stands in the plane z = SLOT_Z.
// `deskY`: the desk top's height above the place's floor (the clip plane needs it).
import { THREE, mesh, paintTex } from "../stage";
import { rbox, font, track } from "../kit029";
import { SM, C, textTex, litFace, type Obj3 } from "../studio";
import { text3d, textWidth } from "../../world/text3d";

export const RECEIPT = { w: 600, h: 840 } as const;
/** the feed (0…1 of the sheet out of the slot) that shows each line whole */
export const RECEIPT_FEED = { head: 0.155, announced: 0.335, paid: 0.505, gap: 0.665, all: 1 } as const;
export const PRINTER = { w: 720, h: 130, d: 320, slotZ: -30 } as const;
/** feed: 0…1; rating: 0…1 the verdict letters landing; busy: 0…1 the printer's light */
export type PrinterP = { feed: number; rating: number; busy: number };

export const makePrinter = (o: { key: string; deskY: number }): Obj3<PrinterP> & { ratingY: number } => {
  const RW = RECEIPT.w, RH = RECEIPT.h, PW = PRINTER.w, PH = PRINTER.h, PD = PRINTER.d, SLOT_Z = PRINTER.slotZ;
  const group = new THREE.Group();
  const body = rbox(PW, PH, PD, 18, SM.black());
  body.position.set(0, PH / 2, PD / 2);
  const bay = rbox(PW - 44, 50, PD * 0.4, 16, SM.graphite());
  bay.position.set(0, PH + 20, SLOT_Z - 16);
  const bar = rbox(RW + 30, 8, 12, 2, SM.edge(), 1);
  bar.position.set(0, PH + 5, SLOT_Z + 14);
  const kick = rbox(PW - 18, 5, 4, 1.5, SM.edge(), 1);
  kick.position.set(0, 7, PD / 2 + 2.5);
  const led = mesh(new THREE.CylinderGeometry(7, 7, 3, 20), SM.glow(C.amber));
  led.rotation.x = Math.PI / 2;
  led.position.set(PW / 2 - 50, PH * 0.56, PD / 2 + 1.5);
  (led.material as THREE.MeshBasicMaterial).transparent = true;
  const key = rbox(60, 18, 4, 3, SM.graphite(), 1);
  key.position.set(PW / 2 - 124, PH * 0.56, PD / 2 + 3);
  const badge = litFace(210, 24, textTex(`${o.key}:badge`, 210, 24, [{ t: "THE PAYOUTS", size: 16, weight: 700, color: C.dim, track: 0.3 }], { pad: 2 }));
  badge.position.set(-PW / 2 + 142, PH * 0.56, PD / 2 + 0.8);
  group.add(body, bay, bar, kick, led, key, badge);

  // ── the receipt ──
  const slotY = PH + 6;
  const clip = new THREE.Plane(new THREE.Vector3(0, 1, 0), -(o.deskY + slotY));
  const INK = "#1E1A10", SOFT = "#5B5443", PAPER = "#EFE8D8", L = RECEIPT_FEED;
  const row = (g: CanvasRenderingContext2D, y: number, a: string, b: string, band?: string) => {
    track(g, 0); font(g, 800, 47);
    const bw = g.measureText(b).width;
    if (band) { g.fillStyle = band; g.fillRect(RW - 36 - bw - 12, y - 45, bw + 24, 60); }
    g.fillStyle = SOFT; g.textAlign = "left"; font(g, 700, 21); track(g, 2.6); g.fillText(a, 36, y - 58);
    g.fillStyle = INK; g.textAlign = "right"; font(g, 800, 47); track(g, 0); g.fillText(b, RW - 36, y);
  };
  const dash = (g: CanvasRenderingContext2D, y: number) => { g.fillStyle = SOFT; for (let x = 36; x < RW - 36; x += 14) g.fillRect(x, y, 8, 2); };
  const tex = paintTex(`${o.key}:receipt`, RW, RH, (g) => {
    g.fillStyle = PAPER; g.fillRect(0, 0, RW, RH);
    g.fillStyle = INK; g.textAlign = "center"; font(g, 800, 30); track(g, 6); g.fillText("THE PAYOUTS", RW / 2, RH * 0.066);
    g.fillStyle = SOFT; font(g, 600, 18); track(g, 3); g.fillText("AUDIT 037 | AFTERPAY, THE SALE PRICE", RW / 2, RH * 0.108);
    dash(g, RH * 0.135);
    row(g, RH * L.announced - 22, "ANNOUNCED | 1 AUG 2021", "$29,000,000,000", C.mint);
    row(g, RH * L.paid - 22, "PAID AT CLOSING | 31 JAN 2022", "$13,800,000,000", C.khaki);
    dash(g, RH * L.paid + 8);
    row(g, RH * L.gap - 22, "GAP", "≈ $15,000,000,000");
    dash(g, RH * L.gap + 10);
    g.fillStyle = "#B3262B"; g.textAlign = "center"; font(g, 700, 21); track(g, 7); g.fillText("OUR RATING", RW / 2, RH * 0.742);
    g.fillStyle = SOFT; font(g, 600, 13); track(g, 1.8); g.fillText("SOURCES: SQUARE RELEASE, 1 AUG 2021 | BLOCK FORM 10-Q, Q1 2022", RW / 2, RH * 0.975);
    track(g, 0);
  }, 3);
  const receipt = new THREE.Group();
  const pm = SM.print(tex);
  pm.clippingPlanes = [clip]; pm.side = THREE.DoubleSide;
  const paper = new THREE.Mesh(new THREE.PlaneGeometry(RW, RH), pm);
  paper.castShadow = true;
  receipt.add(paper);
  // the verdict label: solid red letters, proud of the paper
  const SIZE = Math.min(104, (104 * (RW - 80)) / textWidth("INFLATED", "800", 104));
  const face = new THREE.MeshStandardMaterial({ color: new THREE.Color("#D8343A"), roughness: 0.42, metalness: 0.05, emissive: new THREE.Color(C.red), emissiveIntensity: 0.35 });
  const side = new THREE.MeshStandardMaterial({ color: new THREE.Color("#5E1216"), roughness: 0.5, metalness: 0.3 });
  face.clippingPlanes = [clip]; side.clippingPlanes = [clip];
  const stamp = text3d("INFLATED", { font: "800", size: SIZE, depth: 26, bevel: 3, face, side });
  const RATE_Y = RH * (0.5 - 0.875);          // the letters' baseline on the sheet (from its middle)
  receipt.add(stamp);
  receipt.rotation.x = -0.07;
  group.add(receipt);

  const update = (p: PrinterP) => {
    receipt.position.set(0, slotY + RH * (p.feed - 0.5), SLOT_Z + 5);
    stamp.visible = p.rating > 0.003;
    // it comes in from the camera's side, tilted, and seats flat on the paper
    const q = 1 - p.rating;
    stamp.position.set(0, RATE_Y + 30 * q, 2 + 260 * q * q);
    stamp.rotation.set(-0.5 * q, 0, -0.035 + 0.12 * q);
    face.emissiveIntensity = 0.35 + 1.3 * Math.sin(Math.PI * Math.min(1, p.rating)) ** 2 * (p.rating < 1 ? 1 : 0) + 0.25 * p.rating;
    (led.material as THREE.MeshBasicMaterial).opacity = 0.25 + 0.75 * p.busy;
  };
  update({ feed: 0, rating: 0, busy: 0 });
  return { group, update, ratingY: slotY + RH * 0.125 };
};
