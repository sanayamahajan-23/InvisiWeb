import React from 'react';
import './RecentScans.css';

const RecentScans = () => {
  return (
    <div className="widget recent-scans">
      <h2>Recent Scans</h2>
      <ul>
        <li>Scan 1 - Passed</li>
        <li>Scan 2 - Failed</li>
        <li>Scan 3 - Passed</li>
      </ul>
    </div>
  );
};

export default RecentScans;
