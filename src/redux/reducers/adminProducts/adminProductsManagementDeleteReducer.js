import * as AdminProductsTypes from '../../types/AdminProductsTypes'

let initialState = {
    deleteSuccess: {},
    deleteError: {},
    isHide: null
}

export const adminProductsManagementDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminProductsTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                isHide: false,
                deleteSuccess: action.payload
            }
        case AdminProductsTypes.DELETE_PRODUCT_ERROR:
            return {
                ...state,
                isHide: false,
                deleteError: action.payload
            }
        case AdminProductsTypes.IS_HIDE_NOTIFICATION:
            return {
                ...state,
                isHide: true
            }
        default:
            return state
    }
}