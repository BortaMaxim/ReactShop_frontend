import * as CategoriesTypes from '../types/CategoriesTypes'


const initialState = {
    categories: [],
    isCatLoading: false,
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CategoriesTypes.IS_LOAD_CATEGORIES:
            return {
                ...state,
                isCatLoading: true
            }
        case CategoriesTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isCatLoading: false,
                categories: action.payload
            }
        default:
            return state
    }
}