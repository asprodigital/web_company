import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Our Studio</h2>
            <p className="text-gray-600 mb-6">
              We are a creative design studio focused on bringing innovative solutions to our clients.
              Our approach combines aesthetic excellence with functional design, creating spaces that
              inspire and endure.
            </p>
            <p className="text-gray-600">
              With years of experience in interior design and architecture, we've developed a unique
              perspective that allows us to transform spaces into extraordinary environments.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Studio workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;