
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
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.4, 1],
                x: ['-20%', '10%', '-20%'],
                y: ['-10%', '10%', '-10%'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(255,94,0,0.5)_0%,transparent_60%)] blur-[80px]"
        />

        {/* Secondary Neon Source (Deep Blue/Purple) */}
        <motion.div 
            animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [1.2, 0.9, 1.2],
                x: ['10%', '-10%', '10%'],
                y: ['10%', '-20%', '10%'],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[90vw] h-[90vw] bg-[radial-gradient(circle,rgba(60,0,180,0.4)_0%,transparent_60%)] blur-[100px]"
        />
        
        {/* Cinematic Spotlight Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
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
            className="flex items-center justify-center md:justify-start gap-4 mb-8"
        >
            <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={isActive ? { width: '4rem', opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-accent shadow-[0_0_15px_rgba(255,94,0,1)]"
            />
            <span className="text-white/80 text-sm tracking-[0.4em] uppercase font-bold">
                2026 Vision
            </span>
        </motion.div>

        {/* Hero Title - Neon Glow Typography */}
        <div className="font-display font-black text-[15vw] md:text-[11rem] leading-[0.85] tracking-tighter uppercase relative perspective-1000">
            <motion.div variants={blurIn} custom={1} className="text-white drop-shadow-2xl">
                The Next
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
                <motion.div variants={blurIn} custom={2} className="text-white/30">
                    Education
                </motion.div>
                <motion.div 
                    variants={blurIn}
                    custom={3}
                    className="text-white relative"
                >
                    <span className="relative z-10">Shift.</span>
                    {/* Neon Underline */}
                     <motion.div 
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={isActive ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                        className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[6px] bg-accent origin-left rounded-full shadow-[0_0_30px_rgba(255,94,0,0.8)]"
                    />
                </motion.div>
            </div>
        </div>

        {/* Subtitle */}
        <motion.p 
            variants={blurIn} 
            custom={4} 
            className="mt-12 text-xl md:text-3xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto md:mx-0"
        >
            학생이 직접 만들고,<br className="md:hidden"/>
            <span className="text-white font-bold border-b border-accent/50 pb-1">세상에 서비스하는 교육</span>
        </motion.p>

        {/* Presenter Name - Added Here */}
        <motion.div
            variants={blurIn}
            custom={5}
            className="mt-16 flex items-center justify-center md:justify-start gap-4"
        >
             <div className="h-px w-12 bg-gray-700"></div>
             <div className="text-sm text-gray-500 font-bold tracking-[0.2em] uppercase">
                Presenter
             </div>
             <div className="text-xl font-bold text-white tracking-wider font-display">
                채수훈
             </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
