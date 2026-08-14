import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAFAFA]">
      <Navbar />
      <main className="flex-grow pt-[calc(var(--announcement-height)+var(--mobile-header-height)+env(safe-area-inset-top,0px))] md:pt-[calc(var(--announcement-height)+var(--desktop-header-height)+env(safe-area-inset-top,0px))]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
