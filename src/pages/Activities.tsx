import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import activity1Image from '../assets/images/regenerated_image_1784723277413.png';
import activity2Image from '../assets/images/regenerated_image_1784723276333.jpg';
import activity3Image from '../assets/images/regenerated_image_1784723280280.jpg';

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const activities = [
    {
      id: 1,
      title: '汪汪隊立大功．救援任務出動！',
      category: '主題活動',
      image: activity1Image,
      desc: '市區直達、百元票價即可享受正版授權的精彩體驗！設有氣墊滑梯、任務球池、攀爬闖關等全方位感官探索設施，讓孩子們化身汪汪隊成員，跟著阿奇、毛毛與萊德隊長一起出動救援！\n\n💡 為什麼需要帶孩子來呢？\n✔️省時間：週末免請假，半日遊輕鬆搞定\n✔️省荷包：官方授權正版體驗，小資價格大滿足\n✔️高回報：小孩電力放光，晚上回家秒睡\n💥特價一大一小＄299'
    },
    {
      id: 2,
      title: '妙妙犬布麗親子見面會',
      category: '主題活動',
      image: activity2Image,
      desc: '一場讓孩子笑到停不下來的親子時光🎉\n和妙妙犬布麗一起唱跳互動，陪孩子度過充滿歡笑的一天🐶\n\n✔️妙妙犬布麗見面會\n✔️親子互動\n✔️合影打卡\n✔️歡樂遊戲\n💥特價一大一小＄399'
    },
    {
      id: 3,
      title: '🚨全台超人氣｜波力救援小英雄見面會',
      category: '主題活動',
      image: activity3Image,
      desc: '化身小小救援英雄，和波力一起展開精彩冒險！\n讓孩子盡情奔跑、快樂放電，陪伴孩子創造最值得珍藏的成長回憶！\n\n✔️歡樂的歌舞律動，促進大肌肉發展與身體平衡協調\n✔️在互動遊戲中學習遵守秩序與團隊互助的合作精神\n💥特價一大一小＄299'
    },
    {
      id: 4,
      title: '【黏土手作】繽紛微縮甜點派對',
      category: '美學設計',
      image: '/images/placeholder.svg',
      desc: '親子輕黏土美學設計課，現場提供黏土造型大師專用全套不鏽鋼/塑料精細塑形壓紋工具，創造充滿歡笑與收穫的精彩週末！'
    }
  ];

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-[#002B5B] text-white py-24 relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[30rem] h-[30rem] bg-[#C5A059] rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[20rem] h-[20rem] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight drop-shadow-sm"
          >
            主題活動
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto font-medium"
          >
            豐富多元的探索旅程，為孩子打開認識世界的多扇窗。
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-3xl font-black text-[#002B5B] tracking-tight">近期活動</h2>
          <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {['全部', '科學探索', '文化體驗', '戶外實踐'].map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap shadow-sm hover:-translate-y-0.5 ${
                  i === 0 ? 'bg-[#002B5B] text-white' : 'bg-white text-slate-500 hover:bg-amber-50 hover:text-[#C5A059] border-2 border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, idx) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-slate-50 flex flex-col group"
            >
              <div className="relative overflow-hidden m-4 rounded-[2rem] shrink-0" style={{ aspectRatio: '4/3' }}>
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#C5A059] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-md">
                  {activity.category}
                </div>
              </div>
              <div className="p-8 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#002B5B] mb-3 group-hover:text-[#C5A059] transition-colors tracking-tight">
                    {activity.title}
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed font-medium whitespace-pre-wrap line-clamp-4">
                    {activity.desc}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedActivity(activity)}
                  className="w-full py-3.5 rounded-full border-2 border-slate-100 text-[#002B5B] font-bold hover:border-[#002B5B] hover:bg-[#002B5B] hover:text-white transition-all text-sm uppercase tracking-wider shadow-sm mt-auto"
                >
                  了解詳情
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-[3rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              >
                <div className="relative">
                  <div className="aspect-[16/9] w-full relative">
                    <img 
                      src={selectedActivity.image} 
                      alt={selectedActivity.title}
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={() => setSelectedActivity(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#002B5B] hover:bg-white hover:scale-110 transition-all shadow-sm"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="p-8 md:p-10">
                    <div className="inline-block bg-amber-50 text-[#C5A059] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 border border-amber-100">
                      {selectedActivity.category}
                    </div>
                    <h2 className="text-3xl font-black text-[#002B5B] mb-6 tracking-tight">
                      {selectedActivity.title}
                    </h2>
                    
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                        {selectedActivity.desc}
                      </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end gap-4">
                      <button 
                        onClick={() => setSelectedActivity(null)}
                        className="px-8 py-3 rounded-full font-bold text-slate-500 hover:bg-slate-50 transition-colors"
                      >
                        關閉
                      </button>
                      <button className="px-8 py-3 rounded-full bg-[#002B5B] text-white font-bold hover:bg-blue-900 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                        立即報名
                      </button>
                    </div>
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
