import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Creative Design Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            We create meaningful experiences through design and innovation
          </p>
          <div className="aspect-video max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80"
              alt="Studio Space"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;