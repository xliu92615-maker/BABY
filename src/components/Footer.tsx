import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail } from 'lucide-react';
import brandLogo from '../assets/images/lu-555.jpg';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    // TODO: 串接 API 
    // fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    
    setStatus('success');
    setEmail('');
    
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <footer className="bg-[#002B5B] text-white pt-20 pb-10 border-t-8 border-[#C5A059] relative overflow-hidden">
      {/* Cute background blobs */}
      <div className="absolute top-0 right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-2xl opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-transparent p-0 border-none shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <img src={brandLogo} alt="樂共學 Logo" className="w-full h-full object-cover rounded-full block" />
              </div>
              <span className="text-3xl font-black tracking-tight text-white drop-shadow-sm">樂共學</span>
            </div>
            <p className="text-blue-100 leading-relaxed text-sm font-medium mb-8">
              為每個孩子打造專屬的國際化學習旅程，啟發潛能，夢想啟航。
            </p>

            {/* 服務時間區塊 */}
            <div className="inline-block w-full max-w-sm mt-2">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-[#ff6600]" size={22} />
                <h4 className="text-white font-black text-lg">服務時間</h4>
              </div>
              <div className="space-y-3 text-sm text-white font-medium">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span>週一至週六</span>
                  <span>10:00～21:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>週日</span>
                  <span>14:00～20:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-xl mb-6 tracking-tight relative inline-block">
              快速連結
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#C5A059] rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/activities" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">主題活動</Link></li>
              <li><Link to="/co-learning" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">親子共學</Link></li>
              <li><Link to="/team" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">創辦人介紹</Link></li>
              <li><Link to="/faq" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">常見問題</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-black text-xl mb-6 tracking-tight relative inline-block">
              訂閱電子報
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#ff6600] rounded-full"></span>
            </h4>
            <p className="text-blue-100 leading-relaxed text-sm font-medium mb-6">
              免費獲取最新親子活動、<br className="hidden lg:block" />
              國際留學、教育資訊與限定優惠。
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-[#6B7280]" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="請輸入您的電子郵件"
                  className="w-full pl-12 pr-[110px] h-[52px] bg-white border border-[#D9D9D9] rounded-[14px] text-[#1F2937] text-base placeholder:text-[#6B7280] placeholder:text-base focus:outline-none focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/30 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-[#ff6600] hover:bg-[#e55c00] text-white text-sm font-bold rounded-[10px] transition-colors shadow-sm whitespace-nowrap"
                >
                  立即訂閱
                </button>
              </div>
              
              <div className="min-h-[48px] pt-1">
                {status === 'error' && (
                  <p className="text-red-300 text-xs font-bold px-2 animate-in fade-in slide-in-from-top-1">
                    請輸入正確的電子郵件格式。
                  </p>
                )}
                {status === 'success' && (
                  <p className="text-[#00C300] text-xs font-bold px-2 animate-in fade-in slide-in-from-top-1 leading-relaxed">
                    感謝您的訂閱！<br />
                    我們將第一時間提供最新活動與教育資訊。
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/60 text-xs font-bold tracking-wider">
            © {new Date().getFullYear()} 樂共學. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold text-blue-200/60">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">隱私權政策</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">服務條款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
