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
    role: { fr: "Développeur full stack — stage", en: "Full stack developer — internship" },
    period: { fr: "Janv. 2026 — présent", en: "Jan. 2026 — present" },
    current: true,
    points: [
      {
        fr: "Modernisation de l'architecture d'une application dépréciée : refonte complète en Java Spring Boot.",
        en: "Modernizing the architecture of a deprecated application: a full rewrite in Java Spring Boot.",
      },
      {
        fr: "Développement frontend et backend, avec l'implémentation d'API REST.",
        en: "Front-end and back-end development, including REST API implementation.",
      },
      {
        fr: "Amélioration marquée de la qualité du code, dans un contexte industriel d'envergure internationale.",
        en: "A marked improvement in code quality, in a large-scale international manufacturing context.",
      },
    ],
    stack: ["Java", "Spring Boot", "REST"],
  },
  {
    org: "Fjelkore",
    place: "Sherbrooke, QC",
    role: { fr: "Fondateur — développeur web indépendant", en: "Founder — freelance web developer" },
    period: { fr: "2026 — présent", en: "2026 — present" },
    current: true,
    studio: true,
    points: [
      {
        fr: "Sites web sur mesure pour une clientèle locale et régionale, du devis à la mise en ligne et au suivi.",
        en: "Custom websites for local and regional clients, from quote to launch and follow-up.",
      },
      {
        fr: "Un CMS modulaire maison, en Next.js, PostgreSQL et Payload, où le client monte et modifie ses pages par blocs, dans une interface visuelle.",
        en: "An in-house modular CMS, in Next.js, PostgreSQL and Payload, where clients build and edit their own pages block by block, in a visual interface.",
      },
      {
        fr: "Une offre complète : identité visuelle, hébergement et maintenance.",
        en: "A complete offer: visual identity, hosting and maintenance.",
      },
    ],
    stack: ["Next.js", "PostgreSQL", "Payload CMS"],
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
        fr: "Pipeline CI/CD avec génération automatisée de métriques de qualité via CAST, et révision de code.",
        en: "A CI/CD pipeline with automated quality metrics through CAST, plus code review.",
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
        fr: "Support téléphonique : diagnostic et résolution de problèmes de réseau, de VoIP et de télévision.",
        en: "Phone support: diagnosing and fixing network, VoIP and TV problems.",
      },
      {
        fr: "Configuration et dépannage de routeurs, de modems et d'équipements résidentiels.",
        en: "Configuring and troubleshooting routers, modems and home equipment.",
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
        fr: "Applications web internes en C# (ASP.NET) pour le personnel scolaire et la direction.",
        en: "Internal web apps in C# (ASP.NET) for school staff and administration.",
      },
      {
        fr: "Déploiement de correctifs en production et mise en ligne des améliorations.",
        en: "Shipping fixes to production and releasing improvements.",
      },
      {
        fr: "Travail direct avec les utilisateurs internes pour cerner les besoins et les prioriser.",
        en: "Working directly with internal users to pin down needs and prioritize them.",
      },
    ],
    stack: ["C#", "ASP.NET", "MSSQL"],
  },
  {
    org: "Blanko Créativité numérique",
    place: "Joliette, QC",
    role: { fr: "Développeur backend — stage", en: "Backend developer — internship" },
    period: { fr: "Été 2023", en: "Summer 2023" },
    points: [
      {
        fr: "Développement backend de sites web pour des municipalités québécoises, en PHP avec Laravel.",
        en: "Back-end development of websites for Quebec municipalities, in PHP with Laravel.",
      },
      {
        fr: "Fonctionnalités dynamiques côté client, et adaptation des gabarits aux chartes graphiques de chaque municipalité.",
        en: "Dynamic client-side features, and fitting templates to each municipality's visual identity.",
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
  { group: { fr: "Web", en: "Web" }, items: ["Next.js", "React", "Angular", "Vue.js", "Spring Boot", "Laravel", "ASP.NET"] },
  { group: { fr: "Données", en: "Data" }, items: ["PostgreSQL", "MySQL", "MSSQL", "Redis"] },
  { group: { fr: "Infra & DevOps", en: "Infra & DevOps" }, items: ["Docker", "Kubernetes", "Proxmox", "Linux", "CI/CD", "Cloudflare", "Bash", "PowerShell"] },
  { group: { fr: "Méthodes", en: "Practices" }, items: ["Git", "Scrum", "Agile", "CAST", "SonarQube"] },
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
