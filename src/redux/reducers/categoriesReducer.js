import * as CategoriesTypes from '../types/CategoriesTypes'
import * as AdminCategoriesTypes from '../types/AdminCategoriesTypes'


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
        case AdminCategoriesTypes.IS_HIDE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => {
                    return category.id !== action.payload
                })
            }
        default:
            return state
    }
}