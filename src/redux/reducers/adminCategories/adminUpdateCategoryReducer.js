import * as AdminCategoriesTypes from '../../types/AdminCategoriesTypes'


let initialState = {
    isUpdating: false,
    updatedResponse: {},
    updatedError: {},
    isHide: null
}

export const adminUpdateCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminCategoriesTypes.IS_UPDATING_CATEGORY:
            return {
                ...state,
                isUpdating: true
            }
        case AdminCategoriesTypes.UPDATED_CATEGORY_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                updatedResponse: action.payload.data,
                isHide: false
            }
        case AdminCategoriesTypes.UPDATED_CATEGORY_ERROR:
            return {
                ...state,
                isUpdating: false,
                updatedError: action.error.response,
                isHide: false
            }
        case AdminCategoriesTypes.IS_HIDE_NOTIFICATION:
            return {
                ...state,
                isHide: true
            }
        default:
            return state
    }
}