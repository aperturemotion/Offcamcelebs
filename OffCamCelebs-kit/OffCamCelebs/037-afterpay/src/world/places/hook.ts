// ═════════════════════════════════════════════════════════════════�
// PLACE 1 · THE HOOK (037 v2; worker A; SHOTS.md rows HOOK 1–3; study rules R7–R19, R21–R26, R29, R31).
//  1 "An American company bought Afterpay for twenty-nine billion dollars."  Frame 0 is mid-action: a crane hook is lowering
//    a thick slab PRICE TAG on its chain onto a plinth that carries a chunky shopping bag marked AFTERPAY; the camera
//    cranes down with it. The tag swings and settles; solid numerals on the floor count up to $29,000,000,000 and LAND on
//    "billion" with a ring of light.
//  2 "But when the deal closed, its own filing put the price at thirteen point eight."  A whip along the set to a heavy
//    steel filing cabinet; its top drawer rolls open on "filing" with a clunk; the lit plate inside counts to
//    $13.8 BILLION and lands on "thirteen point eight" with a ring.
//  3 "So which number is right?"  Hard cut: two plinths drop in side by side, $29B and $13.8B standing on them, a spot
//    swinging from one to the other; the camera pulls out and up.
// ═════════════════════════════════════════════════════════════════�
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, clamp01 } from "../../r45/tokens";
import { cut, dolly, crane, travel, mixV, type CamKey3, type Vec } from "../cam";
import { stdLights, type Place3, type PlaceCue } from "../place";
import { MAT, K, block, counter, countUp, dollars, ring, dropIn, lit, textOn, freeText } from "../kit";
import { makeTag, TAG } from "../obj/tag";
import { makeBag } from "../obj/bag";
import { makeDrawer } from "../obj/drawer";

// ── the set both the hook and the verdict stand on: the plinth, the bag, the tag on its crane, the floor numerals ──
// ★ P14: the plinth is 800 wide (it was 640): the larger AFTERPAY bag stands on it and the INFLATED plate fits its face
export const HOOK_STAGE = { plinthW: 800, plinthH: 340, plinthD: 560, tagY: 1190, numZ: 610, numW: 1000, centre: [0, 700, 0] as Vec } as const;
export const tagSet = (key: string) => {
  const S = HOOK_STAGE;
  const group = new THREE.Group();
  const plinth = block(S.plinthW, S.plinthH, S.plinthD, 28, MAT.black());
  plinth.name = "plinth";
  group.add(plinth);
  const bag = makeBag(key);
  bag.group.scale.setScalar(1.15);
  bag.group.position.y = S.plinthH;
  const tag = makeTag(key);
  const pivotY = S.tagY + TAG.centre;
  tag.group.position.set(0, pivotY, 0);
  const num = counter({ size: 110, color: K.money });
  num.set(dollars(29e9));
  const k = S.numW / ((num.group.userData.width as number) * 1.14);
  num.group.scale.set(1.14 * k, k, k);
  // lifted by the comma's tail (0.25 em), so the commas stand ON the floor and are not cut by it
  num.group.position.set(0, 0.25 * 110 * k, S.numZ);
  freeText(num.group, "solid numerals standing on the floor");
  const halo = ring({ r: 1500, color: K.money, dur: 30 });
  halo.mesh.position.set(0, 1.5, S.numZ);
  group.add(bag.group, tag.group, num.group, halo.mesh);
  return { group, tag, num, halo, pivotY, plinth };
};
/** the opening framing once the crane has come down: the verdict cuts back to exactly this (the film loops: R31) */
export const OPENING = { pos: [-300, 500, 3750] as Vec, look: [0, 540, 150] as Vec, fov: 42, push: { pos: [-130, 470, 3420] as Vec, look: [0, 530, 150] as Vec }, numFocus: [0, 80, 610] as Vec } as const;

const S = "hook" as const;
const N29 = word(S, 0, /^\$29/), LAND29 = word(S, 0, /^billion/);
const FILING = word(S, 1, /^filing/), N138 = word(S, 1, /^13/), C1 = cue(S, 1), C2 = cue(S, 2), RIGHT = word(S, 2, /^right/);
// ★ the third shot is reached by a WHIP, not an inner cut: the engine's motion blur samples sub-frames across a cut INSIDE
//   a place (its speed test straddles it), which mixed the two pictures on the cut frame
const WHIP = C1 - 6, WHIP_DUR = 13, QW = C2 - 7, QW_DUR = 9, QCUT = QW + 5, DROP_A = C2 + 4, DROP_B = C2 + 15;
const XD = 3000, XQ = -3200, DS = 1.7;
/** the tag is lowered: its height above rest (frame 0 is mid-descent), and its swing */
const lower = (f: number) => { const t = clamp01((f + 10) / 50); return 900 * Math.pow(1 - t, 3); };
const sway = (f: number) => 0.2 * Math.exp(-0.028 * Math.max(0, f)) * Math.cos((2 * Math.PI * (f + 6)) / 44);
const openAt = (f: number) => {
  const t = clamp01((f - (FILING - 12)) / 14), e = 1 - Math.pow(1 - t, 3);
  return e - 0.045 * Math.sin(Math.PI * clamp01((f - FILING - 2) / 9));
};
export const HK = { count: [N29 - 6, LAND29] as [number, number], whip: WHIP, open: [FILING - 12, FILING + 2] as [number, number], count138: [N138 - 22, N138] as [number, number], drops: [DROP_A, DROP_B] as [number, number] } as const;

export const HookPlace: Place3 = {
  id: S, label: "1 Hook: the price tag, $29,000,000,000; the filing drawer, $13.8 billion", enter: 0, stage: "dark",
  shots: ({ to }): CamKey3[] => [
    cut(0, [-520, 1560, 3300], [0, 1620, 0], { fov: 44, focus: [0, 1500, 0], why: "open on the tag, mid-descent" }),
    { ...crane(1, 46, OPENING.pos, OPENING.look, { fov: OPENING.fov, bulge: [0, 0, 160], why: "crane down with the tag" }), whoosh: undefined },
    { ...dolly(48, WHIP - 49, OPENING.push.pos, OPENING.push.look, { fov: 42, ease: SOFT, why: "push in as the figure counts" }), focus: OPENING.numFocus },
    travel(WHIP, WHIP_DUR, [XD - 1050, 1500, 2900], [XD, 760, 300], { fov: 42, why: "whip along the set to the filing drawer", vol: 0.7 }),
    dolly(WHIP + WHIP_DUR + 1, QW - (WHIP + WHIP_DUR + 1) - 1, [XD - 560, 1950, 2150], [XD, 800, 420], { fov: 42, ease: SOFT, why: "push in and rise over the open drawer" }),
    { ...travel(QW, QW_DUR, [XQ - 420, 640, 2950], [XQ - 40, 640, 0], { fov: 42, why: "whip back along the set to the two figures", vol: 0.7 }), focus: [XQ, 700, 60] as Vec },
    { ...dolly(QW + QW_DUR + 1, to - (QW + QW_DUR + 1) - 1, [XQ + 80, 820, 3550], [XQ, 600, 0], { fov: 42, ease: SOFT, why: "pull out and up" }), focus: [XQ, 700, 60] as Vec },
  ],
  lights: (f) => {
    if (f >= QCUT) {
      // the spot swings from one figure to the other, then rests on both
      const sw = Math.sin((f - DROP_B) / 7) * clamp01((f - DROP_B) / 6) * (1 - clamp01((f - (RIGHT - 2)) / 8));
      const L = stdLights([XQ, 640, 0], { s: 1.2, key: 3.8 });
      L.key.at = [XQ + 330 * sw, 620, 0];
      L.key.angle = 0.3 + 0.12 * clamp01((f - (RIGHT - 2)) / 8);
      return L;
    }
    const t = SOFT(clamp01((f - WHIP) / WHIP_DUR));
    const c = mixV(HOOK_STAGE.centre, [XD, 640, 250], t);
    const p29 = f >= LAND29 ? Math.exp(-(f - LAND29) / 11) : 0, p138 = f >= N138 ? Math.exp(-(f - N138) / 11) : 0;
    const L = stdLights(c, { s: 1.3, key: 3.5 + 1.1 * p29 + 0.9 * p138 });
    L.accent = { pos: t < 0.5 ? [0, 260, 1100] : [XD, 1200, 900], color: K.money, i: 2.4 * (t < 0.5 ? p29 : p138) };
    return L;
  },
  blur: (f) => f < 12 || (f >= FILING - 12 && f <= FILING - 3) || dropIn(f, DROP_A).fast || dropIn(f, DROP_B).fast,
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "chainshort", at: 2, vol: 0.4, why: "the crane lowers the tag on its chain" },
    { kind: "hit", s: "thud", at: 40, vol: 0.3, why: "the tag settles over the bag" },
    { kind: "hit", s: "datashort", at: HK.count[0], end: LAND29, vol: 0.35, why: "the floor numerals count up" },
    { kind: "hit", s: "sub", at: LAND29, vol: 0.5, why: "$29,000,000,000 lands; the ring spreads" },
    { kind: "hit", s: "pingshort", at: LAND29 + 1, vol: 0.3, why: "the ring of light" },
    { kind: "move", s: "lowwoosh", at: FILING - 5, end: FILING + 3, vol: 0.4, why: "the drawer rolls open" },
    { kind: "hit", s: "thud", at: FILING + 2, vol: 0.45, why: "the drawer hits its stop" },
    { kind: "hit", s: "datashort", at: HK.count138[0], end: N138, vol: 0.3, why: "the plate counts" },
    { kind: "hit", s: "pingshort", at: N138, vol: 0.35, why: "$13.8 BILLION lands" },
    { kind: "hit", s: "thud", at: DROP_A, vol: 0.45, why: "the $29B plinth drops in" },
    { kind: "hit", s: "thud", at: DROP_B, vol: 0.45, why: "the $13.8B plinth drops in" },
    { kind: "hit", s: "tick", at: RIGHT - 2, vol: 0.3, why: "the spot rests on both" },
  ],
  build: () => {
    const group = new THREE.Group();
    const A = tagSet("hook");
    group.add(A.group);
    // the filing cabinet, further along the same floor
    const drawer = makeDrawer("hook");
    drawer.group.scale.setScalar(DS);
    drawer.group.position.set(XD, 0, 0);
    const haloD = ring({ r: 1300, color: K.money, dur: 28 });
    haloD.mesh.position.set(XD, 1.5, 420);
    group.add(drawer.group, haloD.mesh);
    // the two figures
    const fig = (x: number, str: string, color: string, size: number) => {
      const g = new THREE.Group();
      const pl = block(620, 640, 460, 26, MAT.black());
      g.add(pl);
      const n = counter({ size, color });
      n.set(str);
      n.group.position.set(0, 640, 30);
      textOn(n.group, pl, { stand: true, inset: 26 });   // the figure STANDS on its plinth: its footprint lies on the top
      g.add(n.group);
      g.position.x = x;
      group.add(g);
      return g;
    };
    const figA = fig(XQ - 330, "$29B", K.money, 132), figB = fig(XQ + 330, "$13.8B", K.white, 98);
    void lit;
    return {
      group,
      update: (f) => {
        A.tag.group.position.y = A.pivotY + lower(f);
        A.tag.update({ swing: sway(f), lit: 0.35 + 0.65 * clamp01((f - 30) / 10) });
        A.num.group.visible = f >= HK.count[0];
        A.num.set(dollars(countUp(f, HK.count[0], LAND29, 10.2e9, 29e9)));
        A.halo.update(f, LAND29);
        const cv = countUp(f, HK.count138[0], N138, 1.2, 13.8);
        drawer.update({ open: openAt(f), value: `$${cv.toFixed(1)} BILLION`, lit: clamp01((f - (HK.count138[0] - 4)) / 5) });
        haloD.update(f, N138);
        const a = dropIn(f, DROP_A, { h: 1500 }), b = dropIn(f, DROP_B, { h: 1500 });
        figA.visible = f >= QCUT && a.on; figA.position.y = a.y;
        figB.visible = f >= QCUT && b.on; figB.position.y = b.y;
      },
    };
  },
};
