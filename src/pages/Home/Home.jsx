import React from 'react';
import Products from '../../components/Products/Products';
import Navbar from '../../shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Products/>
        </div>
    );
};

export default Home;