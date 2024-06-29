import React from 'react';
import './Dashboard.css';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import OverviewWidget from '../Widgets/OverviewWidget';
import TrendsGraph from '../Widgets/TrendsGraph';
import RecentScans from '../Widgets/RecentScans';
import QuickActions from '../Widgets/QuickActions';
import Footer from '../Footer/Footer'
const Dashboard = () => {
  return (
    <div>
    <div className="dashboard-container">
      <DashboardHeader />
      <Sidebar />
      <main className="dashboard-content">
        <OverviewWidget />
        <TrendsGraph />
        <RecentScans />
        <QuickActions />
      </main>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Dashboard;
