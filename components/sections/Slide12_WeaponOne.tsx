import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Eye, Heart, Sparkles } from 'lucide-react';

export const Slide12_WeaponOne: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-black relative">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="text-center mb-16">
            <motion.span variants={blurIn} custom={0} className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Secret Weapon 01
            </motion.span>
            {/* Fixed closing tag here */}
            <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-8xl text-white tracking-tight">
                INSTANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">EXPERIENCE</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visual */}
            <motion.div variants={blurIn} custom={2} className="group p-10 bg-[#111] border border-white/10 rounded-[2rem] hover:border-accent/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-black transition-colors text-white">
                    <Eye size={40} />
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-4">VISUAL</h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors">
                    아이디어를 말하는 순간<br/>
                    <span className="text-accent font-bold">눈앞에 결과물</span>이 나타납니다.
                </p>
            </motion.div>

            {/* Emotion */}
            <motion.div variants={blurIn} custom={3} className="group p-10 bg-[#111] border border-white/10 rounded-[2rem] hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-500 group-hover:text-black transition-colors text-white">
                    <Heart size={40} />
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-4">EMOTION</h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors">
                    "내가 직접 만들었다"는<br/>
                    <span className="text-red-500 font-bold">강렬한 성취감</span>을 심어줍니다.
                </p>
            </motion.div>

            {/* Ownership */}
            <motion.div variants={blurIn} custom={4} className="group p-10 bg-[#111] border border-white/10 rounded-[2rem] hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-black transition-colors text-white">
                    <Sparkles size={40} />
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-4">OWNERSHIP</h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors">
                    단순 학습을 넘어<br/>
                    <span className="text-yellow-500 font-bold">창작의 주인이 되는 경험</span>입니다.
                </p>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};