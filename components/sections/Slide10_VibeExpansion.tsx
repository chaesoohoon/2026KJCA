
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { ArrowRight } from 'lucide-react';

export const Slide10_VibeExpansion: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const targets = [
    { label: "For Teens", title: "ENTRANCE", desc: "입시 포트폴리오", highlight: "나만의 앱" },
    { label: "For Youth", title: "BRANDING", desc: "취업 브랜딩", highlight: "인터랙티브 이력서" },
    { label: "For Business", title: "MARKETING", desc: "실전 마케팅", highlight: "매출 연결 기술" },
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % targets.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [isActive, targets.length]);

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-[#080808]">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="w-full h-full flex flex-col"
      >
        <div className="pt-12 md:pt-24 pb-8 border-b border-white/10 flex justify-between items-end shrink-0">
             <div>
                <span className="text-accent font-bold tracking-[0.5em] uppercase text-sm block mb-2">
                    Target Expansion
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
                    ONE SKILL, <span className="text-gray-600">TRIPLE IMPACT.</span>
                </h2>
             </div>
        </div>

        <div className="flex-grow flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
            {targets.map((item, idx) => {
                const isItemActive = idx === activeIndex;
                
                return (
                    <motion.div
                        key={idx}
                        variants={blurIn}
                        custom={idx + 1}
                        className={`flex-1 relative p-6 md:p-12 flex flex-col justify-center transition-colors duration-500 overflow-hidden ${isItemActive ? 'bg-white' : 'bg-transparent'}`}
                        onMouseEnter={() => setActiveIndex(idx)} // Optional: allow manual override
                    >
                        <div className={`absolute top-0 right-0 p-8 transition-opacity duration-500 ${isItemActive ? 'opacity-100' : 'opacity-0'}`}>
                            <ArrowRight size={40} className="text-black -rotate-45" />
                        </div>

                        <div className="mb-auto">
                            <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${isItemActive ? 'text-black/60' : 'text-gray-500'}`}>
                                {item.label}
                            </span>
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className={`text-[12vw] md:text-[5vw] font-display font-black transition-colors leading-[0.9] tracking-tighter mb-4 ${isItemActive ? 'text-black' : 'text-white'}`}>
                                {item.title}
                            </h3>
                            <div className="flex flex-col gap-1">
                                 <p className={`text-2xl md:text-3xl font-bold transition-colors ${isItemActive ? 'text-accent' : 'text-accent'}`}>
                                    {item.desc}
                                 </p>
                                 <p className={`text-sm md:text-lg transition-colors ${isItemActive ? 'text-black/60' : 'text-gray-500'}`}>
                                    : {item.highlight}
                                 </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </motion.div>
    </div>
  );
};
