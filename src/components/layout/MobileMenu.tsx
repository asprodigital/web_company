import React from 'react';
import { X } from 'lucide-react';
import Logo from '../ui/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-12">
          <Logo />
          <button onClick={onClose} className="p-2 hover:opacity-50 transition-opacity">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col space-y-8 text-2xl">
          <a href="#info" className="hover:opacity-50 transition-opacity">Info</a>
          <a href="#work" onClick={onClose} className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#reviews" className="hover:opacity-50 transition-opacity">Reviews</a>
          {/* <a href="#about" onClick={onClose} className="hover:opacity-50 transition-opacity">About</a> */}
          <a href="#contact" onClick={onClose} className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;