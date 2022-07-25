import * as AuthUserTypes from '../types/AuthUserTypes'
import * as ProfileUserTypes from '../types/ProfileUserTypes'
import axios from 'axios'
import {ProfileServices} from "../../services/ProfileServices";
import {postWithUploadOptions} from '../utils/options'

let profileServices = new ProfileServices()
const BASE_URL = 'http://localhost:8000/api/auth'

export const ViewProfileAction = () => async (dispatch) => {
    dispatch({type: AuthUserTypes.LOADING})
    await profileServices.loadProfile().then(res => {
        if (res.hasOwnProperty('success') && res.success === true) {
            dispatch({type: ProfileUserTypes.LOAD_PROFILE_SUCCESS, payload: res})
        } else if (res.hasOwnProperty('success') && res.success === false) {
            dispatch({type: ProfileUserTypes.LOAD_PROFILE_ERROR, payload: res})
        }
    })
}

export const UpdateProfileAction = (credentials, history, token) => async (dispatch) => {
    dispatch({type: ProfileUserTypes.IS_UPDATING_USER_PROFILE})
    await axios.post(`${BASE_URL}/update-profile`, credentials, postWithUploadOptions(token)).then(res => {
        dispatch({type: ProfileUserTypes.UPDATED_USER_PROFILE_SUCCESS, payload: res})
        history.push('/user/profile')
    }).catch(error => {
        dispatch({type: ProfileUserTypes.UPDATED_USER_PROFILE_ERROR, payload: error.response})
    })
}