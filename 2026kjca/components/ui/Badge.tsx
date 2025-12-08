import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-500/10 text-brand-500 border border-brand-500/20 ${className}`}>
      {children}
    </span>
  );
};