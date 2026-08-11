import { motion } from 'motion/react';
import { Sparkles, Compass, Rocket } from 'lucide-react';
import wangImage from '../assets/images/WAN-11.jpg';

export default function HomeBrandImage() {
  return (
    <section className="relative py-24 md:py-28 bg-[#fdfcf9] overflow-hidden border-t border-slate-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full blur-[100px] opacity-[0.03] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#002B5B] rounded-full blur-[120px] opacity-[0.02] translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-20 left-10 w-24 h-24 border border-[#C5A059]/10 rounded-full opacity-50" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          
          {/* Left Column (Image) - Approx 42% on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-[90%] sm:w-[85%] md:w-[42%] relative shrink-0"
          >
            {/* Offset decorative block */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C5A059]/10 to-transparent rounded-[32px] -z-10 translate-x-4 translate-y-4" />
            <div className="absolute -inset-1 bg-white rounded-[26px] -z-10" />

            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl shadow-[#002B5B]/10 border border-[#C5A059]/20 group">
              <img 
                src={wangImage} 
                alt="啟夢教育品牌形象" 
                className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column (Text) - Approx 58% on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-[58%] flex flex-col"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center self-start mb-6 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] font-bold text-sm tracking-wide">
              ✦ 陪伴成長・點亮夢想
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-snug tracking-tight mb-6">
              <span className="text-[#002B5B] block">啟夢教育陪伴每一段成長，</span>
              <span className="text-[#C5A059] block mt-1">實現每一個夢想</span>
            </h2>

            {/* Gold Short Line */}
            <div className="w-16 h-1.5 bg-[#C5A059] rounded-full mb-8" />

            {/* Auxiliary Text */}
            <div className="text-slate-600 space-y-5 mb-10 leading-relaxed text-lg font-medium">
              <p>
                我們相信，教育不只是知識的傳遞，更是一段陪伴孩子探索世界、發現自己的旅程。
              </p>
              <p>
                從學習、成長到勇敢追尋夢想，啟夢教育希望陪伴每一位孩子走得更遠、看得更廣，找到屬於自己的方向。
              </p>
            </div>

            {/* Brand Values */}
            <div className="flex flex-wrap gap-4 mt-auto">
              <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-100 shadow-sm">
                <Sparkles size={18} className="text-[#C5A059]" />
                <span className="font-bold text-[#002B5B]">陪伴成長</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-100 shadow-sm">
                <Compass size={18} className="text-[#C5A059]" />
                <span className="font-bold text-[#002B5B]">探索世界</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-100 shadow-sm">
                <Rocket size={18} className="text-[#C5A059]" />
                <span className="font-bold text-[#002B5B]">勇敢追夢</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
