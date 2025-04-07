import React, { useState } from 'react';
import { Menu, X, Home, Info, Bed, Coffee, Image, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: 'hero' },
    { name: 'About', icon: <Info size={20} />, href: 'about' },
    { name: 'Rooms', icon: <Bed size={20} />, href: 'rooms' },
    { name: 'Amenities', icon: <Coffee size={20} />, href: 'amenities' },
    { name: 'Gallery', icon: <Image size={20} />, href: 'gallery' },
    { name: 'Contact', icon: <Phone size={20} />, href: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-serif font-bold text-gray-800">Grand Holiday</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 w-full px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-gray-50 transition-colors rounded-md"
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;