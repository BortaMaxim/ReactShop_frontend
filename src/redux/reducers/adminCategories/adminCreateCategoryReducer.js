import * as AdminCategoriesTypes from '../../types/AdminCategoriesTypes'

let initialState = {
    isCreating: false,
    createdResponse: {},
    isHide: null
}

export const adminCreateCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminCategoriesTypes.DOWNLOAD:
            return {
                ...state,
                isCreating: true
            }
        case AdminCategoriesTypes.CREATED_CATEGORY_SUCCESS:
            return {
                ...state,
                isCreating: false,
                isHide: false,
                createdResponse: action.payload.data
            }
        case AdminCategoriesTypes.CREATED_CATEGORY_ERROR:

            return {
                ...state,
                isCreating: false,
                isHide: false,
                createdResponse: action.error.response
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