const fs = require('fs');
let content = fs.readFileSync('src/pages/Team.tsx', 'utf8');

// 1. Imports
content = content.replace(
  "import { useState } from 'react';",
  "import { useState, useEffect } from 'react';"
);
content = content.replace(
  "import { X } from 'lucide-react';",
  "import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react';"
);

// 2. Component Setup (State)
content = content.replace(
  "  const [lightboxImg, setLightboxImg] = useState<string | null>(null);",
  `  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const galleryImages = [jjj1, jjj2, jjj3, jjj4];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex(prev => prev === null ? null : (prev === 0 ? galleryImages.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex(prev => prev === null ? null : (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (lightboxIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      setLightboxIndex(prev => prev === null ? null : (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
    if (diff < -50) {
      setLightboxIndex(prev => prev === null ? null : (prev === 0 ? galleryImages.length - 1 : prev - 1));
    }
  };`
);

// 3. Grid
const oldGrid = `{/* 照片牆 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[jjj1, jjj2, jjj3, jjj4].map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setLightboxImg(img)}
                  className="aspect-square rounded-2xl overflow-hidden shadow-sm border-2 border-white cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300"
                >
                  <img src={img} alt={\`執行長生活照 \${idx + 1}\`} className="w-full h-full object-cover object-center" />
                </div>
              ))}
            </div>`;

const newGrid = `{/* 照片牆 */}
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
            </div>`;
content = content.replace(oldGrid, newGrid);

// 4. Lightbox
const oldLightbox = `{/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X size={36} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg} 
              alt="放大圖片" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>`;

const newLightbox = `{/* Lightbox */}
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
      </AnimatePresence>`;
content = content.replace(oldLightbox, newLightbox);

fs.writeFileSync('src/pages/Team.tsx', content);
