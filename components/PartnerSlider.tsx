
import React from 'react';

const partners = [
  { name: 'Siemens', logo: 'SIEMENS' },
  { name: 'Maersk', logo: 'MAERSK' },
  { name: 'DHL', logo: 'DHL GLOBAL' },
  { name: 'Dangote', logo: 'DANGOTE' },
  { name: 'Bosch', logo: 'BOSCH' },
  { name: 'Sunrose logistics', logo: 'Sunrose logistics' },
  /*{ name: 'Standard Bank', logo: 'STANDARD BANK' },*/
  { name: 'Hapag-Lloyd', logo: 'HAPAG-LLOYD' },
  { name: 'Volkswagen', logo: 'VW GROUP' },
  /*{ name: 'Ecobank', logo: 'ECOBANK' } */
  { name: 'Igariga 360', logo: 'Igariga Group'}
];

const PartnerSlider: React.FC = () => {
  // Double the partners array to create seamless loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="overflow-hidden relative flex items-center h-24">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
      
      <div className="animate-marquee whitespace-nowrap">
        {displayPartners.map((partner, index) => (
          <div 
            key={`${partner.name}-${index}`} 
            className="inline-flex items-center justify-center px-12"
          >
            <div className="flex flex-col items-center group">
              <span className="text-2xl font-black text-gray-700 group-hover:text-red-600 transition-colors duration-300 tracking-tighter select-none">
                {partner.logo}
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-red-600 transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSlider;