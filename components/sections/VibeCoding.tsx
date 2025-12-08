import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, MousePointer2, Share2, Globe, Sparkles } from 'lucide-react';

export const VibeCoding: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
      <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3"
        >
          <div className="text-brand-500 font-bold mb-4 flex items-center gap-2">
            <Zap className="fill-brand-500" />
            <span>CORE STRATEGY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Vibe<br/>Coding
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            코딩을 몰라도 웹서비스를 만드는 세상.<br/>
            학생의 아이디어가 단 하루 만에<br/> 
            실제 작동하는 <span className="text-white font-bold">서비스 URL</span>로 탄생합니다.
          </p>
          <ul className="space-y-4">
            {['심리테스트 제작', '포트폴리오 페이지', '바이럴 마케팅 도구'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                    {item}
                </li>
            ))}
          </ul>
        </motion.div>

        {/* Grid Layout */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <motion.div 
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-3xl flex flex-col justify-between h-[280px] border-t-4 border-t-brand-500 bg-surface/50"
            >
                <div className="bg-brand-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-brand-500" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">즉시 결과물</h3>
                    <p className="text-gray-400">긴 개발 과정 없이<br/>원데이 클래스로 완성</p>
                </div>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-3xl flex flex-col justify-between h-[280px] bg-surface/30"
            >
                <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Share2 className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">무한 확산</h3>
                    <p className="text-gray-400">SNS로 공유되는<br/>URL 기반 포트폴리오</p>
                </div>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-3xl flex flex-col justify-between h-[280px] bg-surface/30 md:col-span-2"
            >
                 <div className="flex justify-between items-start">
                    <div className="bg-purple-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-purple-500" />
                    </div>
                    <div className="px-4 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">
                        Differentiation
                    </div>
                 </div>
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">경쟁력 확보</h3>
                        <p className="text-gray-400">디자인만 하는 학생 vs <span className="text-white">내 서비스를 가진 학생</span></p>
                    </div>
                    <div className="w-full md:w-auto">
                        <button className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                            커리큘럼 확인하기
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};