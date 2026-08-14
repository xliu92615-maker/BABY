const fs = require('fs');

let code = fs.readFileSync('src/pages/StudyAbroad.tsx', 'utf8');

const regex = /function HeroBackground\(\) \{[\s\S]*?(?=\nexport default function StudyAbroad)/;

const newHeroBackground = `
function HeroBackground() {
  const particles = [
    { left: '10%', top: '20%', size: 6, color: 'bg-[#C5A059]', dur: 4, delay: 0 },
    { left: '85%', top: '15%', size: 5, color: 'bg-[#93C5FD]', dur: 5, delay: 1, hideMobile: false },
    { left: '45%', top: '70%', size: 8, color: 'bg-[#C5A059]', dur: 6, delay: 0.5, hideMobile: true },
    { left: '70%', top: '80%', size: 6, color: 'bg-[#93C5FD]', dur: 4.5, delay: 1.5, hideMobile: false },
    { left: '20%', top: '60%', size: 5, color: 'bg-[#C5A059]', dur: 5.5, delay: 2, hideMobile: true },
    { left: '60%', top: '30%', size: 4, color: 'bg-[#93C5FD]', dur: 4, delay: 0.2, hideMobile: true },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-transparent">
      <style>{\`
        @keyframes globeRotateFixed {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes globeFloatFixed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes planeFlyMobile1 {
          0% { transform: translate(-10%, 80%) rotate(-15deg) scale(1); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(110%, 10%) rotate(-15deg) scale(1.5); opacity: 0; }
        }
        
        @keyframes planeFlyMobile2 {
          0% { transform: translate(-5%, 20%) rotate(15deg) scale(0.8); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate(110%, 80%) rotate(15deg) scale(1.2); opacity: 0; }
        }

        @keyframes dashMoveFixed {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes particleFloatFixed {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.7; }
        }
        
        .anim-globe-float {
          animation: globeFloatFixed 6s ease-in-out infinite;
        }
        .anim-globe-spin {
          animation: globeRotateFixed 20s linear infinite;
        }
        
        .anim-plane-1 {
          animation: planeFlyMobile1 10s linear infinite;
        }
        
        .anim-plane-2 {
          animation: planeFlyMobile2 14s linear infinite;
          animation-delay: 2s;
        }
        
        .anim-dash {
          animation: dashMoveFixed 4s linear infinite;
        }
      \`}</style>

      {/* Flight Paths Background SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1440 560" preserveAspectRatio="none">
        {/* Arc 1 */}
        <path d="M -100,500 Q 500,250 1540,50" fill="none" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 8" className="anim-dash" />
        {/* Arc 2 */}
        <path d="M -50,150 Q 600,-50 1500,400" fill="none" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="5 10" className="anim-dash hidden md:block" />
      </svg>

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

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className={\`absolute rounded-full \${p.color} \${p.hideMobile ? 'hidden md:block' : ''}\`}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animation: \`particleFloatFixed \${p.dur}s ease-in-out infinite \${p.delay}s\`
          }}
        />
      ))}

      {/* Animated Earth */}
      <div className="absolute -right-24 -bottom-12 md:-right-16 md:top-1/2 md:-translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] opacity-40">
        <div className="w-full h-full anim-globe-float">
          <div className="w-full h-full anim-globe-spin origin-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
              <circle cx="50" cy="50" r="49" fill="none" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="2 3" opacity="1" />
              <circle cx="50" cy="50" r="47" fill="none" stroke="#93C5FD" strokeWidth="0.3" opacity="0.7" />
              <circle cx="50" cy="50" r="45" fill="#001a3d" stroke="#3b82f6" strokeWidth="0.8" opacity="0.95" />
              <g fill="#94A3B8" opacity="0.6">
                <path d="M 30,30 Q 40,25 45,35 T 55,30 Q 65,35 60,45 T 75,55 Q 85,60 70,75 T 45,70 Q 25,60 30,45 Z" />
                <path d="M 15,50 Q 25,45 25,55 T 20,65 Q 10,60 15,50 Z" />
                <path d="M 65,20 Q 75,15 80,25 T 70,35 Q 60,30 65,20 Z" />
              </g>
              <ellipse cx="50" cy="50" rx="22" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.5" />
              <ellipse cx="50" cy="50" rx="45" ry="22" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.5" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="#ffffff" strokeWidth="0.3" opacity="0.5" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="0.3" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

code = code.replace(regex, newHeroBackground);

fs.writeFileSync('src/pages/StudyAbroad.tsx', code);
