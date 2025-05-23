import React from 'react';
import { Sun } from 'lucide-react'; // Or any other relevant icon

const About = ({ name, aboutText }) => {
  // Placeholder for an image of the astrologer
  const astrologerImageUrl = "https://placehold.co/400x400/3B0764/E9D8FD?text=Astrologer+Ajay"; 

  return (
    <section className="py-16 md:py-24 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Sun className="w-16 h-16 text-amber-400 mx-auto mb-6 animate-spin-slow" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Meet Your Astrologer
            </h2>
            <p className="text-xl text-amber-400">{name}</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
                <div className="relative rounded-lg overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-amber-400 via-purple-500 to-pink-500">
                    <img 
                        src={astrologerImageUrl} 
                        alt={name} 
                        className="w-full h-auto object-cover rounded-md" 
                    />
                    <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
                </div>
            </div>
            <div className="md:col-span-3">
              <div className="bg-purple-900 bg-opacity-30 p-6 md:p-8 rounded-xl shadow-2xl border border-purple-700">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                  {aboutText}
                </p>
                <p className="mt-6 text-md text-amber-300 italic">
                  "With 25 years of dedicated practice, I offer insights to illuminate your journey."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;