import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ParentingArticle3() {
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
              <span>親子教育專欄 03</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
              國際視野從小培養，讓孩子認識世界的多元與美好
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border border-slate-100">
          <article className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              過去我們可能認為國際教育就是學習外語，或是有機會出國留學、到不同國家生活。但其實真正的國際視野並不只是會說幾種語言，也不一定要等到孩子長大出國之後才開始培養。
            </p>
            <p>
              從認識不同國家的文化、了解各地的生活習慣，到學習尊重不同的觀點與價值觀，這些都是國際教育的一部分。國際視野不是為了讓孩子與別人競爭，而是讓孩子知道，世界很大，人生有很多不同的可能。
            </p>
            <p>
              從小培養孩子認識世界的興趣，讓他們帶著好奇心探索不同文化，學會尊重、理解與包容。即使現在只是從一本繪本、一張地圖或一次文化體驗開始，都可能成為孩子未來探索世界的重要起點。
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
