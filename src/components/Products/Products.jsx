import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "../../App.css";
import Product from "../Product/Product";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (props) => {
    console.log(props);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center my-3 font-semibold text-2xl font-mono">
        All Products is here
      </h1>
      <div className="allProducts flex">
        <div className="products grid grid-cols-4 gap-5">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="order_summery grid grid-cols-1 w-1/2 border-2 border-black mx-4">
          <div className="orderSummery p-3">
            <div className="orderText flex justify-between">
              <h1 className="text-xl font-mono">Order summery</h1>
              <button className="bg-black rounded-sm text-white p-1">
                <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
