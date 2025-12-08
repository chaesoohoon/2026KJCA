import React from 'react';
import { motion } from 'framer-motion';
import { Layout, BrainCircuit, Users } from 'lucide-react';

export const Slide4_VibeStrategies: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        className="mb-10 max-w-6xl mx-auto w-full"
      >
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Action Plan</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">바이브코딩 원데이 클래스 전략</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full h-[600px] md:h-[450px]">
        {/* Card 1 */}
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="bento-card p-8 flex flex-col relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>
            <BrainCircuit className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold mb-2">심리 테스트 제작</h3>
            <p className="text-gray-400 text-sm mb-6">"나는 어떤 디자이너일까?"</p>
            
            <ul className="mt-auto space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">✔ 학생 질문 설계 + AI 생성</li>
                <li className="flex gap-2">✔ 결과 페이지 디자인</li>
                <li className="flex gap-2 text-accent">✔ 바이럴 효과 극대화</li>
            </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="bento-card p-8 flex flex-col relative overflow-hidden group border-accent/40"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px] -mr-10 -mt-10"></div>
            <Layout className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-bold mb-2">웹 프레젠테이션</h3>
            <p className="text-gray-400 text-sm mb-6">슬라이드 대신 웹사이트로 발표</p>
            
            <ul className="mt-auto space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">✔ 개인 포트폴리오 페이지</li>
                <li className="flex gap-2">✔ 기업 제출용 PR 페이지</li>
                <li className="flex gap-2 text-accent">✔ "학생 결과물 = 학원 콘텐츠"</li>
            </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="bento-card p-8 flex flex-col relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>
            <Users className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-2">확장 운영 모델</h3>
            <p className="text-gray-400 text-sm mb-6">고교생 & B2B 특강</p>
            
            <ul className="mt-auto space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">✔ 고교생 입시 자소서 페이지</li>
                <li className="flex gap-2">✔ 기업용 고객 심리 테스트</li>
                <li className="flex gap-2 text-accent">✔ 교육/홍보/매출 동시 충족</li>
            </ul>
        </motion.div>
      </div>
    </div>
  );
};