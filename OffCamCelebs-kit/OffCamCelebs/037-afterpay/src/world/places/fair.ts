// ═════════════════════════════════════════════════════════════════════════════════════════════
// PLACE 7 · TO BE FAIR (037 v2; SHOTS.md row FAIR; study rules R1–R32). Two shots joined by a hard cut.
//  1 "To be fair, twenty-nine billion was real on day one…"  The balance scale drops in (it is falling on the cut) and
//    rocks; solid $29B numerals drop onto its near pan on "twenty-nine" and the beam swings down; three share tokens drop
//    onto the far pan and the beam comes LEVEL on "real", marked by a ring of light. Low orbit and push.
//  2 "…and Afterpay's shareholders got the shares they were promised."  Tokens roll down the chute on edge and along a row
//    of glossy pawns; each stops at its pawn and falls flat in front of it, the pawn hopping as it lands, on
//    "shareholders… shares". The camera travels along the row with them.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { word } from "../../r45/time";
import { SOFT, SETTLE, clamp01, ramp } from "../../r45/tokens";
import { cut, dolly, orbit, orbitPos, type CamKey3, type Vec, type Orbit } from "../cam";
import { stdLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, counter, ring, dropIn, setLit } from "../kit";
import { enterOf } from "../timeline";
import { makeScale, SCALE } from "../obj/scale";
import { makeChute, RAMP } from "../obj/chute";
import { makeToken } from "../obj/token";
import { makePawn } from "../obj/pawn";

const S = "fair" as const;
const E = enterOf(S);
const N29 = word(S, 0, /29/), REAL = word(S, 0, /^real/), AND = word(S, 0, /^and/), HOLDERS = word(S, 0, /^shareholders/);
const F2 = AND - 4;                                     // the cut to the chute

// ── 1 · the scale ──
const KS = 1;                                         // the scale's size in this shot
const LAND = E + 4;                                     // the scale lands (it is falling on the cut)
const L29 = N29 + 2;                                    // $29B lands on the near pan
const TOK = [REAL - 17, REAL - 10, REAL - 3];           // the three tokens land on the far pan: level on "real"
const LEVEL = REAL + 4;
const step = (t: number, tau = 5.5, P = 17) => (t <= 0 ? 0 : 1 - Math.exp(-t / tau) * Math.cos((2 * Math.PI * t) / P));
const tiltAt = (f: number) => {
  const wob = f > LAND ? 0.07 * Math.exp(-(f - LAND) / 7) * Math.sin((2 * Math.PI * (f - LAND)) / 15) : 0;
  return wob + 0.26 * step(f - L29) - (0.26 / 3) * TOK.reduce((s, t) => s + step(f - t), 0);
};
// ── 2 · the chute and the pawns ──
const XF = 6000, NP = 5, R = 90, T = 34;
const pawnX = (i: number) => 170 + i * 350;
const rampLen = Math.hypot(RAMP.x1 - RAMP.x0, RAMP.y1 - RAMP.y0);
const NX = -(RAMP.y1 - RAMP.y0) / rampLen, NY = (RAMP.x1 - RAMP.x0) / rampLen;
const arrive = (i: number) => HOLDERS - 6 + i * 10;     // token i stops at pawn i
const pathLen = (i: number) => rampLen + (pawnX(i) - (RAMP.x1 + NX * R));
const rollDur = (i: number) => pathLen(i) / 52;
const TIP = 8;

export const FA2 = { E, F2, land: LAND, l29: L29, toks: TOK, level: LEVEL, arrive: Array.from({ length: NP }, (_, i) => arrive(i)) } as const;

const ORB: Orbit = { c: [0, 640, 0], a0: -12, a1: 13, r0: 3000, r1: 2650, y0: 420, y1: 540 };
const shots = ({ from, to }: { from: number; to: number }): CamKey3[] => [
  cut(from, orbitPos(ORB.c, ORB.a0, ORB.r0, ORB.y0), ORB.c, { fov: 48, why: "cut: the scale" }),
  orbit(from + 1, F2 - from - 2, ORB, { fov: 48, ease: SOFT, why: "low orbit of the scale" }),
  cut(F2, [XF - 1500, 700, 2700], [XF - 1000, 420, 0], { fov: 46, why: "cut: the chute" }),
  dolly(F2 + 1, Math.max(20, to - F2 - 2), [XF + 1750, 430, 2050], [XF + 1550, 190, -150], { fov: 46, ease: SOFT, why: "travel along the pawns with the tokens" }),
];
const lights = (f: number): Lights => {
  if (f < F2) return stdLights([0, 620, 0], { s: 1.25, key: 3.3 + 0.6 * ramp(f, LEVEL - 2, LEVEL + 10, SETTLE) });
  const t = SOFT(clamp01((f - F2) / 80));
  return stdLights([XF - 800 + 2300 * t, 320, 0], { s: 1.3, key: 3.5 });
};
const cues = (): PlaceCue[] => [
  { kind: "hit", s: "thud", at: LAND, vol: 0.42, why: "the scale lands" },
  { kind: "hit", s: "thud", at: L29, vol: 0.36, why: "$29B lands on the near pan" },
  ...TOK.map((t, k): PlaceCue => ({ kind: "hit", s: "coin", at: t, vol: 0.3, why: `token ${k + 1} lands on the far pan` })),
  { kind: "hit", s: "bloom", at: LEVEL, vol: 0.36, why: "the beam comes level: the ring of light" },
  { kind: "move", s: "whooshsoft", at: F2 + 8, end: F2 + 30, vol: 0.3, why: "the tokens roll down the chute" },
  ...Array.from({ length: NP }, (_, i): PlaceCue => ({ kind: "hit", s: "coin", at: arrive(i) + TIP - 2, vol: 0.28, why: `pawn ${i + 1} gets its token` })),
];
const blur = (f: number) =>
  dropIn(f, LAND, { h: 1500, fall: 9 }).fast || dropIn(f, L29, { h: 1200, fall: 8 }).fast || TOK.some((t) => dropIn(f, t, { h: 900, fall: 7 }).fast) ||
  (f >= F2 && f < F2 + 14);

const build = () => {
  const group = new THREE.Group();
  // 1 the scale
  const sc = makeScale(); sc.group.scale.setScalar(KS); sc.group.rotation.y = 0.1; group.add(sc.group);
  const fig = counter({ size: 76, color: K.money, depth: 34 });
  fig.set("$29B");
  const figHold = new THREE.Group(); figHold.add(fig.group); sc.left.add(figHold);
  const toks = TOK.map((_, k) => { const t = makeToken("SQ"); t.rotation.y = 0.5 + k * 1.1; sc.right.add(t); return t; });
  const ringS = ring({ r: 1700, dur: 28 }); ringS.mesh.position.set(0, 1.5, 200); group.add(ringS.mesh);
  // 2 the chute, the pawns and their tokens
  const row = new THREE.Group(); row.position.set(XF, 0, 0); row.scale.setScalar(1.5); group.add(row);
  const chute = makeChute(); row.add(chute.group);
  const pawns = Array.from({ length: NP }, (_, i) => { const p = makePawn(1.2); p.position.set(pawnX(i), 0, -250); row.add(p); return p; });
  const rollers = Array.from({ length: NP }, () => {
    const hold = new THREE.Group(), inner = makeToken("SQ");
    inner.position.y = -T / 2; const spin = new THREE.Group(); spin.add(inner); hold.add(spin); row.add(hold);
    return { hold, spin };
  });
  return {
    group,
    update: (f: number) => {
      const one = f < F2;
      sc.group.visible = one; ringS.mesh.visible = false; row.visible = !one;
      if (one) {
        const d = dropIn(f, LAND, { h: 1500, fall: 9, bounce: 0.5 });
        sc.group.position.y = d.y;
        sc.update({ tilt: tiltAt(f) });
        const n = dropIn(f, L29, { h: 1200, fall: 8, bounce: 0.4 });
        figHold.visible = n.on; figHold.position.y = n.y / KS;
        setLit(fig.face, 1);
        toks.forEach((t, k) => { const q = dropIn(f, TOK[k], { h: 900, fall: 7, bounce: 0.5 }); t.visible = q.on; t.position.set((k - 1) * 26, k * (T + 2) + q.y / KS, (k % 2) * 18 - 9); });
        ringS.update(f, LEVEL);
      } else {
        chute.plate.setLit(1);
        rollers.forEach(({ hold, spin }, i) => {
          const dur = rollDur(i), st = arrive(i) - dur, u = clamp01((f - st) / dur), L = pathLen(i);
          const s = L * (1 - Math.pow(1 - u, 1.7));
          hold.visible = f >= st;
          let x: number, y: number;
          if (s < rampLen) { const k = s / rampLen; x = RAMP.x0 + (RAMP.x1 - RAMP.x0) * k + NX * R; y = RAMP.y0 + (RAMP.y1 - RAMP.y0) * k + NY * R; }
          else { x = RAMP.x1 + NX * R + (s - rampLen); y = R; }
          const tip = SETTLE(clamp01((f - arrive(i)) / TIP)), th = (Math.PI / 2) * (1 - tip);
          hold.position.set(x, T / 2 + (y - T / 2) * Math.sin(th) + (tip > 0 && tip < 1 ? 0 : 0), 130 - (R - T / 2) * (1 - Math.sin(th)));
          hold.rotation.x = th;
          spin.rotation.y = -s / R;
        });
        pawns.forEach((p, i) => { const u = clamp01((f - (arrive(i) + TIP - 2)) / 9); p.position.y = 46 * Math.sin(Math.PI * u); });
      }
    },
  };
};
void SCALE;
export const FairPlace: Place3 = { id: S, label: "7 To be fair: the scale comes level on $29B; the shareholders get their shares", enter: E, stage: "dark", shots, lights, build, blur, cues };
