import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ParentingArticle1() {
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
              <span>親子教育專欄 01</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
              比童話更值得聽的故事：5個能讓孩子受益一生的人生啟蒙
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border border-slate-100 space-y-10">
          {/* Story 1 */}
          <section className="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002B5B] mb-4 flex items-start gap-2">
              <span className="text-[#C5A059] font-black">01</span>
              <span>《手捧空花盆的孩子》：誠實與內在勇氣</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium pl-6">
              有時「堅持真實」可能會讓你顯得與眾不同、甚至看似落後，但不隨波逐流的誠實，遠比虛假的成功更加高貴。
            </p>
          </section>

          {/* Story 2 */}
          <section className="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002B5B] mb-4 flex items-start gap-2">
              <span className="text-[#C5A059] font-black">02</span>
              <span>《丟海星的男孩》：善良的力量與個人的責任</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium pl-6">
              面對世界上很多龐大而看似無能為力的事情，不要因為覺得自己力量渺小就選擇冷漠。每一次小小的善意與付出，對那個被你幫助的人而言，都是無比重大的溫暖。
            </p>
          </section>

          {/* Story 3 */}
          <section className="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002B5B] mb-4 flex items-start gap-2">
              <span className="text-[#C5A059] font-black">03</span>
              <span>《有裂縫的水罐》：自我接納與發現獨特價值</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium pl-6">
              每個人都有不完美和弱點，但這並不代表你沒有價值。 接納自己的特質，放對位置，缺點往往也會成為滋養生命的花朵。
            </p>
          </section>

          {/* Story 4 */}
          <section className="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002B5B] mb-4 flex items-start gap-2">
              <span className="text-[#C5A059] font-black">04</span>
              <span>《第101次敲擊的石匠》：耐心、積累與面對堅持的意義</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium pl-6">
              讓石頭裂開的，絕不是最後那一下敲擊，而是前面一百次看似毫無進展的積累。生活中學習技能、克服難關時，那些看不見成效的時刻，不是徒勞，而是在蓄積破繭而出的力量。
            </p>
          </section>

          {/* Story 5 */}
          <section className="pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002B5B] mb-4 flex items-start gap-2">
              <span className="text-[#C5A059] font-black">05</span>
              <span>《被揉皺的紙幣》：堅定自我、不被外界評價定義的底氣</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium pl-6">
              在成長的路上，我們可能會遭遇失敗、挫折，甚至是別人的嘲笑和誤解。但請永遠記住：別人的看法和暫時的低谷，永遠不會貶損你生命的本質與價值。
            </p>
          </section>

          {/* Bottom Back Button */}
          <div className="pt-8 border-t border-slate-100 flex justify-center">
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
