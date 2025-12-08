
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide1_Intro: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-black">
      
      {/* 1. Background Ambient Animation (Calm & Breathing) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Glow */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-accent/10 rounded-full blur-[120px]"
        />
        {/* Bottom Left Glow */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px]"
        />
      </div>

      {/* 2. Main Content */}
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-7xl w-full mx-auto"
      >
        {/* Top Tagline */}
        <motion.div 
            variants={blurIn} 
            custom={0} 
            className="flex items-center gap-4 mb-8 md:mb-12 pl-2"
        >
            <span className="w-12 h-[1px] bg-accent"></span>
            <span className="text-gray-400 text-xs md:text-sm tracking-[0.3em] uppercase">
                2026 The International Vocational Training School
            </span>
        </motion.div>

        {/* Hero Title */}
        <div className="relative font-display font-black text-[13vw] md:text-[9rem] leading-[0.85] tracking-tighter uppercase mix-blend-screen">
            <motion.div variants={blurIn} custom={1} className="text-white">
                Student
            </motion.div>
            
            <motion.div variants={blurIn} custom={2} className="flex items-center gap-4 md:gap-8">
                <span className="text-accent">Creates.</span>
                <motion.div 
                    initial={{ width: 0 }}
                    animate={isActive ? { width: 'auto' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                    className="h-[0.1em] bg-white/20 flex-grow hidden md:block"
                ></motion.div>
            </motion.div>
            
            <motion.div variants={blurIn} custom={3} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                Services.
            </motion.div>
        </div>

        {/* Subtitle / Philosophy */}
        <motion.div 
            variants={blurIn} 
            custom={4} 
            className="mt-12 md:mt-16 pl-2 max-w-3xl border-l-2 border-accent/30 pl-8"
        >
            <p className="text-xl md:text-3xl font-medium text-gray-300 leading-relaxed">
               "학생이 직접 만들고, 직접 공개하고,<br/> 
               <span className="text-white font-bold">실제로 서비스하는 교육</span>"
            </p>
        </motion.div>
      </motion.div>

      {/* 3. Bottom Marquee (Slow Moving Text) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none"
      >
        <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[10vw] font-display font-black text-white/5 leading-none tracking-tight flex gap-8"
        >
            <span>DESIGN VIDEO AI VIBE-CODING 2026 VISION</span>
            <span>DESIGN VIDEO AI VIBE-CODING 2026 VISION</span>
        </motion.div>
      </motion.div>

    </div>
  );
};
