import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MessageCircle, Volume2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import logo from '../assets/images/regenerated_image_1784724383569.png'; // Will replace with actual logo or text

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '主題活動', path: '/activities' },
    { name: '親子共學', path: '/co-learning' },
    { name: '團隊介紹', path: '/team' },
    { name: '大手牽小手・愛心齊步走', path: '/charity' },
    { name: '常見問題', path: '/faq', icon: HelpCircle },
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
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md">
        {/* Yellow Announcement Bar */}
        <div className="bg-[#FFCC00] text-[#000000] py-1.5 px-4 text-sm font-bold flex justify-center items-center gap-2">
          <Volume2 size={16} />
          <span className="bg-[#FF6600] text-white px-2 py-0.5 rounded text-xs">感謝</span>
          <span>王景富主任贊助活動</span>
        </div>

        {/* Main Blue Header */}
        <div className="bg-[#0f439c] py-3 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
                <span className="text-[#0f439c] font-black text-xl">啟夢</span>
              </div>
              <span className="text-2xl font-black text-white tracking-widest hidden sm:block">啟夢教育</span>
              <span className="bg-[#FFCC00] text-[#0f439c] text-[10px] font-bold px-2 py-0.5 rounded-full hidden sm:block">啟夢</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-white font-bold text-[15px] flex items-center gap-1.5 transition-colors hover:text-[#FFCC00]',
                      isActive ? 'text-[#FFCC00]' : ''
                    )}
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions Area */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-white hover:text-[#FFCC00] transition-colors">
                <Heart size={24} />
              </button>
              <a
                href="#"
                className="bg-[#00C300] hover:bg-[#00a600] text-white px-5 py-2.5 rounded-full text-[15px] font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle size={20} className="fill-current" />
                加LINE立即報名
                <div className="w-2 h-2 rounded-full bg-[#FFCC00] absolute top-2 right-4 opacity-0"></div> {/* decorative */}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        {/* Bottom decorative line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#FF3300] via-[#FF6600] to-[#FFCC00]"></div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0f439c] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
                  <span className="text-[#0f439c] font-black text-lg">啟夢</span>
                </div>
                <span className="text-xl font-black text-white tracking-widest">啟夢教育</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 py-3 text-white text-lg font-bold border-b border-white/10"
                >
                  {link.icon && <link.icon size={20} />}
                  <span>{link.name}</span>
                </Link>
              ))}
              
              <div className="mt-8 flex flex-col gap-4">
                <button className="flex items-center gap-3 py-3 text-white text-lg font-bold border-b border-white/10">
                  <Heart size={20} />
                  <span>我的收藏</span>
                </button>
                <a
                  href="#"
                  className="w-full bg-[#00C300] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all text-lg shadow-md mt-4"
                >
                  <MessageCircle size={24} className="fill-current" />
                  加LINE立即報名
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}