// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE FULL BILL IN 3-D — "And that's not the final bill. At the top federal and New Jersey tax rates, we estimate about 190
// million." On the dark ground, a 1950s electric FULL-KEYBOARD LISTING ADDING MACHINE (after the Victor and Burroughs
// full-keyboard machines of the period: a wrinkle-finish two-tone case on rubber feet; a sloped keyboard of eight columns of
// nine keys, 1 at the front to 9 at the back, the columns coloured in their place groups; a long motor bar and the function
// keys on the right; a raised rear housing carrying the printing unit: a black rubber platen with knurled knobs between its
// side plates, the ribbon spools either side, a chrome type guard with a serrated tear bar in front of the print line, and
// the paper roll on its wire arms behind).
//   · keys lock down as an amount is set and are released by the machine's cycle; the motor bar (or a function key) starts
//     the cycle: the case shudders, the line is struck behind the guard, the platen turns one line, and the printed line rises
//     into view above the tear bar;
//   · the tape is a real strip: off the roll, under and round the platen, up past the tear bar, its free end curling back
//     (the roll's set) more as it grows; its print is the machine's own output in a typewriter face, fitted by measurement.
// ★ No label: the tape is the machine's output. The figure is an ESTIMATE (the caption says "we estimate about").
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, type Model } from "../stage";
import { M, rbox, col, hash, wire } from "../kit029";

export type BillGeo = { floor: number; cx: number; z: number };
/** keys: each key's travel (px, KEYS order); adv: the tape's advance in lines (fractional while it moves); printed: how many
 *  lines are struck; shake: the case's shudder (px); spool: the ribbon spools' turn (rad); yaw (deg) */
export type BillP = { keys: number[]; adv: number; printed: number; shake: number; spool: number; yaw: number };

// ── the tape's lines (what the machine prints): amount, symbol; null = a line space ──
export const TAPE: ([string, string] | null)[] = [["363.1", ""], ["37.00", "%"], ["10.75", "%"], null, ["189.7", "*"]];
/** the keyboard: columns c = 0 (right, hundredths) … 7; rows 1 (front) … 9 (back). Function keys by name */
export const FKEYS = ["#", "S", "%", "*", "−", "C", "R", "MB"] as const;
export const KEYS: string[] = [...Array.from({ length: 8 * 9 }, (_, i) => `${Math.floor(i / 9)}:${(i % 9) + 1}`), ...FKEYS];

// ── dimensions (machine-local: y up from the floor, z toward the eye, x centred) ──
const W = 420, ZF = 200, ZB = -200;
const DECK_F = { z: 188, y: 52 }, DECK_B = { z: -24, y: 141 };
const SLOPE = Math.atan2(DECK_B.y - DECK_F.y, DECK_F.z - DECK_B.z);          // the keyboard's rake
const DECK_L = Math.hypot(DECK_F.z - DECK_B.z, DECK_B.y - DECK_F.y);
const HOOD_Y = 198;
const PL = { z: -62, y: 224, r: 18, len: 170 };                              // the platen
export const TW = 120;                                                       // the tape's width
const P = { z: PL.z + PL.r + 0.5, y: PL.y };                                 // the print line: the tape leaves the platen here, upward
const ROLL = { z: -150, r: 34, y: PL.y - PL.r - 0.5 + 0.5 + 34 };             // its bottom meets the tape's run under the platen
const GUARD = { z0: -42.8, z1: -40, top: 236 };
export const PITCH = 22;                                                      // a line feed (px of tape)
export const S0 = 34;                                                         // the leader standing above the print line at the start
const S_MAX = S0 + PITCH * TAPE.length;
const C_MAX = S_MAX + 8;
const CURL = (2 * 1.75) / (S_MAX * S_MAX);                                    // φ(s) = CURL·s²/2: its end at ~100° when all is printed
const KEY_R = 9.2, KEY_PITCH_X = 28, ROW_W = (r: number) => 206 - (r - 1) * 22;   // a key's radius; row r's distance from the deck's back
const COL_X = (c: number) => 46 - c * KEY_PITCH_X;
/** the line's baseline on the tape (from its leading end) when line k was struck */
const lineC = (k: number) => S0 + k * PITCH;

/** where the tape's free end reaches (machine-local y, z) for an advance of `adv` lines: its highest point */
export const tapeTop = (adv: number) => {
  const S = S0 + PITCH * adv;
  let y = P.y, z = P.z, top = y, ztop = z;
  for (let s = 0; s < S; s += 1) { const ph = (CURL * s * s) / 2; y += Math.cos(ph); z -= Math.sin(ph); if (y > top) { top = y; ztop = z; } }
  return { y: top, z: ztop };
};
/** the print's foot on the tape for the camera: the line just above the tear bar */
export const PRINT_AT = { y: P.y + PITCH, z: P.z };
export const KEYB_FRONT = { y: DECK_F.y + 10, z: DECK_F.z };

// ══ TEXTURES ══════════════════════════════════════════════════════════════════════════════════════
const canvasOf = (w: number, h: number, s: number) => {
  const c = document.createElement("canvas");
  c.width = Math.round(w * s); c.height = Math.round(h * s);
  const g = c.getContext("2d")!;
  g.setTransform(s, 0, 0, s, 0, 0);
  return { c, g };
};
const texOf = (c: HTMLCanvasElement, srgb: boolean, rep = false) => {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  if (rep) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true;
  return t;
};
/** the wrinkle finish: a fine crinkle in the bump, and a mottle in the colour */
let wrinkleT: { bump: THREE.Texture } | null = null;
const wrinkle = () => {
  if (wrinkleT) return wrinkleT;
  const N = 512, { c, g } = canvasOf(N, N, 1);
  g.fillStyle = "#808080"; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 9000; i++) {
    const x = hash(i, 1, 3) * N, y = hash(i, 2, 3) * N, l = 2 + 6 * hash(i, 3, 3), a = hash(i, 4, 3) * 6.28;
    g.strokeStyle = hash(i, 5, 3) > 0.5 ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.22)"; g.lineWidth = 0.8;
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a + 1) * l, y + Math.sin(a + 1) * l, x + Math.cos(a) * l * 1.6, y + Math.sin(a) * l * 1.6); g.stroke();
  }
  wrinkleT = { bump: texOf(c, false, true) };
  return wrinkleT;
};
/** a key's legend: a digit or a sign, centred on its cap, fitted to it by measurement */
const legendTex = (label: string, dark: boolean) => paintTex(`bl-key:${label}:${dark ? 1 : 0}`, 64, 64, (g) => {
  const base = dark ? "#2C4536" : "#ECE5D2";
  const gr = g.createRadialGradient(28, 26, 4, 32, 32, 34);
  gr.addColorStop(0, dark ? "#3A5A46" : "#F8F3E4"); gr.addColorStop(1, base);
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  g.fillStyle = dark ? "#EDE6D3" : "#1A1612"; g.textAlign = "center"; g.textBaseline = "middle";
  let s = label.length > 1 ? 30 : 40;
  g.font = `700 ${s}px "Archivo", sans-serif`;
  while (s > 8 && g.measureText(label).width > 40) { s *= 0.95; g.font = `700 ${s}px "Archivo", sans-serif`; }
  g.fillText(label, 32, 34);
}, 4);
/** the paper roll's end: the wound turns of paper round its card core */
const rollEndTex = () => paintTex("bl-rollend", 128, 128, (g) => {
  g.fillStyle = "#EFEBE0"; g.fillRect(0, 0, 128, 128);
  for (let r = 14; r < 64; r += 0.9) {
    g.strokeStyle = `rgba(${hash(r, 1, 1) > 0.5 ? "120,110,95" : "255,255,250"},${0.12 + 0.12 * hash(r, 2, 1)})`; g.lineWidth = 0.5;
    g.beginPath(); g.arc(64, 64, r, 0, 6.283); g.stroke();
  }
  g.fillStyle = "#B08A5A"; g.beginPath(); g.arc(64, 64, 14, 0, 6.283); g.fill();
  g.fillStyle = "#3A2A1C"; g.beginPath(); g.arc(64, 64, 9, 0, 6.283); g.fill();
}, 3);
/** the tape with its first n lines struck: paper with a faint fibre, a torn leading edge, the lines in a ribbon-inked
 *  typewriter face, amounts right-aligned in their column and the symbol in its own, every line fitted by measurement */
const MONO = (s: number) => `700 ${s}px "Courier New", "Liberation Mono", "Nimbus Mono PS", monospace`;
const tapeTex = (n: number) => paintTex(`bl-tape-v2:${n}`, TW, C_MAX, (g) => {
  g.clearRect(0, 0, TW, C_MAX);
  // the torn edge: the paper starts below a ragged zigzag
  g.beginPath(); g.moveTo(0, 7);
  for (let x = 0; x <= TW; x += 4) g.lineTo(x, 2 + 5 * ((x / 4) % 2) + 1.2 * hash(x, 7, 1));
  g.lineTo(TW, C_MAX); g.lineTo(0, C_MAX); g.closePath();
  g.fillStyle = "#F3F0E6"; g.fill();
  g.save(); g.clip();
  for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(${hash(i, 3, 2) > 0.5 ? "190,180,160" : "255,255,255"},${0.10 + 0.1 * hash(i, 4, 2)})`; g.fillRect(hash(i, 5, 2) * TW, hash(i, 6, 2) * C_MAX, 0.5 + 3 * hash(i, 8, 2), 0.4); }
  // the lines: one size for all, the widest amount fitted to the amount column
  const colR = TW - 30, symX = TW - 18;
  let size = 17;
  const widest = TAPE.filter(Boolean).map((l) => l![0]).reduce((a, b) => (a.length >= b.length ? a : b));
  g.font = MONO(size);
  while (size > 6 && g.measureText(widest).width > colR - 14) { size *= 0.97; g.font = MONO(size); }
  for (let k = 0; k < Math.min(n, TAPE.length); k++) {
    const L = TAPE[k];
    if (!L) continue;
    const y = lineC(k);
    // the ribbon's ink: a dense pass and a lighter, slightly offset one (the type's bite), with a little unevenness
    g.textBaseline = "middle";
    g.font = MONO(size);
    for (const [dx, dy, a] of [[0, 0, 0.86], [0.35, 0.25, 0.3]] as const) {
      g.fillStyle = `rgba(22,20,24,${a})`;
      g.textAlign = "right"; g.fillText(L[0], colR + dx, y + dy);
      if (L[1]) { g.textAlign = "left"; g.fillText(L[1], symX + dx, y + dy); }
    }
    for (let i = 0; i < 40; i++) { g.fillStyle = "rgba(243,240,230,0.5)"; g.fillRect(colR - 70 + 90 * hash(k, i, 9), y - size * 0.4 + size * 0.8 * hash(k, i, 10), 0.8, 0.8); }
  }
  g.restore();
}, 4);

// ══ THE MODEL ═════════════════════════════════════════════════════════════════════════════════════
export const billModel = (geo: BillGeo) => (): Model<BillP> => {
  const root = new THREE.Group();
  const mc = new THREE.Group();
  mc.position.set(geo.cx, -geo.floor, geo.z);
  root.add(mc);
  const body = new THREE.Group();
  body.userData.obj = "adder";
  mc.add(body);
  const wb = wrinkle().bump;
  const caseM = new THREE.MeshPhysicalMaterial({ color: col("#9DA79C"), roughness: 0.62, metalness: 0.08, bumpMap: wb, bumpScale: 0.5, clearcoat: 0.15, clearcoatRoughness: 0.6, envMapIntensity: 0.6 });
  const baseM = new THREE.MeshPhysicalMaterial({ color: col("#4B524C"), roughness: 0.6, metalness: 0.1, bumpMap: wb, bumpScale: 0.4, envMapIntensity: 0.6 });
  const chrome = M.chrome();
  const steel = M.steel();
  const rubber = M.rubber("#151312");
  const bakelite = new THREE.MeshPhysicalMaterial({ color: col("#141110"), roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.2, envMapIntensity: 0.7 });
  const ivoryInlay = new THREE.MeshPhysicalMaterial({ color: col("#D9D0B8"), roughness: 0.4, clearcoat: 0.4, envMapIntensity: 0.5 });
  const darkIn = new THREE.MeshStandardMaterial({ color: col("#0B0A09"), roughness: 0.95 });
  const paperM = new THREE.MeshStandardMaterial({ color: col("#F3F0E6"), roughness: 0.92, envMapIntensity: 0.35, side: THREE.DoubleSide });

  /** a shape drawn in (z, y), extruded across x from x0 to x1 */
  const extX = (s: THREE.Shape, x0: number, x1: number, bv: number, curve = 16) => {
    const g = new THREE.ExtrudeGeometry(s, { depth: Math.max(0.1, x1 - x0 - 2 * bv), bevelEnabled: bv > 0, bevelThickness: bv, bevelSize: bv, bevelOffset: -bv, bevelSegments: 3, curveSegments: curve });
    g.translate(0, 0, bv); g.rotateY(-Math.PI / 2); g.translate(x1, 0, 0);
    return g;
  };

  // ══ THE CASE ══
  for (const [x, z] of [[-180, 170], [180, 170], [-180, -170], [180, -170]] as const) {
    const ft = mesh(lathe([[16, 0], [16, 2], [13, 6], [11, 8]], 32), rubber);
    ft.position.set(x, 0, z); body.add(ft);
    const cap = mesh(new THREE.CircleGeometry(16, 32).rotateX(Math.PI / 2), rubber); cap.position.set(x, 0, z); body.add(cap);
  }
  const plinth = rbox(W, 12, ZF - ZB, 4, baseM, 3);
  plinth.position.set(0, 8 + 6, ZF); body.add(plinth);
  // the cheeks: the keyboard's two side walls, their top edge a rim just over the deck
  {
    const s = new THREE.Shape();
    s.moveTo(ZF, 19); s.lineTo(ZF, 52); s.quadraticCurveTo(ZF, 58, DECK_F.z, 59); s.lineTo(DECK_B.z, 148); s.lineTo(DECK_B.z, 19); s.lineTo(ZF, 19);
    for (const [x0, x1] of [[-W / 2, -W / 2 + 16], [W / 2 - 16, W / 2]] as const) body.add(mesh(extX(s, x0, x1, 3), caseM));
  }
  // the front panel under the deck's front edge, a chrome strip along it
  const front = rbox(W - 32, DECK_F.y - 19, 14, 2, caseM, 2);
  front.position.set(0, 19 + (DECK_F.y - 19) / 2, ZF); body.add(front);
  const trim = rbox(W - 34, 3, 1.4, 0.6, chrome, 2);
  trim.position.set(0, 44, ZF + 1.4); body.add(trim);
  // the hood: the rear housing that carries the printing unit
  {
    const s = new THREE.Shape();
    s.moveTo(DECK_B.z, 19); s.lineTo(DECK_B.z, HOOD_Y - 12); s.quadraticCurveTo(DECK_B.z, HOOD_Y, DECK_B.z - 12, HOOD_Y);
    s.lineTo(ZB + 8, HOOD_Y); s.quadraticCurveTo(ZB, HOOD_Y, ZB, HOOD_Y - 8); s.lineTo(ZB, 19); s.lineTo(DECK_B.z, 19);
    body.add(mesh(extX(s, -W / 2, W / 2, 4, 12), caseM));
    // a chrome strip along the hood's front, where it meets the keyboard
    const st = rbox(W - 34, 3, 1.2, 0.5, chrome, 2);
    st.position.set(0, DECK_B.y + 14, DECK_B.z + 1.2); body.add(st);
    // the vent louvres along the hood's back
    for (let i = 0; i < 9; i++) {
      const lv = rbox(26, 3, 9, 1.2, baseM, 2);
      lv.position.set(-120 + i * 30, HOOD_Y + 0.6, ZB + 36); body.add(lv);
    }
  }
  // the interior under the key plate: dark, seen through its holes
  const kb = new THREE.Group();          // the keyboard's frame: x; y the plate's normal; z down the rake toward the front
  kb.position.set(0, DECK_B.y, DECK_B.z);
  kb.rotation.x = SLOPE;
  body.add(kb);
  {
    const inner = mesh(new THREE.PlaneGeometry(W - 34, DECK_L - 6).rotateX(-Math.PI / 2), darkIn, false, false);
    inner.position.set(0, -40, DECK_L / 2); kb.add(inner);
  }
  // the key plate: a pressed steel plate with a hole for every key's stem and a slot for every function key
  const fPos: Record<string, { x: number; w: number; len: number }> = {
    "#": { x: 98, w: 44, len: 0 }, "S": { x: 98, w: 88, len: 0 }, "%": { x: 98, w: 132, len: 0 }, "*": { x: 98, w: 176, len: 0 },
    "−": { x: 150, w: 48, len: 0 }, "MB": { x: 150, w: 158, len: 84 }, "C": { x: -178, w: 186, len: 0 }, "R": { x: -178, w: 140, len: 0 },
  };
  {
    const s = new THREE.Shape();
    const hw = W / 2 - 16.3;
    s.moveTo(-hw, 0.3); s.lineTo(hw, 0.3); s.lineTo(hw, DECK_L - 0.5); s.lineTo(-hw, DECK_L - 0.5); s.lineTo(-hw, 0.3);
    for (let c = 0; c < 8; c++) for (let r = 1; r <= 9; r++) { const h = new THREE.Path(); h.absarc(COL_X(c), ROW_W(r), 3.6, 0, Math.PI * 2, true); s.holes.push(h); }
    for (const k of Object.keys(fPos)) {
      const p = fPos[k], hl = p.len ? p.len / 2 - 6 : 3.6;
      const h = new THREE.Path();
      h.moveTo(p.x - 3.6, p.w - hl); h.lineTo(p.x - 3.6, p.w + hl); h.lineTo(p.x + 3.6, p.w + hl); h.lineTo(p.x + 3.6, p.w - hl); h.lineTo(p.x - 3.6, p.w - hl);
      s.holes.push(h);
    }
    const g = new THREE.ExtrudeGeometry(s, { depth: 3, bevelEnabled: false, curveSegments: 10 });
    g.rotateX(Math.PI / 2);      // shape y → z (down the rake), extrusion → −y (into the case)
    const plateM = new THREE.MeshPhysicalMaterial({ color: col("#3E4440"), roughness: 0.55, metalness: 0.3, bumpMap: wb, bumpScale: 0.3, envMapIntensity: 0.6 });
    kb.add(mesh(g, plateM));
  }

  // the column markers set in the plate behind the back row: the decimal point and the thousands' comma (enamel inlays)
  for (const [c, big] of [[1.5, true], [4.5, false]] as const) {
    const mk = mesh(new THREE.CylinderGeometry(big ? 2.2 : 1.6, big ? 2.2 : 1.6, 0.8, 16), ivoryInlay);
    mk.position.set(COL_X(c), 0.7, 13); kb.add(mk);
  }
  for (let c = 0; c < 8; c++) {
    const ln = rbox(1.2, 0.6, 8, 0.25, ivoryInlay, 1);
    ln.position.set(COL_X(c), 0.6, 9); kb.add(ln);
  }
  // ── the keys: each its own object: a stem through its hole, a dished cap with its legend ──
  const keys: THREE.Group[] = [];
  const capG = lathe([[3, -9], [8.6, -9], [KEY_R, -7.6], [KEY_R, -1.4], [KEY_R - 0.7, -0.1], [KEY_R - 1.2, 0], [0.01, 0]], 40);
  const stemG = new THREE.CylinderGeometry(2.6, 2.6, 30, 12);
  const KEY_UP = 19;     // a cap's top over the plate at rest (its skirt 10 over it: room for its 8 px of travel)
  const ivory = (hex: string) => new THREE.MeshPhysicalMaterial({ color: col(hex), roughness: 0.34, clearcoat: 0.5, clearcoatRoughness: 0.25, envMapIntensity: 0.6 });
  const capIv = ivory("#E6DFCB"), capDk = ivory("#2C4536");
  const mkKey = (name: string, x: number, w: number, label: string, dark: boolean) => {
    const k = new THREE.Group();
    k.userData.obj = `key ${name}`;
    k.position.set(x, 0, w);
    const stem = mesh(stemG, steel); stem.position.y = KEY_UP - 9 - 15 + 0.5; k.add(stem);
    const cap = mesh(capG, dark ? capDk : capIv); cap.position.y = KEY_UP; k.add(cap);
    const lg = mesh(new THREE.CircleGeometry(7.4, 32).rotateX(-Math.PI / 2), new THREE.MeshPhysicalMaterial({ map: legendTex(label, dark), roughness: 0.4, clearcoat: 0.4, envMapIntensity: 0.5, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }), false, true);
    lg.position.y = KEY_UP + 0.05; k.add(lg);
    kb.add(k);
    keys.push(k);
  };
  for (let c = 0; c < 8; c++) for (let r = 1; r <= 9; r++) mkKey(`${c}:${r}`, COL_X(c), ROW_W(r), String(r), c >= 2 && c <= 4);
  // the function keys: square caps with their signs; the motor bar a long ivory bar
  for (const name of FKEYS) {
    const p = fPos[name];
    const k = new THREE.Group();
    k.userData.obj = `key ${name}`;
    k.position.set(p.x, 0, p.w);
    const L = p.len || 22;
    const stem = mesh(p.len ? new THREE.BoxGeometry(6, 30, L - 14) : stemG, steel); stem.position.y = KEY_UP - 9 - 15 + 0.5; k.add(stem);
    const capM = name === "*" ? capDk : capIv;
    const cap = rbox(p.len ? 30 : 22, 9, L, 3, capM, 3);
    cap.position.set(0, KEY_UP - 4.5, L / 2); k.add(cap);
    if (name !== "MB") {
      const lg = mesh(new THREE.PlaneGeometry(16, 16).rotateX(-Math.PI / 2), new THREE.MeshPhysicalMaterial({ map: legendTex(name, name === "*"), roughness: 0.4, clearcoat: 0.4, envMapIntensity: 0.5, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }), false, true);
      lg.position.y = KEY_UP + 0.02; k.add(lg);
    } else {
      // the bar's grip: a few moulded ribs across its top
      for (let i = 0; i < 5; i++) { const rib = rbox(24, 1.2, 2, 0.5, capM, 1); rib.position.set(0, KEY_UP + 0.55, -L / 2 + 22 + i * 10 + 1); k.add(rib); }
    }
    kb.add(k);
    keys.push(k);
  }

  // ══ THE PRINTING UNIT ══
  // the platen's side plates, bored for its axle
  {
    const s = new THREE.Shape();
    s.moveTo(-86, HOOD_Y - 2); s.lineTo(-42, HOOD_Y - 2); s.lineTo(-44, PL.y + 6); s.absarc(PL.z, PL.y + 4, 18, 0, Math.PI, false); s.lineTo(-86, HOOD_Y - 2);
    const h = new THREE.Path(); h.absarc(PL.z, PL.y, 4.6 + 1, 0, Math.PI * 2, true); s.holes.push(h);   // (+ the bevel, which closes a hole at the faces)
    for (const sx of [-1, 1]) body.add(mesh(extX(s, sx > 0 ? PL.len / 2 + 3 : -PL.len / 2 - 10, sx > 0 ? PL.len / 2 + 10 : -PL.len / 2 - 3, 1, 20), baseM));
  }
  // the type guard: chrome, in front of the print line, its top a serrated tear bar
  {
    const s = new THREE.Shape();
    const hw = PL.len / 2 - 4;
    s.moveTo(-hw, HOOD_Y - 6); s.lineTo(hw, HOOD_Y - 6); s.lineTo(hw, GUARD.top - 3);
    for (let x = hw; x >= -hw; x -= 3) s.lineTo(x, GUARD.top - ((Math.round((hw - x) / 3) % 2) ? 3 : 0));
    s.lineTo(-hw, HOOD_Y - 6);
    const g = new THREE.ExtrudeGeometry(s, { depth: GUARD.z1 - GUARD.z0, bevelEnabled: false });
    g.translate(0, 0, GUARD.z0);
    body.add(mesh(g, chrome));
    // its two screws
    for (const x of [-hw + 8, hw - 8]) {
      const sc = mesh(lathe([[0.01, 0], [3, 0], [2.8, 1], [0.01, 1.5]], 16), chrome);
      sc.rotation.x = Math.PI / 2; sc.position.set(x, HOOD_Y + 6, GUARD.z1); body.add(sc);
    }
  }
  // the platen: black rubber on its axle, knurled bakelite knobs outside the side plates
  const platen = new THREE.Group();
  platen.userData.obj = "platen";
  platen.position.set(0, PL.y, PL.z);
  mc.add(platen);
  {
    const cyl = mesh(new THREE.CylinderGeometry(PL.r, PL.r, PL.len - 2, 48), M.rubber("#1B1918"));
    cyl.rotation.z = Math.PI / 2; platen.add(cyl);
    const ax = mesh(new THREE.CylinderGeometry(4, 4, PL.len + 30, 16), steel);
    ax.rotation.z = Math.PI / 2; platen.add(ax);
    const knurl = new THREE.CylinderGeometry(15, 15, 16, 48, 1);
    { const p = knurl.attributes.position as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) { const a = Math.atan2(p.getZ(i), p.getX(i)); const r = Math.hypot(p.getX(i), p.getZ(i)); if (r > 1 && Math.round(a / (Math.PI / 24)) % 2) { p.setX(i, p.getX(i) * 0.93); p.setZ(i, p.getZ(i) * 0.93); } } knurl.computeVertexNormals(); }
    for (const sx of [-1, 1]) {
      const k = mesh(knurl, bakelite); k.rotation.z = Math.PI / 2; k.position.x = sx * (PL.len / 2 + 10 + 0.5 + 8 + 4); platen.add(k);
      const cp = mesh(lathe([[0.01, 0], [13, 0], [12, 3], [8, 5], [0.01, 5.5]], 32), bakelite);
      cp.rotation.z = -sx * Math.PI / 2; cp.position.x = sx * (PL.len / 2 + 10 + 0.5 + 8 + 4 + 8); platen.add(cp);
      const hub = mesh(new THREE.CylinderGeometry(7, 7, 4, 24), chrome);
      hub.rotation.z = Math.PI / 2; hub.position.x = sx * (PL.len / 2 + 10 + 0.5 + 2); platen.add(hub);
    }
  }
  // the ribbon spools either side: open cups with the black ribbon wound in them
  const spools: THREE.Group[] = [];
  for (const sx of [-1, 1]) {
    const sp = new THREE.Group();
    sp.userData.obj = `spool ${sx}`;
    sp.position.set(sx * 152, HOOD_Y + 0.3, -96);
    sp.add(mesh(lathe([[3, 0], [20, 0], [21, 1], [21, 11], [19.6, 11], [19.6, 1.5], [3, 1.5]], 40), chrome));
    sp.add(mesh(lathe([[5, 1.6], [16 + 2 * (sx > 0 ? 0.3 : 1), 1.6], [16 + 2 * (sx > 0 ? 0.3 : 1), 9], [5, 9]], 40), bakelite));
    sp.add(mesh(lathe([[0.01, 0], [4.6, 0], [4.6, 13], [3, 15], [0.01, 15]], 16), chrome));
    mc.add(sp);
    spools.push(sp);
  }
  // the paper roll on its spindle and wire arms
  {
    const roll = new THREE.Group();
    roll.userData.obj = "paper roll";
    roll.position.set(0, ROLL.y, ROLL.z);
    mc.add(roll);
    const side = mesh(new THREE.CylinderGeometry(ROLL.r, ROLL.r, TW, 64, 1, true), paperM);
    side.rotation.z = Math.PI / 2; roll.add(side);
    const endM = new THREE.MeshStandardMaterial({ map: rollEndTex(), roughness: 0.9, envMapIntensity: 0.35 });
    for (const sx of [-1, 1]) {
      const e = mesh(new THREE.RingGeometry(4, ROLL.r, 64), endM);
      e.rotation.y = sx * Math.PI / 2; e.position.x = sx * TW / 2; roll.add(e);
    }
    const core = mesh(new THREE.CylinderGeometry(4, 4, TW, 24, 1, true), new THREE.MeshStandardMaterial({ color: col("#8A6A44"), roughness: 0.9, side: THREE.DoubleSide }));
    core.rotation.z = Math.PI / 2; roll.add(core);
    const sp = mesh(new THREE.CylinderGeometry(3.2, 3.2, TW + 18, 16), chrome);
    sp.rotation.z = Math.PI / 2; roll.add(sp);
    for (const sx of [-1, 1]) {
      const x = sx * (TW / 2 + 7);
      const arm = wire([[x, HOOD_Y - ROLL.y + 2.5, 34], [x, HOOD_Y - ROLL.y + 14, 30], [x, -8, 6], [x, 0, 0]], 2.4, chrome);
      roll.add(arm);
      const foot = mesh(lathe([[0.01, 0], [6, 0], [5, 2.5], [3, 3.5], [0.01, 3.5]], 20), chrome);
      foot.position.set(x, HOOD_Y - ROLL.y + 0.3, 34); roll.add(foot);
    }
  }
  // the tape's fixed run: off the roll, along under the platen, round its front quarter to the print line
  {
    const pts: [number, number][] = [];
    for (let z = ROLL.z; z < PL.z; z += 6) pts.push([z, PL.y - PL.r - 0.5]);
    for (let i = 0; i <= 16; i++) { const a = -Math.PI / 2 + (i / 16) * (Math.PI / 2); pts.push([PL.z + (PL.r + 0.5) * Math.cos(a), PL.y + (PL.r + 0.5) * Math.sin(a)]); }
    const pos: number[] = [], idx: number[] = [];
    pts.forEach(([z, y]) => { pos.push(-TW / 2, y, z, TW / 2, y, z); });
    for (let i = 0; i + 1 < pts.length; i++) { const a = 2 * i; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    const run = mesh(g, paperM);
    run.userData.obj = "tape";
    mc.add(run);
  }
  // the tape's free part: rebuilt each frame from its length, printed face toward the eye, its back plain
  const NS = 72;
  const tapeG = new THREE.BufferGeometry();
  const tpos = new Float32Array((NS + 1) * 3 * 3), tuv = new Float32Array((NS + 1) * 3 * 2);
  const tidx: number[] = [];
  for (let i = 0; i < NS; i++) for (let j = 0; j < 2; j++) { const a = i * 3 + j, b = a + 1, c = a + 3, d = c + 1; tidx.push(a, b, c, b, d, c); }
  tapeG.setAttribute("position", new THREE.BufferAttribute(tpos, 3));
  tapeG.setAttribute("uv", new THREE.BufferAttribute(tuv, 2));
  tapeG.setIndex(tidx);
  const tapeFront = new THREE.MeshStandardMaterial({ map: tapeTex(0), roughness: 0.9, envMapIntensity: 0.35, alphaTest: 0.5, side: THREE.FrontSide });
  const tapeBack = new THREE.MeshStandardMaterial({ map: tapeTex(0), color: col("#E9E5DA"), roughness: 0.92, envMapIntensity: 0.35, alphaTest: 0.5, side: THREE.BackSide });
  const tape = new THREE.Group();
  tape.userData.obj = "tape";
  tape.add(mesh(tapeG, tapeFront), mesh(tapeG, tapeBack));
  mc.add(tape);
  const shapeTape = (S: number) => {
    let y = P.y, z = P.z;
    for (let i = 0; i <= NS; i++) {
      const s = (S * i) / NS;
      if (i > 0) {
        // integrate the curve over this step (mid-point)
        const ds = S / NS, sm = s - ds / 2, ph = (CURL * sm * sm) / 2;
        y += Math.cos(ph) * ds; z -= Math.sin(ph) * ds;
      }
      const ph = (CURL * s * s) / 2;
      const cup = 0.9 * Math.min(1, s / 40);       // the strip cups a little across its width once free
      for (let j = 0; j < 3; j++) {
        const u = j / 2, x = -TW / 2 + TW * u, e = cup * (2 * u - 1) ** 2;
        // its edges bend back from the printed face (the face's normal is (cos φ, sin φ) in z, y)
        const k = (i * 3 + j) * 3;
        tpos[k] = x; tpos[k + 1] = y - e * Math.sin(ph); tpos[k + 2] = z - e * Math.cos(ph);
        const c = S - s;
        tuv[(i * 3 + j) * 2] = u; tuv[(i * 3 + j) * 2 + 1] = 1 - c / C_MAX;
      }
    }
    tapeG.attributes.position.needsUpdate = true; tapeG.attributes.uv.needsUpdate = true;
    tapeG.computeVertexNormals(); tapeG.computeBoundingBox(); tapeG.computeBoundingSphere();
  };

  // ══ THE FLOOR ══
  const floor = makeFloor({ y: geo.floor, x0: geo.cx - 800, x1: geo.cx + 800, z0: geo.z - 500, z1: geo.z + 600, reflect: 0.14, shadow: 0.5,
    fadeC: [geo.cx, geo.z + 20], fadeR: [520, 380] });
  root.add(floor);
  {
    const { c, g } = canvasOf(128, 128, 1);
    g.fillStyle = "#000"; g.fillRect(0, 0, 128, 128);
    g.filter = "blur(14px)"; g.fillStyle = "#fff"; g.fillRect(24, 24, 80, 80);
    const m = new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: texOf(c, false), transparent: true, depthWrite: false, toneMapped: false, opacity: 0.6 });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(W + 70, ZF - ZB + 70), m);
    pl.rotation.x = -Math.PI / 2; pl.position.set(0, 0.25, 0); pl.renderOrder = 1.5;
    const pools = new THREE.Group(); pools.userData.isFloor = true; pools.userData.noBounds = true; pools.add(pl);
    mc.add(pools);
  }

  const paintAll = () => { for (let n = 0; n <= TAPE.length; n++) tapeTex(n); };

  return {
    root,
    update: (p) => {
      paintAll();
      mc.rotation.y = (p.yaw * Math.PI) / 180;
      mc.position.y = -geo.floor + p.shake;
      keys.forEach((k, i) => { k.position.y = -(p.keys[i] ?? 0); });
      const S = S0 + PITCH * p.adv;
      platen.rotation.x = -(S - S0) / (PL.r + 0.5);
      shapeTape(S);
      const t = tapeTex(p.printed);
      if (tapeFront.map !== t) { tapeFront.map = t; tapeBack.map = t; tapeFront.needsUpdate = true; tapeBack.needsUpdate = true; }
      spools.forEach((s, i) => { s.rotation.y = (i ? 1 : -1) * p.spool; });
    },
  };
};
