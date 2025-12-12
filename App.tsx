
import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';

// Import all slides
import { Slide01_Title } from './components/sections/Slide01_Title';
import { Slide02_Message } from './components/sections/Slide02_Message';
import { Slide03_Keyword } from './components/sections/Slide03_Keyword';
import { Slide03_5_HiddenAchievements } from './components/sections/Slide03_5_HiddenAchievements';
import { Slide04_Status } from './components/sections/Slide04_Status';
import { Slide05_Problem } from './components/sections/Slide05_Problem';
import { Slide06_Strategy } from './components/sections/Slide06_Strategy';
import { Slide07_VibeIntro } from './components/sections/Slide07_VibeIntro';
import { Slide08_VibeDetail1 } from './components/sections/Slide08_VibeDetail1';
import { Slide09_VibeDetail2 } from './components/sections/Slide09_VibeDetail2';
import { Slide10_VibeExpansion } from './components/sections/Slide10_VibeExpansion';
import { Slide10_MarketOpportunity } from './components/sections/Slide10_MarketOpportunity';
import { Slide11_GameChanger } from './components/sections/Slide11_GameChanger';
import { Slide12_NewWave } from './components/sections/Slide12_NewWave';
import { Slide12_WeaponOne } from './components/sections/Slide12_WeaponOne';
import { Slide13_WeaponTwo } from './components/sections/Slide13_WeaponTwo';
import { Slide13_ExecutionBridge } from './components/sections/Slide13_ExecutionBridge';
import { Slide11_Design } from './components/sections/Slide11_Design';
import { Slide12_Video } from './components/sections/Slide12_Video';
import { Slide13_AI } from './components/sections/Slide13_AI';
import { Slide14_CX_Impact } from './components/sections/Slide14_CX_Impact';
import { Slide14_CX_Viral } from './components/sections/Slide14_CX_Viral';
import { Slide14_Space } from './components/sections/Slide14_Space';
import { Slide15_Revenue } from './components/sections/Slide15_Revenue';
import { Slide16_Vision } from './components/sections/Slide16_Vision';
import { Slide17_Gift } from './components/sections/Slide17_Gift';
import { Slide18_ThankYou } from './components/sections/Slide18_ThankYou';

const SECTIONS = [
  Slide01_Title,
  Slide02_Message,
  Slide03_5_HiddenAchievements, // Humor Slide inserted here
  Slide04_Status,       // Status (2025 Retrospective)
  Slide05_Problem,      // Problem
  Slide03_Keyword,      // Reveal VIBE CODING (Keyword) - Reveal first
  Slide06_Strategy,     // Strategy Formula (Solution) - Explain how
  Slide07_VibeIntro,
  Slide08_VibeDetail1,
  Slide09_VibeDetail2,
  Slide10_VibeExpansion,
  Slide10_MarketOpportunity,
  Slide11_GameChanger,
  Slide12_NewWave,
  Slide12_WeaponOne,
  Slide13_WeaponTwo,
  Slide13_ExecutionBridge,
  Slide11_Design,
  Slide12_Video,
  Slide13_AI,
  Slide14_CX_Impact,
  Slide14_CX_Viral,     // New CX Viral Loop
  Slide14_Space,
  Slide15_Revenue,
  Slide16_Vision,
  Slide17_Gift,         // Gift Slide
  Slide18_ThankYou,     // Final Emotional Closing
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const sectionHeight = window.innerHeight;
      // Use a small buffer to prevent flickering
      const index = Math.round(scrollPosition / sectionHeight);
      setCurrentSection(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    
    // Boundary checks
    if (index < 0 || index >= SECTIONS.length) return;

    container.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Keyboard Navigation (Spacebar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault(); // Prevent default scroll jump
        scrollToSection(currentSection + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  return (
    <div className="bg-black text-white font-sans overflow-hidden h-screen w-screen relative selection:bg-accent selection:text-white">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <Navigation 
          currentSection={currentSection} 
          totalSections={SECTIONS.length} 
          onNavigate={scrollToSection} 
      />

      <div 
        ref={containerRef} 
        className="snap-container h-full w-full relative z-10"
      >
        {SECTIONS.map((SectionComponent, index) => (
          <section key={index} className="snap-section h-full w-full relative flex items-center justify-center overflow-hidden">
            {/* @ts-ignore - Dynamic component prop passing */}
            <SectionComponent 
                isActive={currentSection === index} 
            />
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
