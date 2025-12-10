
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Check } from 'lucide-react';

export const Slide04_Status: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-[#050505]">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            
            {/* Left: Massive Number */}
            <motion.div 
                variants={blurIn} 
                custom={0}
                className="text-center md:text-left"
            >
                <div className="text-accent font-bold tracking-[0.3em] uppercase mb-4 pl-2">2025 Revenue</div>
                <h2 className="font-display font-black text-[30vw] md:text-[18rem] text-white leading-[0.8] tracking-tighter -ml-2 md:-ml-4">
                    1.3<span className="text-[10vw] md:text-[6rem] text-gray-600 tracking-normal ml-2">억</span>
                </h2>
                <p className="text-gray-500 font-bold text-lg md:text-2xl mt-4 pl-2">디자인·영상 과정 연매출 달성</p>
            </motion.div>

            {/* Right: Checklist */}
            <div className="flex-grow">
                 <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12">
                    <motion.h3 variants={blurIn} custom={1} className="text-2xl text-white font-bold mb-12 flex items-center gap-3">
                        <span className="w-2 h-8 bg-accent rounded-full"></span>
                        안정적 기반 마련 완료
                    </motion.h3>

                    <ul className="space-y-12">
                        {[
                            { title: "자격증 교육 정착", desc: "GTQ 합격 시스템 안정화" },
                            { title: "아카이빙 시작", desc: "학생 포트폴리오 데이터화 시도" },
                            { title: "AI 툴 시범 도입", desc: "생성형 AI 기초 교육 커리큘럼화" }
                        ].map((item, idx) => (
                            <motion.li 
                                key={idx}
                                variants={blurIn} 
                                custom={idx + 2}
                                className="flex items-start gap-8"
                            >
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-1 shrink-0">
                                    <Check size={24} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-200 mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-xl">{item.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                 </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};
