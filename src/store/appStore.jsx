import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { apiSlice } from "../app/api/apiSlice";
import authReducer  from './slices/authSlice'

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default appStore;
