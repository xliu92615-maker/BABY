const fs = require('fs');

let code = fs.readFileSync('src/pages/StudyAbroad.tsx', 'utf8');

// Ensure useReducedMotion is imported
if (!code.includes('useReducedMotion')) {
  code = code.replace("import { motion } from 'motion/react';", "import { motion, useReducedMotion } from 'motion/react';");
}

// Ensure Star is imported if needed, we'll just use simple divs for particles

const newHeroBackground = `
function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  const particles = [
    { left: '10%', top: '20%', size: 4, color: 'bg-[#C5A059]', dur: 6 },
    { left: '85%', top: '15%', size: 3, color: 'bg-[#93C5FD]', dur: 8, hideMobile: false },
    { left: '45%', top: '70%', size: 5, color: 'bg-[#C5A059]', dur: 7, hideMobile: true },
    { left: '70%', top: '80%', size: 4, color: 'bg-[#93C5FD]', dur: 5, hideMobile: false },
    { left: '20%', top: '60%', size: 3, color: 'bg-[#C5A059]', dur: 9, hideMobile: true },
    { left: '60%', top: '30%', size: 2, color: 'bg-[#93C5FD]', dur: 6, hideMobile: true },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated Semi-transparent Earth */}
      <motion.div 
        className="absolute -right-24 -bottom-12 md:-right-16 md:top-1/2 md:-translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] opacity-[0.25]"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
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
      </motion.div>

      {/* Flight Paths and Airplanes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice">
        {/* Plane 1: Bottom left to Top right */}
        <path id="flight-arc-1" d="M -100,500 Q 500,250 1540,50" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.25" />
        {!shouldReduceMotion && (
          <g className="text-[#C5A059] opacity-[0.3]">
            <g transform="translate(-12, -12)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 3.5 3.5C9 19 9.5 21 10 22c1 .5 3 0 4.5-1.5l3.5-3.5 4-6-1.8-.7-.7.9z"/></svg>
            </g>
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flight-arc-1" />
            </animateMotion>
          </g>
        )}

        {/* Plane 2: Top left to Right (Desktop only) */}
        <g className="hidden md:block">
          <path id="flight-arc-2" d="M -50,150 Q 600,-50 1500,300" fill="none" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.15" />
          {!shouldReduceMotion && (
            <g className="text-[#93C5FD] opacity-[0.25]">
              <g transform="translate(-10, -10)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 3.5 3.5C9 19 9.5 21 10 22c1 .5 3 0 4.5-1.5l3.5-3.5 4-6-1.8-.7-.7.9z"/></svg>
              </g>
              <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" begin="5s">
                <mpath href="#flight-arc-2" />
              </animateMotion>
            </g>
          )}
        </g>
      </svg>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={\`absolute rounded-full \${p.color} \${p.hideMobile ? 'hidden md:block' : ''}\`}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
          }}
          initial={{ opacity: 0.1, y: 0 }}
          animate={shouldReduceMotion ? { opacity: 0.3 } : {
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
`;

// Now let's replace the Abstract Background Decorations in StudyAbroad.tsx
// It spans from {/* Abstract Background Decorations */} to </div> right before <div className="relative z-10 max-w-7xl

const regex = /\{\/\* Abstract Background Decorations \*\/\}[\s\S]*?(?=<div className="relative z-10 max-w-7xl)/;
code = code.replace(regex, `<HeroBackground />\n        `);

// Make sure to add HeroBackground function outside the main component, above it.
code = newHeroBackground + "\n" + code;

fs.writeFileSync('src/pages/StudyAbroad.tsx', code);
