import * as AdminUsersTypes from '../../types/AdminUsersTypes'

let initialState = {
    isCreating: false,
    createdResponse: {},
    isHide: null
}

export const adminCreateUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminUsersTypes.IS_CREATING_USER:
            return {
                ...state,
                isCreating: true
            }
        case AdminUsersTypes.USER_CREATED_SUCCESS:
            return {
                ...state,
                isCreating: false,
                isHide: false,
                createdResponse: action.payload.data
            }
        case AdminUsersTypes.USER_CREATED_ERROR:
            return {
                ...state,
                isCreating: false,
                isHide: false,
                createdResponse: action.error.response
            }
        case AdminUsersTypes.IS_HIDE_AFTER_CREATE:
            return {
                ...state,
                isHide: true,
            }
        default:
            return state
    }
}