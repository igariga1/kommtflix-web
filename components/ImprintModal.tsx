
import React from 'react';

interface ImprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImprintModal: React.FC<ImprintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-gray-950/90 backdrop-blur-xl animate-fadeIn" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-fadeInScale border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center px-10 py-8 border-b border-gray-50 bg-gray-50/50">
          <div>
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Imprint</h3>
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-1">Legal Information (Impressum)</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-10 py-10 space-y-10 overflow-y-auto max-h-[70vh] custom-scrollbar">
          {/* Section 1: Company Details */}
          <section>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 border-b border-gray-100 pb-2">Company Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Entity Name</p>
                <p className="text-sm font-black text-gray-900 leading-relaxed">KommtFlix UG (haftungsbeschränkt)</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Headquarters</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">Königsallee 19<br/>40212 Düsseldorf, Germany</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Represented by</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">Managing Director: Ejike Ayogu</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Contact</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  +49 (0) 177 748 06 20<br/>
                  legal@kommtflix.de
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Registration */}
          <section>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 border-b border-gray-100 pb-2">Commercial Register</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Registration Court</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">Amtsgericht Düsseldorf</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Register Number</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed"> HRB 111876 </p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">VAT ID Number</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed"> DE 00 </p>
              </div>
            </div>
          </section>

          {/* Section 3: Dispute Resolution */}
          <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-3">Consumer Dispute Resolution</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              The European Commission provides a platform for online dispute resolution (OS): 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold ml-1 hover:underline">ec.europa.eu/consumers/odr</a>. 
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-10 py-6 border-t border-gray-50 flex justify-center">
          <button 
            onClick={onClose}
            className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors"
          >
            Close Legal Notice
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.98) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ImprintModal;
