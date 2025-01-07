import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#f8f8f8]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">About Our Studio</h2>
            <div className="space-y-6 text-lg">
              <p>
              ASPRO DIGITAL is a creative design practice focused on creating meaningful spaces 
                through innovative design solutions. We believe in the power of thoughtful design 
                to transform spaces and enhance the way people live and work.
              </p>
              <p>
                Our approach combines aesthetic excellence with functional design, creating 
                environments that are both beautiful and purposeful. Each project is an opportunity 
                to craft unique solutions that reflect our clients' vision and aspirations.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
              alt="Studio space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;