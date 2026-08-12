import { motion } from 'motion/react';
export default function StudyAbroadVideoStory() {
  return (
    <section className="bg-[#fdfcf9] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* 1. Badge */}
        <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] font-bold text-sm tracking-wide">
          國際教育．陪伴成長
        </div>

        {/* 2. Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-snug tracking-tight mb-6">
          <span className="text-[#002B5B] block">用教育改變人生，</span>
          <span className="text-[#C5A059] block mt-1">用視野創造未來</span>
        </h2>

        {/* 3. Gold Short Line */}
        <div className="w-16 h-1.5 bg-[#C5A059] rounded-full mb-8" />

        {/* 4. Text */}
        <div className="text-slate-600 space-y-5 mb-10 leading-relaxed text-lg text-left md:text-center w-full">
          <p>
            多年來，看著一位又一位學生在海外成長、蛻變，甚至完成學業後回到各自的專業領域發光發熱，始終是創辦人堅持教育工作的最大動力。
          </p>
          <p>
            未來創辦人也將持續秉持「從台灣出發，放眼世界；以知識改變人生，以視野創造未來」的教育理念，陪伴更多孩子勇敢追夢，培育具有國際競爭力、社會責任感與世界視野的新世代人才，讓教育成為改變人生最重要的力量。
          </p>
        </div>

        {/* 5. Quote Card */}
        <div className="bg-[#002B5B] rounded-[18px] p-6 md:p-8 shadow-lg shadow-[#002B5B]/10 relative mb-10 w-full max-w-3xl mx-auto overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C5A059]" />
          <p className="text-white text-lg md:text-xl font-bold leading-relaxed tracking-wide text-center">
            「從台灣出發，放眼世界；<br className="hidden md:block" />
            以知識改變人生，以視野創造未來。」
          </p>
        </div>

        {/* 6. Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {['海外成長', '國際視野', '人才培育'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] font-bold text-sm tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
