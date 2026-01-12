import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole = null }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // Redirect based on role
    if (userRole === "vendor") {
      return <Navigate to="/vendor/dashboard" replace />;
    } else {
      return <Navigate to="/market" replace />;
    }
  }

  return children;
}
