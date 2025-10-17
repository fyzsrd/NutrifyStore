import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const CheckOutLayout = () => {
  const navigate = useNavigate();


  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* ✅ Fixed Top Header */}
      <div className="flex p-2.5 justify-between bg-blue-100 border-b border-gray-300 fixed top-0 left-0 right-0 z-10">
        <h1 className="font-bold text-2xl">Order Summary</h1>
        <button
          onClick={handleClose}
          className="bg-red-600 px-3 py-1 rounded-sm text-white cursor-pointer"
        >
          Cancel
        </button>
      </div>

      {/* ✅ Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto mt-[60px] mb-[80px] p-3 bg-gray-50">
        <Outlet />
      </main>

      {/* ✅ Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-blue-900 shadow-inner">
        <button className="py-4 px-6 w-full rounded-lg bg-white text-blue-950 font-bold text-lg">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default CheckOutLayout;
