const fs = require('fs');

let code = fs.readFileSync('src/pages/Team.tsx', 'utf8');

// The file ends with:
//         </motion.div>
//       </div>
//     </div>
//   );
// }

const awardSection = `
      {/* Award Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#002B5B] to-[#001a38] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059] rounded-full blur-[80px] opacity-20 transform -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
            <div className="w-full md:w-[40%] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C5A059]/30 relative group bg-[#001a38]">
              <img src={dd01} alt="Award" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            <div className="flex-1 md:w-[60%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] font-bold text-sm mb-6">
                <Star size={16} fill="currentColor" />
                <span>恭賀</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                創辦人
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-4 leading-snug">
                榮獲第六屆海外留學促談機會推廣<span className="text-[#C5A059]">卓越成就</span>
              </h3>
              
              <p className="text-slate-300 font-medium text-lg mb-6">
                成功協助逾300名學子取得海外留學機會
              </p>
              
              <div className="inline-block border-t border-[#C5A059]/30 pt-4 text-[#C5A059] font-bold tracking-widest text-sm">
                特頒此獎，以資表揚
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
`;

// replace the last two closing divs and return statement
const pos = code.lastIndexOf('    </div>\n  );\n}');
if (pos !== -1) {
    code = code.substring(0, pos) + awardSection;
    fs.writeFileSync('src/pages/Team.tsx', code);
    console.log("Success");
} else {
    console.log("Failed to find end pattern");
}
