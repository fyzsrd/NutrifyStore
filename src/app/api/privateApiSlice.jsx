import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const privateApiSlice = createApi({
  reducerPath: "privateApi", 
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DATABASE_API_URL}/api/user/`,
    credentials: "include", 
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Address", "Orders"],
  endpoints: () => ({}),
});

export default privateApiSlice;
