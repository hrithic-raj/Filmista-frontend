import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminProtectedRoutes: React.FC = () => {
  const isAdmin = Boolean(localStorage.getItem("role")==='admin');
  const isUser = Boolean(localStorage.getItem("role")==='user' || localStorage.getItem("role")==='celebrity');
  return isAdmin ? <Outlet /> : (isUser ? <Navigate to="/" /> : <Navigate to="/signin" /> ) ;
};

export default AdminProtectedRoutes;