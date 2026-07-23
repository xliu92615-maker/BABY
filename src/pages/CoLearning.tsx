import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Calendar, MapPin } from 'lucide-react';
import img1 from '../assets/images/regenerated_image_1784724380995.jpg';
import img2 from '../assets/images/regenerated_image_1784724381940.png';
import img3 from '../assets/images/regenerated_image_1784724383569.png';
import img4 from '../assets/images/dream_mission_agency_1784821909336.jpg';
import img5 from '../assets/images/capybara_baking_camp_1784822623447.jpg';
import img6 from '../assets/images/taro_ball_making_1784822861410.jpg';
import img7 from '../assets/images/emperor_roleplay_1784823051503.jpg';

export default function CoLearning() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const activities = [
    { title: '小小農夫生存戰', desc: '【週末爸媽救星】週末想帶孩子出門，又怕自己回家比上班還累？\n\n這週末把孩子交給大自然，把電力通通留在田裡！\n\n⚡️孩子極致放電｜拔蘿蔔、採野菜、認識農作、野趣DIY\n☕️爸媽專屬休息｜遮陽休息區、飲品無限量、乾淨沖洗區\n💥原價$750，限時優惠只要$399\n\n在汗水與笑聲中，玩出最棒的課外第一課！🌱', category: '親子共學', image: img1 },
    { title: '公主夢成真！', desc: '還在煩惱假日帶孩子去哪裡嗎？\n7～12月限定活動來啦～\n專業兒童彩妝體驗，搭配夢幻造型與拍照紀念，留下最珍貴的童年回憶❤️\n\n✨限量優惠｜前20位報名贈 Shushu & Sassy冰雪奇緣聯名款彩妝乙組！\n\n孩子的童年只有一次，讓我們一起陪伴她，完成一次屬於自己的公主夢✨', category: '親子共學', image: img2 },
    { title: '生活科學實驗', desc: '利用日常隨手可得的材料，進行趣味科學實驗，培養孩子與父母一起發掘問題與解決問題的能力。', category: '親子共學', image: img3 },
    { title: '🌙 夢境任務局 Dream Mission Agency', desc: '全台首創沉浸式兒童冒險體驗！\n💥半價優惠來襲！💥\n別再讓他們的週末只剩下平板和電視！\n✔️沉浸式劇情體驗\n✔️專屬夢境守護者勳章與證書\n讓孩子在遊戲中學習合作、勇敢挑戰、解決問題，也讓爸爸媽媽一起成為故事中的英雄！\n\n夢境任務局，等你一起完成這場屬於親子的夢想任務！', category: '親子共學', image: img4 },
    { title: '療癒登場！【2026限定開課】兒童卡皮巴拉療癒烘焙營', desc: '🔥獨家早鳥禮：前30位報名者，限定卡皮巴拉圍裙＆圍巾帽套組乙套（可帶回家紀念！）\n\n超可愛作品任選👍\n豚豚泡湯！立體糖霜餅乾\n水豚鬆軟生吐司\n卡皮巴拉派對蛋糕\n告別平淡無奇的假期，2026最讓小朋友尖叫、家長直呼「太可愛」的烘焙課正式上線‼️', category: '親子共學', image: img5 },
    { title: '週末放電首選！兒童手作芋圓🍠', desc: '➡️100%真食材：無防腐劑、零人工香精\n➡️五感大放電：訓練小手肌力，揉出滿滿成就感\n✨活動贈送：現場享用手作芋圓湯＋帶回自製芋圓生麵團！\n原價$599，現正半價優惠中🔥🔥\n\n大人舒壓、孩子放電，全家一起揉出專屬的古早味甜品～', category: '親子共學', image: img6 },
    { title: '限時搶購！全台最夯親子沉浸式體驗', desc: '奉天承運，皇帝詔曰！半價優惠中！\n家有「小霸王」與「小傲嬌」的爸爸媽媽請注意！快帶寶貝來一場穿越千年的帝王盛宴！\n\n✔️沉浸式儀態與趣味互動\n✔️1：1奢華宮廷服飾\n\n報名即贈！三大尊榮登基好禮\n📜【聖旨詔書紀念冊】\n📸【精修古風數位寫真照 2 張】\n👑【帝王/女帝專屬小禮冠】', category: '親子共學', image: img7 }
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
