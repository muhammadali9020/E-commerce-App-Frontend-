import Decimal from "decimal.js";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../RTK_Store/Slices/Cart";
import { toast } from "react-toastify";
const SubTotal = () => {
  const CartSelector = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const TotalPriceOfCart = CartSelector?.cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div className="md:w-70 w-full h-full p-4 shadow-2xl ">
      <p className="font-bold mb-5 text-lg">Order Summary</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p>SubTotal</p>
          <p className="font-bold">
            {new Decimal(TotalPriceOfCart).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p>Discount</p>
          <p className="font-bold text-[green]">5$ </p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping</p>
          <p className="font-bold">10$</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Total</p>
          <p className="font-bold">
            {CartSelector.cart.length
              ? new Decimal(TotalPriceOfCart).plus(15).toFixed(2)
              : 0}
            $
          </p>
        </div>
        <button
          onClick={() => {
            dispatch(emptyCart());
            toast.success("order deliver soon as possible!");
          }}
          className="cursor-pointer text-sm active:scale-95 bg-[#5f3dc6] transition-all duration-200 hover:bg-[#381897] py-2 p-4 rounded-md text-white"
        >
          Proceed To Checkout
        </button>
        <button
          onClick={() => {
            dispatch(emptyCart());
            toast.success("cart is empty");
          }}
          className="cursor-pointer text-sm active:scale-95 bg-[#f02c2c] transition-all duration-200 hover:bg-[#381897] py-2 p-4 rounded-md text-white"
        >
          Clear All Cart
        </button>
      </div>
    </div>
  );
};

export default SubTotal;
