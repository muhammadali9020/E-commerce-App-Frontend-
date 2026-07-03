import React, { useState } from "react";
import cartIcon from "../Assets/icons/shopping-cart-2-line.svg";
import searchIcon from "../Assets/icons/search-line.svg";
import { Link, useLocation, useNavigate } from "react-router";
import { searchText } from "../RTK_Store/Slices/Filter";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const urlPath = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div className="text-2xl font-bold">
        {" "}
        <Link to={"/"}>
          Store<span className="text-[#5f3dc6]">.jsx</span>
        </Link>
      </div>
      <div className="flex items-center gap-5 ">
        <form
          className=" sm:static right-0 absolute  top-12"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(searchText(search));
            if (urlPath !== "/") {
              navigate("/");
            }
          }}
        >
          <div className="flex px-1.5 border   outline-[#ffffff2f] rounded-lg bg-[#f9fafc8e]">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (!e.target.value) {
                  dispatch(searchText(""));
                }
              }}
              className="p-1.5 w-full outline-none  rounded-md placeholder:text-[#777676] bg-[#f9fafcd8]"
              type="search"
              placeholder="Search for products"
            />
            <button className="cursor-pointer">
              <img className="w-5" src={searchIcon} alt="search icon" />
            </button>
          </div>
        </form>

        <Link to={"/cart"} className="flex gap-1 cursor-pointer items-center">
          <img className="w-6" src={cartIcon} alt="cart icon" />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
