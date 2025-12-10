
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Share2, Fingerprint, MousePointerClick } from 'lucide-react';

export const Slide08_VibeDetail1: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      {/* Left Content Side */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 z-10">
        <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="max-w-xl"
        >
            <motion.div variants={blurIn} custom={0} className="flex items-center gap-3 mb-6">
                 <span className="w-8 h-1 bg-accent"></span>
                 <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Strategy 01</span>
            </motion.div>
            
            <motion.h2 variants={blurIn} custom={1} className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-[0.9]">
                THE VIRAL<br/>
                <span className="text-accent">ENGINE.</span>
            </motion.h2>

            <motion.p variants={blurIn} custom={2} className="text-xl text-gray-300 font-medium mb-12 leading-relaxed">
                심리테스트는 단순한 수업 예제가 아닙니다.<br/>
                가장 강력하고 자발적인 <span className="text-white border-b-2 border-accent">바이럴 마케팅 엔진</span>입니다.
            </motion.p>

            <div className="space-y-8">
                <motion.div variants={blurIn} custom={3} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        <Fingerprint className="text-accent" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Self-Expression</h4>
                        <p className="text-sm text-gray-500">"나는 어떤 타입일까?" 자아 표현 욕구 자극</p>
                    </div>
                </motion.div>
                <motion.div variants={blurIn} custom={4} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        <Share2 className="text-accent" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Voluntary Sharing</h4>
                        <p className="text-sm text-gray-500">결과 페이지 URL의 자발적 SNS 공유</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
      </div>

      {/* Right Visual Side - Removed overflow-hidden to fix clipped bubbles */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-[#050505] relative border-l border-white/5">
         <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={isActive ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 md:w-80 aspect-[9/16] z-10"
         >
            {/* Mockup Screen Content */}
            <div className="absolute inset-0 bg-black border-4 border-white/10 flex flex-col items-center p-6 rounded-[2.8rem] shadow-2xl z-20 overflow-hidden">
                <div className="w-12 h-1 bg-white/20 rounded-full mb-8"></div>
                
                <div className="w-full aspect-square bg-accent/10 rounded-2xl mb-6 flex items-center justify-center border border-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent/20 blur-xl"></div>
                    <span className="relative font-display font-black text-6xl text-accent">TYPE A</span>
                </div>

                <h3 className="text-white font-bold text-xl mb-2 text-center">나의 디자인 성향은?</h3>
                <p className="text-gray-500 text-xs text-center mb-8">당신은 감각적인 아티스트 타입입니다.</p>

                <div className="w-full py-3 bg-accent text-black font-bold text-center rounded-xl mb-3 text-sm flex items-center justify-center gap-2">
                    <Share2 size={16}/> 결과 공유하기
                </div>
                <div className="w-full py-3 bg-white/10 text-white font-bold text-center rounded-xl text-sm">
                    다시 하기
                </div>
            </div>

            {/* Floating Elements - Slower animations */}
            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-24 top-24 bg-white text-black font-bold px-4 py-3 rounded-xl shadow-lg text-sm z-30"
            >
                <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
                Share Link
            </motion.div>
             <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-20 bottom-32 bg-accent text-white font-bold px-4 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2 z-30"
            >
                <MousePointerClick size={14}/> Click
            </motion.div>
         </motion.div>
      </div>
    </div>
  );
};
