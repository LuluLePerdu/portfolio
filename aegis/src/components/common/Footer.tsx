import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  className = '',
}) => {
  return (
    <footer className={`text-center py-8 border-t border-stone-200 ${className}`}>
      <p className="text-sage-600 text-sm">
        © 2025 Joyeux Matin! Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
