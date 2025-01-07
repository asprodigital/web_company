import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import CompanyInfo from './components/home/CompanyInfo';
import Work from './components/home/Work';
import Reviews from './components/home/Reviews';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CompanyInfo />
      <Work />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;