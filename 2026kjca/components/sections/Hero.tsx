import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Flame } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-brand-500"></span>
            <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">2026 Vision</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-8">
          DESIGN<br/>
          <span className="text-tangerine-gradient">VIDEO & AI</span><br/>
          EDUCATION
        </h1>

        {/* Subtitle / Value Prop */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12">
            학생이 직접 만들고, 공개하고, 서비스하는<br/>
            <span className="text-white font-semibold">실전형 교육의 시작.</span>
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium">
            <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 text-white">
                <Flame className="w-5 h-5 text-brand-500 fill-brand-500" />
                <span>바이브코딩 (Vibe Coding)</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-full text-gray-300">
                AI 실무 포트폴리오
            </div>
            <div className="glass-panel px-6 py-3 rounded-full text-gray-300">
                수익화 중심 교육
            </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-12 right-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-5 h-5 text-brand-500" />
      </motion.div>
    </div>
  );
};