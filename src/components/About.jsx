import React from 'react';
import { BookOpen, Sparkles, Gem, HandHeart, ShieldCheck, Palette } from 'lucide-react';

const About = ({ name, aboutData }) => {
  const astrologerImageUrl = "https://placehold.co/400x400/3B0764/E9D8FD?text=Astrologer+Ajay"; 

  const RemedyCard = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-amber-400 bg-opacity-20 text-amber-400 rounded-lg p-3">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              A Legacy of Spiritual Wisdom
            </h2>
            <p className="text-xl text-amber-400">{name}</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center mb-16">
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
              <div className="bg-purple-900 bg-opacity-30 p-6 md:p-8 rounded-xl shadow-2xl border border-purple-700 space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {aboutData.introduction}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {aboutData.journey}
                </p>
                 <p className="text-gray-300 leading-relaxed">
                  {aboutData.experience}
                </p>
                <p className="mt-4 text-md text-amber-300 italic border-l-4 border-amber-400 pl-4">
                  "{aboutData.mission}"
                </p>
              </div>
            </div>
          </div>

          {/* Remedies Section */}
          <div className="mt-16">
             <div className="text-center mb-12">
                <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">My Approach to Holistic Remedies</h3>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Based on 20 years of experience in science, yoga, naturopathy, and jyotish, I've developed simple remedies to bring positivity and happiness to your life.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <RemedyCard icon={<Gem size={24}/>} title="Healing Crystals" description="Harness the vibrational power of energized crystals." />
                <RemedyCard icon={<HandHeart size={24}/>} title="Self-Practice" description="Simple, personal rituals you can perform yourself." />
                <RemedyCard icon={<ShieldCheck size={24}/>} title="Pooja & Worship" description="Guidance on worship performed by learned priests." />
                <RemedyCard icon={<Palette size={24}/>} title="Color Therapy" description="Using colors aligned with your horoscope for balance." />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
