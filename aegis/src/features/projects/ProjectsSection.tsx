import React from 'react';
import { Card } from '../../components/ui';
import type { Project } from '../../types';

const ProjectsSection: React.FC = () => {
  const mainProject: Project = {
    id: 'aegis',
    title: 'AEGIS Portfolio',
    description: 'Section en développement...',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    featured: true
  };

  const otherProjects: Project[] = [
    {
      id: 'travellog',
      title: 'TravelLog',
      description: 'Section en développement...',
      technologies: []
    },
    {
      id: 'dev-cli',
      title: 'Dev CLI',
      description: 'Section en développement...',
      technologies: ['Docker', 'CI/CD']
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-forest-800 mb-4">
          Mes Projets
        </h2>
        <p className="text-xl text-sage-600">
          Découvrez les projets sur lesquels j'ai travaillé, chacun développé avec passion et précision.
        </p>
      </div>

      <div className="grid gap-8">
        <Card variant="marble" className="tech-glow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-semibold text-forest-800">{mainProject.title}</h3>
            <span className="px-3 py-1 bg-forest-600 text-white rounded-full text-sm">En cours</span>
          </div>
          <p className="text-sage-700 mb-6">
            {mainProject.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {mainProject.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-sage-100 text-sage-800 rounded-lg mono text-sm">
                {tech}
              </span>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id} variant="sage">
              <h4 className="text-xl font-semibold text-forest-800 mb-3">
                {project.title}
              </h4>
              <p className="text-sage-700 text-sm mb-4">
                {project.description}
              </p>
              <div className="mono text-xs text-bronze-600">
                {project.technologies.join(' • ')}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
