// THE TURN CARDS (rule P6, in 3-D: P11/P12). Black space; the turn is two lines of SOLID extruded letters standing on the
// floor: a small white lead-in over ONE big bold-italic word with a glowing face, in the turn's colour (amber: explain;
// red: the catch). The words land one by one on their spoken onsets (each drops a little and settles); a point light of
// the same colour sits low in front, so the floor takes a coloured pool and the letters' reflection; the camera pushes in
// slowly from three-quarter. The card's words are the TAKE's tokens: the last is the big word, the rest the lead-in.
import * as THREE from "three";
import { CUES } from "../../audit/cues";
import type { SceneId } from "../../audit/data";
import { F, cue, cueEnd } from "../../r45/time";
import { ramp, SETTLE, SOFT } from "../../r45/tokens";
import { text3d, textWidth } from "../text3d";
import { cut, dolly, type CamKey3, type Vec } from "../cam";
import type { Place3 } from "../place";

const PRE = 8;            // the card is up this many frames before its first word
const BIG = 190, LEAD = 62, GAP = 26;

const cardWords = (id: SceneId) => {
  const c = CUES.find((x) => x.scene === id);
  if (!c?.w?.length) throw new Error(`turn card ${id}: its cue has no tokens`);
  return c.w.map(([t, a]) => ({ t, at: F(a) - 2 }));
};

const card = (id: SceneId, label: string, color: string): Place3 => {
  const words = cardWords(id), big = words[words.length - 1], lead = words.slice(0, -1);
  const enter = cue(id, 0) - PRE;
  // fit the big word to the frame: the camera sees ~1,150 units across at its opening distance
  const bigSize = Math.min(BIG, (BIG * 660) / Math.max(1, textWidth(big.t, "800i", BIG)));
  const leadY = bigSize * 1.02 + 96;
  const C: Vec = [0, bigSize * 0.62, 0];
  return {
    id, label, enter,
    shots: ({ from, to }): CamKey3[] => [
      cut(from, [-460, 120, 2160], [0, C[1] + 80, 0], { fov: 46, dip: 5, why: "the card" }),
      dolly(from + 1, Math.max(20, to - from - 3), [-260, 150, 1900], [0, C[1] + 70, 0], { fov: 46, ease: SOFT, why: "push in" }),
    ],
    lights: (f) => {
      const up = ramp(f, big.at - 2, big.at + 10, SETTLE);
      return {
        amb: 0.05,
        key: { pos: [-500, 1500, 1300], at: C, i: 0.9, color: "#FFFFFF", angle: 0.5, soft: 0.9 },
        // no spot rakes the floor (it threw a bright streak under the word): the rim comes from high in FRONT, tight on the
        //   letters, and the colour on the floor is the accent's soft pool and the lit faces' own reflection
        rim: { pos: [520, 1500, 1500], at: [0, C[1] + 40, 0], i: 0.25 + 0.5 * up, color: "#FFFFFF", angle: 0.2, soft: 1 },
        // the coloured light sits HIGH in front: its mirror image in the glossy floor falls below the frame (a low light drew a
        //   hot streak under the word); the floor's colour is the lit letters' own reflection and their bloom
        accent: { pos: [0, 900, 700], color, i: 1.3 * up },
        focus: [0, 60], reach: 1500, reflect: 0.42, env: 0.6,
      };
    },
    build: () => {
      const group = new THREE.Group();
      const white = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.5, metalness: 0, emissive: new THREE.Color(0xffffff), emissiveIntensity: 0.55 });
      const whiteSide = new THREE.MeshStandardMaterial({ color: 0x8f9298, roughness: 0.5, metalness: 0.3 });
      const face = new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness: 0.4, metalness: 0, emissive: new THREE.Color(color), emissiveIntensity: 0 });
      const side = new THREE.MeshStandardMaterial({ color: new THREE.Color(color).multiplyScalar(0.28), roughness: 0.45, metalness: 0.5 });
      // the lead-in: its words laid out on one line, centred
      const space = LEAD * 0.3;
      const widths = lead.map((w) => textWidth(w.t, "500", LEAD));
      const total = widths.reduce((s, w) => s + w, 0) + space * Math.max(0, lead.length - 1);
      let x = -total / 2;
      const leads = lead.map((w, i) => {
        const g = text3d(w.t, { font: "500", size: LEAD, depth: 16, bevel: 2, face: white, side: whiteSide, align: "left" });
        g.userData.x = x; g.userData.at = w.at;
        x += widths[i] + space;
        group.add(g);
        return g;
      });
      const word = text3d(big.t, { font: "800i", size: bigSize, depth: bigSize * 0.34, bevel: bigSize * 0.035, face, side });
      group.add(word);
      void GAP;
      return {
        group,
        update: (f) => {
          for (const g of leads) {
            const p = ramp(f, g.userData.at, g.userData.at + 8, SETTLE);
            g.visible = f >= g.userData.at;
            g.position.set(g.userData.x, leadY + (1 - p) * 46, 40 + (1 - p) * 60);
          }
          const p = ramp(f, big.at, big.at + 10, SETTLE);
          word.visible = f >= big.at;
          // the big word lands: it comes down onto the floor and its face lights
          word.position.set(0, (1 - p) * 34, (1 - p) * 260);
          word.rotation.x = (1 - p) * 0.3;
          face.emissiveIntensity = 0.6 + 1.3 * ramp(f, big.at + 2, big.at + 14, SETTLE);
        },
      };
    },
  };
};
void cueEnd;
export const ExplainPlace = card("explain", "2 Turn card: Let me explain.", "#F5A524");
export const CatchPlace = card("catch", "5 Turn card: And here's the catch.", "#E5484D");
