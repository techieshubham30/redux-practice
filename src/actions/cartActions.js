import { ADD_TO_CART,REMOVE_FROM_CART } from "./actionTypes/cartActionTypes";

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
    }

const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
    }

export {
    addToCart,
    removeFromCart
}