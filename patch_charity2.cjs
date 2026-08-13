const fs = require('fs');

let code = fs.readFileSync('src/pages/Charity.tsx', 'utf8');

// Replace ee011 with opo011
code = code.replace("import ee011 from '../assets/images/EE-011.jpg';", "import opo011 from '../assets/images/OPO-011.png';");
code = code.replace(
  "  ee011,",
  "  opo011,"
);

// Add imports for ee001, ee003, ee004, ee005
const importBlock = `import ee001 from '../assets/images/EE-001.jpg';
import ee003 from '../assets/images/EE-003.jpg';
import ee004 from '../assets/images/EE-004.jpg';
import ee005 from '../assets/images/EE-005.jpg';
`;
code = code.replace("import ee002 from '../assets/images/EE-002.jpg';", importBlock + "import ee002 from '../assets/images/EE-002.jpg';");

// Add new component PhotoGridSection
const newSectionCode = `
function CharityPhotoGrid() {
  const photos = [ee001, ee002, ee003, ee004, ee005];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] tracking-tight mb-4">大手牽小手・愛心齊步走</h2>
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
`;

// Insert the component before export default function Charity()
code = code.replace("export default function Charity() {", newSectionCode + "\nexport default function Charity() {");

// Add <CharityPhotoGrid /> after <CharityMaterialSupport />
code = code.replace("{/* New Charity Material Support Section */}\n      <CharityMaterialSupport />", "{/* New Charity Material Support Section */}\n      <CharityMaterialSupport />\n\n      {/* Charity Photo Grid */}\n      <CharityPhotoGrid />");

fs.writeFileSync('src/pages/Charity.tsx', code);
