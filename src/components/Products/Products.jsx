import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "../../App.css";
import Product from "../Product/Product";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [offer, setOffer] = useState(false)
  const [items, setItems] = useState([]);
  const [freeProducts, setFreeProducts] = useState({});
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (props) => {
    const newCart = [...items, props];
    setItems(newCart);
  };

  useEffect(() => {
    if(items.length > 0 ){
      setOffer(true);
    }
  },[items])
  




  const handleOfferButton = () => {
    const randomNumber = Math.floor(Math.random() * products.length + 1);
    const item = products[randomNumber];
    setFreeProducts(item);
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
            <div className="singleCart mt-10">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border-2 border-black flex justify-between px-3 mb-2"
                >
                  <img className="w-1/3" src={item.sideImage} alt="" />
                  <div className="texts text-xs my-auto ">
                    <p>
                      {item.name} {item.color}
                    </p>
                    <p>Price : ${item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              disabled={!offer}
              onClick={handleOfferButton}
              className={offer ? 'bg-black hover:bg-slate-800 transition-all text-white text-xl w-full py-1 my-5': "bg-slate-200  transition-all text-white text-xl w-full py-1 my-5"}
            >
              Get one for me
            </button>

            {Object.keys(freeProducts).length > 0 && (
              <div className="border-2 border-black flex justify-between px-3 mb-2">
                <img className="w-1/3" src={freeProducts.sideImage} alt="" />
                <div className="texts text-xs my-auto ">
                  <p>
                    {freeProducts.name} {freeProducts.color}
                  </p>
                  <p>Price : ${freeProducts.price}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
