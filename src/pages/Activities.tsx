import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Calendar, MapPin } from 'lucide-react';
import activity1Image from '../assets/images/regenerated_image_1784723277413.png';
import activity2Image from '../assets/images/regenerated_image_1784723276333.jpg';
import activity3Image from '../assets/images/regenerated_image_1784723280280.jpg';
import activity4Image from '../assets/images/regenerated_image_1784968699805.jpg';

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
      title: '🎉超人氣巧虎🐯見面會來啦！',
      category: '美學設計',
      image: activity4Image,
      desc: '每一次見面都是孩子最期待的歡樂時光💛\n\n讓巧虎帶領寶貝們唱歌跳舞、學習生活禮貌與常規！現場還有精采的互動遊戲，以及難得的親密一對一合照環節，給孩子留下最溫暖、難忘的童年回憶！\n\n🎵 一起唱唱跳跳\n📸 一起留下美好回憶\n🎈 一起享受親子互動\n💥特價一大一小＄299'
    }
  ];

  return (
    <div className="bg-[#fdfcf9] min-h-screen pb-24">
      {/* Hero */}
      <div className="pt-24 pb-16 relative overflow-hidden bg-transparent">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FFE5B4] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E0F2FE] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFF9E6] border border-[#F59E0B] text-[#92400E] font-bold text-sm sm:text-base tracking-wide mb-8 shadow-sm"
          >
            <Star size={18} className="fill-[#92400E] text-[#92400E]" />
            全台唯一 24H 專業親子活動與職人營隊推薦門戶
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-sm flex flex-wrap justify-center gap-2"
          >
            <span className="text-[#002B5B]">主題</span>
            <span className="text-[#F59E0B]">活動</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-bold tracking-widest bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-slate-100"
          >
            主題活動熱烈報名中 🔥
          </motion.p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, idx) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border-2 border-slate-100 flex flex-col group cursor-pointer"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#FFCC00] text-[#0f439c] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {activity.category}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-[#0f439c] mb-3 group-hover:text-[#ff6600] transition-colors">{activity.title}</h3>
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
                <div className="relative aspect-[16/9] w-full shrink-0">
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
                    <a href="https://line.me/ti/p/NUTLuJnPsY" className="px-6 py-2.5 rounded-full bg-[#00C300] text-white font-bold hover:bg-[#00a600] shadow-md transition-colors flex items-center gap-2">
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
