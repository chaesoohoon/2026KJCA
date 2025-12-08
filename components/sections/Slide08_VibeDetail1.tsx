import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide08_VibeDetail1: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-row items-center bg-[#0a0a0a]">
      {/* Left Image Side */}
      <div className="hidden md:flex w-1/2 h-full bg-accent items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <span className="text-black font-display font-black text-[15rem] opacity-20 rotate-90 absolute whitespace-nowrap">
            IDENTITY
        </span>
      </div>

      {/* Right Content Side */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16">
        <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
        >
            <motion.span variants={blurIn} custom={0} className="text-accent font-bold tracking-widest uppercase mb-4 block">
                Strategy 01
            </motion.span>
            
            <motion.h3 variants={blurIn} custom={1} className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                IDENTITY<br/>PSYCH TEST
            </motion.h3>

            <motion.ul variants={blurIn} custom={2} className="space-y-6 text-xl text-gray-400">
                <li className="flex items-start gap-4">
                    <span className="text-accent font-bold">01</span>
                    <span>학생이 직접 심리테스트 질문 설계</span>
                </li>
                <li className="flex items-start gap-4">
                    <span className="text-accent font-bold">02</span>
                    <span>AI로 질문 및 로직 자동 생성</span>
                </li>
                <li className="flex items-start gap-4">
                    <span className="text-accent font-bold">03</span>
                    <span>결과 페이지 디자인 및 URL 배포</span>
                </li>
            </motion.ul>

            <motion.div variants={blurIn} custom={3} className="mt-12 p-6 border border-white/10 bg-white/5">
                <p className="text-white font-bold mb-2">예시 프로젝트</p>
                <p className="text-gray-400">"나는 어떤 디자이너 타입일까?"</p>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};