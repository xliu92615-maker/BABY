const fs = require('fs');

let code = fs.readFileSync('src/pages/StudyAbroad.tsx', 'utf8');

const imports = `import { motion, useReducedMotion } from 'motion/react';
import { Globe2, Plane, Compass, HeartHandshake } from 'lucide-react';
import StudyAbroadVideoStory from '../components/StudyAbroadVideoStory';
import StudyAbroadNewGallery from '../components/StudyAbroadNewGallery';
import StudyAbroadEditorialGallery from '../components/StudyAbroadEditorialGallery';
`;

// Prepend the imports to the file if they are missing
if (!code.includes('import { Globe2')) {
  code = imports + "\n" + code;
  fs.writeFileSync('src/pages/StudyAbroad.tsx', code);
}
