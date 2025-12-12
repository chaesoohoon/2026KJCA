
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Shield, Zap, Sword, Heart, Skull, Trophy, Star, Gamepad2, BatteryWarning, Map as MapIcon } from 'lucide-react';

interface Achievement {
  id: number;
  label: string;
  count: string;
  icon: React.ElementType;
  exp: string; // Funny EXP text
  color: string;
}

const achievements: Achievement[] = [
  { id: 1, label: "고장난 컴퓨터 고치기", count: "25,674회", icon: Sword, exp: "+99 STR", color: "text-red-500" },
  { id: 2, label: "지각생 전화하기", count: "34,564회", icon: Zap, exp: "+99 Patience", color: "text-yellow-400" },
  { id: 3, label: "전단지 나눠주기", count: "432회", icon: MapIcon, exp: "+50 Speed", color: "text-green-400" },
  { id: 4, label: "일반고 어머니 상담", count: "12,352회", icon: Shield, exp: "+999 Defense", color: "text-blue-400" },
  { id: 5, label: "고장난 전구 고치기", count: "5,453회", icon: Zap, exp: "+20 Electric", color: "text-yellow-200" },
  { id: 6, label: "홍보이미지 제작", count: "452회", icon: Star, exp: "+30 Art", color: "text-purple-400" },
  { id: 7, label: "박주임님에게 '네?' 하기", count: "532회", icon: Skull, exp: "-10 Sanity", color: "text-gray-400" },
  { id: 8, label: "어르신 플러팅 받기", count: "235회", icon: Heart, exp: "+99 Charm", color: "text-pink-500" },
];

export const Slide03_5_HiddenAchievements: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [hp, setHp] = useState(100);

  // HP Drain Effect
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setHp(prev => (prev > 5 ? prev - 5 : 5));
      }, 200);
      return () => clearInterval(interval);
    } else {
        setHp(100);
    }
  }, [isActive]);

  return (
    <div className="w-full h-full flex flex-col justify-center px-4 md:px-12 bg-[#1a0b2e] font-sans relative overflow-hidden text-white">
      
      {/* Background Grid (Retro Game Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#4a00e0 1px, transparent 1px), linear-gradient(90deg, #4a00e0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-[90rem] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        
        {/* Left Column: Character Stats */}
        <div className="lg:col-span-4 bg-black/60 border-4 border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-center">
            <motion.div variants={blurIn} custom={0} className="flex flex-col items-center mb-10">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-white flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(79,70,229,0.6)]">
                    <Gamepad2 className="text-white w-16 h-16 md:w-20 md:h-20" />
                </div>
                
                {/* Level Badge Updated */}
                <div className="bg-yellow-400 text-black font-black px-5 py-2 rounded-full text-lg mb-4 shadow-lg transform hover:scale-110 transition-transform whitespace-nowrap">
                    LV. 1 말단사원
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-md text-center">
                    PLAYER 01
                </h2>
            </motion.div>

            {/* HP/MP Bars - Enlarged */}
            <div className="space-y-6 mb-10 w-full px-2">
                <motion.div variants={blurIn} custom={1}>
                    <div className="flex justify-between text-base font-bold mb-2">
                        <span className="text-red-400 flex items-center gap-2"><Heart size={16} fill="currentColor"/> HP (체력)</span>
                        <span className="text-red-400">{hp}/100</span>
                    </div>
                    <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-600 shadow-inner">
                        <div 
                            className="h-full bg-red-500 transition-all duration-200" 
                            style={{ width: `${hp}%` }}
                        ></div>
                    </div>
                </motion.div>

                <motion.div variants={blurIn} custom={2}>
                    <div className="flex justify-between text-base font-bold mb-2">
                        <span className="text-blue-400 flex items-center gap-2"><Zap size={16} fill="currentColor"/> MP (멘탈)</span>
                        <span className="text-blue-400 animate-pulse">CRITICAL</span>
                    </div>
                    <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-600 shadow-inner">
                        <div className="h-full bg-blue-500 w-[5%] animate-pulse"></div>
                    </div>
                </motion.div>
            </div>

            {/* Passive Skills - Enhanced Visibility */}
            <motion.div variants={blurIn} custom={3} className="space-y-3 w-full px-2 hidden md:block">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-700 pb-2">Passive Skills</div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 text-lg font-bold flex justify-between items-center shadow-sm">
                    <span className="flex items-center gap-2">☕ 카페인 중독</span>
                    <span className="text-green-400 text-xs px-2 py-1 bg-green-400/20 rounded font-black">ON</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-lg font-bold flex justify-between items-center text-gray-500 shadow-sm">
                    <span className="flex items-center gap-2">🏃 칼퇴 본능</span>
                    <span className="text-gray-600 text-xs px-2 py-1 bg-gray-800 rounded font-black">LOCKED</span>
                </div>
            </motion.div>
        </div>

        {/* Right Column: Quest Log */}
        <div className="lg:col-span-8 flex flex-col justify-center pl-0 lg:pl-6">
            <motion.div variants={blurIn} custom={0} className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <div className="p-3 bg-yellow-500/20 rounded-xl border border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Trophy className="text-yellow-400 w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tight">2025 QUEST LOG</h3>
                    <p className="text-gray-400 text-sm md:text-base font-mono mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        시스템 로그: 업무 과부하 감지됨
                    </p>
                </div>
            </motion.div>

            {/* Changed grid breakpoint to xl:grid-cols-2 to prevent crowding on tablets */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-5">
                {achievements.map((item, idx) => (
                    <motion.div 
                        key={item.id}
                        variants={blurIn}
                        custom={idx + 2}
                        className="relative overflow-hidden group bg-black/60 border border-white/10 hover:border-accent hover:bg-white/10 transition-all duration-200 p-4 md:p-6 rounded-2xl flex items-center justify-between shadow-lg hover:shadow-accent/20"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
                        
                        <div className="flex items-center gap-4 md:gap-5 relative z-10 flex-1 min-w-0">
                            <div className={`p-3 md:p-4 rounded-2xl bg-black/50 border border-white/10 ${item.color} shadow-inner shrink-0`}>
                                <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="text-gray-200 font-bold text-lg md:text-xl leading-tight mb-1 truncate">{item.label}</div>
                                <div className="text-xs md:text-sm text-gray-500 font-mono bg-black/40 px-2 py-0.5 rounded-md inline-block border border-white/5 truncate max-w-full">{item.exp}</div>
                            </div>
                        </div>
                        
                        <div className="text-right pl-4 shrink-0">
                             <div className="text-2xl md:text-3xl font-black text-white tracking-tighter whitespace-nowrap">{item.count}</div>
                             <div className="text-[10px] md:text-xs text-green-400 font-black uppercase tracking-wider mt-1">Completed</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Warning Banner - Enlarged */}
            <motion.div 
                variants={blurIn} 
                custom={10}
                className="mt-8 p-6 bg-red-600/20 border-2 border-red-500/50 rounded-2xl flex items-center justify-center gap-4 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:bg-red-600/30 transition-colors"
            >
                <BatteryWarning className="text-red-500 w-8 h-8" />
                <span className="text-red-400 font-black text-xl uppercase tracking-widest">Warning: 휴가가 시급합니다</span>
            </motion.div>
        </div>

      </motion.div>
    </div>
  );
};
