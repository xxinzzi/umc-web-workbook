import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItems = createAsyncThunk(
  "cartSlice/fetchCartItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/musics");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response ? error.response.data : "Network Error");
    }
  }
);

const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  isLoading: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload; // Update the items array with the fetched data
        // Calculate totals after fetching the items
        state.totalAmount = 0;
        state.totalPrice = 0;
        state.items.forEach((item) => {
          state.totalAmount += item.amount;
          state.totalPrice += item.price * item.amount;
        });
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload.message);
      });
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
