import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`min-h-screen flex bg-gradient-to-br from-sage-50 to-sage-100 ${className}`}>
      {children}
    </div>
  );
};

export default MainLayout;
