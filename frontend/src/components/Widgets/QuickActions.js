import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  return (
    <div className="widget quick-actions">
      <h2>Quick Actions</h2>
      <button className="btn btn-primary">Run Scan</button>
      <button className="btn btn-secondary">Generate Report</button>
    </div>
  );
};

export default QuickActions;
