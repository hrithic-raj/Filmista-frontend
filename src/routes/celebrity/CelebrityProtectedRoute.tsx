import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const CelebrityProtectedRoutes: React.FC = () => {
  const isCelebrity = Boolean(localStorage.getItem("role")==='celebrity');
  const isUser = Boolean(localStorage.getItem("role")==='user');
  return isCelebrity ? <Outlet /> : (isUser ? <Navigate to="/" /> : <Navigate to="/signin" /> ) ;
};

export default CelebrityProtectedRoutes;