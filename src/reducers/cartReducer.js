import { ADD_TO_CART,REMOVE_FROM_CART } from "../actions/actionTypes/cartActionTypes"

const initialState = {
    cartProducts : []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.cartProducts.find(product => product.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                cartProducts : [...state.cartProducts,action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartProducts : state.cartProducts.filter(product => product.id !== action.payload)
            }
        default:
            return state
    }
}

export {cartReducer}