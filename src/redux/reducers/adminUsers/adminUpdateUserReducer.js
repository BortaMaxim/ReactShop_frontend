import * as AdminUsersTypes from '../../types/AdminUsersTypes'

let initialState = {
    updatedResponse: {},
    isUpdating: false,
    errorResponse: {}
}

export const adminUpdateUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminUsersTypes.IS_UPDATING_USER:
            return {
                ...state,
                isUpdating: true
            }
        case AdminUsersTypes.UPDATED_USER_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                updatedResponse: action.payload.data
            }
        case AdminUsersTypes.UPDATED_USER_ERROR:
            return {
                ...state,
                isUpdating: false,
                errorResponse: action.error.response
            }
        default:
            return state
    }
}