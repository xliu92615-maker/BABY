import { useState, useEffect, useRef, ReactNode } from 'react';
import { Volume2 } from 'lucide-react';

const announcement1 = (
  <span className="inline-block whitespace-nowrap px-4">
    📢 感謝創辦人以及多位家長贊助活動
  </span>
);

const announcement2 = (
  <span className="inline-block whitespace-nowrap px-4">
    📢 <span className="text-[#e11d48] font-black mr-1">【重要公告】</span>
    本團隊所有活動皆由「我們」團隊官方主辦，合作場地與品牌僅提供設備支援，並非主辦方，特此說明，感謝大家的理解與支持！
  </span>
);

function SingleMarquee({ children, speed = 70, className = "", iconBgClass = "" }: { children: ReactNode, speed?: number, className?: string, iconBgClass?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const updateDuration = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const distance = containerWidth + textWidth;
        setDuration(distance / speed);
        setIsAnimating(true);
      }
    };

    const timer = setTimeout(updateDuration, 100); // Wait for render
    
    const handleResize = () => {
      setIsAnimating(false);
      clearTimeout(timer);
      setTimeout(updateDuration, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    setKey(prev => prev + 1);
    // Restart animation in next tick
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <div className={`h-[36px] text-sm md:text-[15px] font-bold flex items-center overflow-hidden relative w-full ${className}`}>
      
      {/* Icon Background */}
      <div className={`absolute left-0 top-0 h-full flex items-center justify-center gap-2 z-20 pl-4 pr-4 ${iconBgClass}`}>
        <Volume2 size={16} className="text-[#0f439c]" />
      </div>

      {/* Marquee Container */}
      <div className="w-full h-full relative" ref={containerRef}>
        
        {/* Invisible measurement element */}
        <div 
          ref={textRef} 
          className="absolute opacity-0 pointer-events-none whitespace-nowrap inline-block"
        >
          {children}
        </div>

        {/* Visible animated element */}
        {isAnimating && (
          <div 
            key={key}
            className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap will-change-transform"
            style={{
              animation: `marquee-scroll ${duration}s linear forwards`,
              paddingLeft: '100%', // Start at the right edge of the container
            }}
            onAnimationEnd={handleAnimationEnd}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AnnouncementMarquee() {
  return (
    <div className="w-full flex flex-col border-b border-[#0f439c]/10 relative z-50">
      <style>
        {`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      
      {/* Bar 1 */}
      <SingleMarquee 
        speed={70} 
        className="bg-[#FFCC00] text-[#0f172a]"
        iconBgClass="bg-[#FFCC00] shadow-[10px_0_15px_-3px_#FFCC00]"
      >
        {announcement1}
      </SingleMarquee>
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#C5A059]/20" />
      
      {/* Bar 2 */}
      <SingleMarquee 
        speed={70} 
        className="bg-[#fff9e6] text-[#0f172a]"
        iconBgClass="bg-[#fff9e6] shadow-[10px_0_15px_-3px_#fff9e6]"
      >
        {announcement2}
      </SingleMarquee>
    </div>
  );
}
