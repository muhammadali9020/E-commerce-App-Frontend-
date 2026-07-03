import { createSlice } from "@reduxjs/toolkit";
// ["beauty","fragrances","furniture","groceries","home-decoration","kitchen-accessories","laptops","mens-shirts","mens-shoes","mens-watches","mobile-accessories","motorcycle","skin-care","smartphones","sports-accessories","sunglasses","tablets","tops","vehicle","womens-bags","womens-dresses","womens-jewellery","womens-shoes","womens-watches"]
const initialState = {
  searchText: "",
  category: [],
  rating: 0,
  price: 0,
};
const FilterSlice = createSlice({
  name: "FilterSlice",
  initialState,
  reducers: {
    searchText: (state, text) => {
      state.searchText = text.payload;
      console.log(text.payload);
    },
    setCategory: (state, category) => {
      state.category.push(category.payload);
    },
    removeCategory: (state, category) => {
      state.category = state.category.filter((e) => e !== category.payload);
    },
    setPrice: (state, price) => {
      state.price = price.payload;
    },
    setRating: (state, rating) => {
      state.rating = rating.payload;
    },
    resetFilters: (state) => {
      state.searchText = "" 
      state.category = []
      state.rating = 0;
      state.price = 0;
    },
  },
});
export default FilterSlice.reducer;
export const {resetFilters, removeCategory, searchText, setCategory, setPrice, setRating } =
  FilterSlice.actions;
