import * as AdminUsersTypes from '../../types/AdminUsersTypes'

let initialState = {
    deleteSuccess: {},
    deleteError: {},
}

export const adminDeleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminUsersTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteSuccess: action.payload.data
            }
        case AdminUsersTypes.DELETE_USER_ERROR:
            return {
                ...state,
                deleteError: action.error
            }
        default:
            return state
    }
}