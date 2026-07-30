import React from 'react';
import { motion } from 'motion/react';
import video1 from '../assets/videos/AAAAA-001.MP4';
import video2 from '../assets/videos/AAAAA-002.MP4';

export default function HomeVideoShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Video 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="w-full aspect-video rounded-[20px] overflow-hidden shadow-lg bg-slate-100">
              <video 
                src={video1}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-[#002B5B] font-bold text-lg">
              親子活動精彩回顧
            </p>
          </motion.div>

          {/* Video 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <div className="w-full aspect-video rounded-[20px] overflow-hidden shadow-lg bg-slate-100">
              <video 
                src={video2}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-[#002B5B] font-bold text-lg">
              孩子成長紀錄
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
