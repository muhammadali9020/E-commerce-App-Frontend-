import React from "react";
import starIcon from "../Assets/icons/star-s-line.svg";
const ProductReviewsListening = (props) => {
  return (
    <div className=" transition-all hover:-translate-y-5 shadow-2xl  duration-200  hover:scale-102   p-6  rounded-2xl ">
      <p className="font-bold">{props.reviewerName}</p>
      <p className="my-2">{props.comment}</p>
      <div className="flex gap-2 my-3  items-center">
        <p className="font-bold">{props.rating}</p>
        <div className="flex items-center">
          <img width={30} src={starIcon} alt="rating star icon" />
          <img width={30} src={starIcon} alt="rating star icon" />
          <img width={30} src={starIcon} alt="rating star icon" />
          <img width={30} src={starIcon} alt="rating star icon" />
          <img width={30} src={starIcon} alt="rating star icon" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <p>{props.reviewerEmail.slice(0, 20)}....</p>
        <p>{props.date.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default ProductReviewsListening;
