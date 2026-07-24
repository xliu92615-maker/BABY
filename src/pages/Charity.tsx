import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, Smile, TreePine, ChevronLeft, ChevronRight } from 'lucide-react';
import charityImage from '../assets/images/regenerated_image_1784816871769.png';
import gallery1 from '../assets/images/charity_gallery_1_1784860922522.jpg';
import gallery2 from '../assets/images/charity_gallery_2_1784860937562.jpg';
import gallery3 from '../assets/images/charity_gallery_3_1784860950316.jpg';
import gallery4 from '../assets/images/charity_gallery_4_1784860963695.jpg';
import gallery5 from '../assets/images/charity_gallery_5_1784860977626.jpg';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">活動精彩剪影</h2>
        <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto group">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden relative bg-slate-100 shadow-2xl border-4 border-white">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="公益活動剪影"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#002B5B] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#002B5B] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                currentIndex === idx ? 'w-8 h-2 bg-[#C5A059]' : 'w-2 h-2 bg-white/70 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Charity() {
  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Hero */}
      <div className="relative py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059]/10 text-[#C5A059] font-bold text-[10px] tracking-widest uppercase mb-6">
              <HeartHandshake size={14} />
              社會企業責任
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#002B5B] leading-tight mb-6 tracking-tight drop-shadow-sm"
            >
              大手牽小手，<br />
              <span className="text-[#C5A059]">愛心齊步走</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 leading-relaxed mb-8 font-medium space-y-4"
            >
              <p>教育的價值，不僅在於知識的傳遞，更在於愛與關懷的實踐。</p>
              <p>王景富主任始終相信，一個人的成長，不只是學會更多技能，更要懂得關心他人、珍惜資源，並將善意化為實際行動。</p>
              <p>真正的教育並非只存在於教室之中，而是體現在生活中的每一次選擇與每一次行動。當孩子願意主動幫助他人、懂得分享、學會感恩，這些品格將成為陪伴他們一生的重要力量。</p>
              <p>當每個人都願意付出一點點關懷，就能匯聚成改變社會的力量；當每個家庭都願意帶著孩子參與公益，就能讓愛與善良持續傳承，讓更多需要幫助的人感受到希望與溫暖。</p>
              <p>教育能夠啟發夢想，公益能夠溫暖人心，而每一次真誠的付出，都將成為改變世界的一份力量。</p>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <img src={charityImage} alt="公益活動" className="w-full h-auto object-cover" style={{ aspectRatio: '4/3' }} />
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2rem] shadow-xl border-4 border-slate-50 hidden md:block"
            >
              <div className="text-4xl font-black text-[#C5A059] mb-1">50+</div>
              <div className="text-slate-500 font-bold text-xs tracking-wider uppercase">走訪偏鄉學校</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">三大公益行動</h2>
          <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Smile, title: '微光計畫：偏鄉教育資源挹注', desc: '定期將優質的科創、藝術課程帶入偏鄉學校，點燃孩子眼中的光芒。' },
            { icon: HeartHandshake, title: '愛心二手物資循環', desc: '募集狀況良好的書籍與教具，整理後捐贈給需要的社福機構，延續物品的生命與愛。' },
            { icon: TreePine, title: '綠色地球：家庭淨灘日', desc: '號召家長與孩子們捲起袖子，透過實際的淨灘行動，上一堂最生動的環境教育課。' }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[3rem] text-center shadow-sm hover:shadow-xl transition-all border-4 border-slate-50 flex flex-col items-center group"
            >
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6 text-[#C5A059] group-hover:scale-110 transition-transform">
                <pillar.icon size={32} />
              </div>
              <h3 className="text-xl font-black text-[#002B5B] mb-3 tracking-tight group-hover:text-[#C5A059] transition-colors">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo Gallery Slider */}
      <PhotoSlider />
    </div>
  );
}
