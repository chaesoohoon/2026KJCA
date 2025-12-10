
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { TrendingUp, Users, DollarSign, Newspaper, Info } from 'lucide-react';

export const Slide12_NewWave: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-[#050505] relative border-b border-white/5">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="mb-12 border-l-4 border-accent pl-8">
            <motion.span variants={blurIn} custom={0} className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                External Market Benchmark
            </motion.span>
            <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-5xl md:text-7xl text-white tracking-tight leading-none">
                PROOF OF<br/>
                <span className="text-accent">SUCCESS</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* News Card */}
            <motion.div 
                variants={blurIn} 
                custom={2} 
                className="relative p-1 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl"
            >
                <div className="bg-[#111] rounded-[1.4rem] p-8 md:p-10 relative overflow-hidden">
                    {/* Background Glint */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-16 -mt-16"></div>

                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-3">
                            <Newspaper className="text-accent" size={24} />
                            <span className="font-bold text-gray-300">MARKET REPORT</span>
                        </div>
                        <span className="text-xs font-mono text-gray-600">REF: FastCampus 2025</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                        타사 '바이브 코딩' 교육 성과
                    </h3>
                    <p className="text-gray-500 text-sm mb-10 flex items-center gap-2">
                        <Info size={14} /> 시장성 검증을 위한 외부 벤치마킹 데이터입니다.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                                <Users size={14} /> Market Demand
                            </div>
                            <div className="font-display font-black text-5xl md:text-6xl text-white">
                                3,000<span className="text-2xl text-accent">+</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">단기간 수강생 모집</div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                                <DollarSign size={14} /> Market Value
                            </div>
                            <div className="font-display font-black text-5xl md:text-6xl text-white">
                                4<span className="text-3xl text-gray-400">억</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">매출 규모 달성</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analysis Text */}
            <motion.div variants={blurIn} custom={3} className="pl-0 lg:pl-8">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                        "수도권 시장은 이미<br/>
                        <span className="text-accent border-b-2 border-accent/50 pb-1">검증</span>이 끝났습니다."
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        단 5개월 만에 3,000명의 수강생이 선택했다는 것은<br/>
                        <span className="text-white font-bold">기존 코딩 교육에 대한 갈증</span>이<br/>
                        그만큼 컸다는 반증입니다.
                    </p>
                </div>

                <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="text-red-500" size={20} />
                        <span className="font-bold text-white">NEXT STEP: GWANGJU</span>
                    </div>
                    <p className="text-sm text-gray-500">
                        이 폭발적인 수요는 이제 광주 첨단으로 이어집니다.<br/>
                        <span className="text-gray-300 font-bold">더국제가 그 수요를 가장 먼저 선점합니다.</span>
                    </p>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
