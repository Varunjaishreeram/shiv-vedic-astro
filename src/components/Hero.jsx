import React from 'react';
import { Star, ChevronDown } from 'lucide-react';

const Hero = ({ brandName, tagline, scrollToSection }) => {
  return (
    <section className="relative h-[calc(100vh-64px)] flex items-center justify-center text-center px-4 overflow-hidden"> {/* 64px is Navbar height (h-16) */}
      {/* Background Image - Replace with a high-quality, relevant image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531300306977-7a5757395529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }} // Example: night sky
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Darker Overlay */}
      </div>
      
      {/* Animated Stars Background (Optional) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="mb-6 flex justify-center">
            <Star className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Welcome to <span className="text-amber-400 block sm:inline">{brandName}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-xl mx-auto">
          {tagline}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
          >
            Explore Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-transparent hover:bg-purple-700 text-amber-400 font-bold py-3 px-8 rounded-lg border-2 border-amber-400 hover:border-purple-700 text-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Contact Astrologer
          </button>
        </div>
      </div>
       {/* Subtle scroll down indicator */}
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
          className="p-2 rounded-full text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;