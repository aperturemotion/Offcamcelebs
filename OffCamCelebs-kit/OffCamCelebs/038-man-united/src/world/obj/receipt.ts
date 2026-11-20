// THE RECEIPT PRINTER (038, set A again; ★ REBUILT 2026-11-20 on P17, Timur: "The paper looks fucking terrible at 55
// seconds"). A black thermal receipt printer (a moulded body, a smoked lid over the paper roll, a satin tear bar with its
// teeth, a green status lamp) feeding a REAL receipt out of its slot:
//   · the paper is thin white thermal paper, 2:5 the printer's width, a strip that leans back out of the slot and CURLS back
//     toward its top (the roll's set) and cups a little across its width; it is a bent surface, rebuilt every frame from
//     the feed, never a box;
//   · its face is a drawn texture: an off-white thermal ground with fibre noise and faint streaks, a torn, perforated top
//     edge (alpha-cut), and the print in a MONOSPACED receipt face, small and dark grey, ruled with dashes; only the
//     verdict line RATING: INFLATED is large, bold and RED (thermal two-colour stock);
//   · it casts a soft shadow, and the printed lines ride up with the paper as it feeds (the texture is laid by arc length
//     from the paper's top, so the top of the receipt is always the top of the paper).
// The small print is declared to the density probe (`userData.printLines`) with its real size: at the film's framings it
// stands under 14 px a capital, so the one readable line is the verdict.
// makeReceipt(key) → { group, update({ feed }), FULL, lineAt: number[], paper, body, slot }
//   Origin: the printer's floor centre, facing +z. `feed` is the paper's length out of the slot (0…FULL); `lineAt[i]` is the
//   feed at which printed line i (PRICE, BORROWED, RATING) is fully out.
import * as THREE from "three";
import { MAT, K, rbox, mounted } from "../kit";

const PW = 300;                 // the paper's width (a real receipt's proportion to its printer)
const BW = 640, BH = 210, BD = 440, SLOT_Z = -30;
const TEX_K = 2.7;              // texture pixels per unit
/** the receipt, top to bottom, in units from its top edge (y = the line's baseline) */
type Line = { y: number; text: string; size: number; weight?: string; color?: string; align?: "l" | "c" | "lr"; right?: string; rule?: boolean };
const MARGIN = 20;
const LINES: Line[] = [
  { y: 44, text: "AUDIT RECEIPT", size: 7.5, weight: "700", align: "c" },
  { y: 56, text: "THE PAYOUTS", size: 6.5, align: "c" },
  { y: 68, text: "", size: 6.5, rule: true },
  { y: 80, text: "MANCHESTER UNITED", size: 6.5, align: "l" },
  { y: 91, text: "TAKEOVER, 2005", size: 6.5, align: "l" },
  { y: 103, text: "", size: 6.5, rule: true },
  { y: 118, text: "PRICE", right: "£790,000,000", size: 7, align: "lr" },
  { y: 131, text: "BORROWED", right: "£540,000,000", size: 7, align: "lr" },
  { y: 144, text: "", size: 6.5, rule: true },
  { y: 176, text: "RATING: INFLATED", size: 22, weight: "800", color: "#c8221b", align: "c" },
  { y: 192, text: "", size: 6.5, rule: true },
];
// (★ P17, one label a frame: the small print stands under 14 px a capital at the film's nearest framing; the verdict line is
//   the one that reads)
const LINE_AT = [131 + 10, 144 + 8, 176 + 14];   // PRICE … BORROWED out, then the verdict
export const RECEIPT = { PW, BW, BH, BD, FULL: 230 } as const;

let paperTex: THREE.CanvasTexture | null = null;
const drawPaper = () => {
  if (paperTex) return paperTex;
  if (typeof document === "undefined") return null;   // the checks run in Node: geometry only
  const W = Math.round(PW * TEX_K), H = Math.round(RECEIPT.FULL * TEX_K);
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d")!;
  // thermal paper: a cool off-white, fibre noise, two faint streaks down its length
  g.fillStyle = "#f2f0ea"; g.fillRect(0, 0, W, H);
  let s = 11; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const img = g.getImageData(0, 0, W, H), d = img.data;
  for (let i = 0; i < d.length; i += 4) { const n = (rnd() - 0.5) * 9; d[i] += n; d[i + 1] += n; d[i + 2] += n - 1; }
  g.putImageData(img, 0, 0);
  g.globalAlpha = 0.05; g.fillStyle = "#8a877e";
  for (let k = 0; k < 140; k++) { const x = rnd() * W, y = rnd() * H; g.fillRect(x, y, 1 + rnd() * 2, 6 + rnd() * 30); }
  g.globalAlpha = 0.035; g.fillRect(W * 0.31, 0, 3, H); g.fillRect(W * 0.77, 0, 2, H);
  g.globalAlpha = 1;
  // the torn, perforated top edge: an uneven tear through a line of punched holes (alpha: clear above it)
  g.globalCompositeOperation = "destination-out";
  g.beginPath(); g.moveTo(0, 0); g.lineTo(W, 0);
  for (let x = W; x >= 0; x -= 6) g.lineTo(x, (10 + 5 * Math.sin(x * 0.21) + 4 * rnd()) * TEX_K / 2.7);
  g.closePath(); g.fill();
  for (let x = 8; x < W; x += 17) { g.beginPath(); g.arc(x, 20, 2.6, 0, Math.PI * 2); g.fill(); }
  g.globalCompositeOperation = "source-over";
  // the print: a monospaced receipt face, dark grey; the verdict large, bold and red
  const mono = (sz: number, w = "500") => `${w} ${Math.round(sz * TEX_K)}px "DejaVu Sans Mono", "Consolas", "Courier New", monospace`;
  const L = MARGIN * TEX_K, R = W - MARGIN * TEX_K;
  for (const l of LINES) {
    const y = l.y * TEX_K;
    if (l.rule) { g.fillStyle = "#3a3936"; g.font = mono(l.size); let x = L; while (x < R - 4) { g.fillText("-", x, y); x += g.measureText("-").width; } continue; }
    g.fillStyle = l.color ?? "#2e2d2a"; g.font = mono(l.size, l.weight);
    if (l.align === "c") { g.textAlign = "center"; g.fillText(l.text, W / 2, y); g.textAlign = "left"; }
    else if (l.align === "lr") { g.fillText(l.text, L, y); g.textAlign = "right"; g.fillText(l.right ?? "", R, y); g.textAlign = "left"; }
    else g.fillText(l.text, L, y);
  }
  paperTex = new THREE.CanvasTexture(c); paperTex.colorSpace = THREE.SRGBColorSpace; paperTex.anisotropy = 8;
  return paperTex;
};

export const makeReceipt = (key: string) => {
  const group = new THREE.Group();
  group.name = `receipt-${key}`;
  // ── the printer: a moulded black body, a smoked lid over the roll at the back, the slot and the tear bar in front of it ──
  const body = rbox(BW, BH, BD, 40, MAT.black()); body.position.y = BH / 2; body.name = "printer";
  const deck = rbox(BW - 60, 16, 150, 6, MAT.graphite()); deck.position.set(0, BH - 2, SLOT_Z + 20); deck.name = "printer deck";
  const lid = rbox(BW - 90, 70, 190, 30, new THREE.MeshPhysicalMaterial({ color: "#16161a", roughness: 0.15, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.2 }));
  lid.position.set(0, BH + 20, SLOT_Z - 125); lid.name = "printer lid";
  // the slot: a dark recess across the deck, the paper's way out
  const slot = rbox(PW + 30, 10, 18, 3, new THREE.MeshStandardMaterial({ color: "#020203", roughness: 0.9 })); slot.position.set(0, BH + 2, SLOT_Z); slot.name = "paper slot";
  // the tear bar: a satin blade with fine teeth, just in front of the slot
  const bar = rbox(PW + 50, 14, 16, 3, MAT.satin()); bar.position.set(0, BH + 10, SLOT_Z + 20); bar.name = "tear bar";
  const teeth = new THREE.Mesh(new THREE.BoxGeometry(PW + 40, 5, 4), MAT.satin()); teeth.position.set(0, BH + 19, SLOT_Z + 17); teeth.name = "tear teeth";
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 6, 20), new THREE.MeshBasicMaterial({ color: new THREE.Color("#7ee08a").multiplyScalar(1.1), toneMapped: false }));
  lamp.rotation.x = Math.PI / 2; lamp.position.set(BW / 2 - 70, BH * 0.62, BD / 2 + 2.5); lamp.name = "status lamp";
  const feet = [-1, 1].flatMap((sx) => [-1, 1].map((sz) => { const f = rbox(60, 8, 60, 3, MAT.rubber()); f.position.set(sx * (BW / 2 - 70), 4, sz * (BD / 2 - 70)); return f; }));
  for (const m of [body, deck, lid, slot, bar, teeth]) { m.castShadow = true; m.receiveShadow = true; }
  group.add(body, deck, lid, slot, bar, teeth, lamp, ...feet);
  // the body stands on its rubber feet (8 high): everything on it rides 8 up
  for (const m of [body, deck, lid, slot, bar, teeth, lamp]) m.position.y += 8;
  mounted(teeth, bar, "the tear bar's teeth are its own edge");
  // ── the paper: a strip of SEG rows, re-laid every frame from the slot up by arc length ──
  const tex = drawPaper();
  // (a touch of its own light, through its own texture, so it reads as WHITE paper under the dark stage, its print still dark)
  const paperMat = new THREE.MeshStandardMaterial({ color: "#ffffff", map: tex, roughness: 0.82, metalness: 0, side: THREE.DoubleSide, alphaTest: tex ? 0.5 : 0, envMapIntensity: 0.25, emissive: new THREE.Color("#ffffff"), emissiveMap: tex, emissiveIntensity: 0.22 });
  if (!tex) paperMat.color.set("#f2f0ea");
  const SEG = 72, COLS = 8;
  const geo = new THREE.PlaneGeometry(PW, 1, COLS, SEG);
  const paper = new THREE.Mesh(geo, paperMat); paper.name = "receipt paper"; paper.castShadow = true; paper.receiveShadow = true;
  paper.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: tex, alphaTest: 0.5 });
  group.add(paper);
  const slotTop = new THREE.Vector3(0, BH + 8 + 2, SLOT_Z);
  // the paper's own small print, declared with its real cap height (the density probe counts what is readable)
  const printLines = LINES.filter((l) => !l.rule).map((l) => ({ text: l.right ? `${l.text} ${l.right}` : l.text, cap: l.size * 0.73, w: PW - 2 * MARGIN, y: l.y }));
  paper.userData.printLines = [];
  mounted(paper, slot, "the receipt comes up out of the printer's slot");
  const FULL = RECEIPT.FULL;
  const update = (p: { feed: number }) => {
    const feed = Math.max(0, Math.min(FULL, p.feed));
    paper.visible = feed > 1;
    const pos = geo.attributes.position as THREE.BufferAttribute, uv = geo.attributes.uv as THREE.BufferAttribute;
    // the strip's spine: up out of the slot, leaning back 8°, curling back toward its top (the roll's set)
    let y = slotTop.y - 6, z = slotTop.z, prevS = 0;
    const spine: { y: number; z: number; a: number }[] = [];
    for (let r = 0; r <= SEG; r++) {
      const sArc = (feed + 6) * (r / SEG);
      const a = 0.14 + 1.9 * Math.pow(Math.max(0, sArc - 60) / 520, 2);   // the roll's set: it curls back toward its top
      const ds = sArc - prevS; prevS = sArc;
      y += Math.cos(a) * ds; z -= Math.sin(a) * ds;
      spine.push({ y, z, a });
    }
    for (let r = 0; r <= SEG; r++) {
      const sp = spine[r], sArc = (feed + 6) * (r / SEG);
      for (let c = 0; c <= COLS; c++) {
        const i = (SEG - r) * (COLS + 1) + c;   // PlaneGeometry's rows run top to bottom
        const xn = c / COLS - 0.5, x = xn * PW;
        // cupped across its width (the edges a little forward), more so higher up
        const cup = 2.5 * (xn * xn * 4) * Math.min(1, sArc / 200);
        pos.setXYZ(i, x, sp.y, sp.z + cup);
        // the texture by distance from the paper's TOP (the receipt's top is the paper's top)
        const fromTop = feed + 6 - sArc;
        uv.setXY(i, c / COLS, 1 - fromTop / FULL);
      }
    }
    pos.needsUpdate = true; uv.needsUpdate = true;
    geo.computeVertexNormals(); geo.computeBoundingBox(); geo.computeBoundingSphere();
    // the print lines now out of the slot, where they stand on the paper (for the density probe)
    paper.userData.printLines = printLines.filter((l) => l.y + 8 <= feed).map((l) => {
      const sArc = feed + 6 - l.y, k = Math.max(0, Math.min(SEG, Math.round((sArc / (feed + 6)) * SEG))), sp = spine[k];
      return { text: l.text, cap: l.cap, w: l.w, at: [0, sp.y, sp.z], up: [0, Math.cos(sp.a), -Math.sin(sp.a)] };
    });
  };
  update({ feed: 0 });
  return { group, update, FULL, lineAt: LINE_AT, paper, body, slot };
};
void K;
