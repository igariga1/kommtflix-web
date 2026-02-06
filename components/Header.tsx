
import React, { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  onOpenQuote: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems = [
    { label: 'Services', href: 'services' },
    { label: 'Our Process', href: 'journey' },
    { label: 'Resources', href: 'knowledge' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-81px 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    ['hero', 'services', 'journey', 'about', 'knowledge', 'contact'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    isManualScrolling.current = true;
    setActiveSection(href);

    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);

    setIsMobileMenuOpen(false);
  };

  const openPortalModal = () => setIsPortalModalOpen(true);
  const closePortalModal = () => setIsPortalModalOpen(false);

  const handleRequestAccess = () => {
    closePortalModal();
    setTimeout(() => {
      onOpenQuote();
    }, 150);
  };

  return (
    <>
      <header 
        className={`fixed w-full z-[100] transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_-10px_rgba(0,0,0,0.1)] py-3 border-b border-gray-100' 
            : 'bg-transparent py-7'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center transform group-hover:rotate-[15deg] transition-all duration-500 shadow-xl shadow-red-600/20">
              <span className="text-white font-black text-xl italic tracking-tighter">KF</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              Kommt<span className="text-red-600">Flix</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 ${
                  activeSection === item.href ? 'text-red-600' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-6 right-6 h-0.5 bg-red-600 rounded-full transition-all duration-500 transform origin-left ${
                    activeSection === item.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`} 
                />
              </a>
            ))}
            
            <div className="flex items-center pl-8 space-x-5">
              <button 
                className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-red-600 transition-colors"
                onClick={openPortalModal}
              >
                Portal
              </button>
              <button 
                onClick={onOpenQuote}
                className="bg-gray-950 text-white px-8 py-4 rounded-xl font-black text-[10px] tracking-[0.2em] hover:bg-red-600 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-gray-200"
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-3 text-gray-900 focus:outline-none relative z-[100]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '0', height: '100vh' }}
        >
          <div className="flex flex-col h-full pt-32 px-10 space-y-8">
            {navItems.map((item, idx) => (
              <a 
                key={item.label}
                href={`#${item.href}`}
                className={`text-5xl font-black tracking-tighter transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                } ${activeSection === item.href ? 'text-red-600' : 'text-gray-900'}`}
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-12 border-t border-gray-100 space-y-8">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onOpenQuote(); }}
                className="w-full bg-red-600 text-white py-6 rounded-2xl font-black text-lg shadow-2xl shadow-red-100"
              >
                Contat Us
              </button>
              <div className="flex flex-col items-center space-y-4">
                 <button 
                  onClick={() => { setIsMobileMenuOpen(false); openPortalModal(); }}
                  className="text-gray-400 font-black text-xs uppercase tracking-[0.2em]"
                >
                  Client Portal
                </button>
                <p className="text-[10px] text-gray-300 font-black uppercase tracking-widest">HQ: Düsseldorf, Germany</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PORTAL MODAL */}
      {isPortalModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-gray-950/90 backdrop-blur-2xl animate-fadeIn" 
            onClick={closePortalModal}
          ></div>
          
          <div className="relative w-full max-w-lg bg-gray-900 rounded-[40px] shadow-2xl p-10 md:p-14 text-center border border-gray-800 overflow-hidden animate-fadeInScale">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="px-5 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full">
                  <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em]">Private Beta</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6 leading-tight tracking-tight">
                Integrated Corridor <br />
                <span className="text-red-600 italic">Dashboard</span>
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xs mx-auto font-medium">
                Our digital infrastructure is currently in exclusive private beta for enterprise partners. Request early access below.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={handleRequestAccess}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-900/40 active:scale-95"
                >
                  Request Early Access
                </button>
                <button 
                  onClick={closePortalModal}
                  className="w-full bg-transparent text-gray-500 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-white transition-all"
                >
                  Back to Hub
                </button>
              </div>
            </div>

            <div className="absolute bottom-6 right-8 text-white/5 font-black text-8xl select-none pointer-events-none italic">
              BETA
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </>
  );
};

export default Header;
