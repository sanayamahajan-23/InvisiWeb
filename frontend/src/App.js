import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureHighlights from './components/FeatureHighlights';
import Footer from './components/Footer';
import './App.css';
import Sandbox from './components/sandbox';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <Sandbox />
      <Footer />
    </div>
  );
};

export default App;

