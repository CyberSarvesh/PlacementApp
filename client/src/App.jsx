// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import HRDashboard from './HRDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
