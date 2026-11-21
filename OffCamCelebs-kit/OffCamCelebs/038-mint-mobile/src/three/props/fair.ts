// ══════════════════════════════════════════════════════════════════════════════════════════════
// TO BE FAIR, IN 3-D (038) — "To be fair, he never called it his billion. He joked T-Mobile beat a last-minute bid from his
// mom." On the espresso ground, an auction room's real objects (no people):
//   · a TROPHY: a silver-plate loving cup (a turned foot, a knopped stem, a deep bowl with a rolled lip, two ear handles) on
//     a two-tier black piano-lacquer plinth; on the upper tier a brushed-brass plate engraved "$1.35 BILLION", on the lower
//     tier the winner's NAME PLATE, left blank: nobody's name was ever engraved on it;
//   · a GAVEL on its SOUND BLOCK (turned cherry, brass bands; the 031 gavel, at this place's scale): the knob rests on the
//     floor, the head's lower face on the block; it lifts on its knob and comes down on the block with a knock;
//   · two BIDDING PADDLES (one piece of birch ply each: a round head on a straight handle, a white printed face), held up
//     from below the frame by bidders out of shot: "T-MOBILE" and "MOM".
// Units are the layer's px (y up), the floor at y 0 of `sc`.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, slabOf, imageOf, type Model } from "../stage";
import { M, rad, hash, col, rbox, wire, fitFont, track } from "../kit029";

type Vec = [number, number, number];

// ══ PRINT ══
/** a brushed-brass plate; `text` engraved (dark cut letters with a bright lower edge), or none (the blank name plate) */
const brassTex = (key: string, w: number, h: number, text?: string) => paintTex(key, w, h, (g) => {
  const bg = g.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#E2C26A"); bg.addColorStop(0.45, "#CFA84E"); bg.addColorStop(0.7, "#E6CB7C"); bg.addColorStop(1, "#BC9440");
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 260; i++) {   // the brushing
    const y = hash(i, 1, 7) * h;
    g.strokeStyle = hash(i, 2, 7) > 0.5 ? "rgba(255,240,190,0.18)" : "rgba(120,88,30,0.16)"; g.lineWidth = 0.4 + 0.6 * hash(i, 3, 7);
    g.beginPath(); g.moveTo(0, y); g.lineTo(w, y + (hash(i, 4, 7) - 0.5)); g.stroke();
  }
  // an engraved double rule inside the edge
  g.strokeStyle = "rgba(92,66,20,0.55)"; g.lineWidth = 1.1; g.strokeRect(7, 7, w - 14, h - 14);
  g.strokeStyle = "rgba(255,236,170,0.45)"; g.lineWidth = 0.7; g.strokeRect(8.2, 8.2, w - 14, h - 14);
  if (!text) return;
  // the engraving: the figure large over its unit (one figure), each line fitted to the plate by measuring it
  const [a, b] = text.split(" ");
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  const cut = (t: string, y: number, size: number, sp: number) => {
    track(g, sp); fitFont(g, 800, size, t, w - 40);
    g.fillStyle = "rgba(255,238,176,0.8)"; g.fillText(t, w / 2 + 0.9, y + 1.1);
    g.fillStyle = "#4A340E"; g.fillText(t, w / 2, y);
  };
  cut(a, h * 0.6, h * 0.5, 1);
  if (b) cut(b, h * 0.86, h * 0.2, 5);
}, 4);
/** a paddle's face: the white printed head (its name in one bold line) and the birch handle */
const PAD = { r: 132, hw: 58, hl: 560, t: 10 } as const;
const PAD_W = 2 * PAD.r, PAD_H = 2 * PAD.r + PAD.hl;
const padTex = (key: string, name: string, ink: string, logo = false) => paintTex(key, PAD_W, PAD_H, (g) => {
  // birch ply
  g.fillStyle = "#D9B98A"; g.fillRect(0, 0, PAD_W, PAD_H);
  for (let i = 0; i < 120; i++) {
    const x0 = hash(i, 11, 3) * PAD_W, a = 1 + 3 * hash(i, 12, 3), p = hash(i, 13, 3) * 6.28;
    g.strokeStyle = hash(i, 14, 3) > 0.4 ? `rgba(150,105,60,${0.12 + 0.18 * hash(i, 15, 3)})` : "rgba(250,230,200,0.2)"; g.lineWidth = 0.5 + 1.4 * hash(i, 16, 3);
    g.beginPath(); for (let y = 0; y <= PAD_H; y += 10) { const x = x0 + a * Math.sin(y / 70 + p); if (y === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke();
  }
  // the head's printed white face, inset 6 px from its edge
  g.fillStyle = "#F6F3EC"; g.beginPath(); g.arc(PAD.r, PAD.r, PAD.r - 6, 0, Math.PI * 2); g.fill();
  g.strokeStyle = ink; g.lineWidth = 3; g.beginPath(); g.arc(PAD.r, PAD.r, PAD.r - 18, 0, Math.PI * 2); g.stroke();
  if (logo) {
    // ★ P16: the REAL T-Mobile marks (assets/brand: Wikimedia Commons / selfh.st; SOURCES.txt): the T above the wordmark
    const t = imageOf("assets/brand/tmobile_t.png"), wm = imageOf("assets/brand/tmobile_wordmark.png");
    const ok = (im: HTMLImageElement) => im.complete && im.naturalWidth > 0;
    if (ok(t)) g.drawImage(t, PAD.r - 52, PAD.r - 86, 104, 104);
    const ww = 2 * (PAD.r - 40), wh = (ww * 400) / 1946;
    if (ok(wm)) g.drawImage(wm, PAD.r - ww / 2, PAD.r + 34, ww, wh);
    return;
  }
  g.fillStyle = ink; g.textAlign = "center"; g.textBaseline = "middle";
  track(g, name.length > 4 ? 0.5 : 3);
  fitFont(g, 800, name.length > 4 ? 64 : 104, name, 2 * (PAD.r - 34));
  g.fillText(name, PAD.r, PAD.r + 4);
}, 3);

// ══ THE TROPHY ══
export const TR = { p1: { w: 300, h: 64, d: 230 }, p2: { w: 236, h: 150, d: 180 }, cupH: 265 } as const;
export const TR_FOOT = 0.3 + TR.p1.h + 0.3 + TR.p2.h + 0.3;
export const TR_TOP = TR_FOOT + TR.cupH;
/** the figure plate's centre (trophy frame) and the name plate's */
export const TR_PLATE: Vec = [0, 0.3 + TR.p1.h + 0.3 + TR.p2.h / 2 + 3, TR.p2.d / 2 + 3.3];
export const TR_NAME: Vec = [0, 0.3 + TR.p1.h / 2, TR.p1.d / 2 + 2.8];
const CUP_OUT: [number, number][] = [[62, 0], [66, 2], [68, 6], [66, 10], [56, 14], [40, 20], [26, 30], [19, 44], [17, 58], [22, 64], [27, 68], [22, 72],
  [16, 78], [17, 92], [22, 102], [32, 112], [52, 124], [74, 140], [92, 160], [104, 184], [110, 210], [112, 236], [113, 252], [116, 258], [117, 262],
  [115, 265], [111, 264]];
const CUP_IN: [number, number][] = [[108, 258], [107, 236], [105, 210], [99, 184], [87, 160], [69, 140], [47, 124], [30, 115]];
const trophyModel = () => {
  const t = new THREE.Group();
  const lacquer = new THREE.MeshPhysicalMaterial({ color: col("#141112"), roughness: 0.2, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.0 });
  const brass = new THREE.MeshPhysicalMaterial({ color: col("#D6B25A"), metalness: 1, roughness: 0.3, envMapIntensity: 1.0 });
  const plinth = new THREE.Group(); plinth.userData.obj = "plinth"; t.add(plinth);
  const p1 = rbox(TR.p1.w, TR.p1.h, TR.p1.d, 7, lacquer, 4); p1.position.set(0, 0.3 + TR.p1.h / 2, TR.p1.d / 2); plinth.add(p1);
  const y2 = 0.3 + TR.p1.h + 0.3;
  const p2 = rbox(TR.p2.w, TR.p2.h, TR.p2.d, 6, lacquer, 4); p2.position.set(0, y2 + TR.p2.h / 2, TR.p2.d / 2); plinth.add(p2);
  p2.userData.obj = "plinth-top";
  // the plates, screwed to the fronts (their backs 0.3 px off the lacquer; four brass pins each)
  const plate = (w: number, h: number, d: number, at: Vec, tex: THREE.Texture, name: string) => {
    const face = new THREE.MeshPhysicalMaterial({ map: tex, metalness: 1, roughness: 0.34, envMapIntensity: 0.95 });
    const pl = rbox(w, h, d, 1.1, { px: brass, nx: brass, top: brass, bottom: brass, front: face, back: brass }, 2);
    pl.position.set(at[0], at[1], at[2]); pl.userData.obj = name; t.add(pl);
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
      const pin = mesh(new THREE.CylinderGeometry(2.4, 2.4, 1.6, 16).rotateX(Math.PI / 2), brass);
      pin.position.set(at[0] + sx * (w / 2 - 6.5), at[1] + sy * (h / 2 - 6.5), at[2] + 0.5); pl.parent!.add(pin); pin.userData.obj = name;
    }
  };
  plate(214, 108, 3, TR_PLATE, brassTex("fair-plate", 214, 108, "$1.35 BILLION"), "plate");
  plate(168, 34, 2.5, TR_NAME, brassTex("fair-name", 168, 34), "nameplate");
  // the cup: silver plate, turned in one profile (outside up, over the lip, down the inside), its well closed by a disc
  const silver = new THREE.MeshPhysicalMaterial({ color: col("#E9E9EC"), metalness: 1, roughness: 0.14, envMapIntensity: 1.15 });
  const cup = new THREE.Group(); cup.userData.obj = "cup"; cup.position.y = TR_FOOT; t.add(cup);
  cup.add(mesh(lathe([...CUP_OUT, ...CUP_IN], 128), silver));
  const foot = mesh(new THREE.CircleGeometry(62, 96).rotateX(Math.PI / 2), silver); cup.add(foot);
  const well = mesh(new THREE.CircleGeometry(30, 64).rotateX(-Math.PI / 2).translate(0, 115, 0), silver); cup.add(well);
  // the two ear handles: a cast loop each, from under the lip out and down to the bowl's waist
  for (const sx of [-1, 1]) {
    const pts: Vec[] = [[104 * sx, 236, 0], [128 * sx, 240, 0], [152 * sx, 228, 0], [166 * sx, 204, 0], [162 * sx, 176, 0], [146 * sx, 156, 0], [118 * sx, 146, 0], [84 * sx, 150, 0]];
    const h = wire(pts, 6.5, silver, false, 64); cup.add(h);
    for (const e of [pts[0], pts[pts.length - 1]]) { const knob = mesh(new THREE.SphereGeometry(8, 20, 14), silver); knob.position.set(e[0], e[1], e[2]); cup.add(knob); }
  }
  return t;
};

// ══ THE GAVEL ON ITS BLOCK (031's, scaled to this place) ══
const GS = 1.55;
const gavelModel = () => {
  const cherry = M.satin("#7E3B22", 0.32);
  const bandM = M.gold("#C99A3E");
  const gv = new THREE.Group(); gv.scale.setScalar(GS);
  const L = 280, KNOB = 12.5, HEADR = 27, HH = 50, FACE_R = 21, BLOCKH = 34;
  const HEAD: [number, number][] = [[FACE_R, -HH], [25.5, -HH + 3], [26.5, -HH + 7], [HEADR + 1.2, -HH + 9], [HEADR + 1.2, -HH + 14],
    [26.5, -HH + 16], [HEADR, -HH + 18], [HEADR, HH - 18], [26.5, HH - 16], [HEADR + 1.2, HH - 14], [HEADR + 1.2, HH - 9],
    [26.5, HH - 7], [25.5, HH - 3], [FACE_R, HH]];
  const BAND: [number, number][] = [[HEADR + 0.9, HH - 14.6], [HEADR + 1.7, HH - 13.9], [HEADR + 1.7, HH - 9.1], [HEADR + 0.9, HH - 8.4]];
  const BAND_LO = BAND.map(([r, y]) => [r, -y] as [number, number]).reverse();
  const lowAt = (a: number) => KNOB + L * Math.sin(a) + Math.min(...[...HEAD, ...BAND, ...BAND_LO].map(([r, sx]) => sx * Math.cos(a) - r * Math.sin(a)));
  let lo = 0, hi = 0.8;
  for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2; if (lowAt(m) < BLOCKH + 0.3) lo = m; else hi = m; }
  const REST = (lo + hi) / 2;
  const RUN = L * Math.cos(REST) + HH * Math.sin(REST);
  const AIM = rad(152);   // the handle runs from the knob (front right) to the head (back left)
  const blockG = new THREE.Group(); blockG.userData.obj = "block";
  blockG.position.set(RUN * Math.cos(AIM), 0.3 / GS, -RUN * Math.sin(AIM));
  gv.add(blockG);
  blockG.add(mesh(lathe([[62, 0], [66, 3], [66, 14], [63, 16], [63, 19], [66, 21], [66, 31], [63, BLOCKH]], 96), cherry));
  for (const [y, r, up] of [[BLOCKH, 63, true], [0, 62, false]] as const) {
    const c = mesh(new THREE.CircleGeometry(r, 96), cherry); c.rotation.x = up ? -Math.PI / 2 : Math.PI / 2; c.position.y = y; blockG.add(c);
  }
  const ring = mesh(lathe([[63.4, 16.2], [64.2, 16.6], [64.2, 18.4], [63.4, 18.8]], 96), bandM); blockG.add(ring);
  const gavel = new THREE.Group(); gavel.userData.obj = "gavel";
  gavel.position.set(0, KNOB + 0.3 / GS, 0); gavel.rotation.y = AIM; gv.add(gavel);
  const swing = new THREE.Group(); gavel.add(swing);
  const HL = L - HEADR + 2;
  const handle = mesh(lathe([[0.01, -KNOB], [7, -11.5], [11.5, -6], [KNOB, 0], [11, 5], [8, 9.5], [8.5, 22], [9.5, HL * 0.6], [8.5, HL - 16], [10, HL - 12], [10, HL], [0.01, HL]], 48), cherry);
  handle.rotation.z = -Math.PI / 2; swing.add(handle);
  const head = mesh(lathe(HEAD, 96), cherry); head.position.set(L, 0, 0); swing.add(head);
  for (const sg of [-1, 1]) {
    const face = mesh(new THREE.CircleGeometry(FACE_R, 64), cherry);
    face.rotation.x = sg > 0 ? -Math.PI / 2 : Math.PI / 2; face.position.set(L, sg * HH, 0); swing.add(face);
    const band = mesh(lathe(sg > 0 ? BAND : BAND_LO, 96), bandM); band.position.set(L, 0, 0); swing.add(band);
  }
  return { gv, swing, REST, L, HH, KNOB, AIM, RUN };
};
export const GV_S = GS;

// ══ A BIDDING PADDLE: local origin at the handle's foot, its face toward +z ══
export const PADDLE = { ...PAD, total: PAD_H } as const;
const paddleModel = (name: string, ink: string, key: string) => {
  const p = new THREE.Group(); p.userData.obj = key;
  const s = new THREE.Shape();
  // the handle up to the head, the head a circle (the shape in px, (0,0) at the handle's foot, y up)
  const hw = PAD.hw / 2, y0 = PAD.hl;
  const join = Math.sqrt(PAD.r * PAD.r - hw * hw);
  s.moveTo(-hw + 4, 0); s.lineTo(hw - 4, 0); s.quadraticCurveTo(hw, 0, hw, 4);
  s.lineTo(hw - 3, y0 + PAD.r - join - 10); s.quadraticCurveTo(hw - 2, y0 + PAD.r - join, hw + 6, y0 + PAD.r - join + 1);
  s.absarc(0, y0 + PAD.r, PAD.r, -Math.PI / 2 + Math.asin((hw + 6) / PAD.r), Math.PI * 1.5 - Math.asin((hw + 6) / PAD.r), false);
  s.quadraticCurveTo(-hw + 2, y0 + PAD.r - join, -hw + 3, y0 + PAD.r - join - 10);
  s.lineTo(-hw, 4); s.quadraticCurveTo(-hw, 0, -hw + 4, 0);
  const geo = slabOf(s, PAD.t, 1.6, 48);
  geo.translate(0, 0, PAD.t / 2);
  const face = new THREE.MeshPhysicalMaterial({ map: padTex(`fair-pad-${key}`, name, ink, key === "paddle-tmobile"), roughness: 0.55, clearcoat: 0.3, clearcoatRoughness: 0.4, envMapIntensity: 0.5 });
  const edge = new THREE.MeshStandardMaterial({ color: col("#C9A270"), roughness: 0.7, envMapIntensity: 0.35 });
  p.add(mesh(geo, [face, edge]));
  return p;
};

// ══ THE PLACE ══
export type FairGeo = { floor: number; trophy: { x: number; z: number }; gavel: { x: number; z: number }; pads: { x: number; z: number; lean: number; turn: number }[] };
/** lift: the gavel's head up off the block (0…1 of 24°); pads: each paddle's rise (px: its foot's height over the floor);
 *  yaw: the place's turn (deg) */
export type FairP = { lift: number; pads: number[]; yaw: number };
export const FAIR_PADS = [{ name: "T-MOBILE", ink: "#E20074", key: "paddle-tmobile" }, { name: "MOM", ink: "#2A1B15", key: "paddle-mom" }] as const;

export const fairModel = (g: FairGeo) => (): Model<FairP> => {
  const root = new THREE.Group();
  const cx = (g.trophy.x + g.gavel.x) / 2;
  const sc = new THREE.Group(); sc.position.set(cx, -g.floor, 0); root.add(sc);
  const tr = trophyModel(); tr.position.set(g.trophy.x - cx, 0, g.trophy.z - TR.p1.d / 2); tr.rotation.y = rad(6); sc.add(tr);
  const G = gavelModel(); G.gv.position.set(g.gavel.x - cx, 0, g.gavel.z); sc.add(G.gv);
  const pads = g.pads.map((pd, i) => {
    const m = paddleModel(FAIR_PADS[i].name, FAIR_PADS[i].ink, FAIR_PADS[i].key);
    m.position.set(pd.x, -g.floor, pd.z); m.rotation.set(0, rad(pd.turn), rad(pd.lean)); root.add(m);
    return m;
  });
  root.add(makeFloor({ y: g.floor, x0: g.trophy.x - 900, x1: g.gavel.x + 900, z0: -900, z1: 260, reflect: 0.14, shadow: 0.5,
    fadeC: [cx, -60], fadeR: [(g.gavel.x - g.trophy.x) / 2 + 520, 420],
    blobs: [{ x: g.trophy.x, z: g.trophy.z, w: 380, d: 300, a: 0.32 }, { x: g.gavel.x, z: g.gavel.z, w: 420, d: 260, a: 0.25 }] }));
  return {
    root,
    update: (p) => {
      sc.rotation.y = rad(p.yaw);
      G.swing.rotation.z = G.REST + rad(24) * p.lift;
      pads.forEach((m, i) => { m.position.y = -g.floor + p.pads[i]; m.visible = p.pads[i] > -PAD_H - 400; });
    },
  };
};
