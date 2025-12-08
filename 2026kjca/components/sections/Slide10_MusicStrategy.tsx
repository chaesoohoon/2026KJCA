import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Music, Zap, Mic2, Radio, BarChart3 } from 'lucide-react';

export const Slide10_MusicStrategy: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-[#050505] relative overflow-hidden">
        {/* Background Equalizer Visual (CSS Animation) */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-center gap-1 opacity-10 pointer-events-none px-4 md:px-20">
             {[...Array(40)].map((_, i) => (
                 <motion.div
                    key={i}
                    animate={{ height: ['10%', '60%', '30%', '90%', '20%'] }}
                    transition={{ duration: 0.6 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() * 0.5 }}
                    className="w-full bg-accent/30 rounded-t-sm"
                 />
             ))}
        </div>

        <div className="max-w-7xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Concept */}
            <motion.div
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <motion.div variants={blurIn} custom={0} className="inline-block border border-accent/30 rounded-full px-4 py-1 mb-6 bg-accent/5 backdrop-blur-md">
                    <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                        The Kukje Future Lab
                    </span>
                </motion.div>
                
                <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-8xl text-white leading-[0.9] mb-6 tracking-tighter">
                    ENJOY &<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">CREATE</span>
                </motion.h2>

                <motion.p variants={blurIn} custom={2} className="text-xl text-gray-400 leading-relaxed mb-8 max-w-lg">
                    "코딩은 공부가 아니라 <span className="text-white font-bold border-b border-accent">문화</span>입니다."<br/>
                    광주 첨단의 입지적 특성을 공략하는<br/>
                    <span className="text-accent font-bold">음악/리듬 결합형</span> 융합 코딩 교육
                </motion.p>

                <motion.div variants={blurIn} custom={3} className="grid grid-cols-2 gap-4">
                    <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-accent/50 transition-colors">
                        <Radio className="text-accent mb-2" size={24} />
                        <div className="text-sm font-bold text-white uppercase tracking-wide">Hip Trend</div>
                        <div className="text-xs text-gray-500 mt-1">교육이 아닌 놀이 문화로 접근</div>
                    </div>
                    <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors">
                        <Mic2 className="text-purple-500 mb-2" size={24} />
                        <div className="text-sm font-bold text-white uppercase tracking-wide">Show Off</div>
                        <div className="text-xs text-gray-500 mt-1">보여주는 퍼포먼스 결과물</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right: Curriculum Tracks */}
            <motion.div
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
                className="space-y-4"
            >
                <motion.div variants={blurIn} custom={3} className="mb-4 flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-widest">
                    <BarChart3 size={16} /> Curriculum Track
                </motion.div>

                {[
                    {
                        step: "STEP 01",
                        title: "Rhythm Touch",
                        desc: "전기가 통하는 마법, 피지컬 컴퓨팅",
                        tools: "Makey Makey + Scratch",
                        color: "border-l-4 border-accent"
                    },
                    {
                        step: "STEP 02",
                        title: "Beat Maker",
                        desc: "나만의 힙합 비트/벨소리 코딩",
                        tools: "Sonic Pi + Text Coding",
                        color: "border-l-4 border-purple-500"
                    },
                    {
                        step: "STEP 03",
                        title: "AI Producer",
                        desc: "AI와 합주하는 생성형 사운드",
                        tools: "Python + Suno AI",
                        color: "border-l-4 border-blue-500"
                    }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        variants={blurIn}
                        custom={idx + 4}
                        className={`p-6 bg-white/[0.03] border border-white/5 ${item.color} hover:bg-white/[0.07] hover:translate-x-2 transition-all duration-300`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold text-gray-500 tracking-widest">{item.step}</span>
                            <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300 font-mono">{item.tools}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}

                {/* Secret Strategy Banner */}
                <motion.div variants={blurIn} custom={7} className="mt-6 pt-4 border-t border-dashed border-white/10 text-right">
                    <p className="text-xs text-accent font-bold uppercase tracking-widest">Cheomdan Marketing Secret</p>
                    <p className="text-sm text-gray-400 mt-1">숏폼 챌린지 & 라이브 코딩 콘서트 개최</p>
                </motion.div>
            </motion.div>
        </div>
    </div>
  );
};