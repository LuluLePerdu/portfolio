import type { Locale } from "@/lib/i18n";

/** What each VLAN holds, as actually built (see the homelab build log). */
const vlans: { tag: string; zone: string; runs: Record<Locale, string>; note?: Record<Locale, string> }[] = [
  { tag: "05", zone: "USERS", runs: { fr: "Postes et wifi", en: "Workstations and wifi" } },
  { tag: "10", zone: "DMZ", runs: { fr: "cloudflared, Traefik", en: "cloudflared, Traefik" } },
  { tag: "20", zone: "PUB", runs: { fr: "Nextcloud, Immich, Mealie", en: "Nextcloud, Immich, Mealie" } },
  { tag: "35", zone: "IOT", runs: { fr: "Home Assistant, Thread", en: "Home Assistant, Thread" } },
  { tag: "40", zone: "INFRA", runs: { fr: "Authelia, LLDAP, DNS, supervision", en: "Authelia, LLDAP, DNS, monitoring" } },
  { tag: "45", zone: "STORAGE", runs: { fr: "TrueNAS, ZFS, NFS", en: "TrueNAS, ZFS, NFS" } },
  {
    tag: "50",
    zone: "DB",
    runs: { fr: "PostgreSQL, MariaDB, Redis", en: "PostgreSQL, MariaDB, Redis" },
    note: { fr: "scellée : aucune sortie", en: "sealed: no egress" },
  },
  { tag: "99", zone: "MGMT", runs: { fr: "Proxmox, accès de secours", en: "Proxmox, fallback access" } },
];

const t = {
  internet: { fr: "Internet", en: "Internet" },
  tunnel: { fr: "Tunnel Cloudflare", en: "Cloudflare tunnel" },
  noPort: { fr: "aucun port ouvert", en: "no open port" },
  box: { fr: "Box du fournisseur", en: "ISP box" },
  switch: { fr: "Switch 802.1Q", en: "802.1Q switch" },
  trunk: { fr: "Un seul câble, trunk", en: "One cable, trunk" },
  host: { fr: "aether — Proxmox VE, une seule carte réseau", en: "aether — Proxmox VE, a single network card" },
  firewall: { fr: "OPNsense", en: "OPNsense" },
  firewallSub: { fr: "11 VLANs, ~90 règles", en: "11 VLANs, ~90 rules" },
  legend: {
    fr: "Le trafic entrant passe par le tunnel, jamais par un port ouvert. Entre les VLANs, tout est bloqué sauf les dépendances déclarées.",
    en: "Inbound traffic comes through the tunnel, never through an open port. Between VLANs everything is blocked except declared dependencies.",
  },
};

export function NetworkDiagram({ locale }: { locale: Locale }) {
  const rowH = 52;
  const gap = 10;
  const top = 96;
  const rowX = 430;
  const rowW = 540;

  return (
    <figure className="diagram">
      <div className="diagram__scroll">
        <svg viewBox="0 0 1000 620" role="img" aria-labelledby="net-title" className="diagram__svg">
          <title id="net-title">{t.host[locale]}</title>

          {/* Outside the house */}
          <g className="diagram__node">
            <rect x="20" y="40" width="170" height="46" rx="2" />
            <text x="105" y="69" className="diagram__label">
              {t.internet[locale]}
            </text>
          </g>

          <g className="diagram__node diagram__node--accent">
            <rect x="20" y="132" width="170" height="60" rx="2" />
            <text x="105" y="157" className="diagram__label">
              {t.tunnel[locale]}
            </text>
            <text x="105" y="177" className="diagram__meta">
              {t.noPort[locale]}
            </text>
          </g>

          <g className="diagram__node">
            <rect x="20" y="238" width="170" height="46" rx="2" />
            <text x="105" y="267" className="diagram__label">
              {t.box[locale]}
            </text>
          </g>

          <g className="diagram__node">
            <rect x="20" y="330" width="170" height="60" rx="2" />
            <text x="105" y="355" className="diagram__label">
              {t.switch[locale]}
            </text>
            <text x="105" y="375" className="diagram__meta">
              {t.trunk[locale]}
            </text>
          </g>

          {/* Internet down to the box, box down to the switch */}
          <path className="diagram__line" d="M105 86 V132" />
          <path className="diagram__line" d="M105 192 V238" />
          <path className="diagram__line" d="M105 284 V330" />

          {/* The one trunk cable into the host */}
          <path className="diagram__line diagram__line--arrow" d="M190 360 H250 V300 H300" markerEnd="url(#tip)" />

          {/* The tunnel reaching into the DMZ, outbound only */}
          <path
            className="diagram__line diagram__line--dashed"
            d={`M190 162 H240 V${top + rowH + gap + rowH / 2} H${rowX}`}
            markerEnd="url(#tip-accent)"
          />

          {/* The machine */}
          <g className="diagram__host">
            <rect x="272" y="20" width="708" height="580" rx="3" />
            <text x="292" y="48" className="diagram__caption at-start">
              {t.host[locale]}
            </text>
          </g>

          {/* The firewall, the only way between VLANs */}
          <g className="diagram__node diagram__node--solid">
            <rect x="300" y={top} width="92" height={vlans.length * (rowH + gap) - gap} rx="2" />
            <text x="346" y={top + 26} className="diagram__label">
              {t.firewall[locale]}
            </text>
            <text x="346" y={top + 46} className="diagram__meta">
              VM 100
            </text>
            <text x="346" y={top + 200} className="diagram__meta">
              {t.firewallSub[locale].split(",")[0]}
            </text>
            <text x="346" y={top + 218} className="diagram__meta">
              {t.firewallSub[locale].split(",")[1]}
            </text>
          </g>

          {/* One row per VLAN */}
          {vlans.map((v, i) => {
            const y = top + i * (rowH + gap);
            const mid = y + rowH / 2;
            return (
              <g key={v.tag}>
                <path className="diagram__line diagram__line--arrow" d={`M392 ${mid} H${rowX}`} markerEnd="url(#tip)" />
                <g className="diagram__node">
                  <rect x={rowX} y={y} width={rowW} height={rowH} rx="2" />
                  <text x={rowX + 18} y={mid - 4} className="diagram__tag at-start">
                    {v.tag}
                  </text>
                  <text x={rowX + 58} y={mid - 4} className="diagram__label at-start">
                    {v.zone}
                  </text>
                  <text x={rowX + 58} y={mid + 15} className="diagram__meta at-start">
                    {v.runs[locale]}
                    {v.note ? ` — ${v.note[locale]}` : ""}
                  </text>
                </g>
              </g>
            );
          })}

          <defs>
            <marker id="tip" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0 0 L7 3.5 L0 7 z" className="diagram__tip" />
            </marker>
            <marker id="tip-accent" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0 0 L7 3.5 L0 7 z" className="diagram__tip diagram__tip--accent" />
            </marker>
          </defs>
        </svg>
      </div>
      <ul className="sr-only">
        {vlans.map((v) => (
          <li key={v.tag}>
            VLAN {v.tag} {v.zone}: {v.runs[locale]}
            {v.note ? ` — ${v.note[locale]}` : ""}
          </li>
        ))}
      </ul>
      <figcaption className="diagram__note">{t.legend[locale]}</figcaption>
    </figure>
  );
}
