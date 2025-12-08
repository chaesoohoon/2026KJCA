import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Target } from 'lucide-react';

const data = [
  { name: '2025', value: 1.3, label: '현재 1.3억' },
  { name: '2026', value: 2.3, label: '목표 2.3억+' },
];

export const RevenueChart: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold uppercase tracking-wider mb-6">
                Growth Plan
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                매출 <span className="text-tangerine-gradient">200%</span><br/>성장 전략
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                단순 수강생 모집이 아닙니다.<br/>
                <span className="text-white">고급 과정 신설</span>과 <span className="text-white">자동화 홍보 시스템</span>으로<br/>
                구조적인 성장을 만듭니다.
            </p>

            <div className="space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <Target className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">고객 생애 가치(LTV) 확대</h4>
                        <p className="text-sm text-gray-500">기초반 → 심화반 → AI 브랜딩반으로 이어지는 로드맵</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                     <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <TrendingUp className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">마케팅 비용 0원 도전</h4>
                        <p className="text-sm text-gray-500">학생들의 결과물이 바이럴 되어 자연 유입 증가</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Chart Section */}
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent relative">
             <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis 
                        dataKey="name" 
                        stroke="#666" 
                        fontSize={14} 
                        tickLine={false} 
                        axisLine={false} 
                        dy={10}
                    />
                    <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '12px', color: '#fff' }}
                    />
                    <Bar dataKey="value" radius={[12, 12, 12, 12]} barSize={60} animationDuration={1500}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 1 ? '#ff4d00' : '#333'} />
                    ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            
            {/* Decoration */}
            <div className="absolute top-10 right-10 text-right">
                <div className="text-4xl font-bold text-white">2.3억+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">Goal Revenue</div>
            </div>
        </div>
      </div>
    </div>
  );
};