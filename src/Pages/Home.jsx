import React, { useEffect } from "react";
import AsideFilter from "../Components/AsideFilter";
import ProductListeing from "../Components/ProductListeing";
import { fetchProducts } from "../RTK_Store/AsyncThunk/FetchProducts";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const selectProdcuts = useSelector((state) => state.productSlice);
  const selectFilters = useSelector((state) => state.FilterSlice);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const filtredProducts = selectProdcuts?.products?.products?.filter((item) => {
    const matchPrice = item.price > selectFilters.price;
    const matchCategory =
      selectFilters.category.length === 0 ||
      selectFilters.category.includes(item.category);
    const matchSearch = item.description
      .toLocaleLowerCase()
      .includes(selectFilters.searchText.toLocaleLowerCase());
    const matchRating = item.rating >= selectFilters.rating;
    return matchPrice && matchSearch && matchRating && matchCategory;
  });
  return (
    <div className="flex my-4 gap-4 accent-[#603ec9]">
      <AsideFilter />
      <div className=" w-full my-10 overflow-hidden">
        <div className="my-10 flex justify-between items-end">
          <div>
            <p className="font-bold">All Prodcuts</p>
            <p className="font-sm ">
              Total Products:{" "}
              <span className="font-bold">{selectProdcuts?.products?.products?.length}</span>
            </p>
                        <p className="font-sm ">
              Showing Products:{" "}
              <span className="font-bold">{filtredProducts?.length}</span>
            </p>
          </div>
        </div>
        {selectProdcuts?.isLoading || filtredProducts?.length == 0 ? (
          <p className="text-2xl font-semibold text-center">
            {filtredProducts?.length == 0 ? "Product Not Found!" : "Loading..."}
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
            {filtredProducts?.map((item) => (
              <ProductListeing
                key={item.id}
                productForCart={item}
                stock={item.stock}
                productRating={item.rating}
                discount={item.discountPercentage}
                brand={item.brand}
                productId={item.id}
                image={item.thumbnail}
                price={item.price}
                title={item.title}
                description={item.description}
                warrantyInformation={item.warrantyInformation}
                returnPolicy={item.returnPolicy}
                availabilityStatus={item.availabilityStatus}
                discountPercentage={item.discountPercentage}
                weight={item.weight}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
