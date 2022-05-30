import * as AdminProductsTypes from '../../types/AdminProductsTypes'

let initialState = {
    isCreated: false,
    createdSuccess: {},
    createdError: {},
    isHide: null
}

export const adminProductsManagementCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminProductsTypes.IS_CREATE_PRODUCT:
            return {
                ...state,
                isCreated: true
            }
        case AdminProductsTypes.CREATED_PRODUCT_SUCCESS:
            return {
                ...state,
                isCreated: false,
                createdSuccess: action.payload,
                isHide: false
            }
        case AdminProductsTypes.CREATED_PRODUCT_ERROR:
            return {
                ...state,
                isCreated: false,
                createdError: action.payload,
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