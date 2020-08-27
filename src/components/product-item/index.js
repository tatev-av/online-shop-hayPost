import React, {useMemo, useCallback} from 'react';
import './product-item.css';
import {useStore} from '../../store/store';
import {ADD_TO_CART } from '../../store/actions';

const ProductItem = (props) => {

    const {name, description, price} = props.product;
    
    const dispatch = useStore()[1];
    const addToCart = useCallback(()=>{
        dispatch(ADD_TO_CART, props.product)
    }, [props.product]) 

    return useMemo(()=>{
        return (
            <div className = 'product-item'>
            <div className = 'product-name'> {name}</div>
            <div className = 'product-item-description'> {description} </div>
            <div className= 'product-item-footer'>
                <button className = 'add-to-cart' onClick= {addToCart}> Add to cart</button>
                <div className = 'price'> 	&euro; {price} </div>
            </div>
        </div>
        )
    }, [name, description, price, addToCart]) 
}

export default ProductItem