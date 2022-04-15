import * as CategoriesTypes from '../types/CategoriesTypes'


const initialState = {
    categories: [],
    category: {},
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
        case CategoriesTypes.FETCH_CATEGORY_GET_ONE:
            return {
                ...state,
                isCatLoading: false,
                category: action.payload
            }
        default:
            return state
    }
}