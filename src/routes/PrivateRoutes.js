import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  localStorage.setItem("keyword","shubham")
  const isAuthenticated = localStorage.getItem("keyword");
  return isAuthenticated==="shubham" ? children : <Navigate to="/"/>;
};

export { PrivateRoutes };
