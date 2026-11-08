import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FEATURED_CO_LEARNING_ACTIVITIES, FeaturedActivity } from '../data/featuredActivities';

export default function HomeFeaturedActivities() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Smooth continuous infinite scrolling via requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let lastTime: number | null = null;
    const speed = 60; // Pixels per second (~30s for complete loop)

    const loop = (currentTime: number) => {
      if (lastTime === null) lastTime = currentTime;
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPausedRef.current && !isDraggingRef.current && container) {
        container.scrollLeft += speed * delta;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Touch Drag Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    scrollStartRef.current = scrollRef.current ? scrollRef.current.scrollLeft : 0;
    hasMovedRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    if (Math.abs(deltaX) > 6) hasMovedRef.current = true;
    scrollRef.current.scrollLeft = scrollStartRef.current - deltaX;

    // Wrap around smoothly during drag
    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (scrollRef.current.scrollLeft >= halfWidth) {
      scrollRef.current.scrollLeft -= halfWidth;
      scrollStartRef.current -= halfWidth;
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += halfWidth;
      scrollStartRef.current += halfWidth;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollStartRef.current = scrollRef.current ? scrollRef.current.scrollLeft : 0;
    hasMovedRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 6) hasMovedRef.current = true;
    scrollRef.current.scrollLeft = scrollStartRef.current - deltaX;

    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (scrollRef.current.scrollLeft >= halfWidth) {
      scrollRef.current.scrollLeft -= halfWidth;
      scrollStartRef.current -= halfWidth;
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += halfWidth;
      scrollStartRef.current += halfWidth;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Click handler: Only trigger navigate if the user wasn't actively dragging
  const handleCardClick = (activity: FeaturedActivity) => {
    if (!hasMovedRef.current) {
      navigate(`/co-learning?activity=${activity.id}`);
    }
  };

  // Render 2 duplicate sets of the 6 cards for an unbroken, seamless continuous loop
  const duplicatedCards = [
    ...FEATURED_CO_LEARNING_ACTIVITIES.map((act) => ({ ...act, duplicateKey: `${act.id}-set1` })),
    ...FEATURED_CO_LEARNING_ACTIVITIES.map((act) => ({ ...act, duplicateKey: `${act.id}-set2` })),
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fdfcf9] via-[#FAF8F5] to-[#fdfcf9] relative overflow-hidden border-t border-slate-100">
      {/* Decorative Playful Elements */}
      <div className="absolute top-10 left-8 w-4 h-4 rounded-full bg-[#C5A059]/25 pointer-events-none hidden sm:block" />
      <div className="absolute top-20 right-12 w-5 h-5 rounded-full bg-[#002B5B]/15 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-12 left-1/4 w-3.5 h-3.5 rounded-full bg-[#ff6600]/20 pointer-events-none hidden sm:block" />

      {/* Section Header */}
      <div className="relative text-center mb-10 sm:mb-14 px-4 overflow-hidden">
        {/* Large Decorative English Watermark */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-300/35 tracking-widest uppercase select-none pointer-events-none font-serif leading-none mb-1">
          FEATURED ACTIVITIES
        </div>

        {/* Chinese Main Title */}
        <div className="relative inline-block -mt-3 sm:-mt-6">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            <Sparkles className="text-[#C5A059] shrink-0 hidden sm:inline-block" size={24} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
              精選親子活動
            </h2>
            <Sparkles className="text-[#C5A059] shrink-0 hidden sm:inline-block" size={24} />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-3.5 text-base sm:text-lg md:text-xl text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed">
          陪伴孩子探索世界，讓每一次體驗都成為成長的美好回憶
        </p>
      </div>

      {/* Infinite Horizontal Auto-Scroll Carousel */}
      <div
        className="w-full relative"
        onMouseEnter={() => {
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
          isDraggingRef.current = false;
        }}
      >
        {/* Scrolling Track Container */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="flex gap-3.5 sm:gap-6 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none px-4 sm:px-6 py-4"
          style={{ willChange: 'scroll-position' }}
        >
          {duplicatedCards.map((activity) => (
            <div
              key={activity.duplicateKey}
              onClick={() => handleCardClick(activity)}
              className="w-[260px] sm:w-[300px] shrink-0 bg-white rounded-[24px] p-5 sm:p-6 border-2 border-slate-100 shadow-md hover:border-[#C5A059] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between h-[420px] sm:h-[450px] group overflow-hidden cursor-pointer"
            >
              <div>
                {/* 4:3 Aspect Ratio Image Container */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-100 flex items-center justify-center relative shadow-inner">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Activity Name */}
                <h3 className="text-base sm:text-lg font-black text-[#002B5B] group-hover:text-[#0B4A86] transition-colors leading-snug line-clamp-2 mb-2">
                  {activity.title}
                </h3>

                {/* Activity Description (Max 3 lines with ellipsis) */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {activity.desc}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-[#C5A059] group-hover:text-[#B38D44] transition-colors flex items-center gap-1.5">
                  <span>查看詳情</span>
                  <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-bold text-slate-300 group-hover:text-[#C5A059]/40 transition-colors">
                  親子共學
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
