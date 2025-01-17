import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import Gallery from '../sections/Gallery';
import Reviews from '../sections/Reviews';
import bbq8 from '../../assets/images/bbq8.jpeg';

gsap.registerPlugin(ScrollTrigger);

const MenuItem = ({ title, price }) => {
  const { isDark } = useTheme();
  return (
    <div className={`flex justify-between items-center py-2 border-b ${isDark ? 'border-red-500/20' : 'border-red-300/30'}`}>
      <span className="font-serif text-lg">{title}</span>
      <span className="font-bold text-red-500">${price}</span>
    </div>
  );
};

// SVG Food Truck Component
const FoodTruck = () => {
  const { isDark } = useTheme();
  return (
    <div className="food-truck relative">
      <div className="truck-container">
        <svg width="200" height="120" viewBox="0 0 200 120" className={`fill-current ${isDark ? 'text-red-500' : 'text-red-600'}`}>
          {/* Main body */}
          <rect x="40" y="30" width="140" height="70" rx="10" className="truck-body" />
          <rect x="10" y="60" width="30" height="40" className="truck-cabin" />
          {/* Wheels with rims */}
          <g className="wheel back-wheel">
            <circle cx="50" cy="100" r="15" className={`${isDark ? 'text-gray-800' : 'text-gray-700'}`} />
            <circle cx="50" cy="100" r="7" fill={isDark ? 'white' : '#f8fafc'} />
            <line x1="50" y1="93" x2="50" y2="107" stroke={isDark ? 'white' : '#f8fafc'} strokeWidth="2" />
            <line x1="43" y1="100" x2="57" y2="100" stroke={isDark ? 'white' : '#f8fafc'} strokeWidth="2" />
          </g>
          <g className="wheel front-wheel">
            <circle cx="150" cy="100" r="15" className={`${isDark ? 'text-gray-800' : 'text-gray-700'}`} />
            <circle cx="150" cy="100" r="7" fill={isDark ? 'white' : '#f8fafc'} />
            <line x1="150" y1="93" x2="150" y2="107" stroke={isDark ? 'white' : '#f8fafc'} strokeWidth="2" />
            <line x1="143" y1="100" x2="157" y2="100" stroke={isDark ? 'white' : '#f8fafc'} strokeWidth="2" />
          </g>
          {/* Windows and details */}
          <rect x="120" y="40" width="40" height="30" fill={isDark ? 'white' : '#f8fafc'} className="window" />
          <text x="130" y="60" className="text-sm font-bold">BBQ</text>
          <rect x="50" y="40" width="20" height="20" fill={isDark ? 'white' : '#f8fafc'} rx="2" className="window" />
          <rect x="80" y="40" width="20" height="20" fill={isDark ? 'white' : '#f8fafc'} rx="2" className="window" />
        </svg>
      </div>
    </div>
  );
};

const CalendarDay = ({ day, location, time, isToday, isClosed }) => {
  const { isDark } = useTheme();
  
  return (
    <div 
      className={`
        ${isDark ? 'bg-gray-800/80' : 'bg-white'} 
        ${isToday ? 'ring-2 ring-red-500' : ''}
        ${isClosed ? 'opacity-50' : ''}
        p-4 rounded-lg shadow-md border border-red-500/10 
        hover:border-red-500/30 transition-all duration-300
        flex flex-col h-full
      `}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-red-500">{day}</h3>
        {isToday && (
          <span className="text-xs px-2 py-1 bg-red-500 text-white rounded-full">Today</span>
        )}
      </div>
      {!isClosed ? (
        <>
          <div className="flex-grow">
            <p className="font-medium text-base mb-2">{location}</p>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>{time}</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-red-500/10">
            <a 
              href={`https://maps.google.com/maps?q=${encodeURIComponent(location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-500 hover:text-red-600 flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View on Maps
            </a>
          </div>
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-center italic opacity-75">Closed</p>
        </div>
      )}
    </div>
  );
};

const BookingForm = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent`}
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Event Type</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent`}
            required
          >
            <option value="">Select an event type</option>
            <option value="private">Private Party</option>
            <option value="corporate">Corporate Event</option>
            <option value="wedding">Wedding</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent`}
            required
          ></textarea>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Submit Booking Request
        </button>
      </div>
    </form>
  );
};

const Home = () => {
  const { isDark } = useTheme();
  const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.

  const scheduleData = [
    {
      day: "Monday",
      isClosed: true
    },
    {
      day: "Tuesday",
      location: "Klyde Warren Park",
      time: "11:00 AM - 3:00 PM",
      coordinates: "32.7894, -96.8016"
    },
    {
      day: "Wednesday",
      location: "Legacy Food Hall",
      time: "4:00 PM - 9:00 PM",
      coordinates: "33.0774, -96.8223"
    },
    {
      day: "Thursday",
      location: "Dallas Farmers Market",
      time: "11:00 AM - 7:00 PM",
      coordinates: "32.7867, -96.7970"
    },
    {
      day: "Friday",
      location: "Deep Ellum",
      time: "5:00 PM - 10:00 PM",
      coordinates: "32.7843, -96.7840"
    },
    {
      day: "Saturday",
      location: "Fort Worth Stockyards",
      time: "11:00 AM - 8:00 PM",
      coordinates: "32.7886, -97.3462"
    },
    {
      day: "Sunday",
      location: "Sundance Square",
      time: "12:00 PM - 6:00 PM",
      coordinates: "32.7555, -97.3308"
    }
  ];

  useEffect(() => {
    // Set up continuous food truck animation
    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { duration: 8, ease: "none" }
    });

    // Initial position
    gsap.set('.food-truck', { x: -200 });

    // Wheel rotation animation
    const wheelRotation = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1, ease: "none" }
    });
    
    wheelRotation
      .to('.wheel', {
        rotation: 360,
        transformOrigin: "center center",
        duration: 1.5,
        ease: "none"
      });

    // Create the left to right animation with bouncing
    timeline
      .to('.food-truck', {
        x: Math.min(window.innerWidth - 250, window.innerWidth * 0.8),
        duration: 8,
        ease: "none",
        onUpdate: function() {
          const progress = this.progress();
          const bounce = Math.sin(progress * 15) * 2;
          gsap.set('.truck-container', { y: bounce });
        }
      })
      .set('.food-truck', { x: -200 });

    // Cleanup function
    return () => {
      timeline.kill();
      wheelRotation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const menuItems = {
    meats: [
      { title: "Brisket", price: "20" },
      { title: "Ribs", price: "20" },
      { title: "Turkey Legs", price: "13" }
    ],
    sides: [
      { title: "Mac & Cheese", price: "3" },
      { title: "Baked Beans", price: "3" },
      { title: "Potato Salad", price: "3" },
      { title: "Coleslaw", price: "3" }
    ],
    drinks: [
      { title: "All Drinks", price: "1" }
    ]
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} overflow-x-hidden`}>
      {/* Hero Section */}
      <section id="top" className="relative w-full min-h-[80vh] flex items-center pt-16 pb-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${bbq8})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Main Content */}
            <div className="lg:w-2/3 text-center lg:text-left mb-12 lg:mb-0">
              <div className="relative mb-8 h-32 transform scale-75 sm:scale-100">
                <FoodTruck />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
                <span className="text-red-500">Big Greg</span>
                <br />
                <span className="text-red-500">BBQ</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic mb-8 text-white">
                Authentic Texas BBQ, On the Go!
              </p>
            </div>

            {/* Menu Card */}
            <div className="lg:w-1/3 w-full max-w-sm mx-auto lg:mx-0">
              <div className={`${isDark ? 'bg-gray-900/95' : 'bg-white/95'} rounded-2xl shadow-2xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-red-500/10 border border-red-500/20`}>
                <h2 className="text-3xl font-serif font-bold text-center mb-6 text-red-500">Menu</h2>
                
                {/* Meats */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-red-400">Meats</h3>
                  {menuItems.meats.map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                  <p className="text-sm mt-2 opacity-75">
                    All plates include 2 sides
                  </p>
                </div>

                {/* Sides */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-red-400">Sides</h3>
                  {menuItems.sides.map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                </div>

                {/* Drinks */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-red-400">Drinks</h3>
                  {menuItems.drinks.map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-red-500">
            Weekly Schedule
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Find us at these locations throughout the week. Click on any location to get directions!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
            {scheduleData.map((item, index) => (
              <CalendarDay 
                key={index}
                {...item}
                isToday={index === today}
              />
            ))}
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <div className={`${isDark ? 'bg-gray-800/80' : 'bg-white'} rounded-lg p-4 shadow-md border border-red-500/10`}>
              <h3 className="text-lg font-bold text-red-500 mb-2">Schedule Notes:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Hours may vary during holidays or special events</li>
                <li>• Follow us on social media for real-time updates and special pop-up locations</li>
                <li>• Available for private events and catering - contact us for details</li>
                <li>• Bad weather may affect our schedule - check our social media for updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Reviews Section */}
      <Reviews />

      {/* Booking Section */}
      <section id="booking" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-red-500">
            Book Us For Your Event
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Want authentic Texas BBQ at your next event? Fill out the form below and we'll get back to you within 24 hours!
          </p>
          <div className={`${isDark ? 'bg-gray-800/80' : 'bg-white'} rounded-2xl shadow-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-red-500/10 border border-red-500/20`}>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500">
            Contact Us
          </h2>
          <div className={`${isDark ? 'bg-gray-800/80' : 'bg-white'} rounded-2xl shadow-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-red-500/10 border border-red-500/20`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Location</h3>
                <p className="mb-6">Find us at various locations around DFW! Check our social media for daily updates.</p>
                
                <h3 className="text-2xl font-bold mb-4 text-red-400">Hours</h3>
                <div className="space-y-2 mb-6">
                  <p>Tuesday - Saturday: 11am - 8pm</p>
                  <p>Sunday: 12pm - 6pm</p>
                  <p>Monday: Closed</p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-red-400">Contact</h3>
                <div className="space-y-2">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@biggregbbq.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Follow Us</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100068146972993" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/biggregbbq/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 