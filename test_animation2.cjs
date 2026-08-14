const fs = require('fs');

let code = fs.readFileSync('src/pages/StudyAbroad.tsx', 'utf8');

code = code.replace(/@keyframes planeFlyMobile1 \{[\s\S]*?\}/, `
        @keyframes planeFlyMobile1 {
          0% { transform: translate(-10vw, 80vh) rotate(-15deg) scale(1); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(110vw, 10vh) rotate(-15deg) scale(1.5); opacity: 0; }
        }`);

code = code.replace(/@keyframes planeFlyMobile2 \{[\s\S]*?\}/, `
        @keyframes planeFlyMobile2 {
          0% { transform: translate(-5vw, 20vh) rotate(15deg) scale(0.8); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate(110vw, 80vh) rotate(15deg) scale(1.2); opacity: 0; }
        }`);

fs.writeFileSync('src/pages/StudyAbroad.tsx', code);
