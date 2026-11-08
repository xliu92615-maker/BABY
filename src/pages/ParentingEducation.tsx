import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight, Clapperboard, Sparkles, Film } from 'lucide-react';
import mm1 from '../assets/images/MM-1.jpg';
import mm2 from '../assets/images/MM-2.jpg';
import mm3 from '../assets/images/MM-3.jpg';
import mm4 from '../assets/images/MM-4.jpg';
import f02 from '../assets/images/F-02.jpg';

const articles = [
  {
    path: '/parenting-education/life-lessons-stories',
    title: '01｜比童話更值得聽的故事：5個能讓孩子受益一生的人生啟蒙',
  },
  {
    path: '/parenting-education/respect-child-growth',
    title: '02｜我們能陪孩子慢慢雕琢，卻不能按照自己的期待改造孩子',
  },
  {
    path: '/parenting-education/global-perspective',
    title: '03｜國際視野從小培養，讓孩子認識世界的多元與美好',
  },
  {
    path: '/parenting-education/five-essential-skills',
    title: '04｜未來需要什麼樣的人才？從小培養孩子的五大關鍵能力',
  },
  {
    path: '/parenting-education/learning-beyond-classroom',
    title: '05｜走出教室也是一種學習，帶孩子用不同角度認識世界',
  },
];

const movies = [
  {
    id: '01',
    title: '遠在天邊',
    poster: mm1,
    recommendation:
      '繪本改編的質感動畫，以一隻企鵝與小男孩的奇幻旅程，傳遞出陪伴與「真正的家在哪裡」的純粹感動。短小精煉，非常適合低齡小朋友觀賞！',
  },
  {
    id: '02',
    title: '跳跳羊',
    poster: mm2,
    recommendation:
      '皮克斯經典短片。故事裡的跳跳羊因為被剪毛而失去自信，但在動物朋友的鼓勵下學會了用另一種姿態「跳躍」。能帶給孩子滿滿的勇氣與自我認同感。',
  },
  {
    id: '03',
    title: '可可夜總會',
    poster: mm3,
    recommendation:
      '色彩繽紛的墨西哥亡靈節背景，將生死議題轉化為溫柔的「被遺忘才是真正的消失」。強大的家族連結與音樂，能讓孩子深刻體會愛與傳承的意義。',
  },
  {
    id: '04',
    title: '路卡的夏天',
    poster: mm4,
    recommendation:
      '義大利蔚藍海岸的陽光與冰淇淋！兩個海怪男孩隱藏身分在人類小鎮冒險，展現了無畏的友誼、對世界的好奇，以及「接納真實自我」的勇氣。',
  },
];

export default function ParentingEducation() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24">
      {/* 頂部主視覺橫幅 Banner (F-02) */}
      <div className="pt-20 sm:pt-24 md:pt-28 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-white">
            <img
              src={f02}
              alt="親子教育專欄 主視覺 Banner"
              className="w-full h-auto object-contain block rounded-2xl sm:rounded-3xl"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* 第一區塊：親子教育專欄 Top Title Section */}
      <div className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#0B4A86] to-[#002B5B] text-center">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#C5A059] font-bold text-sm mb-6 backdrop-blur-sm">
              <BookOpen size={16} />
              <span>Parenting Education Column</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
              親子教育專欄
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Intro Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-100 mb-10"
        >
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              在孩子成長的每一個階段，都有值得我們學習與探索的課題。
            </p>
            <p>
              從親子互動、生活教育、情緒培養，到學習發展與國際視野，Global Edu 希望透過多元的教育知識與實用資訊，陪伴每一位家長認識孩子、理解孩子，找到適合孩子的成長方式。
            </p>
          </div>
        </motion.div>

        {/* 第二區塊：教育文章列表 (01~05 依序排列，只顯示標題，點擊進入詳細頁面) */}
        <div className="space-y-4 sm:space-y-5">
          {articles.map((article, index) => (
            <motion.div
              key={article.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            >
              <Link
                to={article.path}
                className="group block bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#002B5B] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-[#C5A059] text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-all shadow-sm">
                    <ArrowRight size={20} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 第三區塊：親子電影推薦 特色單元 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#002B5B]/5 via-amber-500/5 to-[#002B5B]/5 rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-slate-200/80 shadow-md overflow-hidden"
        >
          {/* Subtle decorative background touches */}
          <div className="absolute top-4 right-6 text-amber-400/20 pointer-events-none hidden sm:block">
            <Sparkles size={48} />
          </div>
          <div className="absolute bottom-6 left-6 text-blue-900/10 pointer-events-none hidden sm:block">
            <Film size={54} />
          </div>

          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002B5B]/10 text-[#002B5B] font-bold text-xs sm:text-sm mb-3">
              <Sparkles size={14} className="text-[#C5A059]" />
              <span>Family Cinema</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#002B5B] flex items-center justify-center gap-3">
              <Clapperboard className="text-[#C5A059] shrink-0" size={32} />
              <span>親子電影推薦</span>
            </h2>
          </div>

          {/* Movies Grid: Desktop 4 columns, Tablet 2 columns, Mobile 1 column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-2xl p-5 border-2 border-slate-100 shadow-sm hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5"
              >
                {/* Poster container with uniform height & object-contain for both portrait and landscape */}
                <div className="relative w-full h-60 sm:h-64 lg:h-56 xl:h-64 rounded-xl bg-gradient-to-b from-slate-100/90 to-amber-50/40 p-2.5 flex items-center justify-center overflow-hidden mb-4 border border-slate-100 shadow-inner">
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#002B5B]/85 text-white font-black text-[11px] tracking-wider z-10 shadow-xs">
                    0{movie.id.replace(/^0+/, '')}
                  </span>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Movie Title */}
                <h3 className="text-lg sm:text-xl font-black text-[#002B5B] group-hover:text-[#0B4A86] transition-colors mb-2.5">
                  {movie.title}
                </h3>

                {/* Recommendation Text (Full text displayed) */}
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal flex-1">
                  {movie.recommendation}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
