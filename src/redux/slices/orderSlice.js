// redux/slices/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      console.log("Adding order:", action.payload); // Log the order being added
      state.history.push(action.payload); // Add the new order to history
    },
    clearOrders: (state) => {
      state.history = []; // Clear all orders
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
