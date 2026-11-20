// THE RECEIPT PRINTER (038, set A again; worker A). A black till printer (a satin tear bar, a green status lamp, a paper
// roll showing through its top) feeding a paper receipt up out of its slot. The receipt prints top line first: each line
// shows once it has fed fully out, and rides up with the paper.
//   PRICE      £790,000,000
//   BORROWED   £540,000,000
//   ─────────────────────────
//   RATING: INFLATED            (red)
// makeReceipt(key) → { group, update({ feed }), FULL, lineAt: number[] }
//   Origin: the printer's floor centre; the receipt rises from the slot, leaning back 8°. `feed` is the paper's length out
//   (0…FULL); `lineAt[i]` is the feed at which line i is fully printed.
import * as THREE from "three";
import { MAT, K, lit, rbox, textOn, joined } from "../kit";
import { text3d, textWidth } from "../text3d";

export const makeReceipt = (key: string) => {
  const group = new THREE.Group();
  group.name = `receipt-${key}`;
  const PW = 680, BH = 230, BD = 420, slotZ = -40;
  const body = rbox(PW + 120, BH, BD, 26, MAT.black()); body.position.y = BH / 2; body.name = "printer";
  const bar = rbox(PW + 30, 18, 30, 6, MAT.satin()); bar.position.set(0, BH + 4, slotZ + 34); bar.name = "tear-bar";
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 8, 20), lit("#7ee08a", 1.1)); lamp.rotation.x = Math.PI / 2; lamp.position.set(PW / 2 - 10, BH * 0.55, BD / 2 + 3);
  group.add(body, bar, lamp);
  joined(bar, body, "the tear bar is fixed on the printer's top");
  // the paper: a thin card that rises from the slot; it is FULL tall and slides up out of the body
  const FULL = 760;
  // the paper grows out of the slot (its length is its scale), the printed lines ride up with its top
  // the paper: thermal-paper white, toned down so it sits under the studio's key as paper, not a lamp (R3)
  const paperMat = new THREE.MeshStandardMaterial({ color: new THREE.Color("#8e8c87"), roughness: 0.95, metalness: 0 });
  const paper = new THREE.Mesh(new THREE.BoxGeometry(PW, 1, 1.6), paperMat);
  paper.name = "receipt-paper"; paper.castShadow = true; paper.receiveShadow = true;
  const feedG = new THREE.Group(); feedG.position.set(0, BH - 6, slotZ); feedG.rotation.x = -0.14;
  const slide = new THREE.Group(); feedG.add(paper, slide);
  group.add(feedG);
  joined(paper, body, "the receipt feeds out of the printer's slot");
  joined(paper, bar, "the receipt passes the tear bar");
  // the lines, laid from the paper's top down (in the paper's frame: its top at y = FULL / 2)
  const ink = new THREE.MeshStandardMaterial({ color: new THREE.Color("#0b0b0c"), roughness: 0.8 });
  const red = lit(K.red, 1.0);
  const pad = 46, room = PW - 2 * pad;
  const fit = (s: string, want: number) => Math.min(want, room / textWidth(s, "800", 1));
  const lines: { g: THREE.Group; y: number }[] = [];
  const bands: THREE.Mesh[] = [];
  const two = (l: string, r: string, y: number, size: number) => {
    const g = new THREE.Group();
    const a = text3d(l, { font: "800", size, depth: 1, bevel: 0, face: ink, align: "left" }); a.position.x = -room / 2;
    const b = text3d(r, { font: "800", size, depth: 1, bevel: 0, face: ink, align: "left" }); b.position.x = room / 2 - textWidth(r, "800", size);
    g.add(a, b); g.position.set(0, y, 1.3);
    // the printed band of paper behind the line (it rides up with the paper): the line is registered on it
    const band = new THREE.Mesh(new THREE.BoxGeometry(PW, size * 1.9, 0.6), paperMat); band.position.set(0, y + size * 0.33, 0.95); band.name = "receipt-band";
    slide.add(band); joined(band, paper, "the printed band is the paper's own face");
    for (const t of [a, b]) textOn(t, band, { inset: 0 });
    bands.push(band);
    slide.add(g); lines.push({ g, y });
  };
  const s = fit("BORROWED  £540,000,000", 46);
  const top = 0;
  two("PRICE", "£790,000,000", top - 90, s);
  two("BORROWED", "£540,000,000", top - 170, s);
  const ruleBand = new THREE.Mesh(new THREE.BoxGeometry(PW, 30, 0.6), paperMat); ruleBand.position.set(0, top - 215, 0.95); ruleBand.name = "receipt-band";
  slide.add(ruleBand); joined(ruleBand, paper, "the printed band is the paper's own face");
  const bandFor = (_y: number) => ruleBand;
  const rule = new THREE.Mesh(new THREE.BoxGeometry(room, 4, 1), ink); rule.position.set(0, top - 215, 1.3); slide.add(rule);
  textOn(rule, bandFor(top - 200));
  const rs = fit("RATING: INFLATED", 70);
  const r = text3d("RATING: INFLATED", { font: "800", size: rs, depth: 1.2, bevel: 0, face: red }); r.position.set(0, top - 310, 1.3);
  const rband = new THREE.Mesh(new THREE.BoxGeometry(PW, rs * 1.9, 0.6), paperMat); rband.position.set(0, top - 310 + rs * 0.33, 0.95); rband.name = "receipt-band";
  slide.add(rband); joined(rband, paper, "the printed band is the paper's own face"); bands.push(rband);
  textOn(r, rband, { inset: 0 }); slide.add(r); lines.push({ g: r, y: top - 310 });
  const lineAt = lines.map((l) => top - l.y + 40);
  // each band shows with its line (fully out of the slot by then)
  const update = (p: { feed: number }) => {
    const f = Math.max(0, Math.min(FULL, p.feed));
    // the paper's top is `f` above the slot
    paper.scale.y = Math.max(1, f); paper.position.y = Math.max(1, f) / 2;
    slide.position.y = f;
    paper.visible = f > 1;
    lines.forEach((l, i) => { l.g.visible = f >= lineAt[i]; bands[i].visible = l.g.visible; });
    ruleBand.visible = f >= 215 + 20;
    rule.visible = f >= 215 + 20;
  };
  update({ feed: 0 });
  return { group, update, FULL, lineAt, paper, body };
};
