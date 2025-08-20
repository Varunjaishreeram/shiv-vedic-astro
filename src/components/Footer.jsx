import React from 'react';
import { Star } from 'lucide-react';

const Footer = ({ brandName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-purple-800 py-8 text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-4">
            <Star className="w-8 h-8 text-amber-400 mb-2" />
            <p className="text-lg font-semibold text-white">{brandName}</p>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {currentYear} {brandName}. All Rights Reserved.
        </p>
        
        {/* You can add social media icons or other links here if needed */}
        {/* Example: 
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-amber-400"><Facebook size={20}/></a>
          <a href="#" className="text-gray-400 hover:text-amber-400"><Instagram size={20}/></a>
        </div> 
        */}
      </div>
    </footer>
  );
};

export default Footer;