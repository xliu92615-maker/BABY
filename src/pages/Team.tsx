import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Lin',
      role: '創辦人暨教育總監',
      bio: '擁有美國哥倫比亞大學教育學博士學位，超過 15 年國際教育經驗。堅信教育的本質是點燃孩子內心的火種。',
      image: '/images/placeholder.svg'
    },
    {
      name: 'Michael Chen',
      role: '科學素養主理人',
      bio: '前科技業資深工程師，轉戰教育領域。致力於將複雜的科學概念轉化為孩子能輕易理解的趣味實驗。',
      image: '/images/placeholder.svg'
    },
    {
      name: 'Emily Wang',
      role: '藝術與人文講師',
      bio: '法國巴黎高等美術學院畢業。擅長引導孩子透過多元媒材表達自我，培養對美的感知與欣賞能力。',
      image: '/images/placeholder.svg'
    },
    {
      name: 'David Lee',
      role: '戶外教育專家',
      bio: '擁有專業高山嚮導與野外急救認證。帶領孩子在自然中學習團隊合作與韌性，安全探索戶外世界。',
      image: '/images/placeholder.svg'
    }
  ];

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#002B5B] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">團隊介紹</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            匯聚各領域充滿熱情的教育專家，共同為孩子打造卓越的學習體驗。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-[#002B5B] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-[#002B5B] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#002B5B] mb-1 tracking-tight">{member.name}</h3>
                <p className="text-[#C5A059] font-medium mb-4 text-sm">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#C5A059] rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/placeholder.svg')] opacity-10 object-cover mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">加入啟夢團隊</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-light">
              我們隨時歡迎對教育充滿熱忱、具有創新思維的夥伴加入。如果您也相信教育的力量，請與我們聯繫。
            </p>
            <button className="bg-[#002B5B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#003d82] transition-colors shadow-lg text-sm uppercase tracking-wider">
              查看招募職缺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
