import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-white/[0.03] backdrop-blur-xl 
      border border-white/[0.08]
      rounded-3xl p-8
      transition-all duration-300
      ${hover ? 'hover:bg-white/[0.06] hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-1' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};