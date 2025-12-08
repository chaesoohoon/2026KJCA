import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { TrendingUp, MapPin, Flag } from 'lucide-react';

export const Slide10_MarketOpportunity: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-[#050505]">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <motion.div variants={blurIn} custom={0} className="mb-8 flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-accent"></span>
             <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Market Analysis</span>
        </motion.div>

        <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-8xl text-white mb-16 leading-[0.9]">
            MARKET<br/>
            <span className="text-accent">OPPORTUNITY</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div variants={blurIn} custom={2} className="group relative p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors overflow-hidden">
                <div className="absolute -right-4 -top-10 text-[10rem] font-display font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors select-none">
                    01
                </div>
                <div className="relative z-10">
                    <TrendingUp className="text-gray-500 w-10 h-10 mb-6 group-hover:text-white transition-colors" />
                    <h3 className="text-4xl font-display font-bold text-white mb-4 leading-tight">
                        METRO<br/>WAVE
                    </h3>
                    <p className="text-lg text-gray-400 font-medium leading-relaxed">
                        수도권은 이미<br/>
                        <span className="text-white border-b border-accent/50 pb-1">AI 창작 교육</span>으로<br/>
                        빠르게 이동 중
                    </p>
                </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={blurIn} custom={3} className="group relative p-8 border border-white/10 bg-white/[0.02] hover:bg-blue-900/[0.1] hover:border-blue-500/30 transition-colors overflow-hidden">
                <div className="absolute -right-4 -top-10 text-[10rem] font-display font-black text-white/[0.03] group-hover:text-blue-500/[0.05] transition-colors select-none">
                    02
                </div>
                <div className="relative z-10">
                    <MapPin className="text-gray-500 w-10 h-10 mb-6 group-hover:text-blue-500 transition-colors" />
                    <h3 className="text-4xl font-display font-bold text-white mb-4 leading-tight">
                        BLUE<br/>OCEAN
                    </h3>
                    <p className="text-lg text-gray-400 font-medium leading-relaxed">
                        광주 첨단지구 내<br/>
                        <span className="text-blue-500 font-bold">경쟁자 없는</span><br/>
                        무주공산 시장
                    </p>
                </div>
            </motion.div>

             {/* Pillar 3 */}
             <motion.div variants={blurIn} custom={4} className="group relative p-8 border border-white/10 bg-white/[0.02] hover:bg-accent/[0.05] hover:border-accent/30 transition-colors overflow-hidden">
                <div className="absolute -right-4 -top-10 text-[10rem] font-display font-black text-white/[0.03] group-hover:text-accent/[0.05] transition-colors select-none">
                    03
                </div>
                <div className="relative z-10">
                    <Flag className="text-gray-500 w-10 h-10 mb-6 group-hover:text-accent transition-colors" />
                    <h3 className="text-4xl font-display font-bold text-white mb-4 leading-tight">
                        FIRST<br/>MOVER
                    </h3>
                    <p className="text-lg text-gray-400 font-medium leading-relaxed">
                        지금 시작하면<br/>
                        <span className="text-accent font-bold">확실한 선점 효과</span><br/>
                        확보 가능
                    </p>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};