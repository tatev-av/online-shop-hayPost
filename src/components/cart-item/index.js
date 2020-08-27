import React, { useCallback } from 'react';
import {useStore} from '../../store/store';
import {CHANGE_QUANTITY, REMOVE_ITEM} from '../../store/actions';
import './cart-item.css';

const CartItem = (props) => {
    
    const {name, description, id, price, quantity} = props.data;
    const dispatch = useStore()[1];

    const changeQuantity = (value, isAdding = true) => {
        dispatch(CHANGE_QUANTITY, {id, value, isAdding})
    }

    const removeItem =useCallback(() => {
        dispatch(REMOVE_ITEM, id)
    }, [id]) 

    return (
        <tr className = 'cart-item'> 
            <td> 
                <div className= 'cart-item-name'>{name}</div>
                <div>{description}</div>
                <button className = 'remove-button' onClick = {removeItem}> Remove </button>
            </td>   
            <td valign = 'top' className= 'cart-item-price'> &euro;{price} </td>  
            <td className = 'cart-item-quantity'> 
                <input type = 'number' min = {1} value = {quantity} onChange = {(e)=>changeQuantity(+e.target.value, false)} /> 
                <button className = 'blue-button' onClick = {()=>changeQuantity(1)}> + </button>
                <button className = 'blue-button' disabled = {quantity <= 1} onClick = {()=>changeQuantity(-1)}> - </button>
            </td>
        </tr>
    )
}

export default CartItem;
