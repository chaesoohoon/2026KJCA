import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Layers, Zap, Map, Rocket } from 'lucide-react';

export const Slide11_SuccessStrategy: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-black">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
            <motion.div variants={blurIn} custom={0}>
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Winning Strategy</span>
                <h2 className="font-display font-black text-6xl md:text-8xl text-white leading-[0.9]">
                    WHY <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">US?</span>
                </h2>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Local Fit */}
            <motion.div 
                variants={blurIn} 
                custom={2} 
                className="p-10 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between h-[300px] group"
            >
                <div>
                    <Map className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors mb-6" />
                    <h3 className="text-4xl font-display font-bold text-white mb-2">LOCAL FIT</h3>
                    <p className="text-xl text-gray-400">지역 맞춤형 운영 구조</p>
                </div>
                <div className="text-gray-500 text-sm font-medium">
                    학교·기관 연계 최적화<br/>
                    체험 → 정규반 전환 모델
                </div>
            </motion.div>

            {/* Card 2: Infrastructure */}
            <motion.div 
                variants={blurIn} 
                custom={3} 
                className="p-10 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between h-[300px] group"
            >
                <div>
                    <Layers className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors mb-6" />
                    <h3 className="text-4xl font-display font-bold text-white mb-2">INFRA</h3>
                    <p className="text-xl text-gray-400">압도적 교육 인프라</p>
                </div>
                <div className="text-gray-500 text-sm font-medium">
                    Design + Video + AI<br/>
                    로컬 유일 융합 환경
                </div>
            </motion.div>

            {/* Card 3: Dopamine */}
            <motion.div 
                variants={blurIn} 
                custom={4} 
                className="p-10 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between h-[300px] group"
            >
                <div>
                    <Zap className="w-10 h-10 text-gray-400 group-hover:text-yellow-500 transition-colors mb-6" />
                    <h3 className="text-4xl font-display font-bold text-white mb-2">DOPAMINE</h3>
                    <p className="text-xl text-gray-400">즉각적 결과물과 반응</p>
                </div>
                <div className="text-gray-500 text-sm font-medium">
                    8주 완성 프로젝트<br/>
                    학생 만족도 극대화
                </div>
            </motion.div>

            {/* Card 4: Roadmap */}
            <motion.div 
                variants={blurIn} 
                custom={5} 
                className="p-10 bg-accent text-black flex flex-col justify-between h-[300px] hover:bg-white transition-colors duration-500"
            >
                <div>
                    <Rocket className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-4xl font-display font-bold text-black mb-2">ROADMAP</h3>
                    <p className="text-xl font-bold text-black/70">Market Leader Strategy</p>
                </div>
                <div className="text-black font-bold text-lg leading-tight">
                    "광주 첨단 <span className="border-b-2 border-black">바이브코딩 1위</span><br/>
                    브랜드 포지셔닝 달성"
                </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};