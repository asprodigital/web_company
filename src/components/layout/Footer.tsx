import React from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Logo />
          <div className="flex space-x-12 text-sm uppercase tracking-widest">
            <a href="#info" className="hover:opacity-50 transition-opacity">Info</a>
            <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
            <a href="#reviews" className="hover:opacity-50 transition-opacity">Reviews</a>
            {/* <a href="#about" className="hover:opacity-50 transition-opacity">About</a> */}
            <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} ASPRO DIGITAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;