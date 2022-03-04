import * as ActionTypes from '../types/AuthUserTypes'
import {ProfileServices} from "../../services/ProfileServices";

let profileServices = new ProfileServices()


export const ViewProfileAction = () => async (dispatch) => {
    dispatch({type: ActionTypes.LOADING})
    await profileServices.loadProfile().then(res => {
        if (res.hasOwnProperty('success') && res.success === true) {
            dispatch({type: ActionTypes.LOAD_PROFILE_SUCCESS, payload: res})
        } else if(res.hasOwnProperty('success') && res.success === false) {
            dispatch({type: ActionTypes.LOAD_PROFILE_ERROR, payload: res})
        }
    }).catch(error => {
        dispatch({type: ActionTypes.CODE_ERROR, error})
    })
}