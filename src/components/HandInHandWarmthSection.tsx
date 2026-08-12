import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ww01 from "../assets/images/ww-01.jpg";
import ww02 from "../assets/images/ww-02.jpg";
import ww03 from "../assets/images/ww-03.jpg";

const warmthImages = [
  ww01,
  ww02,
  ww03
];

export default function HandInHandWarmthSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % warmthImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % warmthImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? warmthImages.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const scrollToGallery = () => {
    const gallery = document.getElementById('photo-slider');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: 35% */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center order-1 lg:order-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#FF6600]" />
            <h2 className="text-3xl font-black text-[#002B5B] tracking-tight">
              讓溫暖走進每一個角落
            </h2>
          </div>
          
          <h3 className="text-xl font-bold text-[#C5A059] mb-8 leading-relaxed">
            讓愛不只停留在今天；<br className="hidden md:block" />讓善意不只感動一個人
          </h3>

          <div className="space-y-5 text-slate-600 font-medium leading-relaxed mb-8">
            <p>
              我們相信，公益不只是一次性的付出，而是一份願意持續陪伴的承諾。每一箱物資、每一次關懷、每一段同行，都可能成為他人重新出發的力量。
            </p>
            <p>
              透過物資捐贈、社區關懷、弱勢陪伴及教育公益行動，我們希望將實際需要的資源，送到真正需要幫助的人手中，讓善意不只被看見，更能真正發揮作用。
            </p>
            <p>
              當更多人願意伸出手，溫暖就能走得更遠。我們將持續串聯家長、孩子與社會夥伴，讓每一次參與，都成為改變社會的一小步。
            </p>
          </div>

          <div>
            <button 
              onClick={scrollToGallery}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-[#002B5B] rounded-full hover:bg-[#003B7B] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2"
            >
              了解更多
            </button>
          </div>
        </div>

        {/* Right Column: 65% Carousel */}
        <div className="w-full lg:w-[65%] order-2 lg:order-2">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 aspect-video group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => setTouchStart(null)}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={warmthImages[currentIndex]}
                alt={`溫暖公益活動 ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                loading="lazy"
              />
            </AnimatePresence>

            {/* Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#002B5B] hover:bg-white hover:scale-110 transition-all shadow-md focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="mr-0.5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#002B5B] hover:bg-white hover:scale-110 transition-all shadow-md focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="ml-0.5" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-10">
              {warmthImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === currentIndex 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
