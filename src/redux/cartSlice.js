import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalAmount += newItem.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount -= itemToRemove.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
