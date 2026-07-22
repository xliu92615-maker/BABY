import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      id: 1,
      title: '小小天文學家星空探險營',
      category: '科學探索',
      date: '2026-08-15',
      time: '14:00 - 17:00',
      location: '台北市天文科學教育館',
      image: '/images/placeholder.svg',
      desc: '透過生動有趣的互動展覽與專業導覽，帶領孩子們一窺宇宙的奧秘，啟發對科學的熱愛。'
    },
    {
      id: 2,
      title: '國際文化交流美食節',
      category: '文化體驗',
      date: '2026-09-05',
      time: '10:00 - 15:00',
      location: '啟夢教育中心',
      image: '/images/placeholder.svg',
      desc: '邀請各國講師分享家鄉美食與文化故事，讓孩子在味蕾的享受中培養國際觀與包容心。'
    },
    {
      id: 3,
      title: '大自然生態攝影工作坊',
      category: '戶外實踐',
      date: '2026-09-20',
      time: '09:00 - 16:00',
      location: '陽明山國家公園',
      image: '/images/placeholder.svg',
      desc: '由專業攝影師與生態專家帶領，教導孩子如何觀察自然並用鏡頭記錄生命的美好瞬間。'
    },
    {
      id: 4,
      title: '未來科技機器人編程營',
      category: '邏輯訓練',
      date: '2026-10-10',
      time: '13:00 - 18:00',
      location: '啟夢教育中心',
      image: '/images/placeholder.svg',
      desc: '從零開始學習基礎程式邏輯，親手組裝與設計機器人，培養解決問題的運算思維。'
    }
  ];

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-[#002B5B] text-white py-20 relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            主題活動
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            豐富多元的探索旅程，為孩子打開認識世界的多扇窗。
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-[#002B5B] tracking-tight">近期活動</h2>
          <div className="flex gap-2">
            {['全部', '科學探索', '文化體驗', '戶外實踐'].map((cat, i) => (
              <button 
                key={i} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0 ? 'bg-[#002B5B] text-white' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
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
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#C5A059] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                  {activity.category}
                </div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-3 group-hover:text-[#C5A059] transition-colors tracking-tight">
                    {activity.title}
                  </h3>
                  <p className="text-slate-500 mb-6 line-clamp-2 text-sm leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar size={16} className="text-[#C5A059]" />
                    <span>{activity.date}</span>
                    <Clock size={16} className="text-[#C5A059] ml-2" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} className="text-[#C5A059]" />
                    <span>{activity.location}</span>
                  </div>
                </div>
                <button className="mt-6 w-full py-3 rounded-full border border-slate-200 text-[#002B5B] font-bold hover:border-[#002B5B] hover:bg-[#002B5B] hover:text-white transition-colors text-sm uppercase tracking-wider">
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
