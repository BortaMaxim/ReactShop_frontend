import * as AdminUsersTypes from '../../types/AdminUsersTypes'

let initialState = {
    isEditFetching: false,
    editResponse: {}
}

export const adminEditUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminUsersTypes.IS_USER_FETCHING:
            return {
                ...state,
                isEditFetching: true
            }
        case AdminUsersTypes.GET_USER_SUCCESS:
            return {
                ...state,
                isEditFetching: false,
                editResponse: action.payload
            }
        case AdminUsersTypes.GET_USER_ERROR:
            return {
                ...state,
                isEditFetching: false,
                editResponse: action.error
            }
        default:
            return state
    }
}