import React from 'react';
import StoreButton from '../ui/StoreButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
          Find us on Google Play<br />and Blog
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Download our apps TradeShelf and many more..
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          

          <a 
            href="https://play.google.com/store/apps/details?id=com.easy" 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-colors flex items-center space-x-4"
          >
            <span className="text-2xl">▶</span>
            <div className="text-left">
              <div className="text-sm opacity-80">Android app on</div>
              <div className="text-lg font-medium">Google Store</div>
            </div>
          </a>

          <a 
            href="https://easystudio.vercel.app/" 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-colors flex items-center space-x-4"
          >
            <span className="text-2xl">⌘</span>
            <div className="text-left">
              <div className="text-sm opacity-80">Available on the</div>
              <div className="text-lg font-medium">Blog</div>
            </div>
          </a>
        </div>

        <div className="text-gray-300">
          Any enqueries can contact us at{' '}
          <a 
            href="mailto:my.easystudio@gmail.com" 
            className="text-white hover:underline"
          >
            my.easystudio@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;