import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2025', value: 1.3 },
  { name: '2026 Goal', value: 2.3 },
];

export const Slide7_Revenue: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Chart Section */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bento-card p-10 bg-gradient-to-b from-gray-900 to-black border-accent/20 relative"
        >
             <h3 className="text-gray-400 font-bold tracking-widest text-sm mb-8">REVENUE GROWTH</h3>
             <div className="h-[300px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#555" tick={{fill: '#888'}} axisLine={false} tickLine={false} />
                        <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={80}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 1 ? '#FF5E00' : '#333'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="absolute top-1/2 right-10 text-right">
                 <div className="text-5xl font-black text-white">2.3<span className="text-2xl text-gray-500">억+</span></div>
                 <div className="text-accent text-sm font-bold mt-2">▲ 200% TARGET</div>
             </div>
        </motion.div>

        {/* Strategies Text */}
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                매출 상승 전략<br/>
                <span className="text-gray-500 text-3xl">4 Core Pillars</span>
            </h2>

            <ul className="space-y-6">
                {[
                    { title: "고급 포트폴리오 심화 과정 신설", desc: "AI 브랜딩 실무반 / 유튜브 심화반 / 취업대비반" },
                    { title: "홍보 자동화 (Zero Cost)", desc: "바이브코딩 테스트 페이지 & 영상 시리즈 자동 확산" },
                    { title: "AI 전문 학원 포지셔닝", desc: "지역 내 'AI 실무 교육 1위 센터' 브랜드 선점" },
                    { title: "지역 특화 마케팅", desc: "첨단/광산 중심 네이버 지역광고 + 커뮤니티 장악" }
                ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-accent shrink-0">
                            {idx + 1}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
      </div>
    </div>
  );
};