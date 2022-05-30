import * as AdminProductsTypes from '../../types/AdminProductsTypes'

let initialState = {
    isHide: null,
    isUpdating: false,
    updatedSuccess: {},
    updatedError: {},
}

export const adminProductsManagementEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminProductsTypes.IS_UPDATING_PRODUCT:
            return {
                ...state,
                isUpdating: true
            }
        case AdminProductsTypes.UPDATED_PRODUCTS_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                updatedSuccess: action.payload,
                isHide: false
            }
        case AdminProductsTypes.UPDATED_PRODUCTS_ERROR:
            return {
                ...state,
                isUpdating: false,
                updatedError: action.payload,
                isHide: false
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