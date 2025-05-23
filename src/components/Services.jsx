import React from 'react';
import { Star } from 'lucide-react'; // Default icon

const Services = ({ services }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          {/* Using a generic icon here, you can use a more specific one if desired */}
          <Star className="w-16 h-16 text-amber-400 mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Astrological Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover clarity and guidance through our range of specialized Vedic astrology services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-800 bg-opacity-70 p-6 rounded-xl shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 border border-purple-700 hover:border-amber-500 flex flex-col items-center text-center"
            >
              <div className="flex-shrink-0 mb-5 text-amber-500 transition-transform duration-300 group-hover:scale-110">
                {React.cloneElement(service.icon, { className: "w-12 h-12 sm:w-14 sm:h-14" })}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;