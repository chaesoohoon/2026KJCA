import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide05_Problem: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-black text-center">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-5xl"
      >
        <motion.h2 variants={blurIn} custom={0} className="font-display text-6xl md:text-8xl font-bold text-white mb-16 uppercase">
            Is This <span className="text-red-600 line-through decoration-4 decoration-white">Enough?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "No Viral", desc: "휘발되는 홍보용 콘텐츠" },
                { title: "Just Files", desc: "단순 파일 형태의 결과물" },
                { title: "Limited", desc: "확장성 부족한 프로젝트" },
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    variants={blurIn}
                    custom={idx + 1}
                    className="p-8 border border-white/10 rounded-sm bg-white/[0.02]"
                >
                    <h3 className="text-3xl font-display font-bold text-gray-300 mb-4">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};