import { apiSlice } from "../../../app/api/apiSlice";


 const productsApi =apiSlice.injectEndpoints({
    endpoints:(build)=>({
        getFullProductDetails:build.query({
            query:(productID)=> `nutrify/home/${productID}`
        })
    })

})

export const {useGetFullProductDetailsQuery}=productsApi