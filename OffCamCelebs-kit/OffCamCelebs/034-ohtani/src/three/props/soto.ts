// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE COMPARISON IN 3-D (034, rebuilt 2026-10-23: the user, "the flag just stands still. You can make it wave… The ball can be
// made more realistic, the baseball, and the sort of showcase for it as well, the glass, the label, it can all be made better,
// more realistic") — "A year later, Juan Soto signed with the Mets for 765 million dollars. Nothing deferred." On the dark
// ground, a collector's pair standing on the floor:
//   · a felt PENNANT on a flag stand: a black weighted base with a brass ferrule, a varnished pole, a brass stop collar, a
//     brass cap and ball finial; the pennant's white hoist band is sewn round the pole as a sleeve resting on the collar, its
//     royal-blue felt body (orange binding, stitched) carries the team's name, METS, as cut-felt letters in plain type (no
//     logo), shrinking toward the tip as pennant lettering does. The felt is CLOTH: a subdivided surface WAVING in travelling
//     waves whose amplitude grows from the sleeve to the free tip, its length kept as it ripples (deterministic in f);
//   · a BASEBALL in a DISPLAY CASE on a museum PEDESTAL: the ball is two figure-8 panels of white leather (pebbled), a seam
//     groove between them, and 108 raised red double stitches in V pairs along it; it rests on a turned brass ring stand on a
//     frosted light disc. The case is a five-pane glass cube (transmissive, refracting, its polished edges green-tinted), seated
//     on a black lacquer base carrying the place's ONE engraved plaque, $765,000,000. The pedestal is a white plinth on a
//     recessed black toe;
//   · ACTION for "nothing deferred": the case's base light flickers on (as a lamp does): the disc glows, it lights the ball
//     from below, and the glass's polished edges carry the light (an edge-lit case).
// ★ PEN/FLOAT: stand, pole, pennant, pedestal, case, glass and ball are separate objects; each rests on the next with a
//   0.2–0.4 px clearance, the sleeve rides the pole with 0.6 px round it, and the ball's stitches never meet its ring (it is
//   turned so the panel point farthest from the seam faces down).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, type Model } from "../stage";
import { M, rbox, box, rad, font, fitFont, track, hash, col } from "../kit029";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export type SotoGeo = { floor: number; flag: { x: number; z: number }; ball: { x: number; z: number }; team: string; sum: string };
/** t: the frame (the felt's waves); lamp: the case's light (0 → 1, flickering on); yaw */
export type SotoP = { t: number; lamp: number; yaw: number };

// ── the measures (layer px, y up from the floor) ──
export const PL = 470, PH = 180;                 // the felt: its length and its height at the hoist
export const POLE_TOP = 640, FINIAL_TOP = POLE_TOP + 40.4;
export const SLEEVE_B = POLE_TOP - 8 - PH;       // the sleeve's foot (it rests on the stop collar)
export const FELT_Y = SLEEVE_B + PH / 2, FELT_X0 = 12.3;
export const PED_H = 370.2, BASE_H = 46, GC = 232, GT = 6;
export const BASE_TOP = PED_H + 0.2 + BASE_H, GLASS_TOP = BASE_TOP + 0.2 + GC + 0.2;
export const PLAQUE_Y = PED_H + 0.2 + BASE_H / 2;
export const BALL_R = 78;
const BLUE = "#1C3F96", ORANGE = "#F26A21", BAND = "#EEEAE1";

/** the felt's lettering: one size, the largest whose word still sits inside the felt with a margin at its right end
 *  (measured, never guessed: the 033 "print fits its box" rule) */
const letters = (c: CanvasRenderingContext2D, text: string) => {
  const x0 = PL * 0.13;
  let size = 110;
  for (let k = 0; k < 60; k++) {
    font(c, 800, size); track(c, size * 0.04);
    const w = c.measureText(text).width, u = (x0 + w) / PL;
    if (0.72 * size <= 0.6 * PH * (1 - u)) break;
    size *= 0.97;
  }
  track(c, 0);
  return { x: x0, size };
};

/** ★ the glass's transmission over a transparent canvas: three's transmission pass clears its buffer to white at alpha 0.5
 *  whenever the canvas is transparent (ours always is: the film's ground is HTML under it), so plain transmission paints a
 *  white haze inside the case. Here the sample's coverage c is recovered from its alpha (an empty pixel reads 0.5, a covered
 *  one 1), the white is taken out, and the pane's alpha becomes c: what is behind the glass refracts through it, the ground
 *  shows through where nothing is, and the glass's reflections stay on top (a local helper: stage.ts is shared) */
const occGlass = (m: THREE.MeshPhysicalMaterial) => {
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace("#include <transmission_fragment>", THREE.ShaderChunk.transmission_fragment
      .replace("material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );",
        `float occC = clamp( ( transmitted.a - 0.5 ) * 2.0, 0.0, 1.0 );
	transmitted.rgb = max( transmitted.rgb - ( 1.0 - occC ) * vec3( 0.97 ), vec3( 0.0 ) );
	material.transmissionAlpha = mix( material.transmissionAlpha, occC, material.transmission );`));
  };
  m.customProgramCacheKey = () => "occGlass";
};

export const sotoModel = (g: SotoGeo) => (): Model<SotoP> => {
  const root = new THREE.Group();
  const FY = -g.floor;

  // ══ THE FLAG STAND ══
  const stand = new THREE.Group(); stand.userData.obj = "stand";
  stand.position.set(g.flag.x, FY, g.flag.z); root.add(stand);
  const iron = new THREE.MeshPhysicalMaterial({ color: col("#17171A"), metalness: 0.4, roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.2, envMapIntensity: 1 });
  const brass = M.gold("#C99A3E"), brassL = M.gold("#D8B05A");
  stand.add(mesh(lathe([[70, 0], [70, 4], [67, 9], [56, 18], [36, 27], [20, 32], [16, 34]], 64), iron));
  const sCap = mesh(new THREE.CircleGeometry(16, 40), iron); sCap.rotation.x = -Math.PI / 2; sCap.position.y = 34; stand.add(sCap);
  const sBot = mesh(new THREE.CircleGeometry(70, 48), iron); sBot.rotation.x = Math.PI / 2; stand.add(sBot);
  const ring = mesh(lathe([[64, 0], [69.4, 0], [69.4, 3.4], [64, 3.4], [64, 0]], 64), brass); ring.position.y = 4.1; stand.add(ring);
  const ferrule = mesh(lathe([[9.6, 0], [13, 0], [13, 20], [12.2, 22], [9.6, 22], [9.6, 0]], 40), brass); ferrule.position.y = 34.15; stand.add(ferrule);

  // ══ THE POLE ══
  const pole = new THREE.Group(); pole.userData.obj = "pole";
  pole.position.copy(stand.position); root.add(pole);
  const grain = paintTex("st-polegrain", 64, 512, (c) => {
    c.fillStyle = "#E8E2DA"; c.fillRect(0, 0, 64, 512);
    for (let i = 0; i < 90; i++) {
      const x = hash(i, 1, 2) * 64, w = 0.4 + 1.6 * hash(i, 2, 3);
      c.strokeStyle = `rgba(70,40,20,${0.08 + 0.2 * hash(i, 3, 4)})`; c.lineWidth = w;
      c.beginPath(); c.moveTo(x, 0);
      for (let y = 0; y <= 512; y += 16) c.lineTo(x + Math.sin(y / 70 + i) * 1.6, y);
      c.stroke();
    }
  }, 2);
  const wood = new THREE.MeshPhysicalMaterial({ color: col("#7B4A27"), map: grain, roughness: 0.38, clearcoat: 0.7, clearcoatRoughness: 0.25, envMapIntensity: 0.9 });
  const PLN = POLE_TOP - 34.4;
  const shaft = mesh(new THREE.CylinderGeometry(9, 9, PLN, 32), wood); shaft.position.y = 34.4 + PLN / 2; pole.add(shaft);
  const collar = mesh(lathe([[9.3, 0], [13, 0], [13.4, 1], [13.4, 6], [13, 7], [9.3, 7], [9.3, 0]], 40), brassL); collar.position.y = SLEEVE_B - 7.3; pole.add(collar);
  const cap = mesh(new THREE.CylinderGeometry(10.5, 11, 10, 32), brassL); cap.position.y = POLE_TOP + 0.2 + 5; pole.add(cap);
  const ball = mesh(new THREE.SphereGeometry(15, 32, 20), brassL); ball.position.y = POLE_TOP + 10.4 + 15; pole.add(ball);

  // ══ THE PENNANT ══
  const pen = new THREE.Group(); pen.userData.obj = "pennant";
  pen.position.copy(stand.position); root.add(pen);
  const felt = (key: string, base: string, n: number) => (c: CanvasRenderingContext2D, w: number, h: number) => {
    c.fillStyle = base; c.fillRect(0, 0, w, h);
    for (let i = 0; i < n; i++) {   // felt: matted fibres, light and dark
      const x = hash(i, 7, key.length) * w, y = hash(i, 8, 1) * h, a = hash(i, 9, 2) * Math.PI, L = 1.5 + 4 * hash(i, 3, 5);
      c.strokeStyle = hash(i, 4, 4) > 0.5 ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.09)"; c.lineWidth = 0.5;
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * L, y + Math.sin(a) * L); c.stroke();
    }
  };
  const feltT = paintTex(`st-felt:${g.team}`, PL, PH, (c) => {
    const yTop = (x: number) => (PH * Math.min(1, x / PL)) / 2;
    c.fillStyle = "rgba(0,0,0,0)"; c.clearRect(0, 0, PL, PH);
    c.save();
    c.beginPath(); c.moveTo(0, 0); c.lineTo(PL, PH / 2 - 4); c.lineTo(PL, PH / 2 + 4); c.lineTo(0, PH); c.closePath(); c.clip();
    felt("b", BLUE, 9000)(c, PL, PH);
    // the binding: an orange felt strip along both long edges, its stitches
    c.lineCap = "round";
    for (const s of [1, -1]) {
      c.strokeStyle = ORANGE; c.lineWidth = 16;
      c.beginPath(); c.moveTo(0, s > 0 ? 0 : PH); c.lineTo(PL, PH / 2); c.stroke();
      c.strokeStyle = "rgba(255,255,255,0.75)"; c.lineWidth = 0.9; c.setLineDash([3, 2.2]);
      c.beginPath(); c.moveTo(0, s > 0 ? 9 : PH - 9); c.lineTo(PL, PH / 2); c.stroke(); c.setLineDash([]);
    }
    // the hoist band: white felt, its seam
    felt("w", BAND, 900)(c, 44, PH);
    c.fillStyle = "rgba(0,0,0,0.18)"; c.fillRect(42, 0, 3, PH);
    c.strokeStyle = "rgba(60,60,70,0.55)"; c.lineWidth = 0.9; c.setLineDash([3, 2.2]);
    c.beginPath(); c.moveTo(38, 0); c.lineTo(38, PH); c.stroke(); c.setLineDash([]);
    // the letters: cut orange felt, a white felt outline under each, their stitching, their edge's shadow
    c.textBaseline = "middle"; c.textAlign = "left";
    {
      const L = letters(c, g.team), y = PH / 2 + L.size * 0.02;
      font(c, 800, L.size); track(c, L.size * 0.04);
      c.lineJoin = "round";
      c.fillStyle = "rgba(0,0,0,0.35)"; c.fillText(g.team, L.x + 2, y + 2.5);
      c.strokeStyle = "#F4F1EA"; c.lineWidth = L.size * 0.09; c.strokeText(g.team, L.x, y);
      c.fillStyle = ORANGE; c.fillText(g.team, L.x, y);
      c.strokeStyle = "rgba(120,40,0,0.6)"; c.lineWidth = 0.8; c.setLineDash([2.6, 2]); c.strokeText(g.team, L.x, y); c.setLineDash([]);
      track(c, 0);
    }
    c.restore();
    void yTop;
  }, 3);
  const backT = paintTex("st-feltback", 256, 128, (c) => felt("k", BLUE, 2500)(c, 256, 128), 2);
  const feltFront = new THREE.MeshPhysicalMaterial({ map: feltT, roughness: 0.94, sheen: 0.7, sheenRoughness: 0.75, sheenColor: col("#9DB0E0"), envMapIntensity: 0.35, side: THREE.FrontSide });
  const feltBack = new THREE.MeshPhysicalMaterial({ map: backT, roughness: 0.94, sheen: 0.7, sheenRoughness: 0.75, sheenColor: col("#9DB0E0"), envMapIntensity: 0.35, side: THREE.BackSide });
  // the cloth: a grid NX × NY, each column a fraction u of the length, each row a fraction of that column's height
  const NX = 80, NY = 22;
  const pos = new Float32Array((NX + 1) * (NY + 1) * 3), uv = new Float32Array((NX + 1) * (NY + 1) * 2), idx: number[] = [];
  const hAt = (u: number) => Math.max(8, PH * (1 - u));
  for (let j = 0; j <= NX; j++) for (let k = 0; k <= NY; k++) {
    const n = j * (NY + 1) + k, u = j / NX, y = (0.5 - k / NY) * hAt(u);
    uv[n * 2] = u; uv[n * 2 + 1] = 0.5 + y / PH;
  }
  for (let j = 0; j < NX; j++) for (let k = 0; k < NY; k++) {
    const a = j * (NY + 1) + k, b = a + NY + 1;
    idx.push(a, a + 1, b, b, a + 1, b + 1);
  }
  const cloth = new THREE.BufferGeometry();
  cloth.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  cloth.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  cloth.setIndex(idx);
  const fm = mesh(cloth, feltFront); fm.position.y = FELT_Y; pen.add(fm);
  const bm = mesh(cloth, feltBack, false, true); bm.position.y = FELT_Y; pen.add(bm);
  const sleeve = mesh(lathe([[9.6, 0], [12.5, 0], [12.8, 1], [12.8, PH - 1], [12.5, PH], [9.6, PH], [9.6, 0]], 40),
    new THREE.MeshPhysicalMaterial({ map: paintTex("st-band", 128, 128, (c) => felt("s", BAND, 1500)(c, 128, 128), 2), roughness: 0.95, sheen: 0.5, sheenColor: col("#ffffff"), envMapIntensity: 0.35 }));
  sleeve.position.y = SLEEVE_B; pen.add(sleeve);
  const xs = new Float32Array(NX + 1), zc = new Float32Array(NX + 1);
  // ★ the user (2026-10-23): "the flag just stands still. You can make it wave". The cloth streams a little AWAY from the
  //   viewer (STREAM, so its folds show in its outline as well as in its shading) and two travelling waves run down it from
  //   the sleeve to the tip at different speeds (so it never reads as a loop), their amplitude growing toward the free tip;
  //   the tip flutters up and down, and each fold twists across the cloth's height. All deterministic in t.
  const STREAM = rad(14);
  const wave = (t: number) => {
    const w1 = (2 * Math.PI) / 36, w2 = (2 * Math.PI) / 23;
    const ph1 = (u: number) => 2 * Math.PI * 1.45 * u - w1 * t, ph2 = (u: number) => 2 * Math.PI * 2.6 * u - w2 * t + 1.1;
    // the centre line first: its z, then x stepped so each segment keeps its length (the cloth never stretches)
    for (let j = 0; j <= NX; j++) {
      const u = j / NX;
      zc[j] = Math.pow(u, 1.05) * (46 * Math.sin(ph1(u)) + 15 * Math.sin(ph2(u)));
    }
    xs[0] = FELT_X0;
    const dx = PL / NX;
    for (let j = 1; j <= NX; j++) { const dz = zc[j] - zc[j - 1]; xs[j] = xs[j - 1] + Math.sqrt(Math.max(dx * dx - dz * dz, 0.3 * dx * dx)); }
    const cs = Math.cos(STREAM), sn = Math.sin(STREAM);
    for (let j = 0; j <= NX; j++) {
      const u = j / NX, p1 = ph1(u), h = hAt(u);
      for (let k = 0; k <= NY; k++) {
        const n = j * (NY + 1) + k, vn = 1 - 2 * k / NY, y = vn * h / 2;
        const x = xs[j], z = zc[j] + 20 * u * vn * Math.sin(0.9 * p1 + 1.3);
        // streamed about the pole's axis: the hoist stays on the pole, the fly goes back
        pos[n * 3] = x * cs + z * sn;
        pos[n * 3 + 1] = y - 14 * u * u + 22 * Math.pow(u, 1.6) * Math.sin(p1 + 0.6);
        pos[n * 3 + 2] = -x * sn + z * cs;
      }
    }
    cloth.attributes.position.needsUpdate = true;
    cloth.computeVertexNormals(); cloth.computeBoundingBox(); cloth.computeBoundingSphere();
  };
  wave(0);

  // ══ THE PEDESTAL ══
  const ped = new THREE.Group(); ped.userData.obj = "pedestal";
  ped.position.set(g.ball.x, FY, g.ball.z); root.add(ped);
  const white = new THREE.MeshPhysicalMaterial({ color: col("#E6E1D8"), roughness: 0.62, clearcoat: 0.15, clearcoatRoughness: 0.6, envMapIntensity: 0.6 });
  // a museum plinth: its body on a recessed black toe, a shadow-gap reveal under its top cap
  const BODY = PED_H - 24 - 14.2;
  const pb = rbox(300, BODY, 300, 4, white); pb.position.set(0, 14.2 + BODY / 2, 150); ped.add(pb);
  const toe = rbox(276, 14, 276, 2, M.rubber("#141414")); toe.position.set(0, 7, 138); ped.add(toe);
  const neck = box(290, 4, 290, M.satin("#2A2622", 0.8)); neck.position.set(0, PED_H - 22, 145); ped.add(neck);
  const pcap = rbox(300, 20, 300, 4, white); pcap.position.set(0, PED_H - 10, 150); ped.add(pcap);

  // ══ THE CASE: its base, plaque, light disc and ring stand ══
  const cs = new THREE.Group(); cs.userData.obj = "case";
  cs.position.copy(ped.position); root.add(cs);
  const lacquer = new THREE.MeshPhysicalMaterial({ color: col("#111113"), roughness: 0.18, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.2 });
  const cb = rbox(250, BASE_H, 250, 6, lacquer); cb.position.set(0, PED_H + 0.2 + BASE_H / 2, 125); cs.add(cb);
  const PW = 156, PHh = 28;
  const plT = paintTex(`st-plaque:${g.sum}`, PW, PHh, (c) => {
    c.fillStyle = "#C7A458"; c.fillRect(0, 0, PW, PHh);
    for (let k = 0; k < 80; k++) { c.fillStyle = `rgba(${hash(k, 1, 1) > 0.5 ? "255,240,200" : "80,55,15"},${0.05 + 0.06 * hash(k, 2, 2)})`; c.fillRect(0, hash(k, 3, 3) * PHh, PW, 0.35); }
    const sh = c.createLinearGradient(0, 0, PW, PHh); sh.addColorStop(0, "rgba(255,244,205,0.3)"); sh.addColorStop(1, "rgba(80,55,15,0.25)");
    c.fillStyle = sh; c.fillRect(0, 0, PW, PHh);
    c.strokeStyle = "rgba(40,25,5,0.7)"; c.lineWidth = 0.8; c.strokeRect(4, 4, PW - 8, PHh - 8);
    c.textAlign = "center"; c.textBaseline = "middle";
    fitFont(c, 800, 17, g.sum, PW - 30); track(c, 0.8);
    c.fillStyle = "rgba(255,240,200,0.6)"; c.fillText(g.sum, PW / 2 + 0.5, PHh / 2 + 1.1);
    c.fillStyle = "#1A1208"; c.fillText(g.sum, PW / 2, PHh / 2 + 0.5); track(c, 0);
  }, 5);
  const plM = new THREE.MeshPhysicalMaterial({ map: plT, metalness: 0.65, roughness: 0.4, envMapIntensity: 0.9 });
  const plaque = rbox(PW, PHh, 1.4, 0.5, { px: brass, nx: brass, top: brass, bottom: brass, front: plM, back: brass });
  plaque.position.set(0, PLAQUE_Y, 125 + 1.6); cs.add(plaque);
  const lampM = new THREE.MeshPhysicalMaterial({ color: col("#E8E4DC"), roughness: 0.5, transmission: 0, emissive: col("#FFE0A8"), emissiveIntensity: 0, envMapIntensity: 0.5 });
  const disc = mesh(new THREE.CylinderGeometry(52, 52, 3, 64), lampM); disc.position.set(0, BASE_TOP + 0.2 + 1.5, 0); cs.add(disc);
  const RING_Y = BASE_TOP + 0.2 + 3 + 0.2;
  const stand2 = mesh(lathe([[26, 0], [30, 0], [30, 10], [29.4, 11.4], [28, 12], [26.6, 11.6], [26, 10.6], [26, 0]], 64), brassL);
  stand2.position.set(0, RING_Y, 0); cs.add(stand2);
  const lamp = new THREE.PointLight(col("#FFD9A0"), 0, 260, 0);
  lamp.position.set(0, RING_Y + 4, 0); cs.add(lamp);

  // ══ THE GLASS: five panes, butt-jointed, seated on the base ══
  const gl = new THREE.Group(); gl.userData.obj = "glass";
  gl.position.set(g.ball.x, FY + BASE_TOP + 0.2, g.ball.z); root.add(gl);
  const glassM = new THREE.MeshPhysicalMaterial({ color: col("#FFFFFF"), metalness: 0, roughness: 0.03, transmission: 1, thickness: GT, ior: 1.5,
    attenuationColor: col("#D6EDE3"), attenuationDistance: 80, specularIntensity: 1, envMapIntensity: 3.0 });
  const edgeM = new THREE.MeshPhysicalMaterial({ color: col("#BFDCCF"), metalness: 0, roughness: 0.06, transmission: 0.55, thickness: 20, ior: 1.5,
    attenuationColor: col("#9FCDB8"), attenuationDistance: 25, envMapIntensity: 3.0, emissive: col("#FFD9A0"), emissiveIntensity: 0 });
  occGlass(glassM); occGlass(edgeM);
  const pane = (w: number, h: number, d: number, faceZ: boolean) => {
    const m = faceZ ? { px: edgeM, nx: edgeM, top: edgeM, bottom: edgeM, front: glassM, back: glassM } : { px: glassM, nx: glassM, top: edgeM, bottom: edgeM, front: edgeM, back: edgeM };
    const o = rbox(w, h, d, 1.4, m, 2); o.castShadow = false; return o;
  };
  const WH = GC - GT;
  const pf = pane(GC, WH, GT, true); pf.position.set(0, WH / 2, GC / 2); gl.add(pf);
  const pk = pane(GC, WH, GT, true); pk.position.set(0, WH / 2, -GC / 2 + GT); gl.add(pk);
  for (const sx of [-1, 1]) { const ps = pane(GT, WH, GC - 2 * GT - 0.4, false); ps.position.set(sx * (GC / 2 - GT / 2), WH / 2, GC / 2 - GT - 0.2); gl.add(ps); }
  const top = rbox(GC, GT, GC, 1.4, { px: edgeM, nx: edgeM, top: glassM, bottom: glassM, front: edgeM, back: edgeM }, 2);
  top.castShadow = false; top.position.set(0, WH + 0.2 + GT / 2, GC / 2); gl.add(top);

  // ══ THE BALL ══
  const bl = new THREE.Group(); bl.userData.obj = "ball";
  root.add(bl);
  // the seam: the classic two-lobe curve on the sphere (a + b = 1 keeps it on the unit sphere), 108 V-stitches along it
  const A = 0.68, B = 0.32, C = 2 * Math.sqrt(A * B);
  const seam = (t: number) => new THREE.Vector3(A * Math.cos(t) + B * Math.cos(3 * t), A * Math.sin(t) - B * Math.sin(3 * t), C * Math.sin(2 * t));
  const NS = 720, sp: THREE.Vector3[] = [];
  for (let i = 0; i < NS; i++) sp.push(seam((i / NS) * Math.PI * 2));
  // the leather: a fine sphere, the groove pressed in along the seam
  const R = BALL_R, sg = new THREE.SphereGeometry(R, 200, 120), P = sg.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < P.count; i++) {
    v.fromBufferAttribute(P, i).normalize();
    let d2 = 9;
    for (let k = 0; k < NS; k++) { const q = sp[k], e = (v.x - q.x) ** 2 + (v.y - q.y) ** 2 + (v.z - q.z) ** 2; if (e < d2) d2 = e; }
    const d = Math.sqrt(d2) * R, gw = 3.4;
    const r = R - (d < gw ? 1.5 * (0.5 + 0.5 * Math.cos((Math.PI * d) / gw)) : 0);
    P.setXYZ(i, v.x * r, v.y * r, v.z * r);
  }
  sg.computeVertexNormals();
  const leatherT = paintTex("st-leather", 1024, 512, (c) => {
    c.fillStyle = "#F1ECE2"; c.fillRect(0, 0, 1024, 512);
    for (let i = 0; i < 260; i++) {   // a hand-sewn hide's soft tonal patches
      const x = hash(i, 1, 9) * 1024, y = hash(i, 2, 9) * 512, r = 20 + 70 * hash(i, 3, 9);
      const gr = c.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${hash(i, 4, 9) > 0.5 ? "190,170,140" : "255,255,250"},0.06)`); gr.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = gr; c.fillRect(x - r, y - r, 2 * r, 2 * r);
    }
  }, 1);
  const pebT = paintTex("st-pebble", 1024, 512, (c) => {
    c.fillStyle = "#808080"; c.fillRect(0, 0, 1024, 512);
    for (let i = 0; i < 26000; i++) { c.fillStyle = hash(i, 5, 1) > 0.5 ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.22)"; const s = 1 + 2.2 * hash(i, 6, 1); c.beginPath(); c.arc(hash(i, 7, 1) * 1024, hash(i, 8, 1) * 512, s, 0, Math.PI * 2); c.fill(); }
  }, 1);
  const leather = new THREE.MeshPhysicalMaterial({ map: leatherT, bumpMap: pebT, bumpScale: 0.35, roughness: 0.58, clearcoat: 0.12, clearcoatRoughness: 0.5, envMapIntensity: 0.5 });
  const hide = mesh(sg, leather);
  bl.add(hide);
  // the stitches: 108 V pairs, the point of each V on the seam, its two arms out to the holes on either panel, raised thread
  const len: number[] = [0];
  for (let i = 1; i <= NS; i++) len.push(len[i - 1] + sp[i % NS].distanceTo(sp[i - 1]));
  const L = len[NS];
  const at = (s: number) => { let i = 1; while (i < NS && len[i] < s) i++; const t = (s - len[i - 1]) / (len[i] - len[i - 1]); return sp[i - 1].clone().lerp(sp[i % NS], t).normalize(); };
  const arms: THREE.BufferGeometry[] = [];
  const onBall = (p: THREE.Vector3, lift: number) => p.clone().normalize().multiplyScalar(R + lift);
  for (let k = 0; k < 108; k++) {
    const s = (k / 108) * L, p = at(s), p2 = at((s + 0.002) % L);
    const T = p2.clone().sub(p).normalize(), Sd = p.clone().cross(T).normalize();
    const w = 6.8 / R, back = 4.2 / R;
    const apex = p.clone().addScaledVector(T, 1.6 / R);
    for (const sd of [1, -1]) {
      const end = p.clone().addScaledVector(Sd, sd * w).addScaledVector(T, -back);
      const mid = apex.clone().lerp(end, 0.5);
      const crv = new THREE.CatmullRomCurve3([onBall(apex, -0.3), onBall(apex.clone().lerp(end, 0.2), 0.9), onBall(mid, 1.25), onBall(apex.clone().lerp(end, 0.8), 0.9), onBall(end, -0.4)]);
      arms.push(new THREE.TubeGeometry(crv, 8, 1.05, 6, false));
    }
  }
  const thread = mesh(mergeGeometries(arms), new THREE.MeshPhysicalMaterial({ color: col("#C3252B"), roughness: 0.75, sheen: 0.4, sheenColor: col("#ff8080"), envMapIntensity: 0.4 }));
  bl.add(thread);
  // turned so the panel point farthest from the seam rests on the ring (no stitch ever meets it), then spun to show its seams
  let best = new THREE.Vector3(0, -1, 0), bestD = -1;
  for (let i = 0; i < 40; i++) for (let j = 0; j < 80; j++) {
    const th = (Math.PI * (i + 0.5)) / 40, phi = (2 * Math.PI * j) / 80;
    const d = new THREE.Vector3(Math.sin(th) * Math.cos(phi), Math.cos(th), Math.sin(th) * Math.sin(phi));
    let m = 9; for (const q of sp) m = Math.min(m, d.distanceToSquared(q));
    if (m > bestD) { bestD = m; best = d; }
  }
  bl.quaternion.setFromUnitVectors(best, new THREE.Vector3(0, -1, 0));
  bl.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rad(35)));
  const contactR = 26.8;
  bl.position.set(g.ball.x, FY + RING_Y + 11.6 + Math.sqrt(R * R - contactR * contactR) + 0.4, g.ball.z);

  root.add(makeFloor({ y: g.floor, x0: Math.min(g.flag.x, g.ball.x) - 700, x1: Math.max(g.flag.x, g.ball.x) + 700, z0: -500, z1: 700, reflect: 0.14, shadow: 0.55,
    fadeC: [(g.flag.x + g.ball.x) / 2, (g.flag.z + g.ball.z) / 2 + 40], fadeR: [900, 380],
    blobs: [{ x: g.flag.x, z: g.flag.z, w: 170, d: 170, a: 0.5 }, { x: g.ball.x, z: g.ball.z, w: 360, d: 360, a: 0.55 }] }));

  return {
    root,
    update: (p) => {
      root.rotation.y = rad(p.yaw);
      wave(p.t);
      lampM.emissiveIntensity = 2.6 * p.lamp;
      edgeM.emissiveIntensity = 0.85 * p.lamp;   // the base's LEDs light the glass's polished edges
      lamp.intensity = 4.5 * p.lamp;
    },
  };
};
