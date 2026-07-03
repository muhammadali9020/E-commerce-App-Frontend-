import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../RTK_Store/Slices/Cart";
import Decimal from "decimal.js";

const CartProdcutListening = (props) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="border  px-6 py-1 border-collapse border-black">
        <div className="flex items-center md:flex-rows flex-col  ">
          <img
            width={60}
            src={props.image}
            alt={props?.title + " product image"}
          />
          <p className="font-bold">{props?.title.slice(0, 20)}... </p>
        </div>
      </td>
      <td className="border font-bold    px-6 py-1 border-collapse border-black">
        {props?.price} $
      </td>
      <td className="border    px-6 py-1 border-collapse border-black">
        <div className="flex   items-center justify-center gap-3">
          <button
            onClick={() => dispatch(incrementQty(props.productId))}
            className="p-1 font-bold cursor-pointer"
          >
            +
          </button>
          <p>{props.quantity}</p>
          <button
            onClick={() => dispatch(decrementQty(props.productId))}
            className="p-1 font-bold cursor-pointer text-xl"
          >
            -
          </button>
        </div>
      </td>
      <td className=" border  font-bold    px-6 py-1 border-collapse border-black">
        <div className="flex items-center gap-2">
          <p>{new Decimal(props?.price).mul(props.quantity).toFixed(2)} $</p>
          <button
            onClick={() => {
              dispatch(removeFromCart(props.productId));
            }}
            className="cursor-pointer text-xl font-bold text-red-600"
          >
            x
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartProdcutListening;
