import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';

export const Slide13_WeaponTwo: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tracks = [
    { cat: "STORYTELLING", title: "동화 · 웹툰 창작", desc: "나만의 스토리 시각화" },
    { cat: "CHARACTER", title: "AI 캐릭터 디자인", desc: "매력적인 IP 제작 실습" },
    { cat: "GAMING", title: "나만의 게임 만들기", desc: "코드 없이 만드는 게임" },
    { cat: "CREATOR", title: "유튜브 실험실", desc: "1인 미디어 콘텐츠 제작" },
    { cat: "INVENTION", title: "미래 발명 프로젝트", desc: "상상을 현실로 기획" },
    { cat: "METAVERSE", title: "스토리 맵 생성", desc: "세계관 구축 및 시각화" },
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isActive) return;
    
    // If user is hovering, don't auto-rotate
    if (hoverIndex !== null) {
        return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tracks.length);
    }, 1500); // Change every 1.5 seconds for better flow

    return () => clearInterval(interval);
  }, [isActive, hoverIndex, tracks.length]);

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-24 bg-[#080808]">
      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/10 pb-8 mb-12">
            <motion.div variants={blurIn} custom={0}>
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Secret Weapon 02</span>
                <h2 className="font-display font-black text-5xl md:text-8xl text-white tracking-tighter leading-none">
                    UNLIMITED<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">UNIVERSE</span>
                </h2>
            </motion.div>
            <motion.div variants={blurIn} custom={1} className="mt-6 md:mt-0 text-right">
                 <p className="text-gray-400 text-lg font-medium">
                    단일 커리큘럼이 아닌<br/>
                    <span className="text-white font-bold">6가지 창작 세계관</span>의 무한 확장
                 </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {tracks.map((track, idx) => {
                // Determine if this item is active (either hovered or auto-played)
                const isCurrent = hoverIndex !== null ? hoverIndex === idx : activeIndex === idx;
                
                return (
                    <motion.div 
                        key={idx} 
                        variants={blurIn} 
                        custom={idx + 2}
                        onMouseEnter={() => {
                            setHoverIndex(idx);
                            setActiveIndex(idx); // Update active index immediately on hover
                        }}
                        onMouseLeave={() => setHoverIndex(null)}
                        className={`group flex items-center justify-between py-6 border-b transition-all duration-300 cursor-default ${isCurrent ? 'border-accent bg-white/[0.03] pl-4' : 'border-white/5'}`}
                    >
                        <div>
                            <div className={`font-display font-bold text-3xl transition-colors duration-300 uppercase mb-1 ${isCurrent ? 'text-white' : 'text-gray-700'}`}>
                                {track.cat}
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-base font-bold transition-colors duration-300 ${isCurrent ? 'text-accent' : 'text-gray-500'}`}>
                                    {track.title}
                                </span>
                                <span className={`text-xs transition-colors duration-300 hidden md:inline-block ${isCurrent ? 'text-gray-400' : 'text-gray-600'}`}>
                                    — {track.desc}
                                </span>
                            </div>
                        </div>
                        <div className={`transition-all duration-300 transform ${isCurrent ? 'opacity-100 translate-x-0 text-accent pr-4' : 'opacity-0 translate-x-4'}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </motion.div>
    </div>
  );
};