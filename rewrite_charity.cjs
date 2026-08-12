const fs = require('fs');
let code = fs.readFileSync('src/pages/Charity.tsx', 'utf8');

// Replace imports
code = code.replace(/import charityImage from '\.\.\/assets\/images\/regenerated_image_1784973601430\.jpg';/, '');
code = code.replace(/import gg01 from '\.\.\/assets\/images\/GG-01\.jpg';\nimport gg02 from '\.\.\/assets\/images\/GG-02\.jpg';\nimport gg03 from '\.\.\/assets\/images\/GG-03\.jpg';\nimport gg04 from '\.\.\/assets\/images\/GG-04\.jpg';\nimport gg05 from '\.\.\/assets\/images\/GG-05\.jpg';\nimport gg07 from '\.\.\/assets\/images\/GG-07\.jpg';\nimport gg08 from '\.\.\/assets\/images\/GG-08\.jpg';\nimport gg09 from '\.\.\/assets\/images\/GG-09\.jpg';/, '');
code = code.replace(/import h01 from '\.\.\/assets\/images\/H-01\.jpg';\nimport h02 from '\.\.\/assets\/images\/H-02\.jpg';\nimport h03 from '\.\.\/assets\/images\/H-03\.jpg';/, '');

// Add new imports
code = code.replace(/import HandInHandWarmthSection from '\.\.\/components\/HandInHandWarmthSection';/, `import HandInHandWarmthSection from '../components/HandInHandWarmthSection';
import ee001 from '../assets/images/EE-001.jpg';
import ee002 from '../assets/images/EE-002.jpg';
import ee003 from '../assets/images/EE-003.jpg';
import ee004 from '../assets/images/EE-004.jpg';
import ee005 from '../assets/images/EE-005.jpg';
import CharityGallery from '../components/CharityGallery';`);

// Remove old galleryImages
code = code.replace(/const galleryImages = \[\s*gg01,\s*gg02,\s*gg03,\s*gg04,\s*gg05,\s*gg07,\s*gg08,\s*gg09\s*\];/g, '');

// Remove old PhotoSlider component
code = code.replace(/function PhotoSlider\(\) \{[\s\S]*?\}\s*export default function Charity/g, 'export default function Charity');

// Replace EE-002 in top section
code = code.replace(/<div className="md:w-1\/2 relative">[\s\S]*?<img src={charityImage} alt="公益活動" className="w-full h-auto object-cover" style={{ aspectRatio: '4\/3' }} \/>[\s\S]*?<\/div>\s*<\/div>/, 
`<div className="w-full md:w-[55%] relative mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[24px] overflow-hidden shadow-xl border-4 border-white group"
            >
              <img src={ee002} alt="公益活動" className="w-full h-auto object-cover" style={{ aspectRatio: '4/3' }} />
              <div className="absolute inset-0 border border-[#C5A059]/30 rounded-[20px] pointer-events-none" />
            </motion.div>
          </div>
        </div>`);

// Change top left column width
code = code.replace(/<div className="md:w-1\/2">/g, '<div className="w-full md:w-[45%]">');

// Modify Hualien section grid layout
code = code.replace(/<div className="lg:col-span-7 space-y-6">/, '<div className="lg:col-span-12 space-y-6 max-w-4xl mx-auto">');
code = code.replace(/{\/\* 3張照片 Grid \*\/}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/motion.div>/, '</div>\n          </div>\n        </motion.div>');

// Use new CharityGallery instead of PhotoSlider
code = code.replace(/<PhotoSlider \/>/g, '<CharityGallery />');

fs.writeFileSync('src/pages/Charity.tsx', code);
