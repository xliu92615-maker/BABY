const fs = require('fs');
let code = fs.readFileSync('src/pages/Charity.tsx', 'utf8');
code = code.replace("import CharityGallery from '../components/CharityGallery';", 
`import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';`);

const galleryCode = `
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
`;

code = code.replace("export default function Charity() {",
`export default function Charity() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allImages.length : null));
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allImages.length) % allImages.length : null));
  }, []);
`);

code = code.replace(/<img src={ee002} alt="公益活動" className="w-full h-auto object-cover" style={{ aspectRatio: '4\/3' }} \/>/,
`<img 
  src={ee002} 
  alt="公益活動紀錄" 
  className="w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-500" 
  style={{ aspectRatio: '4/3' }} 
  onClick={() => setLightboxIndex(1)}
/>`);

code = code.replace("<CharityGallery />", "<CharityGallery openLightbox={setLightboxIndex} />");

code = code.replace("    </div>\n  );\n}",
`      {lightboxIndex !== null && (
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

${galleryCode}
`);

fs.writeFileSync('src/pages/Charity.tsx', code);
