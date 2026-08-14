const fs = require('fs');

let code = fs.readFileSync('src/pages/StudyAbroad.tsx', 'utf8');

const regex = /function HeroBackground\(\) \{[\s\S]*?(?=\nexport default function StudyAbroad)/;

const newHeroBackground = `
function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  const particles = [
    { left: '10%', top: '20%', size: 4, color: 'bg-[#C5A059]', dur: 6, delay: 0 },
    { left: '85%', top: '15%', size: 3, color: 'bg-[#93C5FD]', dur: 8, delay: 2, hideMobile: false },
    { left: '45%', top: '70%', size: 5, color: 'bg-[#C5A059]', dur: 7, delay: 1, hideMobile: true },
    { left: '70%', top: '80%', size: 4, color: 'bg-[#93C5FD]', dur: 5, delay: 3, hideMobile: false },
    { left: '20%', top: '60%', size: 3, color: 'bg-[#C5A059]', dur: 9, delay: 4, hideMobile: true },
    { left: '60%', top: '30%', size: 2, color: 'bg-[#93C5FD]', dur: 6, delay: 0, hideMobile: true },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <style>{\`
        @keyframes globeRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes globeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes planeFly {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes dashMove {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes dashMoveReverse {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 100; }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.1; }
          50% { transform: translateY(-20px); opacity: 0.4; }
        }
        
        .animate-globe-container {
          animation: globeFloat 8s ease-in-out infinite;
        }
        .animate-globe-spin {
          animation: globeRotate 24s linear infinite;
        }
        
        .animate-dash-1 {
          animation: dashMove 3s linear infinite;
        }
        .animate-dash-2 {
          animation: dashMoveReverse 4s linear infinite;
        }
        
        .plane-path-1 {
          offset-path: path("M -100,500 Q 500,250 1540,50");
          animation: planeFly 12s linear infinite;
        }
        .plane-path-2 {
          offset-path: path("M -50,150 Q 600,-50 1500,300");
          animation: planeFly 16s linear infinite;
          animation-delay: 4s;
        }
        
        \${shouldReduceMotion ? \`
          .animate-globe-container, .animate-globe-spin, .animate-dash-1, .animate-dash-2, .plane-path-1, .plane-path-2, .animate-particle {
            animation: none !important;
          }
          .plane-path-1, .plane-path-2 {
            display: none !important;
          }
        \` : ''}
      \`}</style>

      {/* Animated Semi-transparent Earth */}
      <div className="absolute -right-24 -bottom-12 md:-right-16 md:top-1/2 md:-translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] opacity-[0.3]">
        <div className="w-full h-full animate-globe-container">
          <div className="w-full h-full animate-globe-spin origin-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
              {/* Outer Thin Rings */}
              <circle cx="50" cy="50" r="49" fill="none" stroke="#C5A059" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.8" />
              <circle cx="50" cy="50" r="47" fill="none" stroke="#93C5FD" strokeWidth="0.2" opacity="0.5" />
              
              {/* Deep Blue Body */}
              <circle cx="50" cy="50" r="45" fill="#001a3d" stroke="#3b82f6" strokeWidth="0.5" opacity="0.9" />
              
              {/* Light Blue-Gray Landmasses */}
              <g fill="#94A3B8" opacity="0.45">
                <path d="M 30,30 Q 40,25 45,35 T 55,30 Q 65,35 60,45 T 75,55 Q 85,60 70,75 T 45,70 Q 25,60 30,45 Z" />
                <path d="M 15,50 Q 25,45 25,55 T 20,65 Q 10,60 15,50 Z" />
                <path d="M 65,20 Q 75,15 80,25 T 70,35 Q 60,30 65,20 Z" />
              </g>
              
              {/* Latitude/Longitude lines */}
              <ellipse cx="50" cy="50" rx="22" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.2" opacity="0.3" />
              <ellipse cx="50" cy="50" rx="45" ry="22" fill="none" stroke="#ffffff" strokeWidth="0.2" opacity="0.3" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="#ffffff" strokeWidth="0.2" opacity="0.3" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="0.2" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Flight Paths and Airplanes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice">
        {/* Plane 1: Bottom left to Top right */}
        <path d="M -100,500 Q 500,250 1540,50" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.25" className="animate-dash-1" />
        <g className="text-[#C5A059] opacity-0 plane-path-1" style={{ offsetRotate: "auto" }}>
          <g transform="translate(-12, -12)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 3.5 3.5C9 19 9.5 21 10 22c1 .5 3 0 4.5-1.5l3.5-3.5 4-6-1.8-.7-.7.9z"/></svg>
          </g>
        </g>

        {/* Plane 2: Top left to Right (Desktop only) */}
        <g className="hidden md:block">
          <path d="M -50,150 Q 600,-50 1500,300" fill="none" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.15" className="animate-dash-2" />
          <g className="text-[#93C5FD] opacity-0 plane-path-2" style={{ offsetRotate: "auto" }}>
            <g transform="translate(-10, -10)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 3.5 3.5C9 19 9.5 21 10 22c1 .5 3 0 4.5-1.5l3.5-3.5 4-6-1.8-.7-.7.9z"/></svg>
            </g>
          </g>
        </g>
      </svg>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className={\`absolute rounded-full animate-particle \${p.color} \${p.hideMobile ? 'hidden md:block' : ''}\`}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animation: \`particleFloat \${p.dur}s ease-in-out infinite \${p.delay}s\`
          }}
        />
      ))}
    </div>
  );
}
`;

code = code.replace(regex, newHeroBackground);

fs.writeFileSync('src/pages/StudyAbroad.tsx', code);
