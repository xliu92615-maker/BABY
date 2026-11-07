import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ParentingArticle5() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24">
      {/* Article Header Banner */}
      <div className="relative pt-24 pb-14 md:pt-32 md:pb-16 bg-gradient-to-br from-[#002B5B] via-[#0B4A86] to-[#002B5B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/parenting-education"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-[#C5A059] transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>返回親子教育專欄</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#C5A059] font-bold text-xs sm:text-sm mb-4 backdrop-blur-sm">
              <BookOpen size={14} />
              <span>親子教育專欄 05</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
              走出教室也是一種學習，帶孩子用不同角度認識世界
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border border-slate-100">
          <article className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              我們常常認為，孩子的學習主要發生在教室裡，透過老師授課、閱讀課本與完成作業來吸收知識。但其實，學習並不只有一種形式，生活中的每一次探索、觀察與親身體驗，都可能成為孩子認識世界的重要機會。
            </p>
            <p>
              走進農場認識植物、到博物館了解歷史、參加職人體驗認識不同工作，甚至只是到公園觀察昆蟲，這些看似平凡的活動，都能讓孩子從不同角度接觸世界。
            </p>
            <p>
              有時候一次親身體驗所帶來的印象，可能比單純閱讀文字更加深刻。
            </p>
            <p>
              因此，除了課堂中的知識學習，父母也可以帶孩子走出熟悉的環境，讓生活成為孩子探索世界的另一間教室。
            </p>
          </article>

          {/* Bottom Back Button */}
          <div className="pt-10 mt-10 border-t border-slate-100 flex justify-center">
            <Link
              to="/parenting-education"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002B5B] text-white hover:bg-[#C5A059] font-bold text-sm sm:text-base transition-colors shadow-sm"
            >
              <ArrowLeft size={18} />
              <span>返回親子教育專欄</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
