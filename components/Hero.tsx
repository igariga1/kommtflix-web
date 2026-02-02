
import React from 'react';

interface HeroProps {
  onOpenQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-red-50 -skew-x-12 transform translate-x-1/2 -z-10 opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600 rounded-full opacity-5 -z-10"></div>
      
      {/* Animated Path Illustration (Mobile Hidden) */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 hidden xl:block pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-10">
          <circle cx="200" cy="200" r="180" stroke="#dc2626" strokeWidth="1" fill="none" strokeDasharray="10 10" className="animate-spin-slow" />
          <path d="M100,200 Q200,100 300,200 T100,200" stroke="#dc2626" strokeWidth="2" fill="none" className="animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fadeIn">
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[1] tracking-tighter">
              Multi-Continents. <br />
              <span className="text-red-600 italic">One Seamless</span> Corridor.
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
            KommtFlix is the SME gateway for sourcing, procurement, and logistics between Europe and Africa. Bridging markets with quality service and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onOpenQuote}
              className="w-full sm:w-auto sm:min-w-[220px] h-16 bg-red-600 text-white rounded-2xl font-black text-lg hover:bg-red-700 transition-all flex items-center justify-center shadow-2xl shadow-red-200 active:scale-95 hover:-translate-y-1"
            >
              Start Your Journey
            </button>
            <button 
              onClick={scrollToJourney}
              className="w-full sm:w-auto sm:min-w-[220px] h-16 bg-gray-900 text-white border-2 border-transparent rounded-2xl font-black text-lg hover:bg-black transition-all flex items-center justify-center active:scale-95 hover:-translate-y-1 shadow-xl shadow-gray-200"
            >
              Our Process
            </button>
          </div>

          {/* Centered Stats Section */}
          <div className="flex flex-row items-stretch justify-center pt-16 border-t border-gray-50 max-w-2xl mx-auto">
            <div className="flex-1 text-center px-4">
              <p className="text-4xl font-black text-gray-900 tracking-tight">40+</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Target Economies</p>
            </div>
            
            <div className="w-px bg-gray-100 self-center h-12"></div>
            
            <div className="flex-1 text-center px-4 relative">
              <p className="text-4xl font-black text-gray-900 tracking-tight">8h</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Response Time</p>
            </div>
            
            <div className="w-px bg-gray-100 self-center h-12"></div>
            
            <div className="flex-1 text-center px-4">
              <p className="text-4xl font-black text-gray-900 tracking-tight">0%</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Export VAT Policy</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30">
        <div className="w-0.5 h-10 bg-gray-400 rounded-full overflow-hidden">
          <div className="w-full h-1/2 bg-red-600 animate-slide-infinite"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
