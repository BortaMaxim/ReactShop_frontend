import * as AdminCategoriesTypes from '../../types/AdminCategoriesTypes'

let initialState = {
    download: false,
    category: {}
}

export const adminViewCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminCategoriesTypes.IS_DOWNLOAD_CATEGORY:
            return {
                ...state,
                download: true
            }
        case AdminCategoriesTypes.VIEW_CATEGORY_SUCCESS:
            return {
                ...state,
                download: false,
                category: action.payload.data
            }
        case AdminCategoriesTypes.VIEW_CATEGORY_ERROR:
            return {
                ...state,
                download: false,
                category: action.error
            }
        default:
            return state
    }
}