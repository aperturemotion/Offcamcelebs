// BANDED CASH (038: the loans, the money). A brick of banknotes: generic sterling-like notes (a purple-grey £50-style tint
// with a guilloche-like pattern and a big "£50", drawn here: NOT a copy of a real Bank of England note), a gold paper band
// round the middle carrying an optional label (LOANS…).
// makeCashStack(key, label?, o?) → { group, size }   o.bricks: how many bricks stacked (default 1), o.layers: 2 × 2 etc.
// Origin: the floor centre of the stack. One brick: 320 w × 70 h × 150 d.
import * as THREE from "three";
import { MAT, K, lit, rbox, wide, textOn } from "../kit";
import { text3d, textWidth } from "../text3d";

const NOTE_W = 320, NOTE_D = 150, BRICK_H = 70;
let noteTex: THREE.CanvasTexture | null = null;
const noteTexture = () => {
  if (noteTex) return noteTex;
  if (typeof document === "undefined") return null;   // the world checks run in Node: geometry only
  const c = document.createElement("canvas"); c.width = 512; c.height = 240;
  const g = c.getContext("2d")!;
  const gr = g.createLinearGradient(0, 0, 512, 240); gr.addColorStop(0, "#c9b8c9"); gr.addColorStop(0.5, "#b5a6c2"); gr.addColorStop(1, "#c7bcaf");
  g.fillStyle = gr; g.fillRect(0, 0, 512, 240);
  g.strokeStyle = "rgba(70,40,80,0.35)"; g.lineWidth = 1.2;
  for (let i = 0; i < 26; i++) { g.beginPath(); for (let x = 0; x <= 512; x += 8) g.lineTo(x, 120 + Math.sin(x / 22 + i * 0.5) * (40 + i * 2)); g.stroke(); }
  g.fillStyle = "rgba(60,30,70,0.85)"; g.font = "800 92px Archivo, sans-serif"; g.fillText("£50", 330, 110);
  g.font = "600 22px Archivo, sans-serif"; g.fillText("FIFTY POUNDS", 26, 214);
  g.strokeStyle = "rgba(60,30,70,0.6)"; g.lineWidth = 6; g.strokeRect(8, 8, 496, 224);
  g.beginPath(); g.arc(130, 110, 62, 0, Math.PI * 2); g.fillStyle = "rgba(255,255,255,0.35)"; g.fill();
  noteTex = new THREE.CanvasTexture(c); noteTex.colorSpace = THREE.SRGBColorSpace; noteTex.anisotropy = 8;
  return noteTex;
};

const brick = (label?: string) => {
  const g = new THREE.Group();
  const top = new THREE.MeshStandardMaterial({ map: noteTexture(), color: noteTexture() ? "#ffffff" : "#c3b4c4", roughness: 0.8 });
  const edge = new THREE.MeshStandardMaterial({ color: "#d9d0cf", roughness: 0.9 });
  // the brick: paper edges on the sides, the top note's print on top
  const body = new THREE.Mesh(new THREE.BoxGeometry(NOTE_W, BRICK_H, NOTE_D), [edge, edge, top, edge, edge, edge]);
  body.position.y = BRICK_H / 2; body.castShadow = true; body.receiveShadow = true; g.add(body);
  // the paper lines on the long side (a stack of notes)
  for (let i = 1; i < 10; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(NOTE_W + 0.5, 0.8, NOTE_D + 0.5), new THREE.MeshStandardMaterial({ color: "#b9aead" })); l.position.y = (i * BRICK_H) / 10; g.add(l); }
  // the gold band
  const bandW = 92;
  const band = rbox(bandW, BRICK_H + 4, NOTE_D + 4, 2, MAT.gold()); band.position.y = BRICK_H / 2; g.add(band);
  if (label) {
    const size = Math.min(26, ((NOTE_D - 20) / Math.max(1, textWidth(label, "800", 26) * 1.08)) * 26);
    const t = wide(text3d(label, { font: "800", size, depth: 1.5, bevel: 0, face: lit(K.cream, 0.95) }), 1.08);
    // on the band's top, reading along the note's short side
    t.rotation.set(-Math.PI / 2, 0, Math.PI / 2);
    t.position.set(0, BRICK_H + 3.2, 0);
    textOn(t, band, { inset: 2 });
    g.add(t);
  }
  return g;
};

export const makeCashStack = (key: string, label?: string, o: { bricks?: number; cols?: number; rows?: number } = {}) => {
  void key;
  const group = new THREE.Group();
  const n = o.bricks ?? 1, cols = o.cols ?? 1, rows = o.rows ?? 1;
  for (let k = 0; k < n; k++) for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const b = brick(label); b.position.set((i - (cols - 1) / 2) * (NOTE_W + 6), k * (BRICK_H + 1), (j - (rows - 1) / 2) * (NOTE_D + 6)); group.add(b);
  }
  return { group, size: { w: cols * (NOTE_W + 6), h: n * (BRICK_H + 1), d: rows * (NOTE_D + 6) } };
};
export const CASH = { w: NOTE_W, h: BRICK_H, d: NOTE_D } as const;
