import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./AsyncThunk/FetchProducts";
import CartSlice from "./Slices/Cart";
import FilterSlice from "./Slices/Filter";
const RTK_STORE = configureStore({
  reducer: {
    productSlice,
    CartSlice,
    FilterSlice,
  },
});
export default RTK_STORE;
