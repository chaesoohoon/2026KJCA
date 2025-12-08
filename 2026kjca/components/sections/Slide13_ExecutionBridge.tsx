
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide13_ExecutionBridge: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-black text-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
      
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-7xl w-full"
      >
        <motion.div variants={blurIn} custom={0} className="mb-12">
            <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest">
                Phase 02 : Execution
            </span>
        </motion.div>

        <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-[8rem] text-white leading-[0.85] tracking-tighter mb-8">
            PROJECT<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">REBOOT.</span>
        </motion.h2>

        <motion.div variants={blurIn} custom={2} className="h-px w-32 bg-white/20 mx-auto mb-12"></motion.div>

        <motion.p variants={blurIn} custom={3} className="text-xl md:text-3xl text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
            바이브코딩이 '무기'라면,<br/>
            디자인과 영상은 <span className="text-white font-bold border-b border-accent">흔들리지 않는 기반</span>입니다.
        </motion.p>
        
        <motion.p variants={blurIn} custom={4} className="mt-8 text-gray-500 text-lg">
            기존 과정 또한 '하이퍼 리얼리즘(초실전)'으로<br/>
            완벽하게 진화합니다.
        </motion.p>
      </motion.div>
    </div>
  );
};
