import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 relative bg-black">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-black to-black pointer-events-none"></div>
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 max-w-4xl"
        >
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
                학생의 성장이<br/>
                곧 <span className="text-brand-500">학원의 성장</span>입니다.
            </h2>
            
            <p className="text-xl text-gray-500 mb-16">
                2026 THE국제직업전문학교 첨단점
            </p>

            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                발표 종료
            </button>
        </motion.div>
        
        <div className="absolute bottom-10 text-gray-800 text-xs tracking-widest uppercase">
            Designed for 2026 Vision Presentation
        </div>
    </div>
  );
};