import * as AdminProductsTypes from '../../types/AdminProductsTypes'

let initialState = {
    loading: false,
    products: [],
    product: {},
    errorResponseMessage: {}
}

export const adminProductsManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminProductsTypes.IS_LOAD_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case AdminProductsTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case AdminProductsTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                errorResponseMessage: action.error
            }
        case AdminProductsTypes.FETCH_ONE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case AdminProductsTypes.IS_HIDE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => {
                    return product.id !== action.payload
                })
            }
        default:
            return state
    }
}