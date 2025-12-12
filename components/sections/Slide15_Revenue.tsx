
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide15_Revenue: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 bg-accent text-black">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-6xl w-full"
      >
        <div className="flex items-end justify-between mb-16 border-b-4 border-black pb-8">
             <motion.h2 variants={blurIn} custom={0} className="font-display font-black text-6xl md:text-8xl">
                GOAL
             </motion.h2>
             <motion.p variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-8xl">
                1.4<span className="text-4xl">억</span>
             </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={blurIn} custom={2}>
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider border px-4 py-2 inline-block border-black">Strategy</h3>
                <ul className="space-y-4 font-bold text-xl">
                    <li>1. 포트폴리오 고도화</li>
                    <li>2. 바이럴 마케팅 자동 시스템 구축</li>
                    <li>3. 지역 내 AI 교육 1위 브랜드</li>
                    <li>4. 지역 특화 마케팅</li>
                </ul>
            </motion.div>
            <motion.div variants={blurIn} custom={3} className="flex flex-col justify-end">
                <p className="text-3xl font-black leading-tight whitespace-pre-line">
                    학생의 결과물이 곧<br/>
                    학교의 경쟁력이 됩니다.
                </p>
                <p className="text-lg mt-4 font-medium opacity-70">
                    압도적인 결과물은<br/>가장 강력한 마케팅입니다.
                </p>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
