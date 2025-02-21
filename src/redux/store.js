import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productsReducer,
    cart: cartReducer,
  }, 
});
