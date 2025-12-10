
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide11_GameChanger: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-12 bg-black text-center relative overflow-hidden">
      {/* Background Pulse (Heartbeat) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <motion.div 
            animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.05, 0.1, 0.05] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[70vw] h-[70vw] bg-accent rounded-full blur-[150px]"
            style={{ willChange: 'transform, opacity' }}
         ></motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-7xl w-full"
      >
        <motion.div variants={blurIn} custom={0} className="mb-12">
            <span className="px-5 py-2 border border-white/20 rounded-full text-white font-bold tracking-[0.3em] uppercase text-xs">
                Gwangju First
            </span>
        </motion.div>

        <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-[10rem] text-white leading-[0.85] tracking-tighter mb-12">
            GAME<br/>
            <span className="text-accent">CHANGER.</span>
        </motion.h2>

        <motion.div variants={blurIn} custom={2} className="h-1 w-24 bg-white/20 mx-auto mb-12"></motion.div>

        <motion.p variants={blurIn} custom={3} className="text-xl md:text-4xl text-gray-300 font-bold max-w-5xl mx-auto leading-tight">
            우리는 '바이브코딩'을 통해<br/>
            아이들의 상상력을 <span className="text-white border-b-4 border-accent">기술로 완성시키는 시대</span>를 엽니다.
        </motion.p>
      </motion.div>
    </div>
  );
};
