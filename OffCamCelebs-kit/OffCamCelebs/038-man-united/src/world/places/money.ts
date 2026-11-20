// ══════════════════════════════════════════════════════════════════════════════════
// SET D, WHERE THE MONEY CAME FROM (038; SHOTS.md):
//   "So ticket, shirt and TV money went on paying for the takeover."
//   "ESPN says that by 2018, the cost had passed £1 billion."
// Dark stage. A model of Old Trafford at the back. In front of it, a stadium turnstile, a rack of red home shirts with the
// real crest, and a broadcast TV camera. A clear glass pipe runs out of the stadium's wall, past the three of them (a funnel
// over the pipe in front of each) and into a bank vault (its door hinged on the right, open).
//   frame 0 mid-action: the floodlights are coming up and a coin is already rolling down the pipe;
//   "ticket": the turnstile turns a third, its reader flashes, a coin flips out of it into its funnel;
//   "shirt": the shirts swing on their hangers, a coin flips out of the rack into its funnel;
//   "TV": the camera pans, its tally lamp goes red (on air), a coin flips out into its funnel;
//   the coins roll down the pipe into the vault ("paying for the takeover");
//   "ESPN": a sign carrying the real ESPN logo drops in by the vault: COST OF FINANCING THE TAKEOVER | ESPN ESTIMATE, 2018;
//   "cost": the big odometer on the vault's top lights and rolls, LANDING on £1,000,000,000 on "billion", a "+" after it.
// ══════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { word } from "../../r45/time";
import { ramp, clamp01, SOFT, SETTLE } from "../../r45/tokens";
import { cut, dolly, travel, crane, type CamKey3 } from "../cam";
import { stdLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, MAT, lit, rbox, block, cyl, wide, ring, dropIn, countUp, pounds, joined, textOn } from "../kit";
import { text3d, textWidth } from "../text3d";
import { enterOf } from "../timeline";
import { makeStadium } from "../obj/stadium";
import { makeTurnstile } from "../obj/turnstile";
import { makeShirtRack } from "../obj/shirtrack";
import { makeTvCamera } from "../obj/tvcamera";
import { makePipe } from "../obj/pipe";
import { makeVault } from "../obj/vault";
import { makeOdometer, ODO } from "../obj/odometer";
import { makeCoin } from "../obj/coin";
import { printMat } from "../obj/brand";

const S = "money" as const;
const ENTER = enterOf(S);
const TICKET = word(S, 0, /^ticket/), SHIRT = word(S, 0, /^shirt/), TV = word(S, 0, /^TV/), PAYING = word(S, 0, /^paying/);
const ESPN = word(S, 1, /^ESPN/), Y2018 = word(S, 1, /^2018/), COST = word(S, 1, /^cost/), BILLION = word(S, 1, /^billion/);
// ── the layout ──
const ST = { x: -300, z: -1150 };
const ITEM_Z = 350, TX = -900, RX = 0, VX_CAM = 780;
const PIPE_Y = 120, PIPE_Z = -200, PIPE_R = 86;
const VS = 0.8, VX = 1700, VZ = -300;
const MOUTH = new THREE.Vector3(VX, 640 * VS, VZ);
const SIGN = { x: 2380, z: 650 };
// ── the beats ──
const FEEDS = [TICKET, SHIRT, TV];            // each source's coin flips out on its word
const FLIP_DUR = 14, DROP_DUR = 6;
const RIDE = 40;                               // frames from a funnel down the pipe into the vault
const PRE = ENTER - 20;                        // a coin already rolling when the place opens
const SIGN_LAND = ESPN + 3;
const ODO_ON = Y2018, ROLL = [COST, BILLION] as const, PLUS = BILLION + 4;
export const MN = { feeds: FEEDS, sign: SIGN_LAND, roll: ROLL, plus: PLUS } as const;

const itemX = [TX, RX + 470, VX_CAM];
const funnelTop = (k: number) => new THREE.Vector3(itemX[k], PIPE_Y + PIPE_R + 130, PIPE_Z);
const srcOf = (k: number) => [new THREE.Vector3(TX, 640, ITEM_Z), new THREE.Vector3(RX + 410, 170, ITEM_Z + 150), new THREE.Vector3(VX_CAM, 1130, ITEM_Z)][k];

export const MoneyPlace: Place3 = {
  id: S, label: "5 Set D: Old Trafford's ticket, shirt and TV money down the pipe into the vault; ESPN: £1bn+", enter: ENTER, stage: "dark",
  shots: ({ from, to }): CamKey3[] => [
    cut(from, [-1750, 1250, 1750], [-560, 300, -520], { fov: 46, focus: [-560, 300, -300], why: "wide: Old Trafford, its money machines" }),
    dolly(from + 1, TICKET + 2 - from, [TX - 420, 820, 1650], [TX, 620, ITEM_Z - 120], { fov: 44, ease: SOFT, why: "in on the turnstile" }),
    cut(TICKET + 4, [RX - 440, 1000, 2150], [RX + 40, 600, ITEM_Z - 120], { fov: 44, focus: [RX + 300, 400, ITEM_Z], why: "cut to the shirts" }),
    dolly(TICKET + 5, Math.max(8, SHIRT - TICKET - 6), [RX - 380, 1000, 2050], [RX + 60, 600, ITEM_Z - 120], { fov: 44, ease: SOFT, why: "drift on the shirts" }),
    cut(SHIRT + 1, [VX_CAM - 340, 1000, 2200], [VX_CAM + 20, 820, ITEM_Z - 120], { fov: 44, focus: [VX_CAM, 900, ITEM_Z], why: "cut to the TV camera" }),
    dolly(SHIRT + 2, Math.max(8, TV - SHIRT - 3), [VX_CAM - 300, 1000, 2100], [VX_CAM + 40, 820, ITEM_Z - 120], { fov: 44, ease: SOFT, why: "drift on the TV camera" }),
    cut(TV + 4, [-150, 1650, 4500], [0, 560, -150], { fov: 50, focus: [0, 400, 0], why: "wide: all three feed the pipe" }),
    dolly(TV + 5, Math.max(30, PAYING + 14 - (TV + 5)), [300, 1650, 4500], [450, 600, -150], { fov: 50, ease: SOFT, why: "drift with the coins toward the vault" }),
    cut(ESPN - 4, [2250, 1500, 4700], [2250, 860, 150], { fov: 44, focus: [2050, 700, 300], why: "the vault and the ESPN sign, both whole" }),
    dolly(ESPN - 3, Math.max(48, COST - 8 - (ESPN - 3)), [2230, 1500, 4500], [2250, 880, 150], { fov: 44, ease: SOFT, why: "hold on the vault and the ESPN sign" }),
    crane(COST - 6, Math.max(26, BILLION + 6 - (COST - 6)), [1820, 1500, 2250], [VX, 1050, -450], { fov: 44, why: "up to the odometer: £1bn+" }),
    dolly(BILLION + 7, Math.max(12, to - (BILLION + 7) - 1), [1780, 1440, 2000], [VX, 1050, -450], { fov: 44, ease: SOFT, why: "hold on the odometer" }),
  ],
  lights: (f): Lights => {
    const cx = f < TV + 4 ? -500 : 1300;
    const L = stdLights([cx, 520, -200], { s: 1.35, key: 3.4, rim: 3.2, back: 2.4, amb: 0.16 });
    L.accent = { pos: [VX, 1500, VZ + 700], color: K.amber, i: 1.1 * ramp(f, ODO_ON, ODO_ON + 10, SETTLE) };
    return L;
  },
  blur: (f) => FEEDS.some((a) => f >= a - 2 && f <= a + FLIP_DUR) || dropIn(f, SIGN_LAND, { h: 900, fall: 9 }).fast || (f >= ROLL[0] && f <= ROLL[1] - 8),
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "click", at: TICKET, vol: 0.35, why: "the turnstile turns: ticket money" },
    { kind: "hit", s: "click", at: SHIRT, vol: 0.3, why: "the shirts swing: shirt money" },
    { kind: "hit", s: "click", at: TV, vol: 0.3, why: "the TV camera goes on air: TV money" },
    ...FEEDS.map((a, k): PlaceCue => ({ kind: "hit", s: "coin", at: a + FLIP_DUR, vol: 0.4, why: `coin ${k + 1} drops into the pipe` })),
    { kind: "move", s: "whooshsoft", at: TV + 30, end: PAYING + 16, vol: 0.3, why: "the coins roll down the pipe" },
    ...FEEDS.map((a, k): PlaceCue => ({ kind: "hit", s: "coin", at: a + FLIP_DUR + DROP_DUR + RIDE, vol: 0.3, why: `coin ${k + 1} drops into the vault` })),
    { kind: "hit", s: "thud", at: SIGN_LAND, vol: 0.45, why: "the ESPN sign lands" },
    { kind: "hit", s: "click", at: ODO_ON, vol: 0.3, why: "the odometer lights" },
    { kind: "hit", s: "datashort", at: ROLL[0], end: ROLL[1], vol: 0.35, why: "the odometer rolls" },
    { kind: "hit", s: "pingshort", at: ROLL[1], vol: 0.5, why: "£1,000,000,000 lands" },
    { kind: "hit", s: "click", at: PLUS, vol: 0.3, why: "the + after it" },
  ],
  build: () => {
    const group = new THREE.Group();
    const stadium = makeStadium("money");
    stadium.group.position.set(ST.x, 0, ST.z); stadium.group.rotation.y = 0.06; stadium.group.name = "Old Trafford"; group.add(stadium.group);
    const turn = makeTurnstile("money"); turn.group.position.set(TX, 0, ITEM_Z); turn.group.name = "turnstile"; group.add(turn.group);
    const rack = makeShirtRack("money"); rack.group.position.set(RX, 0, ITEM_Z); rack.group.name = "shirt rack"; group.add(rack.group);
    const tv = makeTvCamera("money"); tv.group.position.set(VX_CAM, 0, ITEM_Z); tv.group.rotation.y = -0.25; tv.group.name = "TV camera"; group.add(tv.group);
    // the pipe: out of Old Trafford's near wall, along behind the three sources, up into the vault's mouth
    const path = [
      new THREE.Vector3(-1000, PIPE_Y, -640), new THREE.Vector3(-1000, PIPE_Y, -330), new THREE.Vector3(-930, PIPE_Y, PIPE_Z),
      new THREE.Vector3(-300, PIPE_Y, PIPE_Z), new THREE.Vector3(600, PIPE_Y, PIPE_Z), new THREE.Vector3(1250, PIPE_Y, PIPE_Z),
      new THREE.Vector3(1520, 260, -170), new THREE.Vector3(VX - 30, MOUTH.y - 20, VZ + 60), new THREE.Vector3(VX, MOUTH.y, VZ - 200), new THREE.Vector3(VX, MOUTH.y, VZ - 380),
    ];
    const pipe = makePipe("money", path, PIPE_R); pipe.group.name = "pipe"; group.add(pipe.group);
    // a satin funnel on top of the pipe in front of each source
    const funnels = [0, 1, 2].map((k) => {
      const fm = new THREE.Mesh(new THREE.CylinderGeometry(96, 40, 130, 40, 1, true), new THREE.MeshPhysicalMaterial({ color: "#9a9a9e", roughness: 0.3, metalness: 1, side: THREE.DoubleSide }));
      fm.position.set(itemX[k], PIPE_Y + PIPE_R + 65 - 6, PIPE_Z); fm.castShadow = true; fm.name = `funnel ${k + 1}`;
      group.add(fm);
      return fm;
    });
    // where each source's coin enters the pipe, as a fraction along it
    const uOf = (x: number) => { let best = 0, d = 1e9; for (let i = 0; i <= 400; i++) { const u = i / 400, p = pipe.curve.getPointAt(u); const dd = Math.abs(p.x - x) + Math.abs(p.z - PIPE_Z) * 2; if (dd < d) { d = dd; best = u; } } return best; };
    const U0 = [0, 1, 2].map((k) => uOf(itemX[k]));
    // the vault (mirrored: hinged on the right, so the pipe comes in from the left, clear of its door), open
    const vault = makeVault("money");
    const vplate = vault.label("TAKEOVER DEBT");
    vplate.group.parent!.scale.x = -1;
    vault.group.scale.set(-VS, VS, VS); vault.group.position.set(VX, 0, VZ); vault.group.name = "vault"; group.add(vault.group);
    joined(pipe.group, vault.group, "the pipe runs into the vault's mouth");
    // the odometer on the vault's top
    const odo = makeOdometer("money");
    const OS = 0.52;
    odo.group.scale.setScalar(OS); odo.group.position.set(VX, 1350 * VS, VZ - (420 * VS) / 2 + 10); odo.group.name = "odometer"; group.add(odo.group);
    void ODO;
    // the ESPN sign: a black panel on a post, the real ESPN logo, two lines of print
    const sign = new THREE.Group(); sign.name = "ESPN sign";
    const base = block(260, 40, 200, 12, MAT.black()); sign.add(base);
    const post = cyl(22, 520, MAT.satin(), 24); post.position.y = 40; sign.add(post);
    const panelW = 760, panelH = 380;
    const panel = rbox(panelW, panelH, 40, 16, MAT.black()); panel.position.y = 40 + 520 + panelH / 2 - 30; panel.name = "ESPN panel"; sign.add(panel);
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(300, 300 * (411 / 1662)), printMat("espn", { alphaTest: 0.4, emissive: 0.55, rough: 0.5 }));
    logo.position.set(0, panel.position.y + panelH / 2 - 38 - 37, 20.6);
    logo.userData.print = "the ESPN wordmark (assets/brand/espn.png) on the sign";
    sign.add(logo);
    const face = lit(K.white, 0.95), gold = lit(K.money, 1.0);
    const line = (s: string, size: number, y: number, mat: THREE.MeshBasicMaterial) => {
      const max = panelW - 90, sz = Math.min(size, (max / (textWidth(s, "800", size) * 1.08)) * size);
      const t = wide(text3d(s, { font: "800", size: sz, depth: 2, bevel: 0, face: mat }), 1.08);
      t.position.set(0, y - sz * 0.345, 20.5); t.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
      textOn(t, panel, { inset: 14 }); sign.add(t);
    };
    line("COST OF FINANCING", 52, panel.position.y + 20, gold);
    line("THE TAKEOVER", 52, panel.position.y - 50, gold);
    line("ESPN ESTIMATE, 2018", 34, panel.position.y - 128, face);
    sign.position.set(SIGN.x, 0, SIGN.z); sign.rotation.y = -0.3;
    group.add(sign);
    // the coins: three that flip out of the sources (and roll on), and one already rolling as the place opens
    const coins = [0, 1, 2, 3].map((i) => { const c = makeCoin(`money${i}`); c.group.name = `coin ${i + 1}`; group.add(c.group); return c; });
    for (const c of coins) { joined(c.group, pipe.group, "the coin rolls inside the glass pipe"); joined(c.group, vault.group, "the coin rolls into the vault"); for (const fu of funnels) joined(c.group, fu, "the coin drops through the funnel"); }
    const halo = ring({ r: 1100, color: K.money }); halo.mesh.position.set(VX - 200, 1.5, VZ + 500); group.add(halo.mesh);
    const signRing = ring({ r: 700 }); signRing.mesh.position.set(SIGN.x, 1.5, SIGN.z); group.add(signRing.mesh);
    /** a coin rolling on edge inside the pipe at fraction u */
    const ride = (c: THREE.Group, u: number, spin: number) => {
      const s = pipe.at(u);
      c.position.copy(s.p);
      // stand the coin on edge, its face across the pipe's direction of travel turned 90° (it rolls along the pipe)
      const yaw = Math.atan2(s.t.x, s.t.z);
      c.rotation.set(0, yaw + Math.PI / 2, Math.PI / 2 + 0);
      c.rotateY(spin);
      c.position.y -= PIPE_R - 62;
    };
    return {
      group,
      update: (f) => {
        stadium.lights(ramp(f, ENTER - 4, ENTER + 14, SETTLE));
        turn.update({ turn: SOFT(clamp01((f - (TICKET - 4)) / 10)), read: f >= TICKET - 3 && f < TICKET + 8 ? 1 : 0 });
        const sw = f < SHIRT ? 0 : 0.22 * Math.exp(-(f - SHIRT) / 14) * Math.sin(((f - SHIRT) / 9) * Math.PI);
        rack.update({ sway: sw });
        tv.update({ pan: -0.18 * SOFT(clamp01((f - (TV - 10)) / 14)), tally: f >= TV ? 1 : 0.1 });
        // the three coins
        for (let k = 0; k < 3; k++) {
          const c = coins[k].group, a = FEEDS[k];
          if (f < a) { c.visible = false; continue; }
          c.visible = true;
          const ft = (f - a) / FLIP_DUR;
          if (ft < 1) {     // flipped up out of the source, arcing over into the funnel's mouth
            const s = srcOf(k), e = funnelTop(k), u = ft;
            c.position.set(s.x + (e.x - s.x) * u, s.y + (e.y - s.y) * u + Math.sin(Math.PI * u) * [360, 140, 300][k], s.z + (e.z - s.z) * u);
            c.rotation.set(u * 9, 0, u * 3);
            continue;
          }
          const dt = (f - a - FLIP_DUR) / DROP_DUR;
          if (dt < 1) {     // down the funnel into the pipe
            const e = funnelTop(k);
            c.position.set(e.x, e.y + (PIPE_Y - e.y) * dt * dt, e.z);
            c.rotation.set(Math.PI / 2, 0, 0);
            continue;
          }
          const rt = (f - a - FLIP_DUR - DROP_DUR) / RIDE;
          if (rt >= 1) { c.visible = false; continue; }
          const u = U0[k] + (1 - U0[k]) * rt * rt * 0.4 + (1 - U0[k]) * 0.6 * rt;
          ride(c, Math.min(1, u), (f - a) * 0.5);
        }
        // the coin already rolling when the place opens
        { const c = coins[3].group, rt = (f - PRE) / (RIDE + 30); c.visible = rt > 0 && rt < 1; if (c.visible) ride(c, 0.04 + 0.96 * rt, f * 0.5); }
        vault.update({ door: 1, wheel: 1 });
        const sd = dropIn(f, SIGN_LAND, { h: 900, fall: 9 });
        sign.visible = sd.on; sign.position.y = sd.y;
        const on = ramp(f, ODO_ON, ODO_ON + 8, SETTLE);
        const v = countUp(f, ROLL[0], ROLL[1], 0, 1e9);
        odo.update({ value: pounds(v), on, plus: ramp(f, PLUS, PLUS + 6, SETTLE) });
        halo.update(f, ROLL[1]); signRing.update(f, SIGN_LAND);
      },
    };
  },
};
