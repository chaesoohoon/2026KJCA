import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide15_WeaponConclusion: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-black text-center relative">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-6xl w-full z-10"
      >
        <motion.p variants={blurIn} custom={0} className="text-gray-500 font-bold tracking-[0.5em] uppercase text-xs mb-16">
            Manifesto
        </motion.p>

        <motion.h1 variants={blurIn} custom={1} className="font-display font-black text-4xl md:text-7xl text-white leading-tight tracking-tight mb-16 break-keep">
            우리는 <span className="text-gray-600">도구</span>를 가르치는 곳이 아니라,<br/>
            상상을 <span className="text-accent">현실로 만드는 경험</span>을<br/>
            제공하는 곳입니다.
        </motion.h1>

        <motion.div variants={blurIn} custom={2} className="max-w-2xl mx-auto">
             <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
             <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                "Tool is just a tool.<br/>
                Experience is everything."
             </p>
        </motion.div>
      </motion.div>
    </div>
  );
};