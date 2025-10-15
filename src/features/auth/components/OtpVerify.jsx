import { useState } from "react";
import { useDispatch } from "react-redux";
import { useVerifyOtpMutation } from "../api/authApi";
import { setCredentials } from "../../../store/slices/authSlice";
import useSyncCartOnLogin from "../../cart/hooks/useSyncCartOnLogin";

const OtpVerify = ({ mobileData }) => {
  const [otp, setOtp] = useState("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const dispatch = useDispatch();
  const syncCart = useSyncCartOnLogin();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyOtp({ mobile: mobileData, otp }).unwrap();
      dispatch(setCredentials({ user: res.user, token: res.token }));

      // 🧲 Sync guest cart after setting credentials
      await syncCart();

      console.log("✅ OTP verified and cart synced");
    } catch (err) {
      console.error("❌ OTP verification failed", err);
    }
  };

  return (
    <form onSubmit={handleVerify} className="space-y-4">
      <h2 className="text-xl font-semibold text-center mb-4">Verify OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        {isLoading ? "Verifying..." : "Verify OTP"}
      </button>
    </form>
  );
};

export default OtpVerify;
