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

      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        return state.filter((item) => item.id !== id);
      } else {
        existingItem.count -= 1;
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
