import * as ProductsTypes from '../types/ProductsTypes'

const initialState = {
    isLoadProducts: false,
    products: [],
    product: ''
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
        case ProductsTypes.GET_ONE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoadProducts: false,
                product: action.payload.data
            }
        case ProductsTypes.GET_ONE_PRODUCT_ERROR:
            debugger
            return {
                ...state,
                isLoadProducts: false,
                product: action.error
            }
        default:
            return state
    }
}