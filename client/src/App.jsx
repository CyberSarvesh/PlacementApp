import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import HRPage from './pages/HRPage';
import LoginPage from './pages/LoginPage';
import { AuthContext } from './context/AuthContext';  // Context to manage roles

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
		<Router>
			<Routes>
				{/* Public Routes */}
				<Route path="/login" element={<LoginPage />} />

				{/* Protected Routes for students dashboard and everything*/}
				<Route
				path="/student/*"
				element={user?.role === 'student' ? <StudentPage /> : <Navigate to="/login" />}
				/>

				{/* Protected Routes for admin dashboard and everything*/}
				<Route
				path="/admin/*"
				element={user?.role !== 'admin' ? <AdminPage /> : <Navigate to="/login" />}
				/>

				{/* Protected Routes for hr dashboard and everything*/}
				<Route
				path="/hr/*"
				element={user?.role === 'hr' ? <HRPage /> : <Navigate to="/login" />}
				/>

				{/* Default Redirect */}
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</Router>
    </>
    
  );
};

export default App;
