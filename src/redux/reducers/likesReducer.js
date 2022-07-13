import * as LikesTypes from '../types/LikesTypes'

let initialState = {
    isLike: false,
    download: false,
    isDislike: false,
    likeResponse: {},
    dislikeResponse: {},
}

export const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LikesTypes.IS_LIKE:
            return {
                ...state,
                isLike: true,
            }
        case LikesTypes.DOWNLOAD:
            return {
                ...state,
                download: true,
            }
        case LikesTypes.IS_DISLIKE:
            return {
                ...state,
                isDislike: true
            }
        case LikesTypes.LIKE_SUCCESS:
            return {
                ...state,
                isLike: false,
                likeResponse: action.payload
            }
        case LikesTypes.DISLIKE_SUCCESS:
            return {
                ...state,
                isDislike: false,
                dislikeResponse: action.payload
            }
        case LikesTypes.WAS_DISLIKED:
            return {
                ...state,
                isDislike: false,
                dislikeResponse: action.payload
            }
        case LikesTypes.WAS_LIKED:
            return {
                ...state,
                isLike: false,
                likeResponse: action.payload
            }
        case LikesTypes.GET_LIKES:
            return {
                ...state,
                download: false,
                likeResponse: action.payload
            }
        case LikesTypes.GET_DISLIKES:
            return {
                ...state,
                download: false,
                dislikeResponse: action.payload
            }
        default:
            return state
    }
}