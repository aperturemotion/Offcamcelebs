// THE LOAN TAG AND ITS CHAINS (038, set A; worker A). A red enamelled steel tag with a punched eyelet, BORROWED: / a
// counting £540,000,000 / 2005 in lit capitals (P14: sized so every value fits), and a real link chain: makeChain builds
// interlocking links between two points (each link turned 90° to the one before, spaced so each passes through the
// other's hole: they never cross).
// makeLoanTag(key) → { group, body, set(value), w, h, eyelet, bottom }   Origin: the TOP of the eyelet (it hangs from there).
// makeChain(key, n) → { group, links, setEnds(a, b, shown = n) }          Points in the parent's frame; `shown` links from a.
import * as THREE from "three";
import { MAT, K, lit, rbox, wide, textOn, joined, hangs, pounds } from "../kit";
import { text3d, numeral3d, textWidth } from "../text3d";

export const makeLoanTag = (key: string) => {
  const group = new THREE.Group();
  group.name = `loantag-${key}`;
  const red = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#a81d18"), roughness: 0.32, metalness: 0.2, clearcoat: 0.7, clearcoatRoughness: 0.2, envMapIntensity: 1.0 });
  const k = 1.1, s1 = 46, s2 = 58, s3 = 40;
  const digitW = Math.max(...Array.from("0123456789", (c) => textWidth(c, "800", 1)));
  const widest = Array.from("£540,000,000").reduce((s, c) => s + (/\d/.test(c) ? digitW : textWidth(c, "800", 1)), 0) * s2 * k;
  const w = Math.max(widest, textWidth("BORROWED:", "800", s1) * k) + 120, h = 330, d = 26;
  const body = rbox(w, h, d, 12, red); body.name = "tag-body";
  body.position.y = -60 - h / 2;
  // ★ P17: the eyelet is a REAL hole. The tab is a rounded plate with a hole punched through it; a steel grommet lines the
  //   hole; the chain's last link runs through it and the hole's top edge (the tag's origin) rests on the link
  const tabShape = new THREE.Shape();
  { const x0 = -70, x1 = 70, y0 = -72, y1 = 12, r = 12;   // its top just over the grommet: the link above must clear it
    tabShape.moveTo(x0 + r, y0); tabShape.lineTo(x1 - r, y0); tabShape.quadraticCurveTo(x1, y0, x1, y0 + r); tabShape.lineTo(x1, y1 - r);
    tabShape.quadraticCurveTo(x1, y1, x1 - r, y1); tabShape.lineTo(x0 + r, y1); tabShape.quadraticCurveTo(x0, y1, x0, y1 - r); tabShape.lineTo(x0, y0 + r); tabShape.quadraticCurveTo(x0, y0, x0 + r, y0); }
  // (the bevel closes a hole by its size: cut at 20, it is 18 across its faces, 2 clear of the link that runs through it)
  const hole = new THREE.Path(); hole.absarc(0, -16, 20, 0, Math.PI * 2, true); tabShape.holes.push(hole);
  // a THIN steel tab (6 thick) riveted into the tag's top: the chain's link wraps round it, so it must fit inside the link
  const tg = new THREE.ExtrudeGeometry(tabShape, { depth: 2, bevelEnabled: true, bevelThickness: 2, bevelSize: 2, bevelSegments: 2, curveSegments: 32 });
  tg.translate(0, 0, -1);
  const tab = new THREE.Mesh(tg, red); tab.name = "tag-tab"; tab.castShadow = true; tab.receiveShadow = true;
  const grommet = new THREE.Mesh(new THREE.TorusGeometry(22, 6, 12, 32), MAT.satin()); grommet.position.y = -16;   // inside radius 16: the tag's origin is its top grommet.name = "tag-grommet";
  // the eye on the tag's left edge that the crest's chain is shackled to
  // (it stands out of the edge flat, across the tag's face, so the chain's first link can run through it)
  const sideEye = new THREE.Mesh(new THREE.TorusGeometry(15, 5, 10, 28), MAT.satin()); sideEye.position.set(-w / 2 - 14, -60 - h + 60, 0); sideEye.rotation.x = Math.PI / 2; sideEye.name = "tag side eye";
  group.add(body, tab, grommet, sideEye);
  const face = lit(K.white, 1.05), money = lit(K.money, 1.12);
  const word = (str: string, size: number, y: number) => {
    const t = wide(text3d(str, { font: "800", size, depth: 3, bevel: 0, face }), k);
    t.position.set(0, y, d / 2 + 0.5);
    t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
    textOn(t, body, { inset: 6 });
    body.add(t);
    return t;
  };
  word("BORROWED:", s1, 92);
  word("2005", s3, -128);
  const num = numeral3d({ font: "800", size: s2, depth: 4, bevel: 0, face: money });
  num.group.scale.x = k;
  num.group.position.set(0, -s2 * 0.345, d / 2 + 0.5);
  num.group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
  textOn(num.group, body, { inset: 6 });
  body.add(num.group);
  const set = (v: number) => num.set(pounds(v));
  set(540e6);
  return { group, body, set, w, h, eyelet: new THREE.Vector3(0, 0, 0), ring: grommet, sideEye, bottom: -60 - h };
};

const Rr = 15, TUBE = 4.5, SY = 1.6, STEP = 30, STEP_MAX = 34;
/** `turn0`: the first link is turned 90° about the chain (to run through an eye that faces the camera) */
export const makeChain = (key: string, n: number, turn0 = false) => {
  const group = new THREE.Group();
  group.name = `chain-${key}`;
  const geo = new THREE.TorusGeometry(Rr, TUBE, 10, 28);
  const mat = MAT.satin();
  const links: THREE.Mesh[] = [];
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.name = "link";
    links.push(m); group.add(m);
    if (i > 0) { joined(m, links[i - 1], "chain links interlock"); hangs(m, links[i - 1], "each link hangs through the one above it", { linked: true }); }
  }
  const up = new THREE.Vector3(0, 1, 0), down = new THREE.Vector3(0, -1, 0), flip = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI), q = new THREE.Quaternion(), turn = new THREE.Quaternion();
  /** lay links from a to b: as many as fit, STEP to STEP_MAX apart (closer and they would cross; further and they part),
   *  the first `shown` of them visible */
  const setEnds = (a: THREE.Vector3, b: THREE.Vector3, shown = n) => {
    const dir = new THREE.Vector3().subVectors(b, a);
    const L = dir.length(); dir.normalize();
    // (measured from straight DOWN, then turned over: the shortest arc from up to a hanging chain's direction is nearly a
    //  half turn, and its twist about the chain flips at random; from down it is steady, so each link keeps its plane)
    q.setFromUnitVectors(down, dir).multiply(flip);
    const fit = Math.max(1, Math.min(n, Math.floor((L - 2 * Rr * SY) / STEP + 1e-6) + 1));
    const step = fit > 1 ? Math.min(STEP_MAX, (L - 2 * Rr * SY) / (fit - 1)) : 0;
    links.forEach((m, i) => {
      m.visible = i < Math.min(shown, fit);
      m.position.copy(a).addScaledVector(dir, Rr * SY + i * step);
      // a torus lies in its own xy plane: stretch it along the chain (y), then turn every other link 90° about the chain
      m.scale.set(1, SY, 1);
      turn.setFromAxisAngle(up, (i + (turn0 ? 1 : 0)) % 2 ? Math.PI / 2 : 0);
      m.quaternion.copy(q).multiply(turn);
    });
  };
  /** the last visible link (the one that meets b) */
  const last = () => { let k = 0; links.forEach((m, i) => { if (m.visible) k = i; }); return links[k]; };
  // `hangGap`: a link hanging by its inside on a bar: its centre stands this far from the bar's top (or a hole's top edge)
  return { group, links, setEnds, last, step: STEP, reach: (n - 1) * STEP + 2 * Rr * SY, end: Rr * SY, hangGap: (Rr - TUBE) * SY };
};
