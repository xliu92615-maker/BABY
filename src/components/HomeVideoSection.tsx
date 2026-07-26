import React from 'react';
import { motion } from 'motion/react';
import videoHome from '../assets/videos/video-home.mp4';

export default function HomeVideoSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fff5f0] text-[#ff6600] text-sm font-bold rounded-full mb-6 w-fit border border-[#ff6600]/20">
              ✨ 精選課程
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#002B5B] mb-4 tracking-tight">
              多元學習
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#ff6600] mb-8">
              寓教於樂
            </h3>

            <div className="text-lg text-slate-600 font-medium leading-loose mb-10">
              <p>透過探索、體驗、實作與陪伴，</p>
              <p>讓每一位孩子在快樂中學習，</p>
              <p>在學習中成長，</p>
              <p>開啟屬於自己的無限可能。</p>
            </div>

            <div>
              <button 
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#002B5B] rounded-full hover:bg-[#003B7B] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:ring-offset-2"
              >
                <span className="text-[10px]">▶</span> 立即了解
              </button>
            </div>
          </motion.div>

          {/* Right Side: Video */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white/50 border-8 border-white aspect-video flex items-center justify-center">
              <video 
                controls 
                playsInline 
                preload="metadata"
                className="w-full h-full object-cover rounded-[1.5rem]"
              >
                <source src={videoHome} type="video/mp4" />
                您的瀏覽器不支援影片播放。
              </video>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
