import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide14_CX_Impact: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-12 bg-black relative overflow-hidden text-center">
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full z-10"
      >
        <motion.div variants={blurIn} custom={0} className="mb-8">
            <span className="inline-block px-4 py-2 bg-red-600 text-black font-black uppercase tracking-widest text-sm rounded-sm">
                Critical Priority
            </span>
        </motion.div>

        <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-7xl md:text-[10rem] text-white leading-[0.85] tracking-tighter mb-12">
            CX IS THE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-red-600">MARKETING.</span>
        </motion.h2>

        <motion.div variants={blurIn} custom={2} className="w-24 h-2 bg-white mx-auto mb-12"></motion.div>

        <motion.p variants={blurIn} custom={3} className="text-2xl md:text-4xl text-gray-200 font-bold leading-relaxed max-w-4xl mx-auto">
            "압도적인 경험 없이는,<br/>
            <span className="text-gray-600">절대로</span> 팬덤을 만들 수 없습니다."
        </motion.p>
        
        <motion.p variants={blurIn} custom={4} className="mt-8 text-gray-500 text-lg">
            우리가 공간과 장비, 소프트웨어에 투자하는 유일한 이유입니다.
        </motion.p>
      </motion.div>
    </div>
  );
};