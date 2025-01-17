import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Reviews = () => {
  const { isDark } = useTheme();

  const reviews = [
    {
      text: "Best BBQ in town! The brisket is perfectly smoked and tender. Will definitely be coming back!",
      author: "John D.",
      rating: 5,
      location: "Dallas"
    },
    {
      text: "Those ribs are fall-off-the-bone perfect! The sauce is amazing and the sides are fantastic!",
      author: "Sarah M.",
      rating: 5,
      location: "Fort Worth"
    },
    {
      text: "Great food truck, even better BBQ! The pulled pork sandwich was incredible!",
      author: "Mike R.",
      rating: 5,
      location: "Arlington"
    }
  ];

  return (
    <section id="reviews" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className={`review-card ${isDark ? 'bg-gray-800/80' : 'bg-white'} p-6 rounded-xl shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-red-500/10 border border-red-500/20`}
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-4 italic">{review.text}</p>
              <div className="flex justify-between items-center text-sm opacity-75">
                <span>{review.author}</span>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 