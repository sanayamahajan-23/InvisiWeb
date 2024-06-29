import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import IssueList from './IssueList';
import IssueFilter from './IssueFilter';
import HighlightingToggle from './HighlightingToggle';
import './RealTimeScanner.css';
import Header from '../DashboardHeader/DashboardHeader';
import Footer from '../Footer/Footer';
const RealTimeScanner = () => {
  return (
    <div className="real-time-scanner-container">
        <Header/>
      <Sidebar />
      <main className="scanner-main">
        <div className="scanner-header">
          <h1>Real-Time Accessibility Scanner</h1>
        </div>
        <div className="scanner-content">
          <div className="toggle-section">
            <HighlightingToggle />
          </div>
          <div className="issue-list-section">
            <IssueFilter />
            <IssueList />
          </div>
          <Footer/>
        </div>
      </main>
    </div>
  );
};

export default RealTimeScanner;
