import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ParentingArticle2() {
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
              <span>親子教育專欄 02</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
              我們能陪孩子慢慢雕琢，卻不能按照自己的期待改造孩子
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border border-slate-100">
          <article className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              每個孩子都是獨一無二的個體，擁有不同的個性、興趣、天賦與成長步調。有些孩子活潑外向，喜歡與人互動；有些孩子安靜內向，習慣先觀察再表達。有些孩子學習速度很快，有些孩子則需要更多時間理解與練習。
            </p>
            <p>
              身為父母，我們總希望孩子能夠優秀、懂事、有禮貌，未來也能擁有更好的生活。因此，在陪伴孩子成長的過程中，難免會不自覺地將自己的期待放在孩子身上，希望他們按照我們認為最好的方向前進。
            </p>
            <p>
              但我們是否曾經想過，孩子真正需要的，究竟是成為父母期待中的模樣，還是有機會成為自己喜歡的樣子？教育從來不是一件可以一蹴可幾的事情，孩子在成長，父母也需要不斷學習。
            </p>
            <p>
              有時候，我們需要學會放慢腳步，有時候則需要調整原本的教養方式。當孩子與我們有不同的想法時，不妨先試著理解，而不是急著否定。
            </p>
            <p>
              我們能做的，是在孩子需要時提供支持，在孩子迷惘時給予方向，在孩子跌倒時陪伴他重新站起來。
            </p>
            <p className="p-4 bg-slate-50 border-l-4 border-[#C5A059] rounded-r-xl text-[#002B5B] font-bold">
              我們可以陪伴孩子成為更好的自己，卻不應該要求孩子成為我們心中理想的模樣。
            </p>
            <p>
              每個孩子都有屬於自己的成長旅程。父母最珍貴的責任，不是替孩子決定未來，而是給予足夠的愛、尊重與引導，讓他們有勇氣探索自己的可能，慢慢走出屬於自己的人生道路。
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
