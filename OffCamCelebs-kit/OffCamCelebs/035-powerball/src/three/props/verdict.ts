// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE VERDICT IN 3-D (035) — "So, here's the audit. 847 million on the headline. About 190 in the bank. Our rating:
// inflated. Send us who to audit next." On the dark ground, on an unseen desk (the floor: its shadows and a faint mirror),
// three real things, each modelled from the real one:
//   · THE NEWSPAPER (the film's 2nd and last document visual): a broadsheet folded in half, lying with its front page's top
//     half up, modelled on a real broadsheet (12 in wide, folded at the middle of its 22¾ in page; 39 px per inch, the cash's
//     scale). The outer sheet wraps round the fold as one bent sheet, four inner leaves show their edges at the open edge and
//     the sides, the open edge springs up a little and a far corner curls (the half-fold is its fold line). The
//     page is typeset at true point sizes (1 pt = 0.54 px): two ears, a masthead in plain serif type with a made-up name (THE
//     MORNING MERIDIAN: no real paper's name or design), the folio with its date line NOV 5 2026, a kicker, the headline and
//     the giant $847,000,000 fitted to the measure by measurement, a deck, a byline, a colour photo of drawing balls (no
//     person) with its caption and credit, justified columns of body text with column rules, a second story under the photo;
//     newsprint tone, fibre and ink;
//   · THE BANK DEPOSIT BAG, modelled on a locking canvas security deposit bag (Controltek-style 7-pin lock bag, 11 × 8½ in):
//     blue canvas with its weave, a navy binding all round, stitching rows, a framed clear vinyl ID window (the pouch) with
//     its card, a metal zipper along the front edge (single teeth, alternating), its slider and pull tab, a zipper stop at one
//     end and the 7-pin lock body at the other. It lies flat, partly open: the mouth gapes over a strapped bundle of $100
//     notes (cash.ts) half out of it, and on "About 190 in the bank" the slider runs further open. Beside it, a small pile of
//     two more bundles: visibly modest money. No figure is printed anywhere (plain straps): the caption carries 190;
//   · THE STAMP (034's real rubber stamp, rebuilt): a turned walnut knob and neck, a beech mount with its index label on top,
//     a grey cushion and a red rubber die with relief letters. It glides in from beyond the frame on "Our rating", presses
//     INFLATED in red ink on the headline area (under the figure, which stays readable: one of the film's 2–3 labels), lifts
//     and is drawn away. Its index label shows only a blank ruled frame until the press (the word is never seen before it is
//     spoken).
// ★ The verdict rates the "$847 million" HEADLINE (the brief): no person, no winner, no hands.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, liveTex, paintTex, type Model } from "../stage";
import { M, rbox, rad, fitFont, track, hash, wire } from "../kit029";
import { bundle, pile, BUNDLE_H, NOTE } from "../cash";

const RED = "#B23A33";
const SER = '"Times New Roman", "Liberation Serif", serif';

// ══ THE PLACE'S GEOMETRY (layer px; world y up, z toward the viewer) ══
/** the eye: up and to the right, high enough to read a paper lying on the desk (≈ 40° down onto it) */
export const VD_EYE = { x: 980, y: -300, D: 2000 };
export const VG = {
  floor: 1250,
  /** the turn's pivot (the models turn a few degrees about it across the place) */
  pivot: { x: 640, z: 80 },
  paper: { x: 400, z: -210, yaw: -4 },
  bag: { x: 1030, z: 225, yaw: 5 },
  pile: { x: 1095, z: -62, yaw: 16 },
} as const;

// ══ THE NEWSPAPER ══
/** the folded half: W across (x), H from the open edge (far, z −H/2) to the fold (near, z +H/2); R the fold's radius */
const NPW = 470, NPH = 445, NPR = 1.8;
/** where INFLATED lands (page px from the top-left of the visible half) and its turn (rad, + = anticlockwise on the page) */
export const IMPRESSION = { x: 337, y: 244, w: 186, h: 62, turn: 0.085 };
/** where the giant figure sits (page px: its centre) — the camera's anchor */
export const FIGURE = { x: 235, y: 150 };

const ss = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
/** the newspaper's lift over its flat fold (local x, z): the open edge springs up, a far corner curls, the old crease */
const npLift = (x: number, z: number) => {
  const v = Math.min(1, Math.max(0, (NPH / 2 - z) / NPH));   // 0 at the fold … 1 at the open edge
  let l = 2.4 * Math.pow(v, 2.2);
  const dR = Math.hypot(x - NPW / 2, z + NPH / 2); if (dR < 100) l += 6.5 * ((100 - dR) / 100) ** 2;
  const dL = Math.hypot(x + NPW / 2, z + NPH / 2); if (dL < 70) l += 2.2 * ((70 - dL) / 70) ** 2;
  l += 0.45 * Math.sin(x * 0.011 + 1.3) * Math.cos(z * 0.009 + 0.4) * Math.min(1, v * 4);
  return l;
};
/** the front page's surface height (local) */
export const npTop = (x: number, z: number) => 0.3 + 2 * NPR + npLift(x, z);

// ── a surface over a rectangle at height fy(x, z), its texture's top at z0; a sheet of it with thickness, back and edge ──
type FY = (x: number, z: number) => number;
const grid = (x0: number, x1: number, z0: number, z1: number, nx: number, nz: number) => {
  const n = (nx + 1) * (nz + 1);
  const pos = new Float32Array(n * 3), uv = new Float32Array(n * 2), xz = new Float32Array(n * 2);
  for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
    const k = j * (nx + 1) + i, x = x0 + ((x1 - x0) * i) / nx, z = z0 + ((z1 - z0) * j) / nz;
    xz[k * 2] = x; xz[k * 2 + 1] = z; uv[k * 2] = i / nx; uv[k * 2 + 1] = 1 - j / nz;
  }
  const idx: number[] = [];
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  const set = (fy: FY, dy = 0) => {
    for (let k = 0; k < n; k++) { pos[k * 3] = xz[k * 2]; pos[k * 3 + 1] = fy(xz[k * 2], xz[k * 2 + 1]) + dy; pos[k * 3 + 2] = xz[k * 2 + 1]; }
    g.attributes.position.needsUpdate = true; g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere();
  };
  return { g, set };
};
/** a SHEET lying on its surface fy (front up), t thick: front, back (its own face) and the edge band all round */
const sheetOn = (x0: number, x1: number, z0: number, z1: number, nx: number, nz: number, fy: FY, t: number,
  face: THREE.Material, back: THREE.Material, edge: THREE.Material) => {
  const F = grid(x0, x1, z0, z1, nx, nz), B = grid(x0, x1, z0, z1, nx, nz);
  const ring: [number, number][] = [];
  for (let i = 0; i <= nx; i++) ring.push([x0 + ((x1 - x0) * i) / nx, z0]);
  for (let j = 1; j <= nz; j++) ring.push([x1, z0 + ((z1 - z0) * j) / nz]);
  for (let i = nx - 1; i >= 0; i--) ring.push([x0 + ((x1 - x0) * i) / nx, z1]);
  for (let j = nz - 1; j >= 1; j--) ring.push([x0, z0 + ((z1 - z0) * j) / nz]);
  const eg = new THREE.BufferGeometry();
  const ep = new Float32Array(ring.length * 18);
  eg.setAttribute("position", new THREE.BufferAttribute(ep, 3));
  const bm = back.clone(); bm.side = THREE.BackSide;
  const em = edge.clone(); em.side = THREE.DoubleSide;
  const grp = new THREE.Group();
  grp.add(mesh(F.g, face), mesh(B.g, bm), mesh(eg, em));
  const reshape = (f: FY) => {
    F.set(f); B.set(f, -t);
    for (let k = 0; k < ring.length; k++) {
      const [ax, az] = ring[k], [bx, bz] = ring[(k + 1) % ring.length];
      const ay = f(ax, az), by = f(bx, bz);
      const q = [ax, ay, az, bx, by, bz, bx, by - t, bz, ax, ay, az, bx, by - t, bz, ax, ay - t, az];
      for (let m = 0; m < 18; m++) ep[k * 18 + m] = q[m];
    }
    eg.attributes.position.needsUpdate = true; eg.computeVertexNormals(); eg.computeBoundingBox(); eg.computeBoundingSphere();
  };
  reshape(fy);
  return { grp, reshape };
};

// ── a tiny typesetter (034's): runs of words, wrapped to a measure and justified ──
type Run = { t: string; b?: boolean; i?: boolean };
const setF = (g: CanvasRenderingContext2D, size: number, r: { b?: boolean; i?: boolean }) => { g.font = `${r.i ? "italic " : ""}${r.b ? 700 : 400} ${size}px ${SER}`; };
const para = (g: CanvasRenderingContext2D, runs: Run[], x: number, y: number, w: number, size: number, lead: number, indent = 0, maxY = 1e9) => {
  const words: (Run & { w: number })[] = [];
  for (const r of runs) for (const t of r.t.split(/\s+/).filter(Boolean)) { setF(g, size, r); words.push({ ...r, t, w: g.measureText(t).width }); }
  setF(g, size, {}); const sp = g.measureText(" ").width;
  let line: typeof words = [], lw = 0, yy = y, first = true;
  const flush = (last: boolean) => {
    const avail = w - (first ? indent : 0);
    const gap = !last && line.length > 1 ? sp + (avail - lw) / (line.length - 1) : sp;
    let xx = x + (first ? indent : 0);
    if (yy < maxY) for (const wd of line) { setF(g, size, wd); g.fillText(wd.t, xx, yy); xx += wd.w + gap; }
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
/** body copy that flows through a run of columns, top to bottom (it runs on under the fold: the canvas clips it) */
const flow = (g: CanvasRenderingContext2D, text: string, cols: { x: number; y: number; w: number }[], size: number, lead: number, bottom: number) => {
  setF(g, size, {}); const sp = g.measureText(" ").width;
  const words = text.split(/\s+/).filter(Boolean).map((t) => ({ t, w: g.measureText(t).width }));
  let k = 0;
  for (const c of cols) {
    let yy = c.y, first = c === cols[0];
    while (k < words.length && yy < bottom) {
      const line: typeof words = []; let lw = 0;
      const ind = first ? 7 : 0;
      while (k < words.length) {
        const need = (line.length ? lw + sp : 0) + words[k].w;
        if (line.length && need > c.w - ind) {
          // ★ a typesetter's hyphen: break a long word so the line fills (no rivers of space in a narrow column)
          const wd = words[k].t, room = c.w - ind - lw - sp;
          if (wd.length >= 7 && /^[a-z]/i.test(wd)) for (let cut = wd.length - 3; cut >= 3; cut--) {
            const head = wd.slice(0, cut) + "-", hw = g.measureText(head).width;
            if (hw <= room && /[aeiouy]/i.test(wd.slice(0, cut)) && /[aeiouy]/i.test(wd.slice(cut))) {
              line.push({ t: head, w: hw }); lw += sp + hw;
              words[k] = { t: wd.slice(cut), w: g.measureText(wd.slice(cut)).width };
              break;
            }
          }
          break;
        }
        lw = need; line.push(words[k++]);
      }
      const gap = line.length > 1 && k < words.length ? sp + (c.w - ind - lw) / (line.length - 1) : sp;
      let xx = c.x + ind;
      for (const wd of line) { g.fillText(wd.t, xx, yy); xx += wd.w + gap; }
      yy += lead; first = false;
    }
  }
};

const LEAD_STORY = "MONTVALE, NJ — One Powerball ticket sold at a Wegmans store in Montvale matched all six numbers in Wednesday night's drawing, winning a jackpot advertised at $847 million, the ninth-largest in the game's history, lottery officials said. The ticket was sold at the supermarket on Farm View in Bergen County, and the store will receive a bonus for selling it. The winner has not come forward. The advertised prize is an annuity, paid as 30 increasing payments over 29 years. A winner who chooses the cash option instead receives the lottery's cash value, which officials put at $363.1 million. Both prize options are before taxes, officials said. Federal and state taxes will be withheld from the payout. Players have a year from the date of the drawing to claim a prize, and lottery officials urged everyone who bought a ticket in Montvale to check it. The jackpot had rolled for weeks without a winner, growing with every drawing as sales climbed across the 45 states, the District of Columbia and two territories that sell the game. Lines formed at convenience stores and supermarkets through the weekend as the prize grew. Lottery officials said the store had sold an unusually large number of tickets in the final days before the drawing, and that the winning ticket was a quick pick. Officials said they would not release the winner's name until the prize is claimed. Continued on Page A6";
const SIDE_STORY = "The jackpot that headlines advertise is the sum of an annuity, paid out over decades. A winner may choose instead a single cash payment, which is smaller, and pay tax on it in the year it is received. Federal withholding on lottery prizes is 24 percent; New Jersey withholds 8 percent on prizes over $500,000. The withholding is not the final tax bill, which depends on the winner's own return. The lottery said both prize options are stated before taxes, and that winners should seek financial advice before choosing. Prizes must be claimed within one year of the drawing. Continued on Page A6";
const SECOND_STORY = "Shoppers at the Montvale store said news of the winning ticket spread quickly on Thursday morning, as customers stopped at the lottery counter to ask whether it was true. Store workers said they did not know who had bought it. The supermarket is the latest New Jersey store to sell a jackpot ticket, and officials said such sales tend to bring a rush of new customers in the weeks that follow. Lottery officials reminded players that a ticket is a bearer instrument until it is signed, and advised anyone holding the winning ticket to sign it and keep it in a safe place. Continued on Page A7";

/** the front page's top half, painted once: 470 × 445 page px at ×4 */
const frontTex = () => paintTex("vd-front-v6", NPW, NPH, (g) => {
  const W = NPW, H = NPH;
  // ── the newsprint: a grey-cream sheet, its fibre and mottle, its edges a shade older ──
  g.fillStyle = "#E9E4D6"; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(${hash(i, 1, 3) > 0.5 ? "120,110,90" : "255,252,240"},${0.025 + 0.025 * hash(i, 2, 3)})`; g.beginPath(); g.ellipse(hash(i, 3, 3) * W, hash(i, 4, 3) * H, 10 + 30 * hash(i, 5, 3), 6 + 20 * hash(i, 6, 3), hash(i, 7, 3) * 3, 0, Math.PI * 2); g.fill(); }
  for (let i = 0; i < 5200; i++) { g.fillStyle = `rgba(${hash(i, 1, 1) > 0.55 ? "92,84,70" : "250,246,232"},${0.05 + 0.08 * hash(i, 2, 2)})`; g.save(); g.translate(hash(i, 3, 3) * W, hash(i, 4, 4) * H); g.rotate(hash(i, 6, 6) * Math.PI); g.fillRect(0, 0, 0.4 + hash(i, 5, 5) * 2.2, 0.18); g.restore(); }
  const eg = g.createRadialGradient(W / 2, H * 0.6, H * 0.3, W / 2, H * 0.6, H * 0.85);
  eg.addColorStop(0, "rgba(255,255,255,0)"); eg.addColorStop(1, "rgba(160,135,85,0.13)");
  g.fillStyle = eg; g.fillRect(0, 0, W, H);
  const INK = "rgba(26,24,22,0.93)";
  g.fillStyle = INK; g.strokeStyle = INK; g.textBaseline = "alphabetic";
  const L = 16, R = W - 16, MW = R - L;

  // ── the ears ──
  g.lineWidth = 0.4; g.strokeRect(L, 13, 78, 32); g.strokeRect(R - 78, 13, 78, 32);
  g.textAlign = "left";
  g.font = `700 4.6px ${SER}`; track(g, 0.6); g.fillText("TODAY", L + 4, 20); track(g, 0);
  g.font = `400 4.4px ${SER}`; g.fillText("Sunny and mild, breezy", L + 4, 27); g.fillText("in the afternoon. High 58,", L + 4, 32); g.fillText("low 41. Weather, A12", L + 4, 37.5);
  g.font = `700 4.6px ${SER}`; track(g, 0.6); g.fillText("INSIDE", R - 74, 20); track(g, 0);
  g.font = `400 4.4px ${SER}`; g.fillText("Drawing results, A6", R - 74, 27); g.fillText("Business, B1  Sports, C1", R - 74, 32); g.fillText("Opinion, A14", R - 74, 37.5);

  // ── the masthead: plain serif type, a made-up name ──
  g.textAlign = "center";
  fitFontSer(g, 700, 40, "The Morning Meridian", 252);
  g.fillText("The Morning Meridian", W / 2, 42);
  // the folio between its rules: volume, the date line, the edition
  g.fillRect(L, 49, MW, 0.45); g.fillRect(L, 50.6, MW, 1.5);
  g.font = `700 4.7px ${SER}`; track(g, 0.7);
  g.textAlign = "left"; g.fillText("VOL CXII  No 309", L, 58.4);
  g.textAlign = "center"; g.fillText("THURSDAY, NOV 5 2026", W / 2, 58.4);
  g.textAlign = "right"; g.fillText("FINAL EDITION", R, 58.4); track(g, 0);
  g.fillRect(L, 61.4, MW, 1.5); g.fillRect(L, 63.8, MW, 0.45);

  // ── the kicker, the headline and the giant figure, each fitted to the measure by measurement ──
  g.textAlign = "center";
  g.font = `700 6.6px ${SER}`; track(g, 2.4);
  const kw = g.measureText("POWERBALL").width;
  g.fillText("POWERBALL", W / 2 + 1.2, 76); track(g, 0);
  g.fillRect(L + 60, 73.4, (MW - kw) / 2 - 70, 0.5); g.fillRect(W / 2 + kw / 2 + 10, 73.4, (MW - kw) / 2 - 70, 0.5);
  const H1 = "$847 MILLION JACKPOT";
  fitCond(g, 700, 46, H1, MW - 40, 0.84);
  condText(g, H1, W / 2, 108, 0.84);
  const FIG = "$847,000,000";
  fitCond(g, 700, 140, FIG, MW - 4, 0.8);
  condText(g, FIG, W / 2, 186, 0.8);
  // the deck, the byline, the rule under the head
  g.font = `italic 400 9.4px ${SER}`;
  // ★ the deck sits clear of the figure's comma tails (they descend ~0.2 em below its baseline)
  g.fillText("One ticket sold in Montvale matches all six numbers,", W / 2, 213);
  g.fillText("the ninth-largest prize in the game's history", W / 2, 224.5);
  g.font = `700 4.6px ${SER}`; track(g, 0.7); g.fillText("BY THE MERIDIAN STAFF", W / 2, 233); track(g, 0);
  g.fillRect(L, 236.5, MW, 0.6);

  // ── the photo: drawing balls in their tray under studio light (no person), its caption and credit ──
  const PX = L, PY = 241, PWd = 284, PHt = 140;
  g.save(); g.beginPath(); g.rect(PX, PY, PWd, PHt); g.clip();
  const bg = g.createLinearGradient(PX, PY, PX, PY + PHt);
  bg.addColorStop(0, "#1D2C44"); bg.addColorStop(0.55, "#2F4466"); bg.addColorStop(1, "#141B27");
  g.fillStyle = bg; g.fillRect(PX, PY, PWd, PHt);
  const glow = g.createRadialGradient(PX + PWd * 0.55, PY + 30, 4, PX + PWd * 0.55, PY + 30, 150);
  glow.addColorStop(0, "rgba(190,210,240,0.45)"); glow.addColorStop(1, "rgba(190,210,240,0)");
  g.fillStyle = glow; g.fillRect(PX, PY, PWd, PHt);
  // the draw machine's clear drum: its rim and a long highlight, the balls heaped in its tray
  g.strokeStyle = "rgba(210,225,245,0.28)"; g.lineWidth = 1.2; g.beginPath(); g.arc(PX + 150, PY + 260, 230, Math.PI * 1.18, Math.PI * 1.82); g.stroke();
  g.strokeStyle = "rgba(255,255,255,0.42)"; g.lineWidth = 0.6; g.beginPath(); g.arc(PX + 150, PY + 262, 222, Math.PI * 1.25, Math.PI * 1.42); g.stroke();
  const balls: [number, number, number, boolean, number][] = [];
  for (let i = 0; i < 44; i++) {
    const r = 9.5 + 3.5 * hash(i, 1, 21), u = hash(i, 2, 21), depth = Math.pow(hash(i, 3, 21), 0.8);
    balls.push([PX + 10 + u * (PWd - 20), PY + 78 + depth * 58 - 18 * Math.sin(u * Math.PI), r * (0.8 + 0.35 * depth), false, 1 + Math.floor(hash(i, 4, 21) * 69)]);
  }
  balls.push([PX + 176, PY + 116, 15, true, 1 + Math.floor(hash(9, 9, 9) * 26)]);
  balls.sort((a, b) => a[1] - b[1]);
  for (const [bx, by, br, red, num] of balls) {
    const sg = g.createRadialGradient(bx - br * 0.35, by - br * 0.4, br * 0.1, bx, by, br);
    if (red) { sg.addColorStop(0, "#F07A6E"); sg.addColorStop(0.5, "#C42F2A"); sg.addColorStop(1, "#5E1210"); }
    else { sg.addColorStop(0, "#FFFFFF"); sg.addColorStop(0.55, "#D9DCE0"); sg.addColorStop(1, "#5D6670"); }
    g.fillStyle = sg; g.beginPath(); g.arc(bx, by, br, 0, Math.PI * 2); g.fill();
    // its number, printed on the ball's face (turned with the ball, partly round its curve)
    const a = (hash(num, 5, 21) - 0.5) * 1.2, ox = (hash(num, 6, 21) - 0.5) * br * 0.7, oy = (hash(num, 7, 21) - 0.5) * br * 0.5;
    g.save(); g.translate(bx + ox, by + oy); g.rotate(a); g.scale(1 - Math.abs(ox) / br * 0.6, 1);
    if (red) { g.fillStyle = "rgba(250,245,240,0.95)"; g.beginPath(); g.arc(0, 0, br * 0.42, 0, Math.PI * 2); g.fill(); }
    g.fillStyle = "rgba(18,18,20,0.9)"; g.textAlign = "center"; g.textBaseline = "middle"; g.font = `700 ${br * 0.62}px Arial, "Liberation Sans", sans-serif`;
    g.fillText(String(num), 0, 0.5);
    g.restore();
    g.fillStyle = "rgba(255,255,255,0.7)"; g.beginPath(); g.ellipse(bx - br * 0.42, by - br * 0.5, br * 0.16, br * 0.1, -0.6, 0, Math.PI * 2); g.fill();
  }
  g.textBaseline = "alphabetic";
  // printed on newsprint: muted, a little dot-gain and a fine screen
  g.fillStyle = "rgba(233,228,214,0.16)"; g.fillRect(PX, PY, PWd, PHt);
  for (let yy = 0; yy < PHt; yy += 0.75) for (let xx = (yy * 1.33) % 0.75; xx < PWd; xx += 0.75) {
    if (hash(xx * 7, yy * 3, 5) > 0.82) { g.fillStyle = "rgba(233,228,214,0.18)"; g.fillRect(PX + xx, PY + yy, 0.3, 0.3); }
  }
  g.restore();
  g.fillStyle = INK; g.lineWidth = 0.3; g.strokeStyle = INK; g.strokeRect(PX, PY, PWd, PHt);
  g.textAlign = "right"; g.font = `400 3.6px ${SER}`; track(g, 0.4); g.fillText("MERIDIAN PHOTO", PX + PWd, PY + PHt + 4.6); track(g, 0);
  g.textAlign = "left"; g.font = `italic 400 4.6px ${SER}`;
  g.fillText("Drawing balls in their tray before Wednesday night's Powerball drawing. One ticket sold in", PX, PY + PHt + 10.5);
  g.fillText("New Jersey matched all six numbers, lottery officials said.", PX, PY + PHt + 16);

  // ── the columns: the lead story right of the photo, and on under the photo; rules between ──
  const BS = 4.9, BL = 5.6;   // 9 pt on 10.4 pt
  g.fillStyle = INK; setF(g, BS, {});
  const cA = { x: 312, y: 246, w: 67 }, cB = { x: 387, y: 246, w: 67 };
  g.fillRect(383, 242, 0.35, H); g.fillRect(307.5, 242, 0.35, H);
  flow(g, LEAD_STORY, [cA, cB], BS, BL, H + 12);
  // a second story under the photo: its head, then four columns
  const sy = PY + PHt + 24;
  g.fillRect(L, sy - 1.5, 284, 0.5);
  g.font = `700 10.4px ${SER}`; g.textAlign = "left"; g.fillText("At the store, a morning of disbelief", L, sy + 9.5);
  g.font = `700 4.4px ${SER}`; track(g, 0.6); g.fillText("BY THE MERIDIAN STAFF", L, sy + 16); track(g, 0);
  const cw = (284 - 3 * 6) / 4;
  for (let i = 1; i < 4; i++) g.fillRect(L + i * (cw + 6) - 3.2, sy + 19, 0.3, H);
  setF(g, BS, {});
  flow(g, SECOND_STORY + " " + SIDE_STORY, [0, 1, 2, 3].map((i) => ({ x: L + i * (cw + 6), y: sy + 24, w: cw })), BS, BL, H + 12);
}, 4);
/** a serif face fitted to a width by measuring it */
const fitFontSer = (g: CanvasRenderingContext2D, weight: number, size: number, text: string, maxW: number) => {
  let s = size; g.font = `${weight} ${s}px ${SER}`;
  while (s > 4 && g.measureText(text).width > maxW) { s *= 0.98; g.font = `${weight} ${s}px ${SER}`; }
  return s;
};
/** a CONDENSED serif headline (the face drawn at `cx` of its width): fitted by measurement to maxW */
const fitCond = (g: CanvasRenderingContext2D, weight: number, size: number, text: string, maxW: number, cx: number) => {
  let s = size; g.font = `${weight} ${s}px ${SER}`;
  while (s > 4 && g.measureText(text).width * cx > maxW) { s *= 0.985; g.font = `${weight} ${s}px ${SER}`; }
  return s;
};
const condText = (g: CanvasRenderingContext2D, text: string, x: number, y: number, cx: number) => {
  g.save(); g.translate(x, y); g.scale(cx, 1); g.textAlign = "center"; g.fillText(text, 0, 0); g.restore();
};

// ══ THE BAG ══
const BW = 430, BD = 332;
const ZS = 3.0;                        // the closed chain's centre height
const LIPZ = BD / 2 - 3.4;             // the top panel's front border (behind the teeth)
const XL = BW / 2 - 30;                // the open run's end at the lock
const XS0 = -BW / 2 + 11;              // the chain's first tooth (after the stop)
const TOOTH = { w: 2.4, h: 2.2, d: 4.4, pitch: 3.0 };
const BOT_TEETH_Y = 2.75;              // the lower lip's teeth (on the bottom tape)
/** the protruding bundle: its centre line x, how far its end stands out of the mouth, its far end (inside) */
const BUN = { x: 92, out: 85, yaw: 0.035 };
const BUN_FAR = BD / 2 + BUN.out - NOTE.W;
const BUN_HALF = NOTE.D / 2 + 2.4 + 0.45 + 0.6;   // half its width over the strap, plus a little
/** the bundle's underside: on the bottom panel at its far end, over the lower lip's teeth at the mouth */
const BOT_TOP = 1.5;
const LIP_TEETH_TOP = BOT_TEETH_Y + TOOTH.h / 2;
const BUN_SLOPE = (LIP_TEETH_TOP + 0.35 - (BOT_TOP + 0.05)) / (BD / 2 - 0.2 - TOOTH.d / 2 - BUN_FAR);
const bunUnder = (z: number) => BOT_TOP + 0.05 + BUN_SLOPE * (z - BUN_FAR);
const bunTop = (z: number) => bunUnder(z) + BUNDLE_H;
/** the mouth's gape at x with the slider at xs: an almond from the slider to the lock */
const GAPE = 36;
const gape = (x: number, xs: number) => {
  const a = xs + 8, b = XL;
  if (x <= a || x >= b) return 0;
  return GAPE * Math.pow(Math.sin((Math.PI * (x - a)) / (b - a)), 0.5);
};
/** the slider's run: from where it rests (xsA) to where it stops (xsB) */
const XSA = -12, XSB = -96;
const smax = (a: number, b: number, k: number) => { const h = Math.max(0, Math.min(1, 0.5 + (0.5 * (b - a)) / k)); return a * (1 - h) + b * h + k * h * (1 - h); };
/** the top panel's height (bag-local), slider at xs */
const bagTop = (x: number, z: number, xs: number) => {
  const E = 4.6;
  const ex = Math.pow(ss(0, 34, x + BW / 2 - 3) * ss(0, 34, BW / 2 - 3 - x), 0.7);
  const ezf = Math.pow(ss(0, 34, z + BD / 2 - 3), 0.7), ezn = ss(0, 22, LIPZ - z);
  // the bundle's tent: the canvas drapes over it
  const dx = Math.max(0, Math.abs(x - BUN.x) - BUN_HALF), dz = Math.max(0, BUN_FAR - z);
  const tent = 1 - ss(0, 58, Math.hypot(dx, dz));
  // an empty canvas bag still holds a little air: a broad pillow, highest toward its middle
  const pillow = 14 + 9 * Math.cos((Math.PI * x) / BW) * Math.cos((Math.PI * z) / BD);
  const plateau = smax(pillow, bunTop(Math.min(z, BD / 2)) + 2.9, 6) * tent + pillow * (1 - tent);
  // the canvas's own creases: tension folds running back from the mouth's two ends, and a few soft random wrinkles
  let wr = 0.55 * Math.sin(x * 0.045 + z * 0.012) * Math.sin(z * 0.03 + 1.1) + 0.35 * Math.sin(x * 0.02 - z * 0.05);
  // two broad soft folds across the panel, where the bag was once folded in a drawer
  wr += 1.6 * Math.exp(-((x * 0.55 + z * 0.84 + 40) ** 2) / 260) + 1.1 * Math.exp(-((x * 0.9 - z * 0.42 - 70) ** 2) / 180);
  for (const [cx, dir] of [[xs + 8, 1], [XL, -1]] as const) {
    const u = (LIPZ - z), v = (x - cx) * dir;   // u back from the lip, v outward from the mouth's end
    if (u > 0 && u < 150) for (const k of [0.35, 0.8]) {
      const d = v - u * k;   // distance from a crease line fanning back
      wr += -2.6 * Math.exp(-(d * d) / 30) * (1 - u / 150) * Math.min(1, u / 12);
    }
  }
  const closed = E + (plateau + wr * (1 - tent) - E) * ex * ezf * ezn;   // the canvas stretched over the bundle has no creases
  const w2 = ss(0, 1, 1 - (LIPZ - z) / 70);
  const lip = E + gape(x, xs) * w2;
  return smax(closed, lip, 4);
};

/** a weave of blue canvas with its stitching, the zipper tape band and the framed ID window (the card behind clear vinyl) */
const canvasTex = () => paintTex("vd-canvas-v3", BW, BD, (g) => {
  g.fillStyle = "#3C5D92"; g.fillRect(0, 0, BW, BD);
  // the weave: over-under threads (a plain weave), each a little uneven, and slubs in the yarn
  for (let y = 0; y < BD; y += 0.67) for (let x = 0; x < BW; x += 0.67) {
    const over = ((x / 0.67) + (y / 0.67)) % 2 < 1;
    g.fillStyle = over ? `rgba(130,160,210,${0.10 + 0.06 * hash(x, y, 3)})` : `rgba(14,24,48,${0.14 + 0.06 * hash(x, y, 4)})`;
    g.fillRect(x, y, 0.62, 0.62);
  }
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(150,175,220,${0.10 + 0.08 * hash(i, 6, 9)})`; g.fillRect(hash(i, 7, 9) * BW, hash(i, 8, 9) * BD, 3 + hash(i, 9, 9) * 9, 0.5); }
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${hash(i, 1, 9) > 0.5 ? "16,26,48" : "150,175,215"},${0.05 + 0.06 * hash(i, 2, 9)})`; g.fillRect(hash(i, 3, 9) * BW, hash(i, 4, 9) * BD, 0.6 + hash(i, 5, 9) * 2.6, 0.3); }
  // wear: a soft lighter rub at the corners, a darker handling patch
  const rub = g.createRadialGradient(BW * 0.5, BD * 0.45, BD * 0.2, BW * 0.5, BD * 0.45, BW * 0.62);
  rub.addColorStop(0, "rgba(0,0,0,0)"); rub.addColorStop(1, "rgba(180,200,230,0.12)");
  g.fillStyle = rub; g.fillRect(0, 0, BW, BD);
  // the zipper tape: navy, along the front (the texture's bottom), its own fine rib
  g.fillStyle = "#1A2236"; g.fillRect(0, BD - 6.5, BW, 6.5);
  for (let x = 0; x < BW; x += 0.8) { g.fillStyle = "rgba(90,105,140,0.25)"; g.fillRect(x, BD - 6.5, 0.3, 6.5); }
  // the stitching: a row of thread round the panel, and the row holding the tape
  g.strokeStyle = "rgba(205,215,235,0.75)"; g.lineWidth = 0.55; g.setLineDash([2.2, 1.4]);
  g.beginPath(); g.roundRect(8, 8, BW - 16, BD - 18, 6); g.stroke();
  g.beginPath(); g.moveTo(4, BD - 8.2); g.lineTo(BW - 4, BD - 8.2); g.stroke();
  // the ID window: a framed vinyl pocket, stitched round, its card printed with ruled fields (no figure)
  const wx = 34, wy = 30, ww = 150, wh = 96;
  g.setLineDash([]);
  g.fillStyle = "#1E2840"; g.beginPath(); g.roundRect(wx, wy, ww, wh, 5); g.fill();
  g.fillStyle = "#F1EDE2"; g.fillRect(wx + 9, wy + 9, ww - 18, wh - 18);
  g.fillStyle = "#2A3550"; g.font = `700 5.6px "Archivo", sans-serif`; track(g, 1.2); g.textAlign = "left"; g.fillText("DEPOSIT", wx + 16, wy + 22); track(g, 0);
  g.font = `500 3.8px "Archivo", sans-serif`;
  const fields = ["DATE", "ACCOUNT", "PREPARED BY", "BRANCH"];
  fields.forEach((t, i) => { const yy = wy + 34 + i * 12.5; g.fillText(t, wx + 16, yy); g.fillRect(wx + 46, yy + 0.6, ww - 66, 0.4); });
  g.strokeStyle = "rgba(205,215,235,0.75)"; g.lineWidth = 0.5; g.setLineDash([1.8, 1.2]);
  g.beginPath(); g.roundRect(wx + 3.5, wy + 3.5, ww - 7, wh - 7, 3); g.stroke(); g.setLineDash([]);
}, 3);
/** the canvas texture's px → the top panel's local x, z (the texture spans the panel) */
const texX = (tx: number) => -BW / 2 + 3 + (tx * (BW - 6)) / BW, texZ = (ty: number) => -BD / 2 + 3 + (ty * (LIPZ + BD / 2 - 3)) / BD;
const BAG_WIN = { x0: texX(34 + 4), x1: texX(34 + 150 - 4), z0: texZ(30 + 4), z1: texZ(30 + 96 - 4) };

/** a wood's grain (034's): long wavering fibres, painted once */
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

export type VerdictGeo = { word: string };
/** stamp: 0 off (beyond the frame, left) → 1 hovering over the page → 2 pressed → 3 lifted → 4 gone (left);
 *  ink 0 → 1; word: the index label shows the word (after the press); zip 0 → 1 (the slider's run); yaw (deg) */
export type VerdictP = { stamp: number; ink: number; word: number; zip: number; yaw: number };

/** where the stamp's die lands on the page, in the turning frame (for the set's camera anchors) */
const paperLocal = (px: number, py: number): [number, number] => [px - NPW / 2, py - NPH / 2];
const toWorld = (o: { x: number; z: number; yaw: number }, lx: number, lz: number) => {
  const a = rad(o.yaw), c = Math.cos(a), s = Math.sin(a);
  return { x: o.x + lx * c + lz * s, z: o.z - lx * s + lz * c };
};
/** a point of the newspaper (page px) or of the bag (local) in world coordinates at rest (yaw 0 of the turn): layer x, y, z */
export const anchors = () => {
  const fl = paperLocal(FIGURE.x, FIGURE.y), fw = toWorld(VG.paper, fl[0], fl[1]);
  const il = paperLocal(IMPRESSION.x, IMPRESSION.y), iw = toWorld(VG.paper, il[0], il[1]);
  const top = paperLocal(235, 30), tw = toWorld(VG.paper, top[0], top[1]);
  const bw = toWorld(VG.bag, 20, 60);
  const pw = { x: VG.pile.x, z: VG.pile.z };
  return {
    figure: { x: fw.x, y: VG.floor - npTop(fl[0], fl[1]), z: fw.z },
    impression: { x: iw.x, y: VG.floor - npTop(il[0], il[1]), z: iw.z },
    masthead: { x: tw.x, y: VG.floor - npTop(top[0], top[1]), z: tw.z },
    bag: { x: bw.x, y: VG.floor - 20, z: bw.z },
    pile: { x: pw.x, y: VG.floor - 20, z: pw.z },
  };
};

// ══ THE STAMP'S PATH (the turning frame): in from beyond the left edge, square over the impression, pressed, lifted toward the
//    viewer and drawn away left. t: 0 off → 1 hovering → 2 pressed → 3 lifted → 4 gone ══
const STAMP = { DW: 176, DD: 56, REL: 1.0, H: 7.15 + 24 + 0.12 + 69 };
const stampGeo = (() => {
  let g: { contact: THREE.Vector3; above: THREE.Vector3; off: THREE.Vector3; lifted: THREE.Vector3; away: THREE.Vector3; spin: number } | null = null;
  return () => {
    if (g) return g;
    const [icx, icz] = paperLocal(IMPRESSION.x, IMPRESSION.y);
    const hw = STAMP.DW / 2 + 4, hd = STAMP.DD / 2 + 4, ct = Math.cos(IMPRESSION.turn), stn = Math.sin(IMPRESSION.turn);
    const ext = { x: hw * ct + hd * stn, z: hw * stn + hd * ct };
    let pageHi = -1e9;
    for (let i = 0; i <= 24; i++) for (let j = 0; j <= 24; j++) pageHi = Math.max(pageHi, npTop(icx - ext.x + (2 * ext.x * i) / 24, icz - ext.z + (2 * ext.z * j) / 24));
    const iw = toWorld(VG.paper, icx, icz);
    const contact = new THREE.Vector3(iw.x, pageHi + STAMP.REL + 0.25, iw.z);
    const above = contact.clone().add(new THREE.Vector3(0, 58, 0));
    const off = above.clone().add(new THREE.Vector3(-980, 18, -40));
    // ★ it lifts toward the viewer and away to the left, so it never hangs over the figure it has just rated
    const lifted = contact.clone().add(new THREE.Vector3(-40, 42, 70));
    const away = lifted.clone().add(new THREE.Vector3(-1000, 6, 90));
    g = { contact, above, off, lifted, away, spin: rad(VG.paper.yaw) + IMPRESSION.turn };
    return g;
  };
})();
export const stampAt = (t: number) => {
  const G = stampGeo();
  const quart = (x: number) => 1 - Math.pow(1 - x, 4), sett = (x: number) => x * x * (3 - 2 * x), cubicIn = (x: number) => x * x * x;
  const pos = new THREE.Vector3();
  let lean = 0, spin = G.spin;
  if (t <= 1) { const u = quart(Math.max(0, t)); pos.copy(G.off).lerp(G.above, u); lean = rad(9) * (1 - u) * Math.min(1, t * 4); spin = G.spin - 0.32 * (1 - u); }
  else if (t <= 2) pos.copy(G.above).lerp(G.contact, sett(t - 1));
  else if (t <= 3) { const u = sett(t - 2); pos.copy(G.contact).lerp(G.lifted, u); spin = G.spin - 0.12 * u; }
  else { const u = cubicIn(Math.min(1, t - 3)); pos.copy(G.lifted).lerp(G.away, u); lean = rad(-8) * Math.min(1, u * 3); spin = G.spin - 0.12 - 0.2 * u; }
  return { pos, spin, lean, visible: t > 0.001 && t < 3.999 };
};

/** ★ points on every object's hull (world, the turn at rest), for scratchpad checks of the caption band and the Reel's zones */
export const hullPoints = (stamp?: number) => {
  const out: Record<string, [number, number, number][]> = { paper: [], bag: [], pile: [], stamp: [] };
  const FY = -VG.floor;
  for (let i = 0; i <= 6; i++) for (let j = 0; j <= 6; j++) {
    const lx = -NPW / 2 + (NPW * i) / 6, lz = -NPH / 2 + (NPH * j) / 6, w = toWorld(VG.paper, lx, lz);
    out.paper.push([w.x, FY + npTop(lx, lz), w.z]);
  }
  for (const [lx, lz, h] of [[-BW / 2, -BD / 2, 32], [BW / 2, -BD / 2, 32], [-BW / 2, BD / 2 + 25, 12], [BW / 2, BD / 2 + 4, 12], [0, 0, 34],
    [BUN.x - 60, BD / 2 + BUN.out, 28], [BUN.x + 60, BD / 2 + BUN.out, 28]] as const) {
    const w = toWorld(VG.bag, lx, lz); out.bag.push([w.x, FY + h, w.z]);
  }
  for (const [lx, lz] of [[-125, -55], [125, -55], [-125, 55], [125, 55]] as const) {
    const w = toWorld(VG.pile, lx, lz); out.pile.push([w.x, FY, w.z]); out.pile.push([w.x, FY + 2 * BUNDLE_H + 1, w.z]);
  }
  if (stamp !== undefined) {
    const a = stampAt(stamp);
    if (a.visible) for (const [x, y, z] of [[-100, 0, -40], [100, 0, -40], [-100, 0, 40], [100, 0, 40], [0, STAMP.H, 0], [-25, STAMP.H - 20, 0], [25, STAMP.H - 20, 0]]) {
      const c = Math.cos(a.spin), sn = Math.sin(a.spin);
      out.stamp.push([a.pos.x + x * c + z * sn, FY + a.pos.y + y, a.pos.z - x * sn + z * c]);
    }
  }
  return out;
};

export const verdictModel = (geo: VerdictGeo) => (): Model<VerdictP> => {
  const root = new THREE.Group();
  const FY = -VG.floor;
  // the turn: the models turn a few degrees about the pivot across the place
  const turn = new THREE.Group(); turn.position.set(VG.pivot.x, FY, VG.pivot.z); root.add(turn);
  const W0 = new THREE.Group(); W0.position.set(-VG.pivot.x, 0, -VG.pivot.z); turn.add(W0);

  // ══ THE NEWSPAPER ══
  const np = new THREE.Group(); np.userData.obj = "newspaper";
  np.position.set(VG.paper.x, 0, VG.paper.z); np.rotation.y = rad(VG.paper.yaw);
  W0.add(np);
  const face = M.print(frontTex(), 0.9);
  const newsprint = M.paper("#E3DDCE"), edgeM = M.paper("#D9D2C1"), innerM = M.paper("#E6E0D2");
  const x0 = -NPW / 2, x1 = NPW / 2, z0 = -NPH / 2, z1 = NPH / 2;
  // the outer sheet's top half (the front page) and its bottom half (the back page, face down), joined round the fold
  const top = sheetOn(x0, x1, z0, z1, 48, 46, npTop, 0.3, face, newsprint, edgeM);
  np.add(top.grp);
  const bot = sheetOn(x0, x1, z0, z1, 8, 8, () => 0.6, 0.3, newsprint, newsprint, edgeM);
  np.add(bot.grp);
  const wrap = mesh(new THREE.CylinderGeometry(NPR, NPR, NPW, 18, 1, true, -Math.PI / 2, Math.PI).rotateZ(Math.PI / 2), newsprint);
  wrap.position.set(0, 0.3 + NPR, z1);
  np.add(wrap);
  // four inner leaves between, each following its share of the spring, their edges a touch out of square
  for (let k = 0; k < 4; k++) {
    const f = (k + 1) / 5;
    const jx0 = (hash(k, 1, 31) - 0.5) * 1.6, jx1 = (hash(k, 2, 31) - 0.5) * 1.6, jz = -0.6 - hash(k, 3, 31) * 1.4;
    const lf = sheetOn(x0 + jx0, x1 + jx1, z0 + jz, z1 - 0.7, 10, 10, (x, z) => 1.15 + k * 0.6 + npLift(x, z) * f, 0.25, innerM, innerM, edgeM);
    np.add(lf.grp);
  }
  // ── the INK: a decal on the page's own surface over the impression, painted once the die has landed ──
  const IW = 230, IH = 110;
  const ink = liveTex(IW, IH, 4);
  const inkM = new THREE.MeshStandardMaterial({ map: ink.tex, transparent: true, roughness: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
  {
    const [cx, cz] = paperLocal(IMPRESSION.x, IMPRESSION.y);
    const dg = grid(cx - IW / 2, cx + IW / 2, cz - IH / 2, cz + IH / 2, 23, 11);
    dg.set((x, z) => npTop(Math.max(x0, Math.min(x1, x)), Math.max(z0, Math.min(z1, z))) + 0.05);
    const decal = mesh(dg.g, inkM, false, true);
    np.add(decal);
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
      c.globalAlpha = Math.min(1, q * 1.1) * 0.9;
      c.strokeStyle = RED; c.fillStyle = RED;
      c.lineWidth = 3.6; c.beginPath(); c.roundRect(-w / 2, -h / 2, w, h, 7); c.stroke();
      c.lineWidth = 1.1; c.beginPath(); c.roundRect(-w / 2 + 6, -h / 2 + 6, w - 12, h - 12, 4); c.stroke();
      track(c, 3); fitFont(c, 800, 40, geo.word, w - 34); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(geo.word, 1.5, 2); track(c, 0);
      // a rubber stamp's broken ink: dry specks, a lighter corner where the press was uneven
      c.globalCompositeOperation = "destination-out";
      for (let i = 0; i < 420; i++) { c.globalAlpha = 0.35 + 0.65 * hash(i, 1, 7); const x = -w / 2 + hash(i, 2, 7) * w, y = -h / 2 + hash(i, 3, 7) * h; c.fillRect(x, y, 0.6 + hash(i, 4, 7) * 2.2, 0.5 + hash(i, 5, 7) * 1.2); }
      const fade = c.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2); fade.addColorStop(0, "rgba(0,0,0,0)"); fade.addColorStop(0.7, "rgba(0,0,0,0)"); fade.addColorStop(1, "rgba(0,0,0,0.35)");
      c.globalAlpha = 1; c.fillStyle = fade; c.fillRect(-w / 2 - 4, -h / 2 - 4, w + 8, h + 8);
      c.restore();
    });
  };

  // ══ THE BANK DEPOSIT BAG ══
  const bag = new THREE.Group(); bag.position.set(VG.bag.x, 0, VG.bag.z); bag.rotation.y = rad(VG.bag.yaw);
  W0.add(bag);
  const shell = new THREE.Group(); shell.userData.obj = "bag"; bag.add(shell);
  const canvasM = new THREE.MeshStandardMaterial({ map: canvasTex(), roughness: 0.86, envMapIntensity: 0.4 });
  const liningM = new THREE.MeshStandardMaterial({ color: new THREE.Color("#252A33"), roughness: 0.92, envMapIntensity: 0.2 });
  const bindM = new THREE.MeshStandardMaterial({ color: new THREE.Color("#1D2A47"), roughness: 0.75, envMapIntensity: 0.35 });
  const nickel = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#A8AEB3"), metalness: 1, roughness: 0.28, clearcoat: 0.4, clearcoatRoughness: 0.25, envMapIntensity: 1.0 });
  // the bottom panel (flat on the desk), its bottom tape along the front
  const botTex = paintTex("vd-bagbot-v1", BW, 12, (g) => { g.fillStyle = "#3C5D92"; g.fillRect(0, 0, BW, 12); g.fillStyle = "#1A2236"; g.fillRect(0, 5, BW, 7); for (let x = 0; x < BW; x += 0.8) { g.fillStyle = "rgba(90,105,140,0.25)"; g.fillRect(x, 5, 0.3, 7); } }, 3);
  const botTop = new THREE.MeshStandardMaterial({ map: botTex, roughness: 0.86, envMapIntensity: 0.4 });
  {
    const bp = rbox(BW - 2, 1.2, BD + 1.5, 0.45, { px: bindM, nx: bindM, top: botTop, bottom: liningM, front: bindM, back: bindM }, 2);
    bp.position.set(0, 0.3 + 0.6, BD / 2 + 1.5);   // its front at BD/2 + 1.5 (under the lower teeth), its back at −BD/2
    shell.add(bp);
  }
  // the top panel: canvas over the bundle, the lining inside; reshaped as the slider runs
  let xsNow = XSA;
  const tp = sheetOn(-BW / 2 + 3, BW / 2 - 3, -BD / 2 + 3, LIPZ, 58, 44, (x, z) => bagTop(x, z, xsNow), 0.8, canvasM, liningM, bindM);
  shell.add(tp.grp);
  // the clear vinyl over the ID window: a film following the canvas 0.5 above it
  const vinylM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#E8F0FF"), transparent: true, opacity: 0.22, roughness: 0.06, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.2, depthWrite: false });
  const vin = grid(BAG_WIN.x0, BAG_WIN.x1, BAG_WIN.z0, BAG_WIN.z1, 24, 16);
  vin.set((x, z) => bagTop(x, z, XSA) + 0.5);
  shell.add(mesh(vin.g, vinylM, false, false));
  // the binding: a navy tube round the far edge and both sides
  {
    const y = 3.3, xa = -BW / 2 + 3, xb = BW / 2 - 3, zf = -BD / 2 + 3, r = 12;
    const pts: [number, number, number][] = [[xa, y, BD / 2 - 5]];
    for (let i = 0; i <= 6; i++) { const a = Math.PI + (i / 6) * (Math.PI / 2); pts.push([xa + r + Math.cos(a) * r, y, zf + r + Math.sin(a) * r]); }
    for (let i = 0; i <= 6; i++) { const a = -Math.PI / 2 + (i / 6) * (Math.PI / 2); pts.push([xb - r + Math.cos(a) * r, y, zf + r + Math.sin(a) * r]); }
    pts.push([xb, y, BD / 2 - 5]);
    shell.add(wire(pts, 3.0, bindM, false, 200));
    // its ends are turned in (rounded), the right one inside the lock body
    for (const e of [pts[0], pts[pts.length - 1]]) { const cap = mesh(new THREE.SphereGeometry(3.0, 20, 12), bindM); cap.position.set(...e); shell.add(cap); }
  }
  // the zipper stop (left) and the 7-pin lock body (right), nickel
  { const stop = rbox(5, 3.4, 5.4, 0.8, nickel); stop.position.set(-BW / 2 + 6.5, BOT_TOP + 0.2 + 1.7, BD / 2 - 1 + 2.7); shell.add(stop); }
  {
    // ★ the lock body is riveted through the canvas at the corner: the binding's end and the panels' corner sit inside it
    const LW = 31, LH = 10.6, LD = 14;
    const LX = BW / 2 + 1 - LW / 2, LY0 = 0.3;
    const lock = rbox(LW, LH, LD, 2.2, nickel);
    lock.position.set(LX, LY0 + LH / 2, BD / 2 + 3.2);
    shell.add(lock);
    const plug = mesh(new THREE.CylinderGeometry(3.6, 3.6, 1.4, 32).rotateX(Math.PI / 2), M.chrome());
    plug.position.set(LX + 4, LY0 + LH / 2, BD / 2 + 3.2 + 0.7);
    shell.add(plug);
    const keyT = paintTex("vd-keyway-v1", 32, 32, (g) => {
      g.fillStyle = "#C8CDD2"; g.fillRect(0, 0, 32, 32);
      g.fillStyle = "#2A2E33"; g.beginPath(); g.arc(16, 16, 9.5, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#C8CDD2"; g.beginPath(); g.arc(16, 16, 6.2, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#2A2E33"; for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2; g.beginPath(); g.arc(16 + Math.cos(a) * 7.9, 16 + Math.sin(a) * 7.9, 1.1, 0, Math.PI * 2); g.fill(); }
      g.fillStyle = "#9AA0A6"; g.beginPath(); g.arc(16, 16, 2.2, 0, Math.PI * 2); g.fill();
    }, 4);
    const kf = mesh(new THREE.CircleGeometry(3.3, 32), new THREE.MeshPhysicalMaterial({ map: keyT, metalness: 0.9, roughness: 0.3, envMapIntensity: 0.9 }), false, false);
    kf.position.set(LX + 4, LY0 + LH / 2, BD / 2 + 3.2 + 1.42);
    shell.add(kf);
    // two rivets through the canvas behind it
    for (const dx of [-8, 8]) { const rv = mesh(new THREE.SphereGeometry(1.8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), nickel); rv.position.set(LX + dx, LY0 + LH, BD / 2 + 3.2 - LD / 2); shell.add(rv); }
  }
  // the teeth: one merged, re-placed mesh (closed: one alternating row; open: the upper row rides the lip, the lower stays)
  const toothG = new THREE.BoxGeometry(TOOTH.w, TOOTH.h, TOOTH.d, 1, 1, 1);
  const nT = Math.floor((XL - XS0) / TOOTH.pitch) + 1;
  const tPos = toothG.attributes.position as THREE.BufferAttribute, tNrm = toothG.attributes.normal as THREE.BufferAttribute, tIdx = toothG.index!;
  const vPer = tPos.count;
  const TP = new Float32Array(nT * vPer * 3), TN = new Float32Array(nT * vPer * 3);
  const TI: number[] = [];
  for (let k = 0; k < nT; k++) {
    for (let v = 0; v < vPer; v++) { TN[(k * vPer + v) * 3] = tNrm.getX(v); TN[(k * vPer + v) * 3 + 1] = tNrm.getY(v); TN[(k * vPer + v) * 3 + 2] = tNrm.getZ(v); }
    for (let i = 0; i < tIdx.count; i++) TI.push(tIdx.getX(i) + k * vPer);
  }
  const teethG = new THREE.BufferGeometry();
  teethG.setAttribute("position", new THREE.BufferAttribute(TP, 3));
  teethG.setAttribute("normal", new THREE.BufferAttribute(TN, 3));
  teethG.setIndex(TI);
  const teeth = mesh(teethG, nickel);
  shell.add(teeth);
  const placeTeeth = (xs: number) => {
    for (let k = 0; k < nT; k++) {
      const x = XS0 + k * TOOTH.pitch;
      let oy = ZS, oz = BD / 2 - 1;
      // ★ a tooth inside the slider is collapsed to a point there (the slider carries the chain through itself)
      if (Math.abs(x - xs) < 9) { for (let v = 0; v < vPer; v++) { const o = (k * vPer + v) * 3; TP[o] = x; TP[o + 1] = ZS; TP[o + 2] = oz; } continue; }
      if (x > xs) {
        const gp = gape(x, xs);
        if (k % 2 === 0) { oy = ZS + gp; oz = BD / 2 - 1 - 0.05 * gp; }
        else { oy = BOT_TEETH_Y; oz = BD / 2 - 0.2; }
      }
      for (let v = 0; v < vPer; v++) { const o = (k * vPer + v) * 3; TP[o] = tPos.getX(v) + x; TP[o + 1] = tPos.getY(v) + oy; TP[o + 2] = tPos.getZ(v) + oz; }
    }
    teethG.attributes.position.needsUpdate = true; teethG.computeBoundingBox(); teethG.computeBoundingSphere();
  };
  // the slider and its pull tab (one object, riding the chain)
  const slider = new THREE.Group(); slider.userData.obj = "zip-slider"; slider.userData.pierces = ["bag"]; bag.add(slider);
  {
    const body = rbox(14, 5.4, 9.6, 1.6, nickel);
    body.position.set(0, BOT_TOP + 0.25 + 2.7, BD / 2 - 1 + 4.8);
    slider.add(body);
    // the bail: a wire bridge standing on the slider's top, the pull hung from it
    const ST = BOT_TOP + 0.25 + 5.4;
    const bail = wire([[-2.8, ST - 0.35, BD / 2 + 0.6], [-2.8, ST + 1.3, BD / 2 + 2.0], [-1.6, ST + 1.9, BD / 2 + 2.6], [1.6, ST + 1.9, BD / 2 + 2.6], [2.8, ST + 1.3, BD / 2 + 2.0], [2.8, ST - 0.35, BD / 2 + 0.6]], 0.6, nickel, false, 32);
    slider.add(bail);
    // the pull: a flat plate with a slot, from the bail down to the desk in front of the bag
    const sh = new THREE.Shape();
    sh.moveTo(-4.2, 0); sh.lineTo(4.2, 0); sh.lineTo(5.2, 15); sh.absarc(0, 15, 5.2, 0, Math.PI, false); sh.lineTo(-4.2, 0);
    const hole = new THREE.Path(); hole.absellipse(0, 15.5, 2.0, 2.6, 0, Math.PI * 2, false, 0); sh.holes.push(hole);
    const tabG = new THREE.ExtrudeGeometry(sh, { depth: 1.1, bevelEnabled: true, bevelSize: 0.35, bevelThickness: 0.3, bevelSegments: 2, curveSegments: 16 });
    tabG.translate(0, 0, -0.55);
    const tab = mesh(tabG, nickel);
    // hung from the bail's crown and lying forward, down onto the desk in front of the bag
    const hy = ST + 1.9 - 0.6 - 0.95, hz = BD / 2 + 2.6 + 0.4, tl = 20.2;
    const ang = Math.asin(Math.min(1, (hy - 0.3 - 0.95) / tl));
    tab.rotation.x = Math.PI / 2 + ang;
    tab.position.set(0, hy, hz);
    slider.add(tab);
  }
  // the bundle half out of the mouth (plain strap: no figure), and the small pile beside the bag
  const bun = new THREE.Group(); bun.userData.obj = "cash-bag";
  bun.position.set(BUN.x, bunUnder(BUN_FAR), BUN_FAR);
  bun.rotation.set(-Math.atan(BUN_SLOPE), 0, 0);
  const bb = bundle(5, false, { plain: true });
  bb.rotation.y = Math.PI / 2 + BUN.yaw;
  bb.position.set(0, 0, NOTE.W / 2);
  bun.add(bb);
  bag.add(bun);
  const pl = pile("cashp", 2, 61, { turn: 0.05, shift: 4, plain: true });
  pl.group.position.set(VG.pile.x, 0.3, VG.pile.z); pl.group.rotation.y = rad(VG.pile.yaw);
  W0.add(pl.group);
  // ★ build-time proof that the canvas never touches the bundle (top panel's underside ≥ the bundle's top + 0.6)
  {
    let worst = 1e9;
    for (const xs of [XSA, (XSA + XSB) / 2, XSB]) for (let x = BUN.x - BUN_HALF; x <= BUN.x + BUN_HALF; x += 3) for (let z = BUN_FAR; z <= LIPZ; z += 3)
      worst = Math.min(worst, bagTop(x, z, xs) - 0.8 - bunTop(z) - Math.abs(Math.sin(BUN.yaw)) * 0);
    if (worst < 0.6) console.error(`[035 verdict] the bag's canvas comes within ${worst.toFixed(2)} px of the bundle`);
  }

  // ══ THE STAMP (034's real stamp): die face at its own y 0, its knob up ══
  const st = new THREE.Group(); st.userData.obj = "stamp"; W0.add(st);
  const { DW, DD, REL } = STAMP;
  const dieT = paintTex(`vd-die-v2:${geo.word}`, DW, DD, (c) => {
    // the die's relief, reversed top to bottom (it faces down and prints the right way round): white = raised
    c.fillStyle = "#000"; c.fillRect(0, 0, DW, DD);
    c.save(); c.translate(0, DD); c.scale(1, -1);
    c.strokeStyle = "#fff"; c.fillStyle = "#fff";
    const w = IMPRESSION.w * (DW / 190), h = IMPRESSION.h * (DD / 66);
    c.lineWidth = 3.4; c.beginPath(); c.roundRect((DW - w) / 2, (DD - h) / 2, w, h, 6); c.stroke();
    c.lineWidth = 1.1; c.beginPath(); c.roundRect((DW - w) / 2 + 5.5, (DD - h) / 2 + 5.5, w - 11, h - 11, 4); c.stroke();
    track(c, 3); fitFont(c, 800, 34, geo.word, w - 30); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(geo.word, DW / 2 + 1.5, DD / 2 + 2); track(c, 0);
    c.restore();
  }, 3);
  const relief = new THREE.PlaneGeometry(DW, DD, 110, 35).rotateX(Math.PI / 2);
  const dieM = new THREE.MeshStandardMaterial({ color: new THREE.Color("#9E2B26"), roughness: 0.7, displacementMap: dieT, displacementScale: REL, envMapIntensity: 0.3 });
  st.add(mesh(relief, dieM, false, false));
  const dieSlab = rbox(DW + 4, 3, DD + 4, 1, M.rubber("#8E2621")); dieSlab.position.set(0, 0.05 + 1.5, (DD + 4) / 2); st.add(dieSlab);
  const cushion = rbox(DW + 8, 4, DD + 8, 1.5, M.rubber("#6E6A66")); cushion.position.set(0, 3.1 + 2, (DD + 8) / 2); st.add(cushion);
  const beechF = new THREE.MeshStandardMaterial({ map: grain("vd-beech-v1", 200, 40, "#D2A777", "#9C6F42", "#EBCB9F", "x"), roughness: 0.5, envMapIntensity: 0.45 });
  const beechT = M.satin("#D9B080", 0.5);
  const BLW = 196, BLH = 24, BLD = 78;
  const block = rbox(BLW, BLH, BLD, 4, { px: beechF, nx: beechF, top: beechT, bottom: beechT, front: beechF, back: beechF });
  block.position.set(0, 7.15 + BLH / 2, BLD / 2);
  st.add(block);
  // the index label on the mount's top: a blank ruled frame until the press, then the die's impression the right way round
  const idx = liveTex(176, 56, 3);
  let idxShown = -1;
  const paintIdx = (w: number) => {
    const q = w > 0.5 ? 1 : 0;
    if (q === idxShown) return;
    idxShown = q;
    idx.paint((c) => {
      c.fillStyle = "#F4EFE2"; c.fillRect(0, 0, 176, 56);
      for (let i = 0; i < 300; i++) { c.fillStyle = `rgba(120,100,70,${0.04 + 0.05 * hash(i, 3, 17)})`; c.fillRect(hash(i, 1, 17) * 176, hash(i, 2, 17) * 56, 0.5 + hash(i, 4, 17) * 1.5, 0.3); }
      c.strokeStyle = RED; c.fillStyle = RED; c.lineWidth = 2.6; c.beginPath(); c.roundRect(8, 8, 160, 40, 5); c.stroke();
      c.lineWidth = 0.9; c.beginPath(); c.roundRect(13, 13, 150, 30, 3); c.stroke();
      if (q) { track(c, 2.5); fitFont(c, 800, 26, geo.word, 136); c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(geo.word, 89, 29); track(c, 0); }
    });
  };
  const idxM = mesh(new THREE.PlaneGeometry(176, 56).rotateX(-Math.PI / 2), M.print(idx.tex, 0.8), false, true);
  idxM.position.set(0, 7.15 + BLH + 0.05, 0);
  st.add(idxM);
  const walnut = M.gloss("#4A2C1C");
  const knob = mesh(lathe([[15, 0], [15, 3], [11.5, 7], [9.5, 16], [10.5, 22], [16, 29], [22, 37], [24.5, 46], [23, 55], [18, 62], [10, 67], [0.01, 69]], 48), walnut);
  knob.position.y = 7.15 + BLH + 0.12;
  st.add(knob);
  const knobFoot = mesh(new THREE.CircleGeometry(15, 48).rotateX(Math.PI / 2), walnut);
  knobFoot.position.y = 7.15 + BLH + 0.12;
  st.add(knobFoot);

  const placeStamp = (t: number) => {
    const a = stampAt(t);
    st.visible = a.visible;
    st.position.copy(a.pos);
    st.rotation.set(0, a.spin, a.lean, "YXZ");
  };

  root.add(makeFloor({ y: VG.floor, x0: -700, x1: 1900, z0: -800, z1: 900, reflect: 0.12, shadow: 0.55, fadeC: [560, 60], fadeR: [1050, 640] }));

  let zipNow = -1;
  return {
    root,
    update: (p) => {
      turn.rotation.y = rad(p.yaw);
      placeStamp(p.stamp);
      paintInk(p.ink);
      paintIdx(p.word);
      const z = Math.round(p.zip * 60) / 60;
      if (z !== zipNow) {
        zipNow = z;
        xsNow = XSA + (XSB - XSA) * z;
        tp.reshape((x, zz) => bagTop(x, zz, xsNow));
        placeTeeth(xsNow);
        slider.position.x = xsNow;
      }
    },
  };
};
