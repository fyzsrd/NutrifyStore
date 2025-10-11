import privateApiSlice from "../../../app/api/privateApiSlice"



const profileApi = privateApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAddresses: build.query({
            query: () => `address`,
            providesTags: ['User'],
            transformResponse:(response)=>response.address,
        }),
        

    }),
    overrideExisting: false,
})

export const { useGetAddressesQuery } = profileApi