import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AuthPopUp from "../../features/auth/AuthPopUp";

export const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // simulate auth state hydration delay
    const timer = setTimeout(() => {
      setIsChecking(false);
      if (!isAuthenticated) {
        setShowPopUp(true);
      }
    }, 100); // a short 100ms is usually enough
    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  const handleClosePopUp = () => {
    setShowPopUp(false);
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  };

  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated && showPopUp) {
    return <AuthPopUp onClose={handleClosePopUp} />;
  }

  return <Outlet />;
};
