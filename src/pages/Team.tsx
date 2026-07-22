import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import wangImage from '../assets/images/regenerated_image_1784722538786.jpg';

export default function Team() {
  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#002B5B] py-24 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-2xl opacity-40" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-sm">團隊介紹</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
            匯聚各領域充滿熱情的教育專家，共同為孩子打造卓越的學習體驗。
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border-4 border-slate-50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-[#002B5B] mb-6 tracking-tight drop-shadow-sm">關於啟夢教育｜以教育為根，以愛為名</h2>
            <div className="w-16 h-2 bg-[#C5A059] rounded-full mb-8" />
            
            <p className="text-xl text-[#002B5B] font-bold mb-4">教育，是改變人生的起點；視野，是開創未來的力量。</p>
            <p className="text-[#C5A059] text-2xl font-black mb-8 italic drop-shadow-sm">「我們不只是送孩子出國，而是幫他們找到自己的未來。」</p>
            
            <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg">
              啟夢教育以多元教育為核心，尊重每位學生的個性和志向，提供量身打造的職涯與學業規劃。我們陪伴孩子在探索世界的過程中，認識自我、建立自信，進而找到屬於自己的方向與抱負。
            </p>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">1</div>
                  國際留遊學｜開闊視野，接軌世界
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  國際視野不該是拿來比較的籌碼，而是面對世界變局的強大底氣。讓他們在面對未知與挑戰時不膽怯，擁有自信行走世界的從容、格局與力量。
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">2</div>
                  多元教育適性發展｜因材施教，點燃潛能
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  打破傳統單一的評量框架，我們的教育本質「點燃」而非「填滿」。透過多元適性的引導，協助孩子發掘自身的優勢與熱情，養成適應未來變局的核心素養，讓每個孩子都能在屬於自己的舞台上發光發熱。
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">3</div>
                  深耕公益與社會責任｜傳遞溫暖，播下希望
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  世界需要的不是高高在上的精英，而是懂得愛的個體。啟夢教育持續將資源與關懷延伸至社會需要的角落，讓孩子在汲取知識的同時，也學會關懷生命、回饋社會，讓愛的循環生生不息。
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-[#C5A059]/30 transition-colors">
                <h3 className="text-lg font-black text-[#002B5B] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">4</div>
                  陪伴家庭成長｜讓家庭更有底氣，讓孩子更有方向
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  教育是家庭的共同修行。我們希望賦予家庭正向連結的力量，讓家長成為孩子最堅實的後盾，讓孩子帶著滿滿的愛，勇敢飛向世界。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-slate-50 flex flex-col md:flex-row items-center md:items-start p-8 md:p-12 gap-10"
        >
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shrink-0 relative border-4 border-slate-100 shadow-sm transition-colors group">
            <img 
              src={wangImage} 
              alt="王景富 主任" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#002B5B]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <a href="#" className="w-12 h-12 rounded-full bg-white text-[#002B5B] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white text-[#002B5B] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm hover:-translate-y-1">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-3xl font-black text-[#002B5B] mb-2 tracking-tight">王景富</h3>
            <p className="text-[#C5A059] font-bold mb-6 text-xl">主任</p>
            <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
              <p>
                自2023年創立啟夢教育以來，始終秉持著「教育改變人生，國際視野成就未來」的理念，長期深耕台灣教育領域，致力於打造兼具知識、品格、國際視野與實踐能力的學習環境，陪伴每一位孩子在人生的成長道路上發掘潛能、建立自信，勇敢迎向未來。
              </p>
              <p>
                每位孩子都擁有獨一無二的天賦，而教育的價值，不只是提升學業成績，更重要的是培養良好的品格、溝通能力、創造力、獨立思考能力，以及面對未來世界所需的國際競爭力。
              </p>
              <p>
                王景富主任始終相信，一個人的成長，不只是擁有優異的成績，更重要的是擁有正確的價值觀、國際視野與服務社會的精神。教育的使命，不只是培養會讀書的人，更要培養能夠關懷他人、勇於挑戰、具備世界觀與責任感的人才。
              </p>
              <p>
                未來，啟夢教育將持續整合教育、國際留遊學、跨國文化交流、公益服務及多元學習資源，打造更完整、更具國際競爭力的教育平台，陪伴每一位孩子勇敢追逐夢想，從台灣出發，放眼世界，以知識改變人生，以視野創造未來，以公益回饋社會，成為能夠影響世界的下一代。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Join Us CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#C5A059] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden border-8 border-white shadow-xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4 tracking-tight drop-shadow-sm">加入啟夢團隊</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-bold">
              我們隨時歡迎對教育充滿熱忱、具有創新思維的夥伴加入。如果您也相信教育的力量，請與我們聯繫。
            </p>
            <button className="bg-[#002B5B] text-white px-10 py-4 rounded-full font-black hover:bg-[#003d82] hover:-translate-y-1 transition-all shadow-lg text-sm uppercase tracking-wider">
              查看招募職缺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
