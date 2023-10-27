import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=> {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    return (
        <div>
            <h1>All Products is here</h1>
            <div className="product">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    /> )
                }
            </div>
        </div>
    );
};

export default Products;