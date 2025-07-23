import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'forest' | 'tech' | 'marble' | 'sage';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const baseClasses = 'rounded-xl p-6 shadow-sm';
  
  const variantClasses = {
    default: 'bg-white border border-stone-200',
    forest: 'forest-card',
    tech: 'tech-glow bg-white',
    marble: 'bg-stone-50 border border-stone-200',
    sage: 'bg-sage-50 border border-sage-200',
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
