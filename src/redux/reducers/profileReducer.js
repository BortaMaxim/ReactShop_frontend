import * as ActionTypes from '../types/AuthUserTypes'

let initialState = {
    isProfileLoading: false,
    profileResponse: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOADING:
            return {
                ...state,
                isProfileLoading: true
            }
        case ActionTypes.LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                isProfileLoading: false,
                profileResponse: action.payload
            }
        case ActionTypes.LOAD_PROFILE_ERROR:
            return {
                ...state,
                isProfileLoading: false,
                profileResponse: action.payload
            }
        case ActionTypes.CODE_ERROR:
            return {
                ...state,
                isProfileLoading: false,
                profileResponse: action.error
            }
        default:
            return state
    }
}