import { apiSlice } from "../../../app/api/apiSlice";



export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedProducts: builder.query({
      query: () => "nutrify/home/",
      providesTags: ["Products",'Nutrify'],
      refetchOnFocus: true,
    }),
    getSubCategories: builder.query({
      query: () => "nutrify/categories/top/",
      providesTags: ["Categories",'Nutrify'],
      refetchOnFocus: true,
    }),
  }),
});

export const {
  useGetFeaturedProductsQuery,
  useGetSubCategoriesQuery,
} = productApi;