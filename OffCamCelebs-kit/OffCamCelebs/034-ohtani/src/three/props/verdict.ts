// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE VERDICT IN 3-D — "So, here's the audit. 700 million dollars on paper. About 460 in today's money. Our rating:
// inflated. Send us who to audit next." On the dark ground, three real things, modelled from the real ones:
//   · THE CONTRACT on a CLIPBOARD, resting on a light-oak READING STAND (a slanted panel on a hinged strut, a ledge and lip
//     at its foot): a brown hardboard board with rounded corners, a nickel LEVER CLIP (a base plate with two dome rivets, the
//     hinge roll, the jaw pressing the pages, a wire lever loop), and three pages under it (the two below show their edges).
//     The top page is a real contract page, typeset at true point sizes in a Times-metric serif: letterhead, title, numbered
//     clauses, the compensation clause with its ruled box and the typed $700,000,000, signature lines with ink signatures,
//     initials and a page number; paper fibre and a letter's Z of creases (the film's 2nd and last document visual);
//   · THE CASH: a smaller pile of strapped $100 bundles (cash.ts) on the floor beside it — two piles and a loose bundle;
//   · THE STAMP on its INK PAD: a turned walnut knob and neck, a beech mount with the die's index print on top, a grey
//     cushion, a red rubber die with relief letters (mirrored); the pad a steel tin with a hinged lid standing open and an
//     inked felt. On "inflated" the stamp lifts off the pad, travels over, turns square to the page, presses along the page's
//     normal, lifts away and is set back on its pad, leaving INFLATED in red ink (one of the film's 2–3 labels).
// ★ No plate on the cash (the user, 2026-10-23: "there are labels all over the visuals"): the pile and the caption carry 460.
// ★ The verdict rates the "$700 million" headline (the brief): the contract names neither party; the stamp lands on its figure.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, liveTex, slabOf, roundRect, paintTex, type Model } from "../stage";
import { M, rbox, rad, font, fitFont, track, paper, paperTop, paperAt, wire, hash, type PaperOpts } from "../kit029";
import { pile } from "../cash";

export type VerdictGeo = { floor: number; board: { x: number; z: number }; pad: { x: number; z: number }; cash: { x: number; z: number }; word: string; figure: string };
/** stamp: 0 at home on the pad → 1 lifted → 2 above the page → 3 pressed (and back down the same path); ink 0 → 1; yaw */
export type VerdictP = { stamp: number; ink: number; yaw: number };

const RED = "#B23A33";
const LEAN = rad(34);                 // the stand's slope from the floor (a writing slope)
const SER = '"Times New Roman", "Liberation Serif", serif';
const MONO = '"Courier New", "Liberation Mono", monospace';
// the page (US letter at 47.5 px per inch: 1 pt = 0.66 px)
const SW = 404, SH = 523;
// where the stamp lands on the page (page px from its top-left) and its turn (rad, + = anticlockwise on the page)
export const IMPRESSION = { x: 136, y: 214, w: 186, h: 62, turn: 0.075 };

// ── a tiny typesetter: runs of words, wrapped to a measure and justified ──
type Run = { t: string; b?: boolean; i?: boolean };
const setFont = (g: CanvasRenderingContext2D, size: number, r: { b?: boolean; i?: boolean }) => { g.font = `${r.i ? "italic " : ""}${r.b ? 700 : 400} ${size}px ${SER}`; };
const para = (g: CanvasRenderingContext2D, runs: Run[], x: number, y: number, w: number, size: number, lead: number, indent = 0) => {
  const words: (Run & { w: number })[] = [];
  for (const r of runs) for (const t of r.t.split(/\s+/).filter(Boolean)) { setFont(g, size, r); words.push({ ...r, t, w: g.measureText(t).width }); }
  setFont(g, size, {}); const sp = g.measureText(" ").width;
  let line: typeof words = [], lw = 0, yy = y, first = true;
  const flush = (last: boolean) => {
    const avail = w - (first ? indent : 0);
    const gap = !last && line.length > 1 ? sp + (avail - lw) / (line.length - 1) : sp;
    let xx = x + (first ? indent : 0);
    for (const wd of line) { setFont(g, size, wd); g.fillText(wd.t, xx, yy); xx += wd.w + gap; }
    yy += lead; line = []; lw = 0; first = false;
  };
  for (const wd of words) {
    const need = (line.length ? lw + sp : 0) + wd.w;
    if (line.length && need > w - (first ? indent : 0)) flush(false);
    lw = (line.length ? lw + sp : 0) + wd.w; line.push(wd);
  }
  if (line.length) flush(true);
  return yy;
};
/** a hand signature: a run of cursive loops and humps in blue-black ink, never the same twice */
const signature = (g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, seed: number, lw = 0.75) => {
  g.save(); g.strokeStyle = "rgba(24,32,78,0.92)"; g.lineCap = "round"; g.lineJoin = "round";
  // ★ a real hand: a large looped capital, then a run of slanted letters of uneven size (loops for e/l, humps for n/m,
  //   the odd descender), a pen lift and a second word, a crossing stroke; the width follows the pen's pressure
  const SL = 0.42;   // the slant
  const strokes: [number, number, number][][] = [];
  const trochoid = (x0: number, base: number, cw: number, hh: number, loop: number, n: number, out: [number, number, number][]) => {
    for (let s = 0; s <= n; s++) {
      const t = (s / n) * Math.PI * 2;
      const lx = x0 + (cw * t) / (Math.PI * 2) - loop * Math.sin(t), ly = base - hh * (1 - Math.cos(t)) / 2;
      out.push([lx + (base - ly) * SL, ly, 0.55 + 0.6 * Math.abs(Math.sin(t / 2))]);
    }
  };
  const words = hash(seed, 9, 9) > 0.35 ? 2 : 1;
  let px = x;
  for (let wd = 0; wd < words; wd++) {
    const st: [number, number, number][] = [];
    const ww = (w * (wd === 0 ? 0.42 : 0.5)) / (words === 1 ? 0.5 : 1);
    // the capital: a tall loop that starts below the line and swings up
    const ch = h * (1.15 + 0.25 * hash(seed, wd, 1));
    st.push([px - 1, y + 1.5, 0.4]);
    trochoid(px, y, ww * 0.16, ch, ww * 0.09, 18, st);
    let cx = px + ww * 0.17;
    const n = 4 + Math.floor(hash(seed, wd, 2) * 4);
    for (let k = 0; k < n; k++) {
      const r = hash(seed, wd * 17 + k, 3), cw = (ww * 0.8) / n * (0.7 + 0.6 * hash(seed, wd * 17 + k, 4));
      if (r > 0.82) { // a descender (g, y): down below the line and back up through a loop
        for (let s = 0; s <= 10; s++) { const t = (s / 10) * Math.PI * 2; const ly = y + h * 0.55 * Math.sin(t / 2); st.push([cx + (cw * s) / 10 - cw * 0.25 * Math.sin(t) + (y - ly) * SL, ly, 0.7]); }
      } else trochoid(cx, y, cw, r > 0.6 ? h * (0.8 + 0.2 * r) : h * (0.3 + 0.22 * r), r > 0.6 ? cw * 0.32 : r > 0.3 ? cw * 0.18 : 0, 10, st);
      cx += cw;
    }
    st.push([cx + ww * 0.08, y - h * 0.15, 0.3]);   // the tail lifts off
    strokes.push(st);
    px = cx + w * 0.1;
  }
  // the crossing stroke and an underline flourish
  strokes.push([[x + w * 0.05, y - h * 0.5, 0.4], [x + w * 0.3, y - h * 0.62, 0.8], [x + w * 0.55, y - h * 0.55, 0.3]]);
  strokes.push([[x + w * 0.02, y + 2.6, 0.3], [x + w * 0.4, y + 3.6, 0.9], [x + w * 0.8, y + 2.4, 0.7], [Math.min(px, x + w * 1.05), y - 1.2, 0.2]]);
  for (const st of strokes) for (let i = 1; i < st.length; i++) {
    g.lineWidth = lw * (st[i - 1][2] + st[i][2]) / 2 * 1.25;
    g.beginPath(); g.moveTo(st[i - 1][0], st[i - 1][1]); g.lineTo(st[i][0], st[i][1]); g.stroke();
  }
  g.restore();
};
/** the contract page, painted once: 404 × 523 page px at ×4 */
const contractTex = (figure: string) => paintTex(`vd-contract-v5:${figure}`, SW, SH, (g) => {
  // the paper: a warm white, its fibre and a slight tooth, its edges a shade older
  g.fillStyle = "#FAF8F1"; g.fillRect(0, 0, SW, SH);
  for (let i = 0; i < 2400; i++) { g.fillStyle = `rgba(${hash(i, 1, 1) > 0.5 ? "90,80,60" : "255,255,255"},${0.03 + 0.04 * hash(i, 2, 2)})`; g.fillRect(hash(i, 3, 3) * SW, hash(i, 4, 4) * SH, 0.4 + hash(i, 5, 5) * 1.6, 0.25); }
  const eg = g.createRadialGradient(SW / 2, SH / 2, SH * 0.35, SW / 2, SH / 2, SH * 0.75);
  eg.addColorStop(0, "rgba(255,255,255,0)"); eg.addColorStop(1, "rgba(150,125,80,0.10)");
  g.fillStyle = eg; g.fillRect(0, 0, SW, SH);
  const L = 36, R = SW - 36, MW = R - L;
  g.fillStyle = "#16120E"; g.textBaseline = "alphabetic";
  // the letterhead
  g.textAlign = "center";
  g.font = `700 5.4px ${SER}`; track(g, 1.6); g.fillText("MAJOR LEAGUE BASEBALL", SW / 2, 30);
  g.font = `700 10.6px ${SER}`; track(g, 0.9); g.fillText("UNIFORM PLAYER'S CONTRACT", SW / 2, 44); track(g, 0);
  g.fillRect(L, 50, MW, 0.8); g.fillRect(L, 52, MW, 0.35);
  g.textAlign = "left";
  const S = 5.9, LD = 7.6;   // 9 pt on 11.5 pt
  let y = 62;
  y = para(g, [{ t: "THIS AGREEMENT", b: true }, { t: "is made between the Club named below, a member of Major League Baseball, and the Player named below. In consideration of the facts above recited and of the promises of each to the other, the parties agree as follows:" }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "1. Employment.", b: true }, { t: "The Club hereby employs the Player to render, and the Player agrees to render, skilled services as a baseball player during the years 2024 through 2033, inclusive, including the Club's training seasons, exhibition games and championship seasons, and any official series in which the Club may participate." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "2. Payment.", b: true }, { t: "For performance of the Player's services and promises hereunder, the Club will pay the Player the aggregate sum stated below, in the manner provided in Paragraph 3 and in the Special Covenants attached hereto:" }], L, y, MW, S, LD, 10) + 1;
  // ★ the compensation box: ruled, its label and the typed figure FITTED to it by measurement (fitFont)
  const bx = L + 10, bw = MW - 20, by = y, bh = 31;
  g.strokeStyle = "#16120E"; g.lineWidth = 0.7; g.strokeRect(bx, by, bw, bh); g.lineWidth = 0.3; g.strokeRect(bx + 1.6, by + 1.6, bw - 3.2, bh - 3.2);
  const split = bx + bw * 0.42;
  g.lineWidth = 0.5; g.beginPath(); g.moveTo(split, by + 1.6); g.lineTo(split, by + bh - 1.6); g.stroke();
  g.font = `700 5.2px ${SER}`; track(g, 0.9); g.fillText("TOTAL COMPENSATION", bx + 7, by + 13); track(g, 0);
  g.font = `italic 400 4.9px ${SER}`; g.fillText("Seven Hundred Million Dollars", bx + 7, by + 22);
  g.font = `400 4.9px ${SER}`; g.fillText("(U.S.)", bx + 7 + g.measureText("Seven Hundred Million Dollars ").width + 3, by + 22);
  g.textAlign = "center"; g.fillStyle = "#121014";
  const fw = bw - (split - bx) - 16;
  let fs = 15; g.font = `700 ${fs}px ${MONO}`; while (g.measureText(figure).width > fw && fs > 6) { fs *= 0.97; g.font = `700 ${fs}px ${MONO}`; }
  g.fillText(figure, (split + bx + bw) / 2, by + bh / 2 + fs * 0.34);
  // the typewriter's ink: a second, slightly offset impression at low strength
  g.globalAlpha = 0.25; g.fillText(figure, (split + bx + bw) / 2 + 0.25, by + bh / 2 + fs * 0.34 + 0.15); g.globalAlpha = 1;
  g.textAlign = "left"; g.fillStyle = "#16120E";
  y = by + bh + 10;
  y = para(g, [{ t: "3. Deferred Compensation.", b: true }, { t: "Of the sum stated in Paragraph 2, $680,000,000 shall be deferred and paid to the Player in ten equal annual installments of $68,000,000 each, on July 1 of each year from 2034 through 2043, without interest." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "4. Loyalty.", b: true }, { t: "The Player agrees to perform his services hereunder diligently and faithfully, to keep himself in first-class physical condition, to obey the Club's training rules, and to conform to high standards of personal conduct, fair play and good sportsmanship." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "5. Rules.", b: true }, { t: "The Club and the Player agree to accept, abide by and comply with the Major League Constitution, the Major League Rules and the Basic Agreement in effect on the date of this contract, which are made a part hereof." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "6. Assignment.", b: true }, { t: "This contract may be assigned by the Club only in accordance with the Major League Rules and the Basic Agreement, and only upon written notice to the Player." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "7. Pictures and Appearances.", b: true }, { t: "The Player agrees that his picture may be taken for still photographs, motion pictures or television at such times as the Club may designate, and that all rights in such pictures shall belong to the Club." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "8. Disputes.", b: true }, { t: "All disputes between the Player and the Club arising under this contract shall be resolved in accordance with the Grievance Procedure set forth in the Basic Agreement." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "9. Special Covenants.", b: true }, { t: "The Special Covenants attached hereto, consisting of three pages and initialled by both parties, form a part of this contract; in the event of any conflict the Special Covenants shall control." }], L, y, MW, S, LD, 10) + 5;
  y = para(g, [{ t: "10. Termination.", b: true }, { t: "This contract may be terminated by the Club only as provided in the Major League Rules and the Basic Agreement; in the event of termination the Player shall be paid all sums then earned, including every deferred installment under Paragraph 3." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "11. Notices.", b: true }, { t: "Any notice required under this contract shall be in writing and delivered by hand or by registered mail to the party's address on file with the Office of the Commissioner." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "12. Governing Law.", b: true }, { t: "This contract shall be governed by and construed under the laws of the State of California, without regard to its conflict of laws principles." }], L, y, MW, S, LD, 10) + 3;
  y = para(g, [{ t: "13. Entire Agreement.", b: true }, { t: "This contract, together with the Special Covenants and the documents incorporated by reference, sets forth the entire agreement between the parties and may be amended only by a writing signed by both and approved by the Commissioner." }], L, y, MW, S, LD, 10) + 5;
  y = para(g, [{ t: "IN WITNESS WHEREOF", b: true }, { t: "the parties have signed this contract on the date written below." }], L, y, MW, S, LD, 10) + 4;
  // the signature block: two columns, each an ink signature on its line, the typed role under it
  const sy = Math.max(y + 26, 448), cw = (MW - 30) / 2;
  for (const [k, x0] of [[0, L], [1, L + cw + 30]] as const) {
    signature(g, x0 + 6, sy - 3, cw * 0.78, 11, 17 + k * 29);
    g.fillStyle = "#16120E"; g.fillRect(x0, sy, cw, 0.5);
    g.font = `700 5px ${SER}`; track(g, 0.8); g.fillText(k ? "PLAYER" : "CLUB", x0, sy + 8); track(g, 0);
    g.font = `400 4.8px ${SER}`; g.fillText(k ? "Signature" : "By (Authorized Signature)", x0, sy + 15);
  }
  g.font = `400 5.2px ${MONO}`; g.fillText("Dated: December 2023", L, sy + 27);
  // the footer: initials in their boxes, the form's number and the page
  const fy = SH - 18;
  g.fillRect(L, fy - 7, MW, 0.35);
  g.font = `400 4.4px ${SER}`; g.fillText("Initials:  Club", L, fy);
  g.strokeStyle = "#16120E"; g.lineWidth = 0.35; g.strokeRect(L + 32, fy - 6, 20, 8); g.fillText("Player", L + 58, fy); g.strokeRect(L + 73, fy - 6, 20, 8);
  signature(g, L + 34, fy - 0.6, 15, 5, 71, 0.5); signature(g, L + 75, fy - 0.6, 15, 5, 83, 0.5);
  g.textAlign = "right"; g.fillText("Form UPC  Rev. 2023        Page 1 of 4", R, fy); g.textAlign = "left";
}, 4);

/** a wood's grain (light oak, beech, walnut): long wavering fibres, a ray fleck or two, painted once */
const grain = (key: string, w: number, h: number, base: string, dark: string, light: string, along: "x" | "y" = "y") => paintTex(key, w, h, (g) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  const L = along === "y" ? h : w, A = along === "y" ? w : h;
  for (let i = 0; i < A * 0.9; i++) {
    const p = hash(i, w, 1) * A, ph = hash(i, h, 2) * 6, amp = 0.6 + hash(i, 3, w) * 2.2;
    g.strokeStyle = hash(i, 4, 4) > 0.45 ? dark : light; g.globalAlpha = 0.18 + 0.3 * hash(i, 5, 5); g.lineWidth = 0.3 + hash(i, 6, 6) * 0.9;
    g.beginPath();
    for (let s = 0; s <= L; s += 6) { const q = p + Math.sin(s * 0.012 + ph) * amp + Math.sin(s * 0.05 + ph * 2) * 0.4; if (along === "y") { if (s === 0) g.moveTo(q, s); else g.lineTo(q, s); } else { if (s === 0) g.moveTo(s, q); else g.lineTo(s, q); } }
    g.stroke();
  }
  g.globalAlpha = 1;
}, 2);

export const verdictModel = (g: VerdictGeo) => (): Model<VerdictP> => {
  const root = new THREE.Group();
  const FY = -g.floor;
  const sa = Math.sin(LEAN), ca = Math.cos(LEAN);

  // ══ THE READING STAND (light oak) and its tilted frame: x across, y up the slope, z the panel's normal ══
  const stand = new THREE.Group();
  stand.position.set(g.board.x, FY, g.board.z);
  root.add(stand);
  const tilt = new THREE.Group();
  tilt.rotation.x = -Math.PI / 2 + LEAN;
  const PT = 12, PW = 470, PH = 480;
  tilt.position.y = PT * ca + 0.3;   // the panel's back foot on the floor
  stand.add(tilt);
  /** a point of the tilted frame in the stand's frame */
  const onTilt = (x: number, y: number, z: number) => new THREE.Vector3(x, y * sa + z * ca + tilt.position.y, -y * ca + z * sa);
  const oakF = new THREE.MeshStandardMaterial({ map: grain("vd-oak-v1", 240, 240, "#B98E5C", "#7A5530", "#D8B585"), roughness: 0.55, envMapIntensity: 0.5 });
  const oakE = M.satin("#A87E4E", 0.55);
  const standA = new THREE.Group(); standA.userData.obj = "stand"; tilt.add(standA);
  const panel = rbox(PW, PH, PT, 4, { px: oakE, nx: oakE, top: oakE, bottom: oakE, front: oakF, back: oakF });
  panel.position.set(0, PH / 2, 0);
  standA.add(panel);
  const ledge = rbox(PW, 18, 34, 3, { px: oakE, nx: oakE, top: oakF, bottom: oakE, front: oakE, back: oakE });
  ledge.position.set(0, 9, 34);
  standA.add(ledge);
  const lip = rbox(PW, 14, 7, 2.2, oakE);
  lip.position.set(0, 25, 34);
  standA.add(lip);
  // its brass hinge leaf on the panel's back, the knuckle, and the strut down to the floor
  const brass = M.gold("#B98F40");
  const leaf = rbox(64, 30, 1.2, 0.4, brass);
  leaf.position.set(0, 336 + 15, -PT - 0.1);
  standA.add(leaf);
  const standB = new THREE.Group(); standB.userData.obj = "stand"; stand.add(standB);
  const K = onTilt(0, 330, -PT - 5.6);
  const knuckle = mesh(new THREE.CylinderGeometry(5.5, 5.5, 64, 24).rotateZ(Math.PI / 2), brass);
  knuckle.position.copy(K);
  standB.add(knuckle);
  const beta = rad(28), sb = Math.sin(beta), cb2 = Math.cos(beta);
  const strutLen = (K.y - 0.3 - 5 * sb) / cb2;
  const strutG = new THREE.Group();
  strutG.position.copy(K);
  strutG.rotation.x = beta;   // its axis up and toward the panel (0, cos β, sin β); it runs DOWN and back from the knuckle
  const strut = rbox(44, strutLen, 10, 3, { px: oakE, nx: oakE, top: oakE, bottom: oakE, front: oakF, back: oakF });
  strut.position.set(0, -strutLen / 2, 5);
  strutG.add(strut);
  standB.add(strutG);

  // ══ THE CLIPBOARD on the stand's ledge: hardboard with rounded corners ══
  const BW = 440, BH = 600, BT = 6;
  const B0 = 18.3;   // its foot on the ledge
  const hb = paintTex("vd-hardboard-v1", 220, 300, (c) => {
    c.fillStyle = "#7C5233"; c.fillRect(0, 0, 220, 300);
    for (let i = 0; i < 1800; i++) { c.fillStyle = `rgba(${hash(i, 9, 1) > 0.5 ? "40,22,10" : "170,120,80"},${0.06 + 0.06 * hash(i, 9, 2)})`; c.fillRect(hash(i, 9, 3) * 220, hash(i, 9, 4) * 300, 0.5 + hash(i, 9, 5) * 2.5, 0.5); }
    const sh = c.createLinearGradient(0, 0, 220, 300); sh.addColorStop(0, "rgba(255,230,200,0.05)"); sh.addColorStop(1, "rgba(0,0,0,0.08)");
    c.fillStyle = sh; c.fillRect(0, 0, 220, 300);
  }, 2);
  const boardM = new THREE.MeshPhysicalMaterial({ map: hb, roughness: 0.48, clearcoat: 0.3, clearcoatRoughness: 0.5, envMapIntensity: 0.5 });
  const board = mesh(slabOf(roundRect(BW, BH, 14), BT, 1.2), [boardM, M.satin("#5E3C22", 0.7)]);
  board.position.set(0, B0 + BH / 2, 0.3 + BT);
  board.userData.obj = "clipboard";
  tilt.add(board);
  const BF = 0.3 + BT;   // the board's front (z)

  // ══ THE PAGES: three sheets, the top one the contract; each set back by its thickness + 0.3 ══
  const SY = 570 - SH / 2;   // the pages' centre (their top at y 570, under the jaw)
  const base: Omit<PaperOpts, "face"> = { w: SW, h: SH, t: 0.8, bow: 1.4, folds: [{ at: 0.335, depth: 1.1 }, { at: 0.665, depth: 0.7 }], wave: 0.25, seed: 3, seg: 30 };
  const edgeM = M.paper("#EEEAE0");
  const PG = [{ dx: -3.2, dy: -6.5, face: M.paper("#F2EFE6") }, { dx: 2.6, dy: -3.4, face: M.paper("#F5F2EA") }];
  const sheetZ = (k: number) => BF + 0.3 + 0.8 + k * (0.8 + 0.3);
  PG.forEach((p, k) => {
    const s = paper({ ...base, face: p.face, edge: edgeM });
    s.position.set(p.dx, SY + p.dy, sheetZ(k));
    s.userData.obj = `page${k + 2}`;
    tilt.add(s);
  });
  const topO: PaperOpts = { ...base, face: M.print(contractTex(g.figure), 0.86), edge: edgeM, curls: [{ corner: "br", r: 74, lift: 6 }] };
  const top = paper(topO);
  const TZ = sheetZ(2);
  top.position.set(0, SY, TZ);
  top.userData.obj = "contract";
  tilt.add(top);
  /** a page px (from the top-left) → the top sheet's local x, y */
  const pageXY = (px: number, py: number) => [px - SW / 2, SH / 2 - py] as const;

  // ══ THE INK: a decal that follows the page's own surface over the impression, painted once the die has landed ══
  const IW = 230, IH = 110;
  const ink = liveTex(IW, IH, 4);
  const inkM = new THREE.MeshStandardMaterial({ map: ink.tex, transparent: true, roughness: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
  {
    const [cx, cy] = pageXY(IMPRESSION.x, IMPRESSION.y);
    const pg = new THREE.PlaneGeometry(IW, IH, 23, 11);
    const pp = pg.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pp.count; i++) pp.setZ(i, paperAt(topO, cx + pp.getX(i), cy + pp.getY(i)) + 0.06);
    pg.computeVertexNormals();
    const decal = mesh(pg, inkM, false, true);
    decal.position.set(cx, SY + cy, TZ);
    tilt.add(decal);
  }
  let inked = -1;
  const paintInk = (v: number) => {
    const q = Math.round(v * 20) / 20;
    if (q === inked) return;
    inked = q;
    ink.paint((c) => {
      c.clearRect(0, 0, IW, IH);
      if (q <= 0) return;
      c.save(); c.translate(IW / 2, IH / 2); c.rotate(-IMPRESSION.turn);
      const w = IMPRESSION.w, h = IMPRESSION.h;
      c.globalAlpha = Math.min(1, q * 1.1);
      c.strokeStyle = RED; c.fillStyle = RED;
      c.lineWidth = 3.6; c.beginPath(); c.roundRect(-w / 2, -h / 2, w, h, 7); c.stroke();
      c.lineWidth = 1.1; c.beginPath(); c.roundRect(-w / 2 + 6, -h / 2 + 6, w - 12, h - 12, 4); c.stroke();
      track(c, 3); fitFont(c, 800, 40, g.word, w - 34); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(g.word, 1.5, 2); track(c, 0);
      // a rubber stamp's broken ink: dry specks, a lighter corner where the press was uneven
      c.globalCompositeOperation = "destination-out";
      for (let i = 0; i < 420; i++) { c.globalAlpha = 0.35 + 0.65 * hash(i, 1, 7); const x = -w / 2 + hash(i, 2, 7) * w, y = -h / 2 + hash(i, 3, 7) * h; c.fillRect(x, y, 0.6 + hash(i, 4, 7) * 2.2, 0.5 + hash(i, 5, 7) * 1.2); }
      const fade = c.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2); fade.addColorStop(0, "rgba(0,0,0,0)"); fade.addColorStop(0.7, "rgba(0,0,0,0)"); fade.addColorStop(1, "rgba(0,0,0,0.35)");
      c.globalAlpha = 1; c.fillStyle = fade; c.fillRect(-w / 2 - 4, -h / 2 - 4, w + 8, h + 8);
      c.restore();
    });
  };

  // ══ THE LEVER CLIP (nickel): base plate and rivets, the hinge roll, the jaw on the pages, the wire lever ══
  const clip = new THREE.Group(); clip.userData.obj = "clip"; tilt.add(clip);
  const nickel = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#9EA4A8"), metalness: 1, roughness: 0.3, clearcoat: 0.4, clearcoatRoughness: 0.25, envMapIntensity: 1.0 });
  const plate = rbox(132, 27.6, 1.6, 0.6, nickel);
  plate.position.set(0, (583.4 + 611) / 2, BF + 0.1 + 1.6);
  clip.add(plate);
  const rivetG = new THREE.SphereGeometry(4.2, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI / 2).scale(1, 1, 0.6);
  for (const x of [-50, 50]) { const r = mesh(rivetG, nickel); r.position.set(x, 597, BF + 0.1 + 1.6 + 0.02); clip.add(r); }
  const ROLL_Y = 580, ROLL_R = 3.2, rollZ = BF + 0.1 + ROLL_R;
  const roll = mesh(new THREE.CylinderGeometry(ROLL_R, ROLL_R, 120, 20).rotateZ(Math.PI / 2), nickel);
  roll.position.set(0, ROLL_Y, rollZ);
  clip.add(roll);
  // the jaw: a plate from the roll's top down onto the top page, its foot ON the page (paperTop) — never through it
  const J0 = 552, J1 = 583;
  const zFoot = TZ + paperTop(topO, -62, 62, J0 - SY, J0 + 6 - SY) + 0.3;
  const zHead = rollZ + ROLL_R + 0.05;
  const phi = Math.atan2(zHead - zFoot, J1 - J0), JL = Math.hypot(zHead - zFoot, J1 - J0);
  const jaw = new THREE.Group();
  jaw.position.set(0, J0, zFoot + 1.4);
  jaw.rotation.x = phi;
  const jp = rbox(124, JL, 1.4, 0.6, nickel);
  jp.position.set(0, JL / 2, 0);
  jaw.add(jp);
  clip.add(jaw);
  const jawTopZ = (y: number) => zFoot + 1.4 + (y - J0) * Math.tan(phi);
  const WR = 2.1, wz0 = jawTopZ(581) + WR + 0.15;
  clip.add(wire([[-42, 581, wz0], [-47, 592, 22], [-34, 606, 26.5], [0, 611, 27.5], [34, 606, 26.5], [47, 592, 22], [42, 581, wz0]], WR, nickel, false, 64));

  // ══ THE CASH: two hand-squared piles and a loose bundle on the floor ══
  const CP: [number, number, number, number][] = [[-100, 50, 5, -0.18], [130, -120, 6, 0.12], [140, 200, 1, 0.5]];
  CP.forEach(([dx, dz, n, yaw], i) => {
    const p = pile(`cashv${i}`, n, 40 + i * 9, { turn: 0.035, shift: 3 });
    p.group.position.set(g.cash.x + dx, FY + 0.3, g.cash.z + dz);
    p.group.rotation.y = yaw;
    root.add(p.group);
  });

  // ══ THE INK PAD: a steel tin (a tray of a floor and four walls), the inked felt, the lid standing open on its hinge ══
  const pad = new THREE.Group(); pad.userData.obj = "inkpad"; pad.position.set(g.pad.x, FY, g.pad.z); root.add(pad);
  const tin = M.steel("#8D9398"), tinD = M.satin("#3A3F44", 0.4, 0.6);
  const TW = 230, TD = 108, TH = 16, WT = 3;
  const floorT = rbox(TW, 2, TD, 0.8, tin); floorT.position.set(0, 0.3 + 1, TD / 2); pad.add(floorT);
  for (const [w, d, x, z] of [[TW, WT, 0, TD / 2], [TW, WT, 0, -TD / 2 + WT], [WT, TD - 2 * WT - 0.2, -TW / 2 + WT / 2, TD / 2 - WT - 0.1], [WT, TD - 2 * WT - 0.2, TW / 2 - WT / 2, TD / 2 - WT - 0.1]] as const) {
    const wl = rbox(w, TH - 2, d, 0.8, tin); wl.position.set(x, 2.3 + (TH - 2) / 2, z); pad.add(wl);
  }
  const feltT = paintTex("vd-felt-v1", 220, 100, (c) => {
    c.fillStyle = "#6B1E1C"; c.fillRect(0, 0, 220, 100);
    for (let i = 0; i < 1600; i++) { c.fillStyle = `rgba(${hash(i, 7, 1) > 0.5 ? "30,6,6" : "150,50,45"},${0.1 + 0.15 * hash(i, 7, 2)})`; c.fillRect(hash(i, 7, 3) * 220, hash(i, 7, 4) * 100, 0.6 + hash(i, 7, 5), 0.6 + hash(i, 7, 6)); }
    c.fillStyle = "rgba(20,4,4,0.35)"; c.beginPath(); c.roundRect(28, 24, 164, 52, 4); c.fill();   // the die's darker, wetter print in it
  }, 2);
  const felt = rbox(TW - 2 * WT - 1, 11, TD - 2 * WT - 1, 1.5, new THREE.MeshStandardMaterial({ map: feltT, roughness: 0.95, envMapIntensity: 0.2 }));
  felt.position.set(0, 2.5 + 5.5, TD / 2 - WT - 0.5);
  pad.add(felt);
  const FELT_TOP = 2.5 + 11;
  const lid = new THREE.Group();
  lid.position.set(0, TH + 0.3 + 1.5, -TD / 2 - 1.6);
  lid.rotation.x = -rad(104);
  const lidP = rbox(TW, 2.2, TD, 0.8, { px: tin, nx: tin, top: tinD, bottom: tin, front: tin, back: tin });
  lidP.position.set(0, 0, TD);
  lid.add(lidP);
  // the lid's pressed inner panel: black enamel with a fine gilt border (what faces us while the lid stands open)
  const lidT = paintTex("vd-lid-v1", TW - 24, TD - 24, (c) => {
    const w = TW - 24, h = TD - 24;
    const gr = c.createLinearGradient(0, 0, w, h); gr.addColorStop(0, "#2E3236"); gr.addColorStop(1, "#1C1F22");
    c.fillStyle = gr; c.fillRect(0, 0, w, h);
    c.strokeStyle = "rgba(201,162,74,0.85)"; c.lineWidth = 1.2; c.beginPath(); c.roundRect(7, 7, w - 14, h - 14, 5); c.stroke();
    c.lineWidth = 0.5; c.beginPath(); c.roundRect(11, 11, w - 22, h - 22, 3); c.stroke();
  }, 2);
  const lidPanel = rbox(TW - 24, 0.6, TD - 24, 0.25, { px: tinD, nx: tinD, top: tinD, bottom: new THREE.MeshPhysicalMaterial({ map: lidT, metalness: 0.5, roughness: 0.35, clearcoat: 0.6, envMapIntensity: 0.7 }), front: tinD, back: tinD });
  lidPanel.position.set(0, -1.1 - 0.3 - 0.02, TD - 12);
  lid.add(lidPanel);
  pad.add(lid);
  const hingeR = mesh(new THREE.CylinderGeometry(1.8, 1.8, TW - 30, 12).rotateZ(Math.PI / 2), tinD);
  hingeR.position.set(0, TH + 0.3 + 1.0, -TD / 2 - 1.3);
  pad.add(hingeR);

  // ══ THE STAMP: die face at its own y 0, its knob up ══
  const st = new THREE.Group(); st.userData.obj = "stamp"; root.add(st);
  const DW = 176, DD = 56, REL = 1.0;
  const dieT = paintTex(`vd-die-v1:${g.word}`, DW, DD, (c) => {
    // the die's relief, MIRRORED (it prints the right way round): white = raised
    c.fillStyle = "#000"; c.fillRect(0, 0, DW, DD);
    c.save(); c.translate(DW, 0); c.scale(-1, 1);
    c.strokeStyle = "#fff"; c.fillStyle = "#fff";
    const w = IMPRESSION.w * (DW / 190), h = IMPRESSION.h * (DD / 66);
    c.lineWidth = 3.4; c.beginPath(); c.roundRect((DW - w) / 2, (DD - h) / 2, w, h, 6); c.stroke();
    c.lineWidth = 1.1; c.beginPath(); c.roundRect((DW - w) / 2 + 5.5, (DD - h) / 2 + 5.5, w - 11, h - 11, 4); c.stroke();
    track(c, 3); fitFont(c, 800, 34, g.word, w - 30); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(g.word, DW / 2 + 1.5, DD / 2 + 2); track(c, 0);
    c.restore();
  }, 3);
  const relief = new THREE.PlaneGeometry(DW, DD, 110, 35).rotateX(Math.PI / 2);
  const dieM = new THREE.MeshStandardMaterial({ color: new THREE.Color("#9E2B26"), roughness: 0.7, displacementMap: dieT, displacementScale: REL, envMapIntensity: 0.3 });
  const reliefM = mesh(relief, dieM, false, false);
  st.add(reliefM);
  const rubber = M.rubber("#8E2621");
  const dieSlab = rbox(DW + 4, 3, DD + 4, 1, rubber); dieSlab.position.set(0, 0.05 + 1.5, (DD + 4) / 2); st.add(dieSlab);
  const cushion = rbox(DW + 8, 4, DD + 8, 1.5, M.rubber("#6E6A66")); cushion.position.set(0, 3.1 + 2, (DD + 8) / 2); st.add(cushion);
  const beechF = new THREE.MeshStandardMaterial({ map: grain("vd-beech-v1", 200, 40, "#D2A777", "#9C6F42", "#EBCB9F", "x"), roughness: 0.5, envMapIntensity: 0.45 });
  const beechT = M.satin("#D9B080", 0.5);
  const BLW = 196, BLH = 24, BLD = 78;
  const block = rbox(BLW, BLH, BLD, 4, { px: beechF, nx: beechF, top: beechT, bottom: beechT, front: beechF, back: beechF });
  block.position.set(0, 7.15 + BLH / 2, BLD / 2);
  st.add(block);
  // the index print on the mount's top: the die's impression, the right way round, on a paper label
  const idxT = paintTex(`vd-index-v1:${g.word}`, 176, 56, (c) => {
    c.fillStyle = "#F4EFE2"; c.fillRect(0, 0, 176, 56);
    c.strokeStyle = RED; c.fillStyle = RED; c.lineWidth = 2.6; c.beginPath(); c.roundRect(8, 8, 160, 40, 5); c.stroke();
    track(c, 2.5); fitFont(c, 800, 26, g.word, 140); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(g.word, 89, 29); track(c, 0);
  }, 3);
  const idx = mesh(new THREE.PlaneGeometry(176, 56).rotateX(-Math.PI / 2), M.print(idxT, 0.8), false, true);
  idx.position.set(0, 7.15 + BLH + 0.05, 0);
  st.add(idx);
  // the knob and its neck: ONE turned walnut piece, its foot flat on the index label
  const walnut = M.gloss("#4A2C1C");
  const knob = mesh(lathe([[15, 0], [15, 3], [11.5, 7], [9.5, 16], [10.5, 22], [16, 29], [22, 37], [24.5, 46], [23, 55], [18, 62], [10, 67], [0.01, 69]], 48), walnut);
  knob.position.y = 7.15 + BLH + 0.12;
  st.add(knob);
  const knobFoot = mesh(new THREE.CircleGeometry(15, 48).rotateX(Math.PI / 2), walnut);
  knobFoot.position.y = 7.15 + BLH + 0.12;
  st.add(knobFoot);

  // ══ THE STAMP'S PATH: home on the pad → lifted → over the page, turned square to it → pressed along its normal ══
  const [icx, icy] = pageXY(IMPRESSION.x, IMPRESSION.y);
  // the die's footprint on the page (turned), and the page's highest point under it: the relief's tips stop 0.25 above it
  const hw = DW / 2 + 4, hd = DD / 2 + 4, ct = Math.cos(IMPRESSION.turn), stn = Math.sin(IMPRESSION.turn);
  const ext = { x: hw * ct + hd * stn, y: hw * stn + hd * ct };
  const pageHi = paperTop(topO, icx - ext.x, icx + ext.x, icy - ext.y, icy + ext.y);
  const contactT = new THREE.Vector3(icx, SY + icy, TZ + pageHi + REL + 0.25);
  const contact = onTilt(contactT.x, contactT.y, contactT.z).add(stand.position);
  const normal = new THREE.Vector3(0, ca, sa);
  const above = contact.clone().addScaledVector(normal, 150);
  const home = new THREE.Vector3(g.pad.x, FY + FELT_TOP + REL + 0.25, g.pad.z);
  const lifted = home.clone().add(new THREE.Vector3(0, 130, 0));
  const e = (x: number) => x * x * (3 - 2 * x);
  const HOME_SPIN = -0.05;
  const placeStamp = (t: number) => {
    const pos = new THREE.Vector3();
    let tilt01 = 0;
    if (t <= 1) pos.copy(home).lerp(lifted, e(t));
    else if (t <= 2) {
      const u = e(t - 1);
      pos.copy(lifted).lerp(above, u).add(new THREE.Vector3(0, 70 * Math.sin(Math.PI * u), 0));
      tilt01 = u;
    } else { pos.copy(above).lerp(contact, e(Math.min(1, t - 2))); tilt01 = 1; }
    st.position.copy(pos);
    st.rotation.set(LEAN * tilt01, HOME_SPIN + (IMPRESSION.turn - HOME_SPIN) * tilt01, 0, "XYZ");
  };

  root.add(makeFloor({ y: g.floor, x0: -900, x1: 2000, z0: -600, z1: 700, reflect: 0.12, shadow: 0.55, fadeC: [g.board.x + 250, g.board.z], fadeR: [1250, 560] }));

  return {
    root,
    update: (p) => {
      root.rotation.y = rad(p.yaw);
      placeStamp(p.stamp);
      paintInk(p.ink);
    },
  };
};
