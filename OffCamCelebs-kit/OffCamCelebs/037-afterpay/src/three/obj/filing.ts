// THE FILING — a thick BOUND document lying on the desk: a black back cover, a block of pages (their edges show as fine
// leaves), a spine, and a black front cover carrying its title in lit print. OPEN: the front cover swings over on its spine
// and comes to rest on the desk to the left (its inside leaf showing), and the first page shows: a heading, greeked body
// text and THE ONE LINE that matters, which a highlighter then crosses. A line written "LABEL: FIGURE" is set on two rows,
// the figure larger. Origin: the centre of its footprint, on the desk (y = 0).
import { THREE, paintTex, rr } from "../stage";
import { rbox, hash, font, fitFont, track } from "../kit029";
import { SM, C, textTex, type Obj3 } from "../studio";

export type FilingOpts = { key: string; w?: number; d?: number; t?: number; cover: string[]; line: string; lineColor?: string };
/** open: 0 closed … 1 the cover laid over to the left; hl: 0…1 the highlight drawn across the line */
export type FilingP = { open?: number; hl?: number };

const INK = "#1E1A10", GREEK = "#C9C0AB", PAGE = "#F1EADA";
/** greeked body text: rows of soft bars, the last of a paragraph short */
const greek = (g: CanvasRenderingContext2D, x: number, y: number, w: number, rows: number, seed: number, gap = 22, h = 8) => {
  g.fillStyle = GREEK;
  for (let i = 0; i < rows; i++) {
    const last = i === rows - 1;
    let cx = x;
    const end = x + w * (last ? 0.42 + 0.3 * hash(i, seed, 3) : 0.93 + 0.07 * hash(i, seed, 5));
    for (let k = 0; cx < end - 12; k++) {
      const ww = Math.min(end - cx, 26 + 70 * hash(i, k, seed));
      rr(g, cx, y + i * gap, ww, h, h / 2); g.fill();
      cx += ww + 9;
    }
  }
  return y + rows * gap;
};

export const makeFiling = (o: FilingOpts): Obj3<FilingP> => {
  const w = o.w ?? 420, d = o.d ?? 560, t = o.t ?? 64, CT = 8;
  const k = w / 420;                                   // print scales with the filing
  const group = new THREE.Group();
  const black = SM.black();
  // the back cover and the spine
  const back = rbox(w + 8, CT, d + 8, 2.5, black);
  back.position.set(2, CT / 2, d / 2 + 4);
  const spine = rbox(16, t + 2 * CT + 2, d + 8, 5, SM.graphite());
  spine.position.set(-w / 2 - 6, (t + 2 * CT + 2) / 2, d / 2 + 4);
  const spineLine = rbox(3, 3, d - 30, 1, SM.edge(), 1);
  spineLine.position.set(-w / 2 - 14.5, t / 2 + CT, (d - 30) / 2);
  group.add(back, spine, spineLine);
  // the block of pages: its three open sides show the leaves
  const leaves = (len: number) => {
    const tx = paintTex(`filing:leaves:${Math.round(len)}:${Math.round(t)}`, len, t, (g) => {
      g.fillStyle = "#E9E2D2"; g.fillRect(0, 0, len, t);
      for (let y = 0.6; y < t; y += 1.7) { g.fillStyle = `rgba(92,82,60,${(0.1 + 0.2 * hash(Math.round(y * 10), 2, 9)).toFixed(3)})`; g.fillRect(0, y, len, 0.55); }
    }, 3);
    return SM.print(tx);
  };
  const paper = SM.paper("#EDE6D6");
  const block = rbox(w, t, d, 1.2, { px: leaves(d), nx: paper, top: paper, bottom: paper, front: leaves(w), back: leaves(w) }, 1);
  block.position.set(0, CT + t / 2, d / 2);
  group.add(block);
  // ── the first page ──
  const pw = w - 24, pd = d - 24, PAD = 30 * k, TW = pw - 2 * PAD - 16 * k;
  const cut = o.line.indexOf(": ");
  const [label, figure] = cut > 0 ? [o.line.slice(0, cut + 1), o.line.slice(cut + 2)] : [o.line, ""];
  // the line's layout (page px from the page's top edge), fixed here so the print and the highlight agree whatever the
  // fonts' state at the first paint: the sizes are capped by a width estimate (Archivo's wide capitals ≈ 0.7 em)
  // a long label is set on two rows, broken at the word nearest its middle
  const rows = (() => {
    if (label.length <= 24) return [label];
    const ws = label.split(" ");
    let best = 1, bd = 1e9;
    for (let i = 1; i < ws.length; i++) { const dlt = Math.abs(ws.slice(0, i).join(" ").length - label.length / 2); if (dlt < bd) { bd = dlt; best = i; } }
    return [ws.slice(0, best).join(" "), ws.slice(best).join(" ")];
  })();
  const LS = Math.min(34 * k, TW / (Math.max(...rows.map((r) => r.length)) * 0.72)), FS = figure ? Math.min(74 * k, TW / (figure.length * 0.72)) : 0;
  const ROWS1 = 4, P1 = 92 * k, GAP = 22 * k;
  const lineTop = P1 + ROWS1 * GAP + 26 * k, labelH = LS * 1.22 * rows.length + LS * 0.2, figH = FS * 1.12, lineBot = lineTop + labelH + figH + 8 * k;
  const pageTex = paintTex(`filing:${o.key}:page:${Math.round(w)}`, pw, pd, (g) => {
    g.fillStyle = PAGE; g.fillRect(0, 0, pw, pd);
    g.textBaseline = "alphabetic"; g.textAlign = "left";
    font(g, 800, 25 * k); track(g, 3 * k); g.fillStyle = "#4A4435";
    g.fillText("ACQUISITIONS", PAD, 44 * k);
    track(g, 0);
    g.fillStyle = "#8A8068"; g.fillRect(PAD, 64 * k, pw - 2 * PAD, 1.6 * k);
    greek(g, PAD, P1, pw - 2 * PAD, ROWS1, 1, GAP, 8 * k);
    // the line: its label, then its figure
    g.fillStyle = INK;
    rows.forEach((r, i) => {
      const ls = fitFont(g, 700, LS, r, TW);
      g.fillText(r, PAD + 8 * k, lineTop + LS * 1.02 + i * LS * 1.22 - (LS - ls) / 2);
    });
    if (figure) {
      const fs = fitFont(g, 800, FS, figure, TW);
      g.fillText(figure, PAD + 8 * k, lineTop + labelH + FS * 0.9 - (FS - fs) / 2);
    }
    let y = greek(g, PAD, lineBot + 30 * k, pw - 2 * PAD, 4, 2, GAP, 8 * k);
    y = greek(g, PAD, y + 20 * k, pw - 2 * PAD, 5, 3, GAP, 8 * k);
    if (y + 150 * k < pd) greek(g, PAD, y + 20 * k, pw - 2 * PAD, 3, 4, GAP, 8 * k);
  }, 3);
  const page = new THREE.Mesh(new THREE.PlaneGeometry(pw, pd), SM.print(pageTex));
  page.rotation.x = -Math.PI / 2;
  page.position.set(0, CT + t + 0.5, 0);
  page.receiveShadow = true;
  group.add(page);
  // the highlight: a marker's band drawn across the line, left to right (a hair over the page)
  const hlH = lineBot - lineTop + 8 * k, hlW = pw - 2 * PAD + 12 * k;
  const hl = new THREE.Mesh(new THREE.PlaneGeometry(hlW, hlH), new THREE.MeshBasicMaterial({ color: o.lineColor ?? C.khaki, transparent: true, opacity: 0.46, depthWrite: false, toneMapped: false }));
  hl.rotation.x = -Math.PI / 2;
  hl.position.set(0, CT + t + 1.1, -pd / 2 + (lineTop + lineBot) / 2 - 2 * k);
  hl.renderOrder = 4;
  group.add(hl);
  // ── the front cover, hinged on the spine; its inside carries a leaf ──
  const hinge = new THREE.Group();
  hinge.position.set(-w / 2 - 2, CT + t + CT / 2 + 1.2, 0);
  group.add(hinge);
  const cover = rbox(w + 6, CT, d + 8, 2.5, black);
  cover.position.set((w + 6) / 2, 0, d / 2 + 4);
  hinge.add(cover);
  const title = new THREE.Mesh(new THREE.PlaneGeometry(pw, pd), new THREE.MeshBasicMaterial({
    map: textTex(`${o.key}:cover`, pw, pd, o.cover.map((c, i) => ({ t: c, size: (i ? 30 : 62) * k, weight: i ? 600 : 800, color: i ? C.dim : C.white, track: i ? 0.14 : 0.04, gap: 22 * k })), { pad: 30 * k }),
    transparent: true, toneMapped: false }));
  title.rotation.x = -Math.PI / 2;
  title.position.set(w / 2 + 2, CT / 2 + 0.6, 0);
  hinge.add(title);
  const insideTex = paintTex(`filing:${o.key}:inside:${Math.round(w)}`, pw, pd, (g) => {
    g.fillStyle = "#ECE5D4"; g.fillRect(0, 0, pw, pd);
    let y = greek(g, PAD, 70 * k, pw - 2 * PAD, 6, 11, GAP, 8 * k);
    y = greek(g, PAD, y + 24 * k, pw - 2 * PAD, 7, 12, GAP, 8 * k);
    greek(g, PAD, y + 24 * k, pw - 2 * PAD, 5, 13, GAP, 8 * k);
  }, 2);
  const inside = new THREE.Mesh(new THREE.PlaneGeometry(pw, pd), SM.print(insideTex));
  inside.rotation.x = Math.PI / 2;            // it faces DOWN while the cover is closed, UP once the cover lies open
  inside.position.set(w / 2 + 2, -CT / 2 - 0.6, 0);
  inside.receiveShadow = true;
  hinge.add(inside);
  // open: the cover turns over the spine and comes to rest with its far edge on the desk
  const REST = Math.PI + Math.asin(Math.min(0.9, (t + CT) / (w + 6)));
  const update = (p: FilingP) => {
    const op = Math.max(0, Math.min(1, p.open ?? 0));
    hinge.rotation.z = REST * op;
    title.visible = op < 0.5;
    const q = Math.max(0, Math.min(1, p.hl ?? 0));
    hl.visible = q > 0.002 && op > 0.5;
    hl.scale.x = Math.max(0.001, q);
    hl.position.x = -(hlW / 2) * (1 - q);
  };
  update({});
  return { group, update };
};
