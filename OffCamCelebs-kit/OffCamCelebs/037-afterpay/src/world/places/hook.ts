// PLACE 1 · THE HOOK, in the world (rule P12). FRAME 0 IS ALREADY A SHOT: the camera low and close on the hanging price
// tag, three-quarter, under an amber spot, its cord going up into the dark; the tag reads $29,000,000,000 in mint and sways.
//  0 "Afterpay sold for $29 billion."        the camera ORBITS slowly round the tag, closing in.
//  1 "That's the number in the headlines."   it CRANES down onto the desk under the tag as three folded newspapers drop
//                                            in, "$29B" ringed in red on each, then pushes in on them.
//  2 "The buyer's own filing says 13.8."     it TRAVELS along the desk to the thick filing and the framed print as their
//                                            light comes up, then climbs back to the tag as it FLIPS to $13,800,000,000
//                                            (khaki: the documented figure) and orbits it.
// Timings are the first cut's (sets/hook.tsx: HK, paramsAt), all anchored on the take's words.
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT } from "../../r45/tokens";
import { HK, paramsAt } from "../../r45/sets/hook";
import { C } from "../../three/studio";
import { makeTag } from "../../three/obj/tag";
import { makeDesk } from "../../three/obj/desk";
import { makeFrame } from "../../three/obj/frame";
import { makeFiling } from "../../three/obj/filing";
import { makePaper } from "../../three/obj/a_paper";
import { HAS_PHOTO, PHOTO_FILE } from "../../audit/data";
import { orbit, orbitPos, crane, dolly, travel, type CamKey3, type Vec } from "../cam";
import type { Place3 } from "../place";

const S = "hook" as const;
const HEAD = cue(S, 1), FILING = cue(S, 2), FLIP = word(S, 2, /^13/);
const DESK_Y = 300, HANG: Vec = [-150, 2080, 60], CORD = 900, TW = 820, TH = 350;
const TAG: Vec = [HANG[0], HANG[1] - CORD - TH / 2, HANG[2]];
const PAPERS = [
  { x: -470, z: -10, ry: -0.12, masthead: "THE MORNING LEDGER", tone: "#E6DFCF" },
  { x: -120, z: 50, ry: 0.14, masthead: "MARKET DAILY", tone: "#DCD5C4" },
  { x: -300, z: 300, ry: 0.04, masthead: "THE BUSINESS POST", tone: "#E9E2D3" },
] as const;
const FILE: Vec = [640, DESK_Y, 60], FRAME: Vec = [960, DESK_Y, -150];

export const HookPlace: Place3 = {
  id: S, label: "1 Hook: the tag, $29,000,000,000; the filing says $13.8B", enter: 0,
  shots: ({ to }): CamKey3[] => {
    const k: CamKey3[] = [];
    const A0 = { c: TAG, a0: -36, a1: -8, r0: 1420, r1: 1260, y0: TAG[1] - 330, y1: TAG[1] - 200 };
    k.push({ at: 0, dur: 0, pos: orbitPos(TAG, A0.a0, A0.r0, A0.y0), look: [TAG[0], TAG[1] + 20, TAG[2]], fov: 60, cut: true, why: "frame 0: low and close on the tag" });
    k.push(orbit(1, HEAD - 12, A0, { look: [TAG[0], TAG[1] + 10, TAG[2]], fov: 60, ease: SOFT, why: "orbit the tag" }));
    const t2 = HEAD - 8;
    k.push(crane(t2, 40, [-520, 920, 960], [-290, DESK_Y, 190], { bulge: [-120, 40, 200], fov: 50, why: "down to the newspapers" }));
    const t3 = t2 + 42, d3 = Math.max(12, FILING - 6 - t3);
    k.push(dolly(t3, d3, [-440, 860, 850], [-285, DESK_Y, 190], { ease: SOFT, why: "push in on the newspapers" }));
    const t4 = t3 + d3 + 1;
    k.push(travel(t4, 34, [1240, 660, 880], [790, DESK_Y + 150, -40], { bulge: [0, 40, 180], why: "along the desk to the filing", vol: 0.5 }));
    const t5 = Math.max(FLIP - 16, t4 + 35);
    const A1 = { c: TAG, a0: 28, a1: 8, r0: 1500, r1: 1330, y0: TAG[1] - 190, y1: TAG[1] - 130 };
    k.push(crane(t5, 34, orbitPos(TAG, A1.a0, A1.r0, A1.y0), TAG, { bulge: [0, 0, 220], why: "back up to the tag as it flips" }));
    const t6 = t5 + 35;
    if (to - 2 - t6 >= 10) k.push(orbit(t6, to - 2 - t6, A1, { look: TAG, ease: SOFT, why: "orbit the flipped tag" }));
    return k;
  },
  lights: (f) => {
    const p = paramsAt(f);
    return {
      amb: 0.12,
      key: { pos: [TAG[0] - 150, 2500, 760], at: [TAG[0], TAG[1] - 200, TAG[2]], i: 2.6 * p.lit, color: "#FFC06A", angle: 0.5, soft: 0.85 },
      rim: { pos: [700, 1300, -1500], at: TAG, i: 3.4, color: "#CFE0FF", angle: 0.8, soft: 0.6 },
      aux: { pos: [900, 1900, 700], at: [800, DESK_Y + 60, -40], i: 0.25 + 2.6 * p.desk, color: "#F4F6FF", angle: 0.34, soft: 0.9 },
      accent: { pos: [TAG[0] - 60, TAG[1] - 320, 420], color: "#F5A524", i: 0.9 },
      focus: [150, 0], reach: 3200, reflect: 0.5,
    };
  },
  build: () => {
    const group = new THREE.Group();
    const tag = makeTag({ key: "hook3d", w: TW, h: TH, cord: CORD, faces: [
      { kicker: "AFTERPAY | SOLD FOR", figure: "$29,000,000,000", color: C.mint },
      { kicker: "THE FILING SAYS", figure: "$13,800,000,000", color: C.khaki }] });
    tag.group.position.set(...HANG);
    const desk = makeDesk({ w: 2100, d: 900, drop: DESK_Y - 44 });
    desk.group.position.set(250, DESK_Y, 0);
    const papers = PAPERS.map((q, i) => {
      const p = makePaper({ key: `hook3d${i}`, masthead: q.masthead, tone: q.tone, w: 330, d: 236, t: 20 });
      group.add(p.group);
      return p.group;
    });
    const filing = makeFiling({ key: "hook3d", w: 320, d: 420, t: 78, cover: ["FORM 10-Q", "BLOCK, INC. | Q1 2022"], line: "" });
    filing.group.position.set(...FILE);
    filing.group.rotation.y = 0.1;
    const frame = makeFrame({ key: "hook3d", photo: HAS_PHOTO ? PHOTO_FILE : null });
    frame.group.position.set(...FRAME);
    frame.group.rotation.y = -0.32;
    // the desk's top is satin, not glass: no hot mirror of the rim light on it
    desk.group.traverse((n) => { const m = (n as THREE.Mesh).material as THREE.MeshPhysicalMaterial | undefined; if (m?.isMeshStandardMaterial) { m.roughness = Math.max(m.roughness, 0.62); if (m.isMeshPhysicalMaterial) m.clearcoat = 0; } });
    group.add(tag.group, desk.group, filing.group, frame.group);
    return {
      group,
      update: (f) => {
        const p = paramsAt(f);
        tag.update({ flip: p.flip, swing: p.swing * 1.4, lit: p.lit });
        papers.forEach((g, i) => {
          const q = PAPERS[i], [h, spin] = p.drop[i] ?? [0, 0];
          g.position.set(q.x, DESK_Y + h, q.z);
          g.rotation.set(0, q.ry + spin, 0);
          g.visible = h < 1400;
        });
      },
    };
  },
};
void HK;
