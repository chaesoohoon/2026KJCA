import React from 'react';
import { motion } from 'framer-motion';
import { scaleUp } from '../../utils/animations';

export const Slide03_Keyword: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-accent relative overflow-hidden">
      {/* Subtle Texture Pattern instead of heavy noise */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="text-center z-10 w-full px-4"
      >
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-black font-bold tracking-[0.5em] uppercase mb-6 md:mb-12 text-sm md:text-xl"
        >
            The Solution
        </motion.p>

        <motion.div variants={scaleUp} className="relative inline-block">
            <h1 className="font-display font-black text-[18vw] leading-[0.85] tracking-tighter text-black drop-shadow-sm">
                VIBE<br/>CODING
            </h1>
            {/* Decoration Line */}
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={isActive ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
                className="absolute -bottom-4 md:-bottom-8 left-0 w-full h-2 md:h-4 bg-black origin-left"
            ></motion.div>
        </motion.div>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 text-black/70 font-medium text-lg md:text-2xl max-w-2xl mx-auto"
        >
            "코딩 없이, 감각으로 완성하는<br/>새로운 창작의 시대"
        </motion.p>
      </motion.div>
    </div>
  );
};