import React from 'react';
import './FeatureHighlights.css';

const features = [
  { icon: 'icon1.png', description: 'Real-Time Accessibility Scanner' },
  { icon: 'icon2.png', description: 'AI-Powered Suggestions' },
  { icon: 'icon3.png', description: 'Interactive Learning Mode' },
  // Add more features as needed
];

const FeatureHighlights = () => {
  return (
    <section className="FeatureHighlights">
      <h2>Key Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <img src={`assets/icons/${feature.icon}`} alt="" />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
