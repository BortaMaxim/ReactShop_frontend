import * as ProductsTypes from '../types/ProductsTypes'

const initialState = {
    isLoadProducts: false,
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductsTypes.IS_LOAD_PRODUCTS:
            return {
                ...state,
                isLoadProducts: true
            }
        case ProductsTypes.IS_NOT_LOAD_PRODUCTS:
            return {
                ...state,
                isLoadProducts: false,
            }
        case ProductsTypes.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoadProducts: false,
                products: action.payload
            }
        default:
            return state
    }
}