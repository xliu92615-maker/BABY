import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ShieldCheck } from 'lucide-react';

import aa11 from '../assets/images/AA-11.jpg';
import aa12 from '../assets/images/AA-12.jpg';
import aa13 from '../assets/images/AA-13.jpg';
import aa15 from '../assets/images/AA-15.jpg';
import aa16 from '../assets/images/AA-16.jpg';
import jj04 from '../assets/images/JJ-04.jpg';
import jj05 from '../assets/images/JJ-05.jpg';
import jj06 from '../assets/images/JJ-06.jpg';
import jj07 from '../assets/images/JJ-07.jpg';
import jj08 from '../assets/images/JJ-08.jpg';

const footprintPhotos = [
  aa11,
  aa12,
  aa13,
  aa15,
  aa16,
  jj04,
  jj05,
  jj06,
  jj07,
  jj08
];

export default function StudyAbroadNewGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % footprintPhotos.length : null));
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + footprintPhotos.length) % footprintPhotos.length : null));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    setTouchStart(null);
  };

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#002B5B]/5 rounded-full blur-3xl" />
        {/* Subtle Map / Grid */}
        <svg className="absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-5xl h-40 text-[#002B5B]/10" viewBox="0 0 1000 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
          <path d="M 100,200 Q 300,0 500,100 T 900,150" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] mb-4 tracking-tight">國際學習・精彩足跡</h2>
          <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            從學習到交流，從台灣走向世界，每一次相遇都是成長的重要篇章。
          </p>
          <div className="mt-8 mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
              <ShieldCheck size={16} className="text-[#002B5B]" />
              <span className="text-sm font-medium text-[#002B5B]">以下照片均已取得家長同意授權發佈至本網站</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[26px]">
          {footprintPhotos.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-white bg-slate-50 relative aspect-video"
            >
              <img 
                src={src} 
                alt="國際學習精彩足跡"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 rounded-full p-2"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 hover:bg-black/40 rounded-full p-3"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 hover:bg-black/40 rounded-full p-3"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={footprintPhotos[selectedIndex]}
                alt="放大圖片"
                className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
