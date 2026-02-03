
import React from 'react';

interface FooterProps {
  onOpenImprint?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenImprint }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
  };

  return (
    <footer className="bg-gray-950 text-white pt-12 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-8 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className="flex items-center space-x-2.5 mb-5 group">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-xs italic tracking-tighter">KF</span>
              </div>
              <span className="text-xl font-black tracking-tighter">
                Kommt<span className="text-red-600">Flix</span>
              </span>
            </a>
            <p className="text-gray-500 text-[11px] leading-relaxed mb-6 max-w-xs font-medium uppercase tracking-wider">
              Sourcing excellence and logistics precision bridging Europe and Africa. Operating from our Düsseldorf corridor hub.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com/company/kommtflix" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-gray-400 hover:text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/491777480620?text=Hello%20KommtFlix%2C%20I%20am%20interested%20in%20your%20sourcing%20and%20logistics%20services." 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-gray-400 hover:text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.917-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-red-600 mb-5">Solutions</h4>
            <ul className="space-y-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.1em]">
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="hover:text-white transition-colors">Sourcing</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="hover:text-white transition-colors">Procurement</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="hover:text-white transition-colors">Logistics</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="hover:text-white transition-colors">Verification</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-red-600 mb-5">Company</h4>
            <ul className="space-y-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.1em]">
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-white transition-colors">About</a></li>
              <li><a href="#journey" onClick={(e) => handleSmoothScroll(e, 'journey')} className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#knowledge" onClick={(e) => handleSmoothScroll(e, 'knowledge')} className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-white transition-colors">Expert Desk</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-red-600 mb-5">Connect</h4>
            <div className="space-y-3 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
              <p className="leading-tight">Königsallee 19, 40212<br/>Düsseldorf, Germany</p>
              <p className="text-white">+49 (0) 1777 4806 20</p>
              <p className="text-red-600 italic lowercase tracking-tight">info@kommtflix.de</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.3em] font-black text-gray-600">
          <p>© 2025 KommtFlix UG (Haftungsbeschränkt)</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={(e) => { e.preventDefault(); onOpenImprint?.(); }}
              className="hover:text-red-600 transition-colors uppercase"
            >
              Imprint
            </button>
            <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
