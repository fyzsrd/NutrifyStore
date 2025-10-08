import React from "react";
import { X } from "lucide-react"; // optional icon

const AuthPopUp = ({ onClose }) => {
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

        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your mobile number to continue
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="e.g. 9876543210"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPopUp;
