import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextData } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  
 
  const { currentUser, loading } = useContext(ContextData);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center z-50">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
      </div>
    );
  }

  if (currentUser) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;