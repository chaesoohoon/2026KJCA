import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Monitor, Coffee, Zap } from 'lucide-react';

export const Slide14_Space: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-24 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-accent/5 skew-x-12 pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="w-full max-w-7xl mx-auto z-10"
      >
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-white/20 pb-8">
            <div>
                <motion.p variants={blurIn} custom={0} className="text-accent font-bold uppercase tracking-[0.3em] mb-4">
                    Customer Experience
                </motion.p>
                <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-5xl md:text-8xl text-white leading-[0.9]">
                    THE PREMIUM<br/>STANDARD
                </motion.h2>
            </div>
            <motion.p variants={blurIn} custom={2} className="text-gray-400 text-right mt-4 md:mt-0 max-w-md">
                "교육의 질만큼 중요한 것은 경험의 질입니다.<br/>
                압도적인 환경이 압도적인 결과를 만듭니다."
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Column 1: SPACE */}
             <motion.div variants={blurIn} custom={3} className="group">
                <div className="mb-6 p-4 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                    <Coffee size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">SPACE</h3>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>카페형 라운지 & 휴식 공간</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>작품 전시 갤러리 존</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>크리에이티브 스터디룸</span>
                    </li>
                </ul>
             </motion.div>

             {/* Column 2: GEAR */}
             <motion.div variants={blurIn} custom={4} className="group">
                <div className="mb-6 p-4 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                    <Monitor size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">GEAR</h3>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>RTX 40 시리즈 고사양 PC</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>전문가용 듀얼 모니터</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>촬영 스튜디오 장비 완비</span>
                    </li>
                </ul>
             </motion.div>

             {/* Column 3: SOFTWARE */}
             <motion.div variants={blurIn} custom={5} className="group">
                <div className="mb-6 p-4 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                    <Zap size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">SOFTWARE</h3>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>Adobe Creative Cloud 정품</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>ChatGPT / Gemini 유료 계정 지원</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>유료 디자인 소스 무제한 제공</span>
                    </li>
                </ul>
             </motion.div>
        </div>
      </motion.div>
    </div>
  );
};