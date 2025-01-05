import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthProtectedRoutes: React.FC = () => {
  const isAuthenticated = Boolean(localStorage.getItem("role")==='user' || localStorage.getItem("role")==='celebrity' || localStorage.getItem("role")==='admin');
  const isAdmin = Boolean(localStorage.getItem("role")==='admin');
  return isAuthenticated ? (isAdmin ? <Navigate to="/admin" /> : <Navigate to="/" /> ): <Outlet /> ;
};

export default AuthProtectedRoutes;