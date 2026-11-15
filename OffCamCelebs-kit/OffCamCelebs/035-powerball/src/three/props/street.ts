// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★ 031 — THE BACKGROUND WORLD (the user, 2026-10-13: "Add background assets like trees and a busy street in some scenes to
// give it a lively feel they have to slightly shake a bit to give that movement effect make sure they have a parallax effect
// and the layers using that parallax effect").
// Two kinds of BACKGROUND view, each drawn on its own parallax layer behind a place's objects (camera.tsx `Back`), each hazed
// into the ground with distance and a little soft (stage.ts `fog`, `blur`), so the objects in front stay the thing to read:
//   · `streetModel`: a street in real 3-D — a road with its markings and kerbs, a pavement, a row of low buildings with their
//     windows and shopfronts, street trees whose crowns sway in the wind, lamp posts, cars driving both ways, people walking;
//     or (`park`) a quieter avenue: a path, benches, lamps, trees, people strolling;
//   · `skylineModel`: tall towers far behind, on a slower layer still.
// Everything moves by the frame (no randomness at render: `hash`), and anything that drives or walks wraps round far outside
// the place's widest view, so nothing ever pops on or off.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, mesh, lathe, type Model } from "../stage";
import { M, rbox, printTex, hash, col } from "../kit029";
import { figure, lookOf, type Figure } from "../people";

export type StreetGeo = {
  floor: number;
  /** the street's span in world x (things wrap at its ends) */
  x0: number; x1: number;
  /** the near kerb's z; the road runs back from it */
  z: number;
  park?: boolean;
  cars?: number; walkers?: number;
  fog: { color: string; near: number; far: number }; blur: number;
  seed?: number;
};
export type StreetP = { f: number };

const matte = (hex: string, r = 0.85) => new THREE.MeshStandardMaterial({ color: col(hex), roughness: r, metalness: 0, envMapIntensity: 0.35 });

/** a building's facade: floors of windows, a shopfront and its awning at the foot */
const facadeTex = (key: string, w: number, h: number, wall: string, glass: string, awning: string) => printTex(`st-fac:${key}`, w, h, (c) => {
  c.fillStyle = wall; c.fillRect(0, 0, w, h);
  const floorH = 92, shop = 120;
  const cols = Math.max(2, Math.round(w / 78));
  const cw = w / cols;
  for (let y = 26; y < h - shop - 30; y += floorH) {
    c.fillStyle = "rgba(0,0,0,0.08)"; c.fillRect(0, y + floorH - 14, w, 5);
    for (let i = 0; i < cols; i++) {
      const x = i * cw + cw * 0.2, ww = cw * 0.6, hh = floorH * 0.56;
      c.fillStyle = "rgba(0,0,0,0.18)"; c.fillRect(x - 3, y - 3, ww + 6, hh + 8);
      const gr = c.createLinearGradient(x, y, x + ww, y + hh);
      gr.addColorStop(0, glass); gr.addColorStop(0.55, "#8EA2B4"); gr.addColorStop(1, glass);
      c.fillStyle = gr; c.fillRect(x, y, ww, hh);
      c.fillStyle = "rgba(255,255,255,0.18)"; c.fillRect(x + ww * 0.48, y, 2, hh);
    }
  }
  // the shopfront: a band of glass, its awning above
  c.fillStyle = "#3A4148"; c.fillRect(w * 0.06, h - shop + 20, w * 0.88, shop - 26);
  c.fillStyle = "rgba(255,240,210,0.35)"; c.fillRect(w * 0.08, h - shop + 26, w * 0.84, shop - 40);
  c.fillStyle = awning; c.fillRect(w * 0.04, h - shop - 6, w * 0.92, 28);
  c.fillStyle = "rgba(255,255,255,0.35)"; for (let x = w * 0.04; x < w * 0.96; x += 28) c.fillRect(x, h - shop - 6, 12, 28);
}, 1);
const towerTex = (key: string, w: number, h: number, wall: string) => printTex(`st-tow:${key}`, w, h, (c) => {
  c.fillStyle = wall; c.fillRect(0, 0, w, h);
  for (let y = 18; y < h; y += 40) { c.fillStyle = "rgba(40,55,70,0.32)"; c.fillRect(0, y, w, 22); }
  for (let x = 0; x < w; x += 46) { c.fillStyle = "rgba(255,255,255,0.12)"; c.fillRect(x, 0, 3, h); }
}, 1);

/** a street tree: a trunk, a few limbs, a crown of lumpy leaf masses that sway */
const tree = (seed: number, h: number) => {
  const g = new THREE.Group();
  const bark = matte("#5E4A3A", 0.9);
  g.add(mesh(lathe([[16, 0], [13, 30], [11, h * 0.7], [8, h * 0.78], [0, h * 0.8]], 18), bark));
  const crown = new THREE.Group();
  crown.position.y = h * 0.66;   // high enough that a passer-by walks under it
  g.add(crown);
  const greens = ["#6F8F4F", "#5F8046", "#7E9E59", "#678A4A"];
  const n = 6;
  for (let i = 0; i < n; i++) {
    const r = h * (0.13 + 0.05 * hash(seed, i, 1));
    const geo = new THREE.SphereGeometry(r, 28, 20);   // indexed: smooth normals across its lumps
    const p = geo.attributes.position as THREE.BufferAttribute;
    for (let k = 0; k < p.count; k++) {
      const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
      const d = 1 + 0.12 * Math.sin(x * 0.09 + seed) * Math.cos(y * 0.11 + i) + 0.08 * Math.sin(z * 0.13 + x * 0.05);
      p.setXYZ(k, x * d, y * d * 0.86, z * d);
    }
    geo.computeVertexNormals();
    const blob = mesh(geo, matte(greens[(((i + seed) % greens.length) + greens.length) % greens.length], 0.92));   // (a negative seed made a negative index: white crowns)
    const a = (i / n) * Math.PI * 2 + seed;
    blob.position.set(Math.cos(a) * h * 0.12 * (i ? 1 : 0), h * (0.1 + 0.1 * hash(seed, i, 2)) + (i ? 0 : h * 0.14), Math.sin(a) * h * 0.09 * (i ? 1 : 0));
    crown.add(blob);
  }
  return { g, crown, ph: hash(seed, 3, 4) * 6.28 };
};

/** a car: its body, its cabin and glass, four wheels; length along x */
const car = (seed: number) => {
  const g = new THREE.Group();
  const kinds = ["#B4473A", "#ECECE8", "#26282C", "#3E5B82", "#B9BDC1", "#E3B23C", "#6B7A5A"];
  const paint = new THREE.MeshPhysicalMaterial({ color: col(kinds[Math.floor(hash(seed, 1, 1) * kinds.length) % kinds.length]), roughness: 0.32, metalness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.2, envMapIntensity: 0.8 });
  const glass = new THREE.MeshPhysicalMaterial({ color: col("#2B3440"), roughness: 0.15, metalness: 0.1, clearcoat: 1, envMapIntensity: 1 });
  const L = 270 + 50 * hash(seed, 2, 2), W = 118, tall = hash(seed, 3, 3) < 0.3;
  const body = rbox(L, 64, W, 22, paint, 3);
  body.position.set(0, 26 + 32, W / 2);
  g.add(body);
  const cab = rbox(L * (tall ? 0.7 : 0.52), tall ? 70 : 56, W - 12, 22, glass, 3);
  cab.position.set(-L * 0.05, 26 + 64 + (tall ? 35 : 28) - 6, (W - 12) / 2);
  g.add(cab);
  const roof = rbox(L * (tall ? 0.68 : 0.48), 10, W - 18, 5, paint, 2);
  roof.position.set(-L * 0.05, 26 + 64 + (tall ? 70 : 56) - 8, (W - 18) / 2);
  g.add(roof);
  const tyre = M.rubber("#1C1C1E");
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const w = mesh(new THREE.CylinderGeometry(25, 25, 18, 24), tyre);
    w.rotation.x = Math.PI / 2;
    w.position.set(sx * L * 0.32, 25.3, sz * (W / 2 - 8));
    g.add(w);
  }
  for (const sz of [-1, 1]) {
    const lamp = rbox(4, 12, 20, 2, M.glow("#FFF3D6", 0.9));
    lamp.position.set(L / 2 + 1, 26 + 44, sz * (W / 2 - 22) + 10);
    g.add(lamp);
    const tail = rbox(4, 12, 20, 2, M.glow("#E2453A", 0.8));
    tail.position.set(-L / 2 - 1, 26 + 44, sz * (W / 2 - 22) + 10);
    g.add(tail);
  }
  return { g, L };
};

/** a lamp post: a column, an arm and its lantern */
const lampPost = (h: number, face: 1 | -1) => {
  const g = new THREE.Group();
  const iron = M.satin("#2E3236", 0.5, 0.4);
  g.add(mesh(lathe([[20, 0], [18, 14], [8, 22], [6, h], [0, h + 2]], 16), iron));
  const arm = mesh(new THREE.CylinderGeometry(3.5, 3.5, 70, 10), iron);
  arm.rotation.x = Math.PI / 2;
  arm.position.set(0, h - 6, face * 35);
  g.add(arm);
  const head = rbox(30, 16, 46, 6, iron);
  head.position.set(0, h - 16, face * 70 + 23);
  g.add(head);
  const glow = rbox(24, 4, 38, 2, M.glow("#FFE8B8", 0.6));
  glow.position.set(0, h - 25, face * 70 + 19);
  g.add(glow);
  return g;
};

/** a park bench: slats on two cast-iron ends */
const bench = () => {
  const g = new THREE.Group();
  const wood = M.satin("#8A6446", 0.7), iron = M.satin("#2B2E31", 0.5, 0.3);
  for (const sx of [-1, 1]) { const e = rbox(8, 100, 70, 2, iron); e.position.set(sx * 100, 50, 35); g.add(e); }
  for (let k = 0; k < 3; k++) { const s = rbox(230, 6, 18, 2, wood); s.position.set(0, 72, 30 - k * 22 + 9); g.add(s); }
  // its back: two posts rising from the ends, the slats screwed to them
  for (const sx of [-1, 1]) { const p = rbox(8, 60, 8, 2, iron); p.position.set(sx * 100, 120, -28); g.add(p); }
  for (let k = 0; k < 2; k++) { const s = rbox(230, 16, 6, 2, wood); s.position.set(0, 112 + k * 24, -36); g.add(s); }
  return g;
};

/** a walking figure's pose at phase φ (the stance foot always on the floor: the pelvis rides at its exact height) */
const walk = (fig: Figure, ph: number) => {
  const sw = 0.36 * Math.sin(ph);
  const bend = (q: number) => 0.15 + 0.55 * Math.max(0, Math.sin(q - 0.9));
  const legs = [{ l: fig.leg.L, th: sw, b: bend(ph + Math.PI) }, { l: fig.leg.R, th: -sw, b: bend(ph) }];
  let drop = 0;
  for (const { l, th, b } of legs) {
    l.hip.rotation.set(-th, 0, 0);
    l.kn.rotation.set(b, 0, 0);
    drop = Math.max(drop, l.L1 * Math.cos(th) + l.L2 * Math.cos(th - b));
  }
  fig.pelvis.position.y = drop + 0.04 * fig.H + 0.3;
  fig.pose({ lean: 0.04, nod: 0.02, L: { up: -0.32 * Math.sin(ph), out: 0.06, el: 0.25 + 0.15 * Math.max(0, Math.sin(ph)), curl: 0.5 }, R: { up: 0.32 * Math.sin(ph), out: 0.06, el: 0.25 + 0.15 * Math.max(0, -Math.sin(ph)), curl: 0.5 } });
  // the swing foot's toe never digs into the floor: it rides level with the pelvis' drop
  for (const { l, th, b } of legs) l.an.rotation.set(th - b, 0, 0);
};

export const streetModel = (g: StreetGeo) => (): Model<StreetP> => {
  const root = new THREE.Group();
  const FY = -g.floor, S = g.seed ?? 1;
  const span = g.x1 - g.x0, cx = (g.x0 + g.x1) / 2;
  const asphalt = matte("#6A6560", 0.9), kerbM = matte("#BDB6AA", 0.85), pave = matte("#D8D0C3", 0.9), mark = matte("#F2EFE8", 0.7);
  const ROAD = g.park ? 0 : 420, PAVE = 170, PAVE_FAR = 210;
  const zRoadNear = g.z, zRoadFar = g.z - ROAD, zFarPave = zRoadFar - PAVE_FAR;
  // the ground: the near pavement, the road (or the park's path), the far pavement
  // ★ the audits: every compound thing is ONE object (its parts overlap by design): the ground, each building, tree, lamp, car
  const ground = new THREE.Group();
  ground.userData.obj = "street ground";
  root.add(ground);
  const slab = (z0: number, z1: number, m: THREE.Material, h = 2) => { const s = rbox(span + 400, h, z0 - z1, 1, m, 2); s.position.set(cx, FY + h / 2, z0); ground.add(s); return s; };
  const GH = g.park ? 2 : 10;   // the near pavement's height: what stands on it stands at FY + GH
  slab(g.z + PAVE, g.z, g.park ? matte("#C9BFA9", 0.92) : pave, g.park ? 2 : 10);
  if (!g.park) {
    slab(zRoadNear, zRoadFar, asphalt, 1);
    const kerb = rbox(span + 400, 12, 10, 2, kerbM, 2); kerb.position.set(cx, FY + 6, zRoadNear); ground.add(kerb);
    slab(zRoadFar, zFarPave, pave, 10);
    for (let x = g.x0 - 200; x < g.x1 + 200; x += 180) { const d = rbox(90, 2, 9, 1, mark, 1); d.position.set(x, FY + 1.6, (zRoadNear + zRoadFar) / 2 + 4.5); ground.add(d); }
  } else {
    // a lawn behind the path
    slab(zRoadNear, zRoadNear - 520, matte("#9DB27A", 0.95), 1);
  }

  // ── the buildings along the far side ──
  const WALLS = ["#E1D2B8", "#B87358", "#A9AEB3", "#EDE4D3", "#C9A983", "#8E9AA6", "#D7C2A2"];
  const AWN = ["#3F6A5B", "#8C3A34", "#2F4A6B", "#B98A3A", "#5A4A6A"];
  let bx = g.x0 - 300;
  let k = 0;
  const zB = g.park ? zRoadNear - 700 : zFarPave - 10;
  // ★ PEN: the row of buildings is ONE terrace (neighbours share a party wall and their cornices meet), the street trees one
  //   avenue (neighbouring crowns grow into each other): each as one object
  const terrace = new THREE.Group();
  terrace.userData.obj = "buildings";
  root.add(terrace);
  const avenue = new THREE.Group();
  avenue.userData.obj = "trees";
  root.add(avenue);
  while (bx < g.x1 + 300) {
    const w = 300 + Math.round(260 * hash(S, k, 11)), h = 560 + Math.round(420 * hash(S, k, 12)), d = 260;
    const wall = WALLS[(k * 3 + S) % WALLS.length];
    const tex = facadeTex(`${S}:${k}`, w, h, wall, "#56687A", AWN[(k + S) % AWN.length]);
    const wm = matte(wall, 0.9);
    const b = rbox(w, h, d, 4, { px: wm, nx: wm, top: matte("#8A8580", 0.9), bottom: wm, front: M.print(tex, 0.85), back: wm }, 2);
    const bg = new THREE.Group();
    terrace.add(bg);
    b.position.set(bx + w / 2, FY + h / 2, zB);
    bg.add(b);
    // a cornice along its top
    const cor = rbox(w + 10, 14, 20, 3, matte("#F0E8DA", 0.8), 2);
    cor.position.set(bx + w / 2, FY + h - 6, zB + 12);
    bg.add(cor);
    bx += w + (hash(S, k, 13) < 0.25 ? 40 : 0);
    k++;
  }

  // ── the trees and lamps along the near pavement (and, in the park, along the path's far side too) ──
  const trees: ReturnType<typeof tree>[] = [];
  const treeRow = (z: number, step: number, off: number) => {
    for (let x = g.x0 + off, i = 0; x <= g.x1; x += step, i++) {
      const t = tree(S * 31 + i + Math.round(z), (g.park ? 780 : 940) + 120 * hash(S, i, Math.round(z)));   // a passer-by walks under the crown
      t.g.position.set(x + (hash(S, i, 5) - 0.5) * 60, FY + (z >= g.z ? GH : 1) + 0.3, z);
      avenue.add(t.g);
      trees.push(t);
    }
  };
  // the street: trees and lamps along the near kerb, people on the far pavement before the shops. The park: trees on the
  //   lawn behind the path, benches at its back edge, people strolling along it
  if (!g.park) treeRow(g.z + 24, 430, 60);
  else { treeRow(g.z - 150, 400, 80); treeRow(g.z - 420, 380, 270); }
  for (let x = g.x0 + 275, i = 0; x <= g.x1; x += 860, i++) { const l = lampPost(420, -1); l.userData.obj = `lamp ${i}`; l.position.set(x, FY + (g.park ? 1.3 : GH + 0.3), g.z + (g.park ? -40 : 30)); root.add(l); }   // ★ PEN: clear of the kerb
  if (g.park) for (let x = g.x0 + 520, i = 0; x <= g.x1; x += 900, i++) { const b = bench(); b.userData.obj = `bench ${i}`; b.position.set(x, FY + 1.3, g.z - 40); root.add(b); }   // ★ PEN: wholly on the lawn, off the path's edge

  // ── the traffic: two lanes, opposite ways ──
  const cars: { o: THREE.Group; x0: number; v: number; L: number }[] = [];
  for (let i = 0; i < (g.cars ?? 0); i++) {
    const c = car(S * 13 + i);
    const lane = i % 2;
    const v = lane ? -6.2 : 7.4;   // one speed per lane: no car ever runs into the one ahead
    c.g.position.set(0, FY + 1, lane ? zRoadFar + 70 + 118 : zRoadNear - 82);   // ★ PEN: its wheels clear of the kerb
    if (lane) c.g.rotation.y = Math.PI;
    c.g.userData.obj = `car ${i}`;
    root.add(c.g);
    // spread along the lane (a lane's cars are a car's length and more apart)
    cars.push({ o: c.g, x0: g.x0 + ((span + 600) * (Math.floor(i / 2) / Math.ceil((g.cars ?? 1) / 2) + 0.13 * lane)), v, L: c.L });
  }
  // ── the people walking ──
  const walkers: { fig: Figure; x0: number; v: number; ph: number }[] = [];
  for (let i = 0; i < (g.walkers ?? 0); i++) {
    const fig = figure(lookOf(S * 7 + i * 3, 460), `walker ${i}`);   // ★ PEN: heads well under the swaying crowns
    // ★ PEN: one lane per direction (the far pavement eastward, the near one westward), each at one speed: nobody walks
    //   through anybody. In the park, one lane, one way.
    const lane = g.park ? 0 : i % 2, dir = lane ? -1 : 1;
    fig.root.rotation.y = dir * Math.PI / 2;
    fig.root.position.set(0, g.park ? FY + GH : FY + 10, g.park ? g.z + 80 : lane ? g.z + 126 : zRoadFar - 90);
    root.add(fig.root);
    const nl = g.park ? (g.walkers ?? 1) : Math.ceil((g.walkers ?? 1) / 2), k = g.park ? i : Math.floor(i / 2);
    walkers.push({ fig, x0: g.x0 + (span + 600) * (k / nl) + 140 * lane, v: dir * (lane ? 1.7 : 1.9), ph: hash(S, i, 32) * 6.28 });
  }

  // (no floor shadow catcher: the street's own pavements and road take its shadows; a catcher on the plain ground in front
  //  of it threw stray dark wedges.) An invisible floor MARKER: the audit's FLOAT check reads the floor's height from it
  root.add(floorMark(FY));

  const wrap = (x: number) => g.x0 - 300 + ((((x - (g.x0 - 300)) % (span + 600)) + span + 600) % (span + 600));
  return {
    root,
    fog: g.fog,
    blur: g.blur,
    update: (p) => {
      const t = p.f / 30;
      // the wind in the crowns: a slow lean and a quicker flutter, each tree its own
      for (const tr of trees) {
        // (the user: "they have to slightly shake a bit to give that movement effect": enough to read through the haze)
        tr.crown.rotation.z = 0.034 * Math.sin(t * 1.1 + tr.ph) + 0.013 * Math.sin(t * 3.7 + tr.ph * 2);
        tr.crown.rotation.x = 0.018 * Math.sin(t * 0.9 + tr.ph * 1.5);
      }
      for (const c of cars) c.o.position.x = wrap(c.x0 + c.v * p.f);
      for (const w of walkers) {
        w.fig.root.position.x = wrap(w.x0 + w.v * p.f);
        walk(w.fig, w.ph + Math.abs(w.v) * p.f * 0.075);
      }
    },
  };
};

/** an invisible plane at the floor (never drawn): tells the FLOAT audit where the ground is */
const floorMark = (y: number) => {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshBasicMaterial({ visible: false }));
  m.rotation.x = -Math.PI / 2;
  m.position.y = y;
  m.userData.isFloor = true;
  m.userData.noBounds = true;
  return m;
};

/** tall towers far behind, on their own slower layer */
export const skylineModel = (g: { floor: number; x0: number; x1: number; z: number; fog: StreetGeo["fog"]; blur: number; seed?: number }) => (): Model<StreetP> => {
  const root = new THREE.Group();
  const FY = -g.floor, S = g.seed ?? 3;
  const WALLS = ["#B9C2CB", "#D4CBBE", "#9FAAB5", "#C8BBA6", "#AEB6BE"];
  let x = g.x0, k = 0;
  while (x < g.x1) {
    const w = 260 + 240 * hash(S, k, 1), h = 1100 + 1300 * hash(S, k, 2), d = 280;
    const wall = WALLS[(k + S) % WALLS.length];
    const tex = towerTex(`${S}:${k}`, Math.round(w), Math.round(h), wall);
    const wm = matte(wall, 0.8);
    const b = rbox(w, h, d, 3, { px: wm, nx: wm, top: wm, bottom: wm, front: M.print(tex, 0.8), back: wm }, 2);
    b.position.set(x + w / 2, FY + h / 2, g.z - 300 * hash(S, k, 3));
    root.add(b);
    x += w + 60 + 120 * hash(S, k, 4);
    k++;
  }
  root.add(floorMark(FY));
  return { root, fog: g.fog, blur: g.blur, shadows: false };
};
