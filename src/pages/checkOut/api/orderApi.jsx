
import privateApiSlice from "../../../app/api/privateApiSlice";


export const orderApi=privateApiSlice.injectEndpoints({
    endpoints:(build)=>({
        initiateOrder:build.query({
            query:()=>'order/initiate',
            providesTags: ['Order'],
        })
    })
})

export const { useInitiateOrderQuery } = orderApi;