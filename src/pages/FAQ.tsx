import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      question: '01｜國際教育發展團隊 Global Edu主要提供哪些服務？',
      answer: 'A：我們致力於提供多元的親子教育與國際學習體驗，服務內容包含親子活動、主題活動、親子共學、教育資訊分享，以及海外遊學與留學相關規劃，希望陪伴孩子在不同的學習環境中探索興趣、累積經驗，拓展國際視野。'
    },
    {
      question: '02｜活動費用要如何繳交？需要事先匯款嗎？',
      answer: 'A：國際教育發展團隊所有活動費用皆採現場繳費方式，不會要求家長事先匯款，也不會要求轉帳至任何私人帳戶。家長可以安心依照活動現場的繳費流程完成付款。'
    },
    {
      question: '03｜報名活動後，還會有其他額外費用嗎？',
      answer: 'A：各項活動的收費內容會依活動性質有所不同，報名前都會提供相關費用資訊。若有其他必要支出，也會事先向家長說明，讓家長清楚了解整體費用。'
    },
    {
      question: '04｜活動當天如果遇到天候或其他不可抗力因素怎麼辦？',
      answer: 'A：若遇到天候不佳或其他特殊狀況，團隊會依照活動性質與現場情況評估，並透過聯絡管道通知家長後續安排。'
    },
    {
      question: '05｜我們有提供哪些國家的留遊學規劃？',
      answer: 'A：可依照不同國家、教育環境與學習需求進行規劃，常見國家包含美國、英國、加拿大、澳洲、紐西蘭、新加坡、日本及德國等，實際可安排的國家與行程，歡迎進一步諮詢。'
    },
    {
      question: '06｜留學和遊學有什麼不同？',
      answer: 'A：遊學以短期語言學習、文化體驗及生活探索為主；留學則是較長期的海外就學安排。兩者在時間、課程及準備方式上都有差異，可以依照家庭需求選擇。'
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2rem] border-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${openId === index ? 'border-[#C5A059]/30' : 'border-slate-50'}`}
            >
              <button
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`font-black text-base sm:text-lg tracking-tight leading-snug transition-colors ${openId === index ? 'text-[#C5A059]' : 'text-[#002B5B]'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openId === index ? 'bg-amber-50 text-[#C5A059]' : 'bg-slate-50 text-slate-400'}`}>
                  {openId === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-slate-600 text-sm sm:text-[15px] leading-[1.8] border-t-2 border-slate-50 pt-5 sm:pt-6 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still need help */}
        <motion.div 
          whileHover={{ y: -6 }}
          className="mt-16 bg-[#002B5B] rounded-[3rem] p-10 md:p-16 text-center border-8 border-white shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-10 translate-y-1/4 -translate-x-1/4" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-sm group-hover:scale-110 transition-transform">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">還有其他問題嗎？</h3>
            <p className="text-slate-300 mb-10 max-w-md mx-auto text-sm font-medium">
              我們的教育顧問團隊隨時準備好為您解答任何關於課程、環境與報名的疑問。
            </p>
            <a
              href="https://line.me/ti/p/e9xyybD4Fb"
              className="inline-flex items-center gap-3 bg-[#C5A059] hover:bg-[#B8962E] text-white px-10 py-4 rounded-full font-black text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wider"
            >
              <MessageCircle size={20} />
              專人 LINE 諮詢
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
