import * as ActionTypes from '../types/AuthUserTypes'

let initialState = {
    authResponse: '',
    emailError: '',
    isAuthLoading: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.RESTART_AUTH_RESPONSE:
            return {
                ...state,
                authResponse: ''
            }
        case ActionTypes.LOADING:
            return {
                ...state,
                isAuthLoading: true
            }
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload,
            }
        case ActionTypes.SIGNUP_ERROR:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.res.errors,
            }
        case ActionTypes.EMAIL_IS_NOT_EXIST:
            return  {
                ...state,
                isAuthLoading: false,
                emailError: action.res,
            }
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        case ActionTypes.LOGOUT_ERROR:
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        default:
            return state
    }
}