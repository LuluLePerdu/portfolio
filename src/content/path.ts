import type { T } from "@/lib/i18n";

export interface Job {
  org: string;
  place: string;
  role: T;
  period: T;
  current?: boolean;
  points: T[];
  stack?: string[];
  /** Links the entry to the studio. Kept discreet on purpose. */
  studio?: boolean;
}

export const jobs: Job[] = [
  {
    org: "IBM",
    place: "Bromont, QC",
    role: { fr: "Développeur — stage", en: "Developer — internship" },
    period: { fr: "Janv. 2026 — présent", en: "Jan. 2026 — present" },
    current: true,
    points: [
      {
        fr: "Développement d'applications au sein de l'équipe FABI, en Next.js et Java, dans un contexte industriel d'envergure internationale.",
        en: "Building applications with the FABI team, in Next.js and Java, in a large-scale international manufacturing context.",
      },
      {
        fr: "Équipes agiles, pratiques DevOps et pipelines CI/CD sur l'outillage IBM.",
        en: "Agile teams, DevOps practices and CI/CD pipelines on IBM tooling.",
      },
    ],
    stack: ["Next.js", "Java", "CI/CD"],
  },
  {
    org: "Fjelkore",
    place: "Sherbrooke, QC",
    role: { fr: "Fondateur — développeur web indépendant", en: "Founder — freelance web developer" },
    period: { fr: "2025 — présent", en: "2025 — present" },
    current: true,
    studio: true,
    points: [
      {
        fr: "Sites web sur mesure pour une clientèle locale et régionale, du devis à la mise en ligne et au suivi.",
        en: "Custom websites for local and regional clients, from quote to launch and follow-up.",
      },
      {
        fr: "Refonte complète du site du Cerf Blanc, et une offre qui inclut identité visuelle, hébergement et maintenance.",
        en: "Full redesign of Le Cerf Blanc's website, and an offer that covers visual identity, hosting and maintenance.",
      },
    ],
  },
  {
    org: "CGI",
    place: "Sherbrooke, QC",
    role: { fr: "Développeur — stage puis temps partiel", en: "Developer — internship, then part-time" },
    period: { fr: "Été 2025 — déc. 2025", en: "Summer 2025 — Dec. 2025" },
    points: [
      {
        fr: "Application interne en Angular, Java Spring Boot, TypeScript et MySQL.",
        en: "Internal application in Angular, Java Spring Boot, TypeScript and MySQL.",
      },
      {
        fr: "Pipeline CI/CD sur GitLab avec génération automatisée de métriques de qualité via CAST.",
        en: "GitLab CI/CD pipeline with automated quality metrics through CAST.",
      },
    ],
    stack: ["Angular", "Spring Boot", "MySQL", "GitLab CI"],
  },
  {
    org: "Cooptel",
    place: "Valcourt, QC",
    role: { fr: "Soutien technique", en: "Technical support" },
    period: { fr: "2024 — 2025", en: "2024 — 2025" },
    points: [
      {
        fr: "Diagnostic et résolution de problèmes internet, téléphonie et télévision pour une clientèle résidentielle et commerciale.",
        en: "Diagnosing and fixing internet, phone and TV issues for residential and business customers.",
      },
      {
        fr: "Configuration et dépannage réseau.",
        en: "Network configuration and troubleshooting.",
      },
    ],
  },
  {
    org: "CSS des Samares",
    place: "Saint-Félix-de-Valois, QC",
    role: { fr: "Développeur full stack — stage", en: "Full stack developer — internship" },
    period: { fr: "Mars — juil. 2024", en: "Mar. — Jul. 2024" },
    points: [
      {
        fr: "Applications web internes en C# : un outil de gestion des données étudiantes et des API REST entre systèmes.",
        en: "Internal web apps in C#: a student data management tool and REST APIs between systems.",
      },
      {
        fr: "Revues de code, gestion de projets web et mise en ligne de correctifs.",
        en: "Code reviews, web project management and shipping fixes.",
      },
    ],
    stack: ["C#", "REST", "MSSQL"],
  },
  {
    org: "Blanko Créativité numérique",
    place: "Joliette, QC",
    role: { fr: "Développeur backend — stage", en: "Backend developer — internship" },
    period: { fr: "Été 2023", en: "Summer 2023" },
    points: [
      {
        fr: "Générateur de formulaires dynamiques pour des applications municipales, en Laravel.",
        en: "Dynamic form builder for municipal applications, in Laravel.",
      },
      {
        fr: "API REST, tests, débogage et documentation, main dans la main avec l'équipe front-end.",
        en: "REST APIs, testing, debugging and documentation, hand in hand with the front-end team.",
      },
    ],
    stack: ["PHP", "Laravel", "JavaScript"],
  },
];

export const education: { school: string; title: T; period: T; note?: T }[] = [
  {
    school: "Université de Sherbrooke",
    title: { fr: "Baccalauréat en génie informatique", en: "B.Eng. in Computer Engineering" },
    period: { fr: "2024 — en cours", en: "2024 — ongoing" },
  },
  {
    school: "Cégep régional de Lanaudière à Joliette",
    title: { fr: "DEC — Techniques de l'informatique", en: "DEC — Computer Science Technology" },
    period: { fr: "Diplômé en 2024", en: "Graduated 2024" },
    note: {
      fr: "Conception et développement d'applications",
      en: "Application design and development",
    },
  },
];

export const skills: { group: T; items: string[] }[] = [
  { group: { fr: "Langages", en: "Languages" }, items: ["TypeScript", "Java", "C#", "C / C++", "Go", "Python", "PHP", "Kotlin", "Swift"] },
  { group: { fr: "Web", en: "Web" }, items: ["Next.js", "React", "Angular", "Spring Boot", "Laravel"] },
  { group: { fr: "Données", en: "Data" }, items: ["PostgreSQL", "MySQL", "MSSQL", "Redis"] },
  { group: { fr: "Infra & DevOps", en: "Infra & DevOps" }, items: ["Docker", "Kubernetes", "Proxmox", "Linux", "CI/CD", "Cloudflare", "Bash", "PowerShell"] },
  { group: { fr: "Méthodes", en: "Practices" }, items: ["Git", "Scrum", "Agile", "CAST"] },
];

export const certifications: { name: T; year: string }[] = [
  { name: { fr: "Carte ASP Construction", en: "ASP Construction card" }, year: "2025" },
  { name: { fr: "Formation Microsoft Intune", en: "Microsoft Intune training" }, year: "2024" },
];

export const languages: { name: T; level: T }[] = [
  { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "Fonctionnel, technique", en: "Professional working" } },
];

export const links = {
  email: "Ludwig-emmanuel@hotmail.com",
  github: "https://github.com/LuluLePerdu",
  linkedin: "https://www.linkedin.com/in/ludwig-emmanuel-dufour-5642352bb",
  instagram: "https://instagram.com/ludwig._.emmanuel",
};
