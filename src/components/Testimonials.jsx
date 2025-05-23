import React, { useState, useEffect } from 'react';
import { MessageSquareHeart, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  console.log("Testimonials component rendered with testimonials:", testimonials);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (testimonials.length <= 1) return; // No autoplay for single or no testimonial
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);


  if (!testimonials || testimonials.length === 0) {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-6 text-center">
                <MessageSquareHeart className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Experiences</h2>
                <p className="text-lg text-gray-400">Testimonials coming soon!</p>
            </div>
        </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <MessageSquareHeart className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Words from Our Clients</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear what people are saying about their experiences.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto bg-slate-800 bg-opacity-70 rounded-xl shadow-2xl border border-purple-700 p-8 md:p-12 overflow-hidden">
          <div className="overflow-hidden h-auto min-h-[200px]"> {/* Adjust min-height as needed */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center text-center
                            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-lg md:text-xl text-gray-200 italic mb-6">"{testimonial.quote}"</p>
                <div>
                    <p className="text-amber-400 font-semibold text-md">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 1 && (
            <>
              <button 
                onClick={prevTestimonial}
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;