import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide16_Vision: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 bg-black text-center relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
       
       {/* Massive Background Text */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
            <span className="font-display font-black text-[20vw] leading-none text-white whitespace-nowrap">THE BRAND</span>
       </div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-7xl w-full flex flex-col items-center"
      >
        <motion.p variants={blurIn} custom={0} className="text-gray-500 font-bold uppercase tracking-[0.5em] mb-16 md:mb-24">
            Final Vision
        </motion.p>
        
        <div className="flex flex-col items-center">
            {/* Line 1 */}
            <motion.div variants={blurIn} custom={1} className="mb-4">
                <span className="text-3xl md:text-5xl font-bold text-gray-300 tracking-tight">
                    우리가 좋은 환경과
                </span>
            </motion.div>

            {/* Line 2 - Hero Text */}
            <motion.div variants={blurIn} custom={2} className="relative mb-12">
                <span className="font-display font-black text-6xl md:text-[9rem] text-accent leading-[0.9] uppercase italic tracking-tighter block">
                    압도적인 경험을
                </span>
                <span className="font-display font-black text-6xl md:text-[9rem] text-white leading-[0.9] uppercase italic tracking-tighter block">
                    만들면,
                </span>
            </motion.div>

            {/* Line 3 */}
            <motion.div variants={blurIn} custom={3} className="mb-12">
                <span className="text-4xl md:text-6xl font-bold text-white leading-tight">
                     그 자체가 <span className="border-b-4 border-accent pb-1 inline-block">브랜드</span>가 됩니다.
                </span>
            </motion.div>

            {/* Line 4 - Subtext */}
            <motion.p variants={blurIn} custom={4} className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl leading-relaxed">
                매출은 그 강력한 브랜드가 만들어내는<br className="hidden md:block"/>
                자연스러운 결과일 뿐입니다.
            </motion.p>
        </div>

        <motion.div variants={blurIn} custom={5} className="mt-24">
             <button className="group relative px-12 py-4 overflow-hidden rounded-full bg-white text-black transition-all hover:bg-accent hover:text-white">
                <span className="relative z-10 text-sm font-black uppercase tracking-widest">Presentation End</span>
             </button>
             <p className="mt-6 text-[10px] text-gray-700 uppercase tracking-[0.2em]">
                2026 THE International Vocational Training School
             </p>
        </motion.div>
      </motion.div>
    </div>
  );
};