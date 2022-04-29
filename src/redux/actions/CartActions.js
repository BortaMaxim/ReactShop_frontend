import * as CartTypes from '../types/CartTypes'

export const AddToCartAction = (payload) => (dispatch) => {
    dispatch({
        type: CartTypes.ADD_TO_CART,
        payload
    })
}

export const AddQuantityCartAction = (payload) => (dispatch) => {
    dispatch({
        type:CartTypes.ADD_QUANTITY,
        payload
    })
}

export const SubQuantity = (payload) => (dispatch) => {
    dispatch({
        type: CartTypes.SUB_QUANTITY,
        payload
    })
}

export const EmptyCartAction = (payload) => (dispatch) => {
    dispatch({
        type: CartTypes.EMPTY_CART,
        payload
    })
}