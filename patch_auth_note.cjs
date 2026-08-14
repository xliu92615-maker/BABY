const fs = require('fs');

let code = fs.readFileSync('src/components/StudyAbroadNewGallery.tsx', 'utf8');

// Ensure ShieldCheck is imported from lucide-react
if (!code.includes('ShieldCheck')) {
  code = code.replace("import { ChevronLeft, ChevronRight, X } from 'lucide-react';", "import { ChevronLeft, ChevronRight, X, ShieldCheck } from 'lucide-react';");
}

// Add the auth note right after the description paragraph and before the grid
const targetString = `<p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            從學習到交流，從台灣走向世界，每一次相遇都是成長的重要篇章。
          </p>`;

const replacementString = `<p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            從學習到交流，從台灣走向世界，每一次相遇都是成長的重要篇章。
          </p>
          <div className="mt-8 mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
              <ShieldCheck size={16} className="text-[#002B5B]" />
              <span className="text-sm font-medium text-[#002B5B]">以下照片均已取得家長同意授權發佈至本網站</span>
            </div>
          </div>`;

code = code.replace(targetString, replacementString);

fs.writeFileSync('src/components/StudyAbroadNewGallery.tsx', code);
