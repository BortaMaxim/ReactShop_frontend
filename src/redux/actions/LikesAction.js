import * as LikesTypes from '../types/LikesTypes'
import axios from 'axios'
import {AUTH_BASE_URL, URL, postOptions} from "../utils/options";

export const SetLikeAction = (id, token) => async (dispatch) => {
    dispatch({type: LikesTypes.IS_LIKE})
    await axios.post(`${AUTH_BASE_URL}/product/${id}/like`, null, postOptions(token)).then(res => {
        if (res.hasOwnProperty('success') && res.data.success === true) {
            dispatch({type: LikesTypes.LIKE_SUCCESS, payload: res.data})
        }else {
            dispatch({type: LikesTypes.WAS_LIKED, payload: res.data})
        }
    })
}

export const SetDislikeAction = (id, token) => async (dispatch) => {
    dispatch({type: LikesTypes.IS_DISLIKE})
    await axios.post(`${AUTH_BASE_URL}/product/${id}/dislike`, null, postOptions(token)).then(res => {
        if (res.hasOwnProperty('success') && res.data.success === true) {
            dispatch({type: LikesTypes.DISLIKE_SUCCESS, payload: res.data})
        }else {
            dispatch({type: LikesTypes.WAS_DISLIKED, payload: res.data})
        }

    })
}

export const GetLikesAction = (id) => async (dispatch) => {
    dispatch({type: LikesTypes.DOWNLOAD})
    await axios.get(`${URL}/product/${id}/likes`).then(res => {
        dispatch({type: LikesTypes.GET_LIKES, payload: res.data})
    })
}

export const GetDislikesAction = (id) => async (dispatch) => {
    dispatch({type: LikesTypes.DOWNLOAD})
    await axios.get(`${URL}/product/${id}/dislikes`).then(res => {
        dispatch({type: LikesTypes.GET_DISLIKES, payload: res.data})
    })
}