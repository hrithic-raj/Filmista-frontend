import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const UserProtectedRoutes: React.FC = () => {
  const isAuthenticated = Boolean(localStorage.getItem("role")=== 'user' || localStorage.getItem("role")==='celebrity');

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default UserProtectedRoutes;