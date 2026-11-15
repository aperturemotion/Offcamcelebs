// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE HOOK IN 3-D (035) — "The headlines said one Powerball ticket won 847 million dollars. The winner will never take home
// that number." On the dark ground a store-window LOTTERY JACKPOT SIGN, modelled on the indoor LED jackpot displays retailers
// stand in their windows and on their counters (a 30-inch-class cabinet: an extruded aluminium front frame with rounded
// corners and corner screws over a powder-coated steel back shell; a backlit printed header strip; a row of big red
// 7-segment LED digit modules on a black board behind a smoked acrylic window, a dedicated "$" module and two comma
// modules; a power inlet on the back and its cord) on a TRUNNION STAND (two square-tube uprights welded to flat feet with
// rubber pads, a round crossbar, the cabinet hung between the uprights on two threaded studs clamped by star knobs).
//   · it DROPS in under gravity (the set drives drop / sq: a fall, an impact compression, a small rebound), lands on its
//     feet, and because the cabinet hangs on its two studs it SWINGS on them, a damped pendulum, and settles;
//   · its own display works: every segment is its own diffuser that lights (a red emissive, a halo on the acrylic, a red
//     spill on the floor) as the set says, segment by segment, as a real module powers up; the header strip is backlit;
//   · its power cord runs from the inlet down behind the cabinet and away along the floor into the dark.
// Units are the layer's px (y up from the floor, z toward the viewer, x centred on the sign).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, roundRect, slabOf, type Model } from "../stage";
import { rbox, rad, fitFont, track, col, hash } from "../kit029";

export type HookGeo = { floor: number; cx: number; z: number };
/** drop: height above rest (px); sq: impact compression; yaw (deg); swing: the cabinet's turn on its studs (rad, + tips its
 *  top toward the viewer); seg: each segment's light (SEGS order, 0 off … 1 lit, > 1 a surge); head: the header's backlight
 *  0 … 1; dust: frames since the impact (< 0 none) */
export type HookP = { drop: number; sq: number; yaw: number; swing: number; seg: number[]; head: number; dust: number };

// ── the cabinet (its own coordinates: centre at 0, front face of the frame at z = CD/2) ──
export const CW = 880, CH = 280, CD = 64;
const FR_D = 16;                                   // the frame's depth
const BZ = 26, HEAD_T = CH / 2 - 14, HEAD_B = HEAD_T - 64, LED_T = HEAD_B - 12, LED_B = -CH / 2 + 16;
const OPEN_W = CW - 2 * BZ;                        // both openings' width (828)
// ── the stand ──
const CAB_LIFT = 236;                              // the cabinet's bottom above the floor
const CAB_C = CAB_LIFT + CH / 2;                   // its centre (290)
export const PIV = CAB_C + 18;                     // the studs' axis (above the centre: it hangs, a pendulum)
const UP_X = CW / 2 + 6 + 13;                      // the uprights' centre x (459)
const UP_W = 26, FOOT_T = 12, PAD_H = 6, FOOT_L = 300;
const UP_TOP = PIV + 22;
/** the sign's height, floor to the cabinet's top (px) */
export const SIGN_H = CAB_LIFT + CH;
/** the glyphs' band in the cabinet's coordinates (top, bottom) */
const MOD_H = 146, GLYPH_H = 118, GLYPH_W = 52, SEG_T = 13, SEG_GAP = 2.2, SLANT = Math.tan(rad(8));
const MOD_TOP = LED_T - 14;
const GLYPH_C = MOD_TOP - MOD_H / 2;
/** the glyph row's top and bottom, as heights above the floor at rest */
export const GLYPH_TOP = CAB_C + GLYPH_C + GLYPH_H / 2, GLYPH_BOT = CAB_C + GLYPH_C - GLYPH_H / 2;
/** the header strip's band, heights above the floor */
export const HEAD_TOP = CAB_C + HEAD_T, HEAD_BOT = CAB_C + HEAD_B;

// ── the display: twelve cells, the figure each shows ──
export const CELLS = ["$", "8", "4", "7", ",", "0", "0", "0", ",", "0", "0", "0"] as const;
const CELL_W = (c: string) => (c === "," ? 26 : 72);
const CELL_GAP = 4;
const cellX = (() => {
  const tot = CELLS.reduce((a, c) => a + CELL_W(c), 0) + CELL_GAP * (CELLS.length - 1);
  const xs: number[] = [];
  let x = -tot / 2;
  for (const c of CELLS) { xs.push(x + CELL_W(c) / 2); x += CELL_W(c) + CELL_GAP; }
  return xs;
})();
/** the glyph row's right edge (cabinet x) */
export const GLYPH_RIGHT = cellX[cellX.length - 1] + GLYPH_W / 2 + GLYPH_H * SLANT / 2;
const DIGIT: Record<string, string> = { "0": "abcdef", "4": "bcfg", "7": "abc", "8": "abcdefg" };
/** every segment of the display, in reading order (cell, then a … g); the ones the figure lights are `lit` */
export const SEGS: { cell: number; s: string; lit: boolean }[] = (() => {
  const out: { cell: number; s: string; lit: boolean }[] = [];
  CELLS.forEach((c, i) => {
    if (c === ",") { out.push({ cell: i, s: "dot", lit: true }); return; }
    const on = c === "$" ? "afgcdij" : DIGIT[c];
    for (const s of c === "$" ? "afgcdbeij" : "abcdefg") out.push({ cell: i, s, lit: on.includes(s) });
  });
  return out;
})();

// ══ helpers ═══════════════════════════════════════════════════════════════════════════════════════
const canvasOf = (w: number, h: number) => { const c = document.createElement("canvas"); c.width = w; c.height = h; return { c, g: c.getContext("2d")! }; };
const texOf = (c: HTMLCanvasElement, srgb: boolean) => {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8; t.needsUpdate = true;
  return t;
};
let brushT: THREE.Texture | null = null;
/** a fine brushing (roughness streaks along u): extruded aluminium */
const brushTex = () => {
  if (brushT) return brushT;
  const { c, g } = canvasOf(512, 512);
  g.fillStyle = "rgb(110,110,110)"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 1100; i++) {
    const v = 70 + Math.round(90 * hash(i, 20, 5));
    g.fillStyle = `rgba(${v},${v},${v},0.5)`;
    g.fillRect(hash(i, 21, 5) * 512 - 80, hash(i, 22, 5) * 512, 80 + 380 * hash(i, 23, 5), 0.5 + hash(i, 24, 5));
  }
  brushT = texOf(c, false);
  brushT.wrapS = brushT.wrapT = THREE.RepeatWrapping;
  return brushT;
};
let softT: THREE.Texture | null = null;
const softTex = () => {
  if (softT) return softT;
  const { c, g } = canvasOf(256, 256);
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.4, "#b0b0b0"); gr.addColorStop(0.75, "#3a3a3a"); gr.addColorStop(1, "#000");
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  softT = texOf(c, false);
  return softT;
};
const footTex = (soft: number) => {
  const { c, g } = canvasOf(256, 256);
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = `blur(${Math.round(soft * 128)}px)`;
  g.fillStyle = "#fff";
  const m = soft * 256;
  g.fillRect(m, m, 256 - 2 * m, 256 - 2 * m);
  return texOf(c, false);
};
/** a halo: a soft, slightly elongated glow (the light a lit LED throws on its diffusing acrylic) */
let haloT: THREE.Texture | null = null;
const haloTex = () => {
  if (haloT) return haloT;
  const { c, g } = canvasOf(128, 256);
  g.fillStyle = "#000"; g.fillRect(0, 0, 128, 256);
  g.save(); g.translate(64, 128); g.scale(1, 2);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, 64);
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.35, "#9a9a9a"); gr.addColorStop(0.7, "#2a2a2a"); gr.addColorStop(1, "#000");
  g.fillStyle = gr; g.fillRect(-64, -64, 128, 128);
  g.restore();
  haloT = texOf(c, false);
  return haloT;
};
/** a rounded-rect hole path (x0 < x1, y0 < y1) */
const rrPath = (x0: number, y0: number, x1: number, y1: number, r: number) => {
  const p = new THREE.Path();
  p.moveTo(x0 + r, y0); p.lineTo(x1 - r, y0); p.quadraticCurveTo(x1, y0, x1, y0 + r);
  p.lineTo(x1, y1 - r); p.quadraticCurveTo(x1, y1, x1 - r, y1);
  p.lineTo(x0 + r, y1); p.quadraticCurveTo(x0, y1, x0, y1 - r);
  p.lineTo(x0, y0 + r); p.quadraticCurveTo(x0, y0, x0 + r, y0);
  return p;
};

// ── the 7-segment glyph: hexagonal bars with pointed ends, slanted 8° ──
const hseg = (x0: number, x1: number, y: number, t: number): [number, number][] =>
  [[x0, y], [x0 + t / 2, y + t / 2], [x1 - t / 2, y + t / 2], [x1, y], [x1 - t / 2, y - t / 2], [x0 + t / 2, y - t / 2]];
const vseg = (x: number, y0: number, y1: number, t: number): [number, number][] =>
  [[x, y0], [x + t / 2, y0 + t / 2], [x + t / 2, y1 - t / 2], [x, y1], [x - t / 2, y1 - t / 2], [x - t / 2, y0 + t / 2]];
const segPts = (s: string, dollar: boolean): [number, number][] => {
  const t = SEG_T, g = SEG_GAP;
  // the $ draws its S a little shorter, so its bar can run through it top and bottom
  const sy = dollar ? 0.8 : 1;
  const xL = -GLYPH_W / 2 + t / 2, xR = GLYPH_W / 2 - t / 2;
  const yT = (GLYPH_H / 2 - t / 2) * sy, yB = -(GLYPH_H / 2 - t / 2) * sy;
  switch (s) {
    case "a": return hseg(xL + g, xR - g, yT, t);
    case "g": return hseg(xL + g, xR - g, 0, t);
    case "d": return hseg(xL + g, xR - g, yB, t);
    case "b": return vseg(xR, g, yT - g, t);
    case "c": return vseg(xR, yB + g, -g, t);
    case "e": return vseg(xL, yB + g, -g, t);
    case "f": return vseg(xL, g, yT - g, t);
    case "i": return vseg(0, yT + t / 2 + 1.5, GLYPH_H / 2 + 3, t * 0.62);
    case "j": return vseg(0, -GLYPH_H / 2 - 3, yB - t / 2 - 1.5, t * 0.62);
    default: { // the comma: a square dot on the baseline and its tail
      const y = -(GLYPH_H / 2 - t / 2);
      return [[-t / 2, y + t / 2], [t / 2, y + t / 2], [t / 2, y - t / 2], [-1, y - t / 2 - 13], [-t / 2 - 2, y - t / 2 - 12], [-t / 2 + 1, y - t / 2]];
    }
  }
};
const segShape = (s: string, dollar: boolean) => {
  const dx = s === "dot" ? 7 : 0;   // the comma leans as the digits do: its dot is set right so its tail stays in its cell
  const pts = segPts(s, dollar).map(([x, y]) => new THREE.Vector2(x + y * SLANT + dx, y));
  return new THREE.Shape(pts);
};

export const hookModel = (g: HookGeo) => (): Model<HookP> => {
  const root = new THREE.Group();
  const FY = -g.floor;
  const yawG = new THREE.Group();
  yawG.position.set(g.cx, FY, g.z);
  root.add(yawG);
  const sign = new THREE.Group();
  yawG.add(sign);

  // ── materials ──
  const alu = new THREE.MeshPhysicalMaterial({ color: col("#C9CDD3"), metalness: 1, roughness: 0.4, roughnessMap: brushTex(), envMapIntensity: 1 });
    const shellM = new THREE.MeshPhysicalMaterial({ color: col("#34373C"), metalness: 0.35, roughness: 0.55, clearcoat: 0.2, clearcoatRoughness: 0.5, envMapIntensity: 0.6 });
  const standM = new THREE.MeshPhysicalMaterial({ color: col("#5B6068"), metalness: 0.45, roughness: 0.45, clearcoat: 0.25, clearcoatRoughness: 0.4, envMapIntensity: 0.75 });
  const rubber = new THREE.MeshStandardMaterial({ color: col("#1C1B1A"), roughness: 0.88, metalness: 0 });
  const blackPlastic = new THREE.MeshPhysicalMaterial({ color: col("#141416"), roughness: 0.42, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 0.6 });
  const steelM = new THREE.MeshPhysicalMaterial({ color: col("#D9DDE2"), metalness: 1, roughness: 0.25, envMapIntensity: 1.05 });
  const boardM = new THREE.MeshStandardMaterial({ color: col("#0B0B0C"), roughness: 0.7, metalness: 0 });

  // ══ THE STAND (one welded object) ══
  const stand = new THREE.Group();
  stand.userData.obj = "stand";
  sign.add(stand);
  for (const sx of [-1, 1]) {
    const x = sx * UP_X;
    for (const z of [-FOOT_L / 2 + 26, FOOT_L / 2 - 26]) {
      const pad = mesh(new THREE.CylinderGeometry(15, 16, PAD_H, 28), rubber);
      pad.position.set(x, PAD_H / 2, z);
      stand.add(pad);
    }
    const foot = rbox(40, FOOT_T, FOOT_L, 6, standM, 3);
    foot.position.set(x, PAD_H + FOOT_T / 2, FOOT_L / 2);
    stand.add(foot);
    const up = rbox(UP_W, UP_TOP - PAD_H - FOOT_T, UP_W, 5, standM, 3);
    up.position.set(x, (UP_TOP + PAD_H + FOOT_T) / 2, UP_W / 2);
    stand.add(up);
  }
  // the crossbar between the uprights, low under the cabinet
  const bar = mesh(new THREE.CylinderGeometry(9, 9, 2 * (UP_X - UP_W / 2) - 0.6, 24), standM);
  bar.rotation.z = Math.PI / 2; bar.position.set(0, 74, 0);
  stand.add(bar);

  // ══ THE CABINET, hung on its studs: the pivot group turns (the swing) ══
  const pivot = new THREE.Group();
  pivot.position.y = PIV;
  sign.add(pivot);
  const cab = new THREE.Group();
  cab.userData.obj = "sign";
  cab.position.y = CAB_C - PIV;
  pivot.add(cab);
  // the back shell (powder-coated steel)
  const shell = rbox(CW - 6, CH - 6, CD - FR_D, 8, shellM, 3);
  shell.position.z = CD / 2 - FR_D;
  cab.add(shell);
  // the front frame: an extruded aluminium surround, its two openings cut through it
  const frameShape = roundRect(CW, CH, 24);
  frameShape.holes.push(rrPath(-OPEN_W / 2, HEAD_B, OPEN_W / 2, HEAD_T, 7));
  frameShape.holes.push(rrPath(-OPEN_W / 2, LED_B, OPEN_W / 2, LED_T, 7));
  const frame = mesh(slabOf(frameShape, FR_D, 3, 12), alu);
  frame.position.z = CD / 2;
  cab.add(frame);
  // its corner screws (countersunk, cross-headed)
  for (const [x, y] of [[-(CW / 2 - 13), CH / 2 - 7.5], [CW / 2 - 13, CH / 2 - 7.5], [-(CW / 2 - 13), -(CH / 2 - 8)], [CW / 2 - 13, -(CH / 2 - 8)]] as const) {
    const sc = mesh(lathe([[0, 0], [4.6, 0], [4.3, 0.9], [3.1, 1.7], [0, 2]], 24), steelM);
    sc.rotation.x = Math.PI / 2; sc.position.set(x, y, CD / 2 + 0.05);
    cab.add(sc);
    for (const a of [0, Math.PI / 2]) {
      const sl = mesh(new THREE.PlaneGeometry(6.4, 1.1), new THREE.MeshBasicMaterial({ color: 0x1a1a1a }), false, false);
      sl.rotation.z = a + 0.4; sl.position.set(x, y, CD / 2 + 2.08);
      cab.add(sl);
    }
  }
  // the header strip: printed, backlit white acrylic set 4 px into its opening
  const HW = OPEN_W - 1, HH = HEAD_T - HEAD_B - 1;
  const paintHead = () => paintTex("hk35-head-v2", HW, HH, (c) => {
    const gr = c.createLinearGradient(0, 0, 0, HH);
    gr.addColorStop(0, "#F3F1EC"); gr.addColorStop(0.5, "#FBFAF7"); gr.addColorStop(1, "#EFEDE7");
    c.fillStyle = gr; c.fillRect(0, 0, HW, HH);
    c.fillStyle = "#121012"; c.textAlign = "center"; c.textBaseline = "middle";
    track(c, 9);
    fitFont(c, 800, 44, "POWERBALL", HW - 120);
    c.fillText("POWERBALL", HW / 2 + 4.5, HH / 2 + 2);
    track(c, 0);
  }, 3);
  const headTex = paintHead();
  const headFace = new THREE.MeshStandardMaterial({ map: headTex, emissiveMap: headTex, emissive: col("#FFF6E8"), emissiveIntensity: 0, roughness: 0.3, metalness: 0, envMapIntensity: 0.5 });
  const acrylW = new THREE.MeshStandardMaterial({ color: col("#ECEAE5"), roughness: 0.3, metalness: 0, envMapIntensity: 0.5 });
  const head = rbox(HW, HH, 4, 0.8, { px: acrylW, nx: acrylW, top: acrylW, bottom: acrylW, front: headFace, back: acrylW }, 1);
  head.position.set(0, (HEAD_T + HEAD_B) / 2, CD / 2 - 4);
  cab.add(head);
  // the LED board: the black panel behind the modules, set in the LED opening
  const board = rbox(OPEN_W - 1, LED_T - LED_B - 1, 1.5, 0.5, boardM, 1);
  board.position.set(0, (LED_T + LED_B) / 2, CD / 2 - FR_D + 1.6);
  cab.add(board);
  // the modules: black bodies, each segment its own diffuser
  const MOD_Z = CD / 2 - FR_D + 7.5;             // the modules' front (their back sits on the board)
  const segMats: THREE.MeshStandardMaterial[] = [];
  const cellSegs: number[][] = CELLS.map(() => []);
  const offCol = col("#2E2220");
  CELLS.forEach((c, i) => {
    const body = rbox(CELL_W(c) - 0.5, MOD_H, 5.6, 1.6, blackPlastic, 2);
    body.position.set(cellX[i], MOD_TOP - MOD_H / 2, MOD_Z);
    cab.add(body);
  });
  SEGS.forEach((sg, k) => {
    const m = new THREE.MeshStandardMaterial({ color: offCol.clone(), emissive: col("#FF1A0C"), emissiveIntensity: 0, roughness: 0.55, metalness: 0, envMapIntensity: 0.4 });
    segMats.push(m);
    cellSegs[sg.cell].push(k);
    const s = mesh(new THREE.ShapeGeometry(segShape(sg.s, CELLS[sg.cell] === "$"), 2), m, false, true);
    s.position.set(cellX[sg.cell], GLYPH_C, MOD_Z + 0.3);
    cab.add(s);
  });
  // the smoked acrylic window, 5 px behind the frame's face, and a glint across it
  const acr = mesh(new THREE.PlaneGeometry(OPEN_W, LED_T - LED_B), new THREE.MeshPhysicalMaterial({
    color: col("#1A1212"), roughness: 0.05, metalness: 0, transparent: true, opacity: 0.3, depthWrite: false, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.4 }), false, false);
  acr.position.set(0, (LED_T + LED_B) / 2, CD / 2 - 5);
  acr.renderOrder = 2;
  cab.add(acr);
  const glintT = (() => {
    const { c, g: gg } = canvasOf(512, 128);
    gg.fillStyle = "#000"; gg.fillRect(0, 0, 512, 128);
    for (const [x, w, a] of [[150, 60, 0.9], [232, 18, 0.55], [390, 40, 0.35]] as const) {
      const gr = gg.createLinearGradient(x - w, 0, x + w, 0);
      gr.addColorStop(0, "#000"); gr.addColorStop(0.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, "#000");
      gg.save(); gg.translate(x, 64); gg.transform(1, 0, -0.7, 1, 0, 0); gg.fillStyle = gr; gg.fillRect(-w - 80, -80, 2 * w + 160, 160); gg.restore();
    }
    return texOf(c, false);
  })();
  const glint = mesh(new THREE.PlaneGeometry(OPEN_W, LED_T - LED_B), new THREE.MeshBasicMaterial({ color: 0xffffff, alphaMap: glintT, transparent: true, opacity: 0.075, depthWrite: false, toneMapped: false }), false, false);
  glint.position.set(0, (LED_T + LED_B) / 2, CD / 2 - 4.9);
  glint.renderOrder = 4;
  cab.add(glint);
  // each cell's halo on the acrylic (additive: the lit segments' light diffused by it)
  const halos = CELLS.map((c, i) => {
    const m = new THREE.MeshBasicMaterial({ color: col("#FF3A1E"), alphaMap: haloTex(), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false });
    const p = mesh(new THREE.PlaneGeometry(CELL_W(c) + 70, MOD_H + 40), m, false, false);
    p.position.set(cellX[i], GLYPH_C, CD / 2 - 5.2);
    p.renderOrder = 3;
    cab.add(p);
    return m;
  });
  // the back: the power inlet (a moulded housing), its cord's strain relief; a blank rating plate
  const SOCK = { x: 300, y: -100 };
  const inlet = rbox(44, 28, 10, 3, blackPlastic, 2);
  inlet.position.set(SOCK.x, SOCK.y, -CD / 2 - 0.1);     // its front face on the shell's back
  cab.add(inlet);
  const relief = mesh(lathe([[0, 0], [8, 0], [8, 3], [6.5, 8], [5.6, 14], [0, 14]], 24), blackPlastic);
  relief.rotation.x = -Math.PI / 2;                        // its axis (+y) → −z
  relief.position.set(SOCK.x, SOCK.y, -CD / 2 - 10);
  cab.add(relief);
  // vent slots along the top
  const ventM = new THREE.MeshStandardMaterial({ color: col("#0C0C0D"), roughness: 0.9 });
  for (let i = 0; i < 18; i++) {
    const v = mesh(new THREE.PlaneGeometry(26, 5), ventM, false, false);
    v.rotation.x = -Math.PI / 2;
    v.position.set(-300 + i * 35.3, CH / 2 - 3 + 0.15, (CD / 2 - FR_D) / 2 - (CD / 2) / 2 - 6);
    cab.add(v);
  }

  // ══ THE STUDS AND STAR KNOBS (each its own object: the stud is built through its upright) ══
  const knobShape = (() => {
    const s = new THREE.Shape();
    const N = 100;
    for (let i = 0; i <= N; i++) {
      const a = (i / N) * Math.PI * 2, r = 21 + 5 * Math.cos(5 * a);
      if (i === 0) s.moveTo(r * Math.cos(a), r * Math.sin(a)); else s.lineTo(r * Math.cos(a), r * Math.sin(a));
    }
    return s;
  })();
  const knobG = new THREE.ExtrudeGeometry(knobShape, { depth: 14, bevelEnabled: true, bevelThickness: 2.5, bevelSize: 2.5, bevelOffset: -2.5, bevelSegments: 3, curveSegments: 4 });
  knobG.translate(0, 0, 2.5);                       // its back face at z 0 … front at 19
  for (const sx of [-1, 1]) {
    const k = new THREE.Group();
    k.userData.obj = sx < 0 ? "knob L" : "knob R";
    k.userData.pierces = ["stand"];
    pivot.add(k);
    const x0 = CW / 2 - 3 + 0.3;                    // the shell's side (437) + 0.3
    const xU = UP_X + UP_W / 2;                      // the upright's outer face
    const stud = mesh(new THREE.CylinderGeometry(5, 5, xU + 14 - x0, 20), steelM);
    stud.rotation.z = Math.PI / 2; stud.position.set(sx * (x0 + xU + 14) / 2, 0, 0);
    k.add(stud);
    const washer = mesh(lathe([[5.2, 0], [15, 0], [15.5, 0.6], [15.5, 2], [15, 2.6], [5.2, 2.6], [5.2, 0]], 32), steelM);
    washer.rotation.z = -sx * Math.PI / 2;           // its axis (+y) → ±x
    washer.position.set(sx * (xU + 0.3), 0, 0);
    k.add(washer);
    const kn = mesh(knobG, blackPlastic);
    kn.rotation.y = sx * Math.PI / 2;               // its extrusion (+z) → ±x
    kn.position.set(sx * (xU + 3.1), 0, 0);
    k.add(kn);
    const cap = mesh(lathe([[0, 0], [8, 0], [8, 1.5], [6.5, 3], [0, 3.4]], 24), steelM);
    cap.rotation.z = -sx * Math.PI / 2;
    cap.position.set(sx * (xU + 3.1 + 19), 0, 0);
    k.add(cap);
  }

  // ══ THE CORD: from the inlet down behind the cabinet, then away along the floor into the dark ══
  const cordM = new THREE.MeshPhysicalMaterial({ color: col("#141313"), roughness: 0.5, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.4, envMapIntensity: 0.5, transparent: true });
  // the far run fades into the dark ground as distance does (alpha by its depth)
  cordM.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying float vCordZ;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvCordZ = position.z;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying float vCordZ;")
      .replace("#include <dithering_fragment>", "#include <dithering_fragment>\ngl_FragColor.a *= 1.0 - smoothstep( 380.0, 900.0, -vCordZ );");
  };
  cordM.customProgramCacheKey = () => "hk35-cord";
  const cord = new THREE.Mesh(new THREE.BufferGeometry(), cordM);
  cord.castShadow = true; cord.receiveShadow = true;
  cord.userData.obj = "cord";
  cord.userData.pierces = ["sign"];
  yawG.add(cord);
  const CR = 4.5;
  // its resting path (sign coordinates), with how much of a lift each point takes when the sign is up in the air
  const REST: [number, number, number, number][] = [
    [0, 0, 0, 1], [0, 0, 0, 1],                                   // the inlet end and 16 px back (set each frame)
    [303, CAB_LIFT * 0.72, -92, 0.82], [306, CAB_LIFT * 0.32, -106, 0.5], [309, 16, -118, 0.16], [312, CR + 0.4, -146, 0],
    [318, CR + 0.4, -230, 0], [330, CR + 0.4, -420, 0], [350, CR + 0.4, -720, 0], [375, CR + 0.4, -1100, 0],
  ];

  // ══ THE FLOOR, the contact shadows, the dust, the display's red spill ══
  const floor = makeFloor({ y: g.floor, x0: g.cx - 1000, x1: g.cx + 1000, z0: -900, z1: 700, reflect: 0.14, shadow: 0.55, fadeC: [g.cx, g.z], fadeR: [820, 470] });
  root.add(floor);
  const catcher = floor.children.map((o) => (o as THREE.Mesh).material).find((m) => m instanceof THREE.ShadowMaterial) as THREE.ShadowMaterial;
  const catcher0 = catcher.opacity;
  const shadows = new THREE.Group();
  shadows.userData.isFloor = true; shadows.userData.noBounds = true;
  shadows.position.y = 0.3;
  yawG.add(shadows);
  const blob = (tex: THREE.Texture, w: number, d: number, x: number, z: number, color = 0x000000, add = false) => {
    const m = new THREE.MeshBasicMaterial({ color, alphaMap: tex, transparent: true, depthWrite: false, toneMapped: false, opacity: 0, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
    p.rotation.x = -Math.PI / 2; p.position.set(x, 0, z); p.renderOrder = 1.5;
    shadows.add(p);
    return p;
  };
  const pen = blob(softTex(), 1250, 560, 0, -10);
  const feetU = [-1, 1].map((s) => blob(footTex(0.22), 74, FOOT_L + 40, s * UP_X, 0));
  const pads = [-1, 1].flatMap((s) => [-FOOT_L / 2 + 26, FOOT_L / 2 - 26].map((z) => blob(softTex(), 52, 52, s * UP_X, z)));
  const spill = blob(softTex(), 980, 420, 0, 190, 0xff2a14, true);
  // a faint red light from the display on what stands in front of it (the stand's feet, the knobs)
  const red = new THREE.PointLight(0xff2a18, 0, 900, 0);
  red.position.set(0, CAB_C + GLYPH_C, 140);
  sign.add(red);
  const dustT = softTex();
  const motes = Array.from({ length: 24 }, (_, i) => {
    const m = new THREE.MeshBasicMaterial({ color: col("#7d6d5c"), alphaMap: dustT, transparent: true, depthWrite: false, opacity: 0, toneMapped: false });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), m);
    p.renderOrder = 3;
    shadows.add(p);
    const side = i % 2 ? 1 : -1, u = hash(i, 31, 7) * 2 - 1;
    const sz = u * (FOOT_L / 2 - 10), dz = 0.6 * u + (u > 0 ? 0.4 : -0.4);
    return { p, m, sx: side * UP_X, sz, dx: side * (0.3 + 0.7 * hash(i, 37, 7)), dz, v: 30 + 60 * hash(i, 32, 7), s0: 22 + 26 * hash(i, 33, 7), rise: 5 + 16 * hash(i, 34, 7), a: 0.035 + 0.045 * hash(i, 35, 7), lag: 1.4 * hash(i, 36, 7) };
  });

  const v3 = new THREE.Vector3();
  let lastCordKey = "";
  return {
    root,
    update: (p) => {
      paintHead();   // cached: repainted once if it was first painted before the faces loaded
      const yaw = rad(p.yaw);
      yawG.rotation.y = yaw;
      sign.position.y = p.drop;
      sign.scale.set(1 + p.sq * 0.4, 1 - p.sq, 1 + p.sq * 0.4);
      pivot.rotation.x = -p.swing;
      // the display
      const lit = p.seg.map((v) => Math.max(0, v ?? 0));
      SEGS.forEach((_, k) => {
        const v = lit[k], m = segMats[k];
        m.emissiveIntensity = 1.05 * v;
        m.color.copy(offCol).lerp(col("#5A0C06"), Math.min(1, v));
      });
      let tot = 0;
      cellSegs.forEach((ks, i) => {
        const on = ks.filter((k) => SEGS[k].lit);
        const a = on.length ? on.reduce((s, k) => s + Math.min(1.4, lit[k]), 0) / on.length : 0;
        const frac = on.length / 7;
        halos[i].opacity = 0.42 * a * Math.min(1, 0.45 + frac);
        tot += a;
      });
      const avg = tot / CELLS.length;
      (spill.material as THREE.MeshBasicMaterial).opacity = 0.16 * avg * Math.max(0, 1 - p.drop / 300);
      red.intensity = 0.55 * avg;
      headFace.emissiveIntensity = 0.42 * p.head;
      // the cord: its inlet end rides the cabinet (the drop, the compression, the swing)
      const c = Math.cos(-p.swing), s = Math.sin(-p.swing);
      const local = (x: number, y: number, z: number) => {
        // cabinet → pivot (rotation about x) → sign → (scale, drop)
        const yc = y + (CAB_C - PIV), y2 = yc * c - z * s, z2 = yc * s + z * c;
        v3.set(x, y2 + PIV, z2);
        v3.set(v3.x * sign.scale.x, v3.y * sign.scale.y + p.drop, v3.z * sign.scale.z);
        return v3.clone();
      };
      const a0 = local(SOCK.x, SOCK.y, -CD / 2 - 23.6);
      const a1 = local(SOCK.x, SOCK.y - 8, -CD / 2 - 40);
      const pts = REST.map(([x, y, z, w], i) => i === 0 ? a0 : i === 1 ? a1 : new THREE.Vector3(x, y + p.drop * w, z));
      const key = pts.map((q) => `${q.x.toFixed(2)},${q.y.toFixed(2)},${q.z.toFixed(2)}`).join(";");
      if (key !== lastCordKey) {
        lastCordKey = key;
        const curve = new THREE.CatmullRomCurve3(pts, false, "centripetal");
        cord.geometry.dispose();
        cord.geometry = new THREE.TubeGeometry(curve, 160, CR, 10, false);
      }
      // contact shadows: as it nears the floor the penumbra tightens and darkens and the feet's pools come in
      const h = Math.max(0, p.drop);
      catcher.opacity = catcher0 * Math.max(0, 1 - h / 520) ** 2;
      const near = Math.max(0, 1 - h / 1300);
      const pw = 1 + h / 900;
      pen.scale.set(pw, 1, pw);
      (pen.material as THREE.MeshBasicMaterial).opacity = 0.36 * near * near;
      const u = Math.max(0, 1 - h / 200);
      for (const f of feetU) { f.scale.set(1.2 - 0.2 * u, 1, 1.06 - 0.06 * u); (f.material as THREE.MeshBasicMaterial).opacity = 0.55 * u * u; }
      const fu = Math.max(0, 1 - h / 40);
      for (const pd of pads) { pd.scale.setScalar(1.6 - 0.6 * fu); (pd.material as THREE.MeshBasicMaterial).opacity = 0.7 * fu * fu; }
      for (const d of motes) {
        const t = p.dust - d.lag;
        if (t <= 0 || t > 34) { d.m.opacity = 0; d.p.visible = false; continue; }
        d.p.visible = true;
        const go = 1 - Math.exp(-t / 7);
        d.p.position.set(d.sx + d.dx * d.v * go, 6 + d.rise * go, d.sz + d.dz * d.v * go);
        d.p.rotation.y = -yaw;
        d.p.scale.setScalar(d.s0 * (1 + 1.6 * go));
        d.m.opacity = d.a * Math.min(1, t / 2.5) * Math.max(0, 1 - t / 34) ** 1.4;
      }
    },
  };
};
