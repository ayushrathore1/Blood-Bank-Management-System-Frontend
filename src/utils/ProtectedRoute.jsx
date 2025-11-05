import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

// Usage: <ProtectedRoute adminOnly={true}><AdminPage/></ProtectedRoute>
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, token } = useAuth();

  if (!token) return <Navigate to="/login" replace />;
  if (adminOnly && user?.role !== "admin") return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
