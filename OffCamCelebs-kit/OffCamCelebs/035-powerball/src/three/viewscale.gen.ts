// each 3-D view's resting backing scale (stage.ts drawJob). Empty until a scale sweep measures the views; an unmeasured
// view falls back to its on-screen scale on a 0.05 grid.
export const VIEW_SCALE: Record<string, number> = {};
