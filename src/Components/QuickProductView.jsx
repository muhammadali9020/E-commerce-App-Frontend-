import React, { useState } from "react";
const QuickProductView = (props) => {
  return (
    <>
      {props.isOpen && (
        <div
          tabIndex={2}
          onClick={() => props.setisOpen(false)}
          className="fixed  overflow-scroll  z-10 inset-0 flex justify-center items-center bg-black/40 p-12"
          onKeyDown={(e) => {
            if (e.key==="Escape") {
              props.setisOpen(false);
            }
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white  relative items-center  rounded-lg grid md:grid-cols-2 gap-4 p-4 "
          >
            <button
              onClick={() => props.setisOpen(false)}
              className="absolute  right-5 top-5  cursor-pointer text-lg font-bold"
            >
              x
            </button>
            <div className=" overflow-scroll">
              <img
                src={props.image}
                alt={props?.title + " product image"}
                width="500"
              />
            </div>
            <div>
              <h2 className="text-2xl my-2 font-bold">{props.title}</h2>
              <p>{props.description}</p>
              <div className="flex flex-wrap justify-between ">
                <div>
                  <p className="my-2 font-bold">
                    brand: <span className="text-blue-500"> {props.brand}</span>
                  </p>

                  <p className="my-2 font-bold">
                    Category:{" "}
                    <span className="text-blue-500"> {" beauty"}</span>
                  </p>
                  <p className="my-2 font-bold">
                    Warranty:{" "}
                    <span className="text-blue-500">
                      {" "}
                      {props.warrantyInformation}
                    </span>
                  </p>
                  <p className="my-2 font-bold">
                    Return:{" "}
                    <span className="text-blue-500"> {props.returnPolicy}</span>
                  </p>
                  <p className="my-4 font-bold">
                    Price: <span className="text-blue-500"> {props.price}</span>
                  </p>
                </div>
                <div>
                  <p className="my-2 font-bold">
                    Stock:{" "}
                    <span className="text-blue-500">
                      {" "}
                      {props.availabilityStatus} / {props.stock}
                    </span>
                  </p>

                  <p className="my-2 font-bold">
                    Discount:
                    <span className="text-blue-500"> {props.discount}%</span>
                  </p>
                  <p className="my-2 font-bold">
                    Weight:{" "}
                    <span className="text-blue-500"> {props.weight}</span>
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => dispatch(addToCart(props.productForCart))}
                  className="cursor-pointer mr-2 text-sm active:scale-95 bg-[#5f3dc6] transition-all duration-200 hover:bg-[#381897] py-2 p-4 rounded-md text-white"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => props.setisOpen(false)}
                  className="cursor-pointer text-sm active:scale-95 bg-[#f02c2c] transition-all duration-200 hover:bg-[#381897] py-2 p-4 rounded-md text-white"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickProductView;
