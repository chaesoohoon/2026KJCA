
import React from 'react';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

// Updated Indices for deck (Total 25 Slides now)
// 0: Title
// 1: Message
// 2: Hidden Achievement (Dark) <-- Added
// 3: Status (Dark)
// 4: Problem (Dark)
// 5: Keyword (LIGHT - Accent)  <-- Shifted +1
// 6: Strategy (LIGHT - White)  <-- Shifted +1
// ...
// 17: Design (LIGHT - White) <-- Shifted +1
// ...
// 23: Revenue (LIGHT - Accent) <-- Shifted +1

const LIGHT_BG_SECTIONS = [5, 6, 17, 23];

export const Navigation: React.FC<NavigationProps> = ({ currentSection, totalSections }) => {
  const progress = ((currentSection + 1) / totalSections) * 100;
  const isLightBg = LIGHT_BG_SECTIONS.includes(currentSection);

  // Use simple black or white/gray text depending on background brightness
  const textColor = isLightBg ? 'text-black' : 'text-white';
  const labelColor = isLightBg ? 'text-black/60' : 'text-gray-500';
  const progressBg = isLightBg ? 'bg-black/10' : 'bg-white/10';
  const progressBarColor = isLightBg ? 'bg-black' : 'bg-accent';

  return (
    <>
      {/* 1. Bottom Progress Line */}
      <div className={`fixed bottom-0 left-0 w-full h-1 ${progressBg} z-50 transition-colors duration-500`}>
        <div 
          className={`h-full ${progressBarColor} transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 2. Numeric Counter (Nike Style) - Achromatic */}
      <div className={`fixed bottom-8 right-8 z-50 flex items-end gap-2 pointer-events-none transition-colors duration-500 ${textColor}`}>
        <span className="font-display font-bold text-6xl leading-none tracking-tighter">
          {String(currentSection + 1).padStart(2, '0')}
        </span>
        <span className={`font-display font-medium text-xl mb-1 transition-colors duration-500 ${labelColor}`}>
          / {totalSections}
        </span>
      </div>
    </>
  );
};
