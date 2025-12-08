import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Share2, MousePointer2 } from 'lucide-react';

export const Slide3_VibeCoding: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12">
      <div className="text-center mb-12">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6"
        >
            <Zap size={18} fill="currentColor" />
            <span className="font-bold tracking-wider">CORE STRATEGY</span>
        </motion.div>
        <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            className="text-5xl md:text-7xl font-black mb-6"
        >
            VIBE CODING
        </motion.h2>
        <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
            코딩 없이 웹서비스·테스트·페이지를 만드는 기술.<br/>
            학생의 아이디어가 <span className="text-white font-bold">하루 만에 실제 서비스 URL</span>로 구현됩니다.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {[
            {
                icon: <MousePointer2 className="w-8 h-8 text-white" />,
                title: "No-Code",
                desc: "복잡한 코딩 교육 없이 직관적인 툴로 제작"
            },
            {
                icon: <Globe className="w-8 h-8 text-white" />,
                title: "Live URL",
                desc: "이미지 파일이 아닌 접속 가능한 웹사이트 생성"
            },
            {
                icon: <Share2 className="w-8 h-8 text-white" />,
                title: "Viral",
                desc: "SNS, 카카오톡으로 즉시 공유되어 자동 홍보"
            }
        ].map((item, idx) => (
            <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bento-card p-10 flex flex-col items-center text-center group hover:bg-white/[0.05]"
            >
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(255,94,0,0.2)]">
                    {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
        ))}
      </div>
    </div>
  );
};