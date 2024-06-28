import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="HeroSection" id="hero">
      <h1>Welcome to InvisiWeb</h1>
      <p>Enhance your website’s accessibility effortlessly with our tools.</p>
      <div className="cta-buttons">
        <button>Get Started</button>
        <button>Learn More</button>
        <button>Contact Support</button>
      </div>
    </section>
  );
};

export default HeroSection;
