import kkk3 from "../assets/images/kkk-3.jpg";
import ch001 from "../assets/images/ch-001.jpg";
import jjj1 from "../assets/images/JJJ-1.jpg";
import jjj2 from "../assets/images/JJJ-2.jpg";
import jjj3 from "../assets/images/JJJ-3.jpg";
import jjj4 from "../assets/images/JJJ-4.jpg";
import fff1 from "../assets/images/FFF-1.jpg";
import fff2 from "../assets/images/FFF-2.jpg";
import fff3 from "../assets/images/FFF-3.jpg";
import fff4 from "../assets/images/FFF-4.jpg";
import fff5 from "../assets/images/FFF-5.jpg";
import s1 from "../assets/images/s-1.jpg";
import s2 from "../assets/images/s-2.jpg";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Search, ExternalLink, Sparkles } from "lucide-react";

export default function Team() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const [founderLightboxIndex, setFounderLightboxIndex] = useState<number | null>(null);
  const [founderTouchStartX, setFounderTouchStartX] = useState(0);

  const [mediaLightboxIndex, setMediaLightboxIndex] = useState<number | null>(null);
  const [mediaTouchStartX, setMediaTouchStartX] = useState(0);

  const galleryImages = [jjj1, jjj2, jjj3, jjj4];
  const founderImages = [fff1, fff2, fff3, fff4, fff5];
  const founderThumbnails = [fff2, fff3, fff4, fff5];
  const mediaImages = [s1, s2];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
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
      } else if (founderLightboxIndex !== null) {
        if (e.key === "Escape") setFounderLightboxIndex(null);
        if (e.key === "ArrowLeft") {
          setFounderLightboxIndex((prev) =>
            prev === null ? null : prev === 0 ? founderImages.length - 1 : prev - 1
          );
        }
        if (e.key === "ArrowRight") {
          setFounderLightboxIndex((prev) =>
            prev === null ? null : prev === founderImages.length - 1 ? 0 : prev + 1
          );
        }
      } else if (mediaLightboxIndex !== null) {
        if (e.key === "Escape") setMediaLightboxIndex(null);
        if (e.key === "ArrowLeft") {
          setMediaLightboxIndex((prev) =>
            prev === null ? null : prev === 0 ? mediaImages.length - 1 : prev - 1
          );
        }
        if (e.key === "ArrowRight") {
          setMediaLightboxIndex((prev) =>
            prev === null ? null : prev === mediaImages.length - 1 ? 0 : prev + 1
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, founderLightboxIndex, mediaLightboxIndex, galleryImages.length, founderImages.length, mediaImages.length]);

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

  const handleFounderTouchStart = (e: React.TouchEvent) => {
    setFounderTouchStartX(e.touches[0].clientX);
  };

  const handleFounderTouchEnd = (e: React.TouchEvent) => {
    if (founderLightboxIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = founderTouchStartX - touchEndX;
    if (diff > 50) {
      setFounderLightboxIndex((prev) =>
        prev === null ? null : prev === founderImages.length - 1 ? 0 : prev + 1
      );
    }
    if (diff < -50) {
      setFounderLightboxIndex((prev) =>
        prev === null ? null : prev === 0 ? founderImages.length - 1 : prev - 1
      );
    }
  };

  const handleMediaTouchStart = (e: React.TouchEvent) => {
    setMediaTouchStartX(e.touches[0].clientX);
  };

  const handleMediaTouchEnd = (e: React.TouchEvent) => {
    if (mediaLightboxIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = mediaTouchStartX - touchEndX;
    if (diff > 50) {
      setMediaLightboxIndex((prev) =>
        prev === null ? null : prev === mediaImages.length - 1 ? 0 : prev + 1
      );
    }
    if (diff < -50) {
      setMediaLightboxIndex((prev) =>
        prev === null ? null : prev === 0 ? mediaImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border-4 border-slate-50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-[#002B5B] mb-6 tracking-tight drop-shadow-sm">
              關於國際教育發展團隊 Global Edu｜以教育為根，以愛為名
            </h2>
            <div className="w-16 h-2 bg-[#C5A059] rounded-full mb-8" />

            <p className="text-xl text-[#002B5B] font-bold mb-4">
              教育，是改變人生的起點；視野，是開創未來的力量。
            </p>
            <p className="text-[#C5A059] text-2xl font-black mb-8 italic drop-shadow-sm">
              「我們不只是送孩子出國，而是幫他們找到自己的未來。」
            </p>

            <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg">
              國際教育發展團隊（Global Edu）以多元教育為核心，尊重每位學生的個性和志向，提供量身打造的職涯與學業規劃。我們陪伴孩子在探索世界的過程中，認識自我、建立自信，進而找到屬於自己的方向與抱負。
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
                  <img src={img} alt={`執行長生活照 ${idx + 1}`} className="w-full h-full object-cover object-center" />
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

        {/* 創辦人 Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-slate-50 flex flex-col md:flex-row items-center md:items-center p-8 md:p-12 gap-10"
        >
          <div 
            onClick={() => setFounderLightboxIndex(0)}
            className="w-full md:w-[400px] aspect-[4/3] md:aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden shrink-0 relative border-4 border-slate-100 shadow-sm transition-colors group cursor-pointer"
          >
            <img
              src={fff1}
              alt="創辦人"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#002B5B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <span className="text-white text-sm md:text-base font-medium flex items-center gap-2 drop-shadow-md">
                <Search size={20} /> 查看大圖
              </span>
            </div>
          </div>

          <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start justify-center w-full">
            <h3 className="text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
              創辦人
            </h3>
            <div className="w-16 h-1.5 bg-[#C5A059] rounded-full mt-6 mb-8" />
            
            {/* 照片牆 (4 張小縮圖) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full mt-4">
              {founderThumbnails.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setFounderLightboxIndex(idx + 1)}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border-2 border-white cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <img src={img} alt={`創辦人照片 ${idx + 1}`} className="w-full h-full object-cover object-center" />
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
      </div>

      {/* 媒體報導專區 (Media Coverage) */}
      <section className="mt-16 sm:mt-24 pt-12 sm:pt-16 pb-16 bg-gradient-to-b from-[#FAF8F5] via-[#fdfcf9] to-[#FAF8F5] border-t border-slate-100 relative overflow-hidden">
        {/* Decorative playful dots */}
        <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-[#C5A059]/20 pointer-events-none hidden sm:block" />
        <div className="absolute top-12 right-12 w-5 h-5 rounded-full bg-[#002B5B]/10 pointer-events-none hidden sm:block" />
        <div className="absolute bottom-8 left-1/4 w-3.5 h-3.5 rounded-full bg-[#ff6600]/15 pointer-events-none hidden sm:block" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Top Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-300/40 tracking-widest uppercase select-none pointer-events-none font-serif leading-none mb-1">
              MEDIA COVERAGE
            </div>
            <div className="relative inline-block -mt-3 sm:-mt-6">
              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                <Sparkles className="text-[#C5A059] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
                  媒體報導
                </h2>
                <Sparkles className="text-[#C5A059] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <p className="mt-3.5 sm:mt-4 text-base sm:text-lg md:text-xl font-bold text-[#002B5B] max-w-2xl mx-auto leading-relaxed">
              江毅澤執行長｜親子共學與國際教育推廣
            </p>
          </div>

          {/* 新聞報導主卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-md border-2 border-slate-100 relative overflow-hidden"
          >
            {/* 卡片上方標題區域 */}
            <div className="mb-8 sm:mb-10 text-center md:text-left border-b border-slate-100 pb-6 sm:pb-8">
              {/* 小型分類標籤 */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C5A059]/30 text-[#C5A059] font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
                <Sparkles size={14} className="text-[#C5A059]" />
                <span>媒體報導 MEDIA COVERAGE</span>
              </div>

              {/* 經濟日報名稱（醒目放大，電腦版約 36–42px，手機版約 28–32px） */}
              <h3 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-black text-[#002B5B] tracking-tight leading-tight">
                經濟日報
              </h3>

              {/* 新聞標題（電腦版約 26–30px，手機版約 21–24px，自然換行，無日期） */}
              <h4 className="mt-3 sm:mt-4 text-[21px] sm:text-[24px] md:text-[27px] lg:text-[30px] font-black text-[#002B5B] leading-snug">
                江毅澤執行長推動親子共學、國際教育，陪伴逾600家庭再開放100名額
              </h4>
            </div>

            {/* 卡片內容排版：電腦版左圖右文，手機版上圖下文 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* 左側：新聞截圖 s-1、s-2（電腦版並排，手機版上下排列） */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {/* s-1 圖片 */}
                  <div
                    onClick={() => setMediaLightboxIndex(0)}
                    className="group relative bg-white rounded-[12px] p-2.5 border-2 border-slate-100 shadow-sm hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                  >
                    <div className="relative overflow-hidden rounded-[8px] bg-slate-50">
                      <img
                        src={s1}
                        alt="經濟日報新聞報導截圖 第一部分"
                        className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#002B5B]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                        <span className="text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-xs shadow-lg">
                          <Search size={16} /> 點擊放大檢視
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* s-2 圖片 */}
                  <div
                    onClick={() => setMediaLightboxIndex(1)}
                    className="group relative bg-white rounded-[12px] p-2.5 border-2 border-slate-100 shadow-sm hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                  >
                    <div className="relative overflow-hidden rounded-[8px] bg-slate-50">
                      <img
                        src={s2}
                        alt="經濟日報新聞報導截圖 第二部分"
                        className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#002B5B]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                        <span className="text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-xs shadow-lg">
                          <Search size={16} /> 點擊放大檢視
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-bold text-[#002B5B] text-center tracking-wide pt-1">
                  感謝經濟日報獨家報導
                </p>
              </div>

              {/* 右側：新聞完整內容與連結按鈕 */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="space-y-4 text-slate-700 font-normal leading-[1.85] text-base sm:text-[16.5px] text-justify sm:text-left">
                  <p>
                    教育不只是孩子的成長，更是整個家庭共同學習與進步的旅程。江毅澤執行長長期關注親子共學與國際教育，希望透過多元教育資源與實際行動，陪伴家長與孩子拓展視野、累積學習經驗，為家庭創造更多成長的可能。
                  </p>
                  <p>
                    面對全球化與多元文化的發展，國際視野已逐漸成為孩子未來成長的重要能力，執行長持續推動相關教育理念，希望讓更多家庭有機會接觸不同形式的學習資源，讓孩子不只是學習知識，更能在體驗中發現興趣、建立自信，逐步培養面對未來所需要的能力。
                  </p>
                  <p>
                    執行長推動至今，已陪伴超過600個家庭參與親子共學及多元教育相關活動。每個家庭都有不同的需求與期待，而這些參與經驗，也讓親子教育的推廣有機會持續向更多家庭延伸。
                  </p>
                  <p>
                    為了讓更多家長與孩子能夠接觸相關資源，江毅澤執行長宣布再次開放100個參與名額，希望將親子共學與國際教育的理念帶給更多家庭，讓不同家庭都能擁有更多學習、探索與成長的機會。
                  </p>
                  <p>
                    執行長期盼透過持續的努力，讓更多家庭看見教育的不同可能，讓孩子擁有更寬廣的學習舞台，也讓每一份陪伴都能成為孩子成長路上珍貴的養分。
                  </p>
                </div>

                {/* 閱讀完整新聞報導按鈕 */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center md:justify-start">
                  <a
                    href="https://pse.is/9qkfdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#002B5B] hover:bg-[#001f42] text-white font-bold text-base sm:text-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
                  >
                    <span>閱讀完整新聞報導</span>
                    <ExternalLink size={18} className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 創辦人頁面品牌結語區塊 (Closing Section) */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#fdfcf9] via-[#FAF8F5] to-[#fdfcf9] border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* 金色細線與星芒裝飾 */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Sparkles className="text-[#C5A059] shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C5A059]/40" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C5A059]/40" />
            <Sparkles className="text-[#C5A059] shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* 主標題 */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-black text-[#002B5B] tracking-tight leading-snug">
            因為相信教育的力量，所以我們持續前行
          </h2>

          {/* 簡潔金色細線分隔 */}
          <div className="w-16 h-1 bg-[#C5A059] rounded-full mx-auto mt-5 sm:mt-6 mb-8 sm:mb-10" />

          {/* 兩段內文 */}
          <div className="space-y-4 sm:space-y-5 text-slate-700 leading-[1.8] text-base sm:text-[17px] md:text-[18px] font-normal text-justify sm:text-center">
            <p className="leading-[1.8]">
              國際教育發展團隊 Global Edu 秉持著對教育的熱忱，持續串聯多元學習資源、規劃豐富的親子活動，並推動親子共學與國際教育，希望讓更多孩子有機會探索不同領域、拓展國際視野，也讓每個家庭都能在陪伴與學習中創造更多美好的可能。
            </p>
            <p className="leading-[1.8]">
              教育的路上，我們不只希望帶給孩子更多元的學習機會，更期待成為家長值得信賴的夥伴。未來，Global Edu 將持續帶著這份初心，與更多家庭攜手同行，讓學習不受限於課堂，讓世界成為孩子成長的舞台。
            </p>
          </div>

          {/* 分隔金線裝飾 */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent mx-auto my-8 sm:my-10" />

          {/* 結尾品牌標語 */}
          <p className="text-base sm:text-lg md:text-[20px] font-black text-[#002B5B] leading-relaxed tracking-wide">
            國際教育發展團隊 Global Edu｜以教育連結世界，以陪伴成就未來。
          </p>
        </div>
      </section>

      {/* CEO Lightbox */}
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
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === lightboxIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Founder Lightbox */}
      <AnimatePresence>
        {founderLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFounderLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 md:p-4"
            onTouchStart={handleFounderTouchStart}
            onTouchEnd={handleFounderTouchEnd}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setFounderLightboxIndex(null); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 bg-black/20 rounded-full hover:bg-black/40"
              aria-label="關閉大圖"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setFounderLightboxIndex(prev => prev === null ? null : (prev === 0 ? founderImages.length - 1 : prev - 1)); 
              }}
              className="absolute left-2 md:left-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 md:p-3 bg-black/30 rounded-full hover:bg-black/50"
              aria-label="上一張照片"
            >
              <ChevronLeft size={36} />
            </button>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setFounderLightboxIndex(prev => prev === null ? null : (prev === founderImages.length - 1 ? 0 : prev + 1)); 
              }}
              className="absolute right-2 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 md:p-3 bg-black/30 rounded-full hover:bg-black/50"
              aria-label="下一張照片"
            >
              <ChevronRight size={36} />
            </button>

            <motion.img 
              key={founderLightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={founderImages[founderLightboxIndex]} 
              alt="創辦人照片放大檢視" 
              className="w-auto h-auto max-w-[94vw] max-h-[85vh] md:max-w-[90vw] md:max-h-[90vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
              draggable="false"
            />
            
            {/* Mobile Swipe hint / Indicator */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {founderImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === founderLightboxIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Lightbox */}
      <AnimatePresence>
        {mediaLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMediaLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 md:p-4"
            onTouchStart={handleMediaTouchStart}
            onTouchEnd={handleMediaTouchEnd}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setMediaLightboxIndex(null); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 bg-black/20 rounded-full hover:bg-black/40"
              aria-label="關閉大圖"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setMediaLightboxIndex(prev => prev === null ? null : (prev === 0 ? mediaImages.length - 1 : prev - 1)); 
              }}
              className="absolute left-2 md:left-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 md:p-3 bg-black/30 rounded-full hover:bg-black/50"
              aria-label="上一張截圖"
            >
              <ChevronLeft size={36} />
            </button>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setMediaLightboxIndex(prev => prev === null ? null : (prev === mediaImages.length - 1 ? 0 : prev + 1)); 
              }}
              className="absolute right-2 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 md:p-3 bg-black/30 rounded-full hover:bg-black/50"
              aria-label="下一張截圖"
            >
              <ChevronRight size={36} />
            </button>

            <motion.img 
              key={mediaLightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={mediaImages[mediaLightboxIndex]} 
              alt="經濟日報新聞報導大圖檢視" 
              className="w-auto h-auto max-w-[94vw] max-h-[88vh] md:max-w-[90vw] md:max-h-[90vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
              draggable="false"
            />
            
            {/* Mobile Swipe hint / Indicator */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {mediaImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === mediaLightboxIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
