import React from 'react';
import { Gem, Star as StarIcon } from 'lucide-react'; // Renamed Star to StarIcon to avoid conflict

const Products = ({ products }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Gem className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Authentic Spiritual Products</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Enhance your spiritual journey with our carefully selected and energized items.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-purple-900 bg-opacity-40 rounded-xl shadow-xl overflow-hidden group transform transition-all duration-500 hover:scale-105 border border-purple-700 hover:border-amber-500"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/300x200/334155/9CA3AF?text=Image+Not+Available';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-amber-400">
                  {React.cloneElement(product.icon, { className: "w-7 h-7" })}
                  <h3 className="text-xl font-semibold text-white ml-3">{product.name}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;