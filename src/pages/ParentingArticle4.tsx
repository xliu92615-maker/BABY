import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';

const competencies = [
  '一、獨立思考與解決問題的能力',
  '二、溝通表達與團隊合作能力',
  '三、創造力與想像力',
  '四、適應能力與持續學習的能力',
  '五、情緒管理與同理心',
];

export default function ParentingArticle4() {
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
              <span>親子教育專欄 04</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
              未來需要什麼樣的人才？從小培養孩子的五大關鍵能力
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border border-slate-100">
          <article className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              隨著科技快速發展，人工智慧、數位科技與全球化正在改變我們的生活，也讓未來的工作型態與人才需求不斷產生變化。過去，我們可能認為只要擁有良好的學業成績，就能為孩子創造更好的未來；但在資訊快速流動的時代，單純記住知識已經不再是孩子唯一需要具備的能力。
            </p>
            <p>
              未來的孩子將面對更多未知的挑戰，也需要具備更靈活的思考方式與解決問題的能力。
            </p>

            {/* Five Key Competencies Subheadings */}
            <div className="pt-4 pb-2 space-y-4">
              {competencies.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 to-blue-50/40 border-l-4 border-[#C5A059] rounded-r-2xl flex items-center gap-3 shadow-xs"
                >
                  <CheckCircle2 size={22} className="text-[#C5A059] shrink-0" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#002B5B]">
                    {item}
                  </h2>
                </div>
              ))}
            </div>
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
