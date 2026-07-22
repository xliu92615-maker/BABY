import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-800 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#002B5B] rounded-lg flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">啟</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#002B5B]">啟夢教育</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              為每個孩子打造專屬的國際化學習旅程，啟發潛能，夢想啟航。
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:border-[#002B5B] hover:text-[#002B5B] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:border-[#002B5B] hover:text-[#002B5B] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#002B5B] font-bold text-lg mb-6">快速連結</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/activities" className="text-slate-500 hover:text-[#C5A059] transition-colors">主題活動</Link></li>
              <li><Link to="/co-learning" className="text-slate-500 hover:text-[#C5A059] transition-colors">親子共學</Link></li>
              <li><Link to="/team" className="text-slate-500 hover:text-[#C5A059] transition-colors">團隊介紹</Link></li>
              <li><Link to="/faq" className="text-slate-500 hover:text-[#C5A059] transition-colors">常見問題</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#002B5B] font-bold text-lg mb-6">聯絡我們</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-500">
                <MapPin className="text-[#C5A059] shrink-0 mt-0.5" size={18} />
                <span>台北市信義區信義路五段7號 (台北101)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone className="text-[#C5A059] shrink-0" size={18} />
                <span>02-2345-6789</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Mail className="text-[#C5A059] shrink-0" size={18} />
                <span>contact@qimeng-edu.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#002B5B] font-bold text-lg mb-6">訂閱電子報</h4>
            <p className="text-slate-500 mb-4 text-sm">獲取最新活動資訊與教育洞察。</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="您的 Email" 
                className="bg-white border border-slate-200 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-[#C5A059] text-slate-800 text-sm shadow-sm"
              />
              <button className="bg-[#002B5B] hover:bg-[#003d82] text-white text-sm font-bold px-4 py-2 rounded-r-lg transition-colors shadow-sm">
                訂閱
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} 啟夢教育 DreamEdu. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link to="#" className="hover:text-[#002B5B] transition-colors">隱私權政策</Link>
            <Link to="#" className="hover:text-[#002B5B] transition-colors">服務條款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
