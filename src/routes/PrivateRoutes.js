import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  // localStorage.setItem("keyword","shubham12")
  const isAuthenticated = localStorage.getItem("keyword");
  return isAuthenticated==="shubham-gaurav" ? children : <Navigate to="/"/>;
};

export { PrivateRoutes };
