import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  return (
    <aside className="sidebar">
      <ul>
        <li><button onClick={() => navigateTo('/dashboard')}>Home</button></li>
        <li><button onClick={() => navigateTo('/real-time-scan')}>Real-Time Scan</button></li>
        <li><button onClick={() => navigateTo('/sandbox')}>Sandbox</button></li>
        <li><button onClick={() => navigateTo('/ai-suggestions')}>AI Suggestions</button></li>
        <li><button onClick={() => navigateTo('/learning-mode')}>Learning Mode</button></li>
        <li><button onClick={() => navigateTo('/integration')}>Integration</button></li>
        <li><button onClick={() => navigateTo('/reports')}>Reports</button></li>
        <li><button onClick={() => navigateTo('/customization')}>Customization</button></li>
        <li><button onClick={() => navigateTo('/tracker')}>Tracker</button></li>
        <li><button onClick={() => navigateTo('/community')}>Community</button></li>
        <li><button onClick={() => navigateTo('/support')}>Support</button></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
