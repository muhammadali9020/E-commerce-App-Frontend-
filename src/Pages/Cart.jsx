import React from "react";
import CartProdcutListening from "../Components/CartProdcutListening";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import SubTotal from "../Components/SubTotal";
const Cart = () => {
  const CartSelector = useSelector((state) => state.CartSlice);
  return (
    <div className=" m-8">
      <p className="text-2xl font-bold">Shopping Cart</p>
      <div>
        <div className="my-6 text-sm">
          {CartSelector?.cart?.length ? (
            <div className="flex md:flex-nowrap  flex-wrap justify-between">
              <div>
                <table className="border px-6 py-1  border-collapse border-black">
                  <thead className="border    px-6 py-1 border-collapse border-black">
                    <tr>
                      <th className="border font-normal    px-6 py-1 border-collapse border-black">
                        Product
                      </th>
                      <th className="border font-normal    px-6 py-1 border-collapse border-black">
                        Price
                      </th>
                      <th className="border font-normal    px-6 py-1 border-collapse border-black">
                        Quantity
                      </th>
                      <th className="border font-normal    px-6 py-1 border-collapse border-black">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border px-6 py-1 border-collapse border-black">
                    {CartSelector?.cart?.map((item) => (
                      <CartProdcutListening
                        key={item.id}
                        quantity={item.quantity}
                        productId={item.id}
                        image={item.thumbnail}
                        price={item.price}
                        title={item.title}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              <SubTotal />
            </div>
          ) : (
            <div className="flex flex-col gap-4 my-20 items-center">
              <p className="text-2xl font-bold">Cart is Empty</p>
              <Link to={"/"}>
                <button className="cursor-pointer   duration-200  text-sm bg-[#5f3dc6] transition-all hover:bg-[#4927ae] py-2 p-4 rounded-md text-white">
                  Go to Shop
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
