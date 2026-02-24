
import React from 'react';

const steps = [
  {
    title: "Strategic Sourcing",
    description: "We identify and vet manufacturers and suppliers that meet your specific requirements and quality standards.",
    icon: "🔍"
  },
  {
    title: "Quality Verification",
    description: "Goods are consolidated in our hub. We perform physical inspections and verify documentation before the export process begins.",
    icon: "✅"
  },
  {
    title: "Customs & Freight",
    description: "Automated EAD/MRN generation for 0% Export VAT and booking on the fastest air or sea route to your destination.",
    icon: "🚢"
  },
  {
    title: "Local Clearing",
    description: "Our local logistics partners manage 'Last Mile' customs clearing, duties payment, and final delivery to your doorstep.",
    icon: "📦"
  }
];

const CorridorJourney: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h3 className="text-5xl font-black text-gray-900 mb-6">How We Bridge <span className="text-red-600 italic">Continents</span></h3>
        <p className="text-gray-600 text-lg">A transparent end-to-end view of your supply chain journey from our hub to your door.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
        
        <div className="grid lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:border-red-100 transition-all duration-500 hover:-translate-y-2 relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-2xl mb-8 mx-auto group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="mb-4">
                  <h4 className="text-xl font-black text-gray-900 mt-1">{step.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.description}</p>
                
                <div className="absolute -bottom-4 -right-4 text-gray-100 font-black text-6xl select-none group-hover:text-red-50 transition-colors -z-10">
                  0{idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorridorJourney;
