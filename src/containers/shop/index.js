import React from 'react';
import './shop.css';
import ProductList from '../../components/product-list';

const Shop = () => {
    return (
        <div className= 'shop-container'> 
            <h1 > The Shop</h1>
            <p className = 'shop-info' >
                Ahoy landman! Pick what you need for the big trip. 
                You gonna be out there some days, so better leave prepared. 
            </p>
            <p className ='VAT-info'> Please note: All prces are without VAT! </p>
            <ProductList/>
        </div>
    )
} 

export default Shop;
