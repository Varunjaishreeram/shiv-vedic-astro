import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Moon, Star, ScrollText, ShieldCheck, Gem } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Data for the website with the new "About Me" text structure
  const astrologerDetails = {
    name: "Ajay Kothari",
    brandName: "Shiv Vedic Astrology and Palmistry",
    tagline: "Guiding Your Path with Ancient Wisdom",
    about: {
      introduction: "By the grace of the divine, I was fortunate to be born and work on the sacred banks of the Mother Ganga, in the hermitage of sages, Tapovan (Laxman Jhula). From childhood, I received spiritual education under the guidance of my father.",
      journey: "Due to my deep interest in astrology, I acquired knowledge from various institutions and different masters. Being a science student, I have always tried to combine astrology and science to provide simple solutions to the problems of modern lifestyle.",
      experience: "After analyzing more than 5000 horoscopes and palms, I have prepared some simple remedies. By performing them, you can get rid of the problems coming in your life.",
      mission: "My aim is to assist in bringing positivity and happiness into your life."
    },
    services: [
      { id: "vedic-chart", title: "Vedic Astrology Chart", description: "In-depth analysis of your birth chart for insights into life patterns, strengths, and challenges.", icon: <Star /> },
      { id: "palmistry", title: "Palmistry", description: "Discover your destiny and personality traits through the ancient art of palm reading.", icon: <ScrollText /> },
      { id: "rudraksh-guidance", title: "Know Your Rudraksha", description: "Personalized recommendations for Rudraksha beads to enhance well-being and spiritual growth.", icon: <Gem /> },
      { id: "vedic-pooja", title: "Vedic Pooja", description: "Authentic Vedic rituals and poojas performed for peace, prosperity, and problem resolution.", icon: <ShieldCheck /> },
      { id: "planet-remedy", title: "Remedy for All Planets", description: "Effective astrological remedies to mitigate negative planetary influences and enhance positive ones.", icon: <Moon /> },
    ],
    products: [
        { id: "crystals", name: "Authentic Charged Crystals", description: "Harness the healing energies of genuine, astrologically charged crystals.", image: "https://placehold.co/300x200/FFF5E1/8B5CF6?text=Charged+Crystal", icon: <Gem /> },
        { id: "rudraksha-items", name: "Real Authentic Rudraksha", description: "Source powerful and authentic Rudraksha beads for spiritual and material benefits.", image: "https://placehold.co/300x200/FFF5E1/D97706?text=Authentic+Rudraksha", icon: <Star /> }
    ],
    contact: {
      centreName: "Shiv Vedic Astrology Centre",
      address: "Laxman Chowk, P.O. Tapovan, Tehri Garhwal, Rishikesh, P.zip 249192",
      whatsapp: ["+919897537674", "+918171570003"],
      email: "ajaykothari2009@gmail.com"
    },
    testimonials: [
      { id: 1, name: "Priya S.", quote: "Ajay Ji's guidance was incredibly accurate and insightful. I feel much more clarity in my life now.", location: "Delhi" },
      { id: 2, name: "Rajesh K.", quote: "The palmistry session was fascinating! So many things he said resonated deeply. Highly recommended.", location: "Mumbai" },
      { id: 3, name: "Anjali M.", quote: "The Vedic pooja performed brought immense peace to my home. Grateful for his services.", location: "Rishikesh" }
    ]
  };

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About Astrologer' },
    { id: 'services', title: 'Services' },
    { id: 'products', title: 'Products' },
    { id: 'testimonials', title: 'Testimonials' },
    { id: 'contact', title: 'Contact Us' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      setActiveSection(id);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentSection = 'home';
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          currentSection = sections[i].id;
          break;
        }
      }
      if (window.scrollY < window.innerHeight / 3) {
          currentSection = 'home';
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);


  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-gray-200">
      <Navbar 
        brandName={astrologerDetails.brandName} 
        navLinks={navLinks} 
        activeSection={activeSection}
        scrollToSection={scrollToSection} 
      />
      
      <main>
        <div id="home">
          <Hero 
            brandName={astrologerDetails.brandName} 
            tagline={astrologerDetails.tagline}
            scrollToSection={scrollToSection}
          />
        </div>
        <div id="about" className="pt-16">
          <About 
            name={astrologerDetails.name} 
            aboutData={astrologerDetails.about} 
          />
        </div>
        <div id="services" className="pt-16">
          <Services services={astrologerDetails.services} />
        </div>
        <div id="products" className="pt-16">
          <Products products={astrologerDetails.products} />
        </div>
        <div id="testimonials" className="pt-16">
          <Testimonials testimonials={astrologerDetails.testimonials} />
        </div>
        <div id="contact" className="pt-16">
          <Contact contactInfo={astrologerDetails.contact} astrologerName={astrologerDetails.name} />
        </div>
      </main>
      
      <Footer brandName={astrologerDetails.brandName} />
    </div>
  );
};

export default App;
