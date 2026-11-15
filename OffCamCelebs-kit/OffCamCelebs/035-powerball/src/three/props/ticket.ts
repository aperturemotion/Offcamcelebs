// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE TICKET IN 3-D (035) — "It was sold at a Wegmans in Montvale, New Jersey, for the November 4th drawing." On the cream
// ground a retail LOTTERY TERMINAL, modelled on the countertop draw-game terminals behind a store's lottery counter (the IGT /
// Scientific Games family: a low graphite base whose sloped front holds the playslip reader, a printer tower behind it with a
// customer display and status LEDs on its face, and on top the printer's lid with the ticket exit slot and its serrated tear
// bar), printing a POWERBALL ticket on thermal paper.
//   · the ticket is a real strip of paper fed out of the slot: its emerged length is the set's `feed`; the paper keeps the
//     curl of its roll (it bends back as it rises) and a slight cross-bow, and its print (thermal black, a reversed header
//     bar, the retailer line, the draw date, greeked number rows, a barcode, a serial) rides up with it;
//   · when it is cut the free ticket drops a few px onto the presenter's nip and rocks back to rest in the slot;
//   · the customer display's bar fills as it prints; the busy LED blinks while the paper moves.
// The ticket is one of the film's two document visuals. Units are the layer's px (y up from the floor, z toward the viewer).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, roundRect, slabOf, type Model } from "../stage";
import { rbox, rad, fitFont, track, col, hash } from "../kit029";

export type TicketGeo = { floor: number; cx: number; z: number };
/** feed: the paper's length out of the slot (px); cut: 0 attached … 1 cut free; drop: the cut ticket's sink (px); tip: its
 *  lean back (rad); prog: the display's bar 0 … 1; busy: the busy LED 0 … 1; yaw (deg) */
export type TicketP = { feed: number; cut: number; drop: number; tip: number; prog: number; busy: number; yaw: number };

// ── the terminal ──
const BW = 600, B_BACK = -200, B_FRONT = 200, B_FY = 58, B_TOP = 128, B_SLOPE_Z = 60, FEET = 8;
const TW = 440, TD = 210, T_FRONT = 10, T_TOP = 328;
const LID_S = 354;                  // the lid's top
/** the exit bezel's top: where the paper comes out (s = 0) */
export const LID_TOP = LID_S + 3;
export const SLOT_Z = -30;
const SLOT_W = 300, SLOT_D = 16;
// ── the ticket ──
export const TK_W = 270, TK_L = 474;
const TEX_L = TK_L + 40;            // the print texture runs on past the ticket (the next ticket's blank start)
const PAPER_T = 1.4;
const IN = 23;                      // how far the paper is drawn below the lid's top (into the slot)
/** how far the cut ticket sinks: its bottom edge comes to rest 0.5 px over the throat's floor (the presenter's nip) */
export const CUT_SINK = LID_TOP - IN - (328 + 1.0) - 0.5;
const KAPPA = rad(20) / TK_L;       // the roll's curl: the whole ticket bends back 20°
/** where each line of print sits on the ticket (px from its top edge), for the camera */
export const PRINT = { head: [14, 58], shop: [80, 104], date: [130, 166], rows: [186, 318], code: [362, 424], serial: [430, 446] } as const;

// ══ the print ══════════════════════════════════════════════════════════════════════════════════
const INK = "#1B1B1F";
const paintTicket = () => paintTex("tk35-ticket-v2", TK_W, TEX_L, (c) => {
  // thermal stock: a cool white with a faint pre-printed security pattern (guilloche waves)
  c.fillStyle = "#F6F7F4"; c.fillRect(0, 0, TK_W, TEX_L);
  c.lineWidth = 0.7;
  for (let i = 0; i < 46; i++) {
    c.strokeStyle = i % 2 ? "rgba(120,168,182,0.20)" : "rgba(196,150,170,0.14)";
    c.beginPath();
    for (let x = 0; x <= TK_W; x += 3) {
      const y = 6 + i * 11.4 + 4 * Math.sin(x / 17 + i * 0.7) + 2.2 * Math.sin(x / 7.3 + i * 1.9);
      if (x === 0) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.stroke();
  }
  const M0 = 14, W0 = TK_W - 2 * M0;
  c.fillStyle = INK; c.textBaseline = "middle"; c.textAlign = "center";
  // the header: a reversed (solid black) bar, the game's name knocked out of it
  c.fillRect(M0 - 2, PRINT.head[0], W0 + 4, PRINT.head[1] - PRINT.head[0]);
  c.fillStyle = "#F6F7F4";
  track(c, 4);
  fitFont(c, 800, 34, "POWERBALL", W0 - 30);
  c.fillText("POWERBALL", TK_W / 2 + 2, (PRINT.head[0] + PRINT.head[1]) / 2 + 1.5);
  track(c, 0);
  c.fillStyle = INK;
  // the retailer
  track(c, 1);
  fitFont(c, 700, 21, "WEGMANS  MONTVALE NJ", W0 - 6);
  c.fillText("WEGMANS  MONTVALE NJ", TK_W / 2, (PRINT.shop[0] + PRINT.shop[1]) / 2 + 1);
  track(c, 0);
  // the retailer's terminal id (greeked)
  for (const [x, w] of [[64, 34], [104, 22], [132, 46], [184, 20]] as const) { c.globalAlpha = 0.75; c.fillRect(x, 112, w, 6); }
  c.globalAlpha = 1;
  // the draw
  track(c, 2);
  fitFont(c, 800, 31, "NOV 4 2026", W0 - 40);
  c.fillText("NOV 4 2026", TK_W / 2, (PRINT.date[0] + PRINT.date[1]) / 2 + 1);
  track(c, 0);
  const dash = (y: number) => { for (let x = M0; x < TK_W - M0; x += 7) c.fillRect(x, y, 4, 1.6); };
  dash(176);
  // the plays: five rows, a letter, five white-ball pairs and the Powerball pair (greeked: the real numbers are not shown)
  const RH = (PRINT.rows[1] - PRINT.rows[0]) / 5;
  for (let r = 0; r < 5; r++) {
    const y = PRINT.rows[0] + r * RH + RH / 2;
    c.textAlign = "left";
    fitFont(c, 700, 16, "A", 14);
    c.fillText("ABCDE"[r], M0 + 2, y + 1);
    let x = M0 + 26;
    for (let k = 0; k < 6; k++) {
      if (k === 5) { fitFont(c, 700, 13, "PB", 24); c.fillText("PB", x + 2, y + 1); x += 26; }
      for (let d = 0; d < 2; d++) {
        c.globalAlpha = 0.82;
        const h = 13, w = 8.5;
        c.beginPath(); c.roundRect(x + d * 11, y - h / 2, w, h, 2); c.fill();
        c.globalAlpha = 1;
      }
      x += 30;
    }
  }
  c.textAlign = "center";
  dash(328);
  for (const [x, w] of [[M0, 40], [M0 + 48, 30], [TK_W - M0 - 70, 70]] as const) { c.globalAlpha = 0.7; c.fillRect(x, 340, w, 7); }
  c.globalAlpha = 1;
  // the barcode (a deterministic run of bars and spaces)
  {
    let x = 26;
    let i = 0;
    while (x < TK_W - 30) {
      const w = 1 + Math.floor(hash(i, 7, 3) * 3.2) * 0.9;
      if (i % 2 === 0) c.fillRect(x, PRINT.code[0], w, PRINT.code[1] - PRINT.code[0]);
      x += w + (0.9 + Math.floor(hash(i, 8, 3) * 3) * 0.9);
      i++;
    }
  }
  track(c, 1);
  fitFont(c, 600, 13, "8204 1937 5521 0638 4417", W0 - 30);
  c.fillText("8204 1937 5521 0638 4417", TK_W / 2, (PRINT.serial[0] + PRINT.serial[1]) / 2);
  track(c, 0);
  for (let r = 0; r < 2; r++) for (let k = 0; k < 7; k++) { c.globalAlpha = 0.55; c.fillRect(M0 + 6 + k * 34, 453 + r * 9, 24 + 6 * hash(k, r, 4), 3.6); }
  c.globalAlpha = 1;
  // thermal print is never perfectly even: faint streaks along the feed
  for (let i = 0; i < 18; i++) { c.fillStyle = `rgba(246,247,244,${0.08 + 0.1 * hash(i, 2, 2)})`; c.fillRect(hash(i, 1, 2) * TK_W, 0, 0.8, TEX_L); }
}, 3);

// ══ helpers ═══════════════════════════════════════════════════════════════════════════════════════
const rrPath = (x0: number, y0: number, x1: number, y1: number, r: number) => {
  const p = new THREE.Path();
  p.moveTo(x0 + r, y0); p.lineTo(x1 - r, y0); p.quadraticCurveTo(x1, y0, x1, y0 + r);
  p.lineTo(x1, y1 - r); p.quadraticCurveTo(x1, y1, x1 - r, y1);
  p.lineTo(x0 + r, y1); p.quadraticCurveTo(x0, y1, x0, y1 - r);
  p.lineTo(x0, y0 + r); p.quadraticCurveTo(x0, y0, x0 + r, y0);
  return p;
};
let softT: THREE.Texture | null = null;
const softTex = () => {
  if (softT) return softT;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000"; g.fillRect(0, 0, 256, 256);
  g.filter = "blur(26px)"; g.fillStyle = "#fff"; g.fillRect(48, 48, 160, 160);
  softT = new THREE.CanvasTexture(c);
  return softT;
};

export const ticketModel = (g: TicketGeo) => (): Model<TicketP> => {
  const root = new THREE.Group();
  const yawG = new THREE.Group();
  yawG.position.set(g.cx, -g.floor, g.z);
  root.add(yawG);

  // ── materials ──
  const shellM = new THREE.MeshPhysicalMaterial({ color: col("#2F3237"), roughness: 0.48, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.4, envMapIntensity: 0.6 });
  const lidM = new THREE.MeshPhysicalMaterial({ color: col("#8C9299"), roughness: 0.5, metalness: 0, clearcoat: 0.25, clearcoatRoughness: 0.45, envMapIntensity: 0.6 });
  const trayM = new THREE.MeshPhysicalMaterial({ color: col("#5E646C"), roughness: 0.5, metalness: 0, clearcoat: 0.2, clearcoatRoughness: 0.5, envMapIntensity: 0.6 });
  const panelM = new THREE.MeshPhysicalMaterial({ color: col("#B7BBC0"), roughness: 0.45, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.6 });
  const blackM = new THREE.MeshPhysicalMaterial({ color: col("#111214"), roughness: 0.35, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.25, envMapIntensity: 0.7 });
  const matteBlack = new THREE.MeshStandardMaterial({ color: col("#0A0A0B"), roughness: 0.9, metalness: 0 });
  const rubber = new THREE.MeshStandardMaterial({ color: col("#1E1D1C"), roughness: 0.9, metalness: 0 });
  const steel = new THREE.MeshPhysicalMaterial({ color: col("#D7DBE0"), metalness: 1, roughness: 0.22, envMapIntensity: 1.05 });

  // ══ THE TERMINAL (one object) ══
  const term = new THREE.Group();
  term.userData.obj = "terminal";
  yawG.add(term);
  // feet
  for (const [x, z] of [[-BW / 2 + 40, B_BACK + 34], [BW / 2 - 40, B_BACK + 34], [-BW / 2 + 40, B_FRONT - 34], [BW / 2 - 40, B_FRONT - 34]] as const) {
    const ft = mesh(new THREE.CylinderGeometry(15, 17, FEET, 24), rubber);
    ft.position.set(x, FEET / 2, z);
    term.add(ft);
  }
  // the base: its side profile (z, y) extruded across its width, its edges rounded
  {
    const s = new THREE.Shape();
    s.moveTo(B_BACK, FEET); s.lineTo(B_FRONT, FEET); s.lineTo(B_FRONT, B_FY); s.lineTo(B_SLOPE_Z, B_TOP); s.lineTo(B_BACK, B_TOP); s.lineTo(B_BACK, FEET);
    const bg = new THREE.ExtrudeGeometry(s, { depth: BW - 12, bevelEnabled: true, bevelThickness: 6, bevelSize: 6, bevelOffset: -6, bevelSegments: 4, curveSegments: 6 });
    bg.translate(0, 0, -(BW - 12) / 2);
    bg.rotateY(-Math.PI / 2);                         // shape x → z, extrusion → x
    term.add(mesh(bg, shellM));
  }
  // a brushed trim strip along the base's front foot
  const trim = rbox(BW - 30, 10, 2, 1, steel, 2);
  trim.position.set(0, FEET + 14, B_FRONT + 2);
  term.add(trim);
  // the playslip reader: a pale panel set on the slope, its feed slot and guide
  {
    const ang = Math.atan2(B_TOP - B_FY, B_FRONT - B_SLOPE_Z);
    const grp = new THREE.Group();
    grp.position.set(0, (B_FY + B_TOP) / 2, (B_FRONT + B_SLOPE_Z) / 2);
    grp.rotation.x = -(Math.PI / 2 - ang);
    term.add(grp);
    // a recessed tray in mid-grey, the smoked scanner window, the slip's feed slot and its two brushed guide rails
    const pnl = rbox(400, 118, 3, 1.4, trayM, 2);
    pnl.position.z = 3;
    grp.add(pnl);
    const win = rbox(300, 40, 1.2, 1, new THREE.MeshPhysicalMaterial({ color: col("#141A1F"), roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.1 }), 1);
    win.position.set(0, -14, 4.2);
    grp.add(win);
    const slot = rbox(330, 7, 1, 0.5, matteBlack, 1);
    slot.position.set(0, 40, 4);
    grp.add(slot);
    for (const x of [-180, 180]) {
      const guide = rbox(7, 100, 3, 1.5, steel, 2);
      guide.position.set(x, -2, 6);
      grp.add(guide);
    }
    const ledG2 = rbox(8, 4, 1, 0.8, new THREE.MeshStandardMaterial({ color: col("#0B2010"), emissive: col("#3BFF6A"), emissiveIntensity: 0.9, roughness: 0.3 }), 1);
    ledG2.position.set(170, 46, 4);
    grp.add(ledG2);
  }
  // the printer tower
  const tower = rbox(TW, T_TOP - B_TOP, TD, 16, shellM, 4);
  tower.position.set(0, (B_TOP + T_TOP) / 2, T_FRONT);
  term.add(tower);
  // vents on its sides
  const ventM = new THREE.MeshStandardMaterial({ color: col("#121315"), roughness: 0.9 });
  for (const sx of [-1, 1]) for (let i = 0; i < 9; i++) {
    const v = mesh(new THREE.PlaneGeometry(110, 5), ventM, false, false);
    v.rotation.y = sx * Math.PI / 2;
    v.position.set(sx * (TW / 2 + 0.15), 170 + i * 13, -100);
    term.add(v);
  }
  // the lid: a slab with the exit slot cut through it
  {
    const sh = roundRect(TW, TD, 18);
    const yc = -(SLOT_Z - (T_FRONT - TD / 2));       // the slot's centre in the shape's y (shape y → −z)
    sh.holes.push(rrPath(-SLOT_W / 2, yc - SLOT_D / 2, SLOT_W / 2, yc + SLOT_D / 2, 6));
    const lg = slabOf(sh, LID_S - T_TOP, 4, 10);
    lg.rotateX(-Math.PI / 2);                          // its front face → the top; shape y → −z
    const lid = mesh(lg, lidM);
    lid.position.set(0, LID_S, T_FRONT - TD / 2);
    term.add(lid);
    // the exit bezel: a black moulded insert round the slot, seated on the lid
    const ins = roundRect(SLOT_W + 44, SLOT_D + 34, 9);
    ins.holes.push(rrPath(-SLOT_W / 2, -SLOT_D / 2, SLOT_W / 2, SLOT_D / 2, 6));
    const ig = slabOf(ins, LID_TOP - LID_S, 1, 10);
    ig.rotateX(-Math.PI / 2);
    const bezel = mesh(ig, blackM);
    bezel.position.set(0, LID_TOP, SLOT_Z);
    term.add(bezel);
    // the lid's release latch on its front edge
    const latch = rbox(70, 12, 3, 2, panelM, 2);
    latch.position.set(140, LID_S - 13, T_FRONT + 3);
    term.add(latch);
  }
  // a brushed parting trim round the tower under the lid
  const part = rbox(TW + 2, 4, TD + 2, 2, steel, 2);
  part.position.set(0, T_TOP - 8, T_FRONT + 1);
  term.add(part);
  // a speaker grille and a blank badge plate on the tower's face
  const holeM = new THREE.MeshStandardMaterial({ color: col("#060607"), roughness: 0.9 });
  const holeG = new THREE.CircleGeometry(2.1, 12);
  for (let r = 0; r < 4; r++) for (let k = 0; k < 9; k++) {
    const h = mesh(holeG, holeM, false, false);
    h.position.set(-150 + k * 9 + (r % 2) * 4.5, 175 + r * 8, T_FRONT + 0.08);
    term.add(h);
  }
  const badge = rbox(64, 14, 1.2, 1, steel, 1);
  badge.position.set(150, 172, T_FRONT + 1.2);
  term.add(badge);
  // the throat under the slot (black), and the serrated tear bar along its front lip
  const throat = rbox(SLOT_W + 6, 0.8, SLOT_D + 10, 0.3, matteBlack, 1);
  throat.position.set(0, T_TOP + 0.6, SLOT_Z + (SLOT_D + 10) / 2);
  term.add(throat);
  {
    const s = new THREE.Shape();
    const L = SLOT_W - 10, n = Math.round(L / 6);
    s.moveTo(-L / 2, 0);
    for (let i = 0; i < n; i++) { s.lineTo(-L / 2 + (i + 0.5) * (L / n), 8); s.lineTo(-L / 2 + (i + 1) * (L / n), 4.6); }
    s.lineTo(L / 2, 0); s.lineTo(-L / 2, 0);
    const tg = new THREE.ExtrudeGeometry(s, { depth: 1.6, bevelEnabled: false });
    const tb = mesh(tg, steel);
    tb.position.set(0, LID_TOP, SLOT_Z + SLOT_D / 2 + 4.5);   // on the lid's flat top, clear of the slot's rounded lip
    term.add(tb);
    for (const x of [-L / 2 + 10, L / 2 - 10]) {
      const sc = mesh(lathe([[0, 0], [3.4, 0], [3.2, 0.8], [2.2, 1.6], [0, 1.8]], 16), steel);
      sc.rotation.x = Math.PI / 2; sc.position.set(x, LID_TOP + 2.6, SLOT_Z + SLOT_D / 2 + 4.5 + 1.6);
      term.add(sc);
    }
  }
  // the customer display: a bezel, its dark glass, a status line of dots and a bar that fills as the ticket prints
  const DY = 256;
  const bez = rbox(258, 70, 4, 3, blackM, 2);
  bez.position.set(-40, DY, T_FRONT + 4);
  term.add(bez);
  const glass = rbox(232, 50, 0.6, 0.3, new THREE.MeshPhysicalMaterial({ color: col("#06171A"), roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.1 }), 1);
  glass.position.set(-40, DY, T_FRONT + 4.6);
  term.add(glass);
  const vfd = (hex: string, i: number) => new THREE.MeshStandardMaterial({ color: col("#000000"), emissive: col(hex), emissiveIntensity: i, roughness: 0.4 });
  const dotsT = paintTex("tk35-vfd", 210, 14, (c) => {
    c.fillStyle = "#000"; c.fillRect(0, 0, 210, 14);
    for (let k = 0; k < 14; k++) for (let i = 0; i < 5; i++) for (let j = 0; j < 7; j++) {
      if (k === 6 || k === 10) continue;
      if (hash(k, i * 7 + j, 5) < 0.42) continue;
      c.fillStyle = "#7FFFF0"; c.fillRect(k * 15 + i * 2.2, j * 2, 1.5, 1.5);
    }
  }, 3);
  const dots = mesh(new THREE.PlaneGeometry(210, 14), new THREE.MeshStandardMaterial({ color: col("#000000"), emissive: col("#5FE6D8"), emissiveMap: dotsT, emissiveIntensity: 0.85, roughness: 0.4 }), false, false);
  dots.position.set(-40, DY + 10, T_FRONT + 4.9);
  term.add(dots);
  const track0 = mesh(new THREE.PlaneGeometry(206, 8), vfd("#1E5E58", 0.6), false, false);
  track0.position.set(-40, DY - 11, T_FRONT + 4.9);
  term.add(track0);
  const fill = mesh(new THREE.PlaneGeometry(1, 6), vfd("#7FFFF0", 1.0), false, false);
  fill.position.set(-40, DY - 11, T_FRONT + 4.95);
  term.add(fill);
  // the status LEDs: power (green, on), busy (amber, blinks while printing), paper (off)
  const ledG = lathe([[0, 0], [5, 0], [5, 1.5], [4.4, 3.2], [2.6, 4.4], [0, 4.8]], 20);
  const ledMats = ["#3BFF6A", "#FFB21E", "#FF3A2A"].map((h) => new THREE.MeshStandardMaterial({ color: col("#2A2A26"), emissive: col(h), emissiveIntensity: 0, roughness: 0.25 }));
  ledMats.forEach((m, i) => {
    const ring = mesh(lathe([[4.8, 0], [7, 0], [7, 1.2], [4.8, 1.2]], 20), blackM);
    ring.rotation.x = Math.PI / 2; ring.position.set(130 + i * 24, DY, T_FRONT);
    term.add(ring);
    const led = mesh(ledG, m);
    led.rotation.x = Math.PI / 2; led.position.set(130 + i * 24, DY, T_FRONT + 0.05);
    term.add(led);
  });
  ledMats[0].emissiveIntensity = 1.2;
  // screws on the tower's sides, a seam line round the tower under the lid
  for (const sx of [-1, 1]) for (const z of [-170, -30]) {
    const sc = mesh(lathe([[0, 0], [4, 0], [3.8, 0.8], [2.8, 1.5], [0, 1.7]], 16), steel);
    sc.rotation.z = -sx * Math.PI / 2; sc.position.set(sx * TW / 2, 300, z);
    term.add(sc);
  }

  // ══ THE TICKET: a strip of thermal paper on the roll's curl, fed out of the slot ══
  const tk = new THREE.Group();
  tk.userData.obj = "ticket";
  tk.position.set(0, LID_TOP - IN, SLOT_Z);           // the pivot of its rest: its bottom edge in the slot
  yawG.add(tk);
  const NX = 10, NS = 120;
  const nV = (NX + 1) * (NS + 1);
  const mkGrid = () => {
    const gg = new THREE.BufferGeometry();
    gg.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(nV * 3), 3));
    gg.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(nV * 2), 2));
    const idx: number[] = [];
    for (let j = 0; j < NS; j++) for (let i = 0; i < NX; i++) {
      const a = j * (NX + 1) + i, b = a + 1, c2 = a + NX + 1, d = c2 + 1;
      idx.push(a, b, d, a, d, c2);
    }
    gg.setIndex(idx);
    return gg;
  };
  const front = mkGrid(), back = mkGrid();
  const ring: [number, number][] = [];
  for (let i = 0; i <= NX; i++) ring.push([i, 0]);
  for (let j = 1; j <= NS; j++) ring.push([NX, j]);
  for (let i = NX - 1; i >= 0; i--) ring.push([i, NS]);
  for (let j = NS - 1; j >= 1; j--) ring.push([0, j]);
  const edgeG = new THREE.BufferGeometry();
  edgeG.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(ring.length * 18), 3));
  const faceM = new THREE.MeshStandardMaterial({ map: paintTicket(), roughness: 0.5, metalness: 0, envMapIntensity: 0.5 });
  const backM = new THREE.MeshStandardMaterial({ color: col("#EEEDE7"), roughness: 0.85, metalness: 0, envMapIntensity: 0.3, side: THREE.BackSide });
  const edgeM = new THREE.MeshStandardMaterial({ color: col("#E4E2DA"), roughness: 0.85, metalness: 0, envMapIntensity: 0.3, side: THREE.DoubleSide });
  tk.add(mesh(front, faceM), mesh(back, backM), mesh(edgeG, edgeM));
  const P = new Float32Array(nV * 3), Q = new Float32Array(nV * 3);
  /** writes the strip for `out` px out of the slot: s runs from −IN (in the slot) to `out` along the curled centreline */
  const shape = (out: number) => {
    const fp = front.attributes.position as THREE.BufferAttribute, bp = back.attributes.position as THREE.BufferAttribute;
    const fu = front.attributes.uv as THREE.BufferAttribute;
    for (let j = 0; j <= NS; j++) {
      const s = -IN + ((out + IN) * j) / NS;
      const sp = Math.max(0, s), ph = KAPPA * sp;
      // the centreline (in the pivot's frame: y up from the bottom edge's rest, z toward the viewer)
      const cy = s < 0 ? s + IN : IN + (KAPPA > 0 ? Math.sin(ph) / KAPPA : sp);
      const cz = s < 0 ? 0 : -(1 - Math.cos(ph)) / KAPPA;
      const ny = Math.sin(ph), nz = Math.cos(ph);            // its face's normal (toward the viewer, tipping up as it curls)
      const bow = 2.6 * Math.min(1, sp / 80);
      const u = out - s;                                     // px from the ticket's top edge
      for (let i = 0; i <= NX; i++) {
        const xx = (i / NX - 0.5) * TK_W, b = bow * (1 - (2 * xx / TK_W) ** 2);
        const k = j * (NX + 1) + i;
        P[k * 3] = xx; P[k * 3 + 1] = cy + ny * (b + PAPER_T / 2); P[k * 3 + 2] = cz + nz * (b + PAPER_T / 2);
        Q[k * 3] = xx; Q[k * 3 + 1] = cy + ny * (b - PAPER_T / 2); Q[k * 3 + 2] = cz + nz * (b - PAPER_T / 2);
        fu.setXY(k, i / NX, 1 - u / TEX_L);
      }
    }
    (fp.array as Float32Array).set(P); (bp.array as Float32Array).set(Q);
    const E = edgeG.attributes.position as THREE.BufferAttribute;
    for (let r = 0; r < ring.length; r++) {
      const [i0, j0] = ring[r], [i1, j1] = ring[(r + 1) % ring.length];
      const a = (j0 * (NX + 1) + i0) * 3, b = (j1 * (NX + 1) + i1) * 3;
      const q = [P[a], P[a + 1], P[a + 2], P[b], P[b + 1], P[b + 2], Q[b], Q[b + 1], Q[b + 2], P[a], P[a + 1], P[a + 2], Q[b], Q[b + 1], Q[b + 2], Q[a], Q[a + 1], Q[a + 2]];
      for (let n = 0; n < 18; n++) E.array[r * 18 + n] = q[n];
    }
    for (const gg of [front, back, edgeG]) {
      gg.attributes.position.needsUpdate = true;
      if (gg.attributes.uv) gg.attributes.uv.needsUpdate = true;
      gg.computeVertexNormals(); gg.computeBoundingBox(); gg.computeBoundingSphere();
    }
  };
  let lastOut = -1;

  // ══ THE FLOOR (the counter): a shadow catcher and a soft contact pool under the base ══
  const floor = makeFloor({ y: g.floor, x0: g.cx - 900, x1: g.cx + 900, z0: -700, z1: 700, reflect: 0, shadow: 0.42, fadeC: [g.cx, g.z], fadeR: [720, 440] });
  root.add(floor);
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(BW + 70, B_FRONT - B_BACK + 60), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: softTex(), transparent: true, depthWrite: false, opacity: 0.4, toneMapped: false }));
  pool.rotation.x = -Math.PI / 2; pool.position.set(0, 0.3, 0); pool.renderOrder = 1.5;
  pool.userData.isFloor = true; pool.userData.noBounds = true;
  yawG.add(pool);

  return {
    root,
    update: (p) => {
      faceM.map = paintTicket();
      yawG.rotation.y = rad(p.yaw);
      const out = Math.max(0.5, p.feed);
      if (Math.abs(out - lastOut) > 1e-3) { shape(out); lastOut = out; }
      tk.position.y = LID_TOP - IN - p.drop;
      tk.rotation.x = -p.tip;
      (fill.geometry as THREE.PlaneGeometry).dispose();
      const w = Math.max(0.01, 202 * p.prog);
      fill.geometry = new THREE.PlaneGeometry(w, 6);
      fill.position.x = -40 - 101 + w / 2;
      fill.visible = p.prog > 0.005;
      ledMats[1].emissiveIntensity = 1.3 * p.busy;
    },
  };
};
