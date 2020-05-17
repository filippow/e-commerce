import {CartActionTypes} from './actionTypes';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const clearItemsFromCart = item => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}