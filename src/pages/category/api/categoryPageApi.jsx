import { apiSlice } from "../../../app/api/apiSlice";


export const categoryPageApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        fetchProductsByCategory: build.query({
            query: (id) => `/nutrify/productBycatgeory/${id}`,
            providesTags: ["ProductsByCategory", 'Nutrify'],
            refetchOnFocus: true,
        })
    })
})


export const {useFetchProductsByCategoryQuery }=categoryPageApi