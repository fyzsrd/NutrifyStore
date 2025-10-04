
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({ baseUrl:`${import.meta.env.VITE_DATABASE_API_URL}/api/`}),
    tagTypes:['Nutrify'],
    refetchOnFocus:true,
    refetchOnReconnect:true,
    endpoints:()=>({}),
})