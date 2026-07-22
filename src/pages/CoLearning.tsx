import { motion } from 'motion/react';

export default function CoLearning() {
  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/placeholder.svg" alt="親子共學" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#002B5B]/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            親子共學
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            陪伴是最好的教育。透過精心設計的共學課程，創造優質的親子互動時光，共同成長。
          </motion.p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-6 tracking-tight">為什麼強調親子共學？</h2>
            <div className="w-16 h-1 bg-[#C5A059] rounded-full mb-8" />
            <p className="text-slate-500 leading-relaxed mb-6 text-sm">
              在孩子成長的黃金階段，父母的角色無可取代。親子共學不僅是知識的傳遞，更是情感的交流與榜樣的建立。
            </p>
            <p className="text-slate-500 leading-relaxed text-sm">
              我們將傳統「把孩子交給老師」的模式，翻轉為「家庭共同參與」。當父母展現學習的熱情，孩子自然會跟隨腳步，在充滿安全感與愛的環境中勇敢探索。
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <img src="/images/placeholder.svg" alt="共學畫面" className="rounded-[2rem] shadow-sm w-full h-48 object-cover" />
              <img src="/images/placeholder.svg" alt="共學畫面" className="rounded-[2rem] shadow-sm w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 tracking-tight">共學主題系列</h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '藝術創作共繪', desc: '透過色彩與材質的探索，沒有對錯的畫布，只有親子間滿滿的創意火花。' },
            { title: '戶外自然探索', desc: '走出戶外，由自然專家引導，一起觀察昆蟲、植物，學習尊重生命與環境。' },
            { title: '生活科學實驗', desc: '利用日常隨手可得的材料，進行趣味科學實驗，培養孩子與父母一起發掘問題與解決問題的能力。' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img src="/images/placeholder.svg" alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <button className="text-[#C5A059] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter hover:text-[#002B5B] transition-colors">
                  查看課程 <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
