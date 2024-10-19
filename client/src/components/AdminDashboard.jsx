import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('manageStudent');
  const [students, setStudents] = useState([]);
  const [hrs, setHrs] = useState([]); // Add HR state

  // Fetch students from the API
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/student/');
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Fetch HRs from the API
  const fetchHrs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/hr/');
      setHrs(response.data);
    } catch (error) {
      console.error("Error fetching HRs:", error);
    }
  };

  useEffect(() => {
    fetchStudents(); // Fetch students when component mounts
    fetchHrs(); // Fetch HRs when component mounts
  }, []);

  // Handle delete for students
  const handleDeleteStudent = async (email) => {
    try {
      await axios.delete(`http://localhost:3000/api/student/${email}`);
      // Re-fetch students after deletion
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Handle delete for HRs
  const handleDeleteHr = async (email) => {
    try {
      await axios.delete(`http://localhost:3000/api/hr/${email}`);
      // Re-fetch HRs after deletion
      fetchHrs();
    } catch (error) {
      console.error("Error deleting HR:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'manageStudent':
        return (
          <div>
            <h3>Manage Students</h3>
            <ul>
              {students.map(student => (
                <li key={student.email}> {/* Use a unique key from the student data */}
                  {student.name}
                  <button onClick={() => handleDeleteStudent(student.email)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'manageHr':
        return (
          <div>
            <h3>Manage HR</h3>
            <ul>
              {hrs.map(hr => (
                <li key={hr.email}> {/* Use a unique key from the HR data */}
                  {hr.name}
                  <button onClick={() => handleDeleteHr(hr.email)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        );
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
            key="manageStudent"
            onClick={() => setActiveTab('manageStudent')}
            className={activeTab === 'manageStudent' ? 'active' : ''}
          >
            Manage Students
          </li>
          <li
            key="manageHr"
            onClick={() => setActiveTab('manageHr')}
            className={activeTab === 'manageHr' ? 'active' : ''}
          >
            Manage HR
          </li>
          <li
            key="reports"
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
