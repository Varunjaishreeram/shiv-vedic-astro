import React, { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';

const Navbar = ({ brandName, navLinks, activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-60 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div onClick={() => scrollToSection('home')} className="cursor-pointer flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 hover:text-amber-400 flex items-center">
                <Star className="inline w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-400" />
                {brandName}
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105
                              ${activeSection === link.id 
                                ? 'bg-amber-500 text-slate-900 shadow-md' 
                                : 'text-gray-300 hover:bg-purple-700 hover:text-white'
                              }`}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              type="button" 
              className="bg-purple-800 bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white" 
              aria-controls="mobile-menu" 
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsOpen(false); }}
                className={`block px-3 py-2 rounded-md text-base font-medium
                            ${activeSection === link.id 
                              ? 'bg-amber-500 text-slate-900' 
                              : 'text-gray-300 hover:bg-purple-700 hover:text-white'
                            }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;