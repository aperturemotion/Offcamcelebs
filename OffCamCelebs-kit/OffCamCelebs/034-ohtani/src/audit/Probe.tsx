// ★ HYPERFRAMES PORT: the Remotion film's geometry probe (audit only) does not cross. The scenes still tag their objects
// for it, so these are its no-op stand-ins: a tag adds nothing, an Obj is its children, and there is no probe to draw.
import type { ComponentChildren } from "preact";

export const useTag = () => (_id: string, _kind: string) => ({});
export const Obj = ({ children }: { s?: string; g?: string; children?: ComponentChildren }) => <>{children}</>;
export const Probe = () => null;
