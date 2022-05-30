import * as AuthUserTypes from '../types/AuthUserTypes'
import * as ProfileUserTypes from '../types/ProfileUserTypes'

let initialState = {
    isProfileLoading: false,
    isUpdating: false,
    profileResponse: {},
    errorResponse: {}
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthUserTypes.LOADING:
            return {
                ...state,
                isProfileLoading: true
            }
        case ProfileUserTypes.LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                isProfileLoading: false,
                profileResponse: action.payload
            }
        case ProfileUserTypes.LOAD_PROFILE_ERROR:
            return {
                ...state,
                isProfileLoading: false,
                profileResponse: action.payload
            }
        case ProfileUserTypes.IS_UPDATING_USER_PROFILE:
            return {
                ...state,
                isUpdating: true
            }
        case ProfileUserTypes.UPDATED_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                profileResponse: action.payload
            }
        case ProfileUserTypes.UPDATED_USER_PROFILE_ERROR:
            return {
                ...state,
                isUpdating: false,
                errorResponse: action.payload
            }
        default:
            return state
    }
}