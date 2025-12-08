import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';

export const Slide2_Analysis: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12">
      <div className="mb-8">
        <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Current Status</h2>
        <h3 className="text-4xl md:text-5xl font-bold">2025 운영 현황 및 한계</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
        {/* 2025 Status */}
        <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 bento-card p-8 flex flex-col justify-between"
        >
            <div>
                <div className="text-6xl font-black text-white mb-2">1.3<span className="text-2xl text-gray-500 ml-1">억</span></div>
                <div className="text-gray-400 text-sm uppercase tracking-wider mb-8">2025 디자인/영상 매출</div>
                
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>기초 그래픽 교육</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>GTQ/ITQ 자격증 대비</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>AI 툴 기초 도입</li>
                </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
                <span className="text-xs text-gray-500">STATUS: STABLE</span>
            </div>
        </motion.div>

        {/* The Gap/Problem */}
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bento-card p-8 bg-red-900/10 border-red-500/20 flex flex-col justify-center relative overflow-hidden"
        >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 rounded-full blur-[50px]"></div>
            <AlertCircle className="w-10 h-10 text-red-500 mb-6" />
            <h4 className="text-2xl font-bold mb-4">성장의 한계점</h4>
            <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">·</span>
                    단순 파일 형태의 포트폴리오
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">·</span>
                    휘발되는 홍보용 콘텐츠
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">·</span>
                    확장성 부족한 학생 프로젝트
                </li>
            </ul>
        </motion.div>

        {/* 2026 Solution */}
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 bento-card p-8 bg-accent/5 border-accent/30 flex flex-col justify-between group"
        >
             <div>
                <TrendingUp className="w-10 h-10 text-accent mb-6" />
                <h4 className="text-3xl font-bold mb-2">대대적 개선</h4>
                <p className="text-gray-400 mb-6">2026 KEY CHANGE</p>
                <div className="text-xl font-bold text-white leading-relaxed">
                    디자인 + 영상 + AI<br/>
                    + <span className="text-accent underline decoration-wavy underline-offset-4">바이브코딩</span>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight />
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};