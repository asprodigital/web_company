import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WorkCard from '../ui/WorkCard';
import { works } from '../../data/works';

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? works.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === works.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="work" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-light">See the inside of ASPRO DIGITAL</h2>
          <p className="text-gray-600 mt-4">screenshots of apps</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Positioned outside content on larger screens */}
          <div className="hidden md:block">
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {works.map((work, index) => (
                <div
                  key={work.id}
                  className="w-full flex-shrink-0 px-4 md:px-12"
                >
                  <WorkCard
                    {...work}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation - Below content */}
          <div className="md:hidden flex justify-center items-center gap-4 mt-8 px-6">
            <button
              onClick={handlePrevious}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {works.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-black w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;