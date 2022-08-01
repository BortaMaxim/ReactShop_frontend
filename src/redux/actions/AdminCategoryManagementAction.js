import * as AdminCategoriesTypes from '../types/AdminCategoriesTypes'
import axios from 'axios'
import {AUTH_BASE_URL, getOptions, postOptions} from "../utils/options";

export const IsHideNotificationsAction = () => (dispatch) => {
    dispatch({type: AdminCategoriesTypes.IS_HIDE_NOTIFICATION})
}

export const CreateCategoryAction = (formData, history, token) => async (dispatch) => {
    dispatch({type: AdminCategoriesTypes.DOWNLOAD})
    await axios.post(`${AUTH_BASE_URL}/categories/create`, formData, postOptions(token)).then(res => {
        dispatch({type: AdminCategoriesTypes.CREATED_CATEGORY_SUCCESS, payload: res})
        history.push('/user/admin/category')
    }).catch(error => {
        dispatch({type: AdminCategoriesTypes.CREATED_CATEGORY_ERROR, error})
    })
}

export const ViewCategoryAction = (id, token) => async (dispatch) => {
    dispatch({type: AdminCategoriesTypes.IS_DOWNLOAD_CATEGORY})
    await axios.get(`${AUTH_BASE_URL}/categories/view-one/${id}`, getOptions(token)).then(res => {
        dispatch({type: AdminCategoriesTypes.VIEW_CATEGORY_SUCCESS, payload: res})
    }).catch(error => {
        dispatch({type: AdminCategoriesTypes.VIEW_CATEGORY_ERROR, error})
    })
}

export const UpdateCategoryAction = (formData, id, token) => async (dispatch) => {
    dispatch({type: AdminCategoriesTypes.IS_UPDATING_CATEGORY})
    await axios.post(`${AUTH_BASE_URL}/categories/update/${id}`, formData, postOptions(token)).then(res => {
        dispatch({type: AdminCategoriesTypes.UPDATED_CATEGORY_SUCCESS, payload: res})
    }).catch(error => {
        dispatch({type: AdminCategoriesTypes.UPDATED_CATEGORY_ERROR, error})
    })
}

export const DeleteCategoryAction = (id, token) => async (dispatch) => {
    await axios.delete(`${AUTH_BASE_URL}/categories/delete/${id}`, getOptions(token)).then(res => {
        dispatch({type: AdminCategoriesTypes.DELETE_CATEGORY_SUCCESS, payload: res.data})
    })
}

export const HideCategoryAction = (payload) => (dispatch) => {
    dispatch({type: AdminCategoriesTypes.IS_HIDE_CATEGORY, payload})
}