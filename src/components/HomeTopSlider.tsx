import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import qwe02 from "../assets/images/QWE-02.jpg";
import qwe03 from "../assets/images/QWE-03.jpg";
import nnn002Video from "../assets/videos/NNN-002.mp4";

interface SlideItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  fallbackSrc?: string;
  poster?: string;
  alt: string;
}

const sliderItems: SlideItem[] = [
  {
    id: 'slide-qwe-02',
    type: 'image',
    src: qwe02,
    alt: '首頁輪播圖 1',
  },
  {
    id: 'slide-qwe-03',
    type: 'image',
    src: qwe03,
    alt: '首頁輪播圖 2',
  },
  {
    id: 'slide-nnn-002',
    type: 'video',
    src: nnn002Video,
    fallbackSrc: '/videos/NNN-002.mp4',
    poster: qwe03,
    alt: '首頁輪播影片 NNN-002',
  },
];

export default function HomeTopSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentItem = sliderItems[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? sliderItems.length - 1 : prev - 1));
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // When switching away from video, pause and reset; when switching to video, start from beginning
  useEffect(() => {
    if (currentItem.type === 'video') {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Video autoPlay prevented or pending user interaction:', err);
          });
        }
      }
    } else {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [currentIndex, currentItem.type]);

  // Image auto-play logic:
  // - Images auto-switch every 4000ms (pauses on hover)
  // - When on video, timer is NOT active; video plays until onEnded fires
  useEffect(() => {
    if (currentItem.type === 'video') return;
    if (isHovered) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex, currentItem.type, isHovered, handleNext]);

  // Video playback completion handler
  const handleVideoEnded = () => {
    handleNext();
  };

  // Video load error handler (failsafe to avoid stuck carousel)
  const handleVideoError = () => {
    console.warn('Video load error on slide 3, advancing to next slide');
    setTimeout(() => {
      handleNext();
    }, 1500);
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
      className="relative w-full aspect-[1280/600] md:aspect-auto md:h-[450px] lg:h-[650px] overflow-hidden group bg-slate-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={() => setTouchStart(null)}
    >
      <AnimatePresence initial={false}>
        {currentItem.type === 'image' ? (
          <motion.img
            key={currentItem.id}
            src={currentItem.src}
            alt={currentItem.alt}
            className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-center select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            loading="lazy"
          />
        ) : (
          <motion.div
            key={currentItem.id}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black overflow-hidden select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <video
              ref={videoRef}
              src={currentItem.src}
              poster={currentItem.poster}
              autoPlay
              muted
              playsInline
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              onEnded={handleVideoEnded}
              onError={handleVideoError}
              onCanPlay={(e) => {
                e.currentTarget.play().catch(() => {});
              }}
              className="w-full h-full object-contain md:object-cover md:object-center pointer-events-none select-none"
            >
              {currentItem.fallbackSrc && (
                <source src={currentItem.fallbackSrc} type="video/mp4" />
              )}
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30 pointer-events-none" />

      {/* Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto">
        <button 
          onClick={handlePrev}
          className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-[#002B5B] hover:bg-white hover:scale-110 transition-all shadow-lg focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} className="md:hidden mr-0.5" />
          <ChevronLeft size={28} className="hidden md:block mr-0.5" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto">
        <button 
          onClick={handleNext}
          className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-[#002B5B] hover:bg-white hover:scale-110 transition-all shadow-lg focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight size={20} className="md:hidden ml-0.5" />
          <ChevronRight size={28} className="hidden md:block ml-0.5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2.5 sm:bottom-4 md:bottom-8 inset-x-0 flex justify-center gap-2 md:gap-2.5 z-10 pointer-events-auto">
        {sliderItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 focus:outline-none shadow-sm ${
              idx === currentIndex 
                ? 'w-6 md:w-8 bg-[#ff6600]' 
                : 'w-2 md:w-2.5 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
