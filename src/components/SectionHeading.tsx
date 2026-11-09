import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  englishTitle: string;
  chineseTitle: string;
  subtitle?: string;
  paragraphs: string[];
  className?: string;
}

export function SectionHeading({
  englishTitle,
  chineseTitle,
  subtitle,
  paragraphs,
  className = '',
}: SectionHeadingProps) {
  return (
    <section className={`py-10 sm:py-14 bg-gradient-to-b from-[#fdfcf9] via-[#FAF8F5] to-[#fdfcf9] relative overflow-hidden border-y border-slate-100 ${className}`}>
      {/* Decorative Playful Elements (Same as Home Featured Activities) */}
      <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-[#C5A059]/25 pointer-events-none hidden sm:block" />
      <div className="absolute top-12 right-12 w-5 h-5 rounded-full bg-[#002B5B]/15 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-8 left-1/4 w-3.5 h-3.5 rounded-full bg-[#ff6600]/20 pointer-events-none hidden sm:block" />

      {/* Heading Content */}
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Large Decorative English Watermark */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-300/35 tracking-widest uppercase select-none pointer-events-none font-serif leading-none mb-1">
          {englishTitle}
        </div>

        {/* Chinese Main Title with Gold Sparkles on Both Sides */}
        <div className="relative inline-block -mt-3 sm:-mt-6">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            <Sparkles className="text-[#C5A059] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
              {chineseTitle}
            </h1>
            <Sparkles className="text-[#C5A059] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Optional Subtitle with clear typographic hierarchy */}
        {subtitle && (
          <p className="mt-3.5 sm:mt-4 text-base sm:text-lg md:text-xl font-bold text-[#002B5B] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Introduction Paragraphs */}
        <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4 text-sm sm:text-base md:text-[17px] text-slate-600 font-medium leading-[1.8] max-w-[850px] mx-auto text-center">
          {paragraphs.map((para, idx) => (
            <p key={idx} className="leading-[1.8] text-justify sm:text-center">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionHeading;
