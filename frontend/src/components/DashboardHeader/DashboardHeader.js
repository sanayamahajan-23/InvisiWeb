import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="logo">InvisiWeb</div>
      <nav className="navbar">
        <a href="/profile" className="profile-link">
          <i className="fas fa-user-circle"></i> Profile
        </a>
      </nav>
    </header>
  );
};

export default DashboardHeader;
