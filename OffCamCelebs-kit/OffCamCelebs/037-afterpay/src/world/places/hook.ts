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
import { text3d } from "../text3d";
import { ramp, SETTLE, clamp01 } from "../../r45/tokens";
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
/** the stage the verdict shares (the film loops back to this composition) */
export const HOOK_STAGE = { deskY: DESK_Y, deskX: 250, deskW: 2100, deskD: 900, hang: HANG, cord: CORD, tw: TW, th: TH, tag: TAG } as const;
const PAPERS = [
  { x: -470, z: -10, ry: -0.12, masthead: "THE MORNING LEDGER", tone: "#E6DFCF" },
  { x: -120, z: 50, ry: 0.14, masthead: "MARKET DAILY", tone: "#DCD5C4" },
  { x: -300, z: 300, ry: 0.04, masthead: "THE BUSINESS POST", tone: "#E9E2D3" },
] as const;
const FILE: Vec = [640, DESK_Y, 60], FRAME: Vec = [960, DESK_Y, -150];

// ── FRAME 0: low and close on the tag, three-quarter; the tag in the upper middle, the desk's amber pool and the standing
//    numerals under it. The verdict's last move ends on this pose (the loop). ──
const A0 = { c: TAG, a0: -36, a1: -8, r0: 1520, r1: 1400, y0: TAG[1] - 300, y1: TAG[1] - 220 };
const LOOK0: Vec = [TAG[0], TAG[1] - 215, TAG[2]];
export const OPENING = { pos: orbitPos(TAG, A0.a0, A0.r0, A0.y0), look: LOOK0, fov: 60 } as const;
/** the hit of light as the tag turns to the filing's figure */
const hitAt = (f: number) => { const t = f - (HK.flipA + 9); return t < 0 ? 0 : Math.exp(-t / 10) * clamp01(t / 3); };
const NUM = { size: 84, z: -170 } as const;

export const HookPlace: Place3 = {
  id: S, label: "1 Hook: the tag, $29,000,000,000; the filing says $13.8B", enter: 0,
  shots: ({ to }): CamKey3[] => {
    const k: CamKey3[] = [];
    k.push({ at: 0, dur: 0, pos: OPENING.pos, look: LOOK0, fov: 60, cut: true, why: "frame 0: low and close on the tag" });
    k.push(orbit(1, HEAD - 12, A0, { look: [TAG[0], TAG[1] - 190, TAG[2]], fov: 60, ease: SOFT, why: "orbit the tag" }));
    const t2 = HEAD - 8;
    k.push(crane(t2, 40, [-520, 920, 960], [-290, DESK_Y, 190], { bulge: [-120, 40, 200], fov: 50, why: "down to the newspapers" }));
    const t3 = t2 + 42, d3 = Math.max(12, FILING - 6 - t3);
    k.push(dolly(t3, d3, [-440, 860, 850], [-285, DESK_Y, 190], { ease: SOFT, why: "push in on the newspapers" }));
    const t4 = t3 + d3 + 1;
    k.push(travel(t4, 34, [1240, 660, 880], [790, DESK_Y + 150, -40], { bulge: [0, 40, 180], why: "along the desk to the filing", vol: 0.5 }));
    const t5 = Math.max(FLIP - 16, t4 + 35);
    const A1 = { c: TAG, a0: 28, a1: 8, r0: 1620, r1: 1480, y0: TAG[1] - 260, y1: TAG[1] - 220 };
    const LOOK1: Vec = [TAG[0], TAG[1] - 190, TAG[2]];
    k.push(crane(t5, 34, orbitPos(TAG, A1.a0, A1.r0, A1.y0), LOOK1, { bulge: [0, 0, 220], fov: 60, why: "back up to the tag as it flips" }));
    const t6 = t5 + 35;
    if (to - 2 - t6 >= 10) k.push(orbit(t6, to - 2 - t6, A1, { look: LOOK1, fov: 60, ease: SOFT, why: "orbit the flipped tag" }));
    return k;
  },
  lights: (f) => {
    const p = paramsAt(f), hit = hitAt(f);
    return {
      amb: 0.12,
      key: { pos: [TAG[0] - 150, 2500, 760], at: [TAG[0], TAG[1] - 200, TAG[2]], i: (4.0 + 3.2 * hit) * p.lit, color: "#FFC06A", angle: 0.5, soft: 0.85 },
      rim: { pos: [700, 1300, -1500], at: TAG, i: 3.4, color: "#CFE0FF", angle: 0.8, soft: 0.6 },
      aux: { pos: [900, 1900, 700], at: [800, DESK_Y + 60, -40], i: 0.25 + 2.6 * p.desk, color: "#F4F6FF", angle: 0.34, soft: 0.9 },
      accent: { pos: [TAG[0] - 60, TAG[1] - 320, 420], color: "#F5A524", i: 1.7 + 1.5 * hit },
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
    // the headline figure also STANDS on the desk under the tag: solid mint numerals (the references stand their figures on
    //   the floor); they dim as the tag turns to the filing's figure
    const numFace = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.mint), roughness: 0.4, metalness: 0, emissive: new THREE.Color(C.mint), emissiveIntensity: 0.6 });
    const numSide = new THREE.MeshStandardMaterial({ color: new THREE.Color("#1F4A3B"), roughness: 0.45, metalness: 0.5 });
    const num = text3d("$29,000,000,000", { font: "800", size: NUM.size, depth: 34, bevel: 3, face: numFace, side: numSide });
    // the baseline stands a comma's tail above the desk, on a low satin sill set BACK from the letters' faces (so the
    //   commas' tails show in front of it and the digits stand on it)
    const SILL = NUM.size * 0.2;
    const numG = new THREE.Group();
    num.position.y = SILL;
    const sill = new THREE.Mesh(new THREE.BoxGeometry((num.userData.width as number) + 30, SILL, 22), numSide);
    sill.position.set(0, SILL / 2, 10);
    numG.add(num, sill);
    numG.position.set(TAG[0] - 10, DESK_Y + 1, NUM.z);
    numG.rotation.y = -0.1;
    // the lamp's cone: a soft amber shaft from above the tag down to the desk
    const coneTex = (() => {
      const c = document.createElement("canvas"); c.width = 8; c.height = 256;
      const g = c.getContext("2d")!, gr = g.createLinearGradient(0, 0, 0, 256);
      gr.addColorStop(0, "#9a9a9a"); gr.addColorStop(0.35, "#4a4a4a"); gr.addColorStop(1, "#000000");
      g.fillStyle = gr; g.fillRect(0, 0, 8, 256);
      return new THREE.CanvasTexture(c);
    })();
    const coneM = new THREE.MeshBasicMaterial({ color: new THREE.Color("#F5A524"), transparent: true, opacity: 0.05, alphaMap: coneTex, depthWrite: false, side: THREE.DoubleSide, toneMapped: false, fog: false });
    const CH = 1500;
    const cone = new THREE.Mesh(new THREE.CylinderGeometry(30, 430, CH, 48, 1, true), coneM);
    cone.position.set(TAG[0], DESK_Y + CH / 2, TAG[2] + 40);
    cone.renderOrder = 5;
    group.add(tag.group, desk.group, filing.group, frame.group, numG, cone);
    return {
      group,
      update: (f) => {
        const p = paramsAt(f);
        tag.update({ flip: p.flip, swing: p.swing * 1.4, lit: p.lit });
        numFace.emissiveIntensity = 0.6 - 0.48 * ramp(f, HK.flipA, HK.flipB, SETTLE);
        coneM.opacity = 0.05 * p.lit * (1 + 0.8 * hitAt(f));
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
