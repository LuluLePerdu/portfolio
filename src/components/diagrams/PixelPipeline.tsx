import type { Locale } from "@/lib/i18n";

const t = {
  title: { fr: "Le chemin d'un pixel, du processeur à l'écran", en: "A pixel's journey, from processor to screen" },
  cpu: { fr: "Zynq — cœur ARM", en: "Zynq — ARM core" },
  cpuSub: { fr: "logique du jeu, position des objets", en: "game logic, object positions" },
  regs: { fr: "Registres", en: "Registers" },
  regsSub: { fr: "caméra X/Y, 8 acteurs", en: "camera X/Y, 8 actors" },
  joystick: { fr: "Joystick Pmod", en: "Pmod joystick" },
  ppu: { fr: "PPU — contrôleur", en: "PPU — controller" },
  ppuSub: { fr: "balaie l'écran, pixel par pixel", en: "sweeps the screen, pixel by pixel" },
  steps: [
    {
      name: "mapBram",
      out: { fr: "tuile, 6 bits", en: "tile, 6 bits" },
      desc: { fr: "Quelle tuile, pour ce (x, y) ?", en: "Which tile, for this (x, y)?" },
    },
    {
      name: "tileBram",
      out: { fr: "indice, 4 bits", en: "index, 4 bits" },
      desc: { fr: "Quelle couleur dans la tuile 8 × 8 ?", en: "Which colour in the 8 × 8 tile?" },
    },
    {
      name: "pixelBram",
      out: { fr: "RGB, 24 bits", en: "RGB, 24 bits" },
      desc: { fr: "La palette donne la couleur", en: "The palette gives the colour" },
    },
    {
      name: "foregroundRender",
      out: { fr: "pixel final", en: "final pixel" },
      desc: { fr: "Un acteur passe-t-il devant ?", en: "Is an actor in front?" },
    },
  ],
  hdmi: { fr: "Sortie HDMI", en: "HDMI out" },
  legend: {
    fr: "Tout ce qui est en dessous de la ligne est du matériel décrit en VHDL : aucune image n'est calculée par du logiciel.",
    en: "Everything below the line is hardware described in VHDL: no frame is ever computed by software.",
  },
};

export function PixelPipeline({ locale }: { locale: Locale }) {
  const stepW = 222;
  const stepGap = 24;
  const stepY = 300;

  return (
    <figure className="diagram">
      <div className="diagram__scroll">
        <svg viewBox="0 0 1000 480" role="img" aria-labelledby="ppu-title" className="diagram__svg">
          <title id="ppu-title">{t.title[locale]}</title>

          {/* Software side */}
          <g className="diagram__node">
            <rect x="20" y="40" width="240" height="64" rx="2" />
            <text x="140" y="66" className="diagram__label">
              {t.cpu[locale]}
            </text>
            <text x="140" y="87" className="diagram__meta">
              {t.cpuSub[locale]}
            </text>
          </g>

          <g className="diagram__node">
            <rect x="20" y="130" width="240" height="46" rx="2" />
            <text x="140" y="159" className="diagram__label">
              {t.joystick[locale]}
            </text>
          </g>
          <path className="diagram__line diagram__line--arrow" d="M140 130 V104" markerEnd="url(#tip2)" />
          <text x="152" y="122" className="diagram__meta at-start">
            SPI
          </text>

          <g className="diagram__node diagram__node--accent">
            <rect x="380" y="40" width="240" height="64" rx="2" />
            <text x="500" y="66" className="diagram__label">
              {t.regs[locale]}
            </text>
            <text x="500" y="87" className="diagram__meta">
              {t.regsSub[locale]}
            </text>
          </g>
          <path className="diagram__line diagram__line--arrow" d="M260 72 H380" markerEnd="url(#tip2)" />
          <text x="320" y="62" className="diagram__meta">
            AXI
          </text>

          <g className="diagram__node">
            <rect x="740" y="40" width="240" height="64" rx="2" />
            <text x="860" y="66" className="diagram__label">
              {t.ppu[locale]}
            </text>
            <text x="860" y="87" className="diagram__meta">
              {t.ppuSub[locale]}
            </text>
          </g>
          <path className="diagram__line diagram__line--arrow" d="M620 72 H740" markerEnd="url(#tip2)" />

          {/* The line between software and hardware */}
          <path className="diagram__line diagram__line--dashed" d="M20 210 H980" />
          <text x="980" y="200" className="diagram__meta at-end">
            VHDL
          </text>

          {/* The pixel chain */}
          <path className="diagram__line diagram__line--arrow" d="M860 210 V250 H125 V300" markerEnd="url(#tip2)" />
          <text x="150" y="243" className="diagram__meta at-start">
            (x, y)
          </text>

          {t.steps.map((step, i) => {
            const x = 20 + i * (stepW + stepGap);
            return (
              <g key={step.name}>
                <g className="diagram__node diagram__node--solid">
                  <rect x={x} y={stepY} width={stepW} height={104} rx="2" />
                  <text x={x + stepW / 2} y={stepY + 24} className="diagram__tag">
                    {String(i + 1).padStart(2, "0")}
                  </text>
                  <text x={x + stepW / 2} y={stepY + 50} className="diagram__label diagram__label--code">
                    {step.name}
                  </text>
                  <text x={x + stepW / 2} y={stepY + 71} className="diagram__meta">
                    {step.desc[locale]}
                  </text>
                  <text x={x + stepW / 2} y={stepY + 92} className="diagram__tag">
                    {step.out[locale]}
                  </text>
                </g>
                {i < t.steps.length - 1 && (
                  <path
                    className="diagram__line diagram__line--arrow"
                    d={`M${x + stepW} ${stepY + 52} H${x + stepW + stepGap}`}
                    markerEnd="url(#tip2)"
                  />
                )}
              </g>
            );
          })}

          {/* Out of the last stage and into the screen */}
          <path className="diagram__line diagram__line--arrow" d="M869 404 V438 H660" markerEnd="url(#tip2)" />
          <g className="diagram__node diagram__node--accent">
            <rect x="420" y="415" width="240" height="46" rx="2" />
            <text x="540" y="444" className="diagram__label">
              {t.hdmi[locale]}
            </text>
          </g>

          <defs>
            <marker id="tip2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0 0 L7 3.5 L0 7 z" className="diagram__tip" />
            </marker>
          </defs>
        </svg>
      </div>
      <ol className="sr-only">
        {t.steps.map((step) => (
          <li key={step.name}>
            {step.name}: {step.desc[locale]} → {step.out[locale]}
          </li>
        ))}
      </ol>
      <figcaption className="diagram__note">{t.legend[locale]}</figcaption>
    </figure>
  );
}
