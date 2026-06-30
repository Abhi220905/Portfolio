import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Section Highlight Logic
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px offset to trigger highlight slightly before the section hits the absolute top
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-[#141a22]/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-[#2a3441] py-4' : 'bg-transparent py-6'}`}>
      <div className="flex justify-between items-center px-8 md:px-[8%] max-w-[1600px] mx-auto w-full text-gray-900 dark:text-white">
        <div className="text-xl font-bold tracking-wide">Abhishek Khatri</div>
        
        <div className="flex items-center space-x-10">
          <ul className="hidden lg:flex space-x-10 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li>
            <a href="#home" className={`transition-colors ${activeSection === 'home' ? 'text-[#FF7A59]' : 'hover:text-[#FF7A59]'}`}>Home</a>
          </li>
          <li>
            <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-[#FF7A59]' : 'hover:text-[#FF7A59]'}`}>About</a>
          </li>
          <li>
            <a href="#projects" className={`transition-colors ${activeSection === 'projects' ? 'text-[#FF7A59]' : 'hover:text-[#FF7A59]'}`}>Projects</a>
          </li>
          <li>
            <a href="#experience" className={`transition-colors ${activeSection === 'experience' ? 'text-[#FF7A59]' : 'hover:text-[#FF7A59]'}`}>Experience</a>
          </li>
          <li>
            <a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-[#FF7A59]' : 'hover:text-[#FF7A59]'}`}>Contacts</a>
          </li>
          </ul>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            )}
          </button>
          
          {/* Hamburger Icon */}
          <button 
            className="lg:hidden p-2 ml-2 text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 border-b border-gray-200 dark:border-[#2a3441]' : 'max-h-0'}`}>
        <ul className="flex flex-col px-8 py-4 space-y-4 bg-white/95 dark:bg-[#141a22]/95 backdrop-blur-md">
          {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
            <li key={section}>
              <a 
                href={`#${section}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block capitalize transition-colors ${activeSection === section ? 'text-[#FF7A59]' : 'text-gray-600 dark:text-gray-300 hover:text-[#FF7A59]'}`}
              >
                {section === 'contact' ? 'Contacts' : section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
