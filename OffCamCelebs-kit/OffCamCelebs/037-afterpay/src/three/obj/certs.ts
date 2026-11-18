// THE STACK OF SHARE CERTIFICATES — the price paid, as paper. Sheets lying flat, the top one printed; its HEIGHT is the
// number of sheets shown. Origin: the centre of its footprint, on the surface it stands on (y = 0 is its foot).
import { THREE } from "../stage";
import { rbox, hash } from "../kit029";
import { SM, C, textTex, halo, type Obj3 } from "../studio";

export type CertsOpts = { key: string; n?: number; w?: number; d?: number; t?: number; labels: string[]; sub?: string };
/** height: 0…1 of the full stack (at least one sheet shows); label: which of `labels` the top sheet carries; glow: 0…1 */
export type CertsP = { height: number; label?: number; glow?: number };

export const makeCerts = (o: CertsOpts): Obj3<CertsP> => {
  const n = o.n ?? 36, w = o.w ?? 380, d = o.d ?? 260, t = o.t ?? 6;
  const group = new THREE.Group();
  const paper = SM.paper(), paperAlt = SM.paper("#E4DCC9");
  const sheets = Array.from({ length: n }, (_, i) => {
    const s = rbox(w, t, d, 1.6, i % 2 ? paperAlt : paper, 1);
    s.position.set((hash(i, 1, 7) - 0.5) * 10, t / 2 + i * t, d / 2 + (hash(i, 2, 7) - 0.5) * 8);
    s.rotation.y = (hash(i, 3, 7) - 0.5) * 0.05;
    group.add(s);
    return s;
  });
  // the top sheet's print: a certificate, its name in khaki
  const tops = o.labels.map((l, i) => {
    const tex = textTex(`${o.key}:${i}:${l}`, w - 20, d - 20, [
      { t: "SHARE CERTIFICATE", size: 20, weight: 600, color: "#5B5443", track: 0.2 },
      { t: l, size: 54, weight: 800, color: "#2A2416", gap: 16 },
      ...(o.sub ? [{ t: o.sub, size: 20, weight: 600, color: "#5B5443", track: 0.14, gap: 14 }] : []),
    ], { bg: "#EFE8D8", border: "#8E7C45", r: 2, pad: 26 });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w - 20, d - 20), SM.print(tex));
    m.rotation.x = -Math.PI / 2;
    m.receiveShadow = true;
    group.add(m);
    return m;
  });
  const air = halo(w * 1.9, d * 2.2, C.khaki, 0.3, true);
  air.position.y = 1;
  group.add(air);
  const update = (p: CertsP) => {
    const k = Math.max(1, Math.round(n * Math.max(0, Math.min(1, p.height))));
    sheets.forEach((s, i) => { s.visible = i < k; });
    tops.forEach((m, i) => { m.visible = i === (p.label ?? 0); m.position.set(sheets[k - 1].position.x, k * t + 0.6, 0); });
    (air.material as THREE.MeshBasicMaterial).opacity = 0.3 * (p.glow ?? 1);
  };
  update({ height: 1 });
  return { group, update };
};
