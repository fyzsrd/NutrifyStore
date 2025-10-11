import React, { useState } from "react";
import { X } from "lucide-react"; // optional icon
import Login from "./components/Login";
import OtpVerify from "./components/OtpVerify";


const AuthPopUp = ({ onClose }) => {
    const [otpSent, setOtpSent] = useState(false);
  const [mobileData, setMobileData] = useState(null);
  

  const handleOtpSent = (mobile) => {
    setOtpSent(true);
    
    setMobileData(mobile); // store anything returned from API (e.g. session id)
  };
   
   
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4">
      {/* Popup container */}
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {!otpSent ? <Login onOtpSent={handleOtpSent} /> : <OtpVerify mobileData={mobileData} />}
        
      
      </div>
    </div>
  );
};

export default AuthPopUp;
