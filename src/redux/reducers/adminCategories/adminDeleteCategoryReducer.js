import * as AdminCategoriesTypes from '../../types/AdminCategoriesTypes'

let initialState = {
    deleteSuccess: {},
    isShow: null
}

export const adminDeleteCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminCategoriesTypes.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                deleteSuccess: action.payload,
                isShow: true
            }
        case AdminCategoriesTypes.IS_HIDE_NOTIFICATION:
            return {
                ...state,
                isShow: false
            }
        default:
            return state
    }
}