import React from 'react';
import { motion } from 'motion/react';

export default function HandInHandWarmthSection() {
  const scrollToGallery = () => {
    const gallery = document.getElementById('photo-slider');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col items-center">
        {/* Full Column */}
        <div className="w-full lg:w-[80%] flex flex-col justify-center text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#FF6600]" />
            <h2 className="text-3xl font-black text-[#002B5B] tracking-tight">
              讓溫暖走進每一個角落
            </h2>
            <div className="w-3 h-3 rounded-full bg-[#FF6600]" />
          </div>
          
          <h3 className="text-xl font-bold text-[#C5A059] mb-8 leading-relaxed">
            讓愛不只停留在今天；<br className="hidden md:block" />讓善意不只感動一個人
          </h3>

          <div className="space-y-5 text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto text-left md:text-center">
            <p>
              我們相信，公益不只是一次性的付出，而是一份願意持續陪伴的承諾。每一箱物資、每一次關懷、每一段同行，都可能成為他人重新出發的力量。
            </p>
            <p>
              透過物資捐贈、社區關懷、弱勢陪伴及教育公益行動，我們希望將實際需要的資源，送到真正需要幫助的人手中，讓善意不只被看見，更能真正發揮作用。
            </p>
            <p>
              當更多人願意伸出手，溫暖就能走得更遠。我們將持續串聯家長、孩子與社會夥伴，讓每一次參與，都成為改變社會的一小步。
            </p>
          </div>

          <div>
            <button 
              onClick={scrollToGallery}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-[#002B5B] rounded-full hover:bg-[#003B7B] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
