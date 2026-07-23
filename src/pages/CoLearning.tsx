import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Calendar, MapPin } from 'lucide-react';
import img1 from '../assets/images/regenerated_image_1784724380995.jpg';
import img2 from '../assets/images/regenerated_image_1784724381940.png';
import img3 from '../assets/images/regenerated_image_1784724383569.png';

export default function CoLearning() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const activities = [
    { title: '小小農夫生存戰', desc: '【週末爸媽救星】週末想帶孩子出門，又怕自己回家比上班還累？\n\n這週末把孩子交給大自然，把電力通通留在田裡！\n\n⚡️孩子極致放電｜拔蘿蔔、採野菜、認識農作、野趣DIY\n☕️爸媽專屬休息｜遮陽休息區、飲品無限量、乾淨沖洗區\n💥原價$750，限時優惠只要$399\n\n在汗水與笑聲中，玩出最棒的課外第一課！🌱', category: '親子共學', image: img1 },
    { title: '公主夢成真！', desc: '還在煩惱假日帶孩子去哪裡嗎？\n7～12月限定活動來啦～\n專業兒童彩妝體驗，搭配夢幻造型與拍照紀念，留下最珍貴的童年回憶❤️\n\n✨限量優惠｜前20位報名贈 Shushu & Sassy冰雪奇緣聯名款彩妝乙組！\n\n孩子的童年只有一次，讓我們一起陪伴她，完成一次屬於自己的公主夢✨', category: '親子共學', image: img2 },
    { title: '生活科學實驗', desc: '利用日常隨手可得的材料，進行趣味科學實驗，培養孩子與父母一起發掘問題與解決問題的能力。', category: '親子共學', image: img3 }
  ];

  return (
    <div className="bg-[#fdfcf9] min-h-screen pb-24">
      {/* Hero */}
      <div className="bg-[#0f439c] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">親子共學</h1>
        <p className="text-[#FFCC00] text-lg font-bold">陪伴是最好的教育。透過精心設計的共學課程，創造優質的親子互動時光，共同成長。</p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border-2 border-slate-100 flex flex-col group cursor-pointer"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-2xl shrink-0">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#FFCC00] text-[#0f439c] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {activity.category}
                </div>
              </div>
              <div className="p-6 pt-2 flex flex-col flex-1">
                <h3 className="text-xl font-black text-[#0f439c] mb-3 group-hover:text-[#ff6600] transition-colors">{activity.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed font-medium whitespace-pre-wrap line-clamp-3">
                  {activity.desc}
                </p>
                <div className="mt-auto">
                  <button className="w-full py-3 rounded-full border-2 border-[#00C300] text-[#00C300] font-bold group-hover:bg-[#00C300] group-hover:text-white transition-colors">
                    了解詳情
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="fixed inset-0 bg-[#0f439c]/80 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full shrink-0">
                  <img src={selectedActivity.image} alt={selectedActivity.title} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setSelectedActivity(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0f439c] hover:bg-[#FFCC00] transition-colors shadow-lg"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-8">
                  <span className="inline-block bg-[#ffeedd] text-[#ff6600] px-3 py-1 rounded-full text-xs font-bold mb-4">
                    {selectedActivity.category}
                  </span>
                  <h2 className="text-3xl font-black text-[#0f439c] mb-6">{selectedActivity.title}</h2>
                  <div className="text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">
                    {selectedActivity.desc}
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-3">
                    <button onClick={() => setSelectedActivity(null)} className="px-6 py-2.5 rounded-full font-bold text-slate-500 hover:bg-slate-100 transition-colors">
                      關閉
                    </button>
                    <a href="#" className="px-6 py-2.5 rounded-full bg-[#00C300] text-white font-bold hover:bg-[#00a600] shadow-md transition-colors flex items-center gap-2">
                      加LINE立即報名
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
