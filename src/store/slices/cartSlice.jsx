import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: storedCart },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // { _id, name, price, image, quantity }
      const existing = state.items.find((i) => i._id === item._id);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push({ ...item });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    updateQty: (state, action) => {
      const { _id, qty } = action.payload;
      const item = state.items.find((i) => i._id === _id);
      if (item) item.quantity = qty;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
