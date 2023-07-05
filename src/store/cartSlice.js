import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    remove(state, action) {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
    decreaseCountInCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1 && state[itemIndex].count > 0) {
        state[itemIndex].count -= 1;
      }
      else{
        state.filter((item) => item.id !== id);
      }  
    },
    increaseCountInCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].count += 1;
      }
    },
  },
});

export const { add, remove, decreaseCountInCart, increaseCountInCart } = cartSlice.actions;
export default cartSlice.reducer;
