
import React from 'react';
import { motion } from 'framer-motion';
import { blurIn } from '../../utils/animations';
import { Gift, Heart, Smartphone, ExternalLink, Sparkles } from 'lucide-react';

export const Slide17_Gift: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const targetUrl = "https://talk-joy.vercel.app/";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&color=000000&bgcolor=ffffff&margin=10&data=${encodeURIComponent(targetUrl)}`;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-12 bg-black relative overflow-hidden text-center">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div 
            animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"
         />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <motion.div
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="z-10 max-w-4xl w-full flex flex-col items-center"
      >
        <motion.div variants={blurIn} custom={0} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-xs backdrop-blur-md">
                <Gift size={14} />
                <span>Year-End Bonus Track</span>
            </div>
        </motion.div>

        <motion.h2 variants={blurIn} custom={1} className="font-display font-black text-6xl md:text-8xl text-white leading-[0.85] mb-8 tracking-tighter">
            NO MORE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">SILENT NIGHT.</span>
        </motion.h2>

        <motion.p variants={blurIn} custom={2} className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed mb-12 max-w-2xl break-keep">
            어색한 연말 모임, 스마트폰만 보실 건가요?<br/>
            서로의 마음을 잠금 해제하는 <span className="text-white font-bold border-b-2 border-accent pb-1">대화 치트키</span>를 선물합니다.
        </motion.p>

        {/* QR Code Card */}
        <motion.div 
            variants={blurIn} 
            custom={3} 
            className="relative group"
        >
            <div className="absolute -inset-1 bg-gradient-to-br from-accent via-red-500 to-purple-600 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative bg-[#0a0a0a] p-8 md:p-10 rounded-[2.2rem] border border-white/10 flex flex-col items-center shadow-2xl">
                <div className="bg-white p-3 rounded-2xl mb-6 overflow-hidden relative">
                    <img 
                        src={qrUrl} 
                        alt="Talk Joy QR Code" 
                        className="w-40 h-40 md:w-48 md:h-48 object-contain mix-blend-multiply"
                    />
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black rounded-br-lg"></div>
                </div>
                
                <div className="flex items-center gap-2 text-white font-bold mb-2 text-lg">
                    <Sparkles size={18} className="text-accent fill-accent" />
                    <span>Scan to Play</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                     <p className="text-gray-500 text-xs">설치 없는 웹 게임 · 100% 무료</p>
                </div>

                <a 
                    href={targetUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs transition-colors flex items-center gap-2 border border-white/5"
                >
                    {targetUrl} <ExternalLink size={10} />
                </a>
            </div>
        </motion.div>

        <motion.div variants={blurIn} custom={4} className="mt-16 flex flex-col items-center gap-3">
             <div className="h-8 w-px bg-gradient-to-b from-gray-800 to-transparent"></div>
             <div className="flex items-center gap-2 text-gray-600 text-xs tracking-[0.2em] uppercase font-bold">
                From Code to Connection
             </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
