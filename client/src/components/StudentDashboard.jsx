// src/components/StudentDashboard.js
import React, { useState } from 'react';
import '../styles/StudentDashboard.css';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('newJobs');

  const jobOpportunities = [
    { title: 'Software Engineer Intern', company: 'Tech Corp', location: 'Remote' },
    { title: 'Frontend Developer', company: 'Design Co', location: 'On-site' },
    { title: 'Data Analyst', company: 'Data Inc.', location: 'Remote' },
  ];

  const applications = [
    { jobTitle: 'Software Engineer Intern', status: 'Applied' },
    { jobTitle: 'Frontend Developer', status: 'Interview Scheduled' },
    { jobTitle: 'Data Analyst', status: 'Application Under Review' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'newJobs':
        return (
          <div>
            <h3>Job Opportunities</h3>
            <ul>
              {jobOpportunities.map((job, index) => (
                <li key={index}>
                  <strong>{job.title}</strong> at {job.company} - {job.location}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'status':
        return (
          <div>
            <h3>Current Applications</h3>
            <ul>
              {applications.map((app, index) => (
                <li key={index}>
                  <strong>{app.jobTitle}</strong> - Status: {app.status}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'profile':
        return <div>Your Profile Information</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Student Dashboard</h2>
        <ul>
          <li
            onClick={() => setActiveTab('newJobs')}
            className={activeTab === 'newJobs' ? 'active' : ''}
          >
            Looking for New Job Opportunities
          </li>
          <li
            onClick={() => setActiveTab('status')}
            className={activeTab === 'status' ? 'active' : ''}
          >
            Checking Status of Current Applications
          </li>
          <li
            onClick={() => setActiveTab('profile')}
            className={activeTab === 'profile' ? 'active' : ''}
          >
            Profile
          </li>
        </ul>
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;
