import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Users, Globe, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#002B5B]">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" stroke="white" fill="transparent" strokeWidth="0.5" />
            <circle cx="80" cy="20" r="15" fill="#C5A059" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-3/5"
          >
            <div className="inline-block px-3 py-1 bg-[#C5A059] text-white text-[10px] uppercase tracking-widest rounded mb-4">
              International Standard Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              啟發無限潛能<br className="hidden md:block" />
              成就<span className="text-[#C5A059]">夢想</span>未來
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-xl">
              為孩子提供國際化視野，結合溫馨的親子共學環境，在專業導師團隊的帶領下，開啟一段充滿愛與智慧的成長旅程。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/activities" className="bg-[#C5A059] hover:bg-[#B8962E] text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2">
                探索活動 <ArrowRight size={18} />
              </Link>
              <Link to="/team" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center border border-white/20">
                認識團隊
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 hidden md:flex justify-end"
          >
            <div className="h-[400px] w-full max-w-sm bg-slate-200 rounded-t-full border-4 border-[#C5A059]/20 flex items-end justify-center overflow-hidden relative">
               <img src="/images/placeholder.svg" alt="Hero Image" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#002B5B] mb-4 tracking-tight"
            >
              為什麼選擇啟夢教育？
            </motion.h2>
            <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: '國際化視野', desc: '導入全球頂尖教育資源，培養具備國際競爭力的未來人才。', bg: 'bg-blue-50', iconColor: 'text-[#002B5B]' },
              { icon: Heart, title: '溫馨共學', desc: '強調親子陪伴，創造有愛、有溫度的學習環境。', bg: 'bg-amber-50', iconColor: 'text-[#C5A059]' },
              { icon: Star, title: '專業師資', desc: '嚴選各領域專家，提供最高品質的教學體驗。', bg: 'bg-slate-50', iconColor: 'text-[#002B5B]' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon size={24} className={feature.iconColor} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-[#002B5B] mb-4 tracking-tight">精選教育計畫</h2>
              <div className="w-16 h-1 bg-[#C5A059] rounded-full" />
            </div>
            <Link to="/activities" className="text-[#C5A059] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter hover:text-[#002B5B] transition-colors">
              查看全部 <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link to="/activities" className="md:col-span-2">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-[#002B5B] p-8 rounded-[2rem] h-[320px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
              >
                <div className="absolute -right-10 -bottom-10 opacity-10">
                   <Star size={200} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                    <Globe size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">主題活動</h3>
                  <p className="text-slate-300 text-sm">精心策劃各類跨學科探索活動，培養孩子批判性思考與團隊協作能力。</p>
                </div>
                <div className="text-[#C5A059] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter relative z-10">
                  Explore More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/co-learning" className="md:col-span-1">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-[2rem] h-[320px] border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4">
                    <Heart size={24} className="text-[#C5A059]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-2">親子共學</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">建立深厚的情感連結，讓家長與孩子在學習中共同成長。</p>
                </div>
                <div className="text-[#C5A059] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter">
                  Family Programs <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>

            <Link to="/charity" className="md:col-span-1">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-[#F9F7F2] p-6 rounded-[2rem] h-[320px] border border-[#C5A059]/20 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    <Shield size={24} className="text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#002B5B] leading-tight mb-2">大手牽小手<br/>愛心齊步走</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">從小培養孩子的同理心與社會責任感，播撒希望種子。</p>
                </div>
                <div className="text-[#C5A059] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter">
                  Charity Events <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
