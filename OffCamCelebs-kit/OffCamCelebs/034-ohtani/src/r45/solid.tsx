import React, { createContext, useContext } from "react";
import { frameUid } from "remotion";

// ═══════════════════════════════════════════════════════════════════════════
// ★★★★★ RULE 52 — EVERY OBJECT IS 3-D (user, 2026-10-09: "Any objects should be 3d, with the amount of detail that the
// objects in the price of money video for 100bps"). The reference is Style 3 Video 26: solids whose front, top and side
// faces share their edges, lit by ONE key light from the upper left (its s3.tsx KEY), a lit hairline where faces meet,
// machined metal, deep contact shadows.
// This is the 3-D kit those objects are built from, in SVG so every edge and every printed word stays a VECTOR at any
// camera zoom (rule 51: sharp; a CSS 3-D layer is rasterised at 1× and stretched by a zoom — CLAUDE.md, 026):
//   · an object is defined in 3-D, in its own coordinates (x right, y DOWN, z toward the viewer), about a pivot;
//   · `Solid` places it: the pivot's world position, its yaw / pitch / roll, a scale, and a focal length — a real
//     perspective projection, its vanishing point at the pivot (as a CSS perspective-origin at the object's centre);
//   · faces carry outward normals by construction; a face is drawn only if it faces the eye, far faces first;
//   · each face is SHADED from the key: one that faces the light as squarely as a front face does shows its base colour,
//     a top brightens toward white, a side away from the light darkens toward black — so the whole film is lit by one
//     source, and no shading is ever painted by hand onto a flat shape;
//   · print, windows, ruled lines and every other detail are DECALS: 2-D SVG laid on a face through the affine map of
//     three of its projected corners (exact at those corners; the perspective is gentle enough that the fourth is
//     within a pixel at the sizes used here).
// No CSS or SVG filter anywhere (a filter is pixel-aligned and jitters on anything that moves).
// ═══════════════════════════════════════════════════════════════════════════
export type V2 = readonly [number, number];
export type V3 = readonly [number, number, number];
const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a: V3): V3 => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

/** ★ the ONE key light, in view space (pointing toward the light): upper left and in front, as 100bps' KEY */
export const KEY: V3 = norm([-0.5, -0.66, 0.56]);
/** how squarely an unturned front face takes the key: the level at which a face shows its own base colour */
const K_FRONT = KEY[2];

const hex = (c: string) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const toHex = (r: number[]) => "#" + r.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
export const mixC = (a: string, b: string, t: number) => { const A = hex(a), B = hex(b); return toHex(A.map((v, i) => v + (B[i] - v) * Math.max(0, Math.min(1, t)))); };

export type Material = "matte" | "paper" | "metal" | "gloss";
/** a face's colour under the key: its base where it faces the light as a front face does; toward white as it turns up into
 *  the light, toward black as it turns away. Metal and gloss swing harder than matte or paper. */
export const shade = (c: string, k: number, mat: Material = "matte") => {
  const swing = mat === "metal" ? 0.85 : mat === "gloss" ? 0.75 : mat === "paper" ? 0.6 : 0.7;
  if (k >= K_FRONT) return mixC(c, "#FFFFFF", ((k - K_FRONT) / (1 - K_FRONT)) * (mat === "metal" ? 0.55 : 0.32));
  return mixC(c, "#0B0706", ((K_FRONT - k) / (K_FRONT + 1)) * swing);
};

export type View = { x: number; y: number; yaw?: number; pitch?: number; roll?: number; s?: number; f?: number };
/** P: a local point to the screen; R: a local point into view space (rotated, before perspective); N: a local normal into
 *  view space; eye: the eye in view space */
type Proj = { P: (p: V3) => V2; R: (p: V3) => V3; N: (n: V3) => V3; eye: V3 };
const rad = (d: number) => (d * Math.PI) / 180;
/** rotation by roll (about z), then yaw (about y), then pitch (about x), in degrees */
const rotor = (yaw = 0, pitch = 0, roll = 0) => {
  const cY = Math.cos(rad(yaw)), sY = Math.sin(rad(yaw)), cP = Math.cos(rad(pitch)), sP = Math.sin(rad(pitch));
  const cR = Math.cos(rad(roll)), sR = Math.sin(rad(roll));
  return (p: V3): V3 => {
    let x = p[0], y = p[1], z = p[2];
    [x, y] = [x * cR - y * sR, x * sR + y * cR];
    [x, z] = [x * cY + z * sY, -x * sY + z * cY];
    [y, z] = [y * cP - z * sP, y * sP + z * cP];
    return [x, y, z];
  };
};
/** the projection of one object: rotate (roll about z, yaw about y, pitch about x), then perspective about its pivot */
export const projOf = (v: View): Proj => {
  const rot = rotor(v.yaw, v.pitch, v.roll);
  const F = v.f ?? 2400, S = v.s ?? 1;
  const P = (p: V3): V2 => { const r = rot(p); const k = F / (F - r[2] * S); return [v.x + r[0] * S * k, v.y + r[1] * S * k]; };
  return { P, R: rot, N: rot, eye: [0, 0, F / S] };
};

const Ctx = createContext<Proj | null>(null);
const useProj = () => { const p = useContext(Ctx); if (!p) throw new Error("solid.tsx: a 3-D part must sit inside <Solid>"); return p; };
/** places an object: everything inside is in the object's own 3-D coordinates about its pivot */
export const Solid: React.FC<{ view: View; children: React.ReactNode; opacity?: number }> = ({ view, children, opacity }) => (
  <Ctx.Provider value={projOf(view)}><g opacity={opacity}>{children}</g></Ctx.Provider>
);
/** ★ a PART of an object, turned and moved in the object's own 3-D space: rotated by (ry, rx, rz) degrees about its own
 *  origin `o` (a hinge, an axle), then placed at `o + t`. A folder's cover on its hinge, a sign on its chains, a shackle. */
export const Part: React.FC<{ o?: V3; t?: V3; ry?: number; rx?: number; rz?: number; children: React.ReactNode }> = ({ o = [0, 0, 0], t = [0, 0, 0], ry = 0, rx = 0, rz = 0, children }) => {
  const up = useProj();
  const rot = rotor(ry, rx, rz);
  const X = (p: V3): V3 => add(add(o, t), rot(sub(p, o)));
  return <Ctx.Provider value={{ P: (p) => up.P(X(p)), R: (p) => up.R(X(p)), N: (n) => up.N(rot(n)), eye: up.eye }}>{children}</Ctx.Provider>;
};

// ── FACES ────────────────────────────────────────────────────────────────────
export type Face = { v: V3[]; n: V3; c: string; mat?: Material; hi?: boolean };
const pts = (q: V2[]) => q.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");
/** the faces of one convex-ish part: back-facing faces culled, the rest drawn far to near, each shaded by the key and
 *  given a soft gradient along the light (lit corner a touch brighter), metal a specular band; `hi` faces get the lit
 *  hairline along their top edges where they meet a face turned up to the light */
export const Mesh: React.FC<{ faces: Face[]; tag?: Record<string, unknown> }> = ({ faces, tag }) => {
  const { P, R, N, eye } = useProj();
  const uid = frameUid();   // ★ HF port: Preact's useId repeats across layers (shim/remotion.tsx)
  const seen = faces.map((fc, i) => {
    const r = fc.v.map(R), n = norm(N(fc.n));
    const cen = mul(r.reduce((a, b) => add(a, b), [0, 0, 0] as V3), 1 / r.length);
    const vis = dot(n, sub(eye, cen)) > 0;
    return { fc, i, n, z: cen[2], vis, q: fc.v.map(P) };
  }).filter((x) => x.vis).sort((a, b) => a.z - b.z);
  return (
    <g {...tag}>
      <defs>
        {seen.map(({ fc, i, n, q }) => {
          const k = dot(n, KEY), base = shade(fc.c, k, fc.mat);
          const xs = q.map((p) => p[0]), ys = q.map((p) => p[1]);
          const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
          const amp = fc.mat === "metal" ? 0.22 : fc.mat === "gloss" ? 0.12 : fc.mat === "paper" ? 0.035 : 0.07;
          return (
            <linearGradient key={i} id={`${uid}g${i}`} gradientUnits="userSpaceOnUse" x1={x0} y1={y0} x2={x1} y2={y1}>
              <stop offset={0} stopColor={mixC(base, "#FFFFFF", amp)} />
              {fc.mat === "metal" && <stop offset={0.42} stopColor={mixC(base, "#FFFFFF", amp * 1.6)} />}
              {fc.mat === "metal" && <stop offset={0.58} stopColor={mixC(base, "#000000", amp * 0.8)} />}
              <stop offset={1} stopColor={mixC(base, "#000000", amp)} />
            </linearGradient>
          );
        })}
      </defs>
      {seen.map(({ i, q }) => <polygon key={i} points={pts(q)} fill={`url(#${uid}g${i})`} />)}
      {/* the lit hairline: where a face meets one turned up into the light, its shared edge catches the key */}
      {seen.filter(({ fc }) => fc.hi).map(({ i, q, n }) => (dot(n, KEY) > 0.5
        ? <polyline key={`h${i}`} points={pts([q[0], q[1]])} fill="none" stroke="rgba(255,252,244,0.55)" strokeWidth={1.3} />
        : null))}
    </g>
  );
};

/** the signed area of a profile (y down): > 0 runs clockwise on screen */
const area2 = (p: V2[]) => p.reduce((s, a, i) => { const b = p[(i + 1) % p.length]; return s + a[0] * b[1] - b[0] * a[1]; }, 0);

/** ★ a PRISM: a 2-D profile in the x-y plane (y down) at depth z0, extruded back to z1 (z1 < z0). Its front cap, its sides
 *  (outward normals from the profile's own winding) and its back cap. `cs` colours the sides, `cb` the back. */
export const prismFaces = (prof: V2[], z0: number, z1: number, c: string, mat: Material = "matte", cs?: string, cb?: string): Face[] => {
  const cw = area2(prof) > 0;
  const f = prof.map(([x, y]) => [x, y, z0] as V3), b = prof.map(([x, y]) => [x, y, z1] as V3);
  const faces: Face[] = [
    { v: f, n: [0, 0, 1], c, mat },
    { v: [...b].reverse(), n: [0, 0, -1], c: cb ?? cs ?? c, mat },
  ];
  prof.forEach((p, i) => {
    const j = (i + 1) % prof.length, dx = prof[j][0] - p[0], dy = prof[j][1] - p[1];
    const n: V3 = cw ? [dy, -dx, 0] : [-dy, dx, 0];
    // the side quad: its FIRST edge is the front edge, so a lit side's hairline runs along the front cap's rim
    faces.push({ v: [f[j], f[i], b[i], b[j]], n: norm(n), c: cs ?? c, mat, hi: true });
  });
  return faces;
};
export const Prism: React.FC<{ prof: V2[]; z0?: number; z1: number; c: string; cs?: string; cb?: string; mat?: Material; tag?: Record<string, unknown> }> = ({
  prof, z0 = 0, z1, c, cs, cb, mat, tag,
}) => <Mesh faces={prismFaces(prof, z0, z1, c, mat, cs, cb)} tag={tag} />;

/** a BOX from its front face's corner (x, y), size w × h, at depth z0 back to z0 − d */
export const rect = (x: number, y: number, w: number, h: number): V2[] => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
export const Box: React.FC<{ x: number; y: number; w: number; h: number; d: number; z?: number; c: string; cs?: string; mat?: Material; tag?: Record<string, unknown> }> = ({
  x, y, w, h, d, z = 0, c, cs, mat, tag,
}) => <Prism prof={rect(x, y, w, h)} z0={z} z1={z - d} c={c} cs={cs} mat={mat} tag={tag} />;

/** a rounded-corner profile (r at each corner, `seg` points per corner) — bevelled real objects, not sharp boxes */
export const roundRect = (x: number, y: number, w: number, h: number, r: number, seg = 5): V2[] => {
  const out: V2[] = [];
  const corner = (cx: number, cy: number, a0: number) => {
    for (let i = 0; i <= seg; i++) { const a = a0 + (i / seg) * (Math.PI / 2); out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
  };
  corner(x + w - r, y + r, -Math.PI / 2); corner(x + w - r, y + h - r, 0); corner(x + r, y + h - r, Math.PI / 2); corner(x + r, y + r, Math.PI);
  return out;
};

/** ★ a CYLINDER (or a frustum: r1 at the far end) along an axis, its centre `c`, `n` facets shaded one by one (a turned
 *  knob, a coin, a lamp hood, a post) */
export const cylFaces = (c: V3, axis: "x" | "y" | "z", r0: number, len: number, col: string, mat: Material = "metal", n = 40, r1 = r0, capCol?: string): Face[] => {
  // the axis frame: a along the axis (from the near end, +, to the far end), u and v across it
  const A: V3 = axis === "z" ? [0, 0, -1] : axis === "y" ? [0, 1, 0] : [1, 0, 0];
  const U: V3 = axis === "x" ? [0, 1, 0] : [1, 0, 0];
  const Vv: V3 = cross(A, U);
  const near = c, far = add(c, mul(A, len));
  const ring = (o: V3, r: number) => Array.from({ length: n }, (_, i) => { const t = (i / n) * Math.PI * 2; return add(o, add(mul(U, Math.cos(t) * r), mul(Vv, Math.sin(t) * r))); });
  const a = ring(near, r0), b = ring(far, r1);
  const faces: Face[] = [
    { v: a, n: mul(A, -1), c: capCol ?? col, mat },
    { v: [...b].reverse(), n: A, c: capCol ?? col, mat },
  ];
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n, t = ((i + 0.5) / n) * Math.PI * 2;
    const radial = add(mul(U, Math.cos(t)), mul(Vv, Math.sin(t)));
    const slope = (r0 - r1) / Math.max(1e-6, len);
    faces.push({ v: [a[i], a[j], b[j], b[i]], n: norm(add(radial, mul(A, slope))), c: col, mat });
  }
  return faces;   // (visibility and shading read each face's normal, never its winding)
};
export const Cyl: React.FC<{ c: V3; axis: "x" | "y" | "z"; r: number; r1?: number; len: number; col: string; cap?: string; mat?: Material; n?: number; tag?: Record<string, unknown> }> = ({
  c, axis, r, r1, len, col, cap, mat, n, tag,
}) => <Mesh faces={cylFaces(c, axis, r, len, col, mat, n, r1, cap)} tag={tag} />;

/** ★ a DECAL: 2-D SVG (in its own units, origin at its top-left) laid on a plane of the object: origin `o`, its x along `u`
 *  and its y along `v` (unit vectors), `w` × `h` in size. Mapped through three projected corners; hidden when its plane
 *  faces away. Print, windows, rules, the LED digits — every detail on a face is one of these. */
export const Decal: React.FC<{ o: V3; u?: V3; v?: V3; w: number; h: number; children: React.ReactNode; opacity?: number }> = ({
  o, u = [1, 0, 0], v = [0, 1, 0], w, h, children, opacity,
}) => {
  const { P, R, N, eye } = useProj();
  const n = norm(N(cross(u, v)));
  const cen = R(add(o, add(mul(u, w / 2), mul(v, h / 2))));
  if (dot(n, sub(eye, cen)) <= 0) return null;
  const A = P(o), B = P(add(o, mul(u, w))), C = P(add(o, mul(v, h)));
  const m = [(B[0] - A[0]) / w, (B[1] - A[1]) / w, (C[0] - A[0]) / h, (C[1] - A[1]) / h, A[0], A[1]].map((x) => x.toFixed(5)).join(" ");
  return <g transform={`matrix(${m})`} opacity={opacity}>{children}</g>;
};

/** the screen point of an object-space point (to hang a cord, aim a shadow, or place a 2-D part at a 3-D spot) */
export const useAt = () => useProj().P;

/** ★ a CAST SHADOW: the outline of a flat part (local points) projected, then dropped onto what lies behind it, offset away
 *  from the key (down and right). Its penumbra is built from eight copies stepping outward and fainter (no filter), so it
 *  falls off softly: three copies left a hard grey band along the edge, which read as a border on the cream ground. */
export const Cast: React.FC<{ pts: V3[]; dx?: number; dy?: number; o?: number }> = ({ pts: p3, dx = 10, dy = 16, o = 0.34 }) => {
  const { P } = useProj();
  const q = p3.map(P);
  const cx = q.reduce((s, p) => s + p[0], 0) / q.length, cy = q.reduce((s, p) => s + p[1], 0) / q.length;
  const r = Math.max(...q.map(([x, y]) => Math.hypot(x - cx, y - cy)));
  const ring = (grow: number, ox: number, oy: number) => { const k = (r + grow) / r; return pts(q.map(([x, y]) => [cx + (x - cx) * k + ox, cy + (y - cy) * k + oy] as V2)); };
  return (
    <g>
      {Array.from({ length: 8 }, (_, i) => {
        const t = i / 7;   // 0 = the widest, faintest copy; 1 = the core
        return <polygon key={i} points={ring((1 - t) * 14 - 3, dx * (0.55 + 0.45 * (1 - t)), dy * (0.55 + 0.45 * (1 - t)))} fill={`rgba(16,9,5,${(o * 0.14).toFixed(3)})`} />;
      })}
    </g>
  );
};

/** ★ a CONTACT SHADOW on the ground under an object: soft, offset AWAY from the key (down-right), darkest at its core */
export const Contact: React.FC<{ cx: number; cy: number; w: number; o?: number }> = ({ cx, cy, w, o = 1 }) => (
  <g opacity={o}>
    <ellipse cx={cx + w * 0.07} cy={cy + 6} rx={w * 0.62} ry={Math.max(10, w * 0.06)} fill="url(#mShadowSoft)" />
    <ellipse cx={cx + w * 0.03} cy={cy + 1} rx={w * 0.52} ry={Math.max(4, w * 0.018)} fill="url(#mShadow)" />
  </g>
);
