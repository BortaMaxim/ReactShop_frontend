import * as CategoriesTypes from '../types/CategoriesTypes'
import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

export const FetchCategories = () => async (dispatch) => {
    dispatch({type: CategoriesTypes.IS_LOAD_CATEGORIES})
    await axios.get(`${BASE_URL}/categories`).then(res => {
        dispatch({type: CategoriesTypes.GET_CATEGORIES_SUCCESS, payload: res})
    })
}
