
import React from 'react';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

// Updated Indices for deck (Total 24 Slides)
// 0: Title
// 1: Message
// 2: Status (Dark)
// 3: Problem (Dark)
// 4: Keyword (LIGHT - Accent)  <-- Swapped
// 5: Strategy (LIGHT - White)  <-- Swapped
// 6: VibeIntro
// 7: Detail1
// 8: Detail2
// 9: Expansion
// 10: MarketOpp
// 11: GameChanger
// 12: NewWave
// 13: WeaponOne
// 14: WeaponTwo
// 15: ExecutionBridge
// 16: Design (LIGHT - White)
// 17: Video
// 18: AI
// 19: CX Impact
// 20: CX Viral (Dark)
// 21: Space
// 22: Revenue (LIGHT - Accent)
// 23: Vision

const LIGHT_BG_SECTIONS = [4, 5, 16, 22];

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
