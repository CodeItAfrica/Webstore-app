import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute: React.FC<{ redirectTo?: string }> = ({ redirectTo = '/login' }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; 
  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
