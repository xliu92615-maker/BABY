const fs = require('fs');

let code = fs.readFileSync('src/pages/StudyAbroad.tsx', 'utf8');

const importStr = "import StudyAbroadEditorialGallery from '../components/StudyAbroadEditorialGallery';\n";
if (!code.includes('StudyAbroadEditorialGallery')) {
  code = code.replace("import StudyAbroadNewGallery from '../components/StudyAbroadNewGallery';", "import StudyAbroadNewGallery from '../components/StudyAbroadNewGallery';\n" + importStr);
  code = code.replace("<StudyAbroadNewGallery />", "<StudyAbroadNewGallery />\n      <StudyAbroadEditorialGallery />");
  fs.writeFileSync('src/pages/StudyAbroad.tsx', code);
}
