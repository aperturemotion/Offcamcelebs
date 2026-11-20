// THE CRANE PLINTH (038, set A; worker A). A black-marble plinth with satin steel cap and base, a steel cradle on top for
// the crest, and on its front a FLIP SIGN of two slats in a steel bezel (an airport-style split-flap board):
//   front  slat 1  BOUGHT BY: THE GLAZERS   (warm white)       back  slat 1  (blank: ★ P17, it flips away before the stamp)
//          slat 2  £790,000,000 (a counter, money yellow)            slat 2  £790,000,000 in red (the verdict's flip)
// Below the sign, the face is bare marble: the stamp's red ink BILLED TO: MANCHESTER UNITED lands there.
// makePlinth(key) → { group, body, top, faceZ, update({ count, flip1, flip2, ink, lit }) }
//   Origin: the floor centre. `top` is the cradle's top (the crest stands there); `faceZ` the marble face's z.
//   count: the £ value slat 2 shows · flip1/flip2: 0 front … 1 back · ink: 0 none … 1 stamped · lit: the sign's light 0…1
import * as THREE from "three";
import { MAT, K, lit, setLit, rbox, wide, textOn, joined, mounted, pounds } from "../kit";
import { text3d, numeral3d, textWidth } from "../text3d";

export const PLINTH = { w: 920, h: 720, d: 640, base: 96, cap: 34 } as const;

/** black marble with pale veins (a canvas texture; plain black under Node, where the checks run) */
const marble = () => {
  const m = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#0f0f11"), roughness: 0.22, metalness: 0.05, clearcoat: 0.8, clearcoatRoughness: 0.12, envMapIntensity: 1.0 });
  if (typeof document === "undefined") return m;
  const c = document.createElement("canvas"); c.width = c.height = 1024;
  const g = c.getContext("2d")!;
  g.fillStyle = "#121214"; g.fillRect(0, 0, 1024, 1024);
  let s = 7;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let v = 0; v < 26; v++) {
    g.strokeStyle = `rgba(${170 + rnd() * 60},${170 + rnd() * 60},${175 + rnd() * 60},${0.05 + rnd() * 0.16})`;
    g.lineWidth = 0.6 + rnd() * 2.6;
    g.beginPath();
    let x = rnd() * 1024, y = rnd() * 1024;
    g.moveTo(x, y);
    for (let k = 0; k < 7; k++) { const nx = x + (rnd() - 0.3) * 260, ny = y + (rnd() - 0.5) * 220; g.quadraticCurveTo(x + (rnd() - 0.5) * 160, y + (rnd() - 0.5) * 160, nx, ny); x = nx; y = ny; }
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  m.map = t; m.color.set("#ffffff");
  return m;
};

export const makePlinth = (key: string) => {
  const P = PLINTH;
  const group = new THREE.Group();
  group.name = `plinth-${key}`;
  const base = rbox(P.w + 140, P.base, P.d + 140, 16, MAT.satin()); base.position.y = P.base / 2; base.name = "plinth-base";
  const body = rbox(P.w, P.h, P.d, 14, marble()); body.position.y = P.base + P.h / 2; body.name = "plinth-marble";
  const cap = rbox(P.w + 40, P.cap, P.d + 40, 10, MAT.satin()); cap.position.y = P.base + P.h + P.cap / 2; cap.name = "plinth-cap";
  const cradle = rbox(400, 46, 170, 10, MAT.satin()); cradle.position.y = P.base + P.h + P.cap + 23; cradle.name = "cradle";
  group.add(base, body, cap, cradle);
  const top = P.base + P.h + P.cap + 46;
  const faceZ = P.d / 2;

  // ── the flip sign: a steel bezel on the face, two slats on axles ──
  const PIV = faceZ + 102, SW = 820, D = 22;
  const s1 = { y: P.base + 590, h: 110 }, s2 = { y: P.base + 590 - 55 - 14 - 95, h: 190 };
  const bez = new THREE.Group(); bez.name = "bezel";
  const top_ = s1.y + s1.h / 2 + 12, bot_ = s2.y - s2.h / 2 - 12;
  const bar = (w: number, h: number, x: number, y: number) => { const m = rbox(w, h, 150, 6, MAT.satin()); m.position.set(x, y, faceZ + 75); bez.add(m); return m; };
  bar(SW + 76, 22, 0, top_ + 11); bar(SW + 76, 22, 0, bot_ - 11);
  const sideL = bar(26, top_ - bot_, -(SW / 2 + 25), (top_ + bot_) / 2), sideR = bar(26, top_ - bot_, SW / 2 + 25, (top_ + bot_) / 2);
  group.add(bez);

  const glass = () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#070708"), roughness: 0.4, metalness: 0.15, clearcoat: 0.25, clearcoatRoughness: 0.45, envMapIntensity: 0.6 });
  const white = lit(K.white, 1.05), money = lit(K.money, 1.12), red1 = lit(K.red, 1.1), red2 = lit(K.red, 1.1);
  const fitSize = (str: string, want: number, room: number, k = 1.12) => Math.min(want, room / (textWidth(str, "800", 1) * k));
  /** a slat: a pivot group at (0, y, PIV) holding the slat and its two faces' words */
  const slat = (y: number, h: number, name: string) => {
    const pivot = new THREE.Group(); pivot.name = name; pivot.position.set(0, y, PIV);
    const m = rbox(SW, h, D, 5, glass()); m.name = name + "-slat";
    pivot.add(m);
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, SW + 46, 12), MAT.satin()); axle.rotation.z = Math.PI / 2; axle.name = name + "-axle";
    pivot.add(axle);
    joined(axle, sideL, "the slat's axle runs in the bezel"); joined(axle, sideR, "the slat's axle runs in the bezel");
    joined(axle, m, "the axle runs through the slat");
    mounted(axle, sideL, "the slat's axle is held in the bezel's sides"); mounted(m, axle, "the slat turns on its axle");
    const back = new THREE.Group(); back.rotation.x = Math.PI; pivot.add(back);
    group.add(pivot);
    return { pivot, m, back };
  };
  const A = slat(s1.y, s1.h, "slat1"), B = slat(s2.y, s2.h, "slat2");
  const word = (str: string, size: number, face: THREE.Material, onto: THREE.Group, surf: THREE.Mesh) => {
    const t = wide(text3d(str, { font: "800", size, depth: 3, bevel: 0, face }), 1.12);
    t.position.set(0, -size * 0.345, D / 2 + 0.5);
    t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    textOn(t, surf, { inset: 5 });
    onto.add(t);
    return t;
  };
  const room = SW - 90;
  word("BOUGHT BY: THE GLAZERS", fitSize("BOUGHT BY: THE GLAZERS", 50, room), white, A.pivot, A.m);
  // ★ P17 (one label and one figure a frame): slat 1's back is BLANK (it flips away before the stamp lands, so BOUGHT BY and
  //   BILLED TO never share a frame); slat 2's back carries the same price in RED (the verdict flips it on "bill")
  void red1;
  // slat 2's front: the counting price (fixed-advance digits; sized for its widest value)
  const digitW = Math.max(...Array.from("0123456789", (c) => textWidth(c, "800", 1)));
  const widest = Array.from("£790,000,000").reduce((s, c) => s + (/\d/.test(c) ? digitW : textWidth(c, "800", 1)), 0);
  const cs = Math.min(132, room / (widest * 1.12));
  const num = numeral3d({ font: "800", size: cs, depth: 4, bevel: 0, face: money });
  num.group.scale.x = 1.12;
  num.group.position.set(0, -cs * 0.345, D / 2 + 0.5);
  num.group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(num.group, B.m, { inset: 5 });
  B.pivot.add(num.group);
  const redPrice = wide(text3d("£790,000,000", { font: "800", size: cs, depth: 4, bevel: 0, face: red2 }), 1.12);
  redPrice.position.set(0, -cs * 0.345, D / 2 + 0.5); redPrice.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(redPrice, B.m, { inset: 5 });
  B.back.add(redPrice);

  // ── the stamp's ink on the bare marble below the sign: BILLED TO: / MANCHESTER UNITED in a red ruled frame ──
  const ink = new THREE.Group(); ink.name = "ink";
  const inkMat = lit(K.red, 1.0);
  const iw = 760, ih = 230, iy = P.base + 170;
  const rule = (w: number, h: number, x: number, y: number) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 1.2), inkMat); m.position.set(x, y, 0); ink.add(m); return m; };
  rule(iw, 10, 0, ih / 2 - 5); rule(iw, 10, 0, -ih / 2 + 5); rule(10, ih, -iw / 2 + 5, 0); rule(10, ih, iw / 2 - 5, 0);
  const i1s = fitSize("BILLED TO:", 52, iw - 90, 1.08), i2s = fitSize("MANCHESTER UNITED", 66, iw - 90, 1.08);
  const i1 = wide(text3d("BILLED TO:", { font: "800", size: i1s, depth: 1.2, bevel: 0, face: inkMat }), 1.08); i1.position.set(0, 26, 0);
  const i2 = wide(text3d("MANCHESTER UNITED", { font: "800", size: i2s, depth: 1.2, bevel: 0, face: inkMat }), 1.08); i2.position.set(0, -i2s * 0.95, 0);
  ink.add(i1, i2);
  ink.position.set(0, iy, faceZ + 0.4);
  for (const t of [i1, i2]) { t.traverse((n) => { (n as THREE.Mesh).castShadow = false; }); textOn(t, body, { inset: 14 }); }
  ink.traverse((n) => { if ((n as THREE.Mesh).isMesh && !n.parent?.userData.isText && !n.userData.isText) textOn(n, body, { inset: 14 }); });
  group.add(ink);

  const update = (p: { count: number; flip1: number; flip2: number; ink: number; lit: number }) => {
    num.set(pounds(p.count));
    A.pivot.rotation.x = -Math.PI * p.flip1;
    B.pivot.rotation.x = -Math.PI * p.flip2;
    for (const m of [white, money]) setLit(m, p.lit, 0.12);
    for (const m of [red1, red2]) setLit(m, 1, 0.12);
    ink.visible = p.ink > 0;
    setLit(inkMat, p.ink, 0.0);
  };
  update({ count: 0, flip1: 0, flip2: 0, ink: 0, lit: 1 });
  return { group, body, top, faceZ, update, signY: (s1.y + s2.y) / 2, inkY: iy, num };
};
