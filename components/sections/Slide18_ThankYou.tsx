
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Slide18_ThankYou: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  // Generates stars for background
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  }));

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-[#050505] text-center relative overflow-hidden font-sans">
      
      {/* 1. Deep Space Background Animation (Kept as requested) */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Subtle Aurora Gradient */}
         <motion.div 
            animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(50,50,80,0.3)_0%,_transparent_60%)] blur-[100px]"
         />
         
         {/* Twinkling Stars */}
         {stars.map((star, i) => (
           <motion.div
             key={i}
             className="absolute bg-white rounded-full"
             style={{ 
               left: `${star.x}%`, 
               top: `${star.y}%`, 
               width: star.size, 
               height: star.size 
             }}
             animate={{ 
               opacity: [0, 0.5, 0],
               scale: [0.5, 1, 0.5]
             }}
             transition={{ 
               duration: star.duration, 
               repeat: Infinity, 
               ease: "easeInOut",
               delay: star.delay 
             }}
           />
         ))}
      </div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-5xl w-full flex flex-col items-center relative"
      >
        
        {/* Top Icon */}
        <motion.div variants={textVariant} custom={0} className="mb-12">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(255,94,0,0.2)]">
                <Heart className="w-6 h-6 text-accent fill-accent" />
            </div>
        </motion.div>

        {/* Main Emotional Copy - Sincere & Solemn */}
        <div className="flex flex-col gap-3 mb-16">
            <motion.h2 
                variants={textVariant} 
                custom={1}
                className="text-3xl md:text-5xl font-bold text-gray-500 tracking-tight leading-tight"
            >
                서툴렀던 저의 2025년을
            </motion.h2>
            <motion.h2 
                variants={textVariant} 
                custom={2}
                className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
            >
                묵묵히 믿어주셔서
            </motion.h2>
            <motion.h2 
                variants={textVariant} 
                custom={3}
                className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
            >
                진심으로 감사드립니다.
            </motion.h2>
        </div>

        {/* Supporting Text */}
        <motion.p 
            variants={textVariant} 
            custom={4}
            className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl leading-relaxed mb-24"
        >
            때로는 부족하고 더딘 모습이었음에도<br/>
            기다려주시고 이끌어주신 따뜻한 배려 덕분에 여기까지 올 수 있었습니다.<br/><br/>
            보내주신 그 깊은 마음 잊지 않고,<br/>
            <span className="text-white font-bold">2026년에는 더 단단하고 자랑스러운 모습으로 보답하겠습니다.</span>
        </motion.p>

        {/* Final Big Typography */}
        <motion.div variants={textVariant} custom={5} className="relative">
            <h1 className="font-display font-black text-[15vw] md:text-[13rem] leading-none text-white opacity-10 select-none tracking-tighter mix-blend-overlay">
                RESPECT
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <p className="text-accent font-bold tracking-[0.5em] uppercase text-sm md:text-base">
                    Sincerely Yours
                </p>
            </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 0.5 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 1 }} 
            className="absolute bottom-4 md:-bottom-8 text-center"
        >
             <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-medium">
                2026 The International Vocational Training School
             </p>
        </motion.div>

      </motion.div>
    </div>
  );
};
