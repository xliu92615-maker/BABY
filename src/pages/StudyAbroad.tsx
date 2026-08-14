import { motion, useReducedMotion } from 'motion/react';
import { Globe2, Plane, Compass, HeartHandshake } from 'lucide-react';
import StudyAbroadVideoStory from '../components/StudyAbroadVideoStory';
import StudyAbroadNewGallery from '../components/StudyAbroadNewGallery';
import StudyAbroadEditorialGallery from '../components/StudyAbroadEditorialGallery';





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
      <style>{`
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
      `}</style>

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
          className={`absolute rounded-full ${p.color} ${p.hideMobile ? 'hidden md:block' : ''}`}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animation: `particleFloatFixed ${p.dur}s ease-in-out infinite ${p.delay}s`
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

export default function StudyAbroad() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 pb-24 md:pt-32 md:pb-0 overflow-hidden min-h-[400px] md:h-[560px] bg-gradient-to-br from-[#063568] via-[#0B4A86] to-[#123F73] flex items-center">
        <HeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#C5A059] font-bold text-sm mb-6 backdrop-blur-sm">
                <Globe2 size={16} />
                <span>國際留遊學</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
                從台灣出發<br />
                <span className="text-[#C5A059]">走向世界</span><br />
                開啟孩子無限可能
              </h1>
              <p className="text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
                教育改變人生，國際視野成就未來
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[80px]" />
      </div>

      <StudyAbroadVideoStory />

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100"
        >
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="text-xl leading-relaxed mb-8 font-medium">
              每個孩子，都擁有屬於自己的夢想。 有人夢想成為醫師、工程師、設計師；有人希望站上世界舞台，探索不同的文化、結交來自世界朋友的各地。
            </p>
            
            <p className="mb-8 leading-relaxed">
              我們相信，教育不只是學習知識，更陪伴孩子找到方向、建立自信，培養迎接世界的能力。
            </p>

            <div className="my-12 p-8 bg-slate-50 rounded-2xl border-l-4 border-[#C5A059]">
              <p className="text-lg font-bold text-[#002B5B] leading-relaxed m-0">
                我們期盼孩子勇敢逐夢，讓教育跨越國界。教育給予孩子的是知識、能力與品格；國際視野帶來的是格局、思考和更多人生的可能，能夠改變現在的知識，而國際視野，將決定孩子未來能站高、走遠，兩者相輔相成，才能培養真正具備世界競爭力的新一代人才。
              </p>
            </div>

            <div className="text-center my-16">
              <div className="inline-block relative">
                <h2 className="text-2xl md:text-3xl font-black text-[#C5A059] relative z-10 px-6 py-2">
                  教育改變人生，國際視野成就未來。
                </h2>
                <div className="absolute inset-0 bg-[#002B5B] rounded-lg -skew-x-12 z-0" />
              </div>
            </div>

            <p className="mb-8 leading-relaxed">
              每一位家長，都希望給孩子最好的未來，而我們始終相信，教育不應該是讓孩子只學會如何考試做題，而是培養他們擁有面對世界的能力、自信與勇氣。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-[#C5A059]/30 transition-colors shadow-sm flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#002B5B]/5 flex items-center justify-center shrink-0">
                  <Plane className="text-[#002B5B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002B5B] mb-2">學會獨立</h3>
                  <p className="text-slate-600">當孩子踏上陌生的土地，他們學會獨立。</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-[#C5A059]/30 transition-colors shadow-sm flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                  <HeartHandshake className="text-[#C5A059]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002B5B] mb-2">尊重與包容</h3>
                  <p className="text-slate-600">當孩子與來自不同國家的朋友交流，他們學會尊重與包容。</p>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-[#C5A059]/30 transition-colors shadow-sm flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="text-[#C5A059]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002B5B] mb-2">建立自信</h3>
                  <p className="text-slate-600">當孩子勇敢開口溝通，他們建立了自信。</p>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-[#C5A059]/30 transition-colors shadow-sm flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#002B5B]/5 flex items-center justify-center shrink-0">
                  <Compass className="text-[#002B5B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002B5B] mb-2">思考未來</h3>
                  <p className="text-slate-600">當孩子親眼看見世界，他們開始思考未來，也看見更多人生的可能。</p>
                </div>
              </div>
            </div>

            <p className="text-xl font-bold text-[#002B5B] text-center my-12">
              這些收穫，遠遠超越一張成績單，更是一生都帶得走的能力。
            </p>

            <div className="bg-[#002B5B] rounded-2xl p-8 md:p-10 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] rounded-full blur-[60px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C5A059] rounded-full blur-[60px] opacity-20 transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10">
                <p className="text-lg leading-relaxed">
                  我們希望成為每個家庭最值得信賴的教育夥伴，陪伴孩子一路成長，從探索興趣、規劃學習，走向國際舞台，共同見證每一次蛻變與成長。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <StudyAbroadNewGallery />
      <StudyAbroadEditorialGallery />
    </div>
  );
}

function MessageCircle({ className, size }: { className?: string, size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
