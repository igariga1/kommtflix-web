
import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  // Use React.ReactNode instead of JSX.Element to avoid global namespace issues
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Strategic Sourcing",
    description: "Finding reliable manufacturers across Europe and Africa. We vet every supplier to ensure quality, ethical standards, and SME-friendly minimum orders.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Global Procurement",
    description: "Managing the entire purchasing lifecycle. From negotiation and contracting to quality inspections and secure payment facilitation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Agile Logistics",
    description: "End-to-end freight management via air, sea, and land. We handle complex customs clearing and warehousing at both ends of the corridor.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Risk Management",
    description: "Protecting your supply chain with cargo insurance, vendor audits, and real-time market insights to navigate economic volatility.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
        <div className="max-w-2xl">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Integrated Solutions for Modern Trade
          </h3>
        </div>
        <p className="text-gray-600 max-w-sm">
          We combine local knowledge with global standards to ensure your SME can compete on the international stage.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-red-200 hover:shadow-2xl hover:shadow-red-50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <span className="text-red-600 group-hover:text-white transition-colors">
                {service.icon}
              </span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              {service.description}
            </p>
            <div className="mt-8 pt-6 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#contact" className="text-red-600 font-bold text-sm flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;