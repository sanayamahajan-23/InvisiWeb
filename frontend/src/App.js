import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureHighlights from './components/FeatureHighlights';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <Footer />
    </div>
  );
};

export default App;

