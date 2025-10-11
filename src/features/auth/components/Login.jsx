import React, { useState } from "react";
import { useSendOtpMutation } from "../api/authApi"; // ✅ use the new mutation

const Login = ({ onOtpSent }) => {
  const [mobile, setMobile] = useState("");
  const [sendOtp, {  isLoading, error }] = useSendOtpMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendOtp(mobile).unwrap();
      console.log("OTP Sent Response:", res);
      onOtpSent(mobile); // 👉 tell parent that OTP was sent successfully
    } catch (err) {
      console.error("Failed to send OTP", err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
      <p className="text-sm text-gray-600 text-center mb-6">
        Enter your mobile number to continue
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {isLoading ? "Sending..." : "Get OTP"}
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error?.data?.message || "Failed to send OTP"}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
