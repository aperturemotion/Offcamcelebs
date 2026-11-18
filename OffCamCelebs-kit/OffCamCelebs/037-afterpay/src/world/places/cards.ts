// ═════════════════════════════════════════════════════════════════════════════════════════════
// THE TURN CARDS (engine v2; study rule R27 and the twelve cards measured in look_measured.md §9). They LOOK exactly like
// the references': black, WORDS ONLY (no floor, no backdrop, no reflection, no camera move), rendered inside the one 3-D
// canvas as flat-faced letters facing a still camera (1 unit = 1 px on screen):
//   · a small warm-white lead-in (regular weight, wide spacing) whose words land one by one on their spoken onsets, each
//     announced for 2 frames by a soft block at its place;
//   · ONE big bold-italic coloured word, 55–80% of the frame's width, landing last;
//   · a radial glow of the word's hue blooming behind it over ~6 frames (half strength ~370 px out, gone by ~700 px);
//   · the block centred 52% down the frame; hard cuts in and out.
// The card's words are the TAKE's tokens: the last is the big word, the rest the lead-in.
// ═════════════════════════════════════════════════════════════════════════════════════════════
import * as THREE from "three";
import { CUES } from "../../audit/cues";
import type { SceneId } from "../../audit/data";
import { F } from "../../r45/time";
import { clamp01 } from "../../r45/tokens";
import { text3d, textWidth } from "../text3d";
import { cut, type CamKey3 } from "../cam";
import type { Place3, PlaceCue } from "../place";
import { K, lit } from "../kit";
import { enterOf } from "../timeline";

// a still camera that sees 1,920 units of height: 1 unit = 1 px
const FOV = 30, DIST = 960 / Math.tan((FOV * Math.PI) / 360);
const LEAD_SIZE = 84, LEAD_TRACK = 0.06, BIG_MAX = 250, BIG_W = 0.62 * 1080;
const CENTRE_Y = (0.5 - 0.52) * 1920;      // the block's middle: 52% down the frame
const GAP = 190;                             // lead-in baseline to the big word's baseline

const cardWords = (id: SceneId) => {
  const c = CUES.find((x) => x.scene === id);
  if (!c?.w?.length) throw new Error(`turn card ${id}: its cue has no tokens`);
  return c.w.map(([t, a]) => ({ t, at: F(a) - 1 }));
};

const glowMaterial = (color: string) => new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  uniforms: { col: { value: new THREE.Color(color) }, a: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  // half strength at 0.5 of the radius, gone at the rim, a little wider than tall
  fragmentShader: `uniform vec3 col; uniform float a; varying vec2 vUv;
    void main() { float d = length((vUv - 0.5) * vec2(2.0, 2.3)); float g = pow(clamp(1.0 - d, 0.0, 1.0), 1.7); gl_FragColor = vec4(col * g * a, 1.0); }`,
});

const card = (id: SceneId, label: string, color: string, glow: string): Place3 => {
  const words = cardWords(id), big = words[words.length - 1], lead = words.slice(0, -1);
  const enter = enterOf(id);
  const bigSize = Math.min(BIG_MAX, (BIG_MAX * BIG_W) / Math.max(1, textWidth(big.t, "800i", BIG_MAX)));
  const bigBase = CENTRE_Y - GAP / 2 - bigSize * 0.2, leadBase = bigBase + GAP + bigSize * 0.25;
  return {
    id, label, enter, stage: "card",
    shots: ({ from }): CamKey3[] => [cut(from, [0, 0, DIST], [0, 0, 0], { fov: FOV, still: true, why: "the card" })],
    lights: () => ({ amb: 0, key: { pos: [0, 1000, 2000], at: [0, 0, 0], i: 0 } }),
    cues: (): PlaceCue[] => [
      { kind: "hit", s: "sub", at: big.at, vol: 0.42, why: `the card's word lands: ${big.t}` },
      { kind: "hit", s: "bloom", at: big.at + 1, vol: 0.3, why: "the glow blooms behind it" },
    ],
    build: () => {
      const group = new THREE.Group();
      const white = lit("#faf0ee", 1.0);
      const face = lit(color, 1.12);
      const veil = new THREE.MeshBasicMaterial({ color: new THREE.Color("#faf0ee"), transparent: true, opacity: 0.32, toneMapped: false, depthWrite: false });
      // the lead-in: its words on one line, centred, wide spacing
      const space = LEAD_SIZE * 0.34;
      const widths = lead.map((w) => textWidth(w.t, "500", LEAD_SIZE) * (1 + LEAD_TRACK));
      const total = widths.reduce((s, w) => s + w, 0) + space * Math.max(0, lead.length - 1);
      let x = -total / 2;
      const leads = lead.map((w, i) => {
        const g = text3d(w.t, { font: "500", size: LEAD_SIZE, depth: 1, bevel: 0, face: white, align: "left" });
        g.scale.x = 1 + LEAD_TRACK;
        g.position.set(x, leadBase, 0);
        // the 2-frame announcement: a soft block where the word will be
        const b = new THREE.Mesh(new THREE.PlaneGeometry(widths[i], LEAD_SIZE * 0.62), veil);
        b.position.set(x + widths[i] / 2, leadBase + LEAD_SIZE * 0.3, 1);
        x += widths[i] + space;
        group.add(g, b);
        return { g, b, at: w.at };
      });
      const word = text3d(big.t, { font: "800i", size: bigSize, depth: 1, bevel: 0, face });
      word.position.set(0, bigBase, 2);
      const gm = glowMaterial(glow);
      const halo = new THREE.Mesh(new THREE.PlaneGeometry(1500, 1300), gm);
      halo.position.set(0, bigBase + bigSize * 0.3, -4);
      group.add(halo, word);
      group.traverse((n) => { (n as THREE.Mesh).castShadow = false; });
      return {
        group,
        update: (f) => {
          for (const l of leads) { l.g.visible = f >= l.at; l.b.visible = f >= l.at - 2 && f < l.at; }
          word.visible = f >= big.at;
          // the big word resolves over 3 frames (it opens from its baseline), and the glow rises over ~6
          const p = clamp01((f - big.at + 1) / 3);
          word.scale.set(1, 0.55 + 0.45 * p, 1);
          gm.uniforms.a.value = 0.85 * (1 - Math.pow(1 - clamp01((f - big.at) / 7), 2));
        },
      };
    },
  };
};
export const ExplainPlace = card("explain", "2 Turn card: Let us explain.", K.amber, "#743815");
export const CatchPlace = card("catch", "5 Turn card: But here's the catch.", K.red, "#6c1310");
