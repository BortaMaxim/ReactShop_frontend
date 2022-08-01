import * as AdminProductsTypes from '../types/AdminProductsTypes'
import axios from 'axios'
import {AUTH_BASE_URL, getOptions, postOptions} from "../utils/options";

export const AdminProductsFetchProductsAction = (token) => async (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_LOAD_PRODUCTS})
    await axios.get(`${AUTH_BASE_URL}/get-all-products`, getOptions(token)).then(res => {
        dispatch({type: AdminProductsTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data.data})
    }).catch(error => {
        dispatch({type: AdminProductsTypes.FETCH_PRODUCTS_ERROR, error})
    })
}

export const AdminFetchOneProductAction = (id, token) => async (dispatch) => {
    await axios.get(`${AUTH_BASE_URL}/get-one-product/${id}`, getOptions(token)).then(res => {
        dispatch({type: AdminProductsTypes.FETCH_ONE_PRODUCTS_SUCCESS, payload: res.data})
    })
}

export const AdminCreateProductAction = (formData, history, token) => async (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_CREATE_PRODUCT})
    await axios.post(`${AUTH_BASE_URL}/get-products/create`, formData, postOptions(token)).then(res => {
        dispatch({type: AdminProductsTypes.CREATED_PRODUCT_SUCCESS, payload: res.data})
        history.push('/user/admin/product/create')
    }).catch(error => {
        dispatch({type: AdminProductsTypes.CREATED_PRODUCT_ERROR, payload: error.response})
    })
}

export const AdminUpdateProductAction = (formData, id, history, token) => async (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_UPDATING_PRODUCT})
    await axios.post(`${AUTH_BASE_URL}/get-products/update/${id}`, formData, postOptions(token)).then(res => {
        dispatch({type: AdminProductsTypes.UPDATED_PRODUCTS_SUCCESS, payload: res.data})
        history.push(`/user/admin/product/edit/${id}`)
    }).catch(error => {
        dispatch({type: AdminProductsTypes.UPDATED_PRODUCTS_ERROR, payload: error.response})
    })
}

export const AdminDeleteProductAction = (id, token) => async (dispatch) => {
    await axios.delete(`${AUTH_BASE_URL}/get-products/delete/${id}`, getOptions(token)).then(res => {
        dispatch({type: AdminProductsTypes.DELETE_PRODUCT_SUCCESS, payload: res.data})
    }).catch(error => {
        dispatch({type: AdminProductsTypes.DELETE_PRODUCT_ERROR, payload: error})
    })
}

export const AdminHideProductAction = (payload) => (dispatch) => {
    dispatch({type: AdminProductsTypes.IS_HIDE_PRODUCT, payload})
}