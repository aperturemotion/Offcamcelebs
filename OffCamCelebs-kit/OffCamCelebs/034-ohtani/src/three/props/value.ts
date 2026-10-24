// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE REAL VALUE IN 3-D — "Money paid that late is worth less. For its luxury tax, baseball values the deal at about 46
// million dollars a year. That's about 460 million dollars, not 700." On the cream ground, an old cast-iron DIAL PLATFORM
// SCALE (the freight-office kind: Toledo's and Fairbanks' "no springs, honest weight" floor scales), modelled from them:
//   · a cast-iron BASE frame on four turned levelling feet, enamelled dark green with a gold double pinstripe and a small brass
//     maker's plate; a steel DIAMOND-PLATE platform deck on it; at the base's back a turned iron PILLAR (a lathe: foot flange,
//     cove, tapered shaft, a swell, a top flange);
//   · on the pillar's top flange, the DIAL HEAD, a cast drum: its NECK is part of the drum casting and seats flat on the
//     pillar's flange (★ 034: the old head let its column run up through the dial's frame; now the pillar STOPS at its flange
//     under the neck, and the PEN audit tests pillar, head, base and deck as SEPARATE parts, so a crossing between them is
//     caught);
//   · in the head: a cream enamel face (0 … 800, $ MILLIONS), a black needle with its counterweight, a brass DRAG POINTER (a
//     real scale's maximum indicator: the needle pushes it and it stays where the needle was), a brass hub, a chrome bezel,
//     the glass, a cast finial on the drum's crown;
//   · on the deck, the deal: four piles of strapped $100 bundles (cash.ts: real notes, edges, straps).
// The action is the scale's own: the needle stands at 700 with the drag pointer; on "worth less" it sinks; while baseball
// "values the deal" it keeps falling; on "460" it settles on 460, the brass drag pointer still at 700 ("not 700").
// ★ No tag, no label (the user, 2026-10-23: "you're overusing them"): the needle and the caption carry the figures.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, type Model } from "../stage";
import { M, rbox, rad, printTex, font, track, hash } from "../kit029";
import { pile, NOTE } from "../cash";

export type ValueGeo = { floor: number; cx: number; z: number; unit: string };
/** needle: the value the needle reads ($M); drag: where the drag pointer stands ($M); yaw */
export type ValueP = { needle: number; drag: number; yaw: number };

const IRON = "#2B3A33", BRASS = "#C99A3E", CREAM = "#F1EAD8";
const BASE_W = 720, BASE_H = 58, BASE_D = 520, FOOT = 14;
const DECK_W = 650, DECK_D = 330, DECK_T = 12;
const COL_Z = -180, COL_H = 262;
const HR = 203, FR = 184, HD = 92;     // the head's outer radius, the face's radius, the drum's depth
const NECK = 34;
const MAX = 800;

/** the dial's centre above the floor, its face's z and radius, and the deck's top (scale-local): for the set's framing */
export const VALUE_HEAD = (() => {
  const colTop = FOOT + 0.3 + BASE_H + 0.3 + COL_H;
  return { y: colTop + 0.3 + NECK + HR, z: COL_Z + 50 - 12, r: HR, deckTop: FOOT + 0.3 + BASE_H + 0.3 + DECK_T };
})();

export const valueModel = (g: ValueGeo) => (): Model<ValueP> => {
  const root = new THREE.Group();
  const sc = new THREE.Group();
  sc.position.set(g.cx, -g.floor, g.z);
  root.add(sc);
  const iron = M.satin(IRON, 0.5, 0.25), ironD = M.satin("#1C2621", 0.6, 0.25), brass = M.gold(BRASS), chrome = M.chrome();
  const ironDS = iron.clone(); ironDS.side = THREE.DoubleSide;
  const tag = (o: THREE.Object3D, name: string) => { o.userData.obj = name; sc.add(o); return o; };

  // ══ THE BASE: four turned feet, the enamelled cast frame with its pinstripes and maker's plate ══
  const base = tag(new THREE.Group(), "scale-base");
  const footG = lathe([[25, 0], [25, 3], [21, 6], [16, 9], [15, FOOT]], 40);
  const footCapB = new THREE.CircleGeometry(25, 40).rotateX(Math.PI / 2);
  const footCapT = new THREE.CircleGeometry(15, 40).rotateX(-Math.PI / 2).translate(0, FOOT, 0);
  for (const [fx, fz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const ft = new THREE.Group();
    ft.add(mesh(footG, ironD), mesh(footCapB, ironD), mesh(footCapT, ironD));
    ft.position.set(fx * (BASE_W / 2 - 46), 0, fz * (BASE_D / 2 - 46));
    base.add(ft);
  }
  // the frame's front and sides: green enamel, a gold double pinstripe (as the old scales were lined), worn at the top edge
  const stripe = (key: string, w: number, h: number) => printTex(key, w, h, (c) => {
    c.fillStyle = IRON; c.fillRect(0, 0, w, h);
    const sh = c.createLinearGradient(0, 0, 0, h); sh.addColorStop(0, "rgba(255,255,255,0.06)"); sh.addColorStop(1, "rgba(0,0,0,0.12)");
    c.fillStyle = sh; c.fillRect(0, 0, w, h);
    c.strokeStyle = "#C9A24A"; c.lineWidth = 1.6;
    const ins = (i: number, r: number) => { c.beginPath(); c.roundRect(i, i, w - 2 * i, h - 2 * i, r); c.stroke(); };
    ins(9, 6); c.lineWidth = 0.8; ins(14, 4);
    for (let i = 0; i < 26; i++) { c.fillStyle = `rgba(120,130,120,${0.15 + 0.2 * hash(i, w, 1)})`; c.fillRect(hash(i, w, 2) * w, hash(i, w, 3) * 4, 1 + hash(i, w, 4) * 5, 1); }
  }, 2);
  const fm = M.print(stripe("vl-base-front-v2", BASE_W, BASE_H), 0.45), sm = M.print(stripe("vl-base-side-v2", BASE_D, BASE_H), 0.45);
  for (const m of [fm, sm]) (m as THREE.MeshStandardMaterial).envMapIntensity = 0.5;
  const frame = rbox(BASE_W, BASE_H, BASE_D, 7, { px: sm, nx: sm, top: iron, bottom: ironD, front: fm, back: sm });
  frame.position.set(0, FOOT + 0.3 + BASE_H / 2, BASE_D / 2);
  base.add(frame);
  // the maker's plate: a small brass oval on the frame's front, engraved in plain type
  const plateT = printTex("vl-plate-v2", 120, 34, (c) => {
    c.fillStyle = "#D6B05A"; c.fillRect(0, 0, 120, 34);
    c.strokeStyle = "rgba(80,55,10,0.8)"; c.lineWidth = 1.2; c.beginPath(); c.ellipse(60, 17, 54, 13, 0, 0, Math.PI * 2); c.stroke();
    // engraved scrollwork and two rivets (no lettering: it would sit at the frame's foot, under the Reel's caption area)
    c.strokeStyle = "rgba(80,55,10,0.6)"; c.lineWidth = 0.8;
    for (let k = 0; k < 3; k++) { c.beginPath(); for (let x = 22; x <= 98; x += 1) { const y = 17 + Math.sin((x - 22) / 6 + k * 2.1) * (3.5 - k); if (x === 22) c.moveTo(x, y); else c.lineTo(x, y); } c.stroke(); }
    c.fillStyle = "#8A6A2C"; for (const x of [14, 106]) { c.beginPath(); c.arc(x, 17, 2.4, 0, Math.PI * 2); c.fill(); }
  }, 4);
  const pl = mesh(new THREE.CircleGeometry(1, 48).scale(60, 17, 1), new THREE.MeshPhysicalMaterial({ map: plateT, metalness: 0.75, roughness: 0.35, envMapIntensity: 0.9 }), false, true);
  pl.position.set(0, FOOT + 0.3 + BASE_H / 2, BASE_D / 2 + 0.6);
  base.add(pl);

  // ══ THE DECK: steel diamond plate on the frame ══
  const dia = printTex("vl-diamond-v1", 128, 128, (c) => {
    c.fillStyle = "#8F969A"; c.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 2; i++) for (let j = 0; j < 4; j++) for (const flip of [0, 1]) {
      const x = 16 + i * 64 + (flip ? 32 : 0), y = 16 + j * 32;
      c.save(); c.translate(x, y); c.rotate(flip ? -0.75 : 0.75);
      const gr = c.createLinearGradient(0, -4, 0, 4); gr.addColorStop(0, "#C9D0D4"); gr.addColorStop(1, "#5C6366");
      c.fillStyle = gr; c.beginPath(); c.ellipse(0, 0, 13, 3.4, 0, 0, Math.PI * 2); c.fill(); c.restore();
    }
  }, 2);
  dia.wrapS = dia.wrapT = THREE.RepeatWrapping; dia.repeat.set(DECK_W / 64, DECK_D / 64);
  const deckTopM = new THREE.MeshPhysicalMaterial({ map: dia, bumpMap: dia, bumpScale: 1.6, color: new THREE.Color("#E4E8EA"), metalness: 0.75, roughness: 0.42, envMapIntensity: 0.8 });
  const deckSide = M.steel("#9AA1A6");
  const deck = rbox(DECK_W, DECK_T, DECK_D, 2.5, { px: deckSide, nx: deckSide, top: deckTopM, bottom: deckSide, front: deckSide, back: deckSide });
  const deckY0 = FOOT + 0.3 + BASE_H + 0.3;
  deck.position.set(0, deckY0 + DECK_T / 2, BASE_D / 2 - 18);
  tag(deck, "scale-deck");
  const deckTop = deckY0 + DECK_T;
  const deckZ0 = BASE_D / 2 - 18 - DECK_D;

  // ══ THE PILLAR: turned iron, standing on the frame's back, stopping at its top flange ══
  const colY0 = FOOT + 0.3 + BASE_H + 0.3;
  const colProf: [number, number][] = [[68, 0], [68, 8], [56, 8], [51, 14], [49, 20], [45, 32], [41, 48], [37, COL_H - 66], [42, COL_H - 60], [44, COL_H - 51],
    [38, COL_H - 44], [35, COL_H - 24], [40, COL_H - 15], [48, COL_H - 9], [48, COL_H]];
  const colG = new THREE.Group();
  colG.add(mesh(lathe(colProf, 64), iron));
  colG.add(mesh(new THREE.CircleGeometry(68, 64).rotateX(Math.PI / 2), iron));                         // the foot's underside (on the frame)
  colG.add(mesh(new THREE.CircleGeometry(48, 64).rotateX(-Math.PI / 2).translate(0, COL_H, 0), iron)); // the top flange (the neck seats on it)
  // four hex bolts on the foot flange's flat (each a hex nut and a domed bolt end, seated on the flange)
  const nutG = new THREE.CylinderGeometry(5.5, 5.5, 5, 6).translate(0, 2.5, 0), boltG = new THREE.SphereGeometry(3, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, 5, 0);
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k * Math.PI) / 2;
    const n = mesh(nutG, ironD); n.position.set(Math.cos(a) * 62, 8.05, Math.sin(a) * 62); n.rotation.y = a; colG.add(n);
    const b = mesh(boltG, ironD); b.position.set(Math.cos(a) * 62, 8.05, Math.sin(a) * 62); colG.add(b);
  }
  colG.position.set(0, colY0, COL_Z);
  tag(colG, "scale-pillar");
  const colTop = colY0 + COL_H;

  // ══ THE DIAL HEAD: a cast drum (its neck part of the casting) seated flat on the pillar's flange ══
  const head = new THREE.Group();
  const HY = colTop + 0.3 + NECK + HR;   // the dial's centre
  head.position.set(0, HY, COL_Z + 50);  // the drum's front rim at z COL_Z + 50
  tag(head, "scale-head");
  // the neck: a short turned stem, a flat flange under it, its top inside the drum's casting
  const neck = mesh(lathe([[48, 0], [48, 5], [40, 9], [35, 16], [34, NECK + 12]], 48), iron);
  neck.position.set(0, -HR - NECK, -50);
  head.add(neck);
  const neckCap = mesh(new THREE.CircleGeometry(48, 48).rotateX(Math.PI / 2), iron);
  neckCap.position.set(0, -HR - NECK, -50);
  head.add(neckCap);
  // the drum: a lathe about z — a domed back, the cylinder, a rolled front rim, its inner wall down to the face's recess
  const drumProf: [number, number][] = [[0.01, -HD - 6], [70, -HD - 5], [140, -HD - 1], [176, -HD + 6], [196, -HD + 18], [HR, -HD + 30], [HR, -8], [HR + 2, -4], [HR, 0],
    [FR + 4, 0], [FR + 1, -2], [FR, -6], [FR, -12.5]];
  const drumG = lathe(drumProf.map(([r, h]) => [r, -h] as [number, number]), 96);
  drumG.rotateX(-Math.PI / 2);   // the profile's depth runs back (−z)
  head.add(mesh(drumG, ironDS));
  // the face: cream enamel, every 10 a tick, every 50 a longer one, every 100 a figure; $ MILLIONS
  const angleOf = (v: number) => Math.PI * (0.75 + 1.5 * (v / MAX));   // canvas angle, clockwise from +x
  const S = 400;
  const faceT = printTex(`vl-face-v3:${g.unit}`, S, S, (c) => {
    const m = S / 2;
    c.fillStyle = CREAM; c.beginPath(); c.arc(m, m, m, 0, Math.PI * 2); c.fill();
    const vg = c.createRadialGradient(m, m, m * 0.5, m, m, m); vg.addColorStop(0, "rgba(255,255,255,0)"); vg.addColorStop(1, "rgba(150,120,70,0.16)");
    c.fillStyle = vg; c.fillRect(0, 0, S, S);
    c.strokeStyle = "#1F1A14"; c.fillStyle = "#1F1A14"; c.textAlign = "center"; c.textBaseline = "middle";
    c.lineWidth = 1.4; c.beginPath(); c.arc(m, m, m - 16, angleOf(0), angleOf(MAX)); c.stroke();
    c.lineWidth = 0.8; c.beginPath(); c.arc(m, m, m - 40, angleOf(0), angleOf(MAX)); c.stroke();
    for (let v = 0; v <= MAX; v += 10) {
      const a = angleOf(v), big = v % 100 === 0, mid = v % 50 === 0;
      c.lineWidth = big ? 3.2 : mid ? 2 : 1;
      const r0 = big ? m - 46 : mid ? m - 36 : m - 28;
      c.beginPath(); c.moveTo(m + Math.cos(a) * r0, m + Math.sin(a) * r0); c.lineTo(m + Math.cos(a) * (m - 16), m + Math.sin(a) * (m - 16)); c.stroke();
      if (big) { font(c, 700, 25); c.fillText(String(v), m + Math.cos(a) * (m - 72), m + Math.sin(a) * (m - 72)); }
    }
    font(c, 800, 15); track(c, 3); c.fillText(g.unit, m, m + 70); track(c, 0);
    font(c, 600, 8.5); track(c, 2); c.fillStyle = "rgba(31,26,20,0.7)"; c.fillText("NO SPRINGS   HONEST WEIGHT", m, m - 64); track(c, 0);
  }, 3);
  const face = mesh(new THREE.CircleGeometry(FR - 0.2, 96), M.print(faceT, 0.5), false, true);
  face.position.z = -12;
  head.add(face);
  // the arbor: a short brass pin out of the face; the drag pointer and the needle turn on it
  const arbor = mesh(new THREE.CylinderGeometry(3, 3, 10, 16).rotateX(Math.PI / 2), brass);
  arbor.position.z = -12 + 5.05;
  head.add(arbor);
  // the drag pointer: a slim brass blade with a ring round the arbor, just over the face
  const drag = new THREE.Group();
  drag.position.z = -12 + 0.9;
  head.add(drag);
  {
    const s = new THREE.Shape();
    s.moveTo(-1.5, 8.6); s.lineTo(-0.7, FR - 22); s.lineTo(0, FR - 14); s.lineTo(0.7, FR - 22); s.lineTo(1.5, 8.6); s.lineTo(-1.5, 8.6);
    const ring = new THREE.Shape(); ring.absarc(0, 0, 9, 0, Math.PI * 2, false);
    const hole = new THREE.Path(); hole.absarc(0, 0, 3.6, 0, Math.PI * 2, true); ring.holes.push(hole);
    drag.add(mesh(new THREE.ExtrudeGeometry([s, ring], { depth: 1, bevelEnabled: false, curveSegments: 24 }), brass));
  }
  // the needle: a black enamel blade, a counterweight on its tail, a brass hub cap over the arbor
  const needle = new THREE.Group();
  needle.position.z = -12 + 2.6;
  head.add(needle);
  {
    const s = new THREE.Shape();
    s.moveTo(-6.5, 0); s.lineTo(-1.3, FR - 30); s.lineTo(0, FR - 16); s.lineTo(1.3, FR - 30); s.lineTo(6.5, 0); s.lineTo(2.6, -22);
    s.absarc(0, -29, 7.5, Math.PI * 0.39, Math.PI * 2.61, true); s.lineTo(-6.5, 0);
    const hole = new THREE.Path(); hole.absarc(0, 0, 3.6, 0, Math.PI * 2, true); s.holes.push(hole);
    const bl = mesh(new THREE.ExtrudeGeometry(s, { depth: 1.6, bevelEnabled: true, bevelThickness: 0.3, bevelSize: 0.3, bevelSegments: 1, curveSegments: 24 }), M.gloss("#141414"));
    bl.position.z = 0.3;
    needle.add(bl);
  }
  const cap = mesh(lathe([[9, 0], [9, 2], [7.5, 4], [4.5, 5.6], [0.01, 6]], 32).rotateX(Math.PI / 2), brass);
  cap.position.z = -12 + 5.2;   // the hub cap, over the needle's root, on the arbor's end
  head.add(cap);
  // the bezel: a chrome rolled ring on the drum's rim, and the glass inside it
  const bezelG = lathe([[FR + 0.4, 0.3], [FR + 0.6, 2.5], [FR + 4, 6.2], [FR + 11, 7.4], [FR + 17, 5.2], [HR + 1.5, 1.8], [HR + 1.5, 0.3], [FR + 0.4, 0.3]], 96).rotateX(Math.PI / 2);
  const chromeDS = chrome.clone(); chromeDS.side = THREE.DoubleSide;
  head.add(mesh(bezelG, chromeDS));
  const glass = mesh(new THREE.CircleGeometry(FR - 0.4, 96), new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#eef3f8"), roughness: 0.03, transparent: true, opacity: 0.1, depthWrite: false, clearcoat: 1, envMapIntensity: 1.3 }), false, false);
  glass.position.z = 2.2;
  head.add(glass);
  // a cast finial on the drum's crown
  const fin = mesh(lathe([[0.01, 0], [16, 0], [16, 3], [10, 8], [7, 16], [10, 22], [0.01, 26]], 40), iron);
  fin.position.set(0, HR - 0.4, -50);
  head.add(fin);

  // ══ THE DEAL ON THE DECK: four hand-squared piles of strapped $100 bundles ══
  const PILES: [number, number, number, number][] = [[-138, deckZ0 + 74, 7, -0.03], [138, deckZ0 + 80, 6, 0.035], [-132, deckZ0 + 74 + NOTE.D + 34, 6, 0.04], [140, deckZ0 + 80 + NOTE.D + 28, 5, -0.02]];
  PILES.forEach(([x, z, n, yaw], i) => {
    const p = pile(`cash${i}`, n, 11 + i * 5, { turn: 0.03, shift: 3 });
    p.group.position.set(x, deckTop + 0.3, z);
    p.group.rotation.y = yaw;
    sc.add(p.group);
  });

  root.add(makeFloor({ y: g.floor, x0: g.cx - 1000, x1: g.cx + 1000, z0: -700, z1: 800, reflect: 0, shadow: 0.42, fadeC: [g.cx, g.z + 60], fadeR: [820, 520],
    blobs: [{ x: g.cx, z: g.z, w: BASE_W + 90, d: BASE_D + 80, a: 0.3 }] }));

  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      needle.rotation.z = -(angleOf(p.needle) + Math.PI / 2);
      drag.rotation.z = -(angleOf(p.drag) + Math.PI / 2);
    },
  };
};
