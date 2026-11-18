// PLACE 3 · THE DEAL, in the world (rule P12): the buyer's long black desk, filmed LOW AND CLOSE, one object per shot.
//  0 "In August 2021, Jack Dorsey's Square agreed to buy Afterpay."   the camera opens low and close on the nameplate
//       JACK DORSEY | CEO, SQUARE, three-quarter, and orbits it; on "agreed" the contract (1 AUG 2021) slides across the desk
//       toward the camera, which rises over it.
//  1 "But it didn't pay in cash."     it travels low along the desk to an open cooler box of banded cash under a gold
//       light; on "cash" the box slides away down the desk into the dark and its light dies.
//  2 "It paid in its own shares."     a tall stack of share certificates, SQUARE SHARES, slides in out of the dark as its
//       light comes up; the camera orbits it.
//  3 "Every Afterpay share would become 0.375 Square shares."   on to ONE certificate on a rail, 1 AFTERPAY SHARE; on
//       "0.375" it is cut: the 0.375 piece turns round, the rest slides off, and a solid khaki 0.375 rises from the desk
//       beside the piece (documented figure: khaki). The camera pushes in.
// Timings are sets/deal.tsx's (DL, paramsAt), all anchored on the take's words.
import * as THREE from "three";
import { cue } from "../../r45/time";
import { ramp, SETTLE, SOFT, clamp01 } from "../../r45/tokens";
import { DL, paramsAt } from "../../r45/sets/deal";
import { C } from "../../three/studio";
import { makeDesk } from "../../three/obj/desk";
import { makeNameplate } from "../../three/obj/nameplate";
import { makeCerts } from "../../three/obj/certs";
import { buildContract, buildCooler, buildCard } from "../../three/props/deal";
import { NAMES, DEAL } from "../../audit/record";
import { text3d } from "../text3d";
import { cut, orbit, orbitPos, crane, dolly, travel, mixV, type CamKey3, type Vec } from "../cam";
import type { Place3 } from "../place";

const S = "deal" as const;
const AGREED = DL.contract[0] + 2, CASH = DL.cooler[0], SHARES = DL.certs[0] + 4, EVERY = DL.card[0] + 6, RATIO = DL.flip[0] + 2;
const DY = 300;                                               // the desk's top
const PLATE: Vec = [-1350, DY, -110], PLATE_C: Vec = [-1350, DY + 96, -100];
const CONTRACT: Vec = [-1240, DY, 250];
const SWAP: Vec = [-40, DY, 10], KS = 1.25;                    // the cooler, then the stack; the cooler's scale
const COOL_C: Vec = [SWAP[0], DY + 170, SWAP[2]];
const STACK = { w: 560, d: 390, n: 44, t: 7 }, STACK_C: Vec = [SWAP[0], DY + 170, SWAP[2] + 10];
const CARD: Vec = [1180, DY, 40], CS = 1.0, CARD_C: Vec = [CARD[0], DY + 190, CARD[2]];
const NUM: Vec = [CARD[0] - 90, DY, 300];                     // the solid 0.375 stands in front of the piece

export const DealPlace: Place3 = {
  id: S, label: "3 The deal: Square agrees to buy Afterpay, paid in shares, 0.375 a share", enter: cue(S, 0) - 8,
  shots: ({ from, to }): CamKey3[] => {
    const k: CamKey3[] = [];
    // 1 · low and close on the nameplate, three-quarter; a slow orbit
    const A0 = { c: PLATE_C, a0: -46, a1: -24, r0: 1480, r1: 1420, y0: DY + 60, y1: DY + 130 };
    k.push(cut(from, orbitPos(A0.c, A0.a0, A0.r0, A0.y0), PLATE_C, { fov: 44, dip: 5, why: "low and close on the nameplate" }));
    const t1 = from + 1, d1 = Math.max(12, AGREED - 8 - t1);
    k.push(orbit(t1, d1, A0, { look: PLATE_C, fov: 44, ease: SOFT, why: "orbit the nameplate" }));
    // 2 · up and over: the contract slides in toward the camera
    const t2 = t1 + d1 + 1;
    k.push(crane(t2, 36, [-900, DY + 700, 1300], [-1270, DY + 40, 120], { bulge: [0, 40, 120], fov: 46, why: "over the contract as it slides in" }));
    // 3 · low along the desk to the cooler of cash
    const t3 = Math.max(cue(S, 1) - 8, t2 + 37);
    const A1 = { c: STACK_C, a0: -42, a1: 18, r0: 1420, r1: 1280, y0: DY + 230, y1: DY + 360 };
    k.push(travel(t3, 38, orbitPos(A1.c, A1.a0, A1.r0, A1.y0), COOL_C, { bulge: [0, -60, 220], fov: 48, why: "low along the desk to the cash", vol: 0.5 }));
    // 4 · the stack slides in: orbit it
    const t4 = Math.max(SHARES - 14, t3 + 39), d4 = Math.max(20, EVERY - 12 - t4);
    k.push(orbit(t4, d4, A1, { look: STACK_C, fov: 48, ease: SOFT, why: "orbit the stack of shares" }));
    // 5 · on to the one certificate
    const t5 = t4 + d4 + 1;
    k.push(travel(t5, 38, [CARD[0] - 600, DY + 320, 1330], CARD_C, { bulge: [0, 30, 200], fov: 46, why: "along the desk to the one certificate", vol: 0.5 }));
    // 6 · in on the fraction
    const t6 = Math.max(RATIO + 14, t5 + 39), d6 = Math.min(44, to - 2 - t6);
    if (d6 >= 12) k.push(dolly(t6, d6, [CARD[0] - 430, DY + 300, 1330], [CARD[0] - 50, DY + 150, 140], { fov: 46, ease: SOFT, why: "in on 0.375" }));
    return k;
  },
  lights: (f) => {
    const p = paramsAt(f);
    // what the light is on: the nameplate → the swap spot → the certificate
    const a = ramp(f, cue(S, 1) - 8, cue(S, 1) + 30, SETTLE), b = ramp(f, EVERY - 12, EVERY + 26, SETTLE);
    const at = mixV(mixV(PLATE_C, STACK_C, a), CARD_C, b);
    const cash = (1 - p.cooler) * a * (1 - b), shares = p.certs * (1 - b);
    return {
      amb: 0.13,
      key: { pos: [at[0] - 500, DY + 1900, at[2] + 1000], at, i: 0.6 + 0.6 * (1 - a) + 1.0 * shares + 0.8 * b, color: "#FFF4E2", angle: 0.5, soft: 0.85 },
      rim: { pos: [at[0] + 1000, DY + 800, at[2] - 1400], at, i: 2.4, color: "#CFE0FF", angle: 0.42, soft: 0.8 },
      aux: { pos: [at[0] - 1300, DY + 420, at[2] - 800], at, i: 0.9, color: "#DDE6F5", angle: 0.8, soft: 0.6 },
      // gold on the cash, then khaki on the documented 0.375
      accent: b > 0.5
        ? { pos: [NUM[0], DY + 120, NUM[2] + 260], color: C.khaki, i: 0.5 * p.flip }
        : { pos: [SWAP[0], DY + 520, SWAP[2] + 120], color: cash > 0.02 ? C.gold : "#FFE9C4", i: 0.9 * cash + 0.5 * shares },
      focus: [at[0], at[2]], reach: 2200, reflect: 0.3,
    };
  },
  build: () => {
    const group = new THREE.Group();
    const desk = makeDesk({ w: 4600, d: 1100, drop: DY - 44 });
    desk.group.position.set(-100, DY, 0);
    desk.group.traverse((n) => { const m = (n as THREE.Mesh).material as THREE.MeshPhysicalMaterial | undefined; if (m?.isMeshStandardMaterial) { m.roughness = Math.max(m.roughness, 0.78); m.envMapIntensity *= 0.45; if (m.isMeshPhysicalMaterial) m.clearcoat = 0; } });
    const plate = makeNameplate({ key: "deal3d", w: 760, h: 132, texts: [NAMES.buyer] });
    plate.group.position.set(...PLATE);
    plate.group.rotation.y = -0.1;
    const contract = buildContract();
    contract.scale.setScalar(1.15);
    const cooler = buildCooler();
    cooler.scale.setScalar(KS);
    const certs = makeCerts({ key: "deal3d", w: STACK.w, d: STACK.d, n: STACK.n, t: STACK.t, labels: ["SQUARE SHARES"], sub: "CLASS A COMMON STOCK" });
    const { card, pa, pb, CW, A, B } = buildCard();
    card.scale.setScalar(CS);
    // the documented figure as a THING: solid khaki numerals standing on the desk
    const face = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.khaki), roughness: 0.4, metalness: 0, emissive: new THREE.Color(C.khaki), emissiveIntensity: 0 });
    const side = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.khaki).multiplyScalar(0.3), roughness: 0.45, metalness: 0.5 });
    const num = text3d(String(DEAL.ratio), { font: "800", size: 120, depth: 46, bevel: 4, face, side });
    num.rotation.y = -0.12;
    group.add(desk.group, plate.group, contract, cooler, certs.group, card, num);
    return {
      group,
      update: (f) => {
        const p = paramsAt(f);
        // the contract slides across the desk toward the camera, turning square as it stops
        const c = 1 - p.contract;
        contract.position.set(CONTRACT[0] - 380 * c, DY, CONTRACT[2] - 1150 * c);
        contract.rotation.y = 0.16 + 0.5 * c;
        contract.visible = p.contract > 0.001;
        // the cash slides away down the desk into the dark
        cooler.position.set(SWAP[0] + 2500 * p.cooler, DY, SWAP[2] - 160 * p.cooler);
        cooler.rotation.y = -0.12;
        cooler.visible = p.cooler < 0.999;
        // the shares slide in out of the dark
        certs.group.position.set(SWAP[0] + 2500 * (1 - p.certs), DY, SWAP[2] - STACK.d * 0 - 160 * (1 - p.certs));
        certs.group.rotation.y = 0.1;
        certs.group.visible = p.certs > 0.001;
        certs.update({ height: 1, glow: p.certs });
        // the one certificate; cut at 0.375
        card.position.set(CARD[0] + 1500 * (1 - p.card), DY, CARD[2]);
        card.rotation.y = -0.08;
        card.visible = p.card > 0.001;
        const k = p.flip;
        pa.position.x = (-CW / 2 + A / 2) * (1 - k);
        pa.rotation.y = Math.PI * k;
        pb.position.x = CW / 2 - B / 2 + 1500 * k * k;
        pb.position.z = -14 * Math.min(1, k * 6);
        pb.visible = k < 0.98;
        // the solid figure rises out of the desk as the piece turns
        const r = SETTLE(clamp01((k - 0.35) / 0.65));
        num.visible = r > 0.001;
        num.position.set(NUM[0], DY - 140 * (1 - r), NUM[2]);
        face.emissiveIntensity = 0.25 + 0.9 * r;
      },
    };
  },
};
