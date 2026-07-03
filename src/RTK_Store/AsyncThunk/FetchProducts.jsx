import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (not, { rejectWithValue }) => {
    try {
      const request = await axios.get("../../All_products.json");
      return request.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
);
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};
const productSlice = createSlice({
  name: "ProductSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, fetchProductData) => {
      state.products = fetchProductData.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, fetchProductData) => {
      ((state.isLoading = false), (state.error = fetchProductData.payload));
    });
  },
});
export default productSlice.reducer;
