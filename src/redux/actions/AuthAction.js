import * as ActionTypes from '../types/AuthUserTypes'
import axios from 'axios'
import {AuthServices} from "../../services/AuthServices";

let authServices = new AuthServices()

export const RegisterAction = (credentials) => async (dispatch) => {
    dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE})
    dispatch({type: ActionTypes.LOADING})

    await authServices.registerUserService(credentials).then(res => {
        if (res.hasOwnProperty('success') && res.success === true) {
            dispatch({type: ActionTypes.SIGNUP_SUCCESS, payload: res})
        }else if (res.hasOwnProperty('errors') && res.errors !== {}) {
            dispatch({type: ActionTypes.SIGNUP_ERROR, payload: res.errors})
        }
    }).catch(error => {
        dispatch({type: ActionTypes.CODE_ERROR, error})
    })
}

export const LoginAction = (credentials) => async (dispatch) => {
    dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE})
    dispatch({type: ActionTypes.LOADING})
    await authServices.loginUserService(credentials).then(res => {
        if (res.hasOwnProperty('success') && res.success === true) {
            dispatch({type: ActionTypes.LOGIN_SUCCESS, payload: res})
        } else if (res.hasOwnProperty('success') && res.success === false) {
            dispatch({type: ActionTypes.LOGIN_ERROR, payload: res})
        }
    }).catch(error => {
        dispatch({type: ActionTypes.CODE_ERROR, error})
    })
}

export const LogoutAction = () => async (dispatch) => {
    dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE})
    await authServices.logoutUserService().then(res => {
        if (res.hasOwnProperty('success') && res.success === true) {
            dispatch({type: ActionTypes.LOGOUT_SUCCESS, payload: res})
        } else if (res.hasOwnProperty('success') && res.success === false) {
            dispatch({type: ActionTypes.LOGOUT_ERROR, payload: res})
        }
    }).catch(error => {
        dispatch({type: ActionTypes.CODE_ERROR, error})
    })
}