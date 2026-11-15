// ══════════════════════════════════════════════════════════════════════════════════════════════
// ★ 031 — THE SHAREHOLDERS (the user, 2026-10-13: "39 seconds background behind the billboard should be loads of people in
// back as the ''shareholders'' angry"). "Shareholders sued too." A crowd of investors standing in rows behind the exhibit's
// easel: men and women in suits and shirt sleeves (people.ts, each varied by its seed), fists pumping, three holding TSLA
// placards up on sticks. It is a BACKGROUND view (court.tsx draws it on a parallax layer behind the court): it fades into the
// burgundy with distance and is a little soft, so the exhibit stays the thing to read. On the gavel's strike the crowd
// quietens (the anger eases to a murmur of movement).
// ★ No placard makes a claim: they carry the ticker only.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { THREE, makeFloor, type Model } from "../stage";
import { M, rbox, printTex, font, track, hash } from "../kit029";
import { figure, lookOf, type Figure, type Pose, type ArmFK } from "../people";

export type CrowdGeo = { floor: number; x0: number; x1: number; rows: number[]; gap: number; H: number; fog: string; signs: number[] };
/** soft: the focus pull as the camera leaves for the lectern (0 sharp as set, 1 well out of focus) */
export type CrowdP = { f: number; anger: number; soft: number };

type Member = { fig: Figure; kind: "fist" | "both" | "shake" | "placard"; ph: number; rate: number; side: "L" | "R"; sign?: THREE.Group; lookAt: number };

export const crowdModel = (g: CrowdGeo) => (): Model<CrowdP> => {
  const root = new THREE.Group();
  const FY = -g.floor;
  const members: Member[] = [];
  const signTex = printTex("crowd-sign", 170, 110, (c) => {
    c.fillStyle = "#D8C29A"; c.fillRect(0, 0, 170, 110);
    c.fillStyle = "#1C1714"; c.textAlign = "center"; c.textBaseline = "middle";
    font(c, 800, 54); track(c, 3); c.fillText("TSLA", 87, 58); track(c, 0);
  }, 3);
  const card = M.paper("#CDB58C"), stickM = M.satin("#B58E5E", 0.6);
  let n = 0, signs = 0;
  g.rows.forEach((z, r) => {
    const off = (r % 2) * g.gap * 0.5;
    for (let x = g.x0 + off; x <= g.x1; x += g.gap) {
      const seed = 31 + n * 7;
      // ★ PEN: neighbours a little apart, and every other one a step forward or back (arms out never reach the next)
      const jx = (hash(seed, 1, 2) - 0.5) * g.gap * 0.12, jz = (n % 2 ? -18 : 18) + (hash(seed, 3, 4) - 0.5) * 12;
      const fig = figure(lookOf(seed, g.H * (1 - r * 0.02)), `shareholder ${n}`);
      fig.root.position.set(x + jx, FY, z + jz);
      // they face the court, turned a little toward the exhibit
      fig.root.rotation.y = (hash(seed, 5, 6) - 0.5) * 0.5 - (x - 520) * 0.00025;
      root.add(fig.root);
      const pick = hash(seed, 7, 8);
      let kind: Member["kind"] = pick < 0.5 ? "fist" : pick < 0.72 ? "shake" : "both";
      // the three placards at the crowd's two sides and its back row (behind the board, nobody's sign would show)
      if (g.signs.includes(n) && signs < 3) { kind = "placard"; signs++; }
      const m: Member = { fig, kind, ph: hash(seed, 9, 10) * Math.PI * 2, rate: 0.36 + 0.1 * hash(seed, 11, 12), side: hash(seed, 13, 14) < 0.65 ? "R" : "L", lookAt: (hash(seed, 15, 16) - 0.5) * 0.5 };
      if (kind === "placard") {
        // a placard on a stick, held up over the head in both hands
        const sg = new THREE.Group();
        const stick = rbox(9, 240, 9, 2, stickM);
        stick.geometry.translate(0, 0, 4.5);
        stick.position.set(0, -120, 0);
        sg.add(stick);
        const board = rbox(170, 110, 5, 1.5, { px: card, nx: card, top: card, bottom: card, front: M.print(signTex, 0.85), back: card });
        board.position.set(0, 45, 9.6);
        sg.add(board);
        fig.root.add(sg);
        m.sign = sg;
      }
      members.push(m);
      n++;
    }
  });
  root.add(makeFloor({ y: g.floor, x0: g.x0 - 300, x1: g.x1 + 300, z0: Math.min(...g.rows) - 400, z1: Math.max(...g.rows) + 200, reflect: 0, shadow: 0.42,
    fadeC: [(g.x0 + g.x1) / 2, (Math.min(...g.rows) + Math.max(...g.rows)) / 2], fadeR: [(g.x1 - g.x0) / 2 + 200, (Math.max(...g.rows) - Math.min(...g.rows)) / 2 + 200] }));

  const wq = new THREE.Quaternion(), v = new THREE.Vector3(), pole = new THREE.Vector3();
  const model: Model<CrowdP> = {
    root,
    fog: { color: g.fog, near: 2350, far: 4300 },
    blur: 1.8,
    update: (p) => {
      // ★ a FOCUS PULL: as the camera travels on to the lectern, the crowd behind goes soft (the lawyer and his page are the
      //   thing to read there); stage.ts reads the model's blur every frame
      model.blur = 1.8 + 5.2 * p.soft;
      for (const m of members) {
        const a = p.anger, t = (p.f / 30) * Math.PI * 2 * m.rate * 2.2 + m.ph;
        const pump = Math.sin(t), lift = 0.5 + 0.5 * Math.sin(t + 0.6);
        const shout = { lean: -0.04 + 0.03 * a * pump, turn: 0.06 * Math.sin(t * 0.5), nod: -0.12 * a - 0.03, look: m.lookAt + 0.08 * Math.sin(t * 0.35), cock: 0.05 * Math.sin(t * 0.7) };
        const rest: ArmFK = { up: 0.12, out: 0.04, el: 0.35, curl: 1.9, thumb: 0.5, wr: [0, 0.9, 0] };   // ★ PEN: arms down at the sides, clear of a neighbour
        const other = m.side === "R" ? "L" : "R";
        // the raised arm blends to the resting one as the anger goes (after the gavel: arms down)
        const mixA = (x: ArmFK): ArmFK => ({ up: rest.up! + (x.up! - rest.up!) * a, out: rest.out! + (x.out! - rest.out!) * a, el: rest.el! + (x.el! - rest.el!) * a, curl: 2.1, thumb: 0.6, wr: [0, 0.9 * (1 - a), 0] });
        const one = (arm: ArmFK): Pose => { const q: Pose = { ...shout }; q[m.side] = mixA(arm); q[other] = rest; return q; };
        if (m.kind === "fist") {
          m.fig.pose(one({ up: 2.4 + 0.14 * pump, out: 0.1, el: 0.4 + 0.45 * lift, curl: 2.3, thumb: 0.7 }));
        } else if (m.kind === "shake") {
          m.fig.pose(one({ up: 1.25 + 0.12 * pump, out: 0.18, el: 1.35 + 0.2 * pump, curl: 2.3, thumb: 0.7 }));
        } else if (m.kind === "both") {
          m.fig.pose({ ...shout, L: mixA({ up: 2.3 + 0.16 * pump, out: 0.12, el: 0.55 + 0.3 * lift }), R: mixA({ up: 2.3 - 0.16 * pump, out: 0.12, el: 0.55 + 0.3 * (1 - lift) }) });
        } else {
          // the placard: up over the head, raised and lowered with the chant; both hands on its stick
          const H = m.fig.H, y = H * 0.8 + 16 * a * pump;
          m.sign!.position.set(0, y, 70);   // held at the chest, the board up at the face: the stick in front of him
          m.sign!.rotation.z = 0.05 * Math.sin(t * 0.5);
          m.fig.pose({ ...shout, L: { curl: 1.9, thumb: 0.6 }, R: { curl: 1.9, thumb: 0.6 } });
          m.fig.root.updateMatrixWorld(true);
          for (const [k, dy] of [["L", -36], ["R", -100]] as const) {
            v.set(0, dy, 4.5 + 10);
            m.sign!.localToWorld(v);
            v.y += 0.04 * H;   // the wrist sits above the grip (the fist hangs below it)
            m.fig.root.getWorldQuaternion(wq);
            pole.set(k === "L" ? 1 : -1, -0.6, -0.3).applyQuaternion(wq);
            m.fig.reach(m.fig.arm[k], v, pole);
          }
        }
      }
    },
  };
  return model;
};
