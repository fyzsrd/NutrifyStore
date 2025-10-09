import React, { useState } from 'react'
import { useVerifyOtpMutation } from '../api/authApi'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../store/slices/authSlice';

const OtpVerify = ({mobileData }) => {
    const [otp,setOtp]=useState("")
    const[verifyOtp ,{data,isloading,Error}]=useVerifyOtpMutation();
    const dispatch=useDispatch()
    

    const handleVerify= async (e)=>{
        e.preventDefault();
        console.log("opt going to verify",mobileData)
        try{
            const res=await verifyOtp({mobile:mobileData,otp})
          console.log("✅ OTP Verified Response:", res);
          dispatch(setCredentials({
            user:res?.data?.user,
            token:res.data?.token
          }))

        }catch (err) {
        console.error("❌ Failed to verify:", err);
    }
    }
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
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        Verify OTP
      </button>
    </form>
  )
}

export default OtpVerify