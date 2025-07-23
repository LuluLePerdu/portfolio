import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Ludwig-E. Dufour",
  subtitle = "Développeur • Explorateur • Créateur",
  className = '',
}) => {
  return (
    <header className={`text-center py-8 ${className}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-2 tracking-tight">
        {title}
      </h1>
      <p className="text-xl text-sage-600 font-light">
        {subtitle}
      </p>
    </header>
  );
};

export default Header;
