import { initStore } from './store'
import { ADD_TO_CART, CHANGE_QUANTITY, REMOVE_ITEM, EMPTY_SHOPPING_CART } from './actions'

const configureStore = ()=>{
    const actions = {
        [ADD_TO_CART] : (state, payload)=>{
            const alreadyExists = state.cart.findIndex(item=> item.id === payload.id);
            const increaseQuantity = ()=>{
                const updatedCart = [...state.cart]
                const newQuantity = state.cart[alreadyExists].quantity + 1
                updatedCart[alreadyExists].quantity = newQuantity
                return{
                    cart: updatedCart
                }
            }

            if(alreadyExists > -1){
                increaseQuantity()
            } else{
                return {
                    cart: [ ...state.cart, {...payload, quantity: 1} ]
                }
            }
        },
        [CHANGE_QUANTITY] : (state, payload)=>{
            const {id, value, isAdding} = payload;
            const index = state.cart.findIndex(item=> item.id === id);
            if(index > -1) {
                const updatedCart = [...state.cart]
                const newQuantity = isAdding ? state.cart[index].quantity + value : value
                updatedCart[index].quantity = newQuantity 
                return{
                    cart: updatedCart
                }
            }
        }, 
        [REMOVE_ITEM] : (state, payload) => {
            return{
                cart : state.cart.filter(item=> item.id !== payload )
            }
        },
        [EMPTY_SHOPPING_CART] :()=> {
            return{
                cart:[]
            }
        }
    }
    initStore(actions, {
        cart:[]
    })
}

export default configureStore