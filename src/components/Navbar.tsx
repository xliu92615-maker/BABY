import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '主題活動', path: '/activities' },
    { name: '親子共學', path: '/co-learning' },
    { name: '團隊介紹', path: '/team' },
    { name: '大手牽小手，愛心齊步走', path: '/charity' },
    { name: '常見問題', path: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b-4 border-slate-50',
          scrolled ? 'shadow-md py-3 px-4 sm:px-6 lg:px-12' : 'py-6 px-4 sm:px-6 lg:px-12'
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 bg-[#002B5B] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative">
              <span className="text-white font-serif text-3xl font-bold">啟</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#C5A059] rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform delay-100" />
            </div>
            <span className="text-2xl font-black tracking-tight text-[#002B5B] hidden sm:block drop-shadow-sm">啟夢教育 <span className="text-[#C5A059] font-black">DreamEdu</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm font-black transition-all px-5 py-2.5 rounded-full',
                    isActive ? 'bg-[#C5A059]/10 text-[#C5A059] shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-[#002B5B] hover:-translate-y-1 hover:shadow-sm'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="#"
              className="bg-[#002B5B] hover:bg-[#C5A059] text-white px-8 py-3 rounded-full text-sm font-black transition-all hover:-translate-y-1 hover:rotate-2 hover:shadow-lg shadow-sm ml-4"
            >
              聯繫我們
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#002B5B]"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#002B5B] rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-2xl font-bold">啟</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setIsOpen(false)} className="text-[#002B5B]">
                  <X size={28} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
              <Link to="/activities" className="flex justify-between items-center py-4 text-[#002B5B] text-lg border-b border-slate-100 font-bold">
                <span>全部活動</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex justify-between items-center py-4 text-[#002B5B] text-lg border-b border-slate-100 font-bold"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C5A059]">➔</span>
                </Link>
              ))}
              
              <div className="mt-8">
                <a
                  href="#"
                  className="w-full bg-[#002B5B] hover:bg-[#C5A059] text-white py-4 rounded-full font-black flex items-center justify-center gap-2 transition-all text-lg shadow-md hover:-translate-y-1"
                >
                  聯繫我們
                </a>
                <p className="text-center text-slate-500 text-xs mt-4">
                  客服時間：每日10:00~21:00（週日休息）
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
