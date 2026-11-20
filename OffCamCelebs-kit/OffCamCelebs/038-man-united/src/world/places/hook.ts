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
import { K, countUp, ring, dropIn, joined, backGlow } from "../kit";
import { makeCrest } from "../obj/crest";
import { makeCrane } from "../obj/crane";
import { makePlinth, PLINTH } from "../obj/plinth";
import { makeLoanTag, makeChain } from "../obj/loantag";
import { makeStamp } from "../obj/stamp";

// ── THE SET (shared with the verdict) ────────────────────────────────────────────────────────────────────────────────────
export const SET_A = { crest: 600, hookRest: 2120, tagChain: 8 } as const;
export const setA = (key: string) => {
  const group = new THREE.Group();
  const plinth = makePlinth(key);
  const crane_ = makeCrane(key);
  const crest = makeCrest(key, SET_A.crest);
  const crestRest = plinth.top + SET_A.crest * (0.506 + 0.0162) + 3;   // the outline's foot plus the rim's bevel   // the crest's centre when it stands in its cradle
  crest.group.name = "crest";
  group.add(plinth.group, crane_.group, crest.group);
  // the slings from the hook's eye to the crest's shoulders (in the hook's frame at rest)
  const dy = crestRest - SET_A.hookRest;
  crane_.slingTo([new THREE.Vector3(-165, dy + 255, 0), new THREE.Vector3(165, dy + 255, 0)], crest.group);
  // the loan tag on its chain from the hook block's bracket
  const tag = makeLoanTag(key);
  const tagChain = makeChain(key + "-tag", SET_A.tagChain);
  // the chain that snaps from the tag onto the crest
  const crestChain = makeChain(key + "-crest", 12);
  group.add(tag.group, tagChain.group, crestChain.group);
  joined(tagChain.links[0], crane_.eye, "the tag's chain hangs from the bracket's eye");
  joined(tagChain.links[SET_A.tagChain - 1], tag.ring, "the tag's chain runs through its grommet");
  joined(tagChain.links[SET_A.tagChain - 1], tag.group.children[1], "the chain's last link sits in the tab");
  joined(crestChain.links[0], tag.body, "the chain is shackled to the tag's edge");
  for (const l of crestChain.links) joined(l, crest.group, "the chain's end is shackled to the crest's rim (only the link that reaches it touches it)");
  const bracketW = () => new THREE.Vector3().copy(crane_.bracket).add(crane_.hook.position);
  const tagRestEye = () => { const b = bracketW(); return new THREE.Vector3(b.x, b.y - tagChain.reach - 4, 0); };
  return {
    group, plinth, crane: crane_, crest, crestRest, tag, tagChain, crestChain,
    /** pose the set: the crest's height above its cradle; the tag (shown, its drop height, its swing); the crest chain's
     *  links shown (0…7) */
    pose: (p: { lift: number; tagOn: boolean; tagY: number; tagSwing: number; chain: number; tug: number }) => {
      crane_.update({ hookY: SET_A.hookRest + p.lift });
      crest.group.position.set(0, crestRest + p.lift, 0);
      tag.group.visible = p.tagOn; tagChain.group.visible = p.tagOn;
      const eye = tagRestEye(); eye.y += p.tagY;
      tag.group.position.copy(eye);
      tag.group.rotation.z = p.tagSwing - 0.05 * p.tug;
      tag.group.updateMatrix();
      const b = bracketW();
      tagChain.setEnds(new THREE.Vector3(b.x, b.y, 0), new THREE.Vector3(eye.x, eye.y + 6, 0));
      // the crest chain: from the tag's left edge to the crest's right rim, link by link as it runs out
      const a = new THREE.Vector3(-tag.w / 2 - 6, tag.bottom + 60, 0).applyMatrix4(tag.group.matrix);
      const c = new THREE.Vector3(SET_A.crest * 0.516 + 4, crestRest + p.lift - 4, 0);
      crestChain.group.visible = p.chain > 0;
      crestChain.setEnds(a, c, Math.round(12 * clamp01(p.chain)));
    },
  };
};

// ── THE PLACE ───────────────────────────────────────────────────────────────────────────────────────────────────────────
const S = "hook" as const;
const N790 = word(S, 0, /^790/), C1 = cue(S, 1), BORROWED = word(S, 1, /^borrowed/), C2 = cue(S, 2);
const MOST = word(S, 2, /^most/), OWN = word(S, 2, /^own/);
const LAND = 38, COUNT: [number, number] = [LAND + 6, N790];
const SNAP: [number, number] = [MOST - 4, MOST + 10], SLAM = OWN;
export const HK = { land: LAND, count: COUNT, drop: BORROWED, snap: SNAP, slam: SLAM } as const;

/** the frame-0 pose: the film's opening; the verdict ends here (the film loops: R31) */
export const OPENING = { pos: [-720, 1480, 3150] as Vec, look: [0, 1840, 0] as Vec, fov: 50, focus: [0, 1600, 0] as Vec } as const;
/** the sign framing (the count; the verdict's flip) */
export const SIGN = { pos: [-330, 780, 2750] as Vec, look: [0, 640, 400] as Vec, fov: 42, focus: [0, 600, PLINTH.d / 2 + 100] as Vec } as const;
/** the stamp framing */
export const INK = { pos: [-320, 400, 2420] as Vec, look: [0, 300, 320] as Vec, fov: 42, focus: [0, 266, PLINTH.d / 2] as Vec } as const;

/** the crane lowers the crest: its height above the cradle (frame 0 is mid-descent), landing on LAND with a small settle */
const lift = (f: number) => {
  if (f < LAND) { const t = clamp01((f + 14) / (LAND + 14)); return 300 * Math.pow(1 - t, 2.2); }
  const t = f - LAND;
  return 7 * Math.exp(-t / 5) * Math.sin(Math.min(Math.PI, (t / 6) * Math.PI));
};
/** the stamp: in from the right, slam on SLAM, recoil away */
const stampAt = (f: number, slam: number) => {
  if (f < slam - 13) return { on: false, k: 0, fast: false };
  if (f <= slam) { const u = clamp01((f - (slam - 13)) / 13); return { on: true, k: u * u, fast: u > 0.3 }; }
  if (f < slam + 4) return { on: true, k: 1, fast: false };
  const u = clamp01((f - (slam + 4)) / 16);
  return { on: u < 1, k: 1 - SOFT(u), fast: false };
};
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
  shots: ({ to }): CamKey3[] => [
    cut(0, OPENING.pos, OPENING.look, { fov: OPENING.fov, focus: OPENING.focus, why: "open on the crane lowering the crest" }),
    { ...crane(1, LAND + 10, SIGN.pos, SIGN.look, { fov: SIGN.fov, bulge: [0, 0, 140], why: "crane down with the crest onto the sign" }), focus: SIGN.focus },
    { ...dolly(LAND + 12, C1 - 4 - (LAND + 12), [-180, 720, 2560], [0, 640, 400], { fov: 42, ease: SOFT, why: "push in as the price counts" }), focus: SIGN.focus },
    { ...crane(C1 - 2, BORROWED - 10 - (C1 - 2), [1080, 1760, 2900], [720, 1560, 0], { fov: 44, bulge: [80, 0, 160], why: "rise to the hook block" }), focus: [760, 1500, 0] as Vec },
    { ...dolly(BORROWED - 8, C2 + 6 - (BORROWED - 8), [1000, 1680, 2650], [740, 1480, 0], { fov: 44, ease: SOFT, why: "hold on the tag as it drops" }), focus: [780, 1460, 0] as Vec },
    { ...crane(C2 + 7, SNAP[0] - 2 - (C2 + 7), [940, 1420, 2650], [660, 1360, 0], { fov: 44, bulge: [0, 0, 100], why: "down the tag to the crest" }), focus: [460, 1330, 0] as Vec },
    { ...dolly(SNAP[1] + 2, SLAM - 14 - (SNAP[1] + 2), INK.pos, INK.look, { fov: INK.fov, why: "drop to the plinth's face" }), focus: INK.focus },
    { ...dolly(SLAM - 10, to - (SLAM - 10) - 1, [-240, 380, 2280], [0, 300, 320], { fov: 42, ease: SOFT, why: "creep in on the ink" }), focus: INK.focus },
  ],
  lights: (f) => {
    const p790 = f >= N790 ? Math.exp(-(f - N790) / 12) : 0, pDrop = f >= BORROWED ? Math.exp(-(f - BORROWED) / 12) : 0, pSlam = f >= SLAM ? Math.exp(-(f - SLAM) / 14) : 0;
    const c: Vec = f < C1 - 2 ? [0, 900, 0] : f < SNAP[1] + 2 ? [420, 1350, 0] : [0, 500, 0];
    const L = stdLights(c, { s: 1.35, key: 3.5 + 1.0 * p790 + 0.8 * pDrop + 1.2 * pSlam });
    L.accent = { pos: f < C1 ? [0, 500, 1300] : f < SNAP[1] ? [600, 1500, 900] : [0, 300, 1200], color: f < C1 ? K.money : K.red, i: 2.4 * p790 + 2.0 * pDrop + 2.6 * pSlam };
    if (f >= SLAM) L.back = backGlow([0, 700, 0], K.red, 2.0 * (0.4 + 0.6 * pSlam));
    return L;
  },
  blur: (f) => f < 6 || dropIn(f, BORROWED, { h: 230, fall: 8 }).fast || stampAt(f, SLAM).fast,
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "chainshort", at: 1, vol: 0.4, why: "the crane's hoist lowers the crest" },
    { kind: "hit", s: "thud", at: LAND, vol: 0.5, why: "the crest lands in its cradle" },
    { kind: "hit", s: "datashort", at: COUNT[0], end: COUNT[1], vol: 0.35, why: "the price slat counts" },
    { kind: "hit", s: "sub", at: N790, vol: 0.5, why: "£790,000,000 lands" },
    { kind: "hit", s: "pingshort", at: N790 + 1, vol: 0.3, why: "the gold ring" },
    { kind: "move", s: "whooshsoft", at: C1 + 10, end: BORROWED - 10, vol: 0.3, why: "rise to the hook" },
    { kind: "hit", s: "chainshort", at: BORROWED - 7, vol: 0.45, why: "the loan tag drops on its chain" },
    { kind: "hit", s: "thud", at: BORROWED, vol: 0.4, why: "the tag jerks to a stop" },
    { kind: "hit", s: "datashort", at: BORROWED + 1, end: BORROWED + 16, vol: 0.3, why: "the tag counts to £540,000,000" },
    { kind: "hit", s: "chain", at: SNAP[0], end: SNAP[1], vol: 0.4, why: "the chain runs out to the crest" },
    { kind: "hit", s: "click", at: SNAP[1], vol: 0.45, why: "the chain snaps onto the crest" },
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
    joined(stamp.group, A.plinth.body, "the stamp's pad meets the marble face");
    group.add(gold.mesh, redR.mesh, tagR.mesh, stamp.group);
    return {
      group,
      update: (f) => {
        const d = dropIn(f, BORROWED, { h: 230, fall: 8 });
        const swing = f >= BORROWED ? 0.07 * Math.exp(-(f - BORROWED) / 18) * Math.sin(((f - BORROWED) / 22) * Math.PI * 2) : 0;
        const chain = clamp01((f - SNAP[0]) / (SNAP[1] - SNAP[0]));
        const tug = f >= SNAP[1] ? Math.exp(-(f - SNAP[1]) / 8) : 0;
        A.pose({ lift: lift(f), tagOn: d.on, tagY: d.y, tagSwing: swing, chain, tug });
        A.tag.set(countUp(f, BORROWED + 1, BORROWED + 16, 0, 540e6));
        A.plinth.update({ count: f < COUNT[0] ? 0 : countUp(f, COUNT[0], COUNT[1], 0, 790e6), flip1: 0, flip2: 0, ink: f >= SLAM ? 1 : 0, lit: 1 });
        stampPose(stamp.group, A.plinth, f, SLAM);
        gold.update(f, N790); tagR.update(f, BORROWED); redR.update(f, SLAM);
      },
    };
  },
};
