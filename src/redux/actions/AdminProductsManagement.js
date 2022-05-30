import * as AdminProductsTypes from '../types/AdminProductsTypes'
import axios from 'axios'
import {BASE_URL, getOptions, postOptions} from "../utils/options";

export const AdminProductsFetchProductsAction = () => async (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_LOAD_PRODUCTS})
    await axios.get(`${BASE_URL}/get-all-products`, getOptions).then(res => {
        dispatch({type: AdminProductsTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data})
    }).catch(error => {
        dispatch({type: AdminProductsTypes.FETCH_PRODUCTS_ERROR, error})
    })
}

export const AdminFetchOneProductAction = (id) => async (dispatch) => {
    await axios.get(`${BASE_URL}/get-one-product/${id}`, getOptions).then(res => {
        dispatch({type: AdminProductsTypes.FETCH_ONE_PRODUCTS_SUCCESS, payload: res.data})
    })
}

export const AdminCreateProductAction = (formData, history) => async (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_CREATE_PRODUCT})
    await axios.post(`${BASE_URL}/get-products/create`, formData, postOptions).then(res => {
        dispatch({type: AdminProductsTypes.CREATED_PRODUCT_SUCCESS, payload: res.data})
        history.push('/user/admin/product/create')
    }).catch(error => {
        dispatch({type: AdminProductsTypes.CREATED_PRODUCT_ERROR, payload: error.response})
    })
}

export const AdminUpdateProductAction = (formData, id, history) => async (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_UPDATING_PRODUCT})
    await axios.post(`${BASE_URL}/get-products/update/${id}`, formData, postOptions).then(res => {
        dispatch({type: AdminProductsTypes.UPDATED_PRODUCTS_SUCCESS, payload: res.data})
        history.push(`/user/admin/product/edit/${id}`)
    }).catch(error => {
        dispatch({type: AdminProductsTypes.UPDATED_PRODUCTS_ERROR, payload: error.response})
    })
}

export const AdminDeleteProductAction = (id) => async (dispatch) => {
    await axios.delete(`${BASE_URL}/get-products/delete/${id}`, getOptions).then(res => {
        dispatch({type: AdminProductsTypes.DELETE_PRODUCT_SUCCESS, payload: res.data})
    }).catch(error => {
        dispatch({type: AdminProductsTypes.DELETE_PRODUCT_ERROR, payload: error})
    })
}

export const AdminHideProductAction = (payload) => (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_HIDE_PRODUCT, payload})
}