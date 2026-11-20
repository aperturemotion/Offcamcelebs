// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE DEAL (037 v2; SHOTS.md DEAL 1–4), the references' way (study README R1–R32): one chunky literal thing per sentence,
// each ENTERING BY ACTING, something happening every 1–1.5 s, the camera always moving.
//  DEAL 1 (dark stage) "In August 2021, Jack Dorsey's company, Square, agreed to buy Afterpay."
//    frame 0 is mid-action: the AUG 2021 plate is falling to the podium's foot; a glossy pawn rises behind the podium on
//    "Jack" as the microphone's ring and the nameplate JACK DORSEY light; the sign SQUARE swings in and lights on
//    "Square"; the gavel comes down on "agreed"; the AFTERPAY bag drops onto its plinth on "Afterpay".
//  HARD CUT to the LIGHT stage (a pale grey table seen from above: R5), one long table the camera travels along:
//  DEAL 2 "But Square didn't pay in cash."   a briefcase of banded cash lands open; its lid SLAMS; it slides off the table.
//  DEAL 3 "It paid in its own shares."       a press stamps SHARE tokens; each is flung onto the stack beside it.
//  DEAL 4 "For every Afterpay share, you got 0.375 of a Square share."   one AFTERPAY token drops into the exchange
//    machine; it rocks and blinks while its screen counts to 0.375, landing on the word as a three-eighths WEDGE slides
//    out of the chute with a ring of light; a whole SQUARE token drops beside the wedge on "Square share".
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { cue, cueEnd, word } from "../../r45/time";
import { ramp, clamp01, SOFT, SETTLE, EXIT, GLIDE } from "../../r45/tokens";
import { cut, dolly, travel, type CamKey3, type Vec } from "../cam";
import { stdLights, lightStageLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, MAT, block, litPlate, ring, dropIn, swingIn, popUp, countUp, joined } from "../kit";
import { enterOf } from "../timeline";
import { makePodium, PODIUM } from "../obj/podium";
import { makeBag } from "../obj/bag";
import { makeBriefcase } from "../obj/briefcase";
import { makePress, PRESS } from "../obj/press";
import { makeMachine, MACHINE } from "../obj/machine";
import { makeToken, makeTokenStack, makeWedge, TOKEN_T } from "../obj/token";

const S = "deal" as const;
const ENTER = enterOf(S);
// ── DEAL 1: the words ──
const AUG = word(S, 0, /^August/), JACK = word(S, 0, /^Jack/), SQUARE = word(S, 0, /^Square/), AGREED = word(S, 0, /^agreed/), AFTERPAY = word(S, 0, /^Afterpay/);
const PLATE_LAND = Math.max(ENTER + 8, AUG + 2), PAWN_UP = JACK - 10, SIGN_IN = SQUARE - 14, SIGN_LIT = SQUARE, GAVEL = AGREED + 1, BAG_LAND = AFTERPAY + 3;
// ── the hard cut to the light stage ──
const LC = Math.max(cueEnd(S, 0) + 2, cue(S, 1) - 4);
const DIDNT = word(S, 1, /^didn/), CASH = word(S, 1, /^cash/);
const CASE_LAND = LC + 4, SLAM = Math.max(DIDNT + 10, CASH - 8), SLIDE = CASH + 3, SLIDE_END = SLIDE + 13;
const T1 = SLIDE + 1, T1_DUR = 12;   // a whip: the table is never left empty for more than a few blurred frames
const SHARES = word(S, 2, /^shares/);
const STAMPS = [cue(S, 2) + 4, cue(S, 2) + 17, SHARES + 2];
const T2 = cue(S, 3) - 8, T2_DUR = 20;
const AFT3 = word(S, 3, /^Afterpay/), P375 = word(S, 3, /^\.375/), SQ3 = word(S, 3, /^Square/);
const TOKEN_IN = Math.max(T2 + T2_DUR + 4, AFT3 + 8), WEDGE_OUT = P375 - 6, WEDGE_REST = P375 + 1, WHOLE_LAND = SQ3 + 3;
// the table: three stations along x
const X0 = 0, X1 = 1200, X2 = 2500, STACK_X = 470;

export const DL3 = { plate: PLATE_LAND, pawn: PAWN_UP, sign: SIGN_LIT, gavel: GAVEL, bag: BAG_LAND, cut: LC, slam: SLAM, slide: SLIDE, stamps: STAMPS, tokenIn: TOKEN_IN, wedge: WEDGE_REST, whole: WHOLE_LAND } as const;

// ── acting curves ──
const gavelAt = (f: number) => {           // 1 = down on its block
  if (f < AGREED - 14) return 1;
  if (f < GAVEL - 4) return 1 - SOFT(clamp01((f - (AGREED - 14)) / (GAVEL - 4 - (AGREED - 14))));
  if (f < GAVEL) return EXIT(clamp01((f - (GAVEL - 4)) / 4));
  const t = f - GAVEL;                     // one small rebound
  return t < 6 ? 1 - 0.16 * Math.sin((Math.PI * t) / 6) : 1;
};
const lidAt = (f: number) => {             // 1 = shut
  if (f < SLAM - 9) return 0;
  if (f < SLAM) return EXIT(clamp01((f - (SLAM - 9)) / 9));
  const t = f - SLAM;
  return t < 5 ? 1 - 0.035 * Math.sin((Math.PI * t) / 5) : 1;
};
const ramAt = (f: number) => {
  let v = 0;
  for (const s of STAMPS) {
    if (f >= s - 4 && f < s) v = Math.max(v, EXIT(clamp01((f - (s - 4)) / 4)));
    else if (f >= s && f < s + 7) v = Math.max(v, 1 - SOFT(clamp01((f - s - 1) / 6)));
  }
  // already mid-cycle when the camera arrives: a stamp just before the first counted one
  const pre = STAMPS[0] - 13;
  if (f >= pre - 4 && f < pre) v = Math.max(v, EXIT(clamp01((f - (pre - 4)) / 4)));
  else if (f >= pre && f < pre + 7) v = Math.max(v, 1 - SOFT(clamp01((f - pre - 1) / 6)));
  return v;
};
const FLING = 6, FL0 = 6;   // ★ P14: a struck token is flung once the ram has lifted clear of it (it used to fly up through the ram's head)
const camX = (f: number) => {
  if (f < T1) return X0;
  if (f < T1 + T1_DUR) return X0 + (X1 - X0) * SOFT((f - T1) / T1_DUR);
  if (f < T2) return X1;
  if (f < T2 + T2_DUR) return X1 + (X2 - X1) * SOFT((f - T2) / T2_DUR);
  return X2;
};
const working = (f: number) => f >= TOKEN_IN + 3 && f < P375;

export const DealPlace: Place3 = {
  id: S, label: "3 The deal: a podium, a briefcase of cash, a press of shares, the exchange machine (0.375)", enter: ENTER,
  stage: "dark", stageAt: (f) => (f >= LC ? "light" : "dark"),
  shots: ({ from, to }): CamKey3[] => [
    // DEAL 1: low and close on the podium as the plate lands; rise to the pawn; pull out for the sign; push to the gavel and bag
    cut(from, [-620, 470, 2150], [40, 560, 60], { fov: 44, focus: [0, 500, 200], why: "low on the podium" }),
    dolly(from + 1, Math.max(24, JACK - from - 8), [-470, 760, 2500], [70, 760, 0], { fov: 44, ease: SOFT, why: "rise to the speaker" }),
    dolly(SIGN_IN - 2, 30, [-330, 1000, 3350], [120, 900, 0], { fov: 44, why: "pull out: the sign swings in" }),
    dolly(AGREED - 8, 36, [560, 900, 3450], [400, 720, 20], { fov: 44, why: "across to the gavel and the bag" }),
    // the light stage: high and slanted over the table
    cut(LC, [X0 - 190, 1780, 1750], [X0, 110, 20], { fov: 40, focus: [X0, 80, 0], why: "CUT: the table, the briefcase" }),
    dolly(LC + 1, T1 - LC - 2, [X0 + 40, 1560, 1520], [X0, 110, 20], { fov: 40, ease: SOFT, why: "push on the briefcase" }),
    travel(T1, T1_DUR, [X1 + 150, 1640, 1700], [X1 + 170, 330, 30], { fov: 40, why: "along the table to the press", vol: 0.5 }),
    dolly(T1 + T1_DUR + 1, T2 - (T1 + T1_DUR) - 2, [X1 + 210, 1480, 1500], [X1 + 190, 330, 30], { fov: 40, ease: SOFT, why: "push on the press" }),
    travel(T2, T2_DUR, [X2 - 60, 1950, 2200], [X2, 360, 150], { fov: 40, why: "along the table to the machine", vol: 0.5 }),
    dolly(T2 + T2_DUR + 1, Math.max(20, P375 - 16 - (T2 + T2_DUR + 1)), [X2 - 110, 1900, 2120], [X2, 330, 170], { fov: 40, ease: SOFT, why: "push on the machine" }),
    dolly(P375 - 14, Math.max(24, to - (P375 - 14) - 2), [X2 + 70, 1500, 2050], [X2 + 10, 200, 380], { fov: 40, ease: SOFT, why: "down to the chute: the wedge" }),
  ],
  lights: (f): Lights => {
    if (f >= LC) return lightStageLights([camX(f), 160, 0]);
    const L = stdLights([110, 760, 0], { s: 1.15, key: 3.4, rim: 3.2, back: 2.5, amb: 0.15 });
    const mic = ramp(f, JACK - 2, JACK + 6, SETTLE), sign = ramp(f, SIGN_LIT - 2, SIGN_LIT + 7, SETTLE);
    L.accent = { pos: [-80, 1060, 260], color: K.amber, i: 0.6 * mic };
    L.back!.i *= 0.8 + 0.3 * sign;
    return L;
  },
  blur: (f) => {
    if (dropIn(f, PLATE_LAND, { h: 900, fall: 12 }).fast || dropIn(f, BAG_LAND, { h: 1100, fall: 9 }).fast) return true;
    if (f >= GAVEL - 4 && f <= GAVEL + 1) return true;
    if (f >= SIGN_IN && f < SIGN_IN + 7) return true;
    if (dropIn(f, CASE_LAND, { h: 700, fall: 7 }).fast || (f >= SLAM - 5 && f <= SLAM + 1) || (f >= SLIDE + 3 && f <= SLIDE_END)) return true;
    if (STAMPS.some((s) => (f >= s - 3 && f <= s + 1) || (f >= s + FL0 && f <= s + FL0 + FLING))) return true;
    if (f >= TOKEN_IN - 9 && f <= TOKEN_IN + 3) return true;
    if (f >= WEDGE_OUT && f <= WEDGE_REST) return true;
    return dropIn(f, WHOLE_LAND, { h: 800, fall: 8 }).fast;
  },
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "thud", at: PLATE_LAND, vol: 0.35, why: "the AUG 2021 plate lands" },
    { kind: "move", s: "whooshsoft", at: PAWN_UP + 5, end: PAWN_UP + 16, vol: 0.3, why: "the pawn rises behind the podium" },
    { kind: "hit", s: "click", at: JACK, vol: 0.3, why: "the microphone's ring lights: Jack Dorsey" },
    { kind: "move", s: "swoosh", at: SIGN_IN + 5, end: SIGN_IN + 22, vol: 0.4, why: "the SQUARE sign swings in" },
    { kind: "hit", s: "pingshort", at: SIGN_LIT, vol: 0.3, why: "SQUARE lights" },
    { kind: "hit", s: "thud", at: GAVEL, vol: 0.55, why: "the gavel: agreed" },
    { kind: "hit", s: "thud", at: BAG_LAND, vol: 0.4, why: "the Afterpay bag lands" },
    { kind: "hit", s: "thud", at: CASE_LAND, vol: 0.4, why: "the briefcase of cash lands" },
    { kind: "hit", s: "thud", at: SLAM, vol: 0.6, why: "the lid slams: not in cash" },
    { kind: "move", s: "swoosh", at: SLIDE + 8, end: SLIDE_END + 6, vol: 0.45, why: "the briefcase slides off the table" },
    ...STAMPS.flatMap((s, i): PlaceCue[] => [
      { kind: "hit", s: "thud", at: s, vol: 0.4, why: `the press stamps share ${i + 1}` },
      { kind: "hit", s: "coin", at: s + FL0 + FLING, vol: 0.3, why: `share ${i + 1} lands on the stack` },
    ]),
    { kind: "hit", s: "coin", at: TOKEN_IN, vol: 0.4, why: "the Afterpay token drops into the machine" },
    { kind: "hit", s: "datashort", at: TOKEN_IN + 5, end: P375, vol: 0.3, why: "the machine works: its screen counts" },
    { kind: "hit", s: "pingshort", at: WEDGE_REST, vol: 0.4, why: "0.375: the wedge slides out" },
    { kind: "hit", s: "coin", at: WHOLE_LAND, vol: 0.35, why: "a whole Square share lands beside it" },
  ],
  build: () => {
    const group = new THREE.Group();
    // ══ DEAL 1: the dark set ══
    const dark = new THREE.Group();
    const podium = makePodium("JACK DORSEY");
    dark.add(podium.group);
    const aug = litPlate(["AUG 2021"], { size: 62, color: K.white, depth: 46 });
    const augG = new THREE.Group();
    aug.group.position.y = aug.h / 2;
    aug.group.rotation.x = -0.16;
    augG.add(aug.group);
    augG.position.set(-150, 0, PODIUM.d / 2 + 190);
    augG.rotation.y = 0.14;
    dark.add(augG);
    // the sign: SQUARE, hung on two rods from a pivot above
    const sign = litPlate(["SQUARE"], { size: 128, color: K.white, depth: 60 });
    const signPivot = new THREE.Group();
    signPivot.position.set(110, 1960, -520);
    sign.group.position.y = -560;
    signPivot.add(sign.group);
    for (const sx of [-1, 1]) {
      const rod = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 440, 12), MAT.satin());
      rod.position.set(sx * (sign.w / 2 - 70), -560 + sign.h / 2 + 220, 0);
      signPivot.add(rod);
    }
    dark.add(signPivot);
    const plinth = block(600, 250, 360, 24, MAT.black());   // ★ P14: wider, for the larger bag
    const bag = makeBag("deal").group;
    bag.rotation.y = -0.22;
    bag.position.y = 250;
    const bagG = new THREE.Group();        // the bag stands on its plinth; the two land as one piece
    bagG.position.set(880, 0, 150);                 // clear of the podium's top and the gavel
    bagG.add(plinth, bag);
    dark.add(bagG);
    group.add(dark);

    // ══ DEAL 2–4: the light table ══
    const light = new THREE.Group();
    const caseG = new THREE.Group();
    const bc = makeBriefcase();
    bc.group.rotation.y = 0.2;
    caseG.add(bc.group);
    light.add(caseG);
    const press = makePress();
    press.group.position.set(X1, 0, 0);
    press.group.rotation.y = -0.16;
    light.add(press.group);
    const stack = makeTokenStack("deal", 3 + STAMPS.length + 1);
    stack.group.position.set(X1 + STACK_X, 0, 110);
    light.add(stack.group);
    const flying = STAMPS.map((_, i) => { const t = makeToken("SHARE"); t.name = `flung-token-${i}`; light.add(t); return t; });
    const fresh = makeToken("SHARE");            // the token lying on the die between stamps
    fresh.name = "token-on-die";
    light.add(fresh);
    const machine = makeMachine();
    machine.group.position.set(X2, 0, 0);
    machine.group.rotation.y = 0.1;
    light.add(machine.group);
    const inTok = makeToken("AFTERPAY");
    light.add(inTok);
    const wedge = makeWedge(0.375);
    light.add(wedge);
    const whole = makeToken("SQUARE");
    light.add(whole);
    const halo = ring({ r: 900, w: 14, dur: 30 });
    halo.mesh.position.set(X2 - 90, 2, MACHINE.d / 2 + 360);
    light.add(halo.mesh);
    group.add(light);

    const DIE: Vec = [X1, PRESS.top + 1, PRESS.dieZ];     // a token lies ON the die pad, never in it
    joined(inTok, machine.group, "the token drops into the machine's hopper");
    joined(wedge, machine.group, "the wedge comes out of the machine's chute");
    return {
      group,
      update: (f) => {
        const isLight = f >= LC;
        dark.visible = !isLight; light.visible = isLight;
        if (!isLight) {
          const pd = dropIn(f, PLATE_LAND, { h: 900, fall: 12 });
          augG.visible = pd.on;
          augG.position.y = pd.y;
          aug.setLit(0.35 + 0.65 * ramp(f, PLATE_LAND, PLATE_LAND + 6, SETTLE));
          podium.update({ pawn: popUp(f, PAWN_UP, 15), mic: ramp(f, JACK - 2, JACK + 6, SETTLE), name: 0.25 + 0.75 * ramp(f, JACK - 2, JACK + 6, SETTLE), gavel: gavelAt(f) });
          const sw = swingIn(f, SIGN_IN, { amp: 1.15, period: 30, damp: 0.11 });
          signPivot.visible = sw.on;
          signPivot.rotation.x = -sw.a;
          sign.setLit(ramp(f, SIGN_LIT - 2, SIGN_LIT + 7, SETTLE));
          const bd = dropIn(f, BAG_LAND, { h: 1100, fall: 9 });
          bagG.visible = bd.on;
          bagG.position.y = bd.y;
          return;
        }
        // DEAL 2: the briefcase
        const cd = dropIn(f, CASE_LAND, { h: 700, fall: 7 });
        const slide = f < SLIDE ? 0 : EXIT(clamp01((f - SLIDE) / (SLIDE_END - SLIDE)));
        caseG.visible = cd.on && f < SLIDE_END + 2;
        caseG.position.set(X0 - slide * 2300, cd.y, 20 + slide * 260);
        caseG.rotation.y = slide * 0.5;
        bc.update({ lid: lidAt(f) });
        // DEAL 3: the press and its tokens
        press.update({ ram: ramAt(f) });
        let landed = 3;
        flying.forEach((t, i) => {
          const s = STAMPS[i], a = s + FL0, u = (f - a) / FLING;
          t.visible = u >= 0 && u < 1;
          if (u >= 1) landed++;
          if (!t.visible) return;
          const top = stack.h(3 + i);
          t.position.set(DIE[0] + (STACK_X - 0) * u + 0, DIE[1] + (top - DIE[1]) * u + 240 * 4 * u * (1 - u) * 0.5 + 0, DIE[2] + (110 - PRESS.dieZ) * u);
          // it leaves the die FLAT and low, and tumbles only once it is clear of the ram's head (it used to spin up into it)
          const tu = clamp01((u - 0.45) / 0.55);
          t.rotation.z = -tu * tu * (3 - 2 * tu) * Math.PI * 2;
          t.position.y += 70 * Math.sin(Math.PI * tu);   // it lifts as it turns, clear of the press's base
        });
        stack.update({ count: landed });
        // a struck token lies on the die from the ram's lift until it is flung
        const onDie = STAMPS.some((s) => f >= s + 1 && f < s + FL0) || (f >= STAMPS[0] - 12 && f < STAMPS[0] - 10);
        fresh.visible = onDie;
        fresh.position.set(DIE[0], DIE[1], DIE[2]);
        // DEAL 4: the exchange machine
        const tin = f - TOKEN_IN;
        inTok.visible = tin > -12 && tin < 5;
        if (inTok.visible) {
          const u = clamp01((tin + 12) / 12);
          inTok.position.set(X2 + 6, MACHINE.h + 60 + (1 - u * u) * 1200 - Math.max(0, tin) * 22, 0);
          inTok.rotation.y = 0.4;
        }
        const w = working(f);
        machine.update({
          value: countUp(f, TOKEN_IN + 6, P375, 0, 0.375).toFixed(3), on: ramp(f, TOKEN_IN + 2, TOKEN_IN + 9, SETTLE),
          lamp: w ? (Math.floor((f - TOKEN_IN) / 3) % 2 ? 1 : 0.25) : f >= P375 ? 1 : 0, shake: w ? Math.sin((f - TOKEN_IN) * 1.9) * (1 - 0.6 * clamp01((f - TOKEN_IN) / (P375 - TOKEN_IN))) : 0,
        });
        // the wedge slides down the tray and out onto the table
        const wu = GLIDE(clamp01((f - WEDGE_OUT) / (WEDGE_REST - WEDGE_OUT)));
        wedge.visible = f >= WEDGE_OUT;
        const mz = MACHINE.d / 2;
        wedge.position.set(X2 - 90 - 20 * wu, 150 * (1 - wu) * (1 - wu) + 0.5, mz + 20 + 340 * wu);
        wedge.rotation.y = 0.5 * (1 - wu) + 0.35;
        halo.update(f, WEDGE_REST);
        const wd = dropIn(f, WHOLE_LAND, { h: 800, fall: 8 });
        whole.visible = wd.on;
        whole.position.set(X2 + 330, wd.y, mz + 400);   // beside the chute's tray, clear of its lip
        whole.rotation.y = -0.25;
      },
    };
  },
};
void TOKEN_T;
