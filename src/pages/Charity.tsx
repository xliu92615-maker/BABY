import { motion } from 'motion/react';
import { HeartHandshake, Smile, TreePine } from 'lucide-react';



import HandInHandWarmthSection from '../components/HandInHandWarmthSection';
import ee001 from '../assets/images/EE-001.jpg';
import ee002 from '../assets/images/EE-002.jpg';
import ee003 from '../assets/images/EE-003.jpg';
import ee004 from '../assets/images/EE-004.jpg';
import ee005 from '../assets/images/EE-005.jpg';
import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';



export default function Charity() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allImages.length : null));
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allImages.length) % allImages.length : null));
  }, []);

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Hero */}
      <div className="relative py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-[45%]">
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
              <p>創辦人始終相信，一個人的成長，不只是學會更多技能，更要懂得關心他人、珍惜資源，並將善意化為實際行動。</p>
              <p>真正的教育並非只存在於教室之中，而是體現在生活中的每一次選擇與每一次行動。當孩子願意主動幫助他人、懂得分享、學會感恩，這些品格將成為陪伴他們一生的重要力量。</p>
              <p>當每個人都願意付出一點點關懷，就能匯聚成改變社會的力量；當每個家庭都願意帶著孩子參與公益，就能讓愛與善良持續傳承，讓更多需要幫助的人感受到希望與溫暖。</p>
              <p>教育能夠啟發夢想，公益能夠溫暖人心，而每一次真誠的付出，都將成為改變世界的一份力量。</p>
            </motion.div>
          </div>
          <div className="w-full md:w-[55%] relative mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[24px] overflow-hidden shadow-xl border-4 border-white group"
            >
              <img 
  src={ee002} 
  alt="公益活動紀錄" 
  className="w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-500" 
  style={{ aspectRatio: '4/3' }} 
  onClick={() => setLightboxIndex(1)}
/>
              <div className="absolute inset-0 border border-[#C5A059]/30 rounded-[20px] pointer-events-none" />
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

      {/* 花蓮地震賑災公益專題 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl border-4 border-slate-50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* 文章內容 */}
            <div className="lg:col-span-12 space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-[#C5A059] font-bold text-xs tracking-widest uppercase">
                <HeartHandshake size={16} />
                公益特別報導
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] tracking-tight leading-tight">
                災難無情，人間有愛
              </h2>
              
              <div className="w-16 h-1.5 bg-[#C5A059] rounded-full" />

              <div className="text-slate-600 text-base leading-relaxed space-y-4 font-medium">
                <p>
                  去年花蓮發生強烈地震，光復鄉等地受到災情影響，許多家庭的生活在一夕之間被打亂。道路受損、房屋受創，不少居民面臨物資短缺與生活上的困境。
                </p>
                <p>
                  災難發生後，創辦人也第一時間準備救災物資及民生用品送往花蓮，創辦人說：公益不是等到有能力才去做，而是在別人最需要的時候，願意伸出援手。
                </p>
                <p className="p-4 bg-amber-50/60 rounded-2xl border-l-4 border-[#C5A059] italic text-[#002B5B]">
                  他也常分享：「教育，不只是教孩子如何讀書，更要教會他們什麼是責任、什麼是同理心，以及如何用自己的力量幫助別人。」
                </p>
                <p>
                  因此我們始終將公益視為教育的一部份。我們希望孩子在學習知識、拓展視野的同時，也能看見社會的需要，理解分享的價值，學會感恩，並在未來成為願意回饋社會的人。
                </p>
                <p>
                  願花蓮早日重建家園，願每一位受災居民都能重新迎向平安與希望；也願更多人因為一份善意而選擇投入公益，讓愛不因災難而停止，而是在每一次伸出援手的瞬間持續傳遞。
                </p>
                <p className="font-bold text-[#002B5B]">
                  一座城市可以因為重建而再次站起來，而一個社會，則會因為更多願意付出的人，而變得更加溫暖。
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Hand In Hand Warmth Section */}
      <HandInHandWarmthSection />

      {/* Photo Gallery Slider */}
      <CharityGallery openLightbox={setLightboxIndex} />
      {lightboxIndex !== null && (
        <Lightbox 
          images={allImages}
          selectedIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}


const allImages = [
  ee001,
  ee002,
  ee003,
  ee004,
  ee005
];

function CharityGallery({ openLightbox }: { openLightbox: (idx: number) => void }) {
  const galleryImages = [
    { src: ee001, index: 0 },
    { src: ee003, index: 2 },
    { src: ee004, index: 3 },
    { src: ee005, index: 4 }
  ];

  return (
    <div id="photo-slider" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">大手牽小手．愛心齊步走</h2>
        <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {galleryImages.map((img) => (
          <motion.div 
            key={img.index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(img.index)}
            className="aspect-[4/3] rounded-[20px] md:rounded-[24px] overflow-hidden relative shadow-sm hover:shadow-xl border-4 border-white group cursor-pointer bg-slate-50"
          >
            <img
              src={img.src}
              className="absolute inset-0 w-full h-full object-cover"
              alt="公益活動紀錄"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/10 transition-colors duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Lightbox({ 
  images, 
  selectedIndex, 
  onClose, 
  onNext, 
  onPrev 
}: { 
  images: string[], 
  selectedIndex: number, 
  onClose: () => void, 
  onNext: () => void, 
  onPrev: () => void 
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 rounded-full p-2"
        >
          <X size={32} />
        </button>
        
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 hover:bg-black/40 rounded-full p-3"
        >
          <ChevronLeft size={36} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 hover:bg-black/40 rounded-full p-3"
        >
          <ChevronRight size={36} />
        </button>

        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-[90vw] max-h-[90vh] flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[selectedIndex]}
            alt="放大圖片"
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


