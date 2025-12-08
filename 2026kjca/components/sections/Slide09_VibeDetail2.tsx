import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide09_VibeDetail2: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 bg-black">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full"
      >
        <motion.div variants={blurIn} custom={0} className="flex items-center gap-4 mb-12">
            <span className="w-16 h-1 bg-accent"></span>
            <span className="text-xl font-bold uppercase tracking-widest">Strategy 02</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={blurIn} custom={1}>
                <h2 className="text-6xl md:text-8xl font-display font-bold text-gray-800 line-through decoration-red-600 mb-4">
                    PPT SLIDE
                </h2>
                <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
                    WEB PAGE
                </h2>
                <p className="text-2xl text-gray-400 leading-relaxed">
                    슬라이드 파일은 잊혀집니다.<br/>
                    <span className="text-white font-bold">웹사이트 링크</span>는 남습니다.
                </p>
            </motion.div>

            <motion.div variants={blurIn} custom={2} className="flex flex-col gap-6 justify-center">
                 <div className="bg-white/5 p-8 border-l-4 border-accent">
                    <h3 className="text-2xl font-bold text-white mb-2">개인 포트폴리오 페이지</h3>
                    <p className="text-gray-500">나만의 도메인, 나만의 브랜드</p>
                 </div>
                 <div className="bg-white/5 p-8 border-l-4 border-accent">
                    <h3 className="text-2xl font-bold text-white mb-2">브랜드 소개 페이지</h3>
                    <p className="text-gray-500">기업 제출용 PR 웹사이트 제작</p>
                 </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};