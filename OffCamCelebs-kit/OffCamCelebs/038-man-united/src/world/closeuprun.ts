// The CLOSE-UP SHEET's planner (★ P17, Timur 2026-11-20; RULES "THE PHYSICAL CHECKS": "render a sheet of tight close-ups on
// every joint the support check knows about … and LOOK at it. A wide sheet at 540 px did not show any of the 038 faults").
// For every joint DECLARED in the film (kit.ts hangs / mounted: a ring on its hook, a post in a sign, a rail in its sleeve, a
// hanger's hook on its rail, a door's barrel on its bracket, chain links), it finds the frames where both parts show and the
// joint is ON SCREEN in the film's own camera, takes the first, the middle and the last of them, and aims a close camera at
// the joint from the film camera's side (what the viewer sees, much nearer). scratchpad/closeups.mjs draws and sheets them.
import * as THREE from "three";
import { PLACES, WINDOWS, CAM } from "./film3d";
import { poseAt } from "./cam";
import { meshGap, type Held } from "./check";

export type CloseJob = { f: number; name: string; label: string; cam: { pos: number[]; look: number[]; fov: number } };
const shown = (o: THREE.Object3D) => { for (let n: THREE.Object3D | null = o; n; n = n.parent) if (!n.visible) return false; return true; };

export const plan = (o: { perWhy?: number } = {}) => {
  const jobs: CloseJob[] = [];
  const camera = new THREE.PerspectiveCamera(45, 1080 / 1920, 20, 40000);
  PLACES.forEach((pl, i) => {
    const w = WINDOWS[i], b = pl.build(), root = b.group;
    const pairs: { c: THREE.Mesh; p: THREE.Mesh; why: string; kind: string }[] = [];
    root.traverse((n) => { for (const h of ((n.userData.heldBy as Held[] | undefined) ?? [])) pairs.push({ c: n as THREE.Mesh, p: h.by, why: h.why, kind: h.kind }); });
    // one or two of each kind of joint per place (a chain's twelve links are one kind)
    const seen = new Map<string, number>();
    const keep = pairs.filter((x) => { const k = seen.get(x.why) ?? 0; seen.set(x.why, k + 1); return k < (o.perWhy ?? 2); });
    for (const pr of keep) {
      const on: number[] = [];
      for (let f = w.from; f < w.to; f += 1) {
        if ((pl.stageAt?.(f) ?? pl.stage ?? "dark") === "card") continue;
        b.update(f); root.updateMatrixWorld(true);
        if (!shown(pr.c) || !shown(pr.p)) continue;
        const c = new THREE.Box3().setFromObject(pr.c).getCenter(new THREE.Vector3());
        const P = poseAt(CAM, f);
        camera.position.set(...P.pos); camera.up.set(0, 1, 0); camera.lookAt(new THREE.Vector3(...P.look)); camera.fov = P.fov; camera.updateProjectionMatrix(); camera.updateMatrixWorld(true);
        const q = c.clone().project(camera);
        if (q.z < 1 && Math.abs(q.x) <= 1 && Math.abs(q.y) <= 1) on.push(f);
      }
      if (!on.length) continue;
      const picks = [...new Set([on[0], on[Math.floor(on.length / 2)], on[on.length - 1]])];
      for (const f of picks) {
        b.update(f); root.updateMatrixWorld(true);
        const g = meshGap(pr.c, pr.p, 1e5, false);
        const box = new THREE.Box3().setFromObject(pr.c), size = box.getSize(new THREE.Vector3());
        const at = g ? g.pa.clone().add(g.pb).multiplyScalar(0.5) : box.getCenter(new THREE.Vector3());
        const P = poseAt(CAM, f), from = new THREE.Vector3(...P.pos), dir = from.clone().sub(at).normalize();
        const r = Math.min(420, Math.max(70, 0.6 * Math.max(size.x, size.y, size.z)));
        const pos = at.clone().addScaledVector(dir, r / Math.tan((15 * Math.PI) / 180));
        const nm = `${pl.id}_${pr.c.name || "part"}_${pr.p.name || "part"}_f${f}`.replace(/[^\w.-]+/g, "-");
        jobs.push({ f, name: nm, label: `f${f} ${pl.id}: ${pr.kind} — ${pr.why}`, cam: { pos: pos.toArray(), look: at.toArray(), fov: 30 } });
      }
    }
  });
  return jobs;
};
