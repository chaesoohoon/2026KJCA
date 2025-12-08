
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { PenTool, Globe, Server } from 'lucide-react';

export const Slide02_Message: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-black relative">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="text-center w-full max-w-7xl"
      >
        <motion.p variants={blurIn} custom={0} className="text-gray-600 font-bold tracking-[0.5em] uppercase mb-16 md:mb-24">
            Core Philosophy
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Pillar 1 */}
            <motion.div 
                variants={blurIn} 
                custom={1} 
                className="flex flex-col items-center"
                onMouseEnter={() => setActiveIndex(0)}
            >
                {/* Fixed size container to prevent layout shift */}
                <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${activeIndex === 0 ? 'bg-[#0a0a0a] text-white border-white/30' : 'bg-[#0a0a0a] border-white/10 text-gray-400'}`}>
                        <PenTool size={32} />
                    </div>
                </div>
                <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4 uppercase tracking-tight">
                    Creates
                </h2>
                <div className={`h-1 w-8 mb-4 transition-colors duration-300 ${activeIndex === 0 ? 'bg-white' : 'bg-gray-800'}`}></div>
                <p className={`font-medium transition-colors ${activeIndex === 0 ? 'text-gray-300' : 'text-gray-500'}`}>학생이 직접 창작하고</p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
                variants={blurIn} 
                custom={2} 
                className="flex flex-col items-center"
                onMouseEnter={() => setActiveIndex(1)}
            >
                <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${activeIndex === 1 ? 'bg-accent/10 text-accent border-accent/50' : 'bg-accent/5 border-accent/20 text-accent'}`}>
                        <Globe size={32} />
                    </div>
                </div>
                <h2 className="font-display font-black text-5xl md:text-6xl text-accent mb-4 uppercase tracking-tight">
                    Publishes
                </h2>
                <div className={`h-1 w-8 mb-4 transition-colors duration-300 ${activeIndex === 1 ? 'bg-accent' : 'bg-accent/30'}`}></div>
                <p className={`font-medium transition-colors ${activeIndex === 1 ? 'text-gray-300' : 'text-gray-500'}`}>세상에 직접 공개하며</p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
                variants={blurIn} 
                custom={3} 
                className="flex flex-col items-center"
                onMouseEnter={() => setActiveIndex(2)}
            >
                 <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${activeIndex === 2 ? 'bg-[#0a0a0a] text-white border-white/30' : 'bg-[#0a0a0a] border-white/10 text-gray-400'}`}>
                        <Server size={32} />
                    </div>
                 </div>
                <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4 uppercase tracking-tight">
                    Services
                </h2>
                <div className={`h-1 w-8 mb-4 transition-colors duration-300 ${activeIndex === 2 ? 'bg-white' : 'bg-gray-800'}`}></div>
                <p className={`font-medium transition-colors ${activeIndex === 2 ? 'text-gray-300' : 'text-gray-500'}`}>실제 서비스로 운영한다</p>
            </motion.div>
        </div>

        <motion.div variants={blurIn} custom={4} className="mt-24">
            <div className="h-px w-24 bg-white/10 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
                "교육의 끝은 자격증 취득이 아니라,<br/> 
                <span className="text-white font-bold">내 이름으로 된 결과물</span>을 세상에 내놓는 것입니다."
            </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
