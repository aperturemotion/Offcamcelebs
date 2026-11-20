// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE TURN CARDS (engine v2; study rule R27; ★ REWORKED 2026-11-19 on Timur's notes, P14: "the glow is way too strong… use
// the same animation that you used to use with OffCamCelebs for that text… make sure it's actually centred… reduce the glow
// intensity on all those scenes"). Black, WORDS ONLY (no floor, no backdrop, no reflection, no camera move), rendered inside
// the one 3-D canvas as flat-faced letters facing a still camera (1 unit = 1 px on screen):
//   · the words arrive with the OLD OffCamCelebs CAPTION animation (r45 Caption.tsx, rule 45.4 / 50): ONE WORD AT A TIME on
//     its spoken onset, opacity 0 → 1 with a blur of 8 px → 0 over 10 frames on SETTLE, and they NEVER MOVE;
//   · two weights, as that caption had: the lead-in in Archivo Light Italic, the key word heavy (ExtraBold Italic) in the
//     card's colour;
//   · the block is CENTRED on the frame, both ways: its bounding box (every word fully in) is measured at build and its
//     middle put on (540, 960);
//   · the glow behind the key word is DIM and soft (a quarter of what it was), and the letters sit under the bloom's
//     threshold, so nothing blooms; hard cuts in and out.
// The blur is real: each word is drawn as 13 additive taps of its own letters on a disc of the blur's radius (on black,
// additive taps sum to exactly the blurred word; at radius 0 they coincide into the sharp word).
// The card's words are the TAKE's tokens: the last is the key word, the rest the lead-in.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { CUES } from "../../audit/cues";
import type { SceneId } from "../../audit/data";
import { F } from "../../r45/time";
import { clamp01, SETTLE } from "../../r45/tokens";
import { text3d, textWidth } from "../text3d";
import { cut, type CamKey3 } from "../cam";
import type { Place3, PlaceCue } from "../place";
import { K, freeText } from "../kit";
import { enterOf } from "../timeline";

// a still camera that sees 1,920 units of height: 1 unit = 1 px
const FOV = 30, DIST = 960 / Math.tan((FOV * Math.PI) / 360);
const LEAD_SIZE = 86, BIG_MAX = 250, BIG_W = 0.62 * 1080;
const GAP = 196;                             // lead-in baseline to the key word's baseline
const WORD_IN = 10, BLUR_PX = 8, GLOW_A = 0.2;   // the old caption's word-in (rule 50) and blur (rule 45.4); the glow's strength (it was 0.85)
/** 13 taps on a unit disc: the centre, six at half the radius, six on the rim */
const TAPS: [number, number][] = [[0, 0], ...[0, 1, 2, 3, 4, 5].map((i): [number, number] => [0.5 * Math.cos((i * Math.PI) / 3), 0.5 * Math.sin((i * Math.PI) / 3)]),
  ...[0, 1, 2, 3, 4, 5].map((i): [number, number] => [Math.cos((i + 0.5) * (Math.PI / 3)), Math.sin((i + 0.5) * (Math.PI / 3))])];

const cardWords = (id: SceneId) => {
  const c = CUES.find((x) => x.scene === id);
  if (!c?.w?.length) throw new Error(`turn card ${id}: its cue has no tokens`);
  // a word starts 2 f before its spoken onset, so it is half in on the onset (the old caption's lead)
  return c.w.map(([t, a]) => ({ t, at: F(a) - 2 }));
};

const glowMaterial = (color: string) => new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  uniforms: { col: { value: new THREE.Color(color) }, a: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  // a soft, wide falloff with no core: gone at the rim
  fragmentShader: `uniform vec3 col; uniform float a; varying vec2 vUv;
    void main() { float d = length((vUv - 0.5) * vec2(2.0, 2.3)); float g = pow(clamp(1.0 - d, 0.0, 1.0), 2.4); gl_FragColor = vec4(col * g * a, 1.0); }`,
});

/** one word, blurred by taps: `set(p)` with p 0 (unseen, blurred 8 px) … 1 (sharp and full) */
const blurWord = (str: string, font: "300i" | "800i", size: number, color: string, k: number) => {
  const g = new THREE.Group();
  const full = new THREE.Color(color).multiplyScalar(k);
  const mat = new THREE.MeshBasicMaterial({ color: full.clone(), toneMapped: false, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false });
  const taps = TAPS.map(() => { const t = text3d(str, { font, size, depth: 1, bevel: 0, face: mat, align: "left" }); g.add(t); return t; });
  freeText(g, "a turn card's word: on black, on no surface");
  return {
    group: g, width: textWidth(str, font, size),
    set: (p: number) => {
      g.visible = p > 0.001;
      const r = BLUR_PX * (1 - p);
      taps.forEach((t, i) => { t.position.set(TAPS[i][0] * r, TAPS[i][1] * r, 0); });
      mat.color.copy(full).multiplyScalar(p / TAPS.length);
    },
  };
};

const card = (id: SceneId, label: string, color: string, glow: string): Place3 => {
  const words = cardWords(id), big = words[words.length - 1], lead = words.slice(0, -1);
  const enter = enterOf(id);
  const bigSize = Math.min(BIG_MAX, (BIG_MAX * BIG_W) / Math.max(1, textWidth(big.t, "800i", BIG_MAX)));
  return {
    id, label, enter, stage: "card",
    shots: ({ from }): CamKey3[] => [cut(from, [0, 0, DIST], [0, 0, 0], { fov: FOV, still: true, why: "the card" })],
    lights: () => ({ amb: 0, key: { pos: [0, 1000, 2000], at: [0, 0, 0], i: 0 } }),
    cues: (): PlaceCue[] => [
      { kind: "hit", s: "sub", at: big.at + 2, vol: 0.42, why: `the card's word lands: ${big.t}` },
      { kind: "hit", s: "bloom", at: big.at + 3, vol: 0.22, why: "the soft glow comes up behind it" },
    ],
    build: () => {
      const group = new THREE.Group();
      const block = new THREE.Group();
      // the lead-in: its words on one line, centred; under the bloom's threshold (k < LOOK.bloomAt): nothing blooms
      const space = LEAD_SIZE * 0.3;
      const leads = lead.map((w) => ({ ...blurWord(w.t, "300i", LEAD_SIZE, "#faf0ee", 0.86), at: w.at }));
      const total = leads.reduce((s2, w) => s2 + w.width, 0) + space * Math.max(0, lead.length - 1);
      let x = -total / 2;
      for (const l of leads) { l.group.position.set(x, GAP, 0); x += l.width + space; block.add(l.group); }
      const key = { ...blurWord(big.t, "800i", bigSize, color, 0.88), at: big.at };
      key.group.position.set(-key.width / 2, 0, 0);
      block.add(key.group);
      // CENTRE the block on the frame: measure every word fully in, and put the box's middle on the origin
      for (const w of [...leads, key]) w.set(1);
      block.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(block), mid = new THREE.Vector3();
      box.getCenter(mid);
      block.position.set(-mid.x, -mid.y, 0);
      const gm = glowMaterial(glow);
      const halo = new THREE.Mesh(new THREE.PlaneGeometry(1700, 1500), gm);
      halo.position.set(0, -mid.y + bigSize * 0.3, -4);
      group.add(halo, block);
      group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
      const wordP = (f: number, at: number) => SETTLE(clamp01((f - at) / WORD_IN));
      return {
        group,
        update: (f) => {
          for (const l of leads) l.set(wordP(f, l.at));
          const p = wordP(f, key.at);
          key.set(p);
          gm.uniforms.a.value = GLOW_A * p;
        },
      };
    },
  };
};
export const ExplainPlace = card("explain", "2 Turn card: Let us explain.", K.amber, "#743815");
export const CatchPlace = card("catch", "5 Turn card: But here's the catch.", K.red, "#6c1310");
