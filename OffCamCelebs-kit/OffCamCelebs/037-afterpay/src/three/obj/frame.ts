// THE FRAMED PRINT — a black frame with a satin lip and a pale mount, standing on an easel back, leaning. The print is the
// supplied photo (assets/<file>, registered with the stage so the first frame waits for it) or, until it is supplied, a
// plain dark matte. Origin: the middle of its foot, on the desk (y = 0).
import { THREE, imageOf, paintTex } from "../stage";
import { rbox } from "../kit029";
import { SM, type Obj3 } from "../studio";

export type FrameOpts = { key: string; w?: number; h?: number; photo?: string | null };
export type FrameP = { lit?: number };

export const makeFrame = (o: FrameOpts): Obj3<FrameP> => {
  const w = o.w ?? 300, h = o.h ?? 380, B = 22, T = 24, LEAN = -0.2;
  const group = new THREE.Group();
  const tilt = new THREE.Group();
  tilt.rotation.x = LEAN;
  group.add(tilt);
  const lip = rbox(w + 8, h + 8, T - 8, 5, SM.edge());
  lip.position.set(0, h / 2, T / 2 - 4);
  const body = rbox(w, h, T, 4, SM.black());
  body.position.set(0, h / 2, T / 2);
  tilt.add(lip, body);
  // the opening: a pale mount with a bevelled window, then the print
  const ow = w - 2 * B, oh = h - 2 * B, M = Math.round(w * 0.085), iw = ow - 2 * M, ih = oh - 2 * M;
  const tex = paintTex(`frame:${o.key}:${o.photo ?? "matte"}`, ow, oh, (g) => {
    // the mount
    g.fillStyle = o.photo ? "#D9D4C8" : "#2B2C30"; g.fillRect(0, 0, ow, oh);
    // the print (or the dark matte)
    const gr = g.createLinearGradient(M, M, M + iw, M + ih);
    gr.addColorStop(0, "#1B1C20"); gr.addColorStop(0.5, "#131417"); gr.addColorStop(1, "#0C0C0E");
    g.fillStyle = gr; g.fillRect(M, M, iw, ih);
    if (o.photo) {
      const im = imageOf(`assets/${o.photo}`);
      if (im.complete && im.naturalWidth > 0) {
        // cover the opening, keeping the top of the picture (a face sits high)
        const s = Math.max(iw / im.naturalWidth, ih / im.naturalHeight);
        const sw = iw / s, sh = ih / s;
        g.filter = "grayscale(1) contrast(1.08) brightness(0.92)";
        g.drawImage(im, (im.naturalWidth - sw) / 2, Math.max(0, (im.naturalHeight - sh) * 0.2), sw, sh, M, M, iw, ih);
        g.filter = "none";
      }
    } else {
      // a soft sheen across the empty matte, so it reads as glass over a dark print
      const sh = g.createLinearGradient(M, M, M + iw * 0.8, M + ih);
      sh.addColorStop(0, "rgba(255,255,255,0.10)"); sh.addColorStop(0.38, "rgba(255,255,255,0.02)"); sh.addColorStop(0.4, "rgba(255,255,255,0)");
      g.fillStyle = sh; g.fillRect(M, M, iw, ih);
    }
    // the window's bevel: a fine light line round the print
    g.strokeStyle = o.photo ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.22)"; g.lineWidth = 1.6;
    g.strokeRect(M - 0.8, M - 0.8, iw + 1.6, ih + 1.6);
  }, 3);
  const print = new THREE.Mesh(new THREE.PlaneGeometry(ow, oh), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0, envMapIntensity: 0.7 }));
  print.position.set(0, h / 2, T / 2 + 0.7);
  tilt.add(print);
  // the inner lip: a satin line round the opening
  for (const [x, y, bw, bh] of [[0, h / 2 + oh / 2, ow + 4, 2.4], [0, h / 2 - oh / 2, ow + 4, 2.4], [-ow / 2, h / 2, 2.4, oh], [ow / 2, h / 2, 2.4, oh]] as const) {
    const s = rbox(bw, bh, 2, 0.8, SM.edge(), 1);
    s.position.set(x, y, T / 2 + 1.6);
    tilt.add(s);
  }
  const prop = rbox(60, h * 0.7, 8, 3, SM.graphite());
  prop.position.set(0, h * 0.34, -60);
  prop.rotation.x = 0.42;
  group.add(prop);
  return { group, update: () => {} };
};
