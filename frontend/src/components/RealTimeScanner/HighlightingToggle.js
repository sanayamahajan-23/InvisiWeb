import React, { useState } from 'react';
import './HighlightingToggle.css';

const HighlightingToggle = () => {
  const [highlightingEnabled, setHighlightingEnabled] = useState(false);

  const handleToggle = () => {
    setHighlightingEnabled(prevState => !prevState);
    // Implement logic to enable/disable highlighting (e.g., API call)
  };

  return (
    <div className="highlighting-toggle">
      <label>
        <input type="checkbox" checked={highlightingEnabled} onChange={handleToggle} />
        Enable Visual Highlighting
      </label>
    </div>
  );
};

export default HighlightingToggle;
