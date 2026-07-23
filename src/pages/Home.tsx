import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Users, Globe, Shield, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#fdfcf9] py-16 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fef3c7] border border-[#f59e0b] text-[#92400e] text-sm font-bold rounded-full mb-6"
          >
            <Star size={16} fill="currentColor" /> 全台唯一 24H 專業親子活動與職人營隊推薦門戶
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#002B5B] mb-8 tracking-tight"
          >
            啟迪孩子夢想，在 <span className="text-[#ff6600] relative inline-block">體驗中快樂學習<svg className="absolute w-full h-3 -bottom-2 left-0 text-[#ff6600] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/></svg></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed max-w-3xl mx-auto mb-16"
          >
            全台最專業、最高規格的親子活動及職人體驗代訂推薦！我們深信「生活即教育，體驗即學習」，省去繁雜的多站比價與註冊手續，一鍵加 LINE 客服立刻由小幫手為您安排！
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] mb-10 flex items-center justify-center gap-4">
            <span>啟夢教育</span>
            <span className="w-1 h-8 bg-slate-300 rounded"></span>
            <span>陪伴每一段成長，實現每一個夢想</span>
          </h2>
          <p className="text-[#002B5B] text-lg leading-loose font-bold mb-6">
            啟夢教育秉持著「陪伴、專業、創新」的教育理念，我們相信，教育不僅侷限於課堂，更應延伸至生活中的每一次探索、每一場活動、每一段旅程，讓每位小朋友都能在快樂中學習，在體驗中成長！
          </p>
          <p className="text-[#002B5B] text-lg leading-loose font-bold">
            未來，我們將持續推出更多優質課程、親子活動、國內外文化交流、國際留遊學、公益計畫，讓每一位孩子、都能在這裡找到屬於自己的舞台，累積更多知識、創造更多幸福回憶。
          </p>
        </div>
      </section>

      {/* Services Grid Section (Replaces Features) */}
      <section className="py-24 bg-[#fdfcf9] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">探索我們的服務</h2>
            <div className="w-16 h-1.5 bg-[#FFCC00] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/activities" className="block group">
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl p-8 text-center border-2 border-slate-100 hover:border-[#ff6600] transition-colors shadow-sm hover:shadow-xl h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-[#fff5f0] text-[#ff6600] rounded-2xl flex items-center justify-center mb-6 rotate-3 group-hover:-rotate-3 transition-transform">
                  <Activity size={40} />
                </div>
                <h3 className="text-xl font-black text-[#0f439c] mb-3">主題活動</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">豐富多樣的職人體驗與戶外探索，讓孩子在實作中學習。</p>
                <span className="text-[#ff6600] font-bold text-sm uppercase mt-auto flex items-center gap-1">了解更多 <ArrowRight size={16}/></span>
              </motion.div>
            </Link>
            <Link to="/co-learning" className="block group">
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl p-8 text-center border-2 border-slate-100 hover:border-[#00C300] transition-colors shadow-sm hover:shadow-xl h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-[#f0fdf4] text-[#00C300] rounded-2xl flex items-center justify-center mb-6 -rotate-3 group-hover:rotate-3 transition-transform">
                  <Globe size={40} />
                </div>
                <h3 className="text-xl font-black text-[#0f439c] mb-3">親子共學</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">精心設計的親子共學體驗，讓父母與孩子在陪伴中共同成長與學習。</p>
                <span className="text-[#00C300] font-bold text-sm uppercase mt-auto flex items-center gap-1">了解更多 <ArrowRight size={16}/></span>
              </motion.div>
            </Link>
            <Link to="/team" className="block group">
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl p-8 text-center border-2 border-slate-100 hover:border-[#FFCC00] transition-colors shadow-sm hover:shadow-xl h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-[#fefce8] text-[#eab308] rounded-2xl flex items-center justify-center mb-6 rotate-3 group-hover:-rotate-3 transition-transform">
                  <Users size={40} />
                </div>
                <h3 className="text-xl font-black text-[#0f439c] mb-3">團隊介紹</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">嚴選各領域最專業、最有耐心的教育專家與活動導師。</p>
                <span className="text-[#eab308] font-bold text-sm uppercase mt-auto flex items-center gap-1">了解更多 <ArrowRight size={16}/></span>
              </motion.div>
            </Link>
            <Link to="/charity" className="block group">
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl p-8 text-center border-2 border-slate-100 hover:border-[#ec4899] transition-colors shadow-sm hover:shadow-xl h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-[#fdf2f8] text-[#ec4899] rounded-2xl flex items-center justify-center mb-6 -rotate-3 group-hover:rotate-3 transition-transform">
                  <Heart size={40} />
                </div>
                <h3 className="text-xl font-black text-[#0f439c] mb-3">愛心公益</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">大手牽小手，推動公益活動，從小培養孩子的同理心與愛心。</p>
                <span className="text-[#ec4899] font-bold text-sm uppercase mt-auto flex items-center gap-1">了解更多 <ArrowRight size={16}/></span>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
