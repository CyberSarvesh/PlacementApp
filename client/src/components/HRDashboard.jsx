// src/components/HRDashboard.js
import React, { useState } from 'react';
import '../styles/HRDashboard.css';

const HRDashboard = () => {
  const [activeTab, setActiveTab] = useState('viewApplications');

  const renderContent = () => {
    switch (activeTab) {
      case 'viewApplications':
        return <div>View Applications Section</div>;
      case 'postJob':
        return <div>Post a New Job Section</div>;
      case 'reports':
        return <div>View Reports Section</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>HR Dashboard</h2>
        <ul>
          <li
            onClick={() => setActiveTab('viewApplications')}
            className={activeTab === 'viewApplications' ? 'active' : ''}
          >
            View Applications
          </li>
          <li
            onClick={() => setActiveTab('postJob')}
            className={activeTab === 'postJob' ? 'active' : ''}
          >
            Post a New Job
          </li>
          <li
            onClick={() => setActiveTab('reports')}
            className={activeTab === 'reports' ? 'active' : ''}
          >
            View Reports
          </li>
        </ul>
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default HRDashboard;
