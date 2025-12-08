import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coffee, Box, Bot, ChevronRight } from 'lucide-react';
import { generateSlogan } from '../../services/geminiService';

export const Slide6_EnvironmentAI: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [slogan, setSlogan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await generateSlogan();
    setSlogan(res);
    setLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
        
        {/* Left: AI Strategy */}
        <div className="space-y-6">
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                className="text-4xl font-bold mb-6"
            >
                AI 활용도 <span className="text-accent glow-text">200%</span> 확대
            </motion.h2>

            <motion.div 
                 initial={{ x: -30, opacity: 0 }}
                 animate={isActive ? { x: 0, opacity: 1 } : {}}
                 className="bento-card p-8 bg-gradient-to-br from-gray-900 to-black"
            >
                <div className="flex flex-wrap gap-3 mb-6">
                    {['ChatGPT', 'Gemini', 'Claude', 'Firefly', 'Midjourney'].map(tool => (
                        <span key={tool} className="px-3 py-1 rounded-full border border-white/10 text-xs bg-white/5 text-gray-300">
                            {tool}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-2">AI 30일 챌린지 운영</h3>
                <p className="text-gray-400 text-sm mb-6">"AI를 능숙하게 사용하는 습관" 형성</p>
                
                {/* Interactive Mini Demo */}
                <div className="mt-4 p-4 rounded-xl bg-black border border-white/10">
                    <div className="flex items-center gap-2 mb-3 text-xs text-accent">
                        <Sparkles size={12} />
                        <span>AI 실습 미리보기: Gemini 2.5</span>
                    </div>
                    {slogan ? (
                        <div className="text-white font-medium text-lg mb-4">"{slogan}"</div>
                    ) : (
                        <div className="text-gray-600 text-sm mb-4">AI에게 2026년 학원 슬로건을 요청해보세요.</div>
                    )}
                    <button 
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
                    >
                        {loading ? <Bot className="animate-spin" size={14}/> : <Bot size={14}/>}
                        {loading ? '생성 중...' : '슬로건 생성하기'}
                    </button>
                </div>
            </motion.div>
        </div>

        {/* Right: Environment & Branding */}
        <div className="flex flex-col justify-center space-y-6">
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-6 text-right"
            >
                공간이 곧 <span className="text-white">브랜딩</span>
            </motion.h2>

            <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
            >
                <div className="bento-card p-6 aspect-square flex flex-col justify-center items-center text-center hover:bg-white/5">
                    <Coffee className="w-10 h-10 text-yellow-500 mb-4" />
                    <h4 className="font-bold">카페형 휴식 공간</h4>
                    <span className="text-xs text-gray-500 mt-2">머물고 싶은 학원</span>
                </div>
                <div className="bento-card p-6 aspect-square flex flex-col justify-center items-center text-center hover:bg-white/5">
                    <Box className="w-10 h-10 text-blue-500 mb-4" />
                    <h4 className="font-bold">작품 전시 존</h4>
                    <span className="text-xs text-gray-500 mt-2">포토존화 & 경험 공유</span>
                </div>
                <div className="col-span-2 bento-card p-6 flex items-center justify-between hover:border-accent/50 cursor-pointer group">
                    <div>
                        <h4 className="font-bold text-lg">최신 장비 & 스터디룸</h4>
                        <p className="text-sm text-gray-400">학생 경험(CX) 중심 개편</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                        <ChevronRight />
                    </div>
                </div>
            </motion.div>
        </div>

      </div>
    </div>
  );
};