import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HeartHandshake,
  Smile,
  TreePine,
  ChevronLeft,
  ChevronRight,
  X,
  Search,
} from "lucide-react";
import HandInHandWarmthSection from "../components/HandInHandWarmthSection";

import ee001 from "../assets/images/EE-001.jpg";
import ee003 from "../assets/images/EE-003.jpg";
import ee004 from "../assets/images/EE-004.jpg";
import ee005 from "../assets/images/EE-005.jpg";
import ee002 from "../assets/images/EE-002.jpg";
import ee006 from "../assets/images/EE-006.jpg";
import ee007 from "../assets/images/ee-007.jpg";
import ee008 from "../assets/images/ee-008.jpg";
import ee009 from "../assets/images/ee-009.jpg";
import ee010 from "../assets/images/EE-010.jpg";
import opo011 from "../assets/images/OPO-011.png";
import ee012 from "../assets/images/EE-012.jpg";
import ee013 from "../assets/images/EE-013.png";
import pppp1 from "../assets/images/pppp-1.jpg";
import pppp2 from "../assets/images/pppp-2.jpg";
import pppp3 from "../assets/images/pppp-3.jpg";
import pppp4 from "../assets/images/pppp-4.jpg";
import pppp5 from "../assets/images/pppp-5.jpg";
import pppp6 from "../assets/images/pppp-6.jpg";

const materialImages = [
  ee006,
  ee007,
  ee008,
  ee009,
  ee010,
  opo011,
  ee012,
  ee013,
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function getVariant(idx, current, total) {
  const diff = (idx - current + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  if (diff === total - 1) return "left";
  return diff <= total / 2 ? "hiddenRight" : "hiddenLeft";
}

const variants = {
  center: { x: "0%", scale: 1, opacity: 1, zIndex: 10 },
  right: { x: "85%", scale: 0.85, opacity: 0.5, zIndex: 0 },
  left: { x: "-85%", scale: 0.85, opacity: 0.5, zIndex: 0 },
  hiddenRight: { x: "150%", scale: 0.75, opacity: 0, zIndex: -1 },
  hiddenLeft: { x: "-150%", scale: 0.75, opacity: 0, zIndex: -1 },
};

function CharityMaterialSupport() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % materialImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const paginate = useCallback((newDirection) => {
    setPage(
      (p) => (p + newDirection + materialImages.length) % materialImages.length,
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-xl border-4 border-slate-50"
      >
        <div className="text-center mb-10 md:mb-14 space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-[#C5A059] font-bold text-xs tracking-widest uppercase">
            <HeartHandshake size={16} />
            公益特別報導
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] tracking-tight leading-tight">
            點滴物資，匯聚成孩子成長的大大力量
          </h2>

          <div className="w-16 h-1.5 bg-[#C5A059] rounded-full mx-auto" />

          <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4 font-medium px-4 md:px-0">
            <p>
              手心向下，愛不間斷。定期走訪育幼院及偏鄉地區孩童，確保每份資源精準對接孩子們的即時需求，讓愛心發揮最大價值。
            </p>
            <p>
              我們希望透過定期的物資支援，減輕院方的營運壓力，讓孩子們能夠在無後顧之憂的環境中健康成長！
            </p>
          </div>
        </div>

        {/* Carousel Area */}
        <div
          className="relative w-full max-w-[1000px] mx-auto overflow-hidden flex items-center justify-center py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-[85%] md:w-[75%] aspect-[4/3] relative mx-auto">
            {materialImages.map((img, i) => {
              const variant = getVariant(i, page, materialImages.length);
              return (
                <motion.div
                  key={i}
                  variants={variants}
                  initial={false}
                  animate={variant}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 rounded-[22px] md:rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-white/90 bg-amber-50"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) paginate(1);
                    else if (swipe > swipeConfidenceThreshold) paginate(-1);
                  }}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="公益物資支援活動紀錄"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-[#002B5B]/0 hover:bg-[#002B5B]/5 transition-colors duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Left / Right Arrows */}
          <button
            className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#002B5B] shadow-lg hover:scale-110 transition-transform z-20 border border-slate-100"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#002B5B] shadow-lg hover:scale-110 transition-transform z-20 border border-slate-100"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Info */}
        <div className="flex flex-col items-center justify-center mt-8 gap-3">
          <div className="text-slate-500 font-bold tracking-widest text-sm">
            {String(page + 1).padStart(2, "0")} /{" "}
            {String(materialImages.length).padStart(2, "0")}
          </div>
          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#C5A059]"
              initial={{ width: 0 }}
              animate={{
                width: `${((page + 1) / materialImages.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CharityPhotoGrid() {
  const photos = [ee001, ee002, ee003, ee004, ee005];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] tracking-tight mb-4">
          大手牽小手・愛心齊步走
        </h2>
        <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {photos.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white border border-slate-50 relative group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt="公益活動紀錄"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/5 transition-colors duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BeachCleanupSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const galleryImages = [pppp1, pppp2, pppp3, pppp4, pppp5, pppp6];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : prev === 0
              ? galleryImages.length - 1
              : prev - 1,
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : prev === galleryImages.length - 1
              ? 0
              : prev + 1,
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
        prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1,
      );
    }
    if (diff < -50) {
      setLightboxIndex((prev) =>
        prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="relative py-20 md:py-28 overflow-hidden bg-[#fdfdfd]">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#002B5B] tracking-tight mb-8"
          >
            拾起每一片塑膠，為下一代預約一片永續蔚藍
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1.5 bg-[#C5A059] mx-auto rounded-full mb-10"
          />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 font-bold mb-8 leading-relaxed"
          >
            帶孩子走進海洋、親手守護環境，讓一場淨灘成為孩子人生中第一堂真正的永續教育課。
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed font-medium space-y-4 px-4 md:px-0"
          >
            <p>
              原來一群人的小小行動，也能讓一片海灘產生這麼大的改變。一片海灘的乾淨，也許只是一天的改變；但一個孩子建立起來的環境意識，可能影響他未來幾十年的生活選擇。而當一個家庭開始改變，更多家庭一起行動，便能讓小小的力量慢慢匯聚成更大的改變。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-[22px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-amber-50/30 border-2 border-white cursor-pointer"
            >
              <img
                src={img}
                alt={`淨灘公益活動紀錄 ${idx + 1}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-[#002B5B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <span className="text-white text-sm md:text-base font-medium flex items-center gap-2 drop-shadow-md">
                  <Search size={20} /> 查看大圖
                </span>
              </div>
            </motion.div>
          ))}
        </div>
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
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-2 bg-black/20 rounded-full hover:bg-black/40"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev === null
                    ? null
                    : prev === 0
                      ? galleryImages.length - 1
                      : prev - 1,
                );
              }}
              className="absolute left-2 md:left-8 text-white/70 hover:text-white transition-colors cursor-pointer z-50 p-3 bg-black/20 rounded-full hover:bg-black/40 hidden sm:block"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev === null
                    ? null
                    : prev === galleryImages.length - 1
                      ? 0
                      : prev + 1,
                );
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
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === lightboxIndex ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Charity() {
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
              大手牽小手，
              <br />
              <span className="text-[#C5A059]">愛心齊步走</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 leading-relaxed mb-8 font-medium space-y-4"
            >
              <p>教育的價值，不僅在於知識的傳遞，更在於愛與關懷的實踐。</p>
              <p>
                創辦人始終相信，一個人的成長，不只是學會更多技能，更要懂得關心他人、珍惜資源，並將善意化為實際行動。
              </p>
              <p>
                真正的教育並非只存在於教室之中，而是體現在生活中的每一次選擇與每一次行動。當孩子願意主動幫助他人、懂得分享、學會感恩，這些品格將成為陪伴他們一生的重要力量。
              </p>
              <p>
                當每個人都願意付出一點點關懷，就能匯聚成改變社會的力量；當每個家庭都願意帶著孩子參與公益，就能讓愛與善良持續傳承，讓更多需要幫助的人感受到希望與溫暖。
              </p>
              <p>
                教育能夠啟發夢想，公益能夠溫暖人心，而每一次真誠的付出，都將成為改變世界的一份力量。
              </p>
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
                className="w-full h-auto object-cover transition-transform duration-500"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute inset-0 border border-[#C5A059]/30 rounded-[20px] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              icon: HeartHandshake,
              title: "關懷弱勢",
              desc: "定期走訪育幼院與偏鄉地區，將物資與愛心送到最需要的地方，讓孩子們感受到社會的溫暖。",
            },
            {
              icon: Smile,
              title: "品格教育",
              desc: "帶領孩子參與公益，在付出的過程中學會同理心與感恩，培養負責任的良好品格。",
            },
            {
              icon: TreePine,
              title: "永續傳承",
              desc: "將公益理念深植於教育之中，讓愛心與善意在世代間傳遞，建立更溫暖的社會。",
            },
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
              <h3 className="text-xl font-black text-[#002B5B] mb-3 tracking-tight group-hover:text-[#C5A059] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* New Charity Material Support Section */}
      <CharityMaterialSupport />

      {/* Charity Photo Grid */}
      <CharityPhotoGrid />

      {/* Beach Cleanup Section */}
      <BeachCleanupSection />

      {/* Hand In Hand Warmth Section */}
      <HandInHandWarmthSection />
    </div>
  );
}
