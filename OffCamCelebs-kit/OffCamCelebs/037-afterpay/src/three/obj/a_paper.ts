// A FOLDED NEWSPAPER (worker A, 037) — a tabloid folded once, lying flat: its front page up, the fold along the back edge,
// the cut pages showing as fine lines on the other three sides. The headline figure is ringed in red marker.
// Mastheads are invented (never a real paper's name). Origin: the centre of its footprint, on the surface (y = 0).
import { THREE, mesh, paintTex } from "../stage";
import { rbox, font, fitFont, track, typeLines } from "../kit029";
import type { Obj3 } from "../studio";

export type PaperOpts = { key: string; masthead: string; w?: number; d?: number; t?: number; tone?: string; kicker?: string; figure?: string };
export type PaperP = Record<string, never>;

export const makePaper = (o: PaperOpts): Obj3<PaperP> => {
  const w = o.w ?? 360, d = o.d ?? 260, t = o.t ?? 20, tone = o.tone ?? "#E6DFCF";
  const group = new THREE.Group();
  const edgeTex = paintTex(`paper:edge:${tone}`, 64, 20, (g) => {
    g.fillStyle = tone; g.fillRect(0, 0, 64, 20);
    g.fillStyle = "rgba(40,32,20,0.28)";
    for (let i = 1; i < 10; i++) g.fillRect(0, i * 2, 64, 0.6);
  }, 4);
  const edge = new THREE.MeshStandardMaterial({ map: edgeTex, roughness: 0.92, metalness: 0 });
  const plain = new THREE.MeshStandardMaterial({ color: new THREE.Color(tone), roughness: 0.92, metalness: 0 });
  const face = new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0, envMapIntensity: 0.5, map: paintTex(`paper:face:${o.key}`, w, d, (g) => {
    g.fillStyle = tone; g.fillRect(0, 0, w, d);
    const ink = "#211D14", soft = "#5A5342";
    // the masthead between two rules
    g.fillStyle = ink; g.textAlign = "center"; g.textBaseline = "alphabetic";
    track(g, 2); fitFont(g, 800, 30, o.masthead, w - 36); g.fillText(o.masthead, w / 2, 40);
    g.fillRect(14, 50, w - 28, 2.4); g.fillRect(14, 55, w - 28, 0.9);
    font(g, 500, 9); track(g, 1.2); g.fillStyle = soft;
    g.textAlign = "left"; g.fillText("MONDAY 2 AUGUST 2021", 16, 68);
    g.textAlign = "right"; g.fillText("BUSINESS", w - 16, 68);
    g.fillStyle = soft; g.fillRect(14, 73, w - 28, 0.8);
    // the headline
    g.textAlign = "left"; g.fillStyle = ink;
    font(g, 700, 19); track(g, 0.6); g.fillText(o.kicker ?? "AFTERPAY SOLD FOR", 16, 100);
    font(g, 800, 78); track(g, -1); g.fillText(o.figure ?? "$29B", 14, 170);
    const fwid = g.measureText(o.figure ?? "$29B").width;
    // the story: greeked columns, and a grey picture block
    track(g, 0);
    g.fillStyle = "rgba(60,54,42,0.34)"; g.fillRect(w - 128, 86, 112, 92);
    g.fillStyle = "rgba(255,255,255,0.18)"; g.fillRect(w - 128, 86, 112, 30);
    typeLines(g, 16, 190, (w - 44) / 2, 7, 9, 3.2, 0.3, 1);
    typeLines(g, 16 + (w - 44) / 2 + 12, 190, (w - 44) / 2, 7, 9, 3.2, 0.3, 4);
    // the red marker ring round the figure: two passes of a hand's uneven loop
    g.strokeStyle = "rgba(214,48,44,0.92)"; g.lineCap = "round"; g.lineJoin = "round";
    const cx = 14 + fwid / 2, cy = 146, rx = fwid / 2 + 14, ry = 38;
    for (const [k, lw, ph] of [[1, 4.2, 0.2], [1.04, 2.6, 0.9]] as const) {
      g.lineWidth = lw; g.beginPath();
      for (let i = 0; i <= 44; i++) {
        const a = ph + (i / 40) * Math.PI * 2, wob = 1 + 0.035 * Math.sin(a * 3 + ph * 5);
        const x = cx + Math.cos(a) * rx * k * wob, y = cy + Math.sin(a) * ry * k * wob - (i / 44) * 5;
        if (i) g.lineTo(x, y); else g.moveTo(x, y);
      }
      g.stroke();
    }
  }, 3) });
  const slab = rbox(w, t, d, 2, { px: edge, nx: edge, top: face, bottom: plain, front: edge, back: plain }, 1);
  slab.position.set(0, t / 2, d / 2);
  // the fold: a rounded spine along the back edge
  const spine = mesh(new THREE.CylinderGeometry(t / 2, t / 2, w - 2, 16), plain);
  spine.rotation.z = Math.PI / 2;
  spine.position.set(0, t / 2, -d / 2 + 2);
  group.add(slab, spine);
  return { group, update: () => {} };
};
