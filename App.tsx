
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PartnerSlider from './components/PartnerSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CorridorJourney from './components/CorridorJourney';
import KnowledgeHub from './components/KnowledgeHub';
import ImprintModal from './components/ImprintModal';

const App: React.FC = () => {
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
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
  };

  return (
    <div className="min-h-screen bg-white bg-pattern">
      <Header onOpenQuote={handleScrollToContact} />
      <main>
        <div id="hero">
          <Hero onOpenQuote={handleScrollToContact} />
        </div>
        
        <section id="services" className="py-24">
          <Services />
        </section>

        <section id="journey" className="bg-gray-50 border-y border-gray-100">
          <CorridorJourney />
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
                <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                  A Düsseldorf Gateway to <span className="text-red-600">Global Markets</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in the heart of Düsseldorf, KommtFlix was born out of a vision to simplify the complex trade corridors between Europe and Africa. We recognize that for SMEs, global sourcing isn't just about moving goods. It's about trust, compliance, and reliability.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our team combines precision with deep local market expertise to provide end-to-end procurement and logistics solutions that were once only available to large multinationals.
                </p>
                <div className="flex mb-8">
                  <button 
                    onClick={handleScrollToContact}
                    className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] flex items-center group"
                  >
                    Consult an Expert
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Quality & Standard</h4>
                    <p className="text-sm text-gray-500">Rigorous quality control and logistical excellence from our Königsallee hub.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Market & Access</h4>
                    <p className="text-sm text-gray-500">Unparalleled access to emerging markets across the continent.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-xl">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-600 to-gray-900 rounded-[40px] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                  
                  <div className="relative bg-gray-950 rounded-[40px] p-10 shadow-2xl overflow-hidden border border-gray-800">
                    <div className="space-y-2 mb-12">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Operational HQ</p>
                      <h4 className="text-4xl font-black text-white tracking-tight leading-none">Königsallee 19</h4>
                      <h4 className="text-4xl font-black text-white tracking-tight leading-none">40212 Düsseldorf</h4>
                      <p className="text-red-600 text-2xl font-black italic tracking-tighter pt-2 uppercase">Germany</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-12 py-6 border-t border-gray-900">
                      <div>
                        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Region</p>
                        <p className="text-white font-mono text-sm">Stadtmitte, NRW</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Timezone</p>
                        <p className="text-white font-mono text-sm">CET (UTC +1)</p>
                      </div>
                    </div>

                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Königsallee+19+40212+Düsseldorf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn relative w-full bg-red-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-red-700 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-red-900/20 overflow-hidden"
                    >
                      <span className="relative z-10">View on Map</span>
                      <svg className="w-5 h-5 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </a>
                    
                    <div className="absolute -bottom-6 -right-6 text-gray-900 font-black text-8xl pointer-events-none select-none opacity-20 italic">
                      19
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="knowledge">
          <KnowledgeHub />
        </section>

        <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
          <Contact />
        </section>

        <section id="partners" className="py-8 bg-gray-900 border-y border-gray-800">
          <PartnerSlider />
        </section>
      </main>
      <Footer onOpenImprint={() => setIsImprintOpen(true)} />
      <ImprintModal isOpen={isImprintOpen} onClose={() => setIsImprintOpen(false)} />
    </div>
  );
};

export default App;
