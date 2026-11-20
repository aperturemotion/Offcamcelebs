// ══════════════════════════════════════════════════════════════════════════════════
// SET C, THE BONDS (038; SHOTS.md): "Nearly five years later, United itself sold £500 million of bonds to pay off the bank
// loans." On the LIGHT stage (a pale grey table seen from above: study R5; paper only appears here), one long table the
// camera travels along:
//   the flip calendar: 2005 flips over to 2010 on "later";
//   the press prints bond certificates (each a cream sheet with the real crest: MANCHESTER UNITED | SENIOR SECURED NOTES |
//   2010), three stamps, each sheet slid off onto a pile; the press's counter rolls up and LANDS on £504,000,000 on "500";
//   the vault labelled BANK LOANS: its wheel spins, its door swings open; on "bonds" the certificates fly into it one after
//   another; on "pay" its door slams shut; on "loans" a stamp slams a red PAID OFF plate onto the door.
// ══════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { word } from "../../r45/time";
import { ramp, clamp01, SOFT, SETTLE, EXIT } from "../../r45/tokens";
import { cut, dolly, travel, type CamKey3 } from "../cam";
import { lightStageLights, type Place3, type PlaceCue, type Lights } from "../place";
import { K, litPlate, ring, countUp, pounds, joined } from "../kit";
import { enterOf } from "../timeline";
import { makeCalendar } from "../obj/calendar";
import { makeBond, makeBondPress, BOND, BPRESS } from "../obj/bond";
import { makeVault } from "../obj/vault";
import { makeStamp } from "../obj/stamp";

const S = "bonds" as const;
const ENTER = enterOf(S);
const LATER = word(S, 0, /^later/), N500 = word(S, 0, /^500/), BONDS = word(S, 0, /^bonds/), PAY = word(S, 0, /^pay/), LOANS = word(S, 0, /^loans/);
// the stations along the table (x)
const X0 = 0, X1 = 1400, X2 = 3000;
const FLIP = [LATER - 12, LATER + 2] as const;
const T1 = LATER + 6, T1_DUR = 16;
const STAMPS = [T1 + T1_DUR + 4, T1 + T1_DUR + 18, N500 - 5];
const COUNT = [STAMPS[0] - 2, N500] as const;
const T2 = N500 + 8, T2_DUR = 18;
const WHEEL = [T2 + 2, T2 + 14] as const, DOOR = [T2 + 10, T2 + 30] as const;
const FLY = [BONDS - 12, BONDS - 4, BONDS + 4], FLY_DUR = 16;
const SLAM = [PAY - 6, PAY + 2] as const;
const HIT = LOANS + 1;
export const BD = { flip: FLIP, stamps: STAMPS, count: COUNT, door: DOOR, fly: FLY, slam: SLAM, hit: HIT } as const;

const PILE = new THREE.Vector3(X1 + 640, 0, 120);
const MOUTH = new THREE.Vector3(X2, 640, -150);   // the vault's mouth (unscaled vault at x X2, front face z = 0)

const ramAt = (f: number) => {
  let v = 0;
  for (const s of STAMPS) {
    if (f >= s - 4 && f < s) v = Math.max(v, EXIT(clamp01((f - (s - 4)) / 4)));
    else if (f >= s && f < s + 7) v = Math.max(v, 1 - SOFT(clamp01((f - s - 1) / 6)));
  }
  return v;
};
/** the k-th printed sheet: on the die until its stamp has lifted, then slid off to the pile (k sheets high) */
const SLIDE = 8;
const sheetAt = (k: number, f: number) => {
  const s = STAMPS[k], die = new THREE.Vector3(X1, BPRESS.base + 10, BPRESS.dieZ), top = new THREE.Vector3(PILE.x, k * (BOND.t + 0.6), PILE.z);
  if (f < s - 6) return { p: die, on: false, printed: false, fast: false, rot: 0 };
  if (f < s + 7) return { p: die, on: true, printed: f >= s, fast: false, rot: 0 };
  const t = clamp01((f - s - 7) / SLIDE), e = SOFT(t);
  const p = die.clone().lerp(top, e); p.y = die.y + (top.y - die.y) * e * e + Math.sin(Math.PI * e) * 120;
  return { p, on: true, printed: true, fast: t > 0 && t < 1, rot: -0.2 * e };
};
/** the k-th sheet's flight from the pile into the vault: up over the open door, down into the mouth */
const flightAt = (k: number, f: number) => {
  const a = FLY[2 - k], t = (f - a) / FLY_DUR;   // the TOP sheet goes first
  if (t <= 0) return null;
  if (t >= 1) return { p: MOUTH.clone().add(new THREE.Vector3(0, 0, -260)), on: false, fast: false, tilt: 0 };
  const start = new THREE.Vector3(PILE.x, k * (BOND.t + 0.6), PILE.z), ctrl = new THREE.Vector3(X2 - 300, 1900, 500), end = MOUTH.clone().add(new THREE.Vector3(0, -40, -260));
  const u = SOFT(t);
  const p = new THREE.Vector3().addScaledVector(start, (1 - u) * (1 - u)).addScaledVector(ctrl, 2 * u * (1 - u)).addScaledVector(end, u * u);
  return { p, on: true, fast: true, tilt: Math.sin(Math.PI * u) * 0.9 };
};

export const BondsPlace: Place3 = {
  id: S, label: "4 Set C: the bonds (2010, £504m printed, the bank loans paid off)", enter: ENTER, stage: "light",
  shots: ({ from, to }): CamKey3[] => [
    cut(from, [X0 - 260, 1450, 1500], [X0, 380, 40], { fov: 40, focus: [X0, 380, 0], why: "high on the calendar" }),
    dolly(from + 1, Math.max(20, T1 - from - 2), [X0 - 80, 1250, 1250], [X0, 400, 40], { fov: 40, ease: SOFT, why: "push: 2005 flips to 2010" }),
    travel(T1, T1_DUR, [X1 - 60, 1800, 2400], [X1 + 160, 280, 60], { fov: 40, why: "along the table to the press", vol: 0.5 }),
    dolly(T1 + T1_DUR + 1, Math.max(20, T2 - (T1 + T1_DUR) - 2), [X1 + 260, 1750, 3300], [X1 + 260, 300, 120], { fov: 40, ease: SOFT, why: "push on the press: £504m" }),
    travel(T2, T2_DUR, [X2 - 900, 2000, 3000], [X2 - 450, 480, 60], { fov: 40, why: "along the table to the vault", vol: 0.5 }),
    dolly(T2 + T2_DUR + 1, Math.max(20, SLAM[1] - (T2 + T2_DUR) - 2), [X2 - 300, 1800, 3500], [X2 - 80, 560, 0], { fov: 40, ease: SOFT, why: "the bonds fly into the vault" }),
    dolly(SLAM[1] + 1, Math.max(16, to - SLAM[1] - 2), [X2 - 60, 1450, 3100], [X2, 620, 150], { fov: 40, ease: SOFT, why: "in on the door: PAID OFF" }),
  ],
  lights: (f): Lights => {
    const cx = f < T1 ? X0 : f < T2 ? X1 : X2 - 300;
    return lightStageLights([cx, 300, 0], { key: 1.15 });
  },
  blur: (f) => (f >= FLIP[0] + 4 && f <= FLIP[1]) || STAMPS.some((s) => f >= s - 3 && f <= s + 1) || [0, 1, 2].some((k) => sheetAt(k, f).fast || !!flightAt(k, f)?.fast)
    || (f >= SLAM[0] + 3 && f <= SLAM[1]) || (f >= HIT - 4 && f <= HIT),
  cues: (): PlaceCue[] => [
    { kind: "move", s: "flick", at: FLIP[1] - 3, end: FLIP[1] + 4, vol: 0.4, why: "2005 flips over to 2010" },
    ...STAMPS.map((s, i): PlaceCue => ({ kind: "hit", s: "thud", at: s, vol: 0.4, why: `the press prints bond ${i + 1}` })),
    { kind: "hit", s: "datashort", at: COUNT[0], end: COUNT[1], vol: 0.3, why: "the counter rolls" },
    { kind: "hit", s: "pingshort", at: COUNT[1], vol: 0.45, why: "£504,000,000 lands" },
    { kind: "move", s: "chainshort", at: WHEEL[0] + 4, end: WHEEL[1], vol: 0.3, why: "the vault's wheel spins" },
    { kind: "move", s: "lowwoosh", at: DOOR[0] + 10, end: DOOR[1] + 4, vol: 0.35, why: "the vault door opens" },
    ...FLY.map((a, i): PlaceCue => ({ kind: "move", s: "swoosh", at: a + FLY_DUR / 2, end: a + FLY_DUR + 2, vol: 0.3, why: `bond ${i + 1} flies into the vault` })),
    { kind: "hit", s: "thud", at: SLAM[1], vol: 0.6, why: "the vault door slams shut: pay off" },
    { kind: "hit", s: "thud", at: HIT, vol: 0.6, why: "PAID OFF is stamped on the door" },
  ],
  build: () => {
    const group = new THREE.Group();
    const cal = makeCalendar("bonds", ["2005", "2010"]);
    cal.group.position.set(X0, 0, -40); cal.group.scale.setScalar(0.62); cal.group.name = "calendar"; group.add(cal.group);
    const press = makeBondPress("bonds");
    press.group.position.set(X1, 0, 0); press.group.name = "press"; group.add(press.group);
    const blank = makeBond("blank"); blank.group.name = "blank sheet"; group.add(blank.group);
    const sheets = [0, 1, 2].map((k) => { const b = makeBond(`bond${k}`); b.group.name = `bond ${k + 1}`; group.add(b.group); return b; });
    const vault = makeVault("bonds"); vault.label("BANK LOANS");
    vault.group.position.set(X2, 0, 0); vault.group.name = "vault"; group.add(vault.group);
    for (const b of sheets) { joined(b.group, vault.group, "the bonds fly in through the vault's open mouth"); joined(b.group, press.group, "the sheet lies on the die and the press prints it"); }
    joined(blank.group, press.group, "the blank sheet lies on the die");
    sheets.forEach((a, i) => sheets.forEach((b, j) => { if (j !== i) joined(a.group, b.group, "the bonds stack on one another"); }));
    // the PAID OFF plate the stamp leaves on the door, and the stamp
    const paid = litPlate(["PAID OFF"], { size: 92, color: K.red, depth: 30 });
    paid.group.position.set(X2, 640, 300); paid.group.name = "PAID OFF plate"; group.add(paid.group);
    const stamp = makeStamp("bonds"); stamp.group.name = "stamp"; group.add(stamp.group);
    joined(stamp.group, paid.group, "the stamp presses the plate onto the door");
    const halo = ring({ r: 900, color: K.money }); halo.mesh.position.set(X1, 1.5, 300); group.add(halo.mesh);
    const red = ring({ r: 1000, color: K.red }); red.mesh.position.set(X2, 1.5, 300); group.add(red.mesh);
    return {
      group,
      update: (f) => {
        cal.update({ year: 0, flip: SOFT(clamp01((f - FLIP[0]) / (FLIP[1] - FLIP[0]))) });
        const on = ramp(f, COUNT[0] - 2, COUNT[0] + 4, SETTLE);
        press.update({ ram: ramAt(f), value: pounds(countUp(f, COUNT[0], COUNT[1], 0, 504e6)), on });
        // a blank sheet waits on the die before each stamp (the next one is fed in as the last slides off)
        const next = STAMPS.findIndex((s) => f < s);
        blank.group.visible = next >= 0 && f >= (next === 0 ? 0 : STAMPS[next - 1] + 7 + SLIDE);
        blank.group.position.set(X1, BPRESS.base + 10, BPRESS.dieZ);
        sheets.forEach((b, k) => {
          const fl = flightAt(k, f);
          if (fl) { b.group.visible = fl.on; b.group.position.copy(fl.p); b.group.rotation.set(fl.tilt, 0.3, 0); return; }
          const s = sheetAt(k, f);
          b.group.visible = s.on && s.printed;
          b.group.position.copy(s.p);
          b.group.rotation.set(0, s.rot, 0);
        });
        const open = SOFT(clamp01((f - DOOR[0]) / (DOOR[1] - DOOR[0])));
        const shut = EXIT(clamp01((f - SLAM[0]) / (SLAM[1] - SLAM[0])));
        vault.update({ door: open * (1 - shut), wheel: SOFT(clamp01((f - WHEEL[0]) / (WHEEL[1] - WHEEL[0]))) });
        // the stamp: comes in from the camera side, slams on "loans", recoils away
        const sIn = clamp01((f - (HIT - 7)) / 7), sOut = clamp01((f - (HIT + 3)) / 10);
        const z = 316 + (1 - EXIT(sIn)) * 900 + SOFT(sOut) * 1100;
        stamp.group.visible = f >= HIT - 7 && f < HIT + 13;
        stamp.group.position.set(X2, 640, z);
        paid.group.visible = f >= HIT;
        halo.update(f, COUNT[1]); red.update(f, HIT);
      },
    };
  },
};
