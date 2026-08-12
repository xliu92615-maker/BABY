import React from 'react';
import { motion } from 'motion/react';
import homeVideo from '../assets/videos/jjjj-001.MP4';

export default function HomeVideoShowcase() {
  return (
    <section className="py-20 bg-white relative overflow-hidden z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] mb-4">
            多元學習・寓教於樂
          </h2>
          <p className="text-lg text-slate-600 font-bold max-w-2xl mx-auto">
            透過多元課程與精彩活動，陪伴孩子快樂探索、勇敢成長。
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorations */}
          {/* 淡金色光暈 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#C5A059]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          {/* 左上角小型金色圓點 */}
          <svg className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-16 h-16 text-[#C5A059]/40 -z-10 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="10" cy="10" r="4"/>
            <circle cx="30" cy="10" r="4"/>
            <circle cx="50" cy="10" r="4"/>
            <circle cx="10" cy="30" r="4"/>
            <circle cx="30" cy="30" r="4"/>
            <circle cx="50" cy="30" r="4"/>
            <circle cx="10" cy="50" r="4"/>
            <circle cx="30" cy="50" r="4"/>
            <circle cx="50" cy="50" r="4"/>
          </svg>

          {/* 右下角深藍色弧線 */}
          <svg className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 text-[#002B5B]/20 -z-10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
            <path d="M 0 100 Q 100 100 100 0" />
          </svg>
          
          <div className="relative w-full aspect-video rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl bg-slate-100 border border-[#C5A059]/50">
            <video 
              src={homeVideo}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover rounded-[16px] md:rounded-[24px]"
            />
          </div>
          
          <p className="mt-8 text-center text-[#556987] md:text-[#002B5B] font-bold text-base md:text-lg tracking-wide">
            陪伴孩子從體驗中學習，在探索中成長。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
