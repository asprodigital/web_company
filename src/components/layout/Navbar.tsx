import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from '../ui/Logo';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <Logo />
            
            <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest">
              <a href="#info" className="hover:opacity-50 transition-opacity">Info</a>
              <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
              <a href="#reviews" className="hover:opacity-50 transition-opacity">Reviews</a>
              {/* <a href="#about" className="hover:opacity-50 transition-opacity">About</a> */}
              <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
            </div>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 hover:opacity-50 transition-opacity"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;