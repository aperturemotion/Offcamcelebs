// ═════════════════════════════════════════════════════════════════════════════════════════════
// SET F · FAIRNESS (038; SHOTS.md row F; P16). "To be fair, under the Glazers, United won five league titles and the
// Champions League."  One green-lit glass trophy cabinet: the camera tracks along its shelves as five GENERIC league cups
// spring up one after another (labels 2007, 2008, 2009, 2011, 2013), then pulls back as a big-eared European cup drops onto
// its plinth in front of the cabinet, "CHAMPIONS LEAGUE 2008", landing on "Champions" with a green ring. Green is this
// set's colour (the fairness beat). Generic designs: not the real trophies (the brief).
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { word } from "../../r45/time";
import { SOFT, SETTLE, clamp01, ramp } from "../../r45/tokens";
import { cut, dolly, type CamKey3, type Vec } from "../cam";
import { stdLights, type Place3, type PlaceCue, type Lights } from "../place";
import { MAT, block, ring, dropIn, popUp } from "../kit";
import { enterOf } from "../timeline";
import { makeCabinet, GREEN, CAB } from "../obj/cabinet";
import { makeLeagueCup, makeEuroCup } from "../obj/cup";

const S = "fair" as const;
const E = enterOf(S);
const FAIR = word(S, 0, /^fair/), GLAZ = word(S, 0, /^Glazers/), FIVE = word(S, 0, /^five/), TITLES = word(S, 0, /^titles/), CHAMP = word(S, 0, /^Champions/);
// the five cups spring up through the line (one about every 0.4 s), the last on "titles"
const CUP_T = [Math.min(FAIR + 3, E - 1), 0, 0, 0, TITLES].map((v, i, a) => (i === 0 || i === 4 ? v : Math.round(a[0] + ((TITLES - a[0]) * i) / 4)));
const LABELS = ["2007", "2008", "2009", "2011", "2013"];
// shelf 1 (y 920) holds 2007-2009, shelf 2 (y 1460) holds 2011 and 2013
const SLOT: [number, number][] = [[-560, 1], [0, 1], [560, 1], [-330, 2], [330, 2]];
const LAND = CHAMP + 1;                                    // the European cup lands on "Champions"
const PED: Vec = [0, 0, 820];                              // its plinth in front of the cabinet

export const FA = { E, cups: CUP_T, land: LAND } as const;

const shots = ({ from, to }: { from: number; to: number }): CamKey3[] => [
  cut(from, [-160, 1330, 3800], [0, 1340, 300], { fov: 40, focus: [0, 1150, 0], why: "cut: the cabinet, the first cup springing up" }),
  dolly(from + 1, CUP_T[4] + 4 - from, [-200, 1200, 4300], [0, 1150, 300], { fov: 41, ease: SOFT, why: "slow pull back as the cups spring up, shelf by shelf" }),
  dolly(CUP_T[4] + 5, Math.max(10, to - CUP_T[4] - 6), [-80, 1100, 4200], [0, 1080, 300], { fov: 42, ease: SOFT, why: "settle on the cabinet and the plinth as the cup lands" }),
];

const lights = (f: number): Lights => {
  const g = ramp(f, E - 2, FAIR + 6, SETTLE), hit = ramp(f, LAND - 1, LAND + 10, SETTLE) * (1 - 0.5 * ramp(f, LAND + 14, LAND + 40, SOFT));
  const L = stdLights([0, 900, 200], { s: 1.25, key: 3.3 });
  L.back = { ...L.back!, color: GREEN, i: 2.2 + 1.2 * g };
  L.accent = { pos: [0, 1300, 1400], color: GREEN, i: 1.0 * g + 2.2 * hit };
  return L;
};

const cues = (): PlaceCue[] => [
  ...CUP_T.map((t, i): PlaceCue => ({ kind: "hit", s: "pingshort", at: t + 2, vol: 0.3, why: `cup ${LABELS[i]} springs up` })),
  { kind: "hit", s: "thud", at: LAND, vol: 0.42, why: "the European cup lands on its plinth" },
  { kind: "hit", s: "bloom", at: LAND, vol: 0.38, why: "CHAMPIONS LEAGUE 2008: the green ring" },
];

const blur = (f: number) => dropIn(f, LAND, { h: 500, fall: 7, bounce: 0.4 }).fast;

const build = () => {
  const group = new THREE.Group();
  const cab = makeCabinet("fair"); group.add(cab.group);
  const cups = LABELS.map((l, i) => {
    const c = makeLeagueCup("fair" + i, l);
    const [x, s] = SLOT[i];
    c.group.position.set(x, cab.shelf[s], -10);
    group.add(c.group);
    return c;
  });
  const ped = block(700, 120, 520, 18, MAT.black()); ped.position.set(PED[0], 0, PED[2]); group.add(ped);
  const euro = makeEuroCup("fair-euro", "CHAMPIONS LEAGUE 2008"); euro.group.position.set(PED[0], 120, PED[2]); group.add(euro.group);
  const halo = ring({ r: 1600, dur: 30, color: GREEN }); halo.mesh.position.set(PED[0], 1.5, PED[2]); group.add(halo.mesh);
  void CAB;
  return {
    group,
    update: (f: number) => {
      cab.setGlow(ramp(f, E - 2, FAIR + 4, SETTLE));
      cups.forEach((c, i) => { const s = popUp(f, CUP_T[i], 12); c.group.visible = s > 0.001; c.group.scale.setScalar(Math.max(0.001, s)); });
      const d = dropIn(f, LAND, { h: 500, fall: 7, bounce: 0.4 });
      euro.group.visible = d.on; euro.group.position.y = 120 + d.y;
      halo.update(f, LAND);
    },
  };
};

export const FairPlace: Place3 = { id: S, label: "8 Set F: to be fair: five league titles and the Champions League", enter: E, stage: "dark", shots, lights, build, blur, cues };
