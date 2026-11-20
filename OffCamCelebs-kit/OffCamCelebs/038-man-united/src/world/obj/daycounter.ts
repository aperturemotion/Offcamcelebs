// THE DAY COUNTER (038 set E, "About £190,000 a day"): a heavy mechanical counter like a stadium's turnstile tally: a black
// cast body on a satin plinth, a window of three white flip-cards showing the DAY, and below it a red LED strip that counts
// the day's cost. The last card flips over the top as a day ticks; out of a slot in its side a stack of gold coins drops.
// makeDayCounter(key) → { group, update({ day0, day1, flip, money, lit }), size, slot }
//   day0/day1: the three-digit day before/after the tick ("364" → "365"); flip 0…1 turns the last card over;
//   money: the LED strip's text ("£190,000 A DAY"); lit 0…1 lights the strip.
// Origin: the floor centre of its plinth; it faces +z. About 1,040 wide, 980 tall.
import * as THREE from "three";
import { MAT, K, lit, setLit, rbox, block, wide, textOn, joined, mounted } from "../kit";
import { text3d, textWidth } from "../text3d";

export const DAYC = { w: 1040, h: 980, d: 420 } as const;
const CARD_W = 210, CARD_H = 300, RED = "#ff3b2f";

export const makeDayCounter = (key: string) => {
  void key;
  const group = new THREE.Group();
  const plinth = block(DAYC.w + 80, 70, DAYC.d + 80, 16, MAT.satin()); group.add(plinth);
  const body = rbox(DAYC.w, DAYC.h - 70, DAYC.d, 42, MAT.black()); body.position.y = 70 + (DAYC.h - 70) / 2; group.add(body);
  // the DAY label on the body, above the window
  const labFace = lit(K.white, 0.9);
  const lab = wide(text3d("DAY", { font: "800", size: 64, depth: 3, bevel: 0, face: labFace }), 1.14);
  lab.position.set(0, 70 + (DAYC.h - 70) - 120, DAYC.d / 2 + 0.5);
  textOn(lab, body, { inset: 42 }); group.add(lab);
  // the window: a recessed graphite panel holding three flip-cards
  const win = rbox(3 * CARD_W + 120, CARD_H + 70, 30, 10, MAT.graphite());
  const WY = 70 + 470;
  win.position.set(0, WY, DAYC.d / 2 + 12); group.add(win);
  const cardFace = lit(K.white, 0.92);
  const cardMat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#151517"), roughness: 0.35, metalness: 0.1, clearcoat: 0.6 });
  const digit = (ch: string, card: THREE.Mesh, back = false) => {
    const t = wide(text3d(ch, { font: "800", size: 210, depth: 3, bevel: 0, face: cardFace }), 1.0);
    t.position.set(0, -210 * 0.345, (back ? -1 : 1) * (14 + 0.5));
    if (back) t.rotation.y = Math.PI;
    t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    textOn(t, card, { inset: 8 });
    return t;
  };
  const Z = DAYC.d / 2 + 30;   // the cards stand just proud of the window panel (its front is at d/2 + 27)
  const fixed: { card: THREE.Mesh; hold: THREE.Group; t?: THREE.Group }[] = [];
  for (let i = 0; i < 2; i++) {
    const hold = new THREE.Group(); hold.position.set((i - 1) * (CARD_W + 20), WY, Z); group.add(hold);
    const card = rbox(CARD_W, CARD_H, 28, 10, cardMat); hold.add(card);
    fixed.push({ card, hold });
  }
  // the last card: a hinge on its BOTTOM edge; it tips forward and falls away flat, uncovering the next card behind it
  const pivot = new THREE.Group(); pivot.position.set(CARD_W + 20, WY - CARD_H / 2, Z + 32); group.add(pivot);
  const flipCard = rbox(CARD_W, CARD_H, 28, 10, cardMat); flipCard.position.y = CARD_H / 2; pivot.add(flipCard);
  const under = rbox(CARD_W, CARD_H, 28, 10, cardMat); under.position.set(CARD_W + 20, WY, Z); group.add(under);
  joined(flipCard, under, "the flipping card falls onto the next card behind it in the window");
  joined(flipCard, win, "the card turns inside the window's recess");
  // ★ P17: the card turns on a real hinge: a satin pin along its bottom edge, held off the window's face by two brackets
  //   (the card's hinge hung 35 in front of the window, on nothing)
  const pin = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, CARD_W + 24, 16), MAT.satin()); pin.rotation.z = Math.PI / 2; pin.position.copy(pivot.position); pin.name = "flip hinge pin"; group.add(pin);
  for (const sx of [-1, 1]) {
    const br = rbox(14, 22, 38, 3, MAT.satin()); br.position.set(pivot.position.x + sx * (CARD_W / 2 + 9), pivot.position.y, (DAYC.d / 2 + 27 + pivot.position.z) / 2 + 2); br.name = "hinge bracket"; group.add(br);
  }
  joined(flipCard, pin, "the card turns on its hinge pin");
  mounted(flipCard, pin, "the flip card turns on its hinge pin along its bottom edge");
  group.userData.plate = true;   // one instrument: its day cards and its money strip are one readout (the density probe)
  let shown = "";
  let parts: THREE.Group[] = [];
  const lay = (d0: string, d1: string) => {
    const key2 = d0 + "|" + d1;
    if (key2 === shown) return;
    shown = key2;
    for (const p of parts) p.removeFromParent();
    parts = [];
    for (let i = 0; i < 2; i++) { const t = digit(d0[i] ?? "0", fixed[i].card); fixed[i].hold.add(t); parts.push(t); }
    const front = digit(d0[2] ?? "0", flipCard); flipCard.add(front); parts.push(front);
    const nxt = digit(d1[2] ?? "0", under); under.add(nxt); parts.push(nxt);
  };
  // the LED strip: a dark bar with red figures
  const STRIP_W = DAYC.w - 120;
  const strip = rbox(STRIP_W, 150, 24, 8, new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#0b0506"), roughness: 0.3, clearcoat: 0.7 }));
  strip.position.set(0, 70 + 150, DAYC.d / 2 + 8); group.add(strip);
  const stripFace = lit(RED, 1.15);
  let money = "";
  let moneyT: THREE.Group | null = null;
  const setMoney = (s: string) => {
    if (s === money) return;
    money = s;
    moneyT?.removeFromParent();
    const size = Math.min(84, (STRIP_W - 90) / (textWidth(s, "800", 1) * 1.1));
    moneyT = wide(text3d(s, { font: "800", size, depth: 2, bevel: 0, face: stripFace }), 1.1);
    moneyT.position.set(0, 70 + 150 - size * 0.345, DAYC.d / 2 + 20.5);
    moneyT.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    textOn(moneyT, strip, { inset: 8 });
    group.add(moneyT);
  };
  // the coin slot on the left side (the side the camera sees)
  const slot = rbox(40, 40, 240, 8, MAT.graphite()); slot.position.set(-DAYC.w / 2 - 6, 70 + 120, 40); group.add(slot);
  return {
    group, size: DAYC,
    /** the slot's mouth (the counter's frame): where the coins come out */
    slot: new THREE.Vector3(-DAYC.w / 2 - 120, 70 + 120, 40),
    update: (o: { day0: string; day1: string; flip: number; money: string; lit: number }) => {
      lay(o.day0, o.day1);
      // the card tips forward on its bottom hinge and falls flat (a quarter turn, toward the viewer)
      pivot.rotation.x = (Math.PI / 2) * Math.min(1, Math.max(0, o.flip)) ** 1.6;
      flipCard.visible = true;   // it stays, lying flat in front of the window (a card that vanished would be a pop)
      setMoney(o.money);
      setLit(stripFace, o.lit, 0);
      if (moneyT) moneyT.visible = o.lit > 0.01;
    },
  };
};
