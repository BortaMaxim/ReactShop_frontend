import * as CommentsTypes from '../types/CommentsTypes'
import axios from 'axios'
import {postOptions, BASE_URL, URL} from '../utils/options'


export const SentCommentAction = (formData, id, token) => async (dispatch) => {
        dispatch({type: CommentsTypes.IS_SENDING})
    await axios.post(`${BASE_URL}/comments/${id}`, formData, postOptions(token)).then(res => {
        dispatch({
            type: CommentsTypes.SEND_COMMENT,
            payload: res.data,
            comment: res.data.comment
        })
    })
}

export const GetCommentsAction = (id) => async (dispatch) => {
    dispatch({type: CommentsTypes.LOADING})
    await axios.get(`${URL}/comments/${id}`).then(res => {
        dispatch({type: CommentsTypes.GET_COMMENTS, payload: res.data.data})
    })
}