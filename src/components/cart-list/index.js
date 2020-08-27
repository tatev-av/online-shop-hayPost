import React from 'react';
import { useStore } from '../../store/store';
import CartItem from '../cart-item';
import './cart-list.css';
const CartList = () => {
    const {cart} = useStore()[0];
    let total = cart.reduce((total, current)=> total+ current.price * current.quantity, 0)
    total = total.toFixed(2)
    const VAT = (total *0.2).toFixed(2) 
    return (
        <table className = 'cart-list'>
            <thead>
                <tr>
                    <th> Product </th>
                    <th> Price </th>
                    <th> Quantity </th>
                </tr>
            </thead>
            <tbody>
                {cart.map(cartItem=>(
                    <CartItem key = {cartItem.id} data = {cartItem}/>
                ))}
                <tr className = 'table-result-row'>
                    <td colSpan = {2} > Price before VAT</td>
                    <td> &euro; {total} </td>
                </tr>
                <tr  className = 'table-result-row'>
                    <td  colSpan = {2}> VAT @ <span  className= 'vat-percent'>20</span> %</td>
                    <td> &euro; {VAT} </td>
                </tr>
                <tr  className = 'table-result-row' id = 'total-tr'>
                    <td colSpan = {2} > Total to be paid</td>
                    <td id = 'total'> &euro; {(+total + +VAT).toFixed(2)} </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartList