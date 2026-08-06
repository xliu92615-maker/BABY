import { motion } from 'motion/react';
import studyAbroadVideo from '../assets/videos/IMG_0102.MP4';

export default function StudyAbroadVideoStory() {
  return (
    <section className="bg-[#fdfcf9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Column (Approx 42% on desktop) */}
          <div className="w-full md:w-[42%] flex flex-col order-1">
            {/* 1. Badge */}
            <div className="inline-flex items-center self-start mb-6 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] font-bold text-sm tracking-wide">
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
            <div className="text-slate-600 space-y-5 mb-8 leading-relaxed text-lg">
              <p>
                多年來，看著一位又一位學生在海外成長、蛻變，甚至完成學業後回到各自的專業領域發光發熱，始終是王景富堅持教育工作的最大動力。
              </p>
              <p>
                未來王景富也將持續秉持「從台灣出發，放眼世界；以知識改變人生，以視野創造未來」的教育理念，陪伴更多孩子勇敢追夢，培育具有國際競爭力、社會責任感與世界視野的新世代人才，讓教育成為改變人生最重要的力量。
              </p>
            </div>

            {/* 5. Quote Card */}
            <div className="bg-[#002B5B] rounded-[18px] p-6 md:p-8 shadow-lg shadow-[#002B5B]/10 relative mb-8 md:mb-10">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C5A059] rounded-l-[18px]" />
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed tracking-wide pl-2">
                「從台灣出發，放眼世界；<br className="hidden md:block" />
                以知識改變人生，以視野創造未來。」
              </p>
            </div>

            {/* Mobile: Video (will be order 5 on mobile, tags order 6) */}
            <div className="w-full md:hidden order-2 mb-8 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C5A059]/10 to-transparent rounded-[32px] -z-10" />
              <video
                src={studyAbroadVideo}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover rounded-[24px] shadow-xl border border-[#C5A059]/30"
              />
            </div>

            {/* 6. Tags */}
            <div className="flex flex-wrap gap-3 order-3">
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

          {/* Right Column (Approx 58% on desktop) */}
          <div className="w-full md:w-[58%] hidden md:flex flex-col relative order-2 md:order-2">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0,transparent_70%)] -z-10 blur-xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-[#C5A059]/20 rounded-full animate-[spin_60s_linear_infinite] -z-10" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#002B5B]/5 rounded-full blur-md -z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <video
                src={studyAbroadVideo}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover rounded-[24px] shadow-2xl border border-[#C5A059]/40 relative z-10"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
