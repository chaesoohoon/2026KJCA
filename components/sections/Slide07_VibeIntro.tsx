import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide07_VibeIntro: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 bg-black relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-6xl"
      >
        <motion.h2 variants={blurIn} custom={0} className="font-display text-7xl md:text-9xl font-bold text-white mb-8 leading-[0.9]">
            NO CODE.<br/>
            JUST <span className="text-accent">VIBE.</span>
        </motion.h2>

        <motion.div variants={blurIn} custom={1} className="h-1 w-24 bg-white mb-12"></motion.div>

        <motion.p variants={blurIn} custom={2} className="text-2xl md:text-4xl text-gray-300 font-medium leading-snug max-w-4xl">
            코딩 없이 웹서비스·테스트·페이지를 만드는 기술.<br/>
            학생의 아이디어가 하루 만에 <span className="text-accent underline decoration-4 underline-offset-8">실제 서비스 URL</span>로 탄생합니다.
        </motion.p>
      </motion.div>
    </div>
  );
};