// components/PrivateRoute.jsx
import { useAuth } from "../Auth/Authcontext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="h-screen w-full flex justify-center items-center">
   <div className="flex space-x-2 justify-center m-4">
  {[...Array(3)].map((_, i) => {
    const bounceClass = "w-4 h-4 bg-cyan-400 rounded-full animate-bounce";
    const delayStyle = { animationDelay: (i * 0.2).toString() + "s" };

    return <span key={i} className={bounceClass} style={delayStyle} />;
  })}
</div>
</div>;

  if (!user) return <Navigate to="/main/student/pages/login" />;

  if (role && user.role !== role) return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;
