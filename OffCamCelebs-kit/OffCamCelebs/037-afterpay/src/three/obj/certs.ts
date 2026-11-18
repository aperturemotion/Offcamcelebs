// THE STACK OF SHARE CERTIFICATES — the price paid, as paper. Sheets lying flat, the top one an engraved certificate; its
// HEIGHT is the number of sheets shown. Origin: the centre of its footprint, on the surface it stands on (y = 0 is its foot).
import { THREE, paintTex, rr } from "../stage";
import { rbox, hash, font, fitFont, track } from "../kit029";
import { SM, C, halo, type Obj3 } from "../studio";

export type CertsOpts = { key: string; n?: number; w?: number; d?: number; t?: number; labels: string[]; sub?: string };
/** height: 0…1 of the full stack (at least one sheet shows); label: which of `labels` the top sheet carries; glow: 0…1 */
export type CertsP = { height: number; label?: number; glow?: number };

const INK = "#2A2416", SOFT = "#6A6048", LINE = "#8E7C45";
/** an engraved certificate, w × h: a guilloche border, rosettes, the name, a seal and signature lines */
export const certTex = (key: string, w: number, h: number, label: string, sub?: string, o: { big?: string; bigColor?: string } = {}) =>
  paintTex(`certs:${key}:${label}:${sub ?? ""}:${o.big ?? ""}`, w, h, (g) => {
    const gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, "#F4EEDF"); gr.addColorStop(1, "#E6DDC8");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    const m = Math.round(Math.min(w, h) * 0.05), band = Math.round(Math.min(w, h) * 0.075);
    // the guilloche band: two families of waves between two rules
    g.strokeStyle = LINE; g.lineWidth = 1.6;
    rr(g, m, m, w - 2 * m, h - 2 * m, 3); g.stroke();
    rr(g, m + band, m + band, w - 2 * (m + band), h - 2 * (m + band), 2); g.stroke();
    g.lineWidth = 0.7; g.globalAlpha = 0.75;
    const wave = (x0: number, y0: number, len: number, horiz: boolean, ph: number) => {
      g.beginPath();
      for (let i = 0; i <= len; i += 2) {
        const a = band * 0.42 * Math.sin((i / band) * 2.2 + ph);
        const x = horiz ? x0 + i : x0 + a, y = horiz ? y0 + a : y0 + i;
        if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
      }
      g.stroke();
    };
    for (let k = 0; k < 4; k++) {
      const ph = (k * Math.PI) / 2;
      wave(m + band, m + band / 2, w - 2 * (m + band), true, ph); wave(m + band, h - m - band / 2, w - 2 * (m + band), true, ph);
      wave(m + band / 2, m + band, h - 2 * (m + band), false, ph); wave(w - m - band / 2, m + band, h - 2 * (m + band), false, ph);
    }
    // corner rosettes
    for (const [cx, cy] of [[m + band / 2, m + band / 2], [w - m - band / 2, m + band / 2], [m + band / 2, h - m - band / 2], [w - m - band / 2, h - m - band / 2]]) {
      for (let r = band * 0.46; r > 2; r -= 3) { g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.stroke(); }
    }
    g.globalAlpha = 1;
    const inner = w - 2 * (m + band) - 24, cx = w / 2;
    g.textAlign = "center"; g.textBaseline = "alphabetic";
    let y = m + band + h * 0.13;
    g.fillStyle = SOFT; track(g, 4); font(g, 600, Math.round(h * 0.062)); g.fillText("SHARE CERTIFICATE", cx, y);
    g.fillRect(cx - inner * 0.22, y + h * 0.03, inner * 0.44, 1.2);
    if (o.big) {
      track(g, 0); g.fillStyle = o.bigColor ?? INK;
      const z = fitFont(g, 800, Math.round(h * 0.36), o.big, inner); y += h * 0.07 + z * 0.84; g.fillText(o.big, cx, y);
      g.fillStyle = INK; track(g, 2); const z2 = fitFont(g, 700, Math.round(h * 0.085), label, inner); y += h * 0.04 + z2; g.fillText(label, cx, y);
    } else {
      track(g, 1); g.fillStyle = INK;
      const z = fitFont(g, 800, Math.round(h * 0.21), label, inner); y += h * 0.09 + z * 0.84; g.fillText(label, cx, y);
      if (sub) { g.fillStyle = SOFT; track(g, 3); const z2 = fitFont(g, 600, Math.round(h * 0.058), sub, inner); y += h * 0.05 + z2; g.fillText(sub, cx, y); }
    }
    track(g, 0);
    // signature lines and the seal
    const by = h - m - band - h * 0.07;
    g.strokeStyle = SOFT; g.lineWidth = 1;
    g.beginPath(); g.moveTo(m + band + 18, by); g.lineTo(m + band + 18 + inner * 0.28, by); g.stroke();
    g.beginPath(); g.moveTo(cx - inner * 0.14, by); g.lineTo(cx + inner * 0.14, by); g.stroke();
    g.lineWidth = 1.4; g.strokeStyle = "#3B3524"; g.beginPath();
    for (let i = 0; i <= 40; i++) { const x = m + band + 26 + i * (inner * 0.24 / 40), yy = by - 7 - 6 * Math.sin(i * 0.9) * Math.cos(i * 0.23); if (i === 0) g.moveTo(x, yy); else g.lineTo(x, yy); }
    g.stroke();
    const sx = w - m - band - h * 0.13, sy = by - h * 0.035, sr = h * 0.085;
    g.fillStyle = "#B99A3E"; g.beginPath();
    for (let i = 0; i < 48; i++) { const a = (i / 48) * Math.PI * 2, r = sr * (i % 2 ? 1 : 0.86); g.lineTo(sx + Math.cos(a) * r, sy + Math.sin(a) * r); }
    g.closePath(); g.fill();
    g.strokeStyle = "#7A6220"; g.lineWidth = 1; g.beginPath(); g.arc(sx, sy, sr * 0.62, 0, Math.PI * 2); g.stroke();
    g.beginPath(); g.arc(sx, sy, sr * 0.5, 0, Math.PI * 2); g.stroke();
  }, 3);

export const makeCerts = (o: CertsOpts): Obj3<CertsP> => {
  const n = o.n ?? 36, w = o.w ?? 380, d = o.d ?? 260, t = o.t ?? 6;
  const group = new THREE.Group();
  const paper = SM.paper(), paperAlt = SM.paper("#E0D7C2"), paperDk = SM.paper("#D6CCB4");
  const sheets = Array.from({ length: n }, (_, i) => {
    const s = rbox(w, t - 0.6, d, 1.4, i % 5 === 4 ? paperDk : i % 2 ? paperAlt : paper, 1);
    // a hand-squared stack: most sheets true, a few a little out
    const out = hash(i, 5, 7) > 0.8 ? 2.4 : 1;
    s.position.set((hash(i, 1, 7) - 0.5) * 9 * out, t / 2 + i * t, d / 2 + (hash(i, 2, 7) - 0.5) * 8 * out);
    s.rotation.y = (hash(i, 3, 7) - 0.5) * 0.045 * out;
    group.add(s);
    return s;
  });
  const tops = o.labels.map((l, i) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w - 6, d - 6), SM.print(certTex(`${o.key}:${i}`, w - 6, d - 6, l, o.sub)));
    m.rotation.x = -Math.PI / 2;
    m.receiveShadow = true;
    group.add(m);
    return m;
  });
  // the glow: the air round the paper, and a warm wash on what it stands on
  const air = halo(w * 2.1, d * 2.4, C.khaki, 0.3, true);
  air.position.y = 1;
  const lift = halo(w * 1.5, n * t * 2.2 + 160, C.khaki, 0.16);
  lift.position.set(0, (n * t) / 2, -d / 2 - 30);
  group.add(air, lift);
  const update = (p: CertsP) => {
    const k = Math.max(1, Math.round(n * Math.max(0, Math.min(1, p.height))));
    sheets.forEach((s, i) => { s.visible = i < k; });
    const top = sheets[k - 1];
    tops.forEach((m, i) => { m.visible = i === (p.label ?? 0); m.position.set(top.position.x, k * t + 0.4, top.position.z - d / 2); m.rotation.z = top.rotation.y; });
    const gl = p.glow ?? 1;
    (air.material as THREE.MeshBasicMaterial).opacity = 0.3 * gl;
    (lift.material as THREE.MeshBasicMaterial).opacity = 0.16 * gl;
    lift.scale.y = Math.max(0.3, k / n); lift.position.y = (k * t) / 2;
  };
  update({ height: 1 });
  return { group, update };
};
