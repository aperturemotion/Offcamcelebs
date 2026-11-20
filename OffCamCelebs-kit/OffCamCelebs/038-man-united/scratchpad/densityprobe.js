// densityprobe.js (2026-11-20, 038, P17 "at most ONE short label and ONE figure readable in a frame (plus the caption)").
// Loaded into the page by scratchpad/shoot.mjs --density; `window.__densityProbe()` reads the frame just drawn
// (window.__worldDebug: the scene, the camera, the place's group) and returns every world text on screen with:
//   capPx     its projected cap height in pixels (Archivo's cap height is 0.69 of the font size, measured along the text's
//             own up axis, so a text seen at a slant or foreshortened counts smaller)
//   inFrame   at least half of its projected box inside the 1080 × 1920 frame
//   facing    its face turned toward the camera (a slat flipped away shows its back)
//   occluded  every one of 9 rays from the camera to points across the text hits another solid first (a depth test by ray)
//   readable  capPx ≥ 14, in frame, facing, not occluded
// Texts are grouped into PLATES (the group they are mounted in: a plate, a slat, a sign, the ink of one stamp): a plate
// is a FIGURE when it carries a money figure or a bare number, else a LABEL. A group marked `userData.plate` is one plate
// (one instrument's readout). A mark with no letter or digit (a £ embossed on a coin) is not counted. Turn cards (stage "card") and the DOM captions
// are not world texts and are not counted. Printed matter that is not 3-D text (a logo, the crest's lettering, a receipt's
// small print drawn into its paper texture) is counted only when the mesh declares it in `userData.printLines`
// ([{ text, cap, at: [x, y, z] }] in the mesh's own frame).
// WHAT IT CANNOT SEE: depth-of-field blur and motion blur (a blurred word still counts as readable), bloom washing a word
// out, contrast against its ground, and partial occlusion (a text with one clear ray of nine counts as visible).
(() => {
  const CAP = 0.69, MIN_PX = 14, W = 1080, H = 1920;
  const isFigure = (s) => /[£$€]\s*\d|\d,\d{3}|^\s*[\d.,%+\-]+\s*$/.test(s);
  const visibleChain = (o) => { for (let n = o; n; n = n.parent) if (!n.visible) return false; return true; };
  window.__densityProbe = () => {
    const D = window.__worldDebug;
    if (!D) return { skip: "no world" };
    const { scene, camera, group, place, stage } = D;
    if (stage === "card") return { place, stage, labels: [], figures: [], texts: [] };
    const THREE = D.THREE;
    const V = THREE.Vector3;
    camera.updateMatrixWorld(true);
    const camPos = new V().setFromMatrixPosition(camera.matrixWorld);
    const toPx = (p) => { const q = p.clone().project(camera); return { x: (q.x + 1) / 2 * W, y: (1 - q.y) / 2 * H, z: q.z }; };
    // every solid mesh of the place, for the occlusion rays
    const solids = [];
    group.traverse((o) => { if (o.isMesh && visibleChain(o) && !o.userData.isFloor) { const ms = Array.isArray(o.material) ? o.material : [o.material]; if (!ms.some((m) => m.transparent && m.opacity < 0.5)) solids.push(o); } });
    const ray = new THREE.Raycaster();
    const items = [];
    const textOf = (o) => { for (let n = o; n; n = n.parent) if (n.userData.isText) return n; return null; };
    // 3-D texts
    group.traverse((o) => {
      if (!o.userData.isText || !visibleChain(o)) return;
      if (o.parent && textOf(o.parent)) return;
      let any = false; o.traverse((m) => { if (m.isMesh && visibleChain(m)) any = true; });
      if (!any) return;
      const size = o.userData.textSize ?? 50, str = String(o.userData.textStr ?? "?");
      const box = new THREE.Box3();
      o.traverse((m) => { if (m.isMesh && visibleChain(m)) { m.geometry.computeBoundingBox(); box.union(m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld)); } });
      // a mark with no letter and no digit (a £ embossed on a coin) is not a word
      if (!/[A-Za-z0-9]/.test(str)) return;
      // the plate: the nearest group marked `userData.plate` (one instrument: a day counter's cards and strip), else the
      //   group the text is mounted in
      let plate = o.parent;
      for (let n = o.parent; n; n = n.parent) if (n.userData.plate) { plate = n; break; }
      // the text's own box, in its own frame: the sample points for the occlusion rays lie ON its face (a world box of a
      //   tilted word has points far in front of and behind the letters)
      const inv = new THREE.Matrix4().copy(o.matrixWorld).invert(), lb = new THREE.Box3();
      o.traverse((m) => { if (m.isMesh && visibleChain(m)) { m.geometry.computeBoundingBox(); lb.union(m.geometry.boundingBox.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld))); } });
      const face = [];
      for (const fx of [0.2, 0.5, 0.8]) for (const fy of [0.25, 0.5, 0.75]) face.push(new V(lb.min.x + (lb.max.x - lb.min.x) * fx, lb.min.y + (lb.max.y - lb.min.y) * fy, lb.max.z).applyMatrix4(o.matrixWorld));
      items.push({ o, str, size, box, plate, face, own: (h) => textOf(h.object) === o });
    });
    // declared print lines (a receipt's small print in its paper texture)
    group.traverse((m) => {
      if (!m.isMesh || !visibleChain(m) || !m.userData.printLines) return;
      for (const L of m.userData.printLines) {
        const c = new V(...L.at).applyMatrix4(m.matrixWorld);
        const half = new V(L.w ?? L.cap * 4, L.cap, 1).multiplyScalar(0.5);
        const box = new THREE.Box3(new V(...L.at).sub(half).applyMatrix4(m.matrixWorld), new V(...L.at).add(half).applyMatrix4(m.matrixWorld));
        box.expandByPoint(c);
        // each printed line is its own plate (a receipt's lines are counted one by one, as they read)
        items.push({ o: m, str: L.text, size: L.cap / CAP, box, plate: { uuid: m.uuid + '|' + L.text, name: L.text }, own: (h) => h.object === m, print: L });
      }
    });
    const out = [];
    for (const it of items) {
      // cap height: from the baseline to the cap line along the text's own up axis, at the text's middle
      const mid = it.box.getCenter(new V());
      // the cap's extent in world space: the text's own (0, cap, 0), scale and slant included
      const M = it.o.matrixWorld, capLocal = it.print ? it.print.cap : it.size * CAP;
      const u0 = it.print?.up ?? [0, 1, 0];
      const up = new V(u0[0] * capLocal, u0[1] * capLocal, u0[2] * capLocal).applyMatrix4(M).sub(new V(0, 0, 0).applyMatrix4(M));
      const a = toPx(mid.clone().sub(up.clone().multiplyScalar(0.5))), b = toPx(mid.clone().add(up.clone().multiplyScalar(0.5)));
      const capPx = Math.hypot(a.x - b.x, a.y - b.y);
      // in frame: half of its projected box
      const cs = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => toPx(new V(i & 1 ? it.box.max.x : it.box.min.x, i & 2 ? it.box.max.y : it.box.min.y, i & 4 ? it.box.max.z : it.box.min.z)));
      const behind = cs.every((p) => p.z > 1);
      const x0 = Math.min(...cs.map((p) => p.x)), x1 = Math.max(...cs.map((p) => p.x)), y0 = Math.min(...cs.map((p) => p.y)), y1 = Math.max(...cs.map((p) => p.y));
      const area = Math.max(1, (x1 - x0) * (y1 - y0)), ix = Math.max(0, Math.min(W, x1) - Math.max(0, x0)) * Math.max(0, Math.min(H, y1) - Math.max(0, y0));
      const inFrame = !behind && ix / area >= 0.5;
      // facing: the text's own +z toward the camera
      const e = it.o.matrixWorld.elements, n = new V(e[8], e[9], e[10]).normalize();
      const facing = n.dot(camPos.clone().sub(mid)) > 0;
      // occlusion: 9 rays across the text's box; visible when one reaches the text (or its own surface) first
      let clear = 0;
      if (inFrame && facing && capPx >= MIN_PX) {
        const pts = it.face ?? [0.2, 0.5, 0.8].flatMap((fx) => [0.25, 0.5, 0.75].map((fy) => new V(it.box.min.x + (it.box.max.x - it.box.min.x) * fx, it.box.min.y + (it.box.max.y - it.box.min.y) * fy, it.box.min.z + (it.box.max.z - it.box.min.z) * 0.5)));
        for (const p of pts) {
          const d = p.clone().sub(camPos), dist = d.length();
          ray.set(camPos, d.normalize()); ray.far = dist + 8;
          const h = ray.intersectObjects(solids, false)[0];
          // clear: nothing in the way, or the first thing hit is the text itself, the face it is printed on, or within 1.5 of it
          if (!h || it.own(h) || h.distance >= dist - 1.5 || h.object === it.o.userData.fitOn || h.object === it.o.parent || (it.plate && h.object === it.plate)) clear++;
        }
      }
      const occluded = inFrame && facing && capPx >= MIN_PX && clear === 0;
      const readable = capPx >= MIN_PX && inFrame && facing && !occluded;
      out.push({ str: it.str, capPx: Math.round(capPx * 10) / 10, inFrame, facing, occluded, readable, plate: it.plate?.uuid ?? "", plateName: it.plate?.name ?? "" });
    }
    // plates: a plate is a figure when any of its readable texts is one
    const plates = new Map();
    for (const t of out) if (t.readable) { const p = plates.get(t.plate) ?? { name: t.plateName, texts: [] }; p.texts.push(t.str); plates.set(t.plate, p); }
    const labels = [], figures = [];
    for (const p of plates.values()) (p.texts.some(isFigure) ? figures : labels).push(p.texts.join(" | "));
    return { place, stage, labels, figures, texts: out };
  };
})();
