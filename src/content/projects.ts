import type { T } from "@/lib/i18n";

export interface Project {
  slug: string;
  title: string;
  year: string;
  status: "done" | "ongoing";
  kind: T;
  summary: T;
  role: T;
  team: T;
  duration: T;
  stack: string[];
  context: T;
  approach: T[];
  outcome: T;
  /** Optional table shown on the project page (header row first). */
  table?: { caption: T; rows: (string | T)[][] };
  source?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "aether-homelab",
    title: "Aether",
    year: "2023 —",
    status: "ongoing",
    kind: { fr: "Infrastructure auto-hébergée", en: "Self-hosted infrastructure" },
    summary: {
      fr: "Un serveur, onze VLANs, un pare-feu virtualisé et une dizaine de services publiés derrière un tunnel Cloudflare et une authentification unique.",
      en: "One server, eleven VLANs, a virtualized firewall and about a dozen services published behind a Cloudflare tunnel and single sign-on.",
    },
    role: { fr: "Conception, réseau, exploitation", en: "Design, networking, operations" },
    team: { fr: "Solo", en: "Solo" },
    duration: { fr: "Depuis l'été 2023", en: "Since summer 2023" },
    stack: [
      "Proxmox VE",
      "OPNsense",
      "TrueNAS / ZFS",
      "Docker",
      "Traefik",
      "Cloudflare Tunnel",
      "Authelia",
      "LLDAP",
      "PostgreSQL",
      "Python",
    ],
    context: {
      fr: "Aether a commencé comme une machine pour héberger des sites de test. C'est devenu mon laboratoire : l'endroit où je fais tourner, en production réelle, les services que j'utilise tous les jours, et où j'apprends le réseau, la sécurité et l'exploitation en me trompant pour de vrai.",
      en: "Aether started as a box to host test sites. It became my lab: the place where I run, in real production, the services I use every day, and where I learn networking, security and operations by actually getting things wrong.",
    },
    approach: [
      {
        fr: "Router on a stick : le serveur n'a qu'un port réseau. Un seul câble en trunk 802.1Q transporte tous les VLANs, WAN compris, et OPNsense, virtualisé sur la même machine, fait le tri.",
        en: "Router on a stick: the server has a single network port. One 802.1Q trunk cable carries every VLAN, WAN included, and OPNsense, virtualized on the same box, sorts it out.",
      },
      {
        fr: "Une DMZ isolée : cloudflared et Traefik vivent seuls dans leur VLAN. Ils peuvent atteindre les services, jamais l'inverse. Aucun port n'est ouvert sur la box du fournisseur.",
        en: "An isolated DMZ: cloudflared and Traefik live alone in their VLAN. They can reach the services, never the other way around. No port is open on the ISP box.",
      },
      {
        fr: "Un conteneur LXC par VLAN, une stack Docker Compose par conteneur, le tout versionné dans Git. Authelia et LLDAP ajoutent le SSO et la double authentification devant tout ce qui est public.",
        en: "One LXC container per VLAN, one Docker Compose stack per container, all versioned in Git. Authelia and LLDAP add SSO and two-factor authentication in front of anything public.",
      },
      {
        fr: "Le stockage est centralisé dans une VM TrueNAS avec des miroirs ZFS, pour que la panne de disque, le seul incident vraiment probable, ne coûte rien.",
        en: "Storage is centralized in a TrueNAS VM with ZFS mirrors, so a disk failure, the one incident that will actually happen, costs nothing.",
      },
      {
        fr: "Des petits services maison en Python y tournent aussi : une infolettre avec désabonnement sécurisé et un vérificateur de notes qui m'avertit dès qu'un résultat est publié.",
        en: "Small home-made Python services run there too: a newsletter with safe unsubscribes and a grade checker that pings me as soon as a result is published.",
      },
    ],
    outcome: {
      fr: "Nextcloud, Immich, Mealie, Home Assistant et mes propres applications tournent au quotidien, chacun dans sa zone. Tout est documenté (architecture, journal de construction, feuille de route) pour que le moi de l'an prochain comprenne les décisions du moi d'aujourd'hui.",
      en: "Nextcloud, Immich, Mealie, Home Assistant and my own apps run every day, each in its own zone. Everything is documented (architecture, build log, roadmap) so next year's me understands the decisions today's me made.",
    },
    table: {
      caption: { fr: "Segmentation réseau (extrait)", en: "Network segmentation (excerpt)" },
      rows: [
        ["VLAN", "Zone", { fr: "Contenu", en: "Runs" }],
        ["10", "DMZ", "cloudflared, Traefik"],
        ["20", { fr: "Public", en: "Public" }, "Nextcloud, Immich, Mealie"],
        ["35", "IoT", "Home Assistant, Thread"],
        ["40", "Infra", "Authelia, LLDAP, Uptime Kuma, DNS"],
        ["45", { fr: "Stockage", en: "Storage" }, "TrueNAS, NFS"],
        ["50", { fr: "Données", en: "Data" }, "PostgreSQL, MariaDB, Redis"],
        ["99", { fr: "Gestion", en: "Mgmt" }, { fr: "Proxmox, accès de secours", en: "Proxmox, fallback access" }],
      ],
    },
    source: "https://github.com/LuluLePerdu/Homelab",
  },
  {
    slug: "le-cerf-blanc",
    title: "Le Cerf Blanc",
    year: "2026",
    status: "done",
    kind: { fr: "Contrat web — refonte", en: "Web contract — redesign" },
    summary: {
      fr: "La refonte complète du site d'une entreprise de la région : cinq pages, une nouvelle présentation des salles et des réservations, et un client autonome pour la suite.",
      en: "A full website redesign for a regional business: five pages, a new take on its rooms and bookings, and a client who can run it on their own afterwards.",
    },
    role: { fr: "Devis, design, développement, livraison", en: "Quote, design, development, delivery" },
    team: { fr: "Solo, pour un client", en: "Solo, for a client" },
    duration: { fr: "Un contrat", en: "One contract" },
    stack: ["Design web", "Responsive", "Rédaction web", "Formation client"],
    context: {
      fr: "Un de mes premiers contrats en indépendant, arrivé par référence. Le Cerf Blanc voulait un site plus clair et plus actuel, qui lui ressemble, et qu'il pourrait faire vivre lui-même.",
      en: "One of my first freelance contracts, which came through a referral. Le Cerf Blanc wanted a clearer, more current site that looked like them, and that they could keep alive on their own.",
    },
    approach: [
      {
        fr: "Tout le cycle, de la première rencontre au devis, puis maquettes, développement, mise en ligne et suivi.",
        en: "The whole cycle, from the first meeting to the quote, then mock-ups, development, launch and follow-up.",
      },
      {
        fr: "Une structure en cinq pages centrée sur ce que les visiteurs viennent chercher : les salles, les réservations et les informations pratiques.",
        en: "A five-page structure built around what visitors come for: the rooms, the bookings and the practical information.",
      },
      {
        fr: "Une présentation pensée d'abord pour le téléphone, puis élargie pour l'ordinateur.",
        en: "A layout designed for the phone first, then widened for the desktop.",
      },
      {
        fr: "Des guides d'entretien et de gestion rédigés sur mesure, pour que le client modifie ses textes et ses photos sans dépendre de moi.",
        en: "Custom maintenance and management guides, so the client edits their own text and photos without depending on me.",
      },
    ],
    outcome: {
      fr: "Un site en ligne, un client autonome, et le premier projet de mon activité de création web.",
      en: "A live site, a self-sufficient client, and the first project of my web design business.",
    },
    live: "https://www.lecerfblanc.ca/",
  },
  {
    slug: "fpga-retro",
    title: "Les Bleuets",
    year: "2026",
    status: "done",
    kind: { fr: "Génie — jeu rétro sur FPGA", en: "Engineering — retro game on FPGA" },
    summary: {
      fr: "Un jeu rétro dont la carte graphique est écrite de zéro en VHDL : une PPU à tuiles et à sprites, dans le FPGA d'un Zynq, jusqu'à la sortie HDMI.",
      en: "A retro game whose graphics card is written from scratch in VHDL: a tile-and-sprite PPU in a Zynq's FPGA, all the way to the HDMI output.",
    },
    role: { fr: "Architecture matérielle, VHDL", en: "Hardware architecture, VHDL" },
    team: { fr: "Équipe de session", en: "Semester team" },
    duration: { fr: "Une session (S4)", en: "One semester (S4)" },
    stack: ["VHDL", "Zynq", "Vivado", "Vitis", "C", "AXI", "BRAM", "HDMI", "SPI"],
    context: {
      fr: "Projet de quatrième session en génie informatique à l'UdeS. Le défi : concevoir l'architecture d'un moteur de jeu à la façon des consoles 8 bits, où le rendu n'est pas fait par un logiciel mais par du matériel décrit en VHDL.",
      en: "Fourth-semester computer engineering project at UdeS. The challenge: design the architecture of a game engine the way 8-bit consoles did it, where rendering isn't done by software but by hardware described in VHDL.",
    },
    approach: [
      {
        fr: "Le processeur ARM du Zynq fait tourner la logique du jeu et la position des objets. Il écrit la caméra et huit acteurs dans des registres, à travers un bus AXI.",
        en: "The Zynq's ARM core runs the game logic and object positions. It writes the camera and eight actors into registers, over an AXI bus.",
      },
      {
        fr: "Pour chaque pixel, la PPU descend une chaîne de mémoires BRAM : la carte donne la tuile et la position dans la tuile, la tuile donne l'indice de couleur, la palette donne le RGB.",
        en: "For every pixel, the PPU walks a chain of BRAM memories: the map gives the tile and the position inside it, the tile gives a colour index, the palette gives the RGB.",
      },
      {
        fr: "Un module de premier plan vérifie si un acteur recouvre ce pixel et remplace alors l'arrière-plan : c'est le système de sprites.",
        en: "A foreground module checks whether an actor covers that pixel and, if so, replaces the background: that's the sprite system.",
      },
      {
        fr: "Le contrôle passe par un joystick Pmod lu en SPI, et l'image sort en HDMI.",
        en: "Input comes from a Pmod joystick read over SPI, and the picture goes out over HDMI.",
      },
    ],
    outcome: {
      fr: "Un moteur graphique entièrement matériel, et une compréhension concrète de ce qui se passe sous chaque image : horloges, mémoires, bus et bits.",
      en: "A fully hardware graphics engine, and a hands-on understanding of what happens under every frame: clocks, memories, buses and bits.",
    },
    table: {
      caption: { fr: "Le chemin d'un pixel", en: "A pixel's journey" },
      rows: [
        [{ fr: "Étape", en: "Step" }, "Module", { fr: "Rôle", en: "Role" }],
        ["01", "mapBram", { fr: "(x, y) → tuile (6 bits) + ligne et colonne dans la tuile 8 × 8", en: "(x, y) → tile (6 bits) + row and column in the 8 × 8 tile" }],
        ["02", "tileBram", { fr: "Tuile + position → indice de couleur (4 bits, 16 couleurs)", en: "Tile + position → colour index (4 bits, 16 colours)" }],
        ["03", "pixelBram", { fr: "Indice → couleur RGB sur 24 bits", en: "Index → 24-bit RGB colour" }],
        ["04", "foregroundRender", { fr: "Un des 8 acteurs couvre-t-il ce pixel ? Si oui, sa couleur l'emporte", en: "Does one of the 8 actors cover this pixel? If so, its colour wins" }],
        ["05", "HDMI", { fr: "Le pixel final part vers l'écran", en: "The final pixel goes out to the screen" }],
      ],
    },
  },
  {
    slug: "shackododo",
    title: "ShackoDodo",
    year: "2025",
    status: "done",
    kind: { fr: "Hackathon — sécurité web", en: "Hackathon — web security" },
    summary: {
      fr: "Un proxy d'interception HTTP/HTTPS avec interface web, construit en 48 heures : on voit passer chaque requête du navigateur, on la modifie, on la renvoie.",
      en: "An HTTP/HTTPS intercepting proxy with a web interface, built in 48 hours: watch every browser request go by, edit it, send it again.",
    },
    role: { fr: "Développeur full stack", en: "Full stack developer" },
    team: { fr: "Équipe de hackathon", en: "Hackathon team" },
    duration: { fr: "48 heures", en: "48 hours" },
    stack: ["Go", "React", "Vite", "Material UI", "WebSocket"],
    context: {
      fr: "Hackathon de l'automne 2025. L'idée : un outil d'inspection à la Burp, mais léger, qui s'installe en un exécutable et qu'on comprend en une minute.",
      en: "Fall 2025 hackathon. The idea: a Burp-style inspection tool, but lightweight, shipped as a single executable you understand in a minute.",
    },
    approach: [
      {
        fr: "Un backend en Go joue le rôle de proxy intercepteur et pousse chaque requête vers l'interface en temps réel par WebSocket.",
        en: "A Go backend acts as the intercepting proxy and streams each request to the interface in real time over WebSocket.",
      },
      {
        fr: "L'interface React permet de lire, modifier et rejouer les requêtes, puis de lancer Firefox, Chrome ou Edge déjà configurés sur le proxy.",
        en: "The React interface lets you read, edit and replay requests, then launch Firefox, Chrome or Edge already pointed at the proxy.",
      },
      {
        fr: "Le certificat d'autorité est installé automatiquement pour intercepter le HTTPS, et le frontend est embarqué dans le binaire Go.",
        en: "The CA certificate installs itself to intercept HTTPS, and the frontend is embedded in the Go binary.",
      },
    ],
    outcome: {
      fr: "Un outil fonctionnel livré dans les délais, en un seul exécutable. Et une bonne leçon sur ce qu'on coupe quand il reste six heures.",
      en: "A working tool shipped on time, as a single executable. And a good lesson in what you cut when six hours are left.",
    },
    source: "https://github.com/LuluLePerdu/ShackoDodo",
  },
  {
    slug: "mennette",
    title: "MENnette",
    year: "2025",
    status: "done",
    kind: { fr: "Génie — logiciel et matériel", en: "Engineering — software & hardware" },
    summary: {
      fr: "Une console de mini-jeux à désamorcer en équipe, entre interface Qt en C++ et modules physiques : accéléromètre, DEL, potentiomètre, clavier.",
      en: "A defuse-it-together mini-game console, bridging a C++ Qt interface and physical modules: accelerometer, LEDs, potentiometer, keypad.",
    },
    role: { fr: "Développeur logiciel", en: "Software developer" },
    team: { fr: "3 étudiants", en: "3 students" },
    duration: { fr: "Une session", en: "One semester" },
    stack: ["C++", "Qt", "Git"],
    context: {
      fr: "Projet de deuxième session en génie informatique à l'UdeS. Le défi : faire dialoguer une application de bureau avec du matériel réel, sous contrainte de temps.",
      en: "Second-semester computer engineering project at UdeS. The challenge: make a desktop application talk to real hardware, under time pressure.",
    },
    approach: [
      {
        fr: "Chaque épreuve est un module : Snake, Simon, un Mastermind sur DEL, un jeu d'inclinaison à l'accéléromètre, un séquenceur au potentiomètre.",
        en: "Each challenge is a module: Snake, Simon Says, an LED Mastermind, an accelerometer tilt game, a potentiometer sequencer.",
      },
      {
        fr: "Une minuterie et un bargraphe communs mettent la pression, et une convention de nommage stricte garde l'interface Qt lisible à trois.",
        en: "A shared timer and bargraph keep the pressure on, and a strict naming convention keeps the Qt interface readable with three people on it.",
      },
    ],
    outcome: {
      fr: "Une console jouable de bout en bout, et ma première vraie expérience de la frontière entre le code et les fils.",
      en: "A console playable end to end, and my first real taste of the boundary between code and wires.",
    },
    source: "https://github.com/LuluLePerdu/P11_MENnette",
  },
  {
    slug: "robosketch",
    title: "RoboSketch",
    year: "2024",
    status: "done",
    kind: { fr: "Mobile et robotique", en: "Mobile & robotics" },
    summary: {
      fr: "Une application Flutter où l'on dessine du bout du doigt, puis un robot reproduit le tracé sur papier.",
      en: "A Flutter app where you draw with a fingertip, then a robot reproduces the drawing on paper.",
    },
    role: { fr: "Application mobile et intégration robot", en: "Mobile app & robot integration" },
    team: { fr: "4 étudiants", en: "4 students" },
    duration: { fr: "Une session", en: "One semester" },
    stack: ["Dart", "Flutter", "Python", "REST", "Linux"],
    context: {
      fr: "Projet de session en génie informatique : relier une interface tactile à un robot mobile, et faire en sorte que ce qu'on voit à l'écran soit ce qui sort sur la feuille.",
      en: "Semester project in computer engineering: connect a touch interface to a mobile robot, and make what you see on screen be what comes out on the page.",
    },
    approach: [
      {
        fr: "Le canevas Flutter capte le tracé et l'aperçu se met à jour en temps réel.",
        en: "The Flutter canvas captures the stroke with a live preview.",
      },
      {
        fr: "Les chemins sont simplifiés et optimisés avant l'envoi, pour réduire les déplacements inutiles du robot.",
        en: "Paths are simplified and optimized before sending, to cut the robot's wasted moves.",
      },
      {
        fr: "Un protocole simple par API REST fait le pont entre le téléphone et le robot sous Linux.",
        en: "A simple REST protocol bridges the phone and the Linux-based robot.",
      },
    ],
    outcome: {
      fr: "Un pont fonctionnel entre un geste sur un écran et un trait d'encre sur du papier.",
      en: "A working bridge between a gesture on a screen and a line of ink on paper.",
    },
    source: "https://github.com/LuluLePerdu/RoboSketch",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
