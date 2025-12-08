import React from 'react';
import { motion } from 'framer-motion';

export const Slide8_Vision: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-accent/10 via-black to-black opacity-50 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-5xl"
      >
        <p className="text-accent font-bold tracking-[0.3em] uppercase mb-8">2026 VISION</p>
        
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-12">
            "학생의 결과물이 곧<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">학원의 경쟁력</span>이 된다."
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 text-sm text-gray-400">
            <div className="p-4 border border-white/10 rounded-lg">바이브코딩 서비스</div>
            <div className="p-4 border border-white/10 rounded-lg">유튜브 기록 영상</div>
            <div className="p-4 border border-white/10 rounded-lg">개인 브랜드 페이지</div>
            <div className="p-4 border border-white/10 rounded-lg">실물 전시 작품</div>
        </div>

        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            2026년은 학생이 직접 만들고,<br/> 
            실제로 세상에 공개하는 해가 될 것입니다.
        </p>
      </motion.div>

      {/* Footer Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-10 w-full text-center"
      >
        <p className="text-gray-600 text-xs tracking-widest uppercase">2026 THE International Vocational Training School - Cheomdan</p>
      </motion.div>
    </div>
  );
};