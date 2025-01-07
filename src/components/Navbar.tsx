import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">ASPRO DIGITAL</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#projects" className="hover:text-gray-600 px-3 py-2">Projects</a>
              <a href="#about" className="hover:text-gray-600 px-3 py-2">About</a>
              <a href="#contact" className="hover:text-gray-600 px-3 py-2">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block hover:text-gray-600 px-3 py-2">Projects</a>
            <a href="#about" className="block hover:text-gray-600 px-3 py-2">About</a>
            <a href="#contact" className="block hover:text-gray-600 px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;