
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide01_Title: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-black text-white">
      
      {/* 1. Background Neon Atmosphere (Looping Lights) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Main Neon Source (Tangerine) - Increased Intensity */}
        <motion.div 
            animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
                x: ['-30%', '20%', '-30%'],
                y: ['-20%', '20%', '-20%'],
                rotate: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[90vw] h-[90vw] bg-[radial-gradient(circle,rgba(255,94,0,0.6)_0%,transparent_60%)] blur-[100px]"
        />

        {/* Secondary Neon Source (Deep Blue/Purple) - Increased Contrast */}
        <motion.div 
            animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [1.2, 0.8, 1.2],
                x: ['20%', '-20%', '20%'],
                y: ['10%', '-30%', '10%'],
                rotate: [0, -20, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[100vw] h-[100vw] bg-[radial-gradient(circle,rgba(60,0,180,0.5)_0%,transparent_60%)] blur-[120px]"
        />
        
        {/* Moving Light Beam - Increased Visibility */}
        <motion.div
            animate={{
                rotate: [0, 360],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw]"
            style={{
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,94,0,0.15) 15%, transparent 30%)',
                filter: 'blur(20px)'
            }}
        />

        {/* Noise Texture for Film Grain feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* 2. Main Content */}
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-7xl w-full mx-auto relative text-center md:text-left"
      >
        {/* Top Tagline */}
        <motion.div 
            variants={blurIn} 
            custom={0} 
            className="flex items-center justify-center md:justify-start gap-4 mb-8 md:mb-12"
        >
            <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={isActive ? { width: '4rem', opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-accent shadow-[0_0_20px_rgba(255,94,0,1)]"
            />
            <span className="text-white/90 text-sm tracking-[0.5em] uppercase font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                2026 Vision
            </span>
        </motion.div>

        {/* Hero Title - Neon Glow Typography */}
        <div className="font-display font-black text-[15vw] md:text-[11rem] leading-[0.85] tracking-tighter uppercase relative perspective-1000">
            <motion.div variants={blurIn} custom={1} className="text-white relative z-10 drop-shadow-2xl">
                The Next
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 relative z-10">
                <motion.div variants={blurIn} custom={2} className="text-white/40">
                    Education
                </motion.div>
                <motion.div 
                    variants={blurIn}
                    custom={3}
                    className="text-white relative"
                >
                    <span className="relative z-10">Shift.</span>
                    {/* Neon Underline - Brighter */}
                     <motion.div 
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={isActive ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                        className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[8px] bg-accent origin-left rounded-full blur-[4px] shadow-[0_0_20px_rgba(255,94,0,0.8)]"
                    />
                    <motion.div 
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={isActive ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                        className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[3px] bg-white origin-left rounded-full"
                    />
                </motion.div>
            </div>
        </div>

        {/* Subtitle */}
        <motion.p 
            variants={blurIn} 
            custom={4} 
            className="mt-12 text-xl md:text-3xl text-gray-200 font-medium leading-relaxed max-w-3xl mx-auto md:mx-0 drop-shadow-lg"
        >
            학생이 직접 만들고,<br className="md:hidden"/>
            <span className="text-white font-bold border-b-2 border-accent/70 pb-1 shadow-[0_10px_30px_-10px_rgba(255,94,0,0.6)]">세상에 서비스하는 교육</span>
        </motion.p>

      </motion.div>
    </div>
  );
};
