import * as CheckoutTypes from '../types/CheckoutTypes'

let initialState = {
    isChecking: false,
    checkoutSuccess: {},
    checkoutError: {}
}

export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CheckoutTypes.IS_CHECKING_OUT:
            return {
                ...state,
                isChecking: true
            }
        case CheckoutTypes.GET_CLIENT_SECRET_SUCCESS:
            return {
                ...state,
            }
        case CheckoutTypes.GET_CLIENT_SECRET_ERROR:
            return {
                ...state,
            }
        case CheckoutTypes.CONFIRM_CHECKOUT_SUCCESS:
            return {
                ...state,
                isChecking: false,
                checkoutSuccess: action.payload
            }
        case CheckoutTypes.CONFIRM_CHECKOUT_ERROR:
            return {
                ...state,
                isChecking: false,
                checkoutError: action.error
            }
        default:
            return state
    }
}