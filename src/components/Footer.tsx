import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white pt-20 pb-10 border-t-8 border-[#C5A059] relative overflow-hidden">
      {/* Cute background blobs */}
      <div className="absolute top-0 right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-2xl opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-[#002B5B] font-serif text-3xl font-bold">啟</span>
              </div>
              <span className="text-3xl font-black tracking-tight text-white drop-shadow-sm">啟夢教育</span>
            </div>
            <p className="text-blue-100 leading-relaxed text-sm font-medium">
              為每個孩子打造專屬的國際化學習旅程，啟發潛能，夢想啟航。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black text-xl mb-6 tracking-tight relative inline-block">
              快速連結
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#C5A059] rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/activities" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">主題活動</Link></li>
              <li><Link to="/co-learning" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">親子共學</Link></li>
              <li><Link to="/team" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">團隊介紹</Link></li>
              <li><Link to="/faq" className="text-blue-200 hover:text-[#C5A059] hover:translate-x-2 transition-all inline-block">常見問題</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/60 text-xs font-bold tracking-wider">
            © {new Date().getFullYear()} 啟夢教育 DreamEdu. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold text-blue-200/60">
            <Link to="#" className="hover:text-white transition-colors">隱私權政策</Link>
            <Link to="#" className="hover:text-white transition-colors">服務條款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
