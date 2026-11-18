import React from "react";
import { TurnCard, cardDone } from "../TurnCard";

// TURN CARD 2 | LET ME EXPLAIN (amber) — rule P6: black, a soft glow, a small white lead-in over one big bold-italic glowing word.
const S = "explain" as const;
export const EX_DONE = cardDone(S);
export const Explain: React.FC<{ f: number }> = ({ f }) => <TurnCard id={S} f={f} glow="#F5A524" />;
export const ExplainSet = { id: S, ground: "dark" as const, Comp: Explain, align: () => "centre" as const, focus: [540, 960] as [number, number] };
