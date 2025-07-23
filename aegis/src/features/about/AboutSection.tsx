import React from 'react';
import { Card } from '../../components/ui';

const AboutSection: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-forest-800 mb-4">
          À propos de moi
        </h2>
        <p className="text-xl text-sage-600 leading-relaxed">
            Section en développement...
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card variant="sage" className="animate-slide-up">
          <h3 className="text-2xl font-semibold text-forest-800 mb-4">
            Formation
          </h3>
          <p className="text-sage-700 mb-4">
            <strong>Génie Informatique</strong><br/>
            Section en développement...
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-bronze-400 text-white rounded-full text-sm mono">Algorithmes</span>
            <span className="px-3 py-1 bg-bronze-400 text-white rounded-full text-sm mono">Systèmes</span>
            <span className="px-3 py-1 bg-bronze-400 text-white rounded-full text-sm mono">IA</span>
          </div>
        </Card>

        <Card variant="sage" className="animate-slide-up">
          <h3 className="text-2xl font-semibold text-forest-800 mb-4">
            Section en développement...
          </h3>
          <p className="text-sage-700 italic">
            "Joyeux matin!"
          </p>
          <p className="text-sage-700 mt-4">
            Section en développement...
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
