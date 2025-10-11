
import { apiSlice } from "../../../app/api/apiSlice";


const authApi=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        sendOtp:build.mutation({
            query:(mobile)=>({
                url:`/user/auth/`,
                method:'POST',
                body:{
                    mobileNumber:mobile,
                   "countryCode":"IN",
                }
            })
        }),
         verifyOtp:build.mutation({
            query:({mobile,otp})=>({
                url:`/user/auth/verify`,
                method:'POST',
                body:{
                    mobileNumber:mobile,
                   countryCode:"IN",
                   otp:otp
                }
            })
        })
    }),
    overrideExisting:false
})

export const {useSendOtpMutation ,useVerifyOtpMutation}=authApi