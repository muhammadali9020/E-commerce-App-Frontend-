import React, { useRef, useState } from "react";
import starIcon from "../Assets/icons/star-s-line.svg";
import hamburgericon from "../Assets/icons/grip_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrice,
  searchText,
  setCategory,
  setRating,
  removeCategory,
  resetFilters,
} from "../RTK_Store/Slices/Filter";
import FilterCheckBoxListeing from "./FilterCheckBoxListening";
const AsideFilter = () => {
  const setFilters = useSelector((state) => state.FilterSlice);
  const dispatch = useDispatch();
  const aside = useRef(null);
  function handleAsideWidthToggle() {
    aside.current.classList.toggle("w-0");
  }
  const productSlice = useSelector(
    (state) => state.productSlice.products.products,
  );
  const CategoryName = [...new Set(productSlice?.map((item) => item.category))];
  return (
    <aside>
      <img
        onClick={handleAsideWidthToggle}
        className="cursor-pointer sm:hidden block mt-5 transition-all duration-200"
        width={30}
        src={hamburgericon}
        alt="hamburger icon"
      />
      <div
        ref={aside}
        className="sm:w-60 w-0  transition-all duration-200  py-6 mx-2 overflow-hidden"
      >
        <p className="font-bold my-5">Filter By</p>
        <div>
          <ul className="h-80 overflow-scroll">
            {CategoryName?.map((item) => (
              <FilterCheckBoxListeing key={item} categoryName={item} />
            ))}
          </ul>
          <div>
            <p className="font-bold my-5">Price Range</p>
            <div className="flex gap-2 flex-col">
              <input
                value={setFilters.price}
                onChange={(e) => dispatch(setPrice(e.target.value))}
                min={0}
                max={1000}
                type="range"
              />
              <div className="flex justify-between">
                <span>{setFilters.price}$</span>
                <span>1000$</span>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold my-5">Rating</p>
            <div>
              <div
                onClick={() => dispatch(setRating(1))}
                className="flex items-center cursor-pointer"
              >
                <p className="font-bold">1:</p>
                <img width={30} src={starIcon} alt="rating star icon" />
              </div>
              <div
                onClick={() => dispatch(setRating(2))}
                className="flex items-center cursor-pointer"
              >
                <p className="font-bold">2:</p>
                <div className="flex items-center">
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                </div>
              </div>
              <div
                onClick={() => dispatch(setRating(3))}
                className="flex items-center cursor-pointer"
              >
                <p className="font-bold">3:</p>
                <div className="flex items-center">
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                </div>
              </div>
              <div
                onClick={() => dispatch(setRating(4))}
                className="flex items-center cursor-pointer"
              >
                <p className="font-bold">4:</p>
                <div className="flex items-center cursor-pointer">
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                </div>
              </div>
              <div
                onClick={() => dispatch(setRating(4.5 - 0))}
                className="flex items-center cursor-pointer"
              >
                <p className="font-bold">4.5:</p>
                <div className="flex items-center">
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                  <img width={30} src={starIcon} alt="rating star icon" />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => dispatch(resetFilters())}
            className="cursor-pointer my-5 text-sm active:scale-95 bg-[#5f3dc6] transition-all duration-200 hover:bg-[#381897] py-2 p-4 rounded-md text-white"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AsideFilter;
