const fs = require('fs');

const content = fs.readFileSync('src/pages/Charity.tsx', 'utf8');

const beachCleanupCode = `
function BeachCleanupSection() {
  const placeholders = Array(6).fill("");
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
          {placeholders.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-[4/3] rounded-[22px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-50 border-2 border-white group relative"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                <svg className="w-12 h-12 mb-3 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase">Photo Space</span>
              </div>
              <div className="absolute inset-0 bg-[#002B5B]/0 group-hover:bg-[#002B5B]/5 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

const insertIndex = content.indexOf('export default function Charity() {');
const newContent = content.slice(0, insertIndex) + beachCleanupCode + '\n' + content.slice(insertIndex);

const replaceIndex = newContent.indexOf('{/* Charity Photo Grid */}\n      <CharityPhotoGrid />');
const finalContent = newContent.replace(
  '{/* Charity Photo Grid */}\n      <CharityPhotoGrid />',
  '{/* Charity Photo Grid */}\n      <CharityPhotoGrid />\n\n      {/* Beach Cleanup Section */}\n      <BeachCleanupSection />'
);

fs.writeFileSync('src/pages/Charity.tsx', finalContent);
console.log('Done!');
