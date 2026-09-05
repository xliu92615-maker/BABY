const fs = require('fs');

const fullCode = `import kkk3 from "../assets/images/kkk-3.jpg";
import ch001 from "../assets/images/ch-001.jpg";
import jjj1 from "../assets/images/JJJ-1.jpg";
import jjj2 from "../assets/images/JJJ-2.jpg";
import jjj3 from "../assets/images/JJJ-3.jpg";
import jjj4 from "../assets/images/JJJ-4.jpg";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function Team() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const galleryImages = [jjj1, jjj2, jjj3, jjj4];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (lightboxIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      setLightboxIndex((prev) =>
        prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
    if (diff < -50) {
      setLightboxIndex((prev) =>
        prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border-4 border-slate-50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-[#002B5B] mb-6 tracking-tight drop-shadow-sm">
              關於樂共學｜以教育為根，以愛為名
            </h2>
            <div className="w-16 h-2 bg-[#C5A059] rounded-full mb-8" />

            <p className="text-xl text-[#002B5B] font-bold mb-4">
              教育，是改變人生的起點；視野，是開創未來的力量。
            </p>
            <p className="text-[#C5A059] text-2xl font-black mb-8 italic drop-shadow-sm">
              「我們不只是送孩子出國，而是幫他們找到自己的未來。」
            </p>

            <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg">
              樂共學以多元教育為核心，尊重每位學生的個性和志向，提供量身打造的職涯與學業規劃。我們陪伴孩子在探索世界的過程中，認識自我、建立自信，進而找到屬於自己的方向與抱負。
            </p>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                    1
                  </div>
                  國際留遊學｜開闊視野，接軌世界
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  國際視野不該是拿來比較的籌碼，而是面對世界變局的強大底氣。讓他們在面對未知與挑戰時不膽怯，擁有自信行走世界的從容、格局與力量。
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                    2
                  </div>
                  多元教育適性發展｜因材施教，點燃潛能
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  打破傳統單一的評量框架，我們的教育本質「點燃」而非「填滿」。透過多元適性的引導，協助孩子發掘自身的優勢與熱情，養成適應未來變局的核心素養，讓每個孩子都能在屬於自己的舞台上發光發熱。
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                    3
                  </div>
                  深耕公益與社會責任｜傳遞溫暖，播下希望
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  世界需要的不是高高在上的精英，而是懂得愛的個體。我們持續將資源與關懷延伸至社會需要的角落，讓孩子在汲取知識的同時，也學會關懷生命、回饋社會，讓愛的循環生生不息。
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                    4
                  </div>
                  陪伴家庭成長｜讓家庭更有底氣，讓孩子更有方向
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  教育是家庭的共同修行。我們希望賦予家庭正向連結的力量，讓家長成為孩子最堅實的後盾，讓孩子帶著滿滿的愛，勇敢飛向世界。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-slate-50 flex flex-col md:flex-row items-center md:items-center p-8 md:p-12 gap-10"
        >
          <div className="w-full md:w-[400px] aspect-[4/3] md:aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden shrink-0 relative border-4 border-slate-100 shadow-sm transition-colors group">
            <img
              src={kkk3}
              alt="執行長"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start justify-center w-full">
            <h3 className="text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
              執行長
            </h3>
            <div className="w-16 h-1.5 bg-[#C5A059] rounded-full mt-6 mb-8" />
            
            {/* 照片牆 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full mt-4">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border-2 border-white cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <img src={img} alt={\`執行長生活照 \${idx + 1}\`} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-[#002B5B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <span className="text-white text-sm md:text-base font-medium flex items-center gap-2 drop-shadow-md">
                      <Search size={20} /> 查看大圖
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-slate-50 flex flex-col md:flex-row items-center md:items-center p-8 md:p-12 gap-10"
        >
          <div className="w-full md:w-[400px] aspect-[4/3] md:aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden shrink-0 relative border-4 border-slate-100 shadow-sm transition-colors group">
            <img
              src={ch001}
              alt="主任"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start justify-center">
            <h3 className="text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
              主任
            </h3>
            <div className="w-16 h-1.5 bg-[#C5A059] rounded-full mt-6" />
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 md:p-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 bg-black/20 rounded-full hover:bg-black/40"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setLightboxIndex(prev => prev === null ? null : (prev === 0 ? galleryImages.length - 1 : prev - 1)); 
              }}
              className="absolute left-2 md:left-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-3 bg-black/20 rounded-full hover:bg-black/40 hidden sm:block"
            >
              <ChevronLeft size={40} />
            </button>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setLightboxIndex(prev => prev === null ? null : (prev === galleryImages.length - 1 ? 0 : prev + 1)); 
              }}
              className="absolute right-2 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-3 bg-black/20 rounded-full hover:bg-black/40 hidden sm:block"
            >
              <ChevronRight size={40} />
            </button>

            <motion.img 
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={galleryImages[lightboxIndex]} 
              alt="放大圖片" 
              className="w-auto h-auto max-w-[94vw] max-h-[85vh] md:max-w-[90vw] md:max-h-[90vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
              draggable="false"
            />
            
            {/* Mobile Swipe hint / Indicator */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {galleryImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={\`w-2.5 h-2.5 rounded-full transition-colors \${idx === lightboxIndex ? 'bg-white' : 'bg-white/30'}\`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`;
fs.writeFileSync('src/pages/Team.tsx', fullCode);
