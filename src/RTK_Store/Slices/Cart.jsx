import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, product) => {
      const productWithQuantity = { ...product.payload, quantity: 1 };
      if (
        state.cart.filter((item) => item.id == productWithQuantity.id)
          .length !== 0
      ) {
        const productFind = state.cart.find(
          (item) => item.id === productWithQuantity.id,
        );
        productFind.quantity += 1;
        toast.success("quantity increased !");
      } else {
        state.cart.push(productWithQuantity);
        toast.success("item added to cart !");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQty: (state, productId) => {
      const productFind = state.cart.find(
        (item) => item.id === productId.payload,
      );
      if (productFind.minimumOrderQuantity !== productFind.quantity) {
        productFind.quantity += 1;
        toast.success("quantity increased !");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQty: (state, productId) => {
      const productFind = state.cart.find(
        (item) => item.id === productId.payload,
      );
      if (productFind.quantity > 1) {
        productFind.quantity -= 1;
        toast.success("quantity decreased !");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, productId) => {
      state.cart = state.cart.filter((val) => val.id !== productId.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.success("item removed from cart !");
    },
        emptyCart: (state) => {
      state.cart = []
      localStorage.clear();
    },
  },
});
export default CartSlice.reducer;
export const { addToCart,emptyCart, decrementQty, incrementQty, removeFromCart } =
  CartSlice.actions;
