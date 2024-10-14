// src/components/AdminDashboard.js
import React, { useState } from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('manageUsers');

  const renderContent = () => {
    switch (activeTab) {
      case 'manageUsers':
        return <div>Manage Users Section</div>;
      case 'manageJobs':
        return <div>Manage Job Listings Section</div>;
      case 'reports':
        return <div>View Reports Section</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li
            onClick={() => setActiveTab('manageUsers')}
            className={activeTab === 'manageUsers' ? 'active' : ''}
          >
            Manage Users
          </li>
          <li
            onClick={() => setActiveTab('manageJobs')}
            className={activeTab === 'manageJobs' ? 'active' : ''}
          >
            Manage Job Listings
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

export default AdminDashboard;
