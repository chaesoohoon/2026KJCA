
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide06_Strategy: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 bg-white text-black">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full text-center"
      >
        <motion.p variants={blurIn} custom={0} className="font-bold tracking-widest uppercase mb-16 text-gray-400">
            The 2026 Formula
        </motion.p>

        {/* The Ingredients */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 font-display font-black text-5xl md:text-8xl uppercase tracking-tighter text-gray-300">
            <motion.span variants={blurIn} custom={1} className="text-black">Design</motion.span>
            
            {/* Gothic Plus Sign */}
            <motion.span variants={blurIn} custom={2} className="font-sans font-bold text-6xl text-accent">+</motion.span>
            
            <motion.span variants={blurIn} custom={3} className="text-black">Video</motion.span>
            
            {/* Gothic Plus Sign */}
            <motion.span variants={blurIn} custom={4} className="font-sans font-bold text-6xl text-accent">+</motion.span>
            
            <motion.span variants={blurIn} custom={5} className="text-black">AI</motion.span>
        </div>

        {/* The Transition */}
        <motion.div variants={blurIn} custom={6} className="my-8 md:my-12 flex justify-center text-accent">
            <span className="font-sans font-bold text-7xl">+</span>
        </motion.div>

        {/* The Result */}
        <motion.div 
            variants={blurIn} 
            custom={7} 
            className="relative inline-block"
        >
            <div className="absolute -inset-8 bg-accent/5 rounded-full blur-xl"></div>
            <h2 className="relative font-display font-black text-6xl md:text-[10rem] leading-none text-accent uppercase tracking-tighter drop-shadow-sm">
                Vibe Coding
            </h2>
        </motion.div>

        <motion.p variants={blurIn} custom={8} className="mt-8 text-lg font-medium text-gray-400 opacity-40">
            융합을 통해 탄생한 새로운 창작 솔루션
        </motion.p>
      </motion.div>
    </div>
  );
};
