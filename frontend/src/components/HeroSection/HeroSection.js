import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="py-5 text-center">
      <div className="container">
        <h1 className="display-3 text-dark mb-4">
          <span className="text-primary">Unlocking digital doors</span> with 
          <br />
          <span className="font-weight-bold">InvisiWeb</span>
        </h1>
        <p className="lead text-dark mb-4">
          <span className="text-secondary">Where accessibility meets innovation. Bridging gaps, one click at a time.</span>
        </p>
        <a href="#" className="btn btn-primary mr-2">Get Started</a>
        <a href="#" className="btn btn-outline-primary mr-2">Learn More</a>
        <a href="#" className="btn btn-outline-primary">Contact Support</a>
      </div>
    </section>
  );
};

export default HeroSection;
