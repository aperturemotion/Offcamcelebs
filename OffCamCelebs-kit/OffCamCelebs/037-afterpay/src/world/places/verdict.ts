// ═════════════════════════════════════════════════════════════════�
// PLACE 8 · THE VERDICT (037 v2; worker A; SHOTS.md rows VERDICT 1–3; study rules R13, R16, R18, R31).
//  1 "But the price tag everyone remembers was never the price paid."  HARD CUT to the OPENING shot: the tag on its chain
//    over the bag, $29,000,000,000 standing on the floor. The tag's lamp comes up on "price tag"; the floor numerals roll
//    DOWN to $13,800,000,000 and turn red as they land on "paid" (a red ring).
//  2 "Our rating: inflated."  A chunky rubber stamp punches the plinth's face and recoils: INFLATED, red, with a ring of
//    light and a red glow on the backdrop.
//  3 "Send us who to audit next."  The tag sways; the camera pulls up and back; the film ends 0.8 s after the last word.
// ═════════════════════════════════════════════════════════════════�
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, clamp01 } from "../../r45/tokens";
import { cut, dolly, mixV, type CamKey3, type Vec } from "../cam";
import { stdLights, GLOW, type Place3, type PlaceCue } from "../place";
import { K, countUp, dollars, ring, litPlate, popUp, backGlow, plateOn } from "../kit";
import { makeStamp } from "../obj/stamp";
import { enterOf } from "../timeline";
import { tagSet, HOOK_STAGE, OPENING } from "./hook";

const S = "verdict" as const;
const ENTER = enterOf(S);
const TAGW = word(S, 0, /^price/), NEVER = word(S, 0, /^never/), PAID = word(S, 0, /^paid/);
const INF = word(S, 1, /^inflated/i), SEND = cue(S, 2);
const ROLL: [number, number] = [NEVER - 4, PAID];
const PLATE_Y = 190, FACE_Z = HOOK_STAGE.plinthD / 2;
export const VD = { roll: ROLL, slam: INF, send: SEND } as const;

const stampAt = (f: number): { pos: Vec; yaw: number; on: boolean; fast: boolean } => {
  const rest: Vec = [1500, 760, 2300], hit: Vec = [0, PLATE_Y, FACE_Z + 41];
  if (f < INF - 12) return { pos: rest, yaw: -0.7, on: false, fast: false };
  if (f <= INF) { const u = clamp01((f - (INF - 12)) / 12), e = u * u; return { pos: mixV(rest, hit, e), yaw: -0.7 * (1 - e), on: true, fast: u > 0.25 }; }
  if (f < INF + 3) return { pos: hit, yaw: 0, on: true, fast: false };
  const u = clamp01((f - (INF + 3)) / 15), e = SOFT(u);
  return { pos: mixV(hit, rest, e), yaw: -0.7 * e, on: u < 1, fast: false };
};

export const VerdictPlace: Place3 = {
  id: S, label: "8 The verdict: the opening returns; $29,000,000,000 rolls down to $13,800,000,000; INFLATED", enter: ENTER, stage: "dark",
  shots: ({ from, to }): CamKey3[] => [
    cut(from, OPENING.pos, OPENING.look, { fov: OPENING.fov, focus: OPENING.numFocus, why: "cut back to the opening shot" }),
    { ...dolly(from + 1, PAID - 6 - (from + 1), OPENING.push.pos, OPENING.push.look, { fov: 42, ease: SOFT, why: "the opening's push-in" }), focus: OPENING.numFocus },
    { ...dolly(INF - 20, 22, [-330, 360, 3250], [0, 310, 320], { fov: 42, why: "push in on the plinth for the stamp" }), focus: [0, 190, 330] as Vec },
    dolly(SEND + 2, to - (SEND + 2) - 1, [-460, 1350, 4300], [0, 600, 0], { fov: 42, ease: SOFT, why: "pull up and back" }),
  ],
  lights: (f) => {
    const pPaid = f >= PAID ? Math.exp(-(f - PAID) / 12) : 0, pInf = f >= INF ? Math.exp(-(f - INF) / 14) : 0;
    const L = stdLights(HOOK_STAGE.centre, { s: 1.3, key: 3.5 + 0.9 * pPaid + 1.3 * pInf });
    L.accent = { pos: [0, 260, 1100], color: K.red, i: 2.2 * pPaid + 2.6 * pInf };
    if (f >= INF) L.back = backGlow(HOOK_STAGE.centre, K.red, 2.2 * (0.35 + 0.65 * pInf));
    return L;
  },
  blur: (f) => stampAt(f).fast,
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "chainshort", at: ENTER + 1, vol: 0.3, why: "the tag sways on its chain" },
    { kind: "hit", s: "click", at: TAGW, vol: 0.3, why: "the tag's lamp comes up" },
    { kind: "hit", s: "datamid", at: ROLL[0], end: PAID, vol: 0.35, why: "the floor numerals roll down" },
    { kind: "hit", s: "sub", at: PAID, vol: 0.5, why: "$13,800,000,000 lands, red" },
    { kind: "hit", s: "chainshort", at: INF - 26, vol: 0.3, why: "the crane lifts the tag clear" },
    { kind: "move", s: "whooshsoft", at: INF - 4, end: INF, vol: 0.4, why: "the stamp comes in" },
    { kind: "hit", s: "chainshort", at: SEND - 4, vol: 0.3, why: "the tag comes back down" },
    { kind: "hit", s: "thud", at: INF, vol: 0.55, why: "the stamp slams: INFLATED" },
    { kind: "hit", s: "sub", at: INF, vol: 0.45, why: "the slam's weight" },
    { kind: "hit", s: "pingshort", at: INF + 1, vol: 0.3, why: "the red ring" },
  ],
  build: () => {
    const group = new THREE.Group();
    const A = tagSet("verdict");
    group.add(A.group);
    const money = new THREE.Color(K.money).multiplyScalar(GLOW), red = new THREE.Color(K.red).multiplyScalar(GLOW);
    const haloRed = ring({ r: 1500, color: K.red, dur: 30 });
    haloRed.mesh.position.set(0, 1.5, HOOK_STAGE.numZ);
    const plate = litPlate(["INFLATED"], { size: 78, color: K.red, depth: 40 });
    plate.group.position.set(0, PLATE_Y, FACE_Z + plate.d / 2 + 1);   // it stands ON the plinth's face, never in it
    plateOn(plate.group, A.plinth, { inset: 28 });
    const stamp = makeStamp("verdict");
    const haloInf = ring({ r: 1700, color: K.red, dur: 32 });
    haloInf.mesh.position.set(0, 1.5, FACE_Z + 200);
    group.add(haloRed.mesh, plate.group, stamp.group, haloInf.mesh);
    return {
      group,
      update: (f) => {
        const t = f - ENTER;
        const nudge = f >= SEND ? 0.05 * Math.exp(-0.03 * (f - SEND)) * Math.sin((2 * Math.PI * (f - SEND)) / 44) : 0;
        // the crane lifts the tag clear for the stamp, and lowers it again for the last shot (the film loops)
        const up = (x: number) => { const u = clamp01(x); return u * u * (3 - 2 * u); };
        A.tag.group.position.y = A.pivotY + 900 * (up((f - (INF - 26)) / 16) - up((f - (SEND - 4)) / 26));
        A.tag.update({ swing: 0.1 * Math.exp(-0.022 * t) * Math.cos((2 * Math.PI * t) / 44) + nudge, lit: 0.4 + 0.6 * clamp01((f - TAGW) / 6) });
        A.num.set(dollars(countUp(f, ROLL[0], PAID, 29e9, 13.8e9)));
        A.num.face.color.copy(money).lerp(red, clamp01((f - (PAID - 5)) / 5));
        A.num.side.color.copy(A.num.face.color).multiplyScalar(0.2);
        haloRed.update(f, PAID);
        const s = stampAt(f);
        stamp.group.visible = s.on;
        stamp.group.position.set(...s.pos);
        stamp.group.rotation.y = s.yaw;
        plate.group.visible = f >= INF;
        plate.group.scale.setScalar(0.9 + 0.1 * popUp(f, INF, 8));
        haloInf.update(f, INF);
      },
    };
  },
};
