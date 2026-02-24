
import React, { useState, useEffect, useRef } from 'react';
import { scrollToElement } from '../utils/scroll';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenPortal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenQuote, onOpenPortal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    scrollToElement(href);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);

    setIsMobileMenuOpen(false);
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
            
            <div className="flex items-center pl-8">
              <button 
                className="px-8 py-3 bg-red-600 text-white rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-gray-900 transition-all shadow-xl shadow-red-900/10 active:scale-95"
                onClick={onOpenPortal}
              >
                Marketplace
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
                onClick={() => { setIsMobileMenuOpen(false); onOpenPortal(); }}
                className="w-full bg-red-600 text-white py-6 rounded-2xl font-black text-lg shadow-2xl shadow-red-100"
              >
                ENTER PORTAL
              </button>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-[10px] text-gray-300 font-black uppercase tracking-widest">HQ: Düsseldorf, Germany</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
