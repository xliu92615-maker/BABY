const fs = require('fs');

// Update Team.tsx
let teamCode = fs.readFileSync('src/pages/Team.tsx', 'utf8');
teamCode = teamCode.replace("import wangImage from '../assets/images/WAN-11.jpg';", "import dd01 from '../assets/images/DD-01.jpg';");
teamCode = teamCode.replace(/src=\{wangImage\}/g, "src={dd01}");
teamCode = teamCode.replace(/w-48 md:w-72 aspect-\[2\/3\]/g, "w-full md:w-[400px] aspect-[4/3] md:aspect-[4/3] bg-slate-50");
teamCode = teamCode.replace(/className="w-full h-full object-cover object-\[center_top\] transition-transform duration-700 group-hover:scale-110"/g, 'className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"');
fs.writeFileSync('src/pages/Team.tsx', teamCode);

// Update HomeBrandImage.tsx
let brandCode = fs.readFileSync('src/components/HomeBrandImage.tsx', 'utf8');
brandCode = brandCode.replace("import wangImage from '../assets/images/WAN-11.jpg';", "import dd01 from '../assets/images/DD-01.jpg';");
brandCode = brandCode.replace(/src=\{wangImage\}/g, "src={dd01}");
brandCode = brandCode.replace(/aspect-\[4\/5\]/g, "aspect-[4/3] bg-white");
brandCode = brandCode.replace(/className="w-full h-full object-cover object-\[center_top\] transition-transform duration-700 group-hover:scale-105"/g, 'className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"');
brandCode = brandCode.replace(/md:w-\[42%\]/g, "md:w-[48%]"); // make it slightly wider to accommodate horizontal image
brandCode = brandCode.replace(/md:w-\[58%\]/g, "md:w-[52%]"); // adjust text side accordingly
fs.writeFileSync('src/components/HomeBrandImage.tsx', brandCode);
