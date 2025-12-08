import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Send, ArrowRight } from 'lucide-react';
import { generateSlogan } from '../../services/geminiService';

export const AiDemo: React.FC = () => {
  const [slogan, setSlogan] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setSlogan("");
    const result = await generateSlogan();
    setSlogan(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 flex flex-col justify-center h-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-500 text-sm font-bold border border-brand-500/20 mb-6">
            <Sparkles size={16} />
            <span>AI Powered Education</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          AI 실무 교육 미리보기
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          2026년 커리큘럼은 AI 활용 능력이 기본입니다.<br/>
          지금 바로 <span className="text-white font-semibold">Gemini 2.5</span>가 제안하는 학원 슬로건을 확인해보세요.
        </p>
      </motion.div>

      {/* AI Chat Interface */}
      <div className="w-full max-w-2xl mx-auto bg-[#111] rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-brand-900/10">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs text-gray-500 font-mono">Gemini-2.5-flash-session</span>
        </div>

        {/* Content Area */}
        <div className="p-8 min-h-[200px] flex flex-col justify-center items-center">
            {loading ? (
                <div className="flex flex-col items-center gap-4 animate-pulse">
                     <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-brand-500" />
                     </div>
                     <span className="text-gray-500 text-sm">Thinking...</span>
                </div>
            ) : slogan ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                        "{slogan}"
                    </p>
                </motion.div>
            ) : (
                <div className="text-gray-600 flex flex-col items-center">
                    <Bot className="w-10 h-10 mb-4 opacity-20" />
                    <p>AI에게 2026년 슬로건을 요청해보세요.</p>
                </div>
            )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02]">
            <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? '생성 중...' : '슬로건 생성 요청하기'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};