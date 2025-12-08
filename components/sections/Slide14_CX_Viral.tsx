import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Heart, Share2, Users, TrendingUp } from 'lucide-react';

export const Slide14_CX_Viral: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-12 bg-black relative">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <motion.div variants={blurIn} custom={0} className="text-center mb-16">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">The Growth Engine</span>
            <h2 className="font-display font-black text-5xl md:text-7xl text-white mt-4">
                THE VIRAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600">LOOP</span>
            </h2>
        </motion.div>

        {/* Viral Loop Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-accent to-gray-800 -z-10 transform -translate-y-1/2"></div>

            {/* Step 1 */}
            <motion.div variants={blurIn} custom={1} className="flex flex-col items-center text-center p-6 bg-black border border-white/10 rounded-2xl relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 shadow-[0_0_30px_rgba(255,94,0,0.3)]">
                    <Heart size={32} fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Overwhelming<br/>Experience</h3>
                <p className="text-sm text-gray-400">압도적 경험</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={blurIn} custom={2} className="flex flex-col items-center text-center p-6 bg-black border border-white/10 rounded-2xl relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                    <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Becomes<br/>A Fan</h3>
                <p className="text-sm text-gray-400">충성 팬덤 형성</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={blurIn} custom={3} className="flex flex-col items-center text-center p-6 bg-black border border-white/10 rounded-2xl relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                    <Share2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Voluntary<br/>Share</h3>
                <p className="text-sm text-gray-400">자발적 바이럴</p>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={blurIn} custom={4} className="flex flex-col items-center text-center p-6 bg-accent border border-accent rounded-2xl relative z-10 shadow-[0_0_50px_rgba(255,94,0,0.4)]">
                <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center text-black mb-6">
                    <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Organic<br/>Growth</h3>
                <p className="text-sm text-black/70 font-bold">자연 매출 성장</p>
            </motion.div>
        </div>

        <motion.p variants={blurIn} custom={5} className="text-center text-xl text-gray-400 mt-16 max-w-3xl mx-auto">
            "우리가 만드는 <span className="text-white font-bold">강력한 고객 경험(CX)</span>은<br/>
            가장 비용 효율적이고 강력한 <span className="text-accent">마케팅 엔진</span>이 됩니다."
        </motion.p>
      </motion.div>
    </div>
  );
};