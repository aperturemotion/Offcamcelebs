// PLACE 7 · TO BE FAIR, in the world (rule P12): two SHOTS.
//  0 "To be fair, 29 billion was the real value on announcement day."   the camera TRAVELS in low under a big BALANCE
//       SCALE: a solid mint "$29B" over "1 AUG 2021" stands on the near pan, the shares it was paid in lie on the far pan.
//       The beam rocks and comes LEVEL by "real value" as the camera ORBITS low round it and pushes in.
//  1 "The deal fixed the number of shares, not the dollars, and Afterpay's owners got those shares."   TRAVEL to the desk:
//       on "fixed" the solid khaki words FIXED: 0.375 SHARES light at the back of the desk; on "got" the certificates are
//       lifted across the desk and set down in front of the nameplate AFTERPAY SHAREHOLDERS, the camera following them.
// Timings: sets/fair.tsx (FA, paramsAt), all anchored on the take's words.
import * as THREE from "three";
import { cue, word } from "../../r45/time";
import { SOFT, SETTLE, ramp } from "../../r45/tokens";
import { paramsAt, FA } from "../../r45/sets/fair";
import { C, SM, plaque } from "../../three/studio";
import { rbox } from "../../three/kit029";
import { makeCerts } from "../../three/obj/certs";
import { makeNameplate } from "../../three/obj/nameplate";
import { makeDesk } from "../../three/obj/desk";
import { makeScale } from "../../three/obj/c_scale";
import { NAMES } from "../../audit/record";
import { orbit, orbitPos, dolly, travel, mixV, type CamKey3, type Vec } from "../cam";
import { text3d } from "../text3d";
import type { Place3, Lights } from "../place";

const S = "fair" as const;
const C0 = cue(S, 0), C1 = cue(S, 1), REAL = word(S, 0, /^real/), GOT = word(S, 1, /^got/);

// ── the stage ──
const SC_S = 1.5, SC: Vec = [-1100, 0, 0];
const SPAN = 760, HT = 640, DROP = 300;
const BEAM_Y = (56 + HT) * SC_S, PAN_Y = BEAM_Y - DROP * SC_S;
const SC_C: Vec = [SC[0], PAN_Y + 180, 0];
const DESK_Y = 430, DESK: Vec = [2700, DESK_Y, 0], DW = 2300, DD = 900;
const FROM = -520, TO = 330, PLATE_X = 360;
const DESK_C: Vec = [DESK[0] - 40, DESK_Y + 150, 0];

export const FAIR_ENTER = C0 - 34;

export const FairPlace: Place3 = {
  id: S, label: "7 To be fair: $29B was real on day one; the shares were fixed", enter: FAIR_ENTER,
  shots: ({ from, to }): CamKey3[] => {
    const k: CamKey3[] = [];
    let end = from;
    const put = (at: number, dur: number, mk: (at: number, dur: number) => CamKey3, limit = to - 2) => {
      const a = Math.max(at, end + 1), d = Math.min(dur, limit - a);
      if (d < 8) return;
      k.push(mk(a, d)); end = a + d;
    };
    // 0 · the scale, from low under the near pan
    const A0 = { c: SC_C, a0: -64, a1: -40, r0: 2550, r1: 2250, y0: 330, y1: 520 };
    k.push(travel(from, 34, orbitPos(SC_C, A0.a0, A0.r0, A0.y0), [SC_C[0] - 330, SC_C[1] - 60, 0], { fov: 54, why: "in through the dark, low under the scale", vol: 0.8 }));
    end = from + 34;
    put(end + 1, C1 - 10 - end - 1, (a, d) => orbit(a, d, A0, { look: [SC_C[0] - 340, SC_C[1] - 40, 0], fov: 54, ease: SOFT, why: "orbit low round the scale as it comes level" }), C1 - 9);
    // 1 · the desk: the hand-over
    put(C1 - 8, 40, (a, d) => travel(a, d, [DESK[0] - 1300, DESK_Y + 980, 2300], [DESK[0] - 500, DESK_Y + 110, -120], { bulge: [0, 160, 380], fov: 48, why: "to the desk", vol: 0.55 }));
    put(end + 1, GOT - 16 - end - 1, (a, d) => dolly(a, d, [DESK[0] - 1200, DESK_Y + 940, 2200], [DESK[0] - 490, DESK_Y + 110, -120], { ease: SOFT, why: "ease on the fixed shares" }), GOT - 15);
    put(GOT - 14, 46, (a, d) => dolly(a, d, [DESK[0] + 200, DESK_Y + 760, 1900], [DESK[0] + PLATE_X + 70, DESK_Y + 70, 120], { why: "follow the certificates across" }));
    put(end + 1, to - 3 - end, (a, d) => dolly(a, d, [DESK[0] + 260, DESK_Y + 720, 1820], [DESK[0] + PLATE_X + 80, DESK_Y + 70, 120], { ease: SOFT, why: "hold on the shareholders' shares" }));
    return k;
  },
  lights: (f): Lights => {
    const p = paramsAt(f);
    const b = ramp(f, C1 - 8, C1 + 24, SOFT);
    const c = mixV([SC_C[0], SC_C[1] - 100, 0], DESK_C, b);
    return {
      amb: 0.16,
      key: { pos: [c[0] - 700, c[1] + 2100, c[2] + 1200], at: c, i: 1.1 + 0.8 * b, color: "#FFF4E2", angle: 0.62, soft: 0.8 },
      rim: { pos: [c[0] + 1200, c[1] + 900, c[2] - 1600], at: c, i: 3.4, color: "#CFE0FF", angle: 0.8, soft: 0.6 },
      aux: { pos: [c[0] - 1500, c[1] + 500, c[2] - 900], at: c, i: 1.5, color: "#DDE6F5", angle: 0.8, soft: 0.6 },
      // mint under the announced figure; khaki when the fixed number lights
      accent: b < 0.5
        ? { pos: [SC[0] - (SPAN / 2) * SC_S + 40, PAN_Y + 260, 420], color: C.mint, i: 0.5 * (1 - b * 2) }
        : { pos: [DESK[0] - 320, DESK_Y + 300, 260], color: C.khaki, i: 0.45 * p.label },
      focus: [c[0], c[2]], reach: 2800, reflect: 0.32 + 0.15 * b,
    };
  },
  build: () => {
    const group = new THREE.Group();
    // ── the scale ──
    const scale = makeScale({ span: SPAN, height: HT, pan: 150, drop: DROP });
    scale.group.position.set(...SC);
    scale.group.scale.setScalar(SC_S);
    scale.group.rotation.y = 0.08;
    // the announced figure: solid mint letters standing on the near pan, its date on a small lit plate in front of them
    const mint = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.mint), roughness: 0.4, metalness: 0, emissive: new THREE.Color(C.mint), emissiveIntensity: 0.5 });
    const mintSide = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.mint).multiplyScalar(0.28), roughness: 0.45, metalness: 0.5 });
    const fig = text3d("$29B", { font: "800", size: 112, depth: 46, bevel: 3, face: mint, side: mintSide });
    fig.position.set(0, 64, -10);
    fig.rotation.y = -0.8;
    const date = plaque("fair3d:date", 230, 46, [{ t: "1 AUG 2021", size: 27, weight: 700, color: C.white, track: 0.12 }], { pad: 6 });
    date.position.set(-52, 16 + 23, 50);
    date.rotation.y = -0.8;
    scale.seats[0].add(fig, date);
    const panCerts = makeCerts({ key: "fair3d:pan", n: 18, w: 220, d: 156, labels: ["SHARES"] });
    scale.seats[1].add(panCerts.group);
    // ── the desk ──
    const desk = makeDesk({ w: DW, d: DD, drop: DESK_Y - 44 });
    desk.group.position.set(...DESK);
    desk.group.traverse((n) => { const m = (n as THREE.Mesh).material as THREE.MeshPhysicalMaterial | undefined; if (m?.isMeshStandardMaterial) { m.roughness = Math.max(m.roughness, 0.62); if (m.isMeshPhysicalMaterial) m.clearcoat = 0; } });
    const onDesk = new THREE.Group();
    onDesk.position.set(...DESK);
    const certs = makeCerts({ key: "fair3d", n: 20, labels: ["BLOCK SHARES"], sub: "0.375 PER AFTERPAY SHARE" });
    certs.group.scale.setScalar(1.25);
    const plate = makeNameplate({ key: "fair3d", w: 700, h: 104, texts: [NAMES.holders] });
    plate.group.position.set(PLATE_X, 0, 300);
    plate.group.rotation.y = -0.1;
    // FIXED: 0.375 SHARES, solid khaki, on a low black rail at the back of the desk
    const kh = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.khaki), roughness: 0.4, metalness: 0, emissive: new THREE.Color(C.khaki), emissiveIntensity: 0 });
    const khSide = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.khaki).multiplyScalar(0.3), roughness: 0.45, metalness: 0.5 });
    const fixed = text3d("FIXED: 0.375 SHARES", { font: "800", size: 86, depth: 36, bevel: 3, face: kh, side: khSide });
    fixed.position.set(-330, 190, -330);
    fixed.rotation.y = 0.1;
    const rail = rbox(1120, 190, 60, 6, SM.graphite());
    rail.position.set(-330, 95, -330);
    rail.rotation.y = 0.1;
    onDesk.add(certs.group, plate.group, fixed, rail);
    group.add(scale.group, desk.group, onDesk);
    return {
      group,
      update: (f) => {
        const p = paramsAt(f);
        scale.update({ tilt: p.tilt });
        // the hand-over: lifted a little, carried across, set down in front of the nameplate
        certs.group.position.set(FROM + (TO - FROM) * p.hand, 70 * Math.sin(Math.PI * p.hand), 20 - 60 * p.hand);
        certs.group.rotation.y = 0.07 * Math.sin(Math.PI * p.hand) - 0.04;
        kh.emissiveIntensity = 0.06 + 1.2 * p.label;
        void FA; void SETTLE;
      },
    };
  },
};
