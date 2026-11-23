// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE PAY IN 3-D (039) — "His own lawsuit spells out the pay: at least $35 million a fight, $15 million for the first."
// On the cream ground, on an unseen table (the floor: its soft shadows), three real sheets of paper:
//   · THE COMPLAINT: the cover page of a court-filed complaint on California pleading paper (its numbered lines and ruled
//     margin), stapled to a legal-blue backing sheet that shows round its edges: UNITED STATES DISTRICT COURT, the caption
//     ÁLVAREZ v. GOLDEN BOY PROMOTIONS, DAZN and the title COMPLAINT. The hand-over brings it in; it lies under the rest.
//   · THE BIG CHEQUE: a pale-green business cheque, PAY TO THE ORDER OF SAÚL ÁLVAREZ, its amount box AT LEAST $35,000,000 (the complaint's minimum guarantee)
//     and its memo PER FIGHT. It slides in from beyond the right edge on "$35", gliding on its own air, touches down and
//     brakes, landing across the complaint's lower half (the caption and COMPLAINT stay clear above it).
//   · THE SMALLER CHEQUE: a pale-blue personal-size cheque, $15,000,000 (what the complaint says he received for the first: no "at least"), memo FIRST FIGHT, slid in from the left on "$15",
//     landing on the table in front of the big one (never touching it).
// Every sheet is kit029 `paper` (a real edge band, its corners curling where nothing lies on them). No figure is summed.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, paintTex, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, hash, paper, typeLines, font } from "../kit029";
import { GLIDE, clamp01 } from "../../r45/tokens";

export const PAY_FLOOR = 1300;
/** a sheet lying on the table: size (w across, d deep), centre (x, z), turn (deg), the height of its underside, thickness */
export type Sheet = { w: number; d: number; x: number; z: number; yaw: number; h: number; t: number };
export const CP: Sheet = { w: 460, d: 595, x: 520, z: -120, yaw: -3, h: 1.05, t: 0.6 };      // the complaint (its face page)
export const BACKER = { w: 476, d: 622, dz: -11, h: 0.3, t: 0.55 } as const;                 // the blue back, under it
export const C1: Sheet = { w: 640, d: 272, x: 540, z: 20, yaw: -2, h: 1.95, t: 0.5 };       // $35,000,000 PER FIGHT
export const C2: Sheet = { w: 470, d: 206, x: 486, z: 314, yaw: 3, h: 0.3, t: 0.5 };      // $15,000,000 FIRST FIGHT

export type PayTiming = { c1: readonly [number, number]; c2: readonly [number, number] };
const ss = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** a cheque's slide: from beyond the edge (side +1 right, −1 left), gliding a little above the table on its own air, touching
 *  down at 80% of the run and braking to rest, turning square as it goes */
const slide = (s: Sheet, [a, b]: readonly [number, number], side: number, dist: number, spin: number, f: number) => {
  const u = clamp01((f - a) / (b - a));
  return { x: s.x + side * dist * (1 - GLIDE(u)), z: s.z - 14 * (1 - GLIDE(u)), h: s.h + 26 * (1 - ss(0, 0.8, u)), yaw: s.yaw + spin * (1 - GLIDE(u)), visible: f > a - 1 };
};
export const poseC1 = (T: PayTiming, f: number) => slide(C1, T.c1, 1, 1150, -11, f);
export const poseC2 = (T: PayTiming, f: number) => slide(C2, T.c2, -1, 1050, 10, f);

/** a point of a sheet (u, v in its print's px, from its top-left; the top is the far side) on the table, at a pose */
export const sheetPt = (s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }, u: number, v: number, top = 1) => {
  const lx = u - s.w / 2, lz = v - s.d / 2, a = rad(p.yaw), c = Math.cos(a), sn = Math.sin(a);
  return { x: p.x + lx * c + lz * sn, h: p.h + top, z: p.z - lx * sn + lz * c };
};
export const corners = (s: { w: number; d: number }, p: { x: number; z: number; yaw: number; h: number }) =>
  [[0, 0], [s.w, 0], [s.w, s.d], [0, s.d]].map(([u, v]) => sheetPt(s, p, u, v));
/** where the readable print sits on each sheet (print px boxes: x0, y0, x1, y1) */
export const PRINT = {
  title: [80, 60, 420, 262] as const,        // the complaint's caption and COMPLAINT
  c1: [24, 74, 616, 236] as const,          // the big cheque's payee, amount and memo
  c2: [18, 56, 452, 184] as const,
};

// ══ PRINT ══
const INK = "#22201D";
const grain = (g: CanvasRenderingContext2D, w: number, h: number, n: number, seed: number, dark: string, light: string) => {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${hash(i, 1, seed) > 0.5 ? dark : light},${0.03 + 0.05 * hash(i, 2, seed)})`;
    g.fillRect(hash(i, 3, seed) * w, hash(i, 4, seed) * h, 0.4 + hash(i, 5, seed) * 1.8, 0.25);
  }
};
const complaintTex = () => paintTex("pay-complaint", CP.w, CP.d, (g) => {
  const W = CP.w, H = CP.d;
  g.fillStyle = "#FBFAF5"; g.fillRect(0, 0, W, H);
  grain(g, W, H, 3200, 11, "120,110,95", "255,255,250");
  // pleading paper: the ruled left margin (a double rule), the right rule, and the numbered lines 1–28
  g.fillStyle = "rgba(34,32,29,0.55)";
  g.fillRect(50, 0, 0.9, H); g.fillRect(53.5, 0, 0.9, H); g.fillRect(W - 34, 0, 0.7, H);
  g.textAlign = "right"; g.textBaseline = "alphabetic"; g.fillStyle = "rgba(34,32,29,0.5)"; font(g, 500, 9);
  const L0 = 44, LS = (H - 62) / 28;
  for (let i = 1; i <= 28; i++) g.fillText(String(i), 42, L0 + (i - 1) * LS);
  // the counsel's block, top left (greeked)
  typeLines(g, 64, 16, 168, 4, 9, 3.2, 0.32, 3);
  // the court
  g.fillStyle = INK; g.textAlign = "center";
  const CX = (54 + W - 34) / 2;
  track(g, 1.2); fitFont(g, 800, 15, "UNITED STATES DISTRICT COURT", 330); g.fillText("UNITED STATES DISTRICT COURT", CX, 74);
  track(g, 0.8); fitFont(g, 600, 12, "CENTRAL DISTRICT OF CALIFORNIA", 300); g.fillText("CENTRAL DISTRICT OF CALIFORNIA", CX, 90); track(g, 0);
  // the caption: the parties, plainly
  g.fillRect(70, 102, W - 124, 1.1);
  fitFont(g, 800, 34, "ÁLVAREZ", 320); g.fillText("ÁLVAREZ", CX, 138);
  font(g, 600, 17); g.fillText("v.", CX, 161);
  fitFont(g, 800, 26, "GOLDEN BOY PROMOTIONS, DAZN", W - 140); g.fillText("GOLDEN BOY PROMOTIONS, DAZN", CX, 189);
  g.fillRect(70, 203, W - 124, 1.1);
  // the title
  track(g, 5); fitFont(g, 800, 52, "COMPLAINT", 320); g.fillText("COMPLAINT", CX + 2.5, 254); track(g, 0);
  // the body (greeked: not for reading), under where the cheque will lie
  typeLines(g, 70, 292, W - 124, 10, LS, 3.4, 0.3, 5);
  typeLines(g, 70, 292 + 10 * LS + 4, W - 124, 4, LS, 3.4, 0.3, 9);
}, 3);
const chequeTex = (key: string, w: number, h: number, o: { tint: string; wave: string; amount: string; memo: string; no: string; least: boolean }) => paintTex(key, w, h, (g) => {
  g.fillStyle = o.tint; g.fillRect(0, 0, w, h);
  // the security tint: fine interlaced waves
  g.strokeStyle = o.wave; g.lineWidth = 0.35;
  for (let k = 0; k < Math.ceil(h / 3.4); k++) { g.beginPath(); for (let x = 0; x <= w; x += 3) { const y = k * 3.4 + 2.1 * Math.sin(x * 0.06 + k * 0.7); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke(); }
  grain(g, w, h, 1400, key.length, "90,100,90", "255,255,250");
  // the border
  g.strokeStyle = "rgba(34,32,29,0.5)"; g.lineWidth = 0.9; g.strokeRect(8, 8, w - 16, h - 16);
  const s = w / 640;   // the layout is drawn for the big cheque's 640 px and scaled for the small one
  // top row: the drawer's block (greeked), the number and the date line
  typeLines(g, 24 * s, 22 * s, 150 * s, 2, 9 * s, 3.2 * s, 0.3, 2);
  g.fillStyle = INK; g.textAlign = "right"; g.textBaseline = "alphabetic";
  font(g, 700, 12 * s); g.fillText(o.no, w - 24 * s, 32 * s);
  g.textAlign = "left"; font(g, 600, 9 * s); g.fillText("DATE", w - 196 * s, 54 * s);
  g.fillRect(w - 166 * s, 55 * s, 142 * s, 0.7);
  // the payee
  font(g, 700, 9 * s); g.fillText("PAY TO THE", 24 * s, 92 * s); g.fillText("ORDER OF", 24 * s, 103 * s);
  fitFont(g, 700, 24 * s, "SAÚL ÁLVAREZ", 200 * s); g.fillText("SAÚL ÁLVAREZ", 86 * s, 104 * s);
  g.fillRect(86 * s, 109 * s, 238 * s, 0.8);
  // the amount, big, in its ruled box
  const bx = 344 * s, by = 74 * s, bw = 272 * s, bh = 78 * s;
  g.fillStyle = "rgba(255,255,252,0.55)"; g.fillRect(bx, by, bw, bh);
  g.strokeStyle = INK; g.lineWidth = 1.4; g.strokeRect(bx, by, bw, bh);
  g.fillStyle = INK; g.textAlign = "left"; if (o.least) { track(g, 1); font(g, 700, 9.5 * s); g.fillText("AT LEAST", bx + 8 * s, by + 15 * s); track(g, 0); }
  g.textAlign = "center"; fitFont(g, 800, 46 * s, o.amount, bw - 20 * s); g.fillText(o.amount, bx + bw / 2, by + bh - 14 * s);
  // the written amount line (greeked) and the bank's line
  typeLines(g, 24 * s, 128 * s, 300 * s, 1, 10, 3 * s, 0.26, 4);
  g.fillRect(24 * s, 140 * s, 300 * s, 0.7);
  // the memo, big
  g.textAlign = "left"; font(g, 700, 9 * s); g.fillText("MEMO", 24 * s, 226 * s);
  fitFont(g, 800, 40 * s, o.memo, 260 * s); g.fillText(o.memo, 66 * s, 226 * s);
  g.fillRect(66 * s, 232 * s, 270 * s, 0.9);
  // the signature line (greeked)
  g.fillRect(w - 256 * s, 222 * s, 232 * s, 0.9);
  typeLines(g, w - 252 * s, 228 * s, 120 * s, 1, 10, 2.6 * s, 0.22, 6);
  // the MICR line (greeked)
  typeLines(g, 60 * s, h - 22 * s, 380 * s, 1, 10, 4 * s, 0.4, 8);
}, 3);

/** a sheet lying flat (print up, its top the far side), its underside at y = 0 of the returned group */
const lying = (o: Parameters<typeof paper>[0]) => {
  const g = new THREE.Group();
  const s = paper(o);
  s.rotation.x = -Math.PI / 2;
  s.position.y = o.t ?? 1.2;
  g.add(s);
  return g;
};

export type PayP = { f: number };

export const payModel = (T: PayTiming) => (): Model<PayP> => {
  const root = new THREE.Group();
  const FY = -PAY_FLOOR;

  // ══ THE COMPLAINT, on its legal-blue back (one object: the back, the face page and its two staples) ══
  const cp = new THREE.Group(); cp.userData.obj = "complaint";
  cp.position.set(CP.x, FY, CP.z); cp.rotation.y = rad(CP.yaw); root.add(cp);
  {
    const blue = M.paper("#3E5F8E");
    const back = lying({ w: BACKER.w, h: BACKER.d, t: BACKER.t, face: blue, back: M.paper("#36557F"), edge: M.paper("#36557F"), seg: 30 });
    back.position.set(0, BACKER.h, BACKER.dz);
    cp.add(back);
    const face = lying({ w: CP.w, h: CP.d, t: CP.t, face: M.print(complaintTex(), 0.9), back: M.paper("#EFEDE6"), edge: M.paper("#E9E6DE"), seg: 48,
      curls: [{ corner: "tr", r: 110, lift: 4 }] });
    face.position.set(0, CP.h, 0);
    cp.add(face);
    // two staples through both at the top margin
    const steel = M.steel("#C3C8CE");
    for (const sx of [-150, 150]) {
      const st = rbox(22, 1.0, 2.2, 0.45, steel, 2);
      st.position.set(sx, CP.h + CP.t + 0.5, -CP.d / 2 + 14 + 1.1);
      cp.add(st);
    }
  }

  // ══ THE CHEQUES ══
  const c1Tex = chequeTex("pay-cheque-35", C1.w, C1.d, { tint: "#DCE7D2", wave: "rgba(80,125,95,0.2)", amount: "$35,000,000", memo: "PER FIGHT", no: "No. 1001", least: true });
  const c2Tex = chequeTex("pay-cheque-15", C2.w, C2.d, { tint: "#D7E1EC", wave: "rgba(70,100,140,0.2)", amount: "$15,000,000", memo: "FIRST FIGHT", no: "No. 1000", least: false });
  const ch1 = new THREE.Group(); ch1.userData.obj = "cheque-35"; root.add(ch1);
  ch1.add(lying({ w: C1.w, h: C1.d, t: C1.t, face: M.print(c1Tex, 0.82), back: M.paper("#D3DECA"), edge: M.paper("#CBD7C2"), seg: 48,
    curls: [{ corner: "tr", r: 80, lift: 3 }] }));
  const ch2 = new THREE.Group(); ch2.userData.obj = "cheque-15"; root.add(ch2);
  ch2.add(lying({ w: C2.w, h: C2.d, t: C2.t, face: M.print(c2Tex, 0.82), back: M.paper("#CFD9E4"), edge: M.paper("#C7D2DE"), seg: 44,
    curls: [{ corner: "bl", r: 70, lift: 3 }, { corner: "tr", r: 60, lift: 2 }] }));

  root.add(makeFloor({ y: PAY_FLOOR, x0: -600, x1: 1700, z0: -900, z1: 900, reflect: 0, shadow: 0.42, fadeC: [540, 40], fadeR: [900, 640] }));

  const place = (g: THREE.Group, p: { x: number; z: number; h: number; yaw: number; visible: boolean }) => {
    g.visible = p.visible; g.position.set(p.x, FY + p.h, p.z); g.rotation.y = rad(p.yaw);
  };
  return {
    root,
    update: (p) => {
      place(ch1, poseC1(T, p.f));
      place(ch2, poseC2(T, p.f));
    },
  };
};
