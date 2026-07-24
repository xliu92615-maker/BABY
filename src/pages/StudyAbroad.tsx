import { motion } from 'motion/react';
import { Globe2, Plane, Compass, HeartHandshake } from 'lucide-react';
import heroImage from '../assets/images/study_abroad_hero_1784862121586.jpg';

export default function StudyAbroad() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="從台灣出發，走向世界" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B]/90 via-[#002B5B]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
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
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#C5A059]/20 rounded-full blur-3xl" />
      </div>

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
              啟夢教育相信，教育不只是學習知識，更陪伴孩子找到方向、建立自信，培養迎接世界的能力。
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
                  啟夢教育希望成為每個家庭最值得信賴的教育夥伴，陪伴孩子一路成長，從探索興趣、規劃學習，走向國際舞台，共同見證每一次蛻變與成長。
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
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
