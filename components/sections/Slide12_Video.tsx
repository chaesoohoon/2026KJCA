import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide12_Video: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#E62117] text-white px-6">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="text-center max-w-6xl"
      >
        <motion.div variants={blurIn} custom={0} className="font-display font-black text-[12vw] leading-none tracking-tighter mb-4">
            SERIES
        </motion.div>
        
        <motion.h2 variants={blurIn} custom={1} className="text-3xl md:text-5xl font-bold mb-12">
            유튜브에 실제 업로드되는 <br/>학생 프로젝트
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             <motion.div variants={blurIn} custom={2} className="bg-black/20 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">AI Storyboard</h3>
                <p className="text-white/80">기획 단계부터 AI를 활용한 스토리보드 제작</p>
             </motion.div>
             <motion.div variants={blurIn} custom={3} className="bg-black/20 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Shorts Challenge</h3>
                <p className="text-white/80">"AI 영상 만들기 30일" 챌린지 시리즈 연재</p>
             </motion.div>
             <motion.div variants={blurIn} custom={4} className="bg-black/20 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Auto Thumbnail</h3>
                <p className="text-white/80">AI 툴을 활용한 클릭률 높은 썸네일 제작</p>
             </motion.div>
        </div>
      </motion.div>
    </div>
  );
};