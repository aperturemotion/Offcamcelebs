// ══════════════════════════════════════════════════════════════════════════════════════════════
// THE COMPOSITION'S LAYERS — 038 "Every Dollar" (cloned from 035, from 034, from 029 HF's kit).
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
  hook: "1 Hook: the putt lips out; $800M, every headline", tiger: "2 Golf's biggest name; LIV 2022, Saudi-backed",
  june: "3 June: Norman to the Washington Post, high nine digits", august: "4 August, Fox News: somewhere in that neighborhood",
  denial: "5 Golf Saudi: I never offered him that money", none: "6 Tiger never confirmed: no contract, no document",
  verdict: "7 To be fair, never joined LIV; UNSUPPORTED",
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
