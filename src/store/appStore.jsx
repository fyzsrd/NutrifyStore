import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { apiSlice } from "../app/api/apiSlice";
import authReducer  from './slices/authSlice'
import privateApiSlice from "../app/api/privateApiSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [privateApiSlice.reducerPath]:privateApiSlice.reducer,
    auth:authReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      privateApiSlice.middleware
    ),
});

export default appStore;
