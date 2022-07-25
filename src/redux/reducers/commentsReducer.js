import * as CommentsTypes from '../types/CommentsTypes'

let initialState = {
    loading: false,
    comments: [],
    message: {},
    isCommentSending: false
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CommentsTypes.LOADING:
            return {
                ...state,
                loading: true
            }
        case CommentsTypes.GET_COMMENTS:
            return {
                ...state,
                loading: false,
                comments: action.payload
            }
        case CommentsTypes.IS_SENDING:
            return {
                ...state,
                isCommentSending: true
            }
        case CommentsTypes.SEND_COMMENT:
            const newComment = action.comment
            return {
                ...state,
                isCommentSending: false,
                message: action.payload,
                comments: [...state.comments, newComment]
            }
        default:
            return state
    }
}