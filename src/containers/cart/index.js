import React from 'react';
import {useStore} from '../../store/store';
import './cart.css';
import CartList from '../../components/cart-list';
import CartOptions from '../../components/cart-options';
const Cart = () => {
    const {cart} = useStore()[0];
    return cart && cart.length ? (
        <div className = 'cart-container'> 
            <h1> Your boat's shopping cart </h1>
            <CartList/>
            <CartOptions/>
        </div>
    ) : null
};

export default Cart;