import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      question: '啟夢教育的課程適合什麼年齡層的孩子？',
      answer: '我們的課程主要針對 3 歲至 12 歲的孩童設計。針對不同年齡層的心智與體能發展，我們會規劃專屬的分齡課程，確保每個孩子都能在最適合的節奏中學習。'
    },
    {
      question: '什麼是「親子共學」？家長一定要全程參與嗎？',
      answer: '「親子共學」是我們非常重視的核心理念，旨在透過活動加深親子間的連結。我們大部分的週末活動都需要家長陪伴參與，但也有部分平日營隊或進階技能課程是讓孩子獨立參加的。具體規定會在每個活動的詳情頁面中說明。'
    },
    {
      question: '如何報名參加主題活動？',
      answer: '您可以透過點擊網站上方的「LINE 諮詢」按鈕加入我們的官方 LINE 帳號，我們的教育顧問將為您提供最新活動資訊與報名連結，並解答您的任何疑問。'
    },
    {
      question: '請問退費機制是如何規定的？',
      answer: '若因個人因素需取消報名，活動開始前 14 天取消可全額退費（需扣除金流手續費）；活動前 7 天取消退還 50%；活動前 3 天內取消則無法退費。若因天災等不可抗力因素導致活動取消，我們將全額退費。'
    },
    {
      question: '如果孩子在活動中受傷怎麼辦？',
      answer: '安全是我們的首要考量。所有活動我們皆會為學員投保公共意外責任險與旅遊平安險。同時，我們的帶隊老師皆受過基本急救訓練，戶外活動更會配置具備專業野外急救證照的人員。'
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#002B5B] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">常見問題</h1>
          <p className="text-slate-300 font-light">
            為您整理了家長們最常詢問的問題，若找不到您需要的答案，歡迎隨時聯繫我們。
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`font-bold text-lg tracking-tight ${openId === index ? 'text-[#C5A059]' : 'text-[#002B5B]'}`}>
                  {faq.question}
                </span>
                <span className="text-slate-400 shrink-0 ml-4">
                  {openId === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-16 bg-white rounded-[2rem] p-10 md:p-16 text-center border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.03] -translate-y-1/2 translate-x-1/2" />
          <div className="w-20 h-20 bg-[#fdfdfd] rounded-[1rem] flex items-center justify-center mx-auto mb-8 text-[#002B5B] shadow-sm border border-slate-100">
            <MessageCircle size={32} />
          </div>
          <h3 className="text-2xl font-bold text-[#002B5B] mb-4 tracking-tight">還有其他問題嗎？</h3>
          <p className="text-slate-500 mb-10 max-w-md mx-auto text-sm">
            我們的教育顧問團隊隨時準備好為您解答任何關於課程、環境與報名的疑問。
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#002B5B] hover:bg-[#003d82] text-white px-8 py-4 rounded-full font-bold text-sm transition-colors shadow-lg uppercase tracking-wider"
          >
            <MessageCircle size={20} />
            專人 LINE 諮詢
          </a>
        </div>
      </div>
    </div>
  );
}
