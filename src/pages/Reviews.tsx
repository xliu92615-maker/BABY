import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Heart, MessageCircle, Quote, X } from 'lucide-react';

import zzz01 from '../assets/images/zzz-01.jpg';
import zzz02 from '../assets/images/zzz-02.jpg';
import zzz03 from '../assets/images/zzz-03.jpg';
import zzz04 from '../assets/images/zzz-04.jpg';
import zzz05 from '../assets/images/zzz-05.jpg';
import zzz06 from '../assets/images/zzz-06.jpg';
import zzz07 from '../assets/images/zzz-07.jpg';
import zzz08 from '../assets/images/zzz-08.jpg';
import zzz09 from '../assets/images/zzz-09.jpg';
import zzz10 from '../assets/images/zzz-10.jpg';
import zzz11 from '../assets/images/zzz-11.jpg';
import zzz12 from '../assets/images/zzz-12.jpg';

const reviewsData = [
  {
    id: 1,
    title: '小小彩妝師',
    text: '上週帶女兒參加小小彩妝師 整場下來女兒玩得超開心 媽媽拍照也拍得很開心😍實在太可愛了～自己化妝+穿新洋裝 算是圓了她的小公主夢😚謝謝你們辦這麼棒的活動～🤗',
  },
  {
    id: 2,
    title: '奧福音樂課',
    text: '帶孩子參加過不少活動，但在這裡真的感受得到團隊的用心與溫暖。老師非常懂幼兒心理，不會硬給指令，而是順著孩子的步調耐心引導。',
  },
  {
    id: 3,
    title: '美人魚體驗課',
    text: '謝謝你們為我們舉辦這麼多好玩的課程跟活動，讓小朋友們可以玩得這麼開心自在！',
  },
  {
    id: 4,
    title: '兒童芭蕾舞',
    text: '其實Emily一直很喜歡芭蕾舞課程，只是外面的課程學費都太貴了，所以一直因為費用的問題在猶豫沒有讓她去上課，多虧有你們的補助讓Emily可以好好的去上課了',
  },
  {
    id: 5,
    title: '烘焙課',
    text: '謝謝你們辦的活動，不只是讓孩子去玩、去體驗，從活動中也能學習專注力跟動手能力👍👍👍',
  },
];

function ReviewImages({ id, setLightboxImg }: { id: number; setLightboxImg: (src: string) => void }) {
  // 依照各卡片需要的版型，配置真實照片
  switch (id) {
    case 1:
      // 左邊大圖 + 右邊小圖
      return (
        <div className="flex gap-3 h-56 mt-6">
          <div className="w-2/3 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz01)}>
            <img src={zzz01} alt="小小彩妝師活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          <div className="w-1/3 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz02)}>
            <img src={zzz02} alt="小小彩妝師活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </div>
      );
    case 2:
      // 1大 + 2小 (上下)
      return (
        <div className="flex flex-col gap-3 h-72 mt-6">
          <div className="h-2/3 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz03)}>
            <img src={zzz03} alt="奧福音樂課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          <div className="h-1/3 flex gap-3">
            <div className="w-1/2 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz04)}>
              <img src={zzz04} alt="奧福音樂課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="w-1/2 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz05)}>
              <img src={zzz05} alt="奧福音樂課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      );
    case 3:
      // 2張並排
      return (
        <div className="flex gap-3 h-48 mt-6">
          <div className="w-1/2 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz06)}>
            <img src={zzz06} alt="美人魚體驗課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          <div className="w-1/2 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz07)}>
            <img src={zzz07} alt="美人魚體驗課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </div>
      );
    case 4:
      // 2張層次錯落排列
      return (
        <div className="h-56 mt-6 relative">
          <div className="absolute top-0 left-0 w-[65%] h-[80%] rounded-2xl z-10 overflow-hidden cursor-pointer border-4 border-white shadow-lg group" onClick={() => setLightboxImg(zzz08)}>
            <img src={zzz08} alt="兒童芭蕾舞活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[75%] rounded-2xl z-0 overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz09)}>
            <img src={zzz09} alt="兒童芭蕾舞活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </div>
      );
    case 5:
      // 2小 + 1大 (左右)
      return (
        <div className="flex gap-3 h-64 mt-6">
          <div className="w-1/3 flex flex-col gap-3">
            <div className="h-1/2 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz10)}>
              <img src={zzz10} alt="烘焙課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="h-1/2 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz11)}>
              <img src={zzz11} alt="烘焙課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>
          <div className="w-2/3 rounded-2xl overflow-hidden cursor-pointer shadow-inner relative group" onClick={() => setLightboxImg(zzz12)}>
            <img src={zzz12} alt="烘焙課活動照" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function ReviewCard({ data, setLightboxImg }: { data: typeof reviewsData[0]; setLightboxImg: (src: string) => void }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }} 
      className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-50"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-[#fdfcf9] rounded-full flex items-center justify-center border border-[#C5A059]/30 shadow-sm">
          <Star className="text-[#C5A059]" size={20} fill="#C5A059" />
        </div>
        <h3 className="text-xl font-black text-[#002B5B]">{data.title}</h3>
      </div>

      <div className="relative">
        <span className="absolute -top-6 -left-3 text-7xl text-[#C5A059] opacity-15 font-serif select-none leading-none">「</span>
        <p className="text-slate-600 font-medium leading-loose relative z-10 pl-6 text-justify">
          {data.text}
        </p>
      </div>

      <ReviewImages id={data.id} setLightboxImg={setLightboxImg} />
    </motion.div>
  );
}

export default function Reviews() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const col1 = [reviewsData[0], reviewsData[2], reviewsData[4]];
  const col2 = [reviewsData[1], reviewsData[3]];

  return (
    <div className="bg-[#fdfcf9] min-h-screen pt-32 pb-24 font-sans">
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#C5A059] transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImg} 
              alt="活動照片放大" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 頁面最上方 / Hero */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#002B5B]/5 border border-[#002B5B]/10 text-[#002B5B] font-bold text-sm mb-6">
            家長反饋
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#002B5B] tracking-tight mb-6">
            陪伴成長的真心話：<br className="md:hidden" />聽聽爸媽怎麼說
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed">
            超過 <span className="text-[#C5A059] text-2xl mx-1 font-black">500+</span> 位爸媽的真心推薦，<br className="hidden md:block" />與我們一起大手牽小手，探索更廣闊的世界！
          </p>
          <div className="flex justify-center items-center gap-3 mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <Heart size={20} className="text-[#C5A059]" fill="currentColor" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>
        </motion.div>
      </div>

      {/* 評價卡片區 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* 左欄 */}
          <div className="flex flex-col gap-8">
            {col1.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ReviewCard data={item} setLightboxImg={setLightboxImg} />
              </motion.div>
            ))}
          </div>
          
          {/* 右欄 (桌機版下沉錯落排版) */}
          <div className="flex flex-col gap-8 md:mt-24">
            {col2.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              >
                <ReviewCard data={item} setLightboxImg={setLightboxImg} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 頁面最下方收尾卡片 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#002B5B] to-[#0a4185] rounded-[32px] p-10 md:p-16 relative overflow-hidden text-center shadow-2xl border border-white/10"
        >
          {/* 裝飾背景 */}
          <Heart className="absolute top-8 left-8 text-[#C5A059] opacity-10" size={64} fill="currentColor" />
          <Star className="absolute bottom-12 right-12 text-[#C5A059] opacity-20" size={48} fill="currentColor" />
          <MessageCircle className="absolute -top-10 -right-10 text-white opacity-5" size={200} fill="currentColor" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-3xl font-black text-white leading-loose tracking-wide">
              擺脫傳統學習框架，<br className="md:hidden" />我們為孩子打造<span className="text-[#C5A059] mx-1 md:mx-2 border-b-2 border-[#C5A059]/30 pb-1">充滿樂趣與溫度</span>的體驗舞台。<br />
              從幼兒感官啟蒙、戶外闖關到國際視野培養，<br />
              我們用<span className="text-[#C5A059] mx-1 md:mx-2 border-b-2 border-[#C5A059]/30 pb-1">專業與愛</span>，<br className="md:hidden" />記錄孩子成長的<span className="text-[#C5A059] mx-1 md:mx-2 border-b-2 border-[#C5A059]/30 pb-1">每一次感動</span>
            </h3>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
