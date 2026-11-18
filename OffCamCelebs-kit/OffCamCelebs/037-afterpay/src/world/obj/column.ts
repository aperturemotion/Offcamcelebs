// THE VALUE COLUMN (R19: charts are things): a glowing column that grows and sinks. 220 × 220 footprint, 900 tall at h = 1.
import * as THREE from "three";
import { K, MAT, block } from "../kit";
import { GLOW } from "../place";

export const COLUMN_H = 900, COLUMN_BASE = 26;
/** origin at floor centre; `h` 0…1 of 900 units tall, `glow` 0…1 */
export const makeColumn = (key: string) => {
  const group = new THREE.Group();
  group.name = `column:${key}`;
  group.add(block(280, COLUMN_BASE, 280, 10, MAT.black()));
  // brighter at the top, a deeper yellow at the foot (their glowing columns are not a flat colour)
  const geo = new THREE.BoxGeometry(220, 1, 220, 1, 12, 1);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = pos.getY(i) + 0.5, top = pos.getY(i) > 0.499 ? 1.08 : 1;
    const v = (0.5 + 0.5 * Math.pow(t, 0.8)) * top;
    col[i * 3] = v; col[i * 3 + 1] = v * (0.9 + 0.1 * t); col[i * 3 + 2] = v * (0.62 + 0.38 * t);
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const full = new THREE.Color(K.money).multiplyScalar(GLOW * 1.05);
  const mat = new THREE.MeshBasicMaterial({ color: full.clone(), vertexColors: true, toneMapped: false });
  const bar = new THREE.Mesh(geo, mat);
  group.add(bar);
  const cap = block(232, 10, 232, 4, MAT.graphite());
  group.add(cap);
  return {
    group,
    update: (p: { h: number; glow: number }) => {
      const H = Math.max(1, Math.max(0, Math.min(1.2, p.h)) * COLUMN_H);
      bar.visible = cap.visible = p.h > 0.004;
      bar.scale.y = H;
      bar.position.y = COLUMN_BASE + H / 2;
      cap.position.y = COLUMN_BASE + H + 5;
      mat.color.copy(full).multiplyScalar(0.3 + 0.7 * Math.max(0, Math.min(1, p.glow)));
    },
  };
};
