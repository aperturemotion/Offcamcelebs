// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DEAL IN 3-D — "December twenty twenty-three. Ten years with the Los Angeles Dodgers. Baseball's own website called it
// the biggest deal in sports history." On the cream ground, three real objects, modelled from reference (034's realism pass,
// the user 2026-10-23: "really, really focus on the details and make these look as realistic as possible"). Scale: 15 px = 1 cm.
//   · a TENT DESK CALENDAR (House of Doolittle's wire-o tent calendars as the reference): two black-coated chipboard boards
//     leaning into an A, a silver WIRE-O binding of real double loops (one continuous wire: a C-loop out, a C-loop back, a
//     bridge to the next hole) through punched holes in every page; an 18-month stack, DECEMBER 2023 on the front over the
//     thirteen 2024 pages (their edges showing), Jul–Nov 2023 flipped to the back; the page: month header, the Nov 2023 and
//     Jan 2024 minis, a weekday bar and a ruled 6-week grid (1 Dec 2023 is a Friday), the season's days marked, a lifted
//     corner;
//   · a structured fitted BALL CAP in Dodger blue (#005A9C) on a turned walnut cap stand: six pillowed crown panels meeting
//     at creased seams with twin stitch rows, six embroidered eyelets, the covered top button, a pre-curved brim with eight
//     stitch rows, its grey undervisor and piped edge, the sweatband inside, and "LA" in RAISED satin-stitch embroidery (a
//     plain bold face drawn as polygons, extruded, bevelled and bent onto the crown: no team mark). On "Los Angeles
//     Dodgers" the stand's head turns on its foot and brings the cap round to face us;
//   · a LAPTOP (an aluminium unibody 13-inch as the reference, no brand): chamfered base and lid, the hinge barrel, a
//     keyboard of 78 individual keycaps each carrying its legend, the trackpad, a thin bezel with a camera in its notch.
//     On "website" the lid swings open on its hinge and the screen wakes on the league site's article of 12 Dec 2023 (the
//     one document of this place), its headline word for word.
// ★ No team or league logo: "LA" and "MLB.com" are set in plain type. No plate or label anywhere (labels: ≤ 2–3 a film).
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, mesh, lathe, paintTex, roundRect, type Model } from "../stage";
import { M, rbox, rad, font, track, paper, hash } from "../kit029";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { TessellateModifier } from "three/examples/jsm/modifiers/TessellateModifier.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export type DealGeo = {
  floor: number;
  cal: { x: number; z: number; yaw: number }; cap: { x: number; z: number }; lap: { x: number; z: number; yaw: number };
  month: string; year: string; site: string; head: string; date: string; capText: string;
};
/** turn: the cap stand's head, deg (0 = the cap faces front); lid: the laptop's lid, 0 shut … 1 open; lit: the screen
 *  waking (0 → 1); sway: the slow turn of the calendar and the laptop across the place (0 → 1) */
export type DealP = { turn: number; lid: number; lit: number; sway: number };

const TAU = Math.PI * 2;
const V3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

// ── a parametric surface (u, v ∈ [0, 1]), its UVs the parameters ──
const surf = (nu: number, nv: number, fn: (u: number, v: number) => THREE.Vector3) => {
  const P = new Float32Array((nu + 1) * (nv + 1) * 3), UV = new Float32Array((nu + 1) * (nv + 1) * 2);
  let k = 0;
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) {
    const p = fn(i / nu, j / nv);
    P[k * 3] = p.x; P[k * 3 + 1] = p.y; P[k * 3 + 2] = p.z; UV[k * 2] = i / nu; UV[k * 2 + 1] = j / nv; k++;
  }
  const idx: number[] = [];
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(P, 3));
  g.setAttribute("uv", new THREE.BufferAttribute(UV, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
};
/** make a surface's faces point away from (out) or toward (!out) a reference point */
const orient = (g: THREE.BufferGeometry, ref: THREE.Vector3, out = true) => {
  const p = g.attributes.position as THREE.BufferAttribute, n = g.attributes.normal as THREE.BufferAttribute;
  let s = 0;
  for (let i = 0; i < p.count; i += 7) s += (p.getX(i) - ref.x) * n.getX(i) + (p.getY(i) - ref.y) * n.getY(i) + (p.getZ(i) - ref.z) * n.getZ(i);
  if ((s > 0) !== out) {
    const ix = g.index!.array as Uint32Array | Uint16Array;
    for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; }
    g.index!.needsUpdate = true;
    g.computeVertexNormals();
  }
  return g;
};

// ── materials of real stuff ──
/** turned walnut: its grain running along the turning, oiled */
const walnutTex = () => paintTex("dl-walnut", 512, 1024, (c) => {
  c.fillStyle = "#5B3A27"; c.fillRect(0, 0, 512, 1024);
  for (let i = 0; i < 220; i++) {
    const x0 = hash(i, 1, 7) * 540 - 14, a = 0.05 + 0.16 * hash(i, 2, 7), dark = hash(i, 3, 7) > 0.42;
    c.strokeStyle = dark ? `rgba(28,14,6,${a})` : `rgba(160,108,66,${a * 0.6})`;
    c.lineWidth = 0.6 + 3 * hash(i, 4, 7) ** 2;
    const per = 70 + 160 * hash(i, 5, 7), amp = 3 + 9 * hash(i, 6, 7);
    c.beginPath();
    for (let y = 0; y <= 1024; y += 8) { const x = x0 + Math.sin(y / per + i) * amp; if (y === 0) c.moveTo(x, y); else c.lineTo(x, y); }
    c.stroke();
  }
  for (let i = 0; i < 40; i++) { c.fillStyle = `rgba(20,10,4,${0.1 + 0.1 * hash(i, 8, 7)})`; c.fillRect(hash(i, 9, 7) * 512, hash(i, 10, 7) * 1024, 1.2, 6 + 10 * hash(i, 11, 7)); }
}, 1);
const walnut = () => new THREE.MeshPhysicalMaterial({ map: walnutTex(), roughness: 0.48, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.5 });

/** twill weave (the cap's wool-blend): a fine diagonal, as colour and as bump */
const twill = (c: CanvasRenderingContext2D, w: number, h: number, a: number, step = 3.2) => {
  c.save(); c.lineWidth = step * 0.45;
  for (let k = -h; k < w + h; k += step) {
    c.strokeStyle = (Math.round(k / step) & 1) ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
    c.beginPath(); c.moveTo(k, h); c.lineTo(k + h * 0.7, 0); c.stroke();
  }
  c.restore();
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE DESK CALENDAR
// ══════════════════════════════════════════════════════════════════════════════════════════════
const PW = 360, PH = 212;            // a page (24 × 14 cm)
const BOARD_W = 364, BOARD_L = 222, BOARD_T = 2.4, BOARD_TOP = 13;
const LEAN = rad(21);
const RING = 10, WIRE = 0.85, PAIR = 3.6, PITCH = 21.2;
const PAGE_T = 0.45, PAGE_STEP = 0.6;
const N_FRONT = 13, N_BACK = 6;
const HOLE_FROM_TOP = 5.5;
const INK = "#24201C";

/** the weekday (0 Sun) of the 1st and the length of a month */
const monthInfo = (y: number, m: number) => ({ dow: new Date(Date.UTC(y, m, 1)).getUTCDay(), days: new Date(Date.UTC(y, m + 1, 0)).getUTCDate() });

const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
/** the season's days each month marks (2023–24, US desk calendars) */
const NOTES: Record<string, [number, string][]> = {
  "2023-11": [[7, "Hanukkah begins"], [21, "Winter begins"], [25, "Christmas Day"], [26, "Kwanzaa begins"], [31, "New Year's Eve"]],
  "2024-0": [[1, "New Year's Day"], [15, "Martin Luther King Jr. Day"]],
};
const calendarPage = (month: string, year: string, Y: number, Mo: number, holes: number[]) => (c: CanvasRenderingContext2D) => {
  const W = PW, H = PH;
  c.fillStyle = "#FBFAF5"; c.fillRect(0, 0, W, H);
  // the paper's tooth: fibres and specks
  for (let i = 0; i < 2600; i++) {
    c.fillStyle = `rgba(110,98,82,${0.025 + 0.05 * hash(i, 3, 3)})`;
    c.fillRect(hash(i, 1, 3) * W, hash(i, 2, 3) * H, 0.4 + 1.4 * hash(i, 4, 3), 0.35);
  }
  // the punched holes (the wire runs through them; the dark is the board behind)
  for (const hx of holes) {
    c.fillStyle = "#3A3632"; c.beginPath(); c.roundRect(hx + PW / 2 - 3.7, HOLE_FROM_TOP - 2.5, 7.4, 5, 0.9); c.fill();
    c.fillStyle = "rgba(0,0,0,0.35)"; c.fillRect(hx + PW / 2 - 3.7, HOLE_FROM_TOP - 2.5, 7.4, 1.4);
  }
  const ML = 14;
  // the header: the month in heavy caps, the year light beside it
  c.textBaseline = "alphabetic"; c.textAlign = "left";
  c.fillStyle = INK; font(c, 800, 26); track(c, 1); c.fillText(month, ML, 47);
  const mw = c.measureText(month).width;
  c.fillStyle = "#8B8279"; font(c, 300, 26); track(c, 0.4); c.fillText(year, ML + mw + 8, 47);
  track(c, 0);
  // the two mini months, top right: November 2023 and January 2024
  const mini = (x: number, title: string, y: number, m: number) => {
    const { dow, days } = monthInfo(y, m);
    c.fillStyle = INK; font(c, 700, 4.4); track(c, 0.5); c.textAlign = "center"; c.fillText(title, x + 21, 23); track(c, 0);
    font(c, 700, 3.1); c.fillStyle = "#7A7168";
    "SMTWTFS".split("").forEach((d, i) => c.fillText(d, x + 3 + i * 6, 29));
    font(c, 500, 3.3); c.fillStyle = "#3A342E";
    for (let d = 1; d <= days; d++) { const k = d - 1 + dow; c.fillText(String(d), x + 3 + (k % 7) * 6, 34 + Math.floor(k / 7) * 4.2); }
    c.textAlign = "left";
  };
  const pm = Mo === 0 ? [Y - 1, 11] : [Y, Mo - 1], nm = Mo === 11 ? [Y + 1, 0] : [Y, Mo + 1];
  mini(W - ML - 92, `${MONTHS[pm[1]]} ${pm[0]}`, pm[0], pm[1]);
  mini(W - ML - 42, `${MONTHS[nm[1]]} ${nm[0]}`, nm[0], nm[1]);
  // the weekday bar
  const gx = ML, gw = W - 2 * ML, top = 58, barH = 11;
  c.fillStyle = "#2C2824"; c.fillRect(gx, top, gw, barH);
  const cw = gw / 7;
  c.fillStyle = "#F4F1EA"; font(c, 700, 5.6); track(c, 1.1); c.textAlign = "center"; c.textBaseline = "middle";
  ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"].forEach((d, i) => c.fillText(d, gx + cw * (i + 0.5), top + barH / 2 + 0.4));
  track(c, 0);
  // the grid: six weeks, ruled
  const gy = top + barH, gh = H - gy - 9, ch = gh / 6;
  const { dow, days } = monthInfo(Y, Mo);
  // weekends tinted, as printed planners do
  c.fillStyle = "rgba(60,50,40,0.045)";
  c.fillRect(gx, gy, cw, gh); c.fillRect(gx + 6 * cw, gy, cw, gh);
  c.strokeStyle = "rgba(40,34,28,0.5)"; c.lineWidth = 0.45;
  for (let i = 0; i <= 7; i++) { c.beginPath(); c.moveTo(gx + i * cw, gy); c.lineTo(gx + i * cw, gy + gh); c.stroke(); }
  for (let j = 0; j <= 6; j++) { c.beginPath(); c.moveTo(gx, gy + j * ch); c.lineTo(gx + gw, gy + j * ch); c.stroke(); }
  c.textAlign = "left"; c.textBaseline = "alphabetic";
  const num = (d: number, k: number, dim: boolean) => {
    const col = k % 7, row = Math.floor(k / 7);
    c.fillStyle = dim ? "#BDB5AA" : INK; font(c, dim ? 500 : 700, 9.5);
    c.fillText(String(d), gx + col * cw + 3.2, gy + row * ch + 10.2);
  };
  const prev = monthInfo(pm[0], pm[1]).days;
  for (let k = 0; k < dow; k++) num(prev - dow + 1 + k, k, true);
  for (let d = 1; d <= days; d++) num(d, d - 1 + dow, false);
  for (let k = days + dow, d = 1; k < 42; k++, d++) num(d, k, true);
  // the season's days, set small at the cell's foot
  const note = (d: number, t: string) => {
    const k = d - 1 + dow, col = k % 7, row = Math.floor(k / 7);
    c.fillStyle = "#6E655B"; font(c, 500, 4.1, true); c.fillText(t, gx + col * cw + 3.2, gy + (row + 1) * ch - 3);
  };
  for (const [d, t] of NOTES[`${Y}-${Mo}`] ?? []) note(d, t);
  // the printer's line at the foot
  c.fillStyle = "#A39A90"; font(c, 500, 3.6); c.textAlign = "right"; c.fillText("2023 – 2024   18 MONTHS", W - ML, H - 3.2); c.textAlign = "left";
};

/** ★ a page's free corner (bottom right) ROLLED over a cylinder toward the viewer: everything past a fold line D px in from
 *  the corner wraps round radius rc, so the corner shows its back and the page under it (a displacement alone never reads) */
const rollCorner = (p: THREE.Object3D, D: number, rc: number) => {
  const dir = V3(1, -1, 0).normalize(), C = V3(PW / 2, -PH / 2, 0);
  p.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    const a = m.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < a.count; i++) {
      const x = a.getX(i), y = a.getY(i), z = a.getZ(i);
      const t = (x - C.x) * dir.x + (y - C.y) * dir.y + D;
      if (t <= 0) continue;
      const th = t / rc, r = rc - z;   // the back face rolls on the inside of the front
      a.setXYZ(i, x - dir.x * t + dir.x * r * Math.sin(th), y - dir.y * t + dir.y * r * Math.sin(th), rc - r * Math.cos(th));
    }
    a.needsUpdate = true;
    m.geometry.computeVertexNormals(); m.geometry.computeBoundingBox(); m.geometry.computeBoundingSphere();
  });
};

const buildCalendar = (g: DealGeo, FY: number) => {
  const cal = new THREE.Group();
  cal.position.set(g.cal.x, FY, g.cal.z);
  cal.rotation.y = rad(g.cal.yaw);
  cal.userData.obj = "calendar";
  cal.userData.pierces = ["the wire-o binding through every page's punched holes (a designed join)"];
  // the axis of the binding: the boards' lowest corners rest on the floor
  const Ha = BOARD_L * Math.cos(LEAN) + BOARD_T * Math.sin(LEAN) - 0.1;
  const A = V3(0, Ha, 0);
  // the two sides of the A: front (its pages face +z) and back (mirrored)
  const front = new THREE.Group(); front.position.copy(A); front.rotation.x = -LEAN; cal.add(front);
  const back = new THREE.Group(); back.position.copy(A); back.rotation.order = "YXZ"; back.rotation.y = Math.PI; back.rotation.x = -LEAN; cal.add(back);
  // the boards: chipboard coated black, the grey core showing on the cut edges
  const coat = M.satin("#232325", 0.62), core = M.paper("#8F877C");
  for (const side of [front, back]) {
    const b = rbox(BOARD_W, BOARD_L - BOARD_TOP, BOARD_T, 0.8, { px: core, nx: core, top: core, bottom: core, front: coat, back: coat }, 2);
    b.position.set(0, -(BOARD_TOP + BOARD_L) / 2, 0);
    side.add(b);
  }
  // the holes' x positions (pairs of wire through each)
  const nH = Math.floor((PW - 24) / PITCH) + 1;
  const holes = Array.from({ length: nH }, (_, i) => (i - (nH - 1) / 2) * PITCH);
  // the pages: each hangs from the ring at its own offset, so the outer ones ride a little higher (their feet step)
  const faceM = M.print(paintTex(`dl-calpage:${g.month}:${g.year}:${nH}`, PW, PH, calendarPage(g.month, g.year, 2023, 11, holes), 4), 0.86);
  // January 2024, under it: its corner shows where December's lifts
  const janM = M.print(paintTex(`dl-calpage:jan24:${nH}`, PW, PH, calendarPage("JANUARY", "2024", 2024, 0, holes), 2), 0.86);
  const blank = M.paper("#F8F6F0"), edge = M.paper("#EDEAE2");
  const page = (side: THREE.Group, k: number, top: boolean, under = false) => {
    const o = (k + 1) * PAGE_STEP;                     // the page's front face, off the board
    const oc = o - PAGE_T / 2;
    const sH = Math.sqrt(RING * RING - oc * oc);        // where the ring crosses this page's plane
    const sTop = sH - HOLE_FROM_TOP;
    // every page bows alike down its height (so the stack keeps its spacing, and the top edge stays true to the wire's
    // holes); the top one lifts at its free corner
    const p = paper({ w: PW, h: PH, t: PAGE_T, face: top ? faceM : under ? janM : blank, back: blank, edge, seg: top ? 140 : under ? 32 : 14,
      bowY: 1.8 });
    if (top) rollCorner(p, 30, 13);
    p.position.set(0, -(sTop + PH / 2), o);
    return p;
  };
  // the pages nobody reads (the rest of 2024 under January; Jul–Nov 2023 flipped over the back) are each one stack: their
  // faces, backs and edges merged per side, so the stack is drawn and audited as the sheets of one block
  const stack = (side: THREE.Group, pages: THREE.Object3D[]) => {
    const by: THREE.BufferGeometry[][] = [[], [], []], mats: THREE.Material[] = [];
    for (const pg of pages) {
      pg.updateMatrix();
      pg.children.forEach((c, i) => { const m = c as THREE.Mesh; by[i].push(m.geometry.clone().applyMatrix4(pg.matrix)); mats[i] = m.material as THREE.Material; });
    }
    const grp = new THREE.Group();
    grp.userData.unit = true;
    by.forEach((gs, i) => grp.add(mesh(mergeGeometries(gs)!, mats[i])));
    side.add(grp);
  };
  stack(front, Array.from({ length: N_FRONT - 2 }, (_, k) => page(front, k, false)));
  front.add(page(front, N_FRONT - 2, false, true), page(front, N_FRONT - 1, true));
  stack(back, Array.from({ length: N_BACK }, (_, k) => page(back, k, false)));
  // the wire-o: one continuous wire, each hole taking a pair of C-loops joined by a bridge, round the axis
  const pts: THREE.Vector3[] = [];
  const P = (x: number, f: number) => V3(x, Ha - RING * Math.cos(f), RING * Math.sin(f));
  const d = 0.16, N = 30;
  holes.forEach((xc) => {
    const x1 = xc - PAIR / 2, x2 = xc + PAIR / 2;
    for (let i = 0; i <= N; i++) pts.push(P(x1, d + ((TAU - 2 * d) * i) / N));
    for (let i = 0; i <= N; i++) pts.push(P(x2, TAU - d - ((TAU - 2 * d) * i) / N));
  });
  const curve = new THREE.CatmullRomCurve3(pts, false, "centripetal");
  const wireM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#D9DDE2"), metalness: 1, roughness: 0.22, envMapIntensity: 1.1 });
  cal.add(mesh(new THREE.TubeGeometry(curve, nH * 2 * N * 3, WIRE, 7, false), wireM));
  return { cal, footprint: { w: PW + 40, d: 2 * BOARD_L * Math.sin(LEAN) + 30 } };
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE CAP AND ITS STAND
// ══════════════════════════════════════════════════════════════════════════════════════════════
const CB = 126, CA = 150, CH = 160, ZA = -10;   // the crown: half-width, half-length, height; the apex set back
const SHELL = 3;                                // the crown's thickness (fabric over buckram)
const BRIM = 112, BRIM_A = rad(70), BRIM_T = 4, BRIM_P = 0.15;
const YB = 330;                                 // the crown's base above the floor, on its stand (22 cm: a display stand's height)
const BLUE = "#005A9C";
/** the fabric as printed into its texture: the cap's blue as it RENDERS under the key (judged on the frames) */
const BLUE_T = "#00447C";

/** the crown's raw dome at azimuth phi (0 = the front, +x round) and height t (0 base … 1 apex) */
const crownRaw = (phi: number, t: number, shrink = 0) => {
  const wf = (1 + Math.cos(phi)) / 2;
  const th = Math.min(1, t) * (Math.PI / 2);
  const p = 1 - 0.68 * wf ** 1.3, q = 0.98 - 0.36 * wf;
  const rho = Math.pow(Math.max(0, Math.cos(th)), p);
  const y = (CH - shrink) * Math.pow(Math.sin(th), q);
  return { x: rho * (CB - shrink) * Math.sin(phi), y, z: rho * (CA - shrink) * Math.cos(phi) + ZA * (1 - rho), rho };
};
/** the panels' pillowing: each of the six panels swells between its seams (the seams stay creased) */
const puff = (phi: number, t: number) => {
  const seg = Math.PI / 3, f = ((((phi % seg) + seg) % seg) / seg);
  const front = (1 + Math.cos(phi)) / 2;
  return (4.6 - 2.2 * front) * Math.pow(Math.sin(Math.PI * f), 0.7) * Math.pow(Math.sin(Math.PI * Math.min(1, t * 1.04)), 0.6);
};
const crownOut = (phi: number, t: number) => {
  const r = crownRaw(phi, t);
  const n = V3(r.x / (CB * CB), r.y / (CH * CH), (r.z - ZA * (1 - r.rho)) / (CA * CA)).normalize();
  return V3(r.x, r.y, r.z).addScaledVector(n, puff(phi, t));
};
const crownIn = (phi: number, t: number) => { const r = crownRaw(phi, t, SHELL); return V3(r.x, r.y, r.z); };
/** the outward normal of the outer crown */
const crownN = (phi: number, t: number) => {
  const e = 1e-3;
  const a = crownOut(phi + e, t).sub(crownOut(phi - e, t));
  const b = crownOut(phi, Math.min(0.999, t + e)).sub(crownOut(phi, Math.max(0, t - e)));
  const n = a.cross(b).normalize();
  const p = crownOut(phi, t);
  if (n.dot(V3(p.x, p.y - CH * 0.3, p.z - ZA)) < 0) n.negate();
  return n;
};
const SEAMS = [0, 1, 2, 3, 4, 5].map((k) => (k * Math.PI) / 3);
/** texture u → azimuth: u 0 is the back seam (so the surface's own seam sits on a real one) */
const uPhi = (u: number) => Math.PI + TAU * u;

const crownTextures = () => {
  const TW = 2048, TH = 512;
  // texels per px of circumference along a seam at height t (to set stitch offsets)
  const tpp = (phi: number, t: number) => { const r = crownRaw(phi, t); return TW / Math.max(8, TAU * r.rho * Math.hypot(CB * Math.cos(phi), CA * Math.sin(phi))); };
  const seamU = (phi: number) => ((((phi - Math.PI) / TAU) % 1) + 1) % 1;
  const draw = (c: CanvasRenderingContext2D, bump: boolean) => {
    c.fillStyle = bump ? "#808080" : BLUE_T; c.fillRect(0, 0, TW, TH);
    twill(c, TW, TH, bump ? 0.22 : 0.035, 3.4);
    for (const ph of SEAMS) {
      const u0 = seamU(ph) * TW;
      for (let y = 0; y < TH; y++) {
        const t = 1 - y / TH;
        if (t > 0.965) continue;
        const k = tpp(ph, t);
        for (const uu of [u0, u0 - TW, u0 + TW]) {
          c.fillStyle = bump ? "rgba(0,0,0,0.9)" : "rgba(0,10,28,0.75)";
          c.fillRect(uu - 1.4, y, 2.8, 1);
          if (t < 0.93 && (Math.floor(y / 3.2) % 2 === 0)) {
            c.fillStyle = bump ? "rgba(255,255,255,0.95)" : "rgba(120,170,220,0.6)";
            for (const s of [-1, 1]) c.fillRect(uu + s * 2.6 * k - 1.1, y, 2.2, 1);
          }
        }
      }
    }
    // the stitch row round the base (the sweatband sewn in), 5 px up
    const yb = TH * (1 - 0.034);
    c.fillStyle = bump ? "rgba(255,255,255,0.8)" : "rgba(140,190,235,0.45)";
    for (let x = 0; x < TW; x += 7) c.fillRect(x, yb - 0.8, 4.2, 1.6);
    // the eyelets' dark holes (their embroidered rings are solid, below)
    for (let k = 0; k < 6; k++) {
      const ph = Math.PI / 6 + (k * Math.PI) / 3;
      const x = seamU(ph) * TW, y = TH * (1 - 0.7);
      c.fillStyle = bump ? "rgba(0,0,0,0.9)" : "#0A1A2C";
      c.beginPath(); c.ellipse(x, y, 2.3 * tpp(ph, 0.7), (2.3 * TH) / 250, 0, 0, TAU); c.fill();
    }
  };
  const map = paintTex("dl-crown-map", TW, TH, (c) => draw(c, false), 1);
  const bump = paintTex("dl-crown-bump", TW, TH, (c) => draw(c, true), 1);
  bump.colorSpace = THREE.NoColorSpace;
  return { map, bump };
};

/** "LA" as polygons in a plain bold face (cap height capH) */
const LA_SHAPES = (capH: number) => {
  const sc = (pts: [number, number][], dx: number) => pts.map(([x, y]) => new THREE.Vector2((x + dx) * capH, y * capH));
  const L = new THREE.Shape(sc([[0, 0], [0.6, 0], [0.6, 0.19], [0.21, 0.19], [0.21, 1], [0, 1]], 0));
  const ax = 0.68;
  const A = new THREE.Shape(sc([[0, 0], [0.23, 0], [0.29, 0.2], [0.55, 0.2], [0.61, 0], [0.84, 0], [0.53, 1], [0.31, 1]], ax));
  A.holes.push(new THREE.Path(sc([[0.345, 0.37], [0.42, 0.613], [0.495, 0.37]], ax)));
  return { shapes: [L, A], width: (ax + 0.84) * capH };
};

const buildCap = () => {
  const cap = new THREE.Group();
  cap.userData.obj = "cap";
  const { map, bump } = crownTextures();
  const fabric = new THREE.MeshPhysicalMaterial({ map, bumpMap: bump, bumpScale: 1.6, roughness: 0.88, sheen: 0.25, sheenRoughness: 0.6,
    sheenColor: new THREE.Color("#3D74A8"), envMapIntensity: 0.6 });
  const lining = new THREE.MeshStandardMaterial({ color: new THREE.Color("#0B3E6E"), roughness: 0.92, side: THREE.DoubleSide });
  const sweat = new THREE.MeshStandardMaterial({ color: new THREE.Color("#CFCBC2"), roughness: 0.9, side: THREE.DoubleSide });
  const centre = V3(0, CH * 0.3, ZA);
  // the crown: outer shell, inner shell, and the base edge (the sweatband's taped edge)
  cap.add(mesh(orient(surf(192, 44, (u, v) => crownOut(uPhi(u), v)), centre, true), fabric));
  cap.add(mesh(orient(surf(96, 20, (u, v) => crownIn(uPhi(u), v)), centre, false), lining));
  cap.add(mesh(surf(360, 1, (u, v) => (v === 0 ? crownOut(uPhi(u), 0) : crownIn(uPhi(u), 0))), sweat));
  // the sweatband inside the base, 2.3 cm deep
  const sbH = 34;
  const tAt = (phi: number, y: number) => { const q = 0.98 - 0.36 * ((1 + Math.cos(phi)) / 2); return (2 / Math.PI) * Math.asin(Math.min(1, Math.pow(y / (CH - SHELL), 1 / q))); };
  cap.add(mesh(surf(180, 3, (u, v) => {
    const ph = uPhi(u), p = crownIn(ph, tAt(ph, 0.4 + v * sbH));
    const k = 1 - 0.7 / Math.max(40, Math.hypot(p.x, p.z - ZA));
    return V3(p.x * k, p.y, ZA + (p.z - ZA) * k);
  }), sweat));
  // the button: fabric over a disc, seated on the apex
  const top = crownOut(0, 1);
  const btn = mesh(lathe([[0, 0], [10.5, 0], [11.2, 1.3], [10.4, 3.6], [7.2, 5.4], [3, 6.1], [0, 6.2]], 40), fabric);
  btn.position.set(top.x, top.y - 1.1, top.z);
  cap.add(btn);
  // the six eyelets: embroidered rings, one high on each panel
  const ringM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#0A4C88"), roughness: 0.6, sheen: 0.4, sheenColor: new THREE.Color("#6E9FCC") });
  const ringG = new THREE.TorusGeometry(2.9, 1.0, 8, 22);
  for (let k = 0; k < 6; k++) {
    const ph = Math.PI / 6 + (k * Math.PI) / 3;
    const p = crownOut(ph, 0.7), n = crownN(ph, 0.7);
    const r = mesh(ringG, ringM);
    r.position.copy(p).addScaledVector(n, 0.55);
    r.lookAt(p.clone().addScaledVector(n, 10));
    cap.add(r);
  }
  // ── "LA": raised satin-stitch embroidery, extruded and bent onto the front panels ──
  const capH = 82;
  const { shapes, width } = LA_SHAPES(capH);
  let lg: THREE.BufferGeometry = new THREE.ExtrudeGeometry(shapes, { depth: 0.6, bevelEnabled: true, bevelThickness: 1.05, bevelSize: 1.15,
    bevelOffset: -1.15, bevelSegments: 3, curveSegments: 4 });
  lg.translate(-width / 2, 0, 1.05);
  lg = new TessellateModifier(6, 6).modify(lg.index ? lg.toNonIndexed() : lg);
  // the front meridian's arc length → t
  const ts: number[] = [], ss: number[] = [];
  let acc = 0, prev = crownOut(0, 0);
  for (let i = 0; i <= 600; i++) { const t = i / 600, p = crownOut(0, t); acc += p.distanceTo(prev); prev = p; ts.push(t); ss.push(acc); }
  const tOf = (s: number) => { let i = 1; while (i < ss.length - 1 && ss[i] < s) i++; const a = ss[i - 1], b = ss[i]; return ts[i - 1] + ((ts[i] - ts[i - 1]) * (s - a)) / Math.max(1e-6, b - a); };
  const S0 = 24;   // the letters' foot, along the front from the base
  const lp = lg.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < lp.count; i++) {
    const X = lp.getX(i), Y = lp.getY(i), Z = lp.getZ(i);
    const t = tOf(S0 + Y), rho = crownRaw(0, t).rho;
    const ph = X / (rho * CB);
    const b = crownOut(ph, t).addScaledVector(crownN(ph, t), Z + 0.15);
    lp.setXYZ(i, b.x, b.y, b.z);
  }
  lg.computeVertexNormals();
  // the satin stitch (its UVs are the shape's own px, so the thread keeps one size)
  const satin = paintTex("dl-satin", 64, 64, (c) => {
    c.fillStyle = "#EDEBE5"; c.fillRect(0, 0, 64, 64);
    c.lineWidth = 2.2;
    for (let k = -64; k < 128; k += 4) { c.strokeStyle = (k / 4) % 2 ? "rgba(255,255,255,0.7)" : "rgba(150,148,140,0.35)"; c.beginPath(); c.moveTo(k, 64); c.lineTo(k + 40, 0); c.stroke(); }
  }, 2);
  satin.wrapS = satin.wrapT = THREE.RepeatWrapping; satin.repeat.set(1 / 7, 1 / 7);
  const thread = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#F2F1EC"), map: satin, bumpMap: satin, bumpScale: 0.6, roughness: 0.5,
    sheen: 1, sheenRoughness: 0.32, sheenColor: new THREE.Color("#FFFFFF"), envMapIntensity: 0.5 });
  cap.add(mesh(lg, thread));
  // ── the brim: a pre-curved bill, its top and grey undervisor, a piped edge; eight stitch rows ──
  const bw = (s: number) => BRIM * Math.pow(Math.max(0, 1 - Math.abs(s) ** 2.3), 0.55);
  const brimTop = (s: number, r: number) => {
    const a = s * BRIM_A;
    const ix = CB * Math.sin(a) * 0.975, iz = CA * Math.cos(a) * 0.975;
    let dx = Math.sin(a) * 0.62, dz = Math.cos(a); const l = Math.hypot(dx, dz); dx /= l; dz /= l;
    const w = bw(s) * r, x = ix + dx * w, z = iz + dz * w;
    return V3(x, 3.6 - w * (BRIM_P + 0.52 * (x / 140) ** 2), z);
  };
  const brimTex = (bumpy: boolean) => paintTex(`dl-brim:${bumpy}`, 1024, 256, (c) => {
    c.fillStyle = bumpy ? "#808080" : BLUE_T; c.fillRect(0, 0, 1024, 256);
    twill(c, 1024, 256, bumpy ? 0.2 : 0.03, 3.2);
    c.strokeStyle = bumpy ? "rgba(255,255,255,0.95)" : "rgba(120,170,220,0.6)"; c.lineWidth = 1.8; c.setLineDash([5, 3]);
    for (let i = 0; i < 8; i++) {
      const dd = 4.5 + 6.2 * i;
      c.beginPath(); let on = false;
      for (let x = 0; x <= 1024; x += 2) {
        const s = (x / 1024) * 2 - 1, r = 1 - dd / Math.max(1e-3, bw(s));
        if (r < 0.06) { on = false; continue; }
        const y = (1 - r) * 256;
        if (!on) { c.moveTo(x, y); on = true; } else c.lineTo(x, y);
      }
      c.stroke();
    }
    c.setLineDash([]);
  }, 1);
  const bb = brimTex(true); bb.colorSpace = THREE.NoColorSpace;
  const brimM = new THREE.MeshPhysicalMaterial({ map: brimTex(false), bumpMap: bb, bumpScale: 1.6, roughness: 0.86, sheen: 0.25, sheenRoughness: 0.6, sheenColor: new THREE.Color("#3D74A8"), envMapIntensity: 0.6 });
  const underM = new THREE.MeshStandardMaterial({ color: new THREE.Color("#5D676B"), roughness: 0.92 });
  cap.add(mesh(orient(surf(96, 24, (u, v) => brimTop(u * 2 - 1, v)), V3(0, -60, 60), true), brimM));
  cap.add(mesh(orient(surf(96, 24, (u, v) => brimTop(u * 2 - 1, v).add(V3(0, -BRIM_T, 0))), V3(0, 60, 60), true), underM));
  const outward = (s: number) => {
    const e = 1e-3, a = brimTop(s + e, 1).sub(brimTop(s - e, 1));
    const o = V3(a.z, 0, -a.x).normalize();
    if (o.dot(V3(Math.sin(s * BRIM_A), 0, Math.cos(s * BRIM_A))) < 0) o.negate();
    return o;
  };
  cap.add(mesh(orient(surf(120, 6, (u, v) => {
    const s = u * 2 - 1;
    return brimTop(s, 1).addScaledVector(outward(s), (BRIM_T / 2) * 0.85 * Math.sin(Math.PI * v) * Math.min(1, bw(s) / 8)).add(V3(0, -BRIM_T * v, 0));
  }), V3(0, -6, CA * 0.9), true), brimM));
  return cap;
};

/** the cap stand: a turned walnut foot (still) and its head on a column (turning), the head an oval form inside the crown */
const buildStand = () => {
  const wood = walnut();
  // the foot is turned from a plank: its grain runs straight across the top (planar UVs), not round it
  const footG = lathe([[0, 0], [90, 0], [92, 1.6], [92, 9], [90, 11.5], [84, 13], [82, 16], [84, 19.5], [79, 23], [60, 27], [46, 29.4], [0, 30]], 96);
  const fp = footG.attributes.position as THREE.BufferAttribute, fuv = footG.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < fp.count; i++) fuv.setXY(i, fp.getX(i) / 230 + 0.5, (fp.getZ(i) + fp.getY(i) * 0.6) / 460 + 0.5);
  const foot = mesh(footG, wood);
  foot.userData.obj = "stand foot";
  // the head form: an oval dome sized so it carries the crown at its top, under a px below the lining
  const ex = 90, ey = 70, ez = 106, zc = ZA * 0.5;
  const inner: THREE.Vector3[] = [];
  for (let i = 0; i < 96; i++) for (let j = 4; j <= 40; j++) { const p = crownIn((i / 96) * TAU, j / 40); inner.push(p.add(V3(0, YB, 0))); }
  const qmin = (yc: number) => Math.min(...inner.map((p) => Math.hypot(p.x / ex, (p.y - yc) / ey, (p.z - zc) / ez)));
  let lo = YB, hi = YB + CH;
  for (let k = 0; k < 40; k++) { const m = (lo + hi) / 2; if (qmin(m) >= 1.012) lo = m; else hi = m; }
  const yc = lo;
  const prof: [number, number][] = [[0, -50], [16, -50]];
  for (let i = 0; i <= 28; i++) { const th = -0.75 + (i / 28) * (Math.PI / 2 + 0.75); prof.push([ex * Math.cos(th), ey * Math.sin(th)]); }
  prof[prof.length - 1] = [0, ey];
  const head = mesh(lathe(prof, 96), wood);
  head.scale.set(1, 1, ez / ex);
  head.position.set(0, yc, zc);
  const colTop = yc - 44;
  // the column: a slender turned shaft (a vase foot, a bead at mid height, a collar under the head), as display stands are
  const mid = Math.round((70 + colTop) / 2);
  const column = mesh(lathe([[0, 30.05], [38, 30.05], [39, 32], [38, 35.5], [29, 39], [22.5, 45], [20.5, 51], [22.5, 55], [19, 60], [14.5, 70],
    [12, 92], [11.4, mid - 12], [13.2, mid - 7], [15.6, mid - 3], [15.6, mid + 3], [13.2, mid + 7], [11.4, mid + 12],
    [11.6, colTop - 34], [14.5, colTop - 29], [17.5, colTop - 24], [18.5, colTop - 19], [16.5, colTop - 14], [14, colTop - 9], [14, colTop], [0, colTop]], 72), wood);
  const turn = new THREE.Group();
  const st = new THREE.Group();
  st.userData.obj = "stand";
  st.add(column, head);
  turn.add(st);
  return { foot, turn };
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE LAPTOP
// ══════════════════════════════════════════════════════════════════════════════════════════════
const LW = 456, LD = 322, LHB = 16, LR = 14;       // the base: 30.4 × 21.5 cm, 1.07 cm
const LIDH = 312, LIDT = 5.5;
const HINGE_R = 5.6;
const KP = 27, KGAP = 3, KH = 2.4, KUP = 1.8;        // key pitch, gap, keycap height, how far a key stands proud
const KB_W = 14.5 * KP;

/** a rounded slab extruded with a small chamfer: in x–z (a base, height h, y 0…h) */
const slabXZ = (w: number, d: number, h: number, r: number, b: number) => {
  const g = new THREE.ExtrudeGeometry(roundRect(w, d, r), { depth: h - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 1, curveSegments: 10 });
  g.translate(0, 0, b);
  g.rotateX(-Math.PI / 2);
  return g;
};
/** …or in x–y (a lid, thickness t centred on z 0) */
const slabXY = (w: number, h: number, t: number, r: number, b: number) => {
  const g = new THREE.ExtrudeGeometry(roundRect(w, h, r), { depth: t - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 1, curveSegments: 10 });
  g.translate(0, 0, b - t / 2);
  return g;
};

type Key = { x: number; z: number; w: number; d: number; kind: string; a?: string; b?: string };
const keyLayout = (z0: number): Key[] => {
  const out: Key[] = [];
  const row = (z: number, d: number, keys: [number, string, string?, string?][]) => {
    let x = -KB_W / 2;
    for (const [u, kind, a, b] of keys) { out.push({ x: x + (u * KP) / 2, z, w: u * KP - KGAP, d, kind, a, b }); x += u * KP; }
  };
  row(z0 + 6.5, 13, [[1.5, "fn", "esc"], ...Array.from({ length: 12 }, (_, i) => [1, "fn", `F${i + 1}`] as [number, string, string]), [1, "touch"]]);
  const r = (i: number) => z0 + 16 + i * KP + (KP - KGAP) / 2;
  const L = (s: string) => [1, "letter", s] as [number, string, string];
  row(r(0), KP - KGAP, [[1, "pair", "~", "`"], [1, "pair", "!", "1"], [1, "pair", "@", "2"], [1, "pair", "#", "3"], [1, "pair", "$", "4"], [1, "pair", "%", "5"],
    [1, "pair", "^", "6"], [1, "pair", "&", "7"], [1, "pair", "*", "8"], [1, "pair", "(", "9"], [1, "pair", ")", "0"], [1, "pair", "_", "–"], [1, "pair", "+", "="], [1.5, "modR", "delete"]]);
  row(r(1), KP - KGAP, [[1.5, "modL", "tab"], ..."QWERTYUIOP".split("").map(L), [1, "pair", "{", "["], [1, "pair", "}", "]"], [1, "pair", "|", "\\"]]);
  row(r(2), KP - KGAP, [[1.8, "caps", "caps lock"], ..."ASDFGHJKL".split("").map(L), [1, "pair", ":", ";"], [1, "pair", "\"", "'"], [1.7, "modR", "return"]]);
  row(r(3), KP - KGAP, [[2.3, "modL", "shift"], ..."ZXCVBNM".split("").map(L), [1, "pair", "<", ","], [1, "pair", ">", "."], [1, "pair", "?", "/"], [2.2, "modR", "shift"]]);
  // the bottom row: fn, control, option, command, the bar, command, option, and the arrows (up and down half-height)
  const z4 = r(4);
  let x = -KB_W / 2;
  const put = (u: number, kind: string, a?: string, b?: string) => { out.push({ x: x + (u * KP) / 2, z: z4, w: u * KP - KGAP, d: KP - KGAP, kind, a, b }); x += u * KP; };
  put(1, "fnkey", "fn"); put(1, "mod", "control", "ctl"); put(1, "mod", "option", "opt"); put(1.25, "mod", "command", "cmd"); put(5, "space");
  put(1.25, "mod", "command", "cmd"); put(1, "mod", "option", "opt"); put(1, "arrow", "L");
  const hd = (KP - KGAP - 2) / 2;
  out.push({ x: x + KP / 2, z: z4 - (hd + 2) / 2, w: KP - KGAP, d: hd, kind: "arrow", a: "U" });
  out.push({ x: x + KP / 2, z: z4 + (hd + 2) / 2, w: KP - KGAP, d: hd, kind: "arrow", a: "D" });
  x += KP;
  put(1, "arrow", "R");
  return out;
};

/** the keys' legends, painted over the keyboard's whole area (each key reads its own patch: planar UVs from the top) */
const legendTex = (keys: Key[], x0: number, z0: number, W: number, D: number) => paintTex("dl-keys", W, D, (c) => {
  c.fillStyle = "#18181A"; c.fillRect(0, 0, W, D);
  const ink = "rgba(236,236,236,0.92)";
  const sym = (s: string, cx: number, cy: number, k: number) => {
    // the modifier symbols, drawn (no face carries them reliably)
    c.save(); c.translate(cx, cy); c.strokeStyle = ink; c.fillStyle = ink; c.lineWidth = 0.42 * k; c.lineCap = "round"; c.lineJoin = "round";
    if (s === "cmd") {
      const a = 0.9 * k, r = 0.75 * k;
      c.beginPath(); c.rect(-a, -a, 2 * a, 2 * a); c.stroke();
      for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { c.beginPath(); c.arc(sx * (a + r * 0.7), sy * (a + r * 0.7), r, 0, TAU); c.stroke(); }
    } else if (s === "opt") {
      c.beginPath(); c.moveTo(-2 * k, -1 * k); c.lineTo(-0.8 * k, -1 * k); c.lineTo(0.8 * k, 1 * k); c.lineTo(2 * k, 1 * k); c.moveTo(0.4 * k, -1 * k); c.lineTo(2 * k, -1 * k); c.stroke();
    } else if (s === "ctl") {
      c.beginPath(); c.moveTo(-1.2 * k, 0.5 * k); c.lineTo(0, -0.8 * k); c.lineTo(1.2 * k, 0.5 * k); c.stroke();
    }
    c.restore();
  };
  const tri = (dir: string, cx: number, cy: number, s: number) => {
    c.fillStyle = ink; c.beginPath();
    if (dir === "U") { c.moveTo(cx, cy - s); c.lineTo(cx + s, cy + s * 0.7); c.lineTo(cx - s, cy + s * 0.7); }
    if (dir === "D") { c.moveTo(cx, cy + s); c.lineTo(cx + s, cy - s * 0.7); c.lineTo(cx - s, cy - s * 0.7); }
    if (dir === "L") { c.moveTo(cx - s, cy); c.lineTo(cx + s * 0.7, cy - s); c.lineTo(cx + s * 0.7, cy + s); }
    if (dir === "R") { c.moveTo(cx + s, cy); c.lineTo(cx - s * 0.7, cy - s); c.lineTo(cx - s * 0.7, cy + s); }
    c.closePath(); c.fill();
  };
  for (const k of keys) {
    const L = k.x - k.w / 2 - x0, T = k.z - k.d / 2 - z0, R = L + k.w, B = T + k.d, cx = (L + R) / 2, cy = (T + B) / 2;
    c.fillStyle = "#1E1E21"; c.beginPath(); c.roundRect(L + 0.6, T + 0.6, k.w - 1.2, k.d - 1.2, 2.2); c.fill();
    c.fillStyle = ink; c.textBaseline = "middle"; c.textAlign = "center";
    switch (k.kind) {
      case "letter": font(c, 500, 8.6); c.fillText(k.a!, cx, cy + 0.3); break;
      case "pair": font(c, 500, 6.2); c.fillText(k.a!, cx, cy - 4.4); c.fillText(k.b!, cx, cy + 4.6); break;
      case "fn": font(c, 500, 4.6); c.fillText(k.a!, cx, cy + 0.3); break;
      case "touch": c.strokeStyle = "rgba(120,120,124,0.6)"; c.lineWidth = 0.5; c.beginPath(); c.roundRect(L + 2, T + 1.6, k.w - 4, k.d - 3.2, 2); c.stroke(); break;
      case "modL": font(c, 500, 4.8); c.textAlign = "left"; c.fillText(k.a!, L + 3, B - 4.2); break;
      case "modR": font(c, 500, 4.8); c.textAlign = "right"; c.fillText(k.a!, R - 3, B - 4.2); break;
      case "caps": font(c, 500, 4.8); c.textAlign = "left"; c.fillText(k.a!, L + 3, B - 4.2);
        c.fillStyle = "rgba(90,90,94,0.9)"; c.beginPath(); c.arc(L + 4.5, T + 4.5, 1.2, 0, TAU); c.fill(); break;
      case "fnkey": font(c, 500, 4.8); c.textAlign = "left"; c.fillText("fn", L + 3, T + 5);
        c.strokeStyle = ink; c.lineWidth = 0.4; c.beginPath(); c.arc(L + 6, B - 6, 2.4, 0, TAU); c.moveTo(L + 3.6, B - 6); c.lineTo(L + 8.4, B - 6);
        c.ellipse(L + 6, B - 6, 1.1, 2.4, 0, 0, TAU); c.stroke(); break;
      case "mod": font(c, 500, 4.2);
        if (k.a === "control") { c.textAlign = "right"; c.fillText("control", R - 2.6, B - 4.2); sym("ctl", R - 5, T + 5, 1.4); }
        else { c.textAlign = "center"; c.fillText(k.a!, cx, B - 4.2); sym(k.b!, cx, T + 6.5, 1.35); }
        break;
      case "arrow": tri(k.a!, cx, cy, k.d < 15 ? 1.7 : 2.1); break;
    }
  }
}, 5);

/** the league site's article, as the screen shows it (12 Dec 2023, its headline word for word) */
const SW = 432, SH = 272;
const screenTex = (g: DealGeo) => paintTex(`dl-screen:${g.head}`, SW, SH, (c) => {
  c.fillStyle = "#FFFFFF"; c.fillRect(0, 0, SW, SH);
  // the menu bar (the notch sits in it), its clock on the article's own day: Tue 12 Dec 2023
  c.fillStyle = "#EDEDF0"; c.fillRect(0, 0, SW, 9);
  c.fillStyle = "#2A2A2E"; font(c, 600, 4.6); c.textBaseline = "middle"; c.textAlign = "left";
  let mx = 10;
  for (const w of ["File", "Edit", "View", "History", "Bookmarks", "Window", "Help"]) { c.fillText(w, mx, 4.7); mx += c.measureText(w).width + 7; }
  c.textAlign = "right"; c.fillText("Tue Dec 12  9:41 AM", SW - 10, 4.7);
  // the browser's toolbar: three window dots, the back arrows, the address field
  c.fillStyle = "#F6F6F7"; c.fillRect(0, 9, SW, 20);
  c.fillStyle = "#D8D8DC"; c.fillRect(0, 28.6, SW, 0.6);
  ([["#FF5F57", 10], ["#FEBC2E", 19], ["#28C840", 28]] as [string, number][]).forEach(([col, x]) => { c.fillStyle = col; c.beginPath(); c.arc(x, 19, 2.9, 0, TAU); c.fill(); });
  c.strokeStyle = "#8A8A90"; c.lineWidth = 0.8; c.beginPath(); c.moveTo(49, 16.5); c.lineTo(46.5, 19); c.lineTo(49, 21.5); c.moveTo(57, 16.5); c.lineTo(59.5, 19); c.lineTo(57, 21.5); c.stroke();
  c.fillStyle = "#E6E6EA"; c.beginPath(); c.roundRect(130, 13, 172, 12, 3.5); c.fill();
  c.fillStyle = "#3A3A40"; font(c, 500, 5.6); c.textAlign = "center"; c.fillText("mlb.com/news", 216, 19.4);
  c.strokeStyle = "#8A8A90"; c.lineWidth = 0.6; c.beginPath(); c.roundRect(186, 17.4, 3.4, 3.6, 0.6); c.stroke(); c.beginPath(); c.arc(187.7, 17.4, 1.2, Math.PI, 0); c.stroke();
  // the site's bar
  c.fillStyle = "#041E42"; c.fillRect(0, 29.2, SW, 20);
  c.fillStyle = "#FFFFFF"; font(c, 800, 10.5); c.textAlign = "left"; c.fillText(g.site, 14, 39.6);
  font(c, 600, 5.4); c.fillStyle = "rgba(255,255,255,0.86)";
  let nx = 84;
  for (const w of ["News", "Watch", "Scores", "Schedule", "Standings", "Stats", "Tickets", "Shop"]) { c.fillText(w, nx, 39.6); nx += c.measureText(w).width + 11; }
  c.strokeStyle = "rgba(255,255,255,0.8)"; c.lineWidth = 0.8; c.beginPath(); c.arc(SW - 18, 38.8, 2.6, 0, TAU); c.moveTo(SW - 16.2, 40.7); c.lineTo(SW - 14, 43); c.stroke();
  // the article: kicker, the headline (word for word), byline and date, the lead photo, the first paragraph
  const X = 40, CW = SW - 80;
  c.fillStyle = "#005A9C"; font(c, 800, 5.4); track(c, 0.8); c.fillText("DODGERS", X, 62); track(c, 0);
  c.fillStyle = "#101114"; font(c, 800, 21);
  const words = g.head.split(" "), lines: string[] = [];
  let cur = "";
  for (const w of words) { const t = cur ? cur + " " + w : w; if (c.measureText(t).width > CW) { lines.push(cur); cur = w; } else cur = t; }
  lines.push(cur);
  c.textBaseline = "alphabetic";
  lines.forEach((l, i) => c.fillText(l, X, 87 + i * 24));
  const yb = 87 + (lines.length - 1) * 24 + 15;
  c.fillStyle = "#2B2D33"; font(c, 700, 5.6); c.fillText("Sarah Wexler", X, yb);
  const bwid = c.measureText("Sarah Wexler").width;
  c.fillStyle = "#73767E"; font(c, 500, 5.6); c.fillText(g.date.charAt(0) + g.date.slice(1).toLowerCase(), X + bwid + 8, yb);
  // the lead photo: a ballpark at dusk, under the lights
  const py = yb + 8, ph = 92;
  const sky = c.createLinearGradient(0, py, 0, py + ph * 0.5);
  sky.addColorStop(0, "#1B2F57"); sky.addColorStop(1, "#5B7DB0");
  c.fillStyle = sky; c.fillRect(X, py, CW, ph);
  c.fillStyle = "#24303B"; c.fillRect(X, py + ph * 0.36, CW, ph * 0.16);
  for (let i = 0; i < 90; i++) { c.fillStyle = `rgba(${200 + 50 * hash(i, 1, 9)},${190 + 40 * hash(i, 2, 9)},${170 + 60 * hash(i, 3, 9)},0.55)`; c.fillRect(X + hash(i, 4, 9) * CW, py + ph * (0.37 + 0.13 * hash(i, 5, 9)), 1, 1); }
  // the light towers: a pole, a bank of lamps, their glow
  for (const lx of [0.1, 0.36, 0.64, 0.9]) {
    const tx = X + lx * CW, ty = py + ph * 0.14;
    const gl = c.createRadialGradient(tx, ty + 3, 0, tx, ty + 3, 16); gl.addColorStop(0, "rgba(255,246,220,0.45)"); gl.addColorStop(1, "rgba(255,246,220,0)");
    c.fillStyle = gl; c.fillRect(tx - 16, ty - 13, 32, 32);
    c.fillStyle = "#1A2230"; c.fillRect(tx - 0.5, ty + 6, 1, ph * 0.22);
    for (let r = 0; r < 3; r++) for (let q = 0; q < 6; q++) { c.fillStyle = "rgba(255,250,232,0.95)"; c.fillRect(tx - 6.6 + q * 2.2, ty + r * 2.1, 1.6, 1.5); }
  }
  c.fillStyle = "#1F5130"; c.fillRect(X, py + ph * 0.52, CW, ph * 0.06);
  for (let k = 0; k < 8; k++) { c.fillStyle = k % 2 ? "#3E7F3F" : "#47904A"; c.fillRect(X, py + ph * (0.58 + k * 0.0525), CW, ph * 0.0525); }
  c.save(); c.beginPath(); c.rect(X, py, CW, ph); c.clip();
  c.fillStyle = "#B07A4F"; c.beginPath(); c.ellipse(X + CW / 2, py + ph * 1.02, CW * 0.3, ph * 0.22, 0, Math.PI, TAU); c.fill();
  c.fillStyle = "#47904A"; c.beginPath(); c.ellipse(X + CW / 2, py + ph * 1.04, CW * 0.17, ph * 0.12, 0, Math.PI, TAU); c.fill();
  c.restore();
  // the first paragraph
  c.fillStyle = "#1E2025"; font(c, 400, 6.6);
  const para = "LOS ANGELES -- Shohei Ohtani has agreed to a 10-year, $700 million contract with the Dodgers, believed to be the largest contract in worldwide sports history. He agreed to terms on Dec. 9, and the deal was announced on Dec. 11.";
  const pl: string[] = []; cur = "";
  for (const w of para.split(" ")) { const t = cur ? cur + " " + w : w; if (c.measureText(t).width > CW) { pl.push(cur); cur = w; } else cur = t; }
  pl.push(cur);
  pl.forEach((l, i) => c.fillText(l, X, py + ph + 14 + i * 9.6));
  // the notch, into the menu bar
  c.fillStyle = "#050505"; c.beginPath(); c.roundRect(SW / 2 - 30, -4, 60, 13, 3); c.fill();
}, 3);

const buildLaptop = (g: DealGeo) => {
  const lap = new THREE.Group();
  lap.userData.obj = "laptop";
  // ── the base: an aluminium unibody, chamfered; the top case carries the key holes and the trackpad ──
  const kz0 = -LD / 2 + 22;
  const keys = keyLayout(kz0);
  const deckT = paintTex("dl-deck", LW, LD, (c) => {
    c.fillStyle = "#8E9095"; c.fillRect(0, 0, LW, LD);
    for (let i = 0; i < 900; i++) { c.fillStyle = `rgba(${hash(i, 1, 5) > 0.5 ? "255,255,255" : "120,124,130"},${0.05 + 0.06 * hash(i, 2, 5)})`; c.fillRect(hash(i, 3, 5) * LW, hash(i, 4, 5) * LD, 6 + 40 * hash(i, 5, 5), 0.3); }
    // the key holes: a dark well round each key
    c.fillStyle = "#0C0C0E";
    for (const k of keys) { c.beginPath(); c.roundRect(k.x - k.w / 2 - 0.9 + LW / 2, k.z - k.d / 2 - 0.9 + LD / 2, k.w + 1.8, k.d + 1.8, 2.8); c.fill(); }
    // the trackpad: glass, its hairline gap
    const tw = 200, td = 123, tx = LW / 2 - tw / 2, tz = kz0 + 151 + 14 + LD / 2;
    c.fillStyle = "#94979C"; c.beginPath(); c.roundRect(tx, tz, tw, td, 9); c.fill();
    c.strokeStyle = "rgba(70,72,78,0.75)"; c.lineWidth = 0.7; c.stroke();
    c.strokeStyle = "rgba(255,255,255,0.35)"; c.lineWidth = 0.5; c.beginPath(); c.roundRect(tx + 0.9, tz + 0.9, tw - 1.8, td - 1.8, 8.2); c.stroke();
    // the front lip's thumb scoop
    const sg = c.createRadialGradient(LW / 2, LD + 4, 0, LW / 2, LD + 4, 40);
    sg.addColorStop(0, "rgba(90,94,100,0.35)"); sg.addColorStop(1, "rgba(90,94,100,0)");
    c.fillStyle = sg; c.fillRect(LW / 2 - 50, LD - 14, 100, 14);
  }, 3);
  const deckM = new THREE.MeshPhysicalMaterial({ map: deckT, metalness: 0.8, roughness: 0.42, envMapIntensity: 1 });
  const aluM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#8F9196"), metalness: 0.88, roughness: 0.36, envMapIntensity: 1 });
  const baseG = slabXZ(LW, LD, LHB, LR, 1.5);
  // the top face's UVs: the deck texture over the whole top (its back edge at the canvas's top)
  const bp = baseG.attributes.position as THREE.BufferAttribute, buv = baseG.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < bp.count; i++) buv.setXY(i, (bp.getX(i) + LW / 2) / LW, (LD / 2 - bp.getZ(i)) / LD);
  lap.add(mesh(baseG, [deckM, aluM]));
  // the keycaps: 78 individual caps, each standing 1.8 px proud of its hole, their legends from one painted sheet
  const KX0 = -KB_W / 2 - 4, KZ0 = kz0 - 4, KBW = KB_W + 8, KBD = 16 + 5 * KP + 8;
  const parts = keys.map((k) => {
    const gk = new RoundedBoxGeometry(k.w, KH, k.d, 2, 1.0);
    gk.translate(k.x, LHB - (KH - KUP) + KH / 2, k.z);
    return gk;
  });
  const kg = mergeGeometries(parts)!;
  const kp = kg.attributes.position as THREE.BufferAttribute, kuv = kg.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < kp.count; i++) kuv.setXY(i, (kp.getX(i) - KX0) / KBW, 1 - (kp.getZ(i) - KZ0) / KBD);
  const capsM = new THREE.MeshStandardMaterial({ map: legendTex(keys, KX0, KZ0, KBW, KBD), roughness: 0.78, metalness: 0, envMapIntensity: 0.4 });
  lap.add(mesh(kg, capsM));
  // the hinge barrel across the back, its clutch caps in the case's aluminium
  const yP = LHB + HINGE_R, zP = -LD / 2 + 4;
  const barrel = mesh(new THREE.CylinderGeometry(HINGE_R, HINGE_R, LW - 92, 40), new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#3B3C40"), metalness: 0.6, roughness: 0.4 }));
  barrel.rotation.z = Math.PI / 2; barrel.position.set(0, yP, zP);
  lap.add(barrel);
  for (const sx of [-1, 1]) {
    const cl = mesh(new THREE.CylinderGeometry(HINGE_R, HINGE_R, 8, 40), aluM);
    cl.rotation.z = Math.PI / 2; cl.position.set(sx * ((LW - 92) / 2 + 4), yP, zP);
    lap.add(cl);
  }
  // ── the lid: an aluminium shell; the display glass, its bezel, the camera in the notch, the screen ──
  const lid = new THREE.Group();
  lid.position.set(0, yP, zP);
  lap.add(lid);
  const S0 = HINGE_R + 0.6;
  const lidB = mesh(slabXY(LW, LIDH, LIDT, LR, 1.2), aluM);
  lidB.position.set(0, S0 + LIDH / 2, 0);
  lid.add(lidB);
  const glassM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#060607"), roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 0.9,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  const glass = mesh(new THREE.ShapeGeometry(roundRect(LW - 3, LIDH - 3, LR - 1.5), 10), glassM, false, true);
  glass.position.set(0, S0 + LIDH / 2, LIDT / 2 + 0.15);
  lid.add(glass);
  const scrM = new THREE.MeshStandardMaterial({ color: new THREE.Color("#000000"), emissive: new THREE.Color("#FFFFFF"), emissiveMap: screenTex(g),
    emissiveIntensity: 0, roughness: 0.14, metalness: 0, envMapIntensity: 0.9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
  const CHIN = LIDH - 10 - SH;
  const scr = mesh(new THREE.PlaneGeometry(SW, SH), scrM, false, true);
  scr.position.set(0, S0 + CHIN + SH / 2, LIDT / 2 + 0.3);
  lid.add(scr);
  const lensY = S0 + LIDH - 10 - 1;
  const lens = mesh(new THREE.CircleGeometry(1.5, 24), new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#0B1020"), roughness: 0.05, clearcoat: 1, envMapIntensity: 1.2 }), false, true);
  lens.position.set(0, lensY, LIDT / 2 + 0.42);
  lid.add(lens);
  const lensRing = mesh(new THREE.RingGeometry(1.5, 2.4, 24), new THREE.MeshStandardMaterial({ color: new THREE.Color("#1C1C20"), roughness: 0.4 }), false, true);
  lensRing.position.set(0, lensY, LIDT / 2 + 0.4);
  lid.add(lensRing);
  return {
    lap,
    setLid: (open: number) => { lid.rotation.x = rad(90) - rad(112) * open; },
    setLit: (lit: number) => { scrM.emissiveIntensity = 0.95 * lit; },
  };
};

export const dealModel = (g: DealGeo) => (): Model<DealP> => {
  const root = new THREE.Group();
  const FY = -g.floor;
  const { cal, footprint } = buildCalendar(g, FY);
  root.add(cal);
  // the cap on its stand: the foot stays, the head turns with the cap on it
  const capG = new THREE.Group();
  capG.position.set(g.cap.x, FY, g.cap.z);
  root.add(capG);
  const { foot, turn } = buildStand();
  capG.add(foot, turn);
  const cap = buildCap();
  cap.position.y = YB;
  turn.add(cap);
  // the laptop
  const L = buildLaptop(g);
  L.lap.position.set(g.lap.x, FY, g.lap.z);
  root.add(L.lap);

  root.add(makeFloor({ y: g.floor, x0: g.cal.x - 800, x1: g.lap.x + 800, z0: -700, z1: 600, reflect: 0, shadow: 0.4,
    fadeC: [(g.cal.x + g.lap.x) / 2, -40], fadeR: [1180, 520],
    blobs: [
      { x: g.cal.x, z: g.cal.z, w: footprint.w, d: footprint.d, a: 0.3 },
      { x: g.cap.x, z: g.cap.z, w: 230, d: 230, a: 0.42 },
      { x: g.lap.x, z: g.lap.z, w: LW + 50, d: LD + 50, a: 0.3 },
    ] }));

  return {
    root,
    update: (p) => {
      turn.rotation.y = rad(p.turn);
      cal.rotation.y = rad(g.cal.yaw - 3 * p.sway);
      L.lap.rotation.y = rad(g.lap.yaw + 3 * p.sway);
      L.setLid(p.lid);
      L.setLit(p.lit);
    },
  };
};
