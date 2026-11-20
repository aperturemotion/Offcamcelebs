// THE BONDS (038, set C; P16: a real, recognisable bond certificate printed with the real crest).
// makeBond(key) → { group, sheet }   a bond certificate: cream paper with an engraved green guilloche border (drawn here),
//   the real Manchester United crest printed at the top, and three solid lines of print: MANCHESTER UNITED / SENIOR
//   SECURED NOTES / 2010. It lies FLAT (its face up, +y), reading toward +z. Origin: its centre, on its underside.
//   Size: 560 w × 400 d × 4 thick (BOND).
// makeBondPress(key) → { group, update({ ram, value, on }), die }   the press that prints them: a heavy black base with a
//   die pad, two satin posts, a crowned beam with a lit plate BONDS, a piston and its head, and a counter screen on the
//   base's front that rolls the money raised (`value`, lit by `on`). Origin: the footprint's centre. `die`: the die pad's
//   top surface (a sheet lies on it) in the group's space.
import * as THREE from "three";
import { MAT, K, lit, rbox, block, cyl, wide, textOn, litPlate, counter, setLit, joined } from "../kit";
import { text3d, textWidth } from "../text3d";
import { printMat } from "./brand";

export const BOND = { w: 560, d: 400, t: 4 } as const;

let borderTex: THREE.CanvasTexture | null = null;
/** the engraved paper: a cream ground, a double green guilloche border and a fine rosette pattern (drawn, generic) */
const paperTexture = () => {
  if (borderTex) return borderTex;
  if (typeof document === "undefined") return null;   // the world checks run in Node: geometry only
  const c = document.createElement("canvas"); c.width = 1120; c.height = 800;
  const g = c.getContext("2d")!;
  g.fillStyle = "#efe8d6"; g.fillRect(0, 0, 1120, 800);
  // a faint all-over rosette (the security print of a certificate)
  g.strokeStyle = "rgba(40,90,70,0.10)"; g.lineWidth = 1;
  for (let k = 0; k < 18; k++) { g.beginPath(); for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.02) { const r = 300 + 40 * Math.sin(a * 12 + k * 0.35); g.lineTo(560 + Math.cos(a) * r, 400 + Math.sin(a) * r * 0.62); } g.stroke(); }
  // the engraved border: a wide band of interlaced waves between two rules
  const band = (inset: number, w: number) => {
    g.strokeStyle = "#2f5e4a"; g.lineWidth = 3; g.strokeRect(inset, inset, 1120 - 2 * inset, 800 - 2 * inset);
    g.strokeRect(inset + w, inset + w, 1120 - 2 * (inset + w), 800 - 2 * (inset + w));
    g.lineWidth = 1.3; g.strokeStyle = "rgba(47,94,74,0.85)";
    for (let s = 0; s < 3; s++) {
      const mid = inset + w / 2, amp = w / 2 - 3, ph = s * 2.1;
      const run = (x0: number, y0: number, x1: number, y1: number) => {
        const L = Math.hypot(x1 - x0, y1 - y0), nx = -(y1 - y0) / L, ny = (x1 - x0) / L;
        g.beginPath();
        for (let t = 0; t <= L; t += 3) { const o = amp * Math.sin(t / 9 + ph); g.lineTo(x0 + ((x1 - x0) * t) / L + nx * o, y0 + ((y1 - y0) * t) / L + ny * o); }
        g.stroke();
      };
      run(mid, mid, 1120 - mid, mid); run(1120 - mid, mid, 1120 - mid, 800 - mid); run(1120 - mid, 800 - mid, mid, 800 - mid); run(mid, 800 - mid, mid, mid);
    }
  };
  band(18, 44);
  // corner rosettes
  for (const [x, y] of [[40, 40], [1080, 40], [40, 760], [1080, 760]]) {
    g.beginPath(); g.arc(x, y, 34, 0, Math.PI * 2); g.fillStyle = "#efe8d6"; g.fill();
    g.strokeStyle = "#2f5e4a"; g.lineWidth = 2;
    for (let k = 0; k < 8; k++) { g.beginPath(); g.ellipse(x, y, 30, 12, (k * Math.PI) / 8, 0, Math.PI * 2); g.stroke(); }
  }
  // a serial line and a signature, fine print at the foot
  g.fillStyle = "rgba(47,94,74,0.9)"; g.font = "600 22px Archivo, sans-serif"; g.fillText("No. MU 2010 000417", 96, 732);
  g.strokeStyle = "rgba(30,40,60,0.8)"; g.lineWidth = 2.2; g.beginPath();
  for (let x = 0; x <= 200; x += 4) g.lineTo(820 + x, 726 - 10 * Math.sin(x / 13) - (x > 120 ? (x - 120) * 0.2 : 0));
  g.stroke();
  borderTex = new THREE.CanvasTexture(c); borderTex.colorSpace = THREE.SRGBColorSpace; borderTex.anisotropy = 8;
  return borderTex;
};

const INK = "#1f3d33";
let sheetGeo: THREE.BoxGeometry | null = null;
export const makeBond = (key: string) => {
  void key;
  const group = new THREE.Group();
  const tex = paperTexture();
  const face = new THREE.MeshStandardMaterial({ map: tex, color: tex ? "#bdb6a6" : "#cfc8b6", roughness: 0.92 });
  const edge = new THREE.MeshStandardMaterial({ color: "#e6dfcc", roughness: 0.9 });
  sheetGeo ??= new THREE.BoxGeometry(BOND.w, BOND.t, BOND.d);
  const sheet = new THREE.Mesh(sheetGeo, [edge, edge, face, edge, edge, edge]);
  sheet.position.y = BOND.t / 2; sheet.castShadow = true; sheet.receiveShadow = true;
  sheet.name = "bond sheet";
  group.add(sheet);
  // the crest, printed at the top centre
  const crest = new THREE.Mesh(new THREE.PlaneGeometry(118, 120), printMat("crest", { alphaTest: 0.5, emissive: 0.05, rough: 0.6 }));
  crest.rotation.x = -Math.PI / 2;
  crest.position.set(0, BOND.t + 0.4, -BOND.d / 2 + 64 + 60);
  crest.userData.print = "the Manchester United crest (assets/brand/crest.png) printed on the certificate";
  group.add(crest);
  // three lines of solid dark-green print, each sized to fit inside the border with margin (P14)
  const ink = new THREE.MeshStandardMaterial({ color: INK, roughness: 0.7 });
  const inner = BOND.w - 2 * 74;
  const line = (s: string, size: number, z: number, font: "800" | "500") => {
    const sz = Math.min(size, (inner / (textWidth(s, font, size) * 1.06)) * size);
    const t = wide(text3d(s, { font, size: sz, depth: 1.2, bevel: 0, face: ink }), 1.06);
    t.rotation.x = -Math.PI / 2;
    t.position.set(0, BOND.t, z);
    t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    textOn(t, sheet, { inset: 66 });
    group.add(t);
  };
  line("MANCHESTER UNITED", 40, 26, "800");
  line("SENIOR SECURED NOTES", 26, 72, "500");
  line("2010", 34, 118, "800");
  return { group, sheet };
};

// ── the press that prints them ──
export const BPRESS = { w: 900, d: 560, base: 200, dieZ: 40, up: 560 } as const;
export const makeBondPress = (key: string) => {
  void key;
  const group = new THREE.Group();
  const base = block(BPRESS.w, BPRESS.base, BPRESS.d, 30, MAT.black()); base.name = "press base"; group.add(base);
  // the die pad the sheet lies on
  const pad = rbox(BOND.w + 40, 10, BOND.d + 30, 4, MAT.satin()); pad.position.set(0, BPRESS.base + 5, BPRESS.dieZ); group.add(pad);
  const die = BPRESS.base + 10;
  for (const sx of [-1, 1]) { const post = cyl(34, 640, MAT.satin(), 40); post.position.set(sx * 380, BPRESS.base + 320, -200); group.add(post); }
  const beam = rbox(900, 150, 320, 30, MAT.black()); beam.position.set(0, BPRESS.base + 640 + 50, -150); group.add(beam);
  const head = rbox(340, 120, 360, 24, MAT.graphite()); head.position.set(0, BPRESS.base + 640 + 20, BPRESS.dieZ - 60); group.add(head);
  const plate = litPlate(["BONDS"], { size: 64, color: K.white, depth: 24 });
  plate.group.position.set(0, BPRESS.base + 640 + 160, -60); plate.group.rotation.x = -0.35;
  group.add(plate.group);
  // the ram: a piston and a flat platen the size of a sheet
  const ram = new THREE.Group(); ram.name = "press ram";
  // ★ P17: the piston is long enough to stay in its head at the bottom of the stroke (it slid out of it, 114 short)
  const rod = cyl(44, 590, MAT.satin(), 40); rod.position.y = 50 + 295;
  const platen = rbox(BOND.w + 20, 50, BOND.d + 10, 10, MAT.graphite()); platen.position.y = 25;
  ram.add(rod, platen);
  ram.position.set(0, BPRESS.up, BPRESS.dieZ);
  group.add(ram);
  joined(rod, beam, "the piston runs through the press's beam");
  joined(rod, head, "the piston runs through the press's head");
  rod.name = "press rod"; head.name = "press head";
  // the counter screen on the base's front: the money the bonds raise
  const screen = rbox(820, 130, 14, 8, new THREE.MeshPhysicalMaterial({ color: "#050506", roughness: 0.22, metalness: 0.3, clearcoat: 0.6 }));
  screen.position.set(0, BPRESS.base / 2, BPRESS.d / 2 + 6); screen.name = "press screen";
  group.add(screen);
  const fig = counter({ size: 62, color: K.money, depth: 8 });
  fig.group.position.set(0, BPRESS.base / 2 - 62 * 0.345, BPRESS.d / 2 + 13.5);
  fig.group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(fig.group, screen, { inset: 6 });
  group.add(fig.group);
  const capFace = lit(K.white, 0.7);
  void capFace;
  return {
    group, die, rod, head,
    /** `ram` 0 (up) … 1 (down on the sheet); `value` the counter's string; `on` lights the counter */
    update: (p: { ram: number; value: string; on: number }) => {
      ram.position.y = BPRESS.up - p.ram * (BPRESS.up - (die + BOND.t + 1.5));
      fig.set(p.value);
      setLit(fig.face, p.on, 0.04);
    },
  };
};
