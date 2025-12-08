import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { X, Check } from 'lucide-react';

export const Slide14_WeaponThree: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-12 bg-[#050505]">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full h-[85vh] flex flex-col"
      >
        <motion.div variants={blurIn} custom={0} className="mb-8 shrink-0 flex items-center gap-4">
             <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Secret Weapon 03</span>
             <div className="h-px bg-white/20 flex-grow"></div>
             <h2 className="font-display font-black text-4xl text-white tracking-tight">THE QUALITY GAP</h2>
        </motion.div>

        <div className="flex-grow flex flex-col lg:flex-row gap-8">
            
            {/* Low Hierarchy: General Class */}
            <motion.div 
                variants={blurIn} 
                custom={1} 
                className="lg:w-[30%] p-8 rounded-3xl bg-[#111] border border-white/5 flex flex-col justify-center relative overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-500"
            >
                <div className="mb-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">
                        <X size={12} /> Others
                    </div>
                    <h3 className="text-2xl font-bold text-gray-400 mb-2">흔한 AI 수업</h3>
                    <p className="text-sm text-gray-500">"AI가 만든 티가 나는 결과물"</p>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-black rounded-xl border border-white/5">
                        <div className="w-full aspect-video bg-gray-800 rounded mb-3 opacity-20"></div>
                        <div className="h-2 w-2/3 bg-gray-800 rounded opacity-20"></div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        단순히 프롬프트 입력법만 가르쳐<br/>
                        디자인 완성도가 현저히 떨어짐
                    </p>
                </div>
            </motion.div>

            {/* High Hierarchy: The Kukje Standard */}
            <motion.div 
                variants={blurIn} 
                custom={2} 
                className="lg:w-[70%] p-10 md:p-16 rounded-3xl bg-gradient-to-br from-accent to-red-600 flex flex-col justify-center relative overflow-hidden group shadow-[0_20px_50px_rgba(255,94,0,0.15)]"
            >
                {/* Visual Effects */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-1000"></div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white text-xs font-black uppercase tracking-widest mb-8">
                        <Check size={14} strokeWidth={4} /> The Kukje Standard
                    </div>

                    <h3 className="font-display font-black text-5xl md:text-7xl text-white mb-6 leading-[0.9]">
                        PROFESSIONAL<br/>
                        QUALITY
                    </h3>
                    
                    <p className="text-xl md:text-3xl text-white/90 font-bold leading-relaxed max-w-2xl">
                        "전문가가 작업한 듯한 압도적 차이"<br/>
                        <span className="text-black/70 font-medium text-lg md:text-xl block mt-4">
                            더국제만의 <span className="border-b-2 border-black/50">디자인/영상 교육 노하우</span>가 AI와 결합되어,<br/>
                            결과물의 차원이 다른 퀄리티를 만들어냅니다.
                        </span>
                    </p>
                </div>

                <div className="relative z-10 mt-12 pt-8 border-t border-white/20 flex items-center gap-12">
                     <div>
                        <div className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Brand Asset</div>
                        <div className="text-3xl font-black text-white">PRO LEVEL</div>
                     </div>
                     <div className="hidden md:block w-px h-12 bg-white/20"></div>
                     <div className="hidden md:block">
                        <div className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Marketing</div>
                        <div className="text-3xl font-black text-white">VIRAL READY</div>
                     </div>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};