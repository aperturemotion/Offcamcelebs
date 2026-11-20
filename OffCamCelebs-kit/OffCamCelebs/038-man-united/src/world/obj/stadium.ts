// OLD TRAFFORD, as a model (038, set D; P16: a real, recognisable place, not a box). A rectangular bowl round a striped
// green pitch with its white markings: four stands of red seats rising away from the pitch, "MANCHESTER UNITED" set in
// white letters into the seats of the far (main) stand, a pale cantilever roof over every stand with the trusses on top
// of the main one and a lit strip of floodlights under every roof edge, the brick-red outer wall with the real crest and
// OLD TRAFFORD on the near side.
// makeStadium(key) → { group, size, lights(v) }   Origin: the pitch's centre on the floor; the near (south) side faces +z.
// Size: 1,700 w (x) × 1,240 d (z), about 380 tall at the roof. `lights(v)` brightens the floodlight strips (0…1).
import * as THREE from "three";
import { MAT, K, lit, setLit, rbox, wide, textOn, litPlate } from "../kit";
import { text3d } from "../text3d";
import { printMat } from "./brand";

const PITCH = { w: 980, d: 640 } as const;
const STAND = 230;            // how deep each stand runs back from the pitch
const H = 260;                // the top of the seats
export const STADIUM = { w: PITCH.w + 2 * STAND + 40, d: PITCH.d + 2 * STAND + 40, h: 380, pitch: PITCH } as const;

const C = (h: string) => new THREE.Color(h);
const seatMat = () => new THREE.MeshStandardMaterial({ color: C("#9d1620"), roughness: 0.72, metalness: 0.05 });
const rowMat = () => new THREE.MeshStandardMaterial({ color: C("#6e0f16"), roughness: 0.8 });
const roofMat = () => new THREE.MeshPhysicalMaterial({ color: C("#cfd0d3"), roughness: 0.45, metalness: 0.4, clearcoat: 0.2 });
const brick = () => new THREE.MeshStandardMaterial({ color: C("#5b201c"), roughness: 0.85 });

let pitchTex: THREE.CanvasTexture | null = null;
const pitchTexture = () => {
  if (pitchTex) return pitchTex;
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas"); c.width = 980; c.height = 640;
  const g = c.getContext("2d")!;
  for (let i = 0; i < 14; i++) { g.fillStyle = i % 2 ? "#2f7d36" : "#378c3e"; g.fillRect((i * 980) / 14, 0, 980 / 14 + 1, 640); }
  g.strokeStyle = "rgba(255,255,255,0.9)"; g.lineWidth = 4;
  g.strokeRect(40, 40, 900, 560);
  g.beginPath(); g.moveTo(490, 40); g.lineTo(490, 600); g.stroke();
  g.beginPath(); g.arc(490, 320, 72, 0, Math.PI * 2); g.stroke();
  for (const x of [40, 940]) { const s = x < 490 ? 1 : -1; g.strokeRect(Math.min(x, x + s * 130), 170, 130, 300); g.strokeRect(Math.min(x, x + s * 46), 250, 46, 140); }
  pitchTex = new THREE.CanvasTexture(c); pitchTex.colorSpace = THREE.SRGBColorSpace; pitchTex.anisotropy = 8;
  return pitchTex;
};

/** one stand along a pitch edge: a sloped bank of red seats (with darker row lines), its back wall, its roof and the
 *  floodlight strip under the roof's front edge. Built along +x, rising toward −z from the pitch edge at z = 0 */
const stand = (len: number, lights: THREE.MeshBasicMaterial[], main: boolean) => {
  const g = new THREE.Group();
  const slope = Math.atan2(H - 24, STAND);
  const L = Math.hypot(STAND, H - 24);
  // the seating bank: a thick sloped slab from the pitch edge up to the back
  const bank = rbox(len, 26, L, 6, seatMat());
  bank.position.set(0, 24 + (H - 24) / 2, -STAND / 2);
  bank.rotation.x = slope;
  bank.name = main ? "main stand seats" : "stand seats";
  g.add(bank);
  // the row lines (the steps of seats), on the slab's upper face
  for (let i = 1; i < 10; i++) {
    const row = rbox(len - 30, 3, 5, 1, rowMat());
    row.position.set(0, 13 + 1, -L / 2 + (i * L) / 10);
    bank.add(row);
  }
  // the low wall at the pitch edge and the tall back wall
  const front = rbox(len, 30, 14, 4, MAT.black()); front.position.set(0, 15, 6); g.add(front);
  const back = rbox(len, H + 30, 26, 6, brick()); back.position.set(0, (H + 30) / 2, -STAND - 13); g.add(back);
  // the cantilever roof: a pale slab over the seats, reaching out over the pitch edge
  const roof = rbox(len + 20, 14, STAND + 70, 5, roofMat()); roof.position.set(0, H + 110, -STAND / 2 + 20); g.add(roof);
  // the roof's supports at the back
  for (let x = -len / 2 + 60; x <= len / 2 - 60; x += Math.max(120, (len - 120) / 6)) {
    const col = rbox(16, H + 110 - 7, 16, 3, roofMat()); col.position.set(x, (H + 110 - 7) / 2, -STAND - 34); g.add(col);
    if (main) {   // the main stand's trusses on top of the roof (Old Trafford's cantilever)
      const tr = rbox(10, 46, STAND + 40, 3, roofMat()); tr.position.set(x, H + 110 + 30, -STAND / 2 + 10); g.add(tr);
      const tie = rbox(8, 8, Math.hypot(46, STAND) * 0.55, 2, roofMat()); tie.position.set(x, H + 110 + 30, -STAND / 2 + 10); tie.rotation.x = 0.2; g.add(tie);
    }
  }
  // the floodlight strip under the roof's front edge
  const lamp = lit("#fff6e8", 1.05); lights.push(lamp);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(len - 40, 6, 10), lamp); strip.position.set(0, H + 100, 50); g.add(strip);
  return { group: g, bank, slope };
};

export const makeStadium = (key: string) => {
  void key;
  const group = new THREE.Group();
  const lights: THREE.MeshBasicMaterial[] = [];
  // the pitch
  const tex = pitchTexture();
  const pitch = new THREE.Mesh(new THREE.BoxGeometry(PITCH.w + 60, 8, PITCH.d + 60), [
    MAT.black(), MAT.black(), new THREE.MeshStandardMaterial({ map: tex, color: tex ? "#ffffff" : "#2f7d36", roughness: 0.9 }), MAT.black(), MAT.black(), MAT.black(),
  ]);
  pitch.position.y = 4; pitch.receiveShadow = true; group.add(pitch);
  // the four stands: far (main, north), near (south), and the two ends
  const far = stand(PITCH.w + 2 * STAND, lights, true); far.group.position.set(0, 0, -PITCH.d / 2 - 30); group.add(far.group);
  const near = stand(PITCH.w + 2 * STAND, lights, false); near.group.rotation.y = Math.PI; near.group.position.set(0, 0, PITCH.d / 2 + 30); group.add(near.group);
  const west = stand(PITCH.d + 60, lights, false); west.group.rotation.y = Math.PI / 2; west.group.position.set(-PITCH.w / 2 - 30, 0, 0); group.add(west.group);
  const east = stand(PITCH.d + 60, lights, false); east.group.rotation.y = -Math.PI / 2; east.group.position.set(PITCH.w / 2 + 30, 0, 0); group.add(east.group);
  // MANCHESTER UNITED set in white into the main stand's seats (as at Old Trafford)
  const white = new THREE.MeshStandardMaterial({ color: C("#f2efe9"), roughness: 0.7 });
  const word = wide(text3d("MANCHESTER UNITED", { font: "800", size: 70, depth: 2, bevel: 0, face: white }), 1.1);
  // on the bank's upper face (its local +y, uphill is local −z), just above its middle
  word.rotation.set(-Math.PI / 2, 0, 0);
  word.position.set(0, 13 + 2.5, 26);
  far.bank.add(word);
  textOn(word, far.bank, { inset: 10 });
  word.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  // the near side's outer wall carries the real crest and OLD TRAFFORD (seen from outside, toward +z)
  const facade = rbox(560, 150, 20, 6, brick()); facade.position.set(0, 210, STADIUM.d / 2 - 20 + 10); facade.name = "near facade";
  group.add(facade);
  const crest = new THREE.Mesh(new THREE.PlaneGeometry(118, 120), printMat("crest", { alphaTest: 0.5, emissive: 0.15, rough: 0.5 }));
  crest.position.set(-200, 210, STADIUM.d / 2 - 20 + 20.6);
  crest.userData.print = "the Manchester United crest (assets/brand/crest.png) on Old Trafford's outer wall";
  group.add(crest);
  const name = litPlate(["OLD TRAFFORD"], { size: 46, color: K.white, depth: 18 });
  name.group.position.set(70, 210, STADIUM.d / 2 - 20 + 20 + 9);
  group.add(name.group);
  return {
    group, size: { w: STADIUM.w, d: STADIUM.d, h: STADIUM.h },
    lights: (v: number) => { for (const m of lights) setLit(m, v, 0.25); },
  };
};
