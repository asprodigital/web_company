{/* Backing up original Hero component */}
import React from 'react';
import { ArrowDown } from 'lucide-react';
import StoreButton from '../ui/StoreButton';

const HeroOriginal = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-light mb-8 max-w-4xl mx-auto leading-tight">
          We create meaningful spaces through innovative design solutions
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <StoreButton store="apple" href="https://apps.apple.com/app/id123" />
          <StoreButton store="google" href="https://play.google.com/store/apps/details?id=com.asprodigital" />
        </div>

        <button
          onClick={scrollToWork}
          className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
        >
          <span>View Our Work</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroOriginal;