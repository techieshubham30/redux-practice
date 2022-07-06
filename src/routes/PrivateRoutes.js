import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const users = ["shubham", "gaurav"];

  const isAuthenticated = localStorage.getItem("token");

  return users.includes(isAuthenticated) ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export { PrivateRoutes };

// find indexof some every
