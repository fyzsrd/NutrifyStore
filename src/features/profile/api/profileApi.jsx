import privateApiSlice from "../../../app/api/privateApiSlice"



const profileApi = privateApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAddresses: build.query({
      query: () => `address`,
      providesTags: ['User'],
      transformResponse: (response) => response.address,
    }),

    addAddresses: build.mutation({
      query: (formData) => ({
        url: "address/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ['User'],
    }),

    deleteAddress: build.mutation({
      query: (id) => ({
        url: `address/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['User'], // ✅ add this
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAddressesQuery,
  useAddAddressesMutation,
  useDeleteAddressMutation
} = profileApi;
