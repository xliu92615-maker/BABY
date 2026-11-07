import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, CheckCircle2, Lightbulb } from 'lucide-react';

const competencies = [
  {
    title: '一、獨立思考與解決問題的能力',
    description:
      '當孩子遇到困難時，父母可以先不要急著給答案，而是透過提問引導孩子思考。例如，當孩子的積木作品倒塌時，可以問問孩子：「你覺得為什麼會倒下來？有沒有其他方法可以讓它更穩固？」透過這樣的過程，孩子能夠練習觀察、分析、嘗試與修正，而不是遇到問題就等待別人幫忙。',
  },
  {
    title: '二、溝通表達與團隊合作能力',
    description:
      '未來的工作與生活中，與不同背景的人合作將會越來越普遍。因此良好的溝通能力與團隊合作能力，也是孩子需要從小培養的重要基礎。父母可以從日常生活開始練習，例如讓孩子參與家庭討論、分享每天發生的事情，或是與其他孩子一起完成遊戲及任務。真正良好的溝通，不只是勇敢表達自己，也包含願意聆聽與理解他人。',
  },
  {
    title: '三、創造力與想像力',
    description:
      '創造力是讓孩子發現不同可能的重要能力。當孩子開始對生活中的事物產生好奇，嘗試用不同方式完成任務，或是提出與別人不一樣的想法時，都是創造力發展的表現。在孩子創作的過程中，不必過度要求作品一定要符合標準，也不需要每件事情都按照固定步驟完成，適度保留自由發揮的空間，能讓孩子學習從不同角度觀察問題，培養想像力與創新思維。',
  },
  {
    title: '四、適應能力與持續學習的能力',
    description:
      '未來的世界變化快速，孩子長大後所接觸的科技、工作與生活環境，很可能與現在有很大的不同。比起只學會某一項固定知識，更重要的是培養孩子願意學習新事物、面對改變及適應不同環境的能力，當孩子遇到不熟悉的活動時，父母可以鼓勵他們勇敢嘗試，而不是因為害怕失敗就直接放棄。例如參加新的體驗課程、接觸不同的運動，或是認識陌生的文化，都能讓孩子慢慢累積經驗，學習適應新的環境。',
  },
  {
    title: '五、情緒管理與同理心',
    description:
      '孩子在成長過程中，難免會遇到挫折、失望、衝突或不如預期的事情。如果沒有適當的情緒表達與調節能力，就可能難以面對生活中的各種挑戰。父母可以先幫助孩子認識自己的情緒，學習說出自己的感受，例如：「我現在很生氣」、「我覺得很難過」，而不是要求孩子一味壓抑情緒。一個懂得管理情緒、理解他人的孩子，不僅更容易建立良好的人際關係，也能在團體生活中更自在地與人相處。',
  },
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

            {/* Five Key Competencies with Full Description Content */}
            <div className="pt-4 pb-2 space-y-6">
              {competencies.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-gradient-to-r from-slate-50 to-blue-50/40 border-l-4 border-[#C5A059] rounded-r-2xl shadow-xs space-y-3"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <CheckCircle2 size={22} className="text-[#C5A059] shrink-0 mt-0.5 sm:mt-0" />
                    <h2 className="text-lg sm:text-xl font-bold text-[#002B5B]">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal sm:pl-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Ending Section: 給爸媽的小提醒 */}
            <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-gradient-to-br from-amber-50/80 via-[#FFFDF5] to-amber-50/50 border-2 border-[#C5A059]/30 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Lightbulb size={18} className="text-[#C5A059]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#002B5B]">
                  給爸媽的小提醒：
                </h3>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                不妨每週安排一項新的親子挑戰，例如一起完成一件手作、嘗試一道料理、玩一場需要合作的遊戲，或是討論一個生活中的問題。讓孩子在生活中練習思考、表達與解決問題，能力的培養不一定要從課本開始。
              </p>
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
