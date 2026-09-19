/**
 * Topographic contour lines, generated deterministically from a seed so each
 * page gets its own "map" and the server and client always agree.
 */

function hash(input: string) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Props {
  seed: string;
  className?: string;
  rings?: number;
  /** Centre of the "summit", as a fraction of the 1000x600 canvas. */
  cx?: number;
  cy?: number;
}

export function Topo({ seed, className, rings = 16, cx, cy }: Props) {
  const rand = rng(hash(seed));
  const W = 1000;
  const H = 600;
  const x0 = (cx ?? 0.25 + rand() * 0.5) * W;
  const y0 = (cy ?? 0.3 + rand() * 0.4) * H;

  const waves = Array.from({ length: 4 }, (_, i) => ({
    k: i + 2,
    amp: 0.05 + rand() * 0.09,
    phase: rand() * Math.PI * 2,
    drift: (rand() - 0.5) * 0.9,
  }));
  const stretch = 1.25 + rand() * 0.5;

  const paths: string[] = [];
  for (let r = 0; r < rings; r++) {
    const radius = 26 + r * (34 + r * 1.6);
    const steps = 140;
    let d = "";
    for (let s = 0; s <= steps; s++) {
      const t = (s / steps) * Math.PI * 2;
      let wobble = 1;
      for (const w of waves) wobble += w.amp * Math.sin(w.k * t + w.phase + r * w.drift * 0.35);
      const x = x0 + Math.cos(t) * radius * wobble * stretch;
      const y = y0 + Math.sin(t) * radius * wobble;
      d += `${s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    paths.push(d + "Z");
  }

  return (
    <svg
      className={`topo ${className ?? ""}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
