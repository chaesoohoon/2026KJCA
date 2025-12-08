import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Music, Zap, Cpu, Radio } from 'lucide-react';

export const Slide13_KillerItems: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-[#050505] text-white">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="text-center mb-16">
            <motion.span variants={blurIn} custom={0} className="text-red-500 font-bold tracking-[0.5em] uppercase mb-4 block">
                Secret Weapon
            </motion.span>
            <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-8xl leading-none">
                KILLER <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-accent">ITEMS</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Elementary Item */}
            <motion.div 
                variants={blurIn} 
                custom={2} 
                className="group relative p-8 bg-white/[0.03] border border-white/10 hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-300 rounded-2xl overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="font-display font-black text-6xl">01</span>
                </div>
                
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                </div>
                
                <div className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest">For Elementary</div>
                <h3 className="text-3xl font-display font-bold mb-4">RHYTHM TOUCH</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    젤리를 만지면 피아노 소리가 나고,<br/>
                    친구와 손을 잡으면 비트가 터진다.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="text-xs text-yellow-500 font-bold">TOOLS: Makey Makey + Scratch</div>
                </div>
            </motion.div>

            {/* Middle School Item */}
            <motion.div 
                variants={blurIn} 
                custom={3} 
                className="group relative p-8 bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all duration-300 rounded-2xl overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="font-display font-black text-6xl">02</span>
                </div>

                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                    <Music size={24} />
                </div>

                <div className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest">For Middle School</div>
                <h3 className="text-3xl font-display font-bold mb-4">DROP THE BEAT</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    내 아이가 만든 힙합 비트가<br/>
                    내 핸드폰 벨소리가 되는 순간.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="text-xs text-purple-500 font-bold">TOOLS: Sonic Pi + Text Coding</div>
                </div>
            </motion.div>

            {/* High School Item */}
            <motion.div 
                variants={blurIn} 
                custom={4} 
                className="group relative p-8 bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 rounded-2xl overflow-hidden"
            >
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="font-display font-black text-6xl">03</span>
                </div>

                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                    <Cpu size={24} />
                </div>

                <div className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest">For High School</div>
                <h3 className="text-3xl font-display font-bold mb-4">AI PRODUCER</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    "비 오는 날 듣기 좋은 Lo-Fi 만들어줘"<br/>
                    AI와 파이썬으로 작곡하는 실무.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="text-xs text-blue-500 font-bold">TOOLS: Python + Generative AI</div>
                </div>
            </motion.div>
        </div>

        {/* Marketing Hook */}
        <motion.div variants={blurIn} custom={5} className="mt-12 flex items-center justify-center">
            <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-3">
                <Radio className="text-red-500 animate-pulse" size={18} />
                <span className="text-gray-300 text-sm font-bold">VIRAL STRATEGY:</span>
                <span className="text-white text-sm">#숏폼챌린지 #라이브코딩콘서트</span>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
};