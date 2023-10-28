import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product, handleAddToCart }) => {
  const [flipImage, setFlipImage] = useState(false);
  const { name, pairImage, color, price, sideImage } = product;
  return (
    <div
      className="fullCard border-2 border-black hover:-translate-y-1 hover:shadow-xl transition-all"
      onMouseEnter={() => {
        setFlipImage(true);
      }}
      onMouseLeave={() => {
        setFlipImage(false);
      }}
    >
      <div className="imgContainer ">
        <img
          className="w-full transition-all "
          src={flipImage ? sideImage : pairImage}
          alt=""
        />
      </div>
      <div className="textContainer bg-black text-white py-4 px-2 flex justify-between">
        <div className="text font-mono">
          <h5 className="">
            {" "}
            {name} {color}{" "}
          </h5>
          <h6 className="text-sm">price : ${price}</h6>
        </div>
        <div className="button">
          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            className="bg-white text-black p-2 "
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
