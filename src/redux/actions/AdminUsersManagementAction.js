import * as AdminUsersTypes from '../types/AdminUsersTypes'
import axios from 'axios'
import {AdminUsersServices} from "../../services/AdminUsersServices";
import {AUTH_BASE_URL, getOptions, postWithUploadOptions} from "../utils/options";

let adminUserServices = new AdminUsersServices()

export const GetUsersAction = () => async (dispatch) => {
    dispatch({type: AdminUsersTypes.IS_USERS_FETCHING})
    await adminUserServices.getUsers().then(res => {
        dispatch({type: AdminUsersTypes.GET_USERS_SUCCESS, payload: res})
    }).catch(error => {
        dispatch({type: AdminUsersTypes.GET_USERS_ERROR, error})
    })
}

export const GetOneUserAction = (id) => async (dispatch) => {
    dispatch({type: AdminUsersTypes.IS_USER_FETCHING})
    await adminUserServices.getOneUser(id).then(res => {
        dispatch({type: AdminUsersTypes.GET_USER_SUCCESS, payload: res})
    }).catch(error => {
        dispatch({type: AdminUsersTypes.GET_USER_ERROR, error})
    })
}

export const CreateUserAction = (formData, token) => async (dispatch) => {
    dispatch({type: AdminUsersTypes.IS_CREATING_USER})
    await axios.post(`${AUTH_BASE_URL}/create-users`, formData, postWithUploadOptions(token)).then(res => {
        dispatch({type: AdminUsersTypes.USER_CREATED_SUCCESS, payload: res})
    }).catch(error => {
        dispatch({type: AdminUsersTypes.USER_CREATED_ERROR, error})
    })
}

export const UpdateUserAction = (formData, id, token) => async (dispatch) => {
    dispatch({type: AdminUsersTypes.IS_UPDATING_USER})
    await axios.post(`${AUTH_BASE_URL}/update-users/${id}`, formData, postWithUploadOptions(token)).then(res => {
        dispatch({type: AdminUsersTypes.UPDATED_USER_SUCCESS, payload: res})
    }).catch(error => {
        dispatch({type: AdminUsersTypes.UPDATED_USER_ERROR, error})
    })
}

export const DeleteUserAction = (id, token) => async (dispatch) => {
    axios.delete(`${AUTH_BASE_URL}/delete-users/${id}`, getOptions(token)).then(res => {
        dispatch({type: AdminUsersTypes.DELETE_USER_SUCCESS, payload: res})
    }).catch(error => {
        dispatch({type: AdminUsersTypes.DELETE_USER_ERROR, error})
    })
}

export const HideNotificationAction = () => (dispatch) => {
    dispatch({
        type: AdminUsersTypes.IS_HIDE_NOTIFICATION
    })
}

export const HideUserAction = (payload) => (dispatch) => {
    dispatch({
        type: AdminUsersTypes.IS_HIDE_USER,
        payload
    })
}

export const IsHideAction = () => (dispatch) => {
    dispatch({type: AdminUsersTypes.IS_HIDE_AFTER_CREATE})
}