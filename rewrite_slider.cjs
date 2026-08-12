const fs = require('fs');

const code = `import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

// Import new images
import rr01 from '../assets/images/RR-1.jpg';
import rr02 from '../assets/images/RR-2.jpg';
import rr03 from '../assets/images/RR-3.jpg';
import rr04 from '../assets/images/RR-4.jpg';
import rr05 from '../assets/images/RR-5.jpg';
import rr06 from '../assets/images/RR-6.jpg';
import rr07 from '../assets/images/RR-7.jpg';
import rr08 from '../assets/images/RR-8.jpg';
import rr09 from '../assets/images/RR-9.jpg';
import rr10 from '../assets/images/RR-10.jpg';
import rr11 from '../assets/images/RR-11.jpg';
import rr12 from '../assets/images/RR-12.jpg';
import rr13 from '../assets/images/RR-13.jpg';
import rr14 from '../assets/images/RR-14.jpg';
import rr15 from '../assets/images/RR-15.jpg';
import rr16 from '../assets/images/RR-16.jpg';

const images = [
  rr01, rr02, rr03, rr04, rr05, rr06, rr07, rr08,
  rr09, rr10, rr11, rr12, rr13, rr14, rr15, rr16
];

// SmartImage component to handle vertical vs horizontal photos automatically
function SmartImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [isVertical, setIsVertical] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.naturalHeight > target.naturalWidth) {
      setIsVertical(true);
    }
  };

  return (
    <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center relative">
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          isVertical ? "object-contain p-2" : "object-cover",
          className
        )}
      />
      {/* Background fill for vertical images */}
      {isVertical && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 pointer-events-none" 
          style={{ backgroundImage: \`url(\${src})\` }} 
        />
      )}
    </div>
  );
}

export default function HomeEventSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  const getIndices = () => {
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getIndices();

  // For touch events
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="relative py-24 bg-[#fdfcf9] border-t border-slate-100 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#C5A059] rounded-full blur-[100px] opacity-[0.05]" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#002B5B] rounded-full blur-[120px] opacity-[0.03]" />
      
      {/* Glow behind center image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C5A059]/20 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">樂共學活動回顧</h2>
          <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 font-medium">每一次參與、每一份笑容，都是孩子成長路上最珍貴的回憶。</p>
        </div>

        <div 
          className="relative max-w-[1200px] mx-auto flex items-center justify-center h-[340px] sm:h-[460px] md:h-[500px] lg:h-[540px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Previous Slide */}
          <div 
            className="hidden md:block absolute left-0 lg:left-4 z-10 cursor-pointer w-[300px] lg:w-[360px]"
            onClick={prevSlide}
          >
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border-2 border-white/80 opacity-70 scale-90 translate-x-12 lg:translate-x-0 origin-right transition-all duration-500 hover:opacity-100">
              <SmartImage src={images[prev]} alt="Previous slide" />
              <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Current Slide */}
          <div className="absolute z-20 w-[90vw] md:w-[480px] lg:w-[640px] shadow-2xl rounded-[24px] border-2 border-white/90 overflow-hidden group bg-white">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, scale: 0.9, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="aspect-[4/3] w-full"
              >
                <SmartImage src={images[current]} alt="Current slide" />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-[24px] pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Slide */}
          <div 
            className="hidden md:block absolute right-0 lg:right-4 z-10 cursor-pointer w-[300px] lg:w-[360px]"
            onClick={nextSlide}
          >
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border-2 border-white/80 opacity-70 scale-90 -translate-x-12 lg:-translate-x-0 origin-left transition-all duration-500 hover:opacity-100">
              <SmartImage src={images[next]} alt="Next slide" />
              <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Left/Right Arrows for Mobile */}
          <button 
            onClick={prevSlide}
            className="md:hidden absolute left-2 z-30 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#002B5B] hover:bg-white transition-colors focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="md:hidden absolute right-2 z-30 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#002B5B] hover:bg-white transition-colors focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap max-w-[80vw] mx-auto">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none",
                idx === current 
                  ? "w-6 bg-[#C5A059]" 
                  : "bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={\`Go to slide \${idx + 1}\`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/HomeEventSlider.tsx', code);
