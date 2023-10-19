import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.currentUser);

  if (!currentUser.email) return <Navigate to={"/"} />;
  return <>{children}</>;
};

export default ProtectedRoute;
