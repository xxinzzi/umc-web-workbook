import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems";

const initialState = {
  items: cartItems,
  totalAmount: cartItems.reduce((total, item) => total + item.amount, 0),
  totalPrice: cartItems.reduce(
    (total, item) => total + item.price * item.amount,
    0
  ),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount++;
        state.totalPrice += item.price;
      }
    },
    decrease(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount--;
          state.totalPrice -= item.price;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
          state.totalPrice -= item.price * item.amount;
        }
      }
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.price * item.amount;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    calculateTotals(state) {
      let totalAmount = 0;
      let totalPrice = 0;
      state.items.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.price * item.amount;
      });
      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
