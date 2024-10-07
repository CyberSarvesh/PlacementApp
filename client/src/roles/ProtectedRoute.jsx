import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);

  return allowedRoles.includes(user?.role) ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
