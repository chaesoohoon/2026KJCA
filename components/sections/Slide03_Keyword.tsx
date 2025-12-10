import React from 'react';
import { motion } from 'framer-motion';
import { scaleUp } from '../../utils/animations';

export const Slide03_Keyword: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-accent relative overflow-hidden">
      
      {/* Background Animation Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft White Glow */}
        <motion.div 
            animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-white rounded-full blur-[100px]"
        />
        
        {/* Warm Yellow/Orange Pulse */}
        <motion.div 
             animate={{ 
                y: [0, 40, 0],
                x: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[30%] -right-[20%] w-[70vw] h-[70vw] bg-yellow-500 rounded-full blur-[120px]"
        />

         {/* Deep Red/Orange Depth */}
         <motion.div 
             animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[50vw] bg-red-600 rounded-full blur-[100px]"
        />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
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
            <h1 className="font-display font-black text-[18vw] leading-[0.85] tracking-tighter text-black drop-shadow-sm mix-blend-multiply opacity-90">
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
            className="mt-12 text-black/80 font-medium text-lg md:text-2xl max-w-2xl mx-auto"
        >
            "코딩 없이, 감각으로 완성하는<br/>새로운 창작의 시대"
        </motion.p>
      </motion.div>
    </div>
  );
};