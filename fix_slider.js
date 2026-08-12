const fs = require('fs');
let code = fs.readFileSync('src/components/HomeTopSlider.tsx', 'utf8');

code = code.replace(/alt=\\{`首頁輪播圖 `}/, 'alt={`首頁輪播圖 ${currentIndex + 1}`}');
// wait, the original file has: alt={\`首頁輪播圖 \${currentIndex + 1}\`} which became alt={\`首頁輪播圖 \${currentIndex + 1}\`}? Let's check what it currently says.
