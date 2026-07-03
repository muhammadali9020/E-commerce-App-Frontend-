import { useEffect, useState } from "react";
import starIcon from "../Assets/icons/star-s-line.svg";
import { addToCart } from "../RTK_Store/Slices/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK_Store/AsyncThunk/FetchProducts";
import ProductReviewsListening from "../Components/ProductReviewsListening";
import { useNavigate, useParams } from "react-router";

const ProductDetailes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productId = Number(id);

  const selectProduct = useSelector((state) => state.productSlice);

  const products = selectProduct?.products?.products || [];

  const product = products.find((item) => item.id === productId);

  const [productViewImage, setProductViewImage] = useState("");

  useEffect(() => {
    if (product) {
      setProductViewImage(product.thumbnail);
    }
  }, [product]);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold">Product Not Found!</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center flex-col text-center mt-20">
        <div className="flex items-center flex-col">
        {

         productViewImage&& <img
            width={400}
            src={productViewImage}
            alt={product.title}
          />
        }

          <div className="flex items-center gap-2">
            {product.images.map((item, index) => (
              <img
                key={index}
                onClick={() => setProductViewImage(item)}
                width={100}
                className="border border-blue-500 cursor-pointer"
                src={item}
                alt={product.title}
              />
            ))}
          </div>
        </div>

        <div className="max-w-md">
          <h1 className="text-2xl my-3 font-bold">
            {product.title}
          </h1>

          <p>{product.description}</p>

          <div className="flex gap-2 my-3 items-center">
            <p className="font-bold">{product.rating}</p>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  width={30}
                  src={starIcon}
                  alt="star"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>
              Brand:
              <span className="text-blue-600 font-bold">
                {" "}
                {product.brand || "No Brand"}
              </span>
            </p>

            <p>
              Warranty:
              <span className="text-blue-600 font-bold">
                {" "}
                {product.warrantyInformation}
              </span>
            </p>

            <p>
              Shipping:
              <span className="text-blue-600 font-bold">
                {" "}
                {product.shippingInformation}
              </span>
            </p>

            <p>
              Stock:
              <span className="text-blue-600 font-bold">
                {" "}
                {product.stock}/{product.availabilityStatus}
              </span>
            </p>

            <p className="font-bold">
              Price:
              <span className="text-blue-600">
                {" "}
                ${product.price}
              </span>

              <span className="text-red-600 text-sm">
                {" "}
                {product.discountPercentage}% Off
              </span>
            </p>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mr-2 cursor-pointer text-sm active:scale-95 bg-[#5f3dc6] my-3 hover:bg-[#381897] py-2 px-4 rounded-md text-white"
          >
            Add To Cart
          </button>

          <button
            onClick={() => navigate("/")}
            className="cursor-pointer text-sm active:scale-95 bg-[#5f3dc6] my-3 hover:bg-[#381897] py-2 px-4 rounded-md text-white"
          >
            Go Back
          </button>
        </div>
      </div>

      <div className="my-10">
        <div className="flex flex-col gap-2">
          <p>
            Return Policy:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.returnPolicy}
            </span>
          </p>

          <p>
            Minimum Order Quantity:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.minimumOrderQuantity}
            </span>
          </p>

          <p>
            Product Created:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.meta?.createdAt}
            </span>
          </p>

          <p>
            Product Updated:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.meta?.updatedAt}
            </span>
          </p>

          <p>
            Weight:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.weight}
            </span>
          </p>

          <p>
            Width:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.dimensions?.width}
            </span>
          </p>

          <p>
            Height:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.dimensions?.height}
            </span>
          </p>

          <p>
            Depth:
            <span className="text-blue-600 font-bold">
              {" "}
              {product.dimensions?.depth}
            </span>
          </p>
        </div>
      </div>

      <div>
        <p className="my-3 font-bold text-2xl">Ratings</p>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {product.reviews?.map((item, index) => (
            <ProductReviewsListening
              key={index}
              rating={item.rating}
              comment={item.comment}
              date={item.date}
              reviewerName={item.reviewerName}
              reviewerEmail={item.reviewerEmail}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetailes;