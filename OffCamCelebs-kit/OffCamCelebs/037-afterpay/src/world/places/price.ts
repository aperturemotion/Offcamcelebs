// PLACE 4 · THE PRICE, in the world (rule P12): the sum as a physical LINE-UP on the floor the camera travels along:
//   the stack of shares  ×  the LED share-price board  =  the hanging tag.
//  0 "At the time, one Square share was worth $247."   the camera arrives through the dark LOW under the LED board,
//       looking up at it, three-quarter; on "worth" the dot matrix lights, $247.26 | 30 JUL 2021 (khaki: documented), and
//       the camera rises slowly round it.
//  1 "That's where 29 billion came from."   it swings back to the head of the line: the stack of SQUARE SHARES slides in
//       on its plinth out of the dark; then it TRACKS along the sum (the solid × lights, the board, the solid = lights) and
//       climbs to the hanging tag as its lamp comes up on "29": $29,000,000,000 (mint: the headline figure).
// The × and = are solid white signs standing on the floor (figures and signs are things: P4). Anchored on the take's words.
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { ramp, SETTLE, SOFT, GLIDE } from "../../r45/tokens";
import { rbox } from "../../three/kit029";
import { SM, C } from "../../three/studio";
import { makeLed } from "../../three/obj/led";
import { makeCerts } from "../../three/obj/certs";
import { makeTag } from "../../three/obj/tag";
import { PRICE } from "../../audit/record";
import { orbit, orbitPos, dolly, travel, mixV, type CamKey3, type Vec } from "../cam";
import type { Place3 } from "../place";

const S = "price" as const;
const WORTH = word(S, 0, /^worth/), N247 = word(S, 0, /^\$247/), N29 = word(S, 1, /^29/);
const IN = 34;                                                   // the travel in through the dark
const LED = { w: 820, h: 390, legs: 560 }, LED_C: Vec = [0, LED.legs + LED.h / 2, 0];
const PLINTH = { w: 760, h: 150, d: 560 }, STK = { w: 600, d: 420, n: 44, t: 7 };
const STACK: Vec = [-1560, 0, 80], STACK_C: Vec = [STACK[0], PLINTH.h + 170, STACK[2]];
const TIMES: Vec = [-760, 430, 120], EQ: Vec = [780, 430, 120];
const TW = 800, TH = 340, CORD = 760;
const TAG_C: Vec = [1640, 800, 60], HANG: Vec = [TAG_C[0], TAG_C[1] + TH / 2 + CORD, TAG_C[2]];

// the beats: the board lights; back to the stack; the track along the sum; the climb to the tag
const BACK = N247 + 12;
const TRACK = Math.max(BACK + 40, N29 - 40), CLIMB = TRACK + 46;
export const PR3 = { on: [WORTH - 8, WORTH + 6], stack: [BACK + 4, BACK + 32], times: [TRACK + 6, TRACK + 16], eq: [TRACK + 28, TRACK + 38], tag: [Math.min(N29 - 4, CLIMB), Math.min(N29 - 4, CLIMB) + 18] } as const;

export const PricePlace: Place3 = {
  id: S, label: "4 The price: $247.26 a share, so $29B", enter: cue(S, 0) - 30,
  shots: ({ from, to }): CamKey3[] => {
    const k: CamKey3[] = [];
    // 1 · in through the dark, low under the board, looking up
    const A0 = { c: LED_C, a0: -34, a1: -12, r0: 1820, r1: 1640, y0: 200, y1: 520 };
    k.push(travel(from, IN, orbitPos(A0.c, A0.a0, A0.r0, A0.y0), [0, LED_C[1] - 30, 0], { fov: 52, bulge: [0, 60, 260], why: "in through the dark, low under the board", vol: 0.8 }));
    const t1 = from + IN + 1, d1 = Math.max(12, BACK - 2 - t1);
    k.push(orbit(t1, d1, A0, { look: [0, LED_C[1] - 20, 0], fov: 52, ease: SOFT, why: "rise round the board as it lights" }));
    // 2 · back to the head of the line: the stack slides in
    const t2 = t1 + d1 + 1;
    k.push(travel(t2, 36, [STACK[0] - 620, 600, 1500], STACK_C, { bulge: [0, 80, 300], fov: 48, why: "back to the stack of shares", vol: 0.5 }));
    // 3 · track along the sum: ×, the board, =
    const t3 = Math.max(TRACK, t2 + 37);
    k.push(travel(t3, 44, [TAG_C[0] - 1100, 640, 2100], [TAG_C[0] - 260, 640, 60], { bulge: [0, -40, 160], fov: 48, ease: SOFT, why: "track along the sum", vol: 0.5 }));
    // 4 · climb to the tag
    const t4 = t3 + 45, d4 = Math.min(40, to - 2 - t4);
    if (d4 >= 12) k.push(dolly(t4, d4, [TAG_C[0] - 560, TAG_C[1] - 130, 1560], TAG_C, { fov: 46, ease: SETTLE, why: "up onto the tag: $29B" }));
    return k;
  },
  lights: (f) => {
    const on = ramp(f, PR3.on[0], PR3.on[1], SETTLE), tag = ramp(f, PR3.tag[0], PR3.tag[1], SETTLE);
    const a = ramp(f, BACK, BACK + 30, SETTLE), b = ramp(f, TRACK + 8, TRACK + 50, SETTLE);
    const at = mixV(mixV(LED_C, STACK_C, a), TAG_C, b);
    return {
      amb: 0.13,
      key: { pos: [at[0] - 500, 2300, at[2] + 1100], at, i: 0.7 + 1.5 * a * (1 - b) + 2.3 * tag, color: b > 0.5 ? "#FFC06A" : "#FFF4E2", angle: 0.5, soft: 0.85 },
      rim: { pos: [at[0] + 1100, 1300, -1500], at, i: 2.6, color: "#CFE0FF", angle: 0.45, soft: 0.8 },
      aux: { pos: [at[0] - 1400, 600, -900], at, i: 1.5, color: "#DDE6F5", angle: 0.8, soft: 0.6 },
      // the board's own khaki light on the floor, then the tag's amber
      accent: b > 0.5 ? { pos: [TAG_C[0] - 60, TAG_C[1] - 320, 440], color: "#F5A524", i: 0.8 * tag } : { pos: [0, LED_C[1] - 120, 380], color: C.khaki, i: 0.55 * on * (1 - a * 0.6) },
      focus: [at[0], at[2]], reach: 3000, reflect: 0.5,
    };
  },
  build: () => {
    const group = new THREE.Group();
    const led = makeLed({ key: "price3d", w: LED.w, h: LED.h, legs: LED.legs });
    led.group.rotation.y = -0.06;
    // the stack on its plinth
    const stack = new THREE.Group();
    const plinth = rbox(PLINTH.w, PLINTH.h, PLINTH.d, 10, SM.black());
    plinth.position.set(0, PLINTH.h / 2, PLINTH.d / 2);
    const line = rbox(PLINTH.w - 8, 4, 4, 1.4, SM.edge(), 1);
    line.position.set(0, PLINTH.h - 5, PLINTH.d / 2 + 2.4);
    const certs = makeCerts({ key: "price3d", w: STK.w, d: STK.d, n: STK.n, t: STK.t, labels: ["SQUARE SHARES"], sub: "0.375 PER AFTERPAY SHARE" });
    certs.group.position.set(0, PLINTH.h + 1, 0);
    stack.add(plinth, line, certs.group);
    stack.rotation.y = 0.14;
    // the solid signs: two crossed bars, two level bars; white faces that light
    const sign = (kind: "x" | "=") => {
      const g = new THREE.Group();
      const face = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.45, metalness: 0, emissive: new THREE.Color(0xffffff), emissiveIntensity: 0 });
      const L = 300, T = 62, D = 70;
      for (const s of [-1, 1]) {
        const bar = rbox(L, T, D, 8, face, 2);
        bar.position.z = D / 2;
        if (kind === "x") bar.rotation.z = s * Math.PI / 4; else bar.position.y = s * 62;
        g.add(bar);
      }
      // a slim stem to the floor: a sign stands, it does not float
      const stem = rbox(14, 430 - 110, 14, 3, SM.edge(), 1);
      stem.position.set(0, -110 - (430 - 110) / 2, D / 2 + 7 - 28);
      const foot = rbox(190, 12, 150, 5, SM.black());
      foot.position.set(0, -430 + 6, D / 2 + 75 - 28);
      g.add(stem, foot);
      return { g, face };
    };
    const times = sign("x"), eq = sign("=");
    times.g.position.set(...TIMES); eq.g.position.set(...EQ);
    times.g.rotation.y = 0.2; eq.g.rotation.y = -0.1;
    const tag = makeTag({ key: "price3d", w: TW, h: TH, cord: CORD, faces: [
      { kicker: "ANNOUNCED | 1 AUG 2021", figure: "$29,000,000,000", color: C.mint },
      { kicker: "ANNOUNCED | 1 AUG 2021", figure: "$29,000,000,000", color: C.mint }] });
    tag.group.position.set(...HANG);
    tag.group.rotation.y = -0.34;
    group.add(led.group, stack, times.g, eq.g, tag.group);
    return {
      group,
      update: (f) => {
        const on = ramp(f, PR3.on[0], PR3.on[1], SETTLE), st = ramp(f, PR3.stack[0], PR3.stack[1], GLIDE);
        led.update({ value: PRICE.announce, date: PRICE.announceDate, on });
        stack.position.set(STACK[0] - 2200 * (1 - st), 0, STACK[2] - 200 * (1 - st));
        stack.visible = st > 0.001;
        certs.update({ height: 1, glow: st });
        times.face.emissiveIntensity = 0.06 + 1.0 * ramp(f, PR3.times[0], PR3.times[1], SETTLE);
        eq.face.emissiveIntensity = 0.06 + 1.0 * ramp(f, PR3.eq[0], PR3.eq[1], SETTLE);
        tag.update({ flip: 0, swing: 1.0 * Math.sin(f / 29), lit: 0.12 + 0.88 * ramp(f, PR3.tag[0], PR3.tag[1], SETTLE) });
      },
    };
  },
};
