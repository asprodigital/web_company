import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#f8f8f8]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">About Our Company</h2>
            <div className="space-y-6 text-lg">
              <p>
ASPRO DIGITAL ENTERPRISE, also known as ASPRO DIGITAL, is an innovative technology company dedicated to developing impactful mobile applications that enhance the lives of people everywhere. 
As a small yet dynamic team, we focus on creating solutions that provide real, tangible benefits to users.
              </p>
              <p>
              At ASPRO DIGITAL, we believe in the power of technology to transform how people interact with the world. 
              Our approach blends creativity with functionality, ensuring that each app we build is not only user-friendly but also purposeful and meaningful.
              </p>
            </div>
          </div>
          {/* <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
              alt="Studio space"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;