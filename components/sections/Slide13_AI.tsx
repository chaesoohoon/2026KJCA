
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Bot, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

export const Slide13_AI: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const targetUrl = "https://identme.vercel.app";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&color=000000&bgcolor=ffffff&data=${encodeURIComponent(targetUrl)}`;

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent"></div>
      
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div>
            <motion.h2 variants={blurIn} custom={0} className="font-display font-bold text-6xl md:text-8xl text-white mb-8">
                AI + 200%
            </motion.h2>
            <motion.p variants={blurIn} custom={1} className="text-xl text-gray-400 mb-8 leading-relaxed">
                2026년 실습 비중 2배 확대.<br/>
                학생들이 "AI를 능숙하게 사용하는 습관"을 만듭니다.
            </motion.p>
            <motion.div variants={blurIn} custom={2} className="flex flex-wrap gap-4">
                {['Gemini', 'ChatGPT', 'Claude', 'Midjourney', 'Firefly'].map(tool => (
                    <span key={tool} className="px-4 py-2 border border-white/20 rounded-full text-sm font-bold text-white">
                        {tool}
                    </span>
                ))}
            </motion.div>
        </div>

        {/* QR Code Section */}
        <motion.div variants={blurIn} custom={3} className="flex flex-col items-center justify-center">
            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-white p-6 rounded-xl">
                    <img 
                        src={qrUrl} 
                        alt="AI Demo QR Code" 
                        className="w-64 h-64 md:w-80 md:h-80 object-contain mix-blend-multiply"
                    />
                </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-white">
                <Smartphone className="text-accent animate-pulse" />
                <span className="font-bold tracking-widest uppercase text-sm">Scan to Experience AI</span>
                <ArrowRight size={16} className="text-gray-500"/>
            </div>
            <p className="text-gray-500 text-xs mt-2 tracking-wider underline">{targetUrl}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
