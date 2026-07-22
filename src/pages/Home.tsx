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
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl" />
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" stroke="white" fill="transparent" strokeWidth="0.5" />
            <path d="M0 50 C 40 80 60 20 100 50" stroke="#C5A059" fill="transparent" strokeWidth="0.3" opacity="0.5" />
            <circle cx="80" cy="20" r="10" fill="#C5A059" />
            <circle cx="20" cy="80" r="15" fill="white" opacity="0.2" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.5 }}
            className="w-full md:w-3/5"
          >
            <motion.div 
              animate={{ y: [-5, 5, -5] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-block px-5 py-2 bg-[#C5A059] text-white text-[11px] uppercase tracking-widest rounded-full mb-6 font-black shadow-md border-2 border-white/20"
            >
              ✨ International Standard Education ✨
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-md">
              啟發無限潛能<br className="hidden md:block" />
              成就<span className="text-[#C5A059] relative inline-block mx-2">
                夢想
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute -top-4 -right-8 text-yellow-300">
                  <Star size={32} fill="currentColor" />
                </motion.div>
              </span>未來
            </h1>
            <p className="text-lg text-blue-100 font-bold leading-relaxed mb-10 max-w-xl">
              為孩子提供國際化視野，結合溫馨的親子共學環境，在專業導師團隊的帶領下，開啟一段充滿愛與智慧的成長旅程。
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <Link to="/activities" className="bg-[#C5A059] hover:bg-[#B8962E] text-white px-10 py-5 rounded-full font-black text-base transition-all shadow-[0_8px_0_#9E8047] hover:shadow-[0_4px_0_#9E8047] hover:translate-y-1 active:shadow-none active:translate-y-2 flex items-center justify-center gap-2">
                探索活動 <ArrowRight size={20} strokeWidth={3} />
              </Link>
              <Link to="/team" className="bg-white hover:bg-blue-50 text-[#002B5B] px-10 py-5 rounded-full font-black text-base transition-all shadow-[0_8px_0_#e2e8f0] hover:shadow-[0_4px_0_#e2e8f0] hover:translate-y-1 active:shadow-none active:translate-y-2 flex items-center justify-center gap-2">
                認識團隊 <Users size={20} strokeWidth={3} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
            className="w-full md:w-2/5 hidden md:flex justify-center relative"
          >
            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="h-[450px] w-full max-w-sm bg-white rounded-[4rem] border-[12px] border-white/20 flex items-end justify-center overflow-hidden relative shadow-2xl z-10"
            >
               <img src="/images/placeholder.svg" alt="Hero Image" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Cute floating decors */}
            <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute -top-10 -right-10 w-24 h-24 bg-amber-300 rounded-full border-8 border-white/30 z-0" />
            <motion.div animate={{ y: [10, -10, 10], rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 2 }} className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full border-8 border-white/30 z-20 mix-blend-multiply opacity-80" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-[#fdfdfd] relative overflow-hidden">
        {/* Playful background elements */}
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute top-10 right-20 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply opacity-60 blur-2xl" />
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 7 }} className="absolute bottom-10 left-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply opacity-60 blur-2xl" />
        <motion.div animate={{ x: [0, 20, 0], y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply opacity-60 blur-2xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="bg-white p-10 md:p-16 rounded-[4rem] border-4 border-amber-50 shadow-xl relative"
          >
            {/* Cute decorations */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-50 rounded-full border-4 border-white shadow-md flex items-center justify-center rotate-12">
              <Star className="text-blue-400" size={32} fill="currentColor" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-amber-50 rounded-full border-4 border-white shadow-md flex items-center justify-center -rotate-12">
              <Heart className="text-amber-400" size={40} fill="currentColor" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-[#002B5B] mb-8 tracking-tight leading-snug drop-shadow-sm">
              啟迪孩子夢想，在<span className="text-[#C5A059] mx-2 relative inline-block">
                體驗中
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-200" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>快樂學習
            </h2>
            <div className="w-24 h-2.5 bg-[#C5A059] mx-auto rounded-full mb-10" />
            
            <p className="text-xl md:text-2xl text-[#002B5B] font-black mb-10 tracking-tight bg-blue-50 inline-block px-8 py-3 rounded-full border-2 border-blue-100">
              啟夢教育｜陪伴每一段成長，實現每一個夢想 🌟
            </p>
            
            <div className="space-y-8 text-slate-600 font-bold leading-relaxed text-lg">
              <p>
                啟夢教育秉持著「陪伴、專業、創新」的教育理念，我們相信，教育不僅侷限於課堂，更應延伸至生活中的每一次探索、每一場活動、每一段旅程，讓每位小朋友都能在快樂中學習，在體驗中成長！
              </p>
              <p>
                未來，我們將持續推出更多優質課程、親子活動、國內外文化交流、國際留遊學、公益計畫，讓每一位孩子、都能在這裡找到屬於自己的舞台，累積更多知識、創造更多幸福回憶。
              </p>
              <div className="bg-amber-50 p-8 rounded-[3rem] border-4 border-amber-100 mt-10 relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-white rounded-full border-4 border-amber-200 flex items-center justify-center text-amber-400">
                  <Star size={20} fill="currentColor" />
                </div>
                <div className="absolute -bottom-5 -right-5 w-10 h-10 bg-white rounded-full border-4 border-amber-200 flex items-center justify-center text-amber-400">
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="font-black text-[#C5A059] text-xl leading-relaxed">
                  「 因為我們相信：教育能改變人生；陪伴能創造感動；而每一次相遇，都將成為未來最珍貴的回憶。」
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-[#fdfdfd] relative overflow-hidden">
        {/* Playful background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-100 rounded-full opacity-50 blur-xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 relative">
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -top-10 left-[20%] text-amber-300 hidden md:block"
            >
              <Star size={48} fill="currentColor" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-[#002B5B] mb-6 tracking-tight drop-shadow-sm relative z-10 inline-block"
            >
              為什麼選擇啟夢教育？
            </motion.h2>
            <div className="w-20 h-2 bg-[#C5A059] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Globe, title: '國際化視野', desc: '導入全球頂尖教育資源，培養具備國際競爭力的未來人才。', bg: 'bg-blue-100', iconColor: 'text-[#002B5B]', shadow: 'shadow-[0_8px_0_#bfdbfe]', border: 'border-blue-200' },
              { icon: Heart, title: '溫馨共學', desc: '強調親子陪伴，創造有愛、有溫度的學習環境。', bg: 'bg-amber-100', iconColor: 'text-[#C5A059]', shadow: 'shadow-[0_8px_0_#fde68a]', border: 'border-amber-200' },
              { icon: Star, title: '專業師資', desc: '嚴選各領域專家，提供最高品質的教學體驗。', bg: 'bg-slate-100', iconColor: 'text-[#002B5B]', shadow: 'shadow-[0_8px_0_#e2e8f0]', border: 'border-slate-200' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, type: "spring", bounce: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white p-10 rounded-[4rem] border-4 ${feature.border} ${feature.shadow} flex flex-col items-center text-center group cursor-pointer transition-transform`}
              >
                <div className={`w-24 h-24 ${feature.bg} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-300 border-4 border-white shadow-md`}>
                  <feature.icon size={40} className={feature.iconColor} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-[#002B5B] mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-bold">{feature.desc}</p>
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
              <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">精選教育計畫</h2>
              <div className="w-16 h-1.5 bg-[#C5A059] rounded-full" />
            </div>
            <Link to="/activities" className="text-[#C5A059] text-sm font-bold flex items-center gap-2 uppercase tracking-tighter hover:text-[#002B5B] transition-colors bg-amber-50 px-4 py-2 rounded-full hover:bg-slate-100">
              查看全部 <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link to="/activities" className="md:col-span-2">
              <motion.div 
                whileHover={{ y: -6, rotate: -1 }}
                className="bg-[#002B5B] p-8 rounded-[3rem] h-[320px] flex flex-col justify-between shadow-md hover:shadow-2xl transition-all group overflow-hidden relative border-4 border-[#002B5B]"
              >
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                   <Star size={200} />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">主題活動</h3>
                  <p className="text-slate-300 text-sm font-medium">精心策劃各類跨學科探索活動，培養孩子批判性思考與團隊協作能力。</p>
                </div>
                <div className="text-[#C5A059] text-sm font-bold flex items-center gap-2 uppercase tracking-tighter relative z-10 bg-white/10 w-fit px-4 py-2 rounded-full">
                  Explore More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/co-learning" className="md:col-span-1">
              <motion.div 
                whileHover={{ y: -6, rotate: 1 }}
                className="bg-white p-6 rounded-[3rem] h-[320px] border-4 border-slate-50 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Heart size={28} className="text-[#C5A059]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#002B5B] mb-3 tracking-tight">親子共學</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">建立深厚的情感連結，讓家長與孩子在學習中共同成長。</p>
                </div>
                <div className="text-[#C5A059] text-sm font-bold flex items-center gap-2 uppercase tracking-tighter">
                  Family Programs <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>

            <Link to="/charity" className="md:col-span-1">
              <motion.div 
                whileHover={{ y: -6, rotate: -1 }}
                className="bg-[#F9F7F2] p-6 rounded-[3rem] h-[320px] border-4 border-white flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Shield size={28} className="text-red-400" />
                  </div>
                  <h3 className="text-xl font-black text-[#002B5B] leading-tight mb-3 tracking-tight">大手牽小手<br/>愛心齊步走</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">從小培養孩子的同理心與社會責任感，播撒希望種子。</p>
                </div>
                <div className="text-[#C5A059] text-sm font-bold flex items-center gap-2 uppercase tracking-tighter">
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
