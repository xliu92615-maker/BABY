const fs = require('fs');

let code = fs.readFileSync('src/pages/StudyAbroad.tsx', 'utf8');

code = code.replace(/@keyframes planeFlyMobile1 \{[\s\S]*?\}/, `
        @keyframes planeFlyMobile1 {
          0% { transform: translate(-10%, 80%) rotate(-15deg) scale(1); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(110%, 10%) rotate(-15deg) scale(1.5); opacity: 0; }
        }`);

code = code.replace(/@keyframes planeFlyMobile2 \{[\s\S]*?\}/, `
        @keyframes planeFlyMobile2 {
          0% { transform: translate(-5%, 20%) rotate(15deg) scale(0.8); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate(110%, 80%) rotate(15deg) scale(1.2); opacity: 0; }
        }`);

// Make the animating wrapper w-full h-full, and the SVG absolute inside it
code = code.replace(/\{(\/\* Plane 1 \*\/)\}\s*<div className="absolute top-0 left-0 w-10 h-10 text-\[#C5A059\] opacity-0 anim-plane-1">/g, 
`{$1}
        <div className="absolute top-0 left-0 w-full h-full opacity-0 anim-plane-1">
          <div className="absolute top-0 left-0 w-10 h-10 text-[#C5A059]">`);
code = code.replace(/<\/svg>\s*<\/div>/g, 
`</svg>
          </div>
        </div>`);

// wait, the regex replacement for the </div> needs to match twice, for plane 1 and plane 2.
// Let's just rewrite the planes section entirely.

const regexPlanes = /\{\/\* Planes animated with CSS Transform \*\/\}[\s\S]*?(?=\{\/\* Floating Particles \*\/)/;

const newPlanes = `
      {/* Planes animated with CSS Transform */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Plane 1 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-0 anim-plane-1">
          <div className="absolute top-0 left-0 w-10 h-10 text-[#C5A059]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 3.5 3.5C9 19 9.5 21 10 22c1 .5 3 0 4.5-1.5l3.5-3.5 4-6-1.8-.7-.7.9z"/></svg>
          </div>
        </div>
        
        {/* Plane 2 (Desktop only) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-0 anim-plane-2 hidden md:block">
          <div className="absolute top-0 left-0 w-8 h-8 text-[#93C5FD]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 3.5 3.5C9 19 9.5 21 10 22c1 .5 3 0 4.5-1.5l3.5-3.5 4-6-1.8-.7-.7.9z"/></svg>
          </div>
        </div>
      </div>

      `;

code = code.replace(regexPlanes, newPlanes);

fs.writeFileSync('src/pages/StudyAbroad.tsx', code);
