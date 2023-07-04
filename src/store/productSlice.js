import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status : 'idle'
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //     state.data = action.payload;
    // }
  },
  extraReducers : (builder) => {
    builder
    .addCase(setProducts.pending, (state, action) => {
state.status = 'Loading';
    })
    .addCase(setProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
    })
    .addCase(setProducts.rejected, (state, action) => {
        state.status = 'error'
    })
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const setProducts = createAsyncThunk('products/get', async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
})

// export function setProducts() {
//     return async function setProductsThunk(dispatch, getState) {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
  
//       dispatch(fetchProducts(data));
//     };
//   }
  
