// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DEFERRAL IN 3-D (034, rebuilt 2026-10-23 to the "completely polished, detailed, and 3D" bar) — "But 680 million dollars
// of it is deferred. It arrives in 10 payments of 68 million dollars, from 2034 to 2043, with no interest." On the dark
// ground, a bank's SAFE-DEPOSIT section standing on the floor: ten boxes in a row, one per payment, each locked away until
// its year. Modelled from the makers' own descriptions of a safe-deposit section (stainless-faced doors in a steel frame, a
// guard lock and a renter lock side by side, an exposed barrel hinge, a matte number plate recessed on the door, a pull):
//   · the CABINET: a painted-steel face plate with ten real OPENINGS cut through it (an extrusion with holes, bevelled), the
//     shell behind it (the row's floor and top, the dividers that make each compartment, the back, the sides), a plinth with
//     a reveal groove and a recessed toe kick, a cornice;
//   · each COMPARTMENT holds its inner BOX (a long steel box with a folding brass bail), seen while its door is open;
//   · each DOOR is brushed stainless with an engraved border, hung on a five-knuckle barrel hinge on its left (three frame
//     knuckles with their leaves on the stile, two door knuckles with theirs on the door, finials top and bottom), with two
//     keyholes (a polished escutcheon, a brass plug with its keyway that TURNS), an engraved brass number plate with its two
//     screws (its year, 2034 … 2043: the box's own marking), an upright brass bar pull on two roses by its free edge (the keyholes sit left of centre, so the hardware never reads
//     as a face), and on its inside a lock case;
//   · 2034 and 2043 carry their renter's KEY (a brass key: shoulder, neck, a bow with its hole), seated in the right keyway.
// ACTIONS (no labels: the user, 2026-10-23): the open doors swing shut on their hinges and LOCK (the plugs and keys turn a
// quarter); on "no interest" the last key turns and the place's lights go out (the set dims the key light).
// ★ PEN: the cabinet, each door and each inner box are their own objects (`cabinet`, `door0…9`, `box0…9`), so a door crossing
//   its frame or a box is caught. Every point of a door keeps x ≥ its hinge axis as it swings (the axis stands 4.7 px proud of
//   the face, the door 2 px behind it), and its free edge's back corner sweeps 1.6 px inside the jamb (GR): no angle crosses.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, slabOf, type Model } from "../stage";
import { M, rbox, box, rad, fitFont, track, wire, hash, col } from "../kit029";

export type DeferGeo = { floor: number; cx: number; z: number; years: string[]; keyed: number[] };
/** open[i]: door i's opening (1 = its full swing, 0 = shut); lock[i]: its plugs' (and key's) quarter turn (0 → 1); yaw */
export type DeferP = { open: number[]; lock: number[]; yaw: number };

// ── the measures (layer px; y up from the floor, z toward the viewer, the face plate's front at z = 0) ──
export const DF_N = 10;
export const DW = 140, DH = 168, DT = 12;            // a door
const GL = 1.5, GR = 3, GV = 1.5;                     // its gaps: hinge side, free side (its back corner's sweep), top and bottom
export const OW = DW + GL + GR, OH = DH + 2 * GV;     // an opening
export const MS = 14;                                  // a stile between openings
export const CW = DF_N * OW + (DF_N + 1) * MS;         // the face's width
export const BASE = 104, BR = 20, TR = 22, CORN = 16;  // plinth (with its toe kick), bottom rail, top rail, cornice
const KICK = 14, FD = 26, CD = 220, KR = 3.6, HZ = KR + 0.2;
export const YB = BASE + BR, YT = YB + OH, TOP = YT + TR + CORN + 0.2;   // opening bottom / top, the cornice's top
/** the cornice's front and back (z): its back edge is the place's highest point on screen */
export const CORN_Z: [number, number] = [6, 6 - (CD + 6)];
const RECESS = 2;
const KX0 = -38, KX1 = 4, KY = 4;                     // the two keyholes (guard, renter), left of the pull                                      // a shut door's front sits 2 px behind the face
const OPEN_DEG = [100, 96, 98, 94, 99, 95, 97, 93, 98, 100];
/** door i's centre x (cabinet px) and the door's / its plate's centre heights: for the set's camera and its guards */
export const doorX = (i: number) => -CW / 2 + MS + i * (OW + MS) + GL + DW / 2;
export const DOOR_Y = YB + OH / 2, PLATE_Y = DOOR_Y + DH / 2 - 24;

const STEEL = "#C3C8CD", PAINT = "#40454A", PAINT_D = "#24272A", BRASS = "#C99A3E";

/** brushed metal: fine streaks along x (a colour map near white, so the material's own colour shows, and its roughness) */
const brushTex = (key: string, w: number, h: number, border: boolean) => paintTex(key, w, h, (c) => {
  c.fillStyle = "#EDEDED"; c.fillRect(0, 0, w, h);
  // (fine and even, as a #4 satin finish is: many short faint streaks, never the coarse scratches of a worn plate)
  for (let i = 0; i < Math.round(h * 16); i++) {
    const y = hash(i, 1, 3) * h, x = hash(i, 2, 5) * w * 1.2 - w * 0.2, L = w * (0.1 + 0.45 * hash(i, 3, 7));
    const v = hash(i, 4, 9);
    c.strokeStyle = v > 0.5 ? `rgba(255,255,255,${0.05 + 0.12 * (v - 0.5)})` : `rgba(60,60,60,${0.025 + 0.07 * v})`;
    c.lineWidth = 0.2 + 0.3 * hash(i, 5, 2);
    c.beginPath(); c.moveTo(x, y); c.lineTo(x + L, y + (hash(i, 6, 1) - 0.5) * 0.6); c.stroke();
  }
  if (border) {
    // the door's engraved border: a V-cut a few px in from the edge (its dark wall, its lit lower lip)
    c.strokeStyle = "rgba(25,25,28,0.55)"; c.lineWidth = 1.4; c.strokeRect(9, 9, w - 18, h - 18);
    c.strokeStyle = "rgba(255,255,255,0.55)"; c.lineWidth = 0.8; c.strokeRect(10.2, 10.2, w - 18, h - 18);
  }
}, 3);

export const deferModel = (g: DeferGeo) => (): Model<DeferP> => {
  const root = new THREE.Group();
  const cab = new THREE.Group();
  cab.position.set(g.cx, -g.floor, g.z);
  root.add(cab);

  // ── materials ──
  // the cabinet's paint: a baked enamel, its faint orange-peel (a speckle, no streaks: paint is not brushed)
  const peel = paintTex("df-peel", 256, 256, (c) => {
    c.fillStyle = "#EDEDED"; c.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 9000; i++) {
      c.fillStyle = hash(i, 3, 1) > 0.5 ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";
      c.beginPath(); c.arc(hash(i, 1, 1) * 256, hash(i, 2, 1) * 256, 0.6 + 1.6 * hash(i, 4, 1), 0, Math.PI * 2); c.fill();
    }
  }, 2);
  const paintM = new THREE.MeshPhysicalMaterial({ color: col(PAINT), metalness: 0.45, roughness: 0.48, clearcoat: 0.5, clearcoatRoughness: 0.3, envMapIntensity: 0.8,
    map: peel });
  const darkM = M.satin(PAINT_D, 0.6, 0.4);
  const inner = M.satin("#2E3134", 0.7, 0.3);
  const kickM = M.rubber("#121212");
  const steelOf = (t: THREE.Texture) => new THREE.MeshPhysicalMaterial({ color: col(STEEL), metalness: 0.92, roughness: 0.34, map: t, roughnessMap: t, envMapIntensity: 1.0 });
  const doorFace = steelOf(brushTex("df-doorface", DW, DH, true)), doorEdge = steelOf(brushTex("df-dooredge", 64, 64, false));
  const brass = M.gold(BRASS), brassP = M.gold("#D9B25A");
  const nickel = M.steel("#D7DADC");
  const hingeM = new THREE.MeshPhysicalMaterial({ color: col("#B8BDC2"), metalness: 0.95, roughness: 0.28, envMapIntensity: 1 });
  const boxM = new THREE.MeshPhysicalMaterial({ color: col("#8E959A"), metalness: 0.8, roughness: 0.45, map: brushTex("df-inbox", 128, 128, false), envMapIntensity: 0.8 });

  // ══ THE CABINET ══
  const cabinet = new THREE.Group();
  cabinet.userData.obj = "cabinet";
  cab.add(cabinet);
  // the face plate: one steel plate, the ten openings cut through it (rounded 2 px corners), its edges bevelled
  const FH = BR + OH + TR;
  const fs = new THREE.Shape();
  fs.moveTo(-CW / 2, 0); fs.lineTo(CW / 2, 0); fs.lineTo(CW / 2, FH); fs.lineTo(-CW / 2, FH); fs.lineTo(-CW / 2, 0);
  for (let i = 0; i < DF_N; i++) {
    const x0 = -CW / 2 + MS + i * (OW + MS), y0 = BR, r = 2;
    const h = new THREE.Path();
    h.moveTo(x0 + r, y0); h.lineTo(x0 + OW - r, y0); h.quadraticCurveTo(x0 + OW, y0, x0 + OW, y0 + r);
    h.lineTo(x0 + OW, y0 + OH - r); h.quadraticCurveTo(x0 + OW, y0 + OH, x0 + OW - r, y0 + OH);
    h.lineTo(x0 + r, y0 + OH); h.quadraticCurveTo(x0, y0 + OH, x0, y0 + OH - r); h.lineTo(x0, y0 + r); h.quadraticCurveTo(x0, y0, x0 + r, y0);
    fs.holes.push(h);
  }
  const face = mesh(slabOf(fs, FD, 2, 4), paintM);
  face.position.set(0, BASE, 0);
  cabinet.add(face);
  // the shell behind it: the row's floor and top, the dividers, the back, the two sides
  const SHW = CW - 20;
  const shellFloor = box(SHW, 8, CD - FD - 8.4, inner); shellFloor.position.set(0, YB - 4, -FD - 0.2); cabinet.add(shellFloor);
  const shellTop = box(SHW, 8, CD - FD - 8.4, inner); shellTop.position.set(0, YT + 4, -FD - 0.2); cabinet.add(shellTop);
  for (let i = 1; i < DF_N; i++) {
    const d = box(8, OH - 0.4, CD - FD - 8.6, inner);
    d.position.set(-CW / 2 + MS / 2 + i * (OW + MS), YB + OH / 2, -FD - 0.2);
    cabinet.add(d);
  }
  const back = box(SHW, OH + 16, 8, inner); back.position.set(0, YB + OH / 2, -CD + 8); cabinet.add(back);
  for (const sx of [-1, 1]) {
    const s = rbox(10, FH, CD - FD - 0.2, 1.5, paintM);
    s.position.set(sx * (CW / 2 - 5), BASE + FH / 2, -FD - 0.2);
    cabinet.add(s);
  }
  // the plinth (4 px proud of the face, a reveal groove along it), the toe kick, the cornice
  const PLH = BASE - KICK - 0.2;
  const plinth = rbox(CW + 12, PLH, CD + 10, 3, paintM);
  plinth.position.set(0, KICK + PLH / 2, 4);
  cabinet.add(plinth);
  const groove = box(CW + 6, 2.4, 1.2, darkM); groove.position.set(0, KICK + 30, 4.3); cabinet.add(groove);
  const kick = box(CW - 30, KICK, CD - 40, kickM); kick.position.set(0, KICK / 2, -16); cabinet.add(kick);
  const corn = rbox(CW + 16, CORN, CD + 6, 4, paintM);
  corn.position.set(0, YT + TR + CORN / 2 + 0.2, CORN_Z[0]);
  cabinet.add(corn);

  // ══ THE TEN BOXES ══
  const plugs: THREE.Group[][] = [];
  const hinges: THREE.Group[] = [];
  const knG = new THREE.CylinderGeometry(KR, KR, 1, 28);
  const KL = DH - 24, KS = (KL - 4 * 0.6) / 5;
  const escG = lathe([[6.6, 0], [10.5, 0], [10.5, 0.6], [9.8, 1.9], [8.2, 2.5], [6.9, 2.2], [6.6, 1.6], [6.6, 0]], 40);
  const plugG = new THREE.CylinderGeometry(6.1, 6.1, 1.4, 32);
  const roseG = lathe([[0.01, 0], [5, 0], [5, 0.5], [4.2, 1.5], [0.01, 1.5]], 28);
  const finG = new THREE.SphereGeometry(KR * 0.82, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  const keyway = paintTex("df-keyway", 64, 64, (c) => {
    c.fillStyle = "#C9A253"; c.fillRect(0, 0, 64, 64);
    const gr = c.createRadialGradient(26, 24, 2, 32, 32, 32); gr.addColorStop(0, "rgba(255,240,200,0.45)"); gr.addColorStop(1, "rgba(80,50,10,0.35)");
    c.fillStyle = gr; c.fillRect(0, 0, 64, 64);
    c.strokeStyle = "rgba(60,40,10,0.7)"; c.lineWidth = 1.6; c.beginPath(); c.arc(32, 32, 28, 0, Math.PI * 2); c.stroke();
    // the keyway: a paracentric slot, upright at rest
    c.fillStyle = "#0B0806";
    c.beginPath(); c.moveTo(30, 12); c.lineTo(34, 12); c.lineTo(34, 24); c.lineTo(36, 28); c.lineTo(34, 33); c.lineTo(36, 38); c.lineTo(34, 43);
    c.lineTo(34, 52); c.lineTo(30, 52); c.lineTo(30, 40); c.lineTo(28, 36); c.lineTo(30, 31); c.lineTo(28, 26); c.lineTo(30, 22); c.closePath(); c.fill();
  }, 3);
  const plugFace = new THREE.MeshPhysicalMaterial({ map: keyway, metalness: 0.85, roughness: 0.32, envMapIntensity: 1 });
  const lockCaseM = M.satin("#6E7276", 0.5, 0.6);
  const keyM = M.gold("#D3B160");

  for (let i = 0; i < DF_N; i++) {
    const xL = -CW / 2 + MS + i * (OW + MS), xC = xL + OW / 2, yc = YB + OH / 2;
    // the inner box, resting on its compartment's floor (seen while the door is open)
    const ib = new THREE.Group();
    ib.userData.obj = `box${i}`;
    ib.position.set(xC, YB + 0.3, -FD - 6);
    cab.add(ib);
    const IBH = OH - 18;
    const ibB = rbox(OW - 14, IBH, 172, 3, boxM);
    ibB.position.set(0, IBH / 2, 0);
    ib.add(ibB);
    // its folding bail: two ears, a brass wire loop hanging flat against the front
    for (const ex of [-22, 22]) { const ear = rbox(6, 8, 3, 1, boxM); ear.position.set(ex, IBH / 2 + 6, 3.2); ib.add(ear); }
    ib.add(wire([[-22, IBH / 2 + 6, 4.6], [-22, IBH / 2 - 20, 4.6], [-16, IBH / 2 - 28, 4.6], [16, IBH / 2 - 28, 4.6], [22, IBH / 2 - 20, 4.6], [22, IBH / 2 + 6, 4.6]], 1.6, brass, false, 48));

    // the frame's three hinge knuckles on the stile beside the opening, each with its leaf, and the finials
    for (const k of [0, 2, 4]) {
      const y0 = yc - KL / 2 + k * (KS + 0.6);
      const kn = mesh(knG, hingeM); kn.scale.y = KS; kn.position.set(xL, y0 + KS / 2, HZ); cabinet.add(kn);
      const leaf = box(7, KS - 4, 0.9, hingeM); leaf.position.set(xL - 1.6 - 3.5, y0 + KS / 2, 1.05); cabinet.add(leaf);
    }
    for (const [yy, s] of [[yc - KL / 2, -1], [yc + KL / 2, 1]] as const) {
      const fin = mesh(finG, hingeM);
      fin.position.set(xL, yy, HZ); if (s < 0) fin.rotation.x = Math.PI;
      cabinet.add(fin);
    }

    // the door: a group pivoting on the hinge axis (xL, HZ)
    const dg = new THREE.Group();
    dg.userData.obj = `door${i}`;
    dg.position.set(xL, yc, HZ);
    cab.add(dg);
    hinges.push(dg);
    for (const k of [1, 3]) {
      const y0 = -KL / 2 + k * (KS + 0.6);
      const kn = mesh(knG, hingeM); kn.scale.y = KS; kn.position.set(0, y0 + KS / 2, 0); dg.add(kn);
      // its leaf on the door's front, from just right of the axis (clear of the jamb's chamfer: x ≥ 0.5)
      const leaf = box(9, KS - 4, 1.5, hingeM); leaf.position.set(0.5 + 4.5, y0 + KS / 2, -HZ - 0.4); dg.add(leaf);
    }
    // the door plate: its front at dp's z = 0
    const dp = new THREE.Group();
    dp.position.set(GL + DW / 2, 0, -RECESS - HZ);
    dg.add(dp);
    dp.add(rbox(DW, DH, DT, 2.5, { px: doorEdge, nx: doorEdge, top: doorEdge, bottom: doorEdge, front: doorFace, back: doorEdge }));
    // the lock case on its inside (behind the keyholes), with its screws
    const lc = rbox(80, 44, 9, 2, lockCaseM); lc.position.set((KX0 + KX1) / 2, KY, -DT - 0.2); dp.add(lc);
    for (const sx of [(KX0 + KX1) / 2 - 30, (KX0 + KX1) / 2 + 30]) { const s = mesh(new THREE.CylinderGeometry(2.2, 2.2, 1.2, 12), nickel); s.rotation.x = Math.PI / 2; s.position.set(sx, KY, -DT - 9.2 - 0.8); dp.add(s); }
    // the number plate: engraved brass, its two screws
    const yr = g.years[i];
    const nt = paintTex(`df-num:${yr}`, 60, 21, (c) => {
      c.fillStyle = "#C7A458"; c.fillRect(0, 0, 60, 21);
      const sh = c.createLinearGradient(0, 0, 60, 21); sh.addColorStop(0, "rgba(255,244,205,0.35)"); sh.addColorStop(1, "rgba(80,55,15,0.3)");
      c.fillStyle = sh; c.fillRect(0, 0, 60, 21);
      for (let k = 0; k < 40; k++) { c.fillStyle = `rgba(90,60,20,${0.05 + 0.05 * hash(k, i, 3)})`; c.fillRect(0, hash(k, i, 1) * 21, 60, 0.4); }
      c.textAlign = "center"; c.textBaseline = "middle";
      fitFont(c, 800, 15.5, yr, 38); track(c, 0.6);
      c.fillStyle = "rgba(255,240,200,0.6)"; c.fillText(yr, 30.5, 11.6);
      c.fillStyle = "#1A1208"; c.fillText(yr, 30, 11); track(c, 0);
      for (const sx of [5, 55]) {
        c.fillStyle = "#8A6C2E"; c.beginPath(); c.arc(sx, 10.5, 2.2, 0, Math.PI * 2); c.fill();
        c.strokeStyle = "rgba(30,20,5,0.8)"; c.lineWidth = 0.6; c.beginPath(); c.moveTo(sx - 1.6, 10.5); c.lineTo(sx + 1.6, 10.5); c.stroke();
      }
    }, 4);
    const npM = new THREE.MeshPhysicalMaterial({ map: nt, metalness: 0.6, roughness: 0.55, envMapIntensity: 0.8 });
    const np = rbox(60, 21, 1.6, 0.6, { px: brass, nx: brass, top: brass, bottom: brass, front: npM, back: brass });
    np.position.set(0, DH / 2 - 24, 1.8);
    dp.add(np);
    // two keyholes: the guard's (left) and the renter's (right)
    const ps: THREE.Group[] = [];
    for (const kx of [KX0, KX1]) {
      const esc = mesh(escG, nickel); esc.rotation.x = Math.PI / 2; esc.position.set(kx, KY, 0.15); dp.add(esc);
      const pg = new THREE.Group(); pg.position.set(kx, KY, 0); dp.add(pg); ps.push(pg);
      const body = mesh(plugG, brass); body.rotation.x = Math.PI / 2; body.position.z = 0.85; pg.add(body);
      const pf = mesh(new THREE.CircleGeometry(6.1, 32), plugFace, false, true); pf.position.z = 1.57; pg.add(pf);
    }
    plugs.push(ps);
    // the pull: a brass bar standing on two roses near the free edge, upright
    const px = DW / 2 - 17;
    for (const sy of [-26, 26]) { const r = mesh(roseG, brassP); r.rotation.x = Math.PI / 2; r.position.set(px, sy - 6, 0.15); dp.add(r); }
    dp.add(wire([[px, -32, 1.0], [px, -32, 7.5], [px, -28.6, 10.9], [px, -22, 11.8], [px, 10, 11.8], [px, 16.6, 10.9], [px, 20, 7.5], [px, 20, 1.0]], 2.3, brassP, false, 64));

    // the renter's key (2034, 2043): seated on the right plug's keyway, it turns with the plug
    if (g.keyed.includes(i)) {
      const kg = new THREE.Group();
      ps[1].add(kg);
      const sh = rbox(2.4, 9, 4, 0.6, keyM); sh.position.set(0, 0, 1.62 + 4); kg.add(sh);
      const neck = rbox(2.4, 6, 6, 0.6, keyM); neck.position.set(0, 0, 1.62 + 4 + 6); kg.add(neck);
      // the bow: a round head with its hole, flat in the keyway's plane (y–z), its thickness across x
      const bs = new THREE.Shape();
      bs.absarc(0, 0, 13, 0, Math.PI * 2, false);
      const hole = new THREE.Path(); hole.absarc(4, 0, 3.2, 0, Math.PI * 2, true); bs.holes.push(hole);
      const bg = new THREE.ExtrudeGeometry(bs, { depth: 1.6, bevelEnabled: true, bevelThickness: 0.4, bevelSize: 0.4, bevelSegments: 2, curveSegments: 32 });
      bg.translate(0, 0, -0.8);
      const bow = mesh(bg, keyM);
      bow.rotation.y = -Math.PI / 2;
      bow.position.set(0, 0, 1.62 + 4 + 6 + 12.4);
      kg.add(bow);
    }
  }

  root.add(makeFloor({ y: g.floor, x0: g.cx - 1150, x1: g.cx + 1150, z0: -500, z1: 700, reflect: 0.14, shadow: 0.55, fadeC: [g.cx, g.z - 60], fadeR: [1000, 460],
    blobs: [{ x: g.cx, z: g.z - CD / 2 + 10, w: CW + 80, d: CD + 90, a: 0.55 }] }));

  return {
    root,
    update: (p) => {
      cab.rotation.y = rad(p.yaw);
      for (let i = 0; i < DF_N; i++) {
        hinges[i].rotation.y = -rad(OPEN_DEG[i]) * (p.open[i] ?? 0);
        for (const pg of plugs[i]) pg.rotation.z = -(Math.PI / 2) * (p.lock[i] ?? 0);
      }
    },
  };
};
