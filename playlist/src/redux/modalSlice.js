import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems";

export const modalSlice = createSlice({
  name: "modal",
  reducers: {
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { clearCart } = modalSlice.actions;
export default cartSlice.reducer;
