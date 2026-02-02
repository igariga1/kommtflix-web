
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1800));
      setStatus('success');
      
      // Reset form after success message duration
      setTimeout(() => {
        setStatus('idle');
        setFormState({ name: '', email: '', company: '', message: '' });
      }, 6000);
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('idle');
    }
  };

  return (
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
      <div className="animate-fadeIn">
        <h3 className="text-5xl font-black text-gray-900 mb-8 leading-tight">
          Ready to Scale Your <span className="text-red-600">Global Trade</span>?
        </h3>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Contact our Düsseldorf-based team today. Our procurement experts are standing by to help you optimize your supply chain corridors.
        </p>

        <div className="space-y-8">
          <div className="flex items-start space-x-6 group">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1 uppercase text-[10px] tracking-widest">Global Headquarters</h4>
              <p className="text-gray-500 font-medium">Königsallee 19, 40212 Düsseldorf, Germany</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6 group">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1 uppercase text-[10px] tracking-widest">Direct Line</h4>
              <p className="text-gray-500 font-medium">+49 (0) 1777 480 620 </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 group">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1 uppercase text-[10px] tracking-widest">Email Hub</h4>
              <p className="text-gray-500 font-medium">info@kommtflix.de</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100 relative overflow-hidden transition-all duration-500">
        {status === 'success' ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6 animate-fadeInScale">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-100">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-3xl font-black text-gray-900 leading-tight">Inquiry Received</h4>
            <div className="space-y-2">
              <p className="text-gray-500 font-medium px-4">Our operations desk in <span className="text-red-600">Düsseldorf</span> will contact you within 8 hours.</p>
              <div className="inline-block mt-4 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
                <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Ref: HUB-{Math.floor(Math.random() * 90000) + 10000}</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-900 uppercase tracking-widest px-1">Full Name</label>
                <input 
                  required
                  disabled={status === 'sending'}
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-gray-50 border-transparent border focus:border-red-500 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-500/5 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-900 uppercase tracking-widest px-1">Email</label>
                <input 
                  required
                  disabled={status === 'sending'}
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-gray-50 border-transparent border focus:border-red-500 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-500/5 transition-all outline-none"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-900 uppercase tracking-widest px-1">Company Name</label>
              <input 
                type="text" 
                disabled={status === 'sending'}
                value={formState.company}
                onChange={(e) => setFormState({...formState, company: e.target.value})}
                className="w-full bg-gray-50 border-transparent border focus:border-red-500 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-500/5 transition-all outline-none"
                placeholder="Global Trade Solutions"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-900 uppercase tracking-widest px-1">Your Requirements</label>
              <textarea 
                rows={4}
                required
                disabled={status === 'sending'}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-gray-50 border-transparent border focus:border-red-500 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-500/5 transition-all outline-none resize-none"
                placeholder="Tell us about your sourcing or logistics needs..."
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className={`w-full bg-red-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all transform hover:scale-[1.01] shadow-xl shadow-red-200 flex items-center justify-center space-x-3 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700 active:scale-95'}`}
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <span>CONSULT AN EXPERT</span>
              )}
            </button>
            <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-[0.2em]">
              Encrypted connection to Düsseldorf Operations Hub
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
