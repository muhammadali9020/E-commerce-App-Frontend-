import { useRef, useState } from "react";
import starImg from "../Assets/icons/star-s-line.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../RTK_Store/Slices/Cart";
import { Link } from "react-router";
import QuickProductView from "./QuickProductView";

const ProductListeing = (props) => {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <QuickProductView
        key={props.id}
        stock={props.stock}
        discount={props.discountPercentage}
        brand={props.brand}
        weight={props.weight}
        productId={props.id}
        image={props.thumbnail}
        price={props.price}
        productRating={props.rating}
        title={props.title}
        availabilityStatus={props.availabilityStatus}
        returnPolicy={props.returnPolicy}
        warrantyInformation={props.warrantyInformation}
        description={props.description}
        setisOpen={setisOpen}
        isOpen={isOpen}
      />
      <div className=" transition-all hover:-translate-y-5 shadow-2xl  duration-200  hover:scale-102   p-4 rounded-md  ">
        <div className="">
          <img
            src={props.image}
            loading="lazy"
            alt={props?.title + " product image"}
          />
          <button
            onClick={() => setisOpen(true)}
            className="cursor-pointer relative opacity-100  duration-200  top-2  text-sm bg-[#5f3dc6] w-full transition-all  hover:bg-[#4927ae] py-2 p-4 rounded-md text-white"
          >
            Quick View
          </button>
        </div>
        <div className="my-4  ">
          <p className="font-bold text-l">{props?.title}</p>
          <div className="flex justify-between">
            <p className="text-blue-500 font-bold">
              {props?.price} ${" "}
              <span className="text-[red] text-[13px]">
                {props.discount}% off
              </span>
            </p>
            <p className="text-blue-500 font-bold">{props.stock}:Stock</p>
          </div>
          <div>
            <p>
              Brand:{" "}
              <span className="font-bold text-blue-500">
                {props.brand || "no"}
              </span>
            </p>

            <p className="flex items-center">
              <span className="text-blue-500 font-bold">
                {props.productRating}
              </span>
              <img width={30} src={starImg} loading="lazy" />
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(addToCart(props.productForCart))}
            className="cursor-pointer text-sm active:scale-95 bg-[#5f3dc6] transition-all duration-200 hover:bg-[#381897] py-2 p-4 rounded-md text-white"
          >
            Add To Cart
          </button>
          <Link to={`/product/${props.productId}`}>
            <button className="cursor-pointer text-sm active:scale-95 bg-[#5f3dc6] transition-all duration-200 hover:bg-[#381897] py-2 p-4 rounded-md text-white">
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductListeing;
