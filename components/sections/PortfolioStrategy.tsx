import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Youtube, ArrowRight, Layers, PlayCircle } from 'lucide-react';

export const PortfolioStrategy: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Portfolio 2.0</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">압도적인 결과물 차이</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[500px]">
        {/* Design Strategy */}
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/5 flex flex-col justify-between p-10"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gray-700/30 transition-all"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">시각디자인</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                    파일 제출로 끝내지 않습니다.<br/>
                    실물 책자, 액자 전시, 그리고<br/>
                    <span className="text-white">브랜드 굿즈</span>까지 제작합니다.
                </p>
            </div>

            <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Layers className="text-gray-400 w-5 h-5"/>
                    <span className="text-sm font-medium">개인 브랜드 포트폴리오 북</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <ArrowRight className="text-gray-400 w-5 h-5"/>
                    <span className="text-sm font-medium">학원 내 상시 전시회 운영</span>
                </div>
            </div>
        </motion.div>

        {/* Video Strategy */}
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-[2.5rem] overflow-hidden bg-brand-600 flex flex-col justify-between p-10"
        >
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700 opacity-100"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

             <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-black/20 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                    <Youtube className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">영상콘텐츠</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                    하드디스크에 잠든 영상은 의미 없습니다.<br/>
                    모든 프로젝트는 <span className="text-white font-bold underline decoration-wavy decoration-white/30 underline-offset-4">유튜브 시리즈</span>로<br/>
                    실제 업로드되고 기록됩니다.
                </p>
            </div>

            <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-white/10 backdrop-blur-md">
                    <PlayCircle className="text-white/80 w-5 h-5"/>
                    <span className="text-white text-sm font-medium">학원 공식 채널 연재</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-white/10 backdrop-blur-md">
                    <ArrowRight className="text-white/80 w-5 h-5"/>
                    <span className="text-white text-sm font-medium">AI 스토리보드 & 숏폼 제작</span>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};