export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categories: ProjectCategory[];
  status: ProjectStatus;
  type: ProjectType;
  technologies: Technology[];
  duration: string;
  team?: string;
  role?: string;
  challengeKey: string;
  achievementKey: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  year: number;
  complexity: 'beginner' | 'intermediate' | 'advanced';
}

export type ProjectCategory = 'academic' | 'personal' | 'web' | 'infrastructure' | 'mobile' | 'backend';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
export type ProjectType = 'academic' | 'personal' | 'professional';

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'language' | 'framework' | 'tool';
  color?: string;
}

export const technologies: Record<string, Technology> = {

  typescript: { name: 'TypeScript', category: 'language', color: '#3178C6' },
  javascript: { name: 'JavaScript', category: 'language', color: '#F7DF1E' },
  dart: { name: 'Dart', category: 'language', color: '#0175C2' },
  go: { name: 'Go', category: 'language', color: '#00ADD8' },
  python: { name: 'Python', category: 'language', color: '#3776AB' },
  

  react: { name: 'React', category: 'frontend', color: '#61DAFB' },
  nextjs: { name: 'Next.js', category: 'frontend', color: '#000000' },
  flutter: { name: 'Flutter', category: 'mobile', color: '#02569B' },
  scss: { name: 'SCSS', category: 'frontend', color: '#CF649A' },
  html5: { name: 'HTML5', category: 'frontend', color: '#E34F26' },
  css3: { name: 'CSS3', category: 'frontend', color: '#1572B6' },
  

  nodejs: { name: 'Node.js', category: 'backend', color: '#339933' },
  express: { name: 'Express.js', category: 'backend', color: '#000000' },
  restapi: { name: 'REST API', category: 'backend', color: '#FF6B35' },
  websockets: { name: 'WebSockets', category: 'backend', color: '#010101' },
  

  proxmox: { name: 'Proxmox', category: 'devops', color: '#E57000' },
  docker: { name: 'Docker', category: 'devops', color: '#2496ED' },
  kubernetes: { name: 'Kubernetes', category: 'devops', color: '#326CE5' },
  linux: { name: 'Linux', category: 'devops', color: '#FCC624' },
  nginx: { name: 'Nginx', category: 'devops', color: '#009639' },
  git: { name: 'Git', category: 'tool', color: '#F05032' },
  

  vercel: { name: 'Vercel', category: 'devops', color: '#000000' },
  digitalocean: { name: 'DigitalOcean', category: 'devops', color: '#0080FF' },
  

  postgresql: { name: 'PostgreSQL', category: 'database', color: '#336791' },
  mongodb: { name: 'MongoDB', category: 'database', color: '#47A248' },
  redis: { name: 'Redis', category: 'database', color: '#DC382D' },
  

  vscode: { name: 'VS Code', category: 'tool', color: '#007ACC' },
  figma: { name: 'Figma', category: 'tool', color: '#F24E1E' },
  postman: { name: 'Postman', category: 'tool', color: '#FF6C37' },
};

export const projects: Project[] = [
  {
    id: 'shackododo',
    titleKey: 'work.projects.shackododo.title',
    descriptionKey: 'work.projects.shackododo.description',
    categories: ['web', 'academic'],
    status: 'completed',
    type: 'academic',
    technologies: [
      technologies.react,
      technologies.go,
    ],
    duration: '48 hours',
    team: 'Hackathon Team',
    role: 'Full-Stack Developer',
    challengeKey: 'work.projects.shackododo.challenge',
    achievementKey: 'work.projects.shackododo.achievement',
    features: [
      'Hackathon project A2025',
      'Rapid prototyping',
      'Team collaboration',
      'Creative problem solving'
    ],
    githubUrl: 'https://github.com/LuluLePerdu/ShackoDodo',
    year: 2025,
    complexity: 'intermediate',
    featured: true
  },
  {
    id: 'robosketch',
    titleKey: 'work.projects.robotDrawing.title',
    descriptionKey: 'work.projects.robotDrawing.description',
    categories: ['mobile', 'academic'],
    status: 'completed',
    type: 'academic',
    technologies: [
      technologies.dart,
      technologies.flutter,
      technologies.python,
      technologies.restapi,
      technologies.linux
    ],
    duration: '4 months',
    team: '4 students',
    role: 'Mobile Developer & Robot Integration',
    challengeKey: 'work.projects.robotDrawing.challenge',
    achievementKey: 'work.projects.robotDrawing.achievement',
    features: [
      'Drawing canvas with touch controls',
      'Vector path optimization',
      'Robot communication protocol',
      'Real-time drawing preview',
      'Multi-platform compatibility'
    ],
    githubUrl: 'https://github.com/LuluLePerdu/RoboSketch',
    year: 2024,
    complexity: 'advanced',
    featured: true
  },
  {
    id: 'mennette',
    titleKey: 'work.projects.mennette.title',
    descriptionKey: 'work.projects.mennette.description',
    categories: ['backend', 'academic'],
    status: 'completed',
    type: 'academic',
    technologies: [
      { name: 'C++', category: 'language', color: '#00599C' },
      technologies.linux,
      technologies.git
    ],
    duration: '3 months',
    team: '2 students',
    role: 'Software Engineer',
    challengeKey: 'work.projects.mennette.challenge',
    achievementKey: 'work.projects.mennette.achievement',
    features: [
      'Session 2 engineering project',
      'Low-level programming',
      'System optimization',
      'Algorithm implementation'
    ],
    githubUrl: 'https://github.com/LuluLePerdu/P11_MENnette',
    year: 2024,
    complexity: 'advanced',
    featured: true
  },
  {
    id: 'portfolio-website',
    titleKey: 'work.projects.portfolio.title',
    descriptionKey: 'work.projects.portfolio.description',
    categories: ['web', 'personal'],
    status: 'completed',
    type: 'personal',
    technologies: [
      technologies.nextjs,
      technologies.typescript,
      technologies.react,
      technologies.scss,
      technologies.vercel
    ],
    duration: '2 months',
    team: 'Solo',
    role: 'Full-Stack Developer & Designer',
    challengeKey: 'work.projects.portfolio.challenge',
    achievementKey: 'work.projects.portfolio.achievement',
    features: [
      'Responsive design system',
      'Dark/Light theme toggle',
      'Internationalization (EN/FR)',
      'Performance optimization',
      'SEO optimization',
      'Accessibility compliance'
    ],
    githubUrl: 'https://github.com/LuluLePerdu/portfolio',
    liveUrl: 'https://ludwig-emmanuel.dev',
    year: 2024,
    complexity: 'intermediate',
    featured: true
  },
  {
    id: 'homelab-infrastructure',
    titleKey: 'work.projects.homelab.title',
    descriptionKey: 'work.projects.homelab.description',
    categories: ['infrastructure', 'personal'],
    status: 'in-progress',
    type: 'personal',
    technologies: [
      technologies.proxmox,
      technologies.linux,
      technologies.docker,
      technologies.kubernetes,
      technologies.nginx,
      technologies.postgresql
    ],
    duration: 'Ongoing',
    team: 'Solo',
    role: 'Infrastructure Engineer',
    challengeKey: 'work.projects.homelab.challenge',
    achievementKey: 'work.projects.homelab.achievement',
    features: [
      'Home server configuration',
      'Container orchestration',
      'Network automation',
      'Monitoring setup',
      'Backup strategies',
      'Self-hosted services'
    ],
    githubUrl: 'https://github.com/LuluLePerdu/Homelab',
    year: 2023,
    complexity: 'advanced',
    featured: true
  },
];

export const getProjectsByCategory = (category: ProjectCategory | 'all'): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.categories.includes(category));
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByType = (type: ProjectType): Project[] => {
  return projects.filter(project => project.type === type);
};
