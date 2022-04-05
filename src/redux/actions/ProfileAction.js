import * as AuthUserTypes from '../types/AuthUserTypes'
import * as ProfileUserTypes from '../types/ProfileUserTypes'
import axios from 'axios'
import {ProfileServices} from "../../services/ProfileServices";

let profileServices = new ProfileServices()
const BASE_URL = 'http://localhost:8000/api/auth'
const token = localStorage.getItem('user-token')


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

export const UpdateProfileAction = (credentials, history) => async (dispatch) => {
    dispatch({type: ProfileUserTypes.IS_UPDATING_USER_PROFILE})
    await axios.post(`${BASE_URL}/update-profile`, credentials, {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    }).then(res => {
        dispatch({type: ProfileUserTypes.UPDATED_USER_PROFILE_SUCCESS, payload: res})
        history.push('/user')
    }).catch(error => {
        dispatch({type: ProfileUserTypes.UPDATED_USER_PROFILE_ERROR, payload: error})
    })
}