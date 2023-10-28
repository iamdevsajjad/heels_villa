import React from 'react';

const Product = ({product}) => {
    console.log(product);
    return (
        <div className='fullCard border   '>
            <div className="imgContainer ">
                <img className='w-full ' src={product.pairImage} alt="" />
            </div>
            <div className="textContainer bg-black text-white py-4 px-2 flex justify-between">
                <div className="text">
                    <h5 className=''> {product.name} {product.color} </h5>
                    <h6 className='text-sm'>price : ${product.price}</h6>
                </div>
                <div className="button">
                    <button className='bg-white p-1 px-3'>C</button>
                </div>
            </div>
        </div>
    );
};

export default Product;