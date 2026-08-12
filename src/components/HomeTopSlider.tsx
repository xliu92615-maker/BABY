import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import rr16 from "../assets/images/RR-16.jpg";
import ee002 from "../assets/images/EE-002.jpg";

const sliderImages = [
  rr16,
  ee002
];

export default function HomeTopSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      handleNext();
      setTouchStart(null);
    } else if (diff < -50) {
      handlePrev();
      setTouchStart(null);
    }
  };

  return (
    <div 
      className="relative w-full h-[260px] md:h-[450px] lg:h-[650px] overflow-hidden group bg-slate-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={() => setTouchStart(null)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={sliderImages[currentIndex]}
          alt={`首頁輪播圖 ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30 pointer-events-none" />

      {/* Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-[#002B5B] hover:bg-white hover:scale-110 transition-all shadow-lg focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} className="mr-0.5" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 md:pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-[#002B5B] hover:bg-white hover:scale-110 transition-all shadow-lg focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight size={28} className="ml-0.5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 inset-x-0 flex justify-center gap-2.5 z-10">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none shadow-sm ${
              idx === currentIndex 
                ? 'w-8 bg-[#ff6600]' 
                : 'w-2.5 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
