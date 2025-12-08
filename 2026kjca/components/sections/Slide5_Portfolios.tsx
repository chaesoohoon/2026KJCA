import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Youtube, BookOpen, MonitorPlay } from 'lucide-react';

export const Slide5_Portfolios: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12">
       <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[80vh] gap-8">
            
            {/* Design Column */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center border-r border-white/5 pr-0 md:pr-8"
            >
                <div className="mb-6 flex items-center gap-3 text-gray-400">
                    <Palette size={24} />
                    <span className="font-bold tracking-widest uppercase">Visual Design</span>
                </div>
                <h2 className="text-5xl font-bold mb-8">고퀄리티 실물<br/><span className="text-accent">전시형 작품</span></h2>
                
                <div className="space-y-6">
                    <div className="bento-card p-6 bg-white/[0.02]">
                        <div className="flex items-center gap-4 mb-2">
                            <BookOpen className="text-accent" size={20} />
                            <h3 className="text-xl font-bold">포트폴리오 북 & 굿즈</h3>
                        </div>
                        <p className="text-gray-400 text-sm pl-9">파일 제출이 아닌 실물 책자와 브랜드 굿즈 제작</p>
                    </div>

                    <div className="bento-card p-6 bg-white/[0.02]">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-5 h-5 rounded-full border border-accent flex items-center justify-center text-[10px] text-accent">Ex</div>
                            <h3 className="text-xl font-bold">학원 내 상시 전시</h3>
                        </div>
                        <p className="text-gray-400 text-sm pl-9">액자 전시형 작품 제작으로 공간 분위기 쇄신</p>
                    </div>
                </div>
            </motion.div>

            {/* Video Column */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center pl-0 md:pl-8"
            >
                 <div className="mb-6 flex items-center gap-3 text-red-500">
                    <Youtube size={24} />
                    <span className="font-bold tracking-widest uppercase">Video Contents</span>
                </div>
                <h2 className="text-5xl font-bold mb-8">유튜브 시리즈<br/><span className="text-red-500">실전 업로드</span></h2>
                
                <div className="space-y-6">
                    <div className="bento-card p-6 bg-red-900/[0.05] border-red-500/20">
                        <div className="flex items-center gap-4 mb-2">
                            <MonitorPlay className="text-red-500" size={20} />
                            <h3 className="text-xl font-bold">AI 유튜브 시리즈</h3>
                        </div>
                        <p className="text-gray-400 text-sm pl-9">"AI로 영상 만들기 30일" 등 실제 시리즈 기획 및 연재</p>
                    </div>

                     <div className="bento-card p-6 bg-red-900/[0.05] border-red-500/20">
                         <ul className="space-y-2 text-sm text-gray-300 pl-2">
                             <li>✔ AI 스토리보드 & 썸네일 자동 생성</li>
                             <li>✔ 학원 공식 채널에 업로드하여 포트폴리오화</li>
                             <li>✔ 조회수/반응 분석까지 교육 포함</li>
                         </ul>
                    </div>
                </div>
            </motion.div>
       </div>
    </div>
  );
};