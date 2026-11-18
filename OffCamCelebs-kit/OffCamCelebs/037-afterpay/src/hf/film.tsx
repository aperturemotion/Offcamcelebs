// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE COMPOSITION'S LAYERS — 037 "Afterpay: $29B or $13.8B?" (cloned from 035; the black-studio look).
// The Remotion film drew, every frame: the ground (one surface, dissolving cream ↔ dark across a hand-over), then every
// place's BACK pass (its light, fixed in the world), then every place's FRONT pass (its objects and its captions), so no
// place's light ever painted over another's objects. Here that order is kept as clips:
//   · "ground" — the ground, the shared SVG defs and every visible place's back pass, for the whole film;
//   · one clip per place, over its own window (from its arrival's first movement to the end of the next hand-over's move
//     of it), drawing its front pass. Studio reads the film place by place.
// Each layer draws exactly its own frames [from, to) (CLAUDE.md, V34 HF f3410): the driver gates every host.
// ══════════════════════════════════════════════════════════════════════════════════════════════
import { SHOTS, WINDOWS, stagesAt, StageView, GroundFill, MatDefs, P } from "../r45/Film";
import { TOTAL_FRAMES } from "../audit/data";

export type LayerSpec = { id: string; from: number; to: number; track: number; z: number; label: string };

const LABEL: Record<string, string> = {
  hook: "1 Hook: the tag, $29,000,000,000; the filing says $13.8B", explain: "2 Turn card: Let me explain.",
  deal: "3 The deal: Square agrees to buy Afterpay, paid in shares, 0.375 a share", price: "4 The price: $247.26 a share, so $29B",
  catch: "5 Turn card: And here's the catch.", close: "6 The close: six months, Block, the price halves, the 10-Q books $13.8B",
  fair: "7 To be fair: $29B was real on day one; the shares were fixed", verdict: "8 The verdict: the receipt, INFLATED, the sign-off",
};

export const layerSpecs = (): LayerSpec[] => [
  { id: "ground", from: 0, to: TOTAL_FRAMES, track: 0, z: 1, label: "Ground and light" },
  ...SHOTS.map((s, k) => ({ id: s.id, from: WINDOWS[k].from, to: WINDOWS[k].to, track: 1 + k, z: 10 + k, label: LABEL[s.id] ?? s.id })),
];

export const Layer = ({ id, f }: { id: string; f: number }) => {
  const { stages, ground } = stagesAt(f);
  if (id === "ground") {
    return (
      <div style={{ position: "absolute", inset: 0, background: ground.base === "dark" ? P.espresso : P.sand }}>
        <MatDefs />
        <GroundFill g={ground.base} />
        {ground.over.op > 0.002 && ground.over.g && (
          <div style={{ position: "absolute", inset: 0, opacity: ground.over.op }}><GroundFill g={ground.over.g} /></div>
        )}
        {stages.map((st) => <StageView key={`b${st.k}`} st={st} f={f} pass="back" />)}
      </div>
    );
  }
  const st = stages.find((s) => SHOTS[s.k].id === id);
  return st ? <StageView st={st} f={f} pass="front" /> : null;
};
