import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const users = [{ name: "shubham" }, { name: "gaurav" }, { name: "amitesh" }];

  const isAuthenticated = localStorage.getItem("token");

  return users.reduce((check, curr) => {
    if (curr.name === isAuthenticated) {
      check = true;
      return true;
    }
    return check ? true : false;
  }, false) ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export { PrivateRoutes };
