const fs = require('fs');

let content = fs.readFileSync('src/pages/Charity.tsx', 'utf8');

// Update imports
content = content.replace(
  "import { HeartHandshake, Smile, TreePine, ChevronLeft, ChevronRight, X } from 'lucide-react';",
  "import { HeartHandshake, Smile, TreePine, ChevronLeft, ChevronRight, X, Search } from 'lucide-react';"
);

const newImports = `
import pppp1 from '../assets/images/pppp-1.jpg';
import pppp2 from '../assets/images/pppp-2.jpg';
import pppp3 from '../assets/images/pppp-3.jpg';
import pppp4 from '../assets/images/pppp-4.jpg';
import pppp5 from '../assets/images/pppp-5.jpg';
import pppp6 from '../assets/images/pppp-6.jpg';
`;

// Insert after the last import
content = content.replace("import ee013 from '../assets/images/EE-013.png';", "import ee013 from '../assets/images/EE-013.png';" + newImports);

const newComponent = `
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
            <p>原來一群人的小小行動，也能讓一片海灘產生這麼大的改變。一片海灘的乾淨，也許只是一天的改變；但一個孩子建立起來的環境意識，可能影響他未來幾十年的生活選擇。而當一個家庭開始改變，更多家庭一起行動，便能讓小小的力量慢慢匯聚成更大的改變。</p>
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
              <img src={img} alt={\`淨灘公益活動紀錄 \${idx + 1}\`} className="w-full h-full object-contain" />
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
}`;

const startIndex = content.indexOf('function BeachCleanupSection() {');
const endIndex = content.indexOf('export default function Charity() {');

const finalContent = content.slice(0, startIndex) + newComponent + '\n\n' + content.slice(endIndex);

fs.writeFileSync('src/pages/Charity.tsx', finalContent);
console.log('Script completed.');
