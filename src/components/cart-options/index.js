import React, { useState, useCallback } from 'react';
import './cart-options.css';
import { useStore } from "../../store/store";
import { EMPTY_SHOPPING_CART } from '../../store/actions';

const CartOptions  = () => {
    const [clicked, click]  = useState(false)
    const dispatch = useStore()[1]

    const emptyCart = useCallback( () => {
        dispatch(EMPTY_SHOPPING_CART)
    }, [])

    const sendRequest = () => {
        if(!clicked){
            click(true)
        } 
    }

    return (
        <div className = 'cart-options'>
            <button className = 'blue-button big removeAll' onClick = {emptyCart} > Empty Shopping Cart </button>
            <button className = 'blue-button big checkout' onClick  = {sendRequest}> {clicked ? 'Sending Your Request...' : 'Proceed to Checkout'}  </button>
        </div>
    )
}

export default CartOptions;