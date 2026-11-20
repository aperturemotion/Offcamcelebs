// ══════════════════════════════════════════════════════════════════════════════════
// SET B, TWO SIDES (038; SHOTS.md): "The American family took over in 2005, mostly with loans."
// Dark stage. Two plinths: on the left the Glazer side (a glossy ball wrapped in the real US flag, its nameplate THE GLAZER
// FAMILY | TAMPA, FLORIDA), on the right the club side (the real crest; ★ P17: no second nameplate). Behind, a bank vault
// (no plate; its door hinged on the right, so what comes out of it goes left, to the US side).
//   frame 0 mid-action: the flag ball is falling onto the left plinth (it lands on "American");
//   "family": both nameplates light;
//   "2005": a flip calendar drops in between the plinths showing 2005;
//   the vault's wheel spins and its door swings open; on "mostly … loans" banded cash stacks marked LOANS slide out of it
//   and across the floor to the US side, landing one on another;
//   last, the crest lifts off its plinth and glides across to the US side, landing beside the flag ball.
// The camera: low and close on the falling ball, back to both sides as the calendar lands, up and back to take in the
// vault as it opens, then a track left with the cash and the crest.
// ══════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { word } from "../../r45/time";
import { ramp, clamp01, SOFT, SETTLE } from "../../r45/tokens";
import { cut, dolly, crane, type CamKey3, type Vec } from "../cam";
import { stdLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, MAT, block, ring, dropIn, dropFalls, falling, freeText } from "../kit";
import { enterOf } from "../timeline";
import { makeFlagBall } from "../obj/flag";
import { makeCrest } from "../obj/crest";
import { makeNameplate } from "../obj/nameplate";
import { makeCalendar } from "../obj/calendar";
import { makeVault } from "../obj/vault";
import { makeCashStack, CASH } from "../obj/cash";

const S = "sides" as const;
const ENTER = enterOf(S);
const AMERICAN = word(S, 0, /^American/), FAMILY = word(S, 0, /^family/), Y2005 = word(S, 0, /^2005/), MOSTLY = word(S, 0, /^mostly/), LOANS = word(S, 0, /^loans/);
// ★ (038 review) the ball is already dropping on the cut (a short drop: it stays below the caption band)
const BALL_LAND = ENTER + 6, BALL_DROP = { h: 240, fall: 6 }, CAL_DROP = { h: 300, fall: 7 };
const PLATES_ON = FAMILY;
const CAL_LAND = Y2005 + 1;
const WHEEL = [CAL_LAND + 4, CAL_LAND + 16] as const, DOOR = [CAL_LAND + 12, CAL_LAND + 34] as const;
// three bricks of cash: each slides out of the vault's mouth, drops to the floor and skids to the US side's pile
const CASH_GO = [MOSTLY - 8, MOSTLY - 2, MOSTLY + 4], CASH_DUR = 16;
const CREST_GO = Math.max(LOANS - 6, CASH_GO[2] + 8), CREST_DUR = 16;
export const SD = { ball: BALL_LAND, plates: PLATES_ON, cal: CAL_LAND, door: DOOR, cash: CASH_GO, crest: CREST_GO } as const;

// ── the layout (place coordinates: floor y = 0) ──
const LP = { x: -560, w: 760, h: 280, d: 420 }, RP = { x: 600, w: 480, h: 280, d: 420 };
const BALL_R = 150, BALL_X = LP.x - 175, SLOT_X = LP.x + 180, CREST = 300;
const VS = 0.75, VX = 40, VZ = -1180;            // the vault: scaled, mirrored (hinged on the right)
// ★ P17: the brick rides on its corners in the round tunnel, clear of the frame: its corners (176 out, turned 0.35) need
//   the floor of the circle there, not at its centre (it ran through the frame's lower rim)
const MOUTH_Y = 640 * VS, MOUTH_BOTTOM = MOUTH_Y - Math.sqrt((430 * VS) ** 2 - 176 ** 2) + 2;
const PILE: Vec = [LP.x - 560, 0, LP.d / 2 - 560];   // behind and left of the Glazer plinth

/** the cash brick k's position at f */
const cashAt = (k: number, f: number): { p: THREE.Vector3; on: boolean; fast: boolean } => {
  const a = CASH_GO[k], t = (f - a) / CASH_DUR;
  // (it slides right out past the frame before it tips off and drops: ★ P17, its back end fell through the frame's rim)
  const inside = new THREE.Vector3(VX, MOUTH_BOTTOM, VZ - 140), lip = new THREE.Vector3(VX, MOUTH_BOTTOM, VZ + 185);   // (straight out along the tunnel)
  const rest = new THREE.Vector3(PILE[0], k * CASH.stack, PILE[2]);
  if (t <= 0) return { p: inside, on: false, fast: false };
  if (t >= 1) return { p: rest, on: true, fast: false };
  if (t < 0.36) { const u = SOFT(t / 0.36); return { p: inside.clone().lerp(lip, u), on: true, fast: true }; }
  // off the lip: it falls to its pile height while skidding left, decelerating
  const u = (t - 0.36) / 0.64, e = 1 - Math.pow(1 - u, 2.2);
  const p = lip.clone().lerp(rest, e);
  const fall = Math.min(1, u / 0.35);
  p.y = lip.y + (rest.y - lip.y) * fall * fall;
  return { p, on: true, fast: u < 0.6 };
};
const crestAt = (f: number) => {
  const t = clamp01((f - CREST_GO) / CREST_DUR), e = SOFT(t);
  const x = RP.x + (SLOT_X - RP.x) * e;
  const y = RP.h + CREST * 0.52 + Math.sin(Math.PI * e) * 260;
  return { x, y, fast: t > 0.1 && t < 0.9 };
};

export const SidesPlace: Place3 = {
  id: S, label: "3 Set B: two sides (the Glazer family, the club), 2005, the loans", enter: ENTER, stage: "dark",
  // ★ (038 review) staged by DEPTH: a low diagonal along the row, the Glazer side big in front, United behind it, the vault
  //   between; every lit thing below the caption band
  shots: ({ from, to }): CamKey3[] => [
    cut(from, [-1950, 720, 2050], [120, 380, -150], { fov: 44, focus: [LP.x, 300, 0], why: "low diagonal: the Glazer side in front, United behind" }),
    dolly(from + 1, Math.max(24, CAL_LAND - 8 - from), [-1820, 760, 2200], [200, 400, -200], { fov: 44, ease: SOFT, why: "drift along the row" }),
    crane(CAL_LAND - 2, Math.max(26, DOOR[1] - CAL_LAND - 2), [-1250, 1050, 2700], [60, 440, -500], { fov: 44, why: "up and back: the vault opens" }),
    dolly(DOOR[1] + 1, Math.max(20, to - DOOR[1] - 2), [-1650, 880, 2350], [-300, 380, -260], { fov: 44, ease: SOFT, why: "track left: the cash and the crest go to the US side" }),
  ],
  lights: (f): Lights => {
    const L = stdLights([0, 480, -300], { s: 1.25, key: 3.5, rim: 3.2, back: 2.6, amb: 0.16 });
    L.accent = { pos: [VX, MOUTH_Y + 80, VZ + 380], color: K.amber, i: 0.9 * ramp(f, DOOR[0], DOOR[1], SETTLE) };
    return L;
  },
  blur: (f) => dropIn(f, BALL_LAND, BALL_DROP).fast || dropIn(f, CAL_LAND, CAL_DROP).fast
    || [0, 1, 2].some((k) => cashAt(k, f).fast) || crestAt(f).fast,
  cues: (): PlaceCue[] => [
    { kind: "hit", s: "thud", at: BALL_LAND, vol: 0.4, why: "the flag ball lands on the Glazer plinth" },
    { kind: "hit", s: "click", at: PLATES_ON, vol: 0.3, why: "the nameplates light: the American family" },
    { kind: "hit", s: "thud", at: CAL_LAND, vol: 0.45, why: "the calendar lands on 2005" },
    { kind: "move", s: "chainshort", at: WHEEL[0] + 4, end: WHEEL[1], vol: 0.3, why: "the vault's wheel spins" },
    { kind: "move", s: "lowwoosh", at: DOOR[0] + 12, end: DOOR[1] + 4, vol: 0.4, why: "the vault door swings open" },
    ...CASH_GO.map((a, k): PlaceCue => ({ kind: "hit", s: "thud", at: a + CASH_DUR, vol: 0.3, why: `loans brick ${k + 1} lands on the US side` })),
    { kind: "move", s: "swoosh", at: CREST_GO + CREST_DUR / 2, end: CREST_GO + CREST_DUR + 4, vol: 0.4, why: "the crest crosses to the US side" },
    { kind: "hit", s: "thud", at: CREST_GO + CREST_DUR, vol: 0.4, why: "the crest lands beside the flag ball" },
  ],
  build: () => {
    const group = new THREE.Group();
    // the two plinths
    const lp = block(LP.w, LP.h, LP.d, 26, MAT.black()); lp.position.x = LP.x; lp.name = "Glazer plinth"; group.add(lp);
    const rp = block(RP.w, RP.h, RP.d, 26, MAT.black()); rp.position.x = RP.x; rp.name = "club plinth"; group.add(rp);
    const ball = makeFlagBall("sides", BALL_R); ball.group.name = "flag ball"; group.add(ball.group);
    const crest = makeCrest("sides", CREST); crest.group.name = "crest"; group.add(crest.group);
    // the nameplates stand on the floor in front of their plinths
    const n1 = makeNameplate("sides-glazer", ["THE GLAZER FAMILY", "TAMPA, FLORIDA"], { size: 34 });
    n1.group.position.set(LP.x, 0, LP.d / 2 + 150); group.add(n1.group);
    // (★ P17, one label and one figure a frame: the club's side has no nameplate (the real crest says who it is), and the
    //   vault no LOANS plate (the bricks it pays out are marked LOANS): THE GLAZER FAMILY and 2005 are the shot's text)
    const plateLit: THREE.MeshBasicMaterial[] = [];
    for (const n of [n1]) n.group.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.MeshBasicMaterial; if (m?.isMeshBasicMaterial && !plateLit.includes(m)) plateLit.push(m); });
    // the calendar between the plinths
    const cal = makeCalendar("sides", ["2005", "2010"]);
    const calG = new THREE.Group(); calG.scale.setScalar(0.42); calG.position.set((LP.x + LP.w / 2 + RP.x - RP.w / 2) / 2, 0, 20); calG.add(cal.group); group.add(calG);
    calG.name = "calendar";
    // the vault behind, mirrored so its door is hinged on the right; its plate text un-mirrored
    const vault = makeVault("sides");
    vault.unlabel();
    vault.group.scale.set(-VS, VS, VS); vault.group.position.set(VX, 0, VZ); vault.group.name = "vault";
    group.add(vault.group);
    // the cash bricks
    const bricks = [0, 1, 2].map((k) => { const c = makeCashStack(`sides${k}`, "LOANS"); c.group.name = `loans brick ${k + 1}`; group.add(c.group); return c; });
    // ★ P17: no exemptions: each brick slides out through the open mouth (the check runs against the door, the frame and the
    //   walls), drops off the lip and skids to the pile, landing on the one before it; its flight is declared, 16 frames
    bricks.forEach((b, k) => falling(b.group, CASH_GO[k], CASH_GO[k] + CASH_DUR, "the loans brick slides out of the vault, drops and skids to the pile"));
    dropFalls(ball.group, BALL_LAND, BALL_DROP, "the flag ball drops onto the Glazer plinth");
    dropFalls(calG, CAL_LAND, CAL_DROP, "the calendar drops in between the plinths");
    falling(crest.group, CREST_GO, CREST_GO + CREST_DUR, "the crest lifts off its plinth and glides across to the US side");
    const halo = ring({ r: 900 }); halo.mesh.position.set(LP.x, 1.5, 0); group.add(halo.mesh);
    const halo2 = ring({ r: 700 }); halo2.mesh.position.set(calG.position.x, 1.5, 20); group.add(halo2.mesh);
    void freeText;
    return {
      group,
      update: (f) => {
        const d = dropIn(f, BALL_LAND, BALL_DROP);
        ball.group.visible = d.on;
        ball.group.position.set(BALL_X, LP.h + BALL_R + d.y, 0);
        ball.group.rotation.y = -0.5 + f * 0.012;
        const lv = ramp(f, PLATES_ON - 2, PLATES_ON + 8, SETTLE);
        for (const m of plateLit) { m.color.copy(m.userData.full ?? m.color).multiplyScalar(0.25 + 0.75 * lv); }
        const c = dropIn(f, CAL_LAND, CAL_DROP);
        calG.visible = c.on;
        calG.position.y = c.y;
        cal.update({ year: 0, flip: 0 });
        vault.update({ door: SOFT(clamp01((f - DOOR[0]) / (DOOR[1] - DOOR[0]))), wheel: SOFT(clamp01((f - WHEEL[0]) / (WHEEL[1] - WHEEL[0]))) });
        bricks.forEach((b, k) => { const s = cashAt(k, f); b.group.visible = s.on; b.group.position.copy(s.p); b.group.rotation.y = 0.35; });
        const cr = crestAt(f);
        crest.group.position.set(cr.x, cr.y, 0);
        crest.group.rotation.y = f < CREST_GO ? -0.15 : -0.15 + 0.3 * SOFT(clamp01((f - CREST_GO) / CREST_DUR));
        halo.update(f, BALL_LAND); halo2.update(f, CAL_LAND);
      },
    };
  },
};
