// THE STADIUM SCOREBOARD (038 set E; P16: a real, recognisable thing). A section of an Old-Trafford-like stand (a stepped
// concrete terrace with rows of RED tip-up seats, a black cantilever roof on rear columns, a satin fascia) and, standing in
// front of its corner on two black pylons, a big LED scoreboard: a black frame, a dark screen of red LED dots, the real
// Manchester United crest standing on top of it. The screen carries LINES of red LED text and switches PAGES the way a
// stadium board does: the old lines go dark row by row, the new ones light row by row.
// makeScoreboard(key) → { group, screen, page(i), lines, update({ page, rows, figure }) , SB }
//   pages[0]: BORROWINGS | <figure> | 30 JUN 2026        pages[1]: NET FINANCE COSTS 2025/26 | <figure>
//   update({ p0: [row lights], p1: [row lights], fig0: "£689M", fig1: "£69,600,000", red: 0…1 }) sets the screen.
// Origin: the floor centre of the stand's FRONT edge; the stand rises toward −z; the board stands at +z in front of it.
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { MAT, K, lit, setLit, rbox, block, wide, textOn, counter } from "../kit";
import { text3d, textWidth, type Face3 } from "../text3d";
import { makeCrest } from "./crest";

export const SB = {
  /** the stand: rows, rise and tread of each step, its width */
  rows: 8, rise: 120, tread: 150, w: 3400,
  /** the board: its screen's size and centre (in the set's frame) */
  screenW: 1500, screenH: 760, cx: 250, cy: 1460, cz: 380,
} as const;

const RED = "#ff3b2f";
const seatMat = () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#b3171c"), roughness: 0.45, metalness: 0.05, clearcoat: 0.35, clearcoatRoughness: 0.4 });
const concrete = () => new THREE.MeshStandardMaterial({ color: new THREE.Color("#5b5a5c"), roughness: 0.86, metalness: 0 });

/** the LED face: a dark screen with a faint grid of red dots (browser only: the checks run in Node) */
const ledMat = () => {
  const m = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#0b0506"), roughness: 0.55, metalness: 0.1, clearcoat: 0.15, clearcoatRoughness: 0.5 });
  if (typeof document !== "undefined") {
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const g = c.getContext("2d")!;
    g.fillStyle = "#0b0506"; g.fillRect(0, 0, 64, 64);
    g.fillStyle = "#3a0d0c";
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.beginPath(); g.arc(8 + x * 16, 8 + y * 16, 4.2, 0, Math.PI * 2); g.fill(); }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(SB.screenW / 26, SB.screenH / 26);
    t.colorSpace = THREE.SRGBColorSpace; m.map = t; m.color.set("#ffffff");
  }
  return m;
};

/** the largest size ≤ `size` at which `str` fits `maxW` (wide 1.14) */
const fit = (str: string, font: Face3, size: number, maxW: number) => Math.min(size, (maxW / (textWidth(str, font, 1) * 1.14)));

export const makeScoreboard = (key: string) => {
  const group = new THREE.Group();
  group.name = `scoreboard:${key}`;

  // ── the stand: a stepped concrete terrace (one extruded profile) ──
  const prof = new THREE.Shape();
  prof.moveTo(0, 0);
  for (let i = 0; i < SB.rows; i++) { prof.lineTo(-(i * SB.tread), (i + 1) * SB.rise); prof.lineTo(-((i + 1) * SB.tread), (i + 1) * SB.rise); }
  const backZ = -SB.rows * SB.tread;
  prof.lineTo(backZ - 60, SB.rows * SB.rise); prof.lineTo(backZ - 60, 0); prof.lineTo(0, 0);
  const tg = new THREE.ExtrudeGeometry(prof, { depth: SB.w, bevelEnabled: false });
  tg.translate(0, 0, -SB.w / 2);
  const terrace = new THREE.Mesh(tg, concrete());
  terrace.rotation.y = -Math.PI / 2;           // the profile's x runs into −z; its extrusion runs along x
  terrace.castShadow = terrace.receiveShadow = true;
  group.add(terrace);
  // a black front wall (the pitch-side hoarding) and the satin rail on it
  const wall = rbox(SB.w + 40, 150, 40, 8, MAT.black()); wall.position.set(0, 75, 22); group.add(wall);
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, SB.w, 16), MAT.satin()); rail.rotation.z = Math.PI / 2; rail.position.set(0, 168, 22); group.add(rail);
  // ── the seats: red tip-ups on every step (merged into one mesh: one rigid part) ──
  const seatG: THREE.BufferGeometry[] = [];
  const pan = new THREE.BoxGeometry(56, 12, 52), back = new THREE.BoxGeometry(56, 58, 10);
  for (let r = 0; r < SB.rows; r++) {
    const y = (r + 1) * SB.rise, z = -(r * SB.tread) - SB.tread * 0.55;
    for (let x = -SB.w / 2 + 70; x <= SB.w / 2 - 70; x += 78) {
      const a = pan.clone(); a.translate(x, y + 30, z + 6); seatG.push(a);
      const b = back.clone(); b.translate(x, y + 58, z - 26); seatG.push(b);
      const leg = new THREE.BoxGeometry(10, 24, 10); leg.translate(x, y + 12.5, z); seatG.push(leg);
    }
  }
  const seats = new THREE.Mesh(mergeGeometries(seatG), seatMat());
  seats.castShadow = seats.receiveShadow = true;
  group.add(seats);
  // ── the roof: a black cantilever slab on rear columns, a satin fascia along its front edge ──
  const roofY = SB.rows * SB.rise + 780;
  const roof = rbox(SB.w + 200, 70, 1250, 14, MAT.black()); roof.position.set(0, roofY, backZ + 520); group.add(roof);
  const fascia = rbox(SB.w + 200, 110, 26, 8, MAT.satin()); fascia.position.set(0, roofY - 10, backZ + 520 + 625 + 14); group.add(fascia);
  for (const x of [-1500, -500, 500, 1500]) { const col = rbox(70, roofY - SB.rows * SB.rise, 70, 10, MAT.graphite()); col.position.set(x, SB.rows * SB.rise + (roofY - SB.rows * SB.rise) / 2 - 35, backZ - 30); group.add(col); }

  // ── the scoreboard on its pylons ──
  const board = new THREE.Group(); board.position.set(SB.cx, SB.cy, SB.cz); group.add(board);
  const frame = rbox(SB.screenW + 120, SB.screenH + 120, 150, 26, MAT.black()); board.add(frame);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(SB.screenW, SB.screenH), ledMat()); screen.position.z = 75.5; board.add(screen);
  const hood = rbox(SB.screenW + 180, 46, 210, 14, MAT.graphite()); hood.position.set(0, (SB.screenH + 120) / 2 + 23, 26); board.add(hood);
  const legH = SB.cy - (SB.screenH + 120) / 2;
  for (const x of [-SB.screenW / 2 + 260, SB.screenW / 2 - 260]) {
    const leg = block(110, legH, 110, 16, MAT.black()); leg.position.set(SB.cx + x, 0, SB.cz - 20); group.add(leg);
    const foot = block(260, 30, 260, 10, MAT.satin()); foot.position.set(SB.cx + x, 0, SB.cz - 20); group.add(foot);
  }
  // the real crest standing on top of the board's hood, centred (in frame whenever the board is: P16)
  const crest = makeCrest(`${key}-crest`, 380);
  const hoodTop = SB.cy + (SB.screenH + 120) / 2 + 46;
  crest.group.position.set(SB.cx, hoodTop + 384 / 2 + 30, SB.cz + 40);
  group.add(crest.group);
  const mount = rbox(120, 40, 80, 8, MAT.satin()); mount.position.set(SB.cx, hoodTop + 20, SB.cz + 40); group.add(mount);

  // ── the LED lines ──
  const face = lit(RED, 1.12);
  const figFace = (c: ReturnType<typeof counter>) => { c.face.color.set(RED).multiplyScalar(1.18); c.face.userData.full = c.face.color.clone(); };
  const IN = SB.screenW - 200;
  const line = (str: string, size: number, y: number, font: Face3 = "800") => {
    const s = fit(str, font, size, IN);
    const t = wide(text3d(str, { font, size: s, depth: 2, bevel: 0, face: face.clone() }), 1.14);
    t.position.set(0, y - s * 0.345, 76.5);
    t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    textOn(t, screen, { inset: 20 });
    board.add(t);
    return t;
  };
  const fig = (size: number, y: number, longest: string) => {
    const s = fit(longest, "800", size, IN);
    const c = counter({ size: s, color: RED, depth: 3 });
    figFace(c);
    c.group.position.set(0, y - s * 0.345, 76.5);
    c.group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    textOn(c.group, screen, { inset: 20 });
    board.add(c.group);
    return { ...c, size: s };
  };
  const H = SB.screenH;
  // page 0
  const p0 = [line("BORROWINGS", 118, H * 0.3), null as unknown as THREE.Group, line("30 JUN 2026", 90, -H * 0.31)];
  const f0 = fig(270, H * 0.0, "£689M");
  // page 1
  const p1 = [line("NET FINANCE COSTS", 100, H * 0.31), line("2025/26", 84, H * 0.11, "500")];
  const f1 = fig(200, -H * 0.17, "£69,600,000");
  const mats = (g: THREE.Object3D) => { const out: THREE.MeshBasicMaterial[] = []; g.traverse((n) => { const m = (n as THREE.Mesh).material as THREE.MeshBasicMaterial; if (m?.isMeshBasicMaterial && !out.includes(m)) out.push(m); }); return out; };
  const rows0 = [mats(p0[0]), mats(f0.group), mats(p0[2])], rows1 = [mats(p1[0]), mats(p1[1]), mats(f1.group)];
  const light = (rows: THREE.MeshBasicMaterial[][], groups: THREE.Object3D[], v: number[]) => rows.forEach((ms, i) => {
    groups[i].visible = (v[i] ?? 0) > 0.01;
    for (const m of ms) setLit(m, v[i] ?? 0, 0);
  });

  return {
    group, screen, crest, SB,
    /** `p0` / `p1`: each row's light 0…1 (top to bottom); `fig0` / `fig1`: the figures shown */
    update: (o: { p0: number[]; p1: number[]; fig0: string; fig1: string }) => {
      f0.set(o.fig0); f1.set(o.fig1);
      light(rows0, [p0[0], f0.group, p0[2]], o.p0);
      light(rows1, [p1[0], p1[1], f1.group], o.p1);
    },
  };
};
