import React from 'react';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import FeatureHighlights from './FeatureHighlights/FeatureHighlights';
import Footer from './Footer/Footer';

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <Footer />
    </div>
  );
}

export default LandingPage;