import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'; // MessageCircle for WhatsApp

const Contact = ({ contactInfo, astrologerName }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Phone className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Reach out to {astrologerName} for consultations and inquiries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Details Column */}
          <div className="space-y-8">
            <div className="bg-purple-900 bg-opacity-30 p-6 rounded-lg shadow-lg border border-purple-700 hover:border-amber-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-amber-400 mb-3 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-amber-400" />
                Visit Us
              </h3>
              <p className="text-gray-300">{contactInfo.centreName}</p>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>

            <div className="bg-purple-900 bg-opacity-30 p-6 rounded-lg shadow-lg border border-purple-700 hover:border-amber-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-amber-400 mb-3 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-amber-400" />
                WhatsApp
              </h3>
              {contactInfo.whatsapp.map((num, index) => (
                <a 
                  key={index}
                  href={`https://wa.me/${num.replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-amber-300 transition-colors duration-300"
                >
                  {num}
                </a>
              ))}
            </div>

            <div className="bg-purple-900 bg-opacity-30 p-6 rounded-lg shadow-lg border border-purple-700 hover:border-amber-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-amber-400 mb-3 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-amber-400" />
                Email Us
              </h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-300 hover:text-amber-300 transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Placeholder for Contact Form or Map */}
          <div className="bg-purple-900 bg-opacity-30 p-6 md:p-8 rounded-lg shadow-xl border border-purple-700">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Send a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm text-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email-form" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" name="email-form" id="email-form" autoComplete="email" className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm text-white" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm text-white" placeholder="Your query or message..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-amber-500 transition duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center">This is a visual placeholder. Form submission is not yet functional.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;