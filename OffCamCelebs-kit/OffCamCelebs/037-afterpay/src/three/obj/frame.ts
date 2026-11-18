// THE FRAMED PRINT — a black frame with a satin lip, standing on an easel back, leaning. The print is the supplied photo
// (assets/<file>, registered with the stage so the first frame waits for it) or, until it is supplied, a plain dark matte.
// Origin: the middle of its foot, on the desk (y = 0).
import { THREE, imageOf, paintTex } from "../stage";
import { rbox } from "../kit029";
import { SM, type Obj3 } from "../studio";

export type FrameOpts = { key: string; w?: number; h?: number; photo?: string | null };
export type FrameP = { lit?: number };

export const makeFrame = (o: FrameOpts): Obj3<FrameP> => {
  const w = o.w ?? 300, h = o.h ?? 380, B = 26, T = 22, LEAN = -0.2;
  const group = new THREE.Group();
  const tilt = new THREE.Group();
  tilt.rotation.x = LEAN;
  group.add(tilt);
  const lip = rbox(w + 8, h + 8, T - 8, 5, SM.edge());
  lip.position.set(0, h / 2, T / 2 - 4);
  const body = rbox(w, h, T, 4, SM.black());
  body.position.set(0, h / 2, T / 2);
  tilt.add(lip, body);
  const iw = w - 2 * B, ih = h - 2 * B;
  const tex = paintTex(`frame:${o.key}:${o.photo ?? "matte"}`, iw, ih, (g) => {
    const gr = g.createLinearGradient(0, 0, iw, ih);
    gr.addColorStop(0, "#26272B"); gr.addColorStop(1, "#141518");
    g.fillStyle = gr; g.fillRect(0, 0, iw, ih);
    if (o.photo) {
      const im = imageOf(`assets/${o.photo}`);
      if (im.complete && im.naturalWidth > 0) {
        // cover the opening, keeping the top of the picture (a face sits high)
        const s = Math.max(iw / im.naturalWidth, ih / im.naturalHeight);
        const sw = iw / s, sh = ih / s;
        g.filter = "grayscale(1) contrast(1.08) brightness(0.92)";
        g.drawImage(im, (im.naturalWidth - sw) / 2, Math.max(0, (im.naturalHeight - sh) * 0.2), sw, sh, 0, 0, iw, ih);
        g.filter = "none";
      }
    }
  }, 3);
  const print = new THREE.Mesh(new THREE.PlaneGeometry(iw, ih), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, metalness: 0, envMapIntensity: 0.6 }));
  print.position.set(0, h / 2, T / 2 + 0.7);
  tilt.add(print);
  const prop = rbox(60, h * 0.7, 8, 3, SM.graphite());
  prop.position.set(0, h * 0.34, -60);
  prop.rotation.x = 0.42;
  group.add(prop);
  return { group, update: () => {} };
};
