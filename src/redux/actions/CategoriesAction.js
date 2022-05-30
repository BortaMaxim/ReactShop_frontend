import * as CategoriesTypes from '../types/CategoriesTypes'
import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

export const FetchCategories = () => async (dispatch) => {
    dispatch({type: CategoriesTypes.IS_LOAD_CATEGORIES})
    await axios.get(`${BASE_URL}/categories`).then(res => {
        dispatch({type: CategoriesTypes.GET_CATEGORIES_SUCCESS, payload: res.data})
    })
}

export const FetchCategoryGetOne = (id) => async (dispatch) => {
    dispatch({type: CategoriesTypes.IS_LOAD_CATEGORIES})
    await axios.get(`${BASE_URL}/categories/get-one/${id}`).then(res => {
        if (res.data.hasOwnProperty('success') && res.data.success === true) {
            dispatch({type: CategoriesTypes.FETCH_CATEGORY_GET_ONE, payload: res.data})
        }
    })
}
