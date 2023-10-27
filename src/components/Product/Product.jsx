import React from 'react';

const Product = ({product}) => {
    console.log(product);
    return (
        <div>
            {product.name}
        </div>
    );
};

export default Product;