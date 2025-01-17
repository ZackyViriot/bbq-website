import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import bbq1 from '../../assets/images/bbq1.jpg';
import bbq2 from '../../assets/images/bbq2.jpg';
import bbq3 from '../../assets/images/bbq3.jpg';
import bbq4 from '../../assets/images/bbq4.jpg';
import bbq5 from '../../assets/images/bbq5.jpg';

const Gallery = () => {
  const { isDark } = useTheme();

  const galleryItems = [
    { img: bbq1, title: "Smoked Brisket" },
    { img: bbq2, title: "Fall-off-the-bone Ribs" },
    { img: bbq3, title: "Juicy Turkey Legs" },
    { img: bbq4, title: "Homestyle Sides" },
    { img: bbq5, title: "Food Truck Experience" }
  ];

  return (
    <section id="gallery" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500">
          Our BBQ Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {galleryItems.map(({ img, title }, index) => (
            <div 
              key={index} 
              className="gallery-item group relative overflow-hidden rounded-xl shadow-xl border-2 border-red-500/10 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={img} 
                  alt={title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  onError={(e) => {
                    console.error(`Failed to load image: ${title}`);
                    e.target.src = 'https://placehold.co/600x400/red/white?text=BBQ+Image';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-lg font-bold">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 