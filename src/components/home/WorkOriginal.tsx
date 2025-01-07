{/* Backing up original Work component */}
import React, { useState } from 'react';
import CarouselButton from '../ui/CarouselButton';
import WorkCard from '../ui/WorkCard';
import { works } from '../../data/works';

const WorkOriginal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? works.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === works.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#f8f8f8]">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light">See the inside of ASPRO DIGITAL</h2>
          <p className="text-gray-600 mt-4">screenshots of games</p>
        </div>

        <div className="relative">
          <CarouselButton direction="left" onClick={handlePrevious} />
          <CarouselButton direction="right" onClick={handleNext} />

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
        </div>
      </div>
    </section>
  );
};

export default WorkOriginal;