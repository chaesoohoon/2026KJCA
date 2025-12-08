import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide11_Design: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-white text-black">
      <div className="w-full md:w-1/2 h-full p-12 md:p-24 flex flex-col justify-center z-10">
        <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
        >
            <motion.h2 variants={blurIn} custom={0} className="font-display font-black text-7xl md:text-9xl tracking-tighter mb-8">
                REAL<br/>OBJECTS
            </motion.h2>
            <motion.p variants={blurIn} custom={1} className="text-2xl font-bold text-gray-800 mb-8">
                시각디자인 포트폴리오 강화
            </motion.p>
            <motion.div variants={blurIn} custom={2} className="space-y-4 text-lg font-medium text-gray-600">
                <p>— 실물 포트폴리오 북 제작</p>
                <p>— 학원 내 액자 전시형 작품</p>
                <p>— 브랜딩 굿즈 패키징</p>
            </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 h-full bg-[#f0f0f0] relative flex items-center justify-center overflow-hidden">
         {/* Visual Element: Portfolio Stack */}
         <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative w-80 h-[500px]"
         >
            {/* Book 3 (Bottom) */}
            <div className="absolute top-12 left-12 w-full h-full bg-gray-900 shadow-2xl rounded-sm flex flex-col items-center justify-center border-l-4 border-gray-800 transform rotate-6">
                 <div className="text-gray-700 font-display font-bold text-4xl opacity-20">PROJECT</div>
            </div>
            
            {/* Book 2 (Middle) */}
            <div className="absolute top-6 left-6 w-full h-full bg-gray-200 shadow-xl rounded-sm flex flex-col items-center justify-center border-l-4 border-gray-300 transform rotate-3">
                 <div className="w-40 h-40 bg-gray-300 rounded-full mb-4 opacity-50"></div>
                 <div className="w-32 h-4 bg-gray-300 rounded opacity-50"></div>
            </div>

            {/* Book 1 (Top) */}
            <div className="absolute top-0 left-0 w-full h-full bg-white shadow-2xl rounded-sm flex flex-col p-8 border border-gray-100">
                <div className="flex-grow flex items-center justify-center">
                    <div className="w-full aspect-[3/4] border-2 border-black p-4 flex flex-col justify-between">
                        <div className="font-display font-black text-5xl">MY<br/>PORT<br/>FOLIO</div>
                        <div className="text-right font-bold text-sm">2026 COLLECTION</div>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-end">
                    <div className="text-xs font-bold text-gray-400">DESIGN / BRANDING</div>
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
            </div>
         </motion.div>
      </div>
    </div>
  );
};