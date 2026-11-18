import React from "react";
import { TurnCard, cardDone } from "../TurnCard";

// TURN CARD 5 | AND HERE'S THE CATCH (red) — rule P6: black, a soft glow, a small white lead-in over one big bold-italic glowing word.
const S = "catch" as const;
export const CT_DONE = cardDone(S);
export const Catch: React.FC<{ f: number }> = ({ f }) => <TurnCard id={S} f={f} glow="#E5484D" />;
export const CatchSet = { id: S, ground: "dark" as const, Comp: Catch, align: () => "centre" as const, focus: [540, 960] as [number, number] };
