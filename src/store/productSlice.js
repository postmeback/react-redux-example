import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

export const setProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      const { id } = action.payload;
      const product = state.data.find((item) => item.id === id);
      if (product) {
        product.count += 1;
      }
    },
    decreaseCount: (state, action) => {
      const { id } = action.payload;
      const product = state.data.find((item) => item.id === id);
      if (product && product.count > 0) {
        product.count -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(setProducts.fulfilled, (state, action) => {
        state.data = action.payload.map((product) => ({
          ...product,
          count: 0,
        }));
        state.status = "idle";
      })
      .addCase(setProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { increaseCount, decreaseCount } = productSlice.actions;
export default productSlice.reducer;
