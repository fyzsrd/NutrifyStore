
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AuthPopUp from "../../features/auth/AuthPopUp";


export const PrivateRoute=()=>{
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

     const [showPopUp, setShowPopUp] =useState(false)

     const navigate=useNavigate()
      useEffect(() => {
    if (!isAuthenticated) {
      setShowPopUp(true);
    } else {
      setShowPopUp(false);
    }
  }, [isAuthenticated]);

   const handleClosePopUp =()=>{
    setShowPopUp(false)
    if(!isAuthenticated){
      navigate('/',{replace:true})
    }
  }

  if(!isAuthenticated & showPopUp){
    return <AuthPopUp onClose={handleClosePopUp} /> 
  }


  return <Outlet /> 
}