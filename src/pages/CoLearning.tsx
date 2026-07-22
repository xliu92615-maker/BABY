import { motion } from 'motion/react';
import img1 from '../assets/images/regenerated_image_1784724380995.jpg';
import img2 from '../assets/images/regenerated_image_1784724381940.png';
import img3 from '../assets/images/regenerated_image_1784724383569.png';

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
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-sm"
          >
            親子共學
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto font-medium"
          >
            陪伴是最好的教育。透過精心設計的共學課程，創造優質的親子互動時光，共同成長。
          </motion.p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border-4 border-slate-50 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-black text-[#002B5B] mb-6 tracking-tight">為什麼強調親子共學？</h2>
            <div className="w-16 h-1.5 bg-[#C5A059] rounded-full mb-8" />
            <p className="text-slate-500 leading-relaxed mb-6 text-sm font-medium">
              在孩子成長的黃金階段，父母的角色無可取代。親子共學不僅是知識的傳遞，更是情感的交流與榜樣的建立。
            </p>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">
              我們將傳統「把孩子交給老師」的模式，翻轉為「家庭共同參與」。當父母展現學習的熱情，孩子自然會跟隨腳步，在充滿安全感與愛的環境中勇敢探索。
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#C5A059] rounded-full mix-blend-multiply opacity-20" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#002B5B] rounded-full mix-blend-multiply opacity-10" />
              <img src="/images/placeholder.svg" alt="共學畫面" className="rounded-[2rem] shadow-sm w-full h-48 object-cover border-4 border-white relative z-10 hover:rotate-2 transition-transform duration-500" />
              <img src="/images/placeholder.svg" alt="共學畫面" className="rounded-[2rem] shadow-sm w-full h-48 object-cover mt-8 border-4 border-white relative z-10 hover:-rotate-2 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">共學主題系列</h2>
          <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: '藝術創作共繪', desc: '透過色彩與材質的探索，沒有對錯的畫布，只有親子間滿滿的創意火花。', category: '親子共學', image: img1 },
            { title: '戶外自然探索', desc: '【週末爸媽救星】週末想帶孩子出門，又怕自己回家比上班還累？\n這個週末把孩子搬遷，把電力通通留在田裡！\n⚡️孩子極限極限｜拔蘿蔔、採野菜、認識農作、野趣DIY\n☕️爸媽專屬休息｜沐浴休息區、飲品無限量、乾淨沖洗區\n💥原價\n399\n在汗水與笑聲中，玩出最棒的課外第一課！ 🌱', category: '親子共學', image: img2 },
            { title: '生活科學實驗', desc: '利用日常隨手可得的材料，進行趣味科學實驗，培養孩子與父母一起發掘問題與解決問題的能力。', category: '親子共學', image: img3 }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-slate-50 flex flex-col group"
            >
              <div className="relative overflow-hidden m-4 rounded-[2rem] shrink-0" style={{ aspectRatio: '4/3' }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-[#C5A059] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-md">
                  {item.category}
                </div>
              </div>
              <div className="p-8 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#002B5B] mb-3 group-hover:text-[#C5A059] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed font-medium whitespace-pre-wrap line-clamp-4">
                    {item.desc}
                  </p>
                </div>
                <button className="w-full py-3.5 rounded-full border-2 border-slate-100 text-[#002B5B] font-bold hover:border-[#002B5B] hover:bg-[#002B5B] hover:text-white transition-all text-sm uppercase tracking-wider shadow-sm mt-auto">
                  了解詳情
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
