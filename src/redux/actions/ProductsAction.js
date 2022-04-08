import axios from 'axios'
import * as ProductsTypes from '../types/ProductsTypes'

const BASE_URL = 'http://localhost:8000/api'

export const FetchProducts = (page) => async (dispatch) => {
    dispatch({type: ProductsTypes.IS_LOAD_PRODUCTS})
    await axios.get(`${BASE_URL}/products/limit/8?page=${page}`).then(res => {
        dispatch({type: ProductsTypes.LOAD_PRODUCTS_SUCCESS, payload: res})
    })
}
export const FetchOneProductAction = (id) => async (dispatch) => {
    dispatch({type: ProductsTypes.IS_LOAD_PRODUCTS})
    await axios.get(`${BASE_URL}/products/${id}/get-one`).then(res => {
        dispatch({type: ProductsTypes.GET_ONE_PRODUCT_SUCCESS, payload: res.data})
    }).catch(error => {
        dispatch({type: ProductsTypes.GET_ONE_PRODUCT_ERROR, error})
    })
}