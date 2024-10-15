// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import HRDashboard from './components/HRDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/hr-dashboard" element={<HRDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
