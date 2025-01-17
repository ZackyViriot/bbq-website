import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Logo = ({ className = "" }) => {
  const { isDark } = useTheme();
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 120" className="w-auto h-16">
        {/* Outer Circle */}
        <circle 
          cx="100" 
          cy="60" 
          r="50" 
          fill="none" 
          className={`${isDark ? 'stroke-red-500' : 'stroke-red-600'}`}
          strokeWidth="3"
        />
        
        {/* Inner Background */}
        <circle 
          cx="100" 
          cy="60" 
          r="45" 
          className={`${isDark ? 'fill-gray-800' : 'fill-white'}`}
          stroke="none"
        />

        {/* Top Knife */}
        <g className={`${isDark ? 'text-red-500' : 'text-red-600'}`} transform="translate(100, 60)">
          <g transform="translate(-40, -30) rotate(-15)">
            {/* Knife Handle */}
            <rect x="0" y="0" width="25" height="8" fill="currentColor" rx="1" />
            {/* Knife Blade */}
            <path d="M25 0h45l10 4-10 4h-45z" fill="currentColor" />
            {/* Knife Details */}
            <circle cx="12" cy="4" r="2" fill={isDark ? '#1f2937' : '#f3f4f6'} />
            <circle cx="20" cy="4" r="2" fill={isDark ? '#1f2937' : '#f3f4f6'} />
          </g>
        </g>
        
        {/* Text Container */}
        <g transform="translate(100, 60)" textAnchor="middle">
          {/* Main Text */}
          <text 
            className={`text-2xl font-bold ${isDark ? 'text-red-500' : 'text-red-600'}`}
            fill="currentColor"
            y="-5"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            BIG GREG BBQ
          </text>
          
          {/* Subtitle */}
          <text 
            y="12"
            className={`text-xs italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            fill="currentColor"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            It's All Wood
          </text>
        </g>
        
        {/* Bottom Knife */}
        <g className={`${isDark ? 'text-red-500' : 'text-red-600'}`} transform="translate(100, 60)">
          <g transform="translate(-40, 20) rotate(15)">
            {/* Knife Handle */}
            <rect x="0" y="0" width="25" height="8" fill="currentColor" rx="1" />
            {/* Knife Blade */}
            <path d="M25 0h45l10 4-10 4h-45z" fill="currentColor" />
            {/* Knife Details */}
            <circle cx="12" cy="4" r="2" fill={isDark ? '#1f2937' : '#f3f4f6'} />
            <circle cx="20" cy="4" r="2" fill={isDark ? '#1f2937' : '#f3f4f6'} />
          </g>
        </g>
      </svg>
    </div>
  );
};

const NavLink = ({ href, children, onClick }) => {
  const { isDark } = useTheme();
  const scrollToSection = (e) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        const navbarHeight = 64; // height of navbar (h-16)
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }
    if (onClick) onClick();
  };

  return (
    <a 
      href={href} 
      onClick={scrollToSection}
      className={`${isDark ? 'text-gray-100' : 'text-gray-800'} hover:text-red-500 transition-colors duration-200 text-lg font-medium`}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`sticky top-0 w-full z-50 ${isDark ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink href="#">
            <Logo className="hover:opacity-80 transition-opacity duration-200" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#top">Home</NavLink>
            <NavLink href="#schedule">Schedule</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isDark ? 'text-gray-100' : 'text-gray-800'} hover:text-red-500 transition-colors duration-200 focus:outline-none`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
            <div className="flex flex-col space-y-4 px-4">
              <NavLink href="#top" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
              <NavLink href="#schedule" onClick={() => setIsMobileMenuOpen(false)}>Schedule</NavLink>
              <NavLink href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</NavLink>
              <NavLink href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</NavLink>
              <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 