// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
const validStoredCart =Array.isArray(storedCart) ? storedCart : []

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: validStoredCart },
  reducers: {
    addGuestItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i._id === item._id);
      if (existing) existing.quantity += item.quantity;
      else state.items.push(item);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeGuestItem: (state, action) => {
      state.items = state.items.filter((i) => i._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateGuestQty: (state, action) => {
      const { _id, qty } = action.payload;
      const item = state.items.find((i) => i._id === _id);
      if (item) item.quantity = qty;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearGuestCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addGuestItem, removeGuestItem, updateGuestQty, clearGuestCart } = cartSlice.actions;
export default cartSlice.reducer;
