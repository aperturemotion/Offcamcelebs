// THE FILING — a thick bound document lying on the desk. Closed: its black cover and title. OPEN: the cover swings over to
// the left and the page shows, one line highlighted. Origin: the centre of its footprint, on the desk (y = 0).
import { THREE } from "../stage";
import { rbox } from "../kit029";
import { SM, C, textTex, type Obj3 } from "../studio";

export type FilingOpts = { key: string; w?: number; d?: number; t?: number; cover: string[]; line: string; lineColor?: string };
/** open: 0 closed … 1 the cover laid over to the left; hl: 0…1 the highlight drawn across the line */
export type FilingP = { open?: number; hl?: number };

export const makeFiling = (o: FilingOpts): Obj3<FilingP> => {
  const w = o.w ?? 420, d = o.d ?? 560, t = o.t ?? 64, CT = 8;
  const group = new THREE.Group();
  const block = rbox(w, t, d, 3, SM.paper("#E9E2D2"), 1);
  block.position.set(0, t / 2, d / 2);
  group.add(block);
  // the page: greeked lines and the one line that matters
  const pw = w - 24, pd = d - 24;
  const pageTex = textTex(`${o.key}:page`, pw, pd, [
    { t: "NOTE 9 | ACQUISITIONS", size: 22, weight: 700, color: "#4A4435", track: 0.12 },
    { t: "— — — — — — — — — — — — —", size: 20, weight: 500, color: "#B9B09A", gap: 26 },
    { t: "— — — — — — — — — — —", size: 20, weight: 500, color: "#B9B09A", gap: 18 },
    { t: o.line, size: 30, weight: 800, color: "#1E1A10", gap: 34, track: 0.01 },
    { t: "— — — — — — — — — — — —", size: 20, weight: 500, color: "#B9B09A", gap: 34 },
    { t: "— — — — — — — — —", size: 20, weight: 500, color: "#B9B09A", gap: 18 },
  ], { bg: "#F1EADA", pad: 26 });
  const page = new THREE.Mesh(new THREE.PlaneGeometry(pw, pd), SM.print(pageTex));
  page.rotation.x = -Math.PI / 2;
  page.position.set(0, t + 0.5, 0);
  page.receiveShadow = true;
  group.add(page);
  // the highlight: a khaki bar drawn across the line (it sits a hair over the page)
  const hl = new THREE.Mesh(new THREE.PlaneGeometry(pw - 40, 46), new THREE.MeshBasicMaterial({ color: o.lineColor ?? C.khaki, transparent: true, opacity: 0.42, depthWrite: false, toneMapped: false }));
  hl.rotation.x = -Math.PI / 2;
  hl.position.set(0, t + 1.1, -4);
  group.add(hl);
  // the cover, hinged on the left edge
  const hinge = new THREE.Group();
  hinge.position.set(-w / 2, t + CT / 2 + 1.4, 0);
  group.add(hinge);
  const cover = rbox(w, CT, d, 2.5, SM.black());
  cover.position.set(w / 2, 0, d / 2);
  hinge.add(cover);
  const title = new THREE.Mesh(new THREE.PlaneGeometry(pw, pd), new THREE.MeshBasicMaterial({
    map: textTex(`${o.key}:cover`, pw, pd, o.cover.map((c, i) => ({ t: c, size: i ? 30 : 62, weight: i ? 600 : 800, color: i ? C.dim : C.white, track: i ? 0.14 : 0.04, gap: 22 })), { pad: 30 }),
    transparent: true, toneMapped: false }));
  title.rotation.x = -Math.PI / 2;
  title.position.set(w / 2, CT / 2 + 0.6, 0);
  hinge.add(title);
  const update = (p: FilingP) => {
    hinge.rotation.z = Math.PI * 0.97 * (p.open ?? 0);
    const k = Math.max(0, Math.min(1, p.hl ?? 0));
    hl.visible = k > 0.002 && (p.open ?? 0) > 0.5;
    hl.scale.x = Math.max(0.001, k);
    hl.position.x = -((pw - 40) / 2) * (1 - k);
  };
  update({});
  return { group, update };
};
