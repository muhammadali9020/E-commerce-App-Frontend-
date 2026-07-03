import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetailes from "./Pages/ProductDetailes";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetailes />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
export default App;
