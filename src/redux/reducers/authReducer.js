import * as AuthUserTypes from '../types/AuthUserTypes'

let initialState = {
    authResponse: '',
    emailError: '',
    isAuthLoading: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthUserTypes.RESTART_AUTH_RESPONSE:
            return {
                ...state,
                authResponse: ''
            }
        case AuthUserTypes.LOADING:
            return {
                ...state,
                isAuthLoading: true
            }
        case AuthUserTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload,
            }
        case AuthUserTypes.SIGNUP_ERROR:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        case AuthUserTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        case AuthUserTypes.LOGIN_ERROR:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.res.errors,
            }
        case AuthUserTypes.EMAIL_IS_NOT_EXIST:
            return  {
                ...state,
                isAuthLoading: false,
                emailError: action.res,
            }
        case AuthUserTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        case AuthUserTypes.LOGOUT_ERROR:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        default:
            return state
    }
}