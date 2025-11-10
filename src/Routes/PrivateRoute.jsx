import React, { use } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { user, loading } = use(AuthContext);

  // Optionally show a loading spinner while checking auth
  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  // If user exists, render child routes; otherwise redirect to login
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
