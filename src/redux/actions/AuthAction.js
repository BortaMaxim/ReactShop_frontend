import * as ActionTypes from '../types/AuthUserTypes'
import {AuthServices} from "../../services/AuthServices";

let authServices = new AuthServices()

export const RegisterAction = (credentials, history) => async (dispatch) => {
    dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE})
    dispatch({type: ActionTypes.LOADING})

    await authServices.registerUserService(credentials).then(res => {
        if (res.hasOwnProperty('success') && res.success === true) {
            dispatch({type: ActionTypes.SIGNUP_SUCCESS, payload: res})
            setTimeout(() => {
                history.push('/user/login')
            }, 1000)
        }else if (res.hasOwnProperty('errors') && res.errors !== {}) {
            dispatch({type: ActionTypes.SIGNUP_ERROR, payload: res.errors})
        }
    })
}

export const LoginAction = (credentials, history) => async (dispatch) => {
    dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE})
    dispatch({type: ActionTypes.LOADING})
    await authServices.loginUserService(credentials).then(res => {
        if (res.hasOwnProperty('success') && res.success === true) {
            localStorage.setItem('user-token', res.token)
            localStorage.setItem('user-role', res.data.roles)
            dispatch({type: ActionTypes.LOGIN_SUCCESS, payload: res})
            history.push('/user')
        } else if (res.hasOwnProperty('errors') && res.errors !== {}) {
            dispatch({type: ActionTypes.LOGIN_ERROR, res})
        } else if (res.success ===false) {
            dispatch({type: ActionTypes.EMAIL_IS_NOT_EXIST, res})
        }
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
    })
}