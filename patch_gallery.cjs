const fs = require('fs');
let code = fs.readFileSync('src/components/StudyAbroadNewGallery.tsx', 'utf8');

code = code.replace(/import ppp01 from '\.\.\/assets\/images\/ppp-01\.jpg';\n/, '');
code = code.replace(/,\n  ppp01/, '');
code = code.replace(/  ppp01/, '');

fs.writeFileSync('src/components/StudyAbroadNewGallery.tsx', code);
