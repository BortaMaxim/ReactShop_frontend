import * as ActionTypes from '../types/AuthUserTypes'

let initialState = {
    authResponse: '',
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
            debugger
            return {
                ...state,
                isAuthLoading: false,
                authResponse: action.payload
            }
        case ActionTypes.SIGNUP_ERROR:
            debugger
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
                authResponse: action.payload
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
        case ActionTypes.CODE_ERROR:
            debugger
            return {
                ...state,
                isAuthLoading: false,
                authResponse: "There seems to be a problem, please refresh your browser",
            }
        default:
            return state
    }
}