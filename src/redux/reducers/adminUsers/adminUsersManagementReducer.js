import * as AdminUsersTypes from '../../types/AdminUsersTypes'

let initialState = {
    isUsersFetching: false,
    allUsers: [],
    isShow: null
}

export const adminUsersManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdminUsersTypes.IS_USERS_FETCHING:
            return {
                ...state,
                isUsersFetching: true
            }
        case AdminUsersTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                allUsers: action.payload,
                isUsersFetching: false
            }
        case AdminUsersTypes.GET_USERS_ERROR:
            return {
                ...state,
                allUsers: action.error,
                isUsersFetching: false
            }
        case AdminUsersTypes.IS_HIDE_USER:
            return {
                ...state,
                isShow: false,
                allUsers: state.allUsers.filter(item => {
                    return item.id !== action.payload
                })
            }
        case AdminUsersTypes.IS_HIDE_NOTIFICATION:
            return {
                ...state,
                isShow: true
            }
        default:
            return state
    }
}