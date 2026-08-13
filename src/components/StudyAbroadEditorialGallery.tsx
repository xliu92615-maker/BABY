import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import r01 from '../assets/images/RRRR-01.jpg';
import r02 from '../assets/images/RRRR-02.jpg';
import r03 from '../assets/images/RRRR-03.jpg';
import r04 from '../assets/images/RRRR-04.jpg';
import r05 from '../assets/images/RRRR-05.jpg';
import r06 from '../assets/images/RRRR-06.jpg';
import r07 from '../assets/images/RRRR-07.jpg';
import r08 from '../assets/images/RRRR-08.jpg';

const editorialPhotos = [r01, r02, r03, r04, r05, r06, r07, r08];

export default function StudyAbroadEditorialGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % editorialPhotos.length : null));
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + editorialPhotos.length) % editorialPhotos.length : null));
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
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#002B5B]/5 rounded-full blur-3xl" />
        
        {/* Faint Airplane Route / Gold Dots / Map Lines */}
        <svg className="absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-6xl h-full text-[#002B5B]/5" viewBox="0 0 1000 600" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
          <path d="M 50,300 Q 300,100 600,200 T 950,400" />
          <path d="M 100,500 Q 400,200 800,550" />
        </svg>
        <div className="absolute left-[20%] top-[20%] w-2 h-2 bg-[#C5A059]/30 rounded-full" />
        <div className="absolute right-[25%] top-[40%] w-3 h-3 bg-[#C5A059]/30 rounded-full" />
        <div className="absolute left-[35%] bottom-[25%] w-2 h-2 bg-[#C5A059]/30 rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] mb-4 tracking-tight">國際遊學精彩紀錄</h2>
          <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          
          {/* Item 0: 2x2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedIndex(0)}
            className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 group cursor-pointer rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[0]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/20 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Item 1: 2x1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setSelectedIndex(1)}
            className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1 group cursor-pointer rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[1]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/15 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Item 2: 1x1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setSelectedIndex(2)}
            className="col-span-1 md:col-span-1 md:row-span-1 group cursor-pointer rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[2]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/15 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Item 3: 1x1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setSelectedIndex(3)}
            className="col-span-1 md:col-span-1 md:row-span-1 group cursor-pointer rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[3]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/15 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Item 4: 1x2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setSelectedIndex(4)}
            className="col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2 group cursor-pointer rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[4]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/15 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Item 5: 1x2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setSelectedIndex(5)}
            className="col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2 group cursor-pointer rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[5]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/15 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Item 6: 2x1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setSelectedIndex(6)}
            className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1 group cursor-pointer rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[6]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/15 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Item 7: 2x1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => setSelectedIndex(7)}
            className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1 group cursor-pointer rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] border-white relative bg-slate-50"
          >
            <img src={editorialPhotos[7]} alt="國際遊學紀錄" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/15 transition-colors duration-300 pointer-events-none" />
          </motion.div>

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
                src={editorialPhotos[selectedIndex]}
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
