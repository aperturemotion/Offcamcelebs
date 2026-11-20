// ═════════════════════════════════════════════════════════════════════════════════════════════
// SET A · THE CRANE PLINTH (038; worker A; SHOTS.md row A; P16: real objects and the real crest and flag).
//  0 "The Glazers bought Manchester United for £790 million."  Frame 0 is mid-action: a yellow-and-black gantry crane,
//    the US flag on its beam and THE GLAZER FAMILY on its hook block, is lowering the real United crest onto a black-marble
//    plinth. The crest lands in its cradle; the plinth's flip sign reads BOUGHT BY: THE GLAZERS and its price slat counts
//    £0 → £790,000,000, landing on "790" with a gold ring of light.
//  1 "More than £500 million was borrowed."  The camera rises to the hook; on "borrowed" a red loan tag drops from the hook
//    block's bracket on its chain and counts to £540,000,000 (BORROWED: | 2005).
//  2 "And within a year, most of that debt was on United's own books."  A chain runs out link by link from the tag and
//    snaps onto the crest; the camera drops to the plinth's face, where a rubber stamp slams BILLED TO: MANCHESTER UNITED
//    in red, with a red ring.
// The set is shared with the verdict (the bookend): `setA(key)`.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, clamp01 } from "../../r45/tokens";
import { cut, dolly, crane, type CamKey3, type Vec } from "../cam";
import { stdLights, type Place3, type PlaceCue } from "../place";
import { K, countUp, ring, dropIn, joined, hangs, mounted, falling, backGlow } from "../kit";
import { makeCrest } from "../obj/crest";
import { makeCrane } from "../obj/crane";
import { makePlinth, PLINTH } from "../obj/plinth";
import { makeLoanTag, makeChain } from "../obj/loantag";
import { makeStamp } from "../obj/stamp";

// ── THE SET (shared with the verdict) ────────────────────────────────────────────────────────────────────────────────────
export const SET_A = { crest: 600, hookRest: 2120, tagChain: 7 } as const;   // ★ P17: an odd count: the first link runs through the bracket eye, the last through the tag's hole, both turned across them
export const setA = (key: string) => {
  const group = new THREE.Group(); group.userData.set = true;   // a set of objects (the checks: objectOf)
  const plinth = makePlinth(key);
  const crane_ = makeCrane(key);
  const crest = makeCrest(key, SET_A.crest);
  // the crest's centre when it stands in its cradle: the outline's foot plus the rim's bevel, seated ON the cradle (P17)
  const crestRest = plinth.top + SET_A.crest * (0.506 + 0.0162) - 0.3;
  crest.group.name = "crest";
  group.add(plinth.group, crane_.group, crest.group);
  // the slings from the master ring to the crest's shoulders (in the hook's frame at rest): each ends just inside the badge's
  //   gold rim (the outline's top at x = ±0.275 of its width is 0.363 of it up, plus the bevel)
  //   ★ P17: through two shackles set into the badge's rim at its shoulders (the slings used to end in the air over the rim)
  const dy = crestRest - SET_A.hookRest, sh = SET_A.crest * 0.275, shY = SET_A.crest * (0.363 + 0.0162) + 12.5;
  const shackles = [-1, 1].map((sx) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(14, 4.5, 10, 28), crane_.eye.material as THREE.Material);
    m.rotation.y = Math.PI / 2; m.position.set(sx * sh, shY, 0); m.name = "crest shackle"; m.castShadow = true; crest.group.add(m);
    return m;
  });
  crane_.slingTo([new THREE.Vector3(-sh, dy + shY, 0), new THREE.Vector3(sh, dy + shY, 0)], shackles);
  // the loan tag on its chain from the hook block's bracket eye
  const tag = makeLoanTag(key);
  const tagChain = makeChain(key + "-tag", SET_A.tagChain, true);
  // the chain that snaps from the tag onto the crest: from the tag's side eye to an eye on the crest's right rim
  const crestChain = makeChain(key + "-crest", 12);
  const crestEye = new THREE.Mesh(new THREE.TorusGeometry(15, 5, 10, 28), crane_.eye.material as THREE.Material);
  crestEye.position.set(SET_A.crest * 0.4847 + SET_A.crest * 0.0162 + 11, 0, 0); crestEye.rotation.x = Math.PI / 2; crestEye.name = "crest eye"; crestEye.castShadow = true;
  crest.group.add(crestEye);
  mounted(crestEye, crest.body, "the chain's eye is fixed in the crest's rim");
  group.add(tag.group, tagChain.group, crestChain.group);
  // the links interlock with the eyes they run through (a crossing inside the loop, out of sight)
  joined(tagChain.links[0], crane_.eye, "the tag's chain runs through the bracket's eye");
  hangs(tagChain.links[0], crane_.eye, "the tag's chain hangs from the bracket's eye", { linked: true });
  joined(tagChain.links[SET_A.tagChain - 1], tag.ring, "the chain's last link runs through the tag's grommet");
  hangs(tag.ring, tagChain.links[SET_A.tagChain - 1], "the tag hangs on the chain's last link by its grommet", { linked: true });
  joined(crestChain.links[0], tag.sideEye, "the crest chain runs through the tag's side eye");
  hangs(crestChain.links[0], tag.sideEye, "the crest chain is shackled to the tag's side eye", { linked: true });
  for (const l of crestChain.links) joined(l, crestEye, "the crest chain's end link runs through the crest's eye");
  /** the chain's start: a link hanging by its inside on the bracket eye's lower bar */
  const eyeW = () => crane_.eye.position.clone().add(crane_.hook.position);
  const chainTop = () => { const e = eyeW(); return new THREE.Vector3(e.x, e.y - (22 - 7) - tagChain.hangGap + tagChain.end, 0); };
  /** the tag's origin (its hole's top edge) at rest: on the inside of the chain's last link */
  const tagRestEye = () => { const a = chainTop(); return new THREE.Vector3(a.x, a.y - tagChain.reach + tagChain.end - tagChain.hangGap, 0); };
  return {
    group, plinth, crane: crane_, crest, crestRest, tag, tagChain, crestChain, crestEye,
    /** pose the set: the crest's height above its cradle; the tag (shown; `tagAngle`: the tag and its taut chain swung
     *  about the bracket eye, radians, + to the right); the crest chain's links shown (0…1) */
    pose: (p: { lift: number; tagOn: boolean; tagAngle: number; chain: number; tug: number }) => {
      crane_.update({ hookY: SET_A.hookRest + p.lift });
      crest.group.position.set(0, crestRest + p.lift, 0);
      crest.group.updateMatrix();
      tag.group.visible = p.tagOn; tagChain.group.visible = p.tagOn;
      // ★ P17: the tag never pops out of the air: it swings down on its full, taut chain about the bracket eye's bar, from
      //   behind (about x: `tagAngle` > 0 is back, away from the camera); the tug pulls it a little sideways (about z)
      const e = eyeW(), pivot = new THREE.Vector3(e.x, e.y - (22 - 7), 0);
      const th = p.tagAngle, tz = -0.05 * p.tug;
      const qr = new THREE.Quaternion().setFromEuler(new THREE.Euler(th, 0, tz));
      const rot = (v: THREE.Vector3) => v.clone().sub(pivot).applyQuaternion(qr).add(pivot);
      const rest = tagRestEye();
      const eye = rot(rest);
      tag.group.position.copy(eye);
      tag.group.quaternion.copy(qr);
      tag.group.updateMatrix();
      // the chain: from the bracket eye down to the link the tag's hole rests on (b: the last link's far end)
      tagChain.setEnds(rot(chainTop()), rot(new THREE.Vector3(rest.x, rest.y + tagChain.hangGap - tagChain.end, 0)));
      // the crest chain: from the tag's side eye to the crest's eye, link by link as it runs out
      const a = tag.sideEye.position.clone().applyMatrix4(tag.group.matrix);
      const c = crestEye.position.clone().applyMatrix4(crest.group.matrix);
      crestChain.group.visible = p.tagOn && p.chain > 0;
      crestChain.setEnds(a, c, Math.round(12 * clamp01(p.chain)));
    },
  };
};

// ── THE PLACE ───────────────────────────────────────────────────────────────────────────────────────────────────────────
const S = "hook" as const;
const N790 = word(S, 0, /^790/), C1 = cue(S, 1), BORROWED = word(S, 1, /^borrowed/), C2 = cue(S, 2);
const MOST = word(S, 2, /^most/), OWN = word(S, 2, /^own/);
const LAND = 38, COUNT: [number, number] = [LAND + 6, N790];
const SNAP: [number, number] = [MOST - 4, MOST + 10], SLAM = OWN, FLIP_OFF = OWN - 11;
export const HK = { land: LAND, count: COUNT, drop: BORROWED, snap: SNAP, slam: SLAM } as const;

/** the frame-0 pose: the film's opening; the verdict ends here (the film loops: R31) */
// ★ (038 review) every framing keeps the caption band (y 230–330) clear: the whole rig, beam and flag included, sits below it
export const OPENING = { pos: [-760, 1560, 4550] as Vec, look: [0, 2150, 0] as Vec, fov: 50, focus: [0, 1500, 0] as Vec } as const;
/** the sign framing (the count; the verdict's flip) */
export const SIGN = { pos: [-330, 1060, 2750] as Vec, look: [0, 970, 400] as Vec, fov: 42, focus: [0, 600, PLINTH.d / 2 + 100] as Vec } as const;
/** the stamp framing */
export const INK = { pos: [-360, 920, 2760] as Vec, look: [-50, 870, 300] as Vec, fov: 44, focus: [0, 266, PLINTH.d / 2] as Vec } as const;

/** the crane lowers the crest: its height above the cradle (frame 0 is mid-descent), landing on LAND with a small settle */
const lift = (f: number) => {
  if (f < LAND) { const t = clamp01((f + 14) / (LAND + 14)); return 300 * Math.pow(1 - t, 2.2); }
  const t = f - LAND;
  return 7 * Math.exp(-t / 5) * Math.sin(Math.min(Math.PI, (t / 6) * Math.PI));
};
/** ★ P17: the loan tag swings down into the frame on its taut chain from behind the hook block (before, it appeared in the
 *  air and fell), hangs straight on "borrowed" with a jerk, and its swing dies away */
const SWING = 8;
const tagSwing = (f: number) => {
  if (f < BORROWED - SWING) return { on: false, a: 1.45, fast: false };
  if (f < BORROWED) { const u = (f - (BORROWED - SWING)) / SWING; return { on: true, a: 1.45 * Math.cos((u * Math.PI) / 2), fast: true }; }
  const t = f - BORROWED;
  return { on: true, a: -0.16 * Math.exp(-t / 16) * Math.sin((t / 24) * Math.PI * 2), fast: false };
};
/** the stamp: in from the right, slam on SLAM, recoil away */
// ★ P17: a stamp with no hand is a thing THROWN: it is in the air for at most 20 frames (in 8, on the face 3, away 8)
export const STAMP_IN = 8, STAMP_HOLD = 3, STAMP_OUT = 8;
const stampAt = (f: number, slam: number) => {
  if (f < slam - STAMP_IN) return { on: false, k: 0, fast: false };
  if (f <= slam) { const u = clamp01((f - (slam - STAMP_IN)) / STAMP_IN); return { on: true, k: u * u, fast: u > 0.3 }; }
  if (f < slam + STAMP_HOLD) return { on: true, k: 1, fast: false };
  const u = clamp01((f - (slam + STAMP_HOLD)) / STAMP_OUT);
  return { on: u < 1, k: 1 - SOFT(u), fast: false };
};
/** the stamp's flight, declared to the support check */
export const stampFalls = (stamp: THREE.Object3D, slam: number) => falling(stamp, slam - STAMP_IN, slam + STAMP_HOLD + STAMP_OUT, "the stamp is swung in, slams, and is swung away");
export const stampPose = (stamp: THREE.Group, plinth: { faceZ: number; inkY: number }, f: number, slam: number) => {
  const s = stampAt(f, slam);
  stamp.visible = s.on;
  // it comes in level from the right (never up past the sign's bezel)
  const hit = new THREE.Vector3(0, plinth.inkY, plinth.faceZ + 0.6), rest = new THREE.Vector3(1500, plinth.inkY, 1650);
  stamp.position.copy(rest).lerp(hit, s.k);
  stamp.rotation.y = -0.8 * (1 - s.k);
  return s;
};

export const HookPlace: Place3 = {
  id: S, label: "1 Set A: the crane lowers the crest; £790,000,000; BORROWED £540,000,000; BILLED TO: MANCHESTER UNITED", enter: 0, stage: "dark",
  // ★ (038 review) the caption band stays clear in every frame: the wide opening drifts sideways (no crane down through
  //   the beam), then HARD CUTS to the sign as the crest lands, and to the hook-block framing as the tag drops (R23: an idea
  //   changes on a cut); moves inside a framing never sweep a lit object up through the band
  shots: ({ to }): CamKey3[] => [
    cut(0, OPENING.pos, OPENING.look, { fov: OPENING.fov, focus: OPENING.focus, why: "open on the crane lowering the crest" }),
    { ...dolly(1, LAND - 1, [OPENING.pos[0] + 260, OPENING.pos[1], OPENING.pos[2] - 120], [OPENING.look[0] + 220, OPENING.look[1], 0], { fov: OPENING.fov, ease: SOFT, why: "drift with the crest as it comes down" }), focus: OPENING.focus },
    cut(LAND, SIGN.pos, SIGN.look, { fov: SIGN.fov, focus: SIGN.focus, why: "cut to the sign as the crest lands" }),
    { ...dolly(LAND + 1, C1 - 4 - (LAND + 1), [-180, 1040, 2600], [0, 1010, 400], { fov: 42, ease: SOFT, why: "push in as the price counts" }), focus: SIGN.focus },
    // ★ P17 (one label, one figure): framed from the crest's shoulders up, so the plinth's sign (BOUGHT BY, the price) is
    //   below the frame while the nameplate and the tag are in it
    cut(C1 - 2, [450, 2330, 4700], [450, 2330, 0], { fov: 36, focus: [500, 1600, 0] as Vec, why: "cut to the hook block: nameplate, tag and crest in one frame" }),
    { ...dolly(C1 - 1, SNAP[0] - 2 - (C1 - 1), [520, 2330, 4620], [500, 2330, 0], { fov: 36, ease: SOFT, why: "drift as the tag swings down and the chain runs out" }), focus: [450, 1450, 0] as Vec },
    cut(SNAP[1] + 2, INK.pos, INK.look, { fov: INK.fov, focus: INK.focus, why: "cut to the crest and the plinth's face" }),
    { ...dolly(SNAP[1] + 3, to - (SNAP[1] + 3) - 1, [-300, 910, 2680], [-40, 875, 300], { fov: 44, ease: SOFT, why: "creep in on the ink" }), focus: INK.focus },
  ],
  lights: (f) => {
    const p790 = f >= N790 ? Math.exp(-(f - N790) / 12) : 0, pDrop = f >= BORROWED ? Math.exp(-(f - BORROWED) / 12) : 0, pSlam = f >= SLAM ? Math.exp(-(f - SLAM) / 14) : 0;
    const c: Vec = f < C1 - 2 ? [0, 900, 0] : f < SNAP[1] + 2 ? [420, 1350, 0] : [0, 500, 0];
    const L = stdLights(c, { s: 1.35, key: 3.5 + 1.0 * p790 + 0.8 * pDrop + 1.2 * pSlam });
    L.accent = { pos: f < C1 ? [0, 500, 1300] : f < SNAP[1] ? [600, 1500, 900] : [0, 300, 1200], color: f < C1 ? K.money : K.red, i: 2.4 * p790 + 2.0 * pDrop + 2.6 * pSlam };
    if (f >= SLAM) L.back = backGlow([0, 700, 0], K.red, 2.0 * (0.4 + 0.6 * pSlam));
    return L;
  },
  blur: (f) => f < 6 || tagSwing(f).fast || stampAt(f, SLAM).fast,
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "chainshort", at: 1, vol: 0.4, why: "the crane's hoist lowers the crest" },
    { kind: "hit", s: "thud", at: LAND, vol: 0.5, why: "the crest lands in its cradle" },
    { kind: "hit", s: "datashort", at: COUNT[0], end: COUNT[1], vol: 0.35, why: "the price slat counts" },
    { kind: "hit", s: "sub", at: N790, vol: 0.5, why: "£790,000,000 lands" },
    { kind: "hit", s: "pingshort", at: N790 + 1, vol: 0.3, why: "the gold ring" },
    { kind: "move", s: "whooshsoft", at: C1 + 10, end: BORROWED - 10, vol: 0.3, why: "rise to the hook" },
    { kind: "hit", s: "chainshort", at: BORROWED - 7, vol: 0.45, why: "the loan tag swings down on its chain" },
    { kind: "hit", s: "thud", at: BORROWED, vol: 0.4, why: "the tag jerks to a stop" },
    { kind: "hit", s: "datashort", at: BORROWED + 1, end: BORROWED + 16, vol: 0.3, why: "the tag counts to £540,000,000" },
    { kind: "hit", s: "chain", at: SNAP[0], end: SNAP[1], vol: 0.4, why: "the chain runs out to the crest" },
    { kind: "hit", s: "click", at: SNAP[1], vol: 0.45, why: "the chain snaps onto the crest" },
    { kind: "hit", s: "flick", at: FLIP_OFF + 3, vol: 0.35, why: "BOUGHT BY: THE GLAZERS flips away to a blank slat" },
    { kind: "move", s: "whooshsoft", at: SLAM - 3, end: SLAM, vol: 0.4, why: "the stamp swings in" },
    { kind: "hit", s: "thud", at: SLAM, vol: 0.6, why: "the stamp slams: BILLED TO: MANCHESTER UNITED" },
    { kind: "hit", s: "sub", at: SLAM, vol: 0.4, why: "the slam's weight" },
    { kind: "hit", s: "pingshort", at: SLAM + 1, vol: 0.3, why: "the red ring" },
  ],
  build: () => {
    const group = new THREE.Group();
    const A = setA("hook");
    group.add(A.group);
    const gold = ring({ r: 1500, color: K.money, dur: 30 }); gold.mesh.position.set(0, 1.5, PLINTH.d / 2 + 300);
    const redR = ring({ r: 1600, color: K.red, dur: 30 }); redR.mesh.position.set(0, 1.5, PLINTH.d / 2 + 300);
    const tagR = ring({ r: 1100, color: K.red, dur: 26 }); tagR.mesh.position.set(640, 1.5, 300);
    const stamp = makeStamp("hook");
    stamp.group.scale.set(1.32, 1.38, 1);
    stampFalls(stamp.group, SLAM);
    group.add(gold.mesh, redR.mesh, tagR.mesh, stamp.group);
    return {
      group,
      update: (f) => {
        const sw = tagSwing(f);
        const chain = clamp01((f - SNAP[0]) / (SNAP[1] - SNAP[0]));
        const tug = f >= SNAP[1] ? Math.exp(-(f - SNAP[1]) / 8) : 0;
        A.pose({ lift: lift(f), tagOn: sw.on, tagAngle: sw.a, chain, tug });
        A.tag.set(countUp(f, BORROWED + 1, BORROWED + 16, 0, 540e6));
        // ★ P17: BOUGHT BY flips away (its back is blank) before BILLED TO is stamped: one label at a time
        A.plinth.update({ count: f < COUNT[0] ? 0 : countUp(f, COUNT[0], COUNT[1], 0, 790e6), flip1: SOFT(clamp01((f - FLIP_OFF) / 6)), flip2: 0, ink: f >= SLAM ? 1 : 0, lit: 1 });
        stampPose(stamp.group, A.plinth, f, SLAM);
        gold.update(f, N790); tagR.update(f, BORROWED); redR.update(f, SLAM);
      },
    };
  },
};
